import { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeroNameSearch from './HeroNameSearch';
import HeroAttrSearch from './HeroAttrSearch';
import TableData from './TableData';
import { DataContext } from '../context/DataContext';
import '../assets/Main.css'

const Main = () => {

    const {
        setData,
        setOriginalData,
        nameInputRef
    } = useContext(DataContext);
  
    useEffect(() => {
        nameInputRef.current.focus(); // Foca o campo de pesquisa no nome do herói quando inicializado
        fetch('https://api.opendota.com/api/heroStats')
        .then((resp) => resp.json())
        .then((data) => {
            setData(data); // Define os dados iniciais
            setOriginalData(data); // Define os dados originais
        })
        .catch((err) => {
            console.log('Error: ', err);
        });
    }, [nameInputRef, setData, setOriginalData]);

    return (
        <main className="pt-3">
            <Container>
                <Row className="justify-content-between">
                    <Col className='px-5'>
                        <HeroNameSearch />
                    </Col>
                    <Col className='px-5'>
                        <HeroAttrSearch />
                    </Col>
                </Row>
            </Container>
            <TableData />
        </main>
    );
}

export default Main;