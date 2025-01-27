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
                className="cd-font-sans cd-font-medium cd-py-3 cd-px-8 cd-ml-5 cd-text-white cd-bg-violet-500 cd-rounded-lg hover:cd-bg-violet-700 cd-text-lg cd-shadow-lg"
                type="submit" 
                ref={ref}
            >
                {caption}
                
                </button>
        </div>
    );
});

export default Button;