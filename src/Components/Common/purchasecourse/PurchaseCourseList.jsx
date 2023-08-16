import React from 'react'
import StudyMaterialRender from '../studymaterials/StudyMaterialRender'
import ComponentGenerate from './ComponentGenerate'
import PurchaseButtonRender from './PurchaseButtonRender'
import Studycss from '../studymaterials/Study.css'


const PurchaseCourseList = () => {
  return (
    <>
         <PurchaseButtonRender/>
         <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best courses according to your need
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Our Trending and Popular Courses
        </h1>
    </div>
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Yash" coursename="Web Development" imgSrcCourse="https://ventsabout.com/wp-content/uploads/2020/09/1c5bb2ce8ba9dc172d24646eff0ad495.jpg"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Sid" coursename="Sid the Science Kid" imgSrcCourse="https://hips.hearstapps.com/hmg-prod/images/educational-tv-shows-for-kides-sid-the-science-kid-1586123902.jpg"/>
        <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Dr.Manas" coursename="NEET" imgSrcCourse="data:image/jpeg;base64,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"/>
     <ComponentGenerate priceofcourse="1000" viewpagelink="https://www.facebook.com/" stageofcourse="Buy Now" instructor="Ajay" coursename="JEE" imgSrcCourse="data:image/jpeg;base64,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"/>
  
    </div>
</section>
    </>
  )
}

export default PurchaseCourseList