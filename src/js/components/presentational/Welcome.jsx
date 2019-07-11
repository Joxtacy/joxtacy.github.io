import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Welcome = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{`Welcome! ${count}`}</h1>
            <Button
                variant={"contained"}
                color={"primary"}
                onClick={handleClick}
            >{"Hello Button!"}</Button>
        </div>
    )
};

export default Welcome;
