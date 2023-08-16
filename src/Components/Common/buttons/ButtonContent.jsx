import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonGenerate from './ButtonGenerate';
import { ApartmentOutlined, Book, ChildFriendly, ComputerOutlined, DrawOutlined, Home, HomeMaxOutlined, ImportContacts, LocalPostOfficeOutlined,Man2Outlined,PagesOutlined, PageviewOutlined, SchoolOutlined, SchoolSharp } from '@mui/icons-material';
import { Paper } from '@mui/material';


  const ButtonContent = () => {
  const navigate = useNavigate();
  const renderInstitute = () => { navigate('/Elearning-Platform');  }
  const renderPrimary = () => { navigate('/Elearning-Platform/primary');  }
  const renderJrcollege = () => { navigate('/Elearning-Platform/jrcollege');  }
  const renderCreativity = () => { navigate('/Elearning-Platform/creativity');  }
  const renderUgcourse = () => { navigate('/Elearning-Platform/ugcourse');  }
  const renderCoding = () => { navigate('/Elearning-Platform/coding');  }
  const renderKids = () => { navigate('/Elearning-Platform/kids');  }

  const renderGovernment = () => { navigate('/Elearning-Platform/government');  }
 


  return (
  <>
 
  <div className='grid-container'>
  <ButtonGenerate className='grid-item ' seticons={<SchoolSharp/>} buttonText=" Institute Teaching Environment" pathto="/Elearning-Platform/instututelogin"  />
  <ButtonGenerate className='grid-item ' seticons={<ChildFriendly/>}  buttonText=" Kids Content" Getevent={renderKids} pathto= "/Elearning-Platform/kidscontent" />
  <ButtonGenerate className='grid-item ' seticons={<Book/>}  buttonText=" CLASS 1 - 10 &  Competitive Exams" Getevent={renderPrimary} pathto="/Elearning-Platform/primary"/>
  <ButtonGenerate className='grid-item ' seticons={<ImportContacts/>}  buttonText=" Class 11-12 & Competitive Exams" Getevent={renderJrcollege} pathto="/Elearning-Platform/jrcollege"/>
  <ButtonGenerate className='grid-item ' seticons={<ComputerOutlined/>}  buttonText=" CODING " Getevent={renderCoding} pathto="/Elearning-Platform/codingcontent" />
  <ButtonGenerate className='grid-item ' seticons={<SchoolOutlined/>}  buttonText="UG,PG & Competitive Exam" Getevent={renderUgcourse} pathto="/Elearning-Platform/ugpg" />
  <ButtonGenerate className='grid-item ' seticons={<ApartmentOutlined/>}  buttonText=" Government Exams" Getevent={renderGovernment} pathto="/Elearning-Platform/government" />
  <ButtonGenerate buttonText=" Creativity & Art" seticons={<DrawOutlined/>} Getevent={renderCreativity} pathto= "/Elearning-Platform/creativitycontent"  />

  
  </div>
  </>
  )
}

export default ButtonContent
