import { InputFieldProps, SelectInputFieldProps } from "@/app/interfaces";
import { Select } from "antd";


export default function InputField(props:InputFieldProps){
    const valid = props.fieldError?props.fieldError.valid:true
    const error_message = props.fieldError?props.fieldError.message:null

    return (
        <div className={props.containerClass}>
            <label htmlFor="email-field" className="capitalize block mb-1 text-sm font-bold">{props.label}</label>
            <div className={`flex items-center p-3 rounded-lg gap-2 mb-1 border ${valid?"border-[#CFDBD5B2]":"border-red-400"}`}>
                {props.prefixComponent?props.prefixComponent:null}
                <input
                type={props.type}
                min={props.min}
                max={props.max}
                maxLength={props.maxLength}
                readOnly={props.readOnly}
                minLength={props.minLength}
                required={props.required}
                className="flex-1 w-full placeholder:text-[#747A80]"
                placeholder={props.placeholder}
                style={{
                    outline:"none"
                }}
                onChange={(e)=>props.handleInput(e.target.value)}
                />
                {props.suffixComponent?props.suffixComponent:null}
            </div>
            <p className="text-sm text-red-700">{error_message}</p>
        </div>
    )
}
export function SelectInputField(props:SelectInputFieldProps){
    const valid = props.fieldError?props.fieldError.valid:true
    const error_message = props.fieldError?props.fieldError.message:null

    return (
        <div className={props.containerClass}>
            <label htmlFor="email-field" className="capitalize block mb-1 text-sm font-bold">{props.label}</label>
                <Select
                value={props.value}
                style={{border:"none",width:"100%"}}
                size="large"
                showSearch
                defaultValue={"USA"}
                options={props.options}
                onChange={(value)=>props.handleSelect(value)}
                onSelect={(value)=>props.handleSelect(value)}
                />
            <p className="text-sm text-red-700">{error_message}</p>
        </div>
    )
}