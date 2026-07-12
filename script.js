/* ----------------------------------------------------
   STANFORD SCHOOL LANDING PAGE LOGIC & TRANSLATIONS
   ---------------------------------------------------- */

// 1. TRANSLATION DICTIONARY
const translations = {
  ru: {
    // Navigation
    nav_courses: "Курсы",
    nav_results: "Результаты",
    nav_teachers: "Преподаватели",
    nav_reviews: "Сертификаты",
    nav_cta: "Записаться",
    
    // Hero Section
    hero_eyebrow: "Better future starts here",
    hero_title: "ТВОЁ ЛУЧШЕЕ|БУДУЩЕЕ|НАЧИНАЕТСЯ|ЗДЕСЬ",
    hero_subtitle: "Курсы английского языка нового поколения. От базовых уровней до подготовки к международному экзамену IELTS. Твои цели — наша система результатов.",
    hero_cta_primary: "Записаться на пробный урок",
    hero_cta_secondary: "Смотреть результаты",
    
    // Stats Section
    stats_graduates_lbl: "Успешных выпускников",
    stats_ielts_lbl: "Сдача IELTS с 1-го раза",
    stats_teachers_lbl: "Сертифицированных преподавателей",
    stats_experience_lbl: "Лет успешного опыта",
    
    // Courses Section
    courses_eyebrow: "Образовательные программы",
    courses_title: "ВЫБЕРИ СВОЙ ПУТЬ",
    courses_subtitle: "Мы разработали гибкую систему курсов для любых возрастов и целей обучения английскому языку.",
    
    course_1_title: "General English",
    course_1_desc: "Разговорный и письменный английский для жизни и путешествий. Уверенное развитие всех навыков: Speaking, Listening, Reading и Writing с любого уровня.",
    course_1_badge: "Все уровни",
    
    course_2_title: "IELTS Preparation",
    course_2_desc: "Интенсивный курс подготовки к международному экзамену. Разбор структуры экзамена, ловушек, прокачка академического письма и Speaking.",
    course_2_badge: "Target: 7.0+",
    
    course_3_title: "Разговорный клуб",
    course_3_desc: "Преодолейте языковой барьер. Увлекательные дискуссии на актуальные темы с носителями языка в небольших мини-группах.",
    course_3_badge: "От B1",
    
    course_4_title: "Английский для детей",
    course_4_desc: "Интерактивные занятия в игровой форме. Развиваем любовь к языку у школьников, расширяем лексику и помогаем улучшить школьные оценки.",
    course_4_badge: "7-14 лет",
    
    course_5_title: "Business English",
    course_5_desc: "Для специалистов и предпринимателей. Деловая переписка, прохождение собеседований, ведение переговоров и презентация проектов.",
    course_5_badge: "От B1",
    
    course_6_title: "Индивидуально",
    course_6_desc: "Персональный план занятий один на один с преподавателем. Адаптивный график, фокус на ваших личных целях и максимальное внимание.",
    course_6_badge: "Персонально",
    course_link_text: "Подробнее",
    
    // Results Section
    results_eyebrow: "Истории успеха",
    results_title: "РЕЗУЛЬТАТЫ СТУДЕНТОВ",
    results_subtitle: "Посмотрите, как трансформируется знание языка и открываются новые карьерные и учебные возможности.",
    results_before: "Было",
    results_after: "Стало",
    
    result_1_course: "Курс: IELTS Preparation",
    result_1_quote: "«Поступил в Университет Амстердама на специальность Data Science. В Stanford School научили четко структурировать академическое письмо для Writing и перебороли мой страх в Speaking.»",
    
    result_2_course: "Курс: General English",
    result_2_quote: "«Спустя полгода интенсивной учебы я смогла уверенно пройти собеседование в международную IT-компанию полностью на английском. Сейчас переехала в Прагу, работаю в мультиязычной команде.»",
    
    result_3_course: "Курс: Business English",
    result_3_quote: "«Свободно веду переговоры с зарубежными партнерами. Исчез языковой барьер и синдром самозванца во время презентаций. Инвестиции в курс окупились в первый же месяц после закрытия крупной сделки.»",
    
    // Teachers Section
    teachers_eyebrow: "Наша команда",
    teachers_title: "НАСТАВНИКИ С ОПЫТОМ",
    teachers_subtitle: "Занятия ведут профессиональные педагоги и сертифицированные носители языка из Великобритании и США.",
    
    teacher_1_badge: "Native Speaker",
    teacher_1_spec: "Разговорный английский & IELTS",
    teacher_1_exp: "Опыт: 8 лет",
    
    teacher_2_badge: "IELTS Expert",
    teacher_2_spec: "Подготовка к IELTS & Grammar",
    teacher_2_exp: "Опыт: 6 лет",
    
    teacher_3_badge: "Native Speaker",
    teacher_3_spec: "Business English & Переговоры",
    teacher_3_exp: "Опыт: 7 лет",
    
    teacher_4_badge: "Methodologist",
    teacher_4_spec: "Английский для детей & General",
    teacher_4_exp: "Опыт: 5 лет",
    
    // Certificates Section
    cert_section_eyebrow: "Наши успехи",
    cert_section_title: "СЕРТИФИКАТЫ ВЫПУСКНИКОВ",
    cert_title: "СЕРТИФИКАТ",
    cert_subtitle: "ОБ УСПЕШНОМ ОКОНЧАНИИ",
    cert_1_name: "Тимур Каримов",
    cert_1_details: "Успешно завершил курс интенсивной подготовки к IELTS с результатом 7.5 баллов.",
    cert_2_name: "Алина Борисова",
    cert_2_details: "Успешно завершила курс разговорного английского General English на уровне B2.",
    cert_3_name: "Данияр Кадыров",
    cert_3_details: "Успешно завершил продвинутый курс делового английского Business English на уровне C1.",
    cert_4_name: "Руслан Ибрагимов",
    cert_4_details: "Успешно завершил специализированный курс подготовки к техническим презентациям.",
    cert_5_name: "Елена Волкова",
    cert_5_details: "Успешно преодолела языковой барьер, завершив курс разговорного английского.",
    
    // CTA Section
    cta_title: "НАЧНИ СВОЕ БУДУЩЕЕ СЕГОДНЯ",
    cta_subtitle: "Оставь заявку на бесплатное тестирование уровня английского языка и пробный урок в мини-группе.",
    cta_benefit_1: "Бесплатное определение уровня (Grammar + Speaking)",
    cta_benefit_2: "Индивидуальный разбор ошибок с методистом школы",
    cta_benefit_3: "Скидка 15% на первый месяц обучения при оплате в день теста",
    
    form_name_lbl: "Ваше имя",
    form_name_placeholder: "Константин",
    form_phone_lbl: "Номер телефона",
    form_phone_placeholder: "+7 (___) ___-__-__",
    form_privacy_lbl: "Согласен с политикой обработки персональных данных",
    form_submit_btn: "Отправить заявку",
    form_error_name: "Пожалуйста, введите имя (не менее 2 символов)",
    form_error_phone: "Пожалуйста, введите корректный номер телефона",
    
    success_title: "Заявка принята!",
    success_text: "Мы свяжемся с вами в течение 15 минут для подтверждения записи на пробный урок.",
    success_reset_btn: "Отправить еще раз",
    
    // Footer Section
    footer_desc: "Качественное обучение английскому языку по международным стандартам. Подготовка к будущему начинается прямо сейчас.",
    footer_slogan: "Better future starts here",
    footer_title_programs: "Программы",
    footer_title_school: "Учебный центр",
    footer_title_contacts: "Контакты",
    footer_contact_address: "просп. Аль-Фараби 77, Алматы, Казахстан",
    footer_copyright: "© 2026 Stanford School. Все права защищены.",
    footer_legal_privacy: "Политика конфиденциальности",
    footer_legal_offer: "Публичная оферта"
  },
  en: {
    // Navigation
    nav_courses: "Courses",
    nav_results: "Results",
    nav_teachers: "Teachers",
    nav_reviews: "Certificates",
    nav_cta: "Apply Now",
    
    // Hero Section
    hero_eyebrow: "Better future starts here",
    hero_title: "YOUR BETTER|FUTURE|STARTS|RIGHT HERE",
    hero_subtitle: "Next-generation English language courses. From beginner levels to international IELTS preparation. Your goals — our system of results.",
    hero_cta_primary: "Book a Trial Lesson",
    hero_cta_secondary: "View Results",
    
    // Stats Section
    stats_graduates_lbl: "Successful graduates",
    stats_ielts_lbl: "IELTS passed on 1st try",
    stats_teachers_lbl: "Certified native teachers",
    stats_experience_lbl: "Years of successful experience",
    
    // Courses Section
    courses_eyebrow: "Educational programs",
    courses_title: "CHOOSE YOUR PATH",
    courses_subtitle: "We have designed a flexible system of English language courses for all ages and learning goals.",
    
    course_1_title: "General English",
    course_1_desc: "Spoken and written English for life and travel. Confident development of all skills: Speaking, Listening, Reading, and Writing from any level.",
    course_1_badge: "All levels",
    
    course_2_title: "IELTS Preparation",
    course_2_desc: "Intensive preparation course for the international exam. Structuring, strategies, traps analysis, academic writing, and speaking mock-ups.",
    course_2_badge: "Target: 7.0+",
    
    course_3_title: "Speaking Club",
    course_3_desc: "Break the language barrier. Exciting group discussions on current topics with native English speakers in small mini-groups.",
    course_3_badge: "From B1",
    
    course_4_title: "English for Kids",
    course_4_desc: "Interactive games and lessons. We foster a love for English, build extensive vocabulary, and help improve school marks.",
    course_4_badge: "Ages 7-14",
    
    course_5_title: "Business English",
    course_5_desc: "For specialists and entrepreneurs. Professional correspondence, job interviews preparation, business negotiations, and project presentations.",
    course_5_badge: "From B1",
    
    course_6_title: "1-on-1 Lessons",
    course_6_desc: "Personalized study plan one-on-one with a tutor. Flexible schedule, focus on your individual goals, and maximum attention.",
    course_6_badge: "Personalized",
    course_link_text: "Learn More",
    
    // Results Section
    results_eyebrow: "Success Stories",
    results_title: "STUDENT RESULTS",
    results_subtitle: "See how English proficiency opens up new career, study, and relocation opportunities.",
    results_before: "Before",
    results_after: "After",
    
    result_1_course: "Course: IELTS Preparation",
    result_1_quote: "\"I got accepted into the University of Amsterdam for Data Science. Stanford School taught me how to structure academic essays for Writing and helped me overcome Speaking anxiety.\"",
    
    result_2_course: "Course: General English",
    result_2_quote: "\"After 6 months of intensive study, I passed my interview for an international IT company entirely in English. I've now relocated to Prague, working in a multilingual team.\"",
    
    result_3_course: "Course: Business English",
    result_3_quote: "\"I negotiate with foreign business partners with complete confidence. The language barrier is gone. My investment in the course paid off after the very first major contract closing.\"",
    
    // Teachers Section
    teachers_eyebrow: "Our Team",
    teachers_title: "CERTIFIED MENTORS",
    teachers_subtitle: "Classes are taught by professional local educators and certified native speakers from the UK and USA.",
    
    teacher_1_badge: "Native Speaker",
    teacher_1_spec: "Conversational English & IELTS",
    teacher_1_exp: "Exp: 8 years",
    
    teacher_2_badge: "IELTS Expert",
    teacher_2_spec: "IELTS Prep & Grammar Specialist",
    teacher_2_exp: "Exp: 6 years",
    
    teacher_3_badge: "Native Speaker",
    teacher_3_spec: "Business English & Negotiations",
    teacher_3_exp: "Exp: 7 years",
    
    teacher_4_badge: "Methodologist",
    teacher_4_spec: "Kids English & General Course",
    teacher_4_exp: "Exp: 5 years",
    
    // Certificates Section
    cert_section_eyebrow: "Our Successes",
    cert_section_title: "GRADUATE CERTIFICATES",
    cert_title: "CERTIFICATE",
    cert_subtitle: "OF ACHIEVEMENT",
    cert_1_name: "Timur Karimov",
    cert_1_details: "Successfully completed the IELTS Intensive Preparation course with a band score of 7.5.",
    cert_2_name: "Alina Borisova",
    cert_2_details: "Successfully completed the General English communication course at B2 level.",
    cert_3_name: "Daniyar Kadyrov",
    cert_3_details: "Successfully completed the advanced Business English program at C1 level.",
    cert_4_name: "Ruslan Ibragimov",
    cert_4_details: "Successfully completed a specialized course for technical presentations in English.",
    cert_5_name: "Elena Volkova",
    cert_5_details: "Successfully completed the spoken English communication program.",
    
    // CTA Section
    cta_title: "START YOUR FUTURE TODAY",
    cta_subtitle: "Leave a request for a free level assessment and a trial lesson in a mini-group.",
    cta_benefit_1: "Free level assessment (Grammar + Speaking mock-test)",
    cta_benefit_2: "Personalized error correction session with a methodologist",
    cta_benefit_3: "15% discount on the first month when paying on test day",
    
    form_name_lbl: "Your Name",
    form_name_placeholder: "Constantin",
    form_phone_lbl: "Phone Number",
    form_phone_placeholder: "+7 (___) ___-__-__",
    form_privacy_lbl: "I agree to the personal data processing policy",
    form_submit_btn: "Submit Application",
    form_error_name: "Please enter your name (at least 2 characters)",
    form_error_phone: "Please enter a valid phone number",
    
    success_title: "Application Received!",
    success_text: "We will contact you within 15 minutes to confirm your trial lesson booking.",
    success_reset_btn: "Submit Again",
    
    // Footer Section
    footer_desc: "Quality English language teaching in accordance with international standards. Preparing for the future starts right now.",
    footer_slogan: "Better future starts here",
    footer_title_programs: "Programs",
    footer_title_school: "School Center",
    footer_title_contacts: "Contacts",
    footer_contact_address: "77 Al-Farabi Ave, Almaty, Kazakhstan",
    footer_copyright: "© 2026 Stanford School. All rights reserved.",
    footer_legal_privacy: "Privacy Policy",
    footer_legal_offer: "Terms of Service"
  },
  uz: {
    // Navigation
    nav_courses: "Kurslar",
    nav_results: "Natijalar",
    nav_teachers: "O'qituvchilar",
    nav_reviews: "Sertifikatlar",
    nav_cta: "Yozilish",
    
    // Hero Section
    hero_eyebrow: "Better future starts here",
    hero_title: "SENING ENG|YAXSHI KELAJAGING|SHU YERDAN|BOSHLANADI",
    hero_subtitle: "Yangi avlod ingliz tili kurslari. Boshlang'ich darajadan xalqaro IELTS imtihoniga tayyorgarlikkacha. Sizning maqsadlaringiz — bizning natijalar tizimimizdir.",
    hero_cta_primary: "Bepul darsga yozilish",
    hero_cta_secondary: "Natijalarni ko'rish",
    
    // Stats Section
    stats_graduates_lbl: "Muvaffaqiyatli bitiruvchilar",
    stats_ielts_lbl: "1-urinishda IELTS topshirish",
    stats_teachers_lbl: "Sertifikatlangan o'qituvchilar",
    stats_experience_lbl: "Yillik muvaffaqiyatli tajriba",
    
    // Courses Section
    courses_eyebrow: "Ta'lim dasturlari",
    courses_title: "O'Z YO'LINGIZNI TANLANG",
    courses_subtitle: "Biz barcha yoshdagilar va har xil maqsadlar uchun moslashuvchan ingliz tili kurslari tizimini ishlab chiqdik.",
    
    course_1_title: "General English",
    course_1_desc: "Hayot va sayohat uchun so'zlashuv va yozma ingliz tili. Har qanday darajadan barcha ko'nikmalarni: Speaking, Listening, Reading va Writing rivojlantirish.",
    course_1_badge: "Barcha darajalar",
    
    course_2_title: "IELTS Preparation",
    course_2_desc: "Xalqaro imtihonga tayyorgarlik ko'rish bo'yicha intensiv kurs. Imtihon tuzilishi, nozik tomonlari, akademik yozish va speaking mock-testlar tahlili.",
    course_2_badge: "Maqsad: 7.0+",
    
    course_3_title: "So'zlashuv klubi",
    course_3_desc: "Til to'sig'ini yengib o'ting. Kichik guruhlarda ingliz tilida so'zlashuvchilar (native speakers) bilan dolzarb mavzularda qiziqarli munozaralar.",
    course_3_badge: "B1 darajasidan",
    
    course_4_title: "Bolalar uchun ingliz tili",
    course_4_desc: "O'yin shaklidagi interaktiv darslar. O'quvchilarda tilga bo'lgan sevgini uyg'otamiz, so'z boyligini kengaytiramiz va maktab baholarini oshirishga yordam beramiz.",
    course_4_badge: "7-14 yosh",
    
    course_5_title: "Biznes ingliz tili",
    course_5_desc: "Mutaxassislar va tadbirkorlar uchun. Ish yozishmalari, ingliz tilida suhbatlardan o'tish, muzokaralar olib borish va loyihalar taqdimoti.",
    course_5_badge: "B1 darajasidan",
    
    course_6_title: "Individual darslar",
    course_6_desc: "O'qituvchi bilan yakkama-yakka shaxsiy reja asosida o'quv dasturi. Moslashuvchan jadval, asosiy e'tibor sizning shaxsiy maqsadlaringizga qaratiladi.",
    course_6_badge: "Shaxsiy jadval",
    course_link_text: "Batafsil",
    
    // Results Section
    results_eyebrow: "Muvaffaqiyat hikoyalari",
    results_title: "TALABALAR NATIJALARI",
    results_subtitle: "Tildan erkin foydalanish qanday yangi martaba, o'qish va ko'chib o'tish imkoniyatlarini ochishini ko'ring.",
    results_before: "Avval",
    results_after: "Keyin",
    
    result_1_course: "Kurs: IELTS Preparation",
    result_1_quote: "\"Amsterdam universitetining Data Science yo'nalishiga o'qishga kirdim. Stanford School yozma imtihon (Writing) uchun inshoni qanday tuzishni o'rgatdi va Speaking'dagi qo'rquvimni yengishga yordam berdi.\"",
    
    result_2_course: "Kurs: General English",
    result_2_quote: "\"Olti oylik intensiv darslardan so'ng, xalqaro IT-kompaniyadagi suhbatdan to'liq ingliz tilida muvaffaqiyatli o'tdim. Hozir Pragaga ko'chib o'tdim va ko'p millatli jamoada ishlayapman.\"",
    
    result_3_course: "Kurs: Business English",
    result_3_quote: "\"Xorijiy hamkorlar bilan muzokaralarni bemalol va to'liq ishonch bilan olib boraman. Til to'sig'i butunlay yo'qoldi. Kursga tikilgan sarmoya birinchi yirik shartnomadan so'ng o'zini oqladi.\"",
    
    // Teachers Section
    teachers_eyebrow: "Bizning jamoa",
    teachers_title: "TAJRIBALI USTOZLAR",
    teachers_subtitle: "Darslarni professional mahalliy mutaxassislar va Buyuk Britaniya hamda AQShdan sertifikatlangan ona tilida so'zlashuvchilar olib boradilar.",
    
    teacher_1_badge: "Native Speaker",
    teacher_1_spec: "So'zlashuv ingliz tili & IELTS",
    teacher_1_exp: "Tajriba: 8 yil",
    
    teacher_2_badge: "IELTS Expert",
    teacher_2_spec: "IELTSga tayyorlash & Grammatika",
    teacher_2_exp: "Tajriba: 6 yil",
    
    teacher_3_badge: "Native Speaker",
    teacher_3_spec: "Biznes ingliz tili & Muzokaralar",
    teacher_3_exp: "Tajriba: 7 yil",
    
    teacher_4_badge: "Methodologist",
    teacher_4_spec: "Bolalar uchun & General English",
    teacher_4_exp: "Tajriba: 5 yil",
    
    // Certificates Section
    cert_section_eyebrow: "Bizning yutuqlar",
    cert_section_title: "BITIRUVCHILAR SERTIFIKATLARI",
    cert_title: "SERTIFIKAT",
    cert_subtitle: "MUVAFFAQIYATLI YAKUNLASH",
    cert_1_name: "Temur Karimov",
    cert_1_details: "IELTS Intensive Preparation kursini 7.5 ball natija bilan muvaffaqiyatli yakunladi.",
    cert_2_name: "Alina Borisova",
    cert_2_details: "General English so'zlashuv kursini B2 darajasida muvaffaqiyatli yakunladi.",
    cert_3_name: "Doniyor Qodirov",
    cert_3_details: "Biznes English dasturini C1 darajasida muvaffaqiyatli yakunladi.",
    cert_4_name: "Ruslan Ibragimov",
    cert_4_details: "Ingliz tilida texnik taqdimotlar bo'yicha maxsus kursni muvaffaqiyatli yakunladi.",
    cert_5_name: "Elena Volkova",
    cert_5_details: "General English so'zlashuv dasturini muvaffaqiyatli yakunladi.",
    
    // CTA Section
    cta_title: "KELAJAGINGIZNI BUGUNDAN BOSHLANG",
    cta_subtitle: "Ingliz tili darajasini bepul aniqlash va kichik guruhda sinov darsiga yozilish uchun ariza qoldiring.",
    cta_benefit_1: "Darajani bepul aniqlash (Grammar + Speaking mock-test)",
    cta_benefit_2: "Maktab metodisti bilan xatolarni yakkama-yakka tahlil qilish",
    cta_benefit_3: "Sinov testi kuni to'lov qilinsa, birinchi oy uchun 15% chegirma",
    
    form_name_lbl: "Sizning ismingiz",
    form_name_placeholder: "Konstantin",
    form_phone_lbl: "Telefon raqamingiz",
    form_phone_placeholder: "+7 (___) ___-__-__",
    form_privacy_lbl: "Shaxsiy ma'lumotlarni qayta ishlash siyosatiga roziman",
    form_submit_btn: "Ariza yuborish",
    form_error_name: "Iltimos, ismingizni kiriting (kamida 2 ta belgi)",
    form_error_phone: "Iltimos, to'g'ri telefon raqamini kiriting",
    
    success_title: "Ariza qabul qilindi!",
    success_text: "Tez orada (15 daqiqa ichida) dars vaqtini tasdiqlash uchun siz bilan bog'lanamiz.",
    success_reset_btn: "Yana yuborish",
    
    // Footer Section
    footer_desc: "Xalqaro standartlarga muvofiq ingliz tilini sifatli o'qitish. Kelajakka tayyorgarlik hozirdan boshlanadi.",
    footer_slogan: "Better future starts here",
    footer_title_programs: "Dasturlar",
    footer_title_school: "Maktab markazi",
    footer_title_contacts: "Kontaktlar",
    footer_contact_address: "Al-Farobiy shoh ko'chasi 77, Almati, Qozog'iston",
    footer_copyright: "© 2026 Stanford School. Barcha huquqlar himoyalangan.",
    footer_legal_privacy: "Maxfiylik siyosati",
    footer_legal_offer: "Ommaviy oferta"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  
  // 1.5. THEME INITIALIZATION & SWITCHER
  function applyTheme(theme) {
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    localStorage.setItem('theme', theme);
    
    // Update theme-toggle buttons aria-pressed
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
    themeToggleBtns.forEach(btn => {
      btn.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    });
    
    // Update theme meta color tag
    const metaThemeColor = document.getElementById('theme-meta');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#F6F1FB' : '#0D0416');
    }
    
    // Recalculate ScrollTrigger parameters on theme transitions
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  }

  let currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    currentTheme = systemPrefersLight ? 'light' : 'dark';
  }
  applyTheme(currentTheme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLightNow = document.documentElement.classList.contains('light-theme');
      applyTheme(isLightNow ? 'dark' : 'light');
    });
  });

  // 2. LANGUAGE INITIALIZATION
  let currentLang = localStorage.getItem('selectedLanguage') || 'ru';
  if (!translations[currentLang]) currentLang = 'ru';
  
  setLanguage(currentLang);
  
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selected = e.target.getAttribute('data-lang');
      if (selected && translations[selected]) {
        currentLang = selected;
        localStorage.setItem('selectedLanguage', currentLang);
        setLanguage(currentLang);
      }
    });
  });

  // 3. INITIALIZE LENIS SMOOTH SCROLL (CDNs check)
  if (typeof Lenis !== 'undefined') {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential out
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // Scroll mapping anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target);
          
          // If mobile menu open, close it
          const navOverlay = document.querySelector('.mobile-nav-overlay');
          if (navOverlay && navOverlay.classList.contains('active')) {
            toggleMobileMenu();
          }
        }
      });
    });
  }

  // 4. REGISTER GSAP PLUGINS
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate loader fill first
    const loaderFill = document.querySelector('.loader-bar-fill');
    if (loaderFill) {
      gsap.to(loaderFill, {
        width: '80%',
        duration: 1.2,
        ease: 'power1.out'
      });
    }

    // Wait for full window load to lift curtain
    window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const tl = gsap.timeline({
        onComplete: () => {
          if (loader) loader.style.display = 'none';
        }
      });

      if (loaderFill) {
        tl.to(loaderFill, {
          width: '100%',
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (loader) {
        tl.to(loader, {
          y: '-100%',
          duration: 0.9,
          ease: 'power4.inOut'
        }, '+=0.1');
      }

      // Lift curtain, start drawing monogram and reveal text
      tl.add(() => {
        initAnimations();
      }, '-=0.65');
    });

  } else {
    console.warn('GSAP or ScrollTrigger CDNs failed to load. Falling back to static layouts.');
    fallbackAnimations();
  }

  // 5. HEADER SCROLL EFFECT
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 6. MOBILE MENU TOGGLE
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-url');
  
  function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
  }

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu on clicking any link (fallback for non-lenis anchors)
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navOverlay.classList.contains('active') && typeof Lenis === 'undefined') {
        toggleMobileMenu();
      }
    });
  });

  // 7. PHONE NUMBER INPUT MASK (Kazakhstan/CIS format: +7 (XXX) XXX-XX-XX)
  const phoneInput = document.getElementById('user-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let input = e.target.value.replace(/\D/g, '');
      
      if (input.startsWith('7') || input.startsWith('8')) {
        input = input.substring(1);
      }
      
      input = input.substring(0, 10);
      
      let formatted = '+7 ';
      if (input.length > 0) {
        formatted += '(' + input.substring(0, 3);
      }
      if (input.length >= 4) {
        formatted += ') ' + input.substring(3, 6);
      }
      if (input.length >= 7) {
        formatted += '-' + input.substring(6, 8);
      }
      if (input.length >= 9) {
        formatted += '-' + input.substring(8, 10);
      }
      
      e.target.value = input.length === 0 ? '' : formatted;
    });

    phoneInput.addEventListener('keydown', (e) => {
      const value = e.target.value;
      if (e.key === 'Backspace' && (value.endsWith(' ') || value.endsWith(')') || value.endsWith('-'))) {
        e.preventDefault();
        e.target.value = value.substring(0, value.length - 2);
      }
    });
  }

  // 8. LEAD FORM VALIDATION & SUBMISSION
  const leadForm = document.getElementById('lead-form');
  const formSuccess = document.getElementById('form-success');
  const nameInput = document.getElementById('user-name');
  const privacyCheckbox = document.getElementById('privacy');
  const submitBtn = document.getElementById('submit-btn');
  const resetFormBtn = document.getElementById('reset-form-btn');

  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;

      // Validate Name
      if (nameInput.value.trim().length < 2) {
        nameInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        nameInput.parentElement.classList.remove('error');
      }

      // Validate Phone
      if (phoneInput.value.length < 18) {
        phoneInput.parentElement.classList.add('error');
        isValid = false;
      } else {
        phoneInput.parentElement.classList.remove('error');
      }

      // Validate Checkbox
      if (!privacyCheckbox.checked) {
        privacyCheckbox.parentElement.classList.add('error');
        isValid = false;
      } else {
        privacyCheckbox.parentElement.classList.remove('error');
      }

      if (isValid) {
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        
        setTimeout(() => {
          submitBtn.classList.remove('loading');
          leadForm.style.display = 'none';
          formSuccess.style.display = 'flex';
        }, 1500);
      }
    });

    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        nameInput.parentElement.classList.remove('error');
      }
    });

    phoneInput.addEventListener('input', () => {
      if (phoneInput.value.length === 18) {
        phoneInput.parentElement.classList.remove('error');
      }
    });

    privacyCheckbox.addEventListener('change', () => {
      if (privacyCheckbox.checked) {
        privacyCheckbox.parentElement.classList.remove('error');
      }
    });
  }

  if (resetFormBtn && leadForm && formSuccess) {
    resetFormBtn.addEventListener('click', () => {
      leadForm.reset();
      submitBtn.disabled = false;
      formSuccess.style.display = 'none';
      leadForm.style.display = 'block';
    });
  }

});

