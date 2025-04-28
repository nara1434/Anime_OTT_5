// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Payment({ trial }) {
//   const [paymentDetails, setPaymentDetails] = useState({
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//     name: "",
//     email: "",
//     upiId: "",
//   });
//   const [paymentMethod, setPaymentMethod] = useState("card");
// const handleChange = (e) => {
//     const { name, value } = e.target;
// if (name === "name") {
//       const alphaOnly = value.replace(/[^a-zA-Z\s]/g, "");
//       setPaymentDetails({ ...paymentDetails, [name]: alphaOnly });
//     } else if (name === "cardNumber") {
//       const numericValue = value.replace(/\D/g, "");
//       setPaymentDetails({ ...paymentDetails, [name]: numericValue });
//     } else if (name === "cvv") {
//       const numericValue = value.replace(/\D/g, "");
//       setPaymentDetails({ ...paymentDetails, [name]: numericValue });
//     } else if (name === "expiry") {
//       const numericValue = value.replace(/\D/g, "");
//       let formatted = numericValue;
//       if (formatted.length >= 3) {
//         formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
//       }
//       if (formatted.length <= 5) {
//         setPaymentDetails({ ...paymentDetails, [name]: formatted });
//       }
//     } else {
//       setPaymentDetails({ ...paymentDetails, [name]: value });
//     }
//   };
  
