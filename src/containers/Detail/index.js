import React, { Component } from 'react';
import Header from '../../common/Header'
import {DetailWrapper,ArticleTitle} from './style'
class Detail extends Component {
  render() {
    return (
        <div>
            <Header></Header>
            <DetailWrapper>
                <ArticleTitle>每一个人，都能在《武林外传》里看到自己的爱情</ArticleTitle>
            </DetailWrapper>
        </div>

    );
  }
}

export default Detail;