import { useState } from "react";

const ConditionalStyle=()=>{
    const [isSpecial,setIsSpecial]=useState(false)

    const toggle=()=>
    {
        setIsSpecial(!isSpecial)
    }

const defaultStyle={
    border: '2px solid red',
    margin: '2px',
    padding: '5px',
    backgroundColor: isSpecial? 'green': 'yellow',
    color: isSpecial? 'white':'black'
}

    return (
        <div>
         
         <button style={defaultStyle}  onClick={toggle}>Make It {isSpecial? 'Normal': 'Special'}</button>
         <h1 style={defaultStyle} >This is {isSpecial? 'Special':'Normal'} text</h1>
    
        </div>
    )
}

export default ConditionalStyle;