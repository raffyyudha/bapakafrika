import { Zap, Droplets, Hammer, Wrench, Clock, ShieldCheck, Smile, MapPin, CheckCircle, Users, Trophy, Building2 } from 'lucide-react';
import { ServiceData, FeatureData, ContactInfo, ProjectData, TestimonialData, StatData } from './types';

export const COMPANY_NAME = "Power Global Dynamics";
export const TAGLINE = "Electrical • Plumbing • Renovations • Handyman Services";

export const CONTACT_DETAILS: ContactInfo = {
  address: "187 Roux Street, Danville, Pretoria, Gauteng",
  location: "Danville, Pretoria & Greater Gauteng",
  phone: "083 789 4208 / 068 372 5544",
  email: "info@powerglobaldynamics.co.za"
};

export const WHATSAPP_NUMBERS = [
  { number: "27837894208", label: "Main Line" },
  { number: "27683725544", label: "Support" }
];

export const SERVICES: ServiceData[] = [
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Safe and reliable electrical work designed to ensure compliance, safety, and efficiency for homes and businesses.',
    icon: Zap,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    features: [
      'Electrical installations & Maintenance',
      'Fault finding & DB board repairs',
      'Power outages & trip issues',
      'Plug points, switches, and lighting'
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    description: 'Fast, reliable plumbing solutions. We focus on long-term fixes, not temporary patches.',
    icon: Droplets,
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2068&auto=format&fit=crop',
    features: [
      'Leak detection & Burst pipes',
      'Tap, toilet, and basin repairs',
      'New plumbing installations',
      'Bathroom and kitchen plumbing'
    ]
  },
  {
    id: 'renovations',
    title: 'Renovations',
    description: 'Bringing your vision to life with attention to detail, planning, and care for both residential and commercial spaces.',
    icon: Hammer,
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop',
    features: [
      'Home improvements & upgrades',
      'Interior repairs & refurbishments',
      'Bathroom & kitchen renovations',
      'General building & maintenance'
    ]
  },
  {
    id: 'handyman',
    title: 'Handyman Services',
    description: 'No job is too small. Reliable fixes for general repairs when a full renovation isn\'t required.',
    icon: Wrench,
    imageUrl: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=2068&auto=format&fit=crop',
    features: [
      'General household repairs',
      'Small electrical & plumbing fixes',
      'Doors, cupboards, and fittings',
      'Property upkeep & maintenance'
    ]
  }
];

export const WHY_CHOOSE_US: FeatureData[] = [
  {
    title: "Skilled Workmanship",
    description: "Experienced professionals focused on quality and precision in every detail.",
    icon: ShieldCheck
  },
  {
    title: "Reliable & Punctual",
    description: "We value your time. We show up when we say we will and finish on schedule.",
    icon: Clock
  },
  {
    title: "One Call Does It All",
    description: "One trusted contractor handling multiple services efficiently for your peace of mind.",
    icon: Wrench
  },
  {
    title: "Customer Satisfaction",
    description: "Our goal is building long-term relationships through honest work and great results.",
    icon: Smile
  }
];

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Modern Kitchen Overhaul",
    category: "Renovation",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Commercial Wiring Setup",
    category: "Electrical",
    imageUrl: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Luxury Bathroom Remodel",
    category: "Plumbing",
    imageUrl: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Office Lighting Upgrade",
    category: "Electrical",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Pipe Maintenance & Repair",
    category: "Plumbing",
    imageUrl: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Home Interior Painting",
    category: "Handyman",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner, Pretoria",
    content: "Power Global Dynamics transformed our kitchen completely. The plumbing and electrical work was flawless. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Thabo",
    role: "Business Owner",
    content: "We had a major power outage at our office. They responded quickly and fixed the DB board issues within hours. Professional service.",
    rating: 5
  },
  {
    id: 3,
    name: "Elize Van Der Merwe",
    role: "Property Manager",
    content: "I use them for all maintenance at my rental units. From leaky taps to painting, they do it all with a smile.",
    rating: 5
  }
];

export const STATS: StatData[] = [
  { id: 1, label: "Projects Completed", value: "500+", icon: CheckCircle },
  { id: 2, label: "Years Experience", value: "10+", icon: Trophy },
  { id: 3, label: "Happy Clients", value: "350+", icon: Users },
  { id: 4, label: "Areas Served", value: "50+", icon: Building2 },
];

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop", // Industrial / Worker
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop", // Nice House
  "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop", // Plumbing/Tools
];