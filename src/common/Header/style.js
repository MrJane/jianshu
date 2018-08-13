import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    //background: aqua;
    position: relative;
    height: 56px;
    padding-right: 100px;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f0;
    .slider-enter{
    transition: all 0.4s ease-out;
    }
    .slider-enter-active{
    width: 240px;
    }
    .slider-exit{
    transition: all 0.4s ease-out;
    }
    .slider-exit-active{
    width: 160px;
    }
`;
//attrs 方法可以设置属性
export const Logo = styled.a.attrs({
    href: '/index'
})`
     display: block;
     position: absolute;
     top: 0;
     left: 0;
     height: 56px;
     width: 100px;
     background: url(${logoPic});//模板字符串
     background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
line-height: 56px;
font-size: 17px;
padding: 0px 15px;
&.left{
 float: left;
}
//&.active 表示含有这个类active类的样式
&.active{
color: #ea6f5a;
}
&.right{
 float: right;
 color: #969696;
}
`
export const SearchWrapper = styled.div`
position: relative;
float: left;
.iconfont {//这个代表子元素类iconfont
position: absolute;
right: 5px;
bottom: 5px;
width: 30px;
height: 30px;
line-height: 30px;
border-radius: 15px;
text-align: center;
&.focused{
background: #777;
color: #fff;
}
}
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
width: 160px;
height: 38px;
border: none;
outline: none;
border-radius: 19px;
background: #eee;
margin-top: 9px;
padding: 0 20px;
box-sizing: border-box;
font-size: 14px;
&.focused{
width: 240px;
}
&::placeholder{
color: #999;
}
`
export const Addition = styled.div`
position: absolute;
top: 0;
right: 100px;
height: 56px;
`
export const Button = styled.button`
margin-right: 20px;
line-height: 38px;
padding: 0 20px;
margin-top: 8px;
border-radius: 19px;
border: 1px solid #ea6f5a;
&.writting{
background: #ea6f5a;
color: #fff;}
&.reg{
color: #ea6f5a;
background: #fff;
}
`