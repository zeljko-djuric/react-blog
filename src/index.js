import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SingleArticle from './components/SingleArticle';
import * as serviceWorker from './serviceWorker';
import CreateArticle from './components/CreateArticle'



ReactDOM.render(
<BrowserRouter>
    <div>
        <Navbar/>

        <Route exact path="/" component={Welcome}/>
        <Route path="/login" component={Login}/>
        <Route path="/article/:slug" component={SingleArticle}/>


        <Route path="/articles/create" component={CreateArticle}/>
        <Footer/>
    </div>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
