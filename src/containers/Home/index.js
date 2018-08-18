import React, { Component } from 'react';
import Topic from '../../component/Topic';
import List from '../../component/List';
import Write from '../../component/Write'
import Recommend from '../../component/Recommend';
import {HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
import BannerImg from '../../static/images/banner.jpg'
class Home extends Component {
  render() {
    return (
      <div>
          <HomeWrapper>
              <HomeLeft>
                  <img src={BannerImg} alt=""/>
                  <Topic></Topic>
                  <List></List>
              </HomeLeft>
              <HomeRight>
                  <Recommend></Recommend>
                  <Write></Write>
              </HomeRight>
          </HomeWrapper>
      </div>
    );
  }
}

export default Home;