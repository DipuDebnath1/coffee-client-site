import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";


const Login = () => {
    
    const {LoginUser} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        // const user = { email, password }
        // console.log(user);
        LoginUser(email,password)
        .then(res=>{
            const user = {
                email,
                lastLoggedAt: res.user?.metadata?.lastSignInTime
            }
            console.log(user);
            fetch('https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/users',{
                method:'PATCH',
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })

            console.log(res.user);
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div className="w-6/12 md:mx-auto">
            <h1 className="text-4xl font-bold">Login Now</h1>
            <form className="card-body" onSubmit={handleLogin}>
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

export default Login;