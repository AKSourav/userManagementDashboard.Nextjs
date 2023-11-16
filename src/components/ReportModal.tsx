"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

interface User {
  username: string;
  email: string;
  phone: string;
  id: string;
  creationDate: string;
}

interface ReportModalProps {
  user: User | null;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ user, onClose }) => {
  const router = useRouter();
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-slate-600 p-8 rounded shadow-md flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold mb-4">Report</h2>
        {user ? (
          <div className=''>
            <p>User: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>No user selected.</p>
        )}
        <div className='flex justify-between w-full'>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded mt-4"
          >
            Close
          </button>
          {user && <button
            onClick={() =>
              {
                console.log(`Generating report for ${user.username}`)
                router.push(`/user/${user.id}`)
              }
            }
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Generate Report
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
