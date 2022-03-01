import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
import Navbar from '../Navbar/Navbar';

function Home() {
  
  return (
      <>
       <div className='background'>
         <Navbar />
         <div className='container'>
            <div className='row'>
            <Link to='/calculator'>
              <div className='button'>
                calculator
                </div>
              </Link>
            </div>
           
         </div>
         
       </div>
       
      </>
   

  )
}

export default Home