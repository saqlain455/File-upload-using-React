import React from 'react'
import logo from './logo.svg';
import './App.css';
import {Switch,BrowserRouter, Route} from 'react-router-dom';
import Upload from './component/upload'
import Download from './component/download'
import Del from './component/del'
function Main() {
  return (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/Upload'component={Upload}/>
            <Route path='/Download'component={Download}/>
            <Route path='/Delete'component={Del}/>
        </Switch>
    </main>
  );
}

    function Home() {
        return (
            <h1>i am home</h1>
        );
    }


export default Main;