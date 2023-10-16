import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleFormSubmit = (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const quantity = e.target.quantity.value
        const supplyer = e.target.supplyer.value
        const test = e.target.test.value
        const category = e.target.category.value
        const details = e.target.details.value
        const photo = e.target.photo.value
            const addCoffeeDetails = {
                name,quantity,supplyer,test,category,details,photo
            }

            fetch('https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/coffee',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(addCoffeeDetails)

            })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                console.log(data);
                e.target.reset()
            })
        console.log(addCoffeeDetails);

    }
    return (
        <div className="bg-[#f4f3f0] p-24">
            <h1 className="text-4xl font-semibold">Add coffee</h1>
            <form className="card-body" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="available" className="input input-bordered"  />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">supplyer</span>
                        </label>
                        <input type="text" name="supplyer" placeholder="supplyer" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">test</span>
                        </label>
                        <input type="text" name="test" placeholder="test" className="input input-bordered"  />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <input type="text" name="category" placeholder="category" className="input input-bordered"  />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">details</span>
                        </label>
                        <input name="details" type="text" placeholder="details" className="input input-bordered"  />

                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">photo</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoUrl" className="input input-bordered"  />

                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-gray-700 hover:bg-gray-600 text-white">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;