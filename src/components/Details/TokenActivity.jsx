import React from "react";
const pic = require("../../images/eth.svg").default;
export default function TokenActivity() {
  return (
    <div className="col-span-full rounded-2xl border border-gray-300 bg-white p-6 dark:border-neutral-600 dark:bg-black ">
      <div className="reservoir-h5 font-headings dark:text-white">
        Token Activity
      </div>
      <div className="max-h-96 overflow-auto rounded-2xl">
        <table className="w-full">
          <thead className="">
            <tr className="text-left table-header-row">
              <th className="px-6 py-3 text-left text-sm font-medium text-neutral-600 dark:text-white">
                Event
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-neutral-600 dark:text-white">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-neutral-600 dark:text-white">
                From
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-neutral-600 dark:text-white">
                To
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-neutral-600 dark:text-white">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="overflow-y-scroll">
            <tr className="h-24 border-b border-gray-300 dark:border-[#525252]">
              <td className="px-6 py-4">
                <div className="mr-2.5 flex items-center">
                  <img
                    className="mr-2 h-6 w-6"
                    src="https://raw.githubusercontent.com/reservoirprotocol/indexer/v5/src/models/sources/looksrare-logo.svg"
                    alt="LooksRare Source"
                  />
                  <span className="text-sm capitalize text-neutral-600 dark:text-neutral-300">
                    Offer
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="inline-flex flex-none items-center gap-1">
                  <img src={pic} alt="ETH logo" style={{ width: "8px" }} />
                  <span className="flex-grow whitespace-nowrap font-semibold">
                    0.05
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  className="ml-2.5 mr-2.5 font-light text-primary-700 dark:text-primary-300"
                  href="/address/0x8b972577f77d994323aa6ef60afdc8e160686d44"
                >
                  0x8b…6d44
                </a>
              </td>
              <td className="px-6 py-4">
                <span className="ml-2.5 mr-2.5 font-light">-</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 whitespace-nowrap font-light text-neutral-600 dark:text-neutral-300">
                  24 minutes ago
                </div>
              </td>
            </tr>
            <tr className="h-24 border-b border-gray-300 dark:border-[#525252]">
              <td className="px-6 py-4">
                <div className="mr-2.5 flex items-center">
                  <img
                    className="mr-2 h-6 w-6"
                    src="https://raw.githubusercontent.com/reservoirprotocol/indexer/v5/src/models/sources/opensea-logo.svg"
                    alt="OpenSea Source"
                  />
                  <span className="text-sm capitalize text-neutral-600 dark:text-neutral-300">
                    Listing
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="inline-flex flex-none items-center gap-1">
                  <img src={pic} alt="ETH logo" style={{ width: "8px" }} />
                  <span className="flex-grow whitespace-nowrap font-semibold">
                    0.08
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  className="ml-2.5 mr-2.5 font-light text-primary-700 dark:text-primary-300"
                  href="/address/0x69bab6810fa99475854bca0a3dd72ae6a0728ece"
                >
                  0x69…8ece
                </a>
              </td>
              <td className="px-6 py-4">
                <span className="ml-2.5 mr-2.5 font-light">-</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 whitespace-nowrap font-light text-neutral-600 dark:text-neutral-300">
                  4 days ago
                </div>
              </td>
            </tr>
            <tr className="h-24 border-b border-gray-300 dark:border-[#525252]">
              <td className="px-6 py-4">
                <div className="mr-2.5 flex items-center">
                  <img
                    className="mr-2 h-6 w-6"
                    src="https://raw.githubusercontent.com/reservoirprotocol/indexer/v5/src/models/sources/looksrare-logo.svg"
                    alt="LooksRare Source"
                  />
                  <span className="text-sm capitalize text-neutral-600 dark:text-neutral-300">
                    Listing
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="inline-flex flex-none items-center gap-1">
                  <img src={pic} alt="ETH logo" style={{ width: "8px" }} />
                  <span className="flex-grow whitespace-nowrap font-semibold">
                    0.08
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <a
                  className="ml-2.5 mr-2.5 font-light text-primary-700 dark:text-primary-300"
                  href="/address/0x69bab6810fa99475854bca0a3dd72ae6a0728ece"
                >
                  0x69…8ece
                </a>
              </td>
              <td className="px-6 py-4">
                <span className="ml-2.5 mr-2.5 font-light">-</span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2 whitespace-nowrap font-light text-neutral-600 dark:text-neutral-300">
                  4 days ago
                </div>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
