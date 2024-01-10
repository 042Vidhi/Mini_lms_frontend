import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ClearIcon from '@mui/icons-material/Clear';
import InputAdornment from '@mui/material/InputAdornment';
import CourseCard from '../components/CourseCard';
import {  useSelector } from 'react-redux';
import TempMyCourses from '../utils/TempMyCourses'
import {useNavigate} from 'react-router-dom';



const MyCourses = () => {
  const [filter, setFilter] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('courseName'); // Set default value

  const navigate = useNavigate();
//  const myCourses = TempMyCourses;

  let { courseItems } = useSelector((state) => state.mycourseList || []);
  // courseItems.sort()
  let { starItems } = useSelector((state) => state.starredCourse || []);

  //Call user 
  let { user } = useSelector((state) => state.user || []);
  console.log("myCourses user",user);

  // useEffect(() => {
  // if(user==null){

  //   navigate('/login');
  // }
  // }, [user]);


  let starAndMyCourses = starItems.concat(courseItems);

  console.log("myCourses My Course",courseItems);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <Navbar />
          <p className='text-center text-sm text-bold'>Hi, {user?.displayName || user?.email}</p>
      <div className='pt-4 flex items-center justify-center'>
        <div className=''>
          <FormControl sx={{ m: 1}} size='small'
            className='xl:w-[120px]'
          >
            <InputLabel id='filter-label'>Filter</InputLabel>
            <Select
              labelId='filter-label'
              id='demo-simple-select'
              value={filter}
              label='All'
              onChange={handleChange}
              sx={{fontSize:'0.75rem'}}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Starred"}>Starred</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='mx-4'>
          <TextField
            className='xl:w-[400px] text-[0.75rem]'
            id='search'
            label='Search'
            variant='outlined'
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            size='small'
            sx={{fontSize:'0.75rem'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  {searchQuery && (
                    <ClearIcon
                      className='cursor-pointer'
                      onClick={handleClearSearch}
                      sx={{fontSize:'0.75rem'}}
                    />
                  )}
                </InputAdornment>
              ),
            }}
         inputProps={{
            style: {
                padding: 6
            }
            }}
          />
        </div>
        <div>
          <FormControl sx={{ m: 1 }} size='small'
          className='xl:w-[120px]'
          >
            <InputLabel id='demo-sort-select-label'>Sort By</InputLabel>
            <Select
              labelId='demo-sort-select-label'
              id='demo-sort-select'
              value={sortBy}
              label='Sort By'
              onChange={handleSortChange}
              sx={{fontSize:'0.75rem'}}
            >
              <MenuItem value='lastAccessed'>Last Accessed</MenuItem>
              <MenuItem value='courseName'>Course Name</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <section className='flex justify-center items-center flex-wrap gap-4 pb-4'>
      {Array.isArray(starAndMyCourses) ?
      (
        starAndMyCourses.map((Course) => (
        <CourseCard key={Course.courseId} Course={Course} />
        )))
        :
        (
          <p className='text-center text-xl'>No courses found</p>
        )}


      </section>
    </div>
  );
};

export default MyCourses;
