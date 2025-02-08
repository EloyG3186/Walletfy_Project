import React, { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

interface AttachmentProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

const Attachment: React.FC<AttachmentProps> = ({ label, onChange, className }) => {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                // Generar un UUID para el archivo
                onChange({
                    ...e,
                    target: {
                        ...e.target,
                        value: reader.result as string, // Base 64 img
                    },
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file');
        }
    };

    return (
        <div className={`attachment-container ${className}`}>
            <label className="attachment-label cd-pt-2 cd-font-medium cd-block cd-text-lg cd-font-sans ">{label}</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="attachment-input cd-text-gray-900 dark:cd-text-gray-200 cd-font-sans cd-mt-1 cd-block cd-w-full cd-px-3 cd-py-2 dark:cd-bg-zinc-700 cd-border cd-border-gray-300 dark:cd-border-gray-500 cd-rounded-md cd-shadow-sm focus:cd-outline-none focus:cd-ring-indigo"
            />

            {image && (
                <div className="image-preview">
                    <img src={image as string} alt="Preview" className="cd-mt-2 cd-max-w-full cd-h-auto" />
                </div>
            )}

        </div>
    );
};

export default Attachment;