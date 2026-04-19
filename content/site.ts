// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION — edit this file to update practice info across the site
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: "ParikhHealth",
  tagline: "Exceptional Primary Care & Sports Medicine",
  description:
    "ParikhHealth is a premier primary care and sports medicine practice in Sunnyvale, CA — delivering compassionate, evidence-based medicine for every stage of life.",
  url: "https://www.parikhhealth.com",
  phone: {
    appointments: "408-384-4898",
    general: "408-266-3100",
    fax: "408-608-1961",
  },
  email: "info@parikhhealth.com",
  address: {
    street: "1299 Oakmead Parkway",
    city: "Sunnyvale",
    state: "CA",
    zip: "94085",
    full: "1299 Oakmead Parkway, Sunnyvale, CA 94085",
    mapsUrl:
      "https://maps.google.com/?q=1299+Oakmead+Parkway+Sunnyvale+CA+94085",
  },
  hours: [
    { day: "Monday – Friday", hours: "9:00 AM – 4:00 PM" },
    { day: "Saturday – Sunday", hours: "Closed" },
  ],
  // Appointment booking — set provider to "zocdoc" | "calendly" | "custom"
  booking: {
    provider: "zocdoc" as "zocdoc" | "calendly" | "custom",
    zocdocUrl: "https://www.zocdoc.com/practice/parikhhealth",
    calendlyUrl: "", // fill in if switching to Calendly
  },
  social: {
    google: "https://g.page/parikhhealth",
    instagram: "",
    facebook: "",
    linkedin: "",
  },
  rating: { score: 4.78, count: 201, source: "Google" },
};

export const TEAM = [
  {
    id: "neesheet-parikh",
    name: "Neesheet Parikh",
    credentials: "DO",
    title: "Physician — Family Medicine & Sports Medicine",
    bio: "Dr. Parikh is a board-certified family medicine and sports medicine physician with a passion for keeping patients active and healthy at every stage of life. He completed his osteopathic medical training and brings a whole-body, integrative approach to primary care.",
    image: "/team/dr-parikh.jpg",
    specialties: ["Family Medicine", "Sports Medicine", "Osteopathic Manipulative Therapy", "Concierge Medicine"],
    acceptingNewPatients: true,
  },
  {
    id: "kinnari-shah",
    name: "Kinnari Shah",
    credentials: "PA-C",
    title: "Physician Assistant",
    bio: "Kinnari Shah is a certified physician assistant who delivers thorough, patient-centered primary care. She partners closely with patients to manage chronic conditions, preventive health, and acute illnesses with warmth and precision.",
    image: "/team/kinnari-shah.jpg",
    specialties: ["Primary Care", "Preventive Medicine", "Chronic Disease Management"],
    acceptingNewPatients: true,
  },
  {
    id: "miral-patel",
    name: "Miral Patel",
    credentials: "PT",
    title: "Physical Therapist",
    bio: "Miral Patel is a licensed physical therapist specializing in sports rehabilitation and musculoskeletal recovery. Utilizing cutting-edge tools including Fit3D body scanning, she designs individualized programs that get patients back to the activities they love.",
    image: "/team/miral-patel.jpg",
    specialties: ["Sports Rehabilitation", "Musculoskeletal Therapy", "Fit3D Body Scanning", "Post-Surgical Recovery"],
    acceptingNewPatients: true,
  },
];

