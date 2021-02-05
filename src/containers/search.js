import React from 'react';
import { getStudentsList } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Search extends React.Component{
    constructor(){
        super()
        this.state ={
            stName : '',
            stList : []
        }
    }
    // componentDidMount(){
    //     this.setState({
    //         stList : getStudentsList()
    //     })
    //     console.log(this.state.stList)
    // }
    render(){
        return(
            <div class="input-group my-5">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                </div>
                <input type="text" class="form-control" aria-label="Default"
                value={this.state.stName} onChange={ e =>
                    this.setState({ stName : e.target.value }) }/>
             </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getStudentsList},dispatch)
}
// const mapStateToProps = (state) => {
//     return {
//         list : state.students.list
//     }
// }

export default connect(null,mapDispatchToProps)(Search);