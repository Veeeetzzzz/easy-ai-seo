
# 🧠 AI-SEO.js

**AI-SEO.js** is a lightweight, plug-and-play JavaScript utility that injects structured schema markup (`JSON-LD`) into any webpage. It's designed to make your content readable and indexable by AI-powered search engines (LLMs), like ChatGPT, Bing Chat, Google Gemini, and more — with **just two lines of code**.

---

## 🚀 Features

- ✅ Zero dependencies
- ✅ CDN-compatible (GitHub Pages or Vercel)
- ✅ Schema.org-compliant (for FAQ pages)
- ✅ Works with any JavaScript framework (React, Next.js, Vue, plain HTML)
- ✅ Minimal integration (just 2 script tags)
- ✅ Optimized for AI and SEO bots

---

## 📦 Installation

### 🔗 Option 1: GitHub CDN (Recommended)

Use directly via GitHub Pages:

```html
<script src="https://github.com/Veeeetzzzz/easy-ai-seo/ai-seo.js"></script>
```

### 📁 Option 2: Host Locally

Download [`ai-seo.js`](./ai-seo.js) and include it in your project:

```html
<script src="/path/to/ai-seo.js"></script>
```

---

## 🛠️ Usage

After including the script, initialize it like this:

```html
<script>
  AISEO.init({
    pageType: 'FAQPage',
    questionType: "How to optimize for AI search?",
    answerType: "Use structured data, clear headings, and conversational answers."
  });
</script>
```

That's it. One line to inject structured JSON-LD markup into your site.

---

## 🧩 Works With

- ✅ Static HTML
- ✅ React / Next.js
- ✅ WordPress (paste into HTML block or template)
- ✅ Shopify / Webflow
- ✅ Any framework that supports JS

---

## 📄 Example Output (JSON-LD Injected)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to optimize for AI search?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use structured data, clear headings, and conversational answers."
      }
    }
  ]
}
```

---

## ✅ Validation

Use the following tools to confirm your schema is valid and indexable:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console/about) (submit your URL for indexing)

---

## 🧪 LLM Readability Test (Optional)

Want to check if AI models can read and understand your page?

Try this prompt in ChatGPT, Gemini, or Bing Chat:

> “Can you summarize the content from [https://yourwebsite.com]? What question does it answer?”

---

## 🛡️ Best Practices

- Host the JS file on a trusted domain (GitHub Pages or your own).
- Use HTTPS to avoid mixed content issues.
- Validate frequently when updating Q&A content.
- Keep your schema up-to-date with SEO best practices.

---

## 🧰 Advanced (React/Next.js Example)

```jsx
import { useEffect } from 'react';

const SEOPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://github.com/Veeeetzzzz/easy-ai-seo/ai-seo.js";
    script.onload = () => {
      AISEO.init({
        pageType: 'FAQPage',
        questionType: "What is AI SEO?",
        answerType: "It’s the practice of optimizing content for LLM-powered AI tools and search engines."
      });
    };
    document.head.appendChild(script);
  }, []);

  return <h1>My Optimized Page</h1>;
};

export default SEOPage;
```

---

## 📘 License

MIT License. Free for personal and commercial use.

---

## 🙋 Support & Contributions

Feel free to fork, contribute, or submit issues/feature requests.  
Created with ♥ to help the web evolve with AI-driven search.
