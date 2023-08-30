import React, { useRef, useState } from 'react';
import Banner from '../banner/Banner';

import './shop.css';
import Homeproduct from '../home/homeproduct';
import { Col, Container, Row } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { BsSearchHeart } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';

const Shop = ({addtocart ,addtofavourit}) => {
  const [productdat, setproductdat] = useState(Homeproduct);
  const [favorites, setFavorites] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const recordsPerPage = 8;
const [filterCategory, setFilterCategory] = useState("all"); // ADDED
const filterProducts = (category) => {
  const filteredProducts = Homeproduct.filter(
    (product) => product.cat.toLowerCase() === category.toLowerCase()
  );
  setproductdat(filteredProducts);
  setCurrentPage(1); // reset to first page when filter is applied
};
const searchBtn = () => {
  const changed = Homeproduct.filter(
    (x) => x.cat.toLowerCase() === search.toLowerCase()
  );
  setproductdat(changed);
  setCurrentPage(1); // reset to first page when search is performed
};
const indexOfLastRecord = currentPage * recordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
const paginatedRecords = productdat.slice(
  indexOfFirstRecord,
  indexOfLastRecord
);
const pageNumbers = [];
for (
  let i = 1;
  i <= Math.ceil(productdat.length / recordsPerPage);
  i++
) {
  pageNumbers.push(i);
}


  // function change color heart
const handleClick = (event, curElm) => {
  event.preventDefault();
  addtofavourit(curElm);
  event.currentTarget.querySelector('.heart').classList.toggle('togle-red');
}
  
  return (
       <>
        <Banner tittle="Shop" smtittle ="shop"/>
        <section className='shop-product'>
          <Container className='content'>
            <Row>
              <div className='search'>
                <div className='div-search'>
                <input
      type="text"
      className="search-input"
      autoComplete="off"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
                 <BsSearchHeart className="icon-search" onClick={searchBtn} />
                </div>
                <ul>
                <li
        onClick={() => {
          setproductdat(Homeproduct);
          setFilterCategory("all");
        }}
        className={filterCategory === "all" ? "active" : ""}
      >
        All
      </li>
      <li
        onClick={() => {
          filterProducts("chair");
          setFilterCategory("chair");
        }}
        className={filterCategory === "chair" ? "active" : ""}
      >
        Chairs
      </li>
      <li
        onClick={() => {
          filterProducts("sofa");
          setFilterCategory("sofa");
        }}
        className={filterCategory === "sofa" ? "active" : ""}
      >
        Sofas
      </li>
      <li
        onClick={() => {
          filterProducts("table");
          setFilterCategory("table");
        }}
        className={filterCategory === "table" ? "active" : ""}
      >
        Tables
      </li>
      <li
        onClick={() => {
          filterProducts("bed");
          setFilterCategory("bed");
        }}
        className={filterCategory === "bed" ? "active" : ""}
      >
        Beds
      </li>
      <li
        onClick={() => {
          filterProducts("commode");
          setFilterCategory("commode");
        }}
        className={filterCategory === "commode" ? "active" : ""}
      >
        Commodes
      </li>
      <li
        onClick={() => {
          filterProducts("dresser");
          setFilterCategory("dresser");
        }}
        className={filterCategory === "dresser" ? "active" : ""}
      >
        Dressers
      </li>
                </ul>
              </div>
            </Row>
            <Row>
              
                {paginatedRecords.map((curElm)=>{
                  return (
                    <Col lg={3} md={4} sm={12} key={curElm.id}>
                    <div className='boxs-items'>
                    {curElm.name}
                     
                      
                  <button onClick={(event) => handleClick(event, curElm)}>
                   <AiFillHeart className="heart" />
                       </button>
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
            <div className='div-pagint'>
              <ul className='pagnation'>
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={prePage}>prev</a>
                </li>
                <li>
                  {
                    pageNumbers.map((n,i) =>{
                      return(
                        <span className={`page-item ${currentPage === n ?'active' : ''}`} key={i}>
                          <a href='#' className='page-link'
                          onClick={() =>changeCPage(n)}>{n}</a>
                        </span>
                      )
                    })
                  }
                </li>
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={nextPage}>Next</a>
                </li>
              </ul>
            </div>
           
          </Container>
        </section>
        </>
  )
  function prePage(){
   if(currentPage !== 1){
    setCurrentPage(currentPage-1)
   }
  }
  function changeCPage(id){
    setCurrentPage(id)
  }
  function nextPage(){
    if(currentPage === indexOfLastRecord){
      setCurrentPage(currentPage)
    }
    else{
      setCurrentPage(currentPage+1)
    }
  }
}

export default Shop