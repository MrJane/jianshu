import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from '../../redux/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchTitle,
    SearchSwitch,
    SearchHotItem
} from './style'

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let newList = []
        if (this.props.list.length) {
            for (let i = (this.props.page - 1); i < this.props.page * 10; i++) {
                newList.push(<SearchHotItem key={newList.length}>{this.props.list[i]}</SearchHotItem>)
            }
        }
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">登陆</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={400}
                            classNames='slider'
                        >
                            <NavSearch
                                onFocus={() => {
                                    this.props.handelInputFocus(this.props.list)
                                }}
                                onBlur={() => {
                                    this.props.handelInputBlur()
                                }}
                                className={this.props.focused ? "focused" : ''}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? "focused iconfont zoom" : 'iconfont zoom'}>&#xe614;</i>
                        {
                            this.props.focused || this.props.mouseIn ?
                                <SearchInfo
                                    onMouseEnter={this.props.handeleMouseEnter}
                                    onMouseLeave={this.props.handleMouseLeave}>
                                    <SearchTitle>
                                        热门搜索
                                        <SearchSwitch
                                            onClick={() => {
                                                this.props.handleChangePage(this.props.page, this.props.totalPage, this.spinIcon)
                                            }}>
                                            <i ref={(icon) => {
                                                this.spinIcon = icon
                                            }} className="iconfont spin">&#xe851;</i>
                                            换一批
                                        </SearchSwitch>
                                    </SearchTitle>
                                    <div>{newList}</div>
                                </SearchInfo> : null
                        }
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
        focused: state.header.focused,
        list: state.header.list,
        page: state.header.page,
        mouseIn: state.header.mouseIn,
        totalPage: state.header.totalPage
    }
}
const mapDispatch = (dispatch) => {
    return {
        handelInputFocus(list) {
           if(list.length===0){
               dispatch(actionCreators.getHotItems());
           }
            dispatch(actionCreators.searchFocus());
        },
        handelInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handeleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            spin.style.transform = 'rotate(720deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
            console.log(page, totalPage)
        }
    }
}
export default connect(mapStateToProps, mapDispatch)(Header);