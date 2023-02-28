import React from 'react'
import './Presscontact.css'

const Presscontact = () => {
  return (
    <section className='presscontact'>
        <div className="allcontactpress d-flex">
            <div className="leftpresscontact col-lg-6">
                <h1>Contact us</h1>
                <div className="inputdivpresscontact">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email'/>
                    <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
                    <div className="btn"><button type='submit'>Send</button></div>
                </div>
            </div>
            <div className="rightpresscontact col-lg-6">
                <img className='img-fluid' src="https://cdn.shopify.com/s/files/1/0012/2296/7353/files/Contact_desktop_02cab23e-97b4-4a9d-8a65-e7e681185a59.png?v=1671819698" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Presscontact