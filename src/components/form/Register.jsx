import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";

const Register = () => {

    const {Register} = useContext(AuthContext);


    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        const user  ={email,password}

        Register(email,password)
        .then(res=>{
            const createTime = res.user.metadata.creationTime
            const user = {email, createTime}

            fetch(`https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/user`,{
                method : 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                form.reset()
            })

            console.log(res.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
        
        // console.log(user);
    }
    return (
        <div className="w-6/12 md:mx-auto">
            <h1 className="text-4xl font-bold">Register Now</h1>
            <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Register;