import React from 'react';

const ExecutionTimeline = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-120px)] -m-8 overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="flex-1 flex overflow-hidden p-4 gap-4">
        {/* Main Timeline Card */}
        <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="h-14 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white text-sm font-medium rounded-lg shadow-sm">
                <span className="material-icons text-sm">add</span> Add Task
              </button>
              <div className="h-4 w-px bg-slate-300"></div>
              <div className="text-sm font-medium">Weekly View</div>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-500"></span> Done</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-yellow-500"></span> Risk</div>
              <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500"></span> Delayed</div>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            {/* Task List Sidebar */}
            <div className="w-64 shrink-0 border-r border-slate-200 dark:border-slate-700 overflow-y-auto">
              <div className="sticky top-0 bg-slate-50 dark:bg-slate-800 z-10 border-b border-slate-200 dark:border-slate-700 h-10 flex items-center px-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Task Name
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {['Demolition', 'Site Clearance', 'Partition Removal', 'MEP Rough-in', 'HVAC Ducting', 'Electrical Conduit'].map((task, i) => (
                  <div key={i} className="h-10 flex items-center px-4 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer">
                    {task}
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Grid */}
            <div className="flex-1 overflow-x-auto relative bg-white dark:bg-[#1a2632]">
               <div className="h-10 bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex min-w-max sticky top-0 z-10">
                  {['Oct 16-22', 'Oct 23-29', 'Oct 30-Nov 5', 'Nov 6-12', 'Nov 13-19'].map((week, i) => (
                    <div key={i} className={`w-32 border-r border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 ${i === 1 ? 'bg-primary/5 text-primary' : ''}`}>
                      {week}
                    </div>
                  ))}
               </div>
               <div className="min-w-max relative p-2 space-y-4">
                  <div className="absolute top-0 bottom-0 left-[160px] w-px bg-red-500 z-10"><div className="bg-red-500 text-white text-[8px] px-1 rounded absolute -top-1 -translate-x-1/2">Today</div></div>

                  {/* Mock Bars */}
                  <div className="h-6 w-24 bg-green-500 rounded-md ml-4 flex items-center justify-center text-[10px] text-white font-bold">DONE</div>
                  <div className="h-6 w-32 bg-primary rounded-md ml-20 flex items-center justify-center text-[10px] text-white font-bold">75%</div>
                  <div className="h-6 w-40 bg-yellow-400 rounded-md ml-40 flex items-center justify-center text-[10px] text-yellow-900 font-bold">RISK</div>
               </div>
            </div>
          </div>
        </div>

        {/* Live Snapshot Sidebar */}
        <aside className="w-80 flex flex-col gap-4">
          <div className="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center gap-2">
              <span className="material-icons text-primary text-lg animate-pulse">camera_alt</span>
              <span className="font-bold text-sm">Live Snapshot</span>
            </div>
            <div className="p-4 flex-1 space-y-4 overflow-y-auto">
              <div className="rounded-lg overflow-hidden relative group aspect-video bg-slate-900">
                <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjmvnJPXOI6L2I-ifoVwR_PkVbJVzx_fE9X7YbMuz4xnJjgHllEbnRzmm7in0Kf5bmm2MV99hq4tu9ax4yrOQi6pcJORCHvHSWXrOIvPaTD58i3vOlgXwrZr-zkpynejNCardlFkUPuamFScnVq7CE03HT-LUKnJOkQGCLur-1vw5l267CkIANpVL4iY1xwL6u9BI3Bze_VM4QgtcXzWrtW6dYGODkPc0qa0S2u8e02zAK2Xxfh_ah50plOY-69sBodkP7_4X1Db6-" alt="Site View" />
                <div className="absolute top-2 left-2 bg-black/60 text-white text-[8px] px-1.5 py-0.5 rounded">CAM-04: North Wall</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700 text-center">
                  <div className="text-[9px] text-slate-500 uppercase">Schedule</div>
                  <div className="text-xs font-bold text-green-600">On Time</div>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-2 rounded border border-slate-100 dark:border-slate-700 text-center">
                  <div className="text-[9px] text-slate-500 uppercase">Quality</div>
                  <div className="text-xs font-bold text-yellow-600">Pending</div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <button className="w-full bg-primary text-white py-2 rounded-lg text-xs font-bold shadow-md">Approve Progress</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ExecutionTimeline;
