import React, { useState, useEffect } from 'react';
import { ExternalLink, GitBranch, Code2, Star, AlertCircle } from 'lucide-react';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/GayanGC/repos?sort=updated');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        if (!Array.isArray(data)) {
          throw new Error(data.message || 'Invalid data returned from GitHub API');
        }

        // Prioritize featured repositories
        const featuredKeywords = ['Bakery-Management', 'Property-Sales'];
        
        const featured = [];
        const others = [];
        
        data.forEach(repo => {
          const isFeatured = featuredKeywords.some(keyword => 
            repo?.name?.toLowerCase().includes(keyword.toLowerCase())
          );
          if (isFeatured) {
            featured.push({ ...repo, isFeatured: true });
          } else {
            others.push({ ...repo, isFeatured: false });
          }
        });
        
        setRepos([...featured, ...others].slice(0, 9)); // Limit to 9 to keep grid clean
        setLoading(false);
      } catch (err) {
        console.error('Error fetching from GitHub API:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatRepoName = (name) => {
    if (!name) return 'Untitled Project';
    return name.replace(/-/g, ' ').replace(/_/g, ' ');
  };

  const safeRepos = Array.isArray(repos) ? repos : [];

  return (
    <section id="portfolio" className="py-24 relative bg-slate-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Our Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-cyan-glow text-glow">Footprint</span>
            </h2>
            <p className="text-xl text-gray-400 font-light flex items-center">
              <GitBranch className="mr-2 h-5 w-5" /> Live from GitHub
            </p>
          </div>
          <a href="https://github.com/GayanGC" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-electric-blue hover:text-cyan-glow font-medium mt-4 md:mt-0 transition-colors">
            View GitHub Profile <GitBranch className="ml-2 h-5 w-5" />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((skeleton) => (
              <div key={skeleton} className="bg-slate-grey/40 backdrop-blur-md rounded-xl border border-gray-800 p-6 h-64 animate-pulse flex flex-col">
                <div className="h-10 w-10 bg-gray-800 rounded-lg mb-6"></div>
                <div className="h-6 w-3/4 bg-gray-800 rounded mb-4"></div>
                <div className="h-4 w-full bg-gray-800 rounded mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-800 rounded mb-8"></div>
                <div className="flex gap-2 mt-auto">
                  <div className="h-6 w-16 bg-gray-800 rounded-full"></div>
                  <div className="h-6 w-12 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-charcoal/50 rounded-2xl border border-gray-800 p-12 text-center max-w-2xl mx-auto backdrop-blur-md">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold text-white mb-2">Oops! Couldn't load repositories</h3>
            <p className="text-gray-400 mb-8">We might have hit the GitHub API rate limit or experienced a network issue. Don't worry, you can still view all projects directly on GitHub.</p>
            <a 
              href="https://github.com/GayanGC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg font-bold text-charcoal bg-electric-blue hover:bg-cyan-glow transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)] transform hover:-translate-y-0.5"
            >
              <GitBranch className="mr-2 h-5 w-5" /> View on GitHub
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safeRepos.map((repo) => (
              <div 
                key={repo?.id || Math.random()}
                className="bg-slate-grey/40 backdrop-blur-md rounded-xl border border-gray-800 p-6 flex flex-col h-full hover:border-cyan-glow hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
              >
                {repo?.isFeatured && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-electric-blue text-charcoal text-[10px] font-extrabold px-3 py-1 rounded-bl-lg tracking-wider uppercase shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                      Featured Project
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-5 pt-2">
                  <div className="p-3 bg-charcoal rounded-lg text-electric-blue group-hover:bg-electric-blue/10 transition-colors border border-gray-700">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <a 
                    href={repo?.html_url || "https://github.com/GayanGC"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-cyan-glow bg-charcoal rounded-full border border-gray-700 hover:border-cyan-glow transition-all"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-glow transition-colors capitalize">
                  {formatRepoName(repo?.name)}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                  {repo?.description || 'No description available for this repository.'}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800/50">
                  <div className="flex items-center space-x-4">
                    {repo?.language && (
                      <span className="flex items-center text-xs font-medium text-gray-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-electric-blue mr-2 shadow-[0_0_5px_rgba(0,240,255,0.5)]"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center text-xs font-medium text-gray-400">
                      <Star className="w-3.5 h-3.5 mr-1 text-yellow-500" />
                      {repo?.stargazers_count || 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 md:hidden text-center">
          <a href="https://github.com/GayanGC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-electric-blue hover:text-cyan-glow font-medium transition-colors">
            View GitHub Profile <GitBranch className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
