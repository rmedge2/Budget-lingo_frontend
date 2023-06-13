
import { useContext } from 'react'
import BalanceData from './BalanceData'
import './Log.css'
const Log = (props) => {

    const { convertDate, shorten, commaAmount } = useContext(BalanceData)
    
    const determineColor = value => {
        if (value > 0)
            return 'green'
        if (value < 0)
            return 'red'
        return 'black'
    }
    
    return (
        <div className='log-box'>
            <div className='log' title={props.name}>
                <div className='name-amount'>
                    <h3 className='log-name'>{shorten(props.name)}</h3>
                    <h6 className='log-amount' style={{ color: determineColor(props.amount) }}>${commaAmount(props.amount)}</h6>
                </div>
                <div className='date-total'>
                    <h5 className='log-date'>{convertDate(props.time)}</h5>
                    <h6 className='log-total'>{commaAmount(props.total)}</h6>
                </div>
            </div>
            {/* <button className='edit'>edit</button> */}
            {/* <img className='edit-icon' src={require('../Edit_icon_(the_Noun_Project_30184).svg.png')} alt="edit" /> */}
        </div>
    )
}
export default Log