# 🌊 EverHarbor

> A digital sanctuary where knowledge flows like tides—connecting readers across the world to free books for all ages.

EverHarbor is a modern, discovery-first e-library platform inspired by the ancient Library of Alexandria. Built to make reading accessible to everyone, from children discovering their first stories to academics researching cutting-edge topics.



## ✨ The Vision

While platforms like Open Library catalog millions of books, **EverHarbor focuses on discovery and accessibility**:

- 🎯 **Discovery-First**: Curated reading journeys, mood-based browsing, and serendipitous exploration
- ♿ **Built for Everyone**: Designed to work beautifully on any device, any connection speed, anywhere in the world
- 🌍 **Always Free**: Every book, every page—completely accessible to all who seek knowledge
- 📚 **Age-Appropriate**: Tailored experiences for children, young adults, and academics
- 🎨 **Beautiful by Design**: Museum-quality interface that makes reading feel special



## 🚀 Current Features (V1)

### Discovery & Exploration
- ✅ **Curated Voyages** - Handpicked reading journeys across themes (Philosophy, Sci-Fi, Climate Science)
- ✅ **Mood-Based Browsing** - Find books based on how you're feeling (Contemplative, Adventurous, Mysterious)
- ✅ **Age-Appropriate Collections** - Tailored views for Children (5-12), Young Adult (13-18), Adult, and Academic audiences
- ✅ **Random Discovery** - "Surprise Me" feature for serendipitous book exploration

### Search & Browse
- ✅ **Full-Text Search** - Search across 20M+ books via Open Library API
- ✅ **Responsive Design** - Seamless experience from mobile to desktop
- ✅ **Clean, Modern UI** - Inspired by world-class museums and cultural institutions

### Technical Excellence
- ✅ **Fast & Lightweight** - Optimized for performance
- ✅ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Professional Architecture** - Component-based design, separation of concerns



## 🛠️ Tech Stack

### Frontend (V1 - Current)
- **React 18** - UI library
- **Vite** - Build tool & dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS v3** - Utility-first styling
- **Open Library API** - Book data source



## 🎨 Design System

### Color Palette
- **Navy** `#083D77` - Trust, authority, primary text
- **Cream** `#EBEBD3` - Warmth, canvas, backgrounds
- **Gold** `#F4D35E` - Discovery, highlights, accents
- **Orange** `#EE964B` - Secondary warmth, energy
- **Tomato** `#F95738` - Action, primary CTAs

### Typography
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Inter (modern, readable sans-serif)

### Design Philosophy
Inspired by world-class cultural institutions (Louvre, Odesa Museum), EverHarbor balances:
- Intellectual sophistication with approachable warmth
- Clean minimalism with rich visual depth
- Professional authority with inclusive accessibility

## 📁 Project Structure
```
everharbor/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Layout/       # Navbar, Footer, Container
│   │   └── Home/         # Home page specific components
│   ├── data/             # Static data (voyages, moods, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Route pages
│   ├── services/         # API integration logic
│   ├── styles/           # Global CSS
│   ├── utils/            # Helper functions
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md
```
---

## 🔮 Planned Features (V2+)

### Enhanced Discovery
- 🔄 **AI-Powered Recommendations** - Personalized suggestions based on reading history
- 🔄 **Reading Pathways** - Structured learning journeys ("Understanding Quantum Physics", "Philosophy 101")
- 🔄 **Community Voyages** - User-created and shared reading collections

### Accessibility & Performance
- 🔄 **Adaptive UI Mode** - Auto-detect connection speed and serve optimized experience
  - Lightweight Mode: Text-only, minimal assets for slow connections
  - Full Mode: Rich media, animations, high-quality images
- 🔄 **Offline-First PWA** - Download books for offline reading
- 🔄 **Multi-Language Support** - Interface localization for global accessibility

### Multi-Source Aggregation
- 🔄 **Cross-Platform Search** - Aggregate results from:
  - Open Library
  - Project Gutenberg
  - Internet Archive
  - Google Books
  - LibriVox (audiobooks)
- 🔄 **Physical Availability** - Show nearby libraries via WorldCat integration
- 🔄 **Multiple Formats** - Link to PDF, EPUB, audiobook versions

### Social & Personalization
- 🔄 **Reading Circles** - Join groups reading the same book
- 🔄 **Personal Library** - Save favorites, track reading progress
- 🔄 **Reading Challenges** - "52 books in a year", themed challenges
- 🔄 **Highlight Sharing** - See what passages others marked

### V3+ (Full-Stack)
- 🔄 **User Accounts & Authentication**
- 🔄 **Backend Database** - Store user data, preferences, custom collections
- 🔄 **Book Reviews & Ratings**
- 🔄 **Advanced Search Filters** - By reading level, length, publication date, language


