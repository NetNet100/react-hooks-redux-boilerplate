import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addName} from './redux/user/actions';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function App() {
    const {users} = useSelector(state => state.users);
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleOnClick = () => {
        dispatch(addName(input));
        setInput('');
    };

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log('enter press here! ');
            handleOnClick();
        }
    };


    return (
        <div>
            <div className='wrapper'>
                <TextField id="standard-basic"
                           type='text'
                           label="Enter your name:"
                           value={input}
                           onKeyPress={handleKeyPress}
                           onChange={(e) => setInput(e.target.value)}/>
                           <br/>
                           <br/>
                <Button variant="contained"
                        color="secondary"
                        onClick={handleOnClick}>
                    Click Me!
                </Button>
            </div>
            <br/>
            <br/>
            <br/>

            <h4> Users :</h4>
            <ul>
                {users ? users.map((user, index) => {
                    return (<li key={index}>{user}</li>)
                }) : 'There is no users!!!'}
            </ul>
        </div>
    );
}

export default App;
