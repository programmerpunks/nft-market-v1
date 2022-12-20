const NftSelector = ({ selectorTab, setSelectorTab }) => {
  const active_css = 'bg-black text-white dark:bg-white dark:text-black'
  const default_css = 'flex-1 rounded-full py-3 sm:py-[12px] sm:text-base sm:font-medium'
  return (
    <div className="text-center bg-white rounded-full font-medium dark:bg-neutral-800">
      <div className="flex justify-evenly">
        <button
          onClick={() => setSelectorTab('all')}
          className={`${default_css} ${selectorTab === 'all' ? active_css : ''}`}
        >
          <p>All</p>
        </button>
        <button
          onClick={() => setSelectorTab('listing')}
          className={`${default_css} ${selectorTab === 'listing' ? active_css : ''}`}
        >
          <p>Listings</p>
        </button>
        <button
          onClick={() => setSelectorTab('offers')}
          className={`${default_css} ${selectorTab === 'offers' ? active_css : ''}`}
        >
          <p>Offers</p>
        </button>
        <button
          onClick={() => setSelectorTab('sold')}
          className={`${default_css} ${selectorTab === 'sold' ? active_css : ''}`}
        >
          <p>Sold</p>
        </button>
      </div>
    </div>
  )
}
export default NftSelector
