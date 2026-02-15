import React from 'react';

const PortfolioView = () => {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
            <span>Portfolio</span>
            <span className="material-icons-outlined text-[14px]">chevron_right</span>
            <span>Global Operations</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Portfolio Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time risk assessment across 24 active interior execution sites.</p>
        </div>
        <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-1.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center px-3 py-1.5 border-r border-slate-200 dark:border-slate-600 gap-2 cursor-pointer hover:bg-slate-50">
            <span className="material-icons-outlined text-slate-400 text-[18px]">calendar_today</span>
            <span className="text-sm font-medium">Q3 2024</span>
            <span className="material-icons-outlined text-slate-400 text-[16px]">expand_more</span>
          </div>
          <button className="bg-primary text-white text-sm font-medium px-4 py-2 rounded shadow-sm">Export Report</button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Projects', value: '24', sub: '+12% YoY', icon: 'apartment', color: 'blue' },
          { label: 'Total CapEx Deployed', value: '$145.2M', sub: 'On Target', icon: 'payments', color: 'green' },
          { label: 'Budget at Risk', value: '$4.2M', sub: 'across 3 sites', icon: 'warning_amber', color: 'amber' },
          { label: 'Avg Schedule Variance', value: 'Delayed', sub: '-2.4 Days', icon: 'schedule', color: 'indigo' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-card">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg bg-${kpi.color === 'indigo' ? 'indigo' : kpi.color === 'blue' ? 'blue' : kpi.color === 'amber' ? 'amber' : 'emerald'}-50 dark:bg-opacity-10 text-${kpi.color === 'blue' ? 'primary' : kpi.color}-600`}>
                <span className="material-icons-outlined">{kpi.icon}</span>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-50 dark:bg-slate-700">{kpi.sub}</span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{kpi.label}</h3>
            <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{kpi.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Risk Heatmap */}
        <div className="xl:col-span-1 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-card flex flex-col h-[500px]">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Risk Heatmap</h2>
              <p className="text-xs text-slate-500">Schedule vs. Budget Variance</p>
            </div>
          </div>
          <div className="relative flex-1 p-6 flex flex-col">
            <div className="flex-1 bg-slate-50 dark:bg-slate-900/50 rounded border border-slate-200 dark:border-slate-700 relative overflow-hidden">
               {/* Simplified Heatmap Grid */}
               <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                 <div className="bg-red-50/50 dark:bg-red-900/10 border-r border-b border-dashed border-red-200"></div>
                 <div className="bg-amber-50/30 dark:bg-amber-900/5 border-b border-dashed border-amber-200"></div>
                 <div className="bg-amber-50/30 dark:bg-amber-900/5 border-r border-dashed border-amber-200"></div>
                 <div className="bg-emerald-50/30 dark:bg-emerald-900/5"></div>
               </div>
               {/* Data Points */}
               <div className="absolute top-[20%] left-[20%] w-4 h-4 rounded-full bg-red-500 shadow-lg border-2 border-white ring-2 ring-red-500/20"></div>
               <div className="absolute top-[40%] left-[45%] w-4 h-4 rounded-full bg-amber-500 shadow-lg border-2 border-white"></div>
               <div className="absolute top-[70%] left-[80%] w-4 h-4 rounded-full bg-green-500 shadow-lg border-2 border-white"></div>
            </div>
            <div className="text-center mt-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Schedule Variance</div>
          </div>
        </div>

        {/* Benchmarking Table */}
        <div className="xl:col-span-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-card overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Project Benchmarks</h2>
            <div className="flex items-center gap-2">
              <input className="px-3 py-1.5 text-xs border border-slate-200 dark:border-slate-700 rounded dark:bg-slate-900" placeholder="Filter..." type="text" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-xs text-slate-500 uppercase font-semibold">
                <tr>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4">Region</th>
                  <th className="py-3 px-4 text-right">Budget Util.</th>
                  <th className="py-3 px-4 text-right">Schedule</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
                {[
                  { name: 'Project Alpha', region: 'New York, USA', budget: '112%', schedule: '85%', status: 'Critical', color: 'red' },
                  { name: 'Tokyo Retail Hub', region: 'Tokyo, JPN', budget: '45%', schedule: '48%', status: 'Healthy', color: 'emerald' },
                  { name: 'Berlin R&D Lab', region: 'Berlin, DE', budget: '92%', schedule: '90%', status: 'At Risk', color: 'amber' }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-4 font-medium text-slate-900 dark:text-white">{row.name}</td>
                    <td className="py-4 px-4 text-slate-500">{row.region}</td>
                    <td className="py-4 px-4 text-right">
                      <div className="font-semibold text-slate-900 dark:text-white">{row.budget}</div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full mt-1">
                        <div className={`h-full rounded-full ${row.color === 'red' ? 'bg-red-500' : row.color === 'amber' ? 'bg-amber-500' : 'bg-primary'}`} style={{ width: row.budget }}></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="font-semibold text-slate-900 dark:text-white">{row.schedule}</div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full mt-1">
                        <div className={`h-full rounded-full ${row.color === 'red' ? 'bg-red-500' : row.color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: row.schedule }}></div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        row.color === 'red' ? 'bg-red-100 text-red-700' : row.color === 'amber' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioView;
