import React from 'react'

const ReviewsHome = () => {
  return (
    <>
<div class="py-16 bg-gradient-to-br from-green-50 to-cyan-100">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="mb-12 space-y-2 text-center">
        <span class="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-green-100 text-green-600">Blog</span>
        <h2 class="text-2xl text-cyan-900 font-bold md:text-4xl">Sharing is Caring</h2>
        <p class="lg:w-6/12 lg:mx-auto">Quam hic dolore cumque voluptate rerum beatae et quae, tempore sunt, debitis dolorum officia aliquid explicabo? Excepturi, voluptate?</p>
      </div>

      <div class="grid gap-12 lg:grid-cols-2">
        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src="https://arusso.io/images/avataaars.png" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              </div>
              <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
            </div>
          </div>
        </div>
        <div class="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
          <img src="https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50146.jpg?w=2000" alt="art cover" loading="lazy" width="1000" height="667" class="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"/>
          <div class="sm:w-7/12 pl-0 p-5">
            <div class="space-y-2">
              <div class="space-y-4">
                <h4 class="text-2xl font-semibold text-cyan-900">Provident de illo eveniet commodi fuga fugiat laboriosam expedita.</h4>
                <p class="text-gray-600">Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam totam, doloribus eum impedit atque! Temporibus...</p>
              </div>
              <a href="www.tailus.io" class="block w-max text-cyan-600">Read more</a>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
    </>
  )
}

export default ReviewsHome
