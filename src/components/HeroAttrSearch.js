import { Form, ToggleButton, Button } from 'react-bootstrap';

const HeroAttrSearch = () => {
    return (
        <>
            <ToggleButton
                className="mt-4"
                size='lg'
                id="toggle-check-attr"
                type="checkbox"
                variant="outline-danger"
            >
                Escolher por atributo
            </ToggleButton>
            <Form.Select className='mt-3' size='lg' >
                <option value="-">Escolha o atributo do herói</option>
                <option value="all">Todos (all)</option>
                <option value="str">Força (str)</option>
                <option value="agi">Agilidade (agi)</option>
                <option value="int">Inteligência (int)</option>
            </Form.Select>
            <Button variant='danger' size='lg' className='mt-4'>Pesquisar</Button>
        </>
    );
}

export default HeroAttrSearch;