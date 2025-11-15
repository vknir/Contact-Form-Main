import { useForm, type SubmitHandler } from "react-hook-form"
import ErrorMessage from "./components/ErrorMessage"
import Alert from "./components/Alert"
import { useState, useEffect } from "react"

type FormFields = {
    firstname: string,
    lastname: string,
    email: string,
    message: string,
    query: string,
    consent: boolean
}

function App() {
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const { register, formState: { errors }, handleSubmit } = useForm<FormFields>()

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data)

        setShowSuccess(true);
    }

    useEffect(()=>{
        if(showSuccess){
            const ref= setTimeout(()=>setShowSuccess(false), 4000)
            return ()=> clearTimeout(ref)
        }
    },[showSuccess])

    return (<>

        <div className="h-dvh w-dvw bg-green-200 font-karla flex justify-center items-center text-[16px] relative">
            {showSuccess && <Alert />}
            <div className="flex flex-col bg-white p-8 rounded-xl text-gray-900 gap-3 w-[90%] max-w-[600px]">
                <h1 className=" font-semibold text-3xl">Contact Us</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <div className="md:flex gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="firstname">First Name <span className="text-green-600">*</span></label>
                            <input className={`input-style ${errors.firstname ? 'border-red-100' : ''} `} {...register("firstname", { required: true })} type="text" name="firstname" id="firstname" />
                            <ErrorMessage message={"This field is required"} display={errors.firstname ? true : false} />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label htmlFor="lastname">Last Name <span className="text-green-600">*</span> </label>
                            <input className={`input-style  ${errors.lastname ? 'border-red-100' : ''} `} {...register("lastname", { required: true })} type="text" name="lastname" id="lastname" />
                            <ErrorMessage message={"This field is required"} display={errors.lastname ? true : false} />
                        </div>
                    </div>

                    <label htmlFor="email">Email <span className="text-green-600">*</span></label>
                    <input className={`input-style ${errors.email ? 'border-red-100' : ''} `} {...register("email", { required: true })} type="email" name="email" id="email" />
                    <ErrorMessage message={"Please type a vaild mail id"} display={errors.email ? true : false} />


                    <p>Select Query <span className="text-green-600">*</span></p>
                    <div className="flex flex-col md:flex-row justify-between gap-5 peer">
                        <label className="input-style w-full flex items-center gap-2">
                            <input className="accent-green-600"  {...register("query", { required: true })} type="radio" name="query" id="general-enquiry" value="General Enquiry" />
                            General Enquiry
                        </label>

                        <label className="input-style w-full flex items-center gap-2 ">
                            <input className="accent-green-600" {...register("query", { required: true })} type="radio" name="query" value="Support Request" />
                            Support Request
                        </label>
                    </div>
                    <ErrorMessage message={"Please select a query type"} display={errors.query ? true : false} />


                    <label htmlFor="Message">Message <span className="text-green-600">*</span></label>
                    <textarea rows={3} className={`resize-none input-style ${errors.message ? 'border-red-100' : ''} `} {...register("message", { required: "This field is required" })} name="message" id="message"></textarea>
                    <ErrorMessage message={"This field is required"} display={errors.email ? true : false} />

                    <div className="group relative peer flex items-center gap-2">
                        <input className="peer size-4 accent-green-600" {...register("consent", { required: true })} type="checkbox" id="consent" />

                        <label className="hover:cursor-pointer" htmlFor="consent">I consent to being contacted by the team  <span className="text-green-600">*</span></label>
                    </div>
                    <ErrorMessage message={"To submit this form, please consent to being contacted"} display={errors.consent ? true : false} />

                    <input className="w-full p-3 bg-green-600 text-white rounded-md hover:cursor-pointer hover:bg-green-900 mt-2" type="submit" />
                </form>
            </div>
        </div>
    </>)

}

export default App