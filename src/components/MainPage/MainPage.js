import React from 'react';
import { Redirect } from "@reach/router"
import Input from '../Input/Input';
import useFetchData from '../../Utils/useFetchData';

import Button from '../Button/Button';
import './mainpage.scss';

const MainPage = ({loggedin}) => {
    const getData = useFetchData('http://ron-swanson-quotes.herokuapp.com/v2/quotes/',10);
    console.log(getData);
    
    if(!loggedin) {
        return <Redirect to="/login" noThrow />
    } else {
        console.log(getData.responseData);
        return (
                <form>
                    <div className = "main-page">
                        Welcome to Ron Swanson Quotes!! 
                        <Input className = "input-main"
                            min="1"
                            type = 'number'
                            placeholder = 'Count of quotes'
                            name = 'count'
                        /> 
                        <Button className = "mainPage-button" text = "Enter" onClick={getData} />
                        <ul>
                            {getData.responseData && getData.responseData.map((element, i) => (
                                <li className = "quote-list">{element}</li>
                            ))}
                        </ul>
                    </div>
                </form>
        )
    }
}

export default MainPage;