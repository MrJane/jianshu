import styled from 'styled-components';

export const ListItem = styled.div`
padding: 20px 0px;
overflow: hidden;
border-bottom: 1px solid #f0f0f0;
.pic{
width: 125px;
height: 100px;
display: block;
float: right;
border-radius: 10px;
}
`
export const ListInfo = styled.div`
width: 500px;
float: left;
.title{
font-size: 18px;
line-height: 27px;
font-weight: bold;
color: #333;
}
.desc{
font-size: 13px;
line-height: 27px;
color: #999;
}
`
export const LoadMore=styled.div`
width: 100%;
height: 40px;
line-height: 40px;
background-color: #a5a5a5;
border-radius: 20px;
text-align: center;
cursor: pointer;
color: #fff;
margin-top: 30px;
`