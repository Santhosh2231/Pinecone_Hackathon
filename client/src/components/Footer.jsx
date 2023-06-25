import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
    <div className="w-full md:w-1/2 m-auto">
          {/* <h3 className="text-lg font-semibold mb-2">Developers: </h3> */}
          <p className='text-white font-bold text-lg text-center'>Developers:</p>
          <p className=" text-white  font-Paprika text-2xl text-center my-2"> Santhosh Raminedi - Yasaswini Kovi</p>
        </div>
      
      <div className="container mx-auto mt-8 px-4">
        <p className="text-sm text-white text-center">
          &copy; {new Date().getFullYear()} Bio.Grow. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
