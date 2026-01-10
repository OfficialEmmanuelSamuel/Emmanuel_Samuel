import React from 'react';
import { ImWhatsapp } from 'react-icons/im';

const WhatsappButton = () => {
    const phoneNumber = "2349128359191";
    const message = "Hello Emmanuel, I came across your portfolio and would like to discuss a software development opportunity with you.";

    return (
        <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel='noopener noreferrer'
            className='fixed z-50  bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-3xl transition animate-bounce'
            title='Contact Us'
        >
            <ImWhatsapp size={28}/>
        </a>
    );
};

export default WhatsappButton;