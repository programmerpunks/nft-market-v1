import GeneralButton from '../../shared/GeneralButton'

import { Link } from 'react-router-dom'

const ModalComponent = ({
  nft: { provider, currentOwner, name, token_id, price, img, property },
}) => {
  return (
    <div className="md:flex gap-10 py-5 md:px-8 px-4 dark:text-white">
      <div className="flex justify-center">
        <img src={img} alt="profile" className="rounded-lg" />
      </div>
      <div className="flex justify-center mb:max-md:pt-10">
        <div className="text-xs font-normal lg:space-y-5 space-y-3 max-w-[500px]">
          <p className="text-4xl font-bold">{name}</p>
          <p className="text-base">Token ID {token_id}</p>
          <div className="flex gap-4 flex-wrap">
            <div className="bg-black text-white px-2 py-1 rounded-md font-medium">
              <p>
                <span>Attributes count: </span>
                <span>{property.length}</span>
              </p>
            </div>
            {property.map((single_property, index) => {
              return (
                <div
                  className="bg-black text-white px-2 py-1 rounded-md font-medium"
                  key={index}
                >
                  <p>
                    <span>{single_property[0]}: </span>
                    <span>{single_property[1]}</span>
                  </p>
                </div>
              )
            })}
          </div>
          <p className="text-lg">
            Owned by <span>{currentOwner}</span>
          </p>
          <div>
            <p className="text-gray-600 text-sm dark:text-white/75">
              {price ? 'Price' : 'Market status'}
            </p>
            <p className="text-2xl font-medium">
              {price ? price : 'Not for Sale'}
            </p>
          </div>
          <div className='space-y-4'>
            <Link to="/details">
              <button className="w-full sm:text-lg text-sm font-medium text-center bg-white border border-black rounded-md hover:font-extrabold dark:bg-neutral-800 dark:text-white dark:border-white">
                <p className=" px-5 py-3">View full details</p>
              </button>
            </Link>

            <GeneralButton
              text="Place a bid"
              button_style="w-full sm:text-lg text-sm font-medium text-center bg-white border border-black rounded-md text-gray-600 hover:font-extrabold dark:bg-neutral-800 dark:text-white/75 dark:border-white"
              p_style="px-5 py-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ModalComponent
