'use client'
import React, { useState } from 'react';
import './index.css';
import Header from '../component/common/header/Header';
import Swal from 'sweetalert2';

const Page = () => {
  const initialItems = [
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp",
      title: "Iphone 11 pro",
      details: "256GB, Navy Blue",
      quantity: 2,
      price: 900
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp",
      title: "Samsung galaxy Note 10",
      details: "256GB, Navy Blue",
      quantity: 2,
      price: 900
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp",
      title: "Canon EOS M50",
      details: "Onyx Black",
      quantity: 1,
      price: 1199
    },
    {
      img: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp",
      title: "MacBook Pro",
      details: "1TB, Graphite",
      quantity: 1,
      price: 1799
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index, change) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(0, newItems[index].quantity + change);
    setItems(newItems);
  };

  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const shipping = 20;
    const total = subtotal + shipping - discount;
    return { subtotal, shipping, total };
  };

  const applyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10);
      Swal.fire('Coupon applied!', 'You have received a ₹10 discount.', 'success');
    } else {
      Swal.fire('Invalid coupon', 'Please check your coupon code.', 'error');
    }
  };

  const onSubmit = () => {
    Swal.fire({
      title: "<small>Processing fees we don't allow participants without profiling in any offer events, Profiling Fees Rs 220/-</small>",
      showDenyButton: true,
      confirmButtonText: "Proceed to payment",
      denyButtonText: `Cancel`,
      customClass: {
        title: 'small-title' 
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Payment successful!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Your payment has been cancelled", "", "info");
      }
    });
  };

  const { subtotal, shipping, total } = calculateTotal();

  return (
    <>
      <Header />
      <section className="h-100 h-custom" style={{ backgroundColor: '#000' }}>
        <div className="container-fluid py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col mt-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-4">

                  <div className="row">
                    <div className="col-lg-8">
                      <h5 className="mb-3">
                        <a href="#!" className="text-gold">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                        </a>
                      </h5>
                      <hr className="text-gold" />
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">You have {items.reduce((sum, item) => sum + item.quantity, 0)} items in your cart</p>
                        </div>
                      </div>

                      {items.map((item, index) => (
                        <div className="card mb-3 hover-bg" key={index}>
                          <div style={{ backgroundColor: 'lightgray' }} className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <img src={item.img} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                <div className="ms-3">
                                  <h5 className="color-custom">{item.title}</h5>
                                  <p className="small mb-0 color-custom">{item.details}</p>
                                </div>
                              </div>
                              <div className="d-flex gap-3 flex-row align-items-center">
                                <div className="d-flex align-items-center">
                                  <button className="btn btn-outline-gold btn-sm py-0" onClick={() => handleQuantityChange(index, -1)}>
                                    -
                                  </button>
                                  <span className="mx-2 color-custom">{item.quantity}</span>
                                  <button className="btn btn-outline-gold btn-sm py-0" onClick={() => handleQuantityChange(index, 1)}>
                                    +
                                  </button>
                                </div>
                                <div style={{ width: '80px' }}>
                                  <h5 className="mb-0 color-custom">₹{item.price * item.quantity}</h5>
                                </div>
                                <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="col-lg-4">
                      <h5 className="">
                        <a href="#!" className="text-gold">
                          <i className="fas fa-long-arrow-alt-left a-custom"></i> Cart Details
                        </a>
                      </h5>
                      <hr />
                      <div className='mt-2'>
                        <h6>Coupon Code</h6>
                        <input
                          className='w-100 rounded-pill py-2 px-4 border border-none'
                          placeholder='Enter coupon code'
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button className='w-100 mt-3 border border-none px-4 py-1 rounded-pill' onClick={applyCoupon}>
                          Apply
                        </button>
                      </div>

                      <hr className="my-4" />

                      <div className='border p-4 border rounded-4'>
                        <h6>Cart Details</h6>
                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2 text-gold">₹{subtotal.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between">
                          <p className="mb-2">Shipping</p>
                          <p className="mb-2 text-gold">₹{shipping.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Discount</p>
                          <p className="mb-2 text-gold">-₹{discount.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">Total (Incl. taxes)</p>
                          <p className="mb-2 text-gold">₹{total.toFixed(2)}</p>
                        </div>

                        <button onClick={onSubmit} type="button" className="border border-none px-4 py-2 rounded-pill">
                          Proceed to pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
