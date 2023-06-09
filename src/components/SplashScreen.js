import Image from 'react-bootstrap/Image';
import './SplashScreen.css'
const SplashScreen = () => {
    
    return (
        <>
            <div className="header-row">
                <div className="pageTitleBox">
                    <h2>About Us</h2>
                </div>
                {/* <div className="long-image">
                    <img src="https://c8.alamy.com/comp/M0YFXF/group-of-multi-ethnic-business-people-reading-books-against-white-M0YFXF.jpg" width={400} alt="some-img" />
                </div> */}
                <Image className='TitleBoxImg' src="https://c8.alamy.com/comp/M0YFXF/group-of-multi-ethnic-business-people-reading-books-against-white-M0YFXF.jpg" fluid />
            </div>
            <div className='randomInfoRow1'>
                
            </div>
            <div className='randomInfoRow2'>
                
            </div>
            <div className='randomInfoRow3'>
                
            </div>
        </>
    )
}
export default SplashScreen