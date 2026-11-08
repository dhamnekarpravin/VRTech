/* ============================================
   VRTech Solutions - Main JavaScript
   Language Switch (EN / Marathi) + UI Interactions
   ============================================ */

// ---------- Translations ----------
const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_features: "Features",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",

    // Hero
    hero_title: "Transforming Ideas into Digital Reality",
    hero_subtitle: "Professional Websites, Softwares, DBMS, Automations & Design services crafted for Hospitals, Businesses and Startups.",
    hero_btn_services: "Our Services",
    hero_btn_contact: "Get in Touch",
    hero_badge: "Software Engineer @ TCS",
    hero_portfolio: "View My Portfolio",

    // About
    about_tag: "Who We Are",
    about_title: "About VRTech Solutions",
    about_desc: "We help hospitals, businesses and startups grow with reliable digital solutions.",
    about_heading: "Building Future-Ready Digital Products",
    about_p1: "VRTech Solutions is a passionate team of developers and designers led by a Software Engineer at TCS. We specialize in creating high-quality websites, custom software, robust database systems, and intelligent automations that help organizations operate efficiently and scale faster.",
    about_p2: "Whether you are a hospital looking for a patient management system, a small business needing a strong online presence, or a startup building its first product – we deliver solutions that are clean, secure, and tailored to your exact needs.",
    stat_projects: "Projects Delivered",
    stat_years: "Years Experience",
    stat_clients: "Happy Clients",
    about_card1_title: "Our Mission",
    about_card1_text: "To empower hospitals, businesses and startups with modern, affordable and reliable digital solutions that drive real growth.",
    about_card2_title: "Our Vision",
    about_card2_text: "To become the most trusted technology partner for small and mid-size organizations across India.",

    // Features
    features_tag: "What We Offer",
    features_title: "Our Services",
    features_desc: "Complete digital solutions designed for hospitals, businesses and growing startups.",
    service1_title: "Static & Dynamic Websites",
    service1_desc: "Beautiful, fast and SEO-friendly websites. From simple brochure sites to fully dynamic portals with admin panels.",
    service1_item1: "Hospital & Clinic Websites",
    service1_item2: "Business Portfolio Sites",
    service1_item3: "Startup Landing Pages",
    service2_title: "DBMS & Database Solutions",
    service2_desc: "Robust database design, optimization and management systems for secure and efficient data handling.",
    service2_item1: "Patient Record Systems",
    service2_item2: "Inventory & CRM Databases",
    service2_item3: "Custom Reporting Dashboards",
    service3_title: "Custom Softwares",
    service3_desc: "Tailor-made desktop and web applications built exactly around your business workflow and requirements.",
    service3_item1: "Hospital Management Systems",
    service3_item2: "Billing & Invoicing Tools",
    service3_item3: "Internal Productivity Apps",
    service4_title: "Automations",
    service4_desc: "Save time and reduce errors with smart process automation using scripts, bots and workflow tools.",
    service4_item1: "Appointment & SMS Alerts",
    service4_item2: "Report Generation Bots",
    service4_item3: "Data Entry Automation",
    service5_title: "UI/UX Designing",
    service5_desc: "Modern, clean and user-friendly designs that make your product look professional and easy to use.",
    service5_item1: "Website & App Interfaces",
    service5_item2: "Dashboard Designs",
    service5_item3: "Brand Identity Kits",
    service6_title: "Landing Pages",
    service6_desc: "High-converting, mobile-first landing pages designed to turn visitors into customers or leads quickly.",
    service6_item1: "Product Launch Pages",
    service6_item2: "Service Offer Pages",
    service6_item3: "Event & Campaign Pages",
    examples_label: "Example:",

    // Testimonials
    testimonials_tag: "Client Love",
    testimonials_title: "What Our Clients Say",
    testimonials_desc: "Real feedback from hospitals, businesses and startups we have worked with.",
    testi1_text: "VRTech built a complete patient management system for our multi-specialty hospital. The software is fast, secure and extremely easy for our staff to use. Highly recommended!",
    testi1_name: "Dr. Priya Sharma",
    testi1_role: "Director, CarePlus Hospital",
    testi2_text: "We needed a professional website and automation for our logistics startup. The team delivered everything on time and the quality exceeded our expectations. Great communication throughout.",
    testi2_name: "Amit Kulkarni",
    testi2_role: "Founder, SwiftMove Logistics",
    testi3_text: "From UI design to a fully working billing software, VRTech handled everything. Our small clinic now runs much more efficiently. Very professional and affordable service.",
    testi3_name: "Sneha Patil",
    testi3_role: "Owner, Smile Dental Clinic",

    // Contact
    contact_tag: "Get Started",
    contact_title: "Contact Us",
    contact_desc: "Have a project in mind? Let's discuss how we can help your hospital, business or startup.",
    contact_address_title: "Address",
    contact_address: "Belgaum | India",
    contact_email_title: "Email",
    contact_phone_title: "Phone",
    contact_hours_title: "Working Hours",
    contact_hours: "Mon – Sat: 10:00 AM – 7:00 PM",
    form_name: "Your Name",
    form_email: "Email Address",
    form_service: "Service Interested In",
    form_service_select: "Select a service",
    form_opt_website: "Website (Static/Dynamic)",
    form_opt_dbms: "DBMS / Database",
    form_opt_software: "Custom Software",
    form_opt_automation: "Automation",
    form_opt_design: "UI/UX Design",
    form_opt_landing: "Landing Page",
    form_opt_other: "College Projects",
    form_opt_work: "Want to view my work",
    form_message: "Your Message",
    form_submit: "Send Message",

    // Footer
    footer_tagline: "Digital solutions for hospitals, businesses & startups.",
    footer_quick: "Quick Links",
    footer_services: "Services",
    footer_copy: "© 2025 VRTech Solutions. All rights reserved.",
    footer_made: "Crafted with ❤️ for growing businesses",
  },

  mr: {
    // Navbar
    nav_home: "मुख्यपृष्ठ",
    nav_about: "आमच्याबद्दल",
    nav_features: "सेवा",
    nav_testimonials: "प्रशंसापत्रे",
    nav_contact: "संपर्क",

    // Hero
    hero_title: "कल्पनांना डिजिटल वास्तवात रूपांतरित करणे",
    hero_subtitle: "रुग्णालये, व्यवसाय आणि स्टार्टअप्ससाठी व्यावसायिक वेबसाइट्स, सॉफ्टवेअर्स, DBMS, ऑटोमेशन आणि डिझाइन सेवा.",
    hero_btn_services: "आमच्या सेवा",
    hero_btn_contact: "संपर्क साधा",
    hero_badge: "सॉफ्टवेअर इंजिनिअर @ TCS",
    hero_portfolio: "माझे पोर्टफोलिओ पहा",

    // About
    about_tag: "आम्ही कोण आहोत",
    about_title: "व्हीआरटेक सोल्युशन्स बद्दल",
    about_desc: "आम्ही रुग्णालये, व्यवसाय आणि स्टार्टअप्सना विश्वासार्ह डिजिटल सोल्युशन्ससह वाढण्यास मदत करतो.",
    about_heading: "भविष्यासाठी तयार डिजिटल उत्पादने तयार करणे",
    about_p1: "व्हीआरटेक सोल्युशन्स ही TCS मधील सॉफ्टवेअर इंजिनिअरच्या नेतृत्वाखालील डेव्हलपर्स आणि डिझायनर्सची उत्साही टीम आहे. आम्ही उच्च-गुणवत्तेच्या वेबसाइट्स, कस्टम सॉफ्टवेअर, मजबूत डेटाबेस सिस्टम आणि बुद्धिमान ऑटोमेशन तयार करण्यात विशेषज्ञ आहोत जे संस्थांना कार्यक्षमतेने चालवण्यास आणि जलद वाढण्यास मदत करतात.",
    about_p2: "तुम्ही रुग्ण व्यवस्थापन प्रणाली शोधणारे रुग्णालय असो, मजबूत ऑनलाइन उपस्थिती हवी असलेला छोटा व्यवसाय असो किंवा त्याचे पहिले उत्पादन तयार करणारे स्टार्टअप असो – आम्ही स्वच्छ, सुरक्षित आणि तुमच्या अचूक गरजांनुसार तयार केलेली सोल्युशन्स देतो.",
    stat_projects: "प्रकल्प पूर्ण",
    stat_years: "वर्षांचा अनुभव",
    stat_clients: "आनंदी ग्राहक",
    about_card1_title: "आमचे ध्येय",
    about_card1_text: "रुग्णालये, व्यवसाय आणि स्टार्टअप्सना आधुनिक, परवडणारी आणि विश्वासार्ह डिजिटल सोल्युशन्स देऊन वास्तविक वाढ करणे.",
    about_card2_title: "आमचे दृष्टिकोन",
    about_card2_text: "भारतातील लहान आणि मध्यम आकाराच्या संस्थांसाठी सर्वात विश्वासू तंत्रज्ञान भागीदार बनणे.",

    // Features
    features_tag: "आम्ही काय देतो",
    features_title: "आमच्या सेवा",
    features_desc: "रुग्णालये, व्यवसाय आणि वाढत्या स्टार्टअप्ससाठी डिझाइन केलेली संपूर्ण डिजिटल सोल्युशन्स.",
    service1_title: "स्टॅटिक आणि डायनॅमिक वेबसाइट्स",
    service1_desc: "सुंदर, जलद आणि SEO-अनुकूल वेबसाइट्स. साध्या ब्रोशर साइट्सपासून पूर्ण डायनॅमिक पोर्टल्सपर्यंत अॅडमिन पॅनेलसह.",
    service1_item1: "रुग्णालय आणि क्लिनिक वेबसाइट्स",
    service1_item2: "बिझनेस पोर्टफोलिओ साइट्स",
    service1_item3: "स्टार्टअप लँडिंग पेजेस",
    service2_title: "DBMS आणि डेटाबेस सोल्युशन्स",
    service2_desc: "सुरक्षित आणि कार्यक्षम डेटा हाताळणीसाठी मजबूत डेटाबेस डिझाइन, ऑप्टिमायझेशन आणि व्यवस्थापन प्रणाली.",
    service2_item1: "रुग्ण रेकॉर्ड सिस्टम",
    service2_item2: "इन्व्हेंटरी आणि CRM डेटाबेस",
    service2_item3: "कस्टम रिपोर्टिंग डॅशबोर्ड",
    service3_title: "कस्टम सॉफ्टवेअर्स",
    service3_desc: "तुमच्या व्यावसायिक वर्कफ्लो आणि आवश्यकतांनुसार तयार केलेले डेस्कटॉप आणि वेब अॅप्लिकेशन्स.",
    service3_item1: "रुग्णालय व्यवस्थापन प्रणाली",
    service3_item2: "बिलिंग आणि इन्व्हॉइसिंग टूल्स",
    service3_item3: "अंतर्गत उत्पादकता अॅप्स",
    service4_title: "ऑटोमेशन्स",
    service4_desc: "स्क्रिप्ट्स, बॉट्स आणि वर्कफ्लो टूल्स वापरून स्मार्ट प्रक्रिया ऑटोमेशनद्वारे वेळ वाचवा आणि त्रुटी कमी करा.",
    service4_item1: "अपॉइंटमेंट आणि SMS अलर्ट",
    service4_item2: "रिपोर्ट जनरेशन बॉट्स",
    service4_item3: "डेटा एंट्री ऑटोमेशन",
    service5_title: "UI/UX डिझायनिंग",
    service5_desc: "आधुनिक, स्वच्छ आणि वापरकर्ता-अनुकूल डिझाइन जे तुमचे उत्पादन व्यावसायिक आणि वापरण्यास सोपे बनवतात.",
    service5_item1: "वेबसाइट आणि अॅप इंटरफेस",
    service5_item2: "डॅशबोर्ड डिझाइन्स",
    service5_item3: "ब्रँड आयडेंटिटी किट्स",
    service6_title: "लँडिंग पेजेस",
    service6_desc: "उच्च-रूपांतरण, मोबाइल-फर्स्ट लँडिंग पेजेस जे भेट देणाऱ्यांना जलद ग्राहक किंवा लीड्समध्ये बदलतात.",
    service6_item1: "उत्पादन लॉन्च पेजेस",
    service6_item2: "सेवा ऑफर पेजेस",
    service6_item3: "इव्हेंट आणि कॅम्पेन पेजेस",
    examples_label: "उदाहरण:",

    // Testimonials
    testimonials_tag: "ग्राहकांचे प्रेम",
    testimonials_title: "आमचे ग्राहक काय म्हणतात",
    testimonials_desc: "आम्ही काम केलेल्या रुग्णालये, व्यवसाय आणि स्टार्टअप्सकडून खरे अभिप्राय.",
    testi1_text: "व्हीआरटेकने आमच्या मल्टी-स्पेशलिटी रुग्णालयासाठी संपूर्ण रुग्ण व्यवस्थापन प्रणाली तयार केली. सॉफ्टवेअर जलद, सुरक्षित आणि आमच्या कर्मचाऱ्यांसाठी अत्यंत सोपे आहे. अत्यंत शिफारस!",
    testi1_name: "डॉ. प्रिया शर्मा",
    testi1_role: "संचालक, केअरप्लस हॉस्पिटल",
    testi2_text: "आमच्या लॉजिस्टिक्स स्टार्टअपसाठी आम्हाला व्यावसायिक वेबसाइट आणि ऑटोमेशनची आवश्यकता होती. टीमने सर्व काही वेळेवर वितरित केले आणि गुणवत्ता आमच्या अपेक्षांपेक्षा जास्त होती. संपूर्ण संवाद उत्कृष्ट.",
    testi2_name: "अमित कुलकर्णी",
    testi2_role: "संस्थापक, स्विफ्टमूव्ह लॉजिस्टिक्स",
    testi3_text: "UI डिझाइनपासून पूर्णपणे कार्यरत बिलिंग सॉफ्टवेअरपर्यंत, व्हीआरटेकने सर्व काही हाताळले. आमचे छोटे क्लिनिक आता अधिक कार्यक्षमतेने चालते. खूप व्यावसायिक आणि परवडणारी सेवा.",
    testi3_name: "स्नेहा पाटील",
    testi3_role: "मालक, स्माइल डेंटल क्लिनिक",

    // Contact
    contact_tag: "सुरुवात करा",
    contact_title: "आमच्याशी संपर्क साधा",
    contact_desc: "प्रकल्प मनात आहे? तुमच्या रुग्णालय, व्यवसाय किंवा स्टार्टअपला कशी मदत करू शकतो ते चर्चा करूया.",
    contact_address_title: "पत्ता",
    contact_address: "बेलगाव | भारत",
    contact_email_title: "ईमेल",
    contact_phone_title: "फोन",
    contact_hours_title: "कामाचे तास",
    contact_hours: "सोम – शनि: सकाळी १०:०० – सायंकाळी ७:००",
    form_name: "तुमचे नाव",
    form_email: "ईमेल पत्ता",
    form_service: "तुम्हाला स्वारस्य असलेली सेवा",
    form_service_select: "सेवा निवडा",
    form_opt_website: "वेबसाइट (स्टॅटिक/डायनॅमिक)",
    form_opt_dbms: "DBMS / डेटाबेस",
    form_opt_software: "कस्टम सॉफ्टवेअर",
    form_opt_automation: "ऑटोमेशन",
    form_opt_design: "UI/UX डिझाइन",
    form_opt_landing: "लँडिंग पेज",
    form_opt_other: "कॉलेज प्रोजेक्ट्स",
    form_opt_work: "माझे काम पहायचे आहे",
    form_message: "तुमचा संदेश",
    form_submit: "संदेश पाठवा",

    // Footer
    footer_tagline: "रुग्णालये, व्यवसाय आणि स्टार्टअप्ससाठी डिजिटल सोल्युशन्स.",
    footer_quick: "द्रुत दुवे",
    footer_services: "सेवा",
    footer_copy: "© २०२५ व्हीआरटेक सोल्युशन्स. सर्व हक्क राखीव.",
    footer_made: "वाढत्या व्यवसायांसाठी ❤️ सह तयार",
  }
};

