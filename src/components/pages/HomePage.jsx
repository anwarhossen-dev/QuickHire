import { SEED_JOBS, TYPE_COLORS } from '@/data/jobs';
import { MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import PostJobBanner from '../jobs/Postjobbanner';
import CompanyLogos from '../common/Companylogos';

function MiniJobCard({ job, onClick }) {
  const tc = TYPE_COLORS[job.type] || TYPE_COLORS["Full Time"];
  
  return (
    <div 
      onClick={onClick} 
      style={{ 
        background: "#fff", 
        borderRadius: 16, 
        padding: 24, 
        border: "1px solid #f1f5f9", 
        cursor: "pointer", 
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)", 
        transition: "all 0.3s ease",
        position: "relative"
      }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = "translateY(-4px)"; 
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(61,78,246,0.15)"; 
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = "translateY(0)"; 
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"; 
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ 
          width: 48, 
          height: 48, 
          borderRadius: 12, 
          background: job.bgColor, 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          fontSize: 24,
          color: "#fff"
        }}>
          {job.logo}
        </div>
        <span style={{ 
          backgroundColor: tc.bg, 
          color: tc.text, 
          fontSize: 11, 
          fontWeight: 600, 
          padding: "4px 8px", 
          borderRadius: 6, 
          textTransform: "capitalize" 
        }}>
          {job.type}
        </span>
      </div>
      
      <h3 style={{ 
        fontWeight: 700, 
        fontSize: 16, 
        color: "#1a1d3b", 
        marginBottom: 4,
        lineHeight: 1.3
      }}>
        {job.title}
      </h3>
      
      <p style={{ 
        fontSize: 14, 
        color: "#6b7280", 
        marginBottom: 16 
      }}>
        {job.company}
      </p>
      
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 16, 
        fontSize: 13, 
        color: "#9ca3af",
        marginBottom: 16
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
          📍 {job.location}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
          ⏰ {job.type}
        </span>
      </div>
      
      {job.salary && (
        <div style={{ 
          fontSize: 15, 
          fontWeight: 700, 
          color: "#3d4ef6", 
          marginBottom: 12 
        }}>
          {job.salary}
        </div>
      )}
      
      {(job.tags || []).length > 0 && (
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: 6,
          marginTop: 12
        }}>
          {job.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              style={{ 
                fontSize: 11, 
                fontWeight: 500, 
                padding: "4px 8px", 
                borderRadius: 12, 
                background: "#f8fafc", 
                color: "#64748b",
                border: "1px solid #e2e8f0"
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function HomePage({ setPage, setSelectedJob }) {
  return (
    <div style={{ background: "#fafbfc" }}>
      {/* Hero Section */}
      
      <section className="relative overflow-hidden bg-[#f4f5fa] min-h-[85vh] flex flex-col justify-center">
      {/* Geometric background lines */}
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
        <svg className="absolute right-0 top-0 h-full w-full opacity-25" viewBox="0 0 600 700" fill="none">
          <rect x="80"  y="60"  width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="120" y="100" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="160" y="140" width="300" height="200" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="40"  y="300" width="250" height="180" rx="4" stroke="#c7caef" strokeWidth="1.5" />
          <rect x="80"  y="340" width="250" height="180" rx="4" stroke="#c7caef" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#1a1d3b] leading-[1.08] tracking-tight" style={{ fontFamily: "'DM Sans','Poppins',sans-serif" }}>
              Discover
              <br />more than
              <br />
              <span className="relative inline-block">
                <span className="text-[#3d6ef6]">5000+ Jobs</span>
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 380 12" fill="none">
                  <path d="M3 8 C55 3,130 11,190 6 C250 1,320 10,377 5" stroke="#3d6ef6" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-sm sm:text-base text-gray-500 max-w-sm leading-relaxed">
              Great platform for the job seeker that searching for new career heights and passionate about startups.
            </p>

            {/* Search box */}
            <div className="mt-7 max-w-xl">
              <div className="flex flex-col sm:flex-row items-stretch bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                <div className="relative flex-1 border-r border-gray-100">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input type="text" placeholder="Job title or keyword" className="w-full pl-10 pr-4 py-3.5 focus:outline-none text-gray-800 placeholder-gray-400 text-sm bg-transparent" />
                </div>
                <div className="relative sm:min-w-[160px] border-r border-gray-100">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <select defaultValue="Florence, Italy" className="w-full pl-10 pr-5 py-3.5 bg-white focus:outline-none text-gray-700 text-sm appearance-none cursor-pointer">
                    <option>Remote / Anywhere</option>
                    <option>Berlin, Germany</option>
                    <option>London, UK</option>
                    <option>New York, USA</option>
                    <option>Florence, Italy</option>
                    <option>San Francisco, USA</option>
                  </select>
                  <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <button className="bg-[#3d4ef6] hover:bg-[#2d3ee0] text-white px-6 py-3.5 font-semibold text-sm transition-colors whitespace-nowrap">
                  Search my job
                </button>
              </div>

              <p className="mt-3.5 text-xs text-gray-500">
                <span className="font-medium text-gray-600">Popular :</span>{" "}
                {["UI Designer", "UX Researcher", "Android", "Admin"].map((tag, i, arr) => (
                  <span key={tag}>
                    <span className="hover:text-[#3d6ef6] cursor-pointer transition-colors">{tag}</span>
                    {i < arr.length - 1 && <span className="text-gray-300 mx-1">,</span>}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:flex justify-end items-end relative h-[480px] mt-30">
            <Image src="/images/hero.png" alt="Job seeker" width={480} height={480} className="object-contain object-bottom absolute bottom-0 right-0 drop-shadow-xl" priority />
          </div>
        </div>
      </div>
    </section>


      {/* Company Logos */}
      {/* <section style={{ 
        background: "#fff", 
        padding: "40px 24px",
        borderBottom: "1px solid #f1f5f9"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
          <p style={{ 
            fontSize: 14, 
            color: "#9ca3af", 
            marginBottom: 32,
            fontWeight: 500
          }}>
            Trusted by leading companies
          </p>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center",
            opacity: 0.6,
            flexWrap: "wrap",
            gap: 40
          }}>
            {["Google", "Microsoft", "Apple", "Netflix", "Spotify"].map(company => (
              <div key={company} style={{ 
                fontSize: 18, 
                fontWeight: 600, 
                color: "#6b7280" 
              }}>
                {company}
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <CompanyLogos/>


      {/* Explore by Category */}
      <section style={{ background: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: 48 
          }}>
            <h2 style={{ 
              fontSize: 32, 
              fontWeight: 800, 
              color: "#1a1d3b" 
            }}>
              Explore by <span style={{ color: "#3d4ef6" }}>category</span>
            </h2>
            <button 
              onClick={() => setPage("jobs")} 
              style={{ 
                fontSize: 14, 
                fontWeight: 600, 
                color: "#3d4ef6", 
                background: "none", 
                border: "none", 
                cursor: "pointer" 
              }}
            >
              Show all jobs →
            </button>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: 24 
          }}>
            {[
              { icon: "🎨", title: "Design", count: "235 jobs available", color: "#f59e0b" },
              { icon: "📱", title: "Sales", count: "756 jobs available", color: "#10b981" },
              { icon: "📊", title: "Marketing", count: "140 jobs available", color: "#3d4ef6" },
              { icon: "💰", title: "Finance", count: "325 jobs available", color: "#8b5cf6" },
              { icon: "💻", title: "Technology", count: "436 jobs available", color: "#06b6d4" },
              { icon: "⚙️", title: "Engineering", count: "542 jobs available", color: "#ef4444" },
              { icon: "📈", title: "Business", count: "211 jobs available", color: "#f97316" },
              { icon: "👥", title: "Human Resource", count: "168 jobs available", color: "#84cc16" }
            ].map(({ icon, title, count, color }) => (
              <div 
                key={title}
                onClick={() => setPage("jobs")}
                style={{ 
                  background: "#fff", 
                  borderRadius: 16, 
                  padding: 24, 
                  border: "1px solid #f1f5f9", 
                  cursor: "pointer", 
                  transition: "all 0.3s ease",
                  textAlign: "center"
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.transform = "translateY(-4px)"; 
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"; 
                  e.currentTarget.style.borderColor = color;
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.transform = "translateY(0)"; 
                  e.currentTarget.style.boxShadow = "none"; 
                  e.currentTarget.style.borderColor = "#f1f5f9";
                }}
              >
                <div style={{ 
                  width: 56, 
                  height: 56, 
                  borderRadius: 16, 
                  background: color + "20", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: 24,
                  margin: "0 auto 16px"
                }}>
                  {icon}
                </div>
                <h3 style={{ 
                  fontSize: 16, 
                  fontWeight: 700, 
                  color: "#1a1d3b", 
                  marginBottom: 8 
                }}>
                  {title}
                </h3>
                <p style={{ 
                  fontSize: 13, 
                  color: "#9ca3af" 
                }}>
                  {count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Start Posting Jobs Banner */}
      {/* <section style={{ 
        background: "linear-gradient(135deg, #3d4ef6 0%, #6366f1 100%)", 
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-20%",
          width: "600px",
          height: "600px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          filter: "blur(60px)"
        }} />
        
        <div style={{ 
          maxWidth: 1200, 
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 60,
          position: "relative"
        }}>
          <div>
            <h2 style={{ 
              fontSize: 40, 
              fontWeight: 800, 
              color: "#fff", 
              marginBottom: 16,
              lineHeight: 1.2
            }}>
              Start posting jobs today
            </h2>
            <p style={{ 
              color: "rgba(255,255,255,0.9)", 
              fontSize: 18, 
              marginBottom: 32,
              lineHeight: 1.6
            }}>
              Start posting jobs for only $10.
            </p>
            <button 
              onClick={() => setPage("admin")}
              style={{ 
                background: "#fff", 
                color: "#3d4ef6", 
                border: "none", 
                padding: "16px 32px", 
                borderRadius: 12, 
                fontWeight: 700, 
                fontSize: 16, 
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = "translateY(0)"}
            >
              Sign Up Today
            </button>
          </div>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "center" 
          }}>
            <div style={{
              width: 320,
              height: 240,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              backdropFilter: "blur(10px)"
            }}>
              📊
            </div>
          </div>
        </div>
      </section> */}
      <PostJobBanner/>

      {/* Featured Jobs */}
      <section style={{ padding: "80px 24px", background: "#fafbfc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: 48 
          }}>
            <h2 style={{ 
              fontSize: 32, 
              fontWeight: 800, 
              color: "#1a1d3b" 
            }}>
              Featured <span style={{ color: "#3d4ef6" }}>jobs</span>
            </h2>
            <button 
              onClick={() => setPage("jobs")} 
              style={{ 
                fontSize: 14, 
                fontWeight: 600, 
                color: "#3d4ef6", 
                background: "none", 
                border: "none", 
                cursor: "pointer" 
              }}
            >
              Show all jobs →
            </button>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(2, 1fr)", 
            gap: 24 
          }}>
            {SEED_JOBS.slice(0, 8).map(job => (
              <MiniJobCard 
                key={job.id} 
                job={job} 
                onClick={() => { 
                  setSelectedJob(job); 
                  setPage("detail"); 
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Jobs */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "space-between", 
            marginBottom: 48 
          }}>
            <h2 style={{ 
              fontSize: 32, 
              fontWeight: 800, 
              color: "#1a1d3b" 
            }}>
              Latest <span style={{ color: "#3d4ef6" }}>jobs open</span>
            </h2>
            <button 
              onClick={() => setPage("jobs")} 
              style={{ 
                fontSize: 14, 
                fontWeight: 600, 
                color: "#3d4ef6", 
                background: "none", 
                border: "none", 
                cursor: "pointer" 
              }}
            >
              Show all jobs →
            </button>
          </div>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(2, 1fr)", 
            gap: 16 
          }}>
            {SEED_JOBS.slice(4, 12).map(job => (
              <div 
                key={job.id}
                onClick={() => { 
                  setSelectedJob(job); 
                  setPage("detail"); 
                }}
                style={{ 
                  background: "#fff", 
                  borderRadius: 12, 
                  padding: 20, 
                  border: "1px solid #f1f5f9", 
                  cursor: "pointer", 
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: 16
                }}
                onMouseEnter={e => { 
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; 
                }}
                onMouseLeave={e => { 
                  e.currentTarget.style.boxShadow = "none"; 
                }}
              >
                <div style={{ 
                  width: 48, 
                  height: 48, 
                  borderRadius: 12, 
                  background: job.bgColor, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: 20,
                  color: "#fff",
                  flexShrink: 0
                }}>
                  {job.logo}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: 16, 
                    fontWeight: 700, 
                    color: "#1a1d3b", 
                    marginBottom: 4 
                  }}>
                    {job.title}
                  </h3>
                  <p style={{ 
                    fontSize: 14, 
                    color: "#6b7280", 
                    marginBottom: 8 
                  }}>
                    {job.company}
                  </p>
                  <div style={{ 
                    display: "flex", 
                    gap: 16, 
                    fontSize: 12, 
                    color: "#9ca3af" 
                  }}>
                    <span>📍 {job.location}</span>
                    <span>💼 {job.type}</span>
                  </div>
                </div>
                
                <div style={{ textAlign: "right" }}>
                  {job.salary && (
                    <div style={{ 
                      fontSize: 14, 
                      fontWeight: 700, 
                      color: "#3d4ef6", 
                      marginBottom: 4 
                    }}>
                      {job.salary}
                    </div>
                  )}
                  <div style={{ 
                    fontSize: 12, 
                    color: "#9ca3af" 
                  }}>
                    {job.postedAt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}