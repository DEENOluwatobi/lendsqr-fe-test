import React, { useState, useEffect } from 'react'
import { Posts } from './posts.jsx'
import axios from 'axios'
import Pagination from './pagination.js'


const Userlist = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPost = async () => {
          setLoading(true);
          const res = await axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
          setPosts(res.data);
          setLoading(false)
        }

        fetchPost()
    }, []);
    
    //get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
      <div>
          <Posts posts={currentPosts} loading={loading}/>
          <Pagination
            postsPerPage={postsPerPage} 
            totalPosts={posts.length} 
            paginate={paginate}/>
      </div>
    );
  }

export default Userlist 