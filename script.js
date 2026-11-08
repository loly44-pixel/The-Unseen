
let currentScene = 1;
let currentLanguage = "ar";
let quizAnswered = false;

const totalScenes = 6;

const translations = {
  ar: {
    s1eyebrow: "رحلة إلى ما وراء الذكاء الاصطناعي",
    s1title: "ما لا تراه",
    s1desc: "خلف كل نقرة، وكل اقتراح، وكل إجابة… عالم يتعلّم.",
    s1button: "ادخلي العالم الخفي",

    s2eyebrow: "01 / الفكرة",
    s2title: "ماذا لو استطاعت الآلات أن تتعلّم؟",
    s2lead: "الذكاء الاصطناعي ليس سحرًا. إنه طريقة تجعل الحاسوب يتعلّم من البيانات، ويكتشف الأنماط، ويساعدنا على حل المشكلات.",
    s2quote: "الذكاء الاصطناعي لا يرى العالم كما نراه… بل يتعلّم كيف يفسّره.",
    fact1: "يتعلّم من البيانات",
    fact2: "يكتشف الأنماط",
    fact3: "يساعد في اتخاذ القرار",

    s3eyebrow: "02 / حولنا",
    s3title: "إنه أقرب مما تتخيّلين",
    s3lead: "نستخدم الذكاء الاصطناعي يوميًا، أحيانًا دون أن نلاحظ.",

    card1title: "التوصيات الذكية",
    card1desc: "كيف يعرف التطبيق ما قد يعجبك؟",
    card1more: "تحلّل الأنظمة ما تشاهدينه أو تستمعين إليه، ثم تقترح محتوى يناسب اهتماماتك.",

    card2title: "الصحة والطب",
    card2desc: "كيف يساعد الأطباء في رؤية ما لا نراه؟",
    card2more: "يمكن للذكاء الاصطناعي تحليل الصور الطبية ومساعدة المختصين في ملاحظة مؤشرات تحتاج إلى فحص.",

    card3title: "المساعدات الصوتية",
    card3desc: "كيف تفهم الآلة صوتك؟",
    card3more: "تحوّل أنظمة التعرّف على الكلام الصوت إلى كلمات، ثم تحاول فهم الطلب والاستجابة له.",

    discover: "اكتشفي السر ↓",
    hide: "إخفاء السر ↑",

    s4eyebrow: "03 / اختبري فهمك",
    s4title: "هل اكتشفتِ السر؟",
    s4lead: "أي عبارة تصف الذكاء الاصطناعي بشكل أفضل؟",

    answer1: "آلة تفكّر وتشعر مثل الإنسان تمامًا",
    answer2: "نظام يتعلّم الأنماط من البيانات لتنفيذ مهام",
    answer3: "برنامج يعرف كل شيء دون تعلّم",

    correct: "إجابة رائعة! الذكاء الاصطناعي يتعلّم الأنماط من البيانات.",
    wrong: "ليست هذه الإجابة. جرّبي مرة أخرى!",
    continue: "متابعة الرحلة ←",

    s5eyebrow: "04 / رحلتي الشخصية",
    s5title: "من الفضول إلى الإبداع",
    s5lead: "لم تكن هذه التجربة مجرد تعلّم عن الذكاء الاصطناعي، بل رحلة لاكتشاف كيف يمكنني استخدامه لصناعة شيء يعكس أفكاري.",

    curiosityTitle: "ما الذي أثار فضولي؟",
    curiosityDesc: "كيف تستطيع الآلات التعلّم من البيانات، وتقديم إجابات تبدو وكأنها تفهمنا؟",
    curiosityMore: "أثار فضولي ما يحدث خلف الكواليس: كيف تتحول البيانات إلى أنماط، وكيف يمكن لهذه الأنماط أن تساعدنا في التعلّم والإبداع واتخاذ القرارات. أردت أن أفهم ما وراء هذه التقنية، لا أن أكتفي باستخدامها.",

    toolsTitle: "الأدوات التي ساعدتني",
    toolsDesc: "استخدمت أدوات مختلفة لتحويل فكرتي إلى تجربة رقمية.",
    toolsMore: "ChatGPT:\nساعدني في تطوير الأفكار، وفهم الأكواد، واقتراح تحسينات للتصميم والتفاعل.\n\nGitHub:\nاستخدمته لكتابة الأكواد وتنظيم ملفات المشروع ونشر التجربة على الويب.\n\nHTML وCSS وJavaScript:\nاستخدمتها لبناء محتوى التجربة، وتصميم واجهتها، وإضافة التفاعلات.",

    contributionTitle: "مساهمتي الشخصية",
    contributionDesc: "التقنية ساعدتني، لكن الفكرة والاختيارات كانت لي.",
    contributionMore: "اخترت فكرة المشروع واسمه THE UNSEEN، وحددت اتجاهه البصري وطريقة عرض المحتوى.\n\nعملت على تطوير الأكواد وتعديلها، واخترت المشاهد والتفاعلات التي تناسب التجربة.\n\nكما راجعت المحتوى، واختبرت الأزرار، وحرصت على أن تكون التجربة باللغة العربية مع إمكانية الانتقال إلى الإنجليزية.\n\nكان دوري هو توجيه المشروع واتخاذ قراراته الإبداعية والتقنية.",

    s5note: "الذكاء الاصطناعي كان شريكًا في التعلّم، أما الفضول والإبداع والاختيارات فكانت لي.",

    s6eyebrow: "انتهت الرحلة… وبدأ السؤال",
    s6title: "ما الذي لا نراه؟",
    s6lead: "ربما لا يكمن سحر الذكاء الاصطناعي فيما يفعله فقط، بل في الأسئلة الجديدة التي يجعلنا نطرحها.",

    sourcesbutton: "المصادر والمراجع",
    sourcesTitle: "مصادر للتعمّق",
    restart: "↺ عيشي التجربة من جديد",

    back: "→ السابق",
    next: "التالي ←"
  },

  en: {
    s1eyebrow: "A journey beyond artificial intelligence",
    s1title: "The Unseen",
    s1desc: "Behind every click, every suggestion, every answer… a world that learns.",
    s1button: "ENTER THE UNKNOWN",

    s2eyebrow: "01 / THE IDEA",
    s2title: "What if machines could learn?",
    s2lead: "Artificial intelligence is not magic. It is a way for computers to learn from data, discover patterns, and help us solve problems.",
    s2quote: "AI does not see the world as we do… it learns how to interpret it.",
    fact1: "Learns from data",
    fact2: "Discovers patterns",
    fact3: "Helps make decisions",

    s3eyebrow: "02 / AROUND US",
    s3title: "It is closer than you think",
    s3lead: "We use artificial intelligence every day, sometimes without even noticing.",

    card1title: "Smart recommendations",
    card1desc: "How does an app know what you might like?",
    card1more: "Systems analyze what you watch or listen to, then suggest content that matches your interests.",

    card2title: "Health & medicine",
    card2desc: "How can AI help doctors see what we cannot?",
    card2more: "AI can analyze medical images and help specialists notice signs that may need further examination.",

    card3title: "Voice assistants",
    card3desc: "How does a machine understand your voice?",
    card3more: "Speech recognition systems turn sound into words, then try to understand and respond to your request.",

    discover: "DISCOVER THE SECRET ↓",
    hide: "HIDE THE SECRET ↑",

    s4eyebrow: "03 / TEST YOUR UNDERSTANDING",
    s4title: "Have you discovered the secret?",
    s4lead: "Which statement best describes artificial intelligence?",

    answer1: "A machine that thinks and feels exactly like a human",
    answer2: "A system that learns patterns from data to perform tasks",
    answer3: "A program that knows everything without learning",

    correct: "Great answer! AI learns patterns from data.",
    wrong: "Not quite. Try again!",
    continue: "CONTINUE THE JOURNEY →",

    s5eyebrow: "04 / MY PERSONAL JOURNEY",
    s5title: "From Curiosity to Creativity",
    s5lead: "This was more than learning about AI. It was a journey to discover how I could use it to create something that reflects my own ideas.",

    curiosityTitle: "What Sparked My Curiosity?",
    curiosityDesc: "How can machines learn from data and provide answers that seem to understand us?",
    curiosityMore: "I was curious about what happens behind the scenes: how data becomes patterns, and how these patterns can support learning, creativity, and decision-making. I wanted to understand the technology, not just use it.",

    toolsTitle: "The Tools That Helped Me",
    toolsDesc: "I used different tools to turn my idea into a digital experience.",
    toolsMore: "ChatGPT:\nHelped me develop ideas, understand code, and explore design and interaction improvements.\n\nGitHub:\nI used it to write code, organize project files, and publish the experience online.\n\nHTML, CSS, and JavaScript:\nI used them to build the content, design the interface, and create interactive features.",

    contributionTitle: "My Personal Contribution",
    contributionDesc: "Technology supported me, but the idea and decisions were mine.",
    contributionMore: "I chose the project concept and its name, THE UNSEEN, and defined its visual direction and content presentation.\n\nI worked on developing and modifying the code, and selected the scenes and interactions.\n\nI also reviewed the content, tested the buttons, and made the experience available in Arabic with an English option.\n\nMy role was to guide the project and make its creative and technical decisions.",

    s5note: "AI was my learning partner, but the curiosity, creativity, and choices were mine.",

    s6eyebrow: "The journey ends… the questions begin",
    s6title: "What remains unseen?",
    s6lead: "Perhaps the wonder of AI is not only what it can do, but the new questions it inspires us to ask.",

    sourcesbutton: "REFERENCES & FURTHER READING",
    sourcesTitle: "Explore further",
    restart: "↺ EXPERIENCE AGAIN",

    back: "← BACK",
    next: "NEXT →"
  }
};

