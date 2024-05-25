import { useRef,useEffect,useState} from "react";

function FormApp() {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    
  })
  const [errors,setErrors]=useState({})
  // e.target refers to the DOM element that triggered the event (in this case, an input field).
 
  const nameRef=useRef(null)


  useEffect(()=>{
    
    nameRef.current.focus()
 

  },[])

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData({
      ...formData,[name]:value
    })
    
  }

  const validateForm=()=>{
   
    let formErrors={}
    if(!formData.name){
      formErrors.name="Name is required"
    }else if(formData.name.length<3){
      formErrors.name = "Name must be at least 3 characters long";

    }
    if(!formData.email){
      formErrors.email="Email is required";
    }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    return formErrors
  }

  const handleSubmission=(e)=>{

    e.preventDefault()
    const errors=validateForm()
    console.log(errors)
    if(Object.keys(errors).length===0){
      console.log("form data is",formData)
      setFormData({ name: "", email: "" });
      setErrors({})
    }else{
      setErrors(errors)
    }
    
  }

 




console.log("rendered")
  return (
    <div className="flex items-center w-screen h-screen justify-center">
      <form
        onSubmit={handleSubmission}
        className="w-full max-w-sm p-14 border-4 border-purple-500  rounded-xl"
      >
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Full Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              ref={nameRef}
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-password"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              name="email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="text"
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
            <p className="submit-error"></p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormApp;
