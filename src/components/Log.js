
import { useContext } from 'react'
import BalanceData from './BalanceData'
import './Log.css'
const Log = (props) => {

    const { convertDate } = useContext(BalanceData)
    
    const determineColor = value => {
        if (value > 0)
            return 'green'
        if (value < 0)
            return 'red'
        return 'black'
    }
    
    return (
        <div className='log-box'>
            <div className='log'>
                <div className='name-amount'>
                    <h3 className='log-name'>{props.name}</h3>
                    <h6 className='log-amount' style={{ color: determineColor(props.amount) }}>${props.amount}</h6>
                </div>
                <div className='date-total'>
                    <h5 className='log-date'>{convertDate(props.time)}</h5>
                    <h6 className='log-total'>total</h6>
                </div>
            </div>
            {/* <button className='edit'>edit</button> */}
            <img className='edit-icon' src={require('../Edit_icon_(the_Noun_Project_30184).svg.png')} alt="edit" />
        </div>
    )
}
export default Log