import styled from 'styled-components';
export const WriteWrapper = styled.div`
width: 280px;
height: 500px;
`
export const WriteTitle = styled.div`
font-size: 14px;
color: #969696;
`
export const WriteSwitch = styled.span`
float: right;

cursor: pointer;
.spin{
display: inline-block;
margin-right: 2px;
transition: all .2s ease-in;
transform: rotate(0deg);
transform-origin: center center;
}
`
export const WriteAuthorItem = styled.div`
margin-top: 15px;
height: 47px;
line-height: 20px;
.avatar{
display: block;
width: 48px;
height: 48px;
border-radius: 50%;
margin-right:10px;
float: left;
img{
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;
    border-radius: 50%;
}
}
.follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 13px;
    color: #42c02e;
}
.name{
padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
}
p{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
}
`