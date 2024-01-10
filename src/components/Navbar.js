import  { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ListItemIcon } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut,auth  } from '../config/firebase';
import {logout } from '../redux/userSlice';
import {useDispatch} from 'react-redux'



function Navbar() {
 
  const dispatch = useDispatch()
  const [AccountAnchorEl, setAccountAnchorEl] = useState(null);
  const [NotificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [HamburgerAnchorEl, setHamburgerAnchorEl] = useState(null);

    const AccountOpen = Boolean(AccountAnchorEl);
    const NotificationsOpen = Boolean(NotificationsAnchorEl);
    const HamburgerOpen = Boolean(HamburgerAnchorEl);

    const handleAccountClick = (event) => {
        setAccountAnchorEl(event.currentTarget);
    };
    const handleNotificationsClick = (event) => {
        setNotificationsAnchorEl(event.currentTarget);
    };
    const handleHamburgerClick = (event) => {
        setHamburgerAnchorEl(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountAnchorEl(null);
    };
    const handleNotificationsClose = () => {
        setNotificationsAnchorEl(null);
    };
    const handleHamburgerClose = () => {
        setHamburgerAnchorEl(null);
    };


 //take current user from context
 const {user} = useSelector((state) => state.user || []);
 const logOut = async () => {
  try {
    await signOut(auth).then(() => {
      dispatch(logout());
    }).catch((err) => {
      console.error(err);
    });
  } catch (err) {
    console.error(err);
  }
};

  

  return (
    <div className="bg-purple-900 text-white relative">
      <div className="flex justify-between items-center px-4 py-2">
        <Link to="/"><div className="text-xl font-semibold">Mini_LMS</div></Link>
        <div className="flex space-x-4">
          <div className="relative">
            <button onClick={handleNotificationsClick} className="hover:text-quinaryAccent">
              <NotificationsIcon className="cursor-pointer" sx={{ fontSize: 24 }} />
            </button>
            <Menu
              anchorEl={NotificationsAnchorEl}
              open={NotificationsOpen}
              onClose={handleNotificationsClose}
            >
              
                
                <MenuItem>Notification1</MenuItem>
                <MenuItem>Notification2</MenuItem>
                <MenuItem>Notification3</MenuItem>
              
              </Menu>
          </div>
          <div className="relative">
            <button onClick={handleAccountClick} className="hover:text-quinaryAccent">
              <Avatar className="cursor-pointer" src={user?.photoUrl}
                
                sx={{ width: 26, height: 26 }}
              >
                {user?.email[0]}
              </Avatar>
            </button>
            
                <Menu 
                anchorEl={AccountAnchorEl}
                open={AccountOpen}
                onClose={handleAccountClose}
                // className="absolute right-0 mt-2 w-[150px] text-black bg-white border border-slate-300 shadow-md rounded-md flex flex-col"
                >
                    {/* Account dropdown */}
                    <MenuItem 
                      
                    >
                    <Link to="/profile">
                        Profile
                    </Link>
                    </MenuItem>
                    <MenuItem>
                      {user?.role === "Teacher" && <Link to="/createcourse">Create Course</Link>}
                    </MenuItem>
                    {user ? (
                      <MenuItem onClick={logOut}>
                        <ListItemIcon>
                          <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    ) : (
                      <MenuItem>
                        <Link to="/login">Login</Link>
                      </MenuItem>
                    )}
                    
              </Menu>
          
          </div>
          <div className="relative">
            <button onClick={handleHamburgerClick} className="hover:text-quinaryAccent">
              <MenuIcon className="cursor-pointer" sx={{ fontSize: 24 }} />
            </button>
            <Menu 
                anchorEl={HamburgerAnchorEl}
                open={HamburgerOpen}
                onClose={handleHamburgerClose}
                >
                <MenuItem>
                    <Link to="/" className=" px-4 text-lg">
                        Home
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="/mycourses" className=" px-4 text-lg">
                        My Courses
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="/shorts" className=" px-4 text-lg">
                        Shorts
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="/3dlearning" className=" px-4 text-lg">
                        3D Learning
                    </Link>
                    </MenuItem>
                    <MenuItem>
                    <Link to="/planner" className=" px-4 text-lg">
                        Planner
                    </Link>
                    </MenuItem>
                
                </Menu>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
