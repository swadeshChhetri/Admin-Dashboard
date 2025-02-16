// app/layout.tsx
import '../styles/globals.css';
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EcomMaster Dashboard',
  description: 'EcomMaster Dashboard built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {/* Sonner Toaster for notifications */}
        <Toaster position="top-right" />
        
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r p-6 hidden md:block">
            <h1 className="text-2xl font-bold mb-8">EcomMaster</h1>
            <nav>
              <ul className="space-y-4">
                <li className="text-gray-700 font-semibold">Dashboard</li>
                <li className="text-gray-600 hover:text-gray-800">Products</li>
                <li className="text-gray-600 hover:text-gray-800">Orders</li>
                <li className="text-gray-600 hover:text-gray-800">Reports</li>
                <li className="text-gray-600 hover:text-gray-800">Statistics</li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
