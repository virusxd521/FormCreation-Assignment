import React, { FC, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavigationBar from './navigationBar';
import ConfigForm from './configForm';
import ResultForm from './resultForm';
import ConfigDataContextProvider from '../context/configDataContext';

const PageLayout : FC<{}> = () => {
    let location = useLocation();
    const navigate = useNavigate();

    const formSubmition = (e : React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        navigate("/results");
    }

    return (
        <ConfigDataContextProvider>
            <NavigationBar />
            {
                location.pathname === "/" ? 
                <ConfigForm />
                :
                <ResultForm />
            }
        </ConfigDataContextProvider>
    )
}

export default PageLayout;