// const validateCardNumber = (num) => num.length === 16;
//  const validateExpiry = (expiry) => {
//     if (!expiry || expiry.length !== 5 || !expiry.includes("/")) return false;
//     const [month, year] = expiry.split("/");
//     const mm = parseInt(month);
//     const yy = parseInt(year);
//     return mm >= 1 && mm <= 12 && !isNaN(yy);
//   };
// const validateCVV = (cvv) => cvv.length === 3;
// const validateUPI = (upiId) => {
//     const patterns = {
//       phonepay: /^[a-zA-Z0-9._%+-]+@phonepe$/,
//       googlepay: /^[a-zA-Z0-9._%+-]+@gpay$/,
//       paytm: /^[a-zA-Z0-9._%+-]+@paytm$/,
//     };
//     return patterns[paymentMethod]?.test(upiId) || false;
//   };
// const handleSubmit = (e) => {
//     e.preventDefault();
// if (paymentDetails.name.trim() === "") {
//       toast.error("Name is required.");
//       return;
//     }
// if (!/^[a-zA-Z\s]+$/.test(paymentDetails.name)) {
//       toast.error("Name must contain only letters.");
//       return;
//     }
// if (paymentMethod === "card") {
//       if (!validateCardNumber(paymentDetails.cardNumber)) {
//         toast.error("Card number must be exactly 16 digits.");
//         return;
//       }
//       if (!validateExpiry(paymentDetails.expiry)) {
//         toast.error("Invalid expiry format. Use MM/YY.");
//         return;
//       }
//       if (!validateCVV(paymentDetails.cvv)) {
//         toast.error("CVV must be exactly 3 digits.");
//         return;
//       }
//     } else if (!validateUPI(paymentDetails.upiId)) {
//       toast.error(`Invalid UPI ID for ${paymentMethod}.`);
//       return;
//     }
// if (trial) {
//       toast.success("Free Trial Registered!");
//     } else {
//       const method = paymentMethod === "card"
//         ? "Card"
//         : paymentMethod === "phonepay"
//         ? "PhonePe"
//         : paymentMethod === "googlepay"
//         ? "Google Pay"
//         : "Paytm";
//       toast.success(`Payment successful with ${method}`);
//     }
// console.log("Payment Submitted:", paymentDetails, "Method:", paymentMethod);
//   };
//  const optionStyle = {
//     padding: "8px 15px",
//     border: "2px solid #fff",
//     borderRadius: "10px",
//     cursor: "pointer",
//     margin: "5px",
//     flex: "1",
//     textAlign: "center",
//     color: "#fff",
//     backgroundColor: "#d81b60",
//   };
// const selectedStyle = {
//     ...optionStyle,
//     borderColor: "#28A745",
//     backgroundColor: "#333",
//     fontWeight: "bold",
//   };
// const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     marginTop: "8px",
//     backgroundColor: "white",
//     color: "black",
//     border: "1px solid #555",
//     borderRadius: "4px",
//     boxSizing: "border-box",
//   };
// return (
//     <div
//       style={{
//         padding: "20px",
//         maxWidth: "500px",
//         width: "90%",
//         margin: "20px auto",
//         background: "pink",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
//         color: "black",
//       }}
//     >
//       <ToastContainer position="top-center" />
//       <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
//         {trial ? "Free Trial Registration" : "Payment"}
//       </h1>
// <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "15px",
//           marginTop: "20px",
//         }}
//       >
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="name"
//             value={paymentDetails.name}
//             onChange={handleChange}
//             required
//             placeholder="Your Name"
//             style={inputStyle}
//           />
//         </label>
// {trial ? (
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={paymentDetails.email}
//               onChange={handleChange}
//               required
//               placeholder="you@example.com"
//               style={inputStyle}
//             />
//           </label>
//         ) : (
//           <>
//             <div style={{ margin: "20px 0" }}>
//               <p style={{ marginBottom: "10px", color: "#fff" }}>
//                 Select Payment Method:
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   flexWrap: "wrap",
//                   justifyContent: "center",
//                 }}
//               >
//                 {["card", "phonepay", "googlepay", "paytm"].map((method) => (
//                   <div
//                     key={method}
//                     style={
//                       paymentMethod === method ? selectedStyle : optionStyle
//                     }
//                     onClick={() => setPaymentMethod(method)}
//                   >
//                     {method === "card"
//                       ? "Card"
//                       : method === "phonepay"
//                       ? "PhonePe"
//                       : method === "googlepay"
//                       ? "Google Pay"
//                       : "Paytm"}
//                   </div>
//                 ))}
//               </div>
//             </div>
//  {paymentMethod === "card" ? (
//               <>
//                 <label>
//                   Card Number:
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={paymentDetails.cardNumber}
//                     onChange={handleChange}
//                     required
//                     placeholder="1234567812345678"
//                     style={inputStyle}
//                     maxLength="16"
//                   />
//                 </label>
//                 <label>
//                   Expiry Date (MM/YY):
//                   <input
//                     type="text"
//                     name="expiry"
//                     value={paymentDetails.expiry}
//                     onChange={handleChange}
//                     required
//                     placeholder="MM/YY"
//                     style={inputStyle}
//                     maxLength="5"
//                   />
//                 </label>
//                 <label>
//                   CVV:
//                   <input
//                     type="text"
//                     name="cvv"
//                     value={paymentDetails.cvv}
//                     onChange={handleChange}
//                     required
//                     placeholder="123"
//                     style={inputStyle}
//                     maxLength="3"
//                   />
//                 </label>
//               </>
//             ) : (
//               <label>
//                 UPI ID:
//                 <input
//                   type="text"
//                   name="upiId"
//                   value={paymentDetails.upiId}
//                   onChange={handleChange}
//                   required
//                   placeholder={`yourupi@${paymentMethod}`}
//                   style={inputStyle}
//                 />
//               </label>
//             )}
//           </>
//         )}<button
//           type="submit"
//           style={{
//             padding: "12px",
//             border: "none",
//             borderRadius: "5px",
//             backgroundColor: "#d81b60",
//             color: "white",
//             fontSize: "1rem",
//             cursor: "pointer",
//           }}
//         >
//           {trial ? "Register for Free Trial" : "Submit Payment"}
//         </button>
//       </form>

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <Link to="/subscription" style={{ textDecoration: "none", color: "#007BFF" }}>
//           Back to Subscription
//         </Link>
//       </div>
//     </div>
//   );
// }
// export default Payment;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Add useNavigate
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Payment({ trial }) {
  const navigate = useNavigate(); // ✅ initialize navigate
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    email: "",
    upiId: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const alphaOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setPaymentDetails({ ...paymentDetails, [name]: alphaOnly });
    } else if (name === "cardNumber" || name === "cvv") {
      const numericValue = value.replace(/\D/g, "");
      setPaymentDetails({ ...paymentDetails, [name]: numericValue });
    } else if (name === "expiry") {
      const numericValue = value.replace(/\D/g, "");
      let formatted = numericValue;
      if (formatted.length >= 3) {
        formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
      }
      if (formatted.length <= 5) {
        setPaymentDetails({ ...paymentDetails, [name]: formatted });
      }
    } else {
      setPaymentDetails({ ...paymentDetails, [name]: value });
    }
  };

  const validateCardNumber = (num) => num.length === 16;
  const validateExpiry = (expiry) => {
    if (!expiry || expiry.length !== 5 || !expiry.includes("/")) return false;
    const [month, year] = expiry.split("/");
    const mm = parseInt(month);
    const yy = parseInt(year);
    return mm >= 1 && mm <= 12 && !isNaN(yy);
  };
  const validateCVV = (cvv) => cvv.length === 3;
  const validateUPI = (upiId) => /^[a-zA-Z0-9._%+-]+@[\w]+$/.test(upiId);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentDetails.name.trim() === "") {
      toast.error("Name is required.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(paymentDetails.name)) {
      toast.error("Name must contain only letters.");
      return;
    }
    if (paymentMethod === "card") {
      if (!validateCardNumber(paymentDetails.cardNumber)) {
        toast.error("Card number must be exactly 16 digits.");
        return;
      }
      if (!validateExpiry(paymentDetails.expiry)) {
        toast.error("Invalid expiry format. Use MM/YY.");
        return;
      }
      if (!validateCVV(paymentDetails.cvv)) {
        toast.error("CVV must be exactly 3 digits.");
        return;
      }
    } else {
      if (!validateUPI(paymentDetails.upiId)) {
        toast.error("Invalid UPI ID format. Should contain '@'.");
        return;
      }
    }

    if (trial) {
      toast.success("Free Trial Registered!");
    } else {
      toast.success(`Payment successful with ${paymentMethod === "card" ? "Card" : "UPI"}`);
    }

    console.log("Payment Submitted:", paymentDetails, "Method:", paymentMethod);

    // ✅ Navigate after slight delay (after showing toast)
    setTimeout(() => {
      navigate("/subscription");
    }, 2000); // 2 seconds delay
  };

  const optionStyle = {
    padding: "10px 80px",
    border: "2px solid #fff",
    borderRadius: "10px",
    cursor: "pointer",
    margin: "5px 10px",
    color: "#fff",
    backgroundColor: "#d81b60",
  };

  const selectedStyle = {
    ...optionStyle,
    backgroundColor: "#333",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "8px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid #555",
    borderRadius: "4px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        width: "90%",
        margin: "20px auto",
        background: "pink",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)",
        color: "black",
      }}
    >
      <ToastContainer position="top-center" />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        {trial ? "Free Trial Registration" : "Payment"}
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={paymentDetails.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            style={inputStyle}
          />
        </label>

        {trial ? (
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={paymentDetails.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              style={inputStyle}
            />
          </label>
        ) : (
          <>
            <div style={{ margin: "20px 0" }}>
              <p style={{ marginBottom: "10px", color: "#333" }}>
                Select Payment Method:
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {["card", "upi"].map((method) => (
                  <div
                    key={method}
                    style={
                      paymentMethod === method ? selectedStyle : optionStyle
                    }
                    onClick={() => setPaymentMethod(method)}
                  >
                    {method === "card" ? "Card" : "UPI"}
                  </div>
                ))}
              </div>
            </div>

            {paymentMethod === "card" ? (
              <>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="cardNumber"
                    value={paymentDetails.cardNumber}
                    onChange={handleChange}
                    required
                    placeholder="1234567812345678"
                    style={inputStyle}
                    maxLength="16"
                  />
                </label>
                <label>
                  Expiry Date (MM/YY):
                  <input
                    type="text"
                    name="expiry"
                    value={paymentDetails.expiry}
                    onChange={handleChange}
                    required
                    placeholder="MM/YY"
                    style={inputStyle}
                    maxLength="5"
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    name="cvv"
                    value={paymentDetails.cvv}
                    onChange={handleChange}
                    required
                    placeholder="123"
                    style={inputStyle}
                    maxLength="3"
                  />
                </label>
              </>
            ) : (
              <label>
                UPI ID:
                <input
                  type="text"
                  name="upiId"
                  value={paymentDetails.upiId}
                  onChange={handleChange}
                  required
                  placeholder="yourupi@bank"
                  style={inputStyle}
                />
              </label>
            )}
          </>
        )}
        <button
          type="submit"
          style={{
            padding: "12px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#d81b60",
            color: "white",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          {trial ? "Register for Free Trial" : "Submit Payment"}
        </button>
      </form>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to="/subscription"
          style={{ textDecoration: "none", color: "#007BFF" }}
        >
          Back to Subscription
        </Link>
      </div>
    </div>
  );
}
export default Payment;
