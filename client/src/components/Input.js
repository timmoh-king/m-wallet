import React from "react";

const Input = ({
    index,
    labelName,
    placeHolder,
    isRequired,
    inputType,
    inputValue,
    inputName,
    inputStyle,
    onChange,
    error
}) => {
    return (
        <div className="bg-white border-navyBlue rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-navyBlue">
            <label className="block text-navyBlue text-base py-2 font-semibold">
                {labelName}
            </label>
            <input
                type={inputType ? inputType : "text"}
                className={`bg-transparent text-sm font-normal px-2 h-[36px] rounded-sm shadow-md focus:outline-none focus:ring-1 focus:ring-skyBlue ${inputStyle ? inputStyle : ""}`}
                key={index}
                placeholder={placeHolder}
                required={isRequired}
                value={inputValue}
                name={inputName}
                onChange={onChange}
            />
            {error ?
                <p className="text-red font-normal text-sm pt-1">{error}</p>
                :
                <p className="hidden">No error</p>
            }
        </div>
    );
};

export default Input;
