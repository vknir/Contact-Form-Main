type ErrorMessageProps = {
    message: string | undefined,
    display:boolean 
}

function ErrorMessage(props: ErrorMessageProps) {
    return <p className={`text-xs text-red-500 ${props.display ? 'opacity-100':'opacity-0'} `}>{props.message}</p>
}

export default ErrorMessage;