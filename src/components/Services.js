import React, {useState} from 'react'
import TableThree from './TableThree';

function Services() {
    
        const [enabled, setEnabled] = useState(false);
      
        return (
            <section className='py-32'>
                <div className='container mx-auto'>
                <TableThree/>
                </div>
            </section>
          
          
        );
}

export default Services