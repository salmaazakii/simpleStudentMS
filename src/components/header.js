import { useRef } from "react";
import { Link} from "react-router-dom";
import {setStudentDetails} from '../actions';

const Header = () => {
    const name = useRef()
    const id = useRef()
    const age = useRef()
    const phone = useRef()
    const addStudent = () => {
        setStudentDetails(parseInt(id.current.value),name.current.value,
            parseInt(age.current.value),parseInt(phone.current.value))
        console.log("done added!")
        window.location.reload();
    }
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <Link className="navbar-brand" href="/">Home</Link>
                <form className="form-inline">
                    <button className="btn btn-outline-light" type="button" data-toggle="modal" data-target="#exampleModal">
                        Add Student</button>
                </form>
            </nav>
            <div className="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add New Student</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label for="recipient-name" className="col-form-label">Name:</label>
                                    <input ref={name} type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="form-group">
                                    <label for="idF" className="col-form-label">id:</label>
                                    <input ref={id} type="number" className="form-control" id="idF" />
                                </div>
                                <div className="form-group">
                                    <label for="age" className="col-form-label">age:</label>
                                    <input ref={age} type="number" className="form-control" id="age" />
                                </div>
                                <div className="form-group">
                                    <label for="message-text" className="col-form-label">phone:</label>
                                    <input ref={phone} type="number" className="form-control" id="age" />
                                </div>
                            </form>
                        </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" 
                                onClick={addStudent}>Add Student</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Header;