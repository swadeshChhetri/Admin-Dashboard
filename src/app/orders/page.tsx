'use client'

import { motion } from 'framer-motion'
import { CalendarDays, ChevronDown, CheckCircle2, Clock4 } from 'lucide-react'
import { useState } from 'react'

const ordersData = [
  {
    id: '#12345',
    date: '19-10-2020',
    productName: 'Decorative Box',
    price: '120 USD',
    status: 'Delivered',
  },
  {
    id: '#12346',
    date: '18-10-2020',
    productName: 'Camera Film',
    price: '156 USD',
    status: 'Pending',
  },
  {
    id: '#12347',
    date: '16-10-2020',
    productName: 'Visual Icon',
    price: '80 USD',
    status: 'Delivered',
  },
  {
    id: '#12348',
    date: '15-10-2020',
    productName: 'Photography Tripod',
    price: '190 USD',
    status: 'Booked',
  },
  {
    id: '#12349',
    date: '14-10-2020',
    productName: 'Decorative Box',
    price: '105 USD',
    status: 'Delivered',
  },
]

const tabs = [
  { label: 'All Orders', value: 'all' },
  { label: 'Pending Orders', value: 'pending' },
  { label: 'Delivered Orders', value: 'delivered' },
  { label: 'Booked Orders', value: 'booked' },
]

export default function OrdersPage() {
  // For tabs
  const [activeTab, setActiveTab] = useState<string>('all')

  // Filter data based on activeTab
  const filteredOrders = ordersData.filter((order) => {
    if (activeTab === 'all') return true
    if (activeTab === 'pending') return order.status === 'Pending'
    if (activeTab === 'delivered') return order.status === 'Delivered'
    if (activeTab === 'booked') return order.status === 'Booked'
  })

  return (
    <div className="w-full space-y-6">
      {/* Top header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-400">October 19, 2021</p>
          <h1 className="text-2xl font-bold">
            Orders <span role="img" aria-label="love">😍</span>
          </h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
            Daily
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition">
            Monthly
          </button>
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="p-4 bg-white rounded-lg shadow flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">New Orders</p>
            <span className="text-xs text-blue-500 flex items-center">
              Impression: 20%
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">245</p>
        </motion.div>

        <motion.div
          className="p-4 bg-white rounded-lg shadow flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">Pending Orders</p>
            <span className="text-xs text-blue-500 flex items-center">
              Impression: 5%
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">123</p>
        </motion.div>

        <motion.div
          className="p-4 bg-white rounded-lg shadow flex flex-col"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600 font-medium">Delivered Orders</p>
            <span className="text-xs text-blue-500 flex items-center">
              Impression: 10%
            </span>
          </div>
          <p className="text-2xl font-bold mt-2">100</p>
        </motion.div>
      </div>

      {/* Tabs */}
      <div className="mt-4 bg-white rounded-lg shadow p-4">
        <div className="flex items-center space-x-6 border-b border-gray-100 pb-2 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`text-sm font-semibold pb-1 border-b-2 ${
                activeTab === tab.value
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500'
              } hover:text-blue-600 hover:border-blue-600 transition`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="text-gray-500 border-b text-sm">
                <th className="py-2">Order ID</th>
                <th className="py-2">Date</th>
                <th className="py-2">Product Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-0 text-sm">
                  <td className="py-3">{order.id}</td>
                  <td className="py-3">{order.date}</td>
                  <td className="py-3">{order.productName}</td>
                  <td className="py-3">{order.price}</td>
                  <td className="py-3">
                    <StatusBadge status={order.status} />
                  </td>
                </tr>
              ))}
              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-4 text-gray-500 italic"
                  >
                    No orders found for this status
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

/**
 * Renders a colored badge for the given status.
 */
function StatusBadge({ status }: { status: string }) {
  let colorClass = 'bg-gray-100 text-gray-700'
  if (status === 'Delivered') {
    colorClass = 'bg-green-100 text-green-600'
  } else if (status === 'Pending') {
    colorClass = 'bg-yellow-100 text-yellow-600'
  } else if (status === 'Booked') {
    colorClass = 'bg-blue-100 text-blue-600'
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${colorClass}`}
    >
      {status}
    </span>
  )
}
