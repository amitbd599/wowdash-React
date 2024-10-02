import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const UploadWithImagePreviewList = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Upload With image preview</h6>
                </div>
                <div className="card-body p-24">
                    <label
                        htmlFor="file-upload-name"
                        className="mb-16 border border-neutral-600 fw-medium text-secondary-light px-16 py-12 radius-12 d-inline-flex align-items-center gap-2 bg-hover-neutral-200"
                    >
                        <Icon icon="solar:upload-linear" className="text-xl" />
                        Click to upload
                        <input
                            type="file"
                            className="form-control w-auto mt-24 form-control-lg"
                            id="file-upload-name"
                            multiple=""
                            hidden=""
                        />
                    </label>
                    <ul id="uploaded-img-names" className="" />
                </div>
            </div>
        </div>
    )
}

export default UploadWithImagePreviewList