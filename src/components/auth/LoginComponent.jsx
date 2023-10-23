import React from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */

export default function LoginComponent() {
  return (
    <React.Fragment>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card bg-white">
                <div className="card-body p-5">
                  <form className="mb-3 mt-md-4">
                    <h2 className="instagram-text">𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h2>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                      />
                    </div>
                    <div className="d-grid">
                      <button className="btn btn-primary" type="button">
                        Log in
                      </button>
                    </div>
                  </form>

                  <p className="forgot-password">
                    <Link to="" className="text-primary">
                      Forgot password?
                    </Link>
                  </p>
                  <div>
                    <p className="signup-text">
                      Don't have an account?{" "}
                      <Link to="" className="text-primary">
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
