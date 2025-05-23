// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Subscription.scss';
// import NavBar from '../Components/NavBar';
// import Footer from '../Components/Footer';
 
// const plans = [
//   {
//     name: 'Romantic Pass',
//     price: '$4.99/month',
//     features: [
//       'Unlimited romantic anime',
//       'Soft pastel UI',
//       'Ad-free streaming',
//       'HD Quality',
//       'Early access to new love stories',
//     ],
//     type: 'romantic',
//   },
//   {
//     name: 'Thriller Pass',
//     price: '$5.99/month',
//     features: [
//       'Dark thrillers & mysteries',
//       'Noir-style interface',
//       'No ads',
//       'Full HD + subtitles',
//       'Mood-based warning control',
//     ],
//     type: 'thriller',
//   },
//   {
//     name: 'All Access',
//     price: '$9.99/month',
//     features: [
//       'Romantic + Thriller Content',
//       'Dual-Theme toggle',
//       'Offline Downloads',
//       'Ultra HD (4K)',
//       'Alternate Endings Preview',
//       'Character Dynamics Access',
//     ],
//     type: 'full-access',
//   },
// ];
// const Subscription = () => {
//   const navigate = useNavigate();

//   const handleSubscribe = (plan) => {
//     navigate('/payment', { 
//       state: { 
//         selectedPlan: plan,
//         subscriptionAmount: plan.price // Pass the subscription price as well
//       }
//     });
//   };
//   return (
//     <div>
//       <NavBar/>
//       <div className="subscription-container" style={{marginTop:"67px"}}>
//       <h1 className="subscription-title">Choose Your Anime Journey</h1>
//       <div className="plans">
//         {plans.map((plan, idx) => (
//           <div key={idx} className={`plan ${plan.type}`}>
//             <h2>{plan.name}</h2>
//             <p>{plan.price}</p>
//             <ul>
//               {plan.features.map((feature, index) => (
//                 <li key={index}>🔸 {feature}</li>
//               ))}
//             </ul>
//             <button onClick={() => handleSubscribe(plan)}>Subscribe Now</button>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };
//  export default Subscription;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscription.scss';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const plans = [
  {
    name: 'Romantic Pass',
    price: '$4.99/month',
    features: [
      'Unlimited romantic anime',
      'Soft pastel UI',
      'Ad-free streaming',
      'HD Quality',
      'Early access to new love stories',
    ],
    type: 'romantic',
  },
  {
    name: 'Thriller Pass',
    price: '$5.99/month',
    features: [
      'Dark thrillers & mysteries',
      'Noir-style interface',
      'No ads',
      'Full HD + subtitles',
      'Mood-based warning control',
    ],
    type: 'thriller',
  },
  {
    name: 'All Access',
    price: '$9.99/month',
    features: [
      'Romantic + Thriller Content',
      'Dual-Theme toggle',
      'Offline Downloads',
      'Ultra HD (4K)',
      'Alternate Endings Preview',
      'Character Dynamics Access',
    ],
    type: 'full-access',
  },
];
const Subscription = () => {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate('/payment', {
      state: {
        selectedPlan: plan,
        subscriptionAmount: plan.price.split('/')[0].replace('$', ''), // Pass the numeric part of the price
      }
    });
  };
  return (
    <div>
      <NavBar/>
      <div className="subscription-container" style={{marginTop:"67px"}}>
      <h1 className="subscription-title">Choose Your Anime Journey</h1>
      <div className="plans">
        {plans.map((plan, idx) => (
          <div key={idx} className={`plan ${plan.type}`}>
            <h2>{plan.name}</h2>
            <p>{plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>🔸 {feature}</li>
              ))}
            </ul>
            <button onClick={() => handleSubscribe(plan)}>Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};
 export default Subscription;