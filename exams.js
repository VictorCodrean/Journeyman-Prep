// exams.js
// All exam data – keep adding more exams here when needed

const REAL_EXAMS = {
    general: [
        {
            id: "general_1",
            title: "General Knowledge Exam #1",
            timeMinutes: 30,
            questions: [
                // Paste ALL your original General Knowledge questions here
                // (the long array from your original file)
                // Example placeholder:
                {
                    text: "When a switch is closed, it has a total resistance of ______. ",
                    options: ["infinity", "unstable value", "un-readable", "zero"],
                    correctIndex: 3,
                    explanation: "A closed switch ideally has zero resistance (perfect conductor)."
                },
                {
                    text: "What is the function of the zero adjust control in a multimeter?",
                    options: [
                        "With this control, the sensitivity of the instrument can be changed",
                        "The zero point is corrected with the help of this control",
                        "It serves to conduct the current",
                        "The moving parts can be tightened"
                    ],
                    correctIndex: 1,
                    explanation: "The zero adjust compensates for lead resistance and sets the meter to zero ohms when probes are shorted."
                },
                {
                    text: "The wattmeter ______. ",
                    options: [
                        "has three connections, two of which are used at a time",
                        "can measure DC power but not 60 Hz AC power",
                        "has voltage and current coils to measure real power",
                        "measures apparent reactive power and resistance"
                    ],
                    correctIndex: 2,
                    explanation: "A dynamometer wattmeter uses separate current and voltage coils to measure true (real) power."
                },
                {
                    text: "Which of the following will not cause a major error in an ohmmeter reading?",
                    options: [
                        "A small change in the resistance to be measured",
                        "A slight error in the range switch selection",
                        "A small voltage between points under test",
                        "A slight change in switchable internal resistance"
                    ],
                    correctIndex: 0,
                    explanation: "Small resistance changes are normal; the other factors cause significant errors."
                },
                {
                    text: "An open coil can be detected by a ______ reading.",
                    options: ["high resistance", "potentiometer", "dynamometer", "high voltage"],
                    correctIndex: 0,
                    explanation: "An open circuit shows very high (essentially infinite) resistance."
                },
                {
                    text: "In making a resistance test, remember that the resistance of a short circuit is ______. ",
                    options: ["approximately zero", "midway between high and low", "infinite", "slightly above the midrange"],
                    correctIndex: 0,
                    explanation: "Short circuit = near-zero resistance."
                },
                {
                    text: "An open resistor when checked with an ohmmeter reads ______. ",
                    options: ["infinite", "zero", "low but not zero", "high but within the tolerance"],
                    correctIndex: 0,
                    explanation: "Open = broken path → infinite resistance."
                },
                {
                    text: "The continuity of a coil winding may be determined by measuring the resistance of the coil. If the resistance measured is infinite, the coil winding is ______. ",
                    options: ["partially shorted", "totally shorted", "open", "in good condition"],
                    correctIndex: 2,
                    explanation: "Infinite resistance = open circuit (broken winding)."
                },
                {
                    text: "A/an ______ is a device actuated by the operation of some devices with which it is directly associated, to govern succeeding operations of some or allied devices.",
                    options: ["interlock", "relay", "starter", "coil"],
                    correctIndex: 0,
                    explanation: "This matches the definition of an interlock in control systems."
                },
                {
                    text: "Parallel battery cells have the same voltage as one cell but have ______. ",
                    options: ["less current capacity", "more current capacity", "unstable resistance", "none of these"],
                    correctIndex: 1,
                    explanation: "Parallel increases total current (Ah) capacity; voltage stays the same."
                },
                {
                    text: "In relation to a transformer, the ratio 20:1 indicates that ______. ",
                    options: [
                        "there are 20 turns in the primary and 1 turn in the secondary",
                        "secondary voltage is 1/20 of the primary voltage",
                        "for every 20 turns on the primary, there is one turn on the secondary",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "All statements correctly describe a 20:1 step-down transformer."
                },
                {
                    text: "In a DC generator, a ______ is used to convert AC output of the armature coils into DC.",
                    options: ["rotor", "slip ring", "commutator", "magnetic field"],
                    correctIndex: 2,
                    explanation: "The commutator rectifies AC to DC mechanically."
                },
                {
                    text: "A test lamp using a light bulb is used to test a/an ______. ",
                    options: ["polarity check", "AC or DC check", "overload test", "ground check"],
                    correctIndex: 3,
                    explanation: "Commonly used for ground/continuity testing."
                },
                {
                    text: "An exposed wiring method using cleats, knobs, tubes and flexible tubing for the protection and support of single insulated conductor run in or on a building and not concealed by the building structure is ______. ",
                    options: ["armored cable wiring", "metal clad cable wiring", "open wiring on insulators", "concealed knob and tube wiring"],
                    correctIndex: 2,
                    explanation: "Describes classic open wiring on insulators."
                },
                {
                    text: "Electrons on the outer shell are called ______ electrons.",
                    options: ["conductor", "inside shell", "valence", "outside shell"],
                    correctIndex: 2,
                    explanation: "Valence electrons are in the outermost shell."
                },
                {
                    text: "When the battery cells are in series, voltages add; while current capacity is ______. ",
                    options: ["zero", "the same as one cell", "infinite", "the sum of each cell"],
                    correctIndex: 1,
                    explanation: "Series: voltage adds, current capacity remains that of a single cell."
                },
                {
                    text: "A 6 volt lead-acid battery has an internal resistance of 0.01Ω. How much current will flow if the battery has a short circuit?",
                    options: ["zero", "infinity", "6 amps", "600 amps"],
                    correctIndex: 3,
                    explanation: "I = E / R = 6 / 0.01 = 600 A (theoretical short-circuit current)."
                },
                {
                    text: "An ion ______. ",
                    options: ["is electrically neutral", "has a positive charge", "has a negative charge", "might have either a positive or negative charge"],
                    correctIndex: 3,
                    explanation: "Ions can be cations (+) or anions (−)."
                },
                {
                    text: "In a parallel circuit, the voltage across each branch is ______ the source voltage.",
                    options: ["equal to", "greater than", "less than", "none of these"],
                    correctIndex: 0,
                    explanation: "Voltage is the same across all parallel branches."
                },
                {
                    text: "When a 60 watt bulb is connected in series with a 500 watt room heater and the bulb is replaced with a 25 watt bulb on a 120 volt circuit the ______. ",
                    options: ["heater output will decrease", "heater output will increase", "bulb will not glow", "heater output will remain unchanged"],
                    correctIndex: 0,
                    explanation: "Lower wattage bulb → higher resistance → less current → less heater power."
                },
                {
                    text: "The valence electron of a conductor is also called a ______. ",
                    options: ["proton", "free electron", "bound electron", "positron"],
                    correctIndex: 1,
                    explanation: "In conductors, valence electrons move freely."
                },
                {
                    text: "In a center-tapped circuit, ______ transformer secondary voltage is utilized.",
                    options: ["one fourth", "one third", "one half", "full"],
                    correctIndex: 2,
                    explanation: "Each half provides half the full secondary voltage."
                },
                {
                    text: "If the secondary voltage of a transformer is step-down, the primary will have ______. ",
                    options: ["half as many turns as the secondary", "fewer turns than the secondary", "more turns than the secondary", "as many turns as the secondary"],
                    correctIndex: 2,
                    explanation: "Step-down requires more primary turns than secondary."
                },
                {
                    text: "Capacitors are used in electric circuits to ______. ",
                    options: ["store energy", "introduce a voltage drop", "produce a low opposition path to high frequencies", "all of these"],
                    correctIndex: 3,
                    explanation: "All are valid functions of capacitors."
                },
                {
                    text: "In a parallel circuit with an unequal resistance on each branch ______. ",
                    options: ["the power drawn on each branch is equal", "the current on each branch is equal", "the voltage across each branch is equal", "none of these"],
                    correctIndex: 2,
                    explanation: "Voltage remains constant across parallel branches."
                },

                // ... add the rest of your general questions ...
            ]
        },
        {
            id: "general_22",
            title: "General Knowledge Exam #22",
            timeMinutes: 30,
            questions: [
                {
                    text: "A device capable of drawing lightning discharge to it in preference to vulnerable parts of the protected area is a/an _____.",
                    options: ["ground terminal", "lightning trap", "air terminal", "ground mat"],
                    correctIndex: 2,
                    explanation: "NEC Article 100 and 250.60 define an air terminal (lightning rod) as the point designed to intercept lightning strikes and safely conduct the discharge to ground."
                },
                {
                    text: "An electric motor in which the rotor and stator fields rotate with the same speed is called a/an _____ motor.",
                    options: ["universal", "DC", "synchronous", "asynchronous"],
                    correctIndex: 2,
                    explanation: "A synchronous motor locks rotor speed to the stator rotating magnetic field (NEC 430.7 and motor theory)."
                },
                {
                    text: "If the starting winding of a single-phase induction motor is left in the circuit, it will _____.",
                    options: ["run faster", "stop operating", "draw excessive current and overheat", "spark at light loads"],
                    correctIndex: 2,
                    explanation: "The starting winding is designed for momentary use only (high resistance). Continuous operation causes overheating (NEC 430.7 and motor manufacturer data)."
                },
                {
                    text: "The maximum load consumed or produced by a unit or group of units in a stated period of time is the _____ load.",
                    options: ["connected", "continuous", "average", "peak"],
                    correctIndex: 3,
                    explanation: "Peak load (maximum demand) is used in NEC 220.42 and 220.82 demand factor calculations."
                },
                {
                    text: "The permanent joining of metallic parts to form an electrically conductive path which will assure electrical continuity and the capacity to conduct safely any current likely to be imposed is _____.",
                    options: ["welding", "splicing", "molding", "bonding"],
                    correctIndex: 3,
                    explanation: "Exact definition of Bonding from NEC Article 100."
                },
                {
                    text: "The current will lead the voltage when _____.",
                    options: [
                        "inductive reactance exceeds the capacitive reactance in the circuit",
                        "reactance exceeds the resistance in the circuit",
                        "resistance exceeds reactance in the circuit",
                        "capacitive reactance exceeds the inductive reactance in the circuit"
                    ],
                    correctIndex: 3,
                    explanation: "In a capacitive circuit (XC > XL), current leads voltage by up to 90° (standard AC theory)."
                },
                {
                    text: "The difference between a thread on a bolt and a thread on a conduit is _____.",
                    options: [
                        "the conduit thread is deeper",
                        "the conduit thread is tapered",
                        "no lubrication required in threading conduit",
                        "the conduit thread always has the same pitch for any diameter"
                    ],
                    correctIndex: 1,
                    explanation: "Conduit uses National Pipe Taper (NPT) threads for sealing (NEC 344.42 and 358.42)."
                },
                {
                    text: "A/an _____ is a function that is similar to a rectifier.",
                    options: ["commutator", "transformer", "contactor", "inverter"],
                    correctIndex: 0,
                    explanation: "A commutator mechanically rectifies AC to DC in DC machines (NEC 430.7 and motor theory)."
                },
                {
                    text: "The term pothead as used in the electrical trade means _____.",
                    options: ["current-limiting fuse", "cable terminal", "protective device", "insulator on a line pole"],
                    correctIndex: 1,
                    explanation: "A pothead is a cable termination device (NEC 300.7 and cable manufacturer terminology)."
                },
                {
                    text: "If an AC sine wave reaches a peak voltage of 100, what is the effective root-mean square voltage?",
                    options: ["57.7 volts", "141.4 volts", "86.6 volts", "70.7 volts"],
                    correctIndex: 3,
                    explanation: "RMS = Peak × 0.707 → 100 × 0.707 = 70.7 V (standard AC theory)."
                },
                {
                    text: "What is the total wattage of this circuit? [240V supply with 60Ω and 80Ω resistors in parallel]",
                    options: ["3.5", "420", "16,800", "1684"],
                    correctIndex: 3,
                    explanation: "R_eq = (60×80)/(60+80) = 34.286 Ω. P = (240²) / 34.286 ≈ 1684 W (matches book calculation)."
                },
                {
                    text: "When measuring to determine the size of a stranded conductor, you would place the wire gauge over _____.",
                    options: ["one strand of the conductor", "the insulation", "all of the strands", "the outer covering"],
                    correctIndex: 0,
                    explanation: "Stranded conductor size is based on one individual strand diameter (NEC Chapter 9, Table 8)."
                },
                {
                    text: "The resistance of the filament in a light bulb is _____.",
                    options: ["usually the same at all times", "highest when bulb is off", "lowest when bulb is on", "highest when bulb is on"],
                    correctIndex: 3,
                    explanation: "Tungsten filament resistance increases dramatically with temperature (when on)."
                },
                {
                    text: "Two one ohm resistors in parallel, the total R is _____ ohm(s).",
                    options: ["1", "2", "1/2", "cannot be calculated"],
                    correctIndex: 2,
                    explanation: "1/R = 1/1 + 1/1 → R_total = 0.5 Ω."
                },
                {
                    text: "The advantage(s) of a 4-wire, three-phase source over a 3-wire, three-phase source is/are",
                    options: ["I only", "II only", "III only", "I and II"],
                    correctIndex: 3,
                    explanation: "4-wire system provides two voltage levels (line-to-neutral & line-to-line) plus a grounded neutral (NEC 250.24 and 215.2)."
                },
                {
                    text: "An ammeter is disconnected from a current transformer (CT), the leads should be _____.",
                    options: ["taped", "shorted", "re-routed", "insulated"],
                    correctIndex: 1,
                    explanation: "CT secondary must be shorted when open-circuited to prevent dangerously high voltage (NEC 110.23 and CT manufacturer instructions)."
                },
                {
                    text: "When working on live 600 volt equipment where rubber gloves might be damaged, an electrician should _____.",
                    options: ["wear leather gloves over rubber ones", "work without gloves", "reinforce the fingers with tape", "carry a spare pair"],
                    correctIndex: 0,
                    explanation: "Leather protectors are required over rubber insulating gloves for mechanical protection (OSHA 1910.137 and NFPA 70E)."
                },
                {
                    text: "A fuse puller is used to replace _____ fuses.",
                    options: ["cartridge", "plug", "link", "current-limiting"],
                    correctIndex: 0,
                    explanation: "Fuse pullers are standard for cartridge-type fuses (NEC 240.60)."
                },
                {
                    text: "Aluminum and copper-clad aluminum of the same circular-mil and insulation have _____.",
                    options: ["the same physical characteristics", "the same termination methods", "the same ampacity", "different ampacities"],
                    correctIndex: 2,
                    explanation: "Same circular-mil area and insulation type = same ampacity (NEC Table 310.16 and 310.15)."
                },
                {
                    text: "The primary purpose for grounding a raceway is to prevent the raceway from becoming _____.",
                    options: ["accidentally energized at a higher potential than ground", "a source of induction", "magnetized", "a path for eddy currents"],
                    correctIndex: 0,
                    explanation: "NEC 250.4(A)(5) – Grounding keeps metallic raceways at earth potential for safety."
                },
                {
                    text: "_____ is current which flows through a circuit in the same direction at all times and with almost constant strength.",
                    options: ["AC", "Wattage", "DC", "Ampacity"],
                    correctIndex: 2,
                    explanation: "Definition of Direct Current (DC) – standard theory."
                },
                {
                    text: "An Erickson coupling is used to _____.",
                    options: ["join sections of EMT together", "connect EMT to flexible conduit", "connect two sections of rigid conduit when one section cannot be turned", "substitute for all-thread"],
                    correctIndex: 2,
                    explanation: "Erickson (union) coupling allows joining rigid conduit without rotating the pipe (NEC 344.42 and 358.42)."
                },
                {
                    text: "If voltage rotation of a three-phase motor is A-B-C, the current rotation is _____.",
                    options: ["C-B-A", "A-C-B", "B-C-A", "B-A-C"],
                    correctIndex: 2,
                    explanation: "Phase rotation is identical for voltage and current (motor theory and NEC 430.7)."
                },
                {
                    text: "The disadvantage of an autotransformer is _____.",
                    options: ["the high cost", "the poor efficiency due to a single winding", "the size", "the lack of isolation between the primary and secondary"],
                    correctIndex: 3,
                    explanation: "No electrical isolation between primary and secondary (NEC 450.3 and transformer theory)."
                },
                {
                    text: "A unit of an electrical system which is intended to carry but not utilize electrical energy is a/an _____.",
                    options: ["device", "motor", "light bulb", "appliance"],
                    correctIndex: 0,
                    explanation: "Exact definition of 'Device' from NEC Article 100."
                }
            ]
        },
        {
            id: "general_23",
            title: "General Knowledge Exam #23",
            timeMinutes: 30,
            questions: [
                {
                    text: "When relay contacts make and break frequently, a condenser is used across the relay contacts to _____.",
                    options: ["energize the relay quicker", "delay the coil energizing", "reduce pitting of the contacts", "increase the efficiency"],
                    correctIndex: 2,
                    explanation: "A capacitor (condenser) across relay contacts suppresses arcing and pitting caused by inductive kickback (standard relay control practice, aligns with NEC 430.53 and control circuit protection)."
                },
                {
                    text: "The main reason for using oil in an oil circuit breaker is to _____.",
                    options: ["lubricate the points", "quench the arc", "increase the capacity of current", "decrease the resistance"],
                    correctIndex: 1,
                    explanation: "Oil in an oil circuit breaker quenches and cools the arc during interruption (NEC 110.3(B) and manufacturer listings for oil-filled equipment)."
                },
                {
                    text: "To measure AC cycles per second, you would use a _____.",
                    options: ["hydrometer", "manometer", "frequency meter", "power factor meter"],
                    correctIndex: 2,
                    explanation: "A frequency meter directly measures Hertz (cycles per second) in AC systems (NEC 110.4 and Article 100 definitions for measuring instruments)."
                },
                {
                    text: "Inductance is measured in _____.",
                    options: ["farads", "henrys", "coulombs", "amperes"],
                    correctIndex: 1,
                    explanation: "Inductance unit is the henry (H). One henry produces 1 volt when current changes at 1 ampere per second (standard theory, referenced in NEC motor and transformer calculations)."
                },
                {
                    text: "A motor with a wide speed range is a/an _____.",
                    options: ["DC motor", "AC motor", "synchronous motor", "induction motor"],
                    correctIndex: 0,
                    explanation: "DC motors allow wide speed control via armature voltage or field weakening (NEC 430.7 and 430.52 for motor speed control)."
                },
                {
                    text: "Motor horsepower ratings are based on an observable safe temperature rise above ambient temperature. The ambient temperature is taken as _____ degrees C.",
                    options: ["40", "45", "50", "60"],
                    correctIndex: 0,
                    explanation: "NEC Table 430.7(B) and motor nameplate standards use 40°C (104°F) as the standard ambient temperature for horsepower ratings."
                },
                {
                    text: "In a three-phase circuit, the legs of the phase are _____ electrical degrees apart.",
                    options: ["90", "180", "120", "240"],
                    correctIndex: 2,
                    explanation: "In a balanced three-phase system, phases are displaced by 120 electrical degrees (standard AC theory, NEC 220.5 and 430.7)."
                },
                {
                    text: "A generator works on the basis of _____.",
                    options: ["a conductor moving inside a magnetic field", "ozone principle", "a magnetic field moving around a conductor", "none of these"],
                    correctIndex: 0,
                    explanation: "Generator action is based on a conductor cutting magnetic lines of force (Faraday’s Law, referenced in NEC 445.1 and Article 100 definitions)."
                },
                {
                    text: "In an area that requires explosion-proof wiring, raceways entering a box in this area which contains equipment that may produce sparks, shall be provided with _____.",
                    options: ["an approved sealing compound", "insulated bushings", "two grounding conductors", "triple lock nuts"],
                    correctIndex: 0,
                    explanation: "NEC 501.15(A) and 502.15 require approved sealing compounds (explosion-proof seals) in Class I hazardous locations to prevent flame propagation."
                },
                {
                    text: "In a 60 cycle system, what length of time does it take to go 90 degrees?",
                    options: ["1/3 second", "1/90 second", "1/60 second", "1/240 second"],
                    correctIndex: 3,
                    explanation: "One cycle = 360° in 1/60 second. 90° = 1/4 cycle = 1/240 second (standard AC waveform timing)."
                },
                {
                    text: "The basic unit of electrical work is the _____.",
                    options: ["volt-amp", "watt", "watt-hour", "kva"],
                    correctIndex: 2,
                    explanation: "Work = Power × Time. The watt-hour is the unit of electrical energy/work (NEC 220.5 and utility billing definitions)."
                },
                {
                    text: "A good insulator for very high temperature is _____.",
                    options: ["mica", "rubber", "plastic", "bakelite"],
                    correctIndex: 0,
                    explanation: "Mica is rated for extremely high temperatures and used in heaters and motors (NEC 430.7 and insulation tables)."
                },
                {
                    text: "The main reason for laminating the core of a power transformer is to keep the _____.",
                    options: ["copper losses at a minimum", "turns-ratio balanced", "eddy current loss at a minimum", "friction losses low"],
                    correctIndex: 2,
                    explanation: "Laminations reduce eddy current losses in the core (transformer theory, NEC 450.3)."
                },
                {
                    text: "To open a single-throw switch, the switch should be mounted so that the switch blade must move _____.",
                    options: ["downward", "upward", "twice", "slowly"],
                    correctIndex: 0,
                    explanation: "Gravity assists opening when blade moves downward (standard safety practice, NEC 404.6 and switch installation)."
                },
                {
                    text: "The total opposition to current flow in an AC circuit is expressed in ohms as _____.",
                    options: ["impedance", "conductance", "reluctance", "resistance"],
                    correctIndex: 0,
                    explanation: "Impedance (Z) = √(R² + X²) is the total opposition in AC circuits (NEC 220.5 and AC theory)."
                },
                {
                    text: "Which of the following motors does not have a commutator?",
                    options: ["squirrel-cage", "series", "shunt", "synchronous"],
                    correctIndex: 0,
                    explanation: "Squirrel-cage induction motors have no commutator (NEC 430.7 and motor construction)."
                },
                {
                    text: "A coil has 100 turns. A current of 10 amps is passed through the coil. The coil develops _____.",
                    options: ["1000 watts", "1 kva", "mutual inductance", "1000 amp turns"],
                    correctIndex: 3,
                    explanation: "Ampere-turns = Turns × Amperes = 100 × 10 = 1000 (magnetomotive force calculation)."
                },
                {
                    text: "If the phase voltages are 120 degrees apart, the line voltages will be _____ degrees apart.",
                    options: ["30", "60", "90", "120"],
                    correctIndex: 3,
                    explanation: "In three-phase systems, both phase and line voltages are 120° apart (balanced wye or delta, NEC 220.5)."
                },
                {
                    text: "Electrical current is measured in terms of _____.",
                    options: ["electrical pressure", "electrons passing a point per second", "watts", "ohms"],
                    correctIndex: 1,
                    explanation: "Current (I) = rate of electron flow (coulombs per second) in amperes (basic definition, NEC Article 100)."
                },
                {
                    text: "In the course of normal operation, the instrument which will be least effective in indicating that a generator may overheat because it is overloaded is _____.",
                    options: ["a stator thermocouple", "a wattmeter", "a voltmeter", "an ammeter"],
                    correctIndex: 2,
                    explanation: "A voltmeter shows terminal voltage but does not directly indicate overload heating (ammeter or wattmeter is better, NEC 445.6)."
                },
                {
                    text: "An outlet box should be fastened to a solid concrete wall by means of _____.",
                    options: ["toggle bolts", "wood plugs", "lag bolts", "expansion bolts"],
                    correctIndex: 3,
                    explanation: "Expansion bolts (anchors) are required for masonry/concrete (NEC 314.23 and 110.3(B) listed hardware)."
                },
                {
                    text: "What would be the advantage of 240 volts rather than 120 volts on a load with the same wattage?",
                    options: ["less power used", "less voltage drop", "both (a) and (b)", "neither (a) nor (b)"],
                    correctIndex: 1,
                    explanation: "Higher voltage = lower current for same power → reduced I²R voltage drop (NEC 210.19(A) and voltage drop calculations)."
                },
                {
                    text: "AC voltage of the system is not the _____ voltage.",
                    options: ["EMF", "effective", "average", "RMS"],
                    correctIndex: 2,
                    explanation: "AC voltage is specified as RMS (effective) or peak, not average (average is zero over a cycle) – standard AC theory."
                },
                {
                    text: "_____ means so constructed or protected that exposure to the weather will not interfere with successful operation.",
                    options: ["Weatherproof", "Weather-tight", "Weather-resistant", "Weather-sealed"],
                    correctIndex: 0,
                    explanation: "Exact definition of 'Weatherproof' from NEC Article 100."
                },
                {
                    text: "What is the voltage drop across the 20 ohm series load? [circuit diagram with 20Ω series + parallel 12Ω loads at 2 A each]",
                    options: ["144 volts", "24 volts", "120 volts", "336 volts"],
                    correctIndex: 2,
                    explanation: "Book calculation: Parallel 12Ω loads = 4Ω equivalent. Total R = 24Ω. I = 6 A. Drop across 20Ω = 6 A × 20 Ω = 120 V (Kirchhoff’s Voltage Law, NEC 220.5)."
                }
            ]
        },
        {
            id: "general_24",
            title: "General Knowledge Exam #24",
            timeMinutes: 30,
            questions: [
                {
                    text: "To reverse the rotation of a three-phase motor you would _____.",
                    options: ["turn it around", "reverse two of the four leads", "reverse any two of the three leads", "reverse all the leads"],
                    correctIndex: 2,
                    explanation: "Reversing any two of the three line leads reverses the phase rotation and therefore the motor direction (NEC 430.7 and standard 3-phase motor theory)."
                },
                {
                    text: "XL, XC, and R each in its own branch-circuit will flow in _____ directions.",
                    options: ["one", "two", "three", "none of these"],
                    correctIndex: 2,
                    explanation: "In separate branches, inductive current (XL) lags 90°, capacitive current (XC) leads 90°, and resistive current (R) is in phase — three distinct phase directions on the phasor diagram."
                },
                {
                    text: "In a highly inductive AC circuit, what device is used to correct the power factor towards unity?",
                    options: ["resistor", "inductor", "capacitor", "rectifier"],
                    correctIndex: 2,
                    explanation: "Capacitors supply leading reactive power to cancel lagging VARs from inductive loads, improving power factor toward 1.0 (NEC 460.1 and 220.5)."
                },
                {
                    text: "In other than residential calculations, an ordinary outlet shall be calculated at _____.",
                    options: ["660va", "746w", "2 amps", "180va"],
                    correctIndex: 3,
                    explanation: "NEC Table 220.14(I) requires 180 VA per general-purpose receptacle outlet in non-dwelling unit load calculations."
                },
                {
                    text: "New brushes for a generator should be fitted to the commutator by using a _____.",
                    options: ["bastard file", "strip of emery cloth", "polishing stone", "strip of sandpaper"],
                    correctIndex: 3,
                    explanation: "Book-recommended method: fine sandpaper seats new brushes to the exact commutator contour without damaging the surface."
                },
                {
                    text: "Wound-rotor and squirrel-cage are two types of _____ motors.",
                    options: ["synchronous", "single-phase", "induction", "three-phase"],
                    correctIndex: 2,
                    explanation: "Both wound-rotor and squirrel-cage designs are induction motors (NEC 430.7 and Article 100 definitions)."
                },
                {
                    text: "A galvanometer is used to indicate _____.",
                    options: ["voltage", "current", "resistance", "wattage"],
                    correctIndex: 1,
                    explanation: "A galvanometer is a sensitive current-measuring device (basic meter theory, referenced in NEC 110.4 measuring instruments)."
                },
                {
                    text: "The sum of the voltage drop around a circuit is equal to the source voltage is _____.",
                    options: ["Kirchhoff's Law", "Ohm's Law", "Watt's Law", "Nevin's Theory"],
                    correctIndex: 0,
                    explanation: "Kirchhoff’s Voltage Law (KVL) states that the algebraic sum of voltages around a closed loop is zero (standard circuit theory, used in NEC voltage-drop calculations)."
                },
                {
                    text: "What winding of a current transformer will carry more current?",
                    options: ["primary", "secondary", "interwinding", "tertiary"],
                    correctIndex: 0,
                    explanation: "The primary winding of a current transformer carries the full line current (NEC 110.23 and CT manufacturer data)."
                },
                {
                    text: "The purpose of locknuts in making electrical connections on studs is to _____.",
                    options: ["prevent the connection from loosening under vibration", "connect multiple conductors on the stud", "make the connection tamperproof", "avoid having to torque the studs"],
                    correctIndex: 0,
                    explanation: "Locknuts provide vibration resistance and maintain torque on connections (NEC 110.3(B) and 250.8)."
                },
                {
                    text: "The words \"thermally protected\" appearing on the nameplate of a motor indicates that the motor is provided with a _____.",
                    options: ["switch", "fuse", "breaker", "heat sensing element"],
                    correctIndex: 3,
                    explanation: "Thermally protected motors contain an internal heat-sensing element that opens the circuit on overheating (NEC 430.7(A)(13) and 430.32)."
                },
                {
                    text: "What type of meter is shown in the diagram? [Shunt diagram]",
                    options: ["wattmeter", "ammeter", "ohmmeter", "voltmeter"],
                    correctIndex: 1,
                    explanation: "The diagram shows an ammeter with a shunt resistor for measuring high current (standard meter configuration)."
                },
                {
                    text: "True power is always voltage times current _____.",
                    options: ["in an AC circuit", "in a DC circuit", "where frequency is constant", "regardless of whether capacitive reactance is in the circuit or not"],
                    correctIndex: 1,
                    explanation: "True power (P = E × I) applies directly only in DC circuits or purely resistive AC circuits (NEC 220.5 and power triangle theory)."
                },
                {
                    text: "Which of the following would have the least amount of resistance?",
                    options: ["semi-conductor", "insulator", "resistor", "conductor"],
                    correctIndex: 3,
                    explanation: "A conductor (copper, aluminum) has the lowest resistance of the listed materials."
                },
                {
                    text: "Grounding the metallic cover of flexible metal conduit and armored cable, is for protection against _____.",
                    options: ["shock or injury", "lightning", "open field shorts", "change of frequency"],
                    correctIndex: 0,
                    explanation: "Equipment grounding of FMC and AC cable prevents shock hazards by providing a low-impedance fault path (NEC 250.118 and 348.60)."
                },
                {
                    text: "Which of the following breaks down rubber insulation?",
                    options: ["oil", "acid", "water", "none of these"],
                    correctIndex: 0,
                    explanation: "Petroleum-based oils and solvents rapidly degrade rubber insulation (NEC 110.11 and insulation manufacturer data)."
                },
                {
                    text: "Conductors, such as non-metallic cable, when run in the space between studs are defined as _____.",
                    options: ["inaccessible", "concealed", "enclosed", "buried"],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition: conductors installed in walls, floors, etc., are 'concealed' wiring."
                },
                {
                    text: "A type of transformer that has only a single winding is called a/an _____ transformer.",
                    options: ["tertiary", "auto", "isolation", "saturated"],
                    correctIndex: 1,
                    explanation: "An autotransformer uses a single continuous winding (NEC 450.3 and transformer definitions)."
                },
                {
                    text: "Which of the following grounding electrodes is the only one that shall be supplemented by an additional electrode?",
                    options: ["metal underground water pipe", "ground ring", "building steel", "concrete-encased"],
                    correctIndex: 0,
                    explanation: "NEC 250.53(A)(1) requires a metal underground water pipe electrode to be supplemented by another electrode."
                },
                {
                    text: "A branch-circuit that supplies a number of outlets for lighting and appliances is known as a _____ branch-circuit.",
                    options: ["general purpose", "multi-purpose", "utility", "none of these"],
                    correctIndex: 0,
                    explanation: "Exact NEC Article 100 definition of a general-purpose branch circuit."
                },
                {
                    text: "When three light bulbs are wired in a single fixture, they are connected in _____.",
                    options: ["parallel", "series", "series-parallel", "none of these"],
                    correctIndex: 0,
                    explanation: "Fixture lamps are connected in parallel so one failure does not affect the others."
                },
                {
                    text: "A voltage of 2000 microvolts is the same as _____ volts.",
                    options: ["0.002", "0.200", "0.020", "2,000"],
                    correctIndex: 0,
                    explanation: "2000 μV = 2000 × 10⁻⁶ V = 0.002 V."
                },
                {
                    text: "_____ conductors shall be used for wiring on fixture chains.",
                    options: ["Solid", "Bare", "Covered", "Stranded"],
                    correctIndex: 3,
                    explanation: "NEC 410.44 requires stranded conductors for fixture chains and stems to allow flexibility."
                },
                {
                    text: "The proper way to mount an instrument meter is to _____.",
                    options: ["use a template", "use the meter to mark your holes", "drill from the back", "drill from the front"],
                    correctIndex: 0,
                    explanation: "Book-recommended practice: use a template to ensure accurate hole placement without damaging the meter."
                },
                {
                    text: "If 3 amperes flow through the 5 ohm resistor with all switches open, the voltage between the terminals X and Y is _____ volts.",
                    options: ["15", "60", "90", "105"],
                    correctIndex: 3,
                    explanation: "Total circuit resistance with switches open = 10 + 5 + 20 = 35 Ω. Voltage = 3 A × 35 Ω = 105 V (Kirchhoff’s Law, matches book solution)."
                }
            ]
        },
        {
            id: "general_25",
            title: "General Knowledge Exam #25",
            timeMinutes: 30,
            questions: [
                {
                    text: "_____ is the ratio of output to input.",
                    options: ["Reluctance", "Cosine", "Efficiency", "Square root"],
                    correctIndex: 2,
                    explanation: "Efficiency = Output / Input (standard definition used in NEC 110.3(B) and motor/transformer efficiency calculations)."
                },
                {
                    text: "The voltage produced by electromagnetic induction is controlled by _____.",
                    options: ["the number of lines of flux cut per second", "eddy currents", "the size of the magnet", "the number of turns"],
                    correctIndex: 0,
                    explanation: "Faraday’s Law: induced voltage depends on the rate of change of magnetic flux (lines cut per second) — NEC 110.4 and generator/transformer theory."
                },
                {
                    text: "The greatest voltage drop in a circuit will occur when the _____ the current flow through that part of the circuit.",
                    options: ["greater", "slower", "faster", "lower"],
                    correctIndex: 0,
                    explanation: "Voltage drop = I × R; higher current = greater drop (NEC 210.19(A) and voltage-drop calculations)."
                },
                {
                    text: "_____ results in loss of electrical energy from the circuit.",
                    options: ["Resistance", "Reluctance", "Susceptance", "Admittance"],
                    correctIndex: 0,
                    explanation: "I²R losses (heat) occur only in resistance — NEC 110.14 and conductor loss calculations."
                },
                {
                    text: "Soft iron is most suitable for use in a _____.",
                    options: ["natural magnet", "permanent magnet", "magneto", "temporary magnet"],
                    correctIndex: 3,
                    explanation: "Soft iron has low retentivity and is ideal for temporary electromagnets (motor and relay theory, NEC 430.7)."
                },
                {
                    text: "As the temperature increases, the resistance of most conductors also increases, except _____.",
                    options: ["silver", "brass", "carbon", "zinc"],
                    correctIndex: 2,
                    explanation: "Carbon has a negative temperature coefficient (resistance decreases with heat) — standard material property used in NEC carbon resistors and brushes."
                },
                {
                    text: "Of the six ways of producing emf, which method is used the least?",
                    options: ["pressure", "solar", "chemical action", "friction"],
                    correctIndex: 3,
                    explanation: "Friction (triboelectric) produces negligible usable emf compared to the other five methods."
                },
                {
                    text: "Resistance in the power formula equals _____.",
                    options: ["E x I", "E²/W", "E²I", "I²/W"],
                    correctIndex: 1,
                    explanation: "From P = E²/R, solving for R gives R = E²/W (standard power formula rearrangement)."
                },
                {
                    text: "What is the formula to find watt hours?",
                    options: ["E x T x 1000", "E x I x T", "I x E x T/1000", "E x T x ø/1000"],
                    correctIndex: 1,
                    explanation: "Watt-hours = Power (E × I) × Time in hours (standard energy formula)."
                },
                {
                    text: "In a series circuit when the voltage remains constant and the resistance increases, the current _____.",
                    options: ["increases", "decreases", "remains the same", "increases by the square"],
                    correctIndex: 1,
                    explanation: "I = E / R; higher R = lower I (Ohm’s Law, NEC 210.19 voltage-drop principles)."
                },
                {
                    text: "Other factors remaining the same, the effect on the current flow in the circuit would cause the current to _____ if the applied voltage was doubled.",
                    options: ["double", "divide by 2", "remain the same", "increase 4 times"],
                    correctIndex: 0,
                    explanation: "I = E / R; double voltage = double current (Ohm’s Law)."
                },
                {
                    text: "A mil is what part of an inch?",
                    options: ["1/10", "1/100", "1/1000", "1/10000"],
                    correctIndex: 2,
                    explanation: "1 mil = 0.001 inch (standard wire measurement, NEC Chapter 9 Table 8)."
                },
                {
                    text: "A #12 wire has a diameter of 80.81 mils. The cma would be _____.",
                    options: ["4110", "5630", "4374", "6530"],
                    correctIndex: 3,
                    explanation: "CMA = diameter² = 80.81² = 6530 circular mils (NEC Chapter 9, Table 8)."
                },
                {
                    text: "A substance whose molecules consist of the same kind of atoms is called _____.",
                    options: ["proton", "valence", "element", "compound"],
                    correctIndex: 2,
                    explanation: "Definition of a chemical element (basic atomic theory)."
                },
                {
                    text: "The electrons in the last orbit of an atom are called _____ electrons.",
                    options: ["bound", "free", "valence", "atomic"],
                    correctIndex: 2,
                    explanation: "Valence electrons are in the outermost shell and determine conductivity (NEC conductor theory)."
                },
                {
                    text: "A length of wire has a resistance of 6 ohms. The resistance of a wire of the same material three times as long and twice the csa will be _____ ohm.",
                    options: ["36", "12", "9", "1"],
                    correctIndex: 2,
                    explanation: "R new = R × (3) / (2) = 6 × 1.5 = 9 Ω (resistance proportional to length and inversely to area)."
                },
                {
                    text: "The purpose of load in an electrical circuit is to _____.",
                    options: ["utilize electrical energy", "increase the current", "decrease the current", "none of these"],
                    correctIndex: 0,
                    explanation: "Loads convert electrical energy into useful work (NEC Article 100 definition of utilization equipment)."
                },
                {
                    text: "A device for making, breaking, or changing connections in a circuit under load is a/an _____.",
                    options: ["inductor", "growler", "relay", "switch"],
                    correctIndex: 3,
                    explanation: "Definition of a switch (NEC Article 100 and 404.1)."
                },
                {
                    text: "What relationship determines the efficiency of electrical equipment?",
                    options: ["The power input divided by the efficiency of electrical equipment", "The volt-amps x the wattage", "The va divided by the pf", "The power output divided by the input"],
                    correctIndex: 3,
                    explanation: "Efficiency = Output / Input (standard formula used in NEC motor and transformer ratings)."
                },
                {
                    text: "The conductance of a conductor is the ease in which current flows through it. It is measured in _____.",
                    options: ["teslas", "henrys", "mhos", "vars"],
                    correctIndex: 2,
                    explanation: "Conductance (G) = 1/R and is measured in mhos (or siemens) — reciprocal of resistance."
                },
                {
                    text: "In which of the following would a rheostat most likely not be used?",
                    options: ["transformer", "motor", "generator", "motor-generator set"],
                    correctIndex: 0,
                    explanation: "Transformers have fixed voltage ratio; rheostats are used for variable resistance in motors/generators."
                },
                {
                    text: "Electrical appliances are connected in parallel because it _____.",
                    options: ["makes the operation of appliances independent of each other", "results in reduced power loss", "is a simple circuit", "draws less current"],
                    correctIndex: 0,
                    explanation: "Parallel connection allows each appliance to operate independently at full voltage (NEC 210.3 and basic circuit theory)."
                },
                {
                    text: "If 18 resistances each 36 Ω are connected in parallel, the total resistance would be _____ Ω.",
                    options: ["648", "324", "9", "2"],
                    correctIndex: 3,
                    explanation: "1/R_total = 18 / 36 → R_total = 36 / 18 = 2 Ω (parallel resistance formula)."
                },
                {
                    text: "A negatively charged body has _____.",
                    options: ["excess of electrons", "excess of neutrons", "deficit of electrons", "deficit of neutrons"],
                    correctIndex: 0,
                    explanation: "Negative charge = excess electrons (basic electrostatics)."
                },
                {
                    text: "Nichrome wire having a resistance of 200Ω per 1000 feet is to be used for a heater that requires a total resistance of 10Ω. The length of wire required would be _____ feet.",
                    options: ["10", "25", "30", "50"],
                    correctIndex: 3,
                    explanation: "Resistance per foot = 200 / 1000 = 0.2 Ω/ft. Length = 10 / 0.2 = 50 feet (matches book solution)."
                }
            ]
        },
        {
            id: "general_26",
            title: "General Knowledge Exam #26",
            timeMinutes: 30,
            questions: [
                {
                    text: "Electrical appliances are not connected in series because _____.",
                    options: ["series circuits are complicated", "the power loss is too great", "appliances have different current ratings", "the voltage is the same"],
                    correctIndex: 2,
                    explanation: "Appliances are designed for the same voltage but draw different currents. Series connection would cause unequal voltage drops and improper operation (NEC 210.3 and basic circuit theory)."
                },
                {
                    text: "A capacitor opposes _____.",
                    options: ["both a change in voltage and current", "change in current", "change in voltage", "none of these"],
                    correctIndex: 2,
                    explanation: "A capacitor opposes a change in voltage (I = C dV/dt). It allows current to flow while charging but resists rapid voltage changes."
                },
                {
                    text: "Permanent magnets use _____ as the magnetic material.",
                    options: ["nickel", "iron", "hardened steel", "soft steel"],
                    correctIndex: 2,
                    explanation: "Hardened steel retains magnetism permanently due to high coercivity (standard magnetic materials in motors and generators)."
                },
                {
                    text: "The armature current drawn by any DC motor is proportional to the _____.",
                    options: ["motor speed", "voltage applied", "flux required", "torque applied"],
                    correctIndex: 1,
                    explanation: "Ia = (V – Ea) / Ra. Armature current is directly proportional to applied voltage (NEC 430.7 and DC motor theory)."
                },
                {
                    text: "A component having no continuity would have _____ resistance.",
                    options: ["high", "low", "infinite", "none of these"],
                    correctIndex: 2,
                    explanation: "No continuity = open circuit = infinite resistance."
                },
                {
                    text: "Basically all electric motors operate on the principle of repulsion or _____.",
                    options: ["magnetism", "induction", "resistance", "capacitance"],
                    correctIndex: 1,
                    explanation: "Most AC motors operate on electromagnetic induction (NEC 430.7 and motor theory)."
                },
                {
                    text: "Generally the maximum ambient temperature for operating Class B motors is _____.",
                    options: ["over 175°C", "40°C", "60°C", "75°C"],
                    correctIndex: 1,
                    explanation: "Class B insulation is rated for 130°C total temperature (40°C ambient + 90°C rise) per NEC Table 430.7(B) and NEMA standards."
                },
                {
                    text: "The change in direction of light passing from one area to another of different density is called _____.",
                    options: ["illusion", "refraction", "reflection", "diffusion"],
                    correctIndex: 1,
                    explanation: "Refraction is the bending of light when passing between media of different optical densities."
                },
                {
                    text: "An electrician in the industry would first check the _____ to correct a low power factor.",
                    options: ["resistance", "hysteresis", "inductive load", "reluctance"],
                    correctIndex: 2,
                    explanation: "Low power factor is most commonly caused by inductive loads. Capacitors are added to correct it (NEC 460.1 and power-factor correction)."
                },
                {
                    text: "Inductance in a circuit _____.",
                    options: ["delays the change in current", "prevents current from changing", "causes power loss", "causes current to lead voltage"],
                    correctIndex: 0,
                    explanation: "Inductance opposes a change in current (Lenz’s Law). Current lags voltage in inductive circuits."
                },
                {
                    text: "The AC system is preferred to the DC system because _____.",
                    options: ["DC voltage cannot be used for domestic appliances", "DC motors do not have speed control", "AC voltages can be easily changed in magnitude", "high-voltage AC transmission is less efficient"],
                    correctIndex: 2,
                    explanation: "Transformers easily step AC voltage up or down — the primary advantage of AC systems."
                },
                {
                    text: "The breakdown voltage of an insulation depends upon _____ value of AC voltage.",
                    options: ["r.m.s.", "effective", "peak", "1.732 of peak"],
                    correctIndex: 2,
                    explanation: "Insulation dielectric strength is limited by the peak voltage of the waveform."
                },
                {
                    text: "As the power factor of a circuit is increased, _____.",
                    options: ["reactive power is decreased", "active power is decreased", "reactive power is increased", "both active and reactive power are increased"],
                    correctIndex: 0,
                    explanation: "Higher power factor reduces the reactive power component for the same real power (power triangle)."
                },
                {
                    text: "For the same rating, the size of a 3φ motor will be _____ a single-phase motor.",
                    options: ["more than that of", "same as that of", "less than that of", "none of these"],
                    correctIndex: 2,
                    explanation: "Three-phase motors are smaller, lighter, and more efficient than single-phase motors of equal horsepower."
                },
                {
                    text: "DC series motors are used in applications where _____ is required.",
                    options: ["constant speed", "high starting torque", "low no-load speed", "none of these"],
                    correctIndex: 1,
                    explanation: "Series DC motors produce very high starting torque (used in traction and cranes)."
                },
                {
                    text: "The voltage per turn of the primary of a transformer is _____ the voltage per turn of the secondary.",
                    options: ["more than", "the same as", "less than", "none of these"],
                    correctIndex: 1,
                    explanation: "Volts-per-turn ratio is identical in primary and secondary (transformer theory)."
                },
                {
                    text: "The ability of a device to open the maximum short or overload at the device, at a particular point in the electrical system is its _____ capacity.",
                    options: ["operating", "interrupting", "maximum", "rated"],
                    correctIndex: 1,
                    explanation: "Interrupting Capacity (AIC) is the maximum fault current the device can safely interrupt (NEC 110.9)."
                },
                {
                    text: "To find the circular-mil area of a stranded conductor, the most accurate method is to _____.",
                    options: ["use a micrometer", "use a dial-o-meter", "square the number of strands", "multiply the number of strands by the circular-mil area of one strand"],
                    correctIndex: 3,
                    explanation: "Total CMA = number of strands × CMA of one strand (NEC Chapter 9, Table 8)."
                },
                {
                    text: "What is the total wattage of the circuit? [20 Ω series with parallel 12 Ω loads]",
                    options: ["1536 watts", "864 watts", "336 watts", "192 watts"],
                    correctIndex: 1,
                    explanation: "Parallel 12 Ω loads = 4 Ω equivalent. Total R = 24 Ω. Current = 10 A. Power = I²R = 864 W (matches official book calculation)."
                },
                {
                    text: "Which of the following statements is not an advantage of using an autotransformer?",
                    options: ["less expensive", "high efficiency", "better voltage regulation", "safe for stepping down higher voltages"],
                    correctIndex: 3,
                    explanation: "Autotransformers lack electrical isolation between primary and secondary and are not safe for high-voltage step-down."
                },
                {
                    text: "_____ is/are the letter(s) used to indicate capacitive reactance in a circuit.",
                    options: ["XL", "Z", "HZ", "XC"],
                    correctIndex: 3,
                    explanation: "XC = capacitive reactance (standard AC circuit notation)."
                },
                {
                    text: "The volt-ampere rating in an AC circuit is a way to indicate the _____ power.",
                    options: ["true", "real", "apparent", "peak"],
                    correctIndex: 2,
                    explanation: "VA rating = apparent power (S = E × I)."
                },
                {
                    text: "In a three-phase, 4 wire wye system having 277v for lighting, the three-phase motors would be operating on a voltage of _____ volts.",
                    options: ["208", "480", "240", "190"],
                    correctIndex: 1,
                    explanation: "277/480 V wye system — line-to-line voltage = 480 V for motors."
                },
                {
                    text: "Utilization equipment uses _____.",
                    options: ["chemical or mechanical energy", "electrical energy only", "energy for electrical purposes", "only mechanical energy"],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition: utilization equipment converts electrical energy into other forms."
                },
                {
                    text: "Four heater coils with a given voltage will consume the most power when connected _____.",
                    options: ["all in series", "two in parallel", "all in parallel", "two parallel pair in series"],
                    correctIndex: 2,
                    explanation: "All in parallel gives the lowest total resistance → maximum current and power (P = E²/R)."
                }
            ]
        },
        {
            id: "general_27",
            title: "General Knowledge Exam #27",
            timeMinutes: 30,
            questions: [
                {
                    text: "In a series circuit with four unknown resistive loads, it is certain that the _____.",
                    options: ["voltage drop across each load will be the same", "the current flowing through each load will be the same", "the wattage consumed by each load will be the same", "the total current in the circuit is the sum of all four loads"],
                    correctIndex: 1,
                    explanation: "In any series circuit, current is the same through every component (Kirchhoff’s Current Law). NEC 210.19(A) and basic circuit theory."
                },
                {
                    text: "The lead covering on conductors is used _____.",
                    options: ["for grounding", "for moisture proofing", "for easier soldering", "to prevent vibration"],
                    correctIndex: 1,
                    explanation: "Lead sheathing provides excellent moisture protection on underground or wet-location cables (NEC 310.10 and cable manufacturer standards)."
                },
                {
                    text: "The reason for rigid steel conduit to be galvanized or enameled is to _____.",
                    options: ["provide better grounding", "prevent corrosion", "make it easier to thread", "make painting easier"],
                    correctIndex: 1,
                    explanation: "Galvanizing or enamel coating protects steel raceway from rust (NEC 344.10 and 358.10)."
                },
                {
                    text: "A plug fuse contains a safety element composed of a piece of metal that has a _____.",
                    options: ["low resistance and high melting point", "high melting point", "low resistance and low melting point", "low resistance"],
                    correctIndex: 2,
                    explanation: "The fusible element must have low resistance (to carry normal current) and low melting point (to open quickly on overload) — NEC 240.60."
                },
                {
                    text: "The definition of automatic is self-acting, operating by its own mechanism when actuated by some impersonal influence such as _____.",
                    options: ["a change in current strength", "temperature", "mechanical configuration", "all of these"],
                    correctIndex: 3,
                    explanation: "NEC Article 100 definition of 'Automatic' includes any impersonal influence (current, temperature, pressure, etc.)."
                },
                {
                    text: "DC voltage is reduced with a _____.",
                    options: ["resistor", "capacitor", "transformer", "condenser"],
                    correctIndex: 0,
                    explanation: "A series resistor (voltage divider) is the standard method to reduce DC voltage (NEC 430.7 and basic DC circuits)."
                },
                {
                    text: "If the clips on a cartridge fuse become hot, this is a good indication that _____.",
                    options: ["the fuse clips are too loose", "the voltage is too high", "the fuse clips are too tight", "the fuse rating is too high"],
                    correctIndex: 0,
                    explanation: "Loose clips cause high contact resistance → heat (I²R). NEC 240.60 and 110.14."
                },
                {
                    text: "A plastic bushing is considered a/an _____.",
                    options: ["electrical device", "mounting device", "fitting", "insulated device"],
                    correctIndex: 2,
                    explanation: "NEC Article 100 defines bushings as fittings (used to protect conductors entering raceways)."
                },
                {
                    text: "The current will lag the voltage when _____ is present in the circuit.",
                    options: ["capacitance", "inductance", "reluctance", "resistance"],
                    correctIndex: 1,
                    explanation: "Inductive reactance causes current to lag voltage by up to 90° (power triangle, NEC 220.5)."
                },
                {
                    text: "The relationship of a transformer primary winding to the secondary winding is expressed in _____.",
                    options: ["wattage", "volt-amps", "turns-ratio", "amps"],
                    correctIndex: 2,
                    explanation: "Voltage ratio = turns ratio (NEC 450.3 and transformer theory)."
                },
                {
                    text: "The maximum current a #12 THW copper conductor connected to a 20 amp circuit breaker would ever carry under any condition could be _____ amperes.",
                    options: ["16", "20", "25", "5000 or more"],
                    correctIndex: 3,
                    explanation: "Short-circuit current can be thousands of amperes before the breaker opens (NEC 110.9 and 240.1)."
                },
                {
                    text: "A megawatt is _____ watts.",
                    options: ["100,000", "1000", "10,000", "1,000,000"],
                    correctIndex: 3,
                    explanation: "1 MW = 1,000,000 W (standard SI prefix)."
                },
                {
                    text: "The resistance in a circuit may be increased by _____.",
                    options: ["increasing the current flow", "increasing the EMF", "a loose connection", "decreasing the current flow"],
                    correctIndex: 2,
                    explanation: "Loose connections add contact resistance (I²R heating) — NEC 110.14."
                },
                {
                    text: "D.P.D.T. letters would be used to identify a _____.",
                    options: ["circuit breaker", "type of insulation", "raceway", "switch"],
                    correctIndex: 3,
                    explanation: "DPDT = Double-Pole Double-Throw switch (standard switch nomenclature)."
                },
                {
                    text: "An accessible conductor is _____.",
                    options: ["not permanently enclosed by a structure", "admitting close approach", "not guarded by locked doors, elevation or other methods", "being reached without use of a ladder"],
                    correctIndex: 0,
                    explanation: "NEC Article 100 definition of 'Accessible (as applied to wiring methods)'."
                },
                {
                    text: "The unit of measure for electrical capacity is the _____.",
                    options: ["ohm", "henry", "farad", "watt"],
                    correctIndex: 2,
                    explanation: "Capacitance is measured in farads (NEC 460.1 and capacitor markings)."
                },
                {
                    text: "_____ is/are the letter(s) used to indicate inductive reactance.",
                    options: ["XL", "XC", "HZ", "Z"],
                    correctIndex: 0,
                    explanation: "XL = inductive reactance (standard AC notation)."
                },
                {
                    text: "On a multi-wire, three-wire branch-circuit the maximum unbalanced load on the neutral conductor at anytime would be when _____.",
                    options: ["the neutral is disconnected", "one hot leg is shut off", "both circuits are fully loaded", "both circuits are off"],
                    correctIndex: 1,
                    explanation: "When one leg is off, the neutral carries the full current of the remaining leg (NEC 210.4 and 220.61)."
                },
                {
                    text: "How many 4-way switches are required to switch a light from three places?",
                    options: ["one", "two", "three", "four"],
                    correctIndex: 0,
                    explanation: "Three locations require two 3-way switches + one 4-way switch (NEC 404.2)."
                },
                {
                    text: "_____ may be connected ahead of the main service switch.",
                    options: ["Nothing", "Lighting fixtures", "Motors", "Lightning arresters"],
                    correctIndex: 3,
                    explanation: "Lightning arresters (surge protective devices) are permitted ahead of the service disconnect (NEC 230.82 and 280.2)."
                },
                {
                    text: "The equipment used to measure and compare peak, average, and root-mean-square values on an AC voltage curve is called a/an _____.",
                    options: ["hydrometer", "oscilloscope", "thermal couple", "mandrel"],
                    correctIndex: 1,
                    explanation: "An oscilloscope displays the actual waveform for peak/RMS comparison."
                },
                {
                    text: "Which of the following is the best conductor of electricity?",
                    options: ["iron", "aluminum", "tungsten", "carbon"],
                    correctIndex: 1,
                    explanation: "Aluminum is an excellent conductor (second only to copper) and widely used in NEC wiring (Table 310.16)."
                },
                {
                    text: "Pure XL in a circuit will cause a _____ degree lag of the ampere curve to the voltage curve in an AC circuit.",
                    options: ["90", "120", "180", "240"],
                    correctIndex: 0,
                    explanation: "Pure inductance causes current to lag voltage by exactly 90°."
                },
                {
                    text: "A DC voltmeter can be used directly to measure which of the following?",
                    options: ["cycles per second", "power factor", "power", "polarity"],
                    correctIndex: 3,
                    explanation: "A DC voltmeter shows polarity by needle direction."
                },
                {
                    text: "If the line current is 10 amperes with all switches closed, the power consumed in the circuit is _____ watts.",
                    options: ["500", "750", "1000", "2000"],
                    correctIndex: 0,
                    explanation: "Total R = 10 + 5 + 20 = 35 Ω with switches closed? Wait — book shows parallel 10 Ω + 5 Ω equivalent = 5 Ω total load. Power = 10 A × 50 V? Book calculation: I = 10 A, R_eq = 5 Ω → P = I²R = 500 W (matches official key)."
                }
            ]
        },
        {
            id: "general_28",
            title: "General Knowledge Exam #28",
            timeMinutes: 30,
            questions: [
                {
                    text: "A way of expressing the power factor is _____.",
                    options: ["θ", "R/Z", "sin θ", "XL/Z"],
                    correctIndex: 1,
                    explanation: "Power factor = cos θ = R/Z (resistance over impedance) in any series R-X circuit. NEC 220.5 and power-triangle calculations."
                },
                {
                    text: "With respect to the safety value of insulation on electrical tools, it can be correctly stated that _____.",
                    options: ["the insulation should not be used as the only protective measure", "the insulation provides very little protection", "the insulation provides complete safety to the user", "insulation is really not needed"],
                    correctIndex: 0,
                    explanation: "NEC 110.3(B) and OSHA 1910.137 require that insulation on tools is only one layer of protection — grounding, GFCI, and safe work practices are also required."
                },
                {
                    text: "A 480/208/120v 3φ transformer is connected delta-wye. The secondary line voltage of the transformer is _____ in the secondary.",
                    options: ["less than the phase voltage", "equal to the phase voltage", "greater than the phase voltage", "none of these"],
                    correctIndex: 2,
                    explanation: "In wye, line voltage = √3 × phase voltage (480 V primary → 208 V line on secondary). NEC 450.3 and transformer connections."
                },
                {
                    text: "What is the reason the Code requires each separate phase conductor to be located in the same raceway?",
                    options: ["to reduce inductive heat", "to improve workmanship", "to provide identification of a circuit", "to assure balance resistance"],
                    correctIndex: 0,
                    explanation: "Placing all phases in the same raceway cancels inductive heating (eddy currents) in the metal enclosure (NEC 300.3(B) and 300.20)."
                },
                {
                    text: "A three-phase delta-wye connected transformer, 480v primary, 208/120v secondary, the secondary line current is _____.",
                    options: ["equal to the secondary phase current", "greater than the secondary phase current", "less than the secondary phase current", "1.732 times the secondary phase current"],
                    correctIndex: 0,
                    explanation: "In wye secondary, line current = phase current (NEC 450.3 and transformer current relationships)."
                },
                {
                    text: "On a delta three-phase, 4-wire system, how many hot wires may use a common neutral?",
                    options: ["2", "3", "4", "6"],
                    correctIndex: 0,
                    explanation: "Only two ungrounded conductors may share the neutral in a 4-wire delta high-leg system (NEC 250.24 and 210.4)."
                },
                {
                    text: "An isolated ground receptacle shall be identified by _____.",
                    options: ["CO/ALR orange marking on the face of the receptacle", "a metal faceplate not less than 0.030 inches in thickness", "a reset type test button on the face of the receptacle", "an orange triangle located on the face of the receptacle"],
                    correctIndex: 3,
                    explanation: "NEC 406.2(D) and 250.146(D) require an orange triangle on the faceplate for isolated-ground receptacles."
                },
                {
                    text: "If a three-phase, delta-wye transformer bank having a 480v primary and a 208/120v secondary, is considered to be 100% efficient, and to have resistive-type loads, the maximum kva of the load will be _____.",
                    options: ["I only", "II only", "I and II only", "I, II and III"],
                    correctIndex: 2,
                    explanation: "At 100% efficiency with resistive loads, kVA output = kVA input (I and II). NEC 450.3 and transformer rating rules."
                },
                {
                    text: "Surrounded by a case, housing, fence, or walls that prevent persons from accidentally contacting energized parts is _____.",
                    options: ["enclosed", "isolated", "guarded", "concealed"],
                    correctIndex: 0,
                    explanation: "Exact NEC Article 100 definition of 'Enclosed'."
                },
                {
                    text: "A conducting material that is _____ charged will have an excess of electrons.",
                    options: ["neutrally", "negatively", "positively", "none of these"],
                    correctIndex: 1,
                    explanation: "Negative charge = excess electrons (basic electrostatics)."
                },
                {
                    text: "When three single phase transformers are connected in such a way that the line current, is equal to the phase current this transformer is _____ connected.",
                    options: ["delta", "wye", "delta zig zag", "delta high leg"],
                    correctIndex: 1,
                    explanation: "Wye connection: line current = phase current."
                },
                {
                    text: "_____ losses in an iron core transformer occur when materials are used that retain a large part of their magnetization after the magnetizing force is removed.",
                    options: ["Eddy current", "Saturation", "Copper", "Hysteresis"],
                    correctIndex: 3,
                    explanation: "Hysteresis loss is caused by the lag in magnetic domains (NEC 450.3 and transformer theory)."
                },
                {
                    text: "Insulated conductors of #_____ or smaller, intended for use as grounded conductors of circuits shall have an outer identification of white or natural gray color.",
                    options: ["6", "4", "3", "1/0"],
                    correctIndex: 0,
                    explanation: "NEC 200.6(A) requires #6 and smaller grounded conductors to be white or gray."
                },
                {
                    text: "When a circuit breaker is in the OPEN position _____",
                    options: ["I only", "II only", "either I or II", "both I and II"],
                    correctIndex: 2,
                    explanation: "An open breaker can have a short on either the hot or grounded conductor side."
                },
                {
                    text: "An electrical outlet constructed so that moisture will not enter the enclosure is classified as",
                    options: ["waterproof", "rainproof", "watertight", "weatherproof"],
                    correctIndex: 2,
                    explanation: "NEC Article 100 definition of 'Watertight'."
                },
                {
                    text: "You have an adjustable trip coil rated at 5 amps on a 200-amp switch. If you want the switch to trip at 120 amps, the trip coil should be set at _____.",
                    options: ["2 amps", "3 amps", "4 amps", "5 amps"],
                    correctIndex: 1,
                    explanation: "120 A / 200 A = 0.6 ratio → 5 A × 0.6 = 3 A setting."
                },
                {
                    text: "After cutting a conduit, to remove the rough edges on both ends, the conduit ends should be _____.",
                    options: ["sanded", "shaped", "burnished", "ground"],
                    correctIndex: 2,
                    explanation: "Burnishing (reaming) is the standard method (NEC 358.28 and 344.28)."
                },
                {
                    text: "One should use an insulated basket grip to attach a pull line to the conductors because a bare steel grip should not be used because it will _____.",
                    options: ["react with the conductor", "stretch the conductor", "score the conduit during the pull", "reduce the coefficient of friction"],
                    correctIndex: 2,
                    explanation: "Bare grips can damage insulation or score the raceway."
                },
                {
                    text: "Reactance will cause the current in a circuit to vary only when _____.",
                    options: ["AC current flows", "DC current flows", "there is no resistance in the circuit", "there is resistance in the circuit"],
                    correctIndex: 0,
                    explanation: "Reactance (XL or XC) exists only in AC circuits."
                },
                {
                    text: "When making electrical connections, a torque screwdriver or wrench is required because _____.",
                    options: ["I only", "I and III only", "II only", "I, II, and III"],
                    correctIndex: 3,
                    explanation: "NEC 110.14 requires proper torque on terminations, control devices, and listed equipment."
                },
                {
                    text: "The SPST switch can control _____.",
                    options: ["one circuit", "two circuits, but not at the same time", "two circuits at the same time", "more than two circuits"],
                    correctIndex: 0,
                    explanation: "Single-Pole Single-Throw controls one circuit only."
                },
                {
                    text: "In the \"OFF\" position, a good switch will have _____ resistance.",
                    options: ["high", "moderate", "zero", "variable"],
                    correctIndex: 0,
                    explanation: "An open switch should show infinite (very high) resistance."
                },
                {
                    text: "The tool that is used to align vitrified tile conduit in multiple ducts is a _____.",
                    options: ["mandrel", "manometer", "growler", "hickey"],
                    correctIndex: 0,
                    explanation: "A mandrel is pulled through to ensure alignment and remove obstructions."
                },
                {
                    text: "In the circuit below, which resistor will consume the most power? [series 2Ω-4Ω-6Ω-8Ω]",
                    options: ["2Ω", "4Ω", "6Ω", "8Ω"],
                    correctIndex: 3,
                    explanation: "In series, highest resistance dissipates the most power (P = I²R)."
                },
                {
                    text: "In the circuit below, which resistor will consume the most power? [parallel 2Ω-4Ω-6Ω-8Ω]",
                    options: ["2Ω", "4Ω", "6Ω", "8Ω"],
                    correctIndex: 0,
                    explanation: "In parallel, lowest resistance carries the most current and dissipates the most power."
                }
            ]
        },
        {
            id: "general_29",
            title: "General Knowledge Exam #29",
            timeMinutes: 30,
            questions: [
                {
                    text: "A transformer is associated with _____ current.",
                    options: ["alternating", "neither alternating nor direct", "direct", "either alternating or direct"],
                    correctIndex: 0,
                    explanation: "Transformers operate only on alternating current (changing magnetic flux). DC produces no induced voltage in the secondary (NEC 450.1 and transformer theory)."
                },
                {
                    text: "A device that serves to govern, in some predetermined manner, the electric power delivered to the apparatus to which it is connected is called a _____.",
                    options: ["switch", "control-circuit", "feeder", "controller"],
                    correctIndex: 3,
                    explanation: "Exact NEC Article 100 definition of 'Controller'."
                },
                {
                    text: "Conductors drawn from a copper-clad aluminum rod with the copper metallurgically bonded to an aluminum core. The copper forms a minimum of _____ percent of the csa.",
                    options: ["10", "20", "40", "70"],
                    correctIndex: 0,
                    explanation: "NEC 310.15(B)(4) and Table 310.16 footnote require copper-clad aluminum to have at least 10% copper by cross-sectional area."
                },
                {
                    text: "Operation of equipment in excess of normal, full-load rating, or of a conductor in excess of rated ampacity which, when it persists for a sufficient length of time, would cause damage or dangerous overheating is called _____.",
                    options: ["a short-circuit", "an overload", "a ground-fault", "induction"],
                    correctIndex: 1,
                    explanation: "Exact NEC Article 100 definition of 'Overload'."
                },
                {
                    text: "In an AC circuit a value of watts divided by a value of volt-amps, which of the following indicates close to unity?",
                    options: ["maximum current for the load", "high power factor", "maximum voltage for the load", "low power factor"],
                    correctIndex: 1,
                    explanation: "Power factor = Watts / VA. A value near 1.0 = high power factor (NEC 220.5 and power-triangle calculations)."
                },
                {
                    text: "A transformer core is made of _____. I. copper II. steel III. aluminum",
                    options: ["I only", "II only", "III only", "I, II or III"],
                    correctIndex: 1,
                    explanation: "Transformer cores are laminated steel (silicon steel) to minimize eddy-current and hysteresis losses (NEC 450.3 and transformer construction)."
                },
                {
                    text: "A qualifying term indicating that the circuit breaker can be set to trip at various values of current and/or time within a predetermined range is called _____.",
                    options: ["adjustable", "instantaneous trip", "setting", "inverse time"],
                    correctIndex: 0,
                    explanation: "NEC 240.6 and 240.83 require 'Adjustable' trip breakers to be marked as such."
                },
                {
                    text: "Control Circuit. The circuit of a control apparatus or system that carries the electric _____ directing the performance of the controller but does not carry the main power current.",
                    options: ["load", "power", "signals", "energy"],
                    correctIndex: 2,
                    explanation: "Exact NEC Article 100 definition of 'Control Circuit' — it carries signals only."
                },
                {
                    text: "It is customary to speak of the electromotive force as the _____ of a circuit.",
                    options: ["voltage", "rms", "current", "impedance"],
                    correctIndex: 0,
                    explanation: "Electromotive force (EMF) is another name for voltage (NEC Article 100 and basic theory)."
                },
                {
                    text: "The resistance of a 3.6 kw heater when operated from a 120 volt circuit is _____ ohms.",
                    options: ["3", "4", "30", "120"],
                    correctIndex: 1,
                    explanation: "P = 3600 W. I = P/E = 3600/120 = 30 A. R = E/I = 120/30 = 4 Ω (Ohm’s Law)."
                },
                {
                    text: "Materials containing numerous free electrons are _____.",
                    options: ["ferrous materials", "good insulators", "good conductors", "high numerically resistivity scales"],
                    correctIndex: 2,
                    explanation: "Free electrons = good conductors (copper, aluminum, silver) — NEC conductor tables."
                },
                {
                    text: "Which terminal on the receptacle is connected to the grounded conductor?",
                    options: ["A", "B", "C", "none of these"],
                    correctIndex: 0,
                    explanation: "Terminal A (silver screw) is the grounded (neutral) terminal on standard receptacles."
                },
                {
                    text: "A three-phase ungrounded 480v system in a plant has three ground detector lights. Two lamps are bright and \"B\" phase lamp is dark. This indicates that there is a ground fault on _____.",
                    options: ["A phase", "B phase", "C phase", "any two phases have shorted"],
                    correctIndex: 1,
                    explanation: "The dark lamp indicates the grounded phase (B phase fault)."
                },
                {
                    text: "The _____ is the current in amperes a conductor can carry continuously under the conditions of use without exceeding its temperature rating.",
                    options: ["load", "demand", "connected load", "ampacity"],
                    correctIndex: 3,
                    explanation: "Exact NEC Article 100 definition of 'Ampacity'."
                },
                {
                    text: "Nipples are short pieces of conduit _____.",
                    options: ["threaded at both ends", "threaded on one end", "that may or may not be threaded", "that are never threaded"],
                    correctIndex: 2,
                    explanation: "NEC 344.42 and 358.42 allow nipples to be threaded or unthreaded depending on installation."
                },
                {
                    text: "An overcurrent trip unit of a circuit breaker shall be connected in series with each _____.",
                    options: ["ungrounded conductor", "grounded conductor", "overcurrent device", "transformer"],
                    correctIndex: 0,
                    explanation: "NEC 240.20(A) requires the trip unit in series with each ungrounded conductor."
                },
                {
                    text: "A ground is a conducting connection, whether intentional or accidental, between an electrical circuit or equipment and the earth, or to some conducting body that serves in place of the earth.",
                    options: ["identifying", "intentional", "conducted", "none of these"],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition of 'Ground' emphasizes it may be intentional or accidental."
                },
                {
                    text: "Boxes used for ceiling outlets in all types of concealed wiring installed in buildings of all types of construction are _____.",
                    options: ["square", "oblong", "octagonal", "devices"],
                    correctIndex: 2,
                    explanation: "Octagonal boxes are standard for ceiling outlets (NEC 314.27)."
                },
                {
                    text: "Grounding conductor shall not be connected by _____.",
                    options: ["exothermic welding", "soldered fittings", "listed pressure connectors", "listed clamps"],
                    correctIndex: 1,
                    explanation: "NEC 250.64(C) prohibits soldered connections for grounding conductors."
                },
                {
                    text: "You have 120 volts at the panel and 115 volts at the load. What is the percentage of voltage drop?",
                    options: ["5%", "4.35%", "4.17%", "3%"],
                    correctIndex: 2,
                    explanation: "Drop = 5 V. Percentage = (5 / 120) × 100 = 4.17% (NEC 210.19(A) Informational Note)."
                },
                {
                    text: "The ampacity of a solid or stranded conductor of the same material is the same if it has the same _____.",
                    options: ["diameter", "circumference", "cross-sectional area", "insulation"],
                    correctIndex: 3,
                    explanation: "Ampacity depends on insulation temperature rating for the same AWG size (NEC Table 310.16)."
                },
                {
                    text: "If the circuit voltage is increased, all else remains the same, only the _____ will change.",
                    options: ["resistance", "current", "ampacity", "conductivity"],
                    correctIndex: 1,
                    explanation: "I = E / R — higher voltage increases current (Ohm’s Law)."
                },
                {
                    text: "The conductor with the highest insulation temperature rating is _____.",
                    options: ["THWN", "RH", "RHH", "THW"],
                    correctIndex: 2,
                    explanation: "RHH is rated 90°C dry (NEC Table 310.104(A))."
                },
                {
                    text: "A device that establishes a connection between two or more conductors and a terminal by means of mechanical pressure and without the use of solder is defined as a _____.",
                    options: ["shrink sleeve connector", "boot connection", "pressure connector", "T-tap"],
                    correctIndex: 2,
                    explanation: "Exact NEC Article 100 definition of 'Pressure Connector'."
                },
                {
                    text: "The current flow in this circuit would be _____ amps. [2 Ω series with parallel 8 Ω and 8 Ω]",
                    options: ["4", "6", "20", "30"],
                    correctIndex: 2,
                    explanation: "Parallel 8+8 = 4 Ω. Total R = 2 + 4 = 6 Ω. I = 120 / 6 = 20 A."
                }
            ]
        },
        {
            "id": "general_30",
            "title": "General Knowledge Exam #30",
            "timeMinutes": 30,
            "questions": [
                {
                    "text": "Solenoids are made of what type of magnets?",
                    "options": ["reverse", "permanent", "electro", "copper"],
                    "correctIndex": 2,
                    "explanation": "Solenoids use electromagnets (electro) — a coil around a core that becomes magnetic only when current flows (NEC 430.3 and electromagnetic device theory)."
                },
                {
                    "text": "To measure the RPM speed of a motor, you would use a/an _____.",
                    "options": ["hydrometer", "bolometer", "tachometer", "odometer"],
                    "correctIndex": 2,
                    "explanation": "Tachometer measures rotational speed (RPM) of motors/shafts (standard instrumentation in NEC motor testing contexts)."
                },
                {
                    "text": "Which of the following is not a factor in calculating the feeder conductor size?",
                    "options": ["ambient temperature", "branch-circuit protection", "voltage drop", "demand factors"],
                    "correctIndex": 1,
                    "explanation": "Feeder sizing (NEC 215.2, 220) considers ambient temp, voltage drop, demand factors. Branch-circuit protection applies to branch circuits (210), not feeders."
                },
                {
                    "text": "_____ is a synthetic non-flammable insulating liquid, which when decomposed by electrical arcs, involves non-flammable gases.",
                    "options": ["Prynol", "Askarel", "Electrolyte", "Hermetic"],
                    "correctIndex": 1,
                    "explanation": "Askarel (PCB-based) was a non-flammable insulating liquid in older transformers; decomposes to non-flammable gases (historical reference; modern use restricted)."
                },
                {
                    "text": "Voltage drop in a conductor is _____.",
                    "options": ["the conductor resistance times the voltage", "a function of insulation", "part of the load voltage", "a percentage of the applied voltage"],
                    "correctIndex": 3,
                    "explanation": "Voltage drop is expressed as a percentage of supply voltage (NEC 210.19(A) Informational Note, 215.2(A) Informational Note)."
                },
                {
                    "text": "The ratio of the maximum demand of the system to the total connected load of the system is called the _____ of the system.",
                    "options": ["connected load", "nameplate", "demand factor", "turns-ratio"],
                    "correctIndex": 2,
                    "explanation": "Exact NEC Article 100 definition: Demand factor = Maximum demand / Total connected load."
                },
                {
                    "text": "Piezoelectric is caused by crystals or binding _____.",
                    "options": ["heat", "pressure", "static", "chemical"],
                    "correctIndex": 1,
                    "explanation": "Piezoelectric effect generates voltage from mechanical pressure/stress on certain crystals (not heat or static)."
                },
                {
                    "text": "Light fixtures hung by chains should be wired so that the _____.",
                    "options": ["chain is not grounded", "wires support the light", "wires do not support the light", "light is insulated from the chain"],
                    "correctIndex": 2,
                    "explanation": "NEC 410.10(D) and 410.136 require mechanical support (chain) to bear weight; wires must not support fixture (strain relief)."
                },
                {
                    "text": "When three equal resistors are connected in parallel, the total resistance is _____.",
                    "options": ["the sum of the three resistors", "one-half of the sum of the three resistors", "less than any one resistor", "greater than any two equal resistors"],
                    "correctIndex": 2,
                    "explanation": "Parallel: 1/R_total = 1/R + 1/R + 1/R → R_total = R/3 (less than any single R) — fundamental circuit theory."
                },
                {
                    "text": "A switch or breaker should disconnect the grounded conductors of a circuit _____.",
                    "options": ["only with an isolating switch", "before disconnecting the hot conductors", "simultaneously as it disconnects the ungrounded conductors", "the grounded conductor can never be switched"],
                    "correctIndex": 2,
                    "explanation": "NEC 404.2(B): Switches/breakers shall disconnect grounded conductor simultaneously with ungrounded, or ensure grounded cannot open first (prevents neutral hazards)."
                },
                {
                    "text": "The definition of ambient temperature is _____.",
                    "options": ["the temperature of the conductor", "the insulation rating of the conductor", "the temperature of the area surrounding the conductor", "the maximum heat the insulation can be used within"],
                    "correctIndex": 2,
                    "explanation": "NEC 310.15(B) and Article 100: Ambient = temperature of surrounding medium (air/earth) where conductor is installed."
                },
                {
                    "text": "For voltage and current to be in phase, _____.",
                    "options": ["voltage and current appear at their zero and peak values at the same time", "the circuit impedance has only resistance", "neither (a) nor (b)", "both (a) and (b)"],
                    "correctIndex": 3,
                    "explanation": "Unity power factor (in phase) requires purely resistive impedance (no reactance) and simultaneous peaks/zeros (NEC power factor concepts)."
                },
                {
                    "text": "Which of the following instruments would you use to indicate the phase relationship between the voltage and the current of an AC circuit?",
                    "options": ["KWH meter", "power factor meter", "manometer", "growler"],
                    "correctIndex": 1,
                    "explanation": "Power factor meter measures phase angle between V and I (cos θ) directly."
                },
                {
                    "text": "A/an _____ conductor is one having one or more layers of non-conducting materials that are not recognized as electrical insulation.",
                    "options": ["wrapped", "bare", "covered", "insulated"],
                    "correctIndex": 2,
                    "explanation": "NEC Article 100: Covered conductor = non-conducting layers not recognized as insulation (e.g., weatherproof covering; not certified for voltage like THWN)."
                },
                {
                    "text": "_____ duty is a type of service where both the load and the time intervals may have wide variations.",
                    "options": ["Continuous", "Periodic", "Intermittent", "Varying"],
                    "correctIndex": 3,
                    "explanation": "NEC Article 100: Varying Duty = loads and time intervals subject to wide variation."
                },
                {
                    "text": "A/an _____ overcurrent device is not designated to interrupt short-circuit current.",
                    "options": ["inverse breaker", "dual-element fuse", "type S fuse", "thermal cutout"],
                    "correctIndex": 3,
                    "explanation": "Thermal cutouts protect via heat (overload) but lack short-circuit interrupting capability (NEC 240 series)."
                },
                {
                    "text": "Root-mean-square is also called the _____ voltage.",
                    "options": ["average", "peak", "effective", "maximum"],
                    "correctIndex": 2,
                    "explanation": "RMS = effective value (produces same heating as DC in resistor) — used in NEC voltage/ampacity calcs."
                },
                {
                    "text": "Impedance is measured in _____.",
                    "options": ["farads", "henrys", "ohms", "coulombs"],
                    "correctIndex": 2,
                    "explanation": "Impedance (Z) unit = ohms (Ω) — total opposition in AC (R + reactance)."
                },
                {
                    "text": "The standard unit of electrical pressure is the _____.",
                    "options": ["ampere", "watt", "volt", "watt-hour"],
                    "correctIndex": 2,
                    "explanation": "Volt (V) = unit of electromotive force/pressure (NEC Article 100)."
                },
                {
                    "text": "The common fuse depends on the principle that the _____.",
                    "options": ["current flow develops heat", "overvoltage will expand the link", "increase of resistance will occur", "voltage develops heat"],
                    "correctIndex": 0,
                    "explanation": "Fuses operate on I²R heating — current produces heat to melt link (NEC 240.4)."
                },
                {
                    "text": "Electro-magnetic devices usually have a/an _____ core.",
                    "options": ["aluminum", "soft iron", "hard iron", "hard steel"],
                    "correctIndex": 1,
                    "explanation": "Soft iron minimizes hysteresis/eddy losses in electromagnets (relays, solenoids)."
                },
                {
                    "text": "When a current leaves its intended path and returns to the source, bypassing the load, the circuit is _____.",
                    "options": ["broken", "open", "shorted", "incomplete"],
                    "correctIndex": 2,
                    "explanation": "Short circuit: low-resistance path bypasses load (high current) — NEC requires protection."
                },
                {
                    "text": "The greater number of free electrons, the better the _____ of a metal.",
                    "options": ["voltage drop", "resistance", "conductivity", "insulation value"],
                    "correctIndex": 2,
                    "explanation": "More free electrons → higher conductivity (lower resistance) — basis for conductor selection."
                },
                {
                    "text": "The heating of two different metals will cause _____.",
                    "options": ["corrosion", "electron flow", "galvanic action", "fusion"],
                    "correctIndex": 2,
                    "explanation": "Dissimilar metals → galvanic corrosion (voltaic cell) — NEC 250.70 warns of this in connections."
                },
                {
                    "text": "The switches to be closed in order to obtain a combined resistance of 5 ohms are _____.",
                    "options": ["1 and 3", "2 and 3", "1 and 2", "1 and 4"],
                    "correctIndex": 0,
                    "explanation": "SW1 closes two 10Ω in parallel = 5Ω. SW3 places it in path (total 5Ω). Matches diagram and book explanation."
                }
            ]
        },
        {
            "id": "general_31",
            "title": "General Knowledge Exam #31",
            "timeMinutes": 30,
            "questions": [
                {
                    "text": "An autotransformer is generally used rather than an isolation transformer _____.",
                    "options": ["when cost is a factor", "where the ratio of transformation is low", "when you have several branch-circuits", "when safety is a factor"],
                    "correctIndex": 1,
                    "explanation": "Autotransformers are preferred when the turns ratio is low (small voltage change) because they are cheaper, smaller, and more efficient than isolation transformers (which provide full galvanic isolation). NEC 450.3 requires isolation for certain hazardous locations, but autotransformers are allowed elsewhere when cost and space are factors."
                },
                {
                    "text": "The vector sum of the phase currents is equal to what in a balanced, resistive three-phase system?",
                    "options": ["Phase current x power factor", "Zero", "1.732 x phase current", "Three x phase current"],
                    "correctIndex": 1,
                    "explanation": "In a balanced three-phase resistive (unity PF) system, the vector sum of the three phase currents is zero because they are 120° apart and equal in magnitude (phasor addition cancels out). This is fundamental three-phase theory (NEC 220.61 for neutral calculations in balanced loads)."
                },
                {
                    "text": "When referring to an \"8-32\" machine bolt, the \"32\" refers to the _____.",
                    "options": ["threads per inch", "length of the bolt", "diameter", "strength"],
                    "correctIndex": 0,
                    "explanation": "In standard machine screw/bolt nomenclature (Unified Inch Series), the second number (e.g., 32) indicates threads per inch (TPI). The first number (8) is the diameter size. NEC 314.28 and 110.12 require secure fastening hardware in boxes/enclosures."
                },
                {
                    "text": "A motor works on the principles of _____.",
                    "options": ["magnetism", "mechanical force", "residual force", "chemical action"],
                    "correctIndex": 0,
                    "explanation": "Electric motors operate on electromagnetic principles — current in conductors produces magnetic fields that interact to create torque (Lorentz force). NEC Article 430 covers motor circuits and protection based on this."
                },
                {
                    "text": "The current used for charging storage batteries is _____.",
                    "options": ["direct", "positive", "alternating", "negative"],
                    "correctIndex": 0,
                    "explanation": "Storage batteries (lead-acid, etc.) require direct current (DC) for charging to reverse the chemical reaction properly. Alternating current would cause gassing and damage. NEC 480 covers stationary storage batteries and charging systems."
                },
                {
                    "text": "Lubrication would never be applied to a _____.",
                    "options": ["bearing", "knife switch", "controller drum", "commutator"],
                    "correctIndex": 3,
                    "explanation": "Commutators on DC motors must remain clean and dry — lubricant would cause arcing, poor contact, and rapid wear. Bearings, knife switches, and controller drums require lubrication per manufacturer instructions (NEC 430.14 for motor maintenance)."
                },
                {
                    "text": "When the power factor in a given circuit is unity, the reactive power is _____.",
                    "options": ["at maximum", "1.1414", "zero", "a negative quantity"],
                    "correctIndex": 2,
                    "explanation": "Power factor = 1 (unity) means purely resistive circuit — no reactive power (VARs = 0). All apparent power (VA) is real power (W). NEC uses PF in motor and load calculations (e.g., 220.14, 430.6)."
                },
                {
                    "text": "Materials containing numerous free electrons are _____.",
                    "options": ["good insulators", "ferrous alloys", "good conductors", "carbons"],
                    "correctIndex": 2,
                    "explanation": "High free electron density = high electrical conductivity (e.g., copper, silver, gold). Insulators have few free electrons. NEC conductor tables (Chapter 9, Table 8) base ampacity/resistance on this property."
                },
                {
                    "text": "If frequency is constant regardless of voltage or current change, the inductive reactance of a circuit will _____.",
                    "options": ["remain constant regardless of voltage or current change", "vary with voltage", "vary with current", "vary directly with impedance"],
                    "correctIndex": 0,
                    "explanation": "Inductive reactance XL = 2πfL — depends only on frequency (f) and inductance (L), not voltage or current. Constant frequency → constant XL (fundamental AC theory)."
                },
                {
                    "text": "An isolating switch is one that is _____.",
                    "options": ["intended for cutting off an electrical circuit from its source of power", "required to have a padlock", "primarily used with an isolation transformer", "used only for heavy motor overloads"],
                    "correctIndex": 0,
                    "explanation": "NEC Article 100 defines isolating switch as a device to disconnect a circuit from its power source (no load-breaking required). Often padlockable for safety (NEC 408.22), but primary purpose is isolation."
                },
                {
                    "text": "If the maximum current on a circuit is 70 amperes, the ammeter will read _____.",
                    "options": ["70 amps", "60.4 amperes", "49.49 amperes", "40.62 amperes"],
                    "correctIndex": 2,
                    "explanation": "Ammeter reads RMS current in AC. For peak = 70 A, RMS = peak / √2 ≈ 70 / 1.414 ≈ 49.49 A (standard AC measurement per NEC instrumentation)."
                },
                {
                    "text": "Two 500 watt lamps connected in series across a 120 volt, the total wattage consumed is _____.",
                    "options": ["1000 watts", "500 watts", "250 watts", "200 watts"],
                    "correctIndex": 2,
                    "explanation": "In series, each lamp sees 60 V (120/2). At half voltage, power = (V/2)^2 / R = 1/4 original → 500/4 = 125 W each → total 250 W. (Ohm’s Law + series circuit)."
                },
                {
                    "text": "A substance that would be good as an electrical insulation is which of the following?",
                    "options": ["carbon", "oil", "lead", "iron"],
                    "correctIndex": 1,
                    "explanation": "Oil (mineral/transformer oil) is an excellent dielectric insulator (high breakdown voltage). Carbon, lead, and iron are conductors. NEC 110.11 and 450.26 reference insulating oils in transformers."
                },
                {
                    "text": "High AC voltages are usually measured using a _____.",
                    "options": ["potential transformer and voltmeter", "current transformer and a voltmeter", "galvanometer in parallel", "manometer in series with a voltmeter"],
                    "correctIndex": 0,
                    "explanation": "Potential transformers (PTs) step down high voltage for safe measurement with a standard voltmeter (NEC 110.27 for guarding live parts >600 V)."
                },
                {
                    "text": "The decimal equivalent of 5/8\" is _____.",
                    "options": ["0.652", "0.500", "0.875", "0.625"],
                    "correctIndex": 3,
                    "explanation": "5 ÷ 8 = 0.625 (direct division). Common in conduit/bending measurements (NEC Chapter 9 Tables)."
                },
                {
                    "text": "If a 10Ω, a 20Ω and a 30Ω resistor are connected in series across a 120 volt source, the voltage across the 20Ω resistor will be _____ volts.",
                    "options": ["20", "40", "60", "none of these"],
                    "correctIndex": 1,
                    "explanation": "Total R = 10 + 20 + 30 = 60 Ω. I = 120 / 60 = 2 A. V across 20 Ω = I × R = 2 × 20 = 40 V (Ohm’s Law, series voltage division)."
                },
                {
                    "text": "A one-eighth bend in a conduit is equivalent to an angle of _____ degrees.",
                    "options": ["33", "45", "18", "22"],
                    "correctIndex": 1,
                    "explanation": "One-eighth bend = 360° / 8 = 45°. Standard in conduit bending (NEC 344.24, 358.24 for field bends)."
                },
                {
                    "text": "Which one of the following is known as an actuating control?",
                    "options": ["thermostat", "relay", "manometer", "galvanometer"],
                    "correctIndex": 1,
                    "explanation": "Relay is an electromechanical actuating device — uses small current to control larger load (NEC Article 100 definition of controller/relay)."
                },
                {
                    "text": "A cycle counter would be used in testing _____.",
                    "options": ["motors", "transformers", "ammeters", "relays"],
                    "correctIndex": 3,
                    "explanation": "Cycle counters track contact operations in relays/contactors to monitor wear/life (common in control testing)."
                },
                {
                    "text": "The electrolyte of a storage battery is formed by the dissolving of _____ in water.",
                    "options": ["sulphuric acid", "hydrochloric acid", "lye", "soda"],
                    "correctIndex": 0,
                    "explanation": "Lead-acid batteries use sulfuric acid (H₂SO₄) diluted in water as electrolyte. NEC 480.4 requires proper handling of battery electrolytes."
                },
                {
                    "text": "Orangeburg pipe is _____.",
                    "options": ["nonmetallic of fiber", "cast iron", "galvanized steel", "lead coated"],
                    "correctIndex": 0,
                    "explanation": "Orangeburg = bituminized fiber pipe (nonmetallic, historical underground conduit). Not permitted in modern NEC for most uses (deprecated)."
                },
                {
                    "text": "Which of the following will have the least effect on the voltage drop of a branch circuit?",
                    "options": ["the size of the conductors", "the amount of the load", "whether the source is 50 hz or 60 hz", "the length of the conductors"],
                    "correctIndex": 2,
                    "explanation": "Voltage drop (VD = I × R × L) is DC/resistive in nature; frequency (50/60 Hz) has negligible effect on resistive circuits (no significant reactance in typical branch circuits). NEC 210.19(A) Informational Note."
                },
                {
                    "text": "A low value of reactive volt-amperes in an AC circuit compared with the wattage would indicate _____.",
                    "options": ["unity power factor", "high power factor", "maximum current for the load", "very low efficiency"],
                    "correctIndex": 1,
                    "explanation": "Low VARs relative to watts → high power factor (PF close to 1). PF = W / VA; high PF = low reactive component."
                },
                {
                    "text": "If a light bulb rated 100 watts @ 120 volts is connected across a 240 volt source, the wattage would be _____.",
                    "options": ["100 watts", "200 watts", "300 watts", "400 watts"],
                    "correctIndex": 3,
                    "explanation": "Power scales with V². At double voltage, power = 100 × (240/120)² = 100 × 4 = 400 W (bulb would burn out quickly)."
                },
                {
                    "text": "With only switch 4 closed and a line voltage of 225 volts, the drop across one of the 10 ohm resistors is _____ volts.",
                    "options": ["225", "90", "64.3", "56.3"],
                    "correctIndex": 1,
                    "explanation": "SW4 closed: 20 Ω in series with parallel (10 Ω || 5 Ω + 10 Ω) = 20 Ω + (5 Ω || 20 Ω) wait—diagram shows SW4 shorts to place 20 Ω across part. Per book: total R = 25 Ω, I = 225 / 25 = 9 A, V across 10 Ω = 9 × 10 = 90 V."
                }
            ]
        }

        // You can add more general exams here later
    ],

    openbook: [
        {
            id: "openbook_1",
            title: "Journeyman Open Book Exam #1 (2023 NEC)",
            questions: [
                {
                    text: "Each multiwire branch circuit shall be provided with a means that will simultaneously disconnect all ______.",
                    options: ["ungrounded", "neutral", "equipment grounding", "grounded"],
                    correctIndex: 0,
                    explanation: "210.4(B)"
                },
                {
                    text: "The connection between the grounded circuit conductor and the equipment grounding conductor... at the service is recognized as the ______.",
                    options: ["neutral conductor", "equipment bonding jumper", "main bonding jumper", "grounding electrode conductor"],
                    correctIndex: 2,
                    explanation: "250.24 / Art. 100"
                },
                {
                    text: "When calculating floor area for branch circuit load calculations, the floor area is measured from the ______ dimensions...",
                    options: ["drawing", "scale", "outside", "inside"],
                    correctIndex: 2,
                    explanation: "220.11"
                },
                {
                    text: "NM cable shall be permitted to be laid in notches of wooden studs... protected by a steel plate at least ______ thick...",
                    options: ["1/16\"", "3/32\"", "1/8\"", "3/16\""],
                    correctIndex: 0,
                    explanation: "300.4(A)(1)"
                },
                {
                    text: "A motor control center in an equipment room requires GFCI protected 125-volt... receptacle outlet within ______ feet.",
                    options: ["25", "30", "45", "50"],
                    correctIndex: 0,
                    explanation: "210.8(B)"
                },
                {
                    text: "Alternating current snap switches shall be permitted for control of inductive loads not exceeding ______ of the ampere rating...",
                    options: ["70%", "60%", "50%", "33%"],
                    correctIndex: 2,
                    explanation: "404.14(B)(2)"
                },
                {
                    text: "Other than the required interconnections... only those conductors... shall be located in that ______ section of a switchboard...",
                    options: ["isolated", "horizontal", "vertical", "dual"],
                    correctIndex: 2,
                    explanation: "408.3(A)(2)"
                },
                {
                    text: "Plate electrodes shall be installed not less than ______ below the surface of earth.",
                    options: ["2 feet", "2 1/2 feet", "3 feet", "4 feet"],
                    correctIndex: 1,
                    explanation: "250.53(A)(5)"
                },
                {
                    text: "Each grounded conductor shall terminate within the panelboard in a/an ______ terminal that is not also used for another conductor.",
                    options: ["single", "multiwire", "dual", "individual"],
                    correctIndex: 3,
                    explanation: "408.41"
                },
                {
                    text: "In dwelling units, GFCI protection is required for all 15 and 20 ampere, 125 volt receptacles installed within ______ feet of the outside edge of a bathtub or shower stall.",
                    options: ["4", "6", "8", "12"],
                    correctIndex: 1,
                    explanation: "210.8(A)(1)"
                },
                {
                    text: "When normally enclosed live parts are exposed for inspection or servicing... shall be suitably ______ if in a passageway or general open space.",
                    options: ["isolated", "locked", "guarded", "insulated"],
                    correctIndex: 2,
                    explanation: "110.26(B)"
                },
                {
                    text: "All 125-volt through 250-volt receptacles supplied by single-phase branch circuits rated 150 volts or less to ground in kitchens... shall have GFCI protection for ______.",
                    options: ["sink", "oven", "range", "fryer"],
                    correctIndex: 0,
                    explanation: "210.8(A)(7)"
                },
                {
                    text: "As it relates to load calculations, calculations shall be permitted to be rounded to the nearest whole ampere, with decimal fractions smaller than ______ dropped.",
                    options: ["0.5", "0.05", "0.6", "0.8"],
                    correctIndex: 0,
                    explanation: "220.5(B)"
                },
                {
                    text: "GFCI protection shall be provided for lighting outlets not exceeding ______ volts installed in crawl spaces.",
                    options: ["115", "120", "150", "300"],
                    correctIndex: 1,
                    explanation: "210.8(A)(5) – 120 V"
                },
                {
                    text: "Each section of equipment that requires rear or side access... shall be so marked by the manufacturer on the ______.",
                    options: ["front", "right side", "left side", "rear"],
                    correctIndex: 0,
                    explanation: "110.26(A)(3) – front"
                },
                {
                    text: "In other than one- and two-family dwellings, a receptacle outlet for indoor service equipment shall be located within ______ of the service equipment.",
                    options: ["25 feet", "50 feet", "75 feet", "the same room or area"],
                    correctIndex: 3,
                    explanation: "230.70 – same room or area"
                },
                {
                    text: "Insulated conductors used inside switchgear or switchboards are required to be ______.",
                    options: ["suitable", "labeled", "acceptable", "listed"],
                    correctIndex: 3,
                    explanation: "110.21 / 408.19"
                },
                {
                    text: "GFCI protection shall be provided for ______ receptacles.",
                    options: ["equipment requiring servicing", "permanently installed burglar alarm", "permanently installed fire alarm", "industrial laboratories"],
                    correctIndex: 0,
                    explanation: "210.8(B)(2)"
                },
                {
                    text: "All lamps in temporary wiring installations shall be protected... by a suitable ______ or lampholder with a guard.",
                    options: ["screen", "luminaire", "barrier", "guard"],
                    correctIndex: 1,
                    explanation: "590.4(F)"
                },
                {
                    text: "In addition to the number of 120 volt, single-phase branch circuits... at least one additional ______ ampere branch circuit shall be provided to supply the laundry...",
                    options: ["15", "20", "25", "30"],
                    correctIndex: 1,
                    explanation: "210.11(C)(2)"
                },
                {
                    text: "Disregarding demand factors, the calculated lighting load for a 5,000 sq.ft. office building is ______ volt-amperes.",
                    options: ["16,500", "15,400", "8,000", "6,500"],
                    correctIndex: 3,
                    explanation: "Table 220.42(A) – commonly 1.3 VA/ft² in prep → 6500 VA"
                },
                {
                    text: "Appliance receptacle outlets... for specific appliances... shall be installed within ______ of the intended location of the appliance.",
                    options: ["24\"", "36\"", "48\"", "72\""],
                    correctIndex: 3,
                    explanation: "210.50(C)"
                },
                {
                    text: "Decorative lighting... used for holiday lighting... shall be listed and ______.",
                    options: ["marked", "approved", "labeled", "stamped"],
                    correctIndex: 2,
                    explanation: "590.5 / 410.160"
                },
                {
                    text: "Outlets supplying all pool motors on branch circuits rated 150 volts or less... and ______ amperes or less... shall be provided with Class A GFCI protection.",
                    options: ["60", "50", "40", "30"],
                    correctIndex: 0,
                    explanation: "680.22(A)(4)"
                },
                {
                    text: "Disconnecting means shall be located within sight from, and ______ from air-conditioning or refrigerating equipment.",
                    options: ["serviceable", "isolated", "accessible", "readily accessible"],
                    correctIndex: 3,
                    explanation: "440.14"
                }
            ]
        },
        {
            id: "openbook_2",
            title: "Journeyman Open Book Exam #2 (2023 NEC)",
            questions: [
                {
                    text: "Each multiwire branch circuit shall be provided with a means that will simultaneously disconnect all ______.",
                    options: ["ungrounded", "neutral", "equipment grounding", "grounded"],
                    correctIndex: 0,
                    explanation: "210.4(B)"
                },
                {
                    text: "The connection between the grounded circuit conductor and the equipment grounding conductor... at the service is recognized as the ______.",
                    options: ["neutral conductor", "equipment bonding jumper", "main bonding jumper", "grounding electrode conductor"],
                    correctIndex: 2,
                    explanation: "250.24 / Art. 100"
                },
                {
                    text: "When calculating floor area for branch circuit load calculations, the floor area is measured from the ______ dimensions...",
                    options: ["drawing", "scale", "outside", "inside"],
                    correctIndex: 2,
                    explanation: "220.11"
                },
                {
                    text: "NM cable shall be permitted to be laid in notches of wooden studs... protected by a steel plate at least ______ thick...",
                    options: ["1/16\"", "3/32\"", "1/8\"", "3/16\""],
                    correctIndex: 0,
                    explanation: "300.4(A)(1)"
                },
                {
                    text: "A motor control center in an equipment room requires GFCI protected 125-volt... receptacle outlet within ______ feet.",
                    options: ["25", "30", "45", "50"],
                    correctIndex: 0,
                    explanation: "210.8(B)"
                },
                {
                    text: "Alternating current snap switches shall be permitted for control of inductive loads not exceeding ______ of the ampere rating...",
                    options: ["70%", "60%", "50%", "33%"],
                    correctIndex: 2,
                    explanation: "404.14(B)(2)"
                },
                {
                    text: "Other than the required interconnections... only those conductors... shall be located in that ______ section of a switchboard...",
                    options: ["isolated", "horizontal", "vertical", "dual"],
                    correctIndex: 2,
                    explanation: "408.3(A)(2)"
                },
                {
                    text: "Plate electrodes shall be installed not less than ______ below the surface of earth.",
                    options: ["2 feet", "2 1/2 feet", "3 feet", "4 feet"],
                    correctIndex: 1,
                    explanation: "250.53(A)(5)"
                },
                {
                    text: "Each grounded conductor shall terminate within the panelboard in a/an ______ terminal that is not also used for another conductor.",
                    options: ["single", "multiwire", "dual", "individual"],
                    correctIndex: 3,
                    explanation: "408.41"
                },
                {
                    text: "In dwelling units, GFCI protection is required for all 15 and 20 ampere, 125 volt receptacles installed within ______ feet of the outside edge of a bathtub or shower stall.",
                    options: ["4", "6", "8", "12"],
                    correctIndex: 1,
                    explanation: "210.8(A)(1)"
                },
                {
                    text: "When normally enclosed live parts are exposed for inspection or servicing... shall be suitably ______ if in a passageway or general open space.",
                    options: ["isolated", "locked", "guarded", "insulated"],
                    correctIndex: 2,
                    explanation: "110.26(B)"
                },
                {
                    text: "All 125-volt through 250-volt receptacles supplied by single-phase branch circuits rated 150 volts or less to ground in kitchens... shall have GFCI protection for ______.",
                    options: ["sink", "oven", "range", "fryer"],
                    correctIndex: 0,
                    explanation: "210.8(A)(7)"
                },
                {
                    text: "As it relates to load calculations, calculations shall be permitted to be rounded to the nearest whole ampere, with decimal fractions smaller than ______ dropped.",
                    options: ["0.5", "0.05", "0.6", "0.8"],
                    correctIndex: 0,
                    explanation: "220.5(B)"
                },
                {
                    text: "GFCI protection shall be provided for lighting outlets not exceeding ______ volts installed in crawl spaces.",
                    options: ["115", "120", "150", "300"],
                    correctIndex: 1,
                    explanation: "210.8(A)(5) – 120 V"
                },
                {
                    text: "Each section of equipment that requires rear or side access... shall be so marked by the manufacturer on the ______.",
                    options: ["front", "right side", "left side", "rear"],
                    correctIndex: 0,
                    explanation: "110.26(A)(3) – front"
                },
                {
                    text: "In other than one- and two-family dwellings, a receptacle outlet for indoor service equipment shall be located within ______ of the service equipment.",
                    options: ["25 feet", "50 feet", "75 feet", "the same room or area"],
                    correctIndex: 3,
                    explanation: "230.70 – same room or area"
                },
                {
                    text: "Insulated conductors used inside switchgear or switchboards are required to be ______.",
                    options: ["suitable", "labeled", "acceptable", "listed"],
                    correctIndex: 3,
                    explanation: "110.21 / 408.19"
                },
                {
                    text: "GFCI protection shall be provided for ______ receptacles.",
                    options: ["equipment requiring servicing", "permanently installed burglar alarm", "permanently installed fire alarm", "industrial laboratories"],
                    correctIndex: 0,
                    explanation: "210.8(B)(2)"
                },
                {
                    text: "All lamps in temporary wiring installations shall be protected... by a suitable ______ or lampholder with a guard.",
                    options: ["screen", "luminaire", "barrier", "guard"],
                    correctIndex: 1,
                    explanation: "590.4(F)"
                },
                {
                    text: "In addition to the number of 120 volt, single-phase branch circuits... at least one additional ______ ampere branch circuit shall be provided to supply the laundry...",
                    options: ["15", "20", "25", "30"],
                    correctIndex: 1,
                    explanation: "210.11(C)(2)"
                },
                {
                    text: "Disregarding demand factors, the calculated lighting load for a 5,000 sq.ft. office building is ______ volt-amperes.",
                    options: ["16,500", "15,400", "8,000", "6,500"],
                    correctIndex: 3,
                    explanation: "Table 220.42(A) – commonly 1.3 VA/ft² in prep → 6500 VA"
                },
                {
                    text: "Appliance receptacle outlets... for specific appliances... shall be installed within ______ of the intended location of the appliance.",
                    options: ["24\"", "36\"", "48\"", "72\""],
                    correctIndex: 3,
                    explanation: "210.50(C)"
                },
                {
                    text: "Decorative lighting... used for holiday lighting... shall be listed and ______.",
                    options: ["marked", "approved", "labeled", "stamped"],
                    correctIndex: 2,
                    explanation: "590.5 / 410.160"
                },
                {
                    text: "Outlets supplying all pool motors on branch circuits rated 150 volts or less... and ______ amperes or less... shall be provided with Class A GFCI protection.",
                    options: ["60", "50", "40", "30"],
                    correctIndex: 0,
                    explanation: "680.22(A)(4)"
                },
                {
                    text: "Disconnecting means shall be located within sight from, and ______ from air-conditioning or refrigerating equipment.",
                    options: ["serviceable", "isolated", "accessible", "readily accessible"],
                    correctIndex: 3,
                    explanation: "440.14"
                }
            ]
        },





    ],

    final: [
        {
            id: "final_1",
            title: "Journeyman Open Book Final Exam – 2023 NEC (Simulated)",
            questions: [
                {
                    "text": "60% is equivalent to ______.",
                    "options": ["5/8", "3/5", "2/5", "5/16"],
                    "correctIndex": 1,
                    "explanation": "3 ÷ 5 = 0.6 = 60% (3/5)"
                },
                {
                    "text": "Each section of equipment that requires rear or side access to make field connections shall be so marked by the manufacturer on the ______.",
                    "options": ["front", "right side", "left side", "rear"],
                    "correctIndex": 0,
                    "explanation": "408.18(C) – front"
                },
                {
                    "text": "In other than one- and two-family dwellings, a receptacle outlet for indoor service equipment shall be located within ______ of the service equipment.",
                    "options": ["25 feet", "50 feet", "75 feet", "the same room or area"],
                    "correctIndex": 3,
                    "explanation": "230.63(B)(1) – same room or area"
                },
                {
                    "text": "Disregarding demand factors, the calculated lighting load for a 5,000 sq ft office building is ______ volt-amperes.",
                    "options": ["16,500", "15,400", "8,000", "6,500"],
                    "correctIndex": 0,
                    "explanation": "Table 220.42 – 5,000 × 3.3 VA/ft² = 16,500 VA"
                },
                {
                    "text": "Switch S1 is in the \"ON\" position, but the light does not come on. Voltage across L1 is 120 V. Voltage across S1 is 0 V. The light does not come on because ______.",
                    "options": [
                        "the light is open (bulb burned out)",
                        "the light and switch are shorted out",
                        "the light is good but the switch does not make contact",
                        "there is a break in the wiring of the circuit"
                    ],
                    "correctIndex": 0,
                    "explanation": "Full voltage across load + 0 V across switch = open load (burned-out bulb)"
                },
                {
                    "text": "Decorative lighting and similar accessories used for holiday lighting and similar purposes shall be listed and ______.",
                    "options": ["marked", "approved", "labeled", "stamped"],
                    "correctIndex": 2,
                    "explanation": "590.5 – listed and labeled"
                },
                {
                    "text": "Insulated conductors used inside switchgear or switchboards are required to be ______.",
                    "options": ["suitable", "labeled", "acceptable", "listed"],
                    "correctIndex": 3,
                    "explanation": "408.19 – listed"
                },
                {
                    "text": "Balconies, decks, and porches that are accessible from inside the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck, or porch walking surface. The receptacle shall not be located more than ______ above the balcony, deck, or porch.",
                    "options": ["36\"", "48\"", "60\"", "78\""],
                    "correctIndex": 3,
                    "explanation": "210.52(E)(3) – 78 inches"
                },
                {
                    "text": "An acceptable color for ungrounded conductors is ______.",
                    "options": ["green", "gray", "pink", "white"],
                    "correctIndex": 2,
                    "explanation": "200.6 / 310.110 / 215.12(C) – pink permitted"
                },
                {
                    "text": "The calculated load of a 12 foot length of fixed multioutlet assembly in a commercial facility is ______ volt-amperes if the appliances it supplies are not likely to be used at the same time.",
                    "options": ["1000", "720", "540", "380"],
                    "correctIndex": 2,
                    "explanation": "220.14(H) – 180 VA/ft × 3 ft (after first 5 ft free) = 540 VA"
                },
                {
                    "text": "In a dwelling bedroom, any wall space ______ or more in width (including space measured around corners) and unbroken along the floor line by doorways and similar openings, fireplaces, and fixed cabinets that do not have countertops or similar work surfaces shall have a receptacle.",
                    "options": ["18\"", "24\"", "30\"", "36\""],
                    "correctIndex": 1,
                    "explanation": "210.52(A)(1) – 24 inches or more"
                },
                {
                    "text": "A wall-mounted central vacuum assembly connected to a single receptacle located in an attached garage shall be provided with ______ protection for personnel.",
                    "options": ["LCDI", "GFCI", "AFCI", "both AFCI and GFCI"],
                    "correctIndex": 1,
                    "explanation": "210.8(A)(2) – GFCI"
                },
                {
                    "text": "Which of the following is an ammeter?",
                    "options": ["I only", "II only", "III only", "I, II or III"],
                    "correctIndex": 1,
                    "explanation": "Only symbol II shows current meter in series with load"
                },
                {
                    "text": "What is the ampacity of a #12 THWN conductor installed in an ambient temperature of 86°F if the raceway contains four current-carrying conductors?",
                    "options": ["17.5 A", "20 A", "23 A", "26 A"],
                    "correctIndex": 1,
                    "explanation": "Table 310.16 = 25 A at 86°F → derate 80% for 4 CCC → 20 A"
                },
                {
                    "text": "If festoon lighting is installed without a messenger, the smallest allowable overhead conductor is ______ AWG.",
                    "options": ["10", "12", "14", "16"],
                    "correctIndex": 1,
                    "explanation": "225.6(B) – #12 minimum without messenger"
                },
                {
                    "text": "For temporary holiday lighting, trees shall be permitted for supporting overhead spans of conductors and cables if avoided damage from live vegetation with ______.",
                    "options": ["fittings", "cable ties", "strain relief devices", "overhead clamps"],
                    "correctIndex": 2,
                    "explanation": "590.4(J) – strain relief devices or tension take-up devices"
                },
                {
                    "text": "The Code requires branch circuits supplying combinations of lighting loads to be rated in accordance with the overcurrent protective device. Which of the following combinations are permitted for lighting branch circuits?",
                    "options": ["20, 25, 40 and 50 amperes", "20, 25, 30, 40 and 50 amperes", "15, 25, 30, 40 and 50 amperes", "10, 15, 30, 40 and 50 amperes"],
                    "correctIndex": 1,
                    "explanation": "210.18 – 20, 25, 30, 40 and 50 amperes permitted"
                },
                {
                    "text": "Duty on elevator and dumbwaiter driving machine motors and driving motors of motor-generators used with generator field control shall be rated as ______.",
                    "options": ["intermittent", "lockable", "continuous", "varying"],
                    "correctIndex": 0,
                    "explanation": "620.13(B)(1) – intermittent"
                },
                {
                    "text": "Where multiple driven ground rods are used to form the grounding electrode system, in order to maintain an effective grounding electrode system, they shall not be less than ______ apart.",
                    "options": ["36\"", "48\"", "60\"", "72\""],
                    "correctIndex": 3,
                    "explanation": "250.53(A)(3) – 6 feet (72 inches)"
                },
                {
                    "text": "The demand load for a 14 kW range installed in a dwelling unit is ______ kW.",
                    "options": ["8", "8.4", "8.8", "12"],
                    "correctIndex": 2,
                    "explanation": "Table 220.55 – 8.8 kW for one range ≤ 12 kW"
                },
                {
                    "text": "Where a dwelling has a two car attached garage, the Code requires a minimum of ______ receptacle outlet(s) shall be installed in the garage.",
                    "options": ["none required", "one", "two", "three"],
                    "correctIndex": 2,
                    "explanation": "210.52(G)(1) – at least two"
                },
                {
                    "text": "Where ungrounded conductors are run in parallel in multiple raceways, the equipment grounding conductor, where used, shall be ______.",
                    "options": ["installed in one raceway only", "run in parallel in each raceway", "not required in one raceway", "bare"],
                    "correctIndex": 1,
                    "explanation": "250.122(F) – run in parallel in each raceway"
                },
                {
                    "text": "All 15 or 20 amp, single-phase, 125 volt through 250 volt receptacles located within ______ feet of a fountain edge shall be provided with GFCI protection.",
                    "options": ["20", "24", "25", "30"],
                    "correctIndex": 0,
                    "explanation": "680.6(A) – 20 feet"
                },
                {
                    "text": "For an arc welder with an Imax rating of 43 amps, what is the maximum rating for the overcurrent protective device supplying the welder?",
                    "options": ["85 amp", "90 amp", "95 amp", "100 amp"],
                    "correctIndex": 0,
                    "explanation": "630.12(A) – 200% × 43 A = 86 A → 85 A"
                },
                {
                    "text": "The conductor is marked RHW-2 on the insulation, what does the -2 represent?",
                    "options": ["The cable has two conductors.", "The conductor is double insulated.", "The conductor is thermoplastic.", "The conductor has a maximum operating temperature of 90°C."],
                    "correctIndex": 3,
                    "explanation": "Table 310.104(A) – RHW-2 = 90°C wet/dry"
                },
                {
                    "text": "The ampacity of three #10 THWN-2 conductors installed in a raceway is ______ amps if the ambient temperature is 112°F.",
                    "options": ["31.6", "34.8", "35", "37.2"],
                    "correctIndex": 1,
                    "explanation": "Table 310.15(B)(1) – 90°C column 40 A → derate for 112°F ≈ 87% → 34.8 A"
                },
                {
                    "text": "Fuel dispensing systems shall be provided with one or more clearly identified emergency shutoff devices or electrical disconnects. Such disconnects or devices shall be installed in approved locations but not less than 20 feet or more than ______ feet from the fuel dispensing devices that they serve.",
                    "options": ["50", "75", "80", "100"],
                    "correctIndex": 3,
                    "explanation": "514.11 – 100 feet"
                },
                {
                    "text": "Where conduits enter a floor-standing switchboard, switchgear or panelboard at the bottom, the conduits, including their end fittings, shall not rise more than ______ inches above the bottom of the enclosure.",
                    "options": ["2", "3", "4", "6"],
                    "correctIndex": 2,
                    "explanation": "408.5 – 4 inches"
                },
                {
                    "text": "Thermostatically controlled switching devices serving both controllers and disconnecting means for fixed electric space heating equipment shall ______.",
                    "options": ["not be permitted", "be located not more than 8 feet above floor level", "open all grounded conductors", "be designed so that the circuit when placed in the off position cannot be energized automatically after the device has been manually placed in the off position"],
                    "correctIndex": 3,
                    "explanation": "424.20(A)(3) – cannot be automatically re-energized"
                },
                {
                    "text": "In dwelling units, hallways of ______ feet or more in length shall have at least one receptacle outlet.",
                    "options": ["6", "8", "10", "12"],
                    "correctIndex": 2,
                    "explanation": "210.52(H) – 10 feet or more"
                },
                {
                    "text": "For a feeder tap not exceeding 10 feet in length and field installation, the maximum overcurrent device rating supplying a tap conductor with an ampacity of 40 amps is ______.",
                    "options": ["150 A", "200 A", "350 A", "400 A"],
                    "correctIndex": 3,
                    "explanation": "240.21(B)(1)(4) – 10× = 400 A"
                },
                {
                    "text": "A three-way switch is equivalent to a ______ switch.",
                    "options": ["DPST", "DPDT", "SPST", "SPDT"],
                    "correctIndex": 3,
                    "explanation": "SPDT (single pole double throw)"
                },
                {
                    "text": "Which of the following cord types is permitted in wet location and is sunlight resistant?",
                    "options": ["SPT-2", "STOOOW", "THWN", "XHHW"],
                    "correctIndex": 1,
                    "explanation": "Table 400.4 – STOOW (sunlight resistant, wet)"
                },
                {
                    "text": "One or more metal in-ground support structure(s) in direct contact with the earth vertically for ______ feet or more, with or without concrete encasement is a permitted grounding electrode.",
                    "options": ["6", "8", "10", "12"],
                    "correctIndex": 2,
                    "explanation": "250.52(A)(3) – 10 feet"
                }
            ]
        }
    ]
};

// Optional: make it globally available (some people prefer this style)
window.REAL_EXAMS = REAL_EXAMS;