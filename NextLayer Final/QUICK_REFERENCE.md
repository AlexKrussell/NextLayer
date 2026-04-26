# NextLayer - Quick Reference

## ⚡ Launch in 5 Seconds

**Just open `index.html` in your browser!**

That's it. No server needed. No JavaScript. Pure HTML & CSS.

---

## 📄 All Pages

| File | What It Shows | Interactive? |
|------|---------------|--------------|
| `index.html` | Home page with hero & features | ✅ Hover effects only |
| `gallery.html` | 6 design cards with images | ✅ Hover effects only |
| `generator.html` | Pre-made idea example | ❌ Static content |
| `contact.html` | Contact form & info | ❌ Form doesn't submit |
| `copyright.html` | Legal information | ✅ Hover effects only |

---

## 🎨 What Actually Works

### ✅ Working Features (HTML/CSS):
- ✅ Navigation between pages
- ✅ Responsive layout (mobile/tablet/desktop)
- ✅ Hover effects on cards and buttons
- ✅ CSS animations
- ✅ Form fields (can type in them)
- ✅ Sticky navigation
- ✅ Smooth transitions

### ❌ Non-Functional (Would Need JavaScript):
- ❌ Search functionality
- ❌ Category filtering  
- ❌ Form submission
- ❌ Generate random ideas
- ❌ Like/download buttons
- ❌ Mobile menu toggle

---

## 🎯 Quick Customization

### Change Brand Color
**File:** `styles/main.css` (Line 7)
```css
--color-indigo-600: #4f46e5;  /* ← Change this hex value */
```

### Change Homepage Title
**File:** `index.html` (Line 21-23)
```html
<h1 class="hero-title">
    Your Text Here. <br>
    <span class="text-gradient">And Here.</span>
</h1>
```

### Add a Design Card
**File:** `gallery.html`

Copy one of the existing `<div class="design-card">` blocks and paste it. Change the:
- Image URL (`src` attribute)
- Title text
- Creator name
- Price

### Change Contact Email
**File:** `contact.html` (Line 73)
```html
<p class="contact-text">your-email@domain.com</p>
```

---

## 📐 File Structure

```
Simple as it gets!
├── index.html           ← Home page (start here)
├── gallery.html         ← 6 design cards
├── generator.html       ← Idea example
├── contact.html         ← Contact form
├── copyright.html       ← Legal info
└── styles/
    └── main.css        ← All styling
```

**No JavaScript folder. No build tools. No node_modules.**

---

## 🌈 Color Palette

Quick reference for the design colors:

| Color Name | Hex Code | Where Used |
|------------|----------|------------|
| Primary (Indigo) | `#4f46e5` | Buttons, highlights |
| Primary Hover | `#4338ca` | Button hovers |
| Gray 900 | `#111827` | Main text |
| Gray 500 | `#6b7280` | Secondary text |
| Gray 50 | `#f9fafb` | Backgrounds |
| White | `#ffffff` | Cards, backgrounds |

---

## 📱 Responsive Breakpoints

| Size | Breakpoint | What Changes |
|------|------------|--------------|
| Mobile | < 640px | Single column, stacked elements |
| Tablet | 640px - 1024px | 2-column gallery |
| Desktop | > 1024px | 3-column gallery, side-by-side hero |

---

## 🎭 Key CSS Classes

Use these classes in your HTML:

### Buttons
```html
<a href="#" class="btn btn-primary">Primary Button</a>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-outline">Outline Button</button>
```

### Containers
```html
<div class="container">  <!-- Max-width wrapper -->
<section class="section-white">  <!-- White background section -->
```

### Typography
```html
<h1 class="hero-title">Large Hero Text</h1>
<h2 class="section-title">Section Heading</h2>
<p class="section-description">Section subtitle</p>
```

---

## 🚀 Deploy in 2 Minutes

### Option 1: GitHub Pages (Free)
1. Create GitHub repo
2. Upload all files
3. Settings → Pages → Enable
4. ✅ Live!

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag folder into browser
3. ✅ Live!

### Option 3: Any Web Server
Upload files to any folder accessible by a web server. That's it.

---

## 🔧 Common Tweaks

### Make Hero Image Different
**File:** `index.html` (Line 47)
```html
<img src="YOUR_IMAGE_URL" alt="Description">
```

### Change Footer Copyright Year
**File:** All HTML files (in footer)
```html
<p class="footer-copyright">&copy; 2026 NextLayer Inc.</p>
```

### Add More Category Tabs
**File:** `gallery.html` (Line 64-70)
```html
<button class="category-tab">Your Category</button>
```

### Modify Generated Idea
**File:** `generator.html` (Line 57-59)
```html
<div class="idea-main">
    Your idea <span class="idea-highlight">here</span>
</div>
```

---

## 💡 Tips

1. **View Source**: Right-click → View Page Source to see the code
2. **DevTools**: Press F12 to inspect and experiment with CSS
3. **Image Sizes**: Large images may load slowly (consider optimization)
4. **Test Offline**: Download, disconnect from internet, still works (except images)
5. **Print Friendly**: The CSS is print-ready if you need PDFs

---

## 🎓 Learning From This Project

Great examples to study:

| Concept | Where to Look |
|---------|---------------|
| **CSS Grid** | `.features-grid`, `.gallery-grid` in main.css |
| **Flexbox** | `.hero-grid`, `.navbar-container` |
| **Hover Effects** | `.feature-card:hover`, `.design-card:hover` |
| **Responsive** | `@media` queries at bottom of main.css |
| **CSS Variables** | `:root` section at top of main.css |
| **Animations** | `@keyframes` and `.fade-in-*` classes |

---

## ⚠️ Troubleshooting

| Problem | Solution |
|---------|----------|
| Images don't load | Check internet connection (images from Unsplash) |
| Layout looks broken | Make sure `styles/main.css` exists |
| Colors wrong | Check CSS variables in main.css `:root` |
| Links don't work | Make sure HTML files are in same folder |

---

## 📊 Quick Stats

- **Total Files**: 6 (5 HTML + 1 CSS)
- **External Dependencies**: 1 (Google Fonts - Inter)
- **JavaScript**: 0 lines
- **Build Process**: None
- **Load Time**: < 1 second
- **Browser Support**: All modern browsers

---

## 🎉 That's It!

**NextLayer is pure HTML & CSS simplicity.**

No webpack. No npm. No complexity.  
Just open `index.html` and enjoy! 🚀

---

For more details: See [README.md](README.md) or [GETTING_STARTED.md](GETTING_STARTED.md)
