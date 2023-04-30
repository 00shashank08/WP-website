import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const Blogdetails = () => {
    const {id} = useParams();
    const {data: blog,ispending}=useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();
    const handleDelete=(e)=>{
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })

    }
    return (
        <div className="blog-details">
            {ispending && <div className="row m-10"><h4 className="text-center">Loading...</h4></div>}
            {blog && <div className="container my-5">
            <h3 className="text-center">Blog Details</h3>
            <div className="container">
            <h4>{ blog.title }</h4>
            <p>{ blog.body }</p>
            <p>{ blog.author }</p>
            </div>
            <button onClick={handleDelete}>Delete Blog</button>
            </div>}
        </div>
    );
}
 
export default Blogdetails;
