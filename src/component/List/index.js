import React, {Component} from 'react';
import {ListItem, ListInfo,LoadMore} from './style'
import {connect} from 'react-redux';
import * as acticnCreators from '../../redux/actionCreators'
class List extends Component {
  render() {
    return (
      <div>
          {
              this.props.list.map((item,index)=>{
                  return(
                      <ListItem key={index}>
                          <img className="pic"
                               src={item.url}
                               alt=""/>
                          <ListInfo>
                              <h3 className="title">{item.title}</h3>
                              <p className="desc">{item.desc}</p>
                              <p></p>
                          </ListInfo>
                      </ListItem>
                  )
              })
          }
          <LoadMore onClick={this.props.getMoreList}>加载更多...</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => {
    return {
        list:state.home.listData
    }
}
const mapDispatch=(dispatch)=>{
    return{
        getMoreList(){
            console.log("click")
        }
    }
}
export default connect(mapState,mapDispatch)(List);