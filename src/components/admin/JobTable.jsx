'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Loader from '@/components/common/Loader';
import { Edit2, Trash2, Eye, Plus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { jobsAPI } from '@/services/api';

const JobTable = () => {
  const { token } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const data = await jobsAPI.getJobs();
      setJobs(data);
      setError('');
    } catch (err) {
      setError('Failed to load jobs');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (jobId) => {
    try {
      await jobsAPI.deleteJob(jobId, token);
      setJobs(jobs.filter(job => job.id !== jobId));
      setDeleteConfirm(null);
    } catch (err) {
      setError('Failed to delete job');
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Job Listings</h2>
        <Link href="/admin/jobs/new">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
            <Plus size={20} />
            Create Job
          </Button>
        </Link>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      {jobs.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Job Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Company</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Location</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Salary</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Posted</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{job.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.company}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{job.location}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      {job.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{job.salary}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(job.postedDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Link href={`/jobs/${job.id}`}>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="View">
                          <Eye size={18} />
                        </button>
                      </Link>
                      <Link href={`/admin/jobs/${job.id}/edit`}>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                          <Edit2 size={18} />
                        </button>
                      </Link>
                      <button
                        onClick={() => setDeleteConfirm(job.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs posted yet</h3>
          <p className="text-gray-600 mb-4">Create your first job posting to get started</p>
          <Link href="/admin/jobs/new">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Create First Job</Button>
          </Link>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Delete Job</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this job? This action cannot be undone.</p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => setDeleteConfirm(null)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobTable;