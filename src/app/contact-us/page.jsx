"use client";


import { useState } from 'react';
import Header from '../component/common/header/Header';
import Section_1 from "./components/section_1";
import Section_2 from "./components/section_2";
import Section_3 from "./components/section_3";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    alert('Thank you for your message. We will get back to you soon!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <main >
      <Header />




<Section_1/>

<Section_2/>

<Section_3/>

      
    </main> 
  );
}





