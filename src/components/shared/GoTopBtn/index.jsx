import { MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useState } from "react";

const GoTopBtn = () => {
  const [isVisible, setisVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const scrolledHeight =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolledHeight > heightToHidden) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <div className="mb-6 flex justify-end fixed right-7 sm:pr-9 bottom-5">
          <button
            className="shadow-2xl bg-white p-2 rounded-full dark:bg-neutral-800 dark:text-white"
            onClick={goToBtn}
          >
            <MdKeyboardArrowUp size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GoTopBtn;
