import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button, SearchWrapper
} from './style'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    handelInputFocus = () => {
    }
    handelInputBlur = () => {
        // this.setState({
        //     focused: false
        // });
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont ">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={400}
                            classNames='slider'
                        >
                            <NavSearch
                                onFocus={() => {
                                    this.props.handelInputFocus()
                                }}
                                onBlur={() => {
                                    this.props.handelInputBlur()
                                }}
                                className={this.props.focused ? "focused" : ''}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? "focused iconfont" : 'iconfont'}>&#xe614;</i>
                    </SearchWrapper>

                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writting">
                        <i className="iconfont ">&#xe615;</i>写文章</Button>

                </Addition>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused}
}
const mapDispatch = (dispatch) => {
    return {
        handelInputFocus(){
            dispatch({type:"search_focuse"});
        },
        handelInputBlur(){
            dispatch({type:"search_blur"});
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Header);