import React from 'react'
import App from '../App.css'

function Quotes() {
  return (
    <div className="quotes">
        <div >
            <h1>DOWNLOAD OUR APP NOW!</h1>
            <p>Enter the mobile number. We'll send you the link of our app.</p>
            <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <button className='btn btn-danger'>Submit</button>
        </div>
        <div >
          <p>I travelled from Mayiladuthurai to Chennai. The vehicle and driver was very good and also cost effective. Keep the work!</p>
        </div>
    </div>
  )
}

export default Quotes