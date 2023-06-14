import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import conrad_headshot from './SplashScreenImages/Conrad_headshot.jpg'
import rodney_headshot from './SplashScreenImages/Rodney_headshot.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './SplashScreen.css'
const SplashScreen = () => {

    return (
        <>
            <header className="header-row">
                <div className="pageTitleBox">
                    <h2>The Creators of Budget Lingo</h2>
                </div>
                {/* <Image className='TitleBoxImg' src="https://c8.alamy.com/comp/M0YFXF/group-of-multi-ethnic-business-people-reading-books-against-white-M0YFXF.jpg" fluid /> */}
            </header>
            <div className="paragraph-box">
                <p >
                    Budget Lingo was an app created by Conrad Quagliaroli and Rodney Edge Jr.
                    The app is designed for those who have taken an interest in their own finances,
                    and are just now learning to budget.
                </p>
                <div className='img-crop'>
                    <img className='head-shot1' src={conrad_headshot} alt='My Image' />
                </div>
            </div>
            <div className="paragraph-box">
                <img className='head-shot2' src={rodney_headshot} />
                <p>
                    This app is NOT designed for the professional investors, but rather the average joe who 
                    wants to form those good budgeting habits, which include LOGGINNG where your money goes.
                </p>
            </div>
        </>
    )
}
export default SplashScreen