import React from 'react';
import './Experts.css'

import ex1 from '../../../images/ex-6.jpg'
import ex2 from '../../../images/ex-11.jpg'
import ex3 from '../../../images/ex-10.jpg'
import ex4 from '../../../images/ex-9.jpg'
import ex5 from '../../../images/ex-12.jpg'
import ex6 from '../../../images/ex-13.jpg'
import Expert from '../Expert/Expert';

const experts = [

    { id: 1, name: 'Mike Rana', img: ex1 },
    { id: 2, name: 'jacky Mia', img: ex2 },
    { id: 3, name: 'Lameesa', img: ex3 },
    { id: 4, name: 'John Robin', img: ex4 },
    { id: 5, name: 'Samiha lebu', img: ex5 },
    { id: 4, name: 'Aysha', img: ex6 },
    
   
]
const Experts = () => {
    return (
        <div id="experts" className='container'>
            <h2 className='text-white text-center mt-5'>Our experts</h2>
            <div className="div row">
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}

                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;