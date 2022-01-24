import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div class="container relative">
        <div class="justify-content-center row login">
          <div class="col-md-8 col-lg-8 col-xl-5">
            <div class="overflow-hidden card">
              <div class="bg-primary bg-soft">
                <div class="row">
                  <div class="col-7 col">
                    <div class="text-primary p-4">
                      <h5 class="text-primary">Free Register</h5>
                      <p>Get your free Skote account now.</p>
                    </div>
                  </div>
                  <div class="col-5 align-self-end col">
                    <img
                      src="/static/media/profile-img.43b59e59.png"
                      alt=""
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div class="pt-0 card-body">
                <div>
                  <a href="/">
                    <div class="avatar-md profile-user-wid mb-4">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="/static/media/logo.a0143fa8.svg"
                          alt=""
                          class="rounded-circle"
                          height="34"
                        />
                      </span>
                    </div>
                  </a>
                </div>
                <div class="p-2">
                  <form action="#" class="form-horizontal">
                    <div class="mb-3">
                      <label for="email" class="form-label form-label">
                        Email
                      </label>
                      <input
                        name="email"
                        placeholder="Enter email"
                        type="email"
                        class="form-control"
                        value=""
                      />
                    </div>
                    <div class="mb-3">
                      <label for="username" class="form-label form-label">
                        Username
                      </label>
                      <input
                        name="username"
                        type="text"
                        placeholder="Enter username"
                        class="form-control"
                        value=""
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label form-label">
                        Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        class="form-control"
                        value=""
                      />
                    </div>
                    <div class="mt-4 d-grid">
                      <button class="btn btn-primary btn-block" type="submit">
                        Register
                      </button>
                    </div>
                    {/* <div class="mt-4 text-center">
                      <h5 class="font-size-14 mb-3">Sign up using</h5>
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a
                            class="social-list-item bg-primary text-white border-primary"
                            href="/pages-register"
                          >
                            <i class="mdi mdi-facebook"></i>
                          </a>
                        </li>{" "}
                        <li class="list-inline-item">
                          <a
                            class="social-list-item bg-info text-white border-info"
                            href="/pages-register"
                          >
                            <i class="mdi mdi-twitter"></i>
                          </a>
                        </li>{" "}
                        <li class="list-inline-item">
                          <a
                            class="social-list-item bg-danger text-white border-danger"
                            href="/pages-register"
                          >
                            <i class="mdi mdi-google"></i>
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <div class="mt-4 text-center">
                      <p class="mb-0">
                        By registering you agree to the Skote{" "}
                        <a class="text-primary" href="/pages-register">
                          Terms of Use
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <p>
                Already have an account ?
                <Link class="fw-medium text-primary" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
