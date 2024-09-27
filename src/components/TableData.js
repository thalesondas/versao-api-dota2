import { Table } from 'react-bootstrap';
import '../assets/TableData.css'

const TableData = () => {
    return (
        <>
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
                </tbody>
            </Table>
        </>
    );
}

export default TableData;