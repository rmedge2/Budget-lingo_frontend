import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import conrad_headshot from './SplashScreenImages/Conrad_headshot.jpg'
import rodney_headshot from './SplashScreenImages/Rodney_headshot.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SplashScreen.css'
const SplashScreen = () => {

    return (
        <>

            <div className="pageTitleBox">
                <h2>The Creators of Budget Lingo</h2>
            </div>

            <div className="paragraph-box">
                <p id='text-box1'>
                    Budget Lingo was an app created by Conrad Quagliaroli and Rodney Edge Jr.
                    The app is designed for those who have taken an interest in their own finances,
                    and are just now learning to budget.
                </p>
                <div className='img-container'>
                    <img className='head-shot1' src={conrad_headshot} alt='My Image' />
                </div>
            </div>
            <div className="paragraph-box">
                <img className='head-shot2' src={rodney_headshot} />
                <p id='text-box2'>
                    This app is NOT designed for the professional investors, but rather the average joe who
                    wants to form those good budgeting habits, which include LOGGINNG where your money goes.
                </p>
            </div>
        </>
    )
}
export default SplashScreen