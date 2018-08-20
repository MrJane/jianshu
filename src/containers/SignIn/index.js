import React,{Component} from 'react';
import {SignInWrapper,SignLogo,SignMain,SignTitle,SignInputWrapper,SingInput,SignButton} from './style';
import logoPic from '../../static/logo.png'
class SignIn extends  Component{
    render(){
        return(
            <SignInWrapper>
                <SignLogo>
                    <img src={logoPic} alt=""/>
                </SignLogo>
                <SignMain>
                    <SignTitle>
                        <a href="">登录</a><b>·</b><a href="">注册</a>
                    </SignTitle>
                    <SignInputWrapper>
                        <SingInput>
                            <input className="restyle" type="text" placeholder={"您的昵称"}/><i className="iconfont">&#xe677;</i>
                        </SingInput>
                        <SingInput>
                            <input className="no-radius restyle" type="text" placeholder="手机号"/><i className="iconfont">&#xe693;</i>
                        </SingInput>
                        <SingInput>
                            <input className="radius-bottom" type="text" placeholder="设置密码"/><i className="iconfont">&#xe612;</i>
                        </SingInput>
                        <SignButton>注册</SignButton>
                    </SignInputWrapper>
                </SignMain>
            </SignInWrapper>
        )
    }
}
export default SignIn