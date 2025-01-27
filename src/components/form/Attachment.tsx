import React, { useState } from 'react';

const Attachment: React.FC = () => {
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
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="attachment-input"
            />
            {image && (
                <div className="attachment-preview">
                    <img src={image as string} alt="Preview" className="attachment-image" />
                </div>
            )}
        </div>
    );
};

export default Attachment;