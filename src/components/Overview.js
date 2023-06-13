import { useContext } from "react"
import BalanceData from "./BalanceData"

const Overview = () => {

    const {totalMoney}=useContext(BalanceData)
    
    return (
        <div>
            <h1>Total Money: ${totalMoney}</h1>
            
        </div>
    )
}
export default Overview