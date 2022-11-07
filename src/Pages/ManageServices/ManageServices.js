import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services,setServices] =  useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sureeeee ?')
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remaining = services.filter(service => service.id !== id);
                setServices(remaining);
            })
        }
    }

    return (
        <div  className='container text-center my-5 p-5 bg-white'>
            <h2 className='text-primary'>Manage your Services</h2>
            {
                services.map(service => <div
                key={service._id}
                >

                    <h4>*{service.name} <button className='btn btn-primary' onClick={()=>handleDelete(service._id)}>Delete</button></h4>

                </div>)
            }
            
        </div>
    );
};

export default ManageServices;