// 9. LANGUAGE TRANSLATION FUNCTION
function setLanguage(lang) {
  document.documentElement.lang = lang;
  
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      if (el.children.length === 0 || key === "nav_cta" || key === "course_link_text") {
        el.textContent = translations[lang][key];
      } else {
        let textNodeUpdated = false;
        for (let i = 0; i < el.childNodes.length; i++) {
          const node = el.childNodes[i];
          if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
            node.nodeValue = translations[lang][key];
            textNodeUpdated = true;
            break;
          }
        }
        if (!textNodeUpdated) {
          el.textContent = translations[lang][key];
        }
      }
    }
  });
  
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const titleContainer = document.getElementById('hero-title-container');
  if (titleContainer && translations[lang]['hero_title']) {
    const lines = translations[lang]['hero_title'].split('|');
    let html = '';
    lines.forEach((line, index) => {
      const isGradient = index >= lines.length - 2;
      const spanClass = isGradient ? 'class="text-gradient"' : '';
      html += `<span class="hero-title-line"><span ${spanClass}>${line}</span></span>`;
    });
    titleContainer.innerHTML = html;
    
    if (typeof gsap !== 'undefined') {
      gsap.fromTo('#hero-title-container .hero-title-line span', 
        { y: '105%' },
        { y: '0%', duration: 1.2, stagger: 0.1, ease: 'power4.out', delay: 0.1 }
      );
    }
  }
}

