import React from 'react';

const ProjectDetail = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">HQ Renovation - Tower A</h1>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full border border-emerald-200 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              On Track
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <span className="material-icons text-base">calendar_today</span>
              <span>Start: Jan 15, 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-icons text-base">person</span>
              <span>Lead: <span className="font-medium text-slate-700 dark:text-slate-200">James Wilson</span></span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
            <span className="material-icons text-base">download</span>
            Export
          </button>
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center gap-2">
            <span className="material-icons text-base">edit</span>
            Edit Project
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-[#1a2634] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Real-Time Construction Progress</h2>
                <p className="text-xs text-slate-500">BIM Digital Twin • Live Sync: 12 min ago</p>
              </div>
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-lg border border-slate-100 dark:border-slate-700">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Project Complete</span>
                <span className="text-lg font-bold text-primary">68%</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 h-[450px]">
              <div className="lg:col-span-3 bg-slate-100 dark:bg-slate-900 relative group overflow-hidden border-r border-slate-200 dark:border-slate-700">
                {/* 3D Model Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center opacity-40">
                    <span className="material-symbols-outlined text-6xl text-slate-400 mb-2">3d_rotation</span>
                    <p className="text-sm font-medium">Interactive BIM Model</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 bg-primary/10 border-2 border-primary/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                     <div className="w-32 h-40 bg-primary/20 rounded shadow-inner relative overflow-hidden">
                        <div className="absolute bottom-0 w-full h-[68%] bg-primary/40 border-t border-primary"></div>
                     </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 bg-white dark:bg-transparent flex flex-col h-full overflow-hidden p-4 space-y-5">
                <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">Zone Breakdown</h3>
                {[
                  { name: 'Lobby & Reception', prog: 92, color: 'emerald', status: 'Finishing touches' },
                  { name: 'Office Floor (Lvl 2)', prog: 75, color: 'primary', status: 'Installing partitions' },
                  { name: 'Conf. Rooms (Lvl 3)', prog: 45, color: 'amber', status: 'HVAC ongoing' },
                  { name: 'Executive Suites', prog: 15, color: 'slate', status: 'Framing started' }
                ].map((zone, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${zone.color === 'emerald' ? 'bg-emerald-500' : zone.color === 'amber' ? 'bg-amber-500' : zone.color === 'primary' ? 'bg-primary' : 'bg-slate-400'}`}></span>
                        <span className="text-sm font-semibold">{zone.name}</span>
                      </div>
                      <span className="text-xs font-bold">{zone.prog}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                      <div className={`h-1.5 rounded-full ${zone.color === 'emerald' ? 'bg-emerald-500' : zone.color === 'amber' ? 'bg-amber-500' : zone.color === 'primary' ? 'bg-primary' : 'bg-slate-400'}`} style={{ width: `${zone.prog}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-[#1a2634] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide mb-4">Latest Updates</h3>
            <div className="space-y-4">
              {[
                { user: 'James W.', action: 'approved the updated BOQ', time: '2h ago', icon: 'description', color: 'blue' },
                { user: 'Site Bot', action: 'New issue: Delayed shipment', time: 'Yesterday', icon: 'warning', color: 'amber' },
                { user: 'Finance', action: 'Payment released to Vendor ABC', time: 'Oct 23', icon: 'paid', color: 'green' }
              ].map((upd, i) => (
                <div key={i} className="flex gap-3 text-sm">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-${upd.color === 'blue' ? 'blue' : upd.color === 'amber' ? 'amber' : 'green'}-100 text-${upd.color === 'blue' ? 'blue' : upd.color === 'amber' ? 'amber' : 'green'}-600`}>
                    <span className="material-icons text-sm">{upd.icon}</span>
                  </div>
                  <div>
                    <p><span className="font-semibold">{upd.user}</span> {upd.action}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{upd.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-[#1a2634] p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-48 relative">
             <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span className="material-icons text-slate-400 text-4xl">map</span>
             </div>
             <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur p-2 rounded shadow flex items-center gap-2">
                <span className="material-icons text-red-500 text-sm">place</span>
                <span className="text-xs font-semibold">Austin, TX - 201 Congress Ave</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
