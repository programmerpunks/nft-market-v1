import { BsInfo, BsClockHistory } from 'react-icons/bs'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineStackedLineChart } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import InformationBar from '../InformationBar'

const SearchBarAndIcons = () => {
  return (
    <div className="flex md:flex-row-reverse gap-3 justify-between">
      <div className="rounded-md border-gray-500/50 border bg-white dark:bg-neutral-800 dark:border-black">
        <div className="flex h-[100%] items-center gap-2 px-2">
          <IoSearchSharp size={32}></IoSearchSharp>
          <input
            type="text"
            placeholder="Token ID"
            className="h-[100%] w-[70px] outline-none dark:bg-neutral-800"
          />
        </div>
      </div>
      <div className='hidden lg:block'>
        <InformationBar />
      </div>
      <div className='flex gap-3 items-center'>
        <button className="rounded-full bg-white p-1 dark:bg-neutral-800">
          <BsInfo size={30} />
        </button>
        <button className="rounded-full bg-white p-1 dark:bg-neutral-800">
          <BsClockHistory size={30} fontStyle={'bold'} />
        </button>
        <button className="rounded-full bg-white p-1 dark:bg-neutral-800">
          <MdOutlineStackedLineChart size={30} />
        </button>
        <button className="rounded-full bg-white p-1 dark:bg-neutral-800">
          <TbWorld size={30} />
        </button>
      </div>
    </div>
  )
}
export default SearchBarAndIcons
