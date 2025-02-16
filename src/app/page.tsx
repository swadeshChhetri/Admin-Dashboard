// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { toast } from 'sonner'
import { ShoppingCart, Package, DollarSign } from 'lucide-react'

const lineChartData = [
  { name: 'Jan', uv: 400, pv: 2400 },
  { name: 'Feb', uv: 300, pv: 1398 },
  { name: 'Mar', uv: 200, pv: 9800 },
  { name: 'Apr', uv: 278, pv: 3908 },
  { name: 'May', uv: 189, pv: 4800 },
  { name: 'Jun', uv: 239, pv: 3800 },
]

const barChartData = [
  { name: 'Mon', orders: 40 },
  { name: 'Tue', orders: 32 },
  { name: 'Wed', orders: 47 },
  { name: 'Thu', orders: 20 },
  { name: 'Fri', orders: 34 },
  { name: 'Sat', orders: 45 },
  { name: 'Sun', orders: 38 },
]

const topSellingProducts = [
  { name: 'Apple AirPods Pro', sales: 1200 },
  { name: 'Sony WH-1000XM4', sales: 950 },
  { name: 'Apple MacBook Air', sales: 730 },
  { name: 'Samsung Galaxy S21', sales: 680 },
]

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Top stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="p-3 bg-blue-100 text-blue-600 rounded-md">
            <DollarSign className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Sales</p>
            <p className="text-xl font-semibold">$58,728.35</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="p-3 bg-green-100 text-green-600 rounded-md">
            <ShoppingCart className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Orders</p>
            <p className="text-xl font-semibold">34,906</p>
          </div>
        </motion.div>

        <motion.div 
          className="bg-white rounded-lg shadow p-4 flex items-center space-x-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="p-3 bg-orange-100 text-orange-600 rounded-md">
            <Package className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="text-xl font-semibold">$45,624.92</p>
          </div>
        </motion.div>
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line chart */}
        <div className="bg-white rounded-lg shadow p-4 col-span-2">
          <h2 className="text-lg font-semibold mb-4">Orders Over Time</h2>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar chart */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Weekly Orders</h2>
          <div className="w-full h-64">
            <ResponsiveContainer>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Table and notification demo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Top Selling Products</h2>
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-2">Product</th>
                <th className="py-2">Sales</th>
              </tr>
            </thead>
            <tbody>
              {topSellingProducts.map((product) => (
                <tr key={product.name} className="border-b last:border-b-0">
                  <td className="py-2">{product.name}</td>
                  <td className="py-2">{product.sales}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sonner notification button */}
        <div className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
          <button
            onClick={() => toast.success('This is a Sonner notification!')}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Show Notification
          </button>
        </div>
      </div>
    </div>
  )
}


