import react from 'react';

interface Inputprops {
    id:string;
    onchange:any;
    value:string;
    label:string;
    type?:string;
}

const Input: react.FC<Inputprops> =({
    id,
    onchange,
    value,
    label,
    type
}) => {
    return(
     <div className=" relative "> 
        <input
        onChange={onchange}
        type={type}
        value={value}
        id="id" 
        className="
        block
        rounded-md
        px-6
        pt-6
        pt-1
        w-full
        text-md
        text-white
        bg-neutral-700
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        "
        placeholder=" "
        />
        <label 
        className="
        absolute
        text-md
        text-zinc-400
        duraytion-150
        transform
        -translate-y-3
        scale-75
        top-4
        z-10
        origin-[0]
        left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
        "
        htmlFor="id">
         {label}
        </label>
    </div>    
    )
}


export default Input;