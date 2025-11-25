import { Project } from '../types';

export const projects: Project[] = [
    {
        id: '1',
        title: 'AutoHire.cv',
        category: 'Generative AI',
        description: 'AI-powered recruitment platform automating hiring through intelligent resume screening, AI interviews, and real-time candidate insights.',
        techStack: ['AI', 'NLP', 'React.js', 'FastAPI'],
        demoUrl: 'https://www.autohire.cv/',
        aiInsights: {
            child: '🤖 A smart robot helper that reads resumes and talks to people who want jobs! It helps companies find the best workers faster.',
            engineer: '⚙️ Enterprise-grade recruitment automation using NLP for resume parsing, LLM-powered conversational AI for interviews, and real-time analytics dashboard. Built with React.js frontend and FastAPI backend.',
            ceo: '💼 Reduces hiring time by 70% and costs by 60%. Scales recruitment operations while maintaining quality. ROI positive within 3 months. Demo: autohire.cv'
        },
        stats: { accuracy: '95%', latency: '500ms', users: 1000 }
    },
    {
        id: '2',
        title: 'AutoHire Prep',
        category: 'Generative AI',
        description: 'Complete career ecosystem from learning algorithms to acing interviews.',
        techStack: ['AI', 'React.js', 'Python', 'LLMs'],
        demoUrl: 'https://prep.autohire.cv/',
        aiInsights: {
            child: '📚 Like a super smart teacher that helps you learn coding and practice for job interviews!',
            engineer: '🎓 Comprehensive learning platform with 500+ coding challenges, AI-powered mock interviews, personalized learning paths.',
            ceo: '🎯 B2B2C model serving universities. Increases placement rates by 40%. Visit: prep.autohire.cv'
        },
        stats: { accuracy: '92%', latency: '600ms', users: 5000 }
    },
    {
        id: '3',
        title: 'CDrive AutoHire',
        category: 'Generative AI',
        description: 'Next-gen AI campus placement platform with 5-stage assessment and professional proctoring.',
        techStack: ['OpenAI GPT-4', 'React.js', 'AI Proctoring'],
        demoUrl: 'https://cdrive.autohire.cv/',
        aiInsights: {
            child: '🎮 A test game that watches you take exams and makes sure you don\'t cheat!',
            engineer: '🔒 Enterprise assessment platform with GPT-4 evaluation, screen recording, identity verification.',
            ceo: '📊 99.9% accuracy. Reduces hiring cycle from 3 months to 2 weeks. Try: cdrive.autohire.cv'
        },
        stats: { accuracy: '99.9%', latency: '400ms', users: 2000 }
    },
    {
        id: '4',
        title: 'Leadspear.ai',
        category: 'Automation',
        description: 'AI-powered marketing automation and lead generation platform.',
        techStack: ['AI', 'Marketing Automation', 'React.js'],
        demoUrl: 'https://www.leadspear.ai/',
        aiInsights: {
            child: '📧 A robot that sends emails and posts on social media for businesses automatically!',
            engineer: '🚀 Multi-channel marketing automation with MailGrid (email), SocialGrid (social media).',
            ceo: '💰 SaaS platform with 3000+ users. Increases lead generation by 250%. Explore: leadspear.ai'
        },
        stats: { accuracy: '94%', latency: '300ms', users: 3000 }
    },
    {
        id: '5',
        title: 'EchelonX AI',
        category: 'Generative AI',
        description: 'Custom AI solutions for businesses focusing on sales optimization and automation.',
        techStack: ['AI', 'LLMs', 'Business Automation'],
        demoUrl: 'https://echelonxai.com/',
        aiInsights: {
            child: '🤝 Smart helpers that work for different companies!',
            engineer: '🏗️ Custom AI solution development using LLMs for sales optimization and workflow automation.',
            ceo: '📈 Average 35% productivity increase for clients. Learn more: echelonxai.com'
        },
        stats: { accuracy: '96%', latency: '450ms', users: 800 }
    },
    {
        id: '6',
        title: 'Crypto Investment Platform',
        category: 'Automation',
        description: 'Full-stack cryptocurrency portfolio management with real-time tracking.',
        techStack: ['React.js', 'Material-UI', 'Redux', 'FastAPI', 'MySQL'],
        aiInsights: {
            child: '🪙 A digital wallet that keeps track of your crypto coins!',
            engineer: '🔐 Full-stack fintech app with JWT + 2FA authentication, role-based access control.',
            ceo: '💼 Secure crypto portfolio management with enterprise security standards.'
        },
        stats: { accuracy: '99%', latency: '150ms', users: 50 }
    },
    {
        id: '7',
        title: 'Smart Resume Analyzer',
        category: 'NLP',
        description: 'NLP-powered resume scoring and career guidance with YouTube recommendations and personalized course suggestions.',
        techStack: ['Python', 'NLP', 'Xampp', 'SQL'],
        aiInsights: {
            child: '📝 A smart reader that looks at your resume and tells you how to make it better!',
            engineer: '🔍 NLP-based resume parsing and scoring engine using NLTK and Spacy. Recommends courses based on skill gaps.',
            ceo: '📈 Increases candidate shortlist rate by 40%. Personalized career roadmap generation.'
        },
        stats: { accuracy: '92%', latency: '2s', users: 200 }
    },
    {
        id: '8',
        title: 'AI Help Center',
        category: 'Generative AI',
        description: 'LLM-powered query response system with context-aware conversation continuity and customizable troubleshooting paths.',
        techStack: ['React.js', 'FastAPI', 'Python', 'LLMs', 'Vercel'],
        aiInsights: {
            child: '❓ A smart helper that answers all your questions instantly!',
            engineer: '💬 Context-aware chatbot using RAG and LLMs to provide accurate support responses from documentation.',
            ceo: '📉 Reduces support ticket volume by 50%. 24/7 automated customer support.'
        },
        stats: { accuracy: '95%', latency: '800ms', users: 100 }
    },
    {
        id: '9',
        title: 'Multi-PDFs ChatApp AI Agent',
        category: 'Generative AI',
        description: 'Chat with multiple PDFs using Langchain, Google Gemini Pro & FAISS Vector DB. Get instant, accurate responses from AI.',
        techStack: ['Langchain', 'Gemini Pro', 'FAISS', 'Streamlit'],
        aiInsights: {
            child: '📚 You can talk to your books! Ask questions and it finds the answers in many PDF files.',
            engineer: '🧠 RAG pipeline using LangChain, FAISS for vector storage, and Gemini Pro for generation. Handles multi-document context.',
            ceo: '⚡ Instant information retrieval from large document repositories. Increases research efficiency.'
        },
        stats: { accuracy: '93%', latency: '1.2s', users: 150 }
    },
    {
        id: '10',
        title: 'End-to-End RAG LLM App',
        category: 'Generative AI',
        description: 'Complete RAG application built with LLamA2 and LLaMAindex for advanced document retrieval and generation.',
        techStack: ['LLamA2', 'LLaMAindex', 'RAG'],
        aiInsights: {
            child: '🔎 A super search engine that reads secret files and answers questions about them.',
            engineer: '🏗️ End-to-end RAG implementation using LLaMA2 and LLaMAindex. Optimized for local deployment and privacy.',
            ceo: '🔒 Secure, on-premise document intelligence. No data leakage to external APIs.'
        },
        stats: { accuracy: '91%', latency: '1.5s', users: 120 }
    },
    {
        id: '11',
        title: 'AI Data Visualization Agent',
        category: 'Automation',
        description: 'Interactive Data Visualization Assistant understanding natural language queries and generating visualizations using LLMs.',
        techStack: ['LLAMA', 'DeepSeek', 'Qwen', 'e2b-code-interpreter'],
        aiInsights: {
            child: '📊 You tell it what to show, and it draws beautiful charts and graphs for you!',
            engineer: '📈 Text-to-SQL and Text-to-Chart agent using Code Interpreter. Generates Python plotting code on the fly.',
            ceo: '💡 Instant business intelligence from raw data. No technical skills required to generate reports.'
        },
        stats: { accuracy: '90%', latency: '2s', users: 80 }
    }
];
