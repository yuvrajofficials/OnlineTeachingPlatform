import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter,createBrowserRouter,
  RouterProvider,} from 'react-router-dom'

import HomePage from './Components/allmainpages/HomePage' 
import StudyMaterial from './Components/allmainpages/StudyMaterial' 
import MyCourses from '././Components/allmainpages/MyCourses'
import Profile from '././Components/allmainpages/Profile'
import LoginForm from './Components/Common/forms/LoginForm'
import PurchaseCourse from './Components/allmainpages/PurchaseCourse';
import RenderCreateAccount from './Components/Common/forms/RenderCreateAccount';
import PrimaryMaterial from './Components/Common/studymaterials/PrimaryMaterial';
import StudyMaterialRender from './Components/Common/studymaterials/StudyMaterialRender';
import InstituteLoginForm from './Components/Common/forms/InstituteLoginForm';
import CodingContent from './Components/Common/streams/CodingContent';
import CreativityContent from './Components/Common/streams/CreativityContent';
import Government from './Components/Common/streams/Government';
import JrCollege from './Components/Common/streams/JrCollege';
import Kidscontent from './Components/Common/streams/Kidscontent';
import UgCourses from './Components/Common/streams/UgCourse';
import Primary from './Components/Common/streams/Primary';
import StudyCreativity from './Components/Common/studymaterials/StudyCreativity';
import StudyKidsContent from './Components/Common/studymaterials/StudyKidsContent';
import StudyJrCollege from './Components/Common/studymaterials/StudyJrCollege';
import StudyPrimary from './Components/Common/studymaterials/StudyPrimary';
import StudyGovernment from './Components/Common/studymaterials/StudyGovernment';
import StudyCoding from './Components/Common/studymaterials/StudyCoding';
import StudyUgPg from './Components/Common/studymaterials/StudyUgPg';
import PurchasePrimary from './Components/Common/purchasecourse/PurchasePrimary';
import PurchaseGovernment from './Components/Common/purchasecourse/PurchaseGovernment';
import PurchaseCreativity from './Components/Common/purchasecourse/PurchaseCreativity';
import PurchaseKids from './Components/Common/purchasecourse/PuchaseKids';
import PurchaseCoding from './Components/Common/purchasecourse/PurchaseCoding';
import PurchaseJrCollege from './Components/Common/purchasecourse/PurchaseJrCollege';
import PurchaseUgPg from './Components/Common/purchasecourse/PurchaseUgPg';
import CourseVideo from './Components/Common/videoPlayers/CourseVideo';
import AllOptionGenerate from './Components/Common/flashcards/AllOptionGenerate';

const router = createBrowserRouter([

  {
    path: "/Elearning-Platform",
    element: <HomePage/>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/Elearning-Platform/studymaterial",
    element: <StudyMaterial/>,
  },
  {
    path: "/Elearning-Platform/mycourse",
    element: <MyCourses/>,
  },
{
  path: "/Elearning-Platform/purchasecourse",
  element: <PurchaseCourse/>,
},

  {
    path: "/Elearning-Platform/myprofile",
    element: <Profile/>,
  },
  {
    path:"/Elearning-Platform/createaccount",
    element: <RenderCreateAccount/>
  },
  {
    path: "/Elearning-Platform/login",
    element: <LoginForm/>,
  },
  {
    path: "/Elearning-Platform/coursevideo",
    element: <CourseVideo/>,
  },
  {
    path: "/Elearning-Platform/instututelogin" ,
    element: <InstituteLoginForm/>,
  },
  {
    path: "/Elearning-Platform/kidscontent" ,
    element: <Kidscontent/>
  },
  {
    path: "/Elearning-Platform/jrcollege",
    element: <JrCollege/>,
  },
  {
    path: "/Elearning-Platform/primary",
    element: <Primary/>,
  },
  {
    path: "/Elearning-Platform/ugpg",
    element: <UgCourses/>,
  },
  {
    path: "/Elearning-Platform/government" ,
    element: <Government/>,
  },
  {
    path: "/Elearning-Platform/codingcontent"  ,
    element: <CodingContent/>,
  },
  {
    path: "/Elearning-Platform/creativitycontent"  ,
    element: <CreativityContent/>,
  },
  {
    path: "/Elearning-Platform/studymaterial/studycreativity"  ,
    element: <StudyCreativity/>,
  },
  {
    path: "/Elearning-Platform/studymaterial/studyjrcollege" ,
    element: <StudyJrCollege/>,
  },
  {
    path: "/Elearning-Platform/studymaterial/studyprimary" ,
    element: <StudyPrimary/>,
  },
  {
    path: "/Elearning-Platform/studymaterial/studycoding" ,
    element: <StudyCoding/>,
  },
 
  {
    path: "/Elearning-Platform/studymaterial/studykids" ,
    element: <StudyKidsContent/>,
  },
  {
    path: "/Elearning-Platform/studymaterial/studyugpg" ,
    element: <StudyUgPg/>,
  },
 
  {
    path: "/Elearning-Platform/studymaterial/studygovernment" ,
    element: <StudyGovernment/>,
  },
 
  {
    path: "/Elearning-Platform/purchasecourse/purchasecreativity"  ,
    element: <PurchaseCreativity/>,
  },
  {
    path: "/Elearning-Platform/purchasecourse/purchasejrcollege" ,
    element: <PurchaseJrCollege/>,
  },
  {
    path: "/Elearning-Platform/purchasecourse/purchaseprimary" ,
    element: <PurchasePrimary/>,
  },
  {
    path: "/Elearning-Platform/purchasecourse/purchasecoding" ,
    element: <PurchaseCoding/>,
  },
 
  {
    path: "/Elearning-Platform/purchasecourse/purchasekids" ,
    element: <PurchaseKids/>,
  },
  {
    path: "/Elearning-Platform/purchasecourse/purchaseugpg" ,
    element: <PurchaseUgPg/>,
  },
 
  {
    path: "/Elearning-Platform/purchasecourse/purchasegovernment" ,
    element: <PurchaseGovernment/>,
  },
  {
    path: "/Elearning-Platform/mycourse/coursevideo" ,
    element: <CourseVideo/>,
  },
  {
    path: 'Elearning-Platform/mycourse/webdev' ,
    element: <AllOptionGenerate/>,
  },
 
  
]);




const App = () => {
  return (
   
        <>
  
  
  <RouterProvider router={router}/>
  
    
  </>
    
  )
}

export default App


