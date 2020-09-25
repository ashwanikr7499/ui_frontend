import React, { Component } from "react";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state_fname: "",
      state_lname: "",
      state_emailid: "",
      state_password: "",
    };
    this.update_fname = this.update_fname.bind(this);
    this.update_lname = this.update_lname.bind(this);
    this.update_emailid = this.update_emailid.bind(this);
    this.update_password = this.update_password.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  update_fname(e) {
    this.setState({ state_fname: e.target.value });
  }
  update_lname(e) {
    this.setState({ state_lname: e.target.value });
  }
  update_emailid(e) {
    this.setState({ state_emailid: e.target.value });
  }
  update_password(e) {
    this.setState({ state_password: e.target.value });
  }
  handleLogin(e) {
    console.log(this.state.state_fname + " " + this.state.state_lname);
    console.log(this.state.state_emailid + " " + this.state.state_password);
  }
  render() {
    return (
      <div>
        <div class="loader"></div>
        <div id="app">
          <section class="section">
            <div class="container mt-5">
              <div class="row">
                <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h4>Register</h4>
                    </div>
                    <div class="card-body">
                      <form method="POST">
                        <div class="row">
                          <div class="form-group col-6">
                            <label for="first_name">First Name</label>
                            <input
                              id="first_name"
                              type="text"
                              class="form-control"
                              name="first_name"
                              onChange={this.update_fname}
                              autofocus
                            />
                          </div>
                          <div class="form-group col-6">
                            <label for="last_name">Last Name</label>
                            <input
                              id="last_name"
                              type="text"
                              class="form-control"
                              name="last_name"
                              onChange={this.update_lname}
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="email">Email</label>
                          <input
                            id="email"
                            type="email"
                            class="form-control"
                            name="email"
                            onChange={this.update_emailid}
                          />
                          <div class="invalid-feedback"></div>
                        </div>
                        <div class="row">
                          <div class="form-group col-6">
                            <label for="password" class="d-block">
                              Password
                            </label>
                            <input
                              id="password"
                              type="password"
                              class="form-control pwstrength"
                              data-indicator="pwindicator"
                              name="password"
                              onChange={this.update_password}
                            />
                            <div id="pwindicator" class="pwindicator">
                              <div class="bar"></div>
                              <div class="label"></div>
                            </div>
                          </div>
                          <div class="form-group col-6">
                            <label for="password2" class="d-block">
                              Password Confirmation
                            </label>
                            <input
                              id="password2"
                              type="password"
                              class="form-control"
                              name="password-confirm"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              name="agree"
                              class="custom-control-input"
                              id="agree"
                            />
                            <label class="custom-control-label" for="agree">
                              I agree with the terms and conditions
                            </label>
                          </div>
                        </div>
                        <div class="form-group">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg btn-block"
                            onClick={this.handleLogin}
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="mb-4 text-muted text-center">
                      Already Registered? <a href="auth-login.html">Login</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- General JS Scripts --> */}
        <script src="assets/js/app.min.js"></script>
        {/* <!-- JS Libraies --> */}
        <script src="assets/bundles/jquery-pwstrength/jquery.pwstrength.min.js"></script>
        <script src="assets/bundles/jquery-selectric/jquery.selectric.min.js"></script>
        {/* <!-- Page Specific JS File --> */}
        <script src="assets/js/page/auth-register.js"></script>
        {/* <!-- Template JS File --> */}
        <script src="assets/js/scripts.js"></script>
        {/* <!-- Custom JS File --> */}
        <script src="assets/js/custom.js"></script>
      </div>
    );
  }
}
export default Home;
