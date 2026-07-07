# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JavaScript portfolio website for Firdavs Shodiev, a software engineer showcasing projects, resume, and blog posts. The site follows a Wikipedia-inspired design aesthetic with a clean, readable layout.

## Architecture

The site uses a simple static file structure with no build tools or package managers:

- **HTML Pages**: Each page (`index.html`, `resume.html`, `projects.html`, `blog.html`) is a standalone file with consistent header/footer
- **Shared Styles**: Single CSS file ([css/main.css](css/main.css)) provides Wikipedia-inspired styling for all pages
- **Minimal JavaScript**: [js/main.js](js/main.js) handles only the project image zoom modal functionality
- **Blog Posts**: Individual HTML files in [blogs/](blogs/) directory (e.g., `blog1.html`, `blog2.html`)

### Key Design Patterns

1. **Consistent Navigation**: All pages share identical header structure with nav menu and "Download Resume" link
2. **Wikipedia-Style Layout**: Uses serif fonts for blog posts, sans-serif for other pages, with border-boxed container design
3. **Responsive Design**: Mobile-first approach with breakpoints at 600px and 700px
4. **Image Modal**: Projects page includes click-to-zoom functionality for project screenshots

## File Structure

```
portfolio/
├── index.html          # Home page with bio and timeline
├── resume.html         # Professional resume with experience/education
├── projects.html       # Project showcase with images and descriptions
├── blog.html           # Blog post listing
├── css/
│   └── main.css        # All styles for the entire site
├── js/
│   └── main.js         # Image zoom modal functionality
├── blogs/
│   ├── blog1.html      # Individual blog posts
│   ├── blog2.html
│   └── blog3.html
└── assets/
    ├── *.png           # Project screenshots and profile images
    ├── *.gif           # Animated demos
    ├── favicon.png     # Site favicon
    └── Resume.pdf      # Downloadable resume PDF
```

## Working with This Project

### Adding New Blog Posts

1. Create a new file in [blogs/](blogs/) directory (e.g., `blog4.html`)
2. Copy the structure from an existing blog post (include the `.blog-post-body` class on body tag)
3. Update navigation links to use relative paths (`../index.html`, `../css/main.css`, etc.)
4. Add the blog post entry to [blog.html](blog.html) in the `<ul class="blog-list">` section

### Adding New Projects

1. Add project images to [assets/](assets/) directory
2. In [projects.html](projects.html), add a new `<article class="project-card">` block
3. Follow the existing structure with `.project-info` and `.project-image` divs
4. Use `#tags` in `.project-tools` div to categorize the project

### Updating Resume

Edit [resume.html](resume.html) directly. The resume uses:
- `.resume-section` for major sections
- `.resume-item` for individual experiences
- `.resume-item-header` with flex layout for title/date alignment
- `.skills-grid` for displaying technical skills

### Styling Guidelines

- Color scheme: Blue links (`#0645ad`), gray borders (`#a2a9b1`), light gray backgrounds (`#f8f9fa`)
- Wikipedia-inspired: bordered container on white background, clean typography
- Blog posts use Georgia serif font (`.blog-post-body` class)
- Maintain consistent spacing: 20px margins between sections, 10px padding in containers

## Development Workflow

Since this is a static site with no build process:

1. **Edit files directly** - no compilation or build step needed
2. **Preview changes** - open HTML files directly in a browser or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx http-server -p 8000
   ```
3. **Test responsiveness** - check at mobile (< 600px) and desktop widths

## Common Tasks

### Testing the Site Locally

```bash
# Start a local server (Python 3)
python -m http.server 8000

# Or using Node.js
npx http-server -p 8000
```

Then visit `http://localhost:8000`

### Validating HTML

```bash
# If you have html-validator installed
html-validator --file=index.html
```

## Git Workflow

The repository tracks all source files. When making changes:
- The site is deployed from the `main` branch
- Commit HTML, CSS, JS, and asset changes together
- Use descriptive commit messages that indicate what content or feature was updated

## Contact Information

All pages include footer links to:
- Email: firdavscoder1@gmail.com
- Twitter/X: @shodifir
- LinkedIn: linkedin.com/in/firdavscoder
- GitHub: github.com/Firdavs-coder
- Website: mrfirdavs.uz
