import React,{useState} from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import {  MenuItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToMyCourseList } from '../redux/mycourseSlice';
import { addToStarList } from '../redux/starcourseSlice';
import { useNavigate } from 'react-router-dom';


const CourseCard = ({ Course }) => {
    const [showMenu, setShowMenu] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
        setShowMenu(event.currentTarget);
      };
    
      const handleClose = () => {
        setShowMenu(null);
      };
    
      const handleNavigation  = ()=>{
        navigate(`/course/${Course.courseId}`)
      }
      const handleAddToMyCourse = () => {
        dispatch(addToMyCourseList(Course));
      };
      


  return (
    <div className="w-[280px] p-[10px] h-[220px] bg-white border-[1px] border-slate-300 rounded-lg"
    >
        {Course.image ? (
        <div
          className="w-[260px] h-[120px] rounded bg-blue-200 border-[1px] border-slate-300 overflow-hidden hover:cursor-pointer"
          onClick={handleNavigation}
        >
          <img src={Course.image} alt="Course Image" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div
          className="w-[260px] h-[120px] rounded bg-blue-200 border-[1px] border-slate-300 overflow-hidden hover:cursor-pointer"
          onClick={handleNavigation}
        >
          {/* Render some placeholder content or leave it empty */}
        </div>
      )}
  
        
      
      <div className='flex justify-between'>
        <div className=" font-semibold text-lg truncate
            hover:text-blue-600 hover:cursor-pointer
        "
        onClick={handleNavigation}
        >{Course.title}</div>
        <div className='flex flex-row '>
              {/* Top Right Dropdown */}
              <div className='flex justify-end'>
                  <button onClick={handleClick}>
                    <MoreVertIcon className='text-slate-600 hover:bg-slate-100 hover:rounded-full' />
                  </button>
                  <Menu
                    anchorEl={showMenu}
                    open={Boolean(showMenu)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      className='text-black'
                      onClick={handleAddToMyCourse}
                    >
                      Add to my courses
                    </MenuItem>
                    <MenuItem
                      className='text-black'
                      onClick={()=>dispatch(addToStarList(Course))}
                      >
                        Star Course
                      </MenuItem>
                  </Menu>
              </div>
            </div>
      </div>
      <p className="text-xs text-gray-700 truncate bg-purple-300 w-[fit-content] py-[1px] px-2 rounded-full">{Course.category}</p>
      
    </div>
  );
};

export default CourseCard;
