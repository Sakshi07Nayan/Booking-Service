import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from 'axios';

function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appointmentDate: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  console.log("API Base URL:", API_BASE_URL);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    setIsSubmitting(true); 
    
    const { name, email, appointmentDate, service } = formData;

    try {
      const response = await axios.post(`${API_BASE_URL}/appointments`, {
        name,
        email,
        date: appointmentDate,
        service,
      });

      setSuccessMessage(`Appointment booked successfully for ${response.data.name} on ${response.data.date}!`);
      setFormData({
        name: '',
        email: '',
        appointmentDate: '',
        service: ''
      }); 
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        // If the error response exists, show the specific error message
        setErrorMessage(error.response.data.error || 'Failed to book appointment. Please try again.');
      } else {
        // If there is no response, it's a network error
        setErrorMessage('Server error. Please try again later.');
      }
    } finally {
      setIsSubmitting(false); 
    }
  };

  return (
    <div>
      <button 
        className="btn btn-danger sticky-button"
        onClick={openModal}
      >
        Book Appointment
      </button>

      {isOpen && <div className="modal-backdrop fade show"></div>}

      {isOpen && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Book Appointment</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                {successMessage && <div className="alert alert-success">{successMessage}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Appointment Date</label>
                    <input 
                      type="date" 
                      name="appointmentDate" 
                      className="form-control"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Service</label>
                    <select 
                      name="service" 
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="Tattoo Removal">Tattoo Removal</option>
                      <option value="Botox">Botox</option>
                      <option value="Skin Care">Skin Care</option>
                      <option value="Face Treatment">Face Treatment</option>
                      <option value="Chemical Peel">Chemical Peel</option>
                      {/* Add more services here */}
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting} 
                  >
                    {isSubmitting ? 'Booking...' : 'Make an Appointment'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
