# Shivam Residency — WordPress Implementation Guide 🚀
> **Project**: Shivam Residency (Premium 2 BHK Residences Near Lake Town, Bibwewadi Annex, Pune)  
> **Developer**: Solanki Venture (7,50,000+ Sq.Ft. Constructed • 1,800+ Flats • 100+ Commercial Shops)  
> **Target Platform**: WordPress (Elementor / Gutenberg / Any WP Page Builder)  
> **Standardized CTAs**: **"Book a Site Visit"** & **"Get Price & Floor Plan"**

---

## 1. High-Converting Landing Page Strategy

### A. The 2 Standardized Action Triggers
To avoid visitor confusion and maximize lead volume, every action button across the entire landing page uses one of two standardized triggers:
1. **"Book a Site Visit"** (Primary CTA): Scrolls directly to the booking form at `#contact` or opens the visit scheduler.
2. **"Get Price & Floor Plan"** (Secondary Inquiry CTA): Opens the clean 3-field popup modal with the selected flat size pre-selected.

### B. High-Conversion 3-Field Lead Forms
Rather than requiring dates, time slots, email addresses, or unconfirmed budgets that suppress conversions, both forms require only 3 high-intent fields:
1. **Full Name** (`text`, Required)
2. **Mobile Number** (`tel`, Required, 10-digit format with +91)
3. **Preferred Flat Size** (`select`, Required):
   - 600 Sq.Ft. Carpet
   - 630 Sq.Ft. Carpet
   - 690 Sq.Ft. Carpet
   - 735 Sq.Ft. Carpet
   - 740 Sq.Ft. Carpet
   - 790 Sq.Ft. Carpet
   - 2 BHK (General Inquiry)

---

## 2. Global Design Tokens (Elementor Site Settings)

### A. Color Palette
In WordPress Admin, go to **Elementor > Site Settings > Global Colors**:

| Token Name | Hex Code | Purpose in Design |
|---|---|---|
| **Primary (Botanical Forest)** | `#0F382C` | Headings, primary CTA buttons, dark containers |
| **Primary Light** | `#165643` | Button hover states, active tabs |
| **Accent (Warm Amber Gold)** | `#D97706` | Badges, subtle accents |
| **Accent Soft** | `#FEF3C7` | Badge background tints, soft callout boxes |
| **Leaf Emerald** | `#16A34A` | Verification icons, nature tags |
| **Background Alt** | `#F8FAF8` | Alternating section backgrounds |
| **Text Title** | `#0F172A` | Primary headlines |
| **Text Body** | `#334155` | Body paragraphs |
| **Text Muted** | `#64748B` | Subtext, timestamps, legal disclaimer |

### B. Typography
In **Elementor > Site Settings > Global Fonts**:
* **Primary Headings**: `Plus Jakarta Sans` (Weight: 700, 800 — Matches Official Logo & PDF Document)
* **Secondary / UI & Body Text**: `Plus Jakarta Sans` (Weight: 400, 500, 600)

---

## 3. Elementor / Gutenberg Section Mapping Matrix

Every section on this page has an exact, native counterpart in WordPress without custom backends:

| Landing Page Section | Elementor Free / Pro Equivalent | Gutenberg Equivalent |
|---|---|---|
| **Clean Sticky Header** | Elementor Theme Builder Header (Container: 1200px Flex) + Logo Image + Nav Menu (4 links: Overview, Amenities, Floor Plans, Location) + Button widget (`Book a Site Visit`) | Site Editor Header + Navigation Block + Button Block |
| **Hero Section** | Full-width Container (Min-height: 100vh / 680px) with **Elementor Slides Widget** / Background Slider (3 images: Elevation, Terrace Garden, Living Room with Ken-Burns zoom & dark gradient overlay) + Overlay Content: Subtitle tag, H1 with gradient text, Journey Subtitle, 3 Glassmorphic Metrics & 2 Action Buttons (`Book a Site Visit` + `Get Price & Floor Plan`) | Full-Width Group Block with Cover Slider Block / Carousel Block + Nested Heading, Glassmorphic Group & Buttons |
| **Project Story & Pillars** | 2-Column Container: Left = Interior Image with Quote Overlay; Right = 5-item **Icon Box Widget** + CTA button | Media & Text Block + Icon List + Button |
| **Rooftop Amenities** | 3-Column Grid Container with 6 **Icon Box Cards** (Landscape Garden, Senior Citizen Sit-out, Community Spaces, Rooftop Theatre, Children's Play Area, BBQ Space) | 3-Column Columns Block with Card Groups |
| **Everyday Living Block** | 2-Column Container: "Designed For Convenience" & "Designed For Responsible Living" with checkmark icon lists | 2-Column Group Block with List Widget |
| **2 BHK Residence Options** | Elementor Free 2-Column Container: Left = 3D Isometric View Image; Right = Heading, carpet area pill tags, checklist & CTA buttons | Gutenberg 2-Column Columns Block with Media & Text |
| **Construction Specifications** | 3-Column Container with 6 Cards (Structure, Flooring, Doors & Windows, Kitchen, Electrical, Plumbing) | 3-Column Columns Block |
| **Location & Proximity** | Full-Width Container: Top = Horizontal Full-Width Google Maps Box (`height: 430px`) with Site Address Header, Directions CTA & Quick Proximity Ribbon; Below = Category Filter Tabs (Education, Retail, Transit, Leisure, Healthcare) + 4-Column Responsive Grid of Landmark Cards with time badges | Full-Width Group Block with Google Maps Embed Block + Filterable Columns Block with Landmark Cards |
| **Developer Credibility (Solanki)** | 2-Column Container: Left = 4 Commitments; Right = Developer Logo, 3 Track Record Counters (7.5L Sq.Ft., 1800 Flats, 100 Shops), and Professional Team Tags | 2-Column Group Block with Counter Widgets |
| **Final Site Visit Booking** | Dark Container (`#0F382C`) + 2 Columns: Left = Direct contact info; Right = Clean 3-Field Booking Form | Group Block + WPForms / Fluent Forms |
| **RERA Statutory Disclaimer** | Text Editor Widget with small font (`0.72rem`) containing exact brochure wording from Page 13 | Paragraph Block with muted text color |
| **Mobile Conversion Bar** | Elementor Custom Code or free plugin *"Floating Action Button"* (Triggers: Call, WhatsApp, Book Visit) | Plugin: *Click to Chat* / *WP Mobile Navigation* |

---

## 4. Setting Up Forms in WordPress (WPForms / Contact Form 7 / Elementor Form)

Connect your forms to **WPForms**, **Fluent Forms**, or **Elementor Forms**:

1. **Full Name** (`text`, Required)
2. **Phone Number** (`tel`, Required, 10 digits with +91)
3. **Preferred Flat Size** (`select`, Required):
   - 600 Sq.Ft. Carpet
   - 630 Sq.Ft. Carpet
   - 690 Sq.Ft. Carpet
   - 735 Sq.Ft. Carpet
   - 740 Sq.Ft. Carpet
   - 790 Sq.Ft. Carpet
   - 2 BHK (General Inquiry)

**Post-Submission Action**: Set an instant notification email to your sales desk (`sales@...`) and display the on-screen confirmation:
> *"Thank you! We have received your request for Shivam Residency. Our sales team will contact you shortly with full details."*

---

## 5. Live Prototype Preview
The prototype is ready in `index.html`. You can test it locally via:
```powershell
# Open directly in your browser:
start index.html
```

---

## 6. Graphic Designer Asset Specifications
For exact dimensions, aspect ratios, safe zones, and visual descriptions to hand over to 3D visualizers and graphics designers, refer to:
👉 **[IMAGE-SPECIFICATIONS-GUIDE.md](file:///e:/atharv/shivam%20residency-20261028T114555Z-1-001/shivam%20residency/IMAGE-SPECIFICATIONS-GUIDE.md)**