// 10. GSAP ANIMATIONS CONTROLLER (Invoked after loader curtain slides up)
function initAnimations() {
  
  // Hero text lines reveal
  gsap.fromTo('#hero-title-container .hero-title-line span', 
    { y: '105%' },
    { y: '0%', duration: 1.4, stagger: 0.12, ease: 'power4.out' }
  );

  // Hero elements
  gsap.from('.hero-eyebrow-wrapper', {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: 'power3.out'
  });

  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.4
  });

  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 20,
    duration: 1.2,
    ease: 'power3.out',
    delay: 0.6
  });

  // Hero Logo Draw Animation (Pencil Drawing Monogram)
  const monogramTopPath = document.querySelector('#monogram-top-path');
  const monogramBottomPath = document.querySelector('#monogram-bottom-path');
  const monogramTriangle = document.querySelector('#monogram-triangle');
  const pencilLeadLine = document.querySelector('#pencil-lead-line');

  if (monogramTopPath) {
    const length = monogramTopPath.getTotalLength();
    gsap.set(monogramTopPath, {
      strokeDasharray: length,
      strokeDashoffset: length
    });
    gsap.to(monogramTopPath, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 0.5
    });
  }

  if (monogramBottomPath) {
    const length = monogramBottomPath.getTotalLength();
    gsap.set(monogramBottomPath, {
      strokeDasharray: length,
      strokeDashoffset: length
    });
    gsap.to(monogramBottomPath, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 0.9
    });
  }

  if (monogramTriangle) {
    gsap.set(monogramTriangle, { opacity: 0, scale: 0.8, transformOrigin: '50% 50%' });
    gsap.to(monogramTriangle, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'back.out(1.7)',
      delay: 1.6
    });
  }

  if (pencilLeadLine) {
    const leadLength = pencilLeadLine.getTotalLength();
    gsap.set(pencilLeadLine, {
      strokeDasharray: leadLength,
      strokeDashoffset: leadLength
    });
    gsap.to(pencilLeadLine, {
      strokeDashoffset: 0,
      duration: 0.4,
      ease: 'power1.out',
      delay: 1.5
    });
  }

  // Count-up Statistics on Scroll Trigger
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'), 10);
    const obj = { val: 0 };
    
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        stat.textContent = Math.floor(obj.val);
      }
    });
  });

  // Batch reveal elements on scroll (for grid cards & headers)
  const revealElements = document.querySelectorAll('.reveal-item');
  if (revealElements.length > 0) {
    ScrollTrigger.batch(revealElements, {
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
          overwrite: 'auto'
        });
      },
      start: 'top 88%'
    });
  }

  // Progress Bar fill animations in Results Section
  const progressFills = document.querySelectorAll('.progress-bar-fill');
  progressFills.forEach(fill => {
    const progressPercent = fill.getAttribute('data-progress');
    gsap.to(fill, {
      width: `${progressPercent}%`,
      duration: 1.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: fill,
        start: 'top 92%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// 10. FALLBACK ACTIONS (If GSAP is blocked or fails to load)
function fallbackAnimations() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';

  const revealElements = document.querySelectorAll('.reveal-item');
  revealElements.forEach(el => {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
  
  const titleLineSpan = document.querySelectorAll('.hero-title-line span');
  titleLineSpan.forEach(span => {
    span.style.transform = 'none';
  });

  const progressFills = document.querySelectorAll('.progress-bar-fill');
  progressFills.forEach(fill => {
    const progressPercent = fill.getAttribute('data-progress');
    fill.style.width = `${progressPercent}%`;
  });

  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    stat.textContent = stat.getAttribute('data-target');
  });

  const monogramTriangle = document.querySelector('#monogram-triangle');
  if (monogramTriangle) {
    monogramTriangle.style.opacity = '1';
    monogramTriangle.style.transform = 'none';
  }
}
