const students = (state = {}, action) =>{
    switch (action.type){
        case 'STUDENTS_LIST' :{
            console.log(state)
            console.log(action)
            console.log(action.payload)
            return { ...state, list: action.payload}
        }
        case 'STUDENT_DETAILS' :
            return { ...state, details : action.payload}
        case 'ADD_STUDENT':
            return { ...state, result: action.payload}
    }
    console.log('no action')
    console.log(action.type)
    return state
}
export default students;