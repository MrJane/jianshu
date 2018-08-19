import React, {Component} from 'react';
import {WriteWrapper, WriteTitle, WriteSwitch,WriteAuthorItem} from './style'

class Write extends Component {
    render() {
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
                    <WriteAuthorItem>
                        
                    </WriteAuthorItem>

                </WriteTitle>
            </WriteWrapper>
        );
    }
}

export default Write;