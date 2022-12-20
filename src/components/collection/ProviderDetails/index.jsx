import InformationBar from '../InformationBar'
import ProviderNameAndDescription from '../ProviderNameAndDescription'
import SearchBarAndIcons from '../SearchBarAndIcons'

const ProviderDetailsMobile = () => {
  return (
    <>
      <div className='md:flex md:justify-between md:items-center space-y-5'>
        <ProviderNameAndDescription />
        <SearchBarAndIcons />
      </div>
      <div className='md:hidden'>

        <InformationBar/>
      </div>
    </>
  )
}
export default ProviderDetailsMobile
