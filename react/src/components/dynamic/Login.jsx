import React from "react";

function Login() {
  return (
    <>
      <div
        className="login-container"
        style={{
          background:
            'url("https://img6.thuthuatphanmem.vn/uploads/2022/03/15/background-am-thuc-don-gian-dep-nhat_081313511.jpg") top center / cover no-repeat',
        }}
      >
        <div className="d-flex justify-content-center align-items-center vh-100">
          <section
            className="pt-5 pb-5 pe-2"
            style={{ border: "10px solid #000" }}
          >
            <div className="container-fluid h-custom">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5 text-center">
                  <img
                    src="https://chanhviet.com/wp-content/uploads/2020/06/1-19.jpg"
                    className="img-fluid"
                    alt="Sample"
                    width="100%"
                  />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                  <form>
                    <div className="form-outline mb-4">
                      <i className="bi bi-person-fill pe-1" />{" "}
                      <label className="form-label" htmlFor="form3Example3">
                        Username
                      </label>
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-outline mb-3">
                      <i className="bi bi-lock-fill pe-1" />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check mb-0">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue=""
                          id="form2Example3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          Remember me
                        </label>
                      </div>
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                    </div>
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        style={{
                          paddingLeft: "2.5rem",
                          paddingRight: "2.5rem",
                        }}
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{" "}
                        <a href="#!" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
