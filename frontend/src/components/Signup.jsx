import React from 'react';
import { useForm } from "react-hook-form";
import Login from './Login';

function Signup() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => (data) =>{
    const userInfo ={
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    }
  }

  return (
    <>
     <div className="flex h-screen items-center justify-center ">
    <div id="my_modal_4" className="">
  <div className="modal-box p-20 bg-white shadow-2xl dark:bg-slate-700">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <a href="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</a>
    
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className="mt-4 space-y-2">
        <span>Name</span>
        <br/>
        <input type="text" placeholder="Name" className="bg-white w-80 px-3 py-1 border rounded-md outline-none"
          {...register("fullname", { required: true })}
        />
         <br />
        {errors.fullname && <span className="text-sm text-red-600" >This field is required</span>}
    
    </div>
    <div className="mt-4 space-y-2">
        <span>Email</span>
        <br/>
        <input type="email" placeholder="Enter your Email" className="bg-white w-80 px-3 py-1 border rounded-md outline-none"
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && <span className="text-sm text-red-600" >This field is required</span>}
    
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
            Sign Up
        </button>
        <p>Have account? <button className="underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>{" "}
        <Login />
        </p>
    </div>
    </form>
  </div>
</div>

    </div>
      
    </>
  )
}

export default Signup;
