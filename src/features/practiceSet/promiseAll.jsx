import React, { useEffect, useState } from "react";

const PromiseAll = () => {
    const [posts, setPost] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchdata = async() => {
            const [postsRes, usersRes] = await Promise.all([
                fetch("https://jsonplaceholder.typicode.com/posts"),
                fetch("https://jsonplaceholder.typicode.com/users")
            ])
            const [postsData, usersData] = await Promise.all([
                postsRes.json(),
                usersRes.json(),
            ])
            setPost(postsData)
            setUsers(usersData)
        };
        fetchdata()
    },[])


  return (
    <div>
        <div>
            <h2>Users</h2>
            {
                users.slice(0,5).map((user)=>(
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
        </div>
        <div>
            <h2>Posts</h2>
            {
                posts.slice(0,5).map((post)=>(
                    <div key={post.id}>
                        <p>{post.title}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
  
};

export default PromiseAll;
