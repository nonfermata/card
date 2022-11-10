import React from "react";

const TextField = ({ label, name, value, onChange, error }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type="text"
                    name={name}
                    className={getInputClasses()}
                    id={name}
                    value={value}
                    onChange={handleChange}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

export default TextField;
