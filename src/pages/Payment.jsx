import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Payment.scss';

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [upiID, setUpiID] = useState('');
  const [selectedUPI, setSelectedUPI] = useState('');
const handleCardDetailsChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber' && !/^\d{0,16}$/.test(value)) return;
    if (name === 'cvv' && !/^\d{0,3}$/.test(value)) return;
    if (name === 'expiryDate' && !/^\d{0,2}\/?\d{0,2}$/.test(value)) return;
setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };
const validateCardDetails = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;
if (!cardNumber || !expiryDate || !cvv) {
      toast.error('Please fill in all card details.');
      return false;
    }
if (!/^\d{16}$/.test(cardNumber)) {
      toast.error('Card number must be 16 digits.');
      return false;
    }
 if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.error('Expiry date must be in MM/YY format.');
      return false;
    }
if (!/^\d{3}$/.test(cvv)) {
      toast.error('CVV must be 3 digits.');
      return false;
    }
return true;
  };
const validateUPI = () => {
    if (!upiID || !selectedUPI) {
      toast.error('Select UPI method and enter valid UPI ID.');
      return false;
    }
if (!/^[\w.-]+@[\w]+$/.test(upiID)) {
      toast.error('Enter a valid UPI ID.');
      return false;
    }

    return true;
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error('Please select a payment method.');
      return;
    }

    if (paymentMethod === 'card' && !validateCardDetails()) return;
    if (paymentMethod === 'upi' && !validateUPI()) return;

    toast.success('Payment Successful! 🎉');
    setTimeout(() => navigate('/subscription'), 2000);
  };

  return (
    <div className="payment-page">
      <div className="back-button" onClick={() => navigate('/subscription')}>
        ⬅ Back 
      </div>

      <div className="payment-container">
        <h1 className="payment-heading">Select Your Payment Method</h1>

        <div className="payment-methods">
          <div
            className={`payment-method ${paymentMethod === 'card' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('card')}
          >
            <div className="payment-icon">💳</div>
            <h3>Credit/Debit Card</h3>
            {paymentMethod === 'card' && (
              <div className="payment-details">
                <input
                  type="text"
                  placeholder="Card Number"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardDetailsChange}
                  maxLength="16"
                />
                <div className="expiry-cvv">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    name="expiryDate"
                    value={cardDetails.expiryDate}
                    onChange={handleCardDetailsChange}
                    maxLength="5"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    maxLength="3"
                  />
                </div>
              </div>
            )}
          </div>

          <div
            className={`payment-method ${paymentMethod === 'upi' ? 'selected' : ''}`}
            onClick={() => setPaymentMethod('upi')}
          >
            <div className="payment-icon">📱</div>
            <h3>UPI Payment</h3>
            {paymentMethod === 'upi' && (
              <div className="payment-details">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g., user@bank)"
                  value={upiID}
                  onChange={(e) => setUpiID(e.target.value)}
                />
                <div className="upi-options">
                  {['Google Pay', 'PhonePe', 'PayTM'].map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedUPI(option)}
                      className={selectedUPI === option ? 'selected-upi' : ''}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {selectedUPI && <p className="selected-upi-text">Selected: {selectedUPI}</p>}
              </div>
            )}
          </div>
        </div>

        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Payment;

