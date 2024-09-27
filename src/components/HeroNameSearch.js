import { ToggleButton, Form, Button } from 'react-bootstrap';

const HeroNameSearch = () => {
    return (
        <>
            <Form className='mt-4'>
                <Form.Group>
                    <ToggleButton
                        id="toggle-check-hero"
                        size='lg'
                        type="checkbox"
                        variant="outline-danger"
                    >
                        Escolher por herói
                    </ToggleButton>
                    <Form.Control
                        type='text'
                        size='lg'
                        className='mt-3'
                        placeholder='Escolha o nome do herói'
                    />
                    <Button variant='danger' size='lg' className='mt-4'>Pesquisar</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default HeroNameSearch;