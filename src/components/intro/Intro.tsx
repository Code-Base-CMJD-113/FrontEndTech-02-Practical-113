import { useState } from "react"

export const Intro = ()=> {
    const [ value, changeValue] = useState(0)
    // let value = 0
    const valueUp = ()=>{
        // value ++
         changeValue(value + 1)
    }
    const valueDown = ()=>{
        // value --
       changeValue( value - 1)
    }
    return(
        <>
        <h1 style={{textAlign: "center"}}>{value}</h1>
        <div style={{marginLeft: "50vw"}}>
            <button onClick={valueUp}>Up</button>
            <button onClick={valueDown}>Down </button>
        </div>
        </>
    );
}