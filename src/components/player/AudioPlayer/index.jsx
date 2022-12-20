import {
  AiFillStepBackward,
  AiFillStepForward,
  AiOutlinePlus,
} from "react-icons/ai";
import { HiPlay, HiPause } from "react-icons/hi2";
import jaxImg from "../../../images/jax.png";
import { useState } from "react";
import { VscChromeMinimize } from "react-icons/vsc";

const AudioPlayer = () => {
  const [minimizeBtn, setMinimizeBtn] = useState(true);
  const [play, setPlay] = useState(false);
  const toggleMinimize = () => {
    if (minimizeBtn) {
      document
        .getElementById("player")
        .removeEventListener("click", () => toggleMinimize());
      document.getElementById("player-details").classList.remove("hidden");
    } else {
      document
        .getElementById("player")
        .addEventListener("click", () => toggleMinimize());
      document.getElementById("player-details").classList.add("hidden");
    }
    setMinimizeBtn(!minimizeBtn);
  };
  return (
    <div className="hidden lg:block fixed bottom-8 left-0 px-8 z-70">
      <div className="relative duration-100">
        <button
          onClick={() => toggleMinimize()}
          className="absolute duration-300 hover:scale-110 active:scale-95 transform flex items-center justify-center -top-5 -right-5 z-30 h-10 w-10 border-2 rounded-full overflow-hidden bg-slate-200 text-black border-slate-300 dark:bg-neutral-700 dark:border-neutral-600"
        >
          {minimizeBtn ? (
            <AiOutlinePlus size={20} className="dark:text-white" />
          ) : (
            <VscChromeMinimize
              size={20}
              strokeWidth={1}
              className="dark:text-white"
            />
          )}
        </button>
        <div
          title="Nuclear Lethargy by Lane 8"
          className="duration-300 bg-slate-200  h-14 shadow-md  flex  rounded-md relative dark:bg-neutral-700"
        >
          <div id="player" onClick={() => toggleMinimize()} className="flex">
            <img
              className=" transform duration-200  h-20 -translate-y-6 hover:h-24 hover:-translate-y-10"
              src={jaxImg}
              alt="jax"
            />
            <div className="icon ml-4 mr-4 pausedicon">
              <span className="bg-opacity-80 bg-black"></span>
              <span className="bg-opacity-80 bg-black"></span>
              <span className="bg-opacity-80 bg-black"></span>
            </div>
          </div>
          <div className="flex hidden" id="player-details">
            <div className=" text-left  w-40 pr-8 flex flex-col justify-center">
              <h3 className="font-bold uppercase text-md truncate">
                Nuclear Lethargy
              </h3>
              <h4 className="uppercase font-mono text-2xs 0 opacity-40 truncate">
                Lane 8
              </h4>
            </div>
            <div className="grid grid-cols-3 rounded-md w-36 mr-2">
              <div className="flex items-center justify-center">
                <button className="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95">
                  <AiFillStepBackward size={20} className="dark:text-white" />
                </button>
              </div>
              <div id="pause" className="flex items-center justify-center">
                <button
                  className="h-10 w-10 rounded-full flex items-center justify-center transform hover:scale-110 active:scale-95"
                  onClick={() => setPlay(!play)}
                >
                  {play ? <HiPause size={25} /> : <HiPlay size={25} />}
                </button>
              </div>
              <div className="flex items-center justify-center">
                <button className="h-8 w-8 flex items-center justify-center transform hover:scale-110 active:scale-95">
                  <AiFillStepForward size={20} className="dark:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
