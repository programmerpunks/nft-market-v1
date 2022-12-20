import { SlEqualizer } from 'react-icons/sl'

const Filters = () => {
  return (
    <div className="flex gap-2 text-xs md:text-base h-10 sm:h-12">
      <button className="bg-white rounded-lg px-4 flex-1 md:flex md:space-x-1 md:justify-center md:items-center dark:bg-neutral-800">
        <p>Token ID</p>
        <p className='hidden md:block'>-</p>
        <p>Lowest</p>
      </button>
      <button className="bg-white rounded-lg px-4 flex-1 md:flex md:space-x-1 md:justify-center md:items-center dark:bg-neutral-800">
        <p>Token ID</p>
        <p className='hidden md:block'>-</p>
        <p>Highest</p>
      </button>
      <button className="bg-white rounded-lg px-4 flex items-center gap-4 lg:px-8 dark:bg-neutral-800">
        <p className='text-base font-bold hidden lg:block'>Traits</p>
        <SlEqualizer size={25} className="rotate-90" />
      </button>
    </div>
  )
}
export default Filters
