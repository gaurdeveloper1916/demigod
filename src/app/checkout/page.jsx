'use client';
import React, { useState } from 'react';
import './index.css';
import Header from '../component/common/header/Header';
import Swal from 'sweetalert2';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import axios from 'axios';
import Proceedbutton from '../component/ProceedButton/Proceedbutton';
import { customerDetails } from '../component/helper/Helper';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

const Page = () => {
  const [quantity, setQuantity] = useState(1); 
  const [customers, setCustomers] = useState([{ name: "", email: "", phone: null}]); 
  console.log(customers)
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const ticketPrice = 200;
  const shipping = 20; 
  const subtotal = quantity * ticketPrice;
  const total = subtotal + shipping - discount;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setCustomers([...customers, { name: "", email: "", phone: null }]);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setCustomers(customers.slice(0, -1));
    }
  };

  const handleCustomerChange = (index, field, value) => {
    if (field === "phone") {
      value = value.replace(/\D/g, ''); 
    }
    const updatedCustomers = customers.map((customer, i) =>
      i === index ? { ...customer, [field]: field === 'phone' ? Number(value) : value } : customer
    );
    setCustomers(updatedCustomers);
  };
  

  const isFormValid = customers.every(
    (customer) =>
      customer.name &&
      emailRegex.test(customer.email) && 
      phoneRegex.test(customer.phone) 
  );

  const checkoutHandler = async (amount) => {
    const verifyPayment = (razorpay_payment_id, razorpay_order_id, razorpay_signature) => {
      axios.post('http://localhost:5500/api/payment/payment-verify', {
        razorpay_order_id, razorpay_payment_id, razorpay_signature
      });
    };

    const { data: { order } } = await axios.post("http://localhost:5500/api/payment/checkout", { amount });
    const key = 'rzp_test_CmxYm8kuyMWjPJ';

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Demigod House",
      description: "Testing in Demigod house payment",
      image: "https://www.demigodhouse.com/images/demigodnew.png",
      order_id: order.id,
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999"
      },
      handler: async function (response) {
        if (response.razorpay_payment_id && response.razorpay_order_id && response.razorpay_signature) {
          verifyPayment(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature);
        }
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#121212"
      }
    };

    const rzp1 = new Razorpay(options);
    rzp1.open();
  };

  const applyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10); // ₹10 discount
      Swal.fire('Coupon applied!', 'You have received a ₹10 discount.', 'success');
    } else {
      Swal.fire('Invalid coupon', 'Please check your coupon code.', 'error');
    }
  };

  const onSubmit = () => {
    Swal.fire({
      title: "<small>Processing fees: Profiling Fees Rs 220/-</small>",
      showDenyButton: true,
      confirmButtonText: "Proceed to payment",
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        customerDetails(customers,total);
      } else if (result.isDenied) {
        Swal.fire("Your payment has been cancelled", "", "info");
      }
    });
  };

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
                        <p className='px-2 py-2'>
                          Processing fees: Profiling Fees Rs 220/-
                        </p>
                      </h5>
                      <hr className="text-gold" />

                      <div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-center fw-bold fs-5">Booking profiling fees</p>
                            <p className="mb-1">Participants fees</p>
                          </div>

                          <div className="d-flex flex-column justify-content-center align-items-center mt-3">
                            <p className="text-center fw-bold fs-5">No of tickets</p>
                            <div className="d-flex gap-2 align-items-center">
                              <div
                                style={{
                                  backgroundColor: "orange",
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={handleDecrease}
                              >
                                <FiMinus color="white" />
                              </div>
                              <p className="mt-3 text-white">{quantity}</p>
                              <div
                                style={{
                                  backgroundColor: "orange",
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "50%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={handleIncrease}
                              >
                                <GoPlus color="white" />
                              </div>
                            </div>
                          </div>

                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <p className="text-center fw-bold fs-5">Price</p>
                            <p className="mb-2 text-gold">₹{ticketPrice}/-</p>
                          </div>
                        </div>

                        <div>
                          <hr />
                          <p className="fw-bold fs-5">Customer Details:</p>
                          <div className='d-flex justify-content-between'>
                            <label className="p-1">Name</label>
                            <label className="p-1">Email Address</label>
                            <label className="p-1">Phone Number</label>
                          </div>

                          {customers.map((customer, index) => (
                            <div key={index} className="d-flex justify-content-between mb-3">
                              <div className="d-flex flex-column">
                                <input
                                  type="text"
                                  placeholder="Enter your name"
                                  className="p-2 fs-6 rounded border border-0"
                                  value={customer.name}
                                  onChange={(e) =>
                                    handleCustomerChange(index, "name", e.target.value)
                                  }
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <input
                                  type="email"
                                  placeholder="Enter your email"
                                  className="p-2 fs-6 rounded"
                                  value={customer.email}
                                  onChange={(e) =>
                                    handleCustomerChange(index, "email", e.target.value)
                                  }
                                />
                              </div>
                              <div className="d-flex flex-column">
                                <input
                                  type="tel"
                                  placeholder="Enter your number"
                                  className="p-2 fs-6 rounded"
                                  value={customer.phone}
                                  onChange={(e) =>
                                    handleCustomerChange(index, "phone", e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          ))}
                        
                        </div>
                      </div>
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
                        <button className='w-100 mt-3 border border-none px-4 py-2 rounded-pill' onClick={applyCoupon}>
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

                        <button
                          onClick={onSubmit}
                          type="button"
                          className="border border-none px-4 py-2 rounded-pill"
                          disabled={!isFormValid}
                        >
                          Proceed to pay
                        </button>
                        {/* <Proceedbutton/> */}
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
