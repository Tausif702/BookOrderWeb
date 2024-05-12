import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mb-6">
              <div className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                  <input
                    {...register('email', { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    required
                    placeholder="Email"
                  />
                  <br />
                  {errors.email && <span className="text-red-200">This field is required</span>}
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <input
                    {...register('password', { required: true })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    required
                    placeholder="******************"
                  />
                  <br />
                  {errors.password && <span className="text-red-200">This field is required</span>}
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                    Login
                  </button>
                  <p>
                    Not registered?{' '}
                    <Link
                      to="/signup"
                      className="align-baseline font-bold text-sm text-pink-500 hover:text-pink-800"
                    >
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
