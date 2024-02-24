import { InputFieldProps } from "@/app/interfaces";

export default function AccountInput(props:InputFieldProps){
    return (
    <div className="my-2">
        <label htmlFor="" className="uppercase text-xs text-light mb-1 block">{props.label}</label>
        <input
        type={props.type}
        value={props.value as string}
        onChange={(e)=>props.handleInput(e.target.value)}
        className={`font-bold ${!props.readOnly?"border-800":""} w-full rounded-md p-1 placeholder:font-bold placeholder:text-black`}
        placeholder="N/A"
        readOnly={props.readOnly}
        style={{
            background:"none",
            outline:"none"
        }}
        />
    </div>
    )
}