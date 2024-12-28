import Leftpart from "../components/login/Leftpart"
import RightPart from "../components/signup/RightPart"

const Loging = () => {
  return (
    <div className="flex px-14 pt-20">
      <div className="w-1/2">
        <h1 className='text-4xl pb-5'>InventEase</h1>
        <Leftpart />
      </div>
      <div className="border-x-2 border-gray-400"></div>
      <div className="w-1/2">
        <RightPart />
      </div>
    </div>
  )
}

export default Loging