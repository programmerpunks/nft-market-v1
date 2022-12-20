import { ConfigProvider, Modal } from 'antd'
import { RxCross2 } from 'react-icons/rx'

import { useState } from 'react'

import AddToCartButton from '../../shared/AddToCartButton'
import BuyNowButton from '../../shared/BuyNowButton'
import ModalComponent from '../ModalComponent'
import { useSelector } from 'react-redux'

const NftCard = ({ nft }) => {
  const theme = useSelector(state => state.theme)
  const [modalOpen, setModalOpen] = useState(false)
  const { provider, name, token_id, price, img } = nft
  return (
    <div className="rounded-lg bg-white hover:-translate-y-3 hover:duration-500 shadow-lg dark:bg-neutral-800">
      <button onClick={() => setModalOpen(true)} className="text-left">
        <img src={img} alt="profile" className="rounded-t-lg" />
        <div className="px-4 pt-4 text-xs font-normal space-y-4 text-gray-700 dark:text-white">
          <div className='space-y-1'>
            <p className='dark:text-white/70'>{provider}</p>
            <p className="text-base font-bold text-black dark:text-white">{name}</p>
            <p className='dark:text-white/70'>Token ID {token_id}</p>
          </div>
          <div className='space-y-1'>
            <p>Price</p>
            <p className="text-base">{price ? price : 'Not for Sale'}</p>
          </div>
        </div>
      </button>
      <ConfigProvider
        theme={{
          token: {
            colorBgBase: `${theme ==='dark' ? '#171717' : '#E2E8F0'}`,
          },
        }}
      >
        <Modal
          centered
          width={1100}
          closeIcon={<RxCross2 size={20} className='text-gray-500'/>}
          destroyOnClose={true}
          footer={null}
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
        >
          <ModalComponent nft={nft} />
        </Modal>
      </ConfigProvider>

      <div className="p-3 text-xs font-normal space-y-2">
        <AddToCartButton
          button_style="w-full text-sm font-medium text-center bg-gray-300 rounded-md hover:font-extrabold dark:bg-neutral-900"
          p_style="px-5 py-2"
        />

        <BuyNowButton
          button_style="w-full text-sm font-medium text-center bg-green-500 rounded-md text-white hover:font-extrabold"
          p_style="px-5 py-2"
        />
      </div>
    </div>
  )
}
export default NftCard
