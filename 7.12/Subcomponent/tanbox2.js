import React,{Component} from 'react';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {lnr} = this.props;
        return (
            <div className='tanBox2' ref='pro'>
                <div>
                    {lnr}
                </div>
            </div>
        );
    }
}

export default Tab;