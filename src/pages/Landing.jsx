import { Link } from "react-router-dom";
import { assets } from "../assets/assets.js";
import {
    ArrowRight,
    LayoutDashboard,
    List,
    Wallet,
    Coins,
    User,
    TrendingUp,
    TrendingDown,
} from "lucide-react";

const Landing = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900 flex flex-col">
            {/* Top Navbar */}
            <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
                    {/* Left Brand */}
                    <Link to="/" className="flex items-center gap-2.5">
                        <img
                            src={assets.logo}
                            alt="Money Manager"
                            className="h-9 w-9 object-contain"
                        />
                        <span className="text-lg font-bold text-slate-900 tracking-tight">
                            Money Manager
                        </span>
                    </Link>

                    {/* Center Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
                        <a href="#home" className="hover:text-purple-600 transition-colors">
                            Home
                        </a>
                        <a href="#about" className="hover:text-purple-600 transition-colors">
                            About us
                        </a>
                        <a href="#contact" className="hover:text-purple-600 transition-colors">
                            Contact us
                        </a>
                    </nav>

                    {/* Right Auth Actions */}
                    <div className="flex items-center gap-5">
                        <Link
                            to="/login"
                            className="text-sm font-medium text-slate-700 hover:text-purple-600 transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors shadow-sm"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main id="home" className="flex-1">
                <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-20 pb-14 text-center">
                    <h1 className="text-4xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-slate-900 leading-[1.15]">
                        Take Control of Your Finances
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Your foundation for secure, intelligent financial management.
                        Effortlessly track your income and expenses to achieve your financial
                        goals.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/signup"
                            className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors shadow-md shadow-purple-600/20"
                        >
                            Start Tracking for Free
                        </Link>
                        <a
                            href="#about"
                            className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200/80 text-slate-800 text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* Dashboard Preview Window */}
                <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
                    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] overflow-hidden">
                        {/* Mock Top Bar */}
                        <div className="flex items-center justify-between px-6 py-3.5 border-b border-gray-100 bg-white">
                            <div className="flex items-center gap-2">
                                <img
                                    src={assets.logo}
                                    alt="Money Manager"
                                    className="h-7 w-7 object-contain"
                                />
                                <span className="text-sm font-bold text-slate-900">
                                    Money Manager
                                </span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                                <User className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Mock Body */}
                        <div className="flex bg-[#fcfbfc]">
                            {/* Mock Sidebar */}
                            <aside className="hidden md:flex flex-col w-56 bg-white border-r border-gray-100 p-4 shrink-0">
                                <div className="flex flex-col items-center py-3 mb-4">
                                    <div className="w-16 h-16 rounded-full bg-amber-100 border-2 border-purple-200 flex items-center justify-center text-2xl mb-2">
                                        🎓
                                    </div>
                                    <span className="text-sm font-semibold text-slate-800">
                                        Ansh
                                    </span>
                                </div>

                                <div className="space-y-1.5 text-xs font-medium">
                                    <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-purple-700 text-white">
                                        <LayoutDashboard className="w-4 h-4" />
                                        <span>Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-600">
                                        <List className="w-4 h-4" />
                                        <span>Category</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-600">
                                        <Wallet className="w-4 h-4" />
                                        <span>Income</span>
                                    </div>
                                    <div className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-slate-600">
                                        <Coins className="w-4 h-4" />
                                        <span>Expense</span>
                                    </div>
                                </div>
                            </aside>

                            {/* Mock Main Content */}
                            <div className="flex-1 p-5 sm:p-6 space-y-5">
                                {/* Top 3 Summary Cards */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3.5">
                                        <div className="w-11 h-11 rounded-full bg-purple-700 text-white flex items-center justify-center shrink-0">
                                            <Wallet className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400">Total Balance</p>
                                            <p className="text-lg font-bold text-slate-900">
                                                &#8377;84,200
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3.5">
                                        <div className="w-11 h-11 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0">
                                            <Wallet className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400">Total Income</p>
                                            <p className="text-lg font-bold text-slate-900">
                                                &#8377;1,85,000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3.5">
                                        <div className="w-11 h-11 rounded-full bg-red-700 text-white flex items-center justify-center shrink-0">
                                            <Coins className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400">Total Expense</p>
                                            <p className="text-lg font-bold text-slate-900">
                                                &#8377;1,00,800
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom 2 Cards */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {/* Recent Transactions */}
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-sm font-semibold text-slate-800">
                                                Recent Transactions
                                            </h3>
                                            <span className="text-[11px] font-medium text-slate-600 bg-gray-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                                                More <ArrowRight className="w-3 h-3" />
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between py-1.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-base">
                                                        💰
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-slate-800">
                                                            Freelance
                                                        </p>
                                                        <p className="text-[11px] text-slate-400">
                                                            13th Jul 2025
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                                                    + &#8377;8,000 <TrendingUp className="w-3 h-3" />
                                                </span>
                                            </div>

                                            <div className="flex items-center justify-between py-1.5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-base">
                                                        🚕
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-slate-800">
                                                            Uber
                                                        </p>
                                                        <p className="text-[11px] text-slate-400">
                                                            12th Jul 2025
                                                        </p>
                                                    </div>
                                                </div>
                                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-50 px-2.5 py-1 rounded-md">
                                                    - &#8377;300 <TrendingDown className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Financial Overview Donut Preview */}
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs flex flex-col">
                                        <h3 className="text-sm font-semibold text-slate-800 mb-3">
                                            Financial Overview
                                        </h3>

                                        <div className="flex-1 flex items-center justify-center py-2">
                                            <div className="relative w-36 h-36 rounded-full flex items-center justify-center bg-[conic-gradient(#5b21b6_0%_48%,#991b1b_48%_100%)]">
                                                <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center text-center">
                                                    <span className="text-[10px] text-slate-400">
                                                        Total Balance
                                                    </span>
                                                    <span className="text-xs font-bold text-slate-900">
                                                        &#8377;84,200
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer
                id="contact"
                className="border-t border-gray-100 bg-white py-6 text-center text-xs text-slate-500"
            >
                &copy; {new Date().getFullYear()} Money Manager. All rights reserved to Alphaaansh.
            </footer>
        </div>
    );
};

export default Landing;