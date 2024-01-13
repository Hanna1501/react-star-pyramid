import React from "react";
import './starPyramid.css';
function StarPyramid(props){
    const{
        rows
    }=props;
    const renderPattern=()=>{
        const pyramid=[];
        for(let i=1; i<=rows; i++){
            const row=[];
            // for(let j=1; j<2*rows;j++){
            //     let c=(j>rows)?2*rows-j:j;
            //     if(c<=rows-i){
            //         row.push(<span>&nbsp;</span>);
            //     }
            //     else{
            //         row.push('*');
            //     }
            // }
            for(let j=1;j<=rows-i+1;j++){
                row.push(<span key={`space-${j}`} className="space"></span>);
            }
            for(let k=1; k<=(2*i-1); k++){
             //   row.push('*');
                row.push(<span key={`space-${k}`}>*</span>);
            }
            pyramid.push(row);
        }
        return(
            pyramid.map((row,rowIndex)=>(
                <div key={rowIndex}>{row}
                </div>   
            ))
        );
    };
    return(
        <div>{renderPattern()}</div>
    );
}

export default StarPyramid;