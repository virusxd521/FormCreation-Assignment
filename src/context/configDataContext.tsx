import React, { createContext, useState } from "react";
import { useNavigate  } from "react-router-dom";
import Swal from 'sweetalert2';

// Need to check if this interface is needed
interface ConfigData {
    label : string;
    item : string;
}

interface PropsChildren {
    children : React.ReactNode[];
}

export const ConfigDataContext = createContext<any>([]);

const ConfigDataContextProvider = (props : PropsChildren) : any => {

    const navigate = useNavigate();
    const [formElementsArr, setFormElementsArr] = useState<string>('');
    const [submitedJsonData, setSubmitedJsonData] = useState<any>([]);

    const convertingToJson = (e : React.ChangeEvent<HTMLTextAreaElement>) : void => {
        let inputData : string = e.target.value;
        setFormElementsArr(inputData);
    }

    const formSubmition = (e : React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        try{
            const stringToJavaScript : any = eval(`(${formElementsArr})`);
            setSubmitedJsonData(stringToJavaScript);
            navigate('/results');
        } catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Incorrect Syntax, pleas enter a vaid JS object or JSON'
            })
        }
    }

    return <ConfigDataContext.Provider value={{formElementsArr, convertingToJson, submitedJsonData, formSubmition}}>{props.children}</ConfigDataContext.Provider>
}

export default ConfigDataContextProvider;