interface InputDefaultProps {
    label: string;
    placeholder: string;
    type: string;
    onChange: React.ChangeEventHandler;
    value: string;
    error?: string;
}

export function InputDefault({label, placeholder, type, onChange, value, error}:InputDefaultProps) {
    return (
        <div>
            <label htmlFor={label} className="flex flex-col mb-[5px] text-[15px]">{label}</label>
            <input
                type={type}
                id={label}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className="py-[16px] pl-[15px] outline-0 pr-[246px] w-full bg-linear-to-br from-[#c9c9c962] to-[#C4C4C41A] rounded-[7px] text-[15px]" 
            />
            {error && <span className="text-red-500">{error}</span>}
        </div>
    )
}