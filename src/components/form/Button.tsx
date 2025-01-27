import React from 'react'

type ButtonProps = {
    caption: string;
    
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (props, ref) => {
    
    const { caption } = props;

    return (
        <div>
            <button
                className="cd-py-2 cd-ml-2 cd-text-white cd-bg-blue-500 cd-rounded-md hover:cd-bg-blue-700"
                type="submit"
                ref={ref}
            >
                {caption}
                
                </button>
        </div>
    );
});

export default Button;