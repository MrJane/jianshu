import React, {Component} from 'react';
import {RecWrapper, RecItem} from "./style";
import {connect} from 'react-redux'

class Recommend extends Component {
    render() {
        let {recommendList} = this.props;
        return (
            <RecWrapper>
                {
                    recommendList.map((item,index)=>{
                        return<RecItem key={index} imgUrl={item.url}></RecItem>
                    })
                }
            </RecWrapper>
        );
    }
}

const mapState = (state) => {
    return {
        recommendList: state.home.recommendList
    }
};
export default connect(mapState)(Recommend);