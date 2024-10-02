import React from 'react';
import { useForm } from "react-hook-form";


function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white dark:bg-slate-700">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
    
    <h3 className="font-bold text-lg">Login</h3>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter your Email" className="bg-white w-80 px-3 py-1 border rounded-md outline-none" 
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className="text-sm text-red-600">This field is required</span>}
    </div>

    <div className="mt-4 space-y-2">
        <span>Password</span>
        <br/>
        <input type="Password" placeholder="Password" className="bg-white w-80 px-3 py-1 border rounded-md outline-none"
          {...register("password", { required: true })}
        />
        <br />
        {errors.password && <span className="text-sm text-red-600" >This field is required</span>}
    </div>

    <div className='flex justify-around mt-4'>
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
            Login
        </button>
        <p>Not registered? <a href="/signup" className="underline text-blue-500 cursor-pointer">Signup</a>{" "}
        </p>
    </div>
  </form>
  </div>
</dialog>

    </div>
      
    </>
  )
}

export default Login
