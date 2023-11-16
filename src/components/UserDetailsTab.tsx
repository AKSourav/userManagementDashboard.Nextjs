import React, { useEffect, useState } from 'react';
import ReportModal from './ReportModal';
import { useSelector } from 'react-redux';

interface User {
  username: string;
  email: string;
  phone: string;
  id: string;
  creationDate: string;
}

interface UserDetailsTabProps {
  userData: User[];
}

const UserDetailsTab = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isReportModalOpen, setReportModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const userData = useSelector((state: { user: { users: User[] } }) => state.user.users);

  const openReportModal = (user: User) => {
    setSelectedUser(user);
    setReportModalOpen(true);
  };

  const closeReportModal = () => {
    setReportModalOpen(false);
  };

  const filteredUserData = userData.filter((user) =>
    Object.values(user).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 w-full text-black"
        />
      </div>
      <div className='no-scrollbar overflow-y-scroll'
       style={{height:"63vh"}}
       >
        <table className="table-auto w-full mt-4">
            <thead>
            <tr>
                <th className="border px-4 py-2">Username</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Creation Date</th>
            </tr>
            </thead>
            <tbody>
            {filteredUserData.map((user) => (
                <tr
                key={user.id}
                onClick={() => {
                    setSelectedUser(user);
                    openReportModal(user);
                }}
                className="cursor-pointer hover:bg-gray-100 hover:text-black hover:opacity-50"
                >
                <td className="border px-4 py-2">{user.username}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.phone}</td>
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.creationDate}</td>
                </tr>
            ))}
            </tbody>
        </table>
      </div>
      {isReportModalOpen && (
        <ReportModal user={selectedUser} onClose={closeReportModal} />
      )}
    </div>
  );
};

export default UserDetailsTab;
