'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  contactNo: string;
  address: string;
  createdAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('adminAuthenticated');
    if (isAdmin === 'true') {
      setIsAuthenticated(true);
      fetchVolunteers();
    } else {
      router.push('/admin/login');
    }

    const handleFocus = () => {
      if (sessionStorage.getItem('adminAuthenticated') === 'true') {
        fetchVolunteers();
      }
    };
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [router]);

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/volunteers');
      if (!res.ok) throw new Error('Failed to fetch volunteers');
      const data = await res.json();
      setVolunteers(data);
      setError('');
    } catch {
      setError('Something went wrong while fetching volunteers.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    router.push('/admin/login');
  };

  if (!isAuthenticated) return null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-gray-600">Loading volunteers...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
              ← Back to Home
            </Link>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-1">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage volunteer registrations</p>
          </div>
          <div className="text-left sm:text-right">
            <div className="text-xl font-bold text-blue-600">{volunteers.length}</div>
            <div className="text-sm text-gray-500">Total Volunteers</div>
            <button
              onClick={handleLogout}
              className="mt-2 text-sm text-red-600 hover:text-red-800"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {volunteers.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2a5 5 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No volunteers yet</h3>
            <p className="text-gray-500 mb-4">When volunteers register, they will appear here.</p>
            <Link
              href="/register"
              className="inline-flex px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium"
            >
              View Registration Form
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-auto">
            <div className="min-w-[600px] w-full">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Volunteer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Contact
                    </th>
                    <th className="hidden sm:table-cell px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Address
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Registered
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {volunteers.map((v) => (
                    <tr key={v._id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="font-medium text-gray-900">{v.name}</div>
                        <div className="text-sm text-gray-500">{v.email}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">{v.contactNo}</td>
                      <td className="hidden sm:table-cell px-4 py-4 text-sm text-gray-900 truncate max-w-xs" title={v.address}>
                        {v.address}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500">{formatDate(v.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium text-center"
          >
            Add New Volunteer
          </Link>
          <button
            onClick={fetchVolunteers}
            className="px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-md text-sm font-medium text-center"
          >
            Refresh List
          </button>
        </div>
      </main>
    </div>
  );
}
