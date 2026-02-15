import React from 'react';

const AICopilot = () => {
  return (
    <div className="flex h-[calc(100vh-120px)] -m-8 overflow-hidden relative">
      {/* Background Context (Blurred) */}
      <div className="flex-1 p-8 grid grid-cols-3 gap-6 opacity-40 blur-[2px] pointer-events-none">
        <div className="col-span-2 h-64 bg-white dark:bg-[#1a2634] rounded-xl border border-slate-200 dark:border-slate-700"></div>
        <div className="col-span-1 h-64 bg-white dark:bg-[#1a2634] rounded-xl border border-slate-200 dark:border-slate-700"></div>
        <div className="col-span-1 h-64 bg-white dark:bg-[#1a2634] rounded-xl border border-slate-200 dark:border-slate-700"></div>
        <div className="col-span-2 h-64 bg-white dark:bg-[#1a2634] rounded-xl border border-slate-200 dark:border-slate-700"></div>
      </div>

      {/* Copilot Sidebar Overlay */}
      <div className="absolute inset-y-0 right-0 w-[480px] z-20 flex flex-col bg-white/95 dark:bg-[#101922]/95 backdrop-blur-md border-l border-slate-200 dark:border-slate-700 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/20">
              <span className="material-icons text-xl">smart_toy</span>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div>
              <h2 className="font-semibold text-sm text-slate-900 dark:text-white leading-tight">HSI Copilot</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Smart Execution System™</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
              <span className="material-icons text-lg">open_in_full</span>
            </button>
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400">
              <span className="material-icons text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 flex flex-col gap-6">
          {/* Insights */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Suggested Insights</h3>
              <span className="text-xs text-primary font-medium cursor-pointer hover:underline">View All</span>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
              <div className="snap-center min-w-[280px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2 text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded text-xs font-medium">
                    <span className="material-icons text-sm">warning</span>
                    <span>Schedule Risk</span>
                  </div>
                  <span className="text-xs text-slate-400">2m ago</span>
                </div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 group-hover:text-primary">Possible delay in Phase 2</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">Vendor lag detected from 'Acme Furnishings' on procurement order #4492.</p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200 dark:bg-slate-700 w-full"></div>

          {/* Messages */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex-shrink-0 flex items-center justify-center text-white text-xs">
                <span className="material-icons text-sm">smart_toy</span>
              </div>
              <div className="flex flex-col gap-1 max-w-[85%]">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 dark:text-slate-200">
                  <p>Good morning, Alex. Based on the latest data ingestion, I've updated the Interior Planning dashboard.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-300 flex-shrink-0"></div>
              <div className="flex flex-col gap-1 items-end max-w-[85%]">
                <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none text-sm shadow-md shadow-primary/20">
                  <p>Can you drill down into that margin variance on Section B?</p>
                </div>
                <span className="text-[10px] text-slate-400">10:42 AM</span>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex-shrink-0 flex items-center justify-center text-white text-xs">
                <span className="material-icons text-sm">smart_toy</span>
              </div>
              <div className="flex flex-col gap-2 max-w-[90%]">
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 dark:text-slate-200">
                  <p className="mb-2">Certainly. The margin variance in Section B is primarily driven by a spike in raw material costs, specifically lumber and steel framing.</p>
                  <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 p-3 mt-2 shadow-sm">
                    <h5 className="font-semibold text-xs uppercase text-slate-500 mb-3">Cost Breakdown: Section B</h5>
                    <div className="space-y-3">
                      {[
                        { label: 'Steel Framing', val: '$42,500', diff: '+15%', color: 'red' },
                        { label: 'Lumber', val: '$18,200', diff: '+8%', color: 'amber' },
                        { label: 'Labor', val: '$35,000', diff: '-2%', color: 'green' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full bg-${item.color}-500`}></span>
                            <span className="text-slate-600 dark:text-slate-300">{item.label}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-800 dark:text-slate-100">{item.val}</span>
                            <span className={`text-${item.color}-500 font-medium bg-${item.color}-50 dark:bg-${item.color}-900/20 px-1 rounded text-[10px]`}>{item.diff}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="flex gap-2 mb-3 overflow-x-auto whitespace-nowrap">
            {['Draft Vendor Email', 'Reschedule Phase 2', 'View Full Report'].map((action, i) => (
              <button key={i} className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs text-slate-500 hover:text-primary transition-colors">
                {action}
              </button>
            ))}
          </div>
          <div className="relative flex items-end gap-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-2">
            <button className="p-2 text-slate-400 hover:text-primary"><span className="material-icons">add_circle_outline</span></button>
            <textarea
              className="w-full bg-transparent border-0 p-2 text-sm focus:ring-0 resize-none max-h-32"
              placeholder="Ask Copilot..."
              rows="1"
            />
            <button className="p-2 bg-primary text-white rounded-lg"><span className="material-icons text-lg">arrow_upward</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICopilot;
