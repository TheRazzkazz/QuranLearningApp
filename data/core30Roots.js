const core30Roots = [
  {
    id: 1,
    root: "قَالَ",
    meaning: "to say, speak",
    frequency: 1728,
    theme: "Speech & Communication",
    derived_words: ["قَوْل – speech", "يَقُولُ – he says", "قِيلَ – it was said"],
    sampleVerse: {
      arabic: "قَالَ رَبُّكُمْ ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ ۚ",
      translation: "Your Lord says, 'Call on Me; I will answer you.'",
      reference: "Surah Ghafir (40:60)"
    }
  },
  {
    id: 2,
    root: "فَعَلَ",
    meaning: "to do, act",
    frequency: 1273,
    theme: "Action & Deeds",
    derived_words: ["فِعْل – action", "يَفْعَلُ – he does", "مَفْعُول – done"],
    sampleVerse: {
      arabic: "إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تُؤَدُّوا۟ ٱلْأَمَـٰنَـٰتِ إِلَىٰٓ أَهْلِهَا...",
      translation: "Surely, Allah commands you to make over the trusts to those entitled to them...",
      reference: "Surah An-Nisa (4:58)"
    }
  },
  {
    id: 3,
    root: "جَعَلَ",
    meaning: "to make, appoint",
    frequency: 1068,
    theme: "Creation & Appointment",
    derived_words: ["يَجْعَلُ – he makes", "مَجْعُول – made", "جَعَلْنَا – we made"],
    sampleVerse: {
      arabic: "وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍۢ حَىٍّ ۖ",
      translation: "And We made from water every living thing.",
      reference: "Surah Al-Anbiya (21:30)"
    }
  },
  {
    id: 4,
    root: "عَلِمَ",
    meaning: "to know, learn",
    frequency: 982,
    theme: "Knowledge",
    derived_words: ["عِلْم – knowledge", "عَالِم – scholar", "يَعْلَمُ – he knows"],
    sampleVerse: {
      arabic: "وَٱللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ",
      translation: "And Allah knows, while you know not.",
      reference: "Surah Al-Baqarah (2:216)"
    }
  },
  {
    id: 5,
    root: "رَأَى",
    meaning: "to see",
    frequency: 934,
    theme: "Perception",
    derived_words: ["يَرَى – he sees", "رُؤْيَا – vision", "مَرْئِيّ – seen"],
    sampleVerse: {
      arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَـٰبِ ٱلْفِيلِ",
      translation: "Hast thou not seen how thy Lord dealt with the People of the Elephant?",
      reference: "Surah Al-Fil (105:1)"
    }
  },
  {
    id: 6,
    root: "سَمِعَ",
    meaning: "to hear",
    frequency: 881,
    theme: "Perception",
    derived_words: ["سَمْع – hearing", "يَسْمَعُ – he hears", "سَمِيع – All-Hearing"],
    sampleVerse: {
      arabic: "إِنَّ رَبِّى لَسَمِيعُ ٱلدُّعَآءِ",
      translation: "Surely, my Lord is He who hears prayer.",
      reference: "Surah Ibrahim (14:39)"
    }
  },
  {
    id: 7,
    root: "ءَامَنَ",
    meaning: "to believe",
    frequency: 879,
    theme: "Faith",
    derived_words: ["إِيمَان – faith", "يُؤْمِنُ – he believes", "مُؤْمِن – believer"],
    sampleVerse: {
      arabic: "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَٱلْمُؤْمِنُونَ...",
      translation: "The Messenger believes in what has been sent down to him from his Lord, and so do the believers...",
      reference: "Surah Al-Baqarah (2:285)"
    }
  },
  {
    id: 8,
    root: "عَمِلَ",
    meaning: "to work, do",
    frequency: 854,
    theme: "Action & Deeds",
    derived_words: ["عَمَل – deed", "يَعْمَلُ – he works", "مَعْمُول – done/worked"],
    sampleVerse: {
      arabic: "مَنْ عَمِلَ صَـٰلِحًۭا فَلِنَفْسِهِۦ ۖ وَمَنْ أَسَآءَ فَعَلَيْهَا",
      translation: "Whoso does good, it is for his own soul; and whoso does evil, it is against it.",
      reference: "Surah Fussilat (41:46)"
    }
  },
  {
    id: 9,
    root: "خَلَقَ",
    meaning: "to create",
    frequency: 806,
    theme: "Creation",
    derived_words: ["خَلْق – creation", "يَخْلُقُ – he creates", "خَالِق – creator"],
    sampleVerse: {
      arabic: "ٱللَّهُ خَـٰلِقُ كُلِّ شَىْءٍۢ ۖ",
      translation: "Allah is the Creator of all things.",
      reference: "Surah Az-Zumar (39:62)"
    }
  },
  {
    id: 10,
    root: "كَفَرَ",
    meaning: "to disbelieve, cover",
    frequency: 525,
    theme: "Faith & Rejection",
    derived_words: ["كُفْر – disbelief", "يَكْفُرُ – he disbelieves", "كَافِر – disbeliever"],
    sampleVerse: {
      arabic: "إِنَّ ٱلَّذِينَ كَفَرُوا۟ سَوَآءٌ عَلَيْهِمْ ءَأَنذَرْتَهُمْ أَمْ لَمْ تُنذِرْهُمْ لَا يُؤْمِنُونَ",
      translation: "Surely, those who disbelieve — it being alike to them whether thou warn them or warn them not — they will not believe.",
      reference: "Surah Al-Baqarah (2:6)"
    }
  },
    {
    id: 11,
    root: "هَدَى",
    meaning: "to guide",
    frequency: 488,
    theme: "Guidance",
    derived_words: ["هُدًى – guidance", "يَهْدِي – he guides", "مُهْتَد – guided one"],
    sampleVerse: {
      arabic: "ذَٰلِكَ ٱلْكِتَـٰبُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًۭى لِّلْمُتَّقِينَ",
      translation: "This is a perfect Book; there is no doubt in it; it is a guidance for the righteous.",
      reference: "Surah Al-Baqarah (2:2)"
    }
  },
  {
    id: 12,
    root: "عَبَدَ",
    meaning: "to worship",
    frequency: 275,
    theme: "Worship",
    derived_words: ["عِبَادَة – worship", "عَبْد – servant", "يَعْبُدُ – he worships"],
    sampleVerse: {
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "Thee alone do we worship and Thee alone do we implore for help.",
      reference: "Surah Al-Fatiha (1:5)"
    }
  },
  {
    id: 13,
    root: "نَزَلَ",
    meaning: "to descend, send down",
    frequency: 270,
    theme: "Revelation",
    derived_words: ["نُزُول – descent", "يُنَزِّلُ – he sends down", "مُنَزَّل – revealed"],
    sampleVerse: {
      arabic: "نَزَّلَ عَلَيْكَ ٱلْكِتَـٰبَ بِٱلْحَقِّ مُصَدِّقًۭا لِّمَا بَيْنَ يَدَيْهِ",
      translation: "He has sent down to thee the Book containing the truth and fulfilling that which precedes it.",
      reference: "Surah Aal-E-Imran (3:3)"
    }
  },
  {
    id: 14,
    root: "تَقَى",
    meaning: "to be righteous, to guard",
    frequency: 258,
    theme: "Righteousness",
    derived_words: ["تَقْوَى – piety", "يَتَّقِي – he guards", "مُتَّقِي – righteous person"],
    sampleVerse: {
      arabic: "إِنَّ أَكْرَمَكُمْ عِندَ ٱللَّهِ أَتْقَىٰكُمْ",
      translation: "Surely, the most honorable among you in the sight of Allah is he who is the most righteous among you.",
      reference: "Surah Al-Hujurat (49:13)"
    }
  },
  {
    id: 15,
    root: "نَصَرَ",
    meaning: "to help",
    frequency: 253,
    theme: "Support & Victory",
    derived_words: ["نَصْر – help", "يَنْصُرُ – he helps", "مَنْصُور – helped"],
    sampleVerse: {
      arabic: "إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَٱسْتَجَابَ لَكُمْ أَنِّى مُمِدُّكُم بِأَلْفٍۢ مِّنَ ٱلْمَلَـٰٓئِكَةِ مُرْدِفِينَ",
      translation: "When you implored help of your Lord, and He answered you, saying: 'I will assist you with a thousand of the angels, following one another.'",
      reference: "Surah Al-Anfal (8:9)"
    }
  },
  {
    id: 16,
    root: "جَآءَ",
    meaning: "to come",
    frequency: 246,
    theme: "Arrival",
    derived_words: ["يَجِىءُ – he comes", "مَجِىء – arrival", "جَاءُوا – they came"],
    sampleVerse: {
      arabic: "فَقَدْ جَآءَ أَشْرَاطُهَا ۚ",
      translation: "But surely, its signs have already come.",
      reference: "Surah Muhammad (47:18)"
    }
  },
  {
    id: 17,
    root: "دَعَا",
    meaning: "to call, supplicate",
    frequency: 210,
    theme: "Prayer & Calling",
    derived_words: ["دُعَآء – supplication", "يَدْعُو – he calls", "دَاعٍ – caller"],
    sampleVerse: {
      arabic: "ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ ۚ",
      translation: "Call on Me; I will answer you.",
      reference: "Surah Ghafir (40:60)"
    }
  },
  {
    id: 18,
    root: "زَادَ",
    meaning: "to increase",
    frequency: 208,
    theme: "Growth",
    derived_words: ["يَزِيدُ – he increases", "زِيَادَة – increase", "مَزِيد – more"],
    sampleVerse: {
      arabic: "وَٱللَّهُ يَرْزُقُ مَن يَشَآءُ بِغَيْرِ حِسَابٍۢ",
      translation: "And Allah gives to whomsoever He pleases without measure.",
      reference: "Surah Al-Baqarah (2:212)"
    }
  },
  {
    id: 19,
    root: "أَخَذَ",
    meaning: "to take, seize",
    frequency: 207,
    theme: "Control & Judgment",
    derived_words: ["يَأْخُذُ – he takes", "أَخْذ – taking", "مَأْخُوذ – taken"],
    sampleVerse: {
      arabic: "فَأَخَذْنَـٰهُم بِٱلْبَأْسَآءِ وَٱلضَّرَّآءِ",
      translation: "So We seized them with affliction and adversity.",
      reference: "Surah Al-A'raf (7:94)"
    }
  },
  {
    id: 20,
    root: "ذَكَرَ",
    meaning: "to remember, mention",
    frequency: 190,
    theme: "Remembrance",
    derived_words: ["ذِكْر – remembrance", "يَذْكُرُ – he remembers", "مَذْكُور – mentioned"],
    sampleVerse: {
      arabic: "فَٱذْكُرُونِىٓ أَذْكُرْكُمْ",
      translation: "So remember Me; I will remember you.",
      reference: "Surah Al-Baqarah (2:152)"
    }
  },
  {
    id: 21,
    root: "غَفَرَ",
    meaning: "to forgive",
    frequency: 188,
    theme: "Forgiveness",
    derived_words: ["غُفْرَان – forgiveness", "يَغْفِرُ – he forgives", "غَفُور – Oft-Forgiving"],
    sampleVerse: {
      arabic: "وَٱسْتَغْفِرِ ٱللَّهَ ۚ إِنَّ ٱللَّهَ كَانَ غَفُورًۭا رَّحِيمًۭا",
      translation: "And ask forgiveness of Allah. Surely, Allah is Most Forgiving, Merciful.",
      reference: "Surah An-Nisa (4:106)"
    }
  },
  {
    id: 22,
    root: "أَكَلَ",
    meaning: "to eat",
    frequency: 172,
    theme: "Provision",
    derived_words: ["يَأْكُلُ – he eats", "مَأْكُول – eaten", "أَكْل – eating"],
    sampleVerse: {
      arabic: "كُلُوا۟ مِمَّا فِى ٱلْأَرْضِ حَلَـٰلًۭا طَيِّبًۭا",
      translation: "Eat of what is in the earth, lawful and good.",
      reference: "Surah Al-Baqarah (2:168)"
    }
  },
  {
    id: 23,
    root: "عَلَا",
    meaning: "to be high, exalted",
    frequency: 160,
    theme: "Exaltation",
    derived_words: ["عَلِىّ – Most High", "يَعْلُو – he rises", "عُلُوّ – elevation"],
    sampleVerse: {
      arabic: "سَبِّحِ ٱسْمَ رَبِّكَ ٱلْأَعْلَى",
      translation: "Glorify the name of thy Lord, the Most High.",
      reference: "Surah Al-A'la (87:1)"
    }
  },
  {
    id: 24,
    root: "كَتَبَ",
    meaning: "to write, prescribe",
    frequency: 160,
    theme: "Decree & Record",
    derived_words: ["كِتَاب – book", "يَكْتُبُ – he writes", "مَكْتُوب – written"],
    sampleVerse: {
      arabic: "كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ",
      translation: "Fasting is prescribed for you...",
      reference: "Surah Al-Baqarah (2:183)"
    }
  },
  {
    id: 25,
    root: "قَامَ",
    meaning: "to stand, establish",
    frequency: 154,
    theme: "Establishment",
    derived_words: ["يَقُومُ – he stands", "قِيَام – standing", "قَآئِم – one who stands"],
    sampleVerse: {
      arabic: "وَأَقِمِ ٱلصَّلَوٰةَ طَرَفَىِ ٱلنَّهَارِ وَزُلَفًۭا مِّنَ ٱلَّيْلِ...",
      translation: "And observe Prayer at the two ends of the day and in the early hours of the night...",
      reference: "Surah Hud (11:114)"
    }
  },
  {
    id: 26,
    root: "نَظَرَ",
    meaning: "to look, observe",
    frequency: 150,
    theme: "Observation",
    derived_words: ["نَظَر – looking", "يَنْظُرُ – he observes", "مَنْظُور – observed"],
    sampleVerse: {
      arabic: "أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ",
      translation: "Do they not look at the camel — how it is created?",
      reference: "Surah Al-Ghashiyah (88:17)"
    }
  },
  {
    id: 27,
    root: "حَسِبَ",
    meaning: "to think, assume",
    frequency: 147,
    theme: "Assumption & Thought",
    derived_words: ["حِسَاب – reckoning", "يَحْسَبُ – he thinks", "مَحْسُوب – assumed"],
    sampleVerse: {
      arabic: "أَيَحْسَبُ ٱلْإِنسَـٰنُ أَن يُتْرَكَ سُدًى",
      translation: "Does man think that he will be left neglected?",
      reference: "Surah Al-Qiyamah (75:36)"
    }
  },
  {
    id: 28,
    root: "وَضَعَ",
    meaning: "to place, put down",
    frequency: 140,
    theme: "Placement",
    derived_words: ["يَضَعُ – he places", "وَضْع – placement", "مَوْضُوع – placed"],
    sampleVerse: {
      arabic: "وَإِذَا ٱلْأَرْضُ مُدَّتْ ﴿٣﴾ وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ",
      translation: "And when the earth is spread out, and throws out all that is within it and becomes empty...",
      reference: "Surah Al-Inshiqaq (84:3–4)"
    }
  },
  {
    id: 29,
    root: "بَيَّنَ",
    meaning: "to make clear",
    frequency: 137,
    theme: "Clarity & Explanation",
    derived_words: ["بَيِّنَة – clear evidence", "يُبَيِّنُ – he clarifies", "مُبَيَّن – clarified"],
    sampleVerse: {
      arabic: "قَدْ جَآءَكُم مِّنَ ٱللَّهِ نُورٌۭ وَكِتَـٰبٌۭ مُّبِينٌۭ",
      translation: "There has come to you from Allah a Light and a clear Book.",
      reference: "Surah Al-Ma’idah (5:15)"
    }
  },
  {
    id: 30,
    root: "نَجَّى",
    meaning: "to save, deliver",
    frequency: 133,
    theme: "Salvation",
    derived_words: ["يُنَجِّي – he saves", "نَجَاة – salvation", "مُنَجًّى – delivered"],
    sampleVerse: {
      arabic: "فَأَنجَيْنَـٰهُ وَأَصْحَـٰبَ ٱلسَّفِينَةِ وَجَعَلْنَـٰهَآ ءَايَةًۭ لِّلْعَـٰلَمِينَ",
      translation: "So We saved him and those who were with him in the Ark, and We made it a Sign for the peoples of the world.",
      reference: "Surah Al-‘Ankabut (29:15)"
    }
  },
];

export default core30Roots;