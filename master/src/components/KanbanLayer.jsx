// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { v4 as uuidv4 } from 'uuid';
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
import SortableTask from '../helper/SortableTask';
import { Link } from 'react-router-dom';

function App() {
    // State for tasks
    const [tasks, setTasks] = useState([
        // Initial tasks
        {
            id: 'kanban-1',
            title: 'Creating a new website',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
            tag: 'UI Design',
            date: '25 Aug 2024',
            image: 'assets/images/kanban/kanban-1.png',
            status: 'In Progress',
        },
        {
            id: 'kanban-2',
            title: 'Designing the user interface',
            description:
                'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore',
            tag: 'UX Design',
            date: '26 Aug 2024',
            image: 'assets/images/kanban/kanban-2.png',
            status: 'In Progress',
        },
        // Add more initial tasks as needed
    ]);

    // State for modal visibility
    const [showModal, setShowModal] = useState(false);

    // State for current task (for editing)
    const [currentTask, setCurrentTask] = useState(null);

    // State for task form inputs
    const [formData, setFormData] = useState({
        title: '',
        tag: '',
        date: '',
        description: '',
        image: null,
        imagePreview: '',
    });

    // State to track which column is adding a task
    const [currentStatus, setCurrentStatus] = useState('In Progress');

    // Reference to the modal
    const modalRef = useRef(null);
    const modalInstanceRef = useRef(null); // To store the Bootstrap modal instance

    // Initialize Bootstrap modal
    useEffect(() => {
        const bootstrap = require('bootstrap/dist/js/bootstrap.bundle.min.js');

        if (modalRef.current) {
            modalInstanceRef.current = new bootstrap.Modal(modalRef.current, {
                backdrop: 'static',
            });

            // Event listener for when the modal is hidden
            modalRef.current.addEventListener('hidden.bs.modal', () => {
                setShowModal(false);
                setCurrentTask(null);
                setFormData({
                    title: '',
                    tag: '',
                    date: '',
                    description: '',
                    image: null,
                    imagePreview: '',
                });
            });
        }

        // Cleanup on unmount
        return () => {
            if (modalRef.current) {
                modalRef.current.removeEventListener('hidden.bs.modal', () => { });
                modalInstanceRef.current.dispose();
            }
        };
    }, []);

    // Handle showing or hiding the modal based on showModal state
    useEffect(() => {
        if (modalInstanceRef.current) {
            if (showModal) {
                modalInstanceRef.current.show();
            } else {
                modalInstanceRef.current.hide();
            }
        }
    }, [showModal]);

    // Handle opening the modal for adding a task
    const handleAddTask = (status) => {
        setCurrentStatus(status);
        setCurrentTask(null);
        setFormData({
            title: '',
            tag: '',
            date: '',
            description: '',
            image: null,
            imagePreview: '',
        });
        setShowModal(true);
    };

    // Handle opening the modal for editing a task
    const handleEditTask = (task) => {
        setCurrentTask(task);
        setFormData({
            title: task.title,
            tag: task.tag,
            date: task.date,
            description: task.description,
            image: null,
            imagePreview: task.image || '',
        });
        setShowModal(true);
    };

    // Handle deleting a task
    const handleDeleteTask = (id) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    };

    // Handle closing the modal
    const handleCloseModal = () => {
        setShowModal(false);
        // The rest of the state reset is handled in the 'hidden.bs.modal' event
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle image upload and preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: file });
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    imagePreview: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        } else {
            setFormData({ ...formData, image: null, imagePreview: '' });
        }
    };

    // Handle saving (adding or updating) a task
    const handleSaveTask = (e) => {
        e.preventDefault();
        const { title, tag, date, description, imagePreview } = formData;

        if (!title || !description) {
            alert('Title and Description cannot be empty');
            return;
        }

        if (currentTask) {
            // Update existing task
            const updatedTasks = tasks.map((task) =>
                task.id === currentTask.id
                    ? { ...task, title, tag, date, description, image: imagePreview }
                    : task
            );
            setTasks(updatedTasks);
        } else {
            // Add new task
            const newTask = {
                id: uuidv4(),
                title,
                tag,
                date,
                description,
                image: imagePreview,
                status: currentStatus,
            };
            setTasks([newTask, ...tasks]);
        }

        handleCloseModal();
    };

    // Sensors for DnD Kit
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    // Handle drag end
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const activeTask = tasks.find((task) => task.id === active.id);
            const overTask = tasks.find((task) => task.id === over?.id);

            if (activeTask && overTask) {
                // If dragging within the same column
                if (activeTask.status === overTask.status) {
                    const columnTasks = tasks
                        .filter((task) => task.status === activeTask.status)
                        .sort((a, b) => a.title.localeCompare(b.title)); // Or any other sorting logic

                    const oldIndex = columnTasks.findIndex((task) => task.id === active.id);
                    const newIndex = columnTasks.findIndex((task) => task.id === over.id);

                    const reorderedTasks = arrayMove(columnTasks, oldIndex, newIndex);

                    const newTasks = [
                        ...tasks.filter((task) => task.status !== activeTask.status),
                        ...reorderedTasks,
                    ];

                    setTasks(newTasks);
                } else {
                    // If dragging to a different column
                    const updatedTasks = tasks.map((task) => {
                        if (task.id === active.id) {
                            return { ...task, status: overTask.status };
                        }
                        return task;
                    });

                    setTasks(updatedTasks);
                }
            }
        }
    };

    return (
        <div className="container-fluid p-4">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <div className="kanban-wrapper">
                    <div className="d-flex align-items-start gap-24" id="sortable-wrapper">
                        {/* Kanban Columns */}
                        {['In Progress', 'Pending', 'Done'].map((status, index) => (
                            <div key={index} className="w-25 kanban-item radius-12">
                                <div className="card p-0 radius-12 overflow-hidden shadow-none">
                                    <div className="card-body p-0 pb-24">
                                        {/* Header */}
                                        <div className="d-flex align-items-center gap-2 justify-content-between ps-24 pt-24 pe-24">
                                            <h6 className="text-lg fw-semibold mb-0">{status}</h6>
                                            <div className="d-flex align-items-center gap-3 justify-content-between mb-0">
                                                <button
                                                    type="button"
                                                    className="text-2xl hover-text-primary add-task-button"
                                                    onClick={() => handleAddTask(status)}
                                                >
                                                    <Icon icon="ph:plus-circle" className="icon" />
                                                </button>
                                                <div className="dropdown">
                                                    <button
                                                        type="button"
                                                        className="btn"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <Icon icon="entypo:dots-three-vertical" className="text-xl" />
                                                    </button>
                                                    <ul className="dropdown-menu p-12 border bg-base shadow">
                                                        <li>
                                                            <Link
                                                                className="duplicate-button dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2"
                                                                to="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    alert('Duplicate functionality not implemented');
                                                                }}
                                                            >
                                                                <Icon icon="humbleicons:duplicate" className="text-xl" />
                                                                Duplicate
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="delete-button dropdown-item px-16 py-8 rounded text-secondary-light bg-hover-neutral-200 text-hover-neutral-900 d-flex align-items-center gap-2"
                                                                to="#"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    alert('Delete column functionality not implemented');
                                                                }}
                                                            >
                                                                <Icon icon="mingcute:delete-2-line" className="text-xl" />
                                                                Delete
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Task Cards */}
                                        <SortableContext
                                            items={tasks
                                                .filter((task) => task.status === status)
                                                .map((task) => task.id)}
                                            strategy={rectSortingStrategy}
                                        >
                                            <div className="connectedSortable ps-24 pt-24 pe-24" id={`sortable${index + 1}`}>
                                                {/* Tasks */}
                                                {tasks
                                                    .filter((task) => task.status === status)
                                                    .map((task) => (
                                                        <SortableTask
                                                            key={task.id}
                                                            id={task.id}
                                                            task={task}
                                                            onEdit={() => handleEditTask(task)}
                                                            onDelete={() => handleDeleteTask(task.id)}
                                                        />
                                                    ))}
                                            </div>
                                        </SortableContext>
                                        {/* Add Task Button */}
                                        <button
                                            type="button"
                                            className="d-flex align-items-center gap-2 fw-medium w-100 text-primary-600 justify-content-center text-hover-primary-800 add-task-button"
                                            onClick={() => handleAddTask(status)}
                                        >
                                            <Icon icon="ph:plus-circle" className="icon text-xl" />
                                            Add Task
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add Kanban Column (Optional) */}
                        <div className="w-25 kanban-item radius-12 overflow-hidden">
                            <div className="card p-0 radius-12 overflow-hidden shadow-none">
                                <div className="card-body p-24">
                                    <button
                                        type="button"
                                        className="add-kanban d-flex align-items-center gap-2 fw-medium w-100 text-primary-600 justify-content-center text-hover-primary-800 line-height-1"
                                        onClick={() =>
                                            alert('Add Kanban Column functionality not implemented')
                                        }
                                    >
                                        <Icon icon="ph:plus-circle" className="icon text-xl d-flex" />
                                        Add Column
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add/Edit Task Modal */}
                <div
                    className="modal fade"
                    id="addTaskModal"
                    tabIndex="-1"
                    aria-labelledby="addTaskModalLabel"
                    aria-hidden="true"
                    ref={modalRef}
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <form onSubmit={handleSaveTask}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="addTaskModalLabel">
                                        {currentTask ? 'Edit Task' : 'Add New Task'}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={handleCloseModal}
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    {/* Hidden Edit ID (Not needed in React, handled via state) */}
                                    {/* <input type="hidden" id="editTaskId" value=""> */}
                                    <div className="mb-3">
                                        <label htmlFor="taskTitle" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Event Title"
                                            id="taskTitle"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="taskTag" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Tag
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter tag"
                                            id="taskTag"
                                            name="tag"
                                            value={formData.tag}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="startDate" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="startDate"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="taskDescription"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="taskDescription"
                                            rows="3"
                                            placeholder="Write some text"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="taskImage"
                                            className="form-label fw-semibold text-primary-light text-sm mb-8"
                                        >
                                            Attachments <span className="text-sm">(Jpg, Png format)</span>
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="taskImage"
                                            name="image"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                        />
                                        {formData.imagePreview && (
                                            <img
                                                id="taskImagePreview"
                                                src={formData.imagePreview}
                                                alt="Image Preview"
                                                className="mt-3 w-100 h-auto object-fit-cover"
                                                style={{ display: 'block', maxHeight: '350px' }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="modal-footer justify-content-center gap-3">
                                    <button
                                        type="button"
                                        className="btn border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-50 py-11 radius-8"
                                        onClick={handleCloseModal}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="btn btn-primary border border-primary-600 text-md px-28 py-12 radius-8"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </DndContext>
        </div>
    );
}

export default App;
