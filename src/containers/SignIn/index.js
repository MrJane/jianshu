import React,{Component} from 'react';
import {SignInWrapper,} from './style';
import logoPic from '../../static/logo.png'
class SignIn extends  Component{
    render(){
        return(
            <SignInWrapper>
                <img src={logoPic} alt=""/>
            </SignInWrapper>
        )
    }
}
export default SignIn