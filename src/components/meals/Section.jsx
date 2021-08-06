import {useState,useEffect} from "react";
import ProductCard from "./ProductCard";
import "./Section.css";
import bulleto from "./../Assets/images/bulleto.jpg";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



const Section = (props) => {

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (e, itemId) => {
    console.log(itemId)
    setOrder({
      ...order,
      foodItem_id: itemId
    })
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  let url = process.env.NODE_ENV === "development"?
  process.env.REACT_APP_DEVELOPMENT_URL : 
  process.env.REACT_APP_PRODUCTION_URL;

  const [loading, setLoading] = useState(true);
  const [foods,setFoods] = useState([])

  const [order, setOrder] = useState({
    foodItem_id:'',
    firstName:'',
    lastName:'',
    telephone: '',
    address: '',
    
  })
  const handleInput = (e) => {
    e.persist();
    setOrder({...order,[e.target.name]: e.target.value})
  }

  const submitOrder = async (e) => {
    e.preventDefault();
    console.log('hellow');

    const data = {
      foodItem_id: order.foodItem_id,
      firstName: order.firstName,
      lastName: order.lastName,
      telephone: order.telephone,
      address: order.address,
    }
    console.log(data)

  }


  const refreshFoods = async () => {
    let res = await fetch(url + "FoodItem",{
      credentials: 'include',
    });
    console.log(res);
    let data= await res.json();
    console.log(data);
    setFoods(data);
    console.log(foods);
    setLoading(false);
  }

  useEffect(()=>{
    refreshFoods();
  },[]);

  // useEffect(() =>{
  //   async function getFoods(){
  //     const res =await fetch(url + 'FoodItem')
  //       console.log(res);
  //       if (res.status === 200){
  //         // setCategoryList(res.data)
  //         //console.log(CategoryList)
  //       }
  //       setLoading(false)
  //   } 
  //   getFoods();
  // }, []);


  // const foodCard = data =>(
  // <div className="card">
  //   <img src={data.imageSrc} alt="" className="card-img-top round"/>
  //   <div className="card-body">
  //     <h5>{data.name}</h5>
  //     <span>{data.price}</span>
  //   </div>
  // </div>
  // )

  return (
    


    <div className="section mb-4">
      {/* modal */}
      <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <form onSubmit={submitOrder}>
          <div className={classes.paper}>
              <h4>Enter your details</h4>
              <div>
                <div className="form-group">
                  <label htmlFor="">First Name</label> 
                  <input type="text" className="form-control"
                    id="firstName" name="firstName"
                    onChange={handleInput}
                    value={order.firstName} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Last Name</label> 
                  <input type="text" className="form-control"
                    id="lastName" name="lastName"
                     onChange={handleInput}
                     value={order.lastName} 
                  />
                </div>
          
                <div className="form-group">
                  <label htmlFor="">Telephone</label> 
                  <input type="number" className="form-control"
                    id="telephone" name="telephone"
                    onChange={handleInput}
                    value={order.telephone} 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Address</label> 
                  <input type="text" className="form-control"
                    id="address" name="address"
                     onChange={handleInput}
                     value={order.address} 
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success mt-1">make order</button>
          </div>
          
          </form>
        </Fade>
      </Modal>
    </div>

      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="list-home"
          role="tabpanel"
          aria-labelledby="list-home-list"
        >
          <div className="row breakfast mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Breakfast</h4>
          
            
            {foods.map((item,index)=>
              <div className="col-lg-4 col-md-6 mb-4 ">
                  <div className="pro-box">
                    <div className="pro-img card-img-top">
                      <img src={item.imageSrc} alt="" style={{width:'100%',height:'200px'}} />
                    </div>
                    <div className="product-details-wrap">
                    <div className="product-details">
                      <h4>{item.name}</h4>

                      <p className="pro-pricing">{"D"+item.price}</p>
                    </div>
                    <div className="product-details">
                      <p>
                      Bulleto get the traditional breakFast dish.
                      </p>
                    </div>
                    <button type="button" onClick={(e) => handleOpen(e, item.id)} onChange={handleInput} value={item.id} name="foodItem_id" 
                      id="foodItem_id"
                      class="btn btn-success">
                    Order Food
                  </button>
                  </div>
                  
                  </div>
              </div>
            )}

            {/* <div className="col-lg-4 col-md-6 mb-4">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src={bulleto} alt=""  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Bulleto</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div> */}
{/* 
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src={bulleto} alt=""  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Bulleto</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                      Bulleto get the traditional breakFast dish
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div> */}

            {/* <div className="col-md-4 ">
              <img
                className="img-fluid card-img-top h-40"
                src="https://images.unsplash.com/photo-1561651823-34feb02250e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=478&q=80"
                alt=""
              />
              <div class="card-block">
                <h4 class="card-title text-danger">Shawarma</h4>
                <p class="card-text">D250</p>
                <a href="##" class="btn btn-success">
                  Order Food
                </a>
              </div>
            </div> */}

            {/* <div className="col-md-4 ">
              <img
                className="img-fluid card-img-top h-40"
                src="https://images.unsplash.com/photo-1554280238-54bb925fc043?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
              <div class="card-block">
                <h4 class="card-title text-danger">Scrambled Egges</h4>
                <p class="card-text">D150</p>
                <a href="##" class="btn btn-success">
                  Order Food
                </a>
              </div>
            </div> */}
          </div>

        </div>

        <div
          class="tab-pane fade"
          id="list-profile"
          role="tabpanel"
          aria-labelledby="list-profile-list"
        >
        

          <div className="row lunch mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Lunch</h4>            

            <div className="col-lg-4 col-md-6 mb-4  ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1611712142269-12b7433e28e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWZyaWNhbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "
                 alt="yassa ganarr photo"  style={{width:'100%',height:'200px'}}/>
                    
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Yassa Ganarr</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="list-messages"
          role="tabpanel"
          aria-labelledby="list-messages-list"
        >
          <div className="row dinner mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Dinner</h4>

            <div className="col-lg-4 col-md-6 mb-4  ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1578974721235-ecce3a0d8dcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=630&q=80"
                 alt="yassa ganarr photo"  style={{width:'100%',height:'200px'}}/>
                    
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Chicken and Chips</h4>

                    <p className="pro-pricing">D250.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div
          class="tab-pane fade"
          id="list-settings"
          role="tabpanel"
          aria-labelledby="list-settings-list"
        >
          <div className="row drinks mb-4">
            <h4 className="text-muted fs-3 fw-bolder">Drinks</h4>



            
            <div className="col-lg-4 col-md-6 mb-4  ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1497534446932-c925b458314e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=407&q=80"
                alt="yassa ganarr photo"  style={{width:'100%',height:'200px'}}/>
                    
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Cocktail Drinks</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Freshing up
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Order Food
                </a>
                </div>
              </div>
            </div>

            
            <div className="col-lg-4 col-md-6 mb-4 ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Orange juice "  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Orange Juice</h4>

                    <p className="pro-pricing">D75.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Freshing up 
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Buy Drink
                </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 ">
              <div className="pro-box">
                <div className="pro-img card-img-top">
                 
                    <img src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="Orange juice "  style={{width:'100%',height:'200px'}}/>
                  
                </div>
                <div className="product-details-wrap">
                  <div className="product-details">
                    <h4>Orange Juice</h4>

                    <p className="pro-pricing">D100.00</p>
                  </div>
                  <div className="product-details">
                    <p>
                    Bulleto get the traditional breakFast dish.
                    </p>
                  </div>
                  <a href="##" class="btn btn-success">
                  Buy Drink
                </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

        export default Section;
