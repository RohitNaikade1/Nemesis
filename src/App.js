import React,{ useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import Login from './components/login';
import Barchart from './components/Linechart';
import Piechart from './components/piechart';
import {fetchData} from './components/api/api'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      createdAt:[],
      comments:[],
      id:[]
    }
  }

   async componentDidMount(){
    const fetchedData = await fetchData();
    const date=fetchedData.data.map((data)=>{
      return data.created_at
    })
    const comments=fetchedData.data.map((data)=>{
      return data.comments
    })
    const ids=fetchedData.data.map((data)=>{
      return data.id
    })
    this.setState({createdAt:date});
    this.setState({comments:comments});
    this.setState({id:ids});
    console.log(this.state.comments);
    console.log(this.state.createdAt);
    console.log(this.state.id);
}
  render(){
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/pie" component={()=><Piechart 
                                    comments={this.state.comments}
                                    id={this.state.id}/>} />
            <Route exact path="/bar" component={()=><Barchart 
                            createdAt={this.state.createdAt}
                            comments={this.state.comments}/>} />
          </Switch>
        </Router>
      </div>
    );
  } 
}

export default App;
