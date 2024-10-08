import { useContext, useEffect } from 'react';
import { ToggleButton, Form, Button, Alert } from 'react-bootstrap';
import { DataContext } from '../context/DataContext';
import '../assets/HeroNameSearch.css'

const HeroNameSearch = () => {
    const { 
        isHeroChecked, 
        isHeroSearchDisabled, 
        isHeroButtonDisabled, 
        handleHeroChecked, 
        handleInputKeyPress, 
        inputSearch,
        setInputSearch,
        fetchData, 
        error, 
        nameInputRef 
    } = useContext(DataContext);

    useEffect(() => {
        if(!isHeroSearchDisabled){
            nameInputRef.current.focus();
        }
    }, [isHeroSearchDisabled, nameInputRef]);

    return (
        <>
            <Form className='mt-4 d-flex justify-content-center'>
                <Form.Group>
                    <ToggleButton
                        id="toggle-check-hero"
                        type="checkbox"
                        variant="outline-danger"
                        checked={isHeroChecked}
                        value="1"
                        onChange={handleHeroChecked}
                    >
                        Escolher por herói
                    </ToggleButton>
                    <Form.Control
                        type='text'
                        className='mt-3'
                        placeholder='Escolha o nome do herói'
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        onKeyDown={handleInputKeyPress}
                        ref={nameInputRef}
                        disabled={isHeroSearchDisabled}
                    />
                    <Button variant='danger' className='mt-3' onClick={fetchData} disabled={isHeroButtonDisabled}>Pesquisar</Button>
                    {error && <Alert className='mt-4 alert-sm' variant="danger">{error}</Alert>}
                </Form.Group>
            </Form>
        </>
    );
}

export default HeroNameSearch;