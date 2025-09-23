'use client';
import React, { useState } from 'react';
import './index.css';
import Header from '../component/common/header/Header';
import Swal from 'sweetalert2';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';
import { customerDetails } from '../component/helper/Helper';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^[0-9]{10}$/;

const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const [customers, setCustomers] = useState([{ name: "", email: "", phone: "" }]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const ticketPrice = 200;
  const shipping = 20;
  const subtotal = quantity * ticketPrice;
  const total = subtotal + shipping - discount;

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    setCustomers([...customers, { name: "", email: "", phone: "" }]);
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
      i === index ? { ...customer, [field]: value } : customer
    );
    setCustomers(updatedCustomers);
  };

  const isFormValid = customers.every(
    (customer) =>
      customer.name &&
      emailRegex.test(customer.email) &&
      phoneRegex.test(customer.phone)
  );

  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'DISCOUNT10') {
      setDiscount(10);
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
        customerDetails(customers, total);
      } else if (result.isDenied) {
        Swal.fire("Your payment has been cancelled", "", "info");
      }
    });
  };

  return (
    <>
      <Header />

      <section className=" h-custom" style={{ backgroundColor: '#000' }}>
        <div className="container-fluid py-5  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div style={{ marginTop: '5rem' }} className="col-md-10 col-lg-10">
              <div className="card bg-dark text-white">
                <div className="card-body p-4 ">
                  <h5 className="mb-3 text-center">
                    <a href="#!" className="text-gold">Continue shopping</a>
                  </h5>
                  <hr className="text-gold" />

                  <div className="d-flex gap-5 flex-lg-row flex-column">
                    {/* Left Section */}
                    <div className="col-md-7">
                      <h5 className="fw-bold text-center">Booking Profiling Fees</h5>

                      <div className="d-flex justify-content-between flex-wrap text-center">
                        <div className="w-50 mb-3 mb-md-0">
                          <p className="fw-bold fs-6">No of Tickets</p>
                          <div className="d-flex justify-content-center align-items-center gap-2">
                            <button className="btn btn-warning rounded-circle p-2" onClick={handleDecrease}>
                              <FiMinus />
                            </button>
                            <p className="m-0">{quantity}</p>
                            <button className="btn btn-warning rounded-circle p-2" onClick={handleIncrease}>
                              <GoPlus />
                            </button>
                          </div>
                        </div>

                        <div className="w-50">
                          <p className="fw-bold fs-6">Price per Ticket</p>
                          <p className="text-gold">₹{ticketPrice}/-</p>
                        </div>
                      </div>

                      <hr />
                      <p className="fw-bold text-center">Customer Details:</p>

                      <div className="row">
                        {customers.map((customer, index) => (
                          <div key={index+1}>
                            <p className="d-flex justify-content-between align-items-center">
                              <span className='mediumfont'>Customer No {index + 1}</span>
                              <span className="text-danger smallfont">**All fields are mandatory</span>
                            </p>
                            <div key={index} className="col-12 mb-2 d-flex   flex-lg-row flex-column  gap-3 ">
                              <input
                                type="text"
                                placeholder="Enter Name"
                                className="form-control mb-2"
                                value={customer.name}
                                onChange={(e) => handleCustomerChange(index, "name", e.target.value)}
                              />
                              <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control mb-2"
                                value={customer.email}
                                onChange={(e) => handleCustomerChange(index, "email", e.target.value)}
                              />
                              <input
                                type="tel"
                                placeholder="Enter Phone"
                                className="form-control"
                                value={customer.phone}
                                onChange={(e) => handleCustomerChange(index, "phone", e.target.value)}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Section */}
                    <div className="col-md-5 mt-4 mt-md-0">
                      <h5 className="fw-bold">Cart Details</h5>
                      <hr />

                      <div className="mb-3">
                        <h6>Coupon Code</h6>
                        <input
                          className="form-control"
                          placeholder="Enter coupon code"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button className="btn btn-warning w-100 mt-2" onClick={applyCoupon}>Apply</button>
                      </div>
                      <hr />

                      <div className="p-3 border rounded bg-light text-dark">
                        <h6>Cart Summary</h6>
                        <div className="d-flex justify-content-between">
                          <p>Subtotal</p>
                          <p>₹{subtotal.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Shipping</p>
                          <p>₹{shipping.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <p>Discount</p>
                          <p>-₹{discount.toFixed(2)}</p>
                        </div>
                        <div className="d-flex justify-content-between fw-bold">
                          <p>Total</p>
                          <p>₹{total.toFixed(2)}</p>
                        </div>

                        <button
                          className="btn btn-dark w-100 mt-2"
                          onClick={onSubmit}
                          disabled={!isFormValid}
                        >
                          Proceed to Pay
                        </button>
                      </div>
                    </div>
                  </div> {/* row end */}
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
