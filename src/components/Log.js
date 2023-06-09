
import { useContext } from 'react'
import BalanceData from './BalanceData'
import './Log.css'
const Log = (props) => {

    const {convertDate}=useContext(BalanceData)
    
    return (
        <div className='log'>
            <div className='log-name'>{props.name}</div>
            <div className='log-amount'>{props.amount}</div>
            <div className='log-date'>{convertDate(props.time)}</div>
        </div>
    )
}
export default Log