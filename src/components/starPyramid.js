import React from "react";
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
            for(let j=1;j<=rows-i;j++){
                row.push(<span>&nbsp;</span>);
            }
            for(let k=1; k<=(2*i-1); k++){
                row.push('*');
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