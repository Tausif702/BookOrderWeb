import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data to the console
    // You can add logic here to handle form submission, such as sending the data to a server
  };

  return (
    <>
      <div className='flex items-center justify-center dark:bg-slate-900 dark:text-white'>
        <div className="modal-box dark:bg-slate-900 dark:text-white mt-28 dark:bg-slate-900 dark:text-white">
          <form method="dialog" className='dark:bg-slate-900 dark:text-white'>
            {/* If there is a button in the form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:border-black bg-white hover:bg-white">✕</button>
          </form>
          <h3 className="font-bold text-lg">SignUp</h3>
          
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded px-8 pt-6 pb-8 mb-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input required {...register('name', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"/>
              </div>

              {/* Email */}
              <div className="mb-6 mt-9"> 
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input required {...register('email', { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
              </div>
              
              {/* Password */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input {...register('password', { required: true })} required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
              </div>

              <div className="flex items-center justify-between">
                <button className="bg-pink-500 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Signup
                </button>
                <p>Have an account? <a className="cursor-pointer align-baseline font-bold text-sm text-pink-500 hover:text-pink-800" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
