import React, { Component } from 'react';
import axios from 'axios';
import {connect} from "react-redux"
import Topic from '../../component/Topic';
import List from '../../component/List';
import Write from '../../component/Write'
import Recommend from '../../component/Recommend';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import BannerImg from '../../static/images/banner.jpg'
import {actionCreators} from "../../redux/store";
class Home extends Component {
    handleScrollTop=()=>{

    }

  render() {
    return (
          <HomeWrapper className="clearfix">
              <HomeLeft>
                  <img src={BannerImg} alt=""/>
                  <Topic topicList={this.props.topicList}></Topic>
                  <List listData={this.props.listData}></List>
              </HomeLeft>
              <HomeRight>
                  <Recommend recommendList={this.props.recommendList}></Recommend>
                  <Write authors={this.props.authors}></Write>
              </HomeRight>
              <BackTop onClick={this.handleScrollTop}>返回顶部</BackTop>
          </HomeWrapper>
    );
  }
  componentDidMount(){
      axios.get('/api/homeList.json').then((res)=>{
          //dispatch(actionCreators.getHomeData(res.data)) dispatch  只能在mapToDispatch才能用
          console.log(res);
          this.props.loadHomeData(actionCreators.getHomeData(res.data.result))
      }).catch((err)=>{
          console.log(err)
      })
  }
}
const mapState=(state)=>{
    return{
        authors:state.home.authors,
        recommendList:state.home.recommendList,
        topicList:state.home.topicList,
        listData:state.home.listData,
        scrollTop:state.home.scrollTop
    }
}
const mapDispatch = (dispatch)=>{
    return{
        loadHomeData(action){
            dispatch(action)
        }
    }
}
export default connect(mapState,mapDispatch)(Home);