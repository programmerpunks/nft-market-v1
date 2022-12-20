import React from 'react'
import { BsMedium, BsTwitter } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'

const Footer = () => {
  return (
    <>
      <footer className="bg-black flex justify-center px-5 sm:px-10 text-white">
        <div className="max-w-[1400px] w-full py-10">
          <div className="md:flex md:justify-between items-center text-center mb:max-sm:space-y-5 sm:max-lg:space-y-8 sm:text-xl">
            <div>
              <p>NFTKEY © 2022</p>
            </div>
            <div className="hidden lg:block">
              <p>Your Decentralized NFT Marketplace</p>
            </div>
            <div className="flex justify-center gap-5 sm:gap-9">
              <button>
                <BsMedium size={25} />
              </button>
              <button>
                <BsTwitter size={25} />
              </button>
              <button>
                <SiDiscord size={25} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
