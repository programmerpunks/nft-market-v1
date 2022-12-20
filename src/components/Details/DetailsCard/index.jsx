import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'

const DetailsCard = ({ data }) => {
  return (
    <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex">
        <button type="button">
          <IoIosArrowBack />
        </button>
        <p>Back</p> <span className="ml-2"> | </span>{' '}
        <span className="ml-2"> Wingardium </span>
      </div>
      <div className="ml-1">
        <p className="text-3xl font-bold my-5">{data[0].Name}</p>
        <p className=""> Token ID {data[0].id}</p>
        <div className=" flex flex-wrap py-3 gap-1 font-bold">
          <button
            type="button"
            className="bg-black text-white text-sm px-1 rounded "
          >
            Count: {data[0].attribute}
          </button>
          <button
            type="button"
            className="bg-black text-white text-sm px-1 rounded"
          >
            Energy: {data[0].energy}
          </button>
          <button
            type="button"
            className="bg-black text-white text-sm px-1 rounded"
          >
            Grade: {data[0].Grade}
          </button>
          <button
            type="button"
            className="bg-black text-white text-sm px-1 rounded"
          >
            Health: {data[0].Health}
          </button>
          <button
            type="button"
            className="bg-black text-white text-sm px-1 rounded"
          >
            Luck: {data[0].luck}
          </button>
          <button
            type="button"
            className="bg-black text-white text-sm px-1 rounded"
          >
            Type: {data[0].type}
          </button>
        </div>
        <div>
          <p className="py-4"> Owned By {data[0].owner}</p>
        </div>
        <p className="text-sm text-gray-700 mb-2 dark:text-white/75"> Market Status</p>
        <p className="font-bold text-xl"> {data[0].status}</p>
        <button className="mt-4 w-full sm:text-lg text-sm font-medium text-center bg-white border border-black rounded-md hover:font-extrabold dark:bg-neutral-800 dark:text-white dark:border-white">
          <p className=" px-5 py-3">Place a bid</p>
        </button>
      </div>
    </div>
  )
}

export default DetailsCard
