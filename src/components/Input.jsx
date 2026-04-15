import { useState } from "react"

export function Input({type, name}) {
    const [text, setText] = useState("")
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    return (
        <input  
        type={type} 
        placeholder={name}
        name={name} 
        value={text}
        onChange={handleChange}
        />
    )
}
