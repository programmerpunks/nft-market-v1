import Navbar from './components/shared/Navbar'
import Collection from './pages/Collection'
import Footer from './components/shared/Footer'
import GoTopBtn from './components/shared/GoTopBtn'
import AudioPlayer from './components/player/AudioPlayer'
import {Routes, Route} from 'react-router-dom'
import Details from './pages/Details'

const App = () => {
  return (
    <div className="font-roboto bg-slate-100 min-h-screen flex flex-col justify-between dark:bg-neutral-900 dark:text-white">
      <div>
        <Navbar />
        <main className="flex justify-center px-5 sm:px-10 my-8">
          <div className="max-w-[1400px] w-full">
      <Routes>
        <Route path="/" element={<Collection />} />
        <Route path="/" element={<AudioPlayer />} />
        <Route path="/" element={<GoTopBtn />} />
        <Route path="/details" element={<Details />} />
      </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
