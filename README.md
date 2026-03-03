# Ane Emilie Stjernen – Singer Website

A professional, responsive single-page website for singer **Ane Emilie Stjernen**, who performs at weddings, funerals, and other events.

## 🚀 Getting Started

Simply open `index.html` in a web browser – no build step or server required.

```
Open: website/index.html
```

## 🛠 Tech Stack

- **HTML5** – Semantic markup
- **Tailwind CSS** (CDN) – Utility-first CSS framework
- **Alpine.js** (CDN) – Lightweight JavaScript framework
- **Google Fonts** – Playfair Display + Inter

## 📄 Pages & Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen landing with CTA |
| **Om meg** | Biography and stats |
| **Tjenester** | Services: funerals, weddings, events |
| **Repertoar** | Music repertoire categories |
| **Media** | Photo gallery with lightbox + video placeholder |
| **Omtaler** | Testimonial carousel |
| **Priser** | Pricing tiers |
| **Booking** | Contact form |
| **FAQ** | Frequently asked questions (accordion) |
| **Footer** | Social media links, quick links, copyright |

## ✏️ Customization

### Replace Placeholder Images
All images are loaded from Unsplash. Replace the `src` attributes in `index.html` with your own photos.

### Contact Form
The form currently simulates submission. To enable real submissions:
1. Sign up at [Formspree](https://formspree.io/)
2. Create a form and get your form ID
3. In `app.js`, uncomment the `fetch` call in the `submit()` function and replace `YOUR_FORM_ID`

### Social Media Links
Update the `href="#"` attributes in the footer social media icons with actual profile URLs.

### Contact Information
Update the email (`kontakt@aneemilie.no`) and phone number (`+47 123 45 678`) in the booking section.

### YouTube Video
Uncomment the `<iframe>` in the Media section and add your YouTube video ID.

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Gold 400 | `#e2b43f` | Accents, highlights |
| Gold 500 | `#d99b26` | Buttons, primary actions |
| Cream 50 | `#fefdfb` | Headings |
| Cream 100 | `#fdf8f0` | Body text |
| Charcoal 900 | `#2a2a2a` | Section backgrounds |
| Charcoal 950 | `#1a1a1a` | Main background |

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: Single column, hamburger menu
- **Tablet**: Adjusted grids, larger text
- **Desktop**: Multi-column layouts, hover effects

## 📝 Language

The website is in **Norwegian (Bokmål)**, targeting a Norwegian audience.

---

© 2026 Ane Emilie Stjernen

