import React from 'react';

const ProcurementVendor = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <nav aria-label="Breadcrumb" className="flex mb-1">
            <ol className="flex items-center space-x-2 text-xs">
              <li><a className="text-slate-500 hover:text-primary" href="#">Projects</a></li>
              <li><span className="text-slate-300">/</span></li>
              <li><a className="text-slate-500 hover:text-primary" href="#">HQ Expansion Ph.2</a></li>
              <li><span className="text-slate-300">/</span></li>
              <li><span className="text-primary font-medium">Procurement Intelligence</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Procurement & Vendor Intelligence</h1>
          <p className="text-sm text-slate-500 mt-1">Manage vendor quotes, analyze performance, and track procurement milestones.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center px-4 py-2 border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700">
            <span className="material-icons text-[18px] mr-2">download</span>
            Export Report
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg shadow-sm">
            <span className="material-icons text-[18px] mr-2">add</span>
            Create RFQ
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Spend (YTD)', value: '$2.4M', trend: '4.2% vs Budget', icon: 'payments', color: 'primary' },
          { label: 'Active RFQs', value: '12', trend: '3 Closing this week', icon: 'gavel', color: 'blue' },
          { label: 'Pending Approvals', value: '5', trend: 'Avg. wait: 2 days', icon: 'rule', color: 'amber' },
          { label: 'Avg Vendor Score', value: '92.4', trend: '1.2 pts increase', icon: 'stars', color: 'green' }
        ].map((kpi, i) => (
          <div key={i} className="bg-neutral-surface dark:bg-[#1a2634] rounded-lg p-5 shadow-card border border-neutral-border dark:border-slate-700 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{kpi.value}</h3>
              <div className={`flex items-center mt-2 text-xs font-medium ${kpi.color === 'green' || kpi.color === 'primary' ? 'text-green-600' : kpi.color === 'amber' ? 'text-amber-600' : 'text-slate-500'}`}>
                <span>{kpi.trend}</span>
              </div>
            </div>
            <div className={`p-2 rounded-lg bg-${kpi.color}-100 text-${kpi.color}-600 dark:bg-${kpi.color}-900/20 dark:text-${kpi.color}-400`}>
              <span className="material-icons">{kpi.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column: Vendor Comparison */}
        <div className="xl:col-span-2 bg-neutral-surface dark:bg-[#1a2634] rounded-lg shadow-card border border-neutral-border dark:border-slate-700 flex flex-col">
          <div className="p-5 border-b border-neutral-border dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Vendor Comparison: Executive Chairs</h2>
              <p className="text-sm text-slate-500 mt-1">RFQ #4092-B • Closing in 2 days</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <span className="material-icons absolute left-3 top-2 text-slate-400 text-[18px]">search</span>
                <input className="pl-10 pr-4 py-2 w-full sm:text-sm border-slate-300 dark:border-slate-700 dark:bg-slate-800 rounded-md" placeholder="Search vendors..." type="text" />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-border dark:divide-slate-700">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Vendor</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">Quote</th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">Lead Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-transparent divide-y divide-neutral-border dark:divide-slate-700">
                {[
                  { name: 'Herman Miller Inc.', type: 'Global Partner', score: 98, quote: '$45,200.00', lead: '4-6 Weeks', status: 'Shortlisted', color: 'primary' },
                  { name: 'Steelcase Office', type: 'Preferred Vendor', score: 92, quote: '$43,850.00', lead: '6-8 Weeks', status: 'Received', color: 'slate' },
                  { name: 'Haworth Solutions', type: 'Standard Vendor', score: 85, quote: '$41,200.00', lead: '10-12 Weeks', status: 'Under Review', color: 'slate' }
                ].map((vendor, i) => (
                  <tr key={i} className="hover:bg-primary/5 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                          {vendor.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{vendor.name}</div>
                          <div className="text-xs text-slate-500">{vendor.type}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        {vendor.score} / 100
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-slate-900 dark:text-white">{vendor.quote}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-slate-500">{vendor.lead}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        vendor.status === 'Shortlisted' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {vendor.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <span className="material-icons text-slate-400 hover:text-slate-600 cursor-pointer">more_vert</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Trackers */}
        <div className="space-y-8">
          <div className="bg-neutral-surface dark:bg-[#1a2634] rounded-lg shadow-card border border-neutral-border dark:border-slate-700 p-5">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">RFQ Pipeline</h3>
            <div className="space-y-6 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700 z-0"></div>
              {[
                { step: 'Sent', count: 4, desc: 'Awaiting vendor responses', icon: 'send', active: true },
                { step: 'Under Review', count: 2, desc: 'Analyzing technical specs', icon: 'manage_search', active: true, progress: 60 },
                { step: 'Awarded', count: 12, desc: 'Contract signed', icon: 'emoji_events', active: false }
              ].map((item, i) => (
                <div key={i} className={`relative z-10 flex items-start ${!item.active && 'opacity-60'}`}>
                  <div className={`h-12 w-12 rounded-full border-2 flex items-center justify-center flex-shrink-0 shadow-sm ${
                    item.step === 'Sent' ? 'bg-primary border-primary text-white' :
                    item.step === 'Under Review' ? 'bg-white dark:bg-slate-800 border-primary text-primary' :
                    'bg-white dark:bg-slate-800 border-slate-200 text-slate-400'
                  }`}>
                    <span className="material-icons text-[20px]">{item.icon}</span>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{item.step}</p>
                      <span className="text-xs font-semibold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">{item.count}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    {item.progress && (
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-2">
                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcurementVendor;
