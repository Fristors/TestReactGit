import React from "react";

export default function Buttons({addNum, removeNum}){
    return(
        <div>
            <button onClick={addNum}>Увеличить</button>
            <button onClick={removeNum}>Уменьшить</button>
        </div>
    );
}