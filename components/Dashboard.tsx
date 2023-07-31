import { useState } from 'react';
import AddUserMdal from '@/components/AddUser';
import { MdEdit, MdDelete, MdCheck } from 'react-icons/md';

export default function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [editContactNo, setContactNo] = useState('');
  const [editRole, setEditRole] = useState('');
  const [listData, setListData] = useState([
    {
      id: '1',
      name: 'Christopher Nolan',
      email: 'christopher@gmail.com',
      contactNumber: '123123123',
      role: 'Admin',
    },
    {
      id: '2',
      name: 'Steve Smith',
      email: 'steve@gmail.com',
      contactNumber: '123123123',

      role: 'Manager',
    },
    {
      id: '3',
      name: 'Tyron john',
      email: 'tyron@gmail.com',
      contactNumber: '123123123',

      role: 'Technical',
    },
    {
      id: '4',
      name: 'Emilia Scott',
      email: 'emilia@gmail.com',
      contactNumber: '123123123',
      role: 'Technical',
    },
    {
      id: '5',
      name: 'Cillian Murphy',
      email: 'cillian@gmail.com',
      contactNumber: '123123123',
      role: 'Admin',
    },
    {
      id: '6',
      name: 'Christopher Nolan',
      email: 'christopher@gmail.com',
      contactNumber: '123123123',
      role: 'Admin',
    },
    {
      id: '7',
      name: 'Steve Smith',
      email: 'steve@gmail.com',
      contactNumber: '123123123',
      role: 'Manager',
    },
    {
      id: '8',
      name: 'Tyron john',
      email: 'tyron@gmail.com',
      contactNumber: '123123123',
      role: 'Technical',
    },
    {
      id: '9',
      name: 'Emilia Scott',
      email: 'emilia@gmail.com',
      contactNumber: '123123123',
      role: 'Technical',
    },
    {
      id: '10',
      name: 'Cillian Murphy',
      email: 'cillian@gmail.com',
      contactNumber: '123123123',
      role: 'Admin',
    },
  ]);

  const handleEditItem = (id: any) => {
    const itemToEdit: any = listData.find((item) => item.id === id);
    setEditId(id);
    setEditName(itemToEdit.name);
    setEditEmail(itemToEdit.email);
    setEditRole(itemToEdit.role);
    setContactNo(itemToEdit.contactNumber);
  };

  const handleUpdateItem = () => {
    const updatedList = listData.map((item) =>
      item.id === editId
        ? {
            ...item,
            name: editName,
            email: editEmail,
            contactNumber: editContactNo,
            role: editRole,
          }
        : item
    );
    setListData(updatedList);
    setEditId(null);
    setEditEmail('');
    setContactNo('');
    setEditName('');
    setEditRole('');
  };

  const handleDeleteUser = (index: any) => {
    const newItems = [...listData];
    newItems.splice(index, 1);
    setListData(newItems);
  };

  return (
    <div className='flex flex-col w-full h-[100vh] text-black px-10 pt-5'>
      {!openModal && (
        <>
          <h1 className='text-2xl font-semibold'>Users</h1>
          <div className='flex mt-5'>
            <button
              onClick={() => setOpenModal(!openModal)}
              className='bg-[#dedede] px-5 py-3'
            >
              Add New User
            </button>
          </div>
        </>
      )}
      {openModal && (
        <AddUserMdal
          openModal={openModal}
          setOpenModal={setOpenModal}
          listData={listData}
        />
      )}
      <div className='w-full max-h-full my-5 overflow-hidden shadow-md'>
        <li className='flex justify-between items-center w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg break-words px-10 py-6'>
          <h1 className='w-[22%] mr-2'>Name</h1>
          <h1 className='w-[22%] mr-2'>Email</h1>
          <h1 className='w-[22%] mr-2'>Contact No.</h1>
          <h1 className='w-[22%] mr-2'>Role</h1>
          <h1 className='w-[10%] mr-2' />
        </li>
        <ul className='overflow-y-scroll h-full pb-20'>
          {listData.map((item, index) => (
            <li
              key={index}
              className={`flex justify-between items-center text-lg w-full px-10 py-2 break-words border-b`}
            >
              {editId === item.id ? (
                <div className='flex w-full'>
                  <input
                    className='flex w-[22%] border outline-none mr-2 my-2 py-2 px-2'
                    type='text'
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    className='flex w-[22%] border outline-none mr-2 my-2 py-2 px-2'
                    type='text'
                    value={editEmail}
                    onChange={(e) => setEditEmail(e.target.value)}
                  />
                  <input
                    className='flex w-[22%] border outline-none mr-2 my-2 py-2 px-2'
                    type='text'
                    value={editRole}
                    onChange={(e) => setEditRole(e.target.value)}
                  />
                  <div className='flex items-end justify-end w-[10%] mr-2 my-2 py-2 px-2'>
                    <button
                      onClick={handleUpdateItem}
                      className='flex items-center justify-center w-8 h-8 bg-[#dedede] rounded-full'
                    >
                      <MdCheck />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className='flex w-[22%] mr-2 py-4'>{item.name}</h1>
                  <h1 className='w-[22%] mr-2 py-4'>{item.email}</h1>
                  <h1 className='w-[22%] mr-2 py-4'>{item.contactNumber}</h1>
                  <h1 className='w-[22%] mr-2 py-4'>{item.role}</h1>

                  <div className='flex items-end justify-end w-[10%] mr-2 py-4'>
                    <button
                      onClick={() => handleEditItem(item.id)}
                      className='flex items-center justify-center w-8 h-8 bg-[#dedede] rounded-full'
                    >
                      <MdEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(index)}
                      className='flex items-center justify-center w-8 h-8 bg-[#dedede] rounded-full ml-5'
                    >
                      <MdDelete />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
