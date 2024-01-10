import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import courseContentList from '../utils/AllCourses';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const CoursePage = () => {
  const { courseId } = useParams();

  const courseContent = courseContentList.find((course) => course.courseId === courseId);
  const courseVideoList = courseContent?.content.filter((content) => content.type === 'video');
  const courseMaterialList = courseContent?.content.filter((content) => content.type === 'pdf');
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderContent = (content) => {
    switch (content?.type) {
      case 'video':
        return (
          <div key={content.title}>
            <p className='text-xl font-semibold p-4'>{content.title}</p>
            <iframe
              width="100%"
              className='md:h-[380px] xl:h-[500px]'
              src={content.link}
              title={content.title}
              type="text/html"
              allowFullScreen
            ></iframe>

          </div>
        );

      case 'pdf':
        return (
          <div key={content.title} className='my-4'>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>{content.title}</div>
        </AccordionSummary>
        <AccordionDetails>
        <iframe src={content.link}
            type="application/pdf"
            title={content.title}
            width="100%" height="500px"></iframe>
        </AccordionDetails>
      </Accordion>
            
            
          </div>
        );
      case 'text':
        return (
          <div key={content.title} className='w-[100%] bg-slate-100 rounded-full p-2'>
            <p>{content.description}</p>
            <p>{content.type}</p>
          </div>
        );

      default:
        return (
          <div key={content.title}>
            <p>{content.title}</p>
            <p>{content.type}</p>
            <p>{content.link}</p>
          </div>
        );
    }
  };

  return (
    <div>
      <Navbar />
      <div className='xl:mx-[200px] '>
      <p className='mx-4 text-xl font-semibold my-2'
      >{courseContent?.title}</p>
      <div className='bg-green-200 w-[fit-content] px-2 py-[2px] rounded-full mx-4 text-xs font-[600] text-slate-800'
      >{courseContent?.category}</div>
      <div>
        <Box >
          <Tabs value={value} onChange={handleChange}  
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Videos" {...a11yProps(1)} />
            <Tab label="Material" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {courseContent?.content?.map((content) => renderContent(content))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {courseVideoList?.map((video) => renderContent(video))}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {courseMaterialList?.map((material) => renderContent(material))}
        </CustomTabPanel>
      </div>
    </div>
    </div>
  );
};

export default CoursePage;
