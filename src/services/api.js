// Mock API Service - Replace with actual backend endpoints

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

// ============ JOB MANAGEMENT ============

export const jobsAPI = {
  // Get all jobs with filters
  getJobs: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters);
      const response = await fetch(`${API_BASE_URL}/jobs?${params}`);
      if (!response.ok) throw new Error('Failed to fetch jobs');
      return await response.json();
    } catch (error) {
      console.error('Error fetching jobs:', error);
      // Mock data for development
      return getMockJobs();
    }
  },

  // Get single job by ID
  getJobById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${id}`);
      if (!response.ok) throw new Error('Failed to fetch job');
      return await response.json();
    } catch (error) {
      console.error('Error fetching job:', error);
      return getMockJobs().find(job => job.id === id);
    }
  },

  // Create job (admin)
  createJob: async (jobData, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });
      if (!response.ok) throw new Error('Failed to create job');
      return await response.json();
    } catch (error) {
      console.error('Error creating job:', error);
      throw error;
    }
  },

  // Update job (admin)
  updateJob: async (id, jobData, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(jobData),
      });
      if (!response.ok) throw new Error('Failed to update job');
      return await response.json();
    } catch (error) {
      console.error('Error updating job:', error);
      throw error;
    }
  },

  // Delete job (admin)
  deleteJob: async (id, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to delete job');
      return await response.json();
    } catch (error) {
      console.error('Error deleting job:', error);
      throw error;
    }
  },
};

// ============ AUTHENTICATION ============

export const authAPI = {
  // User registration
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Signup failed');
      return await response.json();
    } catch (error) {
      console.error('Error during signup:', error);
      throw error;
    }
  },

  // User login
  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error('Login failed');
      const data = await response.json();
      // Store token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  },

  // User logout
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // Get auth token
  getToken: () => {
    return localStorage.getItem('token');
  },
};

// ============ JOB APPLICATIONS ============

export const applicationsAPI = {
  // Submit job application
  applyForJob: async (jobId, applicationData, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/jobs/${jobId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(applicationData),
      });
      if (!response.ok) throw new Error('Application failed');
      return await response.json();
    } catch (error) {
      console.error('Error submitting application:', error);
      throw error;
    }
  },

  // Get user applications
  getUserApplications: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/applications/my-applications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch applications');
      return await response.json();
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error;
    }
  },
};

// ============ MOCK DATA ============

function getMockJobs() {
  return [
    {
      id: 1,
      title: 'UI Designer',
      company: 'TechCorp',
      location: 'Florence, Italy',
      salary: '$80,000 - $120,000',
      type: 'Full-time',
      description: 'We are looking for an experienced UI Designer to join our team.',
      requirements: ['Figma', 'Adobe XD', 'CSS', 'React'],
      postedDate: '2025-02-25',
      liked: false,
    },
    {
      id: 2,
      title: 'UX Researcher',
      company: 'DesignStudio',
      location: 'Berlin, Germany',
      salary: '$75,000 - $110,000',
      type: 'Full-time',
      description: 'Join our research team to understand user behavior and improve products.',
      requirements: ['User Research', 'Analytics', 'Figma', 'Communication'],
      postedDate: '2025-02-23',
      liked: false,
    },
    {
      id: 3,
      title: 'Android Developer',
      company: 'MobileFirst',
      location: 'Remote',
      salary: '$90,000 - $140,000',
      type: 'Full-time',
      description: 'Develop mobile applications for millions of users worldwide.',
      requirements: ['Kotlin', 'Java', 'Android Studio', 'Git'],
      postedDate: '2025-02-20',
      liked: false,
    },
    {
      id: 4,
      title: 'Admin Assistant',
      company: 'StartupHub',
      location: 'London, UK',
      salary: '$40,000 - $60,000',
      type: 'Full-time',
      description: 'Support our growing team with administrative and coordination tasks.',
      requirements: ['Organization', 'Excel', 'Communication', 'Time Management'],
      postedDate: '2025-02-18',
      liked: false,
    },
  ];
}
