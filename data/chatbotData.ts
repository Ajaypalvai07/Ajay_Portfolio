import { projects } from './projects';

export const getChatbotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    // Greetings
    if (lowerQuery.match(/\b(hi|hello|hey|greetings|start)\b/)) {
        return `## 👋 Hello! I am **Ajay's Assistant**

I'm here to guide you through Ajay's portfolio. I can help you with:

*   **🚀 Projects**: Ask about specific projects or see them all.
*   **🛠️ Skills**: Learn about Ajay's tech stack.
*   **💼 Experience**: Professional background.
*   **📬 Contact**: Get in touch with Ajay.

**Try asking:** *"List all projects"* or *"What is your tech stack?"*`;
    }

    // Projects - General
    if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('portfolio') || lowerQuery.includes('built')) {
        return `## 🚀 Featured Projects

Ajay has deployed **${projects.length} featured systems**. Here are a few highlights:

${projects.slice(0, 3).map(p => `*   **${p.title}**: ${p.description}`).join('\n')}

...and many more! 

👉 **Type "list all"** to see the complete portfolio.`;
    }

    // List All Projects
    if (lowerQuery.includes('list all') || lowerQuery.includes('all projects')) {
        return `## 📂 Complete Project Portfolio

Here is the full list of Ajay's **${projects.length} projects**:

${projects.map(p => `### ${p.title}
*   **Category**: ${p.category}
*   **Description**: ${p.description}
*   **Tech**: ${p.techStack.join(', ')}
`).join('\n')}

💡 *Ask about any specific project for more details!*`;
    }

    // Specific Projects (Dynamic Search)
    const foundProject = projects.find(p => lowerQuery.includes(p.title.toLowerCase()) || lowerQuery.includes(p.title.toLowerCase().replace(/\s+/g, '')));
    if (foundProject) {
        return `## 🚀 ${foundProject.title}

**${foundProject.category}**

${foundProject.description}

### 🛠️ Tech Stack
${foundProject.techStack.map(t => `*   ${t}`).join('\n')}

### 📊 Key Metrics
*   **Accuracy**: ${foundProject.stats.accuracy}
*   **Latency**: ${foundProject.stats.latency}
*   **Users**: ${foundProject.stats.users}

🔗 [**View Live Demo**](${foundProject.demoUrl})`;
    }

    // Skills
    if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack') || lowerQuery.includes('technologies')) {
        return `## 🛠️ Technical Expertise

### 🧠 Artificial Intelligence
*   **LLMs**: GPT-4, Llama 2, Gemini, Claude
*   **NLP**: Spacy, NLTK, Hugging Face
*   **RAG**: LangChain, LlamaIndex, Pinecone, FAISS

### 💻 Full Stack Development
*   **Frontend**: React.js, TypeScript, Tailwind CSS, Next.js
*   **Backend**: Python, FastAPI, Node.js, Django
*   **Database**: PostgreSQL, MongoDB, Redis

### ☁️ DevOps & Cloud
*   **Infrastructure**: Docker, Kubernetes, AWS
*   **CI/CD**: GitHub Actions, Vercel`;
    }

    // Experience / About
    if (lowerQuery.includes('experience') || lowerQuery.includes('about') || lowerQuery.includes('who is') || lowerQuery.includes('background')) {
        return `## 👨‍💻 About Ajay Palvai

**Visionary AI Engineer & Full Stack Developer**

Ajay specializes in bridging the gap between complex AI models and user-friendly applications. With deep expertise in **Generative AI**, **Automation**, and **Web Development**, he builds solutions that drive real business value.

*   **10+** AI Systems Deployed
*   **Thousands** of Active Users
*   **Proven** Track Record in RAG & LLM Applications`;
    }

    // Contact
    if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach') || lowerQuery.includes('hire')) {
        return `## 📬 Let's Connect!

Ajay is always open to discussing new opportunities and innovative projects.

*   **LinkedIn**: [Ajay Palvai](https://www.linkedin.com/in/ajay-palvai-384750210/)
*   **Email**: [palvaiajay4730@gmail.com](mailto:palvaiajay4730@gmail.com)
*   **GitHub**: [github.com/Ajaypalvai07](https://github.com/Ajaypalvai07)

👇 *Click the links above to reach out!*`;
    }

    // Resume
    if (lowerQuery.includes('resume') || lowerQuery.includes('cv')) {
        return `## 📄 Resume

You can view and download Ajay's resume by clicking the **RESUME** button in the top right corner of the navigation bar.`;
    }

    // Default Fallback
    return `I'm **Ajay's Assistant**. I can tell you about his **projects**, **skills**, and **experience**.

**Try asking:**
*   *"List all projects"*
*   *"What are your skills?"*
*   *"How do I contact Ajay?"*`;
};
