import { Container, Image, Row, Col } from 'react-bootstrap'
import '../assets/Header.css'

const Header = () => {
    return(
        <header>
            <Container>
                <Row className='my-1 d-flex align-items-center'>
                    <Col xs={5}>
                        <Image style={{ float: 'left' }} src='https://cdn-icons-png.flaticon.com/512/588/588267.png' width="100px" height="100px" alt='Dota 2 logo'></Image>
                    </Col>
                    <Col xs={7}>
                        <h1 style={{ float: 'left' }}>DOTA 2 API</h1>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;