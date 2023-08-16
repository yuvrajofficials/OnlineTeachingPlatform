import React from 'react'
import Maincontent from '../mainpage/MainContent'
import Header from '../heading/Header';
import Footer from '../footer/Footer';
import StreameNavGenerate  from './StreameNavGenerate';

const JrCollege = () => {
  return (
    <>
 
      <Header/>
      <div className='mainMycoursecss'>
      <div class="inline-flex overflow-hidden bg-white rounded-lg dark: rtl:flex-row-reverse dark: dark:divide-gray-700 w-screen justify-center border-b-2">
             
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasekids"typeofstudyMaterial=" CLASS XI SCIENCE"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchaseprimary"typeofstudyMaterial=" CLASS XII SCIENCE"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasejrcollege"typeofstudyMaterial=" CLASS XI COMMERCE"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchaseugpg"typeofstudyMaterial=" CLASS XII COMMERCE"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasecoding"typeofstudyMaterial=" CLASS XI ARTS"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasegovernment"typeofstudyMaterial=" CLASS XII ARTS"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasecreativity"typeofstudyMaterial="NEET"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasecreativity"typeofstudyMaterial="JEE"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasecreativity"typeofstudyMaterial="CA"/>
             <StreameNavGenerate  Linkofpage="/Elearning-Platform/purchasecourse/purchasecreativity"typeofstudyMaterial="CET"/>
           </div>
   
      <div className='grid-container'>

    
    <Maincontent buttonText=" CLASS XI SCIENCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XII SCIENCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XI COMMERCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XII COMMERCE" className="grid-item"/>
    <Maincontent buttonText=" CLASS XI ARTS" className="grid-item"/>
    <Maincontent buttonText=" CLASS XII ARTS" className="grid-item"/>
    <Maincontent buttonText="NEET" className="grid-item"/>
    <Maincontent buttonText="JEE" className="grid-item"/>
    <Maincontent buttonText="CET" className="grid-item"/>
    <Maincontent buttonText="CA" className="grid-item"/>
    </div>
    <Footer/>
    </div>
   


    </>
  )
}

export default JrCollege
