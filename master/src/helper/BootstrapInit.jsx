import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect } from 'react';
const BootstrapInit = () => {
    useEffect(() => {
        // Initialize all tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => {
            return new Tooltip(tooltipTriggerEl); // Use imported Tooltip directly
        });

        // Cleanup tooltips when component unmounts
        return () => {
            tooltipList.forEach(tooltip => tooltip.dispose());
        };
    }, []);
    return (
        null
    )
}

export default BootstrapInit