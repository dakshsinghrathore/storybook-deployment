import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Enter your full legal name": "Enter your full legal name",
          "Enter your primary email address": "Enter your primary email address",
          "Enter your phone number": "Enter your phone number",
          "Enter your date of birth": "Enter your date of birth",
          "Enter your current city and country of residence": "Enter your current city and country of residence",
          "Translate to Hindi": "Translate to Hindi",
          "Translate to Telugu": "Translate to Telugu",
          "Submit": "Submit",
          "Name helper text": "Please provide your complete name as it appears on your identification document",
          "Email helper text": "We will use this email address for all communications regarding your moderator role.",
          "Phone helper text": "Enter a 10-digit phone number.",
          "Date of Birth helper text": "Your date of birth helps us verify your eligibility for moderating our platform.",
          "Location helper text": "Let us know where you are located to understand the diversity of our moderator team."
        },
      },
      hi: {
        translation: {
          "Enter your full legal name": "पूरा नाम",
          "Enter your primary email address": "ईमेल पता",
          "Enter your phone number": "संपर्क नंबर",
          "Enter your date of birth": "जन्म तिथि",
          "Enter your current city and country of residence": "स्थान (शहर, देश)",
          "Translate to Hindi": "अंग्रेज़ी पर स्विच करें",
          "Translate to Telugu": "तेलुगु परिवर्तित करें",
          "Submit": "जमा करें",
          "Name helper text": "कृपया अपना पूरा नाम प्रदान करें जैसा कि यह आपके पहचान दस्तावेज़ पर दिखाई देता है।",
          "Email helper text": " हम आपकी मॉडरेटर भूमिका के संबंध में सभी संचार के लिए इस ईमेल पते का उपयोग करेंगे।",
          "Phone helper text": "एक पहुंच योग्य संपर्क नंबर प्रदान करें जहां जरूरत पड़ने पर हम आप तक पहुंच सकें।",
          "Date of Birth helper text": "आपकी जन्मतिथि हमें हमारे प्लेटफ़ॉर्म को मॉडरेट करने के लिए आपकी पात्रता सत्यापित करने में मदद करती है।",
          "Location helper text": "हमारी मॉडरेटर टीम की विविधता को समझने के लिए हमें बताएं कि आप कहां स्थित हैं।"
        },
      },
      te: {
        translation: {
          "Enter your full legal name": "పూర్తి పేరు",
          "Enter your primary email address": "ఇమెయిల్ చిరునామా",
          "Enter your phone number": " సంప్రదింపు సంఖ్య",
          "Enter your date of birth": "పుట్టిన తేదీ",
          "Enter your current city and country of residence": "స్థానం (నగరం, దేశం)",
          "Translate to Hindi": "తర్జుమాకు మార్చండి",
          "Translate to Telugu": "తెలుగుకు మార్చండి",
          "Submit": "సమర్పించండి",
          "Name helper text": "దయచేసి మీ గుర్తింపు పత్రంలో కనిపించే విధంగా మీ పూర్తి పేరును అందించండి.",
          "Email helper text": "మీ మోడరేటర్ పాత్రకు సంబంధించిన అన్ని కమ్యూనికేషన్‌ల కోసం మేము ఈ ఇమెయిల్ చిరునామాను ఉపయోగిస్తాము.",
          "Phone helper text": "అందుబాటులో ఉన్న సంప్రదింపు నంబర్‌ను అందించండి, అవసరమైతే మేము మిమ్మల్ని సంప్రదించవచ్చు.",
          "Date of Birth helper text": "మీ పుట్టిన తేదీ మా ప్లాట్‌ఫారమ్‌ని నియంత్రించడానికి మీ అర్హతను ధృవీకరించడంలో మాకు సహాయపడుతుంది..",
          "Location helper text": "మా మోడరేటర్ బృందం యొక్క వైవిధ్యాన్ని అర్థం చేసుకోవడానికి మీరు ఎక్కడ ఉన్నారో మాకు తెలియజేయండి"
        },
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
