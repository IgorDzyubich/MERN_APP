import React from 'react';
import { useSelector } from 'react-redux'

const UserProfile = (props) => {
    
    const showId = props.match.params.id
    const show = useSelector(state => state.ShowsReducer.shows.find(el => el.id == showId))
    
    return   (
            // <div className="container">
            //     <div className="row">
            //         <div className="col-md-12">
            //             <div className="card">
            //                 <div className="card-body">
            //                     <div className="row">
            //                         <div className="col-md-12">
            //                             <h4>{show.name}</h4>
            //                             <hr/>
            //                         </div>
            //                     </div>
            //                     <div className="row">
            //                         <div className="col-md-12">
            //                             <form>
            //                             <div className="form-group row ">
            //                                 <label htmlFor="username" className="col-4 col-form-label">User Name</label> 
            //                                 <div className="col-8">
            //                                 <input id="username" name="username" value={`${show.name} ${show.name}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <label htmlFor="name" className="col-4 col-form-label">Email</label> 
            //                                 <div className="col-8">
            //                                 <input id="name" name="name" value={`${show.name}`} className="form-control here" onChange={()=>{}} type="text"/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <label htmlFor="lastname" className="col-4 col-form-label">Phone</label> 
            //                                 <div className="col-8">
            //                                 <input id="lastname" name="lastname" value={`${show.name}`} className="form-control here" onChange={()=>{}} type="text"/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <label htmlFor="text" className="col-4 col-form-label">Role</label> 
            //                                 <div className="col-8">
            //                                 <input id="text" name="text" value={`${show.name}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <label htmlFor="email" className="col-4 col-form-label">Address</label> 
            //                                 <div className="col-8">
            //                                 <input id="email" name="email" value={`${show.names},  ${show.name}`} onChange={()=>{}} className="form-control here" required="required" type="text"/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <label htmlFor="website" className="col-4 col-form-label">IP Address</label> 
            //                                 <div className="col-8">
            //                                 <input id="website" name="website" value={`${show.name}`} className="form-control here" onChange={()=>{}} type="text"/>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <label htmlFor="publicinfo" className="col-4 col-form-label">Public Info</label> 
            //                                 <div className="col-8">
            //                                 <textarea id="publicinfo" name="publicinfo" cols="40" rows="4" className="form-control" onChange={()=>{}}></textarea>
            //                                 </div>
            //                             </div>
            //                             <div className="form-group row mt-2">
            //                                 <div className="offset-4 col-8">
            //                                 <button name="submit" type="submit" className="btn btn-primary">Update My Profile</button>
            //                                 </div>
            //                             </div>
            //                             </form>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="project-info-box mt-0" style={{
                                margin: '15px 0',
                                backgroundColor: '#fff',
                                padding: '30px 40px',
                                borderRadius: '5px'
                                }}>
                            <h5>PROJECT DETAILS</h5>
                            <p class="mb-0">Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel imperdiet est. Pellentesque condimentum, dui et blandit laoreet, quam nisi tincidunt tortor.</p>
                        </div>

                        <div class="project-info-box" style={{
                                margin: '15px 0',
                                backgroundColor: '#fff',
                                padding: '30px 40px',
                                borderRadius: '5px'
                                }}>
                            <p><b>Client:</b> CUPCAKE CO</p>
                            <p><b>Date:</b> 14.02.2020</p>
                            <p><b>Designer:</b> James Doe</p>
                            <p><b>Tools:</b> Illustrator</p>
                            <p class="mb-0"><b>Budget:</b> $500</p>
                        </div>

                    </div>

                    <div class="col-md-7">
                        <img src="https://via.placeholder.com/400x300/FFB6C1/000000" alt="project-image" class="rounded"/>
                        <div class="project-info-box" style={{
                                margin: '15px 0',
                                backgroundColor: '#fff',
                                padding: '30px 40px',
                                borderRadius: '5px'
                                }}>
                            <p><b>Categories:</b> Design, Illustration</p>
                            <p><b>Skills:</b> Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default UserProfile;