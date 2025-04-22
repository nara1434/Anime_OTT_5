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

  // Handle changes for card details
  const handleCardDetailsChange = (e) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Validate card details
  const validateCardDetails = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;

    if (!cardNumber || !expiryDate || !cvv) {
      toast.error('Please fill in all card details.');
      return false;
    }

    if (cardNumber.length !== 16) {
      toast.error('Card number should be 16 digits long.');
      return false;
    }

    if (cvv.length !== 3) {
      toast.error('CVV should be 3 digits.');
      return false;
    }

    return true;
  };

  // Validate UPI details
  const validateUPI = () => {
    if (!upiID || !selectedUPI) {
      toast.error('Please select a UPI payment method and enter your UPI ID.');
      return false;
    }
    return true;
  };

  // Handle the payment process
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
                  placeholder="Enter UPI ID"
                  value={upiID}
                  onChange={(e) => setUpiID(e.target.value)}
                />
                <div className="upi-options">
                  <button
                    type="button"
                    onClick={() => setSelectedUPI('Google Pay')}
                  >
                    Google Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedUPI('PhonePe')}
                  >
                    PhonePe
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedUPI('PayTM')}
                  >
                    PayTM
                  </button>
                </div>
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
