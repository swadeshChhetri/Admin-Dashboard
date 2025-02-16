'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Mail, Phone, Plus } from 'lucide-react'
import { useState } from 'react'

interface Client {
  id: number
  name: string
  company: string
  email: string
  status: 'Active' | 'Inactive' | 'Pending' | 'Disabled'
}

const initialClients: Client[] = [
  {
    id: 1,
    name: 'Garrett Winters',
    company: 'Price Savers',
    email: 'garrett@winters.com',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Ashton Cox',
    company: 'Lovit Furniture',
    email: 'ashton@cox.com',
    status: 'Inactive',
  },
  {
    id: 3,
    name: 'Airi Satou',
    company: 'The Wiz',
    email: 'airi@wiz.com',
    status: 'Pending',
  },
  {
    id: 4,
    name: 'Brielle Williamson',
    company: 'Price Savers',
    email: 'brielle@williamson.com',
    status: 'Disabled',
  },
  {
    id: 5,
    name: 'Angelica Ramos',
    company: 'Team Head',
    email: 'angelica@ramos.com',
    status: 'Active',
  },
  {
    id: 6,
    name: 'Jena Gaines',
    company: 'Mitch&Hall',
    email: 'jena@gaines.com',
    status: 'Active',
  },
  {
    id: 7,
    name: 'Bradley Greer',
    company: 'Fitzpatrick',
    email: 'bradley@greer.com',
    status: 'Pending',
  },
  {
    id: 8,
    name: 'Quinn Flynn',
    company: 'Bartlett Sores',
    email: 'quinn@flynn.com',
    status: 'Active',
  },
]

const statusColors: Record<Client['status'], string> = {
  Active: 'bg-green-100 text-green-700',
  Inactive: 'bg-gray-100 text-gray-700',
  Pending: 'bg-yellow-100 text-yellow-700',
  Disabled: 'bg-red-100 text-red-700',
}

export default function ClientsPage() {
  const [clients] = useState<Client[]>(initialClients)

  // For the example, we’ll show “Angelica Ramos” on the detail panel:
  const [selectedClient] = useState({
    id: 5,
    name: 'Angelica Ramos',
    role: 'Team Head',
    avatar: 'https://randomuser.me/api/portraits/women/11.jpg',
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
      massa neque, sagittis ac, tristique in, aliquam eget, ipsum.`,
  })

  const activityFeed = [
    {
      id: 1,
      type: 'Sign up',
      detail: 'Client created account',
      time: '3 hours ago',
    },
    {
      id: 2,
      type: 'Email verified',
      detail: 'Verified email address',
      time: '1 day ago',
    },
    {
      id: 3,
      type: 'Profile updated',
      detail: 'Updated name and phone number',
      time: '2 days ago',
    },
    {
      id: 4,
      type: 'Payment added',
      detail: 'Added credit card for subscription',
      time: '3 days ago',
    },
  ]

  return (
    <motion.div
      className="w-full space-y-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h1 className="text-2xl font-bold mb-2 sm:mb-0">Clients</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Client
        </button>
      </div>

      {/* Main content: Clients table & Detail panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Clients List (table) */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-4">Clients</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm text-left">
              <thead className="border-b text-gray-600">
                <tr>
                  <th className="py-2 pr-4">Name</th>
                  <th className="py-2 pr-4">Company</th>
                  <th className="py-2 pr-4">Email</th>
                  <th className="py-2">Status</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b last:border-0">
                    <td className="py-3 pr-4 font-medium text-gray-800">
                      {client.name}
                    </td>
                    <td className="py-3 pr-4">{client.company}</td>
                    <td className="py-3 pr-4">{client.email}</td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-semibold ${
                          statusColors[client.status]
                        }`}
                      >
                        {client.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <a href="#" className="text-blue-600 hover:underline">
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Client Detail Panel */}
        <div className="bg-white rounded-lg shadow p-4">
          {/* Top: Avatar & Basic Info */}
          <div className="flex items-center space-x-4">
            <img
              src={selectedClient.avatar}
              alt={selectedClient.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold">{selectedClient.name}</h3>
              <p className="text-sm text-gray-500">{selectedClient.role}</p>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-4 text-sm text-gray-600 leading-relaxed">
            {selectedClient.bio}
          </div>

          {/* Contact Info */}
          <div className="mt-4 space-y-2">
            <p className="flex items-center text-sm text-gray-500">
              <Mail className="w-4 h-4 mr-2 text-gray-400" />
              {selectedClient.name.toLowerCase().replace(/\s/g, '')}@example.com
            </p>
            <p className="flex items-center text-sm text-gray-500">
              <Phone className="w-4 h-4 mr-2 text-gray-400" />
              +1 (555) 123-4567
            </p>
          </div>

          {/* Activity Feed */}
          <h4 className="mt-6 font-semibold text-gray-700">Recent Activity</h4>
          <ul className="mt-2 space-y-3 text-sm">
            {activityFeed.map((item) => (
              <li key={item.id} className="flex items-start space-x-2">
                <div className="mt-1">
                  <BadgeCheck className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{item.type}</p>
                  <p className="text-gray-500">{item.detail}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
