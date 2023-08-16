import React from 'react'
import ButtonForStudyMaterial from '../buttons/ButtonForStudyMaterial'
import Study from './Study.css'

const StudyMaterialRender = () => {
  return (
    <>
      <div class="inline-flex overflow-hidden bg-white rounded-lg dark: rtl:flex-row-reverse dark: dark:divide-gray-700 w-screen justify-center border-b-2">
             
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studykids"typeofstudyMaterial="Kids "/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studyprimary"typeofstudyMaterial="Primary"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studyjrcollege"typeofstudyMaterial="Jr. College"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studyugpg"typeofstudyMaterial="UG & PG"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studycoding"typeofstudyMaterial="Coding"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studygovernment"typeofstudyMaterial="Government"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/studymaterial/studycreativity"typeofstudyMaterial="Creativity"/>
           </div>
    </>
  )
}

export default StudyMaterialRender
