import React from 'react'
const pic1 = require('../../../images/download (1).svg').default
const pic2 = require('../../../images/download (2).svg').default
const pic3 = require('../../../images/download (3).svg').default
const pic4 = require('../../../images/download.svg').default

const Description = ({ data }) => {
  return (
    <div className="text-left block p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Description
      </h5>
      <p class="font-normal text-gray-700 dark:text-white/75">
        {data[0].description}
      </p>
      <div className="flex flex-wrap gap-3 justify-between mt-7">
        <img src={pic1} alt="/" />
        Contact
        <img src={pic2} alt="/" />
        MetaData
        <img src={pic3} alt="/" />
        Website
        <img src={pic4} alt="/" />
        BubbleMap
      </div>
    </div>
  )
}
export default Description
