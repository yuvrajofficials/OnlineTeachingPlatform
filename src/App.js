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
    path: "/OnlineTeachingPlatform",
    element: <HomePage/>,
  },
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/OnlineTeachingPlatform/studymaterial",
    element: <StudyMaterial/>,
  },
  {
    path: "/OnlineTeachingPlatform/mycourse",
    element: <MyCourses/>,
  },
{
  path: "/OnlineTeachingPlatform/purchasecourse",
  element: <PurchaseCourse/>,
},

  {
    path: "/OnlineTeachingPlatform/myprofile",
    element: <Profile/>,
  },
  {
    path:"/OnlineTeachingPlatform/createaccount",
    element: <RenderCreateAccount/>
  },
  {
    path: "/OnlineTeachingPlatform/login",
    element: <LoginForm/>,
  },
  {
    path: "/OnlineTeachingPlatform/coursevideo",
    element: <CourseVideo/>,
  },
  {
    path: "/OnlineTeachingPlatform/instututelogin" ,
    element: <InstituteLoginForm/>,
  },
  {
    path: "/OnlineTeachingPlatform/kidscontent" ,
    element: <Kidscontent/>
  },
  {
    path: "/OnlineTeachingPlatform/jrcollege",
    element: <JrCollege/>,
  },
  {
    path: "/OnlineTeachingPlatform/primary",
    element: <Primary/>,
  },
  {
    path: "/OnlineTeachingPlatform/ugpg",
    element: <UgCourses/>,
  },
  {
    path: "/OnlineTeachingPlatform/government" ,
    element: <Government/>,
  },
  {
    path: "/OnlineTeachingPlatform/codingcontent"  ,
    element: <CodingContent/>,
  },
  {
    path: "/OnlineTeachingPlatform/creativitycontent"  ,
    element: <CreativityContent/>,
  },
  {
    path: "/OnlineTeachingPlatform/studymaterial/studycreativity"  ,
    element: <StudyCreativity/>,
  },
  {
    path: "/OnlineTeachingPlatform/studymaterial/studyjrcollege" ,
    element: <StudyJrCollege/>,
  },
  {
    path: "/OnlineTeachingPlatform/studymaterial/studyprimary" ,
    element: <StudyPrimary/>,
  },
  {
    path: "/OnlineTeachingPlatform/studymaterial/studycoding" ,
    element: <StudyCoding/>,
  },
 
  {
    path: "/OnlineTeachingPlatform/studymaterial/studykids" ,
    element: <StudyKidsContent/>,
  },
  {
    path: "/OnlineTeachingPlatform/studymaterial/studyugpg" ,
    element: <StudyUgPg/>,
  },
 
  {
    path: "/OnlineTeachingPlatform/studymaterial/studygovernment" ,
    element: <StudyGovernment/>,
  },
 
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchasecreativity"  ,
    element: <PurchaseCreativity/>,
  },
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchasejrcollege" ,
    element: <PurchaseJrCollege/>,
  },
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchaseprimary" ,
    element: <PurchasePrimary/>,
  },
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchasecoding" ,
    element: <PurchaseCoding/>,
  },
 
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchasekids" ,
    element: <PurchaseKids/>,
  },
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchaseugpg" ,
    element: <PurchaseUgPg/>,
  },
 
  {
    path: "/OnlineTeachingPlatform/purchasecourse/purchasegovernment" ,
    element: <PurchaseGovernment/>,
  },
  {
    path: "/OnlineTeachingPlatform/mycourse/coursevideo" ,
    element: <CourseVideo/>,
  },
  {
    path: '/OnlineTeachingPlatform/mycourse/webdev' ,
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


