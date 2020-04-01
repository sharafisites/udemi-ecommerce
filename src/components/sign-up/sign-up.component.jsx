import React from 'react';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit=async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword}= this.state;
        if(password !== confirmPassword){
            alert('password don\'t match');
            return;
        }
    
        try{

            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                    email:'',
                    password:'',
                    confirmPassword:''
            })
        }
        catch(error){
            console.error(error);
        }
    };

    handleChange=(e)=>{
        const {name ,value}=e.target;
        this.setState({[name]:value});
        }
    render(){
        const{displayName,email,password,confirmPassword}=this.state;
        return(
            <div className="sign-up">
                <h1 className="title"> I do not have an account</h1>
                <span>sign up with your email and passeord</span>
                <form className="sign-up-form" onSubmit={this.state.handleSubmit}>
                <FormInput type="text" label="Display Name" name="displayName" value={displayName} onChange={this.handleChange} requierd="true"></FormInput>
                <FormInput type="text" label="Email" name="email" value={email} onChange={this.handleChange} requierd="true"></FormInput>
                <FormInput type="password" label="Password" name="password" value={password} onChange={this.handleChange} requierd="true"></FormInput>
                <FormInput type="password" label="Confirm Password" name="ConfirmPassword" value={confirmPassword} onChange={this.handleChange} requierd="true"></FormInput>
                <CustomButton> Sign up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
