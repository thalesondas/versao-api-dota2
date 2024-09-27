import { useContext, useEffect } from 'react';
import { Form, ToggleButton, Button } from 'react-bootstrap';
import { DataContext } from '../context/DataContext';

const HeroAttrSearch = () => {

    const { 
        isAttrChecked, 
        isAttrSearchDisabled, 
        isAttrButtonDisabled,
        fetchDataAttr, 
        handleAttrChecked, 
        setSelectedAttribute, 
        attrInputRef
    } = useContext(DataContext);

    useEffect(() => {
        if(!isAttrSearchDisabled){
            attrInputRef.current.focus();
        }
    }, [isAttrSearchDisabled]);

    return (
        <>
            <ToggleButton
                className="mt-4"
                size='lg'
                id="toggle-check-attr"
                type="checkbox"
                variant="outline-danger"
                checked={isAttrChecked}
                value="1"
                onChange={handleAttrChecked}
            >
                Escolher por atributo
            </ToggleButton>
            <Form.Select className='mt-3' size='lg' ref={attrInputRef} aria-label="Default select example" onChange={(e) => setSelectedAttribute(e.target.value)} disabled={isAttrSearchDisabled} >
                <option value="-">Escolha o atributo do herói</option>
                <option value="all">Todos (all)</option>
                <option value="str">Força (str)</option>
                <option value="agi">Agilidade (agi)</option>
                <option value="int">Inteligência (int)</option>
            </Form.Select>
            <Button variant='danger' size='lg' className='mt-4' onClick={fetchDataAttr} disabled={isAttrButtonDisabled}>Pesquisar</Button>
        </>
    );
}

export default HeroAttrSearch;