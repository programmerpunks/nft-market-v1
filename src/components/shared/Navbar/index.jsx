import { actionCreators } from '../../../states'
import GeneralButton from '../GeneralButton'
import { IoSearchSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdOutlineLightMode } from 'react-icons/md'
import { TbMoon } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const theme = useSelector((state) => state.theme)
  const fill_bg = theme === 'light' ? 'black' : 'white'
  const fill_text = theme === 'light' ? 'white' : 'black'
  const dispatch = useDispatch()
  const changeTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
      dispatch(actionCreators.toggleTheme('light'))
    } else {
      document.documentElement.classList.add('dark')
      dispatch(actionCreators.toggleTheme('dark'))
    }
  }
  return (
    <header className="bg-slate-200 flex justify-center px-4 sm:px-10 dark:bg-black dark:text-white">
      <div className="max-w-[1400px] w-full py-3 sm:py-5">
        <div className="flex justify-between items-center">
          <Link to={'/'}>
            <div>
              <svg
                width="174"
                height="40"
                viewBox="0 0 174 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.3984 28H66.8828L60.0391 16.7734V28H56.5234V10.9375H60.0391L66.8945 22.1875V10.9375H70.3984V28ZM89.7344 21.0273H82.9844V28H79.4688V10.9375H90.5781V13.7852H82.9844V18.1914H89.7344V21.0273ZM111.695 13.7852H106.469V28H102.953V13.7852H97.7969V10.9375H111.695V13.7852ZM125.055 21.1562L123.227 23.125V28H119.711V10.9375H123.227V18.6719L124.773 16.5508L129.121 10.9375H133.445L127.387 18.5195L133.621 28H129.438L125.055 21.1562ZM151.211 20.6055H144.461V25.1758H152.383V28H140.945V10.9375H152.359V13.7852H144.461V17.8516H151.211V20.6055ZM166.328 18.625L169.879 10.9375H173.723L168.121 21.8125V28H164.547V21.8125L158.945 10.9375H162.801L166.328 18.625Z"
                  fill={fill_bg}
                />
                <rect width="40" height="40" rx="20" fill={fill_bg} />
                <ellipse
                  cx="19.9999"
                  cy="15.8"
                  rx="8"
                  ry="8"
                  transform="rotate(-90 19.9999 15.8)"
                  fill={fill_text}
                />
                <circle
                  cx="20.0499"
                  cy="15.75"
                  r="3.25"
                  transform="rotate(-90 20.0499 15.75)"
                  fill={fill_bg}
                />
                <rect
                  x="22.8999"
                  y="23.2"
                  width="9"
                  height="5.8"
                  transform="rotate(90 22.8999 23.2)"
                  fill={fill_text}
                />
              </svg>
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
              {theme === 'dark' ? (
                <MdOutlineLightMode size={25} />
              ) : (
                <TbMoon size={25} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
