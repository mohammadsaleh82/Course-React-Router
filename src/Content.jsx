import { Route, Routes } from "react-router-dom";
import Photos from "./Photos/Photos";
import Post from "./Posts/posts";
import Users from "./Users/Users";
import Works from "./Work/Works";

const Content = () => {

    return (
        <div className="col-md-8 col-xl-10 col-sm-12">
            <button className="btn float-end d-xl-none d-md-none"><i className="fa fa-bars "></i></button>
           <Routes>
               <Route path="/" element={<Users/>}/>
               <Route path="/works" element={ <Works/>}/>
               <Route path="/photos" element={<Photos/>}/>
               <Route path="/posts" element={ <Post/>}/>
           </Routes>
       
        </div>
    )
}

export default Content;