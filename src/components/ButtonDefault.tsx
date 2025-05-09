interface BtnDefault {
    value: string;
}

export function ButtonDefault({value}: BtnDefault) {
    return (
        <button className="rounded-[7px] bg-white py-[16px] text-black font-semibold transition-colors duration-300 ease-in-out cursor-pointer">
            {value}
        </button>
    )
}