import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  BarChart2, 
  Bitcoin, 
  Circle, 
  Ban, 
  ExternalLink, 
  ArrowRight, 
  Copy, 
  ArrowDown ,
  FileText // New icon for the contract label
} from 'lucide-react';
import './App.css';

// CONFIGURATION
const CONTRACT_ADDRESS = "BoY26AbA2fFqx2hu8hHbBAw1nC6WzmDmJ5vaaQrapump";
const CHART_URL = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}`;
const MAIN_X = "https://x.com/NOCOINSOL_";
const COMMUNITY_X = "https://x.com/i/communities/2019977496632999953";
const BUY_LINK = `https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${CONTRACT_ADDRESS}`;

export default function App() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* NAVBAR */}
      <nav>
        <button className="nav-btn" onClick={() => scrollTo('hero')}>Home</button>
        <button className="nav-btn" onClick={() => scrollTo('timeline')}>Timeline</button>
        <button className="nav-btn" onClick={() => scrollTo('what-is')}>Lore</button>
        <button className="nav-btn" onClick={() => scrollTo('socials')}>Socials</button>
        <a href={BUY_LINK} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
          <button className="nav-btn" style={{background: '#ffc107'}}>Buy</button>
        </a>
      </nav>

      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <section className="hero" id="hero">
        
        {/* PURE ORANGE LOGO */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="main-logo-container"
        >
          {/* Empty: Just Pure Orange */}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1>nocoin</h1>
          <p className="subtitle">The Original Anti-Coin. Zero Utility.</p>

          <p className="description">
            Years after Buttcoin mocked Bitcoin, a new question emerged.<br/>
            <span className="highlight">"Buttcoin? What about NOCOIN?"</span><br/>
            Born from the legends of r/Buttcoin. The currency of the future.
          </p>

          <div className="hero-btns">
            <a href={BUY_LINK} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
              <button className="cta-btn btn-buy">
                BUY NOCOIN <ShoppingCart size={20} fill="currentColor" />
              </button>
            </a>
            <a href={CHART_URL} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>
              <button className="cta-btn btn-learn">
                VIEW CHART <BarChart2 size={20} />
              </button>
            </a>
          </div>

          <div className="ca-box" onClick={copyToClipboard} style={{marginTop: '30px', fontSize: '0.9rem'}}>
            <span>{CONTRACT_ADDRESS.slice(0,6)}...{CONTRACT_ADDRESS.slice(-4)}</span>
            <Copy size={16} />
          </div>
          {copied && <div style={{marginTop: '5px', fontWeight: '900', color: '#f7931a'}}>COPIED!</div>}
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ 
            position: 'absolute', 
            bottom: '30px', 
            cursor: 'pointer', 
            opacity: 0.5 
          }}
          onClick={() => scrollTo('timeline')}
        >
          <ArrowDown size={40} />
        </motion.div>
      </section>


      {/* 2. TIMELINE SECTION */}
      {/* 2. TIMELINE SECTION */}
      <section className="timeline-section" id="timeline">
        <div className="timeline-card">
          <div className="timeline-line"></div>

          {/* BITCOIN (2009) */}
          <div className="timeline-item">
            <div className="timeline-circle" style={{background: '#f7931a'}}>
              <Bitcoin size={50} color="white" />
            </div>
            <div className="timeline-name">BITCOIN</div>
            <div className="timeline-year">2009</div>
          </div>

          {/* BUTTCOIN (2011) - Custom Logo Replica */}
          <div className="timeline-item">
            <div className="timeline-circle" style={{background: '#f7931a', padding: 0, overflow: 'hidden'}}>
              {/* This SVG draws the Buttcoin "Cheeks" Logo */}
              <svg viewBox="0 0 100 100" width="100%" height="100%">
                <circle cx="50" cy="50" r="50" fill="#f7931a" />
                <path 
                  d="M 20,20 Q 5,55 25,100 M 80,20 Q 95,55 75,100 M 50,40 Q 40,70 35,100 M 50,40 Q 60,70 65,100" 
                  stroke="white" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="timeline-name">BUTTCOIN</div>
            <div className="timeline-year">2011</div>
          </div>

          {/* NOCOIN (2018) - Pure Orange */}
          <div className="timeline-item">
            {/* Pure Orange Circle, No Icon */}
            <div className="timeline-circle" style={{background: '#f7931a'}}></div>
            <div className="timeline-name">NOCOIN</div>
            <div className="timeline-year">2018</div>
          </div>

        </div>
      </section>

      {/* 3. WHAT IS NOCOIN (LORE) SECTION */}
      <section className="what-is-section" id="what-is">
        <h2 className="section-header">What's Nocoin?</h2>
        
        <div className="content-grid">
          {/* LEFT: MAIN INFO */}
          <div className="info-card">
            <div className="pill-badge">WHAT IT IS</div>
            <h3 className="info-headline">
              Nocoin is the OG Anti-Coin, 15 years in the making.
            </h3>
            <p className="info-text">
              It started as a forum-born denial in late 2011. While Buttcoin mocked Bitcoin, the "Nocoiners" were the true holdouts. Eventually, the skepticism went full-circle into a real token.
            </p>
            <ul className="info-bullets">
              <li><strong>2011:</strong> The term 'Nocoiner' spreads across forums to describe those who refuse to hold Bitcoin.</li>
              <li><strong>The Prophecy:</strong> The official Buttcoin account declared: "NOCOIN is the future."</li>
              <li><strong>2026:</strong> Nocoin launches on Solana. No utility. Just the badge of honor of holding nothing.</li>
            </ul>
            <div className="tags-container">
              <span className="tag">Since 2011</span>
              <span className="tag">Culture + Satire</span>
              <span className="tag">Now on Solana</span>
            </div>
          </div>

          {/* RIGHT: FORUM & EXTRAS */}
          <div className="right-stack">
            {/* The Forum Post Mockup */}
            <div className="forum-card">
              <div className="forum-header">
                <span>Re: buttcoin.org</span>
                <span>June 10, 2011</span>
              </div>
              <div className="forum-body">
                <p><strong>{'>'} WILL BUTTCOIN MAKE THEIR OWN BLOCKCHAIN??</strong></p>
                <br/>
                <p>Nah man. The future isn't Buttcoin.</p>
                <p>The future is NOCOIN.</p>
                <p>Imagine a coin that does... absolutely nothing.</p>
                <br/>
                <p>Hmmmm.... DEAL!</p>
                <p>lol</p>
              </div>
            </div>

            {/* Mini Info Card 1 */}
            <div className="mini-card">
              <div className="mini-title">EARLY-ERA MATH</div>
              <p>0 Bitcoin = ∞ Nocoins. Exactly the kind of absurd, early-internet humor that made the term stick.</p>
            </div>

            {/* Mini Info Card 2 */}
            <div className="mini-card">
              <div className="mini-title">READY TO BUY?</div>
              <p>You can't buy Nocoin. (Just kidding, click the button below).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOCIALS SECTION */}
      <section className="socials-section" id="socials">
        <h2 className="section-header" style={{textShadow: '3px 3px 0 #000, -1px -1px 0 #000'}}>
          Socials
        </h2>
        <p className="subtitle" style={{marginBottom: '40px', color: '#666'}}>
          Follow Nocoin and track the chart
        </p>

        <div className="socials-container">
          
          {/* TWITTER CARD */}
          <a href={MAIN_X} target="_blank" rel="noreferrer" className="social-card">
            <div className="social-left">
              <div className="icon-box">𝕏</div>
              <div className="social-info">
                <span className="social-platform">Twitter</span>
                <span className="social-handle">@NOCOINSOL_</span>
              </div>
            </div>
            <div className="action-pill">
              Follow <ArrowRight size={18} strokeWidth={3} />
            </div>
          </a>

          {/* COMMUNITY CARD */}
          <a href={COMMUNITY_X} target="_blank" rel="noreferrer" className="social-card">
            <div className="social-left">
              <div className="icon-box">
                <Ban size={30} strokeWidth={3} />
              </div>
              <div className="social-info">
                <span className="social-platform">Community</span>
                <span className="social-handle">Nocoiners</span>
              </div>
            </div>
            <div className="action-pill">
              Join <ArrowRight size={18} strokeWidth={3} />
            </div>
          </a>

        </div>
      </section>

    {/* NEW FOOTER SECTION */}
      <section className="footer-section">
        
        {/* The Contract Card */}
        <div className="contract-card">
          <div className="contract-label">
            <FileText size={24} strokeWidth={2.5} /> Solana Contract Address:
          </div>
          
          <div className="address-box" onClick={copyToClipboard} title="Click to Copy">
            {copied ? "COPIED TO CLIPBOARD!" : CONTRACT_ADDRESS}
          </div>
        </div>

        {/* The Bold Tagline */}
        <h3 className="footer-tagline">
          NOCOIN - The Original Anti-Coin Since 2018
        </h3>

      </section>
      
    </>
  );
}