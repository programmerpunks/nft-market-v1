import { useState } from 'react'
import AllNfts from '../components/collection/AllNfts'
import BidsAndOffers from '../components/collection/BidsAndOffers'
import Filters from '../components/collection/Filters'
import MyNftsToggler from '../components/collection/MyNftsToggler'
import NftSelector from '../components/collection/NftSelector'
// import ProviderDetails from '../components/collection/ProviderDetails'
import ProviderDetailsMobile from '../components/collection/ProviderDetailsMobile'
import nfts from '../nft_api_data'

const Collection = () => {
  const [selectorTab, setSelectorTab] = useState('all')
  const [myNftsSelectorTab, setMyNftsSelectorTab] = useState('off')

  return (
    <div className='space-y-5 text-sm'>
      <ProviderDetailsMobile />
      {/* <ProviderDetails /> */}
      <NftSelector 
        selectorTab={selectorTab}
        setSelectorTab={setSelectorTab}
      />
      <Filters />
      <BidsAndOffers />
      <MyNftsToggler 
        myNftsSelectorTab={myNftsSelectorTab}
        setMyNftsSelectorTab={setMyNftsSelectorTab}
      />
      {selectorTab === 'all' && <AllNfts nfts_data={nfts.nfts_data} />}
    </div>
  )
}
export default Collection
