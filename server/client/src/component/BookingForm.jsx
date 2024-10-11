import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function BookingForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    appointmentDate: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // New state to track form submission
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  console.log("API Base URL:", API_BASE_URL);

  // Handle opening and closing modal
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission and API call
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear any previous errors
    setSuccessMessage(''); // Clear any previous success message
    setIsSubmitting(true); // Disable form while submitting
    
    const { name, email, appointmentDate, service } = formData;

    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          date: appointmentDate,
          service,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(`Appointment booked successfully for ${data.name} on ${data.date}!`);
        setFormData({
          name: '',
          email: '',
          appointmentDate: '',
          service: ''
        }); // Reset the form
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Failed to book appointment. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setErrorMessage('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false); // Re-enable form after submission is complete
    }
  };

  return (
    <div>
      {/* Sticky Button */}
      <button 
        className="btn btn-danger sticky-button"
        onClick={openModal}
      >
        Book Appointment
      </button>

      {/* Background overlay with opacity */}
      {isOpen && <div className="modal-backdrop fade show"></div>}

      {/* Modal */}
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
                      <option value="Botox">Skin Care</option>
                      <option value="Botox">Face Treatment</option>
                      <option value="Botox">Chemical Peel</option>
                      {/* Add more services here */}
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting} // Disable button when submitting
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
