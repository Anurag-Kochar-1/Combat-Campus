"use client"

interface IButtonProps {
    children: string
    onClick: () => void
}

const Button = ({ children, onClick }: IButtonProps) => {
    return (
        <button
            type='button'
            title={children}
            onClick={onClick}
            className="min-w-min h-10 px-5 font-open_sans text-white text-base font-semibold bg-brand rounded-md hover:bg-white hover:text-brand hover:border-2 hover:border-brand"
        >
            {children}
        </button>
    )
}

export default Button