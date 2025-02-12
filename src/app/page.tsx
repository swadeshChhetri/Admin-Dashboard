'use client';

import { motion } from 'framer-motion';
import { Menu, User, LayoutDashboard, Package, ShoppingCart, Users, Settings } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        transition={{ duration: 0.3 }}
        className='bg-base-200  w-48 p-4 fixed h-full shadow-lg  z-50 transition-all duration-300'>
        <ul className="flex flex-col gap-4 mt-32">
          <li><Link href="/dashboard" className="btn btn-ghost flex items-center gap-2"><LayoutDashboard size={20} /> Dashboard</Link></li>
          <li><Link href="/products" className="btn btn-ghost flex items-center gap-2"><Package size={20} /> Products</Link></li>
          <li><Link href="/orders" className="btn btn-ghost flex items-center gap-2"><ShoppingCart size={20} /> Orders</Link></li>
          <li><Link href="/customers" className="btn btn-ghost flex items-center gap-2"><Users size={20} /> Customers</Link></li>
          <li><Link href="/settings" className="btn btn-ghost flex items-center gap-2"><Settings size={20} /> Settings</Link></li>
        </ul>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-48">
        {/* Navbar */}
        <nav className="bg-base-200 shadow-md p-4 flex justify-between items-center">
          {/* Sidebar Toggle Button */}
          <button className="lg:hidden">
            <Menu size={24} />
          </button>

          {/* Logo / Brand Name */}
          <Link href="/" className="text-xl font-bold text-primary">
            Admin Dashboard
          </Link>

          {/* Mobile Menu Button */}
          {/* <button className="lg:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button> */}

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`absolute lg:relative top-16 right-4 lg:top-0 lg:right-0 bg-base-100 lg:bg-transparent shadow-lg lg:shadow-none p-4 rounded-lg lg:flex lg:items-center`}>
            <ul className="flex flex-col lg:flex-row gap-4">
              <li><Link href="/dashboard" className="btn btn-ghost">Dashboard</Link></li>
              <li><Link href="/products" className="btn btn-ghost">Products</Link></li>
              <li><Link href="/orders" className="btn btn-ghost">Orders</Link></li>
              <li><Link href="/customers" className="btn btn-ghost">Customers</Link></li>
              <li><Link href="/settings" className="btn btn-ghost">Settings</Link></li>
            </ul>
          </motion.div>

          {/* Profile Icon */}
          <Link href="/profile" className="hidden lg:block btn btn-circle btn-outline">
            <User size={20} />
          </Link>
        </nav>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Your main dashboard content will go here */}
          <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

