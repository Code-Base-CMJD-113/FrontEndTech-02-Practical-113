
export const Intro = ()=> {
    let value = 0
    const valueUp = ()=>{
        value ++
        console.log(value)
    }
    const valueDown = ()=>{
        value --
        console.log(value)
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