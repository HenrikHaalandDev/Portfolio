
# Personal Portfolio Website

## Table of Contents
- [Personal Portfolio Website](#personal-portfolio-website)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Tech Stack](#tech-stack)
  - [Design Philosophy and Color Scheme](#design-philosophy-and-color-scheme)
    - [Color Palette Strategy](#color-palette-strategy)
      - [Color Choice Rationale](#color-choice-rationale)
    - [Responsive Design Approach](#responsive-design-approach)
      - [Mobile-First Methodology](#mobile-first-methodology)
      - [Key Responsive Techniques](#key-responsive-techniques)
  - [SQL Injection Educational Page](#sql-injection-educational-page)
    - [Purpose](#purpose)
      - [Key Features](#key-features)
    - [Technical Highlights](#technical-highlights)
  - [Authentication System](#authentication-system)
    - [Secure Login Implementation](#secure-login-implementation)
  - [Development Journey](#development-journey)
    - [Key Milestones](#key-milestones)
  - [Performance Optimization](#performance-optimization)
    - [CSS Optimization](#css-optimization)
    - [Accessibility Considerations](#accessibility-considerations)
  - [Sources and Inspirations](#sources-and-inspirations)
    - [Design and UI Resources](#design-and-ui-resources)
    - [Learning and Reference Materials](#learning-and-reference-materials)
    - [Design Inspiration](#design-inspiration)
  - [Future Improvements](#future-improvements)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
    - [Why Waitress Instead of Flask's Built-In Server](#why-waitress-instead-of-flasks-built-in-server)
  - [Contact](#contact)

## Project Overview
This is a personal portfolio website built using Flask, showcasing my skills, projects, and expertise in coding and security.

## Tech Stack
- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Key Features**:
  - Responsive Design
  - Dark/Light Mode
  - Interactive Skills Showcase
  - SQL Injection Educational Page
  - Login/Authentication System

## Design Philosophy and Color Scheme

### Color Palette Strategy
The color scheme is carefully crafted to provide both aesthetic appeal and optimal user experience:

- **Dark Mode Palette**:
  - Background: `#1C1C1C` (Deep Charcoal)
  - Main Text: `#FFFFFF` (Pure White)
  - Accent Color: `#6FA9FF` (Soft Blue)
  - Secondary Color: `#6FA9FF` (Complementary Soft Blue)

- **Light Mode Palette**:
  - Background: `#F8F8F8` (Soft White)
  - Main Text: `#000000` (Pure Black)
  - Accent Color: `#4169E1` (Royal Blue)

#### Color Choice Rationale
1. **Accessibility**: High contrast between background and text ensures readability  
2. **Modern Aesthetic**: Soft, muted colors with a professional feel  
3. **Emotional Impact**: Blue tones convey trust, professionalism, and calm  
4. **Flexibility**: Smooth transition between dark and light modes  

### Responsive Design Approach

#### Mobile-First Methodology
The website uses a mobile-first approach, ensuring a seamless experience across devices:

```css
@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: 1fr;
  }

  .content-wrapper {
    padding: 0 1.5rem;
    gap: 5rem;
  }

  .section-header {
    font-size: 2.4rem;
  }
}
````

#### Key Responsive Techniques

* Flexbox and CSS Grid for adaptive layouts
* Relative units (`rem`, `%`) instead of fixed pixels
* Media queries to adjust typography, spacing, and component layout
* Fluid typography that scales with screen size

## SQL Injection Educational Page

### Purpose

The SQL Injection page serves as an educational resource to demonstrate:

* Common SQL Injection vulnerabilities
* Real-world attack scenarios
* Best practices for prevention

#### Key Features

* Interactive visualization of SQL Injection mechanics
* Side-by-side comparison of vulnerable vs. secure code
* Real-world case studies
* Prevention best practices

### Technical Highlights

* SVG-based attack flow diagram
* Code comparison with syntax highlighting
* Explanation of different attack vectors
* Responsive design for educational content

## Authentication System

### Secure Login Implementation

* Uses Flask-Login for session management
* Implements user registration and authentication
* Provides a clean, intuitive interface for user interactions

## Development Journey

### Key Milestones

* **Apr 11, 2025**: Project initialization, file structure setup
* **Apr 22, 2025**:

  * Added dark/light mode functionality
  * Initial homepage styling
* **Apr 23, 2025**:

  * Particle background integration
  * Home page styling improvements
* **Apr 29, 2025**: Skills page development
* **Apr 30, 2025**: SQL Injection page completed

## Performance Optimization

### CSS Optimization

* Use of CSS variables for theme management
* Minimal, efficient CSS with careful specificity
* Animations optimized for performance

### Accessibility Considerations

* High color contrast
* Responsive typography
* Semantic HTML structure

## Sources and Inspirations

### Design and UI Resources

1. Background Images:

   * Skills Background: [Picpedia Technical Skills](https://www.picpedia.org/keyboard/images/technical-skills.jpg)
   * Projects Background: [Pix4Free Projects](https://pix4free.org/assets/library/2021-07-05/originals/projects.jpg)

2. Code:

   * Switch button: [From Uiverse.io by RiccardoRapelli](https://uiverse.io/RiccardoRapelli/jolly-chicken-91)

     * `base.html` - Line 22–87
     * `button.css` - Line 1–318

### Learning and Reference Materials

1. **SQL Injection Prevention**:

   * [OWASP SQL Injection Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html)
   * Various cybersecurity educational resources

2. **Web Development Techniques**:

   * [MDN Web Docs](https://developer.mozilla.org/)
   * Flask Documentation
   * CSS Responsive Design Patterns

### Design Inspiration

* Modern minimalist portfolio designs
* Cybersecurity educational websites
* Interactive learning platforms

## Future Improvements

* Enhanced interactive components
* More detailed project showcases
* Advanced authentication features
* Performance benchmarking

## Setup and Installation

### Prerequisites

* Python 3.8+
* Flask
* Virtual Environment recommended

### Installation Steps

```bash
# Clone the repository
git clone https://github.com/HenrikHaalandDev/portfolio.git

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows
venv\Scripts\activate
# On macOS/Linux
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py
```

### Why Waitress Instead of Flask's Built-In Server

Although Flask comes with a built-in development server, it is **not designed for production use**. For this project, I use **Waitress**, a production-grade WSGI server, because:

* 🚀 **Stability and Performance**: Waitress is multi-threaded and more stable under real traffic loads.
* 🔐 **Security**: The built-in Flask server lacks hardening features for deployment, whereas Waitress is designed for exposed environments.
* 💻 **Cross-platform Compatibility**: Waitress works consistently across Windows and Linux systems.
* 🧩 **WSGI-Compliant**: It adheres to Python's WSGI standard, making it a better choice for hosting with reverse proxies like Nginx.

> In summary, **Waitress bridges the gap between development and production**—giving this portfolio site the reliability and performance needed for real-world deployment.

## Contact

Henrik Sarawut Bibow Haaland

* GitHub: [HenrikHaalandDev](https://github.com/HenrikHaalandDev)
* Email: [henrik.haaland@osloskolen.no](mailto:henrik.haaland@osloskolen.no)

