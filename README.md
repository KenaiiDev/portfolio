# Lucas Villanueva - Portfolio

A modern, responsive portfolio website built with Next.js 14 and the Bento Grid design pattern. Features multilingual support (English/Spanish) and smooth animations.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Internationalization:** next-intl
- **Package Manager:** pnpm

## Features

- Bilingual support (English/Spanish)
- Bento Grid layout design
- Smooth page transitions and animations
- Fully responsive design
- SEO optimized with metadata and sitemap
- Accessibility focused
- Performance optimized (lazy loading, priority images)
- Custom 404 and error pages
- Animated background with blobs

## Installation

```bash
# Clone the repository
git clone https://github.com/KenaiiDev/portfolio.git

# Navigate to directory
cd portfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Project Structure

```
portfolio/
├── public/
│   ├── assets/blobs/      # Background blob SVGs
│   ├── fonts/             # Custom fonts
│   └── images/            # Static images
│       ├── projects/      # Project screenshots
│       └── tech/          # Technology icons
├── src/
│   ├── app/
│   │   ├── [locale]/      # Internationalized routes
│   │   └── sitemap.ts     # Dynamic sitemap
│   ├── components/        # React components
│   ├── constants/         # App constants
│   ├── images/            # Imported images
│   ├── lib/               # Utility functions
│   ├── types/             # TypeScript types
│   └── middleware.ts      # i18n middleware
└── messages/              # Translation files
```

## Configuration

### Update Site Information

Edit `src/constants/metadata.ts`:

```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  url: "https://your-domain.com",
  links: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    email: "your@email.com",
  },
};
```

### Add Projects

Edit `src/constants/projects.tsx` to add your projects:

```typescript
{
  en: { title: "Project Name", description: "Description" },
  es: { title: "Nombre del Proyecto", description: "Descripción" },
  tech: ["React", "Node.js"],
  image: "project-name",
  liveURL: "https://demo.com",
  repoURL: "https://github.com/user/repo",
}
```

## Customization

### Colors

Tailwind color palette is defined in `tailwind.config.ts`. Three custom color schemes:

- `periwinkle-gray` - Main background
- `razzmatazz` - Accent color
- `purple-haze` - Primary color

### Fonts

- **Renogare** - Display font (local)
- **JetBrains Mono** - Code/monospace font
- **Fira Code** - Alternative monospace font

## Adding Translations

Update `messages/en.json` and `messages/es.json` to add new translations.

## Deployment

The project is optimized for deployment on Vercel:

```bash
pnpm build
```

## License

This portfolio is free to use. Feel free to fork and customize it for your own use.

## Author

**Lucas Villanueva**

- GitHub: [@KenaiiDev](https://github.com/KenaiiDev)
- LinkedIn: [lucasvillanueva1999](https://www.linkedin.com/in/lucasvillanueva1999/)

---

Made with Next.js and Tailwind CSS
