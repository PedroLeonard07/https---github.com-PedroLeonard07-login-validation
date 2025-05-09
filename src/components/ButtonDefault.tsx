interface BtnDefaultProps {
    value: string;
    onclick?: React.MouseEventHandler<HTMLButtonElement>
}

export function ButtonDefault({value, onclick}: BtnDefaultProps) {
    return (
        <button 
        onClick={onclick}
        className="rounded-[7px] w-full bg-white py-[16px] text-black font-semibold transition-colors duration-300 ease-in-out cursor-pointer">
            {value}
        </button>
    )
}