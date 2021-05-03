import React from "react";
import { useSelector } from "react-redux";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import FullWidthTabs from "./FullWidthTabs";

const UserProfile = (props) => {
  const user = useSelector((state) => state.AuthReducer.user);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <h4>User dashboard</h4>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-md-2 col-sm-2">
                  <ContactMailIcon style={{ fontSize: "80px" }} />
                </div>
                <div className="col-md-10 col-sm-10">
                  <form>
                    <div className="form-group row ">
                      <label
                        htmlFor="username"
                        className="col-2 col-form-label"
                      >
                        Login:
                      </label>
                      <div className="col-10">
                        <input
                          id="username"
                          name="username"
                          value={`${user.email.split("@")[0]}`}
                          className="form-control here"
                          onChange={() => {}}
                          required="required"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group row mt-2">
                      <label htmlFor="name" className="col-2 col-form-label">
                        Email:
                      </label>
                      <div className="col-10">
                        <input
                          id="name"
                          name="name"
                          value={`${user.email}`}
                          className="form-control here"
                          onChange={() => {}}
                          type="text"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <FullWidthTabs {...props} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
