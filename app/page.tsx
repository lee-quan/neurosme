"use client";

import { useState } from "react";

export default function Home() {
  const [selectedEntrepreneur, setSelectedEntrepreneur] = useState("overview");
  
  // Entrepreneur data
  const entrepreneurs = [
    { name: "Sarah Chen", project: "TechFlow AI", month: 8, total: 24, risk: "medium", status: "active", burnout: 63, revenue: 4.8, runway: 11.2, growth: 7.4 },
    { name: "Marcus Johnson", project: "GreenLeaf Logistics", month: 14, total: 24, risk: "low", status: "active", burnout: 42, revenue: 3.2, runway: 18.5, growth: 12.1 },
    { name: "Priya Sharma", project: "HealthBridge", month: 3, total: 12, risk: "high", status: "watch", burnout: 78, revenue: 1.1, runway: 6.8, growth: -2.3 },
    { name: "David Martinez", project: "EduConnect", month: 18, total: 24, risk: "low", status: "active", burnout: 38, revenue: 5.6, runway: 22.4, growth: 15.8 },
    { name: "Lisa Wang", project: "FinTrack Pro", month: 11, total: 24, risk: "medium", status: "active", burnout: 55, revenue: 2.9, runway: 14.2, growth: 8.9 },
    { name: "Ahmed Hassan", project: "SmartRetail", month: 6, total: 18, risk: "medium", status: "active", burnout: 61, revenue: 2.1, runway: 9.8, growth: 5.2 },
    { name: "Emma Thompson", project: "CloudSync", month: 21, total: 24, risk: "low", status: "active", burnout: 35, revenue: 7.2, runway: 28.3, growth: 18.4 },
    { name: "Carlos Rodriguez", project: "FoodTech Labs", month: 4, total: 12, risk: "high", status: "watch", burnout: 72, revenue: 0.8, runway: 5.2, growth: -5.1 },
  ];
  
  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100">
      {/* Header */}
      <header className="border-b border-gray-800 px-8 py-5">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-0.5">NeuroSME</div>
              <div className="text-xs text-gray-400">Real-Time Monitoring Platform</div>
            </div>
            <nav className="flex items-center gap-6 ml-8">
              <button className="text-sm text-indigo-400 font-medium border-b-2 border-indigo-500 pb-1">Dashboard</button>
              <button className="text-sm text-gray-400 hover:text-gray-200">Entrepreneurs</button>
              <button className="text-sm text-gray-400 hover:text-gray-200">Analytics</button>
              <button className="text-sm text-gray-400 hover:text-gray-200">Reports</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 px-3 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live • Updated 2 min ago</span>
            </div>
            <button className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <div className="w-9 h-9 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              AC
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-8 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Entrepreneur List */}
          <div className="col-span-3 space-y-4">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white">Portfolio</h3>
                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded">{entrepreneurs.length}</span>
              </div>
              
              {/* Search */}
              <div className="relative mb-3">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-indigo-500/50"
                />
              </div>

              {/* Overview Option */}
              <button
                onClick={() => setSelectedEntrepreneur("overview")}
                className={`w-full text-left p-3 rounded-lg border transition-all mb-3 ${
                  selectedEntrepreneur === "overview"
                    ? "bg-indigo-600/20 border-indigo-500/50"
                    : "bg-gray-800/30 border-gray-700/30 hover:bg-gray-800/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-white">All Entrepreneurs</div>
                    <div className="text-xs text-gray-400">Portfolio overview</div>
                  </div>
                </div>
              </button>

              {/* Entrepreneur Cards */}
              <div className="space-y-2 max-h-[calc(100vh-360px)] overflow-y-auto">
                {entrepreneurs.map((entrepreneur, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedEntrepreneur(entrepreneur.name)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedEntrepreneur === entrepreneur.name
                        ? "bg-indigo-600/20 border-indigo-500/50"
                        : "bg-gray-800/30 border-gray-700/30 hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{entrepreneur.name}</div>
                        <div className="text-xs text-gray-400">{entrepreneur.project}</div>
                      </div>
                      <div className={`w-2 h-2 rounded-full mt-1 ${
                        entrepreneur.risk === "high" ? "bg-rose-500" :
                        entrepreneur.risk === "medium" ? "bg-amber-500" :
                        "bg-emerald-500"
                      }`}></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-xs text-gray-500">Month {entrepreneur.month}/{entrepreneur.total}</div>
                      <div className="flex-1 bg-gray-700/30 rounded-full h-1">
                        <div 
                          className="bg-indigo-500 h-1 rounded-full" 
                          style={{ width: `${(entrepreneur.month / entrepreneur.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9 space-y-6">
            {selectedEntrepreneur === "overview" ? (
              /* OVERVIEW DASHBOARD */
              <>
                {/* Overview Header */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">Portfolio Overview</h2>
                      <p className="text-sm text-gray-400">Real-time monitoring across all entrepreneurs</p>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Export Report
                    </button>
                  </div>
                </div>

                {/* Portfolio Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-700/30 rounded-xl p-4">
                    <div className="text-xs font-semibold text-emerald-400 mb-2">LOW RISK</div>
                    <div className="text-3xl font-bold text-white mb-1">3</div>
                    <div className="text-xs text-gray-400">Performing well</div>
                  </div>
                  <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-xl p-4">
                    <div className="text-xs font-semibold text-amber-400 mb-2">MEDIUM RISK</div>
                    <div className="text-3xl font-bold text-white mb-1">3</div>
                    <div className="text-xs text-gray-400">Monitor closely</div>
                  </div>
                  <div className="bg-gradient-to-br from-rose-900/20 to-rose-800/10 border border-rose-700/30 rounded-xl p-4">
                    <div className="text-xs font-semibold text-rose-400 mb-2">HIGH RISK</div>
                    <div className="text-3xl font-bold text-white mb-1">2</div>
                    <div className="text-xs text-gray-400">Needs intervention</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border border-indigo-700/30 rounded-xl p-4">
                    <div className="text-xs font-semibold text-indigo-400 mb-2">AVG BURNOUT</div>
                    <div className="text-3xl font-bold text-white mb-1">55.5</div>
                    <div className="text-xs text-gray-400">Portfolio average</div>
                  </div>
                </div>

                {/* Entrepreneur Cards Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {entrepreneurs.map((entrepreneur, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedEntrepreneur(entrepreneur.name)}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-5 backdrop-blur-sm hover:border-indigo-500/50 transition-all cursor-pointer group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                            {entrepreneur.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition-colors">{entrepreneur.name}</h3>
                            <p className="text-sm text-gray-400">{entrepreneur.project}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">Month {entrepreneur.month}/{entrepreneur.total}</span>
                              <div className="flex-1 bg-gray-700/30 rounded-full h-1 w-20">
                                <div 
                                  className="bg-indigo-500 h-1 rounded-full" 
                                  style={{ width: `${(entrepreneur.month / entrepreneur.total) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-bold ${
                          entrepreneur.risk === "high" ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" :
                          entrepreneur.risk === "medium" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" :
                          "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                        }`}>
                          {entrepreneur.risk.toUpperCase()}
                        </div>
                      </div>

                      {/* Quick Metrics */}
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Revenue</div>
                          <div className="text-lg font-bold text-white">${entrepreneur.revenue}M</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Runway</div>
                          <div className="text-lg font-bold text-white">{entrepreneur.runway}mo</div>
                        </div>
                        <div>
                          <div className="text-xs text-gray-400 mb-1">Burnout</div>
                          <div className={`text-lg font-bold ${
                            entrepreneur.burnout >= 70 ? "text-rose-400" :
                            entrepreneur.burnout >= 60 ? "text-amber-400" :
                            "text-emerald-400"
                          }`}>{entrepreneur.burnout}</div>
                        </div>
                      </div>

                      {/* Growth Indicator */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                        <span className="text-xs text-gray-400">Growth</span>
                        <span className={`text-sm font-semibold flex items-center gap-1 ${
                          entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"
                        }`}>
                          {entrepreneur.growth > 0 ? "↑" : "↓"} {Math.abs(entrepreneur.growth)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Alerts */}
                <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Alerts</h3>
                  <div className="space-y-3">
                    <div className="bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-lg flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <svg className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="text-sm font-semibold text-white mb-1">Priya Sharma - Critical Burnout Risk</div>
                          <div className="text-xs text-gray-400">Burnout index at 78/100. Immediate intervention recommended.</div>
                          <div className="text-xs text-gray-500 mt-1">2 hours ago</div>
                        </div>
                      </div>
                      <button className="text-xs bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded transition-colors flex-shrink-0">
                        View
                      </button>
                    </div>
                    <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-lg flex items-start justify-between">
                      <div className="flex items-start gap-3 flex-1">
                        <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="text-sm font-semibold text-white mb-1">Carlos Rodriguez - Cash Runway Warning</div>
                          <div className="text-xs text-gray-400">Only 5.2 months runway remaining. Revenue trending negative.</div>
                          <div className="text-xs text-gray-500 mt-1">5 hours ago</div>
                        </div>
                      </div>
                      <button className="text-xs bg-amber-600 hover:bg-amber-500 text-white px-3 py-1.5 rounded transition-colors flex-shrink-0">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* INDIVIDUAL ENTREPRENEUR VIEW */
              <>
                {(() => {
                  const entrepreneur = entrepreneurs.find(e => e.name === selectedEntrepreneur);
                  if (!entrepreneur) return null;
                  
                  return (
                    <>
                      {/* Entrepreneur Header */}
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                              {entrepreneur.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-white mb-1">{entrepreneur.name}</h2>
                              <p className="text-sm text-gray-400 mb-2">{entrepreneur.project} • Founded March 2024</p>
                              <div className="flex items-center gap-3">
                                <span className={`text-xs px-2 py-1 rounded border ${
                                  entrepreneur.risk === "high" ? "bg-rose-500/20 text-rose-300 border-rose-500/30" :
                                  entrepreneur.risk === "medium" ? "bg-amber-500/20 text-amber-300 border-amber-500/30" :
                                  "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                                }`}>
                                  ⚠ Risk Level: {entrepreneur.risk.charAt(0).toUpperCase() + entrepreneur.risk.slice(1)}
                                </span>
                                <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">Month {entrepreneur.month} / {entrepreneur.total}</span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  entrepreneur.growth > 0 ? "bg-emerald-500/20 text-emerald-300" : "bg-rose-500/20 text-rose-300"
                                }`}>
                                  Revenue Trending {entrepreneur.growth > 0 ? "Up" : "Down"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-gray-700/50 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              View Full Report
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Schedule Intervention
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Top KPI Cards */}
                      <div className="grid grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-gray-400 tracking-wider">REVENUE RUN-RATE</div>
                            <span className={entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"}>{entrepreneur.growth > 0 ? "↑" : "↓"}</span>
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">${entrepreneur.revenue}M</div>
                          <div className={`text-xs ${entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                            {entrepreneur.growth > 0 ? "+" : ""}{entrepreneur.growth}% vs last period
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-gray-400 tracking-wider">CASH RUNWAY</div>
                            <span className={entrepreneur.runway > 12 ? "text-emerald-400" : entrepreneur.runway > 6 ? "text-amber-400" : "text-rose-400"}>
                              {entrepreneur.runway > 12 ? "✓" : "⚠"}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">{entrepreneur.runway} mo</div>
                          <div className="text-xs text-gray-400">
                            {entrepreneur.runway > 12 ? "Healthy" : entrepreneur.runway > 6 ? "Monitor" : "Critical"}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-gray-400 tracking-wider">BURNOUT INDEX</div>
                            <span className={entrepreneur.burnout >= 70 ? "text-rose-400" : entrepreneur.burnout >= 60 ? "text-amber-400" : "text-emerald-400"}>
                              {entrepreneur.burnout >= 70 ? "!" : entrepreneur.burnout >= 60 ? "⚠" : "✓"}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-white mb-1">{entrepreneur.burnout}/100</div>
                          <div className={`text-xs ${entrepreneur.burnout >= 70 ? "text-rose-400" : entrepreneur.burnout >= 60 ? "text-amber-400" : "text-emerald-400"}`}>
                            {entrepreneur.burnout >= 70 ? "Critical" : entrepreneur.burnout >= 60 ? "Elevated" : "Healthy"}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xs font-semibold text-gray-400 tracking-wider">OVERALL STATUS</div>
                            <span className={
                              entrepreneur.risk === "high" ? "text-rose-400" :
                              entrepreneur.risk === "medium" ? "text-amber-400" :
                              "text-emerald-400"
                            }>●</span>
                          </div>
                          <div className={`text-2xl font-bold mb-1 ${
                            entrepreneur.risk === "high" ? "text-rose-400" :
                            entrepreneur.risk === "medium" ? "text-amber-400" :
                            "text-emerald-400"
                          }`}>
                            {entrepreneur.risk.charAt(0).toUpperCase() + entrepreneur.risk.slice(1)}
                          </div>
                          <div className="text-xs text-gray-400">
                            {entrepreneur.risk === "high" ? "Needs action" : entrepreneur.risk === "medium" ? "Monitor" : "On track"}
                          </div>
                        </div>
                      </div>

            {/* Business Performance Section */}
            <section className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Business Performance</h2>
                  <p className="text-xs text-gray-400">Directional signals for revenue health, liquidity, and margin pressure.</p>
                </div>
                <div className="bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-md">
                  <span className="text-blue-300 text-xs font-semibold tracking-wide">CORE FINANCE</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Revenue Trend */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Revenue trend</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">UP</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">+7.4%</div>
                  <div className="text-xs text-gray-400">vs previous period</div>
                </div>

                {/* Cashflow Status */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Cashflow status</span>
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">STABLE</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">1.6x</div>
                  <div className="text-xs text-gray-400">Current ratio</div>
                </div>

                {/* Sales/Order Pipeline */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Sales / order pipeline</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">STRONG</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">$2.1M</div>
                  <div className="text-xs text-gray-400">Confirmed + potential</div>
                </div>

                {/* Cost Pressure Indicator */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Cost pressure indicator</span>
                    <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-1 rounded">WATCH</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">+3.1%</div>
                  <div className="text-xs text-gray-400">Rising costs</div>
                </div>
              </div>
            </section>

            {/* Workforce & Productivity Section */}
            <section className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Workforce & Productivity</h2>
                  <p className="text-xs text-gray-400">Capacity signals showing how teams are performing and scaling.</p>
                </div>
                <div className="bg-purple-600/20 border border-purple-500/30 px-3 py-1 rounded-md">
                  <span className="text-purple-300 text-xs font-semibold tracking-wide">OPERATIONS</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Workforce Utilisation */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Workforce utilisation</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">HEALTHY</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">82%</div>
                  <div className="text-xs text-gray-400">Manpower usage</div>
                </div>

                {/* Task Completion Velocity */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Task completion velocity</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-1 rounded">UP</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">+12%</div>
                  <div className="text-xs text-gray-400">vs planned</div>
                </div>

                {/* Absenteeism Signal */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Absenteeism signal</span>
                    <span className="bg-gray-500/20 text-gray-400 text-xs font-bold px-2 py-1 rounded">LOW</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">1.4%</div>
                  <div className="text-xs text-gray-400">Unplanned absence</div>
                </div>

                {/* Overtime/Overload Flag */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Overtime / overload flag</span>
                    <span className="bg-amber-500/20 text-amber-400 text-xs font-bold px-2 py-1 rounded">MODERATE</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">29 hrs</div>
                  <div className="text-xs text-gray-400">Weekly average</div>
                </div>
              </div>
            </section>

                      {/* Wellbeing & Risk Signals Section */}
                      <section className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-5">
                          <div>
                            <h2 className="text-xl font-bold text-white mb-1">Wellbeing & Risk Alerts</h2>
                            <p className="text-xs text-gray-400">Early risk monitoring for leadership and business continuity.</p>
                          </div>
                          <div className={`px-3 py-1 rounded-md flex items-center gap-2 border ${
                            entrepreneur.burnout >= 70 ? "bg-rose-600/20 border-rose-500/30" :
                            entrepreneur.burnout >= 60 ? "bg-amber-600/20 border-amber-500/30" :
                            "bg-emerald-600/20 border-emerald-500/30"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              entrepreneur.burnout >= 70 ? "bg-rose-400 animate-pulse" :
                              entrepreneur.burnout >= 60 ? "bg-amber-400 animate-pulse" :
                              "bg-emerald-400"
                            }`}></span>
                            <span className={`text-xs font-semibold tracking-wide ${
                              entrepreneur.burnout >= 70 ? "text-rose-300" :
                              entrepreneur.burnout >= 60 ? "text-amber-300" :
                              "text-emerald-300"
                            }`}>
                              {entrepreneur.burnout >= 70 ? "Risk Alerts: 2 Active" : entrepreneur.burnout >= 60 ? "Risk Alerts: 1 Active" : "All Clear"}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-4">
                          {/* Burnout Risk Index with Lifeline */}
                          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/40 rounded-xl p-5 relative overflow-hidden">
                            <div className="relative z-10">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <span className="text-sm font-medium text-gray-300 block mb-1">Burnout Risk</span>
                                  <div className="text-4xl font-bold text-white">{entrepreneur.burnout}<span className="text-2xl text-gray-400">/100</span></div>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1.5 rounded border ${
                                  entrepreneur.burnout >= 70 ? "bg-rose-500/20 text-rose-400 border-rose-500/30" :
                                  entrepreneur.burnout >= 60 ? "bg-amber-500/20 text-amber-400 border-amber-500/30" :
                                  "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                                }`}>
                                  {entrepreneur.burnout >= 70 ? "CRITICAL" : entrepreneur.burnout >= 60 ? "ELEVATED" : "HEALTHY"}
                                </span>
                              </div>
                    
                    {/* Lifeline Graph */}
                    <div className="mt-4 h-24 relative">
                      <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="burnoutGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                          </linearGradient>
                          <linearGradient id="burnoutGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.3 }} />
                            <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 0.3 }} />
                          </linearGradient>
                        </defs>
                        
                        {/* Glow effect */}
                        <path
                          d="M 0 40 Q 20 35, 40 38 T 80 42 Q 100 45, 120 35 T 160 30 Q 180 25, 200 40 T 240 50 Q 260 55, 280 45 T 320 40 Q 340 35, 360 42 T 400 45"
                          fill="none"
                          stroke="url(#burnoutGlow)"
                          strokeWidth="6"
                          opacity="0.5"
                        />
                        
                        {/* Main line */}
                        <path
                          d="M 0 40 Q 20 35, 40 38 T 80 42 Q 100 45, 120 35 T 160 30 Q 180 25, 200 40 T 240 50 Q 260 55, 280 45 T 320 40 Q 340 35, 360 42 T 400 45"
                          fill="none"
                          stroke="url(#burnoutGradient)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    
                    <div className="text-xs text-gray-400 mt-2">Aggregate indicator of sustained overload and stress risk</div>
                  </div>
                </div>

                {/* Cognitive Load Proxy with Lifeline */}
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/40 rounded-xl p-5 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="text-sm font-medium text-gray-300 block mb-1">Cognitive Load</span>
                        <div className="text-4xl font-bold text-white">71<span className="text-2xl text-gray-400">/100</span></div>
                      </div>
                      <span className="bg-rose-500/20 text-rose-400 text-xs font-bold px-3 py-1.5 rounded border border-rose-500/30">RISING</span>
                    </div>
                    
                    {/* Lifeline Graph */}
                    <div className="mt-4 h-24 relative">
                      <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="cognitiveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                          </linearGradient>
                          <linearGradient id="cognitiveGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.3 }} />
                            <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
                            <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                          </linearGradient>
                        </defs>
                        
                        {/* Glow effect */}
                        <path
                          d="M 0 45 Q 25 40, 50 42 T 100 38 Q 120 35, 140 45 T 180 55 Q 200 60, 220 50 T 260 35 Q 280 25, 300 38 T 340 48 Q 360 52, 380 45 L 400 42"
                          fill="none"
                          stroke="url(#cognitiveGlow)"
                          strokeWidth="6"
                          opacity="0.5"
                        />
                        
                        {/* Main line */}
                        <path
                          d="M 0 45 Q 25 40, 50 42 T 100 38 Q 120 35, 140 45 T 180 55 Q 200 60, 220 50 T 260 35 Q 280 25, 300 38 T 340 48 Q 360 52, 380 45 L 400 42"
                          fill="none"
                          stroke="url(#cognitiveGradient)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    
                    <div className="text-xs text-gray-400 mt-2">Measure of mental strain from work intensity and complexity</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Engagement Pulse */}
                <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Engagement pulse</span>
                    <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">STEADY</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">7.6 / 10</div>
                  <div className="text-xs text-gray-400">Short, trend-based signal of morale and commitment</div>
                </div>

                {/* Risk Alerts/Red Flags */}
                <div className="bg-gray-800/40 border border-rose-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-300">Risk alerts / red flags</span>
                    <span className="bg-rose-500/30 text-rose-300 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-rose-400 rounded-full"></span>
                      2 ACTIVE
                    </span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">Compliance, churn</div>
                  <div className="text-xs text-gray-400">System-level warnings requiring management attention</div>
                </div>
              </div>

                        {/* Critical Alert Banner */}
                        {entrepreneur.burnout >= 70 && (
                          <div className="mt-4 bg-rose-900/30 border-l-4 border-rose-500 p-4 rounded-lg">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0">
                                <svg className="w-5 h-5 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-rose-300 mb-1">Critical Burnout Risk Detected</h4>
                                <p className="text-xs text-gray-300">Entrepreneur showing signs of sustained stress. Advisor intervention recommended within 48 hours. Last contact: 6 days ago.</p>
                              </div>
                              <button className="flex-shrink-0 bg-rose-600 hover:bg-rose-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors">
                                Create Intervention
                              </button>
                            </div>
                          </div>
                        )}
                      </section>

                      {/* AI Insights & Advisor Notes Grid */}
                      <div className="grid grid-cols-2 gap-6">
                        {/* AI Insights Panel */}
                        <section className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-700/30 rounded-xl p-6 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                              </div>
                              <h3 className="text-lg font-semibold text-white">AI Daily Insights</h3>
                            </div>
                            <span className="text-xs text-gray-400">Generated 2 hrs ago</span>
                          </div>
                          <div className="space-y-3">
                            {entrepreneur.growth > 0 ? (
                              <div className="flex items-start gap-3">
                                <span className="text-emerald-400 text-xs font-bold mt-0.5">↑</span>
                                <p className="text-sm text-gray-300">Revenue growth accelerating - up {entrepreneur.growth}% recent period. Sales pipeline conversion improved.</p>
                              </div>
                            ) : (
                              <div className="flex items-start gap-3">
                                <span className="text-rose-400 text-xs font-bold mt-0.5">↓</span>
                                <p className="text-sm text-gray-300">Revenue declining by {Math.abs(entrepreneur.growth)}%. Recommend reviewing customer acquisition strategy.</p>
                              </div>
                            )}
                            
                            {entrepreneur.burnout >= 60 && (
                              <div className="flex items-start gap-3">
                                <span className="text-amber-400 text-xs font-bold mt-0.5">⚠</span>
                                <p className="text-sm text-gray-300">Burnout index at {entrepreneur.burnout}/100. Pattern analysis shows increased evening work hours.</p>
                              </div>
                            )}
                            
                            {entrepreneur.runway < 8 && (
                              <div className="flex items-start gap-3">
                                <span className="text-rose-400 text-xs font-bold mt-0.5">!</span>
                                <p className="text-sm text-gray-300">Cash runway at {entrepreneur.runway} months. Consider accelerating fundraising timeline.</p>
                              </div>
                            )}
                            
                            <div className="flex items-start gap-3">
                              <span className="text-blue-400 text-xs font-bold mt-0.5">ℹ</span>
                              <p className="text-sm text-gray-300">Team productivity stable at 82% capacity. Process improvements showing positive results.</p>
                            </div>
                            
                            {entrepreneur.growth < 0 && (
                              <div className="flex items-start gap-3">
                                <span className="text-amber-400 text-xs font-bold mt-0.5">⚠</span>
                                <p className="text-sm text-gray-300">Customer retention metrics need attention. Recommend immediate analysis and intervention.</p>
                              </div>
                            )}
                          </div>
                          <button className="w-full mt-4 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 text-indigo-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            View Full AI Report
                          </button>
                        </section>

                        {/* Advisor Notes & Actions */}
                        <section className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">Recent Advisor Notes</h3>
                            <button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium">+ Add Note</button>
                          </div>
                          <div className="space-y-3 mb-4">
                            <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-3">
                              <div className="flex items-start justify-between mb-2">
                                <span className="text-xs font-medium text-gray-300">Jan 16, 2026</span>
                                <span className="text-xs text-gray-500">by Michael Torres</span>
                              </div>
                              <p className="text-sm text-gray-400">
                                {entrepreneur.burnout >= 60 
                                  ? `Scheduled check-in call for Jan 20. Will discuss workload management and burnout prevention strategies with ${entrepreneur.name.split(' ')[0]}.`
                                  : `Regular check-in completed. ${entrepreneur.name.split(' ')[0]} is performing well. Will monitor progress on growth initiatives.`
                                }
                              </p>
                            </div>
                            <div className="bg-gray-800/40 border border-gray-700/30 rounded-lg p-3">
                              <div className="flex items-start justify-between mb-2">
                                <span className="text-xs font-medium text-gray-300">Jan 12, 2026</span>
                                <span className="text-xs text-gray-500">by Michael Torres</span>
                              </div>
                              <p className="text-sm text-gray-400">
                                {entrepreneur.growth > 0
                                  ? `Revenue metrics strong. ${entrepreneur.name.split(' ')[0]} showing positive momentum. Continue monitoring key indicators.`
                                  : `Revenue challenges noted. Working with ${entrepreneur.name.split(' ')[0]} on customer acquisition and retention strategies.`
                                }
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="flex-1 bg-gray-700/50 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              View All Notes
                            </button>
                            <button className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                              Schedule Call
                            </button>
                          </div>
                        </section>
                      </div>
                </>
              );
            })()}
          </>
        )}
      </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-8 py-4">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>© 2026 NeuroSME Platform</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure connection
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
            <span>•</span>
            <span>Next refresh in 3 min</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
