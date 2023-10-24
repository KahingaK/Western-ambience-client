import React, {useState} from 'react'

function ContactPopUp({onClose, onContactSubmit}) {
    
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      onContactSubmit(email, message);
    };
    


  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Enter Your Email Address</h2>
        <form >
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type= "button" onClick = {handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPopUp