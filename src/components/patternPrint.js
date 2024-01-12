import React, { useState } from "react";
function PatternPrint(){
    const [rows, setRows]=useState();
    const changePattern=(evt)=>{
        const inputValue= evt.target.value;
        setRows(isNaN(inputValue) ? 0 : inputValue);
    }
    return(
        <div>
            <label>Number of rows</label>
            <input type="text" value={rows} onChange={changePattern}/>
        </div>

    );
}
export default PatternPrint;