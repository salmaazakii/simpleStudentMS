import { connect } from 'react-redux';
import { getStudentsList } from '../actions';
import {Link} from 'react-router-dom';

const StudentsList = ({list}) => {
    // console.log('in list')
    //         // console.log(this.props)
    //         return (<div>
    //         <h1>hello</h1>
    //         </div>
    //         )
    if(list){
        if(list.length > 0){
            return(
            <div className="container rounded-pill p-5">
                <ul>
                    {list.map((student) => {
                        // return <Car key={car.id} carInfo={car} history={history}/>
                        return(
                            <li>
                                <Link className="navbar-brand" href={`/students/${student.id}`} >
                                {student.name}
                                </Link>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        )
        }
        else
            return <p>No student exists with this name!</p>
    }
    else{
        return <p> Loading...</p>
    }
}

const mapStateToProps = (state) => {
    return {
        list : state.students.list
    }
}
export default connect(mapStateToProps,getStudentsList)(StudentsList);