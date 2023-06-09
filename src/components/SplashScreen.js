import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className='randomInfoRow'>
                <div className='rowText'>
                    <Card style={{ width: '18rem', height: '11rem' }}>
                        <Card.Body>
                            <Card.Title>Easily Manage Personal Finances</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <div className='randomInfoRow'>
                <div className='rowText'>
                    <Card style={{ width: '18rem', height: '11rem' }}>
                        <Card.Body>
                            <Card.Title>A Fun Way to Manage Finances</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some fake critic
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <div className='randomInfoRow'>
                <div className='rowText'>
                    <Card style={{ width: '18rem', height: '11rem' }}>
                        <Card.Body>
                            <Card.Title>Revolutionize your finance today</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some fake critic
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default SplashScreen