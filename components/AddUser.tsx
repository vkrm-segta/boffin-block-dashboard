import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface User {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  role: string;
}

interface PropsType {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  listData: User[];
}

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string(),
  email: yup.string().email('Invalid email').required('Email is required'),
  contactNumber: yup.string().required('Contact Number is required'),
  role: yup.string().required('Job role is required'),
});

const AddUser: React.FC<PropsType> = ({
  openModal,
  setOpenModal,
  listData,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    const id = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const newUser = {
      id: `${id}`,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      contactNumber: data.contactNumber,
      role: data.role,
    };
    listData.unshift(newUser);
    setOpenModal(false);
    console.log(newUser);
  };

  const handleCancel = (data: any) => {
    setOpenModal(false);
  };

  return (
    <main className='flex h-full mt-10'>
      <div className='w-full h-full px-10 pt-10 text-black'>
        <div className='w-full px-7 pt-6 pb-10 shadow-md ring-1 ring-black ring-opacity-5'>
          <h1 className='text-lightText text-xl'>Add New User</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col w-full pt-6'
          >
            <div className='w-full'>
              <Controller
                name='firstName'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    className='w-full border px-5 py-2.5 outline-none'
                    placeholder='First Name*'
                    {...field}
                    type='text'
                  />
                )}
              />
              <p className='text-red-500'>{errors.firstName?.message}</p>
            </div>

            <div className='w-full mt-5'>
              <Controller
                name='lastName'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    className='w-full border px-5 py-2.5 outline-none'
                    placeholder='Last Name'
                    {...field}
                    type='text'
                  />
                )}
              />
              <p className='text-red-500'>{errors.lastName?.message}</p>
            </div>

            <div className='w-full mt-5'>
              <Controller
                name='email'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    className='w-full border px-5 py-2.5 outline-none'
                    placeholder='Email*'
                    {...field}
                    type='email'
                  />
                )}
              />
              <p className='text-red-500'>{errors.email?.message}</p>
            </div>

            <div className='w-full mt-5'>
              <Controller
                name='contactNumber'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    className='w-full border px-5 py-2.5 outline-none'
                    placeholder='Contact Number*'
                    {...field}
                    type='text'
                  />
                )}
              />
              <p className='text-red-500'>{errors.email?.message}</p>
            </div>

            <div className='w-full mt-5'>
              <Controller
                name='role'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <input
                    className='w-full border px-5 py-2.5 outline-none'
                    placeholder='role*'
                    {...field}
                    type='text'
                  />
                )}
              />
              <p className='text-red-500'>{errors.role?.message}</p>
            </div>

            <div className='flex justify-between w-full'>
              <button
                onClick={handleCancel}
                className='w-1/2 bg-[#dedede] font-extrabold mt-10 px-5 py-2.5 mr-5'
              >
                CANCEL
              </button>
              <button
                type='submit'
                className='w-1/2 bg-primary text-white font-extrabold mt-10 px-5 py-2.5'
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddUser;
