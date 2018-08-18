import React, {Component} from 'react';
import {connect} from 'react-redux';
import {TopicWrapper, TopicItem} from './style'

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map((item,index)=>{
                        return(
                            <TopicItem key={item.id}>
                                <img className="topic-pic"
                                     src={item.url} alt=""/>
                                {item.title}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        );
    }
}

const mapState = (state) => {
  return{
      topicList:state.home.topicList
  }
}
export default connect(mapState)(Topic);