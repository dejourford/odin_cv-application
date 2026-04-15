import { useState } from "react"

export function Input({type, name, value, onChange}) {
    if (type === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={name}
        value={value || ""}
        onChange={onChange}
      />
    );
  }

    return (
        <input  
        type={type} 
        placeholder={name}
        name={name} 
        value={value || ""}
        onChange={onChange}
        />
    )
}
