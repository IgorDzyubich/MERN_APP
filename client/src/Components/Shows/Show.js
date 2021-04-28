import React from 'react';
import { useSelector } from 'react-redux'

const Show = (props) => {
    const showId = props.match.params.id
    const show = useSelector(state => state.ShowsReducer.shows.find(el => el.id == showId))
    
    return   (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>{show.name}</h4>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                    <img
                                        src={show.image.medium}
                                        style={{ width: "100%" }}
                                        alt="Show"
                                        className={
                                            "img-fluid img-thumbnail border-1 mb-2"
                                        }
                                    />
                                    </div>
                                    <div className="col-md-8">
                                        <form>
                                        <div className="form-group row ">
                                            <label htmlFor="username" className="col-2 col-form-label">Type:</label> 
                                            <div className="col-10">
                                            <input id="username" name="username" value={`${show.type}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="name" className="col-2 col-form-label">Language:</label> 
                                            <div className="col-10">
                                            <input id="name" name="name" value={`${show.language}`} className="form-control here" onChange={()=>{}} type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="lastname" className="col-2 col-form-label">Genres</label> 
                                            <div className="col-10">
                                            <input id="lastname" name="lastname" value={`${show.genres}`} className="form-control here" onChange={()=>{}} type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="text" className="col-2 col-form-label">Premiered:</label> 
                                            <div className="col-10">
                                            <input id="text" name="text" value={`${show.premiered}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="text" className="col-2 col-form-label">Status:</label> 
                                            <div className="col-10">
                                            <input id="text" name="text" value={`${show.status}`} className="form-control here" onChange={()=>{}} required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="email" className="col-2 col-form-label">Official Site:</label> 
                                            <div className="col-10">
                                            <input id="email" name="email" value={`${show.officialSite}`} onChange={()=>{}} className="form-control here" required="required" type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="website" className="col-2 col-form-label">Average rating:</label> 
                                            <div className="col-10">
                                            <input id="website" name="website" value={`${show.rating.average}`} className="form-control here" onChange={()=>{}} type="text"/>
                                            </div>
                                        </div>
                                        <div className="form-group row mt-2">
                                            <label htmlFor="publicinfo" className="col-2 col-form-label">Summary:</label> 
                                            <div className="col-10">
                                            <textarea id="publicinfo" name="publicinfo" cols="40" rows="6" value={show.summary} className="form-control" onChange={()=>{}}></textarea>
                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="row mt-3">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
}

export default Show;