"use client"
import React, { useState } from 'react';
import UserDetailsTab from '../components/UserDetailsTab';
import AccountCreationTab from '../components/AccountCreationTab';
import ToastsWrapper from '@/utils/ToastsWrapper/ToastsWrapper';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('userDetails');
  const userData = [
    {
      username: "abc",
      email: "abc@gmail.com",
      phone: "1234567890",
      id: "1",
      creationDate: "1234567",
    },
  ];

  return (
    <ToastsWrapper>
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto p-4">
        <div className="bg-slate-800 text-white text-center py-4 rounded">
          <h1 className="text-2xl font-bold">User Management Dashboard</h1>
        </div>

        <div className="flex justify-center mt-4">
          <div
            className={`cursor-pointer px-4 py-2 border ${
              activeTab === 'userDetails'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-blue-500'
            } rounded-l`}
            onClick={() => setActiveTab('userDetails')}
          >
            User Details
          </div>
          <div
            className={`cursor-pointer px-4 py-2 border ${
              activeTab === 'accountCreation'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-blue-500'
            } rounded-r`}
            onClick={() => setActiveTab('accountCreation')}
          >
            Account Creation
          </div>
        </div>

        <div 
          className="bg-gray-800 mt-4 p-4 rounded"
        >
          {activeTab === 'userDetails' && <UserDetailsTab/>}
          {activeTab === 'accountCreation' && <AccountCreationTab />}
        </div>
      </div>
    </div>
    </ToastsWrapper>
  );
};

export default Home;
