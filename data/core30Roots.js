const core30Roots = [
  {
    root: "قَالَ",
    meaning: "to say, speak",
    frequency: 1728,
    theme: "Speech & Communication",
    derived_words: ["قَوْل – speech", "يَقُولُ – he says", "قِيلَ – it was said"]
  },
  {
    root: "فَعَلَ",
    meaning: "to do, act",
    frequency: 1273,
    theme: "Action & Deeds",
    derived_words: ["فِعْل – action", "يَفْعَلُ – he does", "مَفْعُول – done"]
  },
  {
    root: "جَعَلَ",
    meaning: "to make, appoint",
    frequency: 1068,
    theme: "Creation & Appointment",
    derived_words: ["يَجْعَلُ – he makes", "مَجْعُول – made", "جَعَلْنَا – we made"]
  },
  {
    root: "عَلِمَ",
    meaning: "to know, learn",
    frequency: 982,
    theme: "Knowledge",
    derived_words: ["عِلْم – knowledge", "عَالِم – scholar", "يَعْلَمُ – he knows"]
  },
  {
    root: "رَأَى",
    meaning: "to see",
    frequency: 934,
    theme: "Perception",
    derived_words: ["يَرَى – he sees", "رُؤْيَا – vision", "مَرْئِيّ – seen"]
  },
  {
    root: "سَمِعَ",
    meaning: "to hear, listen",
    frequency: 881,
    theme: "Hearing",
    derived_words: ["سَمِيع – all-hearing", "يَسْمَعُ – he hears", "سَمْع – hearing"]
  },
  {
    root: "أَتَى",
    meaning: "to come, bring",
    frequency: 854,
    theme: "Arrival & Provision",
    derived_words: ["يَأْتِي – he comes", "آتَيْنَا – we gave", "مَأْتِيّ – brought"]
  },
  {
    root: "عَبَدَ",
    meaning: "to worship",
    frequency: 802,
    theme: "Worship",
    derived_words: ["عِبَادَة – worship", "عَبْد – servant", "يَعْبُدُ – he worships"]
  },
  {
    root: "خَلَقَ",
    meaning: "to create",
    frequency: 782,
    theme: "Creation",
    derived_words: ["خَالِق – creator", "خَلْق – creation", "يَخْلُقُ – he creates"]
  },
  {
    root: "آمَنَ",
    meaning: "to believe",
    frequency: 749,
    theme: "Faith",
    derived_words: ["إِيمَان – belief", "مُؤْمِن – believer", "نُؤْمِنُ – we believe"]
  },
  {
    root: "هَدَى",
    meaning: "to guide",
    frequency: 316,
    theme: "Guidance",
    derived_words: ["هُدًى – guidance", "مُهْتَدُونَ – the guided", "يَهْدِي – he guides"]
  },
  {
    root: "رَسَلَ",
    meaning: "to send",
    frequency: 512,
    theme: "Revelation & Prophethood",
    derived_words: ["رَسُول – messenger", "رِسَالَة – message", "مُرْسَل – one who is sent"]
  },
  {
    root: "عَلِمَ",
    meaning: "to know, learn",
    frequency: 492,
    theme: "Knowledge",
    derived_words: ["عِلْم – knowledge", "عَالِم – scholar", "يَعْلَمُ – he knows"]
  },
  {
    root: "حَكَمَ",
    meaning: "to judge, rule, govern",
    frequency: 456,
    theme: "Justice & Wisdom",
    derived_words: ["حُكْم – judgment", "حَكِيم – wise", "يَحْكُمُ – he judges"]
  },
  {
    root: "أَمِنَ",
    meaning: "to believe, trust, be safe",
    frequency: 431,
    theme: "Faith & Safety",
    derived_words: ["آمَنَ – he believed", "مُؤْمِن – believer", "أَمَان – security"]
  },
  {
    root: "كَتَبَ",
    meaning: "to write, decree",
    frequency: 410,
    theme: "Scripture & Decree",
    derived_words: ["كِتَاب – book", "مَكْتُوب – written", "يَكْتُبُ – he writes"]
  },
  {
    root: "دَعَا",
    meaning: "to call, invite, supplicate",
    frequency: 395,
    theme: "Prayer & Invitation",
    derived_words: ["دُعَاء – supplication", "يَدْعُو – he calls", "مَدْعُو – one invited"]
  },
  {
    root: "قَتَلَ",
    meaning: "to kill, fight",
    frequency: 380,
    theme: "Conflict",
    derived_words: ["قَتْل – killing", "يَقْتُلُ – he kills", "مَقْتُول – one killed"]
  },
  {
    root: "نَصَرَ",
    meaning: "to help, support, give victory",
    frequency: 366,
    theme: "Support & Victory",
    derived_words: ["نَصْر – victory", "مَنْصُور – supported", "يَنْصُرُ – he helps"]
  },
  {
    root: "هَدَى",
    meaning: "to guide, show the way",
    frequency: 354,
    theme: "Guidance",
    derived_words: ["هُدًى – guidance", "يَهْدِي – he guides", "مُهْتَدٍ – one who is guided"]
  },
{
  root: "عَبَدَ",
  meaning: "to worship",
  frequency: 325,
  theme: "Worship",
  derived_words: [
    "عِبَادَة – Worship",
    "عَبْد – Servant",
    "مَعْبُود – One who is worshipped"
  ]
},
{
  root: "قَوَلَ",
  meaning: "to say, speak",
  frequency: 320,
  theme: "Speech",
  derived_words: [
    "قَوْل – Saying",
    "يَقُولُ – He says",
    "مَقُول – That which is said"
  ]
},
{
  root: "خَلَقَ",
  meaning: "to create",
  frequency: 318,
  theme: "Creation",
  derived_words: [
    "خَلْق – Creation",
    "خَالِق – Creator",
    "مَخْلُوق – Created being"
  ]
},
{
  root: "هَدَى",
  meaning: "to guide",
  frequency: 316,
  theme: "Guidance",
  derived_words: [
    "هُدًى – Guidance",
    "يَهْدِي – He guides",
    "مُهْتَدٍ – One who is guided"
  ]
},
{
  root: "بَصَرَ",
  meaning: "to see, perceive",
  frequency: 310,
  theme: "Perception",
  derived_words: [
    "بَصَر – Sight",
    "بَصِير – All-Seeing",
    "يُبْصِرُ – He sees"
  ]
},
{
  root: "سَمِعَ",
  meaning: "to hear, listen",
  frequency: 308,
  theme: "Hearing",
  derived_words: [
    "سَمْع – Hearing",
    "سَمِيع – All-Hearing",
    "يَسْمَعُ – He hears"
  ]
},
{
  root: "رَزَقَ",
  meaning: "to provide, sustain",
  frequency: 303,
  theme: "Provision",
  derived_words: [
    "رِزْق – Provision",
    "رَازِق – Provider",
    "مَرْزُوق – Provided one"
  ]
},
{
  root: "تَوَبَ",
  meaning: "to repent, return",
  frequency: 296,
  theme: "Repentance",
  derived_words: [
    "تَوْبَة – Repentance",
    "تَائِب – One who repents",
    "يَتُوبُ – He repents"
  ]
},
{
  root: "شَكَرَ",
  meaning: "to thank, be grateful",
  frequency: 290,
  theme: "Gratitude",
  derived_words: [
    "شُكْر – Gratitude",
    "شَاكِر – Thankful",
    "يَشْكُرُ – He gives thanks"
  ]
},

{
  root: "ظَلَمَ",
  meaning: "to wrong, oppress",
  frequency: 285,
  theme: "Injustice",
  derived_words: [
    "ظُلْم – Injustice",
    "ظَالِم – Oppressor",
    "مَظْلُوم – One who is wronged"
  ]
}
];
export default core30Roots;