function setLanguage(language) {
  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = language === "ar" ? "rtl" : "ltr";

  document.getElementById("lang-ar").classList.toggle(
    "active",
    language === "ar"
  );

  document.getElementById("lang-en").classList.toggle(
    "active",
    language === "en"
  );

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translatedText = translations[language][key];

    if (translatedText !== undefined) {
      element.textContent = translatedText;
    }
  });

  updateNavigation();

  // Update discovery buttons while preserving their open state.
  document.querySelectorAll(".discovery-card").forEach(card => {
    const details = card.querySelector(".card-details");
    const button = card.querySelector(".details-button");

    if (details && button) {
      button.textContent = details.classList.contains("show")
        ? translations[language].hide
        : translations[language].discover;
    }
  });

  // Update quiz feedback when switching languages.
  const feedback = document.getElementById("answer-feedback");

  if (quizAnswered) {
    feedback.textContent = translations[language].correct;
  }
}

function goToScene(sceneNumber) {
  if (sceneNumber < 1 || sceneNumber > totalScenes) {
    return;
  }

  currentScene = sceneNumber;

  document.querySelectorAll(".scene").forEach(scene => {
    scene.classList.remove("active");
  });

  document.getElementById(`scene-${sceneNumber}`).classList.add("active");

  updateNavigation();
}

