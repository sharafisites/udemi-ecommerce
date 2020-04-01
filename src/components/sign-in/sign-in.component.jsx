import React from 'react';
import './sign-in.styles.scss';
import {FormInput} from '../form-input/form-input.component';
import {CustomButton} from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from './../../firebase/firebase.utils';



class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit=async (e)=>{
        e.preventDefault();
        const{email,password}=this.state;
        try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''});
        }
        catch(error){
        console.error(error);
        }
    }

    handleChange=(e)=>{
        const {name ,value}=e.target;
        this.setState({[name]:value});
        }
        
    
    render(){
 
    return(
        <div className="sign-in">
        <h1 className="title">I already have account</h1>
        <span>login with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="Email" requierd="true"/>
           
            <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="Password" requierd="true"/>
           <div className="buttons">
                <CustomButton type="submit" >
                    Sign in
                </CustomButton>
                <CustomButton onClick={signInWithGoogle} IsGoogleSignIn>
                    Sign in with google
                </CustomButton>
            </div>
        </form>
</div>
    );
}
}
export default SignIn;