import React from 'react';
import styles from "../Contact/style.module.css"
const Contact = () => {
  return (
    <div className='container'>
      <div className='d-flex justify-content-center'>
        <div className='w-50 text-center'>
          <h1>Contact us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div></div>



      <div className='d-flex justify-content-center'>
        <div className={`p-5 w-75  ${styles.box}  `}>
          <div>
            <div className='row col-lg-12'>

              <div className=' col'>
                <label htmlFor="" className='mb-2'>Name</label>
                <input type="text " className=' w-100  border-white bg-transparent rounded p-2 ' placeholder='Enter your name' />

              </div>
              <div className='col'>
                <label htmlFor="" className='mb-2'>Email</label>
                <input type="text" className=' p-2  border-white rounded bg-transparent w-100' placeholder='Enter your emial' />
              </div>

            </div>


            <div className='row mt-5 col-lg-12'>

              <div className=' col'>
                <label htmlFor="" className='mb-2'>Name</label>
                <input type="text " className=' w-100  border-white bg-transparent rounded p-2 ' placeholder='Enter your name' />

              </div>
              <div className='col'>
                <label htmlFor="" className='mb-2'>Email</label>
                <input type="text" className=' p-2  border-white rounded bg-transparent w-100' placeholder='Enter your emial' />
              </div>

              <div>
                <label htmlFor="" className='mb-2'>Message</label>
                <input type="message" className=' p-2  border-white rounded bg-transparent w-100' placeholder='Enter your emial' />

              </div>

              <input type="submit" className=' p-2 mt-4 ms-3 border-dark bg-dark rounded-5 text-white   w-25' placeholder='Enter your emial' />


            </div>     </div></div>


      </div>
    </div>

  );
}

export default Contact;
