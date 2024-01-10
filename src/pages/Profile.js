import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

const Profile = () => {
  let { user } = useSelector((state) => state.user || []);

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    marginTop: '20px',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  };

  return (
    <div>
      <Navbar />
      <table style={tableStyle}>
        <tbody>
          <tr>
            <td style={cellStyle}>Name</td>
            <td style={cellStyle}>{user?.displayName || ''}</td>
          </tr>
          <tr>
            <td style={cellStyle}>Email</td>
            <td style={cellStyle}>{user?.email || ''}</td>
          </tr>
          <tr>
            <td style={cellStyle}>Role</td>
            <td style={cellStyle}>{user?.role || ''}</td>
          </tr>
          <tr>
            <td style={cellStyle}>Photo</td>
            <td style={cellStyle}>{user?.photoURL || ''}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
