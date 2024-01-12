import React, { useState } from "react";
import StarPyramid from "./starPyramid";
function PatternPrint(){
    const [rows, setRows]=useState();
    const changePattern=(evt)=>{
        const inputValue= evt.target.value;
        setRows(isNaN(inputValue) ? 0 : inputValue);
    }
    return(
        <div>
            <label>Number of Rows</label>
            <input type="text" value={rows} onChange={changePattern}/>
            <StarPyramid rows={rows}/>
        </div>
    );
}
export default PatternPrint;