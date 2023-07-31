import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPiedPiperSquare } from 'react-icons/fa';
import { useRouter } from 'next/router';
import logo from '@/public/assets/logo/logo.svg';
import Image from 'next/image';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='flex'>
      <form
        onSubmit={handleSubmit((data) => {
          if (
            data.email === 'user1@test.com' &&
            data.password === '@Test1234'
          ) {
            setIsLoading(true);
            router.push('/dashboard');
            setIsLoading(false);
          }
        })}
        className='flex items-center justify-center h-[100vh] w-full text-black'
      >
        <div className='w-[40%] p-10 shadow-md ring-1 ring-black ring-opacity-5'>
          <div className='flex flex-col items-center justify-center w-full mt-5 text-primary'>
            <Image
              src={logo}
              height={100}
              width={100}
              priority={true}
              alt='Picture of the author'
            />
          </div>

          <div className='py-10'>
            <div className='flex flex-col '>
              <label>Email or User name*</label>
              <input
                type='text'
                className='px-5 py-2 border outline-none'
                {...register('email', { required: true })}
              />
              {errors.email && (
                <p className='text-red-500'>Email is required.</p>
              )}
            </div>
            <div className='flex flex-col mt-5'>
              <label>Password*</label>
              <input
                type='password'
                className='px-5 py-2 border outline-none'
                {...register('password', { required: true })}
              />
              {errors.password && (
                <p className='text-red-500'>Password is required.</p>
              )}
            </div>

            <div>
              <button
                type='submit'
                className='px-5 py-2 border w-full mt-10 bg-primary text-white font-semibold hover:opacity-90'
                disabled={isLoading}
              >
                {isLoading ? 'loading...' : 'Sign in'}
              </button>
            </div>

            <div className='mt-5'>
              {`Don't have account?`}
              <span className='font-bold text-primary cursor-pointer ml-1'>
                Sign Up
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
