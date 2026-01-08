
import { Project, Skill } from './types';

export interface ProjectExtended extends Project {
  longDescription: string;
  features: string[];
  githubUrl?: string;
  images: string[];
}

export const PROJECTS: ProjectExtended[] = [
  {
    id: '1',
    title: 'Nebula Dashboard',
    description: 'A futuristic data visualization platform with real-time analytics.',
    longDescription: 'Nebula is a comprehensive data management suite designed for high-performance computing environments. It leverages WebGL for rendering massive datasets in real-time, providing users with an immersive 3D visualization of complex network topologies.',
    tech: ['React', 'Three.js', 'Tailwind', 'D3'],
    features: ['Real-time WebGL Graphs', 'Predictive Analytics Integration', 'Customizable 3D Workspace'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1551288049-bbda38a10ad5?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1200'
    ],
    link: '#',
    githubUrl: '#'
  },
  {
    id: '2',
    title: 'AI Vision Assistant',
    description: 'Computer vision integration for real-time classification.',
    longDescription: 'This project bridges the gap between hardware and high-level AI. It utilizes the Gemini Pro Vision API alongside custom TensorFlow.js models to identify and track objects through a standard webcam with sub-50ms latency.',
    tech: ['TensorFlow.js', 'React', 'Gemini API', 'WebRTC'],
    features: ['Low-latency Object Tracking', 'Voice-activated Search', 'Augmented Reality Overlays'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1200'
    ],
    link: '#',
    githubUrl: '#'
  },
  {
    id: '3',
    title: 'Ethereal Commerce',
    description: 'A headless e-commerce experience with immersive product exploration.',
    longDescription: 'Ethereal redefines online shopping by introducing a "Spatial Shopping" mode. Users can view high-fidelity 3D models of products in their own space using WebXR, all within a lightning-fast Next.js storefront.',
    tech: ['Next.js', 'Stripe', 'Framer Motion', 'WebXR'],
    features: ['AR Product Preview', 'One-Click Checkout', 'Dynamic Pricing Engine'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200'
    ],
    link: '#',
    githubUrl: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
  { name: 'Three.js', level: 85, category: 'Design' },
  { name: 'Gemini AI', level: 88, category: 'AI' },
  { name: 'Node.js', level: 82, category: 'Backend' },
  { name: 'UI/UX Design', level: 90, category: 'Design' }
];

export const PERSONAL_INFO = {
  name: 'Wildan Miladji',
  role: 'Senior Creative Frontend Engineer',
  bio: 'Crafting immersive digital experiences at the intersection of design, code, and artificial intelligence.',
  longBio: 'I am a passionate engineer who believes that software should not just be functional, but an extension of human creativity. With over 8 years of experience building high-traffic web applications, I focus on performance, accessibility, and breathtaking aesthetics. I thrive at the edge of the web, constantly experimenting with 3D technologies and AI to build interfaces that feel like magic.',
  location: 'Jakarta, Indonesia',
  email: 'wildan@creative.dev',
  photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/wildanmiladji',
    linkedin: 'https://linkedin.com/in/wildanmiladji',
    twitter: 'https://twitter.com/wildanmiladji'
  },
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Completed', value: '120+' },
    { label: 'Global Clients', value: '45' }
  ]
};
