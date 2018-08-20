import styled from 'styled-components';
export const SignInWrapper = styled.div`
background-color:#f1f1f1;
width: 100%;
min-height: 750px;
`
export const SignLogo = styled.div`

`
export const SignMain = styled.div`
width: 400px;
height: 600px;
padding: 50px 50px 30px;
background-color: rgb(255, 255, 255);
border-radius: 4px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
margin: 0px auto;

`
export const SignTitle = styled.div`
font-size: 18px;
color: rgb(150, 150, 150);
text-align: center;
margin-bottom: 50px;
a{
padding: 10px;
}
b{
padding: 10px;
}

`
export const SignInputWrapper=styled.div`
width: 300px;
height: 386px;
`
export const SingInput = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    input{
    width: 100%;
    height: 50px;
    border-radius: 4px 4px 0px 0px;
    background-color: rgba(181, 181, 181, 0.1);
    vertical-align: middle;
    padding: 4px 12px 4px 35px;
    border-width: 1px;
    border-style: solid;
        outline: none;
    border-color: rgb(200, 200, 200);
    border-image: initial;
    }
    .restyle{
    border-bottom: none;
    }
    .no-radius{
     border-radius: 0px;
    }
    .radius-bottom{
     border-radius: 0px 0px 4px 4px;
    }
    i{
    position: absolute;
    font-size: 18px;
    top: 14px;
    left: 10px;
    color: rgb(150, 150, 150);
    }
`
export const SignButton = styled.button`
width: 100%;
background-color: aqua;
`