import { Container, Row, Col } from 'react-bootstrap';
import HeroNameSearch from './HeroNameSearch';
import HeroAttrSearch from './HeroAttrSearch';
import TableData from './TableData';
import '../assets/Main.css'

const Main = () => {

    return (
        <main className="App-header">
            <Container>
                <Row>
                    <Col>
                        <HeroNameSearch />
                    </Col>
                    <Col>
                        <div></div>
                    </Col>
                    <Col>
                        <HeroAttrSearch />
                    </Col>
                </Row>
            </Container>
            <TableData />
        </main>
    );
}

export default Main;