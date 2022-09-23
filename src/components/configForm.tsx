import React, { FC, useState, useContext} from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { ConfigDataContext } from '../context/configDataContext';

const ConfigForm : FC<{}> = () => {
    const {formElementsArr, convertingToJson, formSubmition, submitedJsonData} = useContext(ConfigDataContext);

    return (
        <main className='d-flex mt-5'>
            <Form className='mx-auto w-50 d-flex flex-column'
            onSubmit={formSubmition}
            >
                <FloatingLabel controlId="floatingTextarea2" label="">
                    <Form.Control
                    as="textarea"
                    defaultValue={
                        submitedJsonData.length === 0 ? '' : `${JSON.stringify(submitedJsonData) }`
                    }
                    style={{ height: '100px' }}
                    onChange={convertingToJson}
                    />
                </FloatingLabel>
                <Button className='mt-4 mx-auto w-25 text-white' variant="info" type="submit">
                    Apply
                </Button>
            </Form>
        </main>
    )
}

export default ConfigForm;