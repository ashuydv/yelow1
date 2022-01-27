import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  withRouter,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Logout from "./components/Logout";
import AdminDashboard from "./components/pages/AdminDashboard";
import Dashboard from "./components/pages/Dashboard";
import Table from "./components/pages/Table";
import StudentDashboard from "./components/pages/StudentDashboard";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
//import Dashboard from './components/Dashboard.js'
import "./components/style.css";
import Users from "./components/Users";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const Main = withRouter(({ location }) => {
  return (
    <div>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/logout" && <Header />}
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/logout" && <Sidebar />}
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/executeDashboard" exact component={StudentDashboard} />
      <Route path="/adminDashboard" exact component={AdminDashboard} />
      <Route path="/orders" component={Table} />
      <Route path="/users" component={Users} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/register" component={Register} />
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/logout" && <Footer />}
    </div>
  );
});
function App() {
  return (
    <div>
      {/* <Dashboard/> */}
      {/* <Header/>
        <Sidebar/>
        <Footer/> */}
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </div>
  );
}

export default App;
