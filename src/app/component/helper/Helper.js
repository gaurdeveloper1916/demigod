import React from 'react';
import axios from "axios"
import Swal from "sweetalert2"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { notify, notifyError } from './ToastContainer';
import { useRouter } from "next/navigation";



export const createAccount = async (data) => {
  const createAccountPayload = {
    name: data.firstName,
    email: data.email,
    lastName: data.lastName,
  };

  try {
    const account = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/create-customer`,
      createAccountPayload
    );

    console.log(account);

    if (account.data.success) {
      notify("Account created successfully!");
    } else {
      notifyError("Failed to create account!");
    }
  } catch (error) {
    console.error(error);
    notifyError(error.response?.data?.message || "An error occurred!");
  }
}
const checkoutHandler = async (user_id, amount) => {
  const verifyPayment = async (razorpay_payment_id, razorpay_order_id, razorpay_signature) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/payment-verify`, {
        razorpay_order_id, razorpay_payment_id, razorpay_signature, user_id, amount
      });
      if (response.status === 200) {
        window.location.href = `http://localhost:3000/thankyou?reference=${razorpay_payment_id}`;
      } else {
        console.log("Payment verification failed");
      }
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  try {
    const { data: { order } } = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/checkout`, { amount });
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY;

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
          await verifyPayment(response.razorpay_payment_id, response.razorpay_order_id, response.razorpay_signature, user_id, amount);
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
  } catch (error) {
    console.error("Error during checkout process:", error);
  }
};

export const customerDetails = async (data, amount) => {
  const customerDetailsPayload = {
    "items": data
  };
  try {
    const customerDetailsResponse = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/customer-details`, customerDetailsPayload);
    if (customerDetailsResponse.status === 201) {
      checkoutHandler(customerDetailsResponse.data.customer._id, amount);
    }
  } catch (error) {
    console.error("Error during customer details submission:", error);
  }
};
