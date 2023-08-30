import React,{useEffect ,useState} from 'react';
import './section7.css';
import Homeproduct from './homeproduct';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsSearchHeart } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const Section7 = ({addtocart}) => {
    let [limitArray, setLimitArray] =useState([])
    let limit = true
    useEffect(() =>{
      if(limit){
        setLimitArray(Homeproduct.slice(8,16))
      }
      else{
        setLimitArray(Homeproduct)
      }
    },[])
  return (
    <section className='shop-product'>
        <Container className='content'>
            <h1>Favourite Products</h1>
            <Row>
            {limitArray.map((curElm)=>{
                  return (
                    <Col lg={3} md={4} sm={12} key={curElm.id}>
                    <div className='boxs-items'>
                    {curElm.name}
                      <span className='span-1'><small>$200</small>$150</span>
                      <div className='item-imgs'>
                        <span>25%</span>
                        <img src={curElm.Img} className='img'/>
                      </div>
                      <div className='item-text'>
                        <h5>{curElm.tittle}</h5>
                        <div className='icons'>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <AiFillStar className='icon'/>
                                <BsStarHalf className='icon icon1'/>
                            </div>
                            <button onClick={() => addtocart(curElm)} className='bttn'><MdOutlineAddShoppingCart className='icon' /></button>
                      </div>
                    </div>
                    </Col>
                  )
                })}
            </Row>
        </Container>
    </section>
  )
}

export default Section7