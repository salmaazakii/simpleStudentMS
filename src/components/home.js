import React from 'react';
import Header from './header';
import Search from '../containers/search';
import StudentsList from '../containers/studentsList'
class Home extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <Search />
                    <StudentsList />
                </div>
            </div>
        )
    }
}
export default Home;