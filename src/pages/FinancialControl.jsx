import React from 'react';

const FinancialControl = () => {
  return (
    <div className="space-y-6">
      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Budget', value: '$2,500,000', sub: 'Baseline approved: Jan 15, 2023', icon: 'account_balance_wallet', color: 'blue' },
          { label: 'Actual Spend', value: '$1,240,000', sub: '49% Utilization', icon: 'credit_card', color: 'purple', progress: 49 },
          { label: 'Variance (YTD)', value: '-$50,000', sub: 'Overrun detected', icon: 'trending_down', color: 'red', warning: true },
          { label: 'Forecast to Complete', value: '$2,560,000', sub: 'Projected total at completion', icon: 'timeline', color: 'green' }
        ].map((kpi, i) => (
          <div key={i} className={`bg-white dark:bg-[#1c2a38] border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm relative overflow-hidden ${kpi.warning ? 'border-l-4 border-l-red-500' : ''}`}>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">{kpi.label}</h3>
                <div className={`p-1.5 rounded bg-${kpi.color}-50 dark:bg-${kpi.color}-900/20 text-${kpi.color}-600`}>
                  <span className="material-icons text-lg">{kpi.icon}</span>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className={`text-2xl font-bold ${kpi.warning ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>{kpi.value}</span>
              </div>
              <div className={`mt-2 text-xs flex items-center gap-1 ${kpi.warning ? 'text-red-500 font-medium' : 'text-slate-500'}`}>
                {kpi.progress && (
                  <span className="w-16 h-1.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden mr-1">
                    <span className="block h-full bg-primary" style={{ width: `${kpi.progress}%` }}></span>
                  </span>
                )}
                {kpi.warning && <span className="material-icons text-sm">warning</span>}
                {kpi.sub}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-[#1c2a38] border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm flex flex-col min-h-[400px]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Cashflow Forecast</h2>
              <p className="text-sm text-slate-500">Cumulative Plan vs Actuals</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span>Planned</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-3 h-3 rounded-full bg-primary"></span>
                <span>Actual</span>
              </div>
            </div>
          </div>
          {/* Mock Chart Area */}
          <div className="flex-1 w-full relative h-64 flex items-end gap-4 px-2 pb-6 border-b border-l border-slate-200 dark:border-slate-700">
            {[10, 18, 28, 35, 48, 60, 72].map((h, i) => (
              <div key={i} className="flex-1 flex items-end justify-center group relative h-full">
                <div className="w-2 bg-slate-300 dark:bg-slate-600 rounded-t h-[100%] opacity-20 absolute" style={{ height: `${h+2}%` }}></div>
                <div className="w-2 bg-primary rounded-t relative z-10" style={{ height: `${h}%` }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-[#1c2a38] border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm flex flex-col">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Cost Categories</h2>
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-center py-6 relative">
              <div className="w-40 h-40 rounded-full border-[16px] border-l-primary border-t-primary border-r-indigo-400 border-b-cyan-400 relative rotate-45">
                <div className="absolute inset-0 flex flex-col items-center justify-center -rotate-45">
                  <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Total</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">$1.24M</span>
                </div>
              </div>
            </div>
            <div className="space-y-3 mt-6">
              {[
                { label: 'Materials', value: '$620k', perc: 50, color: 'bg-primary' },
                { label: 'Labor', value: '$372k', perc: 30, color: 'bg-indigo-400' },
                { label: 'Overheads', value: '$248k', perc: 20, color: 'bg-cyan-400' }
              ].map((cat, i) => (
                <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${cat.color}`}></span>
                    <span className="text-sm font-medium">{cat.label}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold">{cat.value}</div>
                    <div className="text-[10px] text-slate-500">{cat.perc}%</div>
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

export default FinancialControl;
