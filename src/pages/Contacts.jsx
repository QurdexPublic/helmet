import React from 'react'
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import {Helmet} from "react-helmet";

const Contacts = (props) => {
  return (
   <div>
     <Helmet htmlAttributes>
       <html lang="en"/>
       <title>Contacts</title>
       <meta name="description" content="React Helmet example Contacts"/>
     </Helmet>
     <div>
       <Breadcrumbs slug={props.slug}/>
       <div className="contacts">
         <div className="contacts__item">
           <p>Tel:</p><a href="tel:050849845">050849845</a>
         </div>
         <div className="contacts__item">
           <p>Email:</p><a href="mailto:test@gmail.com">test@gmail.com</a>
         </div>
         <div className="contacts__item">
           <p>Adress:</p><p>Street 242 hom 5</p>
         </div>
       </div>
     </div>
   </div>
  )
}

export default Contacts