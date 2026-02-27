export interface QuickTool {
  duration: "1 min" | "5 min" | "10 min";
  title: string;
  titleNp?: string;
  steps: string[];
  stepsNp?: string[];
}

export interface Resource {
  slug: string;
  title: string;
  titleNp?: string;
  subtitle: string;
  subtitleNp?: string;
  normalizer: string;
  normalizerNp?: string;
  commonThoughts: string[];
  commonThoughtsNp?: string[];
  tools: [QuickTool, QuickTool, QuickTool];
  redFlags: string[];
  redFlagsNp?: string[];
}

export const resources: Resource[] = [
  {
    slug: "anxiety",
    title: "Anxiety & Panic",
    titleNp: "चिन्ता र आत्तिने समस्या",
    subtitle: "Your body is trying to protect you. It just got the volume wrong.",
    subtitleNp: "तपाईंको शरीरले तपाईंलाई जोगाउन खोज्दैछ। अलि बढी नै react गर्‍यो, बस्।",
    normalizer:
      "Anxiety is one of the most common experiences on earth. It does not mean you are weak or broken. Your nervous system is doing its job, sometimes a little too well.",
    normalizerNp:
      "Anxiety संसारमा सबैभन्दा सामान्य अनुभवहरू मध्ये एक हो। यसको मतलब तपाईं कमजोर हुनुहुन्छ भन्ने होइन। तपाईंको शरीरले आफ्नो काम गरिरहेको छ, कहिलेकाहीँ अलि बढी नै।",
    commonThoughts: [
      '"Something terrible is about to happen"',
      '"I can\'t breathe / I\'m dying"',
      '"Everyone can see I\'m losing it"',
      '"I should be able to handle this"',
    ],
    commonThoughtsNp: [
      '"केही भयानक हुन लागेको छ"',
      '"सास फेर्न सकिरहेको छैन / म मर्दैछु"',
      '"सबैले देखिरहेका छन् म भत्किरहेको"',
      '"मैले यो सम्हाल्न सक्नुपर्ने हो"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "5-4-3-2-1 Grounding",
        titleNp: "५-४-३-२-१ Grounding",
        steps: [
          "Name 5 things you can see",
          "4 things you can touch",
          "3 things you can hear",
          "2 things you can smell",
          "1 thing you can taste",
        ],
        stepsNp: [
          "तपाईंले देख्न सक्ने ५ वटा कुरा भन्नुहोस्",
          "छुन सक्ने ४ वटा कुरा",
          "सुन्न सक्ने ३ वटा कुरा",
          "गन्ध आउने २ वटा कुरा",
          "स्वाद लिन सक्ने १ वटा कुरा",
        ],
      },
      {
        duration: "5 min",
        title: "Box Breathing",
        titleNp: "Box Breathing",
        steps: [
          "Breathe in for 4 seconds",
          "Hold for 4 seconds",
          "Breathe out for 4 seconds",
          "Hold for 4 seconds",
          "Repeat 5 times. Notice your heartbeat slowing",
        ],
        stepsNp: [
          "४ सेकेन्ड सास भित्र तान्नुहोस्",
          "४ सेकेन्ड रोक्नुहोस्",
          "४ सेकेन्ड बिस्तारै छोड्नुहोस्",
          "४ सेकेन्ड फेरि रोक्नुहोस्",
          "५ पटक दोहोर्‍याउनुहोस्। मुटुको धड्कन सुस्ताउँदै गएको महसुस गर्नुहोस्",
        ],
      },
      {
        duration: "10 min",
        title: "Body Scan",
        titleNp: "Body Scan",
        steps: [
          "Sit or lie somewhere comfortable",
          "Starting from your toes, slowly notice each body part",
          "Wherever you feel tension, breathe into that spot",
          "Work all the way up to the top of your head",
          "Finish with 3 slow, deep breaths",
        ],
        stepsNp: [
          "आराम गरेर बस्नुहोस् वा ढल्कनुहोस्",
          "खुट्टाको औंलाबाट सुरु गर्नुहोस्, बिस्तारै शरीरको हरेक भाग महसुस गर्नुहोस्",
          "जहाँ तनाव छ, त्यो ठाउँमा सास पठाउनुहोस्",
          "बिस्तारै टाउकोसम्म पुग्नुहोस्",
          "३ वटा लामो, गहिरो सासले सक्नुहोस्",
        ],
      },
    ],
    redFlags: [
      "Panic attacks happening multiple times a week",
      "Avoiding school, work, or social situations regularly",
      "Constant chest tightness or difficulty breathing",
      "Using alcohol or substances to cope",
    ],
    redFlagsNp: [
      "हप्तामा धेरै पटक panic attack आउँछ",
      "स्कुल, काम, वा सामाजिक ठाउँहरू नियमित रूपमा बेवास्ता गरिरहेको",
      "छातीमा लगातार कसिलोपन वा सास फेर्न गाह्रो",
      "सामना गर्न रक्सी वा मादक पदार्थ प्रयोग गरिरहेको",
    ],
  },
  {
    slug: "exam-stress",
    title: "Exam Stress & Burnout",
    titleNp: "परीक्षाको तनाव र थकान",
    subtitle: "Your worth is not your grade. Full stop.",
    subtitleNp: "तपाईंको मूल्य तपाईंको नम्बरमा छैन। बस्।",
    normalizer:
      "Exam pressure is real, especially when everyone around you seems to be handling it fine (they're not). Burnout means you've been trying hard, not that you've failed.",
    normalizerNp:
      "परीक्षाको pressure सँच्चै ठूलो हुन्छ, खासगरी जब सबैले सजिलै गरिरहेको जस्तो देखिन्छ (तर उनीहरूले पनि गरिरहेका हुँदैनन्)। थकान भन्ने कुरा तपाईंले धेरै मेहनत गर्नुभयो भन्ने हो, fail हुनुभयो भन्ने होइन।",
    commonThoughts: [
      '"I\'m going to fail everything"',
      '"Everyone else is way ahead of me"',
      '"I can\'t focus on anything"',
      '"My parents will be so disappointed"',
    ],
    commonThoughtsNp: [
      '"म सबैमा fail हुन्छु"',
      '"सबै मभन्दा अगाडि छन्"',
      '"केहीमा पनि focus गर्न सक्दिन"',
      '"बुबा-आमा एकदमै निराश हुनुहुन्छ"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Brain Dump",
        titleNp: "Brain Dump",
        steps: [
          "Grab any paper or open your notes app",
          "Write every worried thought. Don't filter",
          "Close it. You've moved them out of your head",
        ],
        stepsNp: [
          "कुनै पनि कागज वा notes app खोल्नुहोस्",
          "दिमागमा जे जे छ सबै लेख्नुहोस्। फिल्टर नगर्नुहोस्",
          "बन्द गर्नुहोस्। ती कुराहरू अब तपाईंको टाउकोभन्दा बाहिर छन्",
        ],
      },
      {
        duration: "5 min",
        title: "Pomodoro Reset",
        titleNp: "Pomodoro Reset",
        steps: [
          "Set a timer for 5 minutes of pure break",
          "Stand up, stretch, splash water on your face",
          "Look out a window or at the sky",
          "Return to study with just one small task chosen",
        ],
        stepsNp: [
          "५ मिनेटको पूरा break को लागि timer लगाउनुहोस्",
          "उठ्नुहोस्, stretch गर्नुहोस्, मुखमा पानी छ्याप्नुहोस्",
          "झ्यालबाट बाहिर हेर्नुहोस् वा आकाशतिर हेर्नुहोस्",
          "एउटा सानो काम छानेर पढाइमा फर्कनुहोस्",
        ],
      },
      {
        duration: "10 min",
        title: "Priority Untangle",
        titleNp: "Priority Untangle",
        steps: [
          "List everything you think you need to do",
          "Circle only the 3 most important for today",
          "Cross out anything that can wait until tomorrow",
          "Start with the easiest of the 3 to build momentum",
        ],
        stepsNp: [
          "गर्नुपर्छ भन्ने लाग्ने सबै कुरा list गर्नुहोस्",
          "आजका लागि सबैभन्दा जरुरी ३ वटा मात्र छान्नुहोस्",
          "भोलिसम्म पर्खन सक्ने कुरा काट्नुहोस्",
          "ती ३ मध्ये सबैभन्दा सजिलोबाट सुरु गर्नुहोस्",
        ],
      },
    ],
    redFlags: [
      "You haven't slept properly in over a week",
      "You feel physically sick before studying",
      "Thoughts of self-harm or 'giving up on everything'",
      "You've completely stopped eating or eating excessively",
    ],
    redFlagsNp: [
      "एक हप्ताभन्दा बढी राम्रो निद्रा लागेको छैन",
      "पढ्नुअघि शारीरिक रूपमा बिरामी महसुस हुन्छ",
      "Self-harm वा 'सबै छोडिदिने' विचार आउँछ",
      "खाना पूरै बन्द गरेको वा अत्यधिक खाइरहेको",
    ],
  },
  {
    slug: "sleep-problems",
    title: "Sleep Problems",
    titleNp: "निद्राको समस्या",
    subtitle: "A tired mind lies to you. Rest is not laziness.",
    subtitleNp: "थकित दिमागले झुट्टा कुरा भन्छ। आराम गर्नु अल्छी होइन।",
    normalizer:
      "Trouble sleeping is incredibly common, especially when you're stressed or going through change. Not sleeping doesn't make you a failure; it makes you human.",
    normalizerNp:
      "निद्रा नलाग्नु एकदमै सामान्य कुरा हो, खासगरी तनावमा हुँदा वा जीवनमा परिवर्तन आउँदा। निद्रा नलागेको भनेर तपाईं fail हुनुभएको होइन। तपाईं मान्छे हुनुहुन्छ।",
    commonThoughts: [
      '"I\'ll never fall asleep"',
      '"Tomorrow is going to be terrible"',
      '"My brain just won\'t shut off"',
      '"Something must be wrong with me"',
    ],
    commonThoughtsNp: [
      '"म कहिल्यै सुत्न सक्दिन"',
      '"भोलि एकदमै नराम्रो हुन्छ"',
      '"दिमाग बन्द हुँदै हुँदैन"',
      '"मलाई केही त समस्या छ"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "4-7-8 Breath",
        titleNp: "4-7-8 Breath",
        steps: [
          "Breathe in through your nose for 4 seconds",
          "Hold your breath for 7 seconds",
          "Exhale slowly through your mouth for 8 seconds",
          "Repeat 3 times",
        ],
        stepsNp: [
          "नाकबाट ४ सेकेन्ड सास भित्र तान्नुहोस्",
          "७ सेकेन्ड सास रोक्नुहोस्",
          "मुखबाट ८ सेकेन्ड बिस्तारै सास छोड्नुहोस्",
          "३ पटक दोहोर्‍याउनुहोस्",
        ],
      },
      {
        duration: "5 min",
        title: "Thought Parking",
        titleNp: "Thought Parking",
        steps: [
          "Keep a notebook by your bed",
          "Write down every thought keeping you awake",
          "Write next to each: 'I'll handle this tomorrow'",
          "Close the notebook. Those thoughts are parked",
        ],
        stepsNp: [
          "ओछ्यानको छेउमा एउटा notebook राख्नुहोस्",
          "जागा राख्ने हरेक विचार लेख्नुहोस्",
          "हरेकको छेउमा लेख्नुहोस्: 'यो भोलि हेर्छु'",
          "Notebook बन्द गर्नुहोस्। ती विचारहरू अब park भइसके",
        ],
      },
      {
        duration: "10 min",
        title: "Progressive Relaxation",
        titleNp: "Progressive Relaxation",
        steps: [
          "Lie flat with arms at your sides",
          "Tense your feet hard for 5 seconds, then release",
          "Move to calves, thighs, stomach, hands, arms, shoulders, face",
          "After each, notice how 'release' feels different from 'hold'",
          "Let your body feel heavy against the bed",
        ],
        stepsNp: [
          "सिधा ढल्कनुहोस्, हात छेउमा राख्नुहोस्",
          "खुट्टालाई ५ सेकेन्ड कडा पार्नुहोस्, अनि छोड्नुहोस्",
          "पिँडौला, तिघ्रा, पेट, हात, पाखुरा, काँध, अनुहारमा पनि यस्तै गर्नुहोस्",
          "हरेक पटक 'छोड्दा' कस्तो फरक महसुस हुन्छ ध्यान दिनुहोस्",
          "शरीरलाई ओछ्यानमा गह्रौं भएको महसुस गर्नुहोस्",
        ],
      },
    ],
    redFlags: [
      "Less than 4 hours of sleep most nights for 2+ weeks",
      "Falling asleep during the day uncontrollably",
      "Sleep problems started after a traumatic event",
      "Using medication or alcohol to fall asleep regularly",
    ],
    redFlagsNp: [
      "२+ हप्ता धेरैजसो रात ४ घण्टाभन्दा कम निद्रा",
      "दिनमा नियन्त्रण बिना निद्रा लाग्छ",
      "कुनै traumatic घटनापछि निद्राको समस्या सुरु भयो",
      "सुत्न नियमित रूपमा औषधि वा रक्सी प्रयोग गरिरहेको",
    ],
  },
  {
    slug: "low-mood",
    title: "Low Mood & Hopelessness",
    titleNp: "मन भारी हुनु र निराशा",
    subtitle: "This heaviness is not your personality. It's something you're carrying.",
    subtitleNp: "यो भारीपन तपाईंको स्वभाव होइन। तपाईंले बोकिरहेको कुरा हो।",
    normalizer:
      "Low mood can feel permanent, but it isn't. The fact that you're reading this means something in you is still looking for light, and that matters more than you think.",
    normalizerNp:
      "मन खराब हुँदा यो सधैंका लागि हो जस्तो लाग्छ, तर होइन। तपाईं यो पढिरहनुभएको छ भन्ने कुरा नै, तपाईंको भित्रको कोहीले अझै उज्यालो खोजिरहेको छ। यो कुरा तपाईंलाई लाग्ने भन्दा धेरै ठूलो हो।",
    commonThoughts: [
      '"Nothing will ever get better"',
      '"I\'m a burden to everyone"',
      '"What\'s the point?"',
      '"I just feel... nothing"',
    ],
    commonThoughtsNp: [
      '"केही कहिल्यै राम्रो हुँदैन"',
      '"म सबैको लागि बोझ हुँ"',
      '"के मतलब छ र?"',
      '"केही पनि महसुस हुँदैन"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "One Small Thing",
        titleNp: "एउटा सानो कदम",
        steps: [
          "Think of the smallest positive action you can take right now",
          "Drink a glass of water. Open a curtain. Wash your face",
          "That's it. You did something. That counts",
        ],
        stepsNp: [
          "अहिले गर्न सकिने सबैभन्दा सानो राम्रो काम सोच्नुहोस्",
          "एक गिलास पानी खानुहोस्। पर्दा खोल्नुहोस्। मुख धुनुहोस्",
          "बस्, त्यति नै। तपाईंले केही गर्नुभयो। यो मायने राख्छ",
        ],
      },
      {
        duration: "5 min",
        title: "Opposite Action",
        titleNp: "उल्टो काम",
        steps: [
          "Notice what the low mood wants you to do (stay in bed, isolate)",
          "Do the gentle opposite: sit up, text one person, step outside",
          "You don't need to feel like it. Just move your body",
          "Notice how the feeling shifts even slightly",
        ],
        stepsNp: [
          "मन खराबले तपाईंलाई के गराउन खोज्छ ध्यान दिनुहोस् (ओछ्यानमा बस्नुहोस्, एक्लो बस्नुहोस्)",
          "बिस्तारै उल्टो गर्नुहोस्: उठ्नुहोस्, एक जनालाई message पठाउनुहोस्, बाहिर निस्कनुहोस्",
          "मन लाग्नु पर्दैन। शरीर मात्र चलाउनुहोस्",
          "अलिकति भए पनि फरक महसुस हुन्छ कि हेर्नुहोस्",
        ],
      },
      {
        duration: "10 min",
        title: "Gratitude Anchor",
        titleNp: "Gratitude Anchor",
        steps: [
          "Write down 3 things you're grateful for (they can be tiny)",
          "For each one, close your eyes and really feel it for 30 seconds",
          "Write one kind thing about yourself, even if it feels forced",
          "Read it aloud once. Your voice needs to hear it",
        ],
        stepsNp: [
          "तपाईंलाई कृतज्ञ बनाउने ३ कुरा लेख्नुहोस् (सानो भए पनि हुन्छ)",
          "हरेकका लागि आँखा चिम्म, ३० सेकेन्ड त्यो कुरा महसुस गर्नुहोस्",
          "आफ्नो बारेमा एउटा राम्रो कुरा लेख्नुहोस्, जबरजस्ती भए पनि",
          "एक पटक ठूलो स्वरमा पढ्नुहोस्। तपाईंको कानले पनि सुन्नु पर्छ",
        ],
      },
    ],
    redFlags: [
      "Persistent low mood lasting more than 2 weeks",
      "Thoughts of suicide or self-harm",
      "Unable to get out of bed or do basic tasks",
      "Withdrawing from everyone in your life",
    ],
    redFlagsNp: [
      "२ हप्ताभन्दा बढी लगातार मन खराब",
      "आत्महत्या वा self-harm को विचार",
      "ओछ्यानबाट उठ्न वा सामान्य काम गर्न सकिरहेको छैन",
      "जीवनका सबै मान्छेबाट टाढा भइरहेको",
    ],
  },
  {
    slug: "loneliness",
    title: "Loneliness",
    titleNp: "एक्लोपन",
    subtitle: "Being surrounded by people and still feeling alone is real, and valid.",
    subtitleNp: "मान्छेको भीडमा भएर पनि एक्लो महसुस हुनु, यो सँच्चैको कुरा हो।",
    normalizer:
      "Loneliness isn't about being alone. It's about feeling disconnected. It's one of the most painful human experiences, and it says nothing about your value as a person.",
    normalizerNp:
      "एक्लोपन भनेको एक्लो हुनु होइन। जोडिएको महसुस नहुनु हो। यो मान्छेको सबैभन्दा पीडादायक अनुभवहरू मध्ये एक हो, र यसले तपाईंको मूल्यको बारेमा केही भन्दैन।",
    commonThoughts: [
      '"Nobody actually cares about me"',
      '"I don\'t fit in anywhere"',
      '"Everyone has their group except me"',
      '"If I disappeared, nobody would notice"',
    ],
    commonThoughtsNp: [
      '"कसैलाई सँच्चै मेरो वास्ता छैन"',
      '"म कहीं पनि fit हुँदिन"',
      '"सबैको group छ, मेरो मात्र छैन"',
      '"म हराएँ भने कसैले ध्यान दिँदैन"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Micro-Connection",
        titleNp: "सानो जोडान",
        steps: [
          "Send a simple message to one person: 'Hey, thinking of you'",
          "That's it. You don't need a reason",
          "Connection starts with one small reach",
        ],
        stepsNp: [
          "एक जनालाई सामान्य message पठाउनुहोस्: 'ए, तपाईंको सम्झना आयो'",
          "बस्, त्यति नै। कारण चाहिँदैन",
          "जोडान एउटा सानो कदमबाट सुरु हुन्छ",
        ],
      },
      {
        duration: "5 min",
        title: "Comfort Inventory",
        titleNp: "Comfort Inventory",
        steps: [
          "List 3 people who have been kind to you, ever",
          "List 3 places where you felt you belonged, even briefly",
          "List 3 things that make you feel connected (music, a pet, nature)",
          "Pick one and lean into it today",
        ],
        stepsNp: [
          "तपाईंलाई माया गर्ने ३ जना मान्छे सम्झनुहोस्",
          "तपाईं belong गरेको महसुस भएको ३ ठाउँ सम्झनुहोस्, अलि बेरका लागि भए पनि",
          "जोडिएको महसुस गराउने ३ कुरा सम्झनुहोस् (गीत, बिरालो, प्रकृति)",
          "एउटा छान्नुहोस् र आज त्यसमा डुब्नुहोस्",
        ],
      },
      {
        duration: "10 min",
        title: "Letter to Yourself",
        titleNp: "आफूलाई चिठी",
        steps: [
          "Write a short letter to yourself as if you were your best friend",
          "What would you say? What would you remind yourself of?",
          "Be specific. Mention real things you've done or survived",
          "Keep this letter. Read it when the loneliness hits again",
        ],
        stepsNp: [
          "आफ्नो सबैभन्दा नजिकको साथी भएझैं आफूलाई एउटा छोटो चिठी लेख्नुहोस्",
          "के भन्नुहुन्थ्यो? के सम्झाउनुहुन्थ्यो?",
          "सँच्चैका कुरा लेख्नुहोस्। तपाईंले गरेका, सहेका कुराहरू",
          "यो चिठी राख्नुहोस्। एक्लोपन आउँदा फेरि पढ्नुहोस्",
        ],
      },
    ],
    redFlags: [
      "Complete isolation for more than a week",
      "Feeling like nobody would notice if you were gone",
      "Turning to risky or harmful situations just to feel something",
      "Persistent feelings of worthlessness alongside loneliness",
    ],
    redFlagsNp: [
      "एक हप्ताभन्दा बढी पूर्ण एकान्तवास",
      "म गएँ भने कसैले ध्यान दिँदैन जस्तो लाग्ने",
      "केही महसुस गर्नका लागि जोखिमपूर्ण परिस्थितिमा जाने",
      "एक्लोपनसँगै लगातार आफू बेकारको भावना",
    ],
  },
  {
    slug: "bullying",
    title: "Bullying & Harassment",
    titleNp: "Bullying र हैरानी",
    subtitle: "What they did says everything about them and nothing about you.",
    subtitleNp: "उनीहरूले गरेको कुराले उनीहरूको बारेमा भन्छ, तपाईंको बारेमा होइन।",
    normalizer:
      "Being bullied leaves real wounds, even if nobody can see them. You are not 'too sensitive.' The people who hurt you are responsible, not you.",
    normalizerNp:
      "Bully हुनुले सँच्चैका घाउ छोड्छ, कसैले नदेखे पनि। तपाईं 'अति sensitive' हुनुहुन्छ भन्ने होइन। तपाईंलाई दुखाउनेहरू जिम्मेवार हुन्, तपाईं होइन।",
    commonThoughts: [
      '"Maybe I deserve this"',
      '"Nobody will believe me"',
      '"I should just toughen up"',
      '"If I say something it\'ll get worse"',
    ],
    commonThoughtsNp: [
      '"शायद मैले यो deserve गरेको हो"',
      '"कसैले विश्वास गर्दैन"',
      '"मैले कडा हुनुपर्छ"',
      '"भनें भने अझ बढी हुन्छ"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Shield Visualization",
        titleNp: "Shield Visualization",
        steps: [
          "Close your eyes. Imagine a warm, golden light around you",
          "Their words hit the light and dissolve",
          "Breathe in strength. Breathe out their noise",
        ],
        stepsNp: [
          "आँखा चिम्म। तपाईंको वरिपरि न्यानो सुनौलो उज्यालो कल्पना गर्नुहोस्",
          "उनीहरूका शब्दहरू त्यो उज्यालोमा ठोक्किन्छन् र बिलाउँछन्",
          "सास भित्र तान्दा शक्ति ल्याउनुहोस्। छोड्दा उनीहरूको हल्ला बाहिर पठाउनुहोस्",
        ],
      },
      {
        duration: "5 min",
        title: "Evidence Journal",
        titleNp: "Evidence Journal",
        steps: [
          "Write down exactly what happened: dates, places, words",
          "Screenshot messages if online. Save everything",
          "This is your record. You may need it, and it validates you",
          "Note how it made you feel. Your feelings are evidence too",
        ],
        stepsNp: [
          "ठ्याक्कै के भयो लेख्नुहोस्: मिति, ठाउँ, शब्दहरू",
          "Online भए screenshot लिएर राख्नुहोस्। सबै save गर्नुहोस्",
          "यो तपाईंको record हो। पछि चाहिन सक्छ, र यसले तपाईंको कुरा पुष्टि गर्छ",
          "कस्तो महसुस भयो त्यो पनि लेख्नुहोस्। तपाईंको भावना पनि proof हो",
        ],
      },
      {
        duration: "10 min",
        title: "Reclaim Your Narrative",
        titleNp: "आफ्नो कथा फिर्ता ल्याउ",
        steps: [
          "Write down the worst thing they said about you",
          "Now write the truth next to it: who you really are",
          "List 3 people who see the real you",
          "Read the truth column aloud. Repeat it until it sticks",
        ],
        stepsNp: [
          "उनीहरूले तपाईंको बारेमा भनेको सबैभन्दा नराम्रो कुरा लेख्नुहोस्",
          "छेउमा सत्य लेख्नुहोस्: तपाईं सँच्चै को हुनुहुन्छ",
          "तपाईंलाई सँच्चै चिन्ने ३ जना list गर्नुहोस्",
          "सत्य वाला भाग ठूलो स्वरमा पढ्नुहोस्। बसेसम्म दोहोर्‍याउनुहोस्",
        ],
      },
    ],
    redFlags: [
      "You feel unsafe at school, work, or online",
      "The bullying includes physical threats or violence",
      "You're thinking about hurting yourself to escape it",
      "You've started avoiding all social situations",
    ],
    redFlagsNp: [
      "स्कुल, काम, वा online मा असुरक्षित महसुस",
      "Bullying मा शारीरिक धम्की वा हिंसा समावेश छ",
      "यसबाट भाग्न आफूलाई चोट पुर्‍याउने सोचिरहेको",
      "सबै सामाजिक परिस्थिति बेवास्ता गर्न थालेको",
    ],
  },
  {
    slug: "family-conflict",
    title: "Family Conflict",
    titleNp: "घरपरिवारमा झगडा",
    subtitle: "You can love your family and still be hurt by them. Both are true.",
    subtitleNp: "परिवारलाई माया गर्नु र उनीहरूबाट दुख्नु, दुवै सँच्चै हो।",
    normalizer:
      "Family conflict is confusing because the people causing pain are often the same people you love. You are allowed to set boundaries, even with family.",
    normalizerNp:
      "घरको झगडा अलमल्याउने हुन्छ किनभने दुखाउने मान्छेहरू नै तपाईंका माया गर्ने मान्छे हुन्। परिवारसँग पनि सीमा राख्न पाइन्छ।",
    commonThoughts: [
      '"Other families are normal, mine is broken"',
      '"I have to keep the peace"',
      '"It\'s my fault they fight"',
      '"I can\'t talk to anyone about this"',
    ],
    commonThoughtsNp: [
      '"अरूको परिवार सामान्य छ, मेरो भाँचिएको"',
      '"मैले शान्ति कायम राख्नुपर्छ"',
      '"उनीहरू मेरो कारणले झगडा गर्छन्"',
      '"यो कुरा कसैलाई भन्न सक्दिन"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Emotional Exit",
        titleNp: "भावनात्मक निकास",
        steps: [
          "If a conflict is escalating, say: 'I need a moment'",
          "Go to another room, step outside, or put on headphones",
          "Take 5 slow breaths. You can come back when you're ready",
        ],
        stepsNp: [
          "झगडा बढ्दै गएमा भन्नुहोस्: 'मलाई एक छिन चाहियो'",
          "अर्को कोठामा जानुहोस्, बाहिर निस्कनुहोस्, वा headphone लगाउनुहोस्",
          "५ लामो सास लिनुहोस्। तयार हुँदा फर्कन सक्नुहुन्छ",
        ],
      },
      {
        duration: "5 min",
        title: "Boundary Script",
        titleNp: "Boundary Script",
        steps: [
          "Think of one recurring situation that hurts you",
          "Write a calm sentence: 'When you ___, I feel ___'",
          "Practice saying it aloud, calmly, without blame",
          "You don't need to fix them. You just need to protect you",
        ],
        stepsNp: [
          "बारम्बार दुखाउने एउटा कुरा सोच्नुहोस्",
          "शान्त भएर एउटा वाक्य लेख: 'तपाईंले ___ गर्दा, मलाई ___ महसुस हुन्छ'",
          "शान्त स्वरमा, दोष नदिई, ठूलो स्वरमा अभ्यास गर्नुहोस्",
          "उनीहरूलाई सुधार्नु पर्दैन। आफूलाई जोगाउनु पर्छ",
        ],
      },
      {
        duration: "10 min",
        title: "Safe Space Map",
        titleNp: "सुरक्षित ठाउँको नक्सा",
        steps: [
          "Draw a simple map of your daily life (home, school, etc.)",
          "Mark places where you feel safe: a friend's house, a library, a park",
          "Identify 2 people outside your family you could talk to",
          "Plan a way to reach one of these safe spaces when things get bad",
        ],
        stepsNp: [
          "दैनिक जीवनको सरल नक्सा कोर्नुहोस् (घर, स्कुल, आदि)",
          "सुरक्षित महसुस हुने ठाउँ चिन्ह लगाउनुहोस्: साथीको घर, library, पार्क",
          "परिवार बाहिरका २ जना भरपर्दो मान्छे पत्ता लगाउनुहोस्",
          "कुरा नराम्रो हुँदा ती सुरक्षित ठाउँ पुग्ने तरिका सोच्नुहोस्",
        ],
      },
    ],
    redFlags: [
      "Any form of physical violence at home",
      "Verbal abuse that makes you feel worthless or afraid",
      "You feel trapped with no safe place to go",
      "Conflict is affecting your ability to eat, sleep, or study",
    ],
    redFlagsNp: [
      "घरमा कुनै पनि प्रकारको शारीरिक हिंसा",
      "बेकार वा डराउने बनाउने गालीगलौज",
      "जाने सुरक्षित ठाउँ नभएर फसेको महसुस",
      "झगडाले खाना, निद्रा, वा पढाइमा असर गरिरहेको",
    ],
  },
  {
    slug: "grief",
    title: "Grief",
    titleNp: "शोक",
    subtitle: "Grief is love with nowhere to go. There is no right way to do this.",
    subtitleNp: "शोक भनेको जाने ठाउँ नभएको माया हो। यो गर्ने कुनै 'सही तरिका' छैन।",
    normalizer:
      "Grief doesn't follow a timeline or a neat set of stages. Some days are okay. Some days knock you flat. All of it is normal. All of it is allowed.",
    normalizerNp:
      "शोक कुनै timeline अनुसार हुँदैन। कुनै दिन ठिक हुन्छ, कुनै दिन ढल्नुहुन्छ। सबै सामान्य हो। सबैको अनुमति छ।",
    commonThoughts: [
      '"I should be over this by now"',
      '"I feel guilty for laughing / being happy"',
      '"Nobody understands what I\'m going through"',
      '"The world just kept going and I\'m stuck"',
    ],
    commonThoughtsNp: [
      '"अबसम्म त बिर्सनु पर्ने हो"',
      '"हाँस्दा / खुसी हुँदा दोषी महसुस हुन्छ"',
      '"कसैले बुझ्दैन म के बाट गुज्रिरहेको छु"',
      '"संसार अगाडि बढिरह्यो र म अड्किएँ"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Name It to Tame It",
        titleNp: "भन्नुहोस्, हल्का हुन्छ",
        steps: [
          "Put your hand on your chest",
          "Say aloud: 'I am grieving, and that's okay'",
          "Take one deep breath. Let whatever comes, come",
        ],
        stepsNp: [
          "हात छातीमा राख्नुहोस्",
          "ठूलो स्वरमा भन्नुहोस्: 'म शोकमा छु, र यो ठिक छ'",
          "एउटा गहिरो सास लिनुहोस्। जे आउँछ, आउन दिनुहोस्",
        ],
      },
      {
        duration: "5 min",
        title: "Memory Moment",
        titleNp: "सम्झनाको पल",
        steps: [
          "Close your eyes and recall one good memory",
          "What did it smell like? Sound like? Feel like?",
          "Smile if it comes. Grief and love live in the same place",
          "Say 'thank you' to the memory before you open your eyes",
        ],
        stepsNp: [
          "आँखा चिम्मेर एउटा राम्रो सम्झना ल्याउनुहोस्",
          "कस्तो गन्ध थियो? कस्तो आवाज? कस्तो महसुस?",
          "हाँसो आयो भने हाँस्नुहोस्। शोक र माया एकै ठाउँमा बस्छन्",
          "आँखा खोल्नुअघि त्यो सम्झनालाई 'धन्यवाद' भन्नुहोस्",
        ],
      },
      {
        duration: "10 min",
        title: "Unsent Letter",
        titleNp: "नपठाइएको चिठी",
        steps: [
          "Write a letter to the person or thing you've lost",
          "Tell them what you miss. What you wish you'd said",
          "Tell them what's happened since they've been gone",
          "End it however you need to. There are no rules here",
        ],
        stepsNp: [
          "तपाईंले गुमाएको मान्छे वा कुरालाई चिठी लेख्नुहोस्",
          "के याद आउँछ भन्नुहोस्। के भन्न मन थियो भन्नुहोस्",
          "उनी गएपछि के-के भयो भन्नुहोस्",
          "जसरी सक्नुहुन्छ, सक्नुहोस्। यहाँ कुनै नियम छैन",
        ],
      },
    ],
    redFlags: [
      "Inability to function in daily life after several months",
      "Using substances to numb the pain",
      "Persistent thoughts of joining the person who died",
      "Complete emotional numbness that won't lift",
    ],
    redFlagsNp: [
      "केही महिनापछि पनि दैनिक जीवनमा काम गर्न नसक्ने",
      "पीडा सुन्न गराउन मादक पदार्थ प्रयोग",
      "मरेको मान्छेसँग जोडिने लगातार विचार",
      "नहट्ने पूर्ण भावनात्मक सुन्नपन",
    ],
  },
  {
    slug: "self-harm",
    title: "Self-Harm",
    titleNp: "Self-Harm",
    subtitle: "The pain inside is real. You deserve gentler ways to cope.",
    subtitleNp: "भित्रको पीडा सँच्चैको हो। तपाईं नरम तरिकाको हकदार हुनुहुन्छ।",
    normalizer:
      "Self-harm is not attention-seeking. It's a signal that your pain has exceeded the coping tools you have right now. You're not broken. You just need more tools.",
    normalizerNp:
      "Self-harm भनेको ध्यान खोज्नु होइन। यो तपाईंको पीडा तपाईंका हालका उपायभन्दा बढी भयो भन्ने संकेत हो। तपाईं भाँचिएको हुनुहुन्न। तपाईंलाई अझ बढी उपायहरू चाहिन्छ।",
    commonThoughts: [
      '"It\'s the only thing that makes me feel something"',
      '"I deserve to be punished"',
      '"Nobody would understand"',
      '"I can stop whenever I want"',
    ],
    commonThoughtsNp: [
      '"यो मात्र हो जसले केही महसुस गराउँछ"',
      '"मलाई सजाय हुनुपर्छ"',
      '"कसैले बुझ्दैन"',
      '"मैले चाहेबेला छोड्न सक्छु"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Ice Cube Hold",
        titleNp: "बरफ समाउनु",
        steps: [
          "Hold an ice cube tightly in your fist",
          "Focus on the intense cold sensation",
          "The sharp feeling can replace the urge without harm",
          "Let it melt. Breathe",
        ],
        stepsNp: [
          "एउटा बरफको टुक्रा मुट्ठीमा कसेर समाउनुहोस्",
          "चिसोको तीव्र महसुसमा ध्यान दिनुहोस्",
          "यो तीखो अनुभूतिले चोट नपुर्‍याई urge हटाउन सक्छ",
          "पग्लन दिनुहोस्। सास लिनुहोस्",
        ],
      },
      {
        duration: "5 min",
        title: "Red Ink Release",
        titleNp: "Red Ink Release",
        steps: [
          "Take a red pen or marker",
          "Draw on the skin where you feel the urge",
          "Draw lines, patterns, words, anything",
          "Watch the marks and breathe slowly",
          "You gave the feeling a way out without a wound",
        ],
        stepsNp: [
          "रातो pen वा marker ल्याउनुहोस्",
          "Urge महसुस भएको ठाउँको छालामा कोर्नुहोस्",
          "रेखा, pattern, शब्द, जे पनि कोर्नुहोस्",
          "ती चिन्हहरू हेर्नुहोस् र बिस्तारै सास लिनुहोस्",
          "तपाईंले त्यो भावनालाई घाउ बिना बाहिर निकाल्नुभयो",
        ],
      },
      {
        duration: "10 min",
        title: "Urge Surfing",
        titleNp: "Urge Surfing",
        steps: [
          "Set a timer for 10 minutes",
          "Notice the urge without acting on it. Where do you feel it?",
          "Rate its intensity 1–10 every minute",
          "Watch it rise, peak, and fall. Urges always pass",
          "Write what you noticed. You just proved you can ride it out",
        ],
        stepsNp: [
          "१० मिनेटको timer लगाउनुहोस्",
          "Urge लाई कुनै काम नगरी observe गर्नुहोस्। कहाँ महसुस हुन्छ?",
          "हरेक मिनेट यसको तीव्रता १–१० मा rate गर्नुहोस्",
          "बढ्दै, peak मा पुग्दै, र घट्दै जान्छ हेर्नुहोस्। Urge सधैं बित्छ",
          "के महसुस भयो लेख्नुहोस्। तपाईंले भर्खरै प्रमाणित गर्नुभयो। तपाईं सहन सक्नुहुन्छ",
        ],
      },
    ],
    redFlags: [
      "Injuries are getting deeper or more frequent",
      "You're hiding wounds or making excuses for them",
      "You feel you cannot stop even when you want to",
      "You have thoughts of ending your life",
    ],
    redFlagsNp: [
      "चोटहरू गहिरो वा बारम्बार भइरहेका छन्",
      "घाउ लुकाउँदै वा बहाना बनाउँदै",
      "रोक्न चाहँदा पनि रोक्न नसक्ने महसुस",
      "जीवन अन्त्य गर्ने विचार आइरहेको",
    ],
  },
  {
    slug: "addiction",
    title: "Addiction & Substance Use",
    titleNp: "लत र मादक पदार्थ",
    subtitle: "You were trying to survive. Now let's find a safer way.",
    subtitleNp: "तपाईं बाँच्न खोज्दै हुनुहुन्थ्यो। अब अलि सुरक्षित बाटो खोजौं।",
    normalizer:
      "Addiction often starts as a way to cope with pain. It doesn't make you weak or a bad person. Recognizing the pattern is already a brave first step.",
    normalizerNp:
      "लत प्रायः पीडासँग जुध्ने तरिकाको रूपमा सुरु हुन्छ। यसले तपाईंलाई कमजोर वा नराम्रो मान्छे बनाउँदैन। यो pattern चिन्नु नै एउटा हिम्मती पहिलो कदम हो।",
    commonThoughts: [
      '"I can quit anytime. I just don\'t want to"',
      '"It\'s the only thing that helps me relax"',
      '"Everyone does it, I\'m fine"',
      '"I\'ve already ruined everything, what\'s the point"',
    ],
    commonThoughtsNp: [
      '"मैले जुनसुकै बेला छोड्न सक्छु। मन छैन बस्"',
      '"आराम दिने यो मात्र हो"',
      '"सबैले गर्छन्, म ठिक छु"',
      '"सबै बिगारिसकें, अब के मतलब"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "HALT Check",
        titleNp: "HALT Check",
        steps: [
          "Ask yourself: Am I Hungry, Angry, Lonely, or Tired?",
          "Often a craving is one of these four in disguise",
          "Address the real need first: eat, rest, call someone",
        ],
        stepsNp: [
          "आफूलाई सोध्नुहोस्: भोकाएको, रिसाएको, एक्लो, वा थकित?",
          "Craving प्रायः यी चार मध्ये एउटा लुकेको हुन्छ",
          "पहिले सँच्चैको खाँचो पूरा गर्नुहोस्: खानुहोस्, आराम गर्नुहोस्, कसैलाई फोन गर्नुहोस्",
        ],
      },
      {
        duration: "5 min",
        title: "Craving Delay",
        titleNp: "Craving Delay",
        steps: [
          "When a craving hits, set a 5-minute timer",
          "During those 5 minutes, do one physical thing: walk, push-ups, cold water on face",
          "After the timer, check in: is the craving still a 10/10?",
          "Most cravings peak at 3–5 minutes and then weaken",
        ],
        stepsNp: [
          "Craving आउँदा ५ मिनेटको timer लगाउनुहोस्",
          "ती ५ मिनेटमा एउटा शारीरिक काम गर्नुहोस्: हिँड्नुहोस्, push-up गर्नुहोस्, मुखमा चिसो पानी लगाउनुहोस्",
          "Timer सकिएपछि हेर्नुहोस्: craving अझै १०/१० छ?",
          "धेरैजसो craving ३–५ मिनेटमा peak हुन्छ अनि कम हुन्छ",
        ],
      },
      {
        duration: "10 min",
        title: "Trigger Map",
        titleNp: "Trigger Map",
        steps: [
          "Write down the last 3 times you used",
          "For each: what happened right before? Who were you with? How did you feel?",
          "Circle the patterns. These are your triggers",
          "For each trigger, write one alternative action (call a friend, go for a walk, chew gum)",
          "Keep this map on your phone",
        ],
        stepsNp: [
          "पछिल्लो ३ पटक सेवन गरेको बारेमा लेख्नुहोस्",
          "हरेकमा: ठिक अघि के भयो? कोसँग हुनुहुन्थ्यो? कस्तो महसुस थियो?",
          "Pattern मा गोलो लगाउनुहोस्। यी हुन् तपाईंका trigger",
          "हरेक trigger का लागि एउटा alternative लेख्नुहोस् (साथीलाई call, हिँड्न जानुहोस्, chewing gum चपाउनुहोस्)",
          "यो map फोनमा राख्नुहोस्",
        ],
      },
    ],
    redFlags: [
      "You need more to get the same effect",
      "You get withdrawal symptoms when you stop",
      "It's affecting your relationships, work, or health",
      "You've tried to stop multiple times and couldn't",
    ],
    redFlagsNp: [
      "उही असर पाउन बढी चाहिन्छ",
      "छोड्दा withdrawal लक्षण आउँछ",
      "सम्बन्ध, काम, वा स्वास्थ्यमा असर पारिरहेको",
      "धेरै पटक छोड्न खोज्नुभयो तर सक्नुभएन",
    ],
  },
  {
    slug: "trauma",
    title: "Trauma & PTSD",
    titleNp: "Trauma र PTSD",
    subtitle: "What happened to you was not your fault. Your reactions make sense.",
    subtitleNp: "तपाईंसँग जे भयो त्यो तपाईंको गल्ती थिएन। तपाईंको प्रतिक्रिया अर्थपूर्ण छ।",
    normalizer:
      "Trauma changes how your brain protects you. Flashbacks, hypervigilance, and emotional numbness are not weaknesses; they're survival responses. Healing is possible, and it doesn't have to happen on anyone else's timeline.",
    normalizerNp:
      "Trauma ले तपाईंको दिमागले तपाईंलाई जोगाउने तरिका नै बदल्छ। Flashback, अति-सतर्कता, र भावनात्मक सुन्नपन कमजोरी होइन, बाँच्ने उपाय हुन्। निको हुन सकिन्छ, र यो अरूको timeline अनुसार हुनु पर्दैन।",
    commonThoughts: [
      '"I should be over it by now"',
      '"Maybe it wasn\'t that bad"',
      '"I\'m overreacting"',
      '"I can\'t trust anyone"',
    ],
    commonThoughtsNp: [
      '"अबसम्म त बिर्सनु पर्ने हो"',
      '"त्यति नराम्रो त थिएन होला"',
      '"म overreact गरिरहेको हुँ"',
      '"कसैमाथि विश्वास गर्न सक्दिन"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Grounding Anchor",
        titleNp: "Grounding Anchor",
        steps: [
          "Press your feet firmly into the floor",
          "Name today's date, where you are, and one safe thing you can see",
          "Say aloud: 'That was then. I am here now. I am safe'",
        ],
        stepsNp: [
          "खुट्टा जमिनमा कसेर थिच्नुहोस्",
          "आजको मिति, तपाईं कहाँ हुनुहुन्छ, र एउटा सुरक्षित कुरा जो देख्न सक्नुहुन्छ, भन्नुहोस्",
          "ठूलो स्वरमा भन्नुहोस्: 'त्यो त्यतिबेलाको कुरा थियो। म अहिले यहाँ छु। म सुरक्षित छु'",
        ],
      },
      {
        duration: "5 min",
        title: "Container Visualization",
        titleNp: "Container Visualization",
        steps: [
          "Imagine a strong, lockable container: a safe, a vault, a chest",
          "Place the intrusive memory or feeling inside it",
          "Close and lock the container. You can open it later, in therapy, on your terms",
          "Take 3 breaths. The memory is stored, not forgotten, just contained",
        ],
        stepsNp: [
          "एउटा बलियो, ताल्चा लाग्ने भाँडो कल्पना गर्नुहोस्: safe, vault, सन्दुक",
          "आउने बित्तिकै त्यो सम्झना वा भावना भित्र राख्नुहोस्",
          "बन्द गर्नुहोस् र ताल्चा लगाउनुहोस्। पछि therapy मा, तपाईंकै terms मा खोल्न सक्नुहुन्छ",
          "३ सास लिनुहोस्। सम्झना store भयो. बिर्सिएन, बस contain भयो",
        ],
      },
      {
        duration: "10 min",
        title: "Safe Place Imagery",
        titleNp: "सुरक्षित ठाउँको कल्पना",
        steps: [
          "Close your eyes. Imagine a place where you feel completely safe",
          "It can be real or imagined: a beach, a room, a forest",
          "Fill in every detail: temperature, sounds, smells, textures",
          "Stay here for a few minutes. Breathe slowly",
          "Remember: you can return to this place anytime",
        ],
        stepsNp: [
          "आँखा चिम्नुहोस्। पूर्ण सुरक्षित महसुस हुने ठाउँ कल्पना गर्नुहोस्",
          "सँच्चैको वा काल्पनिक: समुद्रकिनार, कोठा, जंगल",
          "हरेक detail भर्नुहोस्: तापक्रम, आवाज, गन्ध, छुवाइ",
          "केही मिनेट यहीं बस्नुहोस्। बिस्तारै सास लिनुहोस्",
          "सम्झनुहोस्: तपाईं जुनसुकै बेला यहाँ फर्कन सक्नुहुन्छ",
        ],
      },
    ],
    redFlags: [
      "Flashbacks or nightmares are getting worse or more frequent",
      "You're unable to feel safe anywhere",
      "You've started avoiding large parts of your daily life",
      "You feel emotionally numb or detached for weeks",
    ],
    redFlagsNp: [
      "Flashback वा दुःस्वप्न बढ्दै वा बारम्बार आउँदै",
      "कहीं पनि सुरक्षित महसुस हुँदैन",
      "दैनिक जीवनको ठूलो भाग बेवास्ता गर्न थालेको",
      "हप्तौंदेखि भावनात्मक सुन्नपन वा अलग महसुस",
    ],
  },
  {
    slug: "relationship-issues",
    title: "Relationship Issues",
    titleNp: "सम्बन्धको समस्या",
    subtitle: "You deserve relationships that feel safe, not ones you survive.",
    subtitleNp: "तपाईं सुरक्षित महसुस हुने सम्बन्धको हकदार हुनुहुन्छ, बाँचिरहनु पर्ने सम्बन्धको होइन।",
    normalizer:
      "Relationship pain hits differently because it comes from people we care about. Whether it's a partner, friend, or someone you're losing, your pain is valid and you don't have to figure it out alone.",
    normalizerNp:
      "सम्बन्धको पीडा फरक हुन्छ किनभने यो माया गर्ने मान्छेबाट आउँछ। Partner होस्, साथी होस्, वा गुमाउँदै गरेको कोही. तपाईंको पीडा valid छ र तपाईंले एक्लै बुझ्नु पर्दैन।",
    commonThoughts: [
      '"Maybe I\'m the problem"',
      '"I\'ll never find someone who truly gets me"',
      '"If I leave, I\'ll be alone forever"',
      '"Love shouldn\'t hurt this much, right?"',
    ],
    commonThoughtsNp: [
      '"शायद म नै समस्या हुँ"',
      '"मलाई सँच्चै बुझ्ने कोही कहिल्यै भेटिँदैन"',
      '"छोडें भने सधैंको लागि एक्लो हुन्छु"',
      '"मायाले यति दुखाउनु हुँदैन होइन?"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Emotion Label",
        titleNp: "भावना पहिचान",
        steps: [
          "Pause and name exactly what you're feeling: hurt, angry, scared, betrayed?",
          "Say it: 'I feel ___ right now'",
          "Naming it takes away some of its power",
        ],
        stepsNp: [
          "रोक्नुहोस् र ठ्याक्कै के महसुस भइरहेछ भन्नुहोस्: दुखेको, रिसाएको, डराएको, विश्वासघात?",
          "भन्नुहोस्: 'मलाई अहिले ___ महसुस भइरहेको छ'",
          "नाम दिँदा त्यसको शक्ति घट्छ",
        ],
      },
      {
        duration: "5 min",
        title: "Needs vs. Wants Check",
        titleNp: "चाहिने vs चाहेको",
        steps: [
          "Write down what you need from this relationship (safety, honesty, respect)",
          "Write down what you're actually getting",
          "Notice the gaps. These aren't complaints; they're unmet needs",
          "Ask: can I communicate these needs? Is the person capable of hearing them?",
        ],
        stepsNp: [
          "यो सम्बन्धबाट तपाईंलाई के चाहिन्छ लेख्नुहोस् (सुरक्षा, इमानदारी, सम्मान)",
          "सँच्चै के पाइरहेको हुनुहुन्छ लेख्नुहोस्",
          "खाली ठाउँ हेर्नुहोस्। यी गुनासो होइन, पूरा नभएका खाँचो हुन्",
          "सोच्नुहोस्: यी खाँचो भन्न सक्छु? त्यो मान्छेले सुन्न सक्छ?",
        ],
      },
      {
        duration: "10 min",
        title: "Boundary Builder",
        titleNp: "Boundary Builder",
        steps: [
          "Write down one behavior from the other person that hurts you",
          "Write what you'd like instead. Be specific",
          "Draft a sentence: 'I need ___ because ___'",
          "Practice saying it calmly. You don't need to apologize for having needs",
          "Decide: if the boundary is crossed again, what will you do?",
        ],
        stepsNp: [
          "अर्को मान्छेको दुखाउने एउटा व्यवहार लेख्नुहोस्",
          "बरु के चाहनुहुन्छ लेख्नुहोस्। स्पष्ट भएर",
          "एउटा वाक्य बनाउनुहोस्: 'मलाई ___ चाहिन्छ किनभने ___'",
          "शान्त भएर भन्ने अभ्यास गर्नुहोस्। खाँचो भएकोमा माफी माग्नु पर्दैन",
          "निर्णय गर्नुहोस्: फेरि boundary तोडियो भने, के गर्नुहुन्छ?",
        ],
      },
    ],
    redFlags: [
      "Your partner controls who you see, what you wear, or your finances",
      "You're afraid of their reaction when you disagree",
      "Physical violence or threats of any kind",
      "You feel like you've lost yourself in the relationship",
    ],
    redFlagsNp: [
      "Partner ले कोसँग भेट्ने, के लाउने, वा पैसा नियन्त्रण गर्छ",
      "असहमत हुँदा उनीहरूको प्रतिक्रियाको डर लाग्छ",
      "कुनै पनि प्रकारको शारीरिक हिंसा वा धम्की",
      "सम्बन्धमा आफूलाई नै गुमाएको जस्तो लाग्छ",
    ],
  },
  {
    slug: "body-image",
    title: "Body Image",
    titleNp: "शरीरको छवि",
    subtitle: "Your body is the least interesting thing about you, and it's still worthy of love.",
    subtitleNp: "तपाईंको शरीर तपाईंको बारेमा सबैभन्दा कम interesting कुरा हो. तर यो अझै मायाको योग्य छ।",
    normalizer:
      "In a world that profits from your insecurity, feeling uncomfortable in your body is almost inevitable. It doesn't mean something is wrong with you. It means the world has been loud, and it's time to listen to a kinder voice.",
    normalizerNp:
      "तपाईंको असुरक्षाबाट फाइदा लिने संसारमा, शरीरमा असहज हुनु लगभग अटल छ। यसको मतलब तपाईंमा केही गलत छ भन्ने होइन। संसार धेरै हल्लाइलो भयो, अब अलि नरम आवाज सुन्ने बेला हो।",
    commonThoughts: [
      '"I hate how I look"',
      '"If I could just change ___, I\'d be happy"',
      '"People are judging my body"',
      '"I don\'t deserve to eat / enjoy food"',
    ],
    commonThoughtsNp: [
      '"मलाई आफ्नो रूप मन पर्दैन"',
      '"___ बदल्न सक्ने भए खुसी हुन्थें"',
      '"मान्छेहरूले मेरो शरीर judge गरिरहेका छन्"',
      '"मलाई खाना खाने / enjoy गर्ने हक छैन"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Mirror Kindness",
        titleNp: "ऐनामा दयालुता",
        steps: [
          "Look in the mirror and find one thing your body does well (breathes, heals, carries you)",
          "Say thank you to it, out loud if you can",
          "This isn't about loving how you look. It's about respecting what your body does",
        ],
        stepsNp: [
          "ऐनामा हेर्नुहोस् र शरीरले राम्रो गर्ने एउटा कुरा खोज्नुहोस् (सास लिन्छ, निको हुन्छ, बोकेर हिँड्छ)",
          "ठूलो स्वरमा भन्न सक्नुहुन्छ भने धन्यवाद भन्नुहोस्",
          "यो कस्तो देखिन्छ भन्ने बारेमा होइन। शरीरले के गर्छ, त्यसको सम्मान हो",
        ],
      },
      {
        duration: "5 min",
        title: "Media Audit",
        titleNp: "Media Audit",
        steps: [
          "Open your social media feed",
          "Unfollow or mute 3 accounts that make you feel bad about your body",
          "Follow 3 accounts that show real, diverse bodies or focus on things other than appearance",
          "Your feed shapes your self-image. Curate it with intention",
        ],
        stepsNp: [
          "Social media feed खोल्नुहोस्",
          "शरीरको बारेमा नराम्रो महसुस गराउने ३ account unfollow वा mute गर्नुहोस्",
          "सँच्चैका, विविध शरीर देखाउने वा बाहिरी रूपभन्दा अरू कुरामा focus गर्ने ३ account follow गर्नुहोस्",
          "तपाईंको feed ले तपाईंको self-image बनाउँछ। सोचेर curate गर्नुहोस्",
        ],
      },
      {
        duration: "10 min",
        title: "Body Gratitude Letter",
        titleNp: "शरीरलाई धन्यवाद पत्र",
        steps: [
          "Write a letter to your body, not about how it looks, but what it's done for you",
          "Thank it for specific things: walking you home, hugging someone, surviving a hard day",
          "Acknowledge what it's been through",
          "End with one promise: a way you'll be kinder to it this week",
        ],
        stepsNp: [
          "शरीरलाई चिठी लेख्नुहोस्. कस्तो देखिन्छ भन्ने बारेमा होइन, तपाईंको लागि के गर्‍यो भन्ने बारेमा",
          "खास कुराहरूमा धन्यवाद दिनुहोस्: घर पुर्‍यायो, कसैलाई अँगालो हाल्यो, कठिन दिन सहिदियो",
          "यसले के-के सहेको छ स्वीकार गर्नुहोस्",
          "एउटा वाचा गरेर सक्नुहोस्: यो हप्ता अलि बढी माया गर्छु",
        ],
      },
    ],
    redFlags: [
      "Skipping meals regularly or purging after eating",
      "Exercising compulsively despite injury or exhaustion",
      "Avoiding social situations because of how you look",
      "Your entire mood depends on the number on a scale",
    ],
    redFlagsNp: [
      "नियमित रूपमा खाना नखाने वा खाएपछि उल्टी गर्ने",
      "चोट वा थकान भए पनि जबरजस्ती व्यायाम गर्ने",
      "कस्तो देखिन्छ भनेर सामाजिक परिस्थिति बेवास्ता गर्ने",
      "तौलको अंकमा पूरा mood निर्भर हुने",
    ],
  },
  {
    slug: "anger",
    title: "Anger & Frustration",
    titleNp: "रिस र झुन्डिने मन",
    subtitle: "Anger is a messenger. The question isn't whether to feel it, but what to do with it.",
    subtitleNp: "रिस एउटा सन्देशवाहक हो। प्रश्न महसुस गर्ने कि नगर्ने होइन, यसलाई के गर्ने भन्ने हो।",
    normalizer:
      "Anger gets a bad reputation, but it's a perfectly valid emotion. It usually means a boundary was crossed, a need wasn't met, or something feels deeply unfair. You're allowed to feel angry. The goal is to express it without destroying yourself or others.",
    normalizerNp:
      "रिसको नराम्रो नाम छ, तर यो पूर्ण रूपमा valid भावना हो। प्रायः यसको मतलब सीमा तोडियो, खाँचो पूरा भएन, वा केही गहिरो अन्यायपूर्ण लाग्यो। रिसाउन पाइन्छ। लक्ष्य भनेको आफू र अरूलाई नष्ट नगरी व्यक्त गर्नु हो।",
    commonThoughts: [
      '"I\'m going to explode"',
      '"Nobody listens to me"',
      '"I can\'t control myself when I\'m angry"',
      '"People make me so angry"',
    ],
    commonThoughtsNp: [
      '"म पड्किन्छु"',
      '"कसैले सुन्दैन"',
      '"रिस उठ्दा आफूलाई control गर्न सक्दिन"',
      '"मान्छेहरूले मलाई एकदमै रिस उठाउँछन्"',
    ],
    tools: [
      {
        duration: "1 min",
        title: "Physiological Sigh",
        titleNp: "Physiological Sigh",
        steps: [
          "Take two quick inhales through your nose (back to back)",
          "Then one long, slow exhale through your mouth",
          "Repeat 3 times. This is the fastest way to calm your nervous system",
        ],
        stepsNp: [
          "नाकबाट दुई पटक छिटो-छिटो सास तान्नुहोस् (लगातार)",
          "अनि मुखबाट एउटा लामो, बिस्तारै सास छोड्नुहोस्",
          "३ पटक दोहोर्‍याउनुहोस्। Nervous system शान्त पार्ने सबैभन्दा छिटो तरिका यही हो",
        ],
      },
      {
        duration: "5 min",
        title: "Anger Thermometer",
        titleNp: "रिसको Thermometer",
        steps: [
          "Rate your anger 1–10 right now",
          "Write down what triggered it. Be specific",
          "Underneath the anger, what's the deeper feeling? (hurt, disrespected, scared, helpless)",
          "Name it. The real feeling underneath is where the work is",
        ],
        stepsNp: [
          "अहिले रिस कति छ १–१० मा rate गर्नुहोस्",
          "के trigger गर्‍यो लेख्नुहोस्। स्पष्ट भएर",
          "रिसको तल सँच्चैको भावना के हो? (दुखेको, अपमान, डर, लाचारी)",
          "नाम दिनुहोस्। तलको सँच्चैको भावनामा नै काम गर्नु पर्छ",
        ],
      },
      {
        duration: "10 min",
        title: "Physical Release",
        titleNp: "शारीरिक Release",
        steps: [
          "Do something intensely physical: run, punch a pillow, tear up paper, do push-ups",
          "Set a timer and let yourself go all out for 5 minutes",
          "Then sit quietly. Drink cold water",
          "Write: what was I really angry about?",
          "Now: what do I actually need right now?",
        ],
        stepsNp: [
          "तीव्र शारीरिक काम गर्नुहोस्: दौडनुहोस्, तकिया हान्नुहोस्, कागज च्यात्नुहोस्, push-up गर्नुहोस्",
          "५ मिनेटको timer लगाएर पूरा छोड्नुहोस्",
          "अनि शान्त बस्नुहोस्। चिसो पानी खानुहोस्",
          "लेख्नुहोस्: सँच्चै रिस केमा थियो?",
          "अब: मलाई अहिले सँच्चै के चाहिन्छ?",
        ],
      },
    ],
    redFlags: [
      "You've broken things or hurt someone during an outburst",
      "Anger feels completely out of your control",
      "People in your life are afraid of your anger",
      "You're angry most of the time, not just in specific situations",
    ],
    redFlagsNp: [
      "रिसको भडासमा सामान भाँचेको वा कसैलाई चोट पुर्‍याएको",
      "रिस पूर्ण रूपमा नियन्त्रण बाहिर महसुस हुन्छ",
      "तपाईंको जीवनका मान्छेहरू तपाईंको रिसबाट डराउँछन्",
      "विशेष परिस्थिति मात्र होइन, प्रायः जसो रिसाएकै हुनुहुन्छ",
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
