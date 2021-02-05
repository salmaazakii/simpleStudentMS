const API_URL = "http://localhost:3005/students"
export const getStudentsList = async () => {
    let result;
    try {
        let response = await fetch(`${API_URL}`)
        result = await response.json()
    } catch (e){
        console.log(e)
    }
    return{
        type : 'STUDENTS_LIST',
        payload : result
    }
}
export const getStudentDetails = async (id) => {
    let result;
    try {
        let response = await fetch(`${API_URL}/${id}`)
        result = await response.json()
    } catch (e){
        console.log(e)
    }
    return{
        type : 'STUDENT_DETAILS',
        payload : result
    }
}
export const setStudentDetails = async (id,st_name,age,phone) => {
    await fetch(`${API_URL}`,{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({id: id, name: st_name, age: age, phone: phone})
    })
    return {
        type: 'ADD_STUDENT',
        payload : 'student added successfully'
    }
}