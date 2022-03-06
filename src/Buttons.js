import React from "react";

export default function Buttons({addNum, removeNum}){
    return(
        <div>
            <button onClick={addNum}>Добавить</button>
            <button onClick={removeNum}>Убавить</button>
        </div>
    );
}