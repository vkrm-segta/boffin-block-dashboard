import React from 'react';
import Navbar from '@/components/Navbar';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as yup from 'yup';

const schema = yup.object().shape({
  heading: yup.string().required('First name is required'),
});

export default function Home() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='w-full p-10'>
      <h1 className='text-3xl font-semibold'>Home Page</h1>
      <div className='w-full mt-5 px-7 pt-6 pb-10 shadow-md ring-1 ring-black ring-opacity-5'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col w-full pt-6'
        >
          <div className='w-full'>
            <label className=' text-xl font-semibold'>Heading</label>
            <Controller
              name='heading'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <input
                  className='w-full border mt-2 px-5 py-2.5 outline-none'
                  placeholder='Heading*'
                  {...field}
                  type='text'
                />
              )}
            />
            <p className='text-red-500'>{errors.heading?.message}</p>
          </div>
          <div className='w-full mt-5'>
            <label className=' text-xl font-semibold'>Content</label>
            {/* <Controller
              name='heading'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <textarea
                  className='w-full border mt-2 px-5 py-2.5 outline-none'
                  placeholder='Type here...'
                  {...field}
                  rows={15}
                  cols={50}
                />
              )}
            />
            <p className='text-red-500'>{errors.heading?.message}</p> */}
            <div className='mt-2'>
              <CKEditor
                editor={ClassicEditor}
                data='<p>Hello from CKEditor 5!</p>'
                onReady={(editor) => {
                  console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