export const SERVICES = [
  {
    id: "primary-care",
    name: "Primary Care",
    shortDesc: "Comprehensive, relationship-based care for every stage of life.",
    description:
      "Our primary care team serves as your long-term health partner — managing preventive screenings, chronic conditions, acute illnesses, and coordinating specialist referrals when needed. We prioritize continuity of care so we can truly know you, not just your chart.",
    icon: "stethoscope",
    highlights: [
      "Annual wellness exams",
      "Chronic disease management (diabetes, hypertension, cholesterol)",
      "Preventive screenings & immunizations",
      "Sick visits & acute care",
      "Laboratory & diagnostic services",
    ],
    image: "/services/primary-care.jpg",
  },
  {
    id: "sports-medicine",
    name: "Sports Medicine",
    shortDesc: "Expert care for athletes and active individuals.",
    description:
      "From weekend warriors to competitive athletes, our sports medicine program focuses on injury prevention, rapid recovery, and performance optimization. Dr. Parikh applies both osteopathic and evidence-based sports medicine principles to get you back in the game.",
    icon: "activity",
    highlights: [
      "Sports injury evaluation & treatment",
      "Musculoskeletal injections (cortisone, PRP)",
      "Pre-participation physicals",
      "Return-to-sport clearance",
      "Overuse injury management",
    ],
    image: "/services/sports-medicine.jpg",
  },
  {
    id: "physical-therapy",
    name: "Physical Therapy",
    shortDesc: "Personalized rehabilitation with state-of-the-art technology.",
    description:
      "Our in-house physical therapy program, led by Miral Patel PT, combines manual therapy, therapeutic exercise, and the Fit3D body scanner to precisely track your progress. Having PT in-house with your medical team means seamlessly coordinated care.",
    icon: "dumbbell",
    highlights: [
      "Orthopedic & sports rehabilitation",
      "Fit3D body composition scanning",
      "Post-surgical recovery",
      "Balance & gait training",
      "Manual therapy & soft tissue techniques",
    ],
    image: "/services/physical-therapy.jpg",
  },
  {
    id: "cosmetics",
    name: "Cosmetic Services",
    shortDesc: "Medical-grade aesthetics with a physician's expertise.",
    description:
      "Looking your best supports feeling your best. Our cosmetic services are performed under physician oversight, ensuring safety and natural-looking results — no med-spa guesswork.",
    icon: "sparkles",
    highlights: [
      "Botox & neurotoxin treatments",
      "Dermal fillers",
      "Skin rejuvenation",
      "Medical-grade skincare",
    ],
    image: "/services/cosmetics.jpg",
  },
  {
    id: "concierge-medicine",
    name: "Concierge Medicine",
    shortDesc: "Unhurried care, direct access, and a true medical partnership.",
    description:
      "For patients who want more — more time with their doctor, same-day access, and a physician who knows every detail of their health — our concierge program offers a premium, membership-based relationship with Dr. Parikh.",
    icon: "crown",
    highlights: [
      "Same-day & next-day appointments",
      "Extended visit times",
      "Direct phone & text access to your physician",
      "Annual comprehensive physical",
      "Care coordination for specialists",
    ],
    image: "/services/concierge.jpg",
  },
  {
    id: "athlete-wellness",
    name: "Athlete Wellness",
    shortDesc: "Membership-based sports medicine for athletes of every age and level.",
    description:
      "Athlete Wellness is our membership-based sports medicine program built for anyone who plays, competes, trains, or simply stays active — from youth athletes to adults, weekend players to elite competitors. The focus is simple: keep you healthy, prevent injury, and get you back faster when something does go wrong. You get direct access to Dr. Parikh, same-day and next-day appointments, and a physician who understands how important your sport is to you.\n\nNeed primary care too? We can bundle it in at an upgraded membership level. Want to add in-house physical therapy or lab work? Those are available à la carte. If you're a parent looking for this level of care for your child with a full primary care relationship included, our Concierge Medicine plan is the right fit.",
    icon: "zap",
    highlights: [
      "Same-day & next-day appointments for injuries and illness",
      "Direct cell phone access to Dr. Parikh",
      "Injury prevention assessments & personalized guidance",
      "Recovery planning & return-to-sport clearance",
      "For all ages — youth through adult athletes",
      "All sports and activity levels welcome",
      "Primary care add-on available at upgraded tier",
      "Physical therapy & labs available à la carte",
    ],
    image: "/services/athlete-wellness.jpg",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Dr. Parikh takes the time to actually listen. I never feel rushed, and he always explains everything clearly. The best primary care I've ever had.",
    author: "Sarah M.",
    detail: "Patient since 2019",
    rating: 5,
  },
  {
    quote:
      "After my knee surgery, Miral got me back to running in 10 weeks. The Fit3D scanner helped us track every bit of progress — I was blown away.",
    author: "James T.",
    detail: "Physical Therapy Patient",
    rating: 5,
  },
  {
    quote:
      "Kinnari is incredibly thorough and genuinely caring. She caught something two other doctors missed. I trust this team completely.",
    author: "Priya K.",
    detail: "Patient since 2021",
    rating: 5,
  },
  {
    quote:
      "The concierge program is worth every penny. Same-day appointments, Dr. Parikh's personal number — I feel like I actually have a real doctor again.",
    author: "David L.",
    detail: "Concierge Member",
    rating: 5,
  },
  {
    quote:
      "I came in with a sports injury that had been bothering me for months. Between Dr. Parikh's OMT and Miral's PT, I was back on the field in six weeks.",
    author: "Marcus W.",
    detail: "Sports Medicine Patient",
    rating: 5,
  },
];
