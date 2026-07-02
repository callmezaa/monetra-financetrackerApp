import { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight, BarChart3, Wallet, Target, PieChart, Repeat, Shield,
  TrendingUp, Menu, X, Sparkles, Check, BellRing,
} from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Cerdas",
    description: "Real-time overview keuangan Anda dengan chart interaktif, tren cashflow, dan smart insights.",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/10",
  },
  {
    icon: Wallet,
    title: "Manajemen Transaksi",
    description: "Catat pemasukan & pengeluaran dengan kategori yang bisa dikustomisasi. Filter, cari, dan urutkan.",
    gradient: "from-violet-500/20 to-violet-600/5",
    border: "border-violet-500/10",
  },
  {
    icon: Target,
    title: "Budget & Goals",
    description: "Tetapkan budget per kategori dan target tabungan. Pantau progres real-time dengan notifikasi.",
    gradient: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/10",
  },
  {
    icon: PieChart,
    title: "Laporan Keuangan",
    description: "Laporan bulanan, breakdown kategori, export PDF/CSV. Cetak laporan tahunan dengan satu klik.",
    gradient: "from-rose-500/20 to-rose-600/5",
    border: "border-rose-500/10",
  },
  {
    icon: Repeat,
    title: "Transaksi Berulang",
    description: "Otomatiskan billing bulanan, subscription, dan pemasukan rutin. Biarkan sistem yang mengingatkan.",
    gradient: "from-sky-500/20 to-sky-600/5",
    border: "border-sky-500/10",
  },
  {
    icon: Shield,
    title: "Aman & Privasi",
    description: "Data Anda dienkripsi dengan JWT authentication. Password di-hash dengan bcrypt cost 14.",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/10",
  },
];

const testimonials = [
  { name: "Aulia Rahman", role: "Freelancer", text: "Monetra bikin saya sadar kemana uang saya pergi setiap bulan. Fitur budget alert-nya lifesaver!", rating: 5 },
  { name: "Dian Puspita", role: "Small Business Owner", text: "Laporan keuangan yang dulu ribet sekarang cuma butuh beberapa klik. Export PDF-nya sangat membantu.", rating: 5 },
  { name: "Rizky Pratama", role: "Software Engineer", text: "UI/UX-nya bersih banget. Dark modenya enak dipandang mata pas coding malam-malam.", rating: 5 },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] },
  },
};

function LandingPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const navBg = useTransform(scrollYProgress, [0, 0.05], ["rgba(255,255,255,0)", "rgba(255,255,255,0.8)"]);
  const navBlur = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(24px)"]);

  const featureVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0, 1] },
    }),
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden">
      {/* ─── NAV ─── */}
      <motion.nav
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
        }}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent dark:border-transparent transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow duration-300">
                <img src="/logo.png" alt="Monetra" className="w-6 h-6 object-contain brightness-0 invert" />
              </div>
              <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                Monetra
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate("/login")}
                className="px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate("/register")}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-full transition-all duration-200 active:scale-[0.96] shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40"
              >
                Get Started Free
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative size-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                    transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  >
                    <X className="size-5 text-slate-900 dark:text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.25, filter: "blur(4px)" }}
                    transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                  >
                    <Menu className="size-5 text-slate-900 dark:text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="md:hidden overflow-hidden bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-2xl border-t border-slate-100 dark:border-slate-800"
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 space-y-3 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => navigate("/login")}
                    className="w-full py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/register")}
                    className="w-full py-3 bg-emerald-600 text-white text-sm font-semibold rounded-full hover:bg-emerald-500 transition-all"
                  >
                    Get Started Free
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-amber-500/5 dark:bg-amber-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Hero Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="pt-8 lg:pt-0"
            >
              <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-8">
                <Sparkles className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 tracking-wide uppercase">
                  Smart Financial Tracking
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-[clamp(2.5rem,7vw,5rem)] font-black leading-[0.88] tracking-[-0.04em] text-slate-900 dark:text-white text-balance"
              >
                Kendalikan{" "}
                <span className="text-emerald-600 dark:text-emerald-400 relative">
                  Keuangan
                  <svg className="absolute -bottom-2 left-0 w-full h-2.5 text-emerald-600/20 dark:text-emerald-400/20" viewBox="0 0 200 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,0 100,5 Q150,10 200,5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
                <br />
                dengan Percaya Diri
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="mt-6 text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed font-medium text-balance"
              >
                Monetra membantu Anda melacak pemasukan & pengeluaran, mengatur budget, mencapai target tabungan — semua dalam satu dashboard yang intuitif dan powerful.
              </motion.p>

              <motion.div variants={staggerItem} className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/register")}
                  className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-full transition-all duration-200 active:scale-[0.96] shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
                >
                  Mulai Gratis
                  <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => navigate("/login")}
                  className="px-8 py-4 text-slate-700 dark:text-slate-300 font-bold text-base border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 active:scale-[0.96] flex items-center justify-center gap-2"
                >
                  Demo Langsung
                </button>
              </motion.div>

              <motion.div variants={staggerItem} className="mt-12 flex items-center gap-8 text-sm">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="size-8 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 ring-2 ring-white dark:ring-[#020617]"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="size-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 font-semibold mt-0.5 text-xs">
                    Rated 5/5 by early users
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual - Gradient Spotlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="relative"
            >
              <div className="relative rounded-[30px] overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-violet-600 p-[2px] shadow-2xl shadow-emerald-500/20">
                <div className="rounded-[29px] bg-white dark:bg-[#0f172a] p-6 lg:p-8 overflow-hidden">
                  {/* Mock Dashboard Preview */}
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-emerald-500" />
                        <div className="size-3 rounded-full bg-amber-400" />
                        <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-600" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wide uppercase">Dashboard</span>
                    </div>

                    {/* Balance */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-500/10 dark:to-emerald-600/5 border border-emerald-200 dark:border-emerald-500/10">
                      <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">Total Balance</p>
                      <p className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Rp 24.580.000</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <TrendingUp className="size-3.5 text-emerald-500" />
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">+12.5%</span>
                        <span className="text-xs text-slate-400 dark:text-slate-500">from last month</span>
                      </div>
                    </div>

                    {/* Income / Expense */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-emerald-50/50 dark:bg-emerald-500/5 border border-emerald-100 dark:border-emerald-500/10">
                        <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Income</p>
                        <p className="text-lg font-black text-slate-900 dark:text-white mt-1 tracking-tight">Rp 18.2jt</p>
                      </div>
                      <div className="p-4 rounded-xl bg-rose-50/50 dark:bg-rose-500/5 border border-rose-100 dark:border-rose-500/10">
                        <p className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">Expense</p>
                        <p className="text-lg font-black text-slate-900 dark:text-white mt-1 tracking-tight">Rp 12.8jt</p>
                      </div>
                    </div>

                    {/* Mini Chart Bars */}
                    <div className="flex items-end gap-1.5 h-16 pt-2">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 88].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.4, ease: [0.25, 0.1, 0, 1] }}
                          className="flex-1 rounded-[3px] bg-gradient-to-t from-emerald-500 to-emerald-400 dark:from-emerald-600 dark:to-emerald-400 opacity-80 hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-2">
                      {[
                        { label: "Gaji Bulanan", amount: "+Rp 8.500.000", type: "income" },
                        { label: "GoFood", amount: "-Rp 45.000", type: "expense" },
                        { label: "Freelance Project", amount: "+Rp 2.500.000", type: "income" },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                          className="flex items-center justify-between py-1.5"
                        >
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{item.label}</span>
                          <span className={`text-xs font-black tabular-nums ${item.type === "income" ? "text-emerald-600 dark:text-emerald-400" : "text-rose-500"}`}>
                            {item.amount}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 px-5 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-700 flex items-center gap-3"
              >
                <BellRing className="size-4 text-emerald-500" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Budget Alert</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">Transport 80% terpakai</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="relative py-28 lg:py-36">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent dark:via-emerald-500/[0.03]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-6">
              <Sparkles className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 tracking-wide uppercase">Features</span>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-slate-900 dark:text-white text-balance"
            >
              Semua yang Anda Butuhkan
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">untuk Financial Freedom</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-5 text-lg text-slate-500 dark:text-slate-400 font-medium text-balance max-w-lg mx-auto"
            >
              Dari tracking transaksi harian hingga laporan tahunan — Monetra hadir dengan fitur lengkap tanpa ribet.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={featureVariants}
                  className={`group relative p-7 rounded-[20px] bg-white dark:bg-[#0f172a] border ${feature.border} hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1`}
                >
                  <div className={`absolute inset-0 rounded-[20px] bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  <div className="relative z-10">
                    <div className="size-11 rounded-[14px] bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-violet-600" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "Rp 50M+", label: "Tracked Monthly" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.9★", label: "User Rating" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-black text-white tracking-tight tabular-nums">{stat.value}</p>
                <p className="mt-1.5 text-sm font-semibold text-emerald-100/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section id="testimonials" className="relative py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.h2
              variants={staggerItem}
              className="text-[clamp(2rem,4.5vw,3rem)] font-black leading-[0.92] tracking-[-0.03em] text-slate-900 dark:text-white text-balance"
            >
              Apa Kata{" "}
              <span className="text-emerald-600 dark:text-emerald-400">Mereka</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-4 text-lg text-slate-500 dark:text-slate-400 font-medium text-balance"
            >
              Bergabung dengan ribuan pengguna yang sudah merasakan perbedaannya.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0, 1] }}
                className="p-7 rounded-[20px] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-slate-800 hover:border-emerald-500/20 dark:hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg key={j} className="size-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-5">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 lg:py-36">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 mb-8">
              <Sparkles className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 tracking-wide uppercase">Mulai Sekarang</span>
            </motion.div>
            <motion.h2
              variants={staggerItem}
              className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[0.92] tracking-[-0.03em] text-slate-900 dark:text-white text-balance"
            >
              Siap Mengelola Keuangan
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">dengan Lebih Baik?</span>
            </motion.h2>
            <motion.p
              variants={staggerItem}
              className="mt-5 text-lg text-slate-500 dark:text-slate-400 font-medium text-balance max-w-md mx-auto"
            >
              Gratis selamanya. Tidak perlu kartu kredit. Mulai dalam 2 menit.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/register")}
                className="group px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-full transition-all duration-200 active:scale-[0.96] shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
              >
                Buat Akun Gratis
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/login")}
                className="px-10 py-4 text-slate-700 dark:text-slate-300 font-bold text-base border border-slate-200 dark:border-slate-700 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 active:scale-[0.96]"
              >
                Sign In
              </button>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-10 flex items-center justify-center gap-6 text-xs font-semibold text-slate-400 dark:text-slate-500">
              <div className="flex items-center gap-1.5">
                <Check className="size-3.5 text-emerald-500" />
                No credit card
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="size-3.5 text-emerald-500" />
                Free forever
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="size-3.5 text-emerald-500" />
                Cancel anytime
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-[#0f172a]/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-9 rounded-[10px] bg-emerald-600 flex items-center justify-center">
                  <img src="/logo.png" alt="" className="w-5 h-5 object-contain brightness-0 invert" />
                </div>
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">Monetra</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xs">
                Platform manajemen keuangan pribadi yang membantu Anda mencapai kebebasan finansial.
              </p>
            </div>

            {[
              { title: "Product", links: ["Features", "Pricing", "FAQ", "Changelog"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              &copy; {new Date().getFullYear()} Monetra. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Twitter", "GitHub", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
