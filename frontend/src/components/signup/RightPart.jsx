import managerLogo from '../../assets/manager.png'
import stuffLogo from '../../assets/stuff.png'
import productLogo from '../../assets/box.png'
import warehouseLogo from '../../assets/warehouse.png'
import analyticsLogo from '../../assets/analysis.png'
import stocklogo from '../../assets/in-stock.png'

const RightPart = () => {
  return (
    <div className="grid justify-items-center pt-16">
        <div className="text-center font-sans">
            <h1>All In One</h1>
            <p className="bg-yellow-400 rounded-md px-2">online inventory management</p>
            <p>manage inventory</p>
        </div>
        <div className='grid gap-x-7 gap-y-5 grid-cols-3 justify-items-center pt-8'>
            <div>
                <h1 className='text-center font-sans text-base pb-1'>Manager</h1>
                <img className='size-14' src={managerLogo} alt="Manager"/>
            </div>
            <div>
                <h1 className='text-center font-sans text-base pb-1'>Stuff</h1>
                <img className='size-14' src={stuffLogo} alt="Stuff"/>
            </div>
            <div>
                <h1 className='text-center font-sans text-base pb-1'>Products</h1>
                <img className='size-14' src={productLogo} alt="Product"/>
            </div>
            <div>
                <h1 className='text-center font-sans text-base pb-1'>Warehouse</h1>
                <img className='size-14' src={warehouseLogo} alt="Warehouse"/>
            </div>
            <div>
                <h1 className='text-center font-sans text-base pb-1'>Analysis</h1>
                <img className='size-14' src={analyticsLogo} alt="Analysis"/>
            </div>
            <div>
                <h1 className='text-center font-sans text-base pb-1'>Stocks</h1>
                <img className='size-14' src={stocklogo} alt="Stock"/>
            </div>
        </div>
    </div>
  )
}

export default RightPart