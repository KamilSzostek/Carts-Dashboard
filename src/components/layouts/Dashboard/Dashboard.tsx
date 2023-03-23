import React from 'react';
import CartsList from '../../carts/CartsList/CartsList';
import MainLayout from '../MainLayout/MainLayout';
import './Dashboard.scss';

const Dashboard: React.FunctionComponent = () => {
  return (
    <section className='dashboard'>
      <CartsList />
      <MainLayout />
    </section>
  );
};

export default Dashboard;
