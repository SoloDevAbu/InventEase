import Leftpart from "../components/login/Leftpart"
import RightPart from "../components/signup/RightPart"

const Loging = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row px-4 md:px-14 pt-8 md:pt-20">
      <div className="w-full md:w-1/2">
        <Leftpart />
      </div>
      <div className="border-x-2 border-gray-400"></div>
      <div className="w-full md:w-1/2">
        <RightPart />
      </div>
    </div>
  )
}

export default Loging