import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import HomePage from '../assets/HomePage.png';
import Login from '../assets/Login.png'
import ManagerSideBar from '../Components/Sidebar/ManagerSideBar';

const ManagerPage = () => {
  const navigate = useNavigate();

  const handleManagerButton = () => navigate('/ManagerHomePage');
  const handleStaffButton = () => navigate('/StaffPage');
  const handleAdminButton = () => navigate('/AdminPage');

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
          body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        `}
      </style>
          
      <div style={{
        backgroundImage: `url(${Login})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
      }}>
        <ManagerSideBar />
        <div style={{
          backgroundColor: 'rgba(128, 128, 128, 0.5)', // Màu xám nhạt với độ trong suốt
          padding: '30px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          zIndex: '1',
        }}>
          <img src={logo} alt="Logo" style={{ maxWidth: '300px', maxHeight: '300px', marginBottom: '20px' }} />
          <h1 style={{ 
            marginTop: '10px', 
            fontFamily: 'Roboto, sans-serif', 
            color: '#fff4fc', 
            fontSize: '2.5rem' // Điều chỉnh kích thước font theo nhu cầu
          }}>
            Welcome Manager
          </h1>
           <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
           {/* <Button variant='outlined' onClick={handleManagerButton}
              sx={{
                backgroundColor: '#e39994',
                color: 'white',
                border: '1px solid #e39994',
                '&:hover': {
                  backgroundColor: '#e39994',
                  borderColor: 'white',
                },
                borderRadius: '50px',
              }}>
              Manager management
            </Button>
*/}
            <Button variant='outlined' onClick={handleStaffButton}
              sx={{
                borderRadius: '50px',
                height: '60px',
                backgroundColor: '#e39994',
                color: 'white',
                border: '1px solid #e39994',
                '&:hover': {
                  backgroundColor: '#e39994',
                  borderColor: 'white',
                },
              }}>
              Staff management
            </Button>
          </div> 
        </div>
      </div>
    </>
  );
}

export default ManagerPage;
