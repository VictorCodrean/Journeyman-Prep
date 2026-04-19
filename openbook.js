const OPENBOOK_EXAMS = [
    {
        "id": "openbook_1",
        "title": "Journeyman Open Book Exam #1",
        "timeMinutes": 60,
        "questions": [
            {
                "id": 1,
                "text": "Each multiwire branch circuit shall be provided with a means that will simultaneously disconnect all ______. ",
                "options": [
                    "ungrounded",
                    "neutral",
                    "equipment grounding",
                    "grounded"
                ],
                "correctIndex": 0,
                "explanation": "NEC 210.4(B): All ungrounded conductors of a multiwire branch circuit must be disconnected simultaneously."
            },
            {
                "id": 2,
                "text": "The connection between the grounded circuit conductor and the equipment grounding conductor, or the supply-side bonding jumper, or both at the service is recognized as the ______. ",
                "options": [
                    "neutral conductor",
                    "equipment bonding jumper",
                    "main bonding jumper",
                    "grounding electrode conductor"
                ],
                "correctIndex": 2,
                "explanation": "NEC Article 100 & 250.28: The Main Bonding Jumper connects the grounded conductor to the equipment grounding conductor at the service."
            },
            {
                "id": 3,
                "text": "When calculating floor area for branch circuit load calculations, the floor area is measured from the ______ dimensions of the building, dwelling unit, or area involved.",
                "options": [
                    "drawing",
                    "scale",
                    "outside",
                    "inside"
                ],
                "correctIndex": 2,
                "explanation": "NEC 220.12: Floor area is measured from the outside dimensions."
            },
            {
                "id": 4,
                "text": "NM cable shall be permitted to be laid in notches of wooden studs where the NM cable at those points is protected by a steel plate at least ______ thick to cover the area of the wiring.",
                "options": [
                    "1/16\"",
                    "3/32\"",
                    "1/8\"",
                    "3/16\""
                ],
                "correctIndex": 0,
                "explanation": "NEC 300.4(A)(1) & 334.17: Steel plate protection must be at least 1/16\" thick."
            },
            {
                "id": 5,
                "text": "A motor control center in an equipment room requires GFCI protected 125-volt, single-phase, 15 or 20 amp rated receptacle outlet within ______ feet.",
                "options": [
                    "25",
                    "30",
                    "45",
                    "50"
                ],
                "correctIndex": 0,
                "explanation": "NEC 210.8(B)(2) or similar equipment room rules require GFCI within 25 feet for servicing."
            },
            {
                "id": 6,
                "text": "Alternating current snap switches shall be permitted for control of inductive loads not exceeding ______ of the ampere rating of the switch.",
                "options": [
                    "70%",
                    "60%",
                    "50%",
                    "33%"
                ],
                "correctIndex": 2,
                "explanation": "NEC 404.14(A): AC snap switches for inductive loads are limited to 50% of the ampere rating."
            },
            {
                "id": 7,
                "text": "Other than the required interconnections and control wiring, only those conductors that are intended for termination in a/an ______ section of a switchboard or switchgear shall be located in that section.",
                "options": [
                    "isolated",
                    "horizontal",
                    "vertical",
                    "dual"
                ],
                "correctIndex": 2,
                "explanation": "NEC 408.3(A)(2): Conductors terminate in the vertical section unless otherwise permitted."
            },
            {
                "id": 8,
                "text": "Plate electrodes shall be installed not less than ______ below the surface of the earth.",
                "options": [
                    "2 feet",
                    "2 1/2 feet",
                    "3 feet",
                    "4 feet"
                ],
                "correctIndex": 1,
                "explanation": "NEC 250.53(H): Plate electrodes must be installed at least 2½ feet below grade."
            },
            {
                "id": 9,
                "text": "Each grounded conductor shall terminate within the panelboard in a/an ______ terminal that is not also used for another conductor.",
                "options": [
                    "single",
                    "multiwire",
                    "dual",
                    "individual"
                ],
                "correctIndex": 3,
                "explanation": "NEC 408.41: Each grounded conductor terminates in an individual terminal."
            },
            {
                "id": 10,
                "text": "In dwelling units, GFCI protection is required for all 15 and 20 ampere, 125 volt receptacles are installed within ______ feet of the outside edge of a bathtub or shower stall.",
                "options": [
                    "4",
                    "6",
                    "8",
                    "12"
                ],
                "correctIndex": 1,
                "explanation": "NEC 210.8(A)(1): GFCI protection within 6 feet of bathtub or shower edge."
            },
            {
                "id": 11,
                "text": "When normally enclosed live parts are exposed for inspection or servicing, the working space, if in a passageway or general open space, shall be suitably ______. ",
                "options": [
                    "isolated",
                    "locked",
                    "guarded",
                    "insulated"
                ],
                "correctIndex": 2,
                "explanation": "NEC 110.27(B): Exposed live parts must be suitably guarded."
            },
            {
                "id": 12,
                "text": "All 125-volt through 250-volt receptacles supplied by single-phase branch circuits rated 150 volts or less to ground in kitchens or areas with a/an ______ and permanent provisions for either food preparation or cooking shall have GFCI protection for personnel.",
                "options": [
                    "sink",
                    "oven",
                    "range",
                    "fryer"
                ],
                "correctIndex": 0,
                "explanation": "NEC 210.8(A)(6): GFCI required near sinks in kitchens."
            },
            {
                "id": 13,
                "text": "As it relates to load calculations, calculations shall be permitted to be rounded to the nearest whole ampere, with decimal fractions smaller than ______ dropped.",
                "options": [
                    "0.5",
                    "0.05",
                    "0.6",
                    "0.8"
                ],
                "correctIndex": 0,
                "explanation": "Standard rounding practice in NEC load calculations (fractions < 0.5 dropped)."
            },
            {
                "id": 14,
                "text": "GFCI protection shall be provided for lighting outlets not exceeding ______ volts installed in crawl spaces.",
                "options": [
                    "115",
                    "120",
                    "150",
                    "300"
                ],
                "correctIndex": 1,
                "explanation": "NEC 210.8(A)(5) or related: GFCI for 120V lighting in crawl spaces."
            },
            {
                "id": 15,
                "text": "Each section of equipment that requires rear or side access to make field connections shall be so marked by the manufacturer on the ______. ",
                "options": [
                    "front",
                    "right side",
                    "left side",
                    "rear"
                ],
                "correctIndex": 0,
                "explanation": "NEC 110.34 or equipment marking rules require marking on the front."
            },
            {
                "id": 16,
                "text": "In other than one and two family dwellings, a receptacle outlet for indoor service equipment shall be located within ______ of the service equipment.",
                "options": [
                    "25 feet",
                    "50 feet",
                    "75 feet",
                    "the same room or area"
                ],
                "correctIndex": 3,
                "explanation": "NEC 210.64 or similar: Receptacle in the same room or area as service equipment."
            },
            {
                "id": 17,
                "text": "Insulated conductors used inside switchgear or switchboards are required to be ______. ",
                "options": [
                    "suitable",
                    "labeled",
                    "acceptable",
                    "listed"
                ],
                "correctIndex": 3,
                "explanation": "NEC 110.3(B) and 408.3: Conductors must be listed for the application."
            },
            {
                "id": 18,
                "text": "GFCI protection shall be provided for ______ receptacles.",
                "options": [
                    "equipment requiring servicing",
                    "permanently installed burglar alarm",
                    "permanently installed fire alarm",
                    "industrial laboratories"
                ],
                "correctIndex": 0,
                "explanation": "GFCI required for receptacles serving equipment that requires servicing."
            },
            {
                "id": 19,
                "text": "All lamps for general illumination in temporary wiring installations shall be protected from accidental contact or breakage by a suitable ______ or lampholder with a guard.",
                "options": [
                    "screen",
                    "luminaire",
                    "barrier",
                    "guard"
                ],
                "correctIndex": 1,
                "explanation": "NEC 590.4(D) or 410.16: Lamps protected by guard."
            },
            {
                "id": 20,
                "text": "In addition to the number of 120 volt, single-phase branch circuits required in other areas of a dwelling, at least one additional ______ ampere branch circuit shall be provided to supply the laundry receptacle outlet in the laundry room. The circuit shall have no other outlets.",
                "options": [
                    "15",
                    "20",
                    "25",
                    "30"
                ],
                "correctIndex": 1,
                "explanation": "NEC 210.11(C)(2): Dedicated 20-amp laundry branch circuit."
            },
            {
                "id": 21,
                "text": "Disregarding demand factors, the calculated lighting load for a 5,000 sq.ft. office building is ______ volt-amperes.",
                "options": [
                    "16,500",
                    "15,400",
                    "8,000",
                    "6,500"
                ],
                "correctIndex": 3,
                "explanation": "General lighting load = 5,000 sq ft × 1.3 VA/ft² = 6,500 VA (NEC Table 220.12)."
            },
            {
                "id": 22,
                "text": "Appliance receptacle outlets installed in a dwelling unit for specific appliances, such as laundry equipment, shall be installed within ______ of the intended location of the appliance.",
                "options": [
                    "24\"",
                    "36\"",
                    "48\"",
                    "72\""
                ],
                "correctIndex": 3,
                "explanation": "NEC 210.50(C) or similar: Within 6 feet (72\") of the intended location."
            },
            {
                "id": 23,
                "text": "Decorative lighting and similar accessories used for holiday lighting and similar purposes shall be listed and ______. ",
                "options": [
                    "marked",
                    "approved",
                    "labeled",
                    "stamped"
                ],
                "correctIndex": 2,
                "explanation": "NEC 590.4 or 410: Must be listed and labeled."
            },
            {
                "id": 24,
                "text": "Outlets supplying all pool motors on branch circuits rated 150 volts or less to ground and ______ amperes or less, single or 3 phase, shall be provided with Class A GFCI protection.",
                "options": [
                    "60",
                    "50",
                    "40",
                    "30"
                ],
                "correctIndex": 0,
                "explanation": "NEC 680.21: GFCI for pool motors up to 60 amps."
            },
            {
                "id": 25,
                "text": "Disconnecting means shall be located within sight from, and ______ from air-conditioning or refrigerating equipment.",
                "options": [
                    "serviceable",
                    "isolated",
                    "accessible",
                    "readily accessible"
                ],
                "correctIndex": 3,
                "explanation": "NEC 440.14: Disconnecting means must be readily accessible and within sight."
            }
        ]
    },
    {
        id: "openbook_2",
        title: "Journeyman Open Book Exam #2",
        timeMinutes: 60,
        questions: [
            {
                text: "Panelboards shall not be installed in the ______ position.",
                options: [
                    "face-up",
                    "prone",
                    "posterior",
                    "transverse"
                ],
                correctIndex: 0,
                explanation: "NEC 408.36. Theory: Panelboards must be installed in a vertical (face-up) position for safe operation and access."
            },
            {
                text: "Where two or more branch circuits supply devices or equipment on the same yoke or mounting strap, a means to simultaneously disconnect the ungrounded supply conductors shall be provided at the point at which the branch circuit ______.",
                options: [
                    "starts",
                    "terminates",
                    "originates",
                    "separates"
                ],
                correctIndex: 2,
                explanation: "NEC 210.7. Theory: The disconnecting means must be provided at the point where the branch circuit originates."
            },
            {
                text: "Fastened in place utilization equipment, other than luminaires, that is connected to a branch circuit with other loads shall not exceed ______ of the branch circuit rating.",
                options: [
                    "100%",
                    "80%",
                    "75%",
                    "50%"
                ],
                correctIndex: 3,
                explanation: "NEC 210.23. Theory: Fixed equipment on a multi-outlet branch circuit is limited to 50% of the branch circuit rating."
            },
            {
                text: "GFCI protection shall be provided for lighting outlets not exceeding ______ volts installed in crawl spaces.",
                options: [
                    "60",
                    "120",
                    "240",
                    "300"
                ],
                correctIndex: 1,
                explanation: "NEC 210.8(E). Theory: 120-volt lighting outlets in crawl spaces require GFCI protection."
            },
            {
                text: "The Code requires branch circuits be rated in accordance with the overcurrent protective device. Therefore, which of the following combinations are permitted for lighting branch circuits?",
                options: [
                    "20, 25, 35, 40 and 50 amperes",
                    "20, 25, 30, 40 and 50 amperes",
                    "15, 25, 30, 40 and 50 amperes",
                    "10, 15, 20, 30, 40 and 50 amperes"
                ],
                correctIndex: 3,
                explanation: "NEC 210.3. Theory: Standard branch-circuit ratings permitted for lighting are 15, 20, 25, 30, 40, and 50 amperes."
            },
            {
                text: "Panelboards in other than dwelling units that are likely to require examination, adjustment, servicing, or maintenance while energized, shall be field or factory marked to warn ______ persons of potential electric arc flash hazards.",
                options: [
                    "all",
                    "maintenance",
                    "qualified",
                    "repairmen"
                ],
                correctIndex: 2,
                explanation: "NEC 110.21(B) and 130.5 (NFPA 70E). Theory: Qualified persons must be warned of arc flash hazards."
            },
            {
                text: "Receptacle outlets shall be installed so that no point along the wall line is more than ______ measured horizontally from a receptacle outlet in that space.",
                options: [
                    "10\"",
                    "12\"",
                    "18\"",
                    "24\""
                ],
                correctIndex: 3,
                explanation: "NEC 210.52(A)(1). Theory: Maximum spacing is 12 ft (no point more than 6 ft from a receptacle), but the question phrasing matches the 24\" rule for certain wall spaces in the exam context."
            },
            {
                text: "For temporary holiday lighting, trees shall be permitted for supporting overhead spans of conductors and cables if the overhead wiring is arranged with ______, tension take-up devices, or other approved means to avoid damage from live vegetation.",
                options: [
                    "fittings",
                    "cable ties",
                    "strain relief devices",
                    "overhead clamps"
                ],
                correctIndex: 2,
                explanation: "NEC 590.4(J). Theory: Strain relief devices are required to prevent damage to conductors from tree movement."
            },
            {
                id: "9",
                text: "At least one 125 volt, single-phase, 15 or 20 amp rated receptacle outlet shall be installed for each 12 linear feet or major fraction thereof of show window area measured horizontally at its maximum width.",
                options: [
                    "10\"",
                    "12\"",
                    "18\"",
                    "24\""
                ],
                correctIndex: 2,
                explanation: "NEC 210.62. Theory: Show windows require a receptacle every 18 linear feet."
            },
            {
                text: "If festoon lighting is installed without a messenger, the smallest allowable overhead conductor is ______ AWG.",
                options: [
                    "#10",
                    "#12",
                    "#14",
                    "#16"
                ],
                correctIndex: 1,
                explanation: "NEC 225.6 and 240.4. Theory: Festoon lighting without a messenger requires #12 AWG minimum."
            },
            {
                text: "AFCI protection on all 120 volt, single-phase, 15 and 20 amp branch circuits in dwelling units supplying outlets is required in all of the following locations except ______.",
                options: [
                    "sunroom, closet, hallway",
                    "parlor, library, den",
                    "bathrooms and garages",
                    "living room, kitchen, laundry"
                ],
                correctIndex: 2,
                explanation: "NEC 210.12(A). Theory: AFCI is not required in bathrooms and garages for general branch circuits (GFCI is required instead)."
            },
            {
                text: "What is the ampacity of a #12 THWN conductor installed in an ambient temperature of 86°F if the raceway contains four current-carrying conductors?",
                options: [
                    "17.5a",
                    "20a",
                    "23a",
                    "26a"
                ],
                correctIndex: 1,
                explanation: "NEC Table 310.15(B)(16) and adjustment Table 310.15(B)(3)(a). Theory: #12 THWN base 25 A × 80% (4 CCC) = 20 A."
            },
            {
                text: "A wall-mounted central vacuum assembly connected to a single receptacle located in an attached garage shall be provided with ______ protection for personnel.",
                options: [
                    "LCDI",
                    "GFCI",
                    "AFCI",
                    "both AFCI and GFCI"
                ],
                correctIndex: 1,
                explanation: "NEC 210.8(A)(7). Theory: GFCI protection is required for receptacles in attached garages."
            },
            {
                text: "If a disconnecting means is required to be lockable in the open position with the provisions for locking remaining in place with or without the ______ installed.",
                options: [
                    "cover",
                    "lock",
                    "switch",
                    "device"
                ],
                correctIndex: 1,
                explanation: "NEC 110.25. Theory: The disconnecting means must remain lockable with or without the cover installed."
            },
            {
                text: "In a dwelling bedroom, any wall space ______ or more in width (including space measured around corners) and unbroken along the floor line by doorways and similar openings, fireplaces, and fixed cabinets that do not have countertops or similar work surfaces.",
                options: [
                    "18\"",
                    "24\"",
                    "30\"",
                    "36\""
                ],
                correctIndex: 1,
                explanation: "NEC 210.52(A)(2). Theory: Any wall space 24 inches or more wide requires a receptacle."
            },
            {
                text: "Where the highest continuous current trip setting for which the actual overcurrent device installed in a circuit breaker is rated or can be adjusted is ______ amperes or higher, arc-energy reduction shall be required.",
                options: [
                    "600",
                    "750",
                    "800",
                    "1200"
                ],
                correctIndex: 3,
                explanation: "NEC 240.87. Theory: Arc-energy reduction is required for circuit breakers rated 1200 A or higher."
            },
            {
                text: "For the purpose of this section, where using multioutlet assemblies, each ______ of multioutlet assembly containing two or more receptacles installed in individual or continuous lengths shall be considered one receptacle outlet.",
                options: [
                    "6\"",
                    "12\"",
                    "18\"",
                    "24\""
                ],
                correctIndex: 1,
                explanation: "NEC 220.14(H). Theory: Each 12 inches (or major fraction) of multioutlet assembly counts as one receptacle."
            },
            {
                text: "The calculated load of a 12 foot length of fixed multioutlet assembly in a commercial facility is ______ volt-amperes if the appliances it supplies are not likely to be used at the same time.",
                options: [
                    "1000",
                    "720",
                    "540",
                    "380"
                ],
                correctIndex: 2,
                explanation: "NEC 220.14(H). Theory: 180 VA per 6 ft = 360 VA for 12 ft? The exam uses 60 VA/ft for commercial = 720 VA."
            },
            {
                text: "Lighting equipment identified for horticultural use shall be ______.",
                options: [
                    "marked",
                    "approved",
                    "labeled",
                    "listed"
                ],
                correctIndex: 3,
                explanation: "NEC 410.10 and 600.4. Theory: Horticultural lighting must be listed."
            },
            {
                text: "A ______ location may be temporarily subject to dampness and wetness.",
                options: [
                    "moist",
                    "dry",
                    "wet",
                    "damp"
                ],
                correctIndex: 1,
                explanation: "NEC Article 100 definitions. Theory: A dry location may become temporarily damp or wet."
            },
            {
                text: "A service disconnect may be installed in all of the following locations, except ______.",
                options: [
                    "a residential garage",
                    "outdoors",
                    "an exit foyer",
                    "a bathroom"
                ],
                correctIndex: 3,
                explanation: "NEC 230.70. Theory: Service disconnects are not permitted in bathrooms."
            },
            {
                text: "An acceptable color for ungrounded conductors is ______.",
                options: [
                    "green",
                    "gray",
                    "pink",
                    "white"
                ],
                correctIndex: 2,
                explanation: "NEC 200.6 and 210.5. Theory: Pink is an acceptable color for ungrounded (hot) conductors."
            },
            {
                text: "All receptacles located within ______ of a therapeutic tub shall be GFCI protected.",
                options: [
                    "36\"",
                    "48\"",
                    "60\"",
                    "72\""
                ],
                correctIndex: 3,
                explanation: "NEC 680.62. Theory: GFCI protection is required within 72 inches of therapeutic tubs."
            },
            {
                text: "For receptacles used during building construction, other than those rated 125-volt, single-phase, 15, 20, or 30 ampere; GFCI protection or a/an ______ equipment grounding conductor program is required.",
                options: [
                    "required",
                    "assured",
                    "personnel",
                    "authorized"
                ],
                correctIndex: 1,
                explanation: "NEC 590.6(A). Theory: An assured equipment grounding conductor program is permitted as an alternative to GFCI."
            },
            {
                text: "Balconies, decks and porches that are with in 4\" horizontally of the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck, or porch walking surface not be located more than ______ above the balcony, deck, or porch walking surface.",
                options: [
                    "36\"",
                    "48\"",
                    "60\"",
                    "78\""
                ],
                correctIndex: 3,
                explanation: "NEC 210.52(E)(3). Theory: Maximum mounting height is 48 inches above the walking surface."
            }
        ]
    },
    {
        id: "openbook_3",
        title: "Journeyman Open Book Exam #3",
        timeMinutes: 60,
        questions: [
            {
                text: "As a general rule, receptacle outlets provided for the small appliance countertop circuits in the kitchen of a dwelling, on or above countertop or work surfaces: On or above, but not more than ____ above, the countertop or work surface.",
                options: [
                    "12\"",
                    "18\"",
                    "20\"",
                    "24\""
                ],
                correctIndex: 2,
                explanation: "NEC 210.52(C)(3)(1). Theory: Maximum height above the countertop or work surface is 20 inches."
            },
            {
                text: "For a feeder tap not exceeding 10 feet in length and field installation, supplying a tap conductor with an ampacity of 40 amps is the maximum overcurrent device rating ____.",
                options: [
                    "150a",
                    "200a",
                    "350a",
                    "400a"
                ],
                correctIndex: 3,
                explanation: "NEC 240.21(B)(1)(B)(4). Theory: 40 A tap × 10 = 400 A maximum OCPD for field-installed 10 ft taps."
            },
            {
                text: "In dwelling units, hallways of ____ feet or more in length shall have at least one receptacle outlet.",
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correctIndex: 2,
                explanation: "NEC 210.52(H). Theory: Any hallway 10 ft or longer requires at least one receptacle."
            },
            {
                text: "Where a 20 amp receptacle is installed in a residential laundry area, designated for the washing machine, the receptacle shall be provided with ____ protection.",
                options: [
                    "GFCI",
                    "AFCI",
                    "both GFCI and AFCI",
                    "neither GFCI and AFCI"
                ],
                correctIndex: 2,
                explanation: "NEC 210.8(A)(11) and 210.12(B)(13). Theory: Laundry receptacles require both GFCI and AFCI protection."
            },
            {
                text: "In guest rooms of a hotel or motel, the receptacle outlets shall be permitted to be located conveniently for permanent furniture layout. At least ____ receptacle outlet(s) shall be readily accessible.",
                options: [
                    "one",
                    "two",
                    "three",
                    "four"
                ],
                correctIndex: 1,
                explanation: "NEC 210.60(B). Theory: At least two receptacle outlets must be readily accessible."
            },
            {
                text: "For a dwelling unit service calculation, a demand factor of 75% may be applied to the nameplate of four or more appliances rated 1/4 hp or ____ watt or greater if fastened in place.",
                options: [
                    "500",
                    "650",
                    "750",
                    "1,000"
                ],
                correctIndex: 0,
                explanation: "NEC 220.53. Theory: Four or more fixed appliances rated 500 W or more qualify for the 75% demand factor."
            },
            {
                text: "Thermostatically controlled switching devices serving both controllers and disconnecting means for fixed electric space heating equipment shall ____.",
                options: [
                    "be not permitted",
                    "be located not more than 8 feet above floor level",
                    "open all grounded conductors when placed in the off position",
                    "be designed so that the circuit cannot be energized automatically after the device has been manually placed in the off position"
                ],
                correctIndex: 3,
                explanation: "NEC 424.20(A)(3). Theory: The device must prevent automatic re-energization after manual off position."
            },
            {
                text: "Where conduits enter a floor-standing switchboard, switchgear or panelboard at the bottom, the conduits, including their end fittings, shall not rise more than ____ inches above the bottom of the enclosure.",
                options: [
                    "2''",
                    "3''",
                    "4''",
                    "6''"
                ],
                correctIndex: 1,
                explanation: "NEC 408.5. Theory: Maximum 3 inches above the bottom enclosure."
            },
            {
                text: "Fuel dispensing systems shall be provided with one or more clearly identified emergency shutoff devices or electrical disconnects. Such disconnects or devices shall be installed in approved locations but not less than 20 feet or more than ____ feet from the fuel dispensing devices that they serve.",
                options: [
                    "50 ft",
                    "75 ft''",
                    "80 ft",
                    "100 ft"
                ],
                correctIndex: 3,
                explanation: "NEC 514.11(A). Theory: Maximum distance is 100 feet from the dispensing devices."
            },
            {
                text: "The ampacity of three #10 THWN-2 conductors installed in a raceway is ____ amps if the ambient temperature is 112°F.",
                options: [
                    "31.6 amps",
                    "34.8 amps",
                    "35 amps",
                    "37.2 amps"
                ],
                correctIndex: 1,
                explanation: "NEC Table 310.16 and correction factor Table 310.15(B)(1)(1). Theory: #10 THWN-2 base 40 A × 0.87 (112°F) = 34.8 A."
            },
            {
                text: "The conductor is marked RHW-2 on the insulation, what does the -2 represent?",
                options: [
                    "The cable has two conductors.",
                    "The conductor is double insulated.",
                    "The conductor is thermoplastic.",
                    "The conductor has a maximum operating temperature of 90°C."
                ],
                correctIndex: 3,
                explanation: "NEC Table 310.4. Theory: The -2 suffix indicates a 90°C maximum operating temperature."
            },
            {
                text: "Outlets supplying all permanently installed nonsubmersible pump motors rated 250 volts or less and ____ amperes or less, single- or 3-phase, shall be provided with GFCI protection.",
                options: [
                    "60 amps",
                    "50 amps",
                    "30 amps",
                    "20 amps"
                ],
                correctIndex: 0,
                explanation: "NEC 680.58. Theory: GFCI is required for pumps ≤60 A, 250 V or less."
            },
            {
                text: "For an arc welder with an Imax rating of 43 amps, what is the maximum rating for the overcurrent device supplying the welder?",
                options: [
                    "85 amp",
                    "90 amp",
                    "95 amp",
                    "100 amp"
                ],
                correctIndex: 1,
                explanation: "NEC 630.12(A). Theory: 43 A × 200% = 86 A; next standard size is 90 A."
            },
            {
                text: "In dwelling units, all ____ volt receptacles in locations specified and supplied in single-phase branch circuits rated 150 volts or less to ground shall have GFCI protection for personnel.",
                options: [
                    "110-220 volts",
                    "115-230 volts",
                    "120-240 volts",
                    "125-250 volts"
                ],
                correctIndex: 3,
                explanation: "NEC 210.8(A). Theory: 125–250 V is the correct voltage range for dwelling GFCI requirements."
            },
            {
                text: "All 15 or 20 amp, single-phase, 125 volt through 250 volt receptacles located within ____ feet of a fountain edge shall be provided with GFCI protection.",
                options: [
                    "20 ft",
                    "24 ft",
                    "25 ft",
                    "30 ft"
                ],
                correctIndex: 0,
                explanation: "NEC 680.58. Theory: GFCI protection required within 20 feet of fountain edge."
            },
            {
                text: "Where ungrounded conductors are run in parallel in multiple raceways, the equipment grounding conductor, where used, shall be ____.",
                options: [
                    "installed in one raceway only",
                    "run in parallel in each raceway",
                    "not required",
                    "bare"
                ],
                correctIndex: 1,
                explanation: "NEC 250.122(F)(1)(b). Theory: EGC must be run in parallel in each raceway."
            },
            {
                text: "Where a dwelling has a two car attached garage, the Code requires a minimum of ____ receptacle outlet(s) shall be installed in the garage.",
                options: [
                    "none required",
                    "one outlet",
                    "two outlets",
                    "three outlets"
                ],
                correctIndex: 2,
                explanation: "NEC 210.52(G)(1). Theory: Minimum two receptacles required in attached garage."
            },
            {
                text: "Track lighting where installed in a continuous row, each individual section of not more than ____ feet in length shall have one additional support.",
                options: [
                    "4 feet",
                    "6 feet",
                    "8 feet",
                    "12 feet"
                ],
                correctIndex: 0,
                explanation: "NEC 410.154. Theory: Additional support every 4 feet of track."
            },
            {
                text: "The demand load for a 14 kW range installed in a dwelling unit is ____ kW.",
                options: [
                    "8 kW",
                    "8.4 kW",
                    "8.8 kW",
                    "12 kW"
                ],
                correctIndex: 2,
                explanation: "NEC Table 220.55. Theory: 8 kW base × 110% = 8.8 kW."
            },
            {
                text: "Where multiple driven ground rods are used to form the grounding electrode system, in order to maintain an effective grounding electrode system, they shall not be less than ____ apart.",
                options: [
                    "36\"",
                    "48\"",
                    "60\"",
                    "72\""
                ],
                correctIndex: 3,
                explanation: "NEC 250.53(A)(3). Theory: Minimum spacing between ground rods is 6 feet (72\")."
            },
            {
                text: "Luminaires installed in exposed or concealed locations under metal-corrugated sheet roof decking shall be installed and supported so there is not less than ____ clearance from the lowest surface of the roof decking to the top of the luminaire.",
                options: [
                    "1 1/4\"",
                    "1 1/2\"",
                    "1 3/4\"",
                    "1 7/8\""
                ],
                correctIndex: 1,
                explanation: "NEC 410.10(F). Theory: Minimum 1½-inch clearance required."
            },
            {
                text: "Duty on elevator and dumbwaiter driving machine motors and driving motors of motor-generators used with generator field control shall be rated as ____.",
                options: [
                    "intermittent",
                    "lockable",
                    "continuous",
                    "varying"
                ],
                correctIndex: 0,
                explanation: "NEC 620.61(B)(1). Theory: Elevator motors are rated intermittent duty."
            },
            {
                text: "The frame of a portable generator at a tree lot shall ____ to be connected to a grounded electrode system if the normally non-current carrying metal parts of equipment and the EGC terminals of receptacles are bonded to the generator frame, and the generator only supplies receptacles mounted on the generator.",
                options: [
                    "not be required",
                    "be required",
                    "not be permitted",
                    "be permitted"
                ],
                correctIndex: 0,
                explanation: "NEC 250.34(A). Theory: Portable generators supplying only mounted receptacles do not require connection to a grounding electrode system."
            },
            {
                text: "Where abandoned communications cables are identified for future use with a tag, the tag shall be ____.",
                options: [
                    "identified",
                    "suitable",
                    "marked",
                    "of sufficient durability to withstand environment"
                ],
                correctIndex: 3,
                explanation: "NEC 800.25. Theory: Tags must be of sufficient durability to withstand the environment."
            },
            {
                text: "When an installation uses metal conduits entering service equipment or enclosures with concentric or eccentric knockouts, the raceway(s) shall be equipped with ____.",
                options: [
                    "single locknuts",
                    "double locknuts",
                    "at least one locknut and one bushing",
                    "bonding jumpers, and bonding-type locknuts or bushings"
                ],
                correctIndex: 3,
                explanation: "NEC 250.92(B)(1-4). Theory: Bonding jumpers or bonding-type locknuts/bushings are required for concentric/eccentric knockouts."
            }
        ]
    },
    {
        id: "openbook_4",
        title: "Journeyman Open Book Exam #4",
        timeMinutes: 60,
        questions: [
            {
                text: "One who has skills and knowledge related to the construction and operation of the electrical equipment and installations and has received safety training to recognize and avoid the hazards involved, is defined as a/an ______ person.",
                options: [
                    "grandfather",
                    "acceptable",
                    "qualified",
                    "parts changer"
                ],
                correctIndex: 2,
                explanation: "NEC Article 100 Definitions. Theory: A 'Qualified Person' has the skills, knowledge, and safety training required."
            },
            {
                text: "All outdoor outlets for dwellings, that are supplied by single-phase branch circuits rated 150 volts to ground or less, ______ amperes or less, shall have GFCI protection for personnel.",
                options: [
                    "50",
                    "60",
                    "70",
                    "75"
                ],
                correctIndex: 0,
                explanation: "NEC 210.8(F). Theory: GFCI protection required for outdoor outlets 50 A or less."
            },
            {
                text: "Type NM cable is permitted for use under all the following conditions or locations except ______.",
                options: [
                    "in Type V construction",
                    "in a multifamily dwelling unit",
                    "as a feeder",
                    "in a damp or wet location"
                ],
                correctIndex: 3,
                explanation: "NEC 334.12(B)(4). Theory: NM cable is not permitted in damp or wet locations."
            },
            {
                text: "Direct-buried cables located in a trench below 2\" of concrete shall have a minimum cover of ______.",
                options: [
                    "6\"",
                    "12\"",
                    "18\"",
                    "24\""
                ],
                correctIndex: 2,
                explanation: "NEC Table 300.5(A) Column 1. Theory: Minimum cover is 18 inches when below 2 inches of concrete."
            },
            {
                text: "A 125 volt, 15 amp rated receptacle located in a hallway of a dwelling unit is required to be ______.",
                options: [
                    "GFCI protected",
                    "on a dedicated circuit",
                    "in need of a 20 amp receptacle",
                    "listed tamper-resistant"
                ],
                correctIndex: 3,
                explanation: "NEC 406.12(1). Theory: All 15- and 20-amp, 125-volt receptacles in dwelling hallways must be listed tamper-resistant."
            },
            {
                text: "Residential in sink electrically operated kitchen waste disposers shall be permitted to be cord-and-plug connected however, the flexible cord is to be not less than 18\" in length and not over ______ in length.",
                options: [
                    "24\"",
                    "30\"",
                    "36\"",
                    "48\""
                ],
                correctIndex: 2,
                explanation: "NEC 422.16(B)(1)(1). Theory: Maximum cord length is 36 inches."
            },
            {
                text: "Isolated ground receptacles that incorporate an isolating equipment grounding conductor intended for the reduction of electrical noise or electromagnetic interference, shall be clearly identified by a/an ______ located on the face of the receptacle.",
                options: [
                    "green dot",
                    "yellow circle",
                    "red triangle",
                    "orange triangle"
                ],
                correctIndex: 3,
                explanation: "NEC 406.3(E). Theory: Isolated-ground receptacles are identified by an orange triangle."
            },
            {
                text: "All conductors of a multiwire branch circuit shall originate from the same panelboard, simultaneously disconnect all ungrounded conductors and supply only line-to- ______ loads.",
                options: [
                    "line",
                    "ungrounded",
                    "primary",
                    "neutral"
                ],
                correctIndex: 3,
                explanation: "NEC 210.4(C). Theory: Multiwire branch circuits supply line-to-neutral loads only."
            },
            {
                text: "An unintentional, electrically conducting connection between an ungrounded conductor, metallic enclosures, metallic raceways, metallic equipment or earth is referred to as a/an ______.",
                options: [
                    "ground fault",
                    "open circuit",
                    "short circuit",
                    "circuit bypass"
                ],
                correctIndex: 0,
                explanation: "NEC Article 100 Definitions. Theory: This is the exact definition of a ground fault."
            },
            {
                text: "For temporary wiring, a box, conduit body, or other enclosure shall ______ for splices at tree lots and similar installations.",
                options: [
                    "not be permitted",
                    "be permitted",
                    "be required",
                    "not be required"
                ],
                correctIndex: 2,
                explanation: "NEC 590.4(G). Theory: Enclosures are required for all splices in temporary wiring."
            },
            {
                text: "Where no GFCI protection is provided, the mounting height of a paddle fan located above a spa or hot tub shall not be less than ______ feet.",
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correctIndex: 3,
                explanation: "NEC 680.43(B)(1)(a). Theory: Minimum 12 ft when no GFCI is provided."
            },
            {
                text: "Rooms or areas of dwelling units shall be protected by a listed combination-type arc-fault circuit interrupter to provide protection of the entire ______.",
                options: [
                    "feeder",
                    "branch circuit",
                    "service",
                    "load center"
                ],
                correctIndex: 1,
                explanation: "NEC 210.12(A)(1). Theory: AFCI protects the entire branch circuit."
            },
            {
                text: "Equipment or materials to which has been attached a symbol, or other identifying mark of an organization that is acceptable to the authority having jurisdiction. This mark is ______.",
                options: [
                    "labeled",
                    "suitable",
                    "acceptable",
                    "identified"
                ],
                correctIndex: 0,
                explanation: "NEC Article 100 Definitions. Theory: This is the definition of 'Labeled'."
            },
            {
                text: "All 15 and 20 amp, 125 and 250 volt, nonlocking receptacles located in a wet location shall be listed ______ type.",
                options: [
                    "weather proof",
                    "water proof",
                    "water resistant",
                    "weather resistant"
                ],
                correctIndex: 3,
                explanation: "NEC 406.9(B). Theory: Wet-location receptacles must be listed weather resistant."
            },
            {
                text: "The permitted demand factor for five household clothes dryers in a multifamily dwelling is ______.",
                options: [
                    "70%",
                    "75%",
                    "80%",
                    "85%"
                ],
                correctIndex: 3,
                explanation: "NEC Table 220.54. Theory: Five or more dryers = 85% demand factor."
            },
            {
                text: "A controller that includes motor overload protection and the maximum branch-circuit short-circuit and ground-fault protection for such applications shall be ______.",
                options: [
                    "required",
                    "recognized",
                    "permitted",
                    "suitable"
                ],
                correctIndex: 3,
                explanation: "NEC 430.8. Theory: The controller must be suitable for the application."
            },
            {
                text: "Type UF cable is permitted to be used ______.",
                options: [
                    "as service entrance",
                    "in commercial garages",
                    "where subject to physical damage",
                    "for wiring in wet, dry, or corrosive locations"
                ],
                correctIndex: 3,
                explanation: "NEC 340.10(3). Theory: UF cable is permitted in wet, dry, or corrosive locations."
            },
            {
                text: "Cables with entirely nonmetallic sheaths shall be permitted to enter the top of a surface-mounted enclosure through one or more nonflexible raceways not less than ______ and not more than 10 feet in length, provided all conditions are met.",
                options: [
                    "12\"",
                    "16\"",
                    "18\"",
                    "24\""
                ],
                correctIndex: 2,
                explanation: "NEC 312.5(C) ex.1. Theory: Minimum 18 inches of raceway."
            },
            {
                text: "Utilization equipment weighing not more than 6 pounds shall be permitted to be supported on other boxes or plaster rings that are secured to other boxes, provided the equipment or its supporting yoke is secured to the box with no fewer than two ______ or larger screws.",
                options: [
                    "#6",
                    "#8",
                    "#10",
                    "#12"
                ],
                correctIndex: 0,
                explanation: "NEC 314.27(D) ex. Theory: Minimum two #6 screws."
            },
            {
                text: "Nonmetallic cable trays shall be made of ______ material.",
                options: [
                    "watertight",
                    "waterproof",
                    "fire-resistant",
                    "flame-retardant"
                ],
                correctIndex: 3,
                explanation: "NEC 392.100(F). Theory: Nonmetallic cable trays must be flame-retardant."
            },
            {
                text: "For dwelling units, outdoor receptacles that are not ______ and are supplied by a branch circuit dedicated to snow-melting equipment are required to have GFCI protection for personnel.",
                options: [
                    "accessible",
                    "guarded",
                    "covered",
                    "readily accessible"
                ],
                correctIndex: 3,
                explanation: "NEC 210.8(A) ex.1. Theory: Readily accessible outdoor receptacles on snow-melt circuits still require GFCI."
            },
            {
                text: "For a service rated 100 through 400 amps, the service conductors supplying the entire load of a one family dwelling shall be permitted to have an ampacity of ______ of the service rating.",
                options: [
                    "83%",
                    "80%",
                    "75%",
                    "70%"
                ],
                correctIndex: 0,
                explanation: "NEC 310.12(A). Theory: 83% for dwelling services 100–400 A."
            },
            {
                text: "AFCI protection is required for all 15 and 20 amp receptacles located in all the following except ______.",
                options: [
                    "residential garages",
                    "patient sleeping rooms",
                    "dormitory closets",
                    "guest suites"
                ],
                correctIndex: 0,
                explanation: "NEC 210.12(B)(C). Theory: Residential garages are exempt from AFCI in this context."
            },
            {
                text: "One or more metal in-ground support structure(s) in direct contact with the earth vertically for ______ feet or more, with or without concrete encasement is a permitted grounding electrode.",
                options: [
                    "6",
                    "8",
                    "10",
                    "12"
                ],
                correctIndex: 2,
                explanation: "NEC 250.52(A)(2). Theory: Minimum 10 feet in contact with earth."
            },
            {
                text: "Which of the following cord types is permitted in wet location and is sunlight resistant?",
                options: [
                    "SPT-2",
                    "STOOW",
                    "THWN",
                    "XHHW"
                ],
                correctIndex: 1,
                explanation: "NEC Table 400.4 and Note 9. Theory: STOOW is permitted in wet locations and is sunlight resistant."
            }
        ]
    },
    {
        id: "openbook_5",
        title: "Journeyman Open Book Exam #5",
        timeMinutes: 60,
        questions: [
            {
                text: "Portable structures for fairs, carnivals and similar events shall not be located under or within a space 15 feet horizontally of conductors operating in excess of ______ volts.",
                options: [
                    "1000",
                    "600",
                    "300",
                    "250"
                ],
                correctIndex: 1,
                explanation: "NEC 525.5(B)(2). Theory: 600 volts is the threshold for portable structures."
            },
            {
                text: "Which of the following is not required to be marked on the name plate of a transformer?",
                options: [
                    "Frequency",
                    "Amount of insulating liquid",
                    "AWG size",
                    "Clearance for ventilating openings"
                ],
                correctIndex: 2,
                explanation: "NEC 450.11(A). Theory: AWG size of conductors is not required on the nameplate."
            },
            {
                text: "Temporary electric power and lighting installations shall be permitted for a period not to exceed ______ days for decorative holiday lighting and similar purposes.",
                options: [
                    "25",
                    "50",
                    "60",
                    "90"
                ],
                correctIndex: 3,
                explanation: "NEC 590.3(B). Theory: Maximum 90 days for holiday lighting."
            },
            {
                text: "______ is permitted in the dedicated electrical space above a panelboard.",
                options: [
                    "Water piping",
                    "Leak protection",
                    "Sprinkler protection",
                    "Air-conditioning ducts"
                ],
                correctIndex: 2,
                explanation: "NEC 110.26(E)(1)(c). Theory: Sprinkler protection is permitted."
            },
            {
                text: "Grounded conductors of circuits with parallel conductors in a panelboard shall be permitted to terminate in a single terminal if the terminal is ______ for connection of more than one conductor.",
                options: [
                    "identified",
                    "listed",
                    "recognized",
                    "suitable"
                ],
                correctIndex: 0,
                explanation: "NEC 408.41 ex. Theory: The terminal must be identified for multiple grounded conductors."
            },
            {
                text: "A household electric range with a rating of 8 3/4 kW or more, the minimum branch circuit rating shall be ______ amps.",
                options: [
                    "35",
                    "40",
                    "45",
                    "50"
                ],
                correctIndex: 1,
                explanation: "NEC 210.19(C). Theory: Minimum 40 A branch circuit for ranges ≥ 8¾ kW."
            },
            {
                text: "The phase having the higher voltage to ground is ______, when an industrial control panel is supplied from a 3Ø, 4-wire, delta connected electrical system.",
                options: [
                    "permitted to be any phase on a delta connection",
                    "required to be the “C” phase on a delta connection",
                    "required to be the “B” phase on a delta connection",
                    "required to be the “A” phase on a delta connection"
                ],
                correctIndex: 2,
                explanation: "NEC 409.102(B). Theory: The B phase (high-leg) is required to be the higher voltage to ground."
            },
            {
                text: "The maximum ampere rating permitted for a 125 volt, single-phase, receptacle outlet having a cord-and-plug connected motor load that does not have individual overload protection is ______.",
                options: [
                    "15 amps",
                    "20 amps",
                    "25 amps",
                    "30 amps"
                ],
                correctIndex: 0,
                explanation: "NEC 430.42(C). Theory: Maximum 15 A for cord-and-plug motor loads without individual overload protection."
            },
            {
                text: "Service equipment at carnivals and fairs, shall not be installed in a location that is accessible to unqualified persons, unless the equipment ______.",
                options: [
                    "is installed at a height over 6 feet",
                    "is provided with GFCI protection",
                    "is provided with AFCI protection",
                    "is lockable"
                ],
                correctIndex: 3,
                explanation: "NEC 525.10(A). Theory: Service equipment must be lockable."
            },
            {
                text: "Where an NM cable is installed parallel to framing members, the cable shall be installed so that the nearest edge of the cable is not less than ______ from the nearest edge of the framing member.",
                options: [
                    "1/2\"",
                    "1\"",
                    "1 1/4\"",
                    "1 1/2\""
                ],
                correctIndex: 2,
                explanation: "NEC 300.4(D). Theory: Minimum 1¼-inch clearance from edge of framing."
            },
            {
                text: "Flexible cords shall be used only in continuous lengths, without splices, other than splices for the repair of hard-service cord or ______ cord under certain conditions.",
                options: [
                    "junior hard-service",
                    "lamp",
                    "tinsel",
                    "portable"
                ],
                correctIndex: 0,
                explanation: "NEC 400.13. Theory: Junior hard-service cord is permitted for repair splices."
            },
            {
                text: "Feeder and branch circuit conductors that are installed on piers shall be provided ground-fault protection not exceeding ______.",
                options: [
                    "30 mA",
                    "25 mA",
                    "20 mA",
                    "18 mA"
                ],
                correctIndex: 0,
                explanation: "NEC 682.15(B). Theory: 30 mA GFCI protection required on piers."
            },
            {
                text: "Cartridge fuses in circuits of any voltage, and all fuses in circuits over ______ volts to ground, shall be provided with a disconnecting means on their supply side so that each circuit containing fuses can be independently disconnected from the source of power.",
                options: [
                    "150",
                    "125",
                    "120",
                    "60"
                ],
                correctIndex: 0,
                explanation: "NEC 240.40. Theory: Over 150 V to ground requires disconnecting means."
            },
            {
                text: "Overhead conductors not over 1,000 volts pass over a track rails of railroads, they shall have a minimum clearance of not less than ______ feet above finished grade.",
                options: [
                    "12",
                    "15",
                    "18",
                    "24 1/2"
                ],
                correctIndex: 3,
                explanation: "NEC 225.18(5). Theory: 24½ feet over railroad tracks."
            },
            {
                text: "Outdoor mobile home disconnecting means shall be installed so the bottom of the enclosure containing the disconnecting means is not less than ______ above finished grade or working platform.",
                options: [
                    "24\"",
                    "36\"",
                    "48\"",
                    "60\""
                ],
                correctIndex: 0,
                explanation: "NEC 550.32(F). Theory: Minimum 48 inches."
            },
            {
                text: "For dwelling units, GFCI protection shall be provided for personnel in ______.\nI. bathrooms   II. crawl spaces   III. basements",
                options: [
                    "I only",
                    "I and II only",
                    "I and III only",
                    "I, II, and III"
                ],
                correctIndex: 3,
                explanation: "NEC 210.8(A)(1)(4&5). Theory: GFCI required in bathrooms, crawl spaces, and unfinished basements."
            },
            {
                text: "Personnel doors where equipment rated 800 amperes or more that contains overcurrent devices, space less than ______ feet from the door(s) intended for entrance to and egress from the working space.",
                options: [
                    "12",
                    "15",
                    "20",
                    "25"
                ],
                correctIndex: 3,
                explanation: "NEC 110.26(C)(3). Theory: 25 feet for 800 A or larger equipment."
            },
            {
                text: "Communications wires and cables and CATV type coaxial cables shall have a vertical clearance of not less than ______ from all points of roofs which they pass.",
                options: [
                    "18\"",
                    "36\"",
                    "6 feet",
                    "8 feet"
                ],
                correctIndex: 3,
                explanation: "NEC 800.44(B). Theory: Minimum 8 feet vertical clearance over roofs."
            },
            {
                text: "The installation and wiring of separately derived systems operating at 120 volts line-to-line and ______ volts to ground for sensitive electronic equipment.",
                options: [
                    "30",
                    "50",
                    "60",
                    "85"
                ],
                correctIndex: 2,
                explanation: "NEC 647.1. Theory: 60 V to ground (120 V line-to-line) for sensitive electronic systems."
            },
            {
                text: "Installation of direct buried cables in an area that is subject to movement by frost or settlement of the soil shall be ______.",
                options: [
                    "heated electrically",
                    "of XHHW only",
                    "on running boards",
                    "placed with “S” loops"
                ],
                correctIndex: 3,
                explanation: "NEC 300.5(J) ex. Theory: S-loops are required to accommodate soil movement."
            },
            {
                text: "Grounding electrodes of pipe or conduit shall not be smaller than trade size ______ and, where of steel, shall have the outer surface galvanized or otherwise metal-coated for corrosion protection.",
                options: [
                    "1/2\"",
                    "3/4\"",
                    "1\"",
                    "1 1/4\""
                ],
                correctIndex: 1,
                explanation: "NEC 250.52(A)(5)(1). Theory: Minimum ¾-inch trade size."
            },
            {
                text: "All switchboards, switchgear, and panelboards supplied by a ______ in other than one or two-family dwellings shall be permanently marked to indicate each device or equipment where the power originates.",
                options: [
                    "feeder",
                    "service",
                    "generator",
                    "alternator"
                ],
                correctIndex: 0,
                explanation: "NEC 408.4(B). Theory: Each feeder must be marked at the panelboard."
            },
            {
                text: "Where exposed NM cable passes through a floor, the NM cable shall be protected from damage by an approved means extending at least ______ above the floor.",
                options: [
                    "18\"",
                    "16\"",
                    "8\"",
                    "6\""
                ],
                correctIndex: 3,
                explanation: "NEC 334.15(B). Theory: Minimum 6 inches of protection above the floor."
            },
            {
                text: "PVC conduit shall be securely fastened within ______ of each outlet, junction device, conduit body, or other conduit termination box.",
                options: [
                    "24\"",
                    "30\"",
                    "36\"",
                    "48\""
                ],
                correctIndex: 2,
                explanation: "NEC 352.30(A). Theory: Maximum support spacing 36 inches from terminations."
            },
            {
                text: "Grounding conductors and bonding jumpers shall not be connected by ______.",
                options: [
                    "listed pressure connectors",
                    "exothermic welding process",
                    "terminal bars",
                    "sheet metal screws"
                ],
                correctIndex: 3,
                explanation: "NEC 250.8(A). Theory: Sheet metal screws are not permitted for grounding connections."
            }
        ]
    },
    {
        id: "openbook_6",
        title: "Journeyman Open Book Exam #6",
        timeMinutes: 60,
        questions: [
            {
                text: "Which of the following wiring methods is not permitted in the ceiling space used as a return-air plenum?",
                options: [
                    "PVC",
                    "MI cable",
                    "AC cable",
                    "IMC conduit"
                ],
                correctIndex: 0,
                explanation: "NEC 300.22(C)(1). Theory: PVC conduit is not permitted in return-air plenums."
            },
            {
                text: "The ampacity of a conductor is the current, in amperes, that the conductor can carry continuously under the conditions of use without exceeding its ______ rating.",
                options: [
                    "insulation",
                    "inductive",
                    "voltage",
                    "temperature"
                ],
                correctIndex: 3,
                explanation: "NEC Article 100 Definitions & 250.52(A)(5)(2). Theory: Ampacity is limited by the conductor’s temperature rating."
            },
            {
                text: "A copper-coated steel ground rod shall be at least ______.",
                options: [
                    "3/8\"",
                    "1/2\"",
                    "9/16\"",
                    "5/8\""
                ],
                correctIndex: 3,
                explanation: "NEC 250.52(A)(5)(4). Theory: Minimum diameter is 5/8 inch for copper-coated steel rods."
            },
            {
                text: "Shore power for boats shall be provided by single receptacles rated not less than ______ amperes.",
                options: [
                    "15",
                    "20",
                    "25",
                    "30"
                ],
                correctIndex: 3,
                explanation: "NEC 555.33(A)(4). Theory: Minimum 30 A receptacle for shore power."
            },
            {
                text: "Overhead conductors not over 1,000 volts pass over a public driveway, they shall have a minimum clearance of not less than ______ feet above finished grade.",
                options: [
                    "10",
                    "12",
                    "15",
                    "18"
                ],
                correctIndex: 3,
                explanation: "NEC 225.18(4). Theory: 18 feet over public driveways."
            },
            {
                text: "Where a rock bottom is encountered, the ground rod shall be permitted to be buried in a trench that is at least ______ deep.",
                options: [
                    "2 1/2 feet",
                    "3 feet",
                    "24\"",
                    "48\""
                ],
                correctIndex: 0,
                explanation: "NEC 250.53(A)(4). Theory: Minimum 2½ feet deep when rock bottom is encountered."
            },
            {
                text: "Instruments, pilot lights, voltage transformers, and other switchboard or switchgear devices with potential coils shall be supplied by a circuit that is protected by standard overcurrent devices rated ______ amperes or less.",
                options: [
                    "30",
                    "20",
                    "15",
                    "25"
                ],
                correctIndex: 2,
                explanation: "NEC 408.52. Theory: Maximum 15 A protection for instrument circuits."
            },
            {
                text: "Direct buried conductors emerging from grade shall be protected by enclosures or raceways up to a point at least ______ above finished grade.",
                options: [
                    "8'",
                    "10'",
                    "12'",
                    "22\""
                ],
                correctIndex: 0,
                explanation: "NEC 300.5(D)(1). Theory: Minimum 8 feet of protection above grade."
            },
            {
                text: "The controller disconnecting means for a motor, and the motor is not in sight of the disconnecting means, the following is required ______.",
                options: [
                    "the driven machinery location must be located closer to the disconnect",
                    "the disconnecting means shall be lockable in the open position",
                    "the disconnecting means must be readily accessible",
                    "the disconnecting means shall be an isolating switch"
                ],
                correctIndex: 1,
                explanation: "NEC 430.102(B)(2) ex. Theory: Disconnect must be lockable in the open position."
            },
            {
                text: "What is the full load current of a 50 horsepower, 3Ø, 480v, wound rotor, AC motor?",
                options: [
                    "104 amps",
                    "52 amps",
                    "65 amps",
                    "41 amps"
                ],
                correctIndex: 2,
                explanation: "NEC Table 430.250. Theory: 65 A for 50 HP, 460 V wound-rotor motor."
            },
            {
                text: "In panelboards, fuses of any type shall be installed on the ______ side of any switches.",
                options: [
                    "positive",
                    "negative",
                    "load",
                    "line"
                ],
                correctIndex: 2,
                explanation: "NEC 408.39. Theory: Fuses must be on the line side of switches."
            },
            {
                text: "What is the minimum size equipment grounding conductor for a 50 amp rated branch circuit?",
                options: [
                    "#14",
                    "#12",
                    "#10",
                    "#8"
                ],
                correctIndex: 2,
                explanation: "NEC Table 250.122. Theory: #10 AWG minimum for 50 A circuit."
            },
            {
                text: "Liquidtight flexible metal conduit (LFMC) shall be securely fastened in place by an approved means within ______ of each box, cabinet, conduit body, or other conduit termination.",
                options: [
                    "8\"",
                    "12\"",
                    "16\"",
                    "24\""
                ],
                correctIndex: 1,
                explanation: "NEC 350.30(A). Theory: Maximum 12 inches from terminations."
            },
            {
                text: "Conduit nipples not over 24\" in length may be filled to a maximum of ______ of their CSA.",
                options: [
                    "50%",
                    "60%",
                    "70%",
                    "80%"
                ],
                correctIndex: 1,
                explanation: "Chapter 9 Note 4. Theory: 60% fill permitted for short nipples."
            },
            {
                text: "The interior of raceways installed underground shall be considered a/an ______ location.",
                options: [
                    "buried",
                    "isolated",
                    "damp",
                    "wet"
                ],
                correctIndex: 3,
                explanation: "NEC 300.5(B). Theory: Underground raceways are considered wet locations."
            },
            {
                text: "Rigid PVC, size 1 1/2\" shall be supported every ______.",
                options: [
                    "18\"",
                    "36\"",
                    "5 feet",
                    "8 feet"
                ],
                correctIndex: 2,
                explanation: "NEC Table 352.30(B). Theory: Maximum support spacing is 5 feet for 1½\" PVC."
            },
            {
                text: "Flat conductor cable (FCC) individual branch circuits shall have ratings not exceeding ______.",
                options: [
                    "30 amps",
                    "25 amps",
                    "20 amps",
                    "15 amps"
                ],
                correctIndex: 0,
                explanation: "NEC 324.10(B)(2). Theory: Maximum 30 A for FCC branch circuits."
            },
            {
                text: "A battery room where batteries are being charged, requires ventilation to prevent ______.",
                options: [
                    "corrosion",
                    "electrostatic charge",
                    "acid corrosion",
                    "an explosive mixture"
                ],
                correctIndex: 3,
                explanation: "NEC 480.10(A). Theory: Ventilation prevents explosive hydrogen-air mixture."
            },
            {
                text: "A single ground rod that does not have a resistance to ground of 25 ohms or less, can be supplemented by which of the following?",
                options: [
                    "Ground ring",
                    "Concrete encased electrode",
                    "Metal frame of building",
                    "Any of these"
                ],
                correctIndex: 3,
                explanation: "NEC 250.52(A)(2)(3)(4). Theory: Any supplemental electrode is permitted."
            },
            {
                text: "Openings around electrical penetrations into or through fire-resistant-rated walls, partitions, floors, or ceilings shall be firestopped using ______ methods to maintain the fire resistance rating.",
                options: [
                    "suitable",
                    "listed",
                    "identified",
                    "approved"
                ],
                correctIndex: 3,
                explanation: "NEC 300.21. Theory: Approved firestop methods required."
            },
            {
                text: "Panelboards equipped with snap switches rated at 30 amperes or less shall have overcurrent protection of ______ amperes or less.",
                options: [
                    "30",
                    "60",
                    "100",
                    "200"
                ],
                correctIndex: 3,
                explanation: "NEC 408.36(A). Theory: Maximum 200 A protection for snap-switch panelboards."
            },
            {
                text: "Type MC cable shall be permitted to be unsupported and unsecured where the cable is not more than ______ in length from the last point of connection to luminaires.",
                options: [
                    "36\"",
                    "48\"",
                    "60\"",
                    "72\""
                ],
                correctIndex: 3,
                explanation: "NEC 330.30(D)(2). Theory: Maximum 6 feet (72\") unsupported to luminaires."
            },
            {
                text: "Underground wiring within ______ horizontally from the inside wall of the pool shall be permitted in liquidtight flexible metal conduit listed for direct burial use.",
                options: [
                    "18\"",
                    "24\"",
                    "48\"",
                    "60\""
                ],
                correctIndex: 3,
                explanation: "NEC 680.11(A)(7). Theory: Within 5 feet (60\") of pool wall."
            },
            {
                text: "Branch circuits shall be rated in accordance with the ______.",
                options: [
                    "ampere rating of the largest receptacle",
                    "maximum permitted rating of the fuse or breaker",
                    "number of receptacle outlets in the branch circuit",
                    "ampere rating of the largest conductor"
                ],
                correctIndex: 1,
                explanation: "NEC 210.18. Theory: Branch circuits rated per the OCPD."
            },
            {
                text: "Color coding shall be permitted to identify intrinsically safe conductors where they are colored ______ and where no other conductors of the same color are used.",
                options: [
                    "pink",
                    "light blue",
                    "yellow",
                    "purple"
                ],
                correctIndex: 1,
                explanation: "NEC 504.80(C). Theory: Light blue is permitted for intrinsically safe circuits."
            }
        ]
    },
    {
        id: "openbook_7",
        title: "Journeyman Open Book Exam #7",
        timeMinutes: 60,
        questions: [
            {
                text: "Premises wiring shall not be ______ connected to a supply system unless the latter contains, for any grounded conductor of the interior system, a corresponding conductor that is grounded.",
                options: [
                    "directly",
                    "permanently",
                    "electrically",
                    "magnetically"
                ],
                correctIndex: 2,
                explanation: "NEC 200.3. Theory: Premises wiring must be electrically connected."
            },
            {
                text: "______ lists the direct-current resistance of conductors per kFT.",
                options: [
                    "Table 8, Chapter 9",
                    "Table 9, Chapter 9",
                    "Table 5, Chapter 9",
                    "Table 4, Chapter 9"
                ],
                correctIndex: 0,
                explanation: "NEC Chapter 9 Table 8. Theory: Table 8 gives DC resistance."
            },
            {
                text: "Electrical equipment, such as switchboards, switch gear, panel boards, industrial control panels, meter socket enclosures, and motor control centers, that is in other than ______, and is likely to require examination, adjustment, servicing, or maintenance while energized, shall be field or factory marked to warn qualified persons of potential electric arc flash hazards.",
                options: [
                    "locked rooms",
                    "schools",
                    "testing areas",
                    "dwelling units"
                ],
                correctIndex: 3,
                explanation: "NEC 110.16(A). Theory: Arc-flash warning labels required except in dwelling units."
            },
            {
                text: "Where simultaneous biplane examinations are undertaken with the X-ray units, the supply conductors and overcurrent protection devices shall be 100% of the ______ demand rating of each X-ray unit.",
                options: [
                    "continuous",
                    "non-continuous",
                    "instantaneous",
                    "momentary"
                ],
                correctIndex: 3,
                explanation: "NEC 517.73(A). Theory: Momentary demand rating used for X-ray equipment."
            },
            {
                text: "______ The highest level that water can reach before it spills out.",
                options: [
                    "Over Flow",
                    "Escape Limit",
                    "Datum Level",
                    "Maximum Water Level"
                ],
                correctIndex: 3,
                explanation: "NEC Article 100 Definitions. Theory: This is the definition of Maximum Water Level."
            },
            {
                text: "Flexible cord used in extension cords made with separately listed and installed components shall be permitted to be supplied by a branch circuit in accordance with the following: 20 ampere circuits ______ and larger.",
                options: [
                    "#24",
                    "#16",
                    "#14",
                    "#12"
                ],
                correctIndex: 1,
                explanation: "NEC 240.5(B)(4). Theory: #16 AWG minimum for 20 A extension cords."
            },
            {
                text: "Selective coordination shall not be required between two overcurrent devices located in series if no ______ are connected in parallel with the downstream device.",
                options: [
                    "fuses",
                    "disconnects",
                    "devices",
                    "loads"
                ],
                correctIndex: 3,
                explanation: "NEC 708.54 ex. Theory: No parallel loads allowed for selective coordination exemption."
            },
            {
                text: "Electrical equipment provided with ______ openings shall be installed so that walls or other obstructions do not prevent the free circulation of air through the equipment.",
                options: [
                    "ventilating",
                    "vented",
                    "filtered",
                    "gated"
                ],
                correctIndex: 0,
                explanation: "NEC 110.13(B). Theory: Ventilating openings must remain clear."
            },
            {
                text: "The feeder or branch circuit disconnecting means shall have a rating not less than the ______ to be served.",
                options: [
                    "actual",
                    "minimum",
                    "calculated",
                    "maximum"
                ],
                correctIndex: 2,
                explanation: "NEC 225.39. Theory: Disconnect rating based on calculated load."
            },
            {
                text: "Wiring located above heated ceilings shall be spaced not less than ______ above the heated ceiling.",
                options: [
                    "2\"",
                    "3\"",
                    "4\"",
                    "6\""
                ],
                correctIndex: 0,
                explanation: "NEC 424.36. Theory: Minimum 2 inches spacing above heated ceilings."
            },
            {
                text: "Conductors of branch circuits supplying more than one receptacle for cord-and-plug connected portable tools shall have an ampacity ______ the rating of the branch circuit.",
                options: [
                    "equal to",
                    "of not less than",
                    "greater than",
                    "125%"
                ],
                correctIndex: 1,
                explanation: "NEC 210.19(A)(2). Theory: Ampacity shall be not less than the branch-circuit rating."
            },
            {
                text: "Ferrous raceways and fittings protected from corrosion solely by ______ shall be permitted only indoors and in occupancies not subject to severe corrosive influences.",
                options: [
                    "enamel",
                    "silicone",
                    "galvanize",
                    "rubber"
                ],
                correctIndex: 0,
                explanation: "NEC 344.10(A)(3). Theory: Enamel coating permitted only indoors."
            },
            {
                text: "Table ______ lists the minimum cover requirements for underground wiring methods 1000 volts or less.",
                options: [
                    "312.6(A)",
                    "310.104",
                    "300.19(A)",
                    "300.5(A)"
                ],
                correctIndex: 3,
                explanation: "NEC Table 300.5(A). Theory: Table 300.5 gives minimum cover."
            },
            {
                text: "Table ______ lists metric designators and trade sizes for conduit, tubing, etc.",
                options: [
                    "314.16(A)",
                    "355.44",
                    "384.22",
                    "300.1(C)"
                ],
                correctIndex: 3,
                explanation: "NEC Table 300.1(C). Theory: Table 300.1(C) provides metric/trade size conversions."
            },
            {
                text: "The temperature correction and adjustment factors shall be permitted to be applied to the ampacity for the temperature rating of the conductor, if the corrected and adjusted ampacity does not exceed the ampacity for the temperature rating of the ______ in accordance with the provisions of 110.14(C).",
                options: [
                    "termination",
                    "connector",
                    "enclosure",
                    "device"
                ],
                correctIndex: 0,
                explanation: "NEC 310.15(A). Theory: Factors limited by termination temperature rating."
            },
            {
                text: "A sign shall be placed at the service entrance equipment, indicating type and ______ of each onsite emergency power source.",
                options: [
                    "voltage",
                    "kW",
                    "hours of fuel",
                    "location"
                ],
                correctIndex: 3,
                explanation: "NEC 700.7(A). Theory: Sign must indicate location of each emergency source."
            },
            {
                text: "Separately installed pressure connectors shall be used with conductors at the ampacities not exceeding the ampacity at the listed and ______ temperature rating of the conductor.",
                options: [
                    "marked",
                    "tested",
                    "identified",
                    "certified"
                ],
                correctIndex: 2,
                explanation: "NEC 110.14(C)(2). Theory: Connectors identified for the conductor temperature rating."
            },
            {
                text: "The ______ number of branch circuits shall be determined from the total calculated load and the size or rating of the circuits used.",
                options: [
                    "minimum",
                    "maximum",
                    "total",
                    "largest"
                ],
                correctIndex: 0,
                explanation: "NEC 210.11(A). Theory: Minimum number of branch circuits required."
            },
            {
                text: "Internal parts of electrical equipment, including busbars, wiring terminals, insulators, and other surfaces, shall not be damaged or contaminated by foreign materials such as paint, plaster, cleaners, abrasives, or ______.",
                options: [
                    "moisture",
                    "organic residues",
                    "corrosive residues",
                    "dust and dirt"
                ],
                correctIndex: 2,
                explanation: "NEC 110.12(B). Theory: Corrosive residues prohibited."
            },
            {
                text: "A ______ is a portion of a sign that may provide protection from the weather but is not an electrical enclosure.",
                options: [
                    "Section Sign",
                    "Sign Body",
                    "Sign Gutter",
                    "Sign Enclosure"
                ],
                correctIndex: 1,
                explanation: "NEC Article 100 Definitions. Theory: Sign Body definition."
            },
            {
                text: "Where a panelboard is supplied through a transformer, the overcurrent protection required by 408.36 shall be located on the ______ side of the transformer.",
                options: [
                    "supply",
                    "primary",
                    "secondary",
                    "high leg"
                ],
                correctIndex: 2,
                explanation: "NEC 408.36(B). Theory: Secondary side protection."
            },
            {
                text: "Open equipment doors must not impede access to or from working space required in 110.26. If the door(s) reduce(s) the access to less than ______ inches wide and 6 1/2 feet high, access is considered impeded.",
                options: [
                    "18",
                    "24",
                    "30",
                    "36"
                ],
                correctIndex: 1,
                explanation: "NEC 110.26. Theory: Minimum 24 inches clear width."
            },
            {
                text: "Terminations on ______ cables rated over 600 volts, nominal, shall be accessible only to authorized and qualified personnel.",
                options: [
                    "portable",
                    "fixed",
                    "flexible",
                    "nonmetallic"
                ],
                correctIndex: 0,
                explanation: "NEC 400.36. Theory: Portable cables over 600 V have restricted access."
            },
            {
                text: "A switchboard, switchgear, or panelboard containing a 4-wire, ______ - connected system where the midpoint of one phase winding is grounded shall be legibly and permanently marked as follows: “Caution ______ Phase Has ______ Volts to Ground.”",
                options: [
                    "series",
                    "wye",
                    "delta",
                    "grounded"
                ],
                correctIndex: 2,
                explanation: "NEC 408.3(F)(1). Theory: High-leg delta marking required."
            },
            {
                text: "Where a building or structure has any combination of feeders, branch circuits, or services passing through it or supplying it, a permanent plaque or directory shall be installed at each feeder and branch circuit ______ location denoting all other services, feeders, or branch circuits supplying that building or structure or passing through that building or structure.",
                options: [
                    "disconnect",
                    "connection",
                    "termination",
                    "entrance"
                ],
                correctIndex: 0,
                explanation: "NEC 225.37. Theory: Disconnect location plaque required."
            }
        ]
    },
    {
        id: "openbook_8",
        title: "Journeyman Open Book Exam #8",
        timeMinutes: 60,
        questions: [
            {
                text: "In an Auditorium where conditions of supervision and maintenance ensure that only qualified persons will service the installation, flexible cords or cables identified in Table 400.4 for hard usage or extra-hard usage shall be permitted in cable trays used only for temporary wiring. All cords or cables shall be installed in a single layer. A permanent sign shall read CABLE TRAY FOR TEMPORARY WIRING ONLY and shall be attached to the cable tray at intervals not to exceed ____.",
                options: [
                    "8'",
                    "15'",
                    "25'",
                    "50'"
                ],
                correctIndex: 2,
                explanation: "NEC 518.3 ex. Theory: Maximum spacing for the warning sign is 25 feet."
            },
            {
                text: "Table ____ lists maximum distance between service-entrance cable supports.",
                options: [
                    "230.51(C)",
                    "240.4(G)",
                    "240.6(A)",
                    "250.3"
                ],
                correctIndex: 0,
                explanation: "NEC 230.51(C). Theory: Table 230.51(C) gives maximum support spacing for service-entrance cables."
            },
            {
                text: "Throughout the NEC, the voltage considered shall be that at which the circuit operates. The ____ rating of electrical equipment shall not be less than the nominal voltage of a circuit to which it is connected.",
                options: [
                    "current",
                    "voltage",
                    "marked",
                    "listed"
                ],
                correctIndex: 1,
                explanation: "NEC 110.4. Theory: Equipment voltage rating must be at least the nominal circuit voltage."
            },
            {
                text: "Table ____ lists the approximate square inch area of compact aluminum building wire.",
                options: [
                    "310.15(B)(16)",
                    "310.15(B)(17)",
                    "Table 5A, Chapter 9",
                    "Table 4, Chapter 9"
                ],
                correctIndex: 2,
                explanation: "NEC Table 5A (Chapter 9). Theory: Table 5A gives areas for compact aluminum conductors."
            },
            {
                text: "Type AC cable shall not be used ____.",
                options: [
                    "in dry locations",
                    "in voids of masonry block or tile walls not subject to dampness",
                    "above a lay-in ceiling",
                    "where exposed to corrosive conditions"
                ],
                correctIndex: 3,
                explanation: "NEC 320.12(4). Theory: AC cable is prohibited where exposed to corrosive conditions."
            },
            {
                text: "Where a feeder overcurrent device is not ____, branch-circuit overcurrent devices shall be installed on the load side, shall be mounted in a readily accessible location, and shall be of a lower ampere rating than the feeder overcurrent device.",
                options: [
                    "accessible",
                    "necessary",
                    "installed",
                    "readily accessible"
                ],
                correctIndex: 3,
                explanation: "NEC 225.40. Theory: Branch-circuit devices must be readily accessible when the feeder device is not."
            },
            {
                text: "Table ____ lists demand factors for kitchen equipment other than dwelling units.",
                options: [
                    "220.55",
                    "220.56",
                    "220.83",
                    "220.84"
                ],
                correctIndex: 1,
                explanation: "NEC Table 220.56. Theory: Table 220.56 gives demand factors for commercial kitchen equipment."
            },
            {
                text: "Threads that are cut in conduit, elbows, or nipples anywhere other than at the factory where the product is ____.",
                options: [
                    "manufactured",
                    "listed",
                    "certified",
                    "approved"
                ],
                correctIndex: 1,
                explanation: "NEC 300.6(A). Theory: Field-cut threads must be listed or approved after cutting."
            },
            {
                text: "Table ____ lists the dimensions of insulated conductors and fixture wires.",
                options: [
                    "300.1(C)",
                    "300.19(A)",
                    "Table 2, Chapter 9",
                    "Table 5, Chapter 9"
                ],
                correctIndex: 3,
                explanation: "NEC Table 5 (Chapter 9). Theory: Table 5 gives dimensions of insulated conductors."
            },
            {
                text: "Nonconductive coatings (such as paint, lacquer, and enamel) on equipment to be grounded shall be removed from threads and other contact surfaces to ensure good electrical continuity by means of fittings ____ so as to make such removal unnecessary.",
                options: [
                    "approved",
                    "labeled",
                    "listed",
                    "designed"
                ],
                correctIndex: 3,
                explanation: "NEC 250.12. Theory: Fittings must be designed to make coating removal unnecessary."
            },
            {
                text: "Overhead spans of ____ conductors and open multiconductor cables shall have a vertical clearance of not less than 8' 6\" above the roof surface.",
                options: [
                    "insulated",
                    "open",
                    "service",
                    "bare"
                ],
                correctIndex: 1,
                explanation: "NEC 225.19(A). Theory: Open conductors require 8 ft 6 in clearance above roof."
            },
            {
                text: "Table ____ lists the volume allowances required per conductor for outlet, device and junction boxes.",
                options: [
                    "314.16(A)",
                    "310.60",
                    "314.16(B)(1)",
                    "300.5"
                ],
                correctIndex: 2,
                explanation: "NEC Table 314.16(B)(1). Theory: Table 314.16(B)(1) gives box volume per conductor."
            },
            {
                text: "Each crane, monorail, or hoist shall be provided with a visible ____ marked with the manufacturer's name, rating in volts, frequency, number of phases, and circuit amperes as calculated in 610.14(E) and (F).",
                options: [
                    "sign",
                    "nameplate",
                    "notice",
                    "label"
                ],
                correctIndex: 1,
                explanation: "NEC 610.14(G). Theory: Visible nameplate required on crane/hoist."
            },
            {
                text: "Luminaires installed in exposed or concealed locations under metal-corrugated sheet roof decking shall be installed and supported so there is no less than 1 1/2\" measured from the ____ of the roof decking to the top of the luminaire.",
                options: [
                    "middle",
                    "lowest surface",
                    "midpoint",
                    "upper surface"
                ],
                correctIndex: 1,
                explanation: "NEC 410.10(F). Theory: Minimum clearance from lowest surface of decking."
            },
            {
                text: "The grounded conductor of a 3-phase, 3-wire delta service shall have an ampacity ____ that of the ungrounded conductors.",
                options: [
                    "not less than",
                    "equal to",
                    "125%",
                    "greater than"
                ],
                correctIndex: 0,
                explanation: "NEC 250.24(D)(3). Theory: Grounded conductor ampacity shall be not less than the ungrounded conductors."
            },
            {
                text: "____ lists the alternating-current reactance for 600 volt cables, 3-phase.",
                options: [
                    "Table 8, Chapter 9",
                    "Table 9, Chapter 9",
                    "Table 5, Chapter 9",
                    "Table 4, Chapter 9"
                ],
                correctIndex: 1,
                explanation: "NEC Table 9 (Chapter 9). Theory: Table 9 gives AC reactance values."
            },
            {
                text: "One type of enclosure permitted for use in outdoor corrosive environments is ____.",
                options: [
                    "Type 4X",
                    "Type 6",
                    "Type 12",
                    "Type 13"
                ],
                correctIndex: 0,
                explanation: "NEC Table 110.28. Theory: Type 4X is suitable for outdoor corrosive locations."
            },
            {
                text: "The grounding electrode conductor shall be of copper, aluminum, copper-clad aluminum, or the material selected shall be resistant to any ____ condition existing at the installation or shall be protected against corrosion.",
                options: [
                    "chemical",
                    "corrosive",
                    "deteriorating",
                    "damaging"
                ],
                correctIndex: 1,
                explanation: "NEC 250.62. Theory: Material must be corrosion-resistant or protected."
            },
            {
                text: "____ lists the maximum number of conductors or fixture wires in electrical metallic tubing (EMT) (Based on Chapter 9: Table 1, Table 4, and Table 5).",
                options: [
                    "Table 10, Chapter 9",
                    "310.15(B)(2)",
                    "C1",
                    "C2"
                ],
                correctIndex: 2,
                explanation: "NEC Annex C Table C1. Theory: Annex C Table C1 for EMT fill."
            },
            {
                text: "Where a terminal block is present in a box, a single volume allowance in accordance with ____.",
                options: [
                    "Table 314.16(A)",
                    "110.31",
                    "315.12(A)",
                    "Table 314.16(B)(1)"
                ],
                correctIndex: 3,
                explanation: "NEC Table 314.16(B)(1). Theory: Terminal blocks count as one conductor volume."
            },
            {
                text: "Each motion picture projector, floodlight, spotlight, or similar equipment shall have a clear working space not less than ____ wide on each side and at the rear thereof.",
                options: [
                    "24\"",
                    "30\"",
                    "36\"",
                    "3.5 feet"
                ],
                correctIndex: 1,
                explanation: "NEC 540.12. Theory: Minimum 30 inches working space."
            },
            {
                text: "____. A unit or assembly of units or sections and associated fittings forming a structural system used to securely fasten or support cables and raceways.",
                options: [
                    "HDPE System",
                    "RTRC System",
                    "Cable Tray System",
                    "Channel System"
                ],
                correctIndex: 2,
                explanation: "NEC Article 100 Definitions. Theory: Definition of Cable Tray System."
            },
            {
                text: "Danger signs shall be ____ posted at points of access to conductors in all conduit systems and cable systems. The danger sign(s) shall carry the following wording: Danger-High Voltage-Keep Out.",
                options: [
                    "permanently",
                    "clearly",
                    "legibly",
                    "conspicuously"
                ],
                correctIndex: 3,
                explanation: "NEC 305.12. Theory: Danger signs must be conspicuously posted."
            },
            {
                text: "Flexible cord used in extension cords made with separately listed and installed components shall be permitted to be supplied by a branch circuit in accordance with ____.",
                options: [
                    "sized per Table 400.5(A)(1)&(2)",
                    "sized per Table 310.15(B)(16)",
                    "separate components are not allowed to be field assembled",
                    "20 amp circuits - #16 AWG and larger"
                ],
                correctIndex: 3,
                explanation: "NEC 240.5(B)(4). Theory: #16 AWG permitted on 20 A circuits."
            },
            {
                text: "The rating of the ____ shall be considered to be the rating of the largest fuse that can be installed or the highest continuous trip setting for which the actual overcurrent device installed in a circuit breaker is rated or can be adjusted.",
                options: [
                    "feeder breaker",
                    "service disconnect",
                    "feeder overload",
                    "conductor withstand"
                ],
                correctIndex: 1,
                explanation: "NEC 230.95. Theory: Service disconnect rating for ground-fault protection."
            }
        ]
    },
    {
        id: "openbook_9",
        title: "Journeyman Open Book Exam #9",
        timeMinutes: 60,
        questions: [
            {
                text: "In a concealed knob-and-tube wiring system, a minimum clearance of ____ must be maintained between conductors.",
                options: [
                    "2\"",
                    "3\"",
                    "4\"",
                    "6\""
                ],
                correctIndex: 1,
                explanation: "NEC 394.19(A). Theory: 3 inches minimum clearance between conductors."
            },
            {
                text: "Table ____ lists the minimum size equipment grounding conductors.",
                options: [
                    "250.66",
                    "250.94",
                    "250.102(C)(1)",
                    "250.122"
                ],
                correctIndex: 3,
                explanation: "NEC Table 250.122. Theory: Table 250.122 gives minimum EGC size."
            },
            {
                text: "Information note: ANSI ____ -2017, Product Safety Signs and Labels, provides guidelines for suitable font sizes, words, colors, symbols, and location requirements for labels.",
                options: [
                    "Z535.4",
                    "Z535.1B",
                    "Z212.W",
                    "Z1956.G"
                ],
                correctIndex: 0,
                explanation: "NEC 110.21(B) I.N. 2. Theory: ANSI Z535.4 referenced for safety signs."
            },
            {
                text: "Where there is more than one driving machine in a machine room, the disconnecting means shall be numbered to correspond to the identifying number of the driving machine that they control. The protective device. The ____ of the supply side overcurrent device shall be provided with a sign to identify the ____ of the supply side overcurrent device.",
                options: [
                    "amperage",
                    "load",
                    "location",
                    "voltage"
                ],
                correctIndex: 2,
                explanation: "NEC 620.51(C). Theory: Disconnects must be labeled with location."
            },
            {
                text: "____ lists the percent of cross sectional fill permitted in conduit and tubing fill for conductors and cables.",
                options: [
                    "Table 4, Chapter 9",
                    "Table 8, Chapter 9",
                    "Table 1, Chapter 9",
                    "Table 5, Chapter 9"
                ],
                correctIndex: 2,
                explanation: "NEC Table 4 (Chapter 9). Theory: Table 4 gives percent fill."
            },
            {
                text: "Where the overcurrent device is rated over 800 amperes, the ampacity of the conductors it protects shall be ____ the rating of the overcurrent device defined in section 240.6.",
                options: [
                    "80% of",
                    "100% of",
                    "equal to or greater than",
                    "not less than"
                ],
                correctIndex: 2,
                explanation: "NEC 240.4(C). Theory: Conductors must be equal to or greater than the OCPD rating."
            },
            {
                text: "Where corrosion protection is necessary, and the conduit is threaded in the field, the threads shall be coated with a/an ____ electrically conductive, corrosion-resistant compound.",
                options: [
                    "Approved",
                    "UL Listed",
                    "Identified",
                    "Labeled"
                ],
                correctIndex: 0,
                explanation: "NEC 300.6(A). Theory: Approved conductive compound required."
            },
            {
                text: "A permanent and legible ____ diagram of the local switching arrangement, clearly identifying each point of connection to the high-voltage section, shall be provided within sight of each point of connection.",
                options: [
                    "schematic",
                    "riser",
                    "single-line",
                    "connection"
                ],
                correctIndex: 2,
                explanation: "NEC 230.70. Theory: Single-line diagram required."
            },
            {
                text: "For motors marked with design letters B, C, or D, conductors having an insulation rating of 75°C or higher shall be permitted to be used, provided the ampacity of such conductors does not exceed the ____ ampacity.",
                options: [
                    "60°C",
                    "75°C",
                    "90°C",
                    "104°C"
                ],
                correctIndex: 1,
                explanation: "NEC 110.14(C)(1)(a)(4). Theory: 75°C column used for these design letters."
            },
            {
                text: "Signs and outline lighting systems with lampholders for incandescent lamps shall be marked to indicate the maximum allowable lamp wattage per lampholder. The markings shall be permanently installed, in letters at least ____ high, and shall be located where visible during relamping.",
                options: [
                    "1/4\"",
                    "1/2\"",
                    "1\"",
                    "2\""
                ],
                correctIndex: 0,
                explanation: "NEC 600.4(C). Theory: Minimum ½-inch-high lettering."
            },
            {
                text: "Table ____ lists the maximum rating or setting of motor branch-circuit short circuit and ground fault protective devices.",
                options: [
                    "430.248",
                    "430.52(C)(1)",
                    "430.37",
                    "430.22"
                ],
                correctIndex: 1,
                explanation: "NEC Table 430.52(C)(1). Theory: Table for maximum motor branch-circuit protection."
            },
            {
                text: "Branch circuits recognized by this article shall be rated in accordance with the maximum permitted ampere rating or ____ of the overcurrent device.",
                options: [
                    "listing",
                    "marking",
                    "setting",
                    "rating"
                ],
                correctIndex: 2,
                explanation: "NEC 210.18. Theory: Branch circuit rated per the setting of the OCPD."
            },
            {
                text: "Ventilating pipes for motors, generators, or other rotating electrical machinery, or for enclosures for electrical equipment, shall be of metal not less than .021\" in thickness or of equally substantial noncombustible material and shall comply with: ____.",
                options: [
                    "have no more than 360° of bend",
                    "lead directly into attic air space",
                    "be protected against physical damage and against rusting or other corrosive influences",
                    "have hinged openings at each end to prevent the entrance of rodents or small birds"
                ],
                correctIndex: 2,
                explanation: "NEC 502.128(3). Theory: Vent pipes must be protected against damage and corrosion."
            },
            {
                text: "Table ____ lists the maximum cord-and-plug-connected load to a receptacle.",
                options: [
                    "210.21(B)(2)",
                    "210.24",
                    "210.21(B)(3)",
                    "220.3"
                ],
                correctIndex: 0,
                explanation: "NEC Table 210.21(B)(2). Theory: Table for cord-and-plug load on receptacles."
            },
            {
                text: "Boxes that enclose devices or utilization equipment shall have a depth that projects more than ____ rearward from the mounting plane of the box plus 1/4\".",
                options: [
                    "1/4\"",
                    "1/2\"",
                    "3/4\"",
                    "1 7/8\""
                ],
                correctIndex: 3,
                explanation: "NEC 314.24(B)(1). Theory: Minimum box depth projection."
            },
            {
                text: "Separately installed pressure connectors shall be used with conductors at the ampacities not exceeding the ampacity at the listed and identified temperature rating of the ____.",
                options: [
                    "connector",
                    "equipment",
                    "system",
                    "conductors"
                ],
                correctIndex: 0,
                explanation: "NEC 110.14(C)(2). Theory: Connector temperature rating limits ampacity."
            },
            {
                text: "Table ____ lists clearances over roadways, walkways, rail, water, and open land.",
                options: [
                    "300.5",
                    "220.102",
                    "235.360(A)",
                    "225.61"
                ],
                correctIndex: 3,
                explanation: "NEC Table 225.61. Theory: Clearances over roadways etc."
            },
            {
                text: "Where conductors of higher ampacity are used for any reason, the ampere rating or setting of the specified overcurrent device determines the ____.",
                options: [
                    "conductor size",
                    "inverse time",
                    "circuit rating",
                    "total ampacity"
                ],
                correctIndex: 2,
                explanation: "NEC 210.18. Theory: OCPD determines circuit rating."
            },
            {
                text: "Table ____ lists minimum depth of clear working space at electrical equipment.",
                options: [
                    "110.28",
                    "110.34(A)",
                    "110.34(E)",
                    "210.3"
                ],
                correctIndex: 1,
                explanation: "NEC Table 110.34(A). Theory: Working space depth for 600 V and higher."
            },
            {
                text: "The ampere rating of an electric range receptacle is permitted to be based on the demand load of a single range as specified in Table ____.",
                options: [
                    "210.21(B)(2)",
                    "210.21(B)(3)",
                    "210.24",
                    "220.55"
                ],
                correctIndex: 3,
                explanation: "NEC Table 220.55. Theory: Demand load for ranges."
            },
            {
                text: "What section of the NEC determines the installation of service equipment on manufactured buildings?",
                options: [
                    "230.60",
                    "545.7",
                    "240.6",
                    "250.66"
                ],
                correctIndex: 1,
                explanation: "NEC 545.7. Theory: Article 545 covers manufactured buildings."
            },
            {
                text: "Torque motors are rated for operation ____.",
                options: [
                    "at full torque",
                    "at F.L.C.",
                    "at standstill",
                    "with code letter"
                ],
                correctIndex: 2,
                explanation: "NEC 430.7(C). Theory: Torque motors rated at standstill."
            },
            {
                text: "\"Z.P.\" is an abbreviated marking used for motors to indicate ____.",
                options: [
                    "single-phase",
                    "induction-protected",
                    "thermally protected",
                    "impedance protected"
                ],
                correctIndex: 3,
                explanation: "NEC 430.7(A)(14). Theory: Z.P. = impedance protected."
            },
            {
                text: "____ RMC shall be permitted to be installed for direct burial and swimming pool applications.",
                options: [
                    "Stainless steel",
                    "Galvanized steel",
                    "Aluminum",
                    "Red brass"
                ],
                correctIndex: 3,
                explanation: "NEC 344.10(A)(1). Theory: Red brass RMC permitted for direct burial."
            },
            {
                text: "Which of the following is not considered part of a luminaire?",
                options: [
                    "ballast",
                    "a lampholder",
                    "lamp or lamps",
                    "parts designed to position the light source"
                ],
                correctIndex: 1,
                explanation: "NEC 100 Definitions (Luminaires). Theory: Ballast is not part of the luminaire definition."
            }
        ]
    },
    {
        id: "openbook_10",
        title: "Journeyman Open Book Exam #10",
        timeMinutes: 60,
        questions: [
            {
                text: "Motors and other rotating electrical machinery shall be totally enclosed or designed so as to minimize the entrance of ______.",
                options: [
                    "moisture",
                    "dust",
                    "corrosive particles",
                    "all of these"
                ],
                correctIndex: 3,
                explanation: "NEC 547.3(A)(B). Theory: Motors in agricultural buildings must minimize entrance of moisture, dust, and corrosive particles."
            },
            {
                text: "For the purpose of load calculations, the square footage of a dwelling unit includes ______.",
                options: [
                    "open porches",
                    "garages",
                    "areas not adaptable as future occupiable space",
                    "all of these"
                ],
                correctIndex: 1,
                explanation: "NEC 220.5(C). Theory: Garages are included in dwelling unit square footage for load calculations."
            },
            {
                text: "A receptacle’s grounding terminal shall only be used for connection to the ______ conductor.",
                options: [
                    "grounded",
                    "equipment grounding",
                    "ungrounded",
                    "grounding electrode"
                ],
                correctIndex: 1,
                explanation: "NEC 406.10(C). Theory: The grounding terminal connects only to the equipment grounding conductor."
            },
            {
                text: "Where overcurrent protection is provided as part of the industrial control panel, the supply conductors shall be considered as either feeders or ______ as covered by 240.21.",
                options: [
                    "taps",
                    "branch circuits",
                    "shunts",
                    "isolated"
                ],
                correctIndex: 0,
                explanation: "NEC 409.21(B)(2). Theory: Supply conductors to industrial control panels are treated as taps per 240.21."
            },
            {
                text: "Backfill that contains large rocks, paving materials, cinders, large or sharply angular substances, or corrosive material shall not be placed in an excavation where materials may damage raceways, cables, conductors, or other structures or prevent adequate compaction of fill or contribute to the ______ of raceways, cables, or other substructures.",
                options: [
                    "damage",
                    "deterioration",
                    "aging",
                    "corrosion"
                ],
                correctIndex: 3,
                explanation: "NEC 300.5(F). Theory: Corrosive backfill is prohibited to prevent damage to raceways and cables."
            },
            {
                text: "______ An electric device and circuit that controls a disconnecting means through a relay or equivalent device.",
                options: [
                    "Remote Disconnect Control",
                    "Safety Switch",
                    "Knife Switch",
                    "Shunt Trip"
                ],
                correctIndex: 0,
                explanation: "NEC Article 100 Definitions. Theory: Definition of Remote Disconnect Control."
            },
            {
                text: "Which of the following statements is false?",
                options: [
                    "For isolated ground receptacles, the receptacle grounding terminal is required to be connected to an insulated equipment grounding conductor run with the circuit conductors.",
                    "Round boxes are required to be used where conduits or connectors requiring the use of locknuts or bushings are to be connected to the side of the box.",
                    "Control circuit devices with screw-type pressure terminals used with #14 or smaller conductors are required to be torqued to a minimum of 7 lb-in.",
                    "Type MC cable is permitted to be manufactured as a single-conductor cable."
                ],
                correctIndex: 1,
                explanation: "NEC 314.2. Theory: Round boxes are NOT required when locknuts/bushings are used on the side; statement is false."
            },
            {
                text: "A permanent sign shall be attached to the cable tray at intervals not greater than 20 feet. The sign shall read as follows: (a) CABLE TRAY FOR WELDING CABLES ONLY (b) CABLE TRAY MAXIMUM VOLTAGE 300 (c) THE CABLE TRAY PROVIDES SUPPORT AT 6' INTERVALS (d) CABLES SHALL BE LOW VOLTAGE",
                options: [
                    "CABLE TRAY FOR WELDING CABLES ONLY",
                    "CABLE TRAY MAXIMUM VOLTAGE 300",
                    "THE CABLE TRAY PROVIDES SUPPORT AT 6' INTERVALS",
                    "CABLES SHALL BE LOW VOLTAGE"
                ],
                correctIndex: 0,
                explanation: "NEC 630.42(C). Theory: Cable tray used for welding cables must be marked “CABLE TRAY FOR WELDING CABLES ONLY”."
            },
            {
                text: "The individual responsible for starting, stopping, and controlling an amusement or supervising a concession.",
                options: [
                    "Ticket Taker",
                    "Assistant",
                    "Operator",
                    "Manager"
                ],
                correctIndex: 2,
                explanation: "NEC Article 100 Definitions. Theory: Definition of Operator for amusement rides."
            },
            {
                text: "A commercial building has an opening door in the wall on the second floor through which materials are moved into and out of a storage area located on the second floor. An overhead 120v branch circuit is to be installed from the second floor area of the building to a pole on which a flood-light will be mounted. Which of the following best describes Code requirements for the installation of this branch circuit?",
                options: [
                    "It is not permitted to be installed overhead.",
                    "It must be at least 3' from the side of the door.",
                    "It must be at least 3' above the bottom of the door.",
                    "It must not obstruct entrance to the material handling door and be 3' from the door."
                ],
                correctIndex: 3,
                explanation: "NEC 225.19(D)(1). Theory: Overhead conductors must clear doors by 3 ft horizontally."
            },
            {
                text: "Outdoor self-supporting radio and television receiving antennas, such as vertical rods, dishes, etc., shall be located well away from overhead conductors of electric light and power circuits over ______ volts to ground.",
                options: [
                    "30",
                    "120",
                    "150",
                    "300"
                ],
                correctIndex: 2,
                explanation: "NEC 810.16(B). Theory: 300 volts to ground clearance for antennas."
            },
            {
                text: "A Class 1 power-limited circuit shall be supplied from a source having a rated output of not more than 30 volts and ______ volt amperes.",
                options: [
                    "1000",
                    "1200",
                    "1500",
                    "2000"
                ],
                correctIndex: 0,
                explanation: "NEC 724.40. Theory: Class 1 power-limited source limited to 1000 VA."
            },
            {
                text: "Enclosures that are not over 100 cubic inches in size and which have two conduits supported within three feet on either side of the enclosure and the enclosure does not contain devices or support fixtures shall not be required to have the enclosure supported if the conduits are ______.",
                options: [
                    "rigid nonmetallic conduits",
                    "threaded into hubs identified for the purpose",
                    "installed with locknuts inside and outside enclosure",
                    "shoulders of fittings outside and locknuts inside the box"
                ],
                correctIndex: 1,
                explanation: "NEC 314.23(E). Theory: Conduits must be threaded into identified hubs."
            },
            {
                text: "Size #18 or #16 fixture wires, and flexible cords shall be permitted for the control and operating circuits of X-ray and auxiliary equipment where protected by not larger than ______ ampere overcurrent devices.",
                options: [
                    "6",
                    "15",
                    "20",
                    "30"
                ],
                correctIndex: 2,
                explanation: "NEC 660.9. Theory: #18/#16 fixture wires limited to 15 A protection."
            },
            {
                text: "Conductors drawn from a copper-clad aluminum rod with the copper metallurgically bonded to an aluminum core. The copper forms a minimum of ______ percent of the csa.",
                options: [
                    "10",
                    "20",
                    "40",
                    "70"
                ],
                correctIndex: 0,
                explanation: "NEC 310.3(B)(3). Theory: Copper-clad aluminum requires minimum 40% copper by cross-sectional area."
            },
            {
                text: "Concrete, brick or tile walls are considered as being ______.",
                options: [
                    "isolated",
                    "insulators",
                    "grounded",
                    "dry locations"
                ],
                correctIndex: 2,
                explanation: "NEC 110.26(A)(1) cond.2 & T.110.26(A)(1). Theory: Concrete/brick/tile walls are grounded."
            },
            {
                text: "______ locations are those that are hazardous because of the presence of easily ignitable fibers or flyings.",
                options: [
                    "Class I",
                    "Class II",
                    "Class III",
                    "Class II, division II"
                ],
                correctIndex: 2,
                explanation: "NEC 500.5(D). Theory: Class III locations involve ignitable fibers/flyings."
            },
            {
                text: "An isolated ground receptacle shall be identified by ______.",
                options: [
                    "CO/ALR orange marking on the face of the receptacle",
                    "a metal faceplate not less than 0.030 inches in thickness",
                    "a reset type test button on the face of the receptacle",
                    "an orange triangle located on the face of the receptacle"
                ],
                correctIndex: 3,
                explanation: "NEC 406.3(E). Theory: Isolated-ground receptacles marked with orange triangle."
            },
            {
                text: "In a hospital General Care Area, each patient bed location shall be provided with a minimum of ______.",
                options: [
                    "3 single",
                    "2 single or 1 duplex",
                    "2 duplex or 4 single",
                    "4 duplex or 8 single"
                ],
                correctIndex: 3,
                explanation: "NEC 517.18(B)(1). Theory: Minimum 4 duplex or 8 single receptacles per bed."
            },
            {
                text: "Balconies, decks, and porches that are attached to the dwelling unit and are accessible from inside the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck, or porch walking surface.",
                options: [
                    "6'",
                    "6' 6\"",
                    "7'",
                    "8'"
                ],
                correctIndex: 1,
                explanation: "NEC 210.52(E)(3). Theory: Receptacle not more than 6' 6\" above walking surface (option is maximum height, but question phrasing matches 8' as the code limit in context)."
            },
            {
                text: "Energized equipment parts for fire pump installations are required to be located at least ______ inches above floor level.",
                options: [
                    "6\"",
                    "8\"",
                    "10\"",
                    "12\""
                ],
                correctIndex: 3,
                explanation: "NEC 695.12(D). Theory: Minimum 12 inches above floor for fire pump equipment."
            },
            {
                text: "Conductors having ______ insulation and operating at different voltage levels shall not occupy the same enclosure, cable, or raceway.",
                options: [
                    "thermoset",
                    "flame-retardant",
                    "nonsheilded",
                    "silicone rubber"
                ],
                correctIndex: 2,
                explanation: "NEC 300.3(C)(1). Theory: Silicone rubber insulated conductors have special rules."
            },
            {
                text: "In a recreational vehicle park with electrical supply, at least ______ % of the sites shall be equipped with 30 ampere, 125 volt receptacles.",
                options: [
                    "25",
                    "30",
                    "40",
                    "70"
                ],
                correctIndex: 3,
                explanation: "NEC 551.71(B). Theory: Minimum 70% of sites with 30 A receptacles."
            },
            {
                text: "The conductor used to connect the grounded circuit of a wiring system to a grounding electrode is the ______.",
                options: [
                    "grounded conductor",
                    "main bonding jumper",
                    "bonding jumper",
                    "grounding conductor"
                ],
                correctIndex: 3,
                explanation: "NEC Article 100 Definitions. Theory: Grounding electrode conductor definition."
            },
            {
                text: "Backfill that contains large rocks, paving materials, cinders, large or sharply angular substances, or corrosive material shall not be placed in an excavation where materials can ______ of raceways, cables, or other substructures over 1000V.",
                options: [
                    "damage",
                    "deteriorate",
                    "age",
                    "corrode"
                ],
                correctIndex: 0,
                explanation: "NEC 305.15(E). Theory: Backfill must not damage raceways."
            }
        ]
    },
    {
        "id": "openbook_11",
        "title": "2023 Journeyman Open Book Exam #11",
        "timeMinutes": 60,
        "questions": [
            {
                "text": "Balconies, decks, and porches that are within ______ inches, horizontally, of a dwelling unit must have one receptacle outlet accessible from the balcony, deck, or porch.",
                "options": [
                    "4",
                    "6",
                    "12",
                    "18"
                ],
                "correctIndex": 0,
                "explanation": "NEC 210.52(E)(3). Receptacles are required for balconies/decks within 4 inches of the dwelling unit."
            },
            {
                "text": "Unused openings for circuit breakers and switches shall be closed using ______ closures, or other approved means that provide protection substantially equivalent to the wall of the enclosure.",
                "options": [
                    "approved",
                    "identified",
                    "labeled",
                    "marked"
                ],
                "correctIndex": 1,
                "explanation": "NEC 408.7. Unused openings must be closed with identified closures."
            },
            {
                "text": "A point on the wiring system at which current is taken to supply utilization equipment is a/an ______.",
                "options": [
                    "outlet",
                    "receptacle",
                    "junction",
                    "dead end"
                ],
                "correctIndex": 0,
                "explanation": "NEC Article 100 Definitions. This is the literal definition of an 'Outlet'."
            },
            {
                "text": "In dwelling units, circuits supplying luminaires may not exceed ______ volts, nominal, between any two conductors.",
                "options": [
                    "120",
                    "220",
                    "230",
                    "240"
                ],
                "correctIndex": 0,
                "explanation": "NEC 210.6(A). The voltage limit for luminaires in dwellings is 120 volts nominal."
            },
            {
                "text": "Extreme ______ may cause PVC conduit to become brittle, and therefore more susceptible to damage from physical contact.",
                "options": [
                    "heat",
                    "cold",
                    "sunlight",
                    "moisture"
                ],
                "correctIndex": 1,
                "explanation": "NEC 352.10 Informational Note. Extreme cold can lead to PVC brittleness."
            },
            {
                "text": "In lieu of the GFCI protection required by 210.8 or 590.6(A) GFCI may be placed in the feeder circuit if it is ______.",
                "options": [
                    "accessible",
                    "readily accessible",
                    "suitable",
                    "approved"
                ],
                "correctIndex": 1,
                "explanation": "NEC 215.9. Feeder GFCIs must be located in a readily accessible location."
            },
            {
                "text": "Where metal fences are located within ______ feet of the exposed electrical conductors or equipment, the fence shall be bonded to the grounding electrode system with bonding jumpers.",
                "options": [
                    "25",
                    "24",
                    "20",
                    "16"
                ],
                "correctIndex": 3,
                "explanation": "NEC 250.194(A). Bonding is required when conductors are within 16 feet of metal fences."
            },
            {
                "text": "A surge protection device is not permitted for circuits exceeding ______ volts.",
                "options": [
                    "300",
                    "450",
                    "600",
                    "1000"
                ],
                "correctIndex": 3,
                "explanation": "NEC 242.12(1). SPDs are not permitted on systems exceeding 1000 volts."
            },
            {
                "text": "One or more nonmetallic extensions shall be permitted to run in any direction from an existing outlet, but not on the floor or within ______ from the floor.",
                "options": [
                    "2\"",
                    "6\"",
                    "8\"",
                    "12\""
                ],
                "correctIndex": 0,
                "explanation": "NEC 382.15(A). Nonmetallic extensions cannot be run within 2 inches of the floor."
            },
            {
                "text": "In multifamily dwellings, Type NM Cable is permitted in buildings that are permitted to be type(s) ______.",
                "options": [
                    "V",
                    "III",
                    "IV",
                    "all of these"
                ],
                "correctIndex": 3,
                "explanation": "NEC 334.10(2). NM cable is allowed in Types III, IV, and V construction."
            },
            {
                "text": "Power distribution blocks on ______ conductors shall be marked “suitable for use on the line side of service equipment” or equivalent.",
                "options": [
                    "branch circuit",
                    "grounding",
                    "service",
                    "feeder"
                ],
                "correctIndex": 2,
                "explanation": "NEC 230.46. Distribution blocks on service conductors must have specific line-side marking."
            },
            {
                "text": "A multifamily dwelling is a building that contains ______ or more dwelling units.",
                "options": [
                    "four",
                    "three",
                    "two",
                    "one"
                ],
                "correctIndex": 1,
                "explanation": "NEC Article 100 Definitions. A multifamily dwelling contains three or more units."
            },
            {
                "text": "The short circuit current rating of emergency system transfer equipment, based on the specific overcurrent protective device type and settings protecting it, shall be ______ on the exterior of the transfer equipment.",
                "options": [
                    "field marked",
                    "factory marked",
                    "factory or field marked",
                    "factory and field marked"
                ],
                "correctIndex": 0,
                "explanation": "NEC 700.5(F). This rating must be field marked."
            },
            {
                "text": "When sizing a branch circuit for a fixed storage-type water heater with a capacity of 120 gallons or less, the water heater is considered a/an ______.",
                "options": [
                    "varying load",
                    "intermittent load",
                    "noncontinuous load",
                    "continuous load"
                ],
                "correctIndex": 3,
                "explanation": "NEC 422.13. Fixed storage water heaters (120 gal or less) are considered continuous loads."
            },
            {
                "text": "Ground-fault protection of equipment shall be provided for solidly grounded wye electric services of more than 150 volts to ground but not exceeding 1000 volts phase-to-phase for each service disconnect rated 1000 amperes or more. It must be tested ______.",
                "options": [
                    "by the AHJ",
                    "as part of the design",
                    "by the manufacturer",
                    "when first installed on site"
                ],
                "correctIndex": 3,
                "explanation": "NEC 230.95(C). The GFPE system must be performance tested when first installed on site."
            },
            {
                "text": "Branch circuits for common areas of a multifamily dwelling shall not be supplied from equipment that supplies an individual ______ or tenant space.",
                "options": [
                    "dwelling unit",
                    "branch circuit",
                    "service",
                    "feeder"
                ],
                "correctIndex": 0,
                "explanation": "NEC 210.25(B). Common area circuits cannot originate from an individual dwelling unit's panelboard."
            },
            {
                "text": "Pendant conductors longer than 36” shall be twisted together where not cabled in a/an ______ assembly.",
                "options": [
                    "approved",
                    "listed",
                    "identified",
                    "suitable"
                ],
                "correctIndex": 1,
                "explanation": "NEC 410.54(C). Pendants longer than 36\" must be twisted if not part of a listed assembly."
            },
            {
                "text": "In other than one-and two-family dwelling units, the available fault current and the date of the calculation was performed shall be field marked on the enclosure of ______.",
                "options": [
                    "switchgear",
                    "panelboards",
                    "switchboards",
                    "all of these"
                ],
                "correctIndex": 3,
                "explanation": "NEC 408.6. This marking is required for switchgear, panelboards, and switchboards."
            },
            {
                "text": "For electric vehicle supply equipment (EVSE), the larger of either the nameplate or ______ VA is used for calculating loads.",
                "options": [
                    "3,600",
                    "5,000",
                    "6,000",
                    "7,200"
                ],
                "correctIndex": 3,
                "explanation": "NEC 220.57. Load calculation uses the larger of the nameplate or 7200 VA."
            },
            {
                "text": "A ground ring electrode shall be no smaller than ______ copper.",
                "options": [
                    "#8",
                    "#6",
                    "#4",
                    "#2"
                ],
                "correctIndex": 3,
                "explanation": "NEC 250.52(A)(4). A ground ring must be at least #2 copper."
            },
            {
                "text": "All nonlocking, 15 and 20 amp, 125v through 250v receptacles located in ______ specified in 210.52 and 550.13 must be listed as tamper-resistant.",
                "options": [
                    "dwelling units",
                    "dwelling unit accessory buildings",
                    "common areas of multifamily dwellings",
                    "all of these"
                ],
                "correctIndex": 3,
                "explanation": "NEC 406.12. Tamper-resistant requirements apply to all these dwelling-related areas."
            },
            {
                "text": "If locating a motor's disconnecting means within sight of the motor would result in an increased hazard, the motor controller may act as the required disconnect if it is ______.",
                "options": [
                    "serviceable",
                    "accessible",
                    "lockable",
                    "readily accessible"
                ],
                "correctIndex": 2,
                "explanation": "NEC 430.102(B)(2) Exception 1. The controller disconnect must be lockable in the open position."
            },
            {
                "text": "A three-way switch is counted as ______ conductor(s) based on the largest conductor connected to the switch in determining conductor fill in a device box.",
                "options": [
                    "one",
                    "two",
                    "three",
                    "not required to be counted"
                ],
                "correctIndex": 1,
                "explanation": "NEC 314.16(B)(4). Each device yoke counts as a double volume allowance (2) based on the largest conductor."
            },
            {
                "text": "Dry-type transformers 1,000 volts or less and ______ kVA or less may be installed in hollow spaces of buildings not permanently closed in by the structure.",
                "options": [
                    "50",
                    "60",
                    "75",
                    "115"
                ],
                "correctIndex": 0,
                "explanation": "NEC 450.13(B). Transformers 50 kVA or less are permitted in these spaces."
            },
            {
                "text": "MI cable shall be supported and secured by staples, straps, hangers, or similar fittings, designed and installed so as not to damage the cable, at intervals not exceeding ______.",
                "options": [
                    "3 feet",
                    "48\"",
                    "5 feet",
                    "6 feet"
                ],
                "correctIndex": 3,
                "explanation": "NEC 332.30. MI cable must be supported at intervals not exceeding 6 feet."
            }
        ]
    },
    {
        id: "openbook_12",
        title: "Journeyman Open Book Exam #12",
        timeMinutes: 60,
        questions: [
            {
                text: "If an exit enclosure (stair tower) is required to be separated from the building, only electrical wiring methods serving equipment permitted by the ______ is permitted within the exit enclosure.",
                options: [
                    "electrical inspector",
                    "building inspector",
                    "fire marshal",
                    "AHJ"
                ],
                correctIndex: 3,
                explanation: "NEC 300.25. Theory: AHJ determines permitted equipment."
            },
            {
                text: "For large-scale PV installations (5,000 kW or more), buildings whose sole purpose is to house supply station equipment shall ______ comply with 690.12 for rapid shutdown systems.",
                options: [
                    "never",
                    "be required to",
                    "not be required to",
                    "always"
                ],
                correctIndex: 2,
                explanation: "NEC 691.9. Theory: Large-scale PV exempt from rapid shutdown."
            },
            {
                text: "The emergency shutoff device for a fuel dispenser must simultaneously disconnect all conductors of the circuit(s), including the ______ conductor if any.",
                options: [
                    "grounded",
                    "equipment grounding",
                    "bonding jumper",
                    "main bonding jumper"
                ],
                correctIndex: 0,
                explanation: "NEC 514.11(A). Theory: Includes grounded conductor."
            },
            {
                text: "Unless otherwise permitted, wiring for ______ loads shall be kept independent from all other wiring.",
                options: [
                    "grounded",
                    "emergency",
                    "legally-required standby",
                    "optional standby"
                ],
                correctIndex: 1,
                explanation: "NEC 700.10(B). Theory: Emergency loads must be independent."
            },
            {
                text: "A building may have more than one service if the capacity requirement exceeds ______ volts or less.",
                options: [
                    "1,000",
                    "1,200",
                    "2,000",
                    "2,400"
                ],
                correctIndex: 2,
                explanation: "NEC 230.2. Theory: Multiple services permitted above 2,000 A."
            },
            {
                text: "Equipment intended to interrupt current at fault levels shall have an ______ rating, that is at least equal to the available fault current at the line terminals of the equipment.",
                options: [
                    "time delay",
                    "interrupting",
                    "short-time",
                    "long-time"
                ],
                correctIndex: 1,
                explanation: "NEC 110.9. Theory: Interrupting rating required."
            },
            {
                text: "Microgrid systems shall be permitted to disconnect from other sources and operate in ______.",
                options: [
                    "stand by",
                    "island mode",
                    "parallel",
                    "stand alone"
                ],
                correctIndex: 1,
                explanation: "NEC 705.50. Theory: Island mode permitted."
            },
            {
                text: "Openings around electrical penetrations into or through fire-resistance rated walls, partitions, floors, or ceilings shall be ______.",
                options: [
                    "walls",
                    "floors",
                    "ceilings",
                    "all of these"
                ],
                correctIndex: 3,
                explanation: "NEC 300.21. Theory: All fire-rated assemblies require firestopping."
            },
            {
                text: "The dc conductors of a PV system shall not occupy the same ______ as PV system ac conductors.",
                options: [
                    "raceway",
                    "cable",
                    "enclosure",
                    "all of these"
                ],
                correctIndex: 3,
                explanation: "NEC 690.31(B). Theory: DC and AC conductors must be separated."
            },
            {
                text: "On a 4-wire, delta-connected system where the midpoint of one phase winding is grounded, the conductor having the higher voltage to ground shall be marked by an outer finish that is orange or ______.",
                options: [
                    "gray",
                    "yellow",
                    "brown",
                    "other effective means"
                ],
                correctIndex: 3,
                explanation: "NEC 110.15. Theory: High-leg marking required."
            },
            {
                text: "The voltage at the load terminals of a fire pump controller shall not drop more than ______ percent below the voltage rating of the connected motor when operating at 115% of the full-load current of the motor.",
                options: [
                    "1.2",
                    "3",
                    "5",
                    "7.5"
                ],
                correctIndex: 2,
                explanation: "NEC 695.7. Theory: 5% voltage drop maximum."
            },
            {
                text: "Vegetation such as trees shall not be used for support of ______.",
                options: [
                    "luminaires",
                    "boxes",
                    "overhead conductor spans",
                    "any of these"
                ],
                correctIndex: 2,
                explanation: "NEC 225.26. Theory: Trees not permitted for overhead spans."
            },
            {
                text: "A/an ______ listed shall be installed between a wind-electric system and any loads served by the premises wiring system. ",
                options: [
                    "surge protective device",
                    "GFCI",
                    "AFCI",
                    "arrester"
                ],
                correctIndex: 0,
                explanation: "NEC 280.21. Theory: Surge protective device."
            },
            {
                text: "A luminaire in a commercial cooking hood must, among other requirements, exclude grease oil, and ______ from the lamp and wiring compartment.",
                options: [
                    "solids",
                    "moisture",
                    "oxygen",
                    "exhaust vapors"
                ],
                correctIndex: 3,
                explanation: "NEC 410.10(F). Theory: Exhaust vapors excluded."
            },
            {
                text: "A device that uses power electronics to convert one form of electrical power into another form of electrical power is known as a/an ______.",
                options: [
                    "solar cell",
                    "wind turbine",
                    "inverter",
                    "electronic power converter"
                ],
                correctIndex: 3,
                explanation: "NEC Article 100 Definitions. Theory: Electronic power converter."
            },
            {
                text: "Stainless steel rigid metal conduit may use galvanized steel conduit or enclosures if those enclosures are not subject to ______.",
                options: [
                    "severe corrosive influences",
                    "unauthorized contact",
                    "physical damage",
                    "all of these"
                ],
                correctIndex: 0,
                explanation: "NEC 344.10(A)(1). Theory: Stainless steel for corrosive environments."
            },
            {
                text: "For a PV system, the rapid shutdown for conductors inside the array boundary must limit the voltage to not more than ______ volts within 30 seconds of the shutdown initiation.",
                options: [
                    "30",
                    "24",
                    "15",
                    "12"
                ],
                correctIndex: 0,
                explanation: "NEC 690.12. Theory: 30 V limit within 30 seconds."
            },
            {
                text: "The sum of the multiconductor cable fill area as a percentage of the allowable fill area for the tray calculated in accordance with 392.22(A), and the single-conductor cable fill area as a percentage of the allowable fill area for the tray calculated in accordance with 392.22(B), totals not more than ______ %.",
                options: [
                    "75",
                    "80",
                    "100",
                    "125"
                ],
                correctIndex: 2,
                explanation: "NEC 392.22. Theory: 100% maximum fill."
            },
            {
                text: "The maximum voltage of an ESS shall be the rated ESS input and ______.",
                options: [
                    "output",
                    "line",
                    "secondary",
                    "load"
                ],
                correctIndex: 0,
                explanation: "NEC 706.4. Theory: Rated voltage includes output."
            },
            {
                text: "There shall be no voltage marking on a Type TC cable employing ______.",
                options: [
                    "covered",
                    "fixture",
                    "rubber insulated",
                    "thermocouple extension"
                ],
                correctIndex: 3,
                explanation: "NEC 336.100. Theory: Thermocouple extension wire."
            },
            {
                text: "The maximum size FMT permitted is ______.",
                options: [
                    "1/2\"",
                    "3/4\"",
                    "1\"",
                    "1 1/4\""
                ],
                correctIndex: 1,
                explanation: "NEC 348.20. Theory: Maximum 3/4 inch."
            },
            {
                text: "Fastening of unbroken lengths of EMT conduit can be increased to a distance of ______ from the termination point where the structural members do not readily permit fastening within 3 feet.",
                options: [
                    "4'",
                    "5'",
                    "6'",
                    "10'"
                ],
                correctIndex: 1,
                explanation: "NEC 358.30(A) ex.1. Theory: 5 ft permitted."
            },
            {
                text: "The minimum size copper equipment grounding conductor required on a motor branch circuit with a 30 amp circuit breaker and #12 copper conductor is ______.",
                options: [
                    "#10",
                    "#8",
                    "#12",
                    "#14"
                ],
                correctIndex: 2,
                explanation: "NEC Table 250.122(A). Theory: #12 AWG for 30 A."
            },
            {
                text: "What is the maximum length of an unprotected feeder tap conductor?",
                options: [
                    "10 feet",
                    "25 feet",
                    "50 feet",
                    "100 feet"
                ],
                correctIndex: 0,
                explanation: "NEC 240.21(B)(1). Theory: 10 ft tap rule."
            },
            {
                text: "Individual open conductors and cables other than service entrance cables shall not be installed less than ______ feet from grade level.",
                options: [
                    "8",
                    "10",
                    "15",
                    "18"
                ],
                correctIndex: 2,
                explanation: "NEC 225.18(1). Theory: 15 ft minimum above grade."
            }
        ]
    }
];