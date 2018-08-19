import styled from 'styled-components'
export const HomeWrapper = styled.div`
width: 960px;
margin: 0px auto;
background-color: orange;
&.clearfix{
  }
`;
export const HomeLeft = styled.div`
width: 650px;
float: left;
padding-top: 30px;
img{
width: 650px;
height: 270px;
}
`
export const HomeRight = styled.div`
width: 280px;
float: right;
margin: 0px auto;
`
export const BackTop = styled.div`
position: fixed;
width: 62px;
height: 62px;
line-height: 62px;
text-align: center;
border:1px solid #ccc;
right: 40px;
bottom: 40px;
font-size: 14px;
`