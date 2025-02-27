import { useState } from "react";
import Input from "./Input";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    const passwordIsInvalid = didEdit.password && enteredValues.password.trim().length < 6;

    function handleSubmit() {
        event.preventDefault();
        console.log(enteredValues);
    }

    function handleInputChange(event, identifier) {
        setEnteredValues(prevValues => ({
            ...prevValues,
            [identifier]: event.target.value
        }));
        setDidEdit(prevEdit => ({
            ...prevEdit,
            [identifier]: false,
        }));
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="control-row">
                <Input
                    label="Email"
                    id="email"
                    type="email"
                    name="email"
                    onChange={(event) => handleInputChange(event, 'email')}
                    value={enteredValues.email}
                    onBlur={() => handleInputBlur('email')}
                    error={emailIsInvalid && 'Please enter a valid email!'}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={(event) => handleInputChange(event, 'password')}
                    value={enteredValues.password}
                    onBlur={() => handleInputBlur('password')}
                    error={passwordIsInvalid && 'Please enter a valid password!'}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" >Login</button>
            </p>
        </form>
    );
}