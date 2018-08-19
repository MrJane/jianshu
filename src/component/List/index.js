import React, {Component} from 'react';
import {ListItem, ListInfo} from './style'
import {connect} from 'react-redux';

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
      </div>
    );
  }
}

const mapState = (state) => {
    return {
        list:state.home.list
    }
}
export default connect(mapState)(List);