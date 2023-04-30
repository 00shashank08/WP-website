import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const[title,setTitle]=useState('');
    const[body,setBody]=useState('');
    const[author,setAuthor]=useState('');
    const history=useHistory();
    const handlesubmit=(e) => {
        e.preventDefault();
        const blog={title,body,author};
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added!');
            history.go(-1);
        })
    }
    return ( 
        <div className="create">
            <div className="container mt-10 ">
            <form onSubmit={handlesubmit}>
            <label>Blog Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <label>Blog Body</label>
            <input type="textarea" value={body} onChange={(e)=>setBody(e.target.value)}/>
            <label>Blog Author</label>
            <select value={author} onChange={(e)=>setAuthor(e.target.value)}>
                <option value="Shashank1">Shashank1</option>
                <option value="Shashank2">Shashank2</option>
                <option value="Shashank3">Shashank3</option>
                <option value="Shashank4">Shashank4</option>
            </select>
            <p>{title}{body}{author}</p>
            <input type="submit" value="submit"/>
            </form>
            </div>
        </div>
     );
}
 
export default Create;
