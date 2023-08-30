import React from 'react';
import './contact.css'
import Banner from '../banner/Banner';
import { Container, Row , Col } from 'react-bootstrap';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';

const Contact = () => {
  return (
    <>
    <Banner tittle="Contact" smtittle ="Contact"/>
    <section className="sec-contact">
        <Container>
            <Row className='contact-row'>
               <div className='contact'>
                 <div className="min-div">
                    <div className='mobile'>
                        <span><BsFillTelephoneFill /></span>
                        <p>+(20)01027752397</p>
                        <p>+(20)01027752397</p>
                        </div> 
                        <div className='mobile'>
                        <span><MdEmail /></span>
                        <p>info@mydomain.com</p>
                        <p>info@mydomain.com</p>
                        </div> 
                 </div>    

                  <div className="min-div min-div-2">
                    <div className='mobile'>
                        <span><BiSolidLocationPlus /></span>
                        <p>New York City, United States<br />Egypt, Alexanderia</p>
                       
                        </div> 
                        <div className='mobile'>
                        <span><BiTimeFive /></span>
                        <p>Mon - Sat : 9am - 11pm</p>
                        <p>Sunday 11am - 5pm</p>
                        </div> 
                 </div>   
                 <h4>Get In Touch With Us</h4>
                 <p className='p'>Have questions? Contact us for assistance. 
                We're here to help and provide answers to any inquiries you may have."</p>    
                <div className='form'>
                
                 <form>
                    <div className='inputs'>
                        <input type='text' placeholder='Name*' required/>
                        <input type="email" placeholder='Email*' required/>
                        <input type="number" placeholder='phone*' required/>
                    </div>
                    <input type='text' placeholder='Your Comment*' className='input'/>
                    <input type="submit" value="Submit Comment" className='supmit'/>
                 </form>
                </div>                                                                            
               </div>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Contact