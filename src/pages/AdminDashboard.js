import userEvent from '@testing-library/user-event'
import React , {useState, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import TableTwo from '../components/TableTwo';
import TableThree from '../components/TableThree';
import ChatCard from '../components/ReviewCard';
import AdminBookForm from '../components/AdminBookForm';

function AdminDashboard() {
  const {currentUser} = useContext(UserContext)
  const [showTableThree, setShowTableThree] = useState(true);
  return (
    <div className="py-32">
    <div className="container mx-auto lg:px-0">
      <div className="text-center">
        <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
          Welcome {currentUser.role}
        </div>
        <div>
          
          <div>
            {showTableThree ? <h2 h2 className="font-primary text-[45px]">Rooms</h2> : <h2 className="font-primary text-[45px]">Bookings</h2>}
        
          </div>
          <div>
            <div className='min-h-600px bg-red '>
              hello
            </div>
            <div className="container mx-auto relative " >
            <div className=" mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12 ">
                    <AdminBookForm />
                </div>
            </div>
                
        
            
          </div>
          <button onClick={() => setShowTableThree(!showTableThree)}>
              Toggle Table
            </button>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
         
         
          {showTableThree ? <TableThree /> : <TableTwo />}
          <ChatCard/>
         
         
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default AdminDashboard