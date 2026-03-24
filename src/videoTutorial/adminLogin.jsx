import React from 'react'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'

const AdminLogin = () => {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues:{
            admin_id:"",
            password:""
        },
        onSubmit : (admin) => {
            axios
            .get("http://localhost:3000/admin")
            .then(response => {
                var adminuser = response.data.find(item => item.admin_id === admin.admin_id);
                if(adminuser){
                    if(adminuser.password === admin.password){
                        navigate('/admin-dashboard');
                    }
                    else{
                        alert('Invalid Password')
                    }
                }else{
                    alert("Invalid ID")
                }
            })
        }
    })
  return (
    <div className='bg-white px-6 py-10 w-72 ml-24'>
      <h3>Admin Login</h3>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">Admin Id</label>
        <input type="text" name="admin_id" onChange={formik.handleChange} className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"/>
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={formik.handleChange} id="" className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"/>
        <div className='mt-3'>
            <Button type="submit" variant="danger">Login</Button>
            <Link to="/" className='border py-2 px-3 rounded-md'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default AdminLogin
