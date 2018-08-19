import styled from 'styled-components';
export const RecWrapper = styled.div`
width: 280px;
margin: 30px 0px;
`
export const RecItem = styled.div`
width: 280px;
height: 50px;
//模板标签的函数插值能拿到样式组件的props，
background: url(${(props)=>props.imgUrl});
background-size: contain;
margin-bottom: 6px;
`