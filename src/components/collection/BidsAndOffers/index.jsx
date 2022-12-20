const BidsAndOffers = () => {
  return (
    <div className="flex gap-4 h-10 font-medium">
      <button className="rounded-full bg-white px-2 dark:bg-neutral-800">
        <p className="capitalize px-3 sm:text-sm">make global bid</p>
      </button>
      <button className="flex-1 rounded-full bg-white px-2 dark:bg-neutral-800">
        <p className="capitalize px-3 sm:text-sm">global offers<span className="rounded-full bg-black text-white px-4 py-[2px] ml-2 items-center dark:bg-white dark:text-black">0</span></p>
      </button>
    </div>
  )
}
export default BidsAndOffers
