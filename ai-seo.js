window.AISEO = {
  init: function({ pageType, questionType, answerType }) {
    const schema = {
      "@context": "https://schema.org",
      "@type": pageType,
      "mainEntity": [{
        "@type": "Question",
        "name": questionType,
        "acceptedAnswer": { "@type": "Answer", "text": answerType }
      }]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
};
