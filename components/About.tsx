import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as yup from 'yup';
import ImageUploader from './ImageUploader';

const schema = yup.object().shape({
  heading: yup.string().required('First name is required'),
});

export default function About() {
  const [htmlCode, setHtmlCode] = useState(null);
  const [tagValue, setTagValue] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [tagArray, setTagArray] = useState<any>([]);

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

  const getRandomColor = () => {
    const colors = [
      'bg-red-500',
      'bg-blue-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-pink-500',
    ];

    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleTag = () => {
    if (tagValue === '') {
      return;
    }
    const tag: any = {
      id: '1',
      tag: tagValue,
      color: getRandomColor(),
    };
    setTagArray((prevState: any) => [...prevState, tag]);
    setTagValue('');
  };

  return (
    <div className='w-full p-10'>
      <h1 className='text-3xl font-semibold'>About Page</h1>
      <div className='flex'>
        <div className='w-full'>
          <div className='w-full h-fit mt-5 px-7 pt-6 pb-10 shadow-md ring-1 ring-black ring-opacity-5'>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col w-full pt-6'
            >
              <div className='w-full'>
                <label className=' text-xl font-semibold'>Title</label>
                <Controller
                  name='heading'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <input
                      className='w-full border mt-2 px-5 py-2.5 outline-none'
                      placeholder='Title*'
                      {...field}
                      type='text'
                    />
                  )}
                />
                <p className='text-red-500'>{errors.heading?.message}</p>
              </div>
              <div className='w-full mt-5'>
                <label className='text-xl font-semibold'>Content</label>
                <div className='mt-2'>
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      placeholder: 'Type here...',
                      ckfinder: {
                        uploadUrl: '',
                      },
                    }}
                    onReady={(editor) => {
                      console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                      const data: any = editor.getData();
                      setHtmlCode(data);
                    }}
                    onBlur={(event, editor) => {
                      console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor);
                    }}
                  />
                </div>
                <div className='text-lightText border mt-5 py-2 px-2'>
                  {htmlCode === '' || htmlCode === null
                    ? 'HTML code shown here...'
                    : htmlCode}
                </div>
              </div>
            </form>
          </div>

          <div className='w-full h-fit mt-5 px-7 pt-6 pb-10 shadow-md ring-1 ring-black ring-opacity-5'>
            <label className='text-xl font-semibold'>Meta Content</label>
            <input
              className='w-full border mt-2 px-5 py-2.5 outline-none'
              placeholder='Add Meta Title...'
              value={metaTitle}
              onChange={(e) => setMetaTitle(e.target.value)}
              type='text'
            />
            <input
              className='w-full border mt-2 px-5 py-2.5 outline-none'
              placeholder='Add Meta Description...'
              value={metaDesc}
              onChange={(e) => setMetaDesc(e.target.value)}
              type='text'
            />
          </div>
        </div>
        <div className='w-[20vw] ml-5 mt-5'>
          <button
            className='w-full bg-primary text-white text-lg px-8 py-3'
            type='button'
          >
            Save
          </button>
          <button
            className='w-full border border-primary text-primary text-lg px-8 py-3 mt-3'
            type='button'
          >
            Save as draft
          </button>
          <div>
            <div className='flex flex-wrap border p-2 mt-5'>
              {tagArray.length ? (
                tagArray.map((item: any, index: any) => (
                  <div
                    key={index}
                    className={`${item.color} w-fit text-white px-2 py-1 rounded-md m-2`}
                  >
                    {item.tag}
                  </div>
                ))
              ) : (
                <h1 className='text-lightText'>No tag added</h1>
              )}
            </div>
            <input
              className='w-full border mt-2 px-5 py-2.5 outline-none'
              value={tagValue}
              onChange={(e) => setTagValue(e.target.value)}
              type='text'
              placeholder='Type here...'
            />
            <button
              type='button'
              onClick={handleTag}
              className='w-full bg-primary text-white text-lg px-8 py-3 mt-3'
            >
              Add Tag
            </button>

            <ImageUploader />
          </div>
        </div>
      </div>
    </div>
  );
}
