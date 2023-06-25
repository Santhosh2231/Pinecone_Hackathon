import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleButton = document.querySelector('.toggle-button')
    toggleButton.addEventListener('click', () => {
      setNavOpen(!navOpen)
    })
  }, [navOpen])

  function toggleDropdown(event) {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-50 p-4 shadow-2xl bg-fixed">

      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold  tracking-tight text-white space-x-10 md:pl-24 text-5xl "><h6 className='text-white text-2xl'>
          <span className='text-green-600 text-3xl font-bold'>Bio.</span><span className='text-orange-500 font-bold text-2xl'>Grow</span>
        </h6></span>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleDropdown} className="flex items-center px-3 py-2 border rounded text-green-700 border-cyan-700 hover:text-white hover:border-white toggle-button">
          {isOpen ? (
            <svg
              className="block h-6 w-6 text-green-700 border-cyan-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="block h-6 w-6 text-green-700 border-cyan-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${navOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm sm:flex lg:flex-grow justify-end md:pr-48 md:space-x-5">
          <Link to="/" className="block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4">
            <h6 className='text-teal-700 font-Merriweather md:text-lg'>Home</h6>
          </Link>
          <Link to="/cropdiseases" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            <h6 className='text-teal-700 font-Merriweather md:text-lg'>Crop diseases</h6>
          </Link>
          <Link to="/analyse" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            <h6 className='text-teal-700 font-Merriweather md:text-lg'>Analyse Your Crop</h6>
          </Link>

        </div>
      </div>
    </nav>
  )
}
export default Navbar