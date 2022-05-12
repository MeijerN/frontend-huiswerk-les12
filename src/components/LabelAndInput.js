import React from 'react';


function LabelAndInput({id, text, type, register, name, value, checked}) {

    // If type is radio or checkbox, switch label and input field for proper display
    if (type === "radio" || type === "checkbox") {
        return (
            <label
                htmlFor={id}
            >
                <input
                    id={id}
                    type={type}
                    value={value}
                    checked={checked}
                    {...register(name)}
                />
                {text}
            </label>
        );
    }

    return (
        <label
            htmlFor={id}
        >
            {text}
            <input
                id={id}
                type={type}
                {...register(id)}
            />
        </label>
    );
}

export default LabelAndInput;