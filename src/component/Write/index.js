import React, {Component} from 'react';
import {WriteWrapper, WriteTitle, WriteSwitch, WriteAuthorItem} from './style'

class Write extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        console.log(this.props.authors)
        return (
            <WriteWrapper>
                <WriteTitle>
                    推荐作者
                    <WriteSwitch>
                        <i ref={(icon) => {
                            this.spinIcon = icon
                        }} className="iconfont spin">&#xe851;</i>
                        换一批
                    </WriteSwitch>

                    {
                        this.props.authors.map((item,index) => {
                            return (
                                <WriteAuthorItem key={index}>
                                    <a href="" className="avatar">
                                        <img src={item.avatar_source} alt=""/>
                                    </a>
                                    <a className="follow" state="0">+关注</a>
                                    <a href="" target="_blank" className="name">{item.nickname}</a>
                                    <p>写了320.1k字 · 10.4k喜欢</p>
                                </WriteAuthorItem>
                            )
                        })
                    }
                </WriteTitle>
            </WriteWrapper>
        );
    }
}

export default Write;