import { useContext } from 'react';
import { Table, Image, Pagination, Container } from 'react-bootstrap';
import { DataContext } from '../context/DataContext';
import '../assets/TableData.css'

const TableData = () => {
    const { 
        data,
        paginate,
        currentPage,
        itemsPerPage,
        currentItems
    } = useContext(DataContext);

    let items = [];
    for (let number = 1; number <= Math.ceil(data.length / itemsPerPage); number++) {
        items.push(
            <Pagination.Item onClick={() => paginate(number)} key={number} active={number === currentPage}>{number}</Pagination.Item>,
        );
    }

    return (
        <Container fluid className='d-flex flex-column align-items-center'>
            <Table variant='dark' className='mt-5' striped bordered hover>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Nome</th>
                        <th>Atributo Principal</th>
                        <th>Ataque</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => (
                        <tr key={item.id}>
                            <td className='py-3'> <Image src={'https://cdn.akamai.steamstatic.com/' + item.img} alt='localized_name' thumbnail /> </td>
                            <td>{item.localized_name}</td>
                            <td>{item.primary_attr}</td>
                            <td>{item.attack_type}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination className='mt-2 mb-4'>
                <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1}/>
                <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
                {items}
                <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} />
                <Pagination.Last onClick={() => paginate(Math.ceil(data.length / itemsPerPage))} disabled={currentPage === Math.ceil(data.length / itemsPerPage)} />
            </Pagination>
        </Container>
    );
}

export default TableData;