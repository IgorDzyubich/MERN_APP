import React from 'react';
import { useSelector } from 'react-redux'

const User = (props) => {
    const user = useSelector(state => state.AuthReducer.user)

    return   (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>{user.first_name} Profile</h4>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <form>
                                        <div className="form-group row ">
                                            <label htmlFor="username" className="col-4 col-form-label">User Name</label> 
                                            <div className="col-8">
                                            <input id="username" name="username" value={`${user.first_name} ${user.second_name}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="name" className="col-4 col-form-label">Email</label> 
                                            <div className="col-8">
                                            <input id="name" name="name" value={`${user.email}`} className="form-control here" onChange={()=>{}} type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="lastname" className="col-4 col-form-label">Phone</label> 
                                            <div className="col-8">
                                            <input id="lastname" name="lastname" value={`${user.phone}`} className="form-control here" onChange={()=>{}} type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="text" className="col-4 col-form-label">Role</label> 
                                            <div className="col-8">
                                            <input id="text" name="text" value={`${user.role}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="email" className="col-4 col-form-label">Address</label> 
                                            <div className="col-8">
                                            <input id="email" name="email" value={`${user.address},  ${user.regoin}`} onChange={()=>{}} className="form-control here" required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="website" className="col-4 col-form-label">IP Address</label> 
                                            <div className="col-8">
                                            <input id="website" name="website" value={`${user.ip_address}`} className="form-control here" onChange={()=>{}} type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="publicinfo" className="col-4 col-form-label">Public Info</label> 
                                            <div className="col-8">
                                            <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" className="form-control" onChange={()=>{}}></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <div className="offset-4 col-8">
                                            <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default User;