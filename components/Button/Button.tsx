"use client"

interface IButtonProps {
    children: string
    onClick: () => void
    hidden?: boolean
}

const Button = ({ children, onClick, hidden }: IButtonProps) => {
    return (
        <button
            hidden={hidden}
            type='button'
            title={children}
            onClick={onClick}
            className="min-w-[20px] h-10 px-5 font-open_sans text-white text-base font-semibold bg-brand rounded-md hover:bg-white hover:text-brand hover:border-2 hover:border-brand"
        >
            {children}
        </button>
    )
}

export default Button