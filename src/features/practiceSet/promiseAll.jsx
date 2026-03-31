import React, { useEffect, useState } from "react";

const PromiseAll = () => {
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const fetchdata = async() => {
            try{
                const [resposts, resusers] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/posts"),
                    fetch("https://jsonplaceholder.typicode.com/users")
                ])
                const [postsData, usersData] = await Promise.all([
                    resposts.json(),
                    resusers.json()
                ])
                setPosts(postsData)
                setUsers(usersData)
            }
            catch(err){console.log(err);}
        }; 
        fetchdata()
    },[])
    
  return (
    <div>
        <h2>Fetch two Apis parallelly</h2>
        <div>
            <h3>Posts</h3>
            {posts.slice(0,5).map(post => <p key={post.id}>{post.id}. {post.title}</p>)}
        </div>
        <div>
            <h3>Users</h3>
            {users.slice(0,5).map(user => <p key={user.id}>{user.id}. {user.username}</p>)}
        </div>
    </div>
  )
  
};

export default PromiseAll;
