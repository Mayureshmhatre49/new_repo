import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Good morning, Alex.</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here's the latest pulse on your interior planning portfolio.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
            Export Report
          </button>
          <button className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-all shadow-sm shadow-primary/25 flex items-center gap-2">
            <span className="material-icons-outlined text-[18px]">add</span>
            New Project
          </button>
        </div>
      </div>

      {/* Top Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Card 1 */}
        <div className="bg-neutral-surface dark:bg-[#1a2634] p-6 rounded-2xl border border-neutral-border dark:border-slate-700 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Portfolio Value</span>
            <span className="p-1.5 bg-green-50 dark:bg-green-900/20 rounded-md text-green-600 dark:text-green-400">
              <span className="material-icons-outlined text-[18px]">trending_up</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">$142.8M</span>
            <span className="text-xs font-medium text-green-600">+12.5%</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Vs. previous quarter</p>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-neutral-surface dark:bg-[#1a2634] p-6 rounded-2xl border border-neutral-border dark:border-slate-700 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Projects</span>
            <span className="p-1.5 bg-primary/10 rounded-md text-primary">
              <span className="material-icons-outlined text-[18px]">apartment</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">24</span>
            <span className="text-sm font-medium text-slate-500 ml-1">Projects</span>
          </div>
          <div className="flex mt-3 gap-1">
            <div className="h-1.5 flex-1 rounded-full bg-green-500"></div>
            <div className="h-1.5 w-1/4 rounded-full bg-yellow-400"></div>
            <div className="h-1.5 w-1/6 rounded-full bg-red-500"></div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>16 On Track</span>
            <span>4 Risk</span>
          </div>
        </div>

        {/* AI Insight Card */}
        <div className="bg-gradient-to-br from-primary/5 to-white dark:to-[#1a2634] dark:from-primary/10 p-6 rounded-2xl border border-primary/20 shadow-soft relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-icons-outlined text-6xl text-primary">auto_awesome</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-icons-outlined text-primary text-lg animate-pulse">auto_awesome</span>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">HSI AI Intelligence</span>
          </div>
          <div className="flex items-start justify-between mt-4">
            <div>
              <span className="text-sm font-medium text-slate-500 dark:text-slate-400 block mb-1">Portfolio Health Score</span>
              <span className="text-4xl font-bold text-slate-900 dark:text-white">88<span className="text-lg text-slate-400 font-normal">/100</span></span>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-slate-100 dark:border-slate-700 border-t-primary border-r-primary flex items-center justify-center transform -rotate-45">
              <span className="material-icons text-green-500 transform rotate-45">check_circle</span>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed bg-white/50 dark:bg-black/20 p-2 rounded-lg backdrop-blur-sm">
            Procurement efficiency is up <strong>8%</strong>. Suggested action: Review vendor contracts for the "Skyline Plaza" project to mitigate potential Q4 delays.
          </p>
        </div>
      </div>

      {/* Main Data Visualization Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Budget vs Actuals */}
        <div className="lg:col-span-2 bg-neutral-surface dark:bg-[#1a2634] p-6 rounded-2xl border border-neutral-border dark:border-slate-700 shadow-card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Financial Overview</h3>
              <p className="text-sm text-slate-500">Budget vs. Actual Spend (YTD)</p>
            </div>
            <button className="text-sm text-primary font-medium hover:underline">View Details</button>
          </div>
          <div className="space-y-6">
            <div className="group">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700 dark:text-slate-200">Construction & Fit-out</span>
                <span className="text-slate-500">$4.2M / <span className="text-slate-800 dark:text-slate-300 font-semibold">$5.0M</span></span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden relative">
                <div className="h-full bg-primary w-[84%] rounded-full relative group-hover:bg-blue-600 transition-all duration-500"></div>
                <div className="absolute top-0 bottom-0 w-[2px] bg-slate-400 dark:bg-slate-500 left-[75%]" title="Projected Baseline"></div>
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700 dark:text-slate-200">FF&E Procurement</span>
                <span className="text-slate-500">$1.8M / <span className="text-slate-800 dark:text-slate-300 font-semibold">$2.1M</span></span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden relative">
                <div className="h-full bg-primary w-[65%] rounded-full relative group-hover:bg-blue-600 transition-all duration-500"></div>
                <div className="absolute top-0 bottom-0 w-[2px] bg-slate-400 dark:bg-slate-500 left-[60%]" title="Projected Baseline"></div>
              </div>
            </div>
            <div className="group">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-slate-700 dark:text-slate-200">Design & Consultancy</span>
                <span className="text-slate-500">$850K / <span className="text-slate-800 dark:text-slate-300 font-semibold">$900K</span></span>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden relative">
                <div className="h-full bg-red-500 w-[94%] rounded-full relative group-hover:bg-red-600 transition-all duration-500"></div>
              </div>
              <p className="text-xs text-red-500 mt-1 font-medium flex items-center gap-1">
                <span className="material-icons-outlined text-[12px]">warning</span> Approaching cap
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Monthly Burn Rate</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white">$845k <span className="text-sm font-normal text-slate-400">/ mo</span></span>
            </div>
            <div className="h-12 w-32">
              <svg className="w-full h-full text-primary fill-primary/10 stroke-primary" preserveAspectRatio="none" viewBox="0 0 100 40">
                <path d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 18 L90 5 L100 10 V 40 H 0 Z" strokeWidth="0"></path>
                <path d="M0 35 L10 32 L20 36 L30 25 L40 28 L50 20 L60 22 L70 15 L80 18 L90 5 L100 10" fill="none" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Risk Meter */}
        <div className="bg-neutral-surface dark:bg-[#1a2634] p-6 rounded-2xl border border-neutral-border dark:border-slate-700 shadow-card flex flex-col">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Delay Risk Meter</h3>
          <p className="text-sm text-slate-500 mb-6">Aggregated schedule variance</p>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="relative w-48 h-24 overflow-hidden mb-4">
              <div className="w-48 h-48 rounded-full bg-slate-100 dark:bg-slate-700 border-[16px] border-slate-100 dark:border-slate-800 box-border"></div>
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full border-[16px] border-transparent border-t-green-500 border-r-yellow-400 border-l-transparent border-b-transparent transform rotate-[-45deg] opacity-80"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-24 bg-slate-800 dark:bg-white origin-bottom transform rotate-[-20deg] rounded-full shadow-lg z-10 transition-transform duration-1000 ease-out"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-slate-900 dark:bg-white rounded-full z-20"></div>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">Medium Risk</span>
              <p className="text-xs text-slate-500 mt-3 px-4 text-center">
                Supply chain disruptions in APAC region affecting 2 major procurements.
              </p>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
              <span className="material-icons-outlined text-red-500">warning</span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-red-700 dark:text-red-400">Critical: HVDC Cabling</p>
                <p className="text-[10px] text-red-600/80">2 weeks behind schedule</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Projects Table */}
      <div className="bg-neutral-surface dark:bg-[#1a2634] rounded-2xl border border-neutral-border dark:border-slate-700 shadow-card overflow-hidden">
        <div className="p-6 border-b border-neutral-border dark:border-slate-700 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Priority Projects</h3>
          <div className="flex gap-2">
            <button className="p-1.5 text-slate-400 hover:text-primary rounded hover:bg-slate-50 transition-colors">
              <span className="material-icons-outlined">filter_list</span>
            </button>
            <button className="p-1.5 text-slate-400 hover:text-primary rounded hover:bg-slate-50 transition-colors">
              <span className="material-icons-outlined">more_horiz</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4">Project Name</th>
                <th className="px-6 py-4">Manager</th>
                <th className="px-6 py-4">Progress</th>
                <th className="px-6 py-4">Budget Utilization</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
              {[
                { name: 'Tower 42 Interior', location: 'London, UK', manager: 'Sarah Jenkins', progress: 75, budget: '$2.4M / $3.0M', status: 'On Track', statusColor: 'green', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArc3agxcj_x1fMfxDDgt8MvSruLkOYakYuufONXlFZmIimwBWDj7bH3djajHGYirIcDB1FBkITpCNrAJoDNDcDz868k3psN4x-IEzAkuTjxKlgOMVMl7vvOlLVyRqAv-7vXORoxDlkS7HqfK3hBMuPWzcBUnd5reDvXVVKhPGgBJYlw7VKQhAcugHMWPm64unVxsPGTmuM5wyXGoleomAOXEb48nMptlk0n70yqxxHvaEkeD7eUlriw4faLJ7tNnirf0xoAH8v2uef' },
                { name: 'HQ Lobby Redesign', location: 'New York, USA', manager: 'Michael Chen', progress: 45, budget: '$850K / $1.2M', status: 'Delay Risk', statusColor: 'yellow', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAW4N4-qUIzJJ7KqZbTzOhLOWBPMbdmtq3KVMe_Zureb4WNZZKJqEU0CyUrl2N0uqDA05H08ft4kWpbIa5cOkXSMEBs2XRxpNzNO4CQ5x9DX0kWiSDk9lwNb3yeOull6sQ8lyqo9dPFlS_rLoUmff4PKlEkMAYkW_AU_4PrXBE8SI2t7hCoIWRrGHiGIRZZQaygrfY9FCG4U3GuXZZCjPzgqlHNMdRQRm6JoU2vxlEuDEO_cpEJdwKo9Q7lAGA0z7ZafazecMUAGUvV' },
                { name: 'Berlin Tech Hub', location: 'Berlin, DE', manager: 'Emma Davis', progress: 15, budget: '$200K / $4.5M', status: 'Planning', statusColor: 'slate', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoGPW9rAg8xRSdW75s4gY1oipwx0LVJTDWNJRNFyRK6NQMwZJgRTzH4UInyO92y2pFcbtEQAc7ySoS17iRqr0PUjzdL3B1uBcXDCM9fi_6uDtBD0QIKWNa_IPgos5o0F0P9vClHfpbGjQVKYW6dPQnyMvRrx4d5RcVC7SaOyuZ_zCSPckXRtfEbBhnaymwQp5rBc7EVzhMQRazg6QGXQgVZsOiZEHm4FxKDYa09ELplCqeUObfFRTXkHXbzXKl7ie8qvF7f_loc22j' }
              ].map((project) => (
                <tr key={project.name} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-200 dark:bg-slate-600 overflow-hidden">
                        <img alt={project.name} className="w-full h-full object-cover" src={project.img} />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">{project.name}</p>
                        <p className="text-xs text-slate-500">{project.location}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{project.manager}</td>
                  <td className="px-6 py-4 w-48">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${project.statusColor === 'yellow' ? 'bg-yellow-400' : project.statusColor === 'red' ? 'bg-red-500' : 'bg-primary'} rounded-full`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-slate-600">{project.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{project.budget}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      project.statusColor === 'green' ? 'bg-green-50 text-green-600 border-green-200 dark:bg-green-900/20 dark:border-green-800 dark:text-green-400' :
                      project.statusColor === 'yellow' ? 'bg-yellow-50 text-yellow-600 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-400' :
                      'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400'
                    }`}>
                      {project.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">chevron_right</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 mb-6 text-center text-xs text-slate-400">
        <p>© 2023 HSI Smart Execution System™. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Dashboard;
