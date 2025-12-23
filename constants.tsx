
import React from 'react';
import { Service, Project, SystemStatus, FAQItem } from './types';
import { 
  Cpu, 
  Layout, 
  BrainCircuit, 
  Zap, 
  Linkedin, 
  Twitter, 
  Youtube,
} from 'lucide-react';

export const HERO_VIDEO_URL = 'https://yntowivdfwmsygfrptrx.supabase.co/storage/v1/object/public/Webp%20Sequence/hero_tech_video.mp4';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Custom Automation Systems',
    description: 'Tired of doing the same task manually? I build custom workflows using n8n, Zapier, Make, and native integrations.',
    iconName: 'Cpu'
  },
  {
    id: '2',
    title: 'Web Design & Development',
    description: 'Beautiful, fast, and functional websites built with modern tech. Parallax animations and smooth interactions.',
    iconName: 'Layout'
  },
  {
    id: '3',
    title: 'AI-Powered Tools',
    description: 'Tools that use AI to handle the grunt work. From content generation to data processing.',
    iconName: 'BrainCircuit'
  },
  {
    id: '4',
    title: 'No-Code / Low-Code',
    description: 'Using Airtable, Zapier, and n8n to build robust systems without extensive coding. Faster, cheaper, easier.',
    iconName: 'Zap'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'E-commerce Workflow Pro',
    description: 'Automated order fulfillment system saving 15 hours a week.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Creative Agency Portal',
    description: 'A custom client management system with automated invoicing.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Social Engine AI',
    description: 'AI-driven content scheduler for multi-platform distribution.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];

export const SYSTEMS: SystemStatus[] = [
  {
    id: 's1',
    name: 'Scheduled Velocity',
    problem: 'Small business owners waste hours on manual data entry and scheduling.',
    whoItIsFor: 'Service-based businesses (salons, coaching, consulting)',
    status: 'In Development',
    availability: 'Q1 2025'
  },
  {
    id: 's2',
    name: 'Data Bridge Elite',
    problem: 'Siloed data across marketing tools leads to poor decision making.',
    whoItIsFor: 'Marketing agencies and e-commerce teams',
    status: 'Validating',
    availability: 'Q2 2025'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Who is Digital Jaywalking for?',
    answer: 'Anyone who needs custom systems but doesn\'t have the time or expertise to build them. Small businesses, creators, teams, entrepreneurs.'
  },
  {
    question: 'What\'s a custom automation system?',
    answer: 'A workflow that automates repetitive tasks. Examples: automatically pulling data from different sources, sending notifications, creating documents, managing schedules, etc.'
  },
  {
    question: 'Do I need to know how to code?',
    answer: 'No. I build using no-code and low-code tools. If you can describe the problem, I can build the solution.'
  },
  {
    question: 'How much does it cost?',
    answer: 'It depends on complexity. Simple systems start at competitive rates. We discuss budget upfront during our initial call.'
  }
];

export const SOCIAL_LINKS = [
  { name: 'YouTube', icon: <Youtube size={20} />, url: '#' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, url: '#' },
  { name: 'X', icon: <Twitter size={20} />, url: '#' }
];
