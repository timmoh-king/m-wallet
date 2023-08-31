import React from 'react';
import Logo from '../components/Logo'
import Button from '../components/Button';
import AdminCards from '../components/AdminCards';
import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";
import GoalCard from '../components/GoalCard';

export const AdminNav = () => {
    const { logout } = useContext(UserAuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout;
        navigate('/')
    }

    return (
        <div className='w-full shadow-lg'>
            <div className='bg-white container flex flex-row mx-auto justify-between py-3 px-6'>
                <div className='mt-1'>
                    <Logo />
                </div>
                <div className='flex flex-row space-x-3'>
                    <Button buttonName="My goals" buttonStyle="hidden w-[130px] p-2 px-6 text-white bg-navyBlue font-semibold baseline hover:ring-1 hover:ring-navyBlue hover:text-black hover:bg-white md:block " />
                    <Button to='/' buttonName="Log out" onClick={handleLogout} buttonStyle="hidden w-[130px] p-2 px-6 text-white bg-navyBlue font-semibold baseline hover:ring-1 hover:ring-navyBlue hover:text-black hover:bg-white md:block " />
                </div>
            </div>
        </div>
    )
}

export const NewGoalCards = () => {
    return (
        <div className='container mx-auto flex flex-row px-6 mt-4 space-x-4'>
            <AdminCards imgsrc='https://th.bing.com/th/id/OIP.JTisQJsahAv588u8Uc-6dgHaEK?w=326&h=183&c=7&r=0&o=5&pid=1.7' imgalt='vacation' cardtitle='Vacation' cardtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
            <AdminCards imgsrc='https://th.bing.com/th/id/OIP.wALz0aaNBv8_dVhBlvpfyQHaE8?w=251&h=180&c=7&r=0&o=5&pid=1.7' imgalt='vacation' cardtitle='Vacation' cardtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
            <AdminCards imgsrc='https://th.bing.com/th/id/OIP.eqQ7OE5ZU9t15EyJNrZcBwHaE7?w=225&h=180&c=7&r=0&o=5&pid=1.7' imgalt='vacation' cardtitle='Vacation' cardtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
            <AdminCards imgsrc='https://th.bing.com/th/id/OIP.sHRReg7bPHn7IcXvrcxrxQHaET?w=317&h=183&c=7&r=0&o=5&pid=1.7' imgalt='vacation' cardtitle='Vacation' cardtext='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' />
        </div>
    )
};

export const MyGoals = () => {
    return (
        <div className='container mx-auto flex flex-row px-6 mt-4 space-x-4'>
            <GoalCard goaltitle='Field Trip' date='29/03/2024' targetAmt='17678' savedAmt='8765' />
            <GoalCard goaltitle='Field Trip' date='29/03/2024' targetAmt='17678' savedAmt='8765' />
            <GoalCard goaltitle='Field Trip' date='29/03/2024' targetAmt='17678' savedAmt='8765' />
            <GoalCard goaltitle='Field Trip' date='29/03/2024' targetAmt='17678' savedAmt='8765' />
        </div>
    )
}

const Dashboard = () => {
    const { currentUser } = useContext(UserAuthContext);
    return (
        <>
        {
        currentUser ?
            <div className='flex flex-col items-center'>
                <AdminNav />
                <NewGoalCards />
                <MyGoals />
            </div>
            :
            <></>
        }
        </>
    )
}

export default Dashboard
