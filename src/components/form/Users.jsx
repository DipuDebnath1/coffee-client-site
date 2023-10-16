import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    
    const loadUser = useLoaderData()
    const [users,setUsers] = useState(loadUser)


    
    const handleDeleteUser = (id)=>{
        console.log(id);
        fetch(`https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/users/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                console.log('delete successfully');
                const remaimgUser = users.filter(user=> user._id !==id)
                setUsers(remaimgUser)
            }
        })

    }

    return (
        <div className="overflow-x-auto">
             <h1 className="text-3xl font-semibold">All client Users</h1>
            <table className="table">
               
                {/* head */}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    
                        {
                            users.map((user,id)=><tr key={user._id}>
                                <td>{id}</td>
                                <td>{user.email}</td>
                                <td>{user.createTime}</td>
                                <td>{user.lastLoggedAt}</td>
                                <td className="btn" onClick={()=>handleDeleteUser(user._id)}>X</td>
                            </tr>)
                        }
                        {/* <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td> */}
                    
                   
                  
                </tbody>
            </table>
        </div>
    );
};

export default Users;