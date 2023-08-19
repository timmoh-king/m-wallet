import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import TestimonialCard from '../components/TestimonialCard';
import OfferCards from '../components/OfferCards';

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

export const TitleComponent = ({ imgsrc, imgalt, imgtitle}) => {
    return (
        <div className='flex flex-col items-center mt-24 space-y-6'>
            <div className='w-full flex flex-row items-center text-center space-x-3'>
                <img className='icon-color' src={imgsrc} alt={imgalt} />
                <p className='text-2xl font-bold text-navyBlue pb-1'>{imgtitle}</p>
            </div>
            <div className='text-sm text-blackText text-start'>Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
    )
};

export const HeroSection = () => {
    return (
        <section className='bg-blueBackground mt-2'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='w-full text-center space-y-12  mt-28 mb-28'>
                    <p className='text-4xl font-bold text-center text-navyBlue'>Saving and budgeting <span className='text-skyBlue'>platform for workers</span></p>
                    <p className='text-base text-blackText mx-24 font-normal'>Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                    <p className='text-base italic font-medium animate-bounce'>“A budget is telling your money where to go instead of wondering where it went.” —John C. Maxwell</p>
                </div>
            </div>
        </section>
       
    )
};

export const ExploreSection = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto flex flex-row items-center justify-between space-x-6 mt-16 mb-16 px-14'>
                <div className='md:w-1/2'>
                    <TitleComponent imgsrc={chatLeftDotsFill} imgalt="message icon" imgtitle="Get to know us"/>
                    <div className='w-full flex flex-row space-x-3  mb-24 pt-8'>
                        <Button buttonName="Sign in" buttonStyle="hidden w-[130px] p-2 px-6 text-black bg-white font-semibold baseline ring-1 ring-navyBlue hover:text-white hover:bg-navyBlue md:block " />
                        <Button buttonName="Register" buttonStyle="hidden w-[130px] p-2 px-6 text-white bg-navyBlue font-semibold baseline hover:ring-1 hover:ring-navyBlue hover:text-black hover:bg-white md:block " />
                    </div>
                </div>
                <div className='md:w-1/2 items-center'>
                    <img className='rounded-md img-full' src={sideImageOne} alt='Get-to-know-us png'/>
                </div>
            </div>
        </section>
    )
};

export const OfferSection = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto flex flex-row items-center justify-between space-x-6 mt-16 mb-16 px-14'>
                <div className='md:w-1/2 items-center space-y-4'>
                    <img className='rounded-md img-full' src={sideImageThree} alt='Get-to-know-us png'/>
                </div>
                <div className='flex flex-col items-center space-y-3 md:w-1/2'>
                    <div className='flex flex-row items-center justify-between space-x-3'>
                        <OfferCards imgsrc={gearFill} imgalt='gear icon' cardtitle='Secure systems' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor ' />
                        <OfferCards imgsrc={micFill} imgalt='microphone icon' cardtitle='Customer views' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor ' />
                    </div>
                    <div className='flex flex-row items-center justify-between space-x-3'>
                        <OfferCards imgsrc={personSquare} imgalt='person icon' cardtitle='Customer care' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor ' />
                        <OfferCards imgsrc={calenderEventFill} imgalt='Calender icon' cardtitle='Virtual events' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor ' />
                    </div>
                </div>
            </div>
        </section>
    )
};

export const EventSection = () => {
    return (
        <section className='bg-white'>
            <div className='container mx-auto flex flex-row items-center justify-between space-x-6 mt-16 mb-16 px-14'>
                <div className='md:w-1/2'>
                    <TitleComponent imgsrc={calenderEventFill} imgalt="calender icon" imgtitle="Events featured"/>
                    <div className='w-full flex flex-row space-x-3  mb-24 pt-8'>
                        <Button buttonName="Register" buttonStyle="hidden w-[130px] p-2 px-6 text-black bg-white font-semibold baseline ring-1 ring-navyBlue hover:text-white hover:bg-navyBlue md:block " />
                    </div>
                </div>
                <div className='md:w-1/2 items-center'>
                    <img className='rounded-md img-full' src={sideImageTwo} alt='Get-to-know-us png'/>
                </div>
            </div>
        </section>
    )
};

export const TestimonialSection = () => {
    return (
        <section className='bg-blueBackground'>
            <div className='container mx-auto flex flex-col items-center'>
                <div className='w-full text-center space-y-8  mt-28 mb-36'>
                    <div className='flex flex-col items-center px-14'>
                    <div className='flex flex-row items-center text-center space-x-3'>
                        <img className='icon-color' src={chatLeftDotsFill} alt='message icon' />
                        <p className='text-2xl font-bold text-navyBlue pb-1'>What are our customers saying?</p>
                    </div>
                        <div className='text-sm text-blackText text-center mt-6'>Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ad minim veniam, quis Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    <div className='flex flex-row items-center justify-between px-14'>
                        <TestimonialCard imgsrc={testimonialOne} imgalt='testimonial 1' cardtitle='John Doe' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum commodo consequat.' />
                        <TestimonialCard imgsrc={testimonialTwo} imgalt='testimonial 2' cardtitle='Grace Wanga' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum commodo consequat.' />
                        <TestimonialCard imgsrc={testimonialThree} imgalt='testimonial 3' cardtitle='Dante Bowen' cardtext='Lorem ipsum dolor sit amet,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea sed do eiusmod tempor. Ut enim ad minim veniam, quis nostrud exercitation reprehenderit in voluptate velit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum commodo consequat.' />
                    </div>
                </div>
            </div>
        </section>
       
    )
};

export const SubscribeSection = () => {
    return (
        <div className=''>
            <div className='bg-white container flex flex-row mx-auto shadow-lg items-center justify-between rounded-md px-14 py-4 mt-[-36px] m'>
                <p className='text-xl font-bold text-navyBlue pb-1'>Join us today and start your journey</p>
                <Button buttonName="Register" buttonStyle="hidden w-[130px] p-2 px-6 text-white bg-navyBlue font-semibold baseline hover:ring-1 hover:ring-navyBlue hover:text-black hover:bg-white md:block " />
            </div>
        </div>
        
    )
};

export const FooterSection = () => {
    return (
        <section className='bg-white pt-16 pb-6 mt-4'>
            <Footer />
        </section>
    )
}

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ExploreSection />
      <OfferSection />
      <EventSection />
      <TestimonialSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  )
}

export default Homepage
