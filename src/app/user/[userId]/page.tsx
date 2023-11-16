"use client"
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const UserDetails = ({params}:any) => {
    const router= useRouter();
    const userData=useSelector((state:any)=>{
        const users=state.user.users || [];
        return users.find((user:any)=>user.id===params.userId);
    })
  return (
    <div className="bg-gray-800 text-white p-8 w-screen h-screen flex flex-col items-center ">
      <div className='flex justify-center items-center'>
        <h2 className="text-4xl font-bold mb-4 ">{userData.username}</h2>
      </div>
      <div className=' flex flex-col justify-center items-start mt-5'>
        <p className='text-2xl mb-3'>Username: <span className='font-bold bg-slate-700 p-2 rounded'>{userData.username}</span></p>
        <p className='text-2xl mb-3'>Email: <span className='font-bold bg-slate-700 p-2 rounded'>{userData.email}</span></p>
        <p className='text-2xl mb-3'>Phone: <span className='font-bold bg-slate-700 p-2 rounded'>{userData.phone}</span></p>
        <p className='text-2xl mb-3'>ID: <span className='font-bold bg-slate-700 p-2 rounded'>{userData.id}</span></p>
        <p className='text-2xl mb-3'>Creation Date <span className='font-bold bg-slate-700 p-2 rounded'>{userData.creationDate}</span></p>
        <button
         className="bg-gray-500 text-white px-4 py-2 rounded w-full"
         onClick={
            ()=>router.back()
         }
        >
         Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;