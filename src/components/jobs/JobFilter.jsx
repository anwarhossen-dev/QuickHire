'use client';

import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { ChevronDown } from 'lucide-react';

const JobFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    jobType: '',
    location: '',
    salary: '',
    searchQuery: '',
  });

  const [expandedFilters, setExpandedFilters] = useState({
    type: true,
    location: true,
    salary: true,
  });

  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];
  const locations = ['Remote', 'Florence, Italy', 'Berlin, Germany', 'London, UK', 'New York, USA'];
  const salaryRanges = [
    '$0 - $40,000',
    '$40,000 - $80,000',
    '$80,000 - $120,000',
    '$120,000 - $160,000',
    '$160,000+',
  ];

  const handleChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const handleReset = () => {
    const emptyFilters = {
      jobType: '',
      location: '',
      salary: '',
      searchQuery: '',
    };
    setFilters(emptyFilters);
    if (onFilterChange) onFilterChange(emptyFilters);
  };

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <button
          onClick={handleReset}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Reset
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          value={filters.searchQuery}
          onChange={(e) => handleChange('searchQuery', e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-900"
        />
      </div>

      {/* Job Type Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleFilter('type')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Job Type</h3>
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform ${
              expandedFilters.type ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedFilters.type && (
          <div className="space-y-2">
            {jobTypes.map((type) => (
              <label key={type} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="jobType"
                  value={type}
                  checked={filters.jobType === type}
                  onChange={(e) => handleChange('jobType', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700 text-sm">{type}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Location Filter */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => toggleFilter('location')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Location</h3>
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform ${
              expandedFilters.location ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedFilters.location && (
          <div className="space-y-2">
            {locations.map((location) => (
              <label key={location} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="location"
                  value={location}
                  checked={filters.location === location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700 text-sm">{location}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Salary Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleFilter('salary')}
          className="flex items-center justify-between w-full mb-3"
        >
          <h3 className="font-semibold text-gray-900">Salary Range</h3>
          <ChevronDown
            size={20}
            className={`text-gray-600 transition-transform ${
              expandedFilters.salary ? 'rotate-180' : ''
            }`}
          />
        </button>
        {expandedFilters.salary && (
          <div className="space-y-2">
            {salaryRanges.map((range) => (
              <label key={range} className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="salary"
                  value={range}
                  checked={filters.salary === range}
                  onChange={(e) => handleChange('salary', e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="ml-2 text-gray-700 text-sm">{range}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobFilter;