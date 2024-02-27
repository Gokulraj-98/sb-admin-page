import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { SideBar } from './components/SideBar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Color from './components/Color';
import Border from './components/Border';
import Others from './components/Others';
import Animation from './components/Animation';
import Login from './components/LoginScreens/Login';
import Register from './components/LoginScreens/Register';
import ForgetPassword from './components/LoginScreens/ForgetPassword';
import Error from './components/OtherPages/404';
import Blank from './components/OtherPages/Blank';
import Charts from './components/Charts';



function App() {
  return (
    <BrowserRouter>
    <body id="page-top">
      <div className="App">
        <div id="wrapper">
          <SideBar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopBar />
              <div className="container-fluid">
                <Switch>
                  <Route exact={true} path="/" component={Dashboard} />
                  <Route exact={true} path="/table" component={Table} />
                  <Route exact={true} path="/Button" component={Buttons} />
                  <Route exact={true} path="/cards" component={Cards} />
                  <Route exact={true} path="/colors" component={Color} />
                  <Route exact={true} path="/borders" component={Border} />
                  <Route exact={true} path="/others" component={Others} />
                  <Route exact={true} path="/animations" component={Animation} />
                  <Route exact={true} path="/login" component={Login} />
                  <Route exact={true} path="/register" component={Register} />
                  <Route exact={true} path="/forgotpassword" component={ForgetPassword} />
                  <Route exact={true} path="/404page" component={Error} />
                  <Route exact={true} path="/blank" component={Blank} />
                  <Route exact={true} path="/charts" component={Charts} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
        </a>
      <footer class="sticky-footer bg-white">
                <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                        <span>Copyright &copy; Your Website 2021</span>
                    </div>
                </div>
            </footer>
      </body>
    </BrowserRouter>
  );
}

export default App;
