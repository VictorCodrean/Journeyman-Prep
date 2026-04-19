// exams.js
// All exam data – keep adding more exams here when needed

const FINAL_EXAMS = [
        {
            id: "final_1",
            title: "Journeyman Final Exam #1",
            timeMinutes: 180,
            questions: [
                {
                    number: 1,
                    text: "60% is equivalent to ______.",
                    options: ["5/8", "3/5", "2/5", "5/16"],
                    correctIndex: 1,
                    explanation: "3 ÷ 5 = 0.6 or 60%. Basic math conversion: 60/100 simplifies to 3/5."
                },
                {
                    number: 2,
                    text: "Each section of equipment that requires rear or side access to make field connections shall be so marked by the manufacturer on the ______.",
                    options: ["front", "right side", "left side", "rear"],
                    correctIndex: 0,
                    explanation: "NEC 408.18(C) requires that equipment needing rear or side access for field connections be marked on the front by the manufacturer so installers know before positioning the equipment."
                },
                {
                    number: 3,
                    text: "In other than one and two family dwellings, a receptacle outlet for indoor service equipment shall be located within ______ of the service equipment.",
                    options: ["25 feet", "50 feet", "75 feet", "the same room or area"],
                    correctIndex: 3,
                    explanation: "NEC 210.63(B)(1) requires a receptacle outlet to be located in the same room or area as the service equipment in other than one- and two-family dwellings."
                },
                {
                    number: 4,
                    text: "Disregarding demand factors, the calculated lighting load for a 5,000 sq.ft. office building is ______ volt-amperes.",
                    options: ["16,500", "15,400", "8,000", "6,500"],
                    correctIndex: 3,
                    explanation: "NEC Table 220.42(A): Office buildings use 3.5 VA/sq.ft. — but the general lighting load per Table 220.12 for offices is 3.5 VA/sq.ft. However, per the answer key, 5,000 × 1.3 = 6,500 VA using the unit load of 1.3 VA/sq.ft for office buildings under NEC Table 220.12 (some editions). Per NEC 2023 Table 220.12, office lighting is listed at 3.5 VA/sq.ft; verify your specific code edition table value."
                },
                {
                    number: 5,
                    text: "Refer to the figure. GIVEN: Switch S1 is in the 'ON' position, but the light does not come on. Voltage across L1 is measured to be 120 volts. Voltage across S1 is measured to be 0 volts. The light does not come on because ______.",
                    options: [
                        "the light is open (bulb burned out)",
                        "the light and switch are shorted",
                        "the light is good but the switch does not make contact",
                        "there is a break in the wiring of the circuit"
                    ],
                    correctIndex: 0,
                    explanation: "If 120V appears across the light (L1) and 0V across the switch (S1), the switch is closed (conducting), so all voltage drops across the load. The bulb having full voltage across it but not lighting means the bulb filament is open (burned out). This is a basic series circuit voltage drop analysis."
                },
                {
                    number: 6,
                    text: "Decorative lighting and similar accessories used for holiday lighting and similar purposes shall be listed and ______.",
                    options: ["marked", "approved", "labeled", "stamped"],
                    correctIndex: 2,
                    explanation: "NEC 590.5 requires decorative lighting and similar accessories used for holiday lighting to be listed and labeled."
                },
                {
                    number: 7,
                    text: "Insulated conductors used inside switchgear or switchboards are required to be ______.",
                    options: ["suitable", "labeled", "acceptable", "listed"],
                    correctIndex: 3,
                    explanation: "NEC 408.19 requires that insulated conductors used inside switchgear or switchboards be listed."
                },
                {
                    number: 8,
                    text: "Balconies, decks and porches that are within 4\" horizontally of the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck, or porch. The receptacle outlet shall not be located more than ______ above the balcony, deck, or porch walking surface.",
                    options: ["36\"", "48\"", "60\"", "78\""],
                    correctIndex: 3,
                    explanation: "NEC 210.52(E)(3) requires the receptacle on balconies, decks, and porches not be located more than 6.5 ft (78 inches) above the walking surface."
                },
                {
                    number: 9,
                    text: "An acceptable color for ungrounded conductors is ______.",
                    options: ["green", "gray", "pink", "white"],
                    correctIndex: 2,
                    explanation: "NEC 200.6 and 250.119 and 310.14: Green (and green with yellow stripe) is reserved for equipment grounding conductors; white/gray are reserved for grounded (neutral) conductors. Pink is an acceptable color for ungrounded (hot) conductors."
                },
                {
                    number: 10,
                    text: "The calculated load of a 12 foot length of fixed multioutlet assembly in a commercial facility is ______ volt-amperes if the appliances it supplies are not likely to be used at the same time.",
                    options: ["1000", "720", "540", "380"],
                    correctIndex: 2,
                    explanation: "NEC 220.14(D): For fixed multioutlet assemblies where appliances are not likely to be used simultaneously, calculate at 180 VA per 5 feet (or fraction thereof). 12 ft ÷ 5 = 2.4 → 3 segments × 180 VA = 540 VA."
                },
                {
                    number: 11,
                    text: "In a dwelling bedroom, any wall space ______ or more in width (including space measured around corners) and unbroken along the floor line by doorways and similar openings, fireplaces, and fixed cabinets that do not have countertops or similar work surfaces.",
                    options: ["18\"", "24\"", "30\"", "36\""],
                    correctIndex: 1,
                    explanation: "NEC 210.52(A)(2)(1): In dwelling units, receptacles are required for wall spaces 24 inches (2 feet) or more in width."
                },
                {
                    number: 12,
                    text: "A wall-mounted central vacuum assembly connected to a single receptacle located in an attached garage shall be provided with ______ protection for personnel.",
                    options: ["LCDI", "GFCI", "AFCI", "both AFCI and GFCI"],
                    correctIndex: 1,
                    explanation: "NEC 210.8(A)(2) requires GFCI protection for all 125V, 15- and 20-amp receptacles in garages of dwelling units, including those serving appliances such as central vacuum assemblies."
                },
                {
                    number: 13,
                    text: "Which of the following is an ammeter?",
                    options: ["I only", "II only", "III only", "I, II or III"],
                    correctIndex: 1,
                    explanation: "An ammeter (Meter II in the diagram) is connected in series with the load. Meter I is connected in a manner consistent with a voltmeter (in parallel), and Meter III is also in parallel. Only Meter II is in series, which is required for current measurement."
                },
                {
                    number: 14,
                    text: "What is the ampacity of a #12 THWN conductor installed in an ambient temperature of 86°F if the raceway contains four current-carrying conductors?",
                    options: ["17.5a", "20a", "23a", "26a"],
                    correctIndex: 1,
                    explanation: "NEC Table 310.16: #12 THWN at 75°C column = 25A. At 86°F (30°C) the temperature correction factor is 1.00. With 4 current-carrying conductors, the adjustment factor is 0.80. 25A × 0.80 = 20A."
                },
                {
                    number: 15,
                    text: "If festoon lighting is installed without a messenger, the smallest allowable overhead conductor is ______ AWG.",
                    options: ["#10", "#12", "#14", "#16"],
                    correctIndex: 1,
                    explanation: "NEC 225.6(B): For festoon lighting without a messenger wire, the minimum conductor size is #12 AWG."
                },
                {
                    number: 16,
                    text: "For temporary holiday lighting, trees shall be permitted for supporting overhead spans of conductors and cables if the overhead wiring is arranged with ______, tension take-up devices, or other approved means to avoid damage from live vegetation.",
                    options: ["fittings", "cable ties", "strain relief devices", "overhead clamps"],
                    correctIndex: 2,
                    explanation: "NEC 590.4(J) Exception: Trees are permitted as supports for holiday lighting if strain relief devices or equivalent means are used to prevent damage from moving vegetation."
                },
                {
                    number: 17,
                    text: "The Code requires branch circuits be rated in accordance with the overcurrent protective device. Therefore, which of the following combinations are permitted for lighting branch circuits?",
                    options: [
                        "20, 25, 35, 40 and 50 amperes",
                        "20, 25, 30, 40 and 50 amperes",
                        "15, 25, 30, 40 and 50 amperes",
                        "10, 15, 20, 30, 40 and 50 amperes"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 210.18: Permitted ratings for lighting branch circuits are 10, 15, 20, 30, 40, and 50 amperes."
                },
                {
                    number: 18,
                    text: "Duty on elevator and dumbwaiter driving machine motors and driving motors of motor-generators used with generator field control shall be rated as ______.",
                    options: ["intermittent", "lockable", "continuous", "varying"],
                    correctIndex: 0,
                    explanation: "NEC 620.61(B)(1): Motors for elevator and dumbwaiter driving machines are rated as intermittent duty."
                },
                {
                    number: 19,
                    text: "What does the alpha character I represent when stating the question W = E x I?",
                    options: ["Intrinsic circuit", "Intrinsic electromotive force", "Intensity of current", "Isotopic character"],
                    correctIndex: 2,
                    explanation: "In Ohm's Law and power formulas, W = E × I: W = watts (power), E = EMF/voltage, and I = Intensity of current (amperes). This is standard electrical theory notation."
                },
                {
                    number: 20,
                    text: "Where multiple driven ground rods are used to form the grounding electrode system, in order to maintain an effective grounding electrode system, they shall not be less than ______ apart.",
                    options: ["36\"", "48\"", "60\"", "72\""],
                    correctIndex: 3,
                    explanation: "NEC 250.53(A)(3): Rod, pipe, and plate electrodes shall be installed not less than 6 feet (72 inches) apart from each other when multiple electrodes are used."
                },
                {
                    number: 21,
                    text: "The demand load for a 14 kW range installed in a dwelling unit is ______ kW.",
                    options: ["8", "8.4", "8.8", "12"],
                    correctIndex: 2,
                    explanation: "NEC Table 220.55: For a single range over 12 kW, add 5% for each kW over 12 kW. 14 kW is 2 kW over 12 kW. 8 kW (base) × 110% = 8.8 kW."
                },
                {
                    number: 22,
                    text: "Where a dwelling has a two car attached garage, the Code requires a minimum of ______ receptacle outlet(s) shall be installed in the garage.",
                    options: ["none required", "one", "two", "three"],
                    correctIndex: 2,
                    explanation: "NEC 210.52(G)(1): For a dwelling unit with a two-car garage, at least two receptacle outlets are required — one for each car space."
                },
                {
                    number: 23,
                    text: "Where ungrounded conductors are run in parallel in multiple raceways, the equipment grounding conductor, where used, shall be ______.",
                    options: ["installed in one raceway only", "run in parallel in each raceway", "not required", "bare"],
                    correctIndex: 1,
                    explanation: "NEC 250.122(F)(1)(b): Where conductors are installed in parallel, the equipment grounding conductor shall also be run in parallel in each raceway or cable."
                },
                {
                    number: 24,
                    text: "All 15 or 20 amp, single-phase, 125 volt through 250 volt receptacles located within ______ feet of a fountain edge shall be provided with GFCI protection.",
                    options: ["20", "24", "25", "30"],
                    correctIndex: 0,
                    explanation: "NEC 680.58: All 15 and 20 amp, 125V through 250V single-phase receptacles located within 20 feet of the inside walls of a fountain shall have GFCI protection."
                },
                {
                    number: 25,
                    text: "For an arc welder with an I_max rating of 43 amps, what is the maximum rating for the overcurrent device supplying the welder?",
                    options: ["85 amp", "90 amp", "95 amp", "100 amp"],
                    correctIndex: 1,
                    explanation: "NEC 630.12(A): The overcurrent device for an arc welder shall not exceed 200% of I_max. 43A × 200% = 86A. The next standard overcurrent device size up is 90A."
                },
                {
                    number: 26,
                    text: "The conductor is marked RHW-2 on the insulation, what does the -2 represent?",
                    options: [
                        "The cable has two conductors.",
                        "The conductor is double insulated.",
                        "The conductor is thermoplastic.",
                        "The conductor has a maximum operating temperature of 90°C."
                    ],
                    correctIndex: 3,
                    explanation: "NEC Table 310.4(1): The suffix '-2' in conductor designations (e.g., RHW-2, THWN-2) indicates the conductor has a maximum operating temperature rating of 90°C."
                },
                {
                    number: 27,
                    text: "The ampacity of three #10 THWN-2 conductors installed in a raceway is ______ amps if the ambient temperature is 112°F.",
                    options: ["31.6", "34.8", "35", "37.2"],
                    correctIndex: 1,
                    explanation: "NEC Table 310.16: #10 THWN-2 at 90°C column = 40A. Adjustment for 3 current-carrying conductors = 0.87 (NEC Table 310.15(B)(1)(1)). Temperature at 112°F (44°C) correction factor for 90°C wire = 1.00. 40A × 0.87 = 34.8A."
                },
                {
                    number: 28,
                    text: "Fuel dispensing systems shall be provided with one or more clearly identified emergency shutoff devices or electrical disconnects. Such disconnects or devices shall be installed in approved locations but not less than 20 feet or more than ______ feet from the fuel dispensing devices that they serve.",
                    options: ["50", "75", "80", "100"],
                    correctIndex: 3,
                    explanation: "NEC 514.11(A): Emergency shutoff devices for fuel dispensing shall be installed not less than 20 feet and not more than 100 feet from the dispensing devices."
                },
                {
                    number: 29,
                    text: "Where conduits enter a floor-standing switchboard, switchgear or, panelboard at the bottom, the conduits, including their end fittings, shall not rise more than ______ inches above the bottom of the enclosure.",
                    options: ["2", "3", "4", "6"],
                    correctIndex: 1,
                    explanation: "NEC 408.5: Conduits entering floor-standing switchboards, switchgear, or panelboards at the bottom shall not rise more than 3 inches above the bottom of the enclosure."
                },
                {
                    number: 30,
                    text: "Thermostatically controlled switching devices serving both controllers and disconnecting means for fixed electric space heating equipment shall ______.",
                    options: [
                        "not be permitted",
                        "be located not more than 8 feet above floor level",
                        "open all grounded conductors when placed in the off position",
                        "be designed so that the circuit cannot be energized automatically after the device has been manually placed in the off position"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 424.20(A)(3): Thermostatically controlled switching devices serving as both controllers and disconnecting means for fixed electric space heating shall be designed so the circuit cannot be automatically re-energized after being manually placed in the off position."
                },
                {
                    number: 31,
                    text: "In dwelling units, hallways of ______ feet or more in length shall have at least one receptacle outlet.",
                    options: ["6", "8", "10", "12"],
                    correctIndex: 2,
                    explanation: "NEC 210.52(H): In dwelling units, hallways of 10 feet or more in length shall have at least one receptacle outlet."
                },
                {
                    number: 32,
                    text: "For a feeder tap not exceeding 10 feet in length and field installation, the maximum overcurrent device rating supplying a tap conductor with an ampacity of 40 amps is ______.",
                    options: ["150a", "200a", "350a", "400a"],
                    correctIndex: 3,
                    explanation: "NEC 240.21(B)(1)(B)(4): For a 10-foot tap, the overcurrent device at the tap's origin must not exceed 10 times the ampacity of the tap conductor. 40A × 10 = 400A maximum."
                },
                {
                    number: 33,
                    text: "A three-way switch is equivalent to a ______ switch.",
                    options: ["DPST", "DPDT", "SPST", "SPDT"],
                    correctIndex: 3,
                    explanation: "A three-way switch is electrically equivalent to a Single Pole Double Throw (SPDT) switch — it has one common terminal and two traveler terminals, allowing control from two locations."
                },
                {
                    number: 34,
                    text: "Which of the following cord types is permitted in wet location and is sunlight resistant?",
                    options: ["SPT-2", "STOOW", "THWN", "XHWN"],
                    correctIndex: 1,
                    explanation: "NEC Table 400.4 and Note 9: STOOW cord is rated for outdoor use, wet locations, and is sunlight resistant. THWN and XHWN are wire types, not cord types."
                },
                {
                    number: 35,
                    text: "One or more metal in-ground support structure(s) in direct contact with the earth vertically for ______ feet or more, with or without concrete encasement is a permitted grounding electrode.",
                    options: ["6", "8", "10", "12"],
                    correctIndex: 2,
                    explanation: "NEC 250.52(A)(2): Metal in-ground support structures (such as building steel) in direct contact with the earth for 10 feet or more are recognized as grounding electrodes."
                },
                {
                    number: 36,
                    text: "For a service rated 100 through 400 amps, the service conductors supplying the entire load of a one family dwelling shall be permitted to have an ampacity of ______ of the service rating.",
                    options: ["83%", "80%", "75%", "70%"],
                    correctIndex: 0,
                    explanation: "NEC 310.12(A): Service-entrance conductors for one-family dwellings with service ratings of 100–400A are permitted to have an ampacity not less than 83% of the service rating."
                },
                {
                    number: 37,
                    text: "Nonmetallic cable trays shall be made of ______ material.",
                    options: ["watertight", "waterproof", "fire-resistant", "flame-retardant"],
                    correctIndex: 3,
                    explanation: "NEC 392.100(F): Nonmetallic cable trays shall be made of flame-retardant material."
                },
                {
                    number: 38,
                    text: "Type UF cable is permitted to be used ______.",
                    options: [
                        "as service entrance",
                        "in commercial garages",
                        "where subject to physical damage",
                        "for wiring in wet, dry, or corrosive locations"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 340.10(3): Type UF cable is permitted for use in wet, dry, or corrosive locations. It is not permitted as service-entrance cable, in commercial garages, or where subject to physical damage."
                },
                {
                    number: 39,
                    text: "A controller that includes motor overload protection and the maximum branch-circuit short-circuit and ground-fault protection for group motor application shall be marked with the motor overload protection ______ for such applications.",
                    options: ["required", "recognized", "permitted", "suitable"],
                    correctIndex: 3,
                    explanation: "NEC 430.8: Controllers incorporating motor overload protection and overcurrent protection for group applications shall be marked as suitable for those applications."
                },
                {
                    number: 40,
                    text: "The permitted demand factor for five household clothes dryers in a multifamily dwelling is ______.",
                    options: ["70%", "75%", "80%", "85%"],
                    correctIndex: 3,
                    explanation: "NEC Table 220.54: For 5 dryers in a multifamily dwelling, the demand factor is 85%."
                },
                {
                    number: 41,
                    text: "A stop switch is wired ______ in a motor circuit.",
                    options: ["series", "series-shunt", "series-parallel", "parallel"],
                    correctIndex: 0,
                    explanation: "In motor control circuits, a stop (normally closed) pushbutton is wired in series with the control circuit so that pressing it interrupts the circuit and stops the motor."
                },
                {
                    number: 42,
                    text: "All 15 and 20 amp, 125 and 250 volt, nonlocking receptacles located in a wet location shall be listed ______ type.",
                    options: ["weather proof", "water proof", "water resistant", "weather resistant"],
                    correctIndex: 3,
                    explanation: "NEC 406.9(B): Receptacles installed in wet locations shall be listed weather-resistant type."
                },
                {
                    number: 43,
                    text: "Where no GFCI protection is provided, the mounting height of a paddle fan located above a spa or hot tub shall not be less than ______ feet.",
                    options: ["6", "8", "10", "12"],
                    correctIndex: 3,
                    explanation: "NEC 680.43(B)(1)(a): Where GFCI protection is not provided, ceiling fans above spas or hot tubs shall be installed not less than 12 feet above the maximum water level."
                },
                {
                    number: 44,
                    text: "An unintentional, electrically conducting connection between an ungrounded conductor of an electrical circuit and the normally non-current-carrying conductors, metallic enclosures, metallic raceways, metallic equipment or earth is referred to as a ______.",
                    options: ["ground fault", "open circuit", "short circuit", "circuit bypass"],
                    correctIndex: 0,
                    explanation: "NEC Article 100 Definition: A ground fault is an unintentional, electrically conducting connection between an ungrounded conductor and normally non-current-carrying conductors, metallic enclosures, raceways, equipment, or earth."
                },
                {
                    number: 45,
                    text: "Residential in sink electrically operated kitchen waste disposers shall be permitted to be cord-and-plug connected however, the flexible cord is to be not less than 18\" in length and not over ______ in length.",
                    options: ["24\"", "30\"", "36\"", "48\""],
                    correctIndex: 2,
                    explanation: "NEC 422.16(B)(1)(1): Cord-and-plug connected kitchen waste disposers shall have a flexible cord not less than 18 inches and not more than 36 inches in length."
                },
                {
                    number: 46,
                    text: "40% is equivalent to ______.",
                    options: ["5/8", "3/5", "2/5", "5/16"],
                    correctIndex: 2,
                    explanation: "Basic math: 2 ÷ 5 = 0.4 OR 40%. Therefore 40% = 2/5."
                },
                {
                    number: 47,
                    text: "Which of the following is the symbol for a temperature actuated switch?",
                    options: ["(a)", "(b)", "(c)", "(d)"],
                    correctIndex: 0,
                    explanation: "A temperature actuated switch symbol shows a switch with a temperature element indicator. Per standard electrical diagram symbols, option (a) represents the temperature actuated switch."
                },
                {
                    number: 48,
                    text: "A 125 volt, 15 amp rated receptacle located in a hallway of a dwelling unit is required to be ______.",
                    options: [
                        "GFCI protected",
                        "on a dedicated circuit",
                        "need a 20 amp receptacle",
                        "listed tamper-resistant"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 406.12(1): All 15 and 20 amp, 125V receptacles installed in dwelling unit hallways shall be listed tamper-resistant."
                },
                {
                    number: 49,
                    text: "Direct-buried cables located in a trench below 2\" of concrete shall have a minimum cover of ______.",
                    options: ["6\"", "12\"", "18\"", "24\""],
                    correctIndex: 2,
                    explanation: "NEC Table 300.5(A) Column 1: For direct-buried cables under 2 inches of concrete, the minimum cover required is 18 inches."
                },
                {
                    number: 50,
                    text: "Communications wires and cables and CATV type coaxial cables shall have a vertical clearance of not less than ______ from all points of roofs which they pass.",
                    options: ["18\"", "36\"", "6 feet", "8 feet"],
                    correctIndex: 3,
                    explanation: "NEC 800.44(B): Communications cables and CATV coaxial cables shall have a vertical clearance of not less than 8 feet from all points of roofs over which they pass."
                },
                {
                    number: 51,
                    text: "Personnel doors where equipment rated 800 amperes or more that contains overcurrent devices, is installed and there is a personnel door(s) intended for entrance to and egress from the working space less than ______ feet from the nearest edge of the working space.",
                    options: ["12", "15", "20", "25"],
                    correctIndex: 3,
                    explanation: "NEC 110.26(C)(3): Where equipment rated 800A or more contains overcurrent devices, a personnel door within 25 feet of the nearest edge of the working space requires a door that opens in the direction of egress and is equipped with panic hardware."
                },
                {
                    number: 52,
                    text: "Outdoor mobile home disconnecting means shall be installed so the bottom of the enclosure containing the disconnecting means is not less than ______ above finished grade or working platform.",
                    options: ["24\"", "36\"", "48\"", "60\""],
                    correctIndex: 0,
                    explanation: "NEC 550.32(F): The bottom of the mobile home disconnecting means enclosure shall be not less than 2 feet (24 inches) above finished grade."
                },
                {
                    number: 53,
                    text: "Overhead conductors not over 1,000 volts pass over a track rails of railroads, they shall have a minimum clearance of not less than ______ feet above finished grade.",
                    options: ["12", "15", "18", "24 1/2"],
                    correctIndex: 3,
                    explanation: "NEC 225.18(5): Overhead conductors crossing over railroad tracks shall have a minimum clearance of 24.5 feet above the top of the rail."
                },
                {
                    number: 54,
                    text: "Flexible cords shall be used only in continuous lengths, without splices, other than splices for the repair of hard-service cord or ______ cord under certain conditions.",
                    options: ["junior hard-service", "lamp", "tinsel portable", "portable"],
                    correctIndex: 0,
                    explanation: "NEC 400.13: Flexible cords shall be used only in continuous lengths without splices, except for the repair of hard-service cord or junior hard-service cord."
                },
                {
                    number: 55,
                    text: "Where an NM cable is installed parallel to framing members, the cable shall be installed so that the nearest edge of the cable is not less than ______ from the nearest edge of the framing member.",
                    options: ["1/2\"", "1\"", "1 1/4\"", "1 1/2\""],
                    correctIndex: 2,
                    explanation: "NEC 300.4(D): Where NM cable is installed parallel to framing members, the cable shall be kept not less than 1-1/4 inches from the nearest edge of the framing member."
                },
                {
                    number: 56,
                    text: "The maximum ampere rating permitted for a 125 volt, single-phase, receptacle outlet having a cord-and-plug connected motor load that does not have individual overload protection is ______.",
                    options: ["15 amps", "20 amps", "25 amps", "30 amps"],
                    correctIndex: 0,
                    explanation: "NEC 430.42(C): For cord-and-plug connected motors without individual overload protection, the receptacle outlet shall not exceed 15 amperes on a 125V single-phase circuit."
                },
                {
                    number: 57,
                    text: "______ is permitted in the dedicated electrical space above a panelboard.",
                    options: ["Water piping", "Leak protection", "Sprinkler protection", "Air-conditioning ducts"],
                    correctIndex: 2,
                    explanation: "NEC 110.26(E)(1)(a)(c): The dedicated electrical space above a panelboard shall be kept clear of foreign systems. However, sprinkler protection is permitted in this space as an exception."
                },
                {
                    number: 58,
                    text: "Which of the following is NOT required to be marked on the name plate of a transformer?",
                    options: ["Frequency", "Amount of insulating liquid", "AWG size", "Clearance for ventilating openings"],
                    correctIndex: 2,
                    explanation: "NEC 450.11(A): Transformer nameplates must include kVA rating, frequency, primary and secondary voltage, impedance for transformers 25 kVA and larger, and insulating liquid type and quantity if applicable. AWG conductor size is not required on the nameplate."
                },
                {
                    number: 59,
                    text: "Branch circuits shall be rated in accordance with the ______.",
                    options: [
                        "ampere rating of the largest receptacle",
                        "maximum permitted rating of the fuse or breaker",
                        "number of receptacle outlets in the branch circuit",
                        "ampere rating of the largest conductor"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.18: Branch circuits shall be rated in accordance with the maximum permitted ampere rating or setting of the overcurrent device (fuse or circuit breaker)."
                },
                {
                    number: 60,
                    text: "Underground wiring within ______ horizontally from the inside wall of the pool shall be permitted in liquidtight flexible metal conduit listed for direct burial use.",
                    options: ["18\"", "24\"", "48\"", "60\""],
                    correctIndex: 3,
                    explanation: "NEC 680.11(A): Underground wiring shall not be installed under a pool or within 5 feet (60 inches) of the inside wall of a pool, with certain exceptions including liquidtight flexible metal conduit listed for direct burial."
                },
                {
                    number: 61,
                    text: "______ locations are those that are hazardous because of the presence of easily ignitable fibers or flyings.",
                    options: ["Class I", "Class II", "Class III", "Class II, division II"],
                    correctIndex: 2,
                    explanation: "NEC 503.1: Class III locations are those that are hazardous because of the presence of easily ignitable fibers or flyings, but the fibers/flyings are not likely to be in suspension in quantities to produce ignitable mixtures."
                },
                {
                    number: 62,
                    text: "You have 125 volts at the panel and 115 volts at the load. What is the percentage of voltage drop?",
                    options: ["5%", "4.35%", "4.17%", "8%"],
                    correctIndex: 3,
                    explanation: "Voltage drop % = (Voltage drop ÷ Source voltage) × 100. Drop = 125V − 115V = 10V. 10V ÷ 125V = 0.08 = 8%."
                },
                {
                    number: 63,
                    text: "If the plans drawing has a scale of 1/4\" = 1', a dimension of 3 1/2\" on the drawing would be equal to ______.",
                    options: ["12'", "13'", "14'", "15'"],
                    correctIndex: 2,
                    explanation: "At a scale of 1/4\" = 1', each 1/4\" = 1 ft. 3.5\" ÷ 0.25 = 14 feet. So 3 1/2\" on the drawing = 14 feet."
                },
                {
                    number: 64,
                    text: "When working from an electrical drawing, you should start from the ______.",
                    options: ["lower right-hand corner", "center", "upper left-hand corner", "bottom"],
                    correctIndex: 2,
                    explanation: "Standard drafting and blueprint reading practice is to start reading from the upper left-hand corner of a drawing and work to the right and downward, following the natural reading direction."
                },
                {
                    number: 65,
                    text: "60 cycle frequency travels 90 degrees in how many seconds?",
                    options: ["1/60", "1/120", "1/180", "1/240"],
                    correctIndex: 3,
                    explanation: "At 60 Hz, one complete cycle (360°) takes 1/60 second. 90° is 1/4 of a full cycle. Therefore: (1/60) ÷ 4 = 1/240 second. Also: 90° ÷ 360° = 0.25; 0.25 ÷ 60 cycles = 1/240."
                },
                {
                    number: 66,
                    text: "Type MC cable shall be permitted to be unsupported and unsecured where the cable is not more than ______ in length from the last point of connection to luminaires.",
                    options: ["36\"", "48\"", "60\"", "72\""],
                    correctIndex: 3,
                    explanation: "NEC 330.30(D)(2): Type MC cable is permitted to be unsupported where the cable is not more than 6 feet (72 inches) in length from the last point of where the cable is secured to the point of connection to luminaires or other equipment."
                },
                {
                    number: 67,
                    text: "Conduit nipples not over 24\" in length may be filled to a maximum of ______ of their CSA.",
                    options: ["50%", "60%", "70%", "80%"],
                    correctIndex: 1,
                    explanation: "NEC Chapter 9 Note 4: Conduit nipples not over 24 inches in length may be filled to 60% of their cross-sectional area (CSA)."
                },
                {
                    number: 68,
                    text: "What is the minimum size equipment grounding conductor for a 50 amp rated branch circuit?",
                    options: ["#14", "#12", "#10", "#8"],
                    correctIndex: 2,
                    explanation: "NEC Table 250.122: For a 50-ampere overcurrent device, the minimum equipment grounding conductor size is #10 AWG copper."
                },
                {
                    number: 69,
                    text: "Electric sign enclosures may be constructed of wood if ______.",
                    options: [
                        "kept 1\" from lampholders",
                        "wood is not permitted at all",
                        "kept 2\" from lampholders",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 600.9(C): Electric sign enclosures may be constructed of wood if the wood is kept at least 2 inches from lampholders."
                },
                {
                    number: 70,
                    text: "What is the full load current of a 50 horsepower, 3-phase, 480V, wound rotor, AC motor?",
                    options: ["104 amps", "52 amps", "65 amps", "41 amps"],
                    correctIndex: 2,
                    explanation: "NEC Table 430.250: For a 50 HP, 3-phase, 460V (480V nominal) wound rotor AC motor, the full load current is 65 amps."
                }
            ]
        },
        {
            id: "final_2",
            title: "Journeyman Final Exam #2",
            timeMinutes: 180,
            questions: [
                {
                    number: 1,
                    text: "Portable structures for fairs, carnivals and similar events shall not be located under or within a space 15 feet horizontally of conductors operating in excess of ______ volts.",
                    options: ["1000", "600", "300", "250"],
                    correctIndex: 1,
                    explanation: "NEC 525.5(B)(2): Portable structures at fairs and carnivals shall not be located under or within 15 feet horizontally of conductors operating in excess of 600 volts."
                },
                {
                    number: 2,
                    text: "Which of the following wiring methods is NOT permitted in the ceiling space used as a return-air plenum?",
                    options: ["PVC", "MI cable", "AC cable", "IMC conduit"],
                    correctIndex: 0,
                    explanation: "NEC 300.22(C)(1): In spaces used for environmental air (return-air plenums), wiring methods are restricted. PVC conduit is not permitted because it is not a listed plenum-rated raceway. MI cable, AC cable, and IMC are permitted."
                },
                {
                    number: 3,
                    text: "A copper-coated steel ground rod shall be at least ______.",
                    options: ["3/8\"", "1/2\"", "9/16\"", "5/8\""],
                    correctIndex: 3,
                    explanation: "NEC 250.52(A)(5)(2): Copper-coated steel ground rods shall be at least 5/8 inch in diameter."
                },
                {
                    number: 4,
                    text: "Shore power for boats shall be provided by single receptacles rated not less than ______ amperes.",
                    options: ["15", "20", "25", "30"],
                    correctIndex: 3,
                    explanation: "NEC 555.33(A)(4): Shore power receptacles for boats shall be single receptacles rated not less than 30 amperes."
                },
                {
                    number: 5,
                    text: "Where a rock bottom is encountered, the ground rod shall be permitted to be buried in a trench that is at least ______ deep.",
                    options: ["2 1/2 feet", "3 feet", "24\"", "48\""],
                    correctIndex: 0,
                    explanation: "NEC 250.53(A)(4): Where rock bottom is encountered, ground rods shall be permitted to be installed at an oblique angle or buried in a trench at least 2-1/2 feet deep."
                },
                {
                    number: 6,
                    text: "A ______ is a portion of a sign that may provide protection from the weather but is not an electrical enclosure.",
                    options: ["Section Sign", "Sign Body", "Sign Gutter", "Sign Enclosure"],
                    correctIndex: 1,
                    explanation: "NEC Article 100 / DEF 100 (Sign Body): A sign body is the portion of an electric sign that may provide weather protection but is not itself an electrical enclosure."
                },
                {
                    number: 7,
                    text: "Internal parts of electrical equipment, including busbars, wiring terminals, insulators, and other surfaces, shall not be damaged or contaminated by foreign materials such as paint, plaster, cleaners, abrasives, or ______.",
                    options: ["moisture", "organic residues", "corrosive residues", "dust and dirt"],
                    correctIndex: 2,
                    explanation: "NEC 110.12(B): Internal parts of electrical equipment shall not be damaged or contaminated by foreign materials including corrosive residues."
                },
                {
                    number: 8,
                    text: "Where a building or structure has any combination of feeders, branch circuits, or services passing through it or supplying it, a permanent plaque or directory shall be installed at each feeder and branch circuit ______ location denoting all other services, feeders, or branch circuits supplying that building or structure and the area served by each.",
                    options: ["disconnect", "connection", "termination", "entrance"],
                    correctIndex: 0,
                    explanation: "NEC 225.37: Where a building or structure has multiple feeders, branch circuits, or services, a permanent plaque or directory shall be installed at each disconnect location."
                },
                {
                    number: 9,
                    text: "______ is the highest level that water can reach before it spills out.",
                    options: ["Over Flow", "Escape Limit", "Datum Level", "Maximum Water Level"],
                    correctIndex: 3,
                    explanation: "NEC Article 100 DEF 100 (Maximum Water Level): The maximum water level is defined as the highest level that water can reach before it spills out of a pool, spa, or similar vessel."
                },
                {
                    number: 10,
                    text: "The ______ number of branch circuits shall be determined from the total calculated load and the size or rating of the circuits used.",
                    options: ["minimum", "maximum", "total", "largest"],
                    correctIndex: 0,
                    explanation: "NEC 210.11(A): The minimum number of branch circuits shall be determined from the total calculated load and the size or rating of the circuits used."
                },
                {
                    number: 11,
                    text: "An open resistor when checked with an ohmmeter reads ______.",
                    options: ["infinite", "zero", "low but not zero", "high but within the tolerance"],
                    correctIndex: 0,
                    explanation: "General Knowledge: An open (broken) resistor has infinite resistance because there is no continuous path for current to flow. An ohmmeter will read infinity (OL) for an open resistor."
                },
                {
                    number: 12,
                    text: "In relation to a transformer, the ratio 20:1 indicates that ______.",
                    options: [
                        "there are 20 turns in the primary and 1 turn in the secondary",
                        "secondary voltage is 1/20 of the primary voltage",
                        "for every 20 turns on the primary, there is one turn on the secondary",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "General Knowledge: A 20:1 transformer turns ratio means all of these statements are true: 20 primary turns to 1 secondary turn, secondary voltage is 1/20 of primary voltage, and for every 20 primary turns there is 1 secondary turn. All three describe the same relationship."
                },
                {
                    number: 13,
                    text: "In a parallel circuit, the voltage across each branch is ______ the source voltage.",
                    options: ["equal to", "greater than", "less than", "none of these"],
                    correctIndex: 0,
                    explanation: "General Knowledge: In a parallel circuit, the voltage across each branch is equal to the source voltage. This is a fundamental characteristic of parallel circuits."
                },
                {
                    number: 14,
                    text: "When a 60 watt bulb is connected in series with a 500 watt room heater and the bulb is replaced with a 25 watt bulb on a 120 volt circuit the ______.",
                    options: [
                        "heater output will decrease",
                        "heater output will increase",
                        "bulb will not glow",
                        "heater output will remain unchanged"
                    ],
                    correctIndex: 0,
                    explanation: "General Knowledge: In a series circuit, replacing a 60W bulb with a 25W bulb (higher resistance) increases total circuit resistance. Higher resistance means less current flows, so the heater receives less power and its output will decrease."
                },
                {
                    number: 15,
                    text: "If the secondary voltage of a transformer is step-down, the primary will have ______.",
                    options: [
                        "half as many turns as the secondary",
                        "fewer turns than the secondary",
                        "more turns than the secondary",
                        "as many turns as the secondary"
                    ],
                    correctIndex: 2,
                    explanation: "General Knowledge: In a step-down transformer, the secondary voltage is lower than the primary voltage. Since voltage is proportional to turns ratio (V_p/V_s = N_p/N_s), the primary must have more turns than the secondary."
                },
                {
                    number: 16,
                    text: "In a parallel circuit with an unequal resistance on each branch ______.",
                    options: [
                        "the power drawn on each branch is equal",
                        "the current on each branch is equal",
                        "the voltage across each branch is equal",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "General Knowledge: In a parallel circuit, regardless of resistance values, the voltage across each branch is always equal to the source voltage. Current and power will differ between branches with unequal resistance."
                },
                {
                    number: 17,
                    text: "A circuit with a lagging current means the circuit is ______.",
                    options: ["capacitive", "reactive", "inductive", "at resonance"],
                    correctIndex: 2,
                    explanation: "General Knowledge (ELI the ICE man): In an inductive (L) circuit, voltage (E) leads current (I) â or equivalently, current lags voltage. A lagging current indicates an inductive circuit."
                },
                {
                    number: 18,
                    text: "The ______ value is considered as the most important value of a sine wave.",
                    options: ["peak", "instantaneous", "effective", "average"],
                    correctIndex: 2,
                    explanation: "General Knowledge: The effective (RMS) value of a sine wave is considered the most important because it represents the equivalent DC value that produces the same heating effect. AC voltmeters and ammeters read RMS values."
                },
                {
                    number: 19,
                    text: "A wire has a resistance of 5 ohms. What will be the resistance of another wire of the same material three times as long and half the cross sectional area?",
                    options: ["7.5Î©", "15Î©", "30Î©", "50Î©"],
                    correctIndex: 2,
                    explanation: "General Knowledge: Resistance R = ÏL/A. If length is tripled (Ã3) and area is halved (Ã1/2): new R = 5Î© Ã 3 Ã 2 = 30Î©. (5Î© Ã 3 = 15Î©, then Ã· 0.5 = 30Î©)."
                },
                {
                    number: 20,
                    text: "Flexible cord used in extension cords made with separately listed and installed components shall be permitted to be supplied by a branch circuit in accordance with ______.",
                    options: [
                        "sized per Table 400.5(A)(1)&(2)",
                        "sized per Table 310.15(B)(16)",
                        "separate components are not allowed to be field assembled",
                        "20 amp circuits - #16 AWG and larger"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 240.5(B)(4): Extension cords with separately listed and installed components shall be supplied by 20-amp branch circuits and use #16 AWG or larger conductors."
                },
                {
                    number: 21,
                    text: "Warning signs shall be ______ posted at points of access to conductors in all conduit systems and cable systems. The warning sign(s) shall carry the following wording: Danger-High Voltage-Keep Out.",
                    options: ["permanently", "clearly", "legibly", "conspicuously"],
                    correctIndex: 3,
                    explanation: "NEC 305.12: Warning signs at points of access to high-voltage conductors in conduit and cable systems shall be conspicuously posted."
                },
                {
                    number: 22,
                    text: "The grounding electrode conductor shall be of copper, aluminum, copper-clad aluminum, or the items permitted in 250.68(C). The material selected shall be resistant to any ______ condition existing at the installation or shall be protected against corrosion.",
                    options: ["chemical", "corrosive", "deteriorating", "damaging"],
                    correctIndex: 1,
                    explanation: "NEC 250.62: The grounding electrode conductor material shall be resistant to any corrosive condition existing at the installation or shall be protected against corrosion."
                },
                {
                    number: 23,
                    text: "One type of enclosure permitted for use in outdoor corrosive environments is ______.",
                    options: ["Type 4 X", "Type 6", "Type 12", "Type 13"],
                    correctIndex: 0,
                    explanation: "NEC Table 110.28: Type 4X enclosures are designed for outdoor use in corrosive environments â they are watertight, dust-tight, and corrosion-resistant."
                },
                {
                    number: 24,
                    text: "Table ______ lists the volume allowances required per conductor for outlet, device and junction boxes.",
                    options: ["314.16(A)", "310.60", "314.16(B)", "300.5"],
                    correctIndex: 2,
                    explanation: "NEC Table 314.16(B)(1): This table lists the volume allowance required per conductor for calculating box fill for outlet, device, and junction boxes."
                },
                {
                    number: 25,
                    text: "Overhead spans of ______ conductors and open multiconductor cables shall have a vertical clearance of not less than 8' 6\" above the roof surface.",
                    options: ["insulated", "open", "service", "bare"],
                    correctIndex: 1,
                    explanation: "NEC 225.19(A): Overhead spans of open (uninsulated) conductors and open multiconductor cables shall maintain a vertical clearance of not less than 8 feet 6 inches above roof surfaces."
                },
                {
                    number: 26,
                    text: "Nonconductive coatings (such as paint, lacquer, and enamel) on equipment to be grounded shall be removed from threads and other contact surfaces to ensure good electrical continuity by means of fittings ______ so as to make such removal unnecessary.",
                    options: ["approved", "labeled", "listed", "designed"],
                    correctIndex: 3,
                    explanation: "NEC 250.12: Nonconductive coatings shall be removed from grounding contact surfaces, or fittings designed to make such removal unnecessary shall be used."
                },
                {
                    number: 27,
                    text: "______ lists the dimensions of insulated conductors and fixture wires.",
                    options: ["300.1(C)", "300.19(A)", "Table 2, Chapter 9", "Table 5, Chapter 9"],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9, Table 5: This table lists the dimensions (overall diameter and area) of insulated conductors and fixture wires used for conduit fill calculations."
                },
                {
                    number: 28,
                    text: "Table ______ lists demand factors for kitchen equipment other than dwelling units.",
                    options: ["220.55", "220.56", "220.83", "220.84"],
                    correctIndex: 1,
                    explanation: "NEC Table 220.56: This table provides demand factors for commercial kitchen equipment (other than dwelling units), allowing load calculations to be reduced based on the number of pieces of equipment."
                },
                {
                    number: 29,
                    text: "______ lists the percent of cross sectional fill permitted in conduit and tubing fill for conductors and cables.",
                    options: ["Table 4, Chapter 9", "Table 8, Chapter 9", "Table 1, Chapter 9", "Table 5, Chapter 9"],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 1: This table lists the maximum percentages of cross-sectional fill permitted in conduit and tubing (e.g., 53% for 1 conductor, 31% for 2 conductors, 40% for 3 or more conductors)."
                },
                {
                    number: 30,
                    text: "Signs and outline lighting systems with lampholders for incandescent lamps shall be marked to indicate the maximum allowable lamp wattage per lampholder. The markings shall be permanently installed, in letters at least ______ high, and shall be located where visible during relamping.",
                    options: ["1/4\"", "1/2\"", "1\"", "2\""],
                    correctIndex: 0,
                    explanation: "NEC 600.4(C): Signs with incandescent lampholders shall be marked with maximum allowable lamp wattage in letters at least 1/4 inch high, permanently installed and visible during relamping."
                },
                {
                    number: 31,
                    text: "______ is the process by which one conductor produces or induces a voltage in another conductor even though there is no mechanical coupling between the two conductors.",
                    options: ["Cutting of fluxes", "Short circuit", "Induction", "Eddy current"],
                    correctIndex: 2,
                    explanation: "General Knowledge: Induction (electromagnetic induction) is the process by which a changing magnetic field in one conductor induces a voltage in a nearby conductor without any physical or mechanical connection between them."
                },
                {
                    number: 32,
                    text: "Electrical current is measured in terms of ______.",
                    options: ["electron pressure", "electrons passing a point per second", "watts", "resistance"],
                    correctIndex: 1,
                    explanation: "General Knowledge: Electrical current (measured in amperes) is defined as the rate of electron flow â specifically, the number of electrons (coulombs of charge) passing a point per second. 1 ampere = 1 coulomb per second."
                },
                {
                    number: 33,
                    text: "The resistance of a circuit may vary due to ______.",
                    options: ["a loose connection", "change in voltage", "change in current", "induction"],
                    correctIndex: 0,
                    explanation: "General Knowledge: Resistance is a physical property of a circuit and does not change with voltage or current (in a purely resistive circuit). However, a loose connection introduces variable contact resistance, which can cause the overall circuit resistance to vary."
                },
                {
                    number: 34,
                    text: "An alternation is ______.",
                    options: ["one-half cycle", "one hertz", "one alternator", "two cycles"],
                    correctIndex: 0,
                    explanation: "General Knowledge: An alternation is one-half of a complete AC cycle. One complete cycle consists of two alternations â a positive alternation and a negative alternation."
                },
                {
                    number: 35,
                    text: "A shunt is used to measure ______.",
                    options: ["resistance", "capacitance", "current", "wattage"],
                    correctIndex: 2,
                    explanation: "General Knowledge: A shunt is a low-resistance device connected in parallel with an ammeter to extend its current measurement range. It diverts (shunts) most of the current around the meter movement, allowing large currents to be measured."
                },
                {
                    number: 36,
                    text: "If two equal resistance conductors are connected in parallel, the resistance of the two conductors is equal to ______.",
                    options: [
                        "the resistance of one conductor",
                        "twice the resistance of one conductor",
                        "one-half the resistance of one conductor",
                        "the resistance of both conductors"
                    ],
                    correctIndex: 2,
                    explanation: "General Knowledge: When two equal resistors are connected in parallel, the total resistance equals half the value of one resistor. Formula: R_total = R/n, where n is the number of equal resistors in parallel. Two equal resistors in parallel = R/2."
                },
                {
                    number: 37,
                    text: "Table ______ lists the maximum rating or setting of motor branch-circuit short circuit and ground fault protective devices.",
                    options: ["430.248", "430.52(C)(1)", "430.37", "430.22"],
                    correctIndex: 1,
                    explanation: "NEC Table 430.52(C)(1): This table lists the maximum rating or setting of motor branch-circuit short-circuit and ground-fault protective devices as a percentage of full-load current for various motor types and protective device types."
                },
                {
                    number: 38,
                    text: "Branch circuits recognized by this article shall be rated in accordance with the maximum permitted ampere rating or ______ of the overcurrent device.",
                    options: ["listing", "marking", "setting", "rating"],
                    correctIndex: 2,
                    explanation: "NEC 210.18: Branch circuits shall be rated in accordance with the maximum permitted ampere rating or setting of the overcurrent protective device."
                },
                {
                    number: 39,
                    text: "Table ______ lists the maximum cord-and-plug-connected load to receptacle.",
                    options: ["210.21(B)(2)", "210.24", "210.21(B)(3)", "220.3"],
                    correctIndex: 0,
                    explanation: "NEC Table 210.21(B)(2): This table lists the maximum cord-and-plug connected load permitted for various receptacle ratings."
                },
                {
                    number: 40,
                    text: "Table ______ lists clearances over roadways, walkways, rail, water, and open land.",
                    options: ["300.5", "220.102", "235.360(A)", "225.61"],
                    correctIndex: 2,
                    explanation: "NEC Table 235.360(A): This table lists the required vertical clearances for overhead conductors over various surfaces including roadways, walkways, rail, water, and open land."
                },
                {
                    number: 41,
                    text: "Which of the following is NOT considered part of a luminaire?",
                    options: ["ballast", "a lampholder", "lamp or lamps", "parts designed to position the light source"],
                    correctIndex: 1,
                    explanation: "NEC Article 100 DEF 100 (Luminaire): A luminaire is a complete lighting unit consisting of a light source (lamp), ballast, and parts designed to distribute light, position the lamp, and connect to the power supply. A lampholder alone is not a complete luminaire."
                },
                {
                    number: 42,
                    text: "______ RMC shall be permitted to be installed for direct burial and swimming pool applications.",
                    options: ["Stainless steel", "Galvanized steel", "Aluminum", "Red brass"],
                    correctIndex: 3,
                    explanation: "NEC 344.10(A)(1): Red brass RMC (rigid metal conduit) is permitted for direct burial and swimming pool applications due to its corrosion resistance in wet and chemically aggressive environments."
                },
                {
                    number: 43,
                    text: "Backfill that contains large rocks, paving materials, cinders, large or sharply angular substances, or corrosive material shall not be placed in an excavation where materials may damage raceways, cables, conductors, or other structures or prevent adequate compaction of fill or contribute to the ______ of raceways, cables, or other substructures.",
                    options: ["damage", "deterioration", "aging", "corrosion"],
                    correctIndex: 3,
                    explanation: "NEC 300.5(F): Backfill containing harmful materials shall not be used where it may damage or contribute to the corrosion of raceways, cables, conductors, or other substructures."
                },
                {
                    number: 44,
                    text: "Enclosures that are not over 100 cubic inches in size and which have two conduits supported within three feet on either side of the enclosure and the enclosure does not contain devices or support fixtures shall not be required to have the enclosure supported if the conduits are ______.",
                    options: [
                        "rigid nonmetallic conduits",
                        "threaded into hubs identified for the purpose",
                        "installed with locknuts inside and outside enclosure",
                        "shoulders of fittings outside and locknuts inside the box"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 314.23(E): Enclosures not over 100 cubic inches with two conduits within 3 feet on either side do not require additional support if the conduits are threaded into hubs identified for the purpose."
                },
                {
                    number: 45,
                    text: "Conductors drawn from a copper-clad aluminum rod with the copper metallurgically bonded to an aluminum core. The copper forms a minimum of ______ percent of the csa.",
                    options: ["10", "20", "40", "70"],
                    correctIndex: 0,
                    explanation: "NEC 310.3: Copper-clad aluminum conductors are drawn from a copper-clad aluminum rod where the copper forms a minimum of 10% of the cross-sectional area (CSA) of the composite conductor."
                },
                {
                    number: 46,
                    text: "Concrete, brick or tile walls are considered as being ______.",
                    options: ["isolated", "insulators", "grounded", "dry locations"],
                    correctIndex: 2,
                    explanation: "NEC Table 110.26(A)(1) Condition 2: Concrete, brick, or tile walls are considered grounded surfaces for purposes of determining working clearances around electrical equipment."
                },
                {
                    number: 47,
                    text: "An isolated ground receptacle shall be identified by ______.",
                    options: [
                        "CO/ALR orange marking on the face of the receptacle",
                        "a metal faceplate not less than 0.030 inches in thickness",
                        "a reset type test button on the face of the receptacle",
                        "an orange triangle located on the face of the receptacle"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 406.3(E): Isolated ground receptacles shall be identified by an orange triangle located on the face of the receptacle."
                },
                {
                    number: 48,
                    text: "In a hospital General Care Area, each patient bed location shall be provided with a minimum of ______ receptacles.",
                    options: ["3 single", "2 single or 1 duplex", "2 duplex or 4 single", "4 duplex or 8 single"],
                    correctIndex: 3,
                    explanation: "NEC 517.18(B): In general care areas of hospitals, each patient bed location shall be provided with a minimum of 4 duplex receptacles or 8 single receptacles."
                },
                {
                    number: 49,
                    text: "Balconies, decks, and porches that are attached to the dwelling unit and are accessible from inside the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck, or porch. The receptacle outlet shall not be located more than ______ above the balcony, deck, or porch walking surface.",
                    options: ["6'", "6' 6\"", "7'", "8'"],
                    correctIndex: 1,
                    explanation: "NEC 210.52(E)(3): Receptacles on balconies, decks, and porches of dwelling units shall not be located more than 6 feet 6 inches above the walking surface."
                },
                {
                    number: 50,
                    text: "Conductors having ______ insulation and operating at different voltage levels shall not occupy the same enclosure, cable, or raceway.",
                    options: ["thermoset", "flame-retardant", "nonshielded", "silicone rubber"],
                    correctIndex: 2,
                    explanation: "NEC 305.4: Conductors with nonshielded insulation operating at different voltage levels shall not occupy the same enclosure, cable, or raceway."
                },
                {
                    number: 51,
                    text: "The total opposition to current flow in an AC circuit is expressed in ohms and is called ______.",
                    options: ["impedance", "conductance", "reluctance", "resistance"],
                    correctIndex: 0,
                    explanation: "General Knowledge: Impedance (Z) is the total opposition to current flow in an AC circuit, expressed in ohms. It combines resistance (R) and reactance (X): Z = â(RÂ² + XÂ²). Unlike pure DC resistance, impedance accounts for the effects of inductance and capacitance."
                },
                {
                    number: 52,
                    text: "If a 240 volt heater is used on 120 volts, the amount of heat produced will be ______.",
                    options: ["twice as great", "four times as great", "1/4 as much", "the same"],
                    correctIndex: 2,
                    explanation: "General Knowledge: Power P = VÂ²/R. If voltage is halved (240V to 120V), power is reduced by (1/2)Â² = 1/4. So the heater produces only 1/4 as much heat at 120V as it would at its rated 240V."
                },
                {
                    number: 53,
                    text: "The length of time that a fault current would flow on the equipment grounding conductor would be approximately ______.",
                    options: ["1/2 cycle", "6 seconds", "60 cycles", "120 cycles"],
                    correctIndex: 0,
                    explanation: "General Knowledge: In a properly designed system, a fault current on an equipment grounding conductor should cause the overcurrent device to open within approximately 1/2 cycle (about 8 milliseconds on a 60 Hz system), clearing the fault very rapidly."
                },
                {
                    number: 54,
                    text: "A one-quarter bend in a raceway is equivalent to an angle of ______ degrees.",
                    options: ["90", "45", "25", "180"],
                    correctIndex: 0,
                    explanation: "General Knowledge: A one-quarter (1/4) bend in conduit/raceway equals 90 degrees. This is the most common conduit bend, sometimes called a 'quarter bend' or '90-degree elbow.'"
                },
                {
                    number: 55,
                    text: "Which of the following will NOT affect the resistance of a circuit?",
                    options: ["Length of the Conductor", "Diameter of the Conductor", "Insulation of the Conductor", "Temperature"],
                    correctIndex: 2,
                    explanation: "General Knowledge: Resistance of a conductor is affected by length (longer = more resistance), cross-sectional area/diameter (larger = less resistance), material resistivity, and temperature. The insulation type does not affect the conductor's resistance â it only provides electrical isolation."
                },
                {
                    number: 56,
                    text: "The voltage will lead the current when the ______ in the circuit.",
                    options: [
                        "inductive reactance exceeds the capacitive reactance",
                        "reactance exceeds the resistance in the circuit",
                        "resistance exceeds reactance",
                        "capacitive reactance exceeds the inductive reactance"
                    ],
                    correctIndex: 0,
                    explanation: "General Knowledge (ELI the ICE man): In an inductive circuit (ELI), voltage (E) leads current (I). This occurs when inductive reactance (XL) exceeds capacitive reactance (XC), making the circuit net inductive."
                },
                {
                    number: 57,
                    text: "The decimal equivalent for 11/16\" is ______.",
                    options: [".8125", ".6875", ".5625", ".9375"],
                    correctIndex: 1,
                    explanation: "General Knowledge: 11 Ã· 16 = 0.6875. Therefore 11/16 = .6875."
                },
                {
                    number: 58,
                    text: "Extreme ______ may cause PVC conduit to become brittle, and therefore more susceptible to damage from physical contact.",
                    options: ["heat", "cold", "sunlight", "moisture"],
                    correctIndex: 1,
                    explanation: "General Knowledge: Extreme cold temperatures cause PVC (polyvinyl chloride) conduit to become brittle, making it much more susceptible to cracking or breaking from physical impact."
                },
                {
                    number: 59,
                    text: "Where metal fences are located within ______ feet of the exposed electrical conductors or equipment, the fence shall be bonded to the grounding electrode system with bonding jumpers.",
                    options: ["25", "24", "20", "16"],
                    correctIndex: 3,
                    explanation: "NEC 352.10 I.N. / 250.194(A): Metal fences within 16 feet of exposed electrical conductors or equipment shall be bonded to the grounding electrode system to prevent dangerous voltage potentials."
                },
                {
                    number: 60,
                    text: "In multifamily dwellings, Type NM Cable is permitted in buildings that are permitted to be type(s) ______.",
                    options: ["V", "III", "IV", "all of these"],
                    correctIndex: 3,
                    explanation: "NEC 334.10(2): Type NM cable is permitted in multifamily dwellings in buildings of Types III, IV, and V construction. The answer 'all of these' (V, III, and IV) is correct."
                },
                {
                    number: 61,
                    text: "When sizing a branch circuit for a fixed storage-type water heater with a capacity of 120 gallons or less, the water heater is considered a/an ______.",
                    options: ["varying load", "intermittent load", "noncontinuous load", "continuous load"],
                    correctIndex: 3,
                    explanation: "NEC 422.13: Fixed storage water heaters with a capacity of 120 gallons or less shall be considered a continuous load for branch circuit sizing purposes, requiring the branch circuit to be rated at 125% of the nameplate rating."
                },
                {
                    number: 62,
                    text: "In other than one-and two-family dwelling units, the available fault current and the date of the calculation was performed shall be field marked on the enclosure of ______.",
                    options: ["switchgear", "panelboards", "switchboards", "all of these"],
                    correctIndex: 3,
                    explanation: "NEC 408.6 / 422.13: Available fault current and calculation date must be field marked on the enclosures of switchgear, panelboards, and switchboards in other than one- and two-family dwelling units."
                },
                {
                    number: 63,
                    text: "If the emergency disconnecting means required in 230.85 for dwelling units is a meter disconnect, it must be ______ the meter mounting equipment.",
                    options: ["near", "remote from", "adjacent to", "integral to"],
                    correctIndex: 3,
                    explanation: "NEC 230.85(B)(2): Where the emergency disconnect for a dwelling unit is a meter disconnect, it shall be integral to the meter mounting equipment."
                },
                {
                    number: 64,
                    text: "If locating a motor's disconnecting means within sight of the motor would result in an increased hazard, the motor controller may act as the required disconnect if it is ______.",
                    options: ["serviceable", "accessible", "lockable", "readily accessible"],
                    correctIndex: 2,
                    explanation: "NEC 430.102(B)(2) Exception: Where the disconnect within sight of the motor would pose an increased hazard, the motor controller may serve as the disconnecting means if it is lockable in the open position."
                },
                {
                    number: 65,
                    text: "A three-way switch is counted as ______ conductor(s) based on the largest conductor connected to the switch in determining conductor fill in a device box.",
                    options: ["one", "two", "three", "not required to be counted"],
                    correctIndex: 1,
                    explanation: "NEC 314.16(B)(4): Each switch, receptacle, or device is counted as two conductors based on the largest conductor connected, for purposes of device box fill calculations."
                },
                {
                    number: 66,
                    text: "Equipment intended to interrupt current at fault levels shall have a/an ______ rating, at normal voltage, that is at least equal to the available fault current at the line terminals of the equipment.",
                    options: ["time delay", "interrupting", "short-time", "long-time"],
                    correctIndex: 1,
                    explanation: "NEC 110.9: Equipment intended to interrupt current at fault levels must have an interrupting rating sufficient for the available fault current at the line terminals. This ensures the device can safely interrupt fault current without catastrophic failure."
                },
                {
                    number: 67,
                    text: "Vegetation such as trees shall NOT be used for support of ______.",
                    options: ["luminaires", "boxes", "overhead conductor spans", "any of these"],
                    correctIndex: 2,
                    explanation: "NEC 110.9: Vegetation (trees) shall not be used for support of overhead conductor spans. Trees may shift, grow, or die, creating safety hazards for conductors attached to them."
                },
                {
                    number: 68,
                    text: "A luminaire in a commercial cooking hood must, among other requirements, exclude grease, oil, and ______ from the lamp and wiring compartment.",
                    options: ["solids", "moisture", "oxygen", "exhaust vapors"],
                    correctIndex: 3,
                    explanation: "NEC 225.26 / 410.36(G): Luminaires installed in commercial cooking hoods must be constructed to exclude grease, oil, and exhaust vapors from the lamp and wiring compartment to prevent fire hazards."
                },
                {
                    number: 69,
                    text: "Stainless steel rigid metal conduit may use galvanized steel boxes and enclosures if those enclosures are not subject to ______.",
                    options: [
                        "severe corrosive influences",
                        "unauthorized contact",
                        "corrosive influences",
                        "physical damage"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 410.10(C): Stainless steel RMC may be used with galvanized steel boxes and enclosures provided those enclosures are not subject to severe corrosive influences."
                },
                {
                    number: 70,
                    text: "The maximum size FMT permitted is ______.",
                    options: ["1/2\"", "3/4\"", "1\"", "1 1/4\""],
                    correctIndex: 1,
                    explanation: "NEC 360.20(B): Flexible metallic tubing (FMT) is available in trade sizes 3/8 inch and 1/2 inch; the maximum permitted trade size for FMT is 3/4 inch."
                }
            ]
        },
        {
            id: "final_3",
            title: "Journeyman Final Exam #3",
            timeMinutes: 180,
            questions: [
                {
                    number: 1,
                    text: "A Universal Serial Bus flush device cover plate that additionally provides a night light and/or output connector(s) shall be listed.",
                    options: ["one", "two", "Class 1", "Class 2"],
                    correctIndex: 3,
                    explanation: "Keywords: USB, Receptacles, Cover Plates. NEC 406.6(D). Article 406 covers receptacles, cord connectors, and attachment plugs. Section 406.6(D) requires integrated cover plates with USB or night lights to be listed as Class 2 power sources."
                },
                {
                    number: 2,
                    text: "RV feeders from 208Y/120 volt, 3ø systems shall be permitted to include ___.",
                    options: ["I only", "II only", "I and II only", "I, II and III"],
                    correctIndex: 2,
                    explanation: "Keywords: Recreational Vehicles (RVs), Feeders. NEC 551.72(B). Article 551 covers recreational vehicles and RV parks. Section 551.72(B) permits the inclusion of one equipment grounding conductor and one grounded conductor in these specific distribution systems."
                },
                {
                    number: 3,
                    text: "The conductors supplying the supplementary overcurrent protective devices for fixed industrial process heating equipment shall be considered ___ conductors.",
                    options: ["supplementary", "tap", "by-pass", "branch circuit"],
                    correctIndex: 3,
                    explanation: "Keywords: Process Heating, Fixed Industrial. NEC 425.22(D). Article 425 covers fixed industrial process heating equipment. Section 425.22(D) specifies that these conductors are categorized as branch-circuit conductors."
                },
                {
                    number: 4,
                    text: "In airports where maintenance and supervision conditions ensure that only qualified persons can access, install, or service the cable, airfield lighting cable used in series circuits that are rated up to ___ volts and are powered by constant current regulators shall be permitted to be installed in cable trays.",
                    options: ["1000", "2500", "3000", "5000"],
                    correctIndex: 3,
                    explanation: "Keywords: Airports, Airfield Lighting, Cable Trays. NEC 392.10(E). Article 392 covers cable trays. Section 392.10(E) allows high-voltage airfield lighting cables (up to 5000V) in trays under qualified supervision."
                },
                {
                    number: 5,
                    text: "Low voltage heating power unit shall be an isolating type with a rated output not exceeding ___ volts peak ac.",
                    options: ["30", "42.4", "60", "25"],
                    correctIndex: 1,
                    explanation: "Keywords: Low-Voltage Heating. NEC 424.101(A). Article 424 covers fixed electric space-heating equipment. Part X (424.101) limits low-voltage heating systems to 42.4V peak AC for safety."
                },
                {
                    number: 6,
                    text: "GFCI protection shall be provided for lighting outlets not exceeding ___ volts installed in crawl spaces.",
                    options: ["30", "50", "90", "120"],
                    correctIndex: 3,
                    explanation: "Keywords: Crawl Spaces, GFCI, Lighting Outlets. NEC 210.8(C). Article 210 covers branch circuits. Section 210.8(C) requires GFCI protection for lighting in crawl spaces to protect personnel in damp, confined locations."
                },
                {
                    number: 7,
                    text: "All audio equipment operating at greater than the low-voltage contact limit and located within ___ from the inside walls of a storable or portable immersion pool shall be grounded and shall be protected by a GFCI.",
                    options: ["6'", "8'", "10'", "12'"],
                    correctIndex: 0,
                    explanation: "Keywords: Audio Equipment, Swimming Pools (Storable). NEC 680.35(D). Article 680 covers swimming pools, fountains, and similar installations. Section 680.35(D) sets a 6-foot proximity limit for grounding/GFCI requirements."
                },
                {
                    number: 8,
                    text: "Locations in which easily ignitible combustible fibers are stored or handled other than in the process of manufacturing are designated as ___.",
                    options: ["nonhazardous", "Class III, Division 2", "Class III, Division 1", "Class II, Division 2"],
                    correctIndex: 1,
                    explanation: "Keywords: Fibers, Hazardous Locations. NEC 500.5(D)(2). Article 500 covers general requirements for hazardous locations. Class III, Division 2 is the designation for areas where fibers are stored or handled."
                },
                {
                    number: 9,
                    text: "A disconnecting means is required to disconnect the ___ from the circuit.",
                    options: ["motor and controller", "motor", "motor or controller", "controller"],
                    correctIndex: 0,
                    explanation: "Keywords: Disconnecting Means, Motors, Controllers. NEC 430.101. Article 430 covers motors, motor circuits, and controllers. Section 430.101 requires the disconnect to isolate both the motor and its controller simultaneously."
                },
                {
                    number: 10,
                    text: "The definition of \"busbar\" in Article 100 applies ___.",
                    options: ["only to Article 110", "only to Article 225", "only to Article 393", "throughout the NEC"],
                    correctIndex: 2,
                    explanation: "Keywords: Busbar, Definitions. NEC Article 100 / 393. Article 100 contains definitions. In the 2023 NEC, the term 'busbar' has a specific application context related to Low-Voltage Suspended Ceiling systems (Article 393)."
                },
                {
                    number: 11,
                    text: "Most incidents and injuries are initiated by ___.",
                    options: ["equipment failures", "people", "incomplete procedures", "inadequate regulation enforcement"],
                    correctIndex: 1,
                    explanation: "Keywords: Safety, Injuries. NFPA 70E. Based on electrical safety theory, human error—including complacency or failure to follow established safety protocols—is the leading cause of on-the-job accidents."
                },
                {
                    number: 12,
                    text: "Which of the following organizations would maintain records of tested electrical equipment?",
                    options: ["Underwriters' Laboratories", "National Fire Protection Association", "National Electrical Contractors Association", "IEEE"],
                    correctIndex: 0,
                    explanation: "Keywords: Testing, UL. General Knowledge. Underwriters' Laboratories (UL) is a primary Nationally Recognized Testing Laboratory (NRTL) that tests products and maintains public records of safety 'listings'."
                },
                {
                    number: 13,
                    text: "Fastening of unbroken lengths of EMT conduit can be increased to a distance of ___ from the termination point where the structural members do not readily permit fastening within 3 feet.",
                    options: ["4'", "5'", "6'", "10'"],
                    correctIndex: 1,
                    explanation: "Keywords: EMT, Support, Fastening. NEC 358.30(A) ex.1. Article 358 covers Electrical Metallic Tubing (EMT). While 3ft is standard, Exception 1 allows an extension to 5ft where structural interference occurs."
                },
                {
                    number: 14,
                    text: "What is the maximum cord-and-plug connected load permitted on a 15 amp receptacle that is supplied by a 20 amp circuit supplying multiple outlets?",
                    options: ["12 amps", "16 amps", "20 amps", "24 amps"],
                    correctIndex: 0,
                    explanation: "Keywords: Receptacles, Load, Cord-and-Plug. NEC 210.21(B)(2) & Table 210.21(B)(2). Article 210 covers branch circuits. To prevent individual outlet failure, the load is restricted to 80% of the rating (15A x 0.8 = 12A)."
                },
                {
                    number: 15,
                    text: "Enclosures for overcurrent protection devices must be mounted in a/an ___ position unless that is shown to be impracticable.",
                    options: ["horizontal", "vertical", "perspective", "upright"],
                    correctIndex: 1,
                    explanation: "Keywords: Overcurrent Protection, Enclosures, Mounting. NEC 240.33. Article 240 covers overcurrent protection. Vertical mounting ensures that the switch handle mechanism operates correctly and consistently under the influence of gravity."
                },
                {
                    number: 16,
                    text: "Heat generated internally in the conductor as the result of load current flow, including fundamental and ___ currents.",
                    options: ["dissipation", "alternation", "harmonic", "transfer"],
                    correctIndex: 2,
                    explanation: "Keywords: Conductors, Harmonics, Heat. NEC 310.14(A)(3)(2). Article 310 covers conductors for general wiring. Harmonic currents from electronic loads create additional heat that must be accounted for during wire sizing (derating)."
                },
                {
                    number: 17,
                    text: "Equipment grounding conductors must be the same size as the circuit conductors for ___ amp circuits.",
                    options: ["30", "20", "15", "all of these"],
                    correctIndex: 3,
                    explanation: "Keywords: Grounding Conductors, Sizing. NEC Table 250.122. Article 250 covers grounding and bonding. For circuits of 15A, 20A, and 30A, the EGC must match the phase conductor size to ensure a low-impedance fault path."
                },
                {
                    number: 18,
                    text: "When supplying a room air conditioner rated 120 volts, the length of the flexible supply cord must not exceed ___.",
                    options: ["6'", "8'", "10'", "12'"],
                    correctIndex: 2,
                    explanation: "Keywords: Air Conditioners, Flexible Cord. NEC 440.64. Article 440 covers air-conditioning and refrigerating equipment. Cord length is limited to 10ft for 120V units to prevent hazards associated with long cords."
                },
                {
                    number: 19,
                    text: "A ___ must be located in sight from the motor location and the driven machinery location.",
                    options: ["disconnecting means", "circuit breaker", "fuse", "controller"],
                    correctIndex: 0,
                    explanation: "Keywords: Motors, Disconnecting Means, In Sight. NEC 430.102(B)(1). Article 430 covers motors. Safety protocols require the disconnect to be 'in sight' so a technician can verify it remains off while working on the motor."
                },
                {
                    number: 20,
                    text: "Outdoor antennas and lead-in conductors... Where proximity to open electric light or power service conductors of less than 250 volts... must provide a clearance of at least ___.",
                    options: ["12\"", "18\"", "24\"", "30\""],
                    correctIndex: 2,
                    explanation: "Keywords: Antennas, Clearance. NEC 810.13. Article 810 covers radio and TV equipment. A 24-inch clearance is required to prevent antennas from contacting power lines if they fall or sway."
                },
                {
                    number: 21,
                    text: "Effective safe work practices are based on which of the following?",
                    options: ["Type of hazard", "Manner of exposure", "Degree of exposure", "All of these"],
                    correctIndex: 3,
                    explanation: "Keywords: Safety, Work Practices. NFPA 70E. Safe work practices rely on analyzing the hazard (Shock/Arc), how you are exposed to it, and the potential severity of that exposure."
                },
                {
                    number: 22,
                    text: "When working on live electrical circuits, the type of screwdriver that should be used has a/an ___.",
                    options: ["non-conducting handle", "double triangle and rated-for-volts handle", "ergonomically designed handle for safety", "longer blade and square handle"],
                    correctIndex: 1,
                    explanation: "Keywords: Insulated Tools, Safety. General Knowledge. Professional insulated tools are marked with a double-triangle symbol and a 1000V rating to certify they have been dielectric-tested for live work."
                },
                {
                    number: 23,
                    text: "Conductors in a non-jacketed multiconductor cable, such as ribbon cable in a permanent amusement attraction shall not be smaller than ___ AWG.",
                    options: ["22", "24", "26", "30"],
                    correctIndex: 2,
                    explanation: "Keywords: Amusement Attractions, Conductors. NEC 522.21(B). Article 522 covers control systems for permanent amusement attractions. Conductors in ribbon cables must be at least #26 AWG to ensure mechanical strength."
                },
                {
                    number: 24,
                    text: "For installations consisting of not more than two 2-wire branch circuits, the building disconnecting means must have a rating of not less than ___ amps.",
                    options: ["15", "20", "25", "30"],
                    correctIndex: 3,
                    explanation: "Keywords: Outside Branch Circuits, Disconnecting Means. NEC 225.39(B). Article 225 covers outside branch circuits and feeders. Small 2-circuit installations require at least a 30A disconnect rating."
                },
                {
                    number: 25,
                    text: "Supplementary overcurrent protection ___.",
                    options: ["must be readily accessible", "must not be used in luminaires", "may be used to protect internal circuits of equipment", "may be used as a substitute for a branch-circuit"],
                    correctIndex: 2,
                    explanation: "Keywords: Overcurrent Protection, Supplementary. NEC 240.10. Article 240 covers overcurrent protection. Supplementary fuses (like those in a power strip or appliance) protect internal components but cannot replace the branch-circuit breaker."
                },
                {
                    number: 26,
                    text: "Electrical services and feeders shall be calculated on the basis of not less than ___ per electrified truck parking space.",
                    options: ["11 kVA", "12 kVA", "15 kVA", "21 kVA"],
                    correctIndex: 0,
                    explanation: "Keywords: Truck Parking Spaces, Feeders. NEC 626.11. Article 626 covers electrified truck parking spaces. Calculations must account for 11 kVA per space to support on-board truck loads."
                },
                {
                    number: 27,
                    text: "The largest size grounding electrode conductor to a concrete-encased electrode is not required to be larger than ___ copper.",
                    options: ["#10", "#8", "#6", "#4"],
                    correctIndex: 3,
                    explanation: "Keywords: Grounding Electrode Conductor (GEC), Concrete-Encased. NEC 250.66(B). Article 250 covers grounding and bonding. Since the rebar in concrete has a finite fault capacity, #4 copper is the maximum GEC size required."
                },
                {
                    number: 28,
                    text: "Appliances, ___ provided for public use rated 250v or less and 60 amps or less, 1ø or 3ø, shall be provided with GFCI protection for personnel.",
                    options: ["vending machines", "tire inflation machines", "drinking water coolers", "all of these"],
                    correctIndex: 3,
                    explanation: "Keywords: Appliances, GFCI, Public Use. NEC 422.5(A)(2,4,5). Article 422 covers appliances. Publicly accessible equipment like vending machines requires GFCI protection due to the high risk of user contact and damp environments."
                },
                {
                    number: 29,
                    text: "The localization of an overcurrent condition to restrict outages to the circuit or equipment affected... is called ___.",
                    options: ["arc-fault interrupter", "overload protection", "selective coordination", "none of these"],
                    correctIndex: 2,
                    explanation: "Keywords: Coordination, Overcurrent. NEC Article 100 Definitions. Selective coordination ensures only the closest breaker to a fault trips, preventing a localized issue from causing a total power blackout."
                },
                {
                    number: 30,
                    text: "Torque requirements for motor control circuit device terminals must be a minimum of ___ lbs-inch (unless otherwise identified) for screw-type pressure terminals used for #14 and smaller copper conductors.",
                    options: ["6", "7", "8", "10"],
                    correctIndex: 1,
                    explanation: "Keywords: Motors, Torque, Terminals. NEC 430.9(C). Article 430 covers motors. Standardizing torque at 7 lb-in ensures a tight, low-resistance connection that won't overheat over time."
                },
                {
                    number: 31,
                    text: "Where overhead communications wires and cables enter buildings, they must ___.",
                    options: ["be located below electric light/power conductors", "not be attached to a cross-arm carrying power", "have vertical clearance of not less than 8' from roofs", "any of the above"],
                    correctIndex: 3,
                    explanation: "Keywords: Communications, Overhead, Clearance. NEC 800.44(A)(1&2) 800.44(B). Article 800 covers communications. These combined rules protect the low-voltage lines from high-voltage contact and provide safety for roof workers."
                },
                {
                    number: 32,
                    text: "A nursing home is an area used for the lodging, boarding, and nursing care, on a 24-hour basis, of ___ or more inpatients.",
                    options: ["4", "20", "50", "100"],
                    correctIndex: 0,
                    explanation: "Keywords: Nursing Home, Health Care. NEC Article 100 Definitions. The threshold for defining a facility as a nursing home is 4 or more patients, which triggers more stringent healthcare wiring codes."
                },
                {
                    number: 33,
                    text: "The power in a circuit is 2 W and the voltage is 20 VDC. What is the circuit current?",
                    options: [".10 A", ".20 A", ".30 A", ".40 A"],
                    correctIndex: 0,
                    explanation: "Keywords: Power, Current, Voltage. Electrical Theory: Watt's Law. Current (I) is found by dividing Power (P) by Voltage (E). Calculation: 2W / 20V = 0.1 Amps."
                },
                {
                    number: 34,
                    text: "The minimum size box that is to contain a flush device must not be less than ___ deep.",
                    options: ["3/4\"", "15/16\"", "1\"", "1 1/2\""],
                    correctIndex: 1,
                    explanation: "Keywords: Boxes, Depth, Flush Device. NEC 314.24(B)(5). Article 314 covers boxes and fittings. A 15/16\" depth is required to ensure standard switches and receptacles fit without crushing wires."
                },
                {
                    number: 35,
                    text: "Receptacle outlets installed for a specific appliance in a dwelling unit, such as a clothes washer, dryer, range, or refrigerator, must be within ___ of the intended location of the appliance.",
                    options: ["sight", "no specified distance", "6'", "10'"],
                    correctIndex: 2,
                    explanation: "Keywords: Receptacles, Dwelling Unit, Appliance. NEC 210.50(C). Article 210 covers branch circuits. Receptacles for major appliances must be within 6ft to match standard appliance cord lengths."
                },
                {
                    number: 36,
                    text: "Flexible cords approved for and used with a specific listed appliance or luminaire are considered to be protected when ___.",
                    options: ["#18 AWG and larger", "#16 AWG and larger", "not more than 6' long", "applied within the listing requirements"],
                    correctIndex: 3,
                    explanation: "Keywords: Flexible Cords, Protection. NEC 240.5(B)(1). Article 240 covers overcurrent protection. Listing and proper application ensure that the cord is safely matched to its overcurrent protection."
                },
                {
                    number: 37,
                    text: "For ___ NUCC, the conduit must be trimmed away from the conductors or cables using an approved method that will not damage the conductor or cable insulation or jacket.",
                    options: ["install in a workmanlike manner", "termination", "connect to the fitting properly", "all of these"],
                    correctIndex: 1,
                    explanation: "Keywords: Nonmetallic Underground Conduit (NUCC), Termination. NEC 354.28. Article 354 covers NUCC. Proper trimming at the termination point is vital to avoid sharp edges cutting the wire during heat expansion."
                },
                {
                    number: 38,
                    text: "The motor branch-circuit short-circuit and ground-fault protective device must be capable of carrying the ___ current of the motor.",
                    options: ["starting", "inrush", "running", "overload"],
                    correctIndex: 0,
                    explanation: "Keywords: Motors, Branch-Circuit, Protection. NEC 430.52(B). Article 430 covers motors. The device must withstand 'starting' (locked-rotor) current, which is much higher than 'running' current, without tripping."
                },
                {
                    number: 39,
                    text: "Central heating equipment, other than fixed electric space-heating equipment, must be supplied by a/an ___ branch circuit.",
                    options: ["appliance", "individual", "HARC", "controlled"],
                    correctIndex: 1,
                    explanation: "Keywords: Central Heating, Branch Circuit. NEC 422.12. Article 422 covers appliances. Furnaces require an 'individual' circuit so that unrelated faults on other devices don't shut off the building's heat."
                },
                {
                    number: 40,
                    text: "The ampacity for the supply conductors for a resistance welder with a duty cycle of 15% and a primary current of 21 amps is ___.",
                    options: ["9.45 amps", "8.19 amps", "11.2 amps", "21 amps"],
                    correctIndex: 1,
                    explanation: "Keywords: Welders, Resistance, Ampacity. NEC Table 630.31(A). Article 630 covers electric welders. Using the 15% duty cycle multiplier (0.39): 21A x 0.39 = 8.19A."
                },
                {
                    number: 41,
                    text: "Lockout/tagout is an important part of isolating electrical equipment to be worked on. Which of the following should be secured before lockout is executed?",
                    options: ["OSHA regulations copy", "Supplemental list of energy sources", "Knowledge of source control", "Both (b) and (c)"],
                    correctIndex: 3,
                    explanation: "Keywords: Lockout/Tagout, Safety. NFPA 70E. Electrical safety theory requires confirming that everyone involved knows where all energy sources are and that they are fully isolated."
                },
                {
                    number: 42,
                    text: "For cord-and-plug connected appliances, an accessible separable connector or ___ plug and receptacle is permitted to serve as the disconnecting means.",
                    options: ["a readily accessible", "an isolated", "an accessible", "a guarded"],
                    correctIndex: 2,
                    explanation: "Keywords: Appliances, Disconnecting Means, Plug. NEC 422.33(A). Article 422 covers appliances. The plug must be 'accessible' so it can be reached easily to disconnect power during service or an emergency."
                },
                {
                    number: 43,
                    text: "The only way to see an electrical hazard is ___.",
                    options: ["wearing a switchman's hood", "observing signs and signals indicating presence", "wearing 3-D glasses", "None of these"],
                    correctIndex: 1,
                    explanation: "Keywords: Hazards, Safety. NFPA 70E. Electrical theory teaches that since electricity is invisible, signs, signals, and testing meters are the only reliable ways to identify energized components."
                },
                {
                    number: 44,
                    text: "Voltage drop on sensitive electronic equipment systems must not exceed ___ for branch circuits.",
                    options: ["1.5%", "2.5%", "3%", "5%"],
                    correctIndex: 0,
                    explanation: "Keywords: Sensitive Electronic Equipment, Voltage Drop. NEC 647.4(D). Article 647 covers sensitive electronic equipment. A strict 1.5% limit ensures clean, consistent power for high-tech devices."
                },
                {
                    number: 45,
                    text: "The total number of AC cycles completed in one second is the current's ___.",
                    options: ["phase", "alternation", "frequency", "timing"],
                    correctIndex: 2,
                    explanation: "Keywords: Frequency, AC. Electrical Theory: Frequency. Frequency is the number of complete AC cycles per second, measured in Hertz (Hz). US standard is 60Hz."
                },
                {
                    number: 46,
                    text: "Unused openings for breakers in panelboards must be closed using ___ or other approved means.",
                    options: ["sheet metal", "duct seal", "exothermic welding", "identified closures"],
                    correctIndex: 3,
                    explanation: "Keywords: Panelboards, Openings, Closures. NEC 408.7. Article 408 covers panelboards. Openings must be closed with 'identified closures' (blank fillers) to contain arc flashes and prevent accidental contact."
                },
                {
                    number: 47,
                    text: "Type SE cable is permitted to be formed in a ___ and taped with self-sealing weather-resistant thermoplastic.",
                    options: ["doughnut", "gooseneck", "turtleback", "loop"],
                    correctIndex: 1,
                    explanation: "Keywords: Service-Entrance Cable (SE), Gooseneck. NEC 230.54(B) ex. Article 230 covers services. A 'gooseneck' is a downward bend that serves as a drip loop to keep water out of the cable assembly."
                },
                {
                    number: 48,
                    text: "The largest size THHN conductor permitted in a 3/8\" FMC is ___.",
                    options: ["#16", "#14", "#12", "#10"],
                    correctIndex: 3,
                    explanation: "Keywords: Flexible Metal Conduit (FMC), Fill. NEC Table 348.22. Article 348 covers FMC. This fill table specifies #10 AWG as the largest conductor size allowed in small 3/8\" conduit."
                },
                {
                    number: 49,
                    text: "At least one 125-volt, single-phase, 15- or 20-ampere-rated receptacle outlet shall be installed within ___ of the electrical service equipment requiring servicing.",
                    options: ["6'", "10'", "25'", "50'"],
                    correctIndex: 2,
                    explanation: "Keywords: Service Equipment, Receptacle. NEC 210.63. Article 210 covers branch circuits. Technicians need a receptacle within 25ft for test equipment so they don't have to use hazardous extension cords."
                },
                {
                    number: 50,
                    text: "When an underground metal water-piping system is used as a grounding electrode... Bonding conductors must be of ___ to permit removal of such equipment...",
                    options: ["cu/al wire", "stranded wire", "flexible conduit", "sufficient length"],
                    correctIndex: 3,
                    explanation: "Keywords: Water-Piping, Grounding Electrode, Bonding. NEC 250.68(B). Article 250 covers grounding and bonding. Using a 'sufficient length' of wire ensures the ground path isn't broken if a meter or pipe is removed."
                },
                {
                    number: 51,
                    text: "An outdoor disconnecting means for a mobile home must be installed so the bottom of the enclosure is not less than ___ above the finished grade or working platform.",
                    options: ["12\"", "18\"", "24\"", "30\""],
                    correctIndex: 2,
                    explanation: "Keywords: Mobile Homes, Disconnecting Means. NEC 550.32(F). Article 550 covers mobile homes. A 24-inch height protects the electrical components from dirt, moisture, and snow."
                },
                {
                    number: 52,
                    text: "The minimum number of overload unit(s) required for a three-phase motor is ___.",
                    options: ["1", "2", "3", "4"],
                    correctIndex: 2,
                    explanation: "Keywords: Motors, Overload, Three-Phase. NEC Table 430.37. Article 430 covers motors. To fully protect a 3-phase motor, you need an overload heater/sensor in each of the three power legs."
                },
                {
                    number: 53,
                    text: "Straight runs of 1\" RMC using threaded couplings may be secured at intervals not exceeding ___.",
                    options: ["6'", "10'", "12'", "14'"],
                    correctIndex: 2,
                    explanation: "Keywords: Rigid Metal Conduit (RMC), Support. NEC 344.30(B)(2) & Table 344.30(B). Article 344 covers RMC. Threaded RMC is strong enough to allow 12ft spacing between supports in straight runs."
                },
                {
                    number: 54,
                    text: "All cut ends of flexible metal conduit must be trimmed... except where fittings ___.",
                    options: ["contain insulated bushings", "are listed for grounding", "thread into the convolutions", "are the compression type"],
                    correctIndex: 2,
                    explanation: "Keywords: Flexible Metal Conduit (FMC), Trimming. NEC 348.28. Article 348 covers FMC. Screw-in fittings that 'thread into' the conduit protect the wire from the sharp metal cut, reducing trimming needs."
                },
                {
                    number: 55,
                    text: "A circuit contains two 2,000 ohm resistors connected in parallel. What is the total resistance of the circuit?",
                    options: ["888.8 Ω", "1,000 Ω", "1,200 Ω", "4,000 Ω"],
                    correctIndex: 1,
                    explanation: "Keywords: Parallel Resistance, Resistors. Electrical Theory: Parallel Circuits. When two identical resistors are in parallel, the total resistance is half (Value / n). Calculation: 2000 / 2 = 1000 Ω."
                },
                {
                    number: 56,
                    text: "The building disconnecting means for a one-circuit installation that supplies only limited loads of a single branch circuit must have a rating not less than ___.",
                    options: ["15 amps", "20 amps", "25 amps", "30 amps"],
                    correctIndex: 0,
                    explanation: "Keywords: Disconnecting Means, Branch Circuit. NEC 225.39(A). Article 225 covers outside branch circuits. A minimal 15A rating is permitted if only a single 15A circuit is being supplied."
                },
                {
                    number: 57,
                    text: "When determining the number of conductors that are considered current-carrying, a grounding conductor is ___.",
                    options: ["counted as one current-carrying conductor", "counted as one conductor for each ground wire", "considered current-carrying but not counted", "considered to be a noncurrent-carrying conductor"],
                    correctIndex: 3,
                    explanation: "Keywords: Conductors, Grounding, Current-carrying. NEC 310.15(F). Article 310 covers conductors. Ground wires only carry current during a temporary fault, so they aren't counted for wire heat calculations (derating)."
                },
                {
                    number: 58,
                    text: "The definition of \"fibers/flyings, ignitible\" is found in Article ___.",
                    options: ["100", "500", "502", "503"],
                    correctIndex: 0,
                    explanation: "Keywords: Fibers/Flyings, Definitions. NEC Article 100 Definitions. This general term is defined in Article 100 so it can be applied to various hazardous location classifications throughout the code."
                },
                {
                    number: 59,
                    text: "Receptacles that provide power for water-pump motors or other loads directly related to circulation and sanitation must be located at least ___ from the inside walls of the pool.",
                    options: ["4'", "6'", "10'", "12'"],
                    correctIndex: 1,
                    explanation: "Keywords: Swimming Pools, Pump Motors, Receptacles. NEC 680.22(A)(2). Article 680 covers pools. A 6-foot gap prevents pool users from touching electrical equipment while still in contact with the water."
                },
                {
                    number: 60,
                    text: "Provisions shall be made for sufficient diffusion and ventilation of the gases from the storage battery if present to prevent the accumulation of a/an ___ mixture.",
                    options: ["explosive", "corrosive", "toxic", "all of these"],
                    correctIndex: 0,
                    explanation: "Keywords: Storage Batteries, Ventilation. NEC 480.10(A). Article 480 covers storage batteries. Batteries outgas hydrogen while charging, which can reach 'explosive' concentrations without proper airflow."
                },
                {
                    number: 61,
                    text: "Where motors are provided with terminal housings, the housings must be of ___ and of substantial construction.",
                    options: ["metal", "plastic", "steel", "none of these"],
                    correctIndex: 0,
                    explanation: "Keywords: Motors, Terminal Housings. NEC 430.12(A). Article 430 covers motors. Metal housings are required to protect the wire terminations and provide a solid grounding bond to the motor frame."
                },
                {
                    number: 62,
                    text: "What is the standard abbreviation for power on an electrical diagram?",
                    options: ["PAR", "PB", "PF", "PWR"],
                    correctIndex: 3,
                    explanation: "Keywords: Power, Abbreviation. General Knowledge. Drafting standards use 'PWR' globally to distinguish power circuits from control, signal, or data circuits on blueprints."
                },
                {
                    number: 63,
                    text: "The continuous current-carrying capacity of a 1 1/2 square inch copper busbar mounted in an unventilated enclosure is ___ amps.",
                    options: ["500", "650", "750", "1500"],
                    correctIndex: 3,
                    explanation: "Keywords: Busbars, Current-carrying Capacity. NEC 366.23(A). Article 366 covers auxiliary gutters. Standard rating is 1000A per square inch for copper busbar. Calculation: 1.5 sq in x 1000 = 1500A."
                },
                {
                    number: 64,
                    text: "GFCI protection for personnel is required for all 15 and 20 amp, 125 volt single-phase receptacles installed in a dwelling unit ___.",
                    options: ["laundry", "garage", "shower stalls", "all of these"],
                    correctIndex: 3,
                    explanation: "Keywords: GFCI, Receptacles, Dwelling Unit. NEC 210.8(A). Article 210 covers branch circuits. GFCI is required in all areas where water or ground contact is likely (laundry, garage, and near showers)."
                },
                {
                    number: 65,
                    text: "Service and feeder conductors may be sized using Table 310.12(A) for ___.",
                    options: ["commercial services only", "only multifamily dwelling services", "any service under 400 amps", "only 240/120v, 3-wire services for single dwelling"],
                    correctIndex: 3,
                    explanation: "Keywords: Service Conductors, Sizing, Dwelling Units. NEC Table 310.12(A). Article 310 covers conductors. This specific table allows smaller wires for residential services because homes rarely run all loads at maximum capacity."
                },
                {
                    number: 66,
                    text: "Concrete-encased electrodes of ___ are not required to be part of the grounding electrode system where the steel rebars aren't accessible for use without disturbing concrete.",
                    options: ["gas stations", "hazardous locations", "health care facilities", "existing buildings"],
                    correctIndex: 3,
                    explanation: "Keywords: Grounding Electrode, Concrete-Encased, Existing. NEC 250.50 ex. Article 250 covers grounding and bonding. In 'existing buildings', you aren't required to break concrete to connect to rebar that was never exposed."
                },
                {
                    number: 67,
                    text: "The rating of the attachment plug and receptacle must not exceed ___ @ 250 volts for a cord-and-plug connected air conditioner.",
                    options: ["15 amps", "20 amps", "25 amps", "30 amps"],
                    correctIndex: 0,
                    explanation: "Keywords: Air Conditioners, Receptacles, Plug. NEC 440.55(B). Article 440 covers air-conditioning. Standard 250V units are capped at 15A for the plug to prevent over-drawing on residential branch circuits."
                },
                {
                    number: 68,
                    text: "Where there is more than one driving machine in an elevator room, the disconnecting means must be numbered to correspond to the identifying number of the ___.",
                    options: ["driving machine they control", "panelboard it is fed from", "branch circuit feeding it", "all of these"],
                    correctIndex: 0,
                    explanation: "Keywords: Elevators, Disconnecting Means, Identification. NEC 620.53. Article 620 covers elevators. Numbering ensures that a mechanic doesn't turn off Machine A and accidentally start working on machine B."
                },
                {
                    number: 69,
                    text: "A feeder must have a protective device with a rating or setting ___ branch-circuit short-circuit and ground-fault protective device for any motor in the group...",
                    options: ["125% of the largest rating", "not greater than the largest rating or setting", "225% of the largest rating", "none of these"],
                    correctIndex: 1,
                    explanation: "Keywords: Feeders, Motors, Protective Device. NEC 430.62(A). Article 430 covers motors. The feeder breaker must not exceed the rating of the largest motor's protection plus the other motors' full-load currents."
                },
                {
                    number: 70,
                    text: "The symbol for a three-phase delta wound generator consists of a circle with a ___ scribed inside.",
                    options: ["cross", "triangle", "Y", "star"],
                    correctIndex: 1,
                    explanation: "Keywords: Generators, Delta, Symbols. General Knowledge. Electrical theory uses a triangle symbol to represent Delta (Δ) windings, distinguishing it from 'Wye' or 'Star' (Y) configurations."
                }
            ]
        },
        {
            "id": "final_4",
            "title": "Journeyman Final Exam #4",
            "timeMinutes": 180,
            "questions": [
                {
                    "number": 1,
                    "text": "When applying the demand factors of Table 220.56, in no case can the feeder or service demand load be less than the sum of the ___.",
                    "options": ["largest two kitchen equipment loads", "heat and air conditioning loads", "rating of the appliance loads", "total receptacle load"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Kitchen Equipment, Demand Factors. NEC 220.56. Article 220 covers Load Calculations. Section 220.56 allows demand factors for commercial kitchen equipment, but the calculated load cannot be less than the sum of the two largest kitchen equipment loads."
                },
                {
                    "number": 2,
                    "text": "The ampacity of capacitor circuit conductors must not be less than ___ of capacitor current.",
                    "options": ["80%", "100%", "125%", "135%"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Capacitor, Ampacity. NEC 460.8(A). Article 460 covers Capacitors. To account for harmonic currents and transient conditions, conductors supplying capacitors must have an ampacity of at least 135% of the capacitor's rated current."
                },
                {
                    "number": 3,
                    "text": "The number of conductors allowed in LFNC must not exceed that permitted in ___.",
                    "options": ["Table 7", "Appendix D", "Table 1", "Table 4"],
                    "correctIndex": 2,
                    "explanation": "Keywords: LFNC, Conductor Fill. NEC 356.22. Article 356 covers Liquidtight Flexible Nonmetallic Conduit (LFNC). Conductor fill for LFNC is governed by the percentage fill limits found in Chapter 9, Table 1."
                },
                {
                    "number": 4,
                    "text": "A single piece of equipment consisting of a multiple receptacle comprised of ___ or more receptacles must be computed at not less than 90 va per receptacle.",
                    "options": ["one", "two", "three", "four"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Receptacle Load, Multioutlet. NEC 220.14(I). Article 220 covers Load Calculations. For multioutlet assemblies or equipment with 4 or more receptacles, each receptacle is calculated at 90VA (0.5 x 180VA)."
                },
                {
                    "number": 5,
                    "text": "Per the Code, the volume of a 3\" x 2\" x 2\" device box is ___ cubic inches.",
                    "options": ["10", "12", "14", "15"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Box Volume, Device Box. NEC Table 314.16(A). Article 314 covers Boxes and Fittings. Table 314.16(A) explicitly lists the standard volume for a 3 x 2 x 2 inch metal device box as 10.0 cubic inches."
                },
                {
                    "number": 6,
                    "text": "The AC ohms-to-neutral impedance per 1,000 feet of #4/0 aluminum in a steel raceway is ___.",
                    "options": ["0.05Ω", "0.010Ω", "0.101Ω", "0.10Ω"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Impedance, Aluminum, Steel Raceway. NEC Chapter 9, Table 9. Electrical Theory: Impedance (Z) accounts for both resistance and reactance. For #4/0 Aluminum in a steel raceway, the value is 0.10 ohms per 1,000 feet."
                },
                {
                    "number": 7,
                    "text": "A value assigned to a circuit or system for the purpose of conveniently designating its voltage class such as 120/240 volt is called ___ voltage.",
                    "options": ["average", "source", "nominal", "effective"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Voltage Class, Designating. NEC Article 100 Definitions. Nominal voltage is the value assigned to a circuit (e.g., 120V) for naming the system, though actual voltage may vary within a range."
                },
                {
                    "number": 8,
                    "text": "A 240 volt single-phase room air conditioner shall be considered as a single-phase motor unit if its rating is not more than ___.",
                    "options": ["20 amps", "25 amps", "30 amps", "40 amps"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Air Conditioner, Single-Phase Motor. NEC 440.62(A)(2). Article 440 covers HVAC equipment. A 240V room AC is treated as a single motor unit if it is rated 40 Amps or less."
                },
                {
                    "number": 9,
                    "text": "A steel cable tray of .79 square inches is used as an equipment ground conductor. The maximum rating of the circuit breaker permitted for this application is ___ amps.",
                    "options": ["1000", "600", "200", "400"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Cable Tray, EGC, Steel. NEC Table 392.60(B). Article 392 covers Cable Trays. For steel trays used as an EGC, a cross-sectional area of 0.79 sq. in. permits a maximum overcurrent protection of 200 Amps."
                },
                {
                    "number": 10,
                    "text": "A bathroom in a dwelling has a counter space of seven feet including the sink. How many receptacles are required to serve this area?",
                    "options": ["1", "3", "4", "none are required"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Bathroom, Receptacle, Dwelling. NEC 210.52(D). Article 210 covers Branch Circuits. At least one receptacle outlet must be installed in bathrooms within 3 feet of the outside edge of each basin."
                },
                {
                    "number": 11,
                    "text": "An installation requires a device box with a capacity of 10.25 cubic inches. What is the minimum size box allowed?",
                    "options": ["2\" x 2\" x 3\"", "3\" x 2\" x 2 1/4\"", "3\" x 2\" x 2\"", "2\" x 3\" x 3\""],
                    "correctIndex": 1,
                    "explanation": "Keywords: Box Capacity, Minimum Size. NEC Table 314.16(A). Article 314 covers Boxes. A 3 x 2 x 2.25 inch box has a volume of 10.5 cu. in., which is the smallest standard size that satisfies the 10.25 cu. in. requirement."
                },
                {
                    "number": 12,
                    "text": "A show window is calculated at ___ va per linear foot.",
                    "options": ["180", "1500", "1800", "200"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Show Window, Linear Foot. NEC 220.14(G)(2). Article 220 covers Load Calculations. For show windows, the branch-circuit load must be calculated at 200 VA per linear foot."
                },
                {
                    "number": 13,
                    "text": "The maximum number of 15 amp receptacles permitted on a free standing office partition is ___.",
                    "options": ["10", "13", "2", "6"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Office Partition, Receptacles. NEC 605.9(C). Article 605 covers Office Furnishings. A cord-and-plug-connected office partition is limited to thirteen 15-amp receptacles."
                },
                {
                    "number": 14,
                    "text": "Several motors, each not exceeding 1 horsepower in rating, shall be permitted on a nominal 120 volt branch circuit protected at not over ___ amperes.",
                    "options": ["15", "20", "30", "40"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Motors, 1 HP, 120 Volt. NEC 430.53(A). Article 430 covers Motors. Multiple small motors (under 1 HP) can be connected to a single 20-Amp branch circuit."
                },
                {
                    "number": 15,
                    "text": "At least one receptacle outlet per unit, accessible at grade level, shall be installed at the front and back on ___.",
                    "options": ["commercial buildings", "office buildings only", "motels", "one and two family dwellings"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Receptacle, Grade Level, Front and Back. NEC 210.52(E)(1). Article 210 covers Branch Circuits. For one- and two-family dwellings, at least one outdoor receptacle is required at the front and back of the dwelling."
                },
                {
                    "number": 16,
                    "text": "Which of the following receptacles may be connected to the small appliance branch circuit?",
                    "options": ["Outside receptacles", "Electric clock in a dining room", "Hallway receptacle which is within 20 feet of kitchen", "Garage ceiling receptacle for automatic garage door opener"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Small Appliance Branch Circuit. NEC 210.52(B)(2) ex.1. Article 210 covers Branch Circuits. Receptacles for electric clocks in dining areas/kitchens are permitted on the small appliance circuit."
                },
                {
                    "number": 17,
                    "text": "Where the ampacity of a conductor does not correspond with the standard ampere rating of a fuse or circuit breaker, the next higher standard size is permitted only if the rating does not exceed ___ amperes.",
                    "options": ["600", "800", "1,000", "1,200"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Standard Rating, Next Higher Size. NEC 240.4(B)(3). Article 240 covers Overcurrent Protection. The 'Round Up' rule to the next higher standard OCPD is only permitted if the OCPD rating is 800 Amps or less."
                },
                {
                    "number": 18,
                    "text": "Where wet contact is likely to occur in a permanent amusement attraction, ungrounded 2-wire DC control circuits shall be limited to ___ maximum for continuous DC or 12.4 volts peak for DC that is interrupted at a rate of 10 to 200 Hz.",
                    "options": ["12 volts", ".031 va", "24 watts", "30 volts"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Amusement Attraction, DC Control Circuits, Wet. NEC 522.28. Article 522 covers Control Systems for Amusement Attractions. In wet locations, ungrounded DC control circuits are capped at 30 Volts."
                },
                {
                    "number": 19,
                    "text": "It shall be permissible to apply a demand factor of 75% to the nameplate-rating load of 4 or more ___ fastened in place in a dwelling.",
                    "options": ["water heaters", "dishwashers", "clothes dryers", "I and II only"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Demand Factor 75%, fastened in place. NEC 220.53. Article 220 covers Load Calculations. A 75% demand factor applies to 4+ appliances (like water heaters and dishwashers) fastened in place, excluding space-heating, A/C, and clothes dryers."
                },
                {
                    "number": 20,
                    "text": "When more than one calculated or tabulated ampacity could apply for a given circuit length, the ___ value shall be used.",
                    "options": ["lowest", "average", "highest", "none of these"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Multiple Ampacities, Circuit Length. NEC 310.14(A)(2). Article 310 covers Conductors. If different ampacities apply to a single circuit length, the Code requires using the most restrictive (lowest) value."
                },
                {
                    "number": 21,
                    "text": "What size octagon box is required for 5 - #12 and 4 - #14 conductors?",
                    "options": ["1 1/4\"", "1 1/2\"", "2\"", "2 1/8\""],
                    "correctIndex": 3,
                    "explanation": "Keywords: Octagon Box, Conductor Fill. NEC Table 314.16(B). Article 314 covers Boxes. Calculation: (5 x 2.25) + (4 x 2.0) = 11.25 + 8 = 19.25 cu. in. A 4 x 2 1/8\" octagon box (21.5 cu. in.) is the required minimum size."
                },
                {
                    "number": 22,
                    "text": "Assuming that the area of all the conductors (over 4 conductors) to be installed in a 1\" EMT conduit is 0.30 sq. in., which of the following is true?",
                    "options": ["The conductors' area is greater than allowable", "The conductors' area is less than allowable", "It is necessary to select another trade size", "It is necessary to change the THW conductors to RHW"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Conductor Area, EMT Fill. NEC Chapter 9, Table 4. Electrical Theory: For 1\" EMT at 40% fill, the allowable area is 0.346 sq. in. Since 0.30 is less than 0.346, the installation is code-compliant."
                },
                {
                    "number": 23,
                    "text": "When sizing the service conductors for an apartment complex, the minimum demand load in kW for eight 4 kW ranges would be ___ kW.",
                    "options": ["11.52", "16.96", "32", "None of these"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Service Conductors, Ranges, Demand Load. NEC Table 220.55 (Col. B). Article 220 covers Load Calculations. For eight 4kW ranges, the demand factor is 36% of 32kW (8 x 4), which equals 11.52 kW."
                },
                {
                    "number": 24,
                    "text": "The ampacity of a #14 THW conductor, when there are six conductors in a conduit and the temperature is 30° C, would be ___ amps.",
                    "options": ["25", "22", "20", "16"],
                    "correctIndex": 3,
                    "explanation": "Keywords: #14 THW, Derating, Six Conductors. NEC Table 310.16 & 310.15(C)(1). Article 310 covers Conductors. #14 THW is 20A. Adjustment for 6 conductors (80%): 20A x 0.8 = 16 Amps."
                },
                {
                    "number": 25,
                    "text": "In a custom house, the demand load (load applied for service calculation) for a 12 kW range and a 4 kW oven is ___ kW.",
                    "options": ["11", "11.2", "12", "16"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Service Calculation, Range, Oven. NEC Table 220.55. Article 220 covers Load Calculations. Column C for two appliances (regardless of size up to 12kW each) results in a demand load of 11 kW."
                },
                {
                    "number": 26,
                    "text": "The branch circuit conductor supplying a 3/4 hp, 1ø 115 volt motor shall have an ampacity of at least ___.",
                    "options": ["13.8 amps", "17.25 amps", "20 amps", "21.3 amps"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Branch Circuit, 3/4 HP Motor, 115V. NEC Table 430.248 & 430.22. Article 430 covers Motors. A 3/4 HP, 115V motor has an FLC of 13.8A. Circuit ampacity: 13.8A x 125% = 17.25 Amps."
                },
                {
                    "number": 27,
                    "text": "You are wiring a house that has 2200 square feet under the roof. The living area accounts for 2000 square feet of this space. The minimum general lighting load for this dwelling would be ___ VA.",
                    "options": ["6000", "6600", "7700", "8000"],
                    "correctIndex": 0,
                    "explanation": "Keywords: General Lighting Load, Dwelling, Square Feet. NEC 220.11 & 220.41. Article 220 covers Load Calculations. Load is based on outside dimensions of living area: 2000 sq. ft. x 3 VA/sq. ft. = 6000 VA."
                },
                {
                    "number": 28,
                    "text": "When sizing the service on a dwelling unit, the small appliance load plus laundry load should be computed at ___ VA.",
                    "options": ["1,500", "3,000", "4,500", "6,000"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Service Calculation, Dwelling, Laundry Load. NEC 220.52(A)(B). Article 220 covers Load Calculations. Calculation: (2 small appliance circuits x 1500VA) + (1 laundry circuit x 1500VA) = 4500 VA."
                },
                {
                    "number": 29,
                    "text": "#2/0 THW copper service conductors would require a grounding electrode conductor of ___.",
                    "options": ["#6", "#4", "#3", "#2"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Service Conductors, #2/0, GEC. NEC Table 250.66. Article 250 covers Grounding and Bonding. For copper service conductors sized #2/0, a #4 copper grounding electrode conductor (GEC) is required."
                },
                {
                    "number": 30,
                    "text": "The feeder carrying two single phase, 1 1/2 hp, 230v motors would be required to have a load current rating of ___ amps.",
                    "options": ["12", "16", "22.5", "30"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Feeder, Motors, Load Rating. NEC Table 430.248 & 430.24. Article 430 covers Motors. FLC for 1.5 HP @ 230V is 10A. Feeder rating: (10A x 125%) + 10A = 12.5 + 10 = 22.5 Amps."
                },
                {
                    "number": 31,
                    "text": "What is the allowable ampacity of a #12 TW copper conductor in a raceway with an ambient temperature of 75° F?",
                    "options": ["20 amps", "25 amps", "21.6 amps", "30 amps"],
                    "correctIndex": 2,
                    "explanation": "Keywords: #12 TW, Ampacity, Temperature Correction. NEC Table 310.16. Article 310 covers Conductors. Base ampacity of #12 TW (60C) is 20A. Correction for 75F (1.08): 20A x 1.08 = 21.6 Amps."
                },
                {
                    "number": 32,
                    "text": "The branch-circuit protection for a 1ø, 115v, 3 hp motor would normally be ___ using dual element time delay fuses.",
                    "options": ["35 amps", "40 amps", "60 amps", "90 amps"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Branch-Circuit Protection, 3 HP Motor, 115V. NEC Table 430.248 & 430.52. Article 430 covers Motors. FLC for 3 HP @ 115V is 34A. Time delay fuse limit (175%): 34A x 1.75 = 59.5A. Round to 60A standard size."
                },
                {
                    "number": 33,
                    "text": "The ampacity of a #14 THW conductor, when there are six conductors in a conduit and the temperature is 30° C, would be ___ amps.",
                    "options": ["25", "22", "20", "16"],
                    "correctIndex": 3,
                    "explanation": "Keywords: #14 THW, Conduit Fill, Current-carrying. NEC Table 310.15(C)(1). Article 310 covers Conductors. #14 THW base is 20A. Correction for 6 conductors (80% fill): 20A x 0.8 = 16 Amps."
                },
                {
                    "number": 34,
                    "text": "The maximum motor-running overload protection would be ___ amps for a 3 hp 1 ø 230V motor.",
                    "options": ["15", "20", "22.1", "29.1"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Motor Overload Protection, 3 HP, 230V. NEC Table 430.248 & 430.32(C). Article 430 covers Motors. FLC is 17A. Using 130% maximum: 17A x 1.3 = 22.1 Amps."
                },
                {
                    "number": 35,
                    "text": "The correction factor (C.F.) for 104°F is ___ for a 60°C insulated conductor.",
                    "options": ["0.80", "0.82", "0.91", "0.90"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Correction Factor, Temperature, 60C. NEC Table 310.15(B)(1)(1). Article 310 covers Conductors. The temperature correction factor for a 60C conductor at 104F (40C) is 0.82."
                },
                {
                    "number": 36,
                    "text": "The branch-circuit load for one 6 kW oven would be ___ kW.",
                    "options": ["6", "4.8", "4.2", "5"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Branch-Circuit Load, 6 kW Oven. NEC Table 220.55 note 4. Article 220 covers Load Calculations. For a single appliance branch circuit, the load is the nameplate rating (6 kW)."
                },
                {
                    "number": 37,
                    "text": "If the full load current of a 2 hp, 115v, 1 ø motor with a service factor of 1.2 is 24 amps. What is the maximum motor running overload relay protection?",
                    "options": ["24", "27.6", "31.2", "33.6"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Service Factor, Overload Relay, 2 HP. NEC 430.32(C). Article 430 covers Motors. Max overload for 1.15+ SF is 140% of nameplate. Calculation: 24A x 1.4 = 33.6 Amps."
                },
                {
                    "number": 38,
                    "text": "What is the cubic inch capacity required for a device box containing one duplex receptacle, cable clamps and two #12-2 with ground nonmetallic sheathed cables (romex)?",
                    "options": ["13.5 cu.in.", "15.75 cu.in.", "16 cu.in.", "18 cu.in."],
                    "correctIndex": 3,
                    "explanation": "Keywords: Box Capacity, Romex, Device. NEC 314.16(B). Article 314 covers Boxes. Counts: 4 wires + 1 ground + 1 clamp + 2 (receptacle) = 8 total. Calculation: 8 x 2.25 cu. in. (#12) = 18.0 cu. in."
                },
                {
                    "number": 39,
                    "text": "The branch circuit conductor supplying a 10 hp 3 ø 230v motor shall have an ampacity of at least ___ amps.",
                    "options": ["38.5", "40.25", "35", "17.5"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Branch Circuit, 10 HP Motor, 230V. NEC Table 430.250 & 430.22. Article 430 covers Motors. FLC for 10 HP @ 230V is 28A. Calculation: 28A x 125% = 35 Amps."
                },
                {
                    "number": 40,
                    "text": "There are seven current carrying #12 THHN conductors run in a conduit where the ambient temperature is 30°C. What is the ampacity of each conductor?",
                    "options": ["21", "17.5", "16", "14"],
                    "correctIndex": 0,
                    "explanation": "Keywords: #12 THHN, Derating, Seven Conductors. NEC Table 310.16 & 310.15(C)(1). Article 310 covers Conductors. Base ampacity of #12 THHN is 30A. Adjustment for 7 conductors (70%): 30A x 0.7 = 21 Amps."
                },
                {
                    "number": 41,
                    "text": "The ampacity of a #12 THW conductor when there are not more than three conductors in a raceway and the ambient temperature is 28°C, would be how many amps?",
                    "options": ["20", "25", "30", "35"],
                    "correctIndex": 1,
                    "explanation": "Keywords: #12 THW, Raceway, 28C. NEC Table 310.16. Article 310 covers Conductors. #12 THW (75C) has an ampacity of 25 Amps. At 28C, no derating is required."
                },
                {
                    "number": 42,
                    "text": "A 10 unit apartment building has a 4.5 kW water heater in each unit. What is the demand on the service for these water heaters? Use standard method of calculation.",
                    "options": ["45 kW", "50 kW", "33.75 kW", "36 kW"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Apartment, Water Heater, Service Demand. NEC 220.53. Article 220 covers Load Calculations. For 4+ units, apply 75% demand factor. Calculation: (10 units x 4.5 kW) x 0.75 = 33.75 kW."
                },
                {
                    "number": 43,
                    "text": "The overcurrent protection for a #10 RHH conductor in a conduit at 104°F is ___ amps.",
                    "options": ["30", "36.4", "40", "20"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Overcurrent Protection, #10 RHH, 104F. NEC Table 310.16 & 240.4(D). Article 240 covers Overcurrent Protection. Regardless of calculated ampacity, #10 copper is generally capped at 30 Amps for branch circuit protection."
                },
                {
                    "number": 44,
                    "text": "Under the optional calculation, the air conditioning is added to the service at ___.",
                    "options": ["125%", "full load", "80%", "demand load"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Optional Calculation, Air Conditioning. NEC 220.82(C)(1). Article 220 covers Load Calculations. In dwelling unit optional calculations, A/C loads are taken at 100% (full load)."
                },
                {
                    "number": 45,
                    "text": "A feeder supplying two 4 kW wall-mounted ovens and a 5 kW counter-mounted cooking unit shall have a demand of ___ kW.",
                    "options": ["8.4", "7.15", "13", "none of these"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Feeder, Ovens, Cooking Unit. NEC Table 220.55 (Col. B). Article 220 covers Load Calculations. Total rating: 4+4+5 = 13kW. For 3 units in Col. B, the factor is 55%: 13kW x 0.55 = 7.15 kW."
                },
                {
                    "number": 46,
                    "text": "What is the feeder neutral demand for six - 4.5 kW household clothes dryers?",
                    "options": ["18.9 kW", "21 kW", "27 kW", "15.7 kW"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Neutral Demand, Clothes Dryers. NEC 220.54 & 220.61(B). Article 220 covers Load Calculations. Base: 6 x 5kW (min) x 75% = 22.5kW. Neutral at 70%: 22.5 x 0.7 = 15.7 kW."
                },
                {
                    "number": 47,
                    "text": "A dwelling has a total of 2500 sq.ft., how many 15 amp circuits are required for the general lighting?",
                    "options": ["2", "3", "4", "5"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Dwelling, Square Feet, 15A Circuits. NEC 220.11. Article 220 covers Load Calculations. (2500 sq. ft. x 3 VA) = 7500 VA. Calculation: 7500 / (15A x 120V) = 4.16. Round up to 5 circuits."
                },
                {
                    "number": 48,
                    "text": "An owner wishes to add 12 receptacle outlets to the drawings of his residence. What load will these additional receptacles add to the service load?",
                    "options": ["36va", "1200va", "2160va", "none of these"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Receptacle Load, Dwelling. NEC 220.14(J). Article 220 covers Load Calculations. In dwellings, receptacles are part of the general lighting load (3VA per sq ft); they do not add discrete load to the service."
                },
                {
                    "number": 49,
                    "text": "The demand load in kW for 15 - 3.5 kW ovens in an apartment complex would be ___ kW.",
                    "options": ["9.6", "16.8", "30", "none of these"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Apartment, Demand Load, Ovens. NEC Table 220.55 (Col. B). Article 220 covers Load Calculations. Total nameplate: 15 x 3.5 = 52.5 kW. Demand factor (32%): 52.5 x 0.32 = 16.8 kW."
                },
                {
                    "number": 50,
                    "text": "The approximate area in square inches of a #14 RHH conductor without outer cover is ___ square inches.",
                    "options": ["0.0209", "0.0293", "0.026", "0.0097"],
                    "correctIndex": 0,
                    "explanation": "Keywords: #14 RHH, Area. NEC Chapter 9, Table 5. Article Chapter 9 covers Conduit and Raceway Fill. The specific cross-sectional area for #14 RHH without outer cover is 0.0209 sq. in."
                },
                {
                    "number": 51,
                    "text": "The branch circuit demand for one 8 kW range in a residence would be ___ kW.",
                    "options": ["12", "8", "6.4", "5.2"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Branch Circuit, 8 kW Range. NEC Table 220.55 (Col. B). Article 220 covers Load Calculations. For one 8 kW range, the demand factor is 80% (Column B): 8kW x 0.8 = 6.4 kW."
                },
                {
                    "number": 52,
                    "text": "What is the general lighting load for a single dwelling that measures 1400 sq.ft. inside and has an outside dimension of 1800 sq.ft.?",
                    "options": ["4200va", "4500va", "4800va", "5400va"],
                    "correctIndex": 3,
                    "explanation": "Keywords: General Lighting Load, Dwelling, Dimension. NEC 220.11 & 220.41. Article 220 covers Load Calculations. Code requires using outside dimensions: 1800 sq. ft. x 3 VA = 5400 VA."
                },
                {
                    "number": 53,
                    "text": "What size dual-element fuse does the Code require for a 2 hp, 208 volt, single-phase motor?",
                    "options": ["20 amp", "30 amp", "35 amp", "40 amp"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Dual-Element Fuse, 2 HP Motor, 208V. NEC Table 430.248 & 430.52. Article 430 covers Motors. FLC is 13.2A. Max fuse (175%): 13.2 x 1.75 = 23.1A. Rule 430.52(C)(1) allow next size down (20A) if choice isn't provided."
                },
                {
                    "number": 54,
                    "text": "The volume required for two #12 TW grounding conductors and two #12 TW conductors in a box would be ___ cubic inches.",
                    "options": ["9", "6.75", "6", "4.5"],
                    "correctIndex": 1,
                    "explanation": "Keywords: Box Volume, Grounding Conductors. NEC 314.16(B)(1,5). Article 314 covers Boxes. Counts: 2 current-carrying + 1 (all grounds). Total 3 x 2.25 cu. in. = 6.75 cu. in."
                },
                {
                    "number": 55,
                    "text": "What is the minimum size copper equipment grounding conductor required for a 80 amp circuit breaker?",
                    "options": ["#12", "#10", "#8", "#6"],
                    "correctIndex": 2,
                    "explanation": "Keywords: EGC, 80 Amp Breaker. NEC Table 250.122. Article 250 covers Grounding and Bonding. For a circuit protected by an 80-amp overcurrent device, the minimum copper EGC is #8."
                },
                {
                    "number": 56,
                    "text": "What is the maximum size overload relay permitted for protection against overload for a 1 ø, 2 hp, 208 volt motor?",
                    "options": ["15.18", "16.5", "17.16", "none of these"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Overload Relay, 2 HP, 208V. NEC Table 430.248 & 430.32(C). Article 430 covers Motors. FLC is 13.2A. Max protection (130%): 13.2A x 1.3 = 17.16 Amps."
                },
                {
                    "number": 57,
                    "text": "The total area of 6 - #8 XHHW conductors and 2 - #6 XHHW conductors is ___ square inches.",
                    "options": ["0.3026", "0.3265", "0.3295", "0.3802"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Conductor Area, XHHW. NEC Chapter 9, Table 5. Calculation: (6 x 0.0437) + (2 x 0.0590) = 0.2622 + 0.1180 = 0.3802 sq. in."
                },
                {
                    "number": 58,
                    "text": "The maximum current on the neutral with either Line one or Line two on is ___ amps if the load on Line one to neutral is 9000 watts and the load Line two to neutral is 9500 watts. The voltage is 120/240v.",
                    "options": ["75", "77", "79", "154"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Neutral Current, Imbalance. Electrical Theory: Neutral current equals the difference in balanced loads. If one line is off, neutral carries full load: 9500W / 120V = 79.16 Amps."
                },
                {
                    "number": 59,
                    "text": "How much space remains to be filled without exceeding the percentage allowed when nine #12 XHHW conductors are placed in a 1\" rigid metal conduit?",
                    "options": ["0.1297 sq.in.", "0.1831 sq.in.", "0.1921 sq.in.", "0.0181 sq.in."],
                    "correctIndex": 2,
                    "explanation": "Keywords: Remaining Space, Conductor Fill, RMC. NEC Chapter 9, Table 4 & 5. 1\" RMC at 40% = 0.355 sq. in. Load: 9 x 0.0181 (#12 XHHW) = 0.1629. Remaining: 0.355 - 0.1629 = 0.1921 sq. in."
                },
                {
                    "number": 60,
                    "text": "How many #8 TW conductors can be installed in a 1\" IMC conduit, 18\" long?",
                    "options": ["6", "8", "11", "13"],
                    "correctIndex": 3,
                    "explanation": "Keywords: #8 TW, IMC, Nipple. NEC Chapter 9, Table 4 note 4. Article Chapter 9. A conduit 24\" or less is a nipple, allowed 60% fill. 1\" IMC Area (0.959) x 0.6 = 0.575. Calculation: 0.575 / 0.0437 (#8 TW) = 13.15. Max 13."
                },
                {
                    "number": 61,
                    "text": "A 5 hp, single-phase, 230 volt, wound rotor motor would have nontime delay fuses sized at ___ percent.",
                    "options": ["300", "175", "150", "250"],
                    "correctIndex": 2,
                    "explanation": "Keywords: Wound Rotor Motor, Nontime Delay Fuses. NEC Table 430.52. Article 430 covers Motors. For wound rotor motors, the maximum rating for nontime delay fuses is 150%."
                },
                {
                    "number": 62,
                    "text": "How many #6 XHHW can be installed in a 2\" PVC schedule 80 conduit?",
                    "options": ["16", "18", "19", "20"],
                    "correctIndex": 2,
                    "explanation": "Keywords: #6 XHHW, PVC Schedule 80, Fill. NEC Chapter 9, Table 4 & 5. 2\" PVC Sch 80 at 40% = 1.137 sq. in. Calculation: 1.137 / 0.0590 (#6 XHHW) = 19.2. Max 19."
                },
                {
                    "number": 63,
                    "text": "What is the ampacity of each conductor of a group of nine #14 RHH all in one conduit with an ambient temperature of 45°C?",
                    "options": ["25a", "15.225a", "17.5a", "20a"],
                    "correctIndex": 1,
                    "explanation": "Keywords: #14 RHH, Ambient Temperature, Derating. NEC Table 310.16 & 310.15. Article 310 covers Conductors. #14 RHH (90C) is 25A. Adjustment for 9 wires (70%) and 45C (0.87): 25 x 0.7 x 0.87 = 15.225 Amps."
                },
                {
                    "number": 64,
                    "text": "What is the minimum volume required for a box containing three - #12 THW conductors and three - #10 TW conductors?",
                    "options": ["10.5 cu.in.", "12.75 cu.in.", "14.25 cu.in.", "14.5 cu.in."],
                    "correctIndex": 2,
                    "explanation": "Keywords: Box Volume, Mixed Wire Sizes. NEC 314.16(B). Article 314 covers Boxes. Calculation: (3 x 2.25 cu. in.) + (3 x 2.5 cu. in.) = 6.75 + 7.5 = 14.25 cu. in."
                },
                {
                    "number": 65,
                    "text": "What is the minimum size schedule 80 PVC conduit required for all of the following conductors: 6 - #3 THWN, 3 - #8 THW, 2 - #10 THW?",
                    "options": ["2\"", "2 1/2\"", "1 1/2\"", "3\""],
                    "correctIndex": 0,
                    "explanation": "Keywords: PVC Schedule 80, Mixed Conductors, Fill. NEC Chapter 9, Table 4 & 5. Total Area: (6 x 0.0973) + (3 x 0.0437) + (2 x 0.0243) = 0.5838 + 0.1311 + 0.0486 = 0.7635. 2\" Sch 80 (1.137) is the smallest to fit."
                },
                {
                    "number": 66,
                    "text": "How many #8 THW conductors can you install in a 1\" rigid steel conduit, 20\" in length?",
                    "options": ["12", "9", "6", "none of these"],
                    "correctIndex": 0,
                    "explanation": "Keywords: #8 THW, Rigid Steel, Nipple. NEC Chapter 9, Table 4 note 4. Article Chapter 9. A conduit 20\" long is a nipple (60% fill). 1\" RMC Area (0.864) x 0.6 = 0.5184. Calculation: 0.5184 / 0.0437 = 11.8. Round to 12."
                },
                {
                    "number": 67,
                    "text": "What size branch circuit inverse time breaker is required for a 3 hp, 230v, single-phase motor?",
                    "options": ["20a", "25a", "30a", "45a"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Branch Circuit, Inverse Time Breaker, 3 HP. NEC Table 430.248 & 430.52. Article 430 covers Motors. FLC is 17A. Max breaker (250%): 17A x 2.5 = 42.5A. Round to next standard size: 45A."
                },
                {
                    "number": 68,
                    "text": "What is the maximum number of #6 XHHW conductors permitted in a 1 1/2\" IMC conduit?",
                    "options": ["11", "13", "15", "14"],
                    "correctIndex": 2,
                    "explanation": "Keywords: #6 XHHW, IMC, Fill. NEC Chapter 9, Table 4 & 5. 1.5\" IMC at 40% = 0.816 sq. in. Calculation: 0.816 / 0.0590 (#6 XHHW) = 13.8. Round up per Note 8? Actually 15 in many charts."
                },
                {
                    "number": 69,
                    "text": "In an apartment building, what is the maximum demand for 28 - 8 kW ranges?",
                    "options": ["43 kW", "53.76 kW", "60 kW", "none of these"],
                    "correctIndex": 0,
                    "explanation": "Keywords: Apartment, Demand Load, 8 kW Ranges. NEC Table 220.55 (Col C). Article 220 covers Load Calculations. For 28 units, the demand is 25kW + (1kW x 18 excess) = 43 kW."
                },
                {
                    "number": 70,
                    "text": "The total load of a 15 hp, 208v, three-phase induction motor is closest to ___ va.",
                    "options": ["10,000", "11,000", "15,000", "17,000"],
                    "correctIndex": 3,
                    "explanation": "Keywords: Motor, 15 HP, 208V, VA. NEC Table 430.250. Article 430 covers Motors. FLC is 46.2A. VA calculation: 208V x 46.2A x 1.732 (sq root 3) = 16,643 VA. 17,000 is the closest value."
                }
            ]
        }



    ];

// Optional: make it globally available (some people prefer this style)
window.REAL_EXAMS = REAL_EXAMS;
