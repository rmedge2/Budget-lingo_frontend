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
                <Image className='TitleBoxImg' src="https://c8.alamy.com/comp/M0YFXF/group-of-multi-ethnic-business-people-reading-books-against-white-M0YFXF.jpg" fluid />
            </div>

            <div className='bodyOdyOdy'>
                <div className='randomInfoRow'>
                    <div className='rowText'>
                        <Card style={{ width: '18rem', height: '11rem' }}>
                            <Card.Body>
                                <Card.Title>Easily Manage Personal Finances</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    This tool is great for your Average Joe
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <img className='row image' src="data:image/jpeg;base64,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" width={400} alt="some-img" />
                </div>
                <div className='randomInfoRow'>
                    <img className='row image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhVU6y92zHLt_UUWEAVSbOM_8iCJ9jPOsAg&usqp=CAU" width={400} alt="some-img" />
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
                <div className='randomInfoRow'>
                    <Card style={{ width: '18rem', height: '11rem' }}>
                        <Card.Body>
                            <Card.Title>So Easy a Fried Cook Could Do It</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some fake critic
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <img className='row image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUIcsrOnMdHINItVggMg3gaZSb83zK9d1_cQ&usqp=CAU" width={400} alt="some-img" />
                </div>
            </div>
        </>
    )
}
export default SplashScreen