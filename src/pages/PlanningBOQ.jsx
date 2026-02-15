import React, { useState } from 'react';

const PlanningBOQ = () => {
  const [simulationMode, setSimulationMode] = useState(true);
  const [wasteFactor, setWasteFactor] = useState(5.0);
  const [targetMargin, setTargetMargin] = useState(18.5);
  const [contingency, setContingency] = useState(5000);

  const originalTotal = 145200;

  // Simple simulation logic
  const simulatedTotal = originalTotal * (1 + (wasteFactor - 5) / 100) * (1 + (targetMargin - 15) / 100) + (contingency - 5000);
  const variance = ((simulatedTotal - originalTotal) / originalTotal) * 100;

  return (
    <div className="flex h-[calc(100vh-120px)] -m-8 overflow-hidden bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
      {/* Left Panel: BOQ Grid */}
      <section className="flex-1 flex flex-col min-w-0 relative">
        {/* Grid Toolbar */}
        <div className="h-14 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="material-icons absolute left-2.5 top-2 text-slate-400 text-lg">search</span>
              <input
                className="pl-9 pr-4 py-1.5 w-64 text-sm bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-shadow"
                placeholder="Search line items..."
                type="text"
              />
            </div>
            <button className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons text-lg">filter_list</span>
              Filter
            </button>
            <button className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons text-lg">view_column</span>
              Columns
            </button>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Showing 142 items</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span>Total: <strong className="text-slate-800 dark:text-white">${originalTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</strong></span>
          </div>
        </div>

        {/* Data Grid Table Container */}
        <div className="flex-1 overflow-auto custom-scrollbar relative">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 dark:bg-slate-800 sticky top-0 z-20 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              <tr>
                <th className="p-4 border-b border-r border-slate-200 dark:border-slate-700 w-12 sticky left-0 bg-slate-50 dark:bg-slate-800 text-center">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                </th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 w-24">Code</th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 min-w-[280px]">Description</th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 w-20 text-center">Unit</th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 w-24 text-right bg-blue-50/30 dark:bg-blue-900/10">Qty</th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 w-32 text-right bg-blue-50/30 dark:bg-blue-900/10">Unit Rate</th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 w-32 text-right">Material</th>
                <th className="p-3 border-b border-r border-slate-200 dark:border-slate-700 w-32 text-right">Labor</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 w-36 text-right font-bold text-slate-700 dark:text-slate-200">Total</th>
                <th className="p-3 border-b border-slate-200 dark:border-slate-700 w-12 sticky right-0 bg-slate-50 dark:bg-slate-800"></th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700 dark:text-slate-200 divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <td className="px-4 py-2 font-semibold text-slate-800 dark:text-slate-200" colSpan="10">
                  <span className="material-icons text-sm transform rotate-90 text-slate-400 mr-2">play_arrow</span>
                  01. General Requirements
                </td>
              </tr>
              {/* Sample Row */}
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                <td className="p-4 border-r border-slate-100 dark:border-slate-800 text-center sticky left-0 bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                </td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500">GEN-001</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-medium">Site Mobilization & Setup</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-center">LS</td>
                <td className="p-0 border-r border-slate-100 dark:border-slate-800">
                  <input className="w-full h-full p-3 text-right bg-transparent border-none focus:ring-inset focus:ring-2 focus:ring-primary text-primary font-medium" type="text" defaultValue="1.00" />
                </td>
                <td className="p-0 border-r border-slate-100 dark:border-slate-800">
                  <input className="w-full h-full p-3 text-right bg-transparent border-none focus:ring-inset focus:ring-2 focus:ring-primary text-primary font-medium" type="text" defaultValue="5,000.00" />
                </td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-right font-mono text-slate-500">2,000.00</td>
                <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-right font-mono text-slate-500">3,000.00</td>
                <td className="p-3 text-right font-mono font-semibold">5,000.00</td>
                <td className="p-2 text-center sticky right-0 bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800">
                  <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-primary transition-opacity">
                    <span className="material-icons text-lg">more_vert</span>
                  </button>
                </td>
              </tr>
              {/* Group Header 2 */}
              <tr className="bg-slate-100 dark:bg-slate-800/80">
                <td className="px-4 py-2 font-semibold text-slate-800 dark:text-slate-200" colSpan="10">
                  <span className="material-icons text-sm transform rotate-90 text-slate-400 mr-2">play_arrow</span>
                  03. Finishes - Flooring
                </td>
              </tr>
              {[
                { code: 'FLR-M01', desc: 'Italian Carrara Marble (60x60cm)', unit: 'm²', qty: '120.00', rate: '85.50', mat: '7,800.00', lab: '2,460.00', total: '10,260.00' },
                { code: 'FLR-W03', desc: 'Engineered Oak Wood Flooring', unit: 'm²', qty: '215.50', rate: '62.00', mat: '10,775.00', lab: '2,586.00', total: '13,361.00' },
                { code: 'FLR-S01', desc: 'Skirting Board (100mm) - Oak Match', unit: 'rm', qty: '85.00', rate: '12.50', mat: '637.50', lab: '425.00', total: '1,062.50' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group">
                  <td className="p-4 border-r border-slate-100 dark:border-slate-800 text-center sticky left-0 bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800">
                    <input className="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox" />
                  </td>
                  <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-mono text-xs text-slate-500">{row.code}</td>
                  <td className="p-3 border-r border-slate-100 dark:border-slate-800 font-medium">{row.desc}</td>
                  <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-center">{row.unit}</td>
                  <td className="p-0 border-r border-slate-100 dark:border-slate-800">
                    <input className="w-full h-full p-3 text-right bg-transparent border-none focus:ring-inset focus:ring-2 focus:ring-primary text-primary font-medium" type="text" defaultValue={row.qty} />
                  </td>
                  <td className="p-0 border-r border-slate-100 dark:border-slate-800">
                    <input className="w-full h-full p-3 text-right bg-transparent border-none focus:ring-inset focus:ring-2 focus:ring-primary text-primary font-medium" type="text" defaultValue={row.rate} />
                  </td>
                  <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-right font-mono text-slate-500">{row.mat}</td>
                  <td className="p-3 border-r border-slate-100 dark:border-slate-800 text-right font-mono text-slate-500">{row.lab}</td>
                  <td className="p-3 text-right font-mono font-semibold">{row.total}</td>
                  <td className="p-2 text-center sticky right-0 bg-white dark:bg-slate-900 group-hover:bg-slate-50 dark:group-hover:bg-slate-800">
                    <button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-primary transition-opacity">
                      <span className="material-icons text-lg">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sticky Grid Footer */}
        <div className="h-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] z-20">
          <div className="text-sm text-slate-500">
            Calculated on <span className="font-medium text-slate-700 dark:text-slate-300">142 items</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="text-right">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Total Material</div>
              <div className="font-mono text-slate-700 dark:text-slate-300 font-medium">$85,420.00</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 uppercase tracking-wide">Total Labor</div>
              <div className="font-mono text-slate-700 dark:text-slate-300 font-medium">$59,780.00</div>
            </div>
            <div className="text-right pl-8 border-l border-slate-200 dark:border-slate-700">
              <div className="text-xs text-primary uppercase tracking-wide font-bold">Grand Total</div>
              <div className="font-mono text-xl text-slate-900 dark:text-white font-bold">${originalTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Panel: Margin Simulation Sidebar */}
      <aside className="w-96 bg-slate-50 dark:bg-[#15202B] border-l border-slate-200 dark:border-slate-800 flex flex-col shrink-0 shadow-xl z-30">
        <div className="h-14 px-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <h2 className="font-semibold text-charcoal dark:text-white flex items-center gap-2">
            <span className="material-icons text-bronze dark:text-bronze-light">analytics</span>
            Margin Intelligence
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          <div className="flex items-center justify-between p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
            <div>
              <div className="text-sm font-bold text-primary dark:text-blue-400">Simulation Mode</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Visualize price impacts in real-time</div>
            </div>
            <button
              onClick={() => setSimulationMode(!simulationMode)}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${simulationMode ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}
            >
              <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${simulationMode ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          <div className={`space-y-4 ${!simulationMode && 'opacity-50 pointer-events-none'}`}>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Global Parameters</h3>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Waste Factor Overhead</label>
              <div className="relative">
                <input
                  className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-sm focus:border-primary focus:ring-primary sm:text-sm pr-8"
                  type="number"
                  value={wasteFactor}
                  onChange={(e) => setWasteFactor(parseFloat(e.target.value))}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Target Margin</label>
                <span className="text-sm font-bold text-primary">{targetMargin}%</span>
              </div>
              <input
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                max="50"
                min="0"
                step="0.5"
                type="range"
                value={targetMargin}
                onChange={(e) => setTargetMargin(parseFloat(e.target.value))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Contingency Fund</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-slate-500 sm:text-sm">$</span>
                </div>
                <input
                  className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 pl-7 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  type="number"
                  value={contingency}
                  onChange={(e) => setContingency(parseFloat(e.target.value))}
                />
              </div>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />

          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Simulation Impact</h3>
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-500">Original Total</span>
                <span className="font-mono text-slate-700 dark:text-slate-300 line-through decoration-slate-400">$145,200.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-charcoal dark:text-white">Simulated Total</span>
                <span className="font-mono text-lg font-bold text-bronze dark:text-bronze-light">
                  ${simulatedTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="pt-2 border-t border-dashed border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <span className="text-xs font-medium text-slate-500">Variance (Delta)</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1 ${variance >= 0 ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' : 'text-red-600 bg-red-100 dark:bg-red-900/30 dark:text-red-400'}`}>
                  <span className="material-icons text-[10px]">{variance >= 0 ? 'arrow_upward' : 'arrow_downward'}</span>
                  {variance >= 0 ? '+' : ''}{variance.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <button className="w-full bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg text-sm font-semibold shadow-md transition-all flex justify-center items-center gap-2">
            Apply to Draft
            <span className="material-icons text-sm">check</span>
          </button>
          <button
            onClick={() => {
              setWasteFactor(5.0);
              setTargetMargin(18.5);
              setContingency(5000);
            }}
            className="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Reset Simulation
          </button>
        </div>
      </aside>
    </div>
  );
};

export default PlanningBOQ;
