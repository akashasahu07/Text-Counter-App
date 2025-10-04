# 📝 Word & Character Counter App

A modern, feature-rich text analysis tool with a beautiful UI, dark mode support, and real-time statistics. Built with vanilla JavaScript, HTML5, and CSS3.

![Project Preview](https://img.shields.io/badge/Status-Complete-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Real-time Text Analysis**
  - Word count
  - Character count (including spaces)
  - Sentence count
  - Estimated reading time

- **Modern UI/UX**
  - Smooth animations and transitions
  - Gradient backgrounds
  - Glassmorphism design
  - Responsive layout for all devices
  - Interactive hover effects

- **Dark Mode Support**
  - Toggle between light and dark themes
  - Theme preference saved in localStorage
  - Smooth theme transitions

- **Additional Functionality**
  - Clear text button
  - Font Awesome icons
  - Auto-focus features
  - Mobile-friendly interface

## 🚀 Demo

Simply open the `index.html` file in any modern web browser to see the app in action!

## 📋 Prerequisites

No installation required! This is a standalone HTML application that runs entirely in the browser.

## 🛠️ Technologies Used

- **HTML5** - Structure and markup
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6+)** - Core functionality and interactivity
- **Font Awesome 6.4.0** - Icons (via CDN)

## 📦 Installation

1. Clone the repository or download the files
```bash
git clone https://github.com/akashasahu07/Text-Counter-App.git
```

2. Navigate to the project directory
```bash
cd Text-Counter-App
```

3. Open `index.html` in your preferred web browser
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

## 📁 Project Structure

```
Text-Counter-App/
│
├── index.html          # Main HTML file with embedded CSS and JS
└── README.md           # Project documentation
```

## 💡 Usage

1. **Type or Paste Text**: Enter your text in the textarea
2. **View Statistics**: Real-time updates show:
   - Total word count
   - Total character count
   - Number of sentences
   - Estimated reading time
3. **Toggle Theme**: Click the moon/sun icon to switch between dark and light modes
4. **Clear Text**: Click the "Clear Text" button to reset the textarea

## 🎨 Features Breakdown

### Text Analysis Algorithms

- **Word Count**: Uses regex pattern `/\s+/` to split text by whitespace
- **Character Count**: Counts all characters including spaces and special characters
- **Sentence Count**: Splits text by sentence delimiters (`.`, `!`, `?`)
- **Reading Time**: Calculated based on average reading speed of 200 words per minute

### Dark Mode Implementation

```javascript
// Theme preference is saved in localStorage
localStorage.setItem("theme", isDark ? "dark" : "light");
```

## 🌐 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Design

The app is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones

Breakpoint: `600px` for mobile optimization

## 🎯 Key Highlights

- **Zero Dependencies**: No frameworks or libraries required (except Font Awesome CDN for icons)
- **Lightweight**: Single HTML file with embedded styles and scripts
- **Fast Performance**: Instant real-time updates
- **Accessible**: Semantic HTML and keyboard-friendly
- **Modern Design**: Follows current web design trends

## 🔧 Customization

### Changing Colors

Edit the gradient values in the CSS:

```css
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adjusting Reading Speed

Modify the words-per-minute value:

```javascript
const readTime = Math.ceil(wordCount / 200); // Change 200 to your preferred speed
```

### Adding More Statistics

Add new stat cards in the HTML and implement logic in JavaScript:

```javascript
// Example: Paragraph count
const paragraphCount = text.split(/\n\n+/).filter(p => p.trim().length > 0).length;
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@akashasahu07](https://github.com/akashasahu07)
- LinkedIn: [Akasha Sahu](https://linkedin.com/in/akashasahu07)
- Portfolio: [Portfolio](https://ak-portfolio-web7.vercel.app)

## 🙏 Acknowledgments

- Font Awesome for the beautiful icons
- Inspiration from modern web design trends
- The web development community

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

## 🎉 Fun Facts

- Average reading speed: 200-250 words per minute
- This app was built with vanilla JavaScript (no frameworks!)
- Dark mode saves your preference automatically
- All animations are CSS-based for smooth performance

---

⭐ If you find this project useful, please consider giving it a star on GitHub!

**Made with ❤️ and JavaScript**