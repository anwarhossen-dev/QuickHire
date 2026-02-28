'use client';

import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';
import JobFilter from './JobFilter';
import Loader from '@/components/common/Loader';
import { jobsAPI } from '@/services/api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    salary: '',
    searchQuery: '',
  });

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const data = await jobsAPI.getJobs();
        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = [...jobs];

    // Search filter
    if (currentFilters.searchQuery) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(currentFilters.searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(currentFilters.searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(currentFilters.searchQuery.toLowerCase())
      );
    }

    // Job type filter
    if (currentFilters.jobType) {
      filtered = filtered.filter((job) => job.type === currentFilters.jobType);
    }

    // Location filter
    if (currentFilters.location) {
      filtered = filtered.filter((job) => job.location === currentFilters.location);
    }

    // Salary filter
    if (currentFilters.salary) {
      filtered = filtered.filter((job) => {
        // Simple salary matching - in real app would be more sophisticated
        return job.salary.toLowerCase().includes(currentFilters.salary.split(' - ')[0].toLowerCase());
      });
    }

    setFilteredJobs(filtered);
  };

  const handleLike = (jobId) => {
    setJobs(jobs.map((job) => (job.id === jobId ? { ...job, liked: !job.liked } : job)));
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Find Your Dream Job</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <JobFilter onFilterChange={handleFilterChange} />
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            {filteredJobs.length > 0 ? (
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  Showing <span className="font-bold">{filteredJobs.length}</span> job{filteredJobs.length !== 1 ? 's' : ''}
                </p>
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} onLike={handleLike} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md border border-gray-200 p-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">
                  Try adjusting your filters to find more opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;