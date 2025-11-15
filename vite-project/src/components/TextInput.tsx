function TextInput() {
    return <div className="w-full flex flex-col">
        <label htmlFor="lastname">Last Name <span className="text-green-600">*</span> </label>
        <input {...register("lastname", { required: "This field is required" })} type="text" name="lastname" id="lastname" />
    </div>
}