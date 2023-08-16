import React from 'react'
import ButtonForStudyMaterial from '../buttons/ButtonForStudyMaterial'
const PurchaseButtonRender = () => {
  return (
    <>
      <div class="inline-flex overflow-hidden bg-white rounded-lg dark: rtl:flex-row-reverse dark: dark:divide-gray-700 w-screen justify-center border-b-2">
             
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchasekids"typeofstudyMaterial="Kids "/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchaseprimary"typeofstudyMaterial="Primary"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchasejrcollege"typeofstudyMaterial="Jr. College"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchaseugpg"typeofstudyMaterial="UG & PG"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchasecoding"typeofstudyMaterial="Coding"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchasegovernment"typeofstudyMaterial="Government"/>
             <ButtonForStudyMaterial Linkofpage="/Elearning-Platform/purchasecourse/purchasecreativity"typeofstudyMaterial="Creativity"/>
           </div>
    </>
  )
}

export default PurchaseButtonRender
