import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/notFound';
import Home from './components/home';
import StudentDetails from './components/studentDetails'
import promiseMiddleware from 'redux-promise';

const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore)
const App = () => {
  return (
    <Provider store={createStoreWithMW(reducers)} >
      <BrowserRouter>
        <Switch>
          <Route path="/students/:id" component={StudentDetails} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
