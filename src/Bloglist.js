const Bloglist = ({blogs}) => {
    return (  
        <div className="container">
        <div className="row">
        {blogs.map((blog)=> (
        <div class="col col-12 col-sm-4 col-md-4 col-lg-3 my-5">
        <div class="card">
        <img src="logo192.png" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{blog.title}</h5>
          <p class="card-text"> Written by {blog.author}</p>
          <a href={`/blogs/${blog.id}`} class="btn btn-primary" >Read Blog</a>
        </div>
      </div>
      </div>
        ))}
        </div>
        </div>
    );
}
 
export default Bloglist;

