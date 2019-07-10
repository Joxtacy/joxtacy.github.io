import React, { useState } from "react";
import Input from "./Input.jsx";

const Welcome = ({}) => {
    const [value, setValue] = useState("");

    const handleChange = event => {
        setValue(event.target.value);
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <Input
                label={"label"}
                text={"text"}
                type={"text"}
                id={"id"}
                value={value}
                handleChange={handleChange}
            ></Input> 
        </div>
    )
};

export default Welcome;
