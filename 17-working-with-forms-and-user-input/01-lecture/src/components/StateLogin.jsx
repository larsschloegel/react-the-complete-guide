import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'
import { useInput } from "../hooks/useInput.js";

export default function Login() {

    //const {value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur} = useInput('', isEmail);
    const { 
        value: emailValue, 
        handleInputChange: handleEmailChange, 
        handleInputBlur: handleEmailBlur, 
        hasError: emailHasError 
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));
    const { 
        value: passwordValue, 
        handleInputChange: handlePasswordChange, 
        handleInputBlur: handlePasswordBlur, 
        hasError: passwordHasError 
    } = useInput('', (value) => hasMinLength(value, 6));

    function handleSubmit() {
        event.preventDefault();

        if (emailHasError || passwordHasError) {
            return;
        }
        console.log(emailValue, passwordValue);
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
                    onChange={handleEmailChange}
                    value={emailValue}
                    onBlur={handleEmailBlur}
                    error={emailHasError && 'Please enter a valid email!'}
                />
                <Input
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    onChange={handlePasswordChange}
                    value={passwordValue}
                    onBlur={handlePasswordBlur}
                    error={passwordHasError && 'Please enter a valid password!'}
                />
            </div>
            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" >Login</button>
            </p>
        </form>
    );
}