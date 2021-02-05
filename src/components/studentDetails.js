import React from 'react';
import studentsList from '../containers/studentsList';
// class StudentDetails extends React.Component {

// }
const StudentDetails = ({match}) => {

    const student={}
    const deleteStudent = () => {
        // let res = confirm('Are you sure you want to DELETE info?')
        // if(res){
        //     //delete action
        // }
    }
    return (
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{student.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{student.phone}</h6>
                <p class="card-text">{student.age}</p>
                <br/>
                <button type="button" class="btn btn-danger" onClick={deleteStudent}>
                    Delete this account</button>
            </div>
        </div>
    )
}
export default StudentDetails;