// ---------- State ----------
let currentLang = localStorage.getItem("vrtech_lang") || "en";

// ---------- DOM Ready ----------
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved language
  setLanguage(currentLang);
  updateLangToggleUI();

  // Language toggle
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "mr" : "en";
      localStorage.setItem("vrtech_lang", currentLang);
      setLanguage(currentLang);
      updateLangToggleUI();
    });
  }

  // Mobile menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }

  // Header scroll effect
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Contact form - sends to atvrtechsolutions@gmail.com via FormSubmit.co
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      const name = document.getElementById("name").value.trim();

      btn.textContent = currentLang === "en" ? "Sending..." : "पाठवत आहे...";
      btn.disabled = true;

      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        service: document.getElementById("service").value,
        message: document.getElementById("message").value,
        _subject: `New project inquiry from ${name}`,
        _captcha: "false",
        _template: "table"
      };

      try {
        const res = await fetch("https://formsubmit.co/ajax/atvrtechsolutions@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(data)
        });

        if (res.ok) {
          alert(
            currentLang === "en"
              ? `Thank you ${name}! Your message has been sent. We will contact you soon.`
              : `धन्यवाद ${name}! तुमचा संदेश पाठवला गेला आहे. आम्ही लवकरच संपर्क करू.`
          );
          contactForm.reset();
        } else {
          throw new Error("Submission failed");
        }
      } catch (err) {
        alert(
          currentLang === "en"
            ? "Sorry, something went wrong. Please try again or email us directly at atvrtechsolutions@gmail.com"
            : "क्षमस्व, काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा किंवा atvrtechsolutions@gmail.com वर थेट ईमेल करा."
        );
      } finally {
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }
});

// ---------- Language Functions ----------
function setLanguage(lang) {
  // Update html lang attribute
  document.documentElement.lang = lang === "mr" ? "mr" : "en";

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Handle different element types
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        // For placeholders we could extend later
      } else if (el.tagName === "OPTION") {
        el.textContent = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Also update select options specifically if needed
  const serviceSelect = document.getElementById("service");
  if (serviceSelect) {
    const options = serviceSelect.querySelectorAll("option");
    options.forEach(opt => {
      const key = opt.getAttribute("data-i18n");
      if (key && translations[lang][key]) {
        opt.textContent = translations[lang][key];
      }
    });
  }
}

function updateLangToggleUI() {
  const enSpan = document.querySelector(".lang-en");
  const mrSpan = document.querySelector(".lang-mr");

  if (enSpan && mrSpan) {
    if (currentLang === "en") {
      enSpan.classList.add("active");
      mrSpan.classList.remove("active");
    } else {
      enSpan.classList.remove("active");
      mrSpan.classList.add("active");
    }
  }
}
