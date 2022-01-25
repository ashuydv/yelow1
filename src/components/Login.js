import axios from "axios";
import e from "cors";
import { useState } from "react";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import AuthRep from "../services/authRepo";

const Login = () => {
  const [formdata, setformdata] = useState({
    phone_number: "",
    password: "",
  });
  
  const [userdata, setUserData] = useState({})  
  const [token, setToken] = useState("")

  const [isAdmin, setIsAdmin] = useState(false)

  const handleChange = (e) => {
    setformdata((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const history = useHistory();

  const baseUrl = `https://devapi.yelow.club/v1/manpower/yelow/login`;

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await AuthRep.login(formdata) 
    setUserData(data.payload.user)
    setToken(data.payload.token)
    console.log(data.payload.user);
  };
  
  const Admin = () => {
    history.push('/adminDashboard')
  }

  const Executive = () => {
    history.push('/executeDashboard')
  }

  localStorage.setItem("userdata", userdata)
  localStorage.setItem("usertoken", token)

  const routeChange = () => {
    if(userdata.type === 'admin') {
      history.push('/adminDashboard')
    } else if(userdata.type === 'executive') {
      history.push('/executeDashboard')
        } else {
      alert('Invalid User')
    }
  };

  return (
    <div>
      <div className="container relative ">
        <div className="d-flex justify-content-center row login">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="overflow-hidden card-sm">
              <div className="bg-primary bg-soft">
                <div className="row">
                  <div className="col-7 col">
                    <div className="text-primary p-4">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p>Sign in to continue to Skote.</p>
                    </div>
                  </div>
                  <div className="col-5 align-self-end col">
                    <img
                      src="/static/media/profile-img.43b59e59.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-0 card-body">
                <div className="auth-logo">
                  <a className="auth-logo-light" href="/">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src="/static/media/logo-light.96c274da.svg"
                          alt=""
                          className="rounded-circle"
                          height="34"
                        />
                      </span>
                    </div>
                  </a>
                  <a className="auth-logo-dark" href="/">
                    <div className="avatar-md profile-user-wid mb-4">
                      <span className="avatar-title rounded-circle bg-light">
                        <img
                          src="/static/media/logo.a0143fa8.svg"
                          alt=""
                          className="rounded-circle"
                          height="34"
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="p-2">
                  <form
                    action="#"
                    className="form-horizontal"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label
                        htmlFor="phone_number"
                        className="form-label form-label"
                      >
                        Phone No.
                      </label>
                      <input
                        name="phone"
                        type="number"
                        className="form-control"
                        maxLength="10"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className="form-label form-label"
                      >
                        Password
                      </label>
                      <div className="input-group auth-pass-inputgroup">
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          onChange={handleChange}
                        />
                        <button
                          className="btn btn-light "
                          type="button"
                          id="password-addon"
                        >
                          <i className="mdi mdi-eye-outline"></i>
                        </button>
                      </div>
                    </div>
                    {/* <div className="mb-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => handleChange(e)}
                      >
                        <option value="Admin">Admin</option>
                        <option value="Executive">Executive</option>
                      </select>
                    </div> */}
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="customControlInline"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="customControlInline"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="mt-3 d-grid">
                      {/* <Link
                        to={userdata.type === 'admin' ? '/adminDashboard' : '/executeDashboard'}
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Log In
                      </Link> */}
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                        onClick={routeChange}
                      >
                        Login
                      </button>
                    </div>
                    {/* <div className="mt-4 text-center">
                      <h5 className="font-size-14 mb-3">Sign in with</h5>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <a
                            className="social-list-item bg-primary text-white border-primary"
                            href="/"
                          >
                            <i className="mdi mdi-facebook"></i>
                          </a>
                        </li>
                        <li className="list-inline-item"></li>
                      </ul>
                    </div> */}
                    <div className="mt-4 text-center">
                      <a className="text-muted" href="/forgot-password">
                        <i className="mdi mdi-lock me-1"></i> Forgot your
                        password?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 text-center">
              <p>
                Don't have an account ?
                <Link className="fw-medium text-primary" to="/register">
                  Signup Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
