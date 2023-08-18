import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

import dottedOne from '../assets/dotted-one.png';
import dottedTwo from '../assets/dotted-two.png';
import decorationOne from '../assets/AboutDecorationOne.png';
import decorationTwo from '../assets/AboutDecorationTwo.png';
import decorationThree from '../assets/AboutDecorationThree.png';
import eventsDecorationOne from '../assets/EventsDecorationOne.png';
import eventsDecorationTwo from '../assets/EventsDecorationTwo.png';
import eventsDecorationThree from '../assets/EventsDecorationThree.png';
import sideImageOne from '../assets/desola-lanre-ologun-IgUR1iX0mqM-unsplash.jpg';
import sideImageTwo from '../assets/israel-andrade-YI_9SivVt_s-unsplash.jpg';
import sideImageThree from '../assets/patrick-tomasso-fMntI8HAAB8-unsplash.jpg';

import testimonialOne from '../assets/adetola-afolabi-_cpHtWae2ac-unsplash.jpg';
import testimonialTwo from '../assets/rui-silvestre-jCeVRUQslTs-unsplash.jpg';
import testimonialThree from '../assets/etty-fidele-AzVexpHvuKY-unsplash.jpg';

import gearFill from '../assets/gear-fill.svg';
import micFill from '../assets/mic-fill.svg';
import personSquare from '../assets/person-square.svg';
import calenderEventFill from '../assets/calendar-event-fill.svg';
import chatLeftDotsFill from '../assets/chat-left-dots-fill.svg';

export const TitleComponent = () => {
    return (
        <div>

        </div>
    )
};

export const HeroSection = () => {
    return (
        <section className='bg-blueBackground'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='w-full text-center space-y-12  mt-28 mb-28'>
                    <p className='text-4xl font-bold text-center text-navyBlue'>Saving and budgeting <span className='text-skyBlue'>platform for workers</span></p>
                    <p className='text-base text-blackText mx-24 font-normal'>Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className='text-base italic font-medium animate-bounce'>“A budget is telling your money where to go instead of wondering where it went.” —John C. Maxwell</p>
                </div>
            </div>
        </section>
       
    )
};

export const ExploreSection = () => {
    return (
        <div>

        </div>
    )
};

export const OfferSection = () => {
    return (
        <div>

        </div>
    )
};

export const EventSection = () => {
    return (
        <div>

        </div>
    )
};

export const JoinUsSection = () => {
    return (
        <div>

        </div>
    )
};

export const TestimonialSection = () => {
    return (
        <div>

        </div>
    )
};

export const SubscribeSection = () => {
    return (
        <div>

        </div>
    )
};

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Homepage
