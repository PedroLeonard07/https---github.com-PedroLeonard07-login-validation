interface FormLayoutProps {
    children: React.ReactNode
    onSubmit: React.FormEventHandler
}

export function FormLayout({children, onSubmit}:FormLayoutProps) {
    return (
        <form 
        onSubmit={onSubmit}
        className="w-[479px] h-full max-h-fit text-white bg-linear-to-br from-[#83838362] to-[#C4C4C41A] backdrop-blur-[3px] border border-[#c9c9c962] rounded-[27px] flex flex-col px-[30px] pt-[20px] pb-[30px]">
            {children}
        </form>
    )
}