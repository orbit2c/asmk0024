// src/components/PresentationSite.js
import React, { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import backgroundImage from '../images/mech2.jpg'; // Adjust the path based on your project structure


const PresentationSite = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

 // Add a useEffect hook to fade in the header and hero sections

 useEffect(() => {

  const header = document.querySelector('header');

  const hero = document.querySelector('.hero');


  // Set the initial opacity to 0

  header.style.opacity = 0;

  hero.style.opacity = 0;


  // Use a requestAnimationFrame to fade in the header and hero sections

  const fadeIn = () => {

    header.style.transition = 'opacity 0.5s ease-out';

    header.style.opacity = 1;


    hero.style.transition = 'opacity 1s ease-out';

    hero.style.opacity = 1;

  };


  requestAnimationFrame(fadeIn);

}, []);


// Add a useEffect hook to update the scroll position

useEffect(() => {

  const handleScroll = () => {

    setScrollPosition(window.pageYOffset);

  };


  window.addEventListener('scroll', handleScroll);


  return () => {

    window.removeEventListener('scroll', handleScroll);

  };

}, []);


// Add a scroll-to-top button

const scrollToTop = () => {

  window.scrollTo({

    top: 0,

    behavior: 'smooth',

  });

};

  return (
    <div className="bg-white">

    <header className="absolute inset-x-0 top-0 z-50">

      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">

        <div className="flex lg:flex-1">

          <a href="#" className="-m-1.5 p-1.5">

            <span className="sr-only">Axelssons Cykel och Motor</span>

            <img

              className="h-8 w-auto"

              src=""

              alt="Axelssons Cykel och Motor"

            />

          </a>

        </div>

        <div className="flex lg:hidden">

          <button

            type="button"

            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

          >

            {mobileMenuOpen ? (

              <XMarkIcon className="h-6 w-6" />

            ) : (

              <Bars3Icon className="h-6 w-6" />

            )}

            <span className="sr-only">Toggle menu</span>

          </button>

        </div>


       

      </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        {mobileMenuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            {/* Background backdrop, show/hide based on slide-over state. */}
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Axelssons Cykel och Motor</span>
                  <img
                    className="h-8 w-auto"
                    src=""
                    alt="Axelssons Cykel och Motor"
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Hem
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Tjänster
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Om Oss
                    </a>
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Kontakt
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

   <div className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center hero" style={{ backgroundImage: `url(${backgroundImage}) `, opacity: 0.9  }}>
        <div className="absolute inset-0 bg-black opacity-60" aria-hidden="true">
        
        
        </div>
        <div className="x-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative z-10 text-white">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Professionell Cykelreparation</h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Vi erbjuder expertis och service för att hålla dina cyklar i toppskick. Oavsett om det är en enkel justering eller en omfattande reparation, kan du lita på oss.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Kom igång
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Läs mer <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
      </div>
   

</div>

);

};

export default PresentationSite;
