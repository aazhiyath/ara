"use client"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Footer(){

const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gp2ddzf', 'template_kj3bitc', form.current, '8425NwnpYyKNXy3z2')
      .then((result) => {
          console.log(result.text);
          toast.success(' Message Send Successfully!')
      }, (error) => {
          console.log(error.text);
          toast.error("This didn't work.")
      });
      e.target.reset();
      
    }

    return(
        <div className="sm:grid md:grid grid-cols-3 h-max bg-black justify-center py-8 md:px-20 px-8 text-gray-400">
            <div className=""> <img className="w-36 mb-3" src="Logo ara.jpeg" alt="" /> 
            <h1 className="tex-xl font-bold">Al Rams Adhesive Materials. L.L.C</h1>
            <p>PO.BOX.NO:6157</p>
            <p>RAS AL KHAIMAH</p>
            <p>U.A.E.</p>
            <p>Tel: +9717 2662359,+9717 2277118</p>
            <p>e-mail: alramsllc@gmail.com</p>
            <h1 className="tex-xl font-bold mt-6">Al Rams Adhesives</h1>
            <p>NEW INDUSTRIAL ESTATE</p>
            <p>AL BURIMI</p>
            <p>SULTANATE OF OMAN</p>
            <p>MOB:+968 99134362</p>
            </div>
            <div>
            <img className="w-60 mt-3 mb-6" src="https://aazhiyath.github.io/alramsadhesivemat/inovaplus.png" alt="" />
            <h1 className="tex-xl  mb-2">Tile Adhesives</h1>
            <h1 className="tex-xl  mb-2">Water proof coatings</h1>
            <h1 className="tex-xl  mb-2">Bituminous products</h1>
            <h1 className="tex-xl  mb-2">PVA Bonding agent</h1>
            <h1 className="tex-xl  mb-2">Plaster Admixture</h1>
            <h1 className="tex-xl  mb-2">Construction chemicals</h1>
            <h1 className="tex-xl  mb-2">Central A/C coatings</h1>
            <h1 className="tex-xl  mb-2">Gypsum joint compound</h1>
            <h1 className="tex-xl  mb-2">Acrylic joint sealant (Mastic)</h1>
            <h1 className="tex-xl  mb-2">Crack filler</h1>
            </div>
            <div className="flex">
                <form  ref={form} onSubmit={sendEmail} className="grid w-full">
                <h1 className="font-extrabold text-2xl">Contact us</h1>
                <label htmlFor="" className="mb-0">Your Name</label>
                <input  type="text" name="user_name" placeholder="Name" className="rounded-sm py-2  px-4" required />
                <label htmlFor="" className="mt-1 mb-0">Your Email</label>
                <input type="email" name="user_email" placeholder="Email" className="rounded-sm py-2  px-4" required  />
                <label htmlFor="" className="mt-1 mb-0">Message</label>
                <textarea name="message" id="" cols="30" rows="4" className="rounded-sm p-2 " required ></textarea>
                <button type="submit" className="bg-orange-400 rounded-md text-white py-2 mt-3 hover:bg-blue-600 duration-1000">Submit</button>
                </form>
            </div>
        </div>
    )
}