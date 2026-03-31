import { Toaster } from "@/components/ui/sonner";
import {
  ChevronDown,
  Clock,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Quote,
  Star,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useActor } from "./hooks/useActor";

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "HOME", href: "#home" },
    { label: "OUR STORY", href: "#story" },
    { label: "MENU", href: "#menu" },
    { label: "LOCATION", href: "#location" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center gold-glow-sm">
              <Leaf className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="font-display text-cream font-semibold text-lg leading-tight tracking-wide">
                Swathi Hotel
              </div>
              <div className="text-xs text-green-veg font-semibold tracking-widest">
                PURE VEG
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream-muted hover:text-gold text-xs font-semibold tracking-widest transition-colors duration-200"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-outline-gold px-6 py-2 rounded-full text-xs font-semibold tracking-widest"
              data-ocid="nav.primary_button"
            >
              BOOK A TABLE
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-cream"
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-panel border-t border-gold/20 px-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-cream-muted hover:text-gold text-sm tracking-widest border-b border-gold/10"
              onClick={() => setMobileOpen(false)}
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="btn-gold w-full text-center mt-4 px-6 py-3 rounded-full text-xs"
            data-ocid="nav.primary_button"
          >
            BOOK A TABLE
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assets/uploads/screenshot_2026-03-26-08-36-50-18_3d9111e2d3171bf4882369f490c087b4_1-019d2858-ee92-711e-809b-34cf0bccab98-1.jpg')`,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 60%, rgba(18,18,18,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs text-gold tracking-[0.4em] uppercase mb-6 font-semibold">
            Welcome to
          </p>
        </div>

        <div className="fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h1 className="font-display text-cream text-5xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wide mb-8 leading-tight">
            EXPERIENCE TRUE
            <br />
            <span className="text-gold gold-text-glow">VEGETARIAN</span>{" "}
            SPLENDOR
          </h1>
        </div>

        {/* Glowing framed title */}
        <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
          <div className="inline-block border-2 border-gold gold-glow px-10 py-6 mb-8">
            <div className="font-display text-gold text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest uppercase gold-text-glow">
              SWATHI HOTEL & CAFE
            </div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-3 mb-3" />
            <div className="text-cream-muted text-sm tracking-[0.3em] uppercase">
              Est. Karnataka
            </div>
          </div>
        </div>

        <div className="fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-cream-muted text-lg sm:text-xl mb-6 font-light italic font-display">
            A Culinary Journey Through South India's Finest Flavors
          </p>
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/50 text-green-veg text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
            PURE VEG
          </div>
        </div>

        <div
          className="fade-in-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#menu"
            className="btn-gold px-10 py-4 rounded-full text-sm tracking-widest inline-block"
            data-ocid="hero.primary_button"
          >
            EXPLORE OUR MENU
          </a>
          <a
            href="#contact"
            className="btn-outline-gold px-10 py-4 rounded-full text-sm tracking-widest inline-block"
            data-ocid="hero.secondary_button"
          >
            BOOK A TABLE
          </a>
        </div>

        <div className="fade-in-up mt-16" style={{ animationDelay: "1.2s" }}>
          <a
            href="#story"
            className="text-cream-muted/50 hover:text-gold transition-colors"
          >
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Story / Quote Section ─────────────────────────────────────────────────────
function StorySection() {
  const quotes = [
    {
      text: "Food is not just eating energy. It's an experience, a tradition, a memory.",
    },
    { text: "Good food is the foundation of genuine happiness." },
    {
      text: "Every bite tells a story of tradition, love, and the soul of South India.",
    },
  ];
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="story"
      className="py-24 bg-dark-section"
      data-ocid="story.section"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6">
          <Quote className="w-12 h-12 text-gold/40 mx-auto mb-4" />
        </div>
        <p className="text-xs text-gold tracking-[0.4em] uppercase mb-4 font-semibold">
          Our Philosophy
        </p>
        <div className="min-h-[100px] flex items-center justify-center">
          <p className="font-display text-cream text-2xl sm:text-3xl lg:text-4xl italic leading-relaxed transition-all duration-700">
            "{quotes[activeQuote].text}"
          </p>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((q, i) => (
            <button
              key={q.text.slice(0, 10)}
              type="button"
              onClick={() => setActiveQuote(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeQuote ? "bg-gold w-6" : "bg-cream-muted/30 w-2"
              }`}
              data-ocid="story.toggle"
            />
          ))}
        </div>
        <div className="section-divider mt-12" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: "🌿",
              title: "100% Pure Veg",
              desc: "No compromise on our vegetarian values",
            },
            {
              icon: "🍳",
              title: "Authentic Recipes",
              desc: "Traditional South Indian cooking methods",
            },
            {
              icon: "❤️",
              title: "Made with Love",
              desc: "Every dish crafted with passion and care",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <span className="text-4xl">{item.icon}</span>
              <h3 className="font-display text-gold text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-cream-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Food Card ─────────────────────────────────────────────────────────────────
function FoodCard({
  name,
  desc,
  price,
  image,
  index,
}: {
  name: string;
  desc: string;
  price: string;
  image: string;
  index: number;
}) {
  return (
    <div className="food-card rounded-lg" data-ocid={`menu.item.${index}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-cream font-semibold text-lg leading-snug">
            {name}
          </h3>
          <span className="text-gold font-bold text-lg shrink-0">{price}</span>
        </div>
        <p className="text-cream-muted text-sm leading-relaxed">{desc}</p>
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-3 h-3 fill-gold text-gold" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Menu Section ──────────────────────────────────────────────────────────────
function MenuSection() {
  const dishes = [
    {
      name: "Mulbagal Masala Dosa",
      desc: "The iconic crispy golden dosa with special spiced potato filling — a Mulbagal specialty.",
      price: "₹80",
      image: "/assets/generated/mulbagal-masala-dosa.dim_800x600.jpg",
    },
    {
      name: "Pongal",
      desc: "Creamy rice & lentil comfort dish prepared with pure ghee and cashews — soul food.",
      price: "₹60",
      image: "/assets/generated/pongal.dim_800x600.jpg",
    },
    {
      name: "Veg Biryani",
      desc: "Fragrant basmati rice layered with fresh vegetables & whole spices, slow-cooked to perfection.",
      price: "₹120",
      image: "/assets/generated/veg-biryani.dim_800x600.jpg",
    },
    {
      name: "Paneer Butter Masala",
      desc: "Tender cottage cheese cubes in a rich, buttery tomato gravy — a royal treat.",
      price: "₹150",
      image: "/assets/generated/paneer-butter-masala.dim_800x600.jpg",
    },
    {
      name: "Blue Lagoon",
      desc: "Our signature refreshing mocktail — a vibrant blend of blue curacao syrup, lemon, and soda.",
      price: "₹80",
      image: "/assets/generated/blue-lagoon.dim_800x600.jpg",
    },
  ];

  return (
    <section id="menu" className="py-24 bg-dark" data-ocid="menu.section">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs text-gold tracking-[0.4em] uppercase mb-3 font-semibold">
            Food Menu Showcase
          </p>
          <h2 className="font-display text-cream text-4xl sm:text-5xl font-bold uppercase mb-4">
            OUR SIGNATURE DISHES
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-cream-muted text-lg italic font-display">
            Authentic South Indian Cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <FoodCard key={dish.name} {...dish} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Video Section ─────────────────────────────────────────────────────────────
function VideoSection() {
  return (
    <section className="py-24 bg-dark-section" data-ocid="video.section">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs text-gold tracking-[0.4em] uppercase mb-3 font-semibold">
            Kitchen Magic
          </p>
          <h2 className="font-display text-cream text-4xl sm:text-5xl font-bold uppercase mb-4">
            SEE THE MAGIC IN OUR KITCHEN
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-cream-muted text-lg">
            Watch our chefs craft authentic South Indian delicacies with love
            and tradition
          </p>
        </div>
        <div
          className="relative border-2 border-gold gold-glow rounded-lg overflow-hidden"
          data-ocid="video.panel"
        >
          <div className="aspect-video">
            <iframe
              src="https://www.youtube.com/embed/xPPLbEFbCAo?start=4&rel=0&modestbranding=1"
              title="South Indian Cuisine - Swathi Hotel & Cafe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
        <p className="text-center text-cream-muted/50 text-sm mt-4">
          Authentic South Indian culinary craftsmanship
        </p>
      </div>
    </section>
  );
}

// ─── Location Section ──────────────────────────────────────────────────────────
function LocationSection() {
  return (
    <section
      id="location"
      className="py-24 bg-dark"
      data-ocid="location.section"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs text-gold tracking-[0.4em] uppercase mb-3 font-semibold">
            Visit Us
          </p>
          <h2 className="font-display text-cream text-4xl sm:text-5xl font-bold uppercase mb-4">
            FIND US
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-cream-muted text-lg">
            Visit us on the Kolar Highway
          </p>
        </div>

        {/* Map embed - full width */}
        <div
          className="w-full border-2 border-gold gold-glow-sm rounded-lg overflow-hidden mb-8"
          data-ocid="location.panel"
        >
          <iframe
            src="https://maps.google.com/maps?q=Kendatti+Gollahalli+Karnataka+563133+India&output=embed&z=14"
            title="Swathi Hotel & Cafe Location"
            width="100%"
            height="450"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-panel border border-gold/30 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-gold/70 transition-colors">
            <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center gold-glow-sm">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-gold font-semibold font-display text-lg">
              Address
            </h3>
            <p className="text-cream-muted text-sm leading-relaxed">
              Kolar Highway, Kendatti Gollahalli,
              <br />
              Karnataka 563133
            </p>
          </div>
          <div className="bg-dark-panel border border-gold/30 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-gold/70 transition-colors">
            <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center gold-glow-sm">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-gold font-semibold font-display text-lg">
              Phone
            </h3>
            <a
              href="tel:08197928402"
              className="text-cream-muted text-sm hover:text-gold transition-colors"
              data-ocid="location.link"
            >
              081979 28402
            </a>
          </div>
          <div className="bg-dark-panel border border-gold/30 rounded-lg p-6 flex flex-col items-center text-center gap-3 hover:border-gold/70 transition-colors">
            <div className="w-12 h-12 rounded-full border border-gold/50 flex items-center justify-center gold-glow-sm">
              <Clock className="w-5 h-5 text-gold" />
            </div>
            <h3 className="text-gold font-semibold font-display text-lg">
              Hours
            </h3>
            <p className="text-cream-muted text-sm">
              Open Daily
              <br />
              <span className="text-cream">6:00 AM – 11:00 PM</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ───────────────────────────────────────────────────────────
function ContactSection() {
  const { actor } = useActor();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      if (actor) {
        await actor.submitInquiry(
          formData.name,
          formData.email,
          formData.phone,
          formData.message,
        );
      }
      toast.success("Thank you! We'll be in touch soon. 🙏");
      setFormData({ name: "", email: "", phone: "", message: "" });
      formRef.current?.reset();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-dark-section"
      data-ocid="contact.section"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs text-gold tracking-[0.4em] uppercase mb-3 font-semibold">
            Reach Out
          </p>
          <h2 className="font-display text-cream text-4xl sm:text-5xl font-bold uppercase mb-4">
            GET IN TOUCH
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h3 className="font-display text-gold text-2xl font-semibold mb-6">
              Visit or Call Us
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-cream font-medium">Address</p>
                  <p className="text-cream-muted text-sm mt-1">
                    Kolar Highway, Kendatti Gollahalli, Karnataka 563133
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-cream font-medium">Phone</p>
                  <a
                    href="tel:08197928402"
                    className="text-cream-muted text-sm mt-1 hover:text-gold transition-colors"
                    data-ocid="contact.link"
                  >
                    081979 28402
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
                <div>
                  <p className="text-cream font-medium">Timings</p>
                  <p className="text-cream-muted text-sm mt-1">
                    Open daily 6:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 p-6 border border-gold/30 rounded-lg bg-dark-panel">
              <p className="font-display text-gold text-xl italic">
                "Come hungry, leave happy — that's the Swathi promise."
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-dark-panel border border-gold/30 rounded-lg p-8"
            data-ocid="contact.panel"
          >
            <h3 className="font-display text-gold text-2xl font-semibold mb-6">
              Send a Message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-cream-muted text-xs tracking-widest uppercase mb-2"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full bg-dark border border-gold/30 rounded px-4 py-3 text-cream placeholder:text-cream-muted/40 focus:outline-none focus:border-gold/70 transition-colors text-sm"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, name: e.target.value }))
                  }
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-cream-muted text-xs tracking-widest uppercase mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="w-full bg-dark border border-gold/30 rounded px-4 py-3 text-cream placeholder:text-cream-muted/40 focus:outline-none focus:border-gold/70 transition-colors text-sm"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-cream-muted text-xs tracking-widest uppercase mb-2"
                >
                  Phone *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  className="w-full bg-dark border border-gold/30 rounded px-4 py-3 text-cream placeholder:text-cream-muted/40 focus:outline-none focus:border-gold/70 transition-colors text-sm"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phone: e.target.value }))
                  }
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-cream-muted text-xs tracking-widest uppercase mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full bg-dark border border-gold/30 rounded px-4 py-3 text-cream placeholder:text-cream-muted/40 focus:outline-none focus:border-gold/70 transition-colors text-sm resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  data-ocid="contact.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full btn-gold py-4 rounded text-sm tracking-widest disabled:opacity-50"
                data-ocid="contact.submit_button"
              >
                {submitting ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  return (
    <footer className="bg-dark border-t border-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <Leaf className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="font-display text-cream font-semibold text-lg leading-tight">
                  Swathi Hotel & Cafe
                </div>
                <div className="text-xs text-green-veg tracking-widest">
                  PURE VEG
                </div>
              </div>
            </div>
            <p className="text-cream-muted text-sm leading-relaxed">
              Authentic South Indian vegetarian cuisine served with love and
              tradition on Kolar Highway, Karnataka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Our Story", "Menu", "Location", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-cream-muted text-sm hover:text-gold transition-colors"
                      data-ocid="footer.link"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold text-sm tracking-widest uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <a
                  href="tel:08197928402"
                  className="text-cream-muted text-sm hover:text-gold transition-colors"
                  data-ocid="footer.link"
                >
                  081979 28402
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span className="text-cream-muted text-sm">
                  Kolar Highway, Kendatti Gollahalli, Karnataka 563133
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-cream-muted text-sm">
                  6:00 AM – 11:00 PM Daily
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-muted text-sm">
            © {year} Swathi Hotel & Cafe. All rights reserved.
            <span className="ml-2 text-green-veg">
              | Pure Veg | Authentic South Indian Cuisine
            </span>
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-muted/40 text-xs hover:text-cream-muted transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Toaster richColors position="top-center" />
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <MenuSection />
        <VideoSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
