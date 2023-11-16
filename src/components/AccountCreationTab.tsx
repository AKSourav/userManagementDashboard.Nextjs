import { addUser } from '@/redux/userSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {toast} from '@/utils/ToastsWrapper/ToastsWrapper'
import Spinner from '@/utils/Spinner/Spinner';

interface AccountCreationTabProps {}

const AccountCreationTab: React.FC<AccountCreationTabProps> = () => {
  const initialFormData={
    username: '',
    password: '',
    email: '',
    phone: '',
  };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const [loading,setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    // You can implement your own email validation logic here
    // For a simple example, I'm using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    // You can implement your own phone validation logic here
    // For a simple example, I'm checking if it contains only numbers and has a valid length
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    console.log('Form submitted:', formData);
    try {
      const { password, ...data } = formData;

      if (!data.username) throw new Error('Username not present!');
      if (!validateEmail(data.email)) throw new Error('Invalid email!');
      if (!validatePhone(data.phone)) throw new Error('Invalid phone number! Phone number should conatin 10 digits. ');
      setTimeout(()=>{
        dispatch(addUser(data));
        setLoading(false);
        setFormData(initialFormData);
        toast.success('User created Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      },3000)
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col items-center"
      >
        <div className="flex flex-col items-end bg-slate-600 p-8 rounded">
          <label className="mb-4">
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 text-black ml-5"
            />
          </label>
          <label className="mb-4">
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 text-black ml-5"
            />
          </label>
          <label className="mb-4">
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 text-black ml-5"
            />
          </label>
          <label className="mb-4">
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="border rounded px-4 py-2 text-black ml-5"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 w-full text-white px-4 py-2 rounded"
          >
            {loading?<><Spinner/></>:"Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountCreationTab;
