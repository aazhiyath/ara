import Image from 'next/image';
import Catagory from './components/catagory';

export default function Home() {
  return (
    <div className=''>
      <div className='h-full z-5 pt-2 pb-4 '>
      <video autoPlay  loop className='' src="https://aazhiyath.github.io/alramsadhesivemat/vedios/22.mp4">
      </video>
      </div>
      <div> <h1 className='text-2xl font-bold ml-10 md:ml-20 mt-2'>About Us</h1></div>
      <div className='md:flex sm:grid md:px-20 py-6'>
        <div className='flex-1 px-8 '>
          <img className='rounded object-cover' src="aboutus.jpg" alt="" />
        </div>
        <div className='flex-1 '>
          <p className='px-8 pt-6 md:pt-0'>Welcome to Al Rams Adhesive Materials L.L.C, the premier construction chemical manufacturer in Ras Al Khaimah, UAE, established in 2001.

At Al Rams Adhesive Materials L.L.C, we've been pioneering excellence in construction solutions, delivering top-notch products since our inception. Our state-of-the-art facilities and commitment to innovation ensure our products meet and exceed industry standards.

What sets us apart is our dedication to customer satisfaction. Our team of experts is here to guide you through our extensive product range, offering tailored solutions for your construction needs.

We take pride in our role in shaping the UAE's skyline, contributing to sustainable and environmentally conscious construction practices. Choose Al Rams Adhesive Materials L.L.C for quality, innovation, and a commitment to excellence in every project.
               </p>

               <h1 className='p-6 text-base font-bold'>Al Rams Adhesive Materials L.L.C</h1>
        </div>
      </div>

      <Catagory />

    </div>
      
  )
}
