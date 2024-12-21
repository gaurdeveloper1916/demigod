import React from 'react';
import axios from "axios"
import Swal from "sweetalert2"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { notify, notifyError } from './ToastContainer';



export const createAccount = async (data) => {


    console.log(data);
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