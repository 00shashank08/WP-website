import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Homepage = () => {
    const{data: blogs,ispending}=useFetch('http://localhost:8000/blogs');
    return ( 
        <div class="container-sm">
        <div className="Home">
            <div class="row mt-5"><h3 class="text-center">Blogs</h3></div>
        {ispending && <div>Loading...</div>}
        {blogs && <Bloglist blogs={blogs}/>}
        </div>
        </div>
    );
}
 
export default Homepage;