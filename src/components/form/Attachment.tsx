import React, { useState } from 'react';

const Attachment: React.FC<{ label: string }> = ({ label }) => {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file');
        }
    };

    return (
        <div className="attachment-container">
            <label className='attachment-label cd-font-medium cd-font-sans'>
                {label}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className=" cd-mt-1 cd-flex cd-justify-start cd-w-full dark:cd-bg-zinc-700 cd-px-40 cd-py-3 cd-border cd-border-gray-300 dark:cd-border-gray-100 cd-rounded-md cd-shadow-sm focus:cd-outline-none fous:cd-ring-indigo"
                />
            </label>

            {image && (
                <div className="attachment-preview">
                    <img src={image as string} alt="Preview" className="attachment-image" />
                </div>
            )}
        </div>
    );
};

export default Attachment;