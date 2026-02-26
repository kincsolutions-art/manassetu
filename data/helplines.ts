export interface Helpline {
  id: string;
  name: string;
  contact_type: string;
  phones: string[];
  hours: string;
  website: string;
  languages: string;
  service_mode: string;
  cost: string;
  costNp?: string;
  coverage: string;
  location: string;
  niches: string[];
  blurb: string;
  blurbNp?: string;
  source_urls: string[];
  verification_status: string;
  last_checked: string;
}

export const helplines: Helpline[] = [
  {
    "id": "NP-CRISIS-1166",
    "name": "National Suicide Prevention Helpline (Patan Mental Hospital / Mental Hospital Lagankhel) – 1166",
    "contact_type": "crisis",
    "phones": [
      "1166"
    ],
    "hours": "Not explicitly stated on Mental Hospital site; listed as 24/7 on Ncell emergency services list (verify by calling).",
    "website": "https://mhl.gov.np/pages/hotline-3/",
    "languages": "Not specified (Mental Hospital site available in Nepali/English).",
    "service_mode": "Phone counseling / referral",
    "cost": "Free to call on participating telecom networks (see sources).",
    "coverage": "National (Nepal)",
    "location": "Based at Mental Hospital, Lagankhel, Lalitpur (Bagmati)",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Bullying/harassment",
      "Family conflict",
      "Grief"
    ],
    "blurb": "If you feel at risk of suicide or self-harm, call 1166 for immediate support and referral.",
    "blurbNp": "आत्महत्या वा आत्मघातीको जोखिम महसुस भएमा तुरुन्त 1166 मा कल गर्नुहोस्।",
    "costNp": "सहभागी telecom network मा निःशुल्क (स्रोत हेर्नुहोस्)।",
    "source_urls": [
      "https://mhl.gov.np/pages/hotline-3/",
      "https://www.ncell.com.np/en/individual/emergency-services-information",
      "https://www.who.int/nepal/news/detail/09-12-2022-Nepal-National-Suicide-Prevention-Helpline-Service-helping-save-lives",
      "https://psychiatrynepal.org.np/wp-content/uploads/2024/04/National-Suicide-Hotline-1166.pdf"
    ],
    "verification_status": "Primary-source confirmed (Mental Hospital + WHO); hours indicated by telecom listing (needs periodic reconfirmation).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-NGO-TPO-HELPLINE",
    "name": "TPO Nepal Psychosocial Support & Counseling Helpline (MHPSS)",
    "contact_type": "counseling",
    "phones": [
      "1660 010 2005",
      "+977-1-4537124",
      "+977-1-4524082"
    ],
    "hours": "Daily; sources show 8:00–18:00 (helpline factsheet PDF) and 9:00–17:00 on some TPO pages—confirm before display.",
    "website": "https://www.tponepal.org/tpo-nepal-helpline-factsheet/",
    "languages": "Not specified (TPO pages include Nepali and English text).",
    "service_mode": "Phone psychosocial counseling / consultation; referrals as needed",
    "cost": "Free when calling from Nepal Telecom network (per TPO).",
    "coverage": "National (Nepal)",
    "location": "Kathmandu (TPO Nepal), phone-based coverage nationwide",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Bullying/harassment",
      "Family conflict",
      "Grief"
    ],
    "blurb": "Talk to a trained counselor for psychosocial support, stress, anxiety or low mood; referrals available.",
    "blurbNp": "तनाव, चिन्ता वा उदासीनताको लागि तालिम प्राप्त counselor सँग कुरा गर्नुहोस्; referral पनि उपलब्ध।",
    "costNp": "Nepal Telecom network बाट निःशुल्क (TPO अनुसार)।",
    "source_urls": [
      "https://www.tponepal.org/wp-content/uploads/2022/01/Helpline-Factsheet-1.pdf",
      "https://www.tponepal.org/tpo-nepal-helpline-factsheet/",
      "https://www.tponepal.org/helpline/"
    ],
    "verification_status": "Primary-source confirmed; hours conflict across TPO sources—treat as requires re-verification.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-GBV-1145",
    "name": "National Women Commission GBV Helpline – Khabar Garau 1145",
    "contact_type": "gbv_crisis_support",
    "phones": [
      "1145",
      "+977-1-4256701",
      "+977-1-4250246"
    ],
    "hours": "Accessible 24/7.",
    "website": "https://nwchelpline.gov.np/?lang=en",
    "languages": "Not specified (site available in Nepali/English).",
    "service_mode": "Phone and SMS reporting; referral to shelter/medical/legal/psychosocial support",
    "cost": "Toll-free (per NWC helpline site and partners).",
    "coverage": "National (Nepal)",
    "location": "National Women Commission, Bhadrakali Plaza, Kathmandu (service nationwide)",
    "niches": [
      "Bullying/harassment",
      "Family conflict",
      "Low mood/hopelessness",
      "Anxiety/panic",
      "Grief",
      "Loneliness"
    ],
    "blurb": "For gender-based violence or urgent safety concerns at home, call 1145 for help and referrals.",
    "blurbNp": "लैङ्गिक हिंसा वा घरमा सुरक्षाको चिन्ता भएमा 1145 मा कल गर्नुहोस्।",
    "costNp": "निःशुल्क (NWC helpline अनुसार)।",
    "source_urls": [
      "https://nwchelpline.gov.np/?lang=en",
      "https://www.worldbank.org/en/news/feature/2017/12/05/a-helpline-for-gbv-survivors-in-nepal",
      "https://www.tponepal.org/integrated-platform-for-gender-based-violence-prevention-and-responsesambodhan/"
    ],
    "verification_status": "Primary-source confirmed (NWC helpline site; corroborated by World Bank).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-CHILD-1098",
    "name": "National Child Helpline Service – 1098 (National Child Rights Council)",
    "contact_type": "child_protection_crisis",
    "phones": [
      "1098"
    ],
    "hours": "Available 24 hours.",
    "website": "https://ncrc.gov.np/pages/child-helpline-service--1097--7/",
    "languages": "Not specified (page in Nepali; site has English toggle).",
    "service_mode": "Phone helpline; rescue, counseling, referral, temporary shelter",
    "cost": "Free (toll-free child helpline).",
    "coverage": "National (Nepal)",
    "location": "National Child Rights Council, Pulchowk, Lalitpur (service nationwide via networks/partners)",
    "niches": [
      "Bullying/harassment",
      "Family conflict",
      "Low mood/hopelessness",
      "Loneliness",
      "Anxiety/panic",
      "Grief"
    ],
    "blurb": "For children and teens facing abuse, bullying, neglect or unsafe situations, call 1098 anytime.",
    "blurbNp": "दुर्व्यवहार, bullying, उपेक्षा वा असुरक्षित अवस्थामा रहेका बालबालिकाका लागि 1098 मा कल गर्नुहोस्।",
    "costNp": "निःशुल्क (toll-free child helpline)।",
    "source_urls": [
      "https://ncrc.gov.np/pages/child-helpline-service--1097--7/"
    ],
    "verification_status": "Primary-source confirmed (government body).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-EMERGENCY-100",
    "name": "Nepal Police Emergency Number",
    "contact_type": "emergency_services",
    "phones": [
      "100"
    ],
    "hours": "24/7 (emergency).",
    "website": "https://www.ncell.com.np/en/individual/emergency-services-information",
    "languages": "Not specified.",
    "service_mode": "Phone emergency response",
    "cost": "Free on Ncell network (per Ncell emergency services list).",
    "coverage": "National (Nepal)",
    "location": "National",
    "niches": [
      "Bullying/harassment",
      "Family conflict",
      "Low mood/hopelessness",
      "Anxiety/panic",
      "Grief"
    ],
    "blurb": "If someone is in immediate danger, call 100 (police).",
    "blurbNp": "कसैको तत्काल खतरा भएमा 100 (प्रहरी) मा कल गर्नुहोस्।",
    "costNp": "Ncell network मा निःशुल्क।",
    "source_urls": [
      "https://www.ncell.com.np/en/individual/emergency-services-information"
    ],
    "verification_status": "Telecom listing (high confidence) – confirm if displaying to non-Ncell users.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-GBV-WOREC-HOTLINE",
    "name": "Women’s Rehabilitation Centre (WOREC) – Hotline for support",
    "contact_type": "gbv_support_services",
    "phones": [
      "16600178910",
      "+977-1-5186073",
      "+977-1-5186374"
    ],
    "hours": "Not specified on contact page (recommend confirm by calling).",
    "website": "https://worecnepal.org/contact/",
    "languages": "Not specified.",
    "service_mode": "Hotline + office-based support; referrals",
    "cost": "Not specified.",
    "coverage": "National NGO (projects in multiple districts; hotline/central office in Lalitpur).",
    "location": "Balkumari, Lalitpur (Bagmati)",
    "niches": [
      "Bullying/harassment",
      "Family conflict",
      "Grief",
      "Low mood/hopelessness",
      "Anxiety/panic"
    ],
    "blurb": "Support and referrals for survivors of violence against women and girls; call the hotline or office.",
    "blurbNp": "महिला तथा बालिका विरुद्ध हिंसाका पीडितहरूका लागि सहयोग र referral; hotline वा office मा सम्पर्क गर्नुहोस्।",
    "source_urls": [
      "https://worecnepal.org/contact/"
    ],
    "verification_status": "Primary-source confirmed.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-GBV-ASHA-CRISIS-9801193088",
    "name": "ASHA Crisis Centre (NFCC Nepal) – Crisis support line",
    "contact_type": "gbv_crisis_support",
    "phones": [
      "+977-9801193088"
    ],
    "hours": "Often described as 24-hour in media; official NFCC page does not specify hours (confirm before display).",
    "website": "https://www.nfcc.org.np/lockdown-support-english/",
    "languages": "Not specified (NFCC site has English/Nepali pages).",
    "service_mode": "Phone crisis support; referrals for survivors of abuse",
    "cost": "Not specified.",
    "coverage": "Not specified (appears Kathmandu-based with referral capacity).",
    "location": "Kathmandu (NFCC Nepal/ASHA Crisis Centre)",
    "niches": [
      "Bullying/harassment",
      "Family conflict",
      "Low mood/hopelessness",
      "Anxiety/panic",
      "Grief"
    ],
    "blurb": "If you are facing domestic or sexual violence and need urgent support, call 9801193088.",
    "blurbNp": "घरेलु वा यौन हिंसाको सामना गरिरहनुभएको छ भने तुरुन्त 9801193088 मा कल गर्नुहोस्।",
    "source_urls": [
      "https://www.nfcc.org.np/lockdown-support-english/",
      "https://nwc.gov.np/en/activities/helpline-crisis/"
    ],
    "verification_status": "Org/authority listing confirms number; ongoing availability not fully specified—treat as needs frequent verification.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-SRH-MERISAATHI",
    "name": "Meri Saathi (Marie Stopes Nepal) – information & counseling on SRH/healthy relationships",
    "contact_type": "relationship_support",
    "phones": [
      "16600119756 (NTC)",
      "9801119756 (Ncell)"
    ],
    "hours": "Sunday–Saturday, 7:00–12:00 (as stated on Marie Stopes page; clarify whether 12:00 = noon or midnight).",
    "website": "https://mariestopes.org.np/about-us/contact-centre/",
    "languages": "Not specified.",
    "service_mode": "Phone counseling / information; referrals to Marie Stopes centres",
    "cost": "Not specified on page (toll-free numbers for certain networks listed).",
    "coverage": "National (Marie Stopes networks across Nepal; helpline phone-based).",
    "location": "National (contact centre)",
    "niches": [
      "Family conflict",
      "Bullying/harassment",
      "Loneliness",
      "Low mood/hopelessness",
      "Anxiety/panic"
    ],
    "blurb": "Confidential counseling and information about healthy relationships, consent, and sexual/reproductive health.",
    "blurbNp": "स्वस्थ सम्बन्ध, सहमति र यौन/प्रजनन स्वास्थ्यका बारेमा गोप्य counseling र जानकारी।",
    "source_urls": [
      "https://mariestopes.org.np/about-us/contact-centre/"
    ],
    "verification_status": "Primary-source confirmed; hours wording ambiguous—verify display text.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-NGO-KOSHISH",
    "name": "KOSHISH – National mental health self-help organization (peer support/advocacy)",
    "contact_type": "peer_support_and_advocacy",
    "phones": [
      "+977-01-5121230"
    ],
    "hours": "Not specified (recommend confirm).",
    "website": "https://koshishnepal.org/",
    "languages": "Not specified (site content in English/Nepali).",
    "service_mode": "Referrals, peer support, community programs; office contact",
    "cost": "Not specified.",
    "coverage": "Multi-district programs (per KOSHISH site); HQ in Kathmandu valley.",
    "location": "Balkhu, Kathmandu",
    "niches": [
      "Loneliness",
      "Low mood/hopelessness",
      "Anxiety/panic",
      "Family conflict",
      "Grief",
      "Exam stress/burnout"
    ],
    "blurb": "Peer-led, rights-based mental health support and referrals; useful for ongoing recovery and loneliness.",
    "blurbNp": "Peer-led, अधिकारमा आधारित मानसिक स्वास्थ्य सहयोग र referral; recovery र एकलोपनमा उपयोगी।",
    "source_urls": [
      "https://koshishnepal.org/",
      "https://nwchelpline.gov.np/service-mapping/detail/33-Koshish-Nepal?lang=en"
    ],
    "verification_status": "Official site hard to parse (iframe) but contact appears in site footer; corroborated by NWC service mapping.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-NGO-CMCNEPAL",
    "name": "Centre for Mental Health and Counselling – Nepal (CMC-Nepal) – Office contact",
    "contact_type": "counseling_services",
    "phones": [
      "+977-01-4102037",
      "+977-01-5326041",
      "+977-01-4102038"
    ],
    "hours": "Sunday–Friday 9:00–17:00; Saturday closed.",
    "website": "https://cmcnepal.org.np/contact-us/",
    "languages": "Site in English/Nepali.",
    "service_mode": "In-person counseling + programs; contact by phone/email",
    "cost": "Not specified (services described as affordable/accessible; fees may apply).",
    "coverage": "National NGO (programs/projects; office Kathmandu; some district services listed).",
    "location": "Jitjung Marg, Thapathali, Kathmandu (Bagmati)",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Family conflict",
      "Grief",
      "Bullying/harassment"
    ],
    "blurb": "Psychosocial counselling and mental health support (individuals, couples, families); call to book or ask.",
    "blurbNp": "व्यक्तिगत, दम्पती र पारिवारिक मानसिक स्वास्थ्य counselling; appointment वा सोधपुछका लागि कल गर्नुहोस्।",
    "source_urls": [
      "https://cmcnepal.org.np/contact-us/",
      "https://cmcnepal.org.np/ne/contact-us/"
    ],
    "verification_status": "Primary-source confirmed.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-HOSP-PATAN-SUICIDEHELPLINE",
    "name": "Patan Hospital (PAHS) – Department of Psychiatry Suicide Helpline",
    "contact_type": "hospital_crisis_line",
    "phones": [
      "+977-9813476123"
    ],
    "hours": "Listed as 24-hour suicide helpline (hospital page).",
    "website": "https://web.pahs.edu.np/hospital-services/in-patient-department/department-of-psychiatry/",
    "languages": "Not specified (English site).",
    "service_mode": "Phone crisis support; hospital referral",
    "cost": "Not specified.",
    "coverage": "Primarily Kathmandu valley; can advise/referral broader.",
    "location": "Lagankhel, Lalitpur (Bagmati)",
    "niches": [
      "Low mood/hopelessness",
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Loneliness",
      "Grief",
      "Family conflict"
    ],
    "blurb": "24-hour suicide helpline staffed by Patan Hospital psychiatry team.",
    "blurbNp": "Patan Hospital को psychiatry team ले सञ्चालन गरेको २४ घण्टे suicide helpline।",
    "source_urls": [
      "https://web.pahs.edu.np/hospital-services/in-patient-department/department-of-psychiatry/"
    ],
    "verification_status": "Primary-source confirmed (hospital department page).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-HOSP-PATAN-TELECONSULT",
    "name": "Patan Hospital (PAHS) – Psychiatry Teleconsultation Service",
    "contact_type": "hospital_telehealth",
    "phones": [
      "+977-9828071488"
    ],
    "hours": "Not specified.",
    "website": "https://web.pahs.edu.np/hospital-services/in-patient-department/department-of-psychiatry/",
    "languages": "Not specified.",
    "service_mode": "Tele-consultation",
    "cost": "Not specified.",
    "coverage": "Teleconsultation (potentially national).",
    "location": "Lagankhel, Lalitpur (Bagmati)",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Family conflict",
      "Grief"
    ],
    "blurb": "Teleconsultation access to Patan Hospital psychiatry services (appointments/referrals).",
    "blurbNp": "Patan Hospital को psychiatry सेवामा teleconsultation (appointment/referral)।",
    "source_urls": [
      "https://web.pahs.edu.np/hospital-services/in-patient-department/department-of-psychiatry/"
    ],
    "verification_status": "Primary-source confirmed (same page contains number; URL above may redirect).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-HOSP-PATAN-MAIN",
    "name": "Patan Hospital (PAHS) – Main contact (appointments/switchboard/ambulance)",
    "contact_type": "hospital_service",
    "phones": [
      "+977-1-5422278",
      "+977-1-5422266",
      "+977-9840255888 (Ambulance)"
    ],
    "hours": "Not specified (hospital; OPD varies).",
    "website": "https://web.pahs.edu.np/contact-us/",
    "languages": "Not specified.",
    "service_mode": "In-person; phone for appointments; emergency via ambulance",
    "cost": "Varies (hospital fees).",
    "coverage": "Hospital-based (Lalitpur; serves Nepal-wide referrals).",
    "location": "Lagankhel, Lalitpur (Bagmati)",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Family conflict",
      "Grief"
    ],
    "blurb": "Call Patan Hospital for psychiatry appointments, referrals, or emergency guidance.",
    "blurbNp": "Psychiatry appointment, referral वा आपतकालीन मार्गदर्शनका लागि Patan Hospital मा कल गर्नुहोस्।",
    "costNp": "फरक-फरक (अस्पताल शुल्क)।",
    "source_urls": [
      "https://web.pahs.edu.np/contact-us/"
    ],
    "verification_status": "Primary-source confirmed.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-HOSP-TUTH-MAIN",
    "name": "Tribhuvan University Teaching Hospital (TUTH) – Main contact/OPD ticket hours",
    "contact_type": "hospital_service",
    "phones": [
      "+977-1-4512505",
      "+977-9851405475 (Ambulance)"
    ],
    "hours": "OPD ticket hours: Sun–Thu 7:00–11:00 & 13:00–14:30; Fri 7:00–11:30.",
    "website": "https://tuth.org.np/opd-schedules/",
    "languages": "Not specified (site includes Nepali/English content).",
    "service_mode": "In-person; phone for queries",
    "cost": "Varies (hospital fees).",
    "coverage": "Hospital-based (Kathmandu).",
    "location": "Maharajgunj, Kathmandu (Bagmati)",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Family conflict",
      "Grief"
    ],
    "blurb": "For psychiatry and other services at TUTH, call the hospital and check OPD ticket hours.",
    "blurbNp": "TUTH मा psychiatry र अन्य सेवाका लागि अस्पतालमा कल गर्नुहोस् र OPD ticket समय हेर्नुहोस्।",
    "costNp": "फरक-फरक (अस्पताल शुल्क)।",
    "source_urls": [
      "https://tuth.org.np/opd-schedules/"
    ],
    "verification_status": "Primary-source confirmed.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-PRIVATE-RHYTHM",
    "name": "Rhythm Neuropsychiatry Hospital & Research Center – Private mental health hospital",
    "contact_type": "private_clinic",
    "phones": [
      "01-545-0977",
      "981-014-6559",
      "01-454-7400",
      "985-134-1222"
    ],
    "hours": "Not specified (appointments).",
    "website": "https://rhythmofmymind.com/",
    "languages": "Not specified.",
    "service_mode": "In-person & online psychiatry/psychology; inpatient services",
    "cost": "Paid private services (fees not listed).",
    "coverage": "Kathmandu (multiple locations) + online services",
    "location": "Aloknagar, Minbhawan, Kathmandu and Maharajgunj, Kathmandu",
    "niches": [
      "Anxiety/panic",
      "Sleep problems",
      "Low mood/hopelessness",
      "Exam stress/burnout",
      "Loneliness",
      "Family conflict",
      "Grief"
    ],
    "blurb": "Private psychiatric and psychological care (in-person or online), including therapy and inpatient care.",
    "blurbNp": "Private psychiatric र psychological सेवा (in-person वा online), therapy र inpatient care सहित।",
    "costNp": "सशुल्क private सेवा (शुल्क सूचीबद्ध छैन)।",
    "source_urls": [
      "https://rhythmofmymind.com/"
    ],
    "verification_status": "Primary-source confirmed.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-PRIVATE-NAP",
    "name": "Nepal Academy of Psychology (NAP) – Counseling/psychological services",
    "contact_type": "private_practice",
    "phones": [
      "9841751726",
      "01-5915716"
    ],
    "hours": "Not specified.",
    "website": "https://nap.edu.np/",
    "languages": "Not specified.",
    "service_mode": "In-person and online sessions; therapy and assessments",
    "cost": "Not specified (likely paid).",
    "coverage": "Lalitpur + online",
    "location": "Lalitpur",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Family conflict",
      "Bullying/harassment",
      "Loneliness",
      "Grief"
    ],
    "blurb": "Psychological counseling and assessment services (including teen/adolescent counseling and trauma support).",
    "blurbNp": "Psychological counseling र assessment सेवा (किशोर counseling र trauma support सहित)।",
    "source_urls": [
      "https://nap.edu.np/"
    ],
    "verification_status": "Primary-source confirmed.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-PRIVATE-MHSN",
    "name": "Mental Health Society of Nepal (MHSN) – 24/7 helpline (as stated on site)",
    "contact_type": "counseling_and_referral",
    "phones": [
      "+977-9851223769"
    ],
    "hours": "Advertised as 24/7 on website.",
    "website": "https://www.mhsnepal.org/",
    "languages": "Not specified (site includes English and Nepali content).",
    "service_mode": "Phone helpline; counseling/referrals; online support",
    "cost": "Not specified.",
    "coverage": "Not specified (online/phone-based).",
    "location": "Not specified",
    "niches": [
      "Anxiety/panic",
      "Exam stress/burnout",
      "Sleep problems",
      "Low mood/hopelessness",
      "Loneliness",
      "Family conflict",
      "Grief"
    ],
    "blurb": "If you need someone to talk to at any time, MHSN advertises a 24/7 helpline.",
    "blurbNp": "जुनसुकै बेला कसैसँग कुरा गर्न चाहनुहुन्छ भने MHSN को २४/७ helpline उपलब्ध छ।",
    "source_urls": [
      "https://www.mhsnepal.org/"
    ],
    "verification_status": "Organization self-claim; not government/major NGO—treat as needs higher-frequency verification.",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-PROF-NMC",
    "name": "Nepal Medical Council (NMC) – verify doctor registration/credentials",
    "contact_type": "regulator",
    "phones": [
      "+977-1-4371954",
      "+977-1-4377164"
    ],
    "hours": "Office hours (not specified on this page).",
    "website": "https://www.nmc.org.np/executive",
    "languages": "Nepali/English site content.",
    "service_mode": "Regulatory body; online provider search; email/phone",
    "cost": "N/A",
    "coverage": "National",
    "location": "Bansbari, Kathmandu",
    "niches": [
      "All (verification / complaints)"
    ],
    "blurb": "Use NMC to verify a psychiatrist/doctor’s registration before booking care.",
    "blurbNp": "सेवा लिनुअघि psychiatrist/doctor को registration प्रमाणित गर्न NMC प्रयोग गर्नुहोस्।",
    "source_urls": [
      "https://www.nmc.org.np/executive"
    ],
    "verification_status": "Primary-source confirmed (government regulator).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-PROF-NHPC",
    "name": "Nepal Health Professional Council (NHPC) – verify clinical psychologists and other health professionals",
    "contact_type": "regulator",
    "phones": [
      "+977-1-4375079",
      "+977-1-4373118"
    ],
    "hours": "Not specified on this page.",
    "website": "https://nhpc.gov.np/",
    "languages": "Nepali/English site content.",
    "service_mode": "Regulatory body; registration oversight; email/phone",
    "cost": "N/A",
    "coverage": "National",
    "location": "Bansbari, Kathmandu",
    "niches": [
      "All (verification / complaints)"
    ],
    "blurb": "Use NHPC to confirm whether a clinical psychologist/counselor is formally registered.",
    "blurbNp": "Clinical psychologist/counselor औपचारिक रूपमा दर्ता भएको छ कि छैन भनेर NHPC बाट पुष्टि गर्नुहोस्।",
    "source_urls": [
      "https://nhpc.gov.np/"
    ],
    "verification_status": "Primary-source confirmed (government regulator).",
    "last_checked": "2026-02-25"
  },
  {
    "id": "NP-PROF-PAN",
    "name": "Psychiatrists' Association of Nepal (PAN) – professional body (directory and secretariat contact)",
    "contact_type": "professional_body",
    "phones": [],
    "hours": "Not specified.",
    "website": "https://psychiatrynepal.org.np/",
    "languages": "English/Nepali site content.",
    "service_mode": "Professional association; directory, publications",
    "cost": "N/A",
    "coverage": "National (members across provinces)",
    "location": "Secretariat in Kathmandu",
    "niches": [
      "All (provider directory)"
    ],
    "blurb": "Use PAN's directory to locate psychiatrists and verify specialization; contact the secretariat for guidance.",
    "blurbNp": "Psychiatrist खोज्न र specialization प्रमाणित गर्न PAN को directory प्रयोग गर्नुहोस्; मार्गदर्शनका लागि secretariat मा सम्पर्क गर्नुहोस्।",
    "source_urls": [
      "https://psychiatrynepal.org.np/doctor-list/",
      "https://psychiatrynepal.org.np/wp-content/uploads/2024/03/fourthnotice080-11-18.pdf"
    ],
    "verification_status": "Primary-source confirmed; directory includes personal contact numbers—do not republish without consent.",
    "last_checked": "2026-02-25"
  }
];