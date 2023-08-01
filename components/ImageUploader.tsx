import { useRef, useState } from 'react';

const ImageUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const imageUrls: string[] = [];
      const readers: FileReader[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onloadend = () => {
          imageUrls.push(reader.result as string);

          if (imageUrls.length === files.length) {
            setImages((prevImages) => [...prevImages, ...imageUrls]);
          }
        };
        readers.push(reader);
        reader.readAsDataURL(file);
      }
    }
  };

  const handleButtonClick = () => {
    // Trigger the hidden file input when the custom button is clicked
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <div className='flex justify-center flex-wrap border p-2 mt-5'>
        {images.length ? (
          images.map((imageUrl, index) => (
            <div className='w-20 h-20 m-2'>
              <img
                className='w-full h-full object-cover'
                key={index}
                src={imageUrl}
                alt={`Uploaded ${index + 1}`}
              />
            </div>
          ))
        ) : (
          <h1 className='text-lightText'>No file uploaded...</h1>
        )}
      </div>
      <button
        className='w-full bg-primary text-white text-lg px-8 py-3 mt-3'
        onClick={handleButtonClick}
      >
        Choose Images
      </button>
      <input
        type='file'
        ref={inputRef}
        multiple
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;
