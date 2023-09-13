import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import  { useState, useEffect, useMemo } from 'react';
import { useContext } from "react";
import { UserAuthContext } from "../context/UserAuthContextProvider";
import { useNavigate } from "react-router-dom";
import Logo from '../components/Logo';
import Button from '../components/Button';
import AdminCards from '../components/AdminCards';
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
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const getGoals = async () => {
            try {
                const response = await axios.get("http://localhost:3005/api/goals/");
                setGoals(response.data);
            } catch (error) {
                console.log(error.response.data.error);
            }
        };

        getGoals();
    }, []);

    return (
        <div className='container mx-auto flex flex-row px-6 mt-4 space-x-4'>
            {goals.map((goal) => (
                <div key={uuidv4()}>
                    <AdminCards
                        goalId={goal.id}
                        imgsrc={goal.url}
                        cardtitle={goal.title}
                        cardtext={goal.description}
                    />
                </div>
            ))}
        </div>
    )
};

export const MyGoals = () => {
    const [wallets, setWallets] = useState([]);
    const userJSONString = localStorage.getItem('user');
    const userObject = JSON.parse(userJSONString);
    const token = userObject.token;
    const config = useMemo(() => {
        return {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
    }, [token]);

    useEffect(() => {
        const getWallets = async () => {
            try {
                const response = await axios.get("http://localhost:3005/api/get_wallets/", config);
                setWallets(response.data);
            } catch (error) {
                console.log(error.response.data.error);
            }
        };

        getWallets();
    }, [config]);

    return (
        <div className='container mx-auto flex flex-row px-6 mt-4 space-x-4'>
            {wallets.map((wallet) => (
                <div key={uuidv4()}>
                    <GoalCard
                        walletId={wallet.id}
                        goaltitle={wallet.title}
                        date={wallet.duedate}
                        targetAmt={wallet.targetamount}
                        savedAmt={wallet.savedamount}
                    />
                </div>
            ))}
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
                <div className='flex flex-row items-center justify-between overflow-y-auto'>
                    <MyGoals />
                </div>  
            </div>
            :
            <></>
        }
        </>
    )
}

export default Dashboard
