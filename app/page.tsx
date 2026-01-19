"use client";

import { useState } from "react";
import Image from "next/image";

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
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="NeuroSME Logo" 
                width={40} 
                height={40}
                className="rounded-lg"
              />
              <div>
                <div className="text-2xl font-bold text-white mb-0.5">NeuroSME</div>
                <div className="text-xs text-gray-400">Real-Time Monitoring Platform</div>
              </div>
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
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center p-1">
                    <Image 
                      src="/logo.png" 
                      alt="NeuroSME" 
                      width={32} 
                      height={32}
                      className="rounded"
                    />
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
                {/* Page Title - Smaller now */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-1">Portfolio Impact Dashboard</h2>
                  <p className="text-sm text-gray-400">Real-time proof of impact across all entrepreneurs</p>
                </div>

                {/* TOP 5 KEY INDICATORS - MASSIVE HERO SECTION */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                      <h3 className="text-lg font-bold text-white tracking-wide">TOP 5 BOARD-LEVEL SIGNALS</h3>
                    </div>
                    <span className="text-xs text-indigo-400 font-semibold px-3 py-1.5 bg-indigo-600/20 rounded-lg border border-indigo-500/30">
                      PRIMARY IMPACT METRICS
                    </span>
                  </div>

                  {/* First Row - 3 Cards */}
                  <div className="grid grid-cols-3 gap-5 mb-5">
                    {/* 1. Adoption Rate */}
                    <div className="bg-gradient-to-br from-emerald-900/40 via-emerald-800/20 to-gray-900/40 border-2 border-emerald-500/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center border border-emerald-500/30">
                          <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-500/20 px-3 py-1.5 rounded-lg">
                          <span className="text-emerald-400 text-xl font-bold">↑</span>
                          <span className="text-emerald-400 text-sm font-bold">+24%</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-bold text-emerald-400 tracking-wider mb-2">ADOPTION RATE</div>
                        <div className="text-6xl font-black text-white mb-2">87<span className="text-3xl text-gray-400">%</span></div>
                      </div>
                      <div className="pt-4 border-t border-emerald-500/20">
                        <div className="text-xs text-emerald-300/80 font-medium mb-2">WHY IT MATTERS</div>
                        <p className="text-sm text-gray-300 leading-relaxed">Shows real behavior change, not just awareness.</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-emerald-500/10">
                        <span className="text-xs text-emerald-400/70 font-semibold tracking-wide">BOARD-LEVEL SIGNAL</span>
                      </div>
                    </div>

                    {/* 2. Productivity Uplift */}
                    <div className="bg-gradient-to-br from-blue-900/40 via-blue-800/20 to-gray-900/40 border-2 border-blue-500/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1.5 rounded-lg">
                          <span className="text-blue-400 text-xl font-bold">↑</span>
                          <span className="text-blue-400 text-sm font-bold">+31%</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-bold text-blue-400 tracking-wider mb-2">PRODUCTIVITY UPLIFT</div>
                        <div className="text-6xl font-black text-white mb-2">+42<span className="text-3xl text-gray-400">%</span></div>
                      </div>
                      <div className="pt-4 border-t border-blue-500/20">
                        <div className="text-xs text-blue-300/80 font-medium mb-2">WHY IT MATTERS</div>
                        <p className="text-sm text-gray-300 leading-relaxed">Proves economic value and performance gain.</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-blue-500/10">
                        <span className="text-xs text-blue-400/70 font-semibold tracking-wide">BOARD-LEVEL SIGNAL</span>
                      </div>
                    </div>

                    {/* 3. Wellbeing Risk Reduction */}
                    <div className="bg-gradient-to-br from-purple-900/40 via-purple-800/20 to-gray-900/40 border-2 border-purple-500/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-purple-900/30 hover:shadow-purple-900/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                          <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-1.5 rounded-lg">
                          <span className="text-purple-400 text-xl font-bold">↓</span>
                          <span className="text-purple-400 text-sm font-bold">-38%</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-bold text-purple-400 tracking-wider mb-2">RISK REDUCTION</div>
                        <div className="text-6xl font-black text-white mb-2">-38<span className="text-3xl text-gray-400">%</span></div>
                      </div>
                      <div className="pt-4 border-t border-purple-500/20">
                        <div className="text-xs text-purple-300/80 font-medium mb-2">WHY IT MATTERS</div>
                        <p className="text-sm text-gray-300 leading-relaxed">Reduces burnout, turnover, and hidden org risk.</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-purple-500/10">
                        <span className="text-xs text-purple-400/70 font-semibold tracking-wide">BOARD-LEVEL SIGNAL</span>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - 2 Cards */}
                  <div className="grid grid-cols-2 gap-5">
                    {/* 4. Institutional Buy-In */}
                    <div className="bg-gradient-to-br from-amber-900/40 via-amber-800/20 to-gray-900/40 border-2 border-amber-500/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-amber-900/30 hover:shadow-amber-900/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center border border-amber-500/30">
                          <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 bg-amber-500/20 px-3 py-1.5 rounded-lg">
                          <span className="text-amber-400 text-xl font-bold">↑</span>
                          <span className="text-amber-400 text-sm font-bold">+67%</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-bold text-amber-400 tracking-wider mb-2">INSTITUTIONAL BUY-IN</div>
                        <div className="text-6xl font-black text-white mb-2">12<span className="text-3xl text-gray-400"> orgs</span></div>
                      </div>
                      <div className="pt-4 border-t border-amber-500/20">
                        <div className="text-xs text-amber-300/80 font-medium mb-2">WHY IT MATTERS</div>
                        <p className="text-sm text-gray-300 leading-relaxed">Shows credibility and trust from serious partners.</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-amber-500/10">
                        <span className="text-xs text-amber-400/70 font-semibold tracking-wide">BOARD-LEVEL SIGNAL</span>
                      </div>
                    </div>

                    {/* 5. Scalability Signal */}
                    <div className="bg-gradient-to-br from-indigo-900/40 via-indigo-800/20 to-gray-900/40 border-2 border-indigo-500/50 rounded-2xl p-8 backdrop-blur-sm shadow-2xl shadow-indigo-900/30 hover:shadow-indigo-900/50 transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 bg-indigo-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                          </svg>
                        </div>
                        <div className="flex items-center gap-2 bg-indigo-500/20 px-3 py-1.5 rounded-lg">
                          <span className="text-indigo-400 text-xl font-bold">↑</span>
                          <span className="text-indigo-400 text-sm font-bold">+156%</span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="text-sm font-bold text-indigo-400 tracking-wider mb-2">SCALABILITY SIGNAL</div>
                        <div className="text-6xl font-black text-white mb-2">3.4<span className="text-3xl text-gray-400">x</span></div>
                      </div>
                      <div className="pt-4 border-t border-indigo-500/20">
                        <div className="text-xs text-indigo-300/80 font-medium mb-2">WHY IT MATTERS</div>
                        <p className="text-sm text-gray-300 leading-relaxed">Proves it can grow beyond one pilot.</p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-indigo-500/10">
                        <span className="text-xs text-indigo-400/70 font-semibold tracking-wide">BOARD-LEVEL SIGNAL</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supporting Metrics - Much Smaller Now */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 tracking-wide">SUPPORTING PORTFOLIO METRICS</h4>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-700/30 rounded-lg p-3">
                      <div className="text-xs font-semibold text-emerald-400 mb-1">LOW RISK</div>
                      <div className="text-2xl font-bold text-white">3</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-900/20 to-amber-800/10 border border-amber-700/30 rounded-lg p-3">
                      <div className="text-xs font-semibold text-amber-400 mb-1">MEDIUM RISK</div>
                      <div className="text-2xl font-bold text-white">3</div>
                    </div>
                    <div className="bg-gradient-to-br from-rose-900/20 to-rose-800/10 border border-rose-700/30 rounded-lg p-3">
                      <div className="text-xs font-semibold text-rose-400 mb-1">HIGH RISK</div>
                      <div className="text-2xl font-bold text-white">2</div>
                    </div>
                    <div className="bg-gradient-to-br from-indigo-900/20 to-indigo-800/10 border border-indigo-700/30 rounded-lg p-3">
                      <div className="text-xs font-semibold text-indigo-400 mb-1">AVG BURNOUT</div>
                      <div className="text-2xl font-bold text-white">55.5</div>
                    </div>
                  </div>
                </div>

                {/* Entrepreneur Cards Grid - Compact Supporting View */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 tracking-wide">INDIVIDUAL ENTREPRENEURS (Click to view details)</h4>
                  <div className="grid grid-cols-4 gap-3">
                    {entrepreneurs.map((entrepreneur, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setSelectedEntrepreneur(entrepreneur.name)}
                        className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700/40 rounded-lg p-3 backdrop-blur-sm hover:border-indigo-500/50 transition-all cursor-pointer group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                            {entrepreneur.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className={`w-2 h-2 rounded-full ${
                            entrepreneur.risk === "high" ? "bg-rose-500" :
                            entrepreneur.risk === "medium" ? "bg-amber-500" :
                            "bg-emerald-500"
                          }`}></div>
                        </div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors mb-0.5 truncate">{entrepreneur.name}</h3>
                        <p className="text-xs text-gray-400 truncate mb-2">{entrepreneur.project}</p>
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Burnout</span>
                          <span className={`font-bold ${
                            entrepreneur.burnout >= 70 ? "text-rose-400" :
                            entrepreneur.burnout >= 60 ? "text-amber-400" :
                            "text-emerald-400"
                          }`}>{entrepreneur.burnout}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Alerts - Compact */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 rounded-lg p-4 backdrop-blur-sm">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 tracking-wide">RECENT ALERTS</h4>
                  <div className="space-y-2">
                    <div className="bg-rose-900/20 border-l-2 border-rose-500 p-3 rounded flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-1">
                        <svg className="w-4 h-4 text-rose-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-white">Priya Sharma - Critical Burnout (78/100)</div>
                          <div className="text-xs text-gray-500">2 hours ago</div>
                        </div>
                      </div>
                      <button onClick={() => setSelectedEntrepreneur("Priya Sharma")} className="text-xs bg-rose-600 hover:bg-rose-500 text-white px-2 py-1 rounded transition-colors flex-shrink-0">
                        View
                      </button>
                    </div>
                    <div className="bg-amber-900/20 border-l-2 border-amber-500 p-3 rounded flex items-center justify-between">
                      <div className="flex items-center gap-2 flex-1">
                        <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-white">Carlos Rodriguez - Low Runway (5.2mo)</div>
                          <div className="text-xs text-gray-500">5 hours ago</div>
                        </div>
                      </div>
                      <button onClick={() => setSelectedEntrepreneur("Carlos Rodriguez")} className="text-xs bg-amber-600 hover:bg-amber-500 text-white px-2 py-1 rounded transition-colors flex-shrink-0">
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
                      {/* Entrepreneur Header - Compact */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-lg font-bold">
                              {entrepreneur.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-white mb-0.5">{entrepreneur.name}</h2>
                              <p className="text-xs text-gray-400">{entrepreneur.project} • Month {entrepreneur.month}/{entrepreneur.total}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-gray-700/50 hover:bg-gray-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                              Full Report
                            </button>
                            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                              Schedule Call
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* TOP 4 KEY PERFORMANCE INDICATORS - MASSIVE HERO CARDS */}
                      <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full"></div>
                            <h3 className="text-lg font-bold text-white tracking-wide">KEY PERFORMANCE INDICATORS</h3>
                          </div>
                          <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${
                            entrepreneur.risk === "high" ? "bg-rose-600/20 text-rose-400 border-rose-500/30" :
                            entrepreneur.risk === "medium" ? "bg-amber-600/20 text-amber-400 border-amber-500/30" :
                            "bg-emerald-600/20 text-emerald-400 border-emerald-500/30"
                          }`}>
                            RISK: {entrepreneur.risk.toUpperCase()}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          {/* 1. Revenue Run-Rate */}
                          <div className={`bg-gradient-to-br border-2 rounded-2xl p-8 backdrop-blur-sm shadow-2xl transition-all ${
                            entrepreneur.growth > 0 
                              ? "from-emerald-900/40 via-emerald-800/20 to-gray-900/40 border-emerald-500/50 shadow-emerald-900/30"
                              : "from-rose-900/40 via-rose-800/20 to-gray-900/40 border-rose-500/50 shadow-rose-900/30"
                          }`}>
                            <div className="flex items-start justify-between mb-4">
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
                                entrepreneur.growth > 0
                                  ? "bg-emerald-500/20 border-emerald-500/30"
                                  : "bg-rose-500/20 border-rose-500/30"
                              }`}>
                                <svg className={`w-8 h-8 ${entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                                entrepreneur.growth > 0 ? "bg-emerald-500/20" : "bg-rose-500/20"
                              }`}>
                                <span className={`text-xl font-bold ${entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                                  {entrepreneur.growth > 0 ? "↑" : "↓"}
                                </span>
                                <span className={`text-sm font-bold ${entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"}`}>
                                  {entrepreneur.growth > 0 ? "+" : ""}{entrepreneur.growth}%
                                </span>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className={`text-sm font-bold tracking-wider mb-2 ${
                                entrepreneur.growth > 0 ? "text-emerald-400" : "text-rose-400"
                              }`}>
                                REVENUE RUN-RATE
                              </div>
                              <div className="text-6xl font-black text-white mb-2">
                                ${entrepreneur.revenue}<span className="text-3xl text-gray-400">M</span>
                              </div>
                            </div>
                            <div className={`pt-4 border-t ${
                              entrepreneur.growth > 0 ? "border-emerald-500/20" : "border-rose-500/20"
                            }`}>
                              <div className={`text-xs font-medium mb-2 ${
                                entrepreneur.growth > 0 ? "text-emerald-300/80" : "text-rose-300/80"
                              }`}>
                                WHY IT MATTERS
                              </div>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {entrepreneur.growth > 0 
                                  ? "Strong revenue growth indicates market fit and scalable business model."
                                  : "Revenue decline requires immediate attention to customer retention and acquisition."}
                              </p>
                            </div>
                          </div>

                          {/* 2. Cash Runway */}
                          <div className={`bg-gradient-to-br border-2 rounded-2xl p-8 backdrop-blur-sm shadow-2xl transition-all ${
                            entrepreneur.runway > 12
                              ? "from-emerald-900/40 via-emerald-800/20 to-gray-900/40 border-emerald-500/50 shadow-emerald-900/30"
                              : entrepreneur.runway > 6
                              ? "from-amber-900/40 via-amber-800/20 to-gray-900/40 border-amber-500/50 shadow-amber-900/30"
                              : "from-rose-900/40 via-rose-800/20 to-gray-900/40 border-rose-500/50 shadow-rose-900/30"
                          }`}>
                            <div className="flex items-start justify-between mb-4">
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
                                entrepreneur.runway > 12 ? "bg-emerald-500/20 border-emerald-500/30" :
                                entrepreneur.runway > 6 ? "bg-amber-500/20 border-amber-500/30" :
                                "bg-rose-500/20 border-rose-500/30"
                              }`}>
                                <svg className={`w-8 h-8 ${
                                  entrepreneur.runway > 12 ? "text-emerald-400" :
                                  entrepreneur.runway > 6 ? "text-amber-400" :
                                  "text-rose-400"
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                                entrepreneur.runway > 12 ? "bg-emerald-500/20" :
                                entrepreneur.runway > 6 ? "bg-amber-500/20" :
                                "bg-rose-500/20"
                              }`}>
                                <span className={`text-lg font-bold ${
                                  entrepreneur.runway > 12 ? "text-emerald-400" :
                                  entrepreneur.runway > 6 ? "text-amber-400" :
                                  "text-rose-400"
                                }`}>
                                  {entrepreneur.runway > 12 ? "✓" : entrepreneur.runway > 6 ? "⚠" : "!"}
                                </span>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className={`text-sm font-bold tracking-wider mb-2 ${
                                entrepreneur.runway > 12 ? "text-emerald-400" :
                                entrepreneur.runway > 6 ? "text-amber-400" :
                                "text-rose-400"
                              }`}>
                                CASH RUNWAY
                              </div>
                              <div className="text-6xl font-black text-white mb-2">
                                {entrepreneur.runway}<span className="text-3xl text-gray-400"> mo</span>
                              </div>
                            </div>
                            <div className={`pt-4 border-t ${
                              entrepreneur.runway > 12 ? "border-emerald-500/20" :
                              entrepreneur.runway > 6 ? "border-amber-500/20" :
                              "border-rose-500/20"
                            }`}>
                              <div className={`text-xs font-medium mb-2 ${
                                entrepreneur.runway > 12 ? "text-emerald-300/80" :
                                entrepreneur.runway > 6 ? "text-amber-300/80" :
                                "text-rose-300/80"
                              }`}>
                                WHY IT MATTERS
                              </div>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {entrepreneur.runway > 12
                                  ? "Healthy runway provides stability for strategic execution and growth initiatives."
                                  : entrepreneur.runway > 6
                                  ? "Moderate runway requires proactive fundraising planning and burn management."
                                  : "Critical runway demands immediate fundraising action or cost reduction."}
                              </p>
                            </div>
                          </div>

                          {/* 3. Burnout Index */}
                          <div className={`bg-gradient-to-br border-2 rounded-2xl p-8 backdrop-blur-sm shadow-2xl transition-all ${
                            entrepreneur.burnout >= 70
                              ? "from-rose-900/40 via-rose-800/20 to-gray-900/40 border-rose-500/50 shadow-rose-900/30"
                              : entrepreneur.burnout >= 60
                              ? "from-amber-900/40 via-amber-800/20 to-gray-900/40 border-amber-500/50 shadow-amber-900/30"
                              : "from-emerald-900/40 via-emerald-800/20 to-gray-900/40 border-emerald-500/50 shadow-emerald-900/30"
                          }`}>
                            <div className="flex items-start justify-between mb-4">
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
                                entrepreneur.burnout >= 70 ? "bg-rose-500/20 border-rose-500/30" :
                                entrepreneur.burnout >= 60 ? "bg-amber-500/20 border-amber-500/30" :
                                "bg-emerald-500/20 border-emerald-500/30"
                              }`}>
                                <svg className={`w-8 h-8 ${
                                  entrepreneur.burnout >= 70 ? "text-rose-400" :
                                  entrepreneur.burnout >= 60 ? "text-amber-400" :
                                  "text-emerald-400"
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                              </div>
                              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${
                                entrepreneur.burnout >= 70 ? "bg-rose-500/20" :
                                entrepreneur.burnout >= 60 ? "bg-amber-500/20" :
                                "bg-emerald-500/20"
                              }`}>
                                <span className={`text-lg font-bold ${
                                  entrepreneur.burnout >= 70 ? "text-rose-400" :
                                  entrepreneur.burnout >= 60 ? "text-amber-400" :
                                  "text-emerald-400"
                                }`}>
                                  {entrepreneur.burnout >= 70 ? "!" : entrepreneur.burnout >= 60 ? "⚠" : "✓"}
                                </span>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className={`text-sm font-bold tracking-wider mb-2 ${
                                entrepreneur.burnout >= 70 ? "text-rose-400" :
                                entrepreneur.burnout >= 60 ? "text-amber-400" :
                                "text-emerald-400"
                              }`}>
                                BURNOUT INDEX
                              </div>
                              <div className="text-6xl font-black text-white mb-2">
                                {entrepreneur.burnout}<span className="text-3xl text-gray-400">/100</span>
                              </div>
                            </div>
                            <div className={`pt-4 border-t ${
                              entrepreneur.burnout >= 70 ? "border-rose-500/20" :
                              entrepreneur.burnout >= 60 ? "border-amber-500/20" :
                              "border-emerald-500/20"
                            }`}>
                              <div className={`text-xs font-medium mb-2 ${
                                entrepreneur.burnout >= 70 ? "text-rose-300/80" :
                                entrepreneur.burnout >= 60 ? "text-amber-300/80" :
                                "text-emerald-300/80"
                              }`}>
                                WHY IT MATTERS
                              </div>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {entrepreneur.burnout >= 70
                                  ? "Critical burnout risk threatens business continuity and founder health. Immediate intervention required."
                                  : entrepreneur.burnout >= 60
                                  ? "Elevated stress levels require proactive wellbeing support and workload management."
                                  : "Healthy wellbeing levels support sustainable performance and long-term success."}
                              </p>
                            </div>
                          </div>

                          {/* 4. Overall Risk Status */}
                          <div className={`bg-gradient-to-br border-2 rounded-2xl p-8 backdrop-blur-sm shadow-2xl transition-all ${
                            entrepreneur.risk === "high"
                              ? "from-rose-900/40 via-rose-800/20 to-gray-900/40 border-rose-500/50 shadow-rose-900/30"
                              : entrepreneur.risk === "medium"
                              ? "from-amber-900/40 via-amber-800/20 to-gray-900/40 border-amber-500/50 shadow-amber-900/30"
                              : "from-emerald-900/40 via-emerald-800/20 to-gray-900/40 border-emerald-500/50 shadow-emerald-900/30"
                          }`}>
                            <div className="flex items-start justify-between mb-4">
                              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${
                                entrepreneur.risk === "high" ? "bg-rose-500/20 border-rose-500/30" :
                                entrepreneur.risk === "medium" ? "bg-amber-500/20 border-amber-500/30" :
                                "bg-emerald-500/20 border-emerald-500/30"
                              }`}>
                                <svg className={`w-8 h-8 ${
                                  entrepreneur.risk === "high" ? "text-rose-400" :
                                  entrepreneur.risk === "medium" ? "text-amber-400" :
                                  "text-emerald-400"
                                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                entrepreneur.risk === "high" ? "bg-rose-500/30" :
                                entrepreneur.risk === "medium" ? "bg-amber-500/30" :
                                "bg-emerald-500/30"
                              }`}>
                                <span className={`w-3 h-3 rounded-full ${
                                  entrepreneur.risk === "high" ? "bg-rose-400 animate-pulse" :
                                  entrepreneur.risk === "medium" ? "bg-amber-400 animate-pulse" :
                                  "bg-emerald-400"
                                }`}></span>
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className={`text-sm font-bold tracking-wider mb-2 ${
                                entrepreneur.risk === "high" ? "text-rose-400" :
                                entrepreneur.risk === "medium" ? "text-amber-400" :
                                "text-emerald-400"
                              }`}>
                                OVERALL STATUS
                              </div>
                              <div className={`text-6xl font-black mb-2 ${
                                entrepreneur.risk === "high" ? "text-rose-400" :
                                entrepreneur.risk === "medium" ? "text-amber-400" :
                                "text-emerald-400"
                              }`}>
                                {entrepreneur.risk.charAt(0).toUpperCase() + entrepreneur.risk.slice(1)}
                              </div>
                            </div>
                            <div className={`pt-4 border-t ${
                              entrepreneur.risk === "high" ? "border-rose-500/20" :
                              entrepreneur.risk === "medium" ? "border-amber-500/20" :
                              "border-emerald-500/20"
                            }`}>
                              <div className={`text-xs font-medium mb-2 ${
                                entrepreneur.risk === "high" ? "text-rose-300/80" :
                                entrepreneur.risk === "medium" ? "text-amber-300/80" :
                                "text-emerald-300/80"
                              }`}>
                                WHY IT MATTERS
                              </div>
                              <p className="text-sm text-gray-300 leading-relaxed">
                                {entrepreneur.risk === "high"
                                  ? "High-risk status requires immediate advisor intervention and support planning."
                                  : entrepreneur.risk === "medium"
                                  ? "Medium-risk status warrants close monitoring and proactive support measures."
                                  : "Low-risk status indicates healthy trajectory and sustainable performance."}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* SUPPORTING DETAILS - Compact Sections */}
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-400 tracking-wide">DETAILED METRICS (Supporting)</h4>
                        
                        {/* Business Performance Section - Compact */}
                        <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 rounded-lg p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold text-white">Business Performance</h3>
                            <div className="bg-blue-600/20 border border-blue-500/30 px-2 py-0.5 rounded">
                              <span className="text-blue-300 text-xs font-semibold">FINANCE</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-3">
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Revenue trend</div>
                              <div className="text-lg font-bold text-white">+7.4%</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Cashflow</div>
                              <div className="text-lg font-bold text-white">1.6x</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Pipeline</div>
                              <div className="text-lg font-bold text-white">$2.1M</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Cost pressure</div>
                              <div className="text-lg font-bold text-white">+3.1%</div>
                            </div>
                          </div>
                        </section>

                        {/* Workforce & Productivity Section - Compact */}
                        <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 rounded-lg p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold text-white">Workforce & Productivity</h3>
                            <div className="bg-purple-600/20 border border-purple-500/30 px-2 py-0.5 rounded">
                              <span className="text-purple-300 text-xs font-semibold">OPERATIONS</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-3">
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Utilisation</div>
                              <div className="text-lg font-bold text-white">82%</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Velocity</div>
                              <div className="text-lg font-bold text-white">+12%</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Absenteeism</div>
                              <div className="text-lg font-bold text-white">1.4%</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Overtime</div>
                              <div className="text-lg font-bold text-white">29 hrs</div>
                            </div>
                          </div>
                        </section>

                        {/* Wellbeing Sub-metrics - Compact */}
                        <section className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 border border-gray-700/30 rounded-lg p-4 backdrop-blur-sm">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-sm font-bold text-white">Wellbeing Sub-Metrics</h3>
                            <div className="bg-purple-600/20 border border-purple-500/30 px-2 py-0.5 rounded">
                              <span className="text-purple-300 text-xs font-semibold">WELLBEING</span>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-3">
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Cognitive load</div>
                              <div className="text-lg font-bold text-white">71/100</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Engagement</div>
                              <div className="text-lg font-bold text-white">7.6/10</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Sleep quality</div>
                              <div className="text-lg font-bold text-white">6.8/10</div>
                            </div>
                            <div className="bg-gray-800/30 border border-gray-700/20 rounded p-2">
                              <div className="text-xs text-gray-400 mb-1">Work hours</div>
                              <div className="text-lg font-bold text-white">52 hrs</div>
                            </div>
                          </div>
                        </section>
                      </div>

                      {/* Quick Insights - Very Compact */}
                      <div className="bg-gradient-to-br from-indigo-900/15 to-purple-900/15 border border-indigo-700/20 rounded-lg p-3 backdrop-blur-sm">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-sm font-bold text-white">AI Quick Insights</h3>
                          <span className="text-xs text-gray-500">2h ago</span>
                        </div>
                        <div className="space-y-1.5">
                          {entrepreneur.growth > 0 ? (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="text-emerald-400">↑</span> Revenue up {entrepreneur.growth}%
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="text-rose-400">↓</span> Revenue down {Math.abs(entrepreneur.growth)}%
                            </div>
                          )}
                          
                          {entrepreneur.burnout >= 60 && (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="text-amber-400">⚠</span> Burnout elevated at {entrepreneur.burnout}/100
                            </div>
                          )}
                          
                          {entrepreneur.runway < 8 && (
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="text-rose-400">!</span> Low runway: {entrepreneur.runway}mo
                            </div>
                          )}
                        </div>
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
            <div className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="NeuroSME Logo" 
                width={20} 
                height={20}
                className="rounded"
              />
              <span>© 2026 NeuroSME Platform</span>
            </div>
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
