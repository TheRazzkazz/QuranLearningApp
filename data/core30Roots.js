const core30Roots = [
  {
    id: 1,
    root: "قَالَ",
    meaning: "to say, speak",
    frequency: 1728,
    theme: "Speech & Communication",
    derived_words: ["قَوْل – speech", "يَقُولُ – he says", "قِيلَ – it was said"],
    sampleVerse: ""
  },
  {
    id: 2,
    root: "فَعَلَ",
    meaning: "to do, act",
    frequency: 1273,
    theme: "Action & Deeds",
    derived_words: ["فِعْل – action", "يَفْعَلُ – he does", "مَفْعُول – done"],
    sampleVerse: ""
  },
  {
    id: 3,
    root: "جَعَلَ",
    meaning: "to make, appoint",
    frequency: 1068,
    theme: "Creation & Appointment",
    derived_words: ["يَجْعَلُ – he makes", "مَجْعُول – made", "جَعَلْنَا – we made"],
    sampleVerse: ""
  },
  {
    id: 4,
    root: "عَلِمَ",
    meaning: "to know, learn",
    frequency: 982,
    theme: "Knowledge",
    derived_words: ["عِلْم – knowledge", "عَالِم – scholar", "يَعْلَمُ – he knows"],
    sampleVerse: ""
  },
  {
    id: 5,
    root: "رَأَى",
    meaning: "to see",
    frequency: 934,
    theme: "Perception",
    derived_words: ["يَرَى – he sees", "رُؤْيَا – vision", "مَرْئِيّ – seen"],
    sampleVerse: ""
  },
  {
    id: 6,
    root: "سَمِعَ",
    meaning: "to hear, listen",
    frequency: 881,
    theme: "Hearing",
    derived_words: ["سَمِيع – all-hearing", "يَسْمَعُ – he hears", "سَمْع – hearing"],
    sampleVerse: ""
  },
  {
    id: 7,
    root: "أَتَى",
    meaning: "to come, bring",
    frequency: 854,
    theme: "Arrival & Provision",
    derived_words: ["يَأْتِي – he comes", "آتَيْنَا – we gave", "مَأْتِيّ – brought"],
    sampleVerse: ""
  },
  {
    id: 8,
    root: "عَبَدَ",
    meaning: "to worship",
    frequency: 802,
    theme: "Worship",
    derived_words: ["عِبَادَة – worship", "عَبْد – servant", "يَعْبُدُ – he worships"],
    sampleVerse: ""
  },
  {
    id: 9,
    root: "خَلَقَ",
    meaning: "to create",
    frequency: 782,
    theme: "Creation",
    derived_words: ["خَالِق – creator", "خَلْق – creation", "يَخْلُقُ – he creates"],
    sampleVerse: ""
  },
  {
    id: 10,
    root: "آمَنَ",
    meaning: "to believe",
    frequency: 749,
    theme: "Faith",
    derived_words: ["إِيمَان – belief", "مُؤْمِن – believer", "نُؤْمِنُ – we believe"],
    sampleVerse: ""
  },
  {
    id: 11,
    root: "هَدَى",
    meaning: "to guide",
    frequency: 316,
    theme: "Guidance",
    derived_words: ["هُدًى – guidance", "مُهْتَدُونَ – the guided", "يَهْدِي – he guides"],
    sampleVerse: ""
  },
  {
    id: 12,
    root: "رَسَلَ",
    meaning: "to send",
    frequency: 512,
    theme: "Revelation & Prophethood",
    derived_words: ["رَسُول – messenger", "رِسَالَة – message", "مُرْسَل – one who is sent"],
    sampleVerse: ""
  },
  {
    id: 13,
    root: "عَلِمَ",
    meaning: "to know, learn",
    frequency: 492,
    theme: "Knowledge",
    derived_words: ["عِلْم – knowledge", "عَالِم – scholar", "يَعْلَمُ – he knows"],
    sampleVerse: ""
  },
  {
    id: 14,
    root: "حَكَمَ",
    meaning: "to judge, rule, govern",
    frequency: 456,
    theme: "Justice & Wisdom",
    derived_words: ["حُكْم – judgment", "حَكِيم – wise", "يَحْكُمُ – he judges"],
    sampleVerse: ""
  },
  {
    id: 15,
    root: "أَمِنَ",
    meaning: "to believe, trust, be safe",
    frequency: 431,
    theme: "Faith & Safety",
    derived_words: ["آمَنَ – he believed", "مُؤْمِن – believer", "أَمَان – security"],
    sampleVerse: ""
  },
  {
    id: 16,
    root: "كَتَبَ",
    meaning: "to write, decree",
    frequency: 410,
    theme: "Scripture & Decree",
    derived_words: ["كِتَاب – book", "مَكْتُوب – written", "يَكْتُبُ – he writes"],
    sampleVerse: ""
  },
  {
    id: 17,
    root: "دَعَا",
    meaning: "to call, invite, supplicate",
    frequency: 395,
    theme: "Prayer & Invitation",
    derived_words: ["دُعَاء – supplication", "يَدْعُو – he calls", "مَدْعُو – one invited"],
    sampleVerse: ""
  },
  {
    id: 18,
    root: "قَتَلَ",
    meaning: "to kill, fight",
    frequency: 380,
    theme: "Conflict",
    derived_words: ["قَتْل – killing", "يَقْتُلُ – he kills", "مَقْتُول – one killed"],
    sampleVerse: ""
  },
  {
    id: 19,
    root: "نَصَرَ",
    meaning: "to help, support, give victory",
    frequency: 366,
    theme: "Support & Victory",
    derived_words: ["نَصْر – victory", "مَنْصُور – supported", "يَنْصُرُ – he helps"],
    sampleVerse: ""
  },
  {
    id: 20,
    root: "هَدَى",
    meaning: "to guide, show the way",
    frequency: 354,
    theme: "Guidance",
    derived_words: ["هُدًى – guidance", "يَهْدِي – he guides", "مُهْتَدٍ – one who is guided"],
    sampleVerse: ""
  },
  {
    id: 21,
    root: "عَبَدَ",
    meaning: "to worship",
    frequency: 325,
    theme: "Worship",
    derived_words: ["عِبَادَة – worship", "عَبْد – servant", "مَعْبُود – one who is worshipped"],
    sampleVerse: ""
  },
  {
    id: 22,
    root: "قَوَلَ",
    meaning: "to say, speak",
    frequency: 320,
    theme: "Speech",
    derived_words: ["قَوْل – saying", "يَقُولُ – he says", "مَقُول – that which is said"],
    sampleVerse: ""
  },
  {
    id: 23,
    root: "خَلَقَ",
    meaning: "to create",
    frequency: 318,
    theme: "Creation",
    derived_words: ["خَلْق – creation", "خَالِق – creator", "مَخْلُوق – created being"],
    sampleVerse: ""
  },
  {
    id: 24,
    root: "هَدَى",
    meaning: "to guide",
    frequency: 316,
    theme: "Guidance",
    derived_words: ["هُدًى – guidance", "يَهْدِي – he guides", "مُهْتَدٍ – one who is guided"],
    sampleVerse: ""
  },
  {
    id: 25,
    root: "بَصَرَ",
    meaning: "to see, perceive",
    frequency: 310,
    theme: "Perception",
    derived_words: ["بَصَر – sight", "بَصِير – all-seeing", "يُبْصِرُ – he sees"],
    sampleVerse: ""
  },
  {
    id: 26,
    root: "سَمِعَ",
    meaning: "to hear, listen",
    frequency: 308,
    theme: "Hearing",
    derived_words: ["سَمْع – hearing", "سَمِيع – all-hearing", "يَسْمَعُ – he hears"],
    sampleVerse: ""
  },
  {
    id: 27,
    root: "رَزَقَ",
    meaning: "to provide, sustain",
    frequency: 303,
    theme: "Provision",
    derived_words: ["رِزْق – provision", "رَازِق – provider", "مَرْزُوق – provided one"],
    sampleVerse: ""
  },
  {
    id: 28,
    root: "تَوَبَ",
    meaning: "to repent, return",
    frequency: 296,
    theme: "Repentance",
    derived_words: ["تَوْبَة – repentance", "تَائِب – one who repents", "يَتُوبُ – he repents"],
    sampleVerse: ""
  },
  {
    id: 29,
    root: "شَكَرَ",
    meaning: "to thank, be grateful",
    frequency: 290,
    theme: "Gratitude",
    derived_words: ["شُكْر – gratitude", "شَاكِر – thankful", "يَشْكُرُ – he gives thanks"],
    sampleVerse: ""
  },
  {
    id: 30,
    root: "ظَلَمَ",
    meaning: "to wrong, oppress",
    frequency: 285,
    theme: "Injustice",
    derived_words: ["ظُلْم – injustice", "ظَالِم – oppressor", "مَظْلُوم – one who is wronged"],
    sampleVerse: ""
  }
];

export default core30Roots;