function nextScene() {
  if (currentScene < totalScenes) {
    goToScene(currentScene + 1);
  }
}

function previousScene() {
  if (currentScene > 1) {
    goToScene(currentScene - 1);
  }
}

function updateNavigation() {
  document.getElementById("current-scene").textContent =
    String(currentScene).padStart(2, "0");

  document.getElementById("progress-bar").style.width =
    `${(currentScene / totalScenes) * 100}%`;

  document.getElementById("back-button").disabled =
    currentScene === 1;

  document.getElementById("next-button").disabled =
    currentScene === totalScenes;

  document.getElementById("back-button").style.opacity =
    currentScene === 1 ? "0.35" : "1";

  document.getElementById("next-button").style.opacity =
    currentScene === totalScenes ? "0.35" : "1";
}

function toggleDetails(button) {
  const details = button.previousElementSibling;
  const isOpen = details.classList.toggle("show");

  button.textContent = isOpen
    ? translations[currentLanguage].hide
    : translations[currentLanguage].discover;
}

function checkAnswer(button, isCorrect) {
  const feedback = document.getElementById("answer-feedback");
  const options = document.querySelectorAll(".quiz-option");

  if (quizAnswered) {
    return;
  }

  if (isCorrect) {
    button.classList.add("correct");

    feedback.textContent = translations[currentLanguage].correct;

    quizAnswered = true;

    options.forEach(option => {
      option.disabled = true;
    });

  } else {
    button.classList.add("wrong");

    feedback.textContent = translations[currentLanguage].wrong;
  }
}

function toggleSources() {
  document.getElementById("sources").classList.toggle("show");
}

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") {
    currentLanguage === "ar"
      ? previousScene()
      : nextScene();
  }

  if (event.key === "ArrowLeft") {
    currentLanguage === "ar"
      ? nextScene()
      : previousScene();
  }
});

// Start in Arabic.
setLanguage("ar");
goToScene(1);
