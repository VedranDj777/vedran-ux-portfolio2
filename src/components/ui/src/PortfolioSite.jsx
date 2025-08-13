import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { Input } from "./components/ui/input.jsx";
import { Textarea } from "./components/ui/textarea.jsx";
import { Badge } from "./components/ui/badge.jsx";
import { ArrowRight, Github, Linkedin, Mail, Download, Globe, Phone, Figma } from "lucide-react";

// --- Profile (edit these any time) ---
const PROFILE = {
  name: "Vedran Djakovic",
  title: "UX Designer in Progress",
  tagline: "Designing simple, human-centered experiences. Google UX Certificate in progress.",
  location: "Seattle, WA",
  email: "vedran.djakovic@outlook.com",
  phone: "425-647-6531",
  resumeUrl: "#",
  social: { github: "https://github.com/", linkedin: "https://www.linkedin.com/in/", figma: "https://www.figma.com/@" },
};

// --- Placeholder images (swap with your own later) ---
const IMG = {
  hero: "https://images.unsplash.com/photo-1587613865763-4b8b0b8685df?q=80&w=1200&auto=format&fit=crop",
  phones: "https://images.unsplash.com/photo-1520975922284-7b6833ed28e1?q=80&w=1200&auto=format&fit=crop",
  camelback: "https://images.unsplash.com/photo-1559336178-9d70730b0f43?q=80&w=1200&auto=format&fit=crop",
  menu: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  wire1: "https://images.unsplash.com/photo-1551281044-8a67f2a5a2df?q=80&w=1200&auto=format&fit=crop",
  wire2: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
};

const PROJECTS = [
  { key: "anytime", title: "Anytime Futbol – Pickup Soccer App", description: "Help players find nearby pickup games, pick a time slot, and confirm participation.", roles: ["Research","Wireframes","Prototyping","UI"], cover: IMG.phones, cta: { label: "View Case Study", href: "#case-anytime" } },
  { key: "camelback", title: "Camelback Grill — Website Refresh", description: "Improved menu readability, mobile nav, and conversion paths.", roles: ["Audit","IA","Responsive UI"], cover: IMG.camelback, cta: { label: "View Case Study", href: "#case-camelback" } },
  { key: "branding", title: "Restaurant Branding & Menu", description: "Logo direction, color/type choices, and a launch-ready menu.", roles: ["Branding","Menu Design","Digital Footprint"], cover: IMG.menu, cta: { label: "View Case Study", href: "#case-branding" } },
];

