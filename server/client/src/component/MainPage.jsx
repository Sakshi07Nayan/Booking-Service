import React from 'react'
import MyNavbar from './MyNavbar'
import avatar from '../assets/dr2.jpg'
import Footer from './Footer'
import BookingCard from './BookingCard'
import BookingForm from './BookingForm'

const MainPage = () => {
  return (
    <div>
      <MyNavbar />
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center">

          {/* First child div: Image */}
          <div className="col-md-6">
            <img
              src={avatar}
              alt="Sample"
              className="img-fluid"
              style={{height:'60vh'}}
            />
          </div>

          {/* Second child div: Heading, paragraph, and buttons */}
          <div className="col-md-6">
            <h1 className="mb-3">Welcome to Our Service</h1>
            <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p>

            {/* Buttons */}
            <div>
              <button type="button" className="btn btn-primary me-3">
                Learn More
              </button>
                <a className='btn btn-outline-primary' href="https://www.instagram.com/reel/DA0ktWTSnAZ/?igsh=eXBvamh3NjdwajZv">Instagram</a>
                {/* Instagram */}
           
            </div>
          </div>

        </div>
      </div>
      <br />
      <hr />
      <br />
      <BookingForm/>
      <BookingCard/>
<Footer/>
    </div>
  )
}

export default MainPage