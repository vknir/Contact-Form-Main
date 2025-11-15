import Check from '../assets/images/icon-success-check.svg'



function Alert() {
    return <div className={`absolute bg-green-600 text-white p-5 rounded-xl flex flex-col gap-2 top-2.5 w-[90%] max-w-[500px] animate-appear opacity-0`}>
        <div className='flex gap-2 items-center'>
            <img src={Check} alt="tick image" />
            <p className='font-semibold text-[16px]'>Message Sent!</p>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
}

export default Alert