const SKILLS = ["User Interviews","Personas","Journey Mapping","Wireframing","Prototyping","Usability Testing","Responsive UI","Information Architecture","Accessibility"];

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <Projects />
        <AnytimeCaseStudy />
        <CamelbackCaseStudy />
        <BrandingCaseStudy />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900">{PROFILE.name}</a>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:opacity-70" href="#work">Work</a>
          <a className="hover:opacity-70" href="#process">Process</a>
          <a className="hover:opacity-70" href="#about">About</a>
          <a className="hover:opacity-70" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a aria-label="Email" href={`mailto:${PROFILE.email}`} className="p-2 hover:opacity-70"><Mail size={18} /></a>
          <a aria-label="LinkedIn" href={PROFILE.social.linkedin} className="p-2 hover:opacity-70"><Linkedin size={18} /></a>
          <a aria-label="GitHub" href={PROFILE.social.github} className="p-2 hover:opacity-70"><Github size={18} /></a>
          <a aria-label="Figma" href={PROFILE.social.figma} className="p-2 hover:opacity-70"><Figma size={18} /></a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="pt-16 pb-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{PROFILE.title}</h1>
          <p className="mt-4 text-slate-600 max-w-prose">{PROFILE.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-2xl"><a href="#work" className="inline-flex items-center">See my work <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
            <Button variant="secondary" className="rounded-2xl"><a href={PROFILE.resumeUrl} className="inline-flex items-center"><Download className="mr-2 h-4 w-4"/>Download résumé</a></Button>
          </div>
          <div className="mt-4 text-sm text-slate-500 flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><Globe size={16}/> {PROFILE.location}</span>
            <span className="inline-flex items-center gap-1"><Phone size={16}/> {PROFILE.phone}</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200">
            <img src={IMG.hero} alt="Workspace" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="py-8">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected Work</h2>
        <p className="text-sm text-slate-500">Case studies with process, not just pixels</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.div key={p.key} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }}>
            <Card className="rounded-2xl overflow-hidden">
              <div className="relative aspect-[4/3]"><img src={p.cover} alt={p.title} className="object-cover w-full h-full" /></div>
              <CardHeader><CardTitle className="text-lg">{p.title}</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">{p.roles.map(r => (<Badge key={r} variant="secondary" className="rounded-xl">{r}</Badge>))}</div>
                <Button size="sm" className="rounded-xl"><a href={p.cta.href}>{p.cta.label}</a></Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Section({ id, title, children, blurb }) {
  return (
    <section id={id} className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
      {blurb && <p className="mt-2 text-slate-600">{blurb}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
function KeyStat({ label, value }) {
  return (<div className="rounded-2xl border border-slate-200 p-4 text-center"><div className="text-xl font-semibold">{value}</div><div className="text-xs text-slate-500 mt-1">{label}</div></div>);
}

function AnytimeCaseStudy() {
  return (
    <Section id="case-anytime" title="Anytime Futbol — Case Study" blurb="Goal: Lower the friction of organizing pickup games and increase match confirmations.">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={IMG.phones} alt="Final mobile screens" className="rounded-2xl border border-slate-200" />
        <img src={IMG.hero} alt="Feature overview" className="rounded-2xl border border-slate-200" />
      </div>
      <h3 className="mt-8 font-semibold">Process</h3>
      <div className="grid md:grid-cols-4 gap-4 mt-3">
        <KeyStat label="Interviews" value="5 players" />
        <KeyStat label="Pain points" value="Find + Confirm" />
        <KeyStat label="Iterations" value="3 rounds" />
        <KeyStat label="Prototype" value="Clickable UI" />
      </div>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Wireframes</CardTitle></CardHeader><CardContent><div className="grid gap-3"><img src={IMG.wire1} alt="Wireframe 1" className="rounded-xl border" /><img src={IMG.wire2} alt="Wireframe 2" className="rounded-xl border" /></div></CardContent></Card>
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">UI Highlights</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Map-first browse to spot nearby games quickly.</li><li>Single tap confirmation with participants preview.</li><li>Calendar slot selector to reduce overlap.</li></ul></CardContent></Card>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Key Challenges</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Players struggled to discover reliable pickup games quickly.</li><li>Game creation overlapped with existing matches causing fragmentation.</li><li>Low commitment because confirmations happened off-platform.</li></ul></CardContent></Card>
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Outcomes</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Browse → select slot → confirm reduced taps by ~40% (prototype measure).</li><li>Participants preview increased perceived trust and commitment.</li><li>Calendar slotting nudged users to fill existing games first.</li></ul></CardContent></Card>
      </div>
    </Section>
  );
}

function CamelbackCaseStudy() {
  return (
    <Section id="case-camelback" title="Camelback Grill — Website Refresh" blurb="Focused on readability, speed, and clear paths to the menu and contact information.">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={IMG.camelback} alt="Camelback site" className="rounded-2xl border" />
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Changes</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Improved menu hierarchy and spacing.</li><li>Cleaner typography for faster scanning.</li><li>Mobile-first layout with simpler navigation.</li></ul></CardContent></Card>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Approach</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Heuristic audit for readability + nav issues.</li><li>IA pass to surface Menu and Contact actions.</li><li>Responsive refactor with tighter type scale.</li></ul></CardContent></Card>
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Result</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Cleaner menu page on mobile.</li><li>Clear paths for directions and phone.</li><li>Visual consistency with fewer styles.</li></ul></CardContent></Card>
      </div>
    </Section>
  );
}

function BrandingCaseStudy() {
  return (
    <Section id="case-branding" title="New Restaurant — Branding & Menu Design" blurb="Partnered with the owner to define visual direction, iterate on logo options, and design a launch-ready menu.">
      <div className="grid md:grid-cols-2 gap-6">
        <img src={IMG.menu} alt="Menu design" className="rounded-2xl border" />
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Deliverables</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Logo concepts and final lockup.</li><li>Color palette and type choices.</li><li>Print-ready & digital menu files.</li><li>Guidance for website and listings.</li></ul></CardContent></Card>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Process</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Moodboards + quick logo sketches.</li><li>Color exploration: warmth + contrast.</li><li>Menu on a modular grid for updates.</li></ul></CardContent></Card>
        <Card className="rounded-2xl"><CardHeader><CardTitle className="text-base">Impact</CardTitle></CardHeader><CardContent><ul className="text-sm list-disc pl-5 space-y-2 text-slate-700"><li>Owner approved after 2 iterations.</li><li>Print-ready & web assets delivered.</li><li>Consistent look across menu & social.</li></ul></CardContent></Card>
      </div>
    </Section>
  );
}

function About() {
  return (
    <section id="about" className="py-10">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop" alt="Portrait placeholder" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">
            I design products that are useful, usable, and delightful. I’m currently completing the Google UX Design Certificate and building projects to practice research, prototyping, and testing. I have a background in SaaS and financial sales, which helps me connect design decisions to business outcomes.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">{SKILLS.map(s => (<Badge key={s} variant="outline" className="rounded-xl">{s}</Badge>))}</div>
        </div>
      </div>
    </section>
  );
}

const FORMSPREE_ID = "your_form_id_here"; // set your real ID to enable email
function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company") !== "") { setSent(true); return; }
    if (!FORMSPREE_ID || FORMSPREE_ID === "your_form_id_here") { setSent(true); return; }
    setSending(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, { method: "POST", headers: { "Accept": "application/json" }, body: data });
      const json = await res.json();
      if (res.ok) { setSent(true); form.reset(); } else { setError(json?.errors?.[0]?.message || "Something went wrong."); }
    } catch { setError("Network error. Please try again."); }
    finally { setSending(false); }
  }
  return (
    <section id="contact" className="py-14">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Contact</h2>
        <p className="text-slate-600 mt-2">Got a project or feedback? Drop me a line.</p>
        {!sent ? (
          <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
            <input type="text" name="company" className="hidden" tabIndex="-1" autoComplete="off" />
            <Input name="name" placeholder="Your name" required className="rounded-xl" />
            <Input name="email" type="email" placeholder="Your email" required className="rounded-xl" />
            <Textarea name="message" placeholder="How can I help?" rows={5} required className="rounded-xl" />
            <Button type="submit" className="rounded-xl" disabled={sending}>{sending ? "Sending..." : "Send"}</Button>
            <p className="text-xs text-slate-500">* Set FORMSPREE_ID in <code>src/PortfolioSite.jsx</code> to receive emails.</p>
          </form>
        ) : (
          <div className="mt-6 p-4 rounded-2xl bg-green-50 text-green-700 border border-green-200">
            Thanks! Your message was sent (or captured in demo mode). I'll get back to you at {PROFILE.email}.
          </div>
        )}
        {error && <div className="mt-4 p-3 rounded-md bg-red-50 text-red-700 border border-red-200 text-sm">{error}</div>}
      </div>
    </section>
  );
}

function Footer() {
  return (<footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} {PROFILE.name}. Built with ❤️ and curiosity.</footer>);
}
