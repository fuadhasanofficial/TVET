import React, { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Load Google Translate script
    const addGoogleTranslateScript = document.createElement("script");
    addGoogleTranslateScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(addGoogleTranslateScript);

    // Function to initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en", // Default language of your site
          includedLanguages: "en,fr,es,de,zh,hi", // Languages to include
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="google-translate">
      {/* The div where Google Translate will inject the widget */}
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
