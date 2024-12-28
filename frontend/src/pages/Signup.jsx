import LeftPart from "../components/signup/LeftPart"
import RightPart from "../components/signup/RightPart"

const Signup = () => {
return (
    <div className="flex px-14 pt-20">
            <div className="w-1/2">
                    <LeftPart/>
            </div>
            <div className="border-x-2 border-gray-400"></div>
            <div className="w-1/2">
                    <RightPart/>
            </div>
    </div>
)
}

export default Signup