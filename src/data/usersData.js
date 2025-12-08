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
    ],

    // Dokumente & Fälle
    documents: [
      { id: 'lf1', title: "Sportmedizinische Untersuchung", category: "Vorsorge", date: "2024-11-20", type: "Arztbrief", status: "aktuell", thumbnail: "checkup", tags: ["Sport", "Vorsorge"] },
      { id: 'lf2', title: "Blutbild Routine-Check", category: "Labor", date: "2024-10-15", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Blut"] },
      { id: 'lf3', title: "Knie-MRT nach Fussballverletzung", category: "Bildgebung", date: "2024-09-05", type: "Radiologie", status: "aktuell", thumbnail: "mri", tags: ["Bildgebung", "Knie", "Sport"] },
      { id: 'lf4', title: "Physiotherapie-Bericht", category: "Diagnosen", date: "2024-09-20", type: "Therapiebericht", status: "aktuell", thumbnail: "report", tags: ["Physiotherapie"] },
      { id: 'lf5', title: "Tetanus-Impfung", category: "Impfungen", date: "2024-08-10", type: "Impfausweis", status: "aktuell", thumbnail: "vaccine", tags: ["Impfung"] }
    ],

    cases: [
      { id: 'lfc1', title: "Meniskusverletzung links", status: "laufend", startDate: "2024-09-01", category: "Orthopädie", doctor: "Dr. med. Andreas Keller" },
      { id: 'lfc2', title: "Routine Gesundheitscheck", status: "abgeschlossen", startDate: "2024-10-15", endDate: "2024-11-20", category: "Vorsorge", doctor: "Dr. med. Andreas Keller" }
    ],

    // Visualisierungen - Gesunde junge Person
    healthData: {
      labTrends: {
        hba1c: [],
        cholesterol: [
          { date: 'Okt 24', ldl: 165, hdl: 58, reference: 116 }
        ],
        bloodPressure: [
          { date: 'Aug 24', systolic: 115, diastolic: 72, refSys: 140, refDia: 90 },
          { date: 'Sep 24', systolic: 118, diastolic: 75, refSys: 140, refDia: 90 },
          { date: 'Okt 24', systolic: 116, diastolic: 73, refSys: 140, refDia: 90 },
          { date: 'Nov 24', systolic: 118, diastolic: 75, refSys: 140, refDia: 90 }
        ]
      },
      currentVitals: [
        { name: 'Blutdruck Sys', value: 118, max: 180, reference: 140, unit: 'mmHg', status: 'good' },
        { name: 'Blutdruck Dia', value: 75, max: 120, reference: 90, unit: 'mmHg', status: 'good' },
        { name: 'Cholesterin', value: 165, max: 250, reference: 200, unit: 'mg/dl', status: 'good' },
        { name: 'Puls', value: 68, max: 100, reference: 80, unit: 'bpm', status: 'good' }
      ],
      medicationTimeline: [],
      vaccinations: [
        { name: 'Tetanus', lastDate: '2024-08-10', nextDue: '2034-08-10', status: 'aktuell', daysUntilDue: 3545 },
        { name: 'FSME', lastDate: '2023-05-15', nextDue: '2026-05-15', status: 'aktuell', daysUntilDue: 525 },
        { name: 'COVID-19', lastDate: '2024-01-20', nextDue: '2025-01-20', status: 'aktuell', daysUntilDue: 44 },
        { name: 'Grippe', lastDate: null, nextDue: '2025-10-01', status: 'empfohlen', daysUntilDue: 298 }
      ]
    },

    // Freigaben
    accessGrants: [
      {
        id: 'lg1',
        name: 'Dr. med. Andreas Keller',
        specialty: 'Allgemeine Medizin',
        institution: 'Hausarztpraxis Zürich',
        phone: '+41 44 456 78 90',
        isActive: true,
        grantedDate: '2022-01-15',
        expiryDate: null,
        accessLevel: 'Vollzugriff',
        cases: ['Alle Fälle'],
        documentTypes: ['Laborberichte', 'Arztbriefe', 'Rezepte', 'Bildgebung']
      },
      {
        id: 'lg2',
        name: 'Dr. med. Thomas Sport',
        specialty: 'Sportmedizin FMH',
        institution: 'Sportmedizin Zürich',
        phone: '+41 44 555 11 22',
        isActive: true,
        grantedDate: '2024-09-01',
        expiryDate: '2025-09-01',
        accessLevel: 'Eingeschränkt',
        cases: ['Meniskusverletzung links'],
        documentTypes: ['Bildgebung', 'Arztbriefe', 'Physiotherapie']
      }
    ],

    doctorsFromDocuments: [
      { name: 'Dr. med. Andreas Keller', specialty: 'Allgemeinmedizin', hasAccess: true },
      { name: 'Radiologie Zürich Nord', specialty: 'Radiologie', hasAccess: false },
      { name: 'Physio Aktiv', specialty: 'Physiotherapie', hasAccess: false }
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
    ],

    // Dokumente & Fälle
    documents: [
      { id: 'nb1', title: "Ultraschall 28. SSW", category: "Bildgebung", date: "2024-11-25", type: "Ultraschall", status: "aktuell", thumbnail: "mri", tags: ["Schwangerschaft", "Ultraschall"] },
      { id: 'nb2', title: "Blutzucker-Test (Glucose-Toleranztest)", category: "Labor", date: "2024-11-10", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Schwangerschaft"] },
      { id: 'nb3', title: "Schwangerschaftskontrolle - Arztbrief", category: "Diagnosen", date: "2024-11-20", type: "Arztbrief", status: "aktuell", thumbnail: "report", tags: ["Schwangerschaft"] },
      { id: 'nb4', title: "Eisenwert-Kontrolle", category: "Labor", date: "2024-10-20", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Eisen"] },
      { id: 'nb5', title: "Mutterpass", category: "Vorsorge", date: "2024-05-01", type: "Dokument", status: "aktuell", thumbnail: "report", tags: ["Schwangerschaft", "Vorsorge"] },
      { id: 'nb6', title: "Medikationsplan Schwangerschaft", category: "Medikamente", date: "2024-05-15", type: "Medikation", status: "aktuell", thumbnail: "medication", tags: ["Medikamente"] },
      { id: 'nb7', title: "Toxoplasmose-Test", category: "Labor", date: "2024-06-10", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor"] }
    ],

    cases: [
      { id: 'nbc1', title: "Schwangerschaftsbegleitung", status: "laufend", startDate: "2024-05-01", category: "Gynäkologie", doctor: "Dr. med. Christine Weber" },
      { id: 'nbc2', title: "Eisenmangel-Behandlung", status: "laufend", startDate: "2024-06-15", category: "Allgemeinmedizin", doctor: "Dr. med. Christine Weber" }
    ],

    // Visualisierungen - Schwangerschaftsspezifisch
    healthData: {
      labTrends: {
        hba1c: [],
        cholesterol: [],
        bloodPressure: [
          { date: 'Mai 24', systolic: 120, diastolic: 78, refSys: 140, refDia: 90 },
          { date: 'Jun 24', systolic: 122, diastolic: 79, refSys: 140, refDia: 90 },
          { date: 'Jul 24', systolic: 123, diastolic: 80, refSys: 140, refDia: 90 },
          { date: 'Aug 24', systolic: 124, diastolic: 81, refSys: 140, refDia: 90 },
          { date: 'Sep 24', systolic: 125, diastolic: 80, refSys: 140, refDia: 90 },
          { date: 'Okt 24', systolic: 126, diastolic: 81, refSys: 140, refDia: 90 },
          { date: 'Nov 24', systolic: 125, diastolic: 80, refSys: 140, refDia: 90 }
        ],
        iron: [
          { date: 'Mai 24', value: 10.5, reference: 12 },
          { date: 'Jun 24', value: 10.8, reference: 12 },
          { date: 'Jul 24', value: 11.0, reference: 12 },
          { date: 'Aug 24', value: 11.3, reference: 12 },
          { date: 'Sep 24', value: 11.5, reference: 12 },
          { date: 'Okt 24', value: 11.7, reference: 12 },
          { date: 'Nov 24', value: 11.2, reference: 12 }
        ],
        weight: [
          { date: 'Mai 24', value: 60, reference: 60 },
          { date: 'Jun 24', value: 62, reference: 60 },
          { date: 'Jul 24', value: 64, reference: 60 },
          { date: 'Aug 24', value: 66, reference: 60 },
          { date: 'Sep 24', value: 68, reference: 60 },
          { date: 'Okt 24', value: 70, reference: 60 },
          { date: 'Nov 24', value: 72, reference: 60 }
        ]
      },
      currentVitals: [
        { name: 'Blutdruck Sys', value: 125, max: 180, reference: 140, unit: 'mmHg', status: 'good' },
        { name: 'Blutdruck Dia', value: 80, max: 120, reference: 90, unit: 'mmHg', status: 'good' },
        { name: 'Eisen', value: 11.2, max: 16, reference: 12, unit: 'mg/dl', status: 'elevated' },
        { name: 'Gewicht', value: 72, max: 100, reference: 76, unit: 'kg', status: 'good' }
      ],
      medicationTimeline: [
        {
          name: 'Elevit (Schwangerschaftsvitamine)',
          periods: [
            { start: '2024-05', end: '2024-12', dosage: '1 Tablette täglich', active: true }
          ]
        },
        {
          name: 'Eisen 80mg',
          periods: [
            { start: '2024-06', end: '2024-12', dosage: '1x täglich', active: true }
          ]
        }
      ],
      vaccinations: [
        { name: 'Tetanus', lastDate: '2022-03-10', nextDue: '2032-03-10', status: 'aktuell', daysUntilDue: 2646 },
        { name: 'Pertussis (Keuchhusten)', lastDate: '2024-07-01', nextDue: '2034-07-01', status: 'aktuell', daysUntilDue: 3498 },
        { name: 'Grippe', lastDate: '2024-10-15', nextDue: '2025-10-15', status: 'aktuell', daysUntilDue: 312 },
        { name: 'COVID-19', lastDate: '2024-02-10', nextDue: '2025-02-10', status: 'aktuell', daysUntilDue: 65 }
      ]
    },

    // Freigaben
    accessGrants: [
      {
        id: 'ng1',
        name: 'Dr. med. Christine Weber',
        specialty: 'Gynäkologie & Geburtshilfe FMH',
        institution: 'Frauenpraxis Zürich',
        phone: '+41 44 321 45 67',
        isActive: true,
        grantedDate: '2024-05-01',
        expiryDate: '2025-05-01',
        accessLevel: 'Vollzugriff',
        cases: ['Alle Fälle'],
        documentTypes: ['Laborberichte', 'Arztbriefe', 'Ultraschall', 'Rezepte']
      },
      {
        id: 'ng2',
        name: 'Hebamme Lisa Müller',
        specialty: 'Hebamme',
        institution: 'Hebammenpraxis Zürich',
        phone: '+41 79 888 77 66',
        isActive: true,
        grantedDate: '2024-08-01',
        expiryDate: '2025-02-28',
        accessLevel: 'Eingeschränkt',
        cases: ['Schwangerschaftsbegleitung'],
        documentTypes: ['Arztbriefe', 'Ultraschall', 'Mutterpass']
      },
      {
        id: 'ng3',
        name: 'Spital Zürich - Geburtenabteilung',
        specialty: 'Geburtshilfe',
        institution: 'Universitätsspital Zürich',
        phone: '+41 44 255 11 11',
        isActive: true,
        grantedDate: '2024-09-15',
        expiryDate: '2025-03-31',
        accessLevel: 'Vollzugriff',
        cases: ['Schwangerschaftsbegleitung'],
        documentTypes: ['Alle']
      }
    ],

    doctorsFromDocuments: [
      { name: 'Dr. med. Christine Weber', specialty: 'Gynäkologie', hasAccess: true },
      { name: 'Hebamme Lisa Müller', specialty: 'Hebamme', hasAccess: true },
      { name: 'Labor Zürich Zentrum', specialty: 'Labormedizin', hasAccess: false }
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
    ],

    // Dokumente & Fälle
    documents: [
      { id: 'mh1', title: "Belastungs-EKG", category: "Bildgebung", date: "2024-11-22", type: "Kardiologie", status: "aktuell", thumbnail: "heart", tags: ["Herz", "EKG"] },
      { id: 'mh2', title: "Cholesterin-Kontrolle", category: "Labor", date: "2024-11-15", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Cholesterin"] },
      { id: 'mh3', title: "24h-Blutdruckmessung Auswertung", category: "Labor", date: "2024-11-10", type: "Laborbericht", status: "aktuell", thumbnail: "bp", tags: ["Blutdruck"] },
      { id: 'mh4', title: "Kardiologie-Bericht", category: "Diagnosen", date: "2024-10-05", type: "Arztbrief", status: "aktuell", thumbnail: "report", tags: ["Kardiologie"] },
      { id: 'mh5', title: "Medikationsplan - Bluthochdruck", category: "Medikamente", date: "2024-09-20", type: "Medikation", status: "aktuell", thumbnail: "medication", tags: ["Medikamente"] },
      { id: 'mh6', title: "Herzecho-Untersuchung", category: "Bildgebung", date: "2024-08-15", type: "Kardiologie", status: "aktuell", thumbnail: "heart", tags: ["Herz", "Echo"] },
      { id: 'mh7', title: "Nierenfunktion-Test", category: "Labor", date: "2024-07-30", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Nieren"] },
      { id: 'mh8', title: "Vorsorgeuntersuchung 50+", category: "Vorsorge", date: "2024-04-10", type: "Check-up", status: "vergangen", thumbnail: "checkup", tags: ["Vorsorge"] },
      { id: 'mh9', title: "Grippe-Impfung", category: "Impfungen", date: "2024-10-12", type: "Impfausweis", status: "aktuell", thumbnail: "vaccine", tags: ["Impfung"] }
    ],

    cases: [
      { id: 'mhc1', title: "Arterielle Hypertonie", status: "laufend", startDate: "2020-03-15", category: "Kardiologie", doctor: "Prof. Dr. med. Peter Schneider" },
      { id: 'mhc2', title: "Hypercholesterinämie", status: "laufend", startDate: "2021-06-10", category: "Kardiologie", doctor: "Prof. Dr. med. Peter Schneider" },
      { id: 'mhc3', title: "Vorsorgeuntersuchung 50+", status: "abgeschlossen", startDate: "2024-04-10", endDate: "2024-04-10", category: "Vorsorge", doctor: "Prof. Dr. med. Peter Schneider" }
    ],

    // Visualisierungen - Kardiovaskuläre Risikofaktoren
    healthData: {
      labTrends: {
        hba1c: [],
        cholesterol: [
          { date: 'Jan 24', ldl: 180, hdl: 45, reference: 116 },
          { date: 'Mrz 24', ldl: 175, hdl: 48, reference: 116 },
          { date: 'Mai 24', ldl: 170, hdl: 50, reference: 116 },
          { date: 'Jul 24', ldl: 168, hdl: 52, reference: 116 },
          { date: 'Sep 24', ldl: 152, hdl: 53, reference: 116 },
          { date: 'Nov 24', ldl: 148, hdl: 55, reference: 116 }
        ],
        bloodPressure: [
          { date: 'Jan 24', systolic: 152, diastolic: 95, refSys: 140, refDia: 90 },
          { date: 'Feb 24', systolic: 148, diastolic: 93, refSys: 140, refDia: 90 },
          { date: 'Mrz 24', systolic: 145, diastolic: 92, refSys: 140, refDia: 90 },
          { date: 'Apr 24', systolic: 143, diastolic: 90, refSys: 140, refDia: 90 },
          { date: 'Mai 24', systolic: 142, diastolic: 89, refSys: 140, refDia: 90 },
          { date: 'Jun 24', systolic: 140, diastolic: 88, refSys: 140, refDia: 90 },
          { date: 'Jul 24', systolic: 138, diastolic: 87, refSys: 140, refDia: 90 },
          { date: 'Aug 24', systolic: 141, diastolic: 89, refSys: 140, refDia: 90 },
          { date: 'Sep 24', systolic: 139, diastolic: 88, refSys: 140, refDia: 90 },
          { date: 'Okt 24', systolic: 140, diastolic: 89, refSys: 140, refDia: 90 },
          { date: 'Nov 24', systolic: 138, diastolic: 88, refSys: 140, refDia: 90 }
        ],
        triglycerides: [
          { date: 'Jan 24', value: 195, reference: 150 },
          { date: 'Mrz 24', value: 188, reference: 150 },
          { date: 'Mai 24', value: 180, reference: 150 },
          { date: 'Jul 24', value: 175, reference: 150 },
          { date: 'Sep 24', value: 170, reference: 150 },
          { date: 'Nov 24', value: 165, reference: 150 }
        ]
      },
      currentVitals: [
        { name: 'Blutdruck Sys', value: 138, max: 180, reference: 140, unit: 'mmHg', status: 'good' },
        { name: 'Blutdruck Dia', value: 88, max: 120, reference: 90, unit: 'mmHg', status: 'good' },
        { name: 'LDL-Cholesterin', value: 148, max: 200, reference: 116, unit: 'mg/dl', status: 'warning' },
        { name: 'HDL-Cholesterin', value: 55, max: 100, reference: 40, unit: 'mg/dl', status: 'good' },
        { name: 'Triglyceride', value: 165, max: 250, reference: 150, unit: 'mg/dl', status: 'elevated' }
      ],
      medicationTimeline: [
        {
          name: 'Amlodipin',
          periods: [
            { start: '2020-03', end: '2024-12', dosage: '5mg 1x täglich', active: true }
          ]
        },
        {
          name: 'Atorvastatin',
          periods: [
            { start: '2021-06', end: '2024-12', dosage: '40mg 1x abends', active: true }
          ]
        },
        {
          name: 'Aspirin Cardio',
          periods: [
            { start: '2021-09', end: '2024-12', dosage: '100mg 1x täglich', active: true }
          ]
        }
      ],
      vaccinations: [
        { name: 'Grippe', lastDate: '2024-10-12', nextDue: '2025-10-12', status: 'aktuell', daysUntilDue: 309 },
        { name: 'COVID-19', lastDate: '2024-03-20', nextDue: '2025-03-20', status: 'aktuell', daysUntilDue: 103 },
        { name: 'Tetanus', lastDate: '2022-05-15', nextDue: '2032-05-15', status: 'aktuell', daysUntilDue: 2696 },
        { name: 'Pneumokokken', lastDate: '2024-04-10', nextDue: '2030-04-10', status: 'aktuell', daysUntilDue: 1950 },
        { name: 'Gürtelrose (Herpes Zoster)', lastDate: null, nextDue: '2025-06-01', status: 'empfohlen', daysUntilDue: 176 }
      ]
    },

    // Freigaben
    accessGrants: [
      {
        id: 'mg1',
        name: 'Prof. Dr. med. Peter Schneider',
        specialty: 'Innere Medizin & Kardiologie FMH',
        institution: 'Kardiologie Paradeplatz',
        phone: '+41 44 789 01 23',
        isActive: true,
        grantedDate: '2020-03-15',
        expiryDate: null,
        accessLevel: 'Vollzugriff',
        cases: ['Alle Fälle'],
        documentTypes: ['Alle']
      },
      {
        id: 'mg2',
        name: 'Dr. med. Andreas Müller',
        specialty: 'Allgemeine Innere Medizin',
        institution: 'Hausarztpraxis Seefeld',
        phone: '+41 44 333 22 11',
        isActive: true,
        grantedDate: '2019-01-10',
        expiryDate: null,
        accessLevel: 'Vollzugriff',
        cases: ['Alle Fälle'],
        documentTypes: ['Laborberichte', 'Arztbriefe', 'Rezepte']
      },
      {
        id: 'mg3',
        name: 'Labor Zürich Paradeplatz',
        specialty: 'Labormedizin',
        institution: 'Diagnostiklabor',
        phone: '+41 44 555 66 77',
        isActive: true,
        grantedDate: '2020-04-01',
        expiryDate: null,
        accessLevel: 'Eingeschränkt',
        cases: ['Alle Fälle'],
        documentTypes: ['Laborberichte']
      }
    ],

    doctorsFromDocuments: [
      { name: 'Prof. Dr. med. Peter Schneider', specialty: 'Kardiologie', hasAccess: true },
      { name: 'Dr. med. Andreas Müller', specialty: 'Allgemeinmedizin', hasAccess: true },
      { name: 'Labor Zürich Paradeplatz', specialty: 'Labormedizin', hasAccess: true },
      { name: 'Radiologie Seefeld', specialty: 'Radiologie', hasAccess: false }
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
      { name: "Knochendichte T-Score", value: "-1.0", status: "good", reference: "> -2.5", date: "10.09.2024" }
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
    ],

    // Dokumente & Fälle - Umfangreiche medizinische Geschichte
    documents: [
      { id: 'em1', title: "HbA1c-Kontrolle (Langzeitzucker)", category: "Labor", date: "2024-11-18", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Diabetes"] },
      { id: 'em2', title: "Nierenfunktion (eGFR)", category: "Labor", date: "2024-11-18", type: "Laborbericht", status: "aktuell", thumbnail: "lab", tags: ["Labor", "Nieren"] },
      { id: 'em3', title: "Geriatrie-Kontrollbericht", category: "Diagnosen", date: "2024-11-20", type: "Arztbrief", status: "aktuell", thumbnail: "report", tags: ["Geriatrie"] },
      { id: 'em4', title: "Medikationsplan aktualisiert", category: "Medikamente", date: "2024-11-15", type: "Medikation", status: "aktuell", thumbnail: "medication", tags: ["Medikamente"] },
      { id: 'em5', title: "Herzecho (Echokardiographie)", category: "Bildgebung", date: "2024-10-22", type: "Kardiologie", status: "aktuell", thumbnail: "heart", tags: ["Herz", "Echo"] },
      { id: 'em6', title: "Knochendichte-Messung (DXA)", category: "Bildgebung", date: "2024-09-10", type: "Radiologie", status: "aktuell", thumbnail: "mri", tags: ["Knochen", "Osteoporose"] },
      { id: 'em7', title: "Blutdruck 24h-Messung", category: "Labor", date: "2024-09-25", type: "Laborbericht", status: "aktuell", thumbnail: "bp", tags: ["Blutdruck"] },
      { id: 'em8', title: "Diabetesberatung Bericht", category: "Diagnosen", date: "2024-08-15", type: "Therapiebericht", status: "aktuell", thumbnail: "report", tags: ["Diabetes"] },
      { id: 'em9', title: "Sturzrisikoanalyse", category: "Vorsorge", date: "2024-07-30", type: "Geriatrie", status: "aktuell", thumbnail: "checkup", tags: ["Sturzprävention"] },
      { id: 'em10', title: "EKG-Kontrolle", category: "Bildgebung", date: "2024-07-10", type: "Kardiologie", status: "aktuell", thumbnail: "heart", tags: ["Herz", "EKG"] },
      { id: 'em11', title: "Augenhintergrund-Untersuchung", category: "Vorsorge", date: "2024-06-20", type: "Ophthalmologie", status: "vergangen", thumbnail: "checkup", tags: ["Augen", "Diabetes"] },
      { id: 'em12', title: "Lungenfunktionstest", category: "Labor", date: "2024-05-15", type: "Laborbericht", status: "vergangen", thumbnail: "lab", tags: ["Lunge"] },
      { id: 'em13', title: "Physiotherapie-Bericht", category: "Diagnosen", date: "2024-11-25", type: "Therapiebericht", status: "aktuell", thumbnail: "report", tags: ["Physiotherapie"] },
      { id: 'em14', title: "Grippe-Impfung", category: "Impfungen", date: "2024-10-01", type: "Impfausweis", status: "aktuell", thumbnail: "vaccine", tags: ["Impfung"] },
      { id: 'em15', title: "Pneumokokken-Impfung", category: "Impfungen", date: "2023-09-15", type: "Impfausweis", status: "aktuell", thumbnail: "vaccine", tags: ["Impfung"] }
    ],

    cases: [
      { id: 'emc1', title: "Diabetes mellitus Typ 2", status: "laufend", startDate: "2010-04-15", category: "Diabetologie", doctor: "Dr. med. Julia Zimmermann" },
      { id: 'emc2', title: "Chronische Herzinsuffizienz", status: "laufend", startDate: "2015-08-20", category: "Kardiologie", doctor: "Dr. med. Julia Zimmermann" },
      { id: 'emc3', title: "Arterielle Hypertonie", status: "laufend", startDate: "2008-02-10", category: "Kardiologie", doctor: "Dr. med. Julia Zimmermann" },
      { id: 'emc4', title: "Osteoporose", status: "laufend", startDate: "2012-11-05", category: "Rheumatologie", doctor: "Dr. med. Julia Zimmermann" },
      { id: 'emc5', title: "Milde Demenz", status: "laufend", startDate: "2022-06-15", category: "Neurologie", doctor: "Dr. med. Julia Zimmermann" },
      { id: 'emc6', title: "Sturzprävention & Physiotherapie", status: "laufend", startDate: "2023-01-10", category: "Geriatrie", doctor: "Therapeut Müller" }
    ],

    // Visualisierungen - Komplexe Multimorbidität
    healthData: {
      labTrends: {
        hba1c: [
          { date: 'Jan 24', value: 7.8, reference: 7.5 },
          { date: 'Mrz 24', value: 7.9, reference: 7.5 },
          { date: 'Mai 24', value: 7.7, reference: 7.5 },
          { date: 'Jul 24', value: 7.8, reference: 7.5 },
          { date: 'Sep 24', value: 7.6, reference: 7.5 },
          { date: 'Nov 24', value: 7.8, reference: 7.5 }
        ],
        cholesterol: [
          { date: 'Jan 24', ldl: 130, hdl: 52, reference: 116 },
          { date: 'Mai 24', ldl: 125, hdl: 54, reference: 116 },
          { date: 'Sep 24', ldl: 120, hdl: 55, reference: 116 }
        ],
        bloodPressure: [
          { date: 'Jan 24', systolic: 150, diastolic: 88, refSys: 140, refDia: 90 },
          { date: 'Feb 24', systolic: 148, diastolic: 87, refSys: 140, refDia: 90 },
          { date: 'Mrz 24', systolic: 146, diastolic: 86, refSys: 140, refDia: 90 },
          { date: 'Apr 24', systolic: 147, diastolic: 87, refSys: 140, refDia: 90 },
          { date: 'Mai 24', systolic: 145, diastolic: 85, refSys: 140, refDia: 90 },
          { date: 'Jun 24', systolic: 144, diastolic: 86, refSys: 140, refDia: 90 },
          { date: 'Jul 24', systolic: 146, diastolic: 87, refSys: 140, refDia: 90 },
          { date: 'Aug 24', systolic: 143, diastolic: 84, refSys: 140, refDia: 90 },
          { date: 'Sep 24', systolic: 144, diastolic: 85, refSys: 140, refDia: 90 },
          { date: 'Okt 24', systolic: 145, diastolic: 86, refSys: 140, refDia: 90 },
          { date: 'Nov 24', systolic: 145, diastolic: 85, refSys: 140, refDia: 90 }
        ],
        kidneyFunction: [
          { date: 'Jan 24', value: 38, reference: 60 },
          { date: 'Mrz 24', value: 40, reference: 60 },
          { date: 'Mai 24', value: 41, reference: 60 },
          { date: 'Jul 24', value: 42, reference: 60 },
          { date: 'Sep 24', value: 43, reference: 60 },
          { date: 'Nov 24', value: 42, reference: 60 }
        ]
      },
      currentVitals: [
        { name: 'HbA1c', value: 7.8, max: 10, reference: 7.5, unit: '%', status: 'warning' },
        { name: 'Blutdruck Sys', value: 145, max: 180, reference: 140, unit: 'mmHg', status: 'elevated' },
        { name: 'Blutdruck Dia', value: 85, max: 120, reference: 90, unit: 'mmHg', status: 'good' },
        { name: 'Nierenfunktion (eGFR)', value: 42, max: 100, reference: 60, unit: 'ml/min', status: 'warning' },
        { name: 'Knochendichte T-Score', value: -1.0, max: 1, reference: -2.5, unit: '', status: 'good' }
      ],
      medicationTimeline: [
        {
          name: 'Metformin',
          periods: [
            { start: '2010-04', end: '2024-12', dosage: '500mg 2x täglich', active: true }
          ]
        },
        {
          name: 'Ramipril',
          periods: [
            { start: '2008-02', end: '2024-12', dosage: '5mg 1x morgens', active: true }
          ]
        },
        {
          name: 'Furosemid',
          periods: [
            { start: '2015-08', end: '2024-12', dosage: '40mg 1x morgens', active: true }
          ]
        },
        {
          name: 'Bisoprolol',
          periods: [
            { start: '2015-08', end: '2024-12', dosage: '2.5mg 1x täglich', active: true }
          ]
        },
        {
          name: 'Calcium + Vitamin D',
          periods: [
            { start: '2012-11', end: '2024-12', dosage: '1 Tablette täglich', active: true }
          ]
        },
        {
          name: 'Pantoprazol',
          periods: [
            { start: '2016-03', end: '2024-12', dosage: '20mg 1x morgens', active: true }
          ]
        },
        {
          name: 'Simvastatin',
          periods: [
            { start: '2013-06', end: '2020-12', dosage: '20mg abends', active: false }
          ]
        }
      ],
      vaccinations: [
        { name: 'Grippe', lastDate: '2024-10-01', nextDue: '2025-10-01', status: 'aktuell', daysUntilDue: 298 },
        { name: 'Pneumokokken', lastDate: '2023-09-15', nextDue: '2029-09-15', status: 'aktuell', daysUntilDue: 1744 },
        { name: 'COVID-19', lastDate: '2024-04-10', nextDue: '2025-04-10', status: 'aktuell', daysUntilDue: 124 },
        { name: 'Tetanus/Diphtherie', lastDate: '2020-06-20', nextDue: '2030-06-20', status: 'aktuell', daysUntilDue: 2020 },
        { name: 'Gürtelrose (Herpes Zoster)', lastDate: null, nextDue: '2024-12-31', status: 'empfohlen', daysUntilDue: 24 },
        { name: 'FSME', lastDate: '2018-05-10', nextDue: '2021-05-10', status: 'überfällig', daysUntilDue: -1306 }
      ]
    },

    // Freigaben - Umfangreiches Behandlungsteam
    accessGrants: [
      {
        id: 'eg1',
        name: 'Dr. med. Julia Zimmermann',
        specialty: 'Geriatrie & Innere Medizin FMH',
        institution: 'Altersmedizin Zentrum',
        phone: '+41 44 777 66 55',
        isActive: true,
        grantedDate: '2018-06-15',
        expiryDate: null,
        accessLevel: 'Vollzugriff',
        cases: ['Alle Fälle'],
        documentTypes: ['Alle']
      },
      {
        id: 'eg2',
        name: 'Diabetesberaterin Sarah Meier',
        specialty: 'Diabetesberatung',
        institution: 'Diabeteszentrum Zürich',
        phone: '+41 44 666 55 44',
        isActive: true,
        grantedDate: '2020-03-01',
        expiryDate: null,
        accessLevel: 'Eingeschränkt',
        cases: ['Diabetes mellitus Typ 2'],
        documentTypes: ['Laborberichte', 'Arztbriefe', 'Diabetestagebuch']
      },
      {
        id: 'eg3',
        name: 'Physiotherapeut Thomas Müller',
        specialty: 'Physiotherapie',
        institution: 'Seniorenphysio Zürich',
        phone: '+41 79 555 44 33',
        isActive: true,
        grantedDate: '2023-01-10',
        expiryDate: '2025-12-31',
        accessLevel: 'Eingeschränkt',
        cases: ['Sturzprävention & Physiotherapie'],
        documentTypes: ['Arztbriefe', 'Therapieberichte']
      },
      {
        id: 'eg4',
        name: 'Spitex Zürich',
        specialty: 'Spitex / Pflege',
        institution: 'Spitex Stadt Zürich',
        phone: '+41 44 444 33 22',
        isActive: true,
        grantedDate: '2022-08-01',
        expiryDate: null,
        accessLevel: 'Eingeschränkt',
        cases: ['Alle Fälle'],
        documentTypes: ['Medikationsplan', 'Arztbriefe', 'Pflegeberichte']
      },
      {
        id: 'eg5',
        name: 'Labor Zürich Nord',
        specialty: 'Labormedizin',
        institution: 'Diagnostiklabor',
        phone: '+41 44 333 22 11',
        isActive: true,
        grantedDate: '2019-01-01',
        expiryDate: null,
        accessLevel: 'Eingeschränkt',
        cases: ['Alle Fälle'],
        documentTypes: ['Laborberichte']
      },
      {
        id: 'eg6',
        name: 'Dr. med. Hans Huber',
        specialty: 'Kardiologie',
        institution: 'Herzzentrum Zürich',
        phone: '+41 44 222 11 00',
        isActive: false,
        grantedDate: '2015-08-20',
        expiryDate: '2023-12-31',
        accessLevel: 'Eingeschränkt',
        cases: ['Chronische Herzinsuffizienz'],
        documentTypes: ['Kardiologie', 'Laborberichte']
      }
    ],

    doctorsFromDocuments: [
      { name: 'Dr. med. Julia Zimmermann', specialty: 'Geriatrie', hasAccess: true },
      { name: 'Diabetesberaterin Sarah Meier', specialty: 'Diabetologie', hasAccess: true },
      { name: 'Physiotherapeut Thomas Müller', specialty: 'Physiotherapie', hasAccess: true },
      { name: 'Spitex Zürich', specialty: 'Spitex', hasAccess: true },
      { name: 'Labor Zürich Nord', specialty: 'Labormedizin', hasAccess: true },
      { name: 'Radiologie Altstetten', specialty: 'Radiologie', hasAccess: false },
      { name: 'Apotheke Sonnenhof', specialty: 'Pharmazie', hasAccess: false }
    ]
  }
};
