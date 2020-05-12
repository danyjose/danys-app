import React, { useState } from 'react';
import { Redirect } from "@reach/router"
import Input from '../Input/Input';
import useFetchData from '../../Utils/useFetchData';

import Button from '../Button/Button';
import './mainpage.scss';

const MainPage = ({loggedin}) => {
    const [inputValue, setInputValue] = useState(0);
    const [buttonState, setButtonState]= useState(0);
    const getData = useFetchData('http://ron-swanson-quotes.herokuapp.com/v2/quotes/',buttonState);
    console.log(getData);

    if(!loggedin) {
        return <Redirect to="/login" noThrow />
    } else {
        console.log(getData.responseData);
        return (
                    <div className = "main-page">
                        Welcome to Ron Swanson Quotes!! 
                        <Input className = "input-main"
                            min="1"
                            type = 'number'
                            placeholder = 'Count of quotes'
                            name = 'count'
                            onChange= {(e)=>{setInputValue(e.target.value)}}
                        /> 
                        <Button className = "mainPage-button" text = "Enter" onClick={() => {setButtonState(inputValue)}} />
                        <ul>
                            {getData.responseData && getData.responseData.map((element, i) => (
                                <li className = "quote-list">{element}</li>
                            ))}
                        </ul>
                    </div>
        )
    }
}

export default MainPage;