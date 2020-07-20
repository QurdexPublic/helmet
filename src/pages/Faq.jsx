import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import {Helmet} from "react-helmet";

const Faq = (props) => {
  return (
   <div>
     <Helmet htmlAttributes>
       <html lang="en"/>
       <title>FAQ</title>
       <meta name="description" content="React Helmet example FAQ"/>
     </Helmet>
     <div>
       <Breadcrumbs slug={props.slug}/>
       <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
         <h3 itemProp="name">What is the return policy?</h3>
         <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
           <div itemProp="text">
             Most unopened items in new condition and returned within <strong>90 days</strong> will receive a refund or
             exchange. Some items have a modified return policy noted on the receipt or packing slip. Items that are
             opened or damaged or do not have a receipt may be denied a refund or exchange. Items purchased online or
             in-store may be returned to any store.
             <br/><p>Online purchases may be returned via a major parcel carrier. <a
               href="http://example.com/returns"> Click here </a> to initiate a return.</p>
           </div>
         </div>
       </div>
       <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
         <h3 itemProp="name">How long does it take to process a refund?</h3>
         <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
           <div itemProp="text">
             We will reimburse you for returned items in the same way you paid for them. For example, any amounts deducted
             from a gift card will be credited back to a gift card. For returns by mail, once we receive your return, we
             will process it within 4–5 business days. It may take up to 7 days after we process the return to reflect in
             your account, depending on your financial institution's processing time.
           </div>
         </div>
       </div>
       <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
         <h3 itemProp="name">What is the policy for late/non-delivery of items ordered online?</h3>
         <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
           <div itemProp="text">
             Our local teams work diligently to make sure that your order arrives on time, within our normal delivery
             hours of 9AM to 8PM in the recipient's time zone. During busy holiday periods like Christmas, Valentine's and
             Mother's Day, we may extend our delivery hours before 9AM and after 8PM to ensure that all gifts are
             delivered on time. If for any reason your gift does not arrive on time, our dedicated Customer Service agents
             will do everything they can to help successfully resolve your issue.
             <br/> <p><a href="https://example.com/orders/">Click here</a> to complete the form with your order-related
             question(s).</p>
           </div>
         </div>
       </div>
       <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
         <h3 itemProp="name">When will my credit card be charged?</h3>
         <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
           <div itemProp="text">
             We'll attempt to securely charge your credit card at the point of purchase online. If there's a problem,
             you'll be notified on the spot and prompted to use another card. Once we receive verification of sufficient
             funds, your payment will be completed and transferred securely to us. Your account will be charged in 24 to
             48 hours.
           </div>
         </div>
       </div>
       <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
         <h3 itemProp="name">Will I be charged sales tax for online orders?</h3>
         <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
           <div itemProp="text">
             Local and State sales tax will be collected if your recipient's mailing address is in:
             <ul>
               <li>Arizona</li>
               <li>California</li>
               <li>Colorado</li>
             </ul>
           </div>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Faq