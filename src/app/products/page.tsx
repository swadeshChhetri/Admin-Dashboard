'use client'

import { motion } from 'framer-motion'
import { Search, Filter, Plus, MoreHorizontal } from 'lucide-react'
import { useState } from 'react'

// Example product data
const productsData = [
  {
    id: 1,
    name: 'T-Shirt',
    category: 'Men Cloths',
    price: 7.89,
    status: 'Scheduled',
    image: 'https://picsum.photos/seed/shirt/50/50',
  },
  {
    id: 2,
    name: 'Shirt',
    category: 'Men Cloths',
    price: 15.99,
    status: 'Active',
    image: 'https://picsum.photos/seed/shirt2/50/50',
  },
  {
    id: 3,
    name: 'Pant',
    category: 'Men Cloths',
    price: 26.67,
    status: 'Active',
    image: 'https://picsum.photos/seed/pant/50/50',
  },
  {
    id: 4,
    name: 'Sweater',
    category: 'Kids Cloths',
    price: 40.33,
    status: 'Active',
    image: 'https://picsum.photos/seed/sweater/50/50',
  },
  {
    id: 5,
    name: 'Jacket',
    category: 'Men Cloths',
    price: 46.87,
    status: 'Scheduled',
    image: 'https://picsum.photos/seed/jacket/50/50',
  },
  {
    id: 6,
    name: 'Sweater',
    category: 'Kids Cloths',
    price: 24.75,
    status: 'Active',
    image: 'https://picsum.photos/seed/sweater2/50/50',
  },
  {
    id: 7,
    name: 'Light Jacket',
    category: 'Men Cloths',
    price: 66.77,
    status: 'Scheduled',
    image: 'https://picsum.photos/seed/jacket2/50/50',
  },
  {
    id: 8,
    name: 'Half Shirt',
    category: 'Men Cloths',
    price: 12.45,
    status: 'Active',
    image: 'https://picsum.photos/seed/halfshirt/50/50',
  },
]

// const STATUSES = {
//   Active: 'bg-green-100 text-green-600',
//   Scheduled: 'bg-blue-100 text-blue-600',
//   Disabled: 'bg-gray-100 text-gray-600',
// }

export default function ProductsPage() {
  // For demonstration, we’ll do basic pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  // Filter product data for current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const pageItems = productsData.slice(startIndex, endIndex)

  // Calculate total pages
  const totalPages = Math.ceil(productsData.length / itemsPerPage)

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>

        {/* Right actions: Search, Filter, Add Product */}
        <div className="flex items-center space-x-2 mt-4 md:mt-0">
          <button className="inline-flex items-center px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <div className="relative">
            <span className="absolute top-2 left-3 text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-9 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Products list</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-2">#</th>
                <th className="py-2">Product Name</th>
                <th className="py-2">Category</th>
                <th className="py-2">Price</th>
                <th className="py-2">Status</th>
                <th className="py-2 text-right">Actions</th>
              </tr>
            </thead>
            {/* idx */}
            <tbody className="text-sm">
              {pageItems.map((product) => (
                <tr key={product.id} className="border-b last:border-0">
                  <td className="py-3">{product.id}</td>
                  <td className="py-3 flex items-center space-x-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded"
                    />
                    <span>{product.name}</span>
                  </td>
                  <td className="py-3">{product.category}</td>
                  <td className="py-3">${product.price.toFixed(2)}</td>
                  <td className="py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        product.status || 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <a
                      href="#"
                      className="text-blue-600 hover:underline mr-4"
                    >
                      Details
                    </a>
                    <button className="text-gray-600 hover:text-gray-800">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm rounded-md border ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          <span className="text-sm text-gray-500">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm rounded-md border ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </motion.div>
  )
}
