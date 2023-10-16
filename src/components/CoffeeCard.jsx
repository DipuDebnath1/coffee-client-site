import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplyer, test, category, details, photo } = coffee

    const handleDelete =  id =>{
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )
            fetch(`https://coffe-store-server-rb83qbn0t-dipudebnath966-gmailcom.vercel.app/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                }
                const newCoffees = coffees.filter(coff=> coff._id !== _id)
                setCoffees(newCoffees)
            })
            console.log(result.isConfirmed);
            }
          })
    }

    return (
        <div className="card space-x-3 card-side bg-base-100 shadow-xl">
            <figure><img className="h-full" src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full text-left">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{supplyer}</p>
                    <p>{test}</p>
                    <p>{category}</p>
                    <p>{details}</p>
                </div>
                <div className="btn-group btn-group-vertical">
                    <button className="btn btn-active">View</button>
                    <Link to={`/updatecoffee/${_id}`}> <button className="btn">Edit</button></Link>
                    
                    <button onClick={() => handleDelete(_id)} className="btn">X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;