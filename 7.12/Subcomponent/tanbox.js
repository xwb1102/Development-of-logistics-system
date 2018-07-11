import React,{Component} from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {nr} = this.props;
        return (
            <div className='tanBox' ref='pro'>
                <div>
                    {nr}
                </div>
            </div>
        );
    }
}

export default Tab;