import { actionCreators } from "../../../states";
import GeneralButton from "../GeneralButton";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import { TbMoon } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const changeTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      dispatch(actionCreators.toggleTheme("light"));
    } else {
      document.documentElement.classList.add("dark");
      dispatch(actionCreators.toggleTheme("dark"));
    }
  };
  return (
    <header className="bg-slate-200 flex justify-center px-4 sm:px-10 dark:bg-black dark:text-white">
      <div className="max-w-[1400px] w-full py-3 sm:py-5">
        <div className="flex justify-between items-center">
          <Link to={'/'}>
            <div>
              <p>NFT</p>
            </div>
          </Link>
          <div className="flex gap-2 sm:gap-5">
            <button className="rounded-full bg-white p-2 dark:bg-neutral-800">
              <IoSearchSharp size={25}></IoSearchSharp>
            </button>
            <GeneralButton
              text="Connect Wallet"
              button_style="text-sm sm:text-lg font-medium rounded-full bg-white dark:bg-neutral-800"
              p_style="px-3 py-1 sm:px-4"
            />
            <button
              onClick={() => changeTheme()}
              className="rounded-full bg-white p-2 dark:bg-neutral-800"
            >
              {theme === "dark" ? (
                <MdOutlineLightMode size={25} />
              ) : (
                <TbMoon size={25} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
