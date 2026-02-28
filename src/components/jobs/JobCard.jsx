import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Briefcase, Heart, Share2, Clock } from 'lucide-react';
import Button from '@/components/common/Button';

const JobCard = ({ job, onLike }) => {
  const [liked, setLiked] = useState(job?.liked || false);

  const handleLike = () => {
    setLiked(!liked);
    if (onLike) onLike(job.id);
  };

  if (!job) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            <Link href={`/jobs/${job.id}`} className="hover:text-blue-600">
              {job.title}
            </Link>
          </h3>
          <p className="text-gray-600 font-medium">{job.company}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleLike}
            className={`p-2 rounded-lg transition-colors ${
              liked ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            title="Like job"
          >
            <Heart size={20} fill={liked ? 'currentColor' : 'none'} />
          </button>
          <button
            className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            title="Share job"
          >
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <MapPin size={16} className="mr-2" />
          {job.location}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Briefcase size={16} className="mr-2" />
          {job.type}
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <Clock size={16} className="mr-2" />
          Posted: {new Date(job.postedDate).toLocaleDateString()}
        </div>
      </div>

      {/* Salary */}
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-lg font-bold text-blue-600">{job.salary}</p>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements?.slice(0, 3).map((req, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            {req}
          </span>
        ))}
        {job.requirements?.length > 3 && (
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
            +{job.requirements.length - 3} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <Link href={`/jobs/${job.id}`} className="block">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          View Details & Apply
        </Button>
      </Link>
    </div>
  );
};

export default JobCard;