// 4 verschiedene User-Profile mit unterschiedlichen Gesundheitsdaten

export const usersData = {
  // 1. Luca Frei - Junger Mann, 20 Jahre, sportlich
  'luca-frei': {
    id: 'luca-frei',
    name: "Luca Frei",
    profileImage: "/profiles/luca-frei.png",
    birthDate: "12.03.2004",
    gender: "Männlich",
    address: {
      street: "Sportstrasse 45",
      city: "8050 Zürich",
      country: "Schweiz"
    },
    email: "luca.frei@example.ch",
    phone: "+41 78 234 56 78",
    ahvNumber: "756.9012.3456.78",
    bloodType: "O+",
    height: "185 cm",
    weight: "78 kg",

    insuranceData: {
      healthInsurance: "Swica Versicherung",
      insuranceNumber: "90012345679",
      insuranceType: "Grundversicherung",
      additionalInsurances: ["Unfallversicherung"],
      validSince: "01.01.2022"
    },

    primaryDoctor: {
      name: "Dr. med. Andreas Keller",
      specialty: "Allgemeine Medizin",
      phone: "+41 44 456 78 90",
      address: "Universitätsstrasse 88, 8050 Zürich",
      email: "praxis@keller-med.ch"
    },

    emergencyContact: {
      name: "Maria Frei",
      relationship: "Mutter",
      phone: "+41 79 345 67 89",
      alternativePhone: "+41 44 876 54 32",
      email: "maria.frei@example.ch"
    },

    allergies: [],
    chronicConditions: [],

    criticalValues: [
      { name: "Blutdruck", value: "118/75 mmHg", status: "good", reference: "< 140/90 mmHg", date: "20.11.2024" },
      { name: "Cholesterin", value: "165 mg/dl", status: "good", reference: "< 200 mg/dl", date: "15.10.2024" }
    ],

    currentMedications: [],

    upcomingAppointments: [
      { type: "Sportmedizinische Untersuchung", doctor: "Dr. Keller", date: "15.12.2024", time: "14:00" }
    ],

    healthGoals: [
      { goal: "Muskelmasse auf 80 kg erhöhen", status: "in_progress", progress: 85 },
      { goal: "Marathon unter 3:30h laufen", status: "in_progress", progress: 60 }
    ]
  },

  // 2. Nina Baumann - Schwangere Frau, 30 Jahre
  'nina-baumann': {
    id: 'nina-baumann',
    name: "Nina Baumann",
    profileImage: "/profiles/nina-baumann.png",
    birthDate: "22.08.1994",
    gender: "Weiblich",
    address: {
      street: "Familienweg 12",
      city: "8001 Zürich",
      country: "Schweiz"
    },
    email: "nina.baumann@example.ch",
    phone: "+41 79 876 54 32",
    ahvNumber: "756.5678.9012.34",
    bloodType: "A+",
    height: "168 cm",
    weight: "72 kg",

    insuranceData: {
      healthInsurance: "Helsana Versicherung",
      insuranceNumber: "70056781234",
      insuranceType: "Grundversicherung + Halbprivat",
      additionalInsurances: ["Mutterschaftsversicherung", "Zahnversicherung"],
      validSince: "01.06.2018"
    },

    primaryDoctor: {
      name: "Dr. med. Christine Weber",
      specialty: "Gynäkologie & Geburtshilfe FMH",
      phone: "+41 44 321 45 67",
      address: "Frauenstrasse 23, 8001 Zürich",
      email: "praxis@weber-gyn.ch"
    },

    emergencyContact: {
      name: "Thomas Baumann",
      relationship: "Ehemann",
      phone: "+41 79 123 98 76",
      alternativePhone: "+41 44 234 56 78",
      email: "thomas.baumann@example.ch"
    },

    allergies: ["Latex"],
    chronicConditions: ["Schwangerschaft (28. Woche)"],

    criticalValues: [
      { name: "Blutdruck", value: "125/80 mmHg", status: "good", reference: "< 140/90 mmHg", date: "25.11.2024" },
      { name: "Eisen", value: "11.2 mg/dl", status: "good", reference: "12-16 mg/dl", date: "20.11.2024" },
      { name: "Gewichtszunahme", value: "+12 kg", status: "good", reference: "11-16 kg", date: "25.11.2024" }
    ],

    currentMedications: [
      { name: "Elevit", dosage: "1 Tablette", frequency: "1x täglich", indication: "Schwangerschaftsvitamine" },
      { name: "Eisen", dosage: "80mg", frequency: "1x täglich", indication: "Eisenmangel-Prophylaxe" }
    ],

    upcomingAppointments: [
      { type: "Schwangerschaftskontrolle", doctor: "Dr. Weber", date: "02.12.2024", time: "10:00" },
      { type: "Ultraschall", doctor: "Dr. Weber", date: "16.12.2024", time: "14:30" },
      { type: "Geburtsvorbereitungskurs", doctor: "Hebamme Lisa", date: "10.12.2024", time: "18:00" }
    ],

    healthGoals: [
      { goal: "Gesunde Schwangerschaft bis zur Geburt", status: "in_progress", progress: 70 },
      { goal: "Tägliche Bewegung 30 Min", status: "in_progress", progress: 80 },
      { goal: "Ausgewogene Ernährung", status: "in_progress", progress: 90 }
    ]
  },

  // 3. Markus Huber - Eleganter Mann, 50 Jahre, Geschäftsmann
  'markus-huber': {
    id: 'markus-huber',
    name: "Markus Huber",
    profileImage: "/profiles/markus-huber.png",
    birthDate: "15.04.1974",
    gender: "Männlich",
    address: {
      street: "Seestrasse 88",
      city: "8002 Zürich",
      country: "Schweiz"
    },
    email: "markus.huber@example.ch",
    phone: "+41 79 555 12 34",
    ahvNumber: "756.3456.7890.12",
    bloodType: "B+",
    height: "182 cm",
    weight: "88 kg",

    insuranceData: {
      healthInsurance: "CSS Versicherung",
      insuranceNumber: "80045678901",
      insuranceType: "Grundversicherung + Privat",
      additionalInsurances: ["Zahnversicherung", "Auslandversicherung", "Zusatzversicherung"],
      validSince: "01.01.2010"
    },

    primaryDoctor: {
      name: "Prof. Dr. med. Peter Schneider",
      specialty: "Innere Medizin & Kardiologie FMH",
      phone: "+41 44 789 01 23",
      address: "Paradeplatz 1, 8002 Zürich",
      email: "sekretariat@schneider-kardio.ch"
    },

    emergencyContact: {
      name: "Sandra Huber",
      relationship: "Ehefrau",
      phone: "+41 79 444 33 22",
      alternativePhone: "+41 44 555 66 77",
      email: "sandra.huber@example.ch"
    },

    allergies: [],
    chronicConditions: ["Arterielle Hypertonie", "Hypercholesterinämie"],

    criticalValues: [
      { name: "Blutdruck", value: "138/88 mmHg", status: "elevated", reference: "< 140/90 mmHg", date: "22.11.2024" },
      { name: "LDL-Cholesterin", value: "148 mg/dl", status: "warning", reference: "< 116 mg/dl", date: "15.11.2024" },
      { name: "Triglyceride", value: "165 mg/dl", status: "elevated", reference: "< 150 mg/dl", date: "15.11.2024" }
    ],

    currentMedications: [
      { name: "Amlodipin", dosage: "5mg", frequency: "1x täglich", indication: "Bluthochdruck" },
      { name: "Atorvastatin", dosage: "40mg", frequency: "1x abends", indication: "Cholesterinsenker" },
      { name: "Aspirin Cardio", dosage: "100mg", frequency: "1x täglich", indication: "Thromboseprophylaxe" }
    ],

    upcomingAppointments: [
      { type: "Kardiologie-Kontrolle", doctor: "Prof. Dr. Schneider", date: "12.12.2024", time: "11:00" },
      { type: "Belastungs-EKG", doctor: "Prof. Dr. Schneider", date: "18.12.2024", time: "09:00" }
    ],

    healthGoals: [
      { goal: "Blutdruck unter 130/80 mmHg", status: "in_progress", progress: 55 },
      { goal: "LDL-Cholesterin unter 116 mg/dl", status: "in_progress", progress: 60 },
      { goal: "Gewicht reduzieren auf 82 kg", status: "in_progress", progress: 40 }
    ]
  },

  // 4. Elisa Meier - Ältere Dame, 90 Jahre, sympathisch
  'elisa-meier': {
    id: 'elisa-meier',
    name: "Elisa Meier",
    profileImage: "/profiles/elisa-meier.png",
    birthDate: "08.12.1934",
    gender: "Weiblich",
    address: {
      street: "Altersheim Sonnenhof, Zimmer 23",
      city: "8003 Zürich",
      country: "Schweiz"
    },
    email: "elisa.meier@sonnenhof.ch",
    phone: "+41 44 888 99 00",
    ahvNumber: "756.1234.5678.90",
    bloodType: "A-",
    height: "158 cm",
    weight: "58 kg",

    insuranceData: {
      healthInsurance: "Swica Versicherung",
      insuranceNumber: "60012345678",
      insuranceType: "Grundversicherung + Pflegeversicherung",
      additionalInsurances: ["Pflegezusatzversicherung"],
      validSince: "01.03.1960"
    },

    primaryDoctor: {
      name: "Dr. med. Julia Zimmermann",
      specialty: "Geriatrie & Innere Medizin FMH",
      phone: "+41 44 777 66 55",
      address: "Altersmedizin Zentrum, Seestrasse 45, 8003 Zürich",
      email: "praxis@zimmermann-geriatrie.ch"
    },

    emergencyContact: {
      name: "Robert Meier",
      relationship: "Sohn",
      phone: "+41 79 666 55 44",
      alternativePhone: "+41 44 333 22 11",
      email: "robert.meier@example.ch"
    },

    allergies: ["Penicillin", "Jod"],
    chronicConditions: ["Arterielle Hypertonie", "Diabetes mellitus Typ 2", "Osteoporose", "Chronische Herzinsuffizienz", "Milde Demenz"],

    criticalValues: [
      { name: "HbA1c (Langzeitzucker)", value: "7.8%", status: "warning", reference: "< 7.5%", date: "18.11.2024" },
      { name: "Blutdruck", value: "145/85 mmHg", status: "elevated", reference: "< 140/90 mmHg", date: "24.11.2024" },
      { name: "Nierenfunktion (eGFR)", value: "42 ml/min", status: "warning", reference: "> 60 ml/min", date: "18.11.2024" },
      { name: "Knochendichte T-Score", value: "-2.8", status: "warning", reference: "> -2.5", date: "10.09.2024" }
    ],

    currentMedications: [
      { name: "Metformin", dosage: "500mg", frequency: "2x täglich", indication: "Diabetes Typ 2" },
      { name: "Ramipril", dosage: "5mg", frequency: "1x morgens", indication: "Bluthochdruck" },
      { name: "Furosemid", dosage: "40mg", frequency: "1x morgens", indication: "Herzinsuffizienz" },
      { name: "Calcium + Vitamin D", dosage: "1 Tablette", frequency: "1x täglich", indication: "Osteoporose" },
      { name: "Bisoprolol", dosage: "2.5mg", frequency: "1x täglich", indication: "Herzinsuffizienz" },
      { name: "Pantoprazol", dosage: "20mg", frequency: "1x morgens", indication: "Magenschutz" }
    ],

    upcomingAppointments: [
      { type: "Geriatrie-Kontrolle", doctor: "Dr. Zimmermann", date: "28.11.2024", time: "10:00" },
      { type: "Diabetes-Beratung", doctor: "Diabetesberaterin", date: "05.12.2024", time: "14:00" },
      { type: "Physiotherapie", doctor: "Therapeut Müller", date: "29.11.2024", time: "15:00" }
    ],

    healthGoals: [
      { goal: "HbA1c unter 7.5% halten", status: "in_progress", progress: 65 },
      { goal: "Mobilität erhalten - täglich spazieren", status: "in_progress", progress: 75 },
      { goal: "Sturzprävention", status: "in_progress", progress: 80 }
    ]
  }
};
