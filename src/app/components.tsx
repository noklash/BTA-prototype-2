import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import type { Status } from "./data";

const nav = [["About BTA","/about"],["Our People","/our-people"],["Knowledge","/knowledge"],["Enterprise","/enterprise"],["Community Impact","/community-impact"],["Blue Economy","/blue-economy"],["Heritage","/heritage"],["Events & Media","/events"],["Partner","/partner"]];
export function Logo({ light=false }: { light?: boolean }) {
  return <Link to="/" className={`logo ${light?"light":""}`}><span className="logo-mark"><i/><i/><i/></span><span><b>BTA</b><small>BAINBO TARIA AWO</small></span></Link>;
}
export function Btn({ to, children, kind="primary" }: { to:string; children:React.ReactNode; kind?:string }) {
  return <Link className={`btn ${kind}`} to={to}>{children}<ArrowRight size={14}/></Link>;
}
export function StatusTag({ status }: { status:Status }) { return <span className={`status ${status.replace(" ","-").toLowerCase()}`}><i/>{status}</span>; }
export function Header() {
  const [open,setOpen]=useState(false), [search,setSearch]=useState(false); const loc=useLocation();
  useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[loc.pathname]);
  return <><div className="utility"><div className="shell"><span>Our heritage. Our people. Our future.</span><div><Link to="/portal">Members Login</Link><button onClick={()=>setSearch(true)}><Search size={13}/> Search</button></div></div></div>
  <header><div className="shell head"><Logo/><nav>{nav.map(([a,b])=><NavLink key={b} to={b}>{a}{["About BTA","Our People","Knowledge"].includes(a)&&<ChevronDown size={11}/>}</NavLink>)}</nav><div className="actions"><Link to="/support">Support</Link><Btn to="/join" kind="gold">Join BTA</Btn></div><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  {open&&<div className="mobile-nav">{nav.map(([a,b])=><Link key={b} to={b}>{a}<ArrowRight size={14}/></Link>)}<Btn to="/join" kind="gold">Join BTA</Btn><Btn to="/portal" kind="outline">Members Login</Btn></div>}</header>
  {search&&<div className="modal" onClick={()=>setSearch(false)}><div onClick={e=>e.stopPropagation()}><button onClick={()=>setSearch(false)}><X/></button><span className="eyebrow">Global search</span><h2>What are you looking for?</h2><label><Search/><input autoFocus placeholder="Search initiatives, events, knowledge…"/></label><p>Try “Blue Economy”, “membership” or “community projects”.</p></div></div>}</>;
}
export function Footer(){return <footer><div className="shell footer-grid"><div><Logo light/><p className="footer-statement">Connecting generations, sharing knowledge, creating opportunities and building a lasting legacy.</p></div><div className="footlinks"><div><b>Explore</b><Link to="/about">About BTA</Link><Link to="/our-people">Our People</Link><Link to="/heritage">Heritage</Link><Link to="/events">Events</Link></div><div><b>Our work</b><Link to="/knowledge">Knowledge</Link><Link to="/enterprise">Enterprise</Link><Link to="/community-impact">Community Impact</Link><Link to="/blue-economy">Blue Economy</Link></div><div><b>Participate</b><Link to="/join">Join BTA</Link><Link to="/partner">Partner</Link><Link to="/support">Support</Link><Link to="/portal">Members Login</Link></div></div><div className="newsletter"><b>Stay connected</b><p>Occasional institutional updates.</p><label><input placeholder="Email address"/><button><ArrowRight/></button></label><small>Prototype form — no data is submitted.</small></div></div><div className="shell copyright">© 2026 BAINBO TARIA AWO (BTA) CLUB <span><Link to="/governance">Governance</Link> · Privacy · Terms</span></div></footer>}
export function PublicLayout(){return <><Header/><main><Outlet/></main><Footer/></>}
export function SectionHead({eyebrow,title,text,light=false}:{eyebrow:string;title:string;text?:string;light?:boolean}){return <div className={`section-head ${light?"light":""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text&&<p>{text}</p>}</div>}
export function PageHero({eyebrow,title,intro,image}:{eyebrow:string;title:string;intro:string;image?:string}){return <section className={`page-hero ${image?"image":""}`}>{image&&<img src={image} alt=""/>}<div className="shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p><small><Link to="/">Home</Link> / {eyebrow}</small></div></section>}
export function Note(){return <div className="note">Prototype content — names, dates, figures and documents are illustrative and will be replaced with verified BTA information.</div>}
