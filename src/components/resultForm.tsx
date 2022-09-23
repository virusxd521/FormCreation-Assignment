import React, { FC, useContext, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ConfigDataContext } from '../context/configDataContext';


const ResultForm : FC<{}> = () => {
    const [formItems, setFormItems] = useState<string[]>([]);
    const [buttonItems, setButtonItems] = useState<string[]>([]);
    const {formElementsArr, submitedJsonData} = useContext(ConfigDataContext);

    interface Items {
        label : string;
        type : string;
    }

    const settingFormInputs = (label : string, lowerType : string) : void => {
        setFormItems((prevState : any) => [...prevState, 
            <Form.Group className="mb-3" controlId={label}>
                <Form.Label>{label}</Form.Label>
                <Form.Control type={lowerType} placeholder="" />
            </Form.Group>
        ])
    }

    const settingFormBoxes = (label : string, lowerType : any) : void => {
        setFormItems((prevState : any) => [...prevState, 
            <Form.Check
                type={lowerType}
                label={label}
                id={`sssss`}
            />
        ])
    }

    const settingSubmitButtons = (text : string) : void => {
        setButtonItems((prevState : any) => [...prevState, 
            <Button className='mt-4 mx-auto w-25' variant="primary" type="submit">
                {text}
            </Button>
        ])
    }
    
    const componentLoadFunction = () : void => {
        const {items, actionButtons} = submitedJsonData;
        console.log("Pleaf", submitedJsonData, "Pleaf");
        items !== undefined && items.forEach(({label, type}: Items) => {
        const lowerType : string = type.toLowerCase();
            if( lowerType === "number" || 
                lowerType === "text" ||
                lowerType === "date"
            ){
                settingFormInputs(label, lowerType);
            } else if(lowerType === "radio" || lowerType === "checkbox"){
                settingFormBoxes(label, lowerType);
            }
        });

        actionButtons !== undefined && actionButtons.forEach((item : string) => {
            settingSubmitButtons(item);
        });
    }

    useEffect(() => {
        componentLoadFunction();
    }, [submitedJsonData]);

    return (
        <main className='d-flex mt-5'>
            <Form className='mx-auto w-50 d-flex flex-column'>
                <h2>{submitedJsonData.title}</h2>
                {
                    formItems.map(item => item)
                }
                {
                    buttonItems.map(item => item)
                }

            </Form>
        </main>
    )
}

export default ResultForm;