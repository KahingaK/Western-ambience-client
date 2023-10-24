import React , {useState, useContext} from 'react'
import CheckIn from './CheckIn'
import CheckOut from './CheckOut'
import GuestsDropdown from './GuestsDropdown'
import ContactPopUp from './ContactPopUp'
import { RoomContext } from '../context/RoomContext'
import { UserContext} from '../context/UserContext'

function BookForm() {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const {guests, setGuests, startDate, setStartDate, endDate, setEndDate} = useContext(RoomContext)
    const {token, currentUser} = useContext(UserContext)
 
   

        const handleCheckNow = () => {            
            setPopupOpen(true);
        };

        const handleClosePopup = () => {
            setPopupOpen(false);
        };

        const handleContactSubmit = (email, message) => {
           
                       
            // Handle the submitted email, e.g., send it to a server
            console.log('Submitted email:', email + message 
            );

            // Close the popup
            setPopupOpen(false);
        };
        
        
    

  return (
    <div>
        <form className='h-[300px] w-full lg:h-[70px] '>
        <div className='flex flex-col w-full h-full lg:flex-row'>
            <div className='flex-1 border-r'>
                <CheckIn/>
            </div>
        
            <div className='flex-1 border-r'>
                <CheckOut />
            </div>
      
            <div className='flex-1 border-r'>
                <GuestsDropdown/>
            </div>        
            <button className = " btn-primary btn:hover-accent flex-1 border-r" type = "button" onClick={handleCheckNow}>
                Check Now
            </button>
        </div>
    </form>
        {isPopupOpen && (<ContactPopUp onClose={handleClosePopup} onContactSubmit={handleContactSubmit} />
        )}
    </div>
    
    
  )
}

export default BookForm