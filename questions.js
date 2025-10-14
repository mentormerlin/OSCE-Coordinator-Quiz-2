const questions = [
    {
        id: 1,
        type: 'mcq',
        question: "What is the main purpose of the Batch Preparation Group for candidates?",
        options: [
            "To conduct mock OSCE exams",
            "To share all onsite preparation details",
            "To issue payment reminders",
            "To handle refund requests"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        type: 'mcq',
        question: "When should new sales candidates be added to the batch preparation group?",
        options: [
            "Immediately after payment confirmation",
            "On the self-revision day",
            "One day before training",
            "During Day 3 of onsite"
        ],
        correctIndex: 1
    },
    {
        id: 3,
        type: 'mcq',
        question: "Which day’s centre is inside the University of Northampton Innovation Centre?",
        options: ["Day 3", "Day 4", "Day 6", "Day 5"],
        correctIndex: 2
    },
    {
        id: 4,
        type: 'mcq',
        question: "What are the three Mentor Merlin centres in Northampton?",
        options: [
            "18 Drapery, 60 Gold Street, Innovation Centre",
            "18 Drapery, London Regus, Leeds Lands Lane",
            "60 Gold Street, Leeds Core, Wembley Central",
            "Innovation Centre, CTC Leeds, Sabichi House"
        ],
        correctIndex: 0
    },
    {
        id: 5,
        type: 'mcq',
        question: "What is the usual daily start time of London & Northampton onsite training?",
        options: ["8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM"],
        correctIndex: 2
    },
    {
        id: 6,
        type: 'mcq',
        question: "Which platform is used for the common candidate group discussion?",
        options: ["Microsoft Teams", "WhatsApp", "Zoom", "Slack"],
        correctIndex: 1
    },
    {
        id: 7,
        type: 'mcq',
        question: "What is the check-in time at ibis hotel accommodation?",
        options: ["2 PM", "3 PM", "12 PM", "4 PM"],
        correctIndex: 1
    },
    {
        id: 8,
        type: 'mcq',
        question: "How often does the National Express coach run from airports to Northampton?",
        options: ["Every hour", "Every 2 hours", "Every 30 minutes", "Once daily"],
        correctIndex: 1
    },
    {
        id: 9,
        type: 'mcq',
        question: "What must candidates bring in addition to the Merlin Book of OSCE?",
        options: ["Laptop", "Notebook and Fluid Balance Chart", "Tablet", "Camera"],
        correctIndex: 1
    },
    {
        id: 10,
        type: 'mcq',
        question: "What is the purpose of the Fluid Balance Chart exercise?",
        options: [
            "Meal tracking",
            "Practice documentation for intake and output measurement",
            "Attendance record",
            "Assessment scheduling"
        ],
        correctIndex: 1
    },
    {
        id: 11,
        type: 'mcq',
        question: "Which team should coordinators communicate with for financial clarifications?",
        options: ["Placement Team", "Finance Team", "HR", "Operations"],
        correctIndex: 1
    },
    {
        id: 12,
        type: 'mcq',
        question: "Which city has its training centre at 24b Lands Ln LS1 6LB?",
        options: ["Northampton", "Leeds", "London", "Manchester"],
        correctIndex: 1
    },
    {
        id: 13,
        type: 'mcq',
        question: "What time does the Leeds centre open for participants?",
        options: ["9 AM", "9:30 AM", "10 AM", "8:30 AM"],
        correctIndex: 1
    },
    {
        id: 14,
        type: 'mcq',
        question: "Where is the London onsite training held?",
        options: [
            "CTC London",
            "Regus (Sabichi House), Perivale",
            "King’s College",
            "Westminster Hub"
        ],
        correctIndex: 1
    },
    {
        id: 15,
        type: 'mcq',
        question: "What transport link connects directly to Perivale centre?",
        options: [
            "Bus No. 12",
            "Central Line – Perivale Underground",
            "Bakerloo Line",
            "DLR Docklands"
        ],
        correctIndex: 1
    },
    {
        id: 16,
        type: 'mcq',
        question: "What is the approximate travel time from Luton Airport to Northampton?",
        options: ["30 min", "45 min", "1 hr 30 min", "2 hr"],
        correctIndex: 1
    },
    {
        id: 17,
        type: 'mcq',
        question: "Where should candidates dispose of rubbish during hotel stay?",
        options: [
            "Leave in corridor",
            "Throw from window",
            "Bring to reception bins",
            "Leave for housekeeping"
        ],
        correctIndex: 2
    },
    {
        id: 18,
        type: 'mcq',
        question: "What happens if hotel room items are missing after checkout?",
        options: [
            "Ignored by staff",
            "Candidates pay for damages",
            "Team covers it",
            "Deducted from future fees"
        ],
        correctIndex: 1
    },
    {
        id: 19,
        type: 'mcq',
        question: "Who is the onsite admin for Northampton (NN)?",
        options: ["Janet", "Neil", "Naveen", "Sahandriya"],
        correctIndex: 1
    },
    {
        id: 20,
        type: 'mcq',
        question: "Which mentor is responsible for online guidance?",
        options: ["Janet", "Naveen", "Neil", "Josin"],
        correctIndex: 1
    },
    {
        id: 21,
        type: 'mcq',
        question: "What is Preparation 3.0?",
        options: [
            "New exam syllabus",
            "Online platform",
            "Discount campaign",
            "Enhanced training approach to boost first-attempt success"
        ],
        correctIndex: 3
    },
    {
        id: 22,
        type: 'mcq',
        question: "When does full implementation of face-to-face verbalisation begin?",
        options: ["July 2025", "August 2025", "September 2025", "October 2025"],
        correctIndex: 2
    },
    {
        id: 23,
        type: 'mcq',
        question: "Where should family members wait during onsite training?",
        options: [
            "In classroom",
            "In waiting lounge",
            "At hotel or outside centre",
            "In car park"
        ],
        correctIndex: 2
    },
    {
        id: 24,
        type: 'mcq',
        question: "What is the Day 5 Feedback Form used for?",
        options: [
            "Collecting attendance",
            "Gathering candidate feedback for improvement",
            "Exam results",
            "Mentor allocation"
        ],
        correctIndex: 1
    },
    {
        id: 25,
        type: 'mcq',
        question: "After Day 5, who should candidates contact for doubts?",
        options: ["Finance Team", "Batch Mentor", "Coordinator Manager", "HR"],
        correctIndex: 1
    },
    {
        id: 26,
        type: 'mcq',
        question: "What is the check-out time at ibis hotel?",
        options: ["11 AM", "3 PM", "1 PM", "12 PM"],
        correctIndex: 3
    },
    {
        id: 27,
        type: 'mcq',
        question: "What happens if you want daily housekeeping for a short stay?",
        options: [
            "Included free",
            "£10 per day extra charge",
            "Depends on availability",
            "Not allowed"
        ],
        correctIndex: 1
    },
    {
        id: 28,
        type: 'mcq',
        question: "Which meal is available upon request at ibis?",
        options: [
            "Continental breakfast",
            "Buffet lunch",
            "English breakfast",
            "Dinner combo"
        ],
        correctIndex: 2
    },
    {
        id: 29,
        type: 'mcq',
        question: "What should be avoided to prevent hotel property damage?",
        options: [
            "Heating liquids in kettles",
            "Using TV too long",
            "Opening windows",
            "Leaving lights on"
        ],
        correctIndex: 0
    },
    {
        id: 30,
        type: 'mcq',
        question: "What should be done before bed making by housekeeping?",
        options: [
            "Leave personal items on bed",
            "Remove personal items from bed",
            "Lock room",
            "Turn off lights"
        ],
        correctIndex: 1
    }
];
