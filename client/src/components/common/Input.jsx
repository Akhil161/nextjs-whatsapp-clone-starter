import React from "react";

function Input({name,state,setState,label=flase}) {
  return <div className="flex gap-1 flex-col">
    {
      label && (
        <label htmlFor={name} className="text-teal-light px-1 text-sm">
          {name}
        </label>
      )
    }
    <input 
      type="text" 
      name={name}
      value={state}
      onChange={(e)=>setState(e.target.value)}
      className="bg-input-background text-start focus:outline-none text-white h-8 rounded-lg px-5 py-4 w-full"
    />
  </div>;
}

export default Input;
