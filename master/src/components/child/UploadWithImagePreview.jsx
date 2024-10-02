import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const UploadWithImagePreview = () => {
    return (
        <div className="col-md-6">
            <div className="card h-100 p-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                    <h6 className="text-lg fw-semibold mb-0">Upload With image preview</h6>
                </div>
                <div className="card-body p-24">
                    <div className="upload-image-wrapper d-flex align-items-center gap-3 flex-wrap">
                        <div className="uploaded-imgs-container d-flex gap-3 flex-wrap" />
                        <label
                            className="upload-file-multiple h-120-px w-120-px border input-form-light radius-8 overflow-hidden border-dashed bg-neutral-50 bg-hover-neutral-200 d-flex align-items-center flex-column justify-content-center gap-1"
                            htmlFor="upload-file-multiple"
                        >
                            <Icon
                                icon="solar:camera-outline"
                                className="text-xl text-secondary-light"
                            />
                            <span className="fw-semibold text-secondary-light">Upload</span>
                            <input
                                id="upload-file-multiple"
                                type="file"
                                hidden=""
                                multiple=""
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadWithImagePreview