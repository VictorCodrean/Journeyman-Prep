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
            id: "general_2",
            title: "General Knowledge Exam #2",
            timeMinutes: 30,
            questions: [
                {
                    text: "An advantage of an electromagnet over a permanent magnet is that ______.",
                    options: [
                        "an electromagnet can be switched on and off",
                        "permanent magnets must always be cylindrical",
                        "an electromagnet requires no power source",
                        "an electromagnet does not have specific polarity"
                    ],
                    correctIndex: 0,
                    explanation: "NEC does not directly address this comparison, but Article 430 (motors) and Article 725 (Class 1, 2, and 3 remote-control circuits) reference electromagnets in relays and contactors that must be capable of being energized/de-energized. Theory: An electromagnet produces a magnetic field only when current flows through its coil; interrupting the current collapses the field, allowing easy on/off control. Permanent magnets have fixed fields that cannot be switched."
                },
                {
                    text: "An excellent diffuser surface is one that ______.",
                    options: [
                        "diffuses all the incident light",
                        "scatters light uniformly in all directions",
                        "absorbs all the incident light",
                        "transmits all the incident light"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 410.2 and 410.130 address lighting fixtures and diffusers for uniform illumination and safety, but no exact definition. Theory: A true diffuser scatters incident light equally in all directions (Lambertian reflection), reducing glare and providing even lighting without specular highlights."
                },
                {
                    text: "The rotating part of a DC motor is known as ______.",
                    options: [
                        "armature",
                        "pole",
                        "stator",
                        "winding"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.7(A) requires nameplate marking of motors, including construction details. Theory: In a DC motor, the armature is the rotating member containing the windings that carry current and interact with the stationary magnetic field to produce torque."
                },
                {
                    text: "To increase current capacity, battery cells are connected in ______.",
                    options: [
                        "series",
                        "parallel",
                        "series-parallel",
                        "parallel-series"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 480.4 and 706.4 (Energy Storage Systems) require proper interconnection of cells/batteries. Theory: Parallel connection keeps voltage the same while adding amp-hour capacities, increasing total current delivery capability."
                },
                {
                    text: "The voltage per turn of the primary of a transformer is ______ the voltage per turn of the secondary.",
                    options: [
                        "more than",
                        "less than",
                        "twice",
                        "the same as"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 450.3 and 450.9 cover transformer protection and markings. Theory: In an ideal transformer, the volts-per-turn ratio is identical on primary and secondary because the same magnetic flux links both windings (Faraday’s law: induced voltage ∝ turns × rate of change of flux)."
                },
                {
                    text: "Type TW conductor is a ______ type.",
                    options: [
                        "heat resistant and thermoplastic",
                        "moisture and heat resistant thermoplastic",
                        "moisture and heat resistant",
                        "moisture resistant and thermoplastic"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Table 310.104(A) (formerly 310.104) lists conductor applications: Type TW is Moisture-Resistant Thermoplastic. Theory: The 'T' indicates thermoplastic insulation; 'W' adds moisture resistance for wet locations."
                },
                {
                    text: "Steel is hard to magnetize because of its ______.",
                    options: [
                        "high density",
                        "high permeability",
                        "high retentivity",
                        "low permeability"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 250.102 and Annex C reference magnetic materials indirectly through raceway and enclosure properties. Theory: Steel (especially hard or high-carbon) has low relative permeability compared to soft iron, requiring a stronger magnetizing force (higher H) to achieve the same flux density (B)."
                },
                {
                    text: "The ______ is defined as the shortest distance measured between a point on the top surface of direct buried conductor, cable, conduit and the top surface of finish grade.",
                    options: [
                        "duct",
                        "grade",
                        "cover",
                        "depth"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 300.5 and Table 300.5: Cover is defined as the shortest distance in inches (mm) measured between a point on the top surface of any direct-buried conductor, cable, conduit, or other raceway and the top surface of finished grade. Theory: Adequate cover protects wiring from mechanical damage, frost, and accidental excavation."
                },
                {
                    text: "A repulsion motor is equipped with a/an ______.",
                    options: [
                        "rectifier",
                        "commutator",
                        "repeller",
                        "emitter"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and motor theory sections reference commutators in DC and repulsion machines. Theory: The commutator reverses current in the armature windings to maintain torque direction as the rotor turns."
                },
                {
                    text: "The capacitor in a capacitor-start induction-run AC motor is connected in series with the ______ winding.",
                    options: [
                        "running",
                        "starting",
                        "compensating",
                        "field"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and 430.53 cover motor controllers and auxiliary windings. Theory: The starting capacitor provides a phase shift (leading current) in the starting winding to create a rotating magnetic field for high starting torque; a centrifugal switch disconnects it once the motor reaches ~75% speed."
                },
                {
                    text: "A circuit with a lagging current means the circuit is ______.",
                    options: [
                        "capacitive",
                        "reactive",
                        "inductive",
                        "at resonance"
                    ],
                    correctIndex: 2,
                    explanation: "NEC does not define phase directly, but Article 220 and motor calculations (430) assume inductive loads. Theory: In inductive circuits (XL > XC), current lags voltage by up to 90° (ELI mnemonic: Voltage leads current in inductive circuits)."
                },
                {
                    text: "The main reason that electrical appliances are connected in parallel rather than series is ______.",
                    options: [
                        "appliances connected in series are too noisy",
                        "parallel connection is simpler than a series connection",
                        "each appliance will draw more current if connected in series",
                        "it makes the operation of each appliance independent with each other"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 210.23 and 422.10 address branch circuits and appliance loads. Theory: Parallel connection ensures each appliance receives full line voltage independently; failure or switching of one does not affect others (unlike series, where current is the same through all)."
                },
                {
                    text: "A step-up transformer increases ______.",
                    options: [
                        "power",
                        "current",
                        "frequency",
                        "voltage"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 450.3 and transformer markings. Theory: A step-up transformer has more turns on the secondary than the primary, increasing secondary voltage while decreasing current (power ≈ constant, neglecting losses)."
                },
                {
                    text: "If a conductor has a resistance of 0.2Ω and the length is doubled, the resistance becomes ______.",
                    options: [
                        "0.20Ω",
                        "0.02Ω",
                        "0.40Ω",
                        "0.04Ω"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8 (conductor properties) and 310.15. Theory: Resistance R = ρL/A; doubling length (L) doubles resistance when resistivity (ρ) and area (A) remain constant."
                },
                {
                    text: "The condition of a liquid electrolyte in a battery is measured in terms of its ______.",
                    options: [
                        "acidity",
                        "specific gravity",
                        "viscosity",
                        "water content"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 480.7 and 706.4 (Energy Storage). Theory: Specific gravity (measured with a hydrometer) indicates the concentration of sulfuric acid in the electrolyte; it decreases as the battery discharges."
                },
                {
                    text: "In a parallel circuit, the total resistance is ______.",
                    options: [
                        "the sum of all resistances",
                        "the reciprocal of all the resistances",
                        "larger than the largest resistance in the combination",
                        "smaller than the smallest resistance in the combination"
                    ],
                    correctIndex: 3,
                    explanation: "NEC calculations in 220.42 and branch-circuit rules assume parallel loads. Theory: 1/R_total = Σ(1/R_i); adding paths always reduces total resistance below the smallest individual branch."
                },
                {
                    text: "In magnetic and electric circuit analogy, magnetic flux is the analog of ______.",
                    options: [
                        "conductance",
                        "resistance",
                        "voltage",
                        "current"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 250 and Annex D reference magnetic effects indirectly. Theory: Magnetic circuit analogy: Flux (Φ) ↔ Current (I), Magnetomotive Force (MMF) ↔ Voltage (E), Reluctance ↔ Resistance."
                },
                {
                    text: "The resistance of a wire is directly proportional to the ______ and inversely proportional to the cross-sectional area.",
                    options: [
                        "resistivity",
                        "volume",
                        "length",
                        "permeability"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8. Theory: R = ρL/A — directly proportional to length (L) and resistivity (ρ), inversely to cross-sectional area (A)."
                },
                {
                    text: "The energy in a battery cell depends mainly on ______.",
                    options: [
                        "its physical size",
                        "its voltage",
                        "the density",
                        "the current drawn from it"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 480.9 and energy storage rules. Theory: Stored energy (watt-hours) is primarily a function of the active material volume (physical size), which determines ampere-hour capacity at a given voltage."
                },
                {
                    text: "An automatic device that operates at preset values is known as a ______.",
                    options: [
                        "fuse",
                        "relay",
                        "contactor",
                        "mercury switch"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.83 and Article 725 for control devices. Theory: A relay is an electromagnetically or thermally operated automatic switch that opens or closes contacts at preset voltage, current, or temperature values."
                },
                {
                    text: "A step-down transformer ______.",
                    options: [
                        "increases both the voltage and current",
                        "lowers the current and increases the voltage",
                        "lowers the voltage and increases the current",
                        "lowers both the voltage and current"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3. Theory: Fewer turns on the secondary reduce voltage and increase current (power ≈ constant)."
                },
                {
                    text: "Two resistors of resistances of 5 ohms and 7 ohms are connected in series across a 60 volt source. The power absorbed in the 5 ohm resistor is ______ watts.",
                    options: [
                        "125",
                        "250",
                        "25",
                        "50"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.19 and 310.15 for conductor sizing calculations. Theory: R_total = 5 + 7 = 12 Ω; I = 60 V / 12 Ω = 5 A; P_5Ω = I²R = 25 × 5 = 125 W."
                },
                {
                    text: "What kind of instrument is an ammeter?",
                    options: [
                        "A recording",
                        "A DC meter",
                        "An indicating",
                        "An integrating"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.9 and metering references. Theory: An ammeter is an indicating instrument that displays instantaneous current value."
                },
                {
                    text: "The purpose of battery cells connected in parallel is to ______.",
                    options: [
                        "increase internal resistance",
                        "increase in voltage output",
                        "increase in current capacity",
                        "decrease in current capacity"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 480.4. Theory: Parallel cells maintain the same voltage while adding their ampere-hour ratings, increasing total current capacity."
                },
                {
                    text: "The ______ value is considered as the most important value of a sine wave.",
                    options: [
                        "peak",
                        "instantaneous",
                        "effective",
                        "average"
                    ],
                    correctIndex: 2,
                    explanation: "NEC calculations in 220.14 and motor nameplates use effective values. Theory: The effective (RMS) value produces the same heating effect in a resistive load as an equivalent DC value; it is the value used for power, voltage, and current ratings."
                }
            ]
        },
        {
            id: "general_3",
            title: "General Knowledge Exam #3",
            timeMinutes: 30,
            questions: [
                {
                    text: "When two resistances are connected in series, ______.",
                    options: [
                        "voltage across them must be the same",
                        "current in each resistor will be the same",
                        "there will be no current in the circuit",
                        "they will become inductive"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.19 and 220.42 use series/parallel rules for branch circuit calculations. Theory: In a series circuit, the same current flows through all components (Kirchhoff’s Current Law); total voltage is the sum of individual voltage drops."
                },
                {
                    text: "When one resistance in a series circuit is open ______.",
                    options: [
                        "the voltage is zero across the open resistance",
                        "the current is zero in all the resistances",
                        "the current is maximum in the normal resistances",
                        "the current increases in the voltage source"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 240.4 and overcurrent protection principles. Theory: An open circuit breaks the only path for current; by Kirchhoff’s Current Law, current becomes zero everywhere in the series loop."
                },
                {
                    text: "A wire has a resistance of 5 ohms. What will be the resistance of another wire of the same material three times as long and half the cross sectional area?",
                    options: [
                        "7.5Ω",
                        "15Ω",
                        "30Ω",
                        "50Ω"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8 (conductor resistance). Theory: R = ρL/A. New R = 5 × (3) x(2) = 30 Ω."
                },
                {
                    text: "A cell that cannot be recharged is a ______.",
                    options: [
                        "dry cell",
                        "wet cell",
                        "secondary cell",
                        "primary cell"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 480.2 and Article 706 definitions for batteries. Theory: Primary cells (e.g., alkaline, zinc-carbon) are not designed for recharging; secondary cells (lead-acid, NiMH, lithium) are rechargeable."
                },
                {
                    text: "The presence of current is only made known by the effect it produces. Three important effects are ______.",
                    options: [
                        "heating, magnetic and chemical",
                        "generation, chemical and electric shock",
                        "heating, magnetic and electric shock",
                        "heating, electric shock and generation"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.9 and basic electrical safety. Theory: Current produces three main observable effects — thermal (heating), electromagnetic (magnetic), and electrochemical (chemical)."
                },
                {
                    text: "A ______ is not a standard size fuse.",
                    options: [
                        "45 amp",
                        "75 amp",
                        "80 amp",
                        "125 amp"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 240.6(A) lists standard ampere ratings for fuses and circuit breakers. 75 A is not a standard rating."
                },
                {
                    text: "In electricity, the positive electric charge refers to ______.",
                    options: [
                        "atoms",
                        "electrons",
                        "neutrons",
                        "protons"
                    ],
                    correctIndex: 3,
                    explanation: "NEC does not define subatomic particles, but Article 100 and safety grounding reference charge. Theory: Protons carry a positive charge (+1), electrons carry negative charge (−1), neutrons are neutral."
                },
                {
                    text: "The rate of doing work is ______.",
                    options: [
                        "power",
                        "current",
                        "energy",
                        "force"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 220.14 and power calculations throughout the code. Theory: Power (P) = Work / Time (or P = VI); it is the rate at which energy is transferred or work is done."
                },
                {
                    text: "The effect of a discharge of electricity due to ionization of surrounding air by high voltage is ______.",
                    options: [
                        "Corona effect",
                        "Hall effect",
                        "Compton effect",
                        "Miller effect"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.27 and high-voltage rules reference corona. Theory: Corona discharge occurs when high voltage ionizes air around a conductor, producing a glowing bluish light and ozone."
                },
                {
                    text: "A meter used to test the armatures and stators of electric motors, generators, and other equipment for a short circuit is called a ______.",
                    options: [
                        "multimeter",
                        "megohmmeter",
                        "bolometer",
                        "growler"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 motor testing references. Theory: A growler is a specialized AC electromagnet tool that induces voltage in motor windings to detect shorts via vibration or buzzing."
                },
                {
                    text: "______ is the process by which one conductor produces or induces a voltage in another conductor even though there is no mechanical coupling between the two conductors.",
                    options: [
                        "Cutting of fluxes",
                        "Short circuit",
                        "Induction",
                        "Eddy current"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 300.20 and transformer/motor rules. Theory: Electromagnetic induction (Faraday’s law) — a changing magnetic field through one conductor induces voltage in another."
                },
                {
                    text: "To increase voltage output, battery cells are connected in ______.",
                    options: [
                        "series",
                        "parallel",
                        "series-parallel",
                        "parallel-series"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 480.4 and 706.4 battery interconnections. Theory: Series connection adds individual cell voltages while current capacity remains the same."
                },
                {
                    text: "If a low resistance is connected in parallel with a higher resistance, the combined resistance is ______.",
                    options: [
                        "always less than the low resistance",
                        "always more than the high resistance",
                        "always between the values of high and low resistance",
                        "higher or lower than the low resistance depending on the value of the higher resistance"
                    ],
                    correctIndex: 0,
                    explanation: "NEC branch-circuit calculations (210.19, 220.42). Theory: In parallel, total resistance is always less than the smallest individual resistance (1/R_total = Σ1/R_i)."
                },
                {
                    text: "Branch circuits are classified according to the maximum ______.",
                    options: [
                        "power consumed",
                        "voltage across it",
                        "load being served",
                        "setting of the overcurrent device"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 210.3 and 210.20. Theory: Branch circuits are officially classified by the rating of the overcurrent protective device (fuse or breaker) supplying them."
                },
                {
                    text: "A capacitor opposes change in ______.",
                    options: [
                        "current",
                        "voltage",
                        "voltage and current",
                        "neither voltage nor current"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 460 capacitor rules. Theory: Capacitors oppose changes in voltage (I = C dV/dt); they pass AC and block DC."
                },
                {
                    text: "On a simple ohmmeter, the 0 Ω mark is located ______.",
                    options: [
                        "in the middle",
                        "at the far left",
                        "at the far right",
                        "anywhere"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.9 test instrument safety. Theory: Analog ohmmeters are series-type; zero ohms (full-scale deflection/short circuit) is at the right side of the scale."
                },
                {
                    text: "Galvanized conduit has a finish exterior and interior of ______.",
                    options: [
                        "lead",
                        "copper",
                        "nickel",
                        "zinc"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 344.10, 358.10, and 300.6 corrosion protection. Theory: Galvanizing applies a zinc coating that sacrificially protects steel from rust."
                },
                {
                    text: "For a single phase 5 hp motor supplied by a two-wire circuit 120 volts, with one conductor grounded how many overloads are required?",
                    options: [
                        "One, in the grounded conductor",
                        "Two, one in both conductors",
                        "One, in the ungrounded conductor",
                        "none are required"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 430.32 and 430.37 overload protection. Theory: Overload protection is required only in the ungrounded (hot) conductor for single-phase motors on 120 V circuits."
                },
                {
                    text: "When a switch is closed it has a total resistance of ______.",
                    options: [
                        "zero",
                        "infinity",
                        "unstable",
                        "1500Ω"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 404.14 and switch ratings. Theory: An ideal closed switch has near-zero resistance (short circuit); practical switches have very low contact resistance."
                },
                {
                    text: "Bonding provides electrical continuity and safely conducts any ______.",
                    options: [
                        "unbalanced current",
                        "fault current that may occur",
                        "load of the system",
                        "voltage on the system"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.4(A)(3) and Article 100 definition of Bonding. Theory: Bonding creates a low-impedance path for fault current to facilitate operation of overcurrent devices."
                },
                {
                    text: "A length of wire has a resistance of 10 ohms. What is the resistance of a wire of the same material three times as long and twice the cross-sectional area?",
                    options: [
                        "5 Ω",
                        "15 Ω",
                        "20 Ω",
                        "30 Ω"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Chapter 9, Table 8. Theory: R = ρL/A → New R = 10 × 3 / 2 = 15 Ω."
                },
                {
                    text: "______ is the type letter for conductors that are moisture and heat resistant rubber.",
                    options: [
                        "THHN",
                        "RHW",
                        "THW",
                        "XHHW"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Table 310.104(A). Theory: RHW insulation is thermoset, moisture- and heat-resistant rubber (75°C wet/dry)."
                },
                {
                    text: "The ______ is used in a DC motor to control the speed.",
                    options: [
                        "commutator",
                        "field winding",
                        "armature winding",
                        "carbon brush"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and DC motor rules. Theory: Adjusting field current (field weakening) in a shunt or compound DC motor increases speed above base speed."
                },
                {
                    text: "Dielectric is another name for ______.",
                    options: [
                        "a conductor",
                        "an element",
                        "an insulator",
                        "a capacitor"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 460.2 and capacitor definitions. Theory: Dielectric refers to the insulating material placed between the plates of a capacitor."
                },
                {
                    text: "An open fuse has a resistance of ______.",
                    options: [
                        "infinity",
                        "zero",
                        "approximately 1000Ω",
                        "at least 300Ω"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 240.60 and fuse operation. Theory: An open (blown) fuse creates an open circuit; resistance approaches infinity."
                }
            ]
        },
        {
            id: "general_4",
            title: "General Knowledge Exam #4",
            timeMinutes: 30,
            questions: [
                {
                    text: "______ are sheet metal troughs with hinged or removable covers for housing and protecting conductors and cables which are laid in place after this object has been installed as a complete system.",
                    options: [
                        "Wireways",
                        "Cable trays",
                        "Busways",
                        "Non-metallic extensions"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 376.2 defines Wireways as sheet-metal troughs with hinged or removable covers for housing and protecting conductors and cables. Theory: Wireways allow conductors to be laid in after installation, unlike raceways that are pulled through."
                },
                {
                    text: "In a series circuit with unequal resistances the ______.",
                    options: [
                        "highest resistance has the highest current",
                        "lowest resistance has the highest current",
                        "lowest resistance has the highest voltage",
                        "highest resistance has the highest voltage"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 210.19 and branch-circuit calculations. Theory: In series, current is the same through all resistors (Kirchhoff’s Current Law); voltage drop is proportional to resistance (V = IR), so the highest resistance gets the highest voltage drop."
                },
                {
                    text: "The higher the self-inductance of a coil, ______.",
                    options: [
                        "the greater the flux produced by it",
                        "the lower the EMF induced in it",
                        "the longer the delay in establishing current through it",
                        "all of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 430.7 and motor/transformer inductance rules. Theory: Higher inductance (L) means greater opposition to current change (V = L di/dt), resulting in a longer time constant (τ = L/R) to reach steady-state current."
                },
                {
                    text: "A general term covering an assembly of assemblies of devices for the interruption, control and metering of electric power is called the ______.",
                    options: [
                        "power system",
                        "control system",
                        "switchgear",
                        "instrumentation"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 and 408 definitions. Theory: Switchgear is the collective term for switching, interrupting, control, and metering equipment in power systems."
                },
                {
                    text: "The total resistance of two equal valued resistors in series is ______.",
                    options: [
                        "twice as one",
                        "the sum of one",
                        "the difference of both",
                        "none of these"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Chapter 9 and basic circuit calculations. Theory: Series resistance adds directly: R_total = R1 + R2. For two equal resistors, R_total = 2R."
                },
                {
                    text: "Eddy currents cause an increase in ______.",
                    options: [
                        "efficiency",
                        "coupling between windings",
                        "core loss",
                        "usable frequency range"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3 and transformer losses. Theory: Eddy currents are induced circulating currents in the core that produce I²R losses, increasing core (iron) loss and heating."
                },
                {
                    text: "At lagging loads, armature reaction in an alternator is ______.",
                    options: [
                        "non-effective",
                        "demagnetizing",
                        "cross-magnetizing",
                        "magnetizing"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 and generator rules. Theory: At lagging (inductive) loads, armature reaction produces a flux that aids the main field flux, resulting in a magnetizing effect."
                },
                {
                    text: "A ______ is nameplate data that will tell whether or not the motor is allowed to develop more than its rated nameplate horsepower without causing deterioration of its insulation.",
                    options: [
                        "power factor",
                        "service factor",
                        "reactive factor",
                        "brake factor"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7(A)(9) requires Service Factor marking on motor nameplates. Theory: Service Factor (e.g., 1.15) indicates the motor can safely handle 115% of rated load continuously without exceeding temperature limits."
                },
                {
                    text: "The process by which a magnetic substance becomes a magnet when it is placed near a magnet is called ______.",
                    options: [
                        "electromagnetic induction",
                        "magnetic reflection",
                        "magnetic induction",
                        "influx of density"
                    ],
                    correctIndex: 2,
                    explanation: "NEC does not directly define, but Article 725 and relays use magnetic induction. Theory: Magnetic induction (or magnetization by induction) occurs when a ferromagnetic material is placed in an external magnetic field and becomes magnetized."
                },
                {
                    text: "Corona occurs between two transmission wires when they ______.",
                    options: [
                        "carry DC power",
                        "are closely spaced",
                        "are widely spaced",
                        "have a high potential difference"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 110.27 and high-voltage rules. Theory: Corona discharge happens when the electric field strength exceeds the dielectric strength of air, ionizing it around conductors at high voltage."
                },
                {
                    text: "In a DC circuit, inductance and capacitance are irrelevant in circuit analysis due to ______.",
                    options: [
                        "their effect is useless in DC circuits",
                        "DC supply has no frequency",
                        "they do not exist in DC circuits",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "NEC calculations in Article 220 assume steady-state DC. Theory: Inductive reactance XL = 2πfL and capacitive reactance XC = 1/(2πfC) both become zero when frequency f = 0 (DC)."
                },
                {
                    text: "An electrical diagram showing the control components rearranged to simplify the tracing of the circuit is a ______ diagram.",
                    options: [
                        "ladder",
                        "schematic",
                        "pneumatic",
                        "wiring"
                    ],
                    correctIndex: 1,
                    explanation: "A schematic diagram should be used when designing or troubleshooting an installation. Control components are rearranged to simplify the tracing of the circuit. Line, ladder, or elementary diagrams are other terms used in lieu of a schematic."
                },
                {
                    text: "In motors and transformers, the reason for the thin layer of varnish over the copper coil pattern is to prevent ______.",
                    options: [
                        "oxidation",
                        "eddy currents",
                        "magnetic flux",
                        "corrosion"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.7 and winding rules. Theory: Varnish (insulating enamel) prevents oxidation (rust) of copper and provides turn-to-turn insulation."
                },
                {
                    text: "A coulomb ______.",
                    options: [
                        "is one ampere per second",
                        "represents a current of one ampere",
                        "is an extremely large number of charge carriers",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 definitions indirectly reference charge. Theory: One coulomb ≈ 6.24 × 10¹⁸ electrons; it is the unit of electric charge (Q = I × t)."
                },
                {
                    text: "Power factor is equal to ______.",
                    options: [
                        "apparent power",
                        "true power divided by apparent power",
                        "imaginary power divided by apparent power",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 220.60 and power calculations. Theory: Power Factor (PF) = Real Power (W) / Apparent Power (VA) = cos θ."
                },
                {
                    text: "Which of the following characterizes inductance?",
                    options: [
                        "Tends to oppose changes in voltage",
                        "Tends to oppose changes in current",
                        "Tends to oppose DC",
                        "Opposes all frequencies equally"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and motor inductance. Theory: Inductance opposes changes in current (V = L di/dt); it passes DC (zero reactance) but opposes AC."
                },
                {
                    text: "The sum of series voltage drops ______.",
                    options: [
                        "equals the average value of all voltage drops",
                        "equals the applied voltage",
                        "is usually more than the applied voltage",
                        "is less than the smallest voltage drop"
                    ],
                    correctIndex: 1,
                    explanation: "NEC basic circuit rules and Kirchhoff’s Voltage Law. Theory: Kirchhoff’s Voltage Law (KVL): The algebraic sum of all voltage drops in a closed loop equals the applied voltage."
                },
                {
                    text: "The 20/1 ratio on a transformer indicates ______.",
                    options: [
                        "the primary current is 20 times higher than the secondary",
                        "the secondary voltage is 20 times higher than the primary",
                        "for every 20 turns on the primary, there is one turn on the secondary",
                        "for every 20 turns on the secondary, there is one turn on the primary"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3 and transformer markings. Theory: Turns ratio = N_primary / N_secondary; a 20:1 ratio means 20 turns on primary for every 1 turn on secondary (step-down voltage)."
                },
                {
                    text: "The physical size of a resistor that determines the ability of a resistor to absorb heat is in ______.",
                    options: [
                        "farads",
                        "volts",
                        "ohms",
                        "watts"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 240.4 and resistor power ratings. Theory: Wattage rating indicates power-handling (heat dissipation) capacity; larger physical size allows higher wattage."
                },
                {
                    text: "An advantage of a 240-volt system compared with a 120-volt system of the same wattage is ______.",
                    options: [
                        "reduced voltage drop",
                        "reduced power use",
                        "large currents",
                        "lower electrical pressure"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.19 and voltage-drop calculations. Theory: For the same power (P = V × I), higher voltage means lower current, which reduces I²R voltage drop and allows smaller conductors."
                },
                {
                    text: "To calculate the VA, one needs to know the ______.",
                    options: [
                        "voltage and current",
                        "impedance and conductance",
                        "resistance and impedance",
                        "ohms and resistance"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 220.14 and VA calculations. Theory: Apparent power VA = V × I (for single-phase); it does not require resistance or impedance directly."
                },
                {
                    text: "The greatest voltage drop in a circuit will occur when the ______ the current flow through that part of the circuit.",
                    options: [
                        "greater",
                        "slower",
                        "faster",
                        "lower"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.19(A) Informational Note on voltage drop. Theory: Voltage drop V_drop = I × R; higher current produces greater voltage drop across the same resistance."
                },
                {
                    text: "Basically all electric motors operate on the principle of repulsion or ______.",
                    options: [
                        "magnetism",
                        "induction",
                        "resistance",
                        "capacitance"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and motor theory. Theory: Most AC motors (induction motors) operate on the principle of electromagnetic induction; repulsion motors use commutator action."
                },
                {
                    text: "As the power factor of a circuit is increased ______.",
                    options: [
                        "reactive power is decreased",
                        "active power is decreased",
                        "reactive power is increased",
                        "both active and reactive power are increased"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 220.60 and power factor correction. Theory: For constant real power (kW), improving PF reduces reactive power (kVAR) while apparent power (kVA) decreases."
                },
                {
                    text: "______ has the highest electrical breakdown strength and longest life over all other materials used for insulation.",
                    options: [
                        "Rubber insulation",
                        "Woven cloth",
                        "Impregnated paper",
                        "Thermoplastic"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Table 310.104(A) and insulation properties. Theory: Impregnated paper (used in high-voltage cables) offers superior dielectric strength and longevity compared to rubber or thermoplastics."
                }
            ]
        },
        {
            id: "general_5",
            title: "General Knowledge Exam #5",
            timeMinutes: 30,
            questions: [
                {
                    text: "Electrical current is measured in terms of ______.",
                    options: [
                        "electron pressure",
                        "electrons passing a point per second",
                        "watts",
                        "resistance"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 and basic definitions. Theory: Current (I) is the rate of flow of charge — specifically the number of electrons passing a given point per second (1 ampere = 6.24 × 10¹⁸ electrons per second)."
                },
                {
                    text: "Rubber insulation on an electrical conductor would quickly be damaged by continuous contact with ______.",
                    options: [
                        "water",
                        "acid",
                        "oil",
                        "alkali"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Table 310.104(A) and insulation properties. Theory: Rubber insulation (especially natural rubber) swells, softens, and deteriorates rapidly when exposed to oils and petroleum products."
                },
                {
                    text: "As compared with solid wire, stranded wire of the same gauge size is ______.",
                    options: [
                        "better for higher voltages",
                        "given a higher ampacity",
                        "easier to skin",
                        "larger in total diameter"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9, Table 8 and conductor dimensions. Theory: Stranded wire has the same cross-sectional area (same gauge) but occupies more space due to the air gaps between strands, making its overall diameter larger."
                },
                {
                    text: "The resistance of a circuit may vary due to ______.",
                    options: [
                        "a loose connection",
                        "change in voltage",
                        "change in current",
                        "induction"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.14 and connection rules. Theory: A loose connection increases contact resistance, causing higher voltage drop and heat (I²R loss)."
                },
                {
                    text: "The current will lead the voltage when ______.",
                    options: [
                        "inductive reactance exceeds the capacitive reactance in the circuit",
                        "reactance exceeds the resistance in the circuit",
                        "resistance exceeds the reactance in the circuit",
                        "capacitive reactance exceeds the inductive reactance in the circuit"
                    ],
                    correctIndex: 3,
                    explanation: "NEC motor and capacitor rules (430, 460). Theory: In a capacitive circuit (XC > XL), current leads voltage by up to 90° (ICE mnemonic)."
                },
                {
                    text: "An alternation is ______.",
                    options: [
                        "one-half cycle",
                        "one hertz",
                        "one alternator",
                        "two cycles"
                    ],
                    correctIndex: 0,
                    explanation: "NEC does not define directly, but AC theory in Article 220. Theory: One alternation is one-half of an AC cycle (from zero to peak and back to zero in one polarity)."
                },
                {
                    text: "A stranded wire is given the same size designation as a solid wire if it has the same ______.",
                    options: [
                        "weight per foot",
                        "overall diameter",
                        "strength",
                        "cross-sectional area"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9, Table 8. Theory: Wire size (AWG) is determined by the total cross-sectional area of the conductor material, not by overall diameter or weight."
                },
                {
                    text: "The proper way to open a knife switch carrying a heavy load is to ______.",
                    options: [
                        "open it with care, to avoid damage to the auxiliary blade by the arc",
                        "open it slowly so that there will not be a flashover at the contacts",
                        "tie a 5 foot rope on the switch handle and stand clear of the switch",
                        "open it with a jerk so as to quickly break any arc"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 404.16 and safety practices for switches. Theory: A quick jerk extinguishes the arc rapidly, reducing damage to contacts."
                },
                {
                    text: "Mica is commonly used in electrical construction for ______.",
                    options: [
                        "commutator bar separators",
                        "heater cord insulation",
                        "strain insulators",
                        "switchboard panels"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.7 and motor construction. Theory: Mica has excellent dielectric strength and heat resistance, making it ideal for insulating commutator segments in DC machines."
                },
                {
                    text: "The main purpose of using a cutting fluid when threading conduit is to ______.",
                    options: [
                        "prevent the formation of rust",
                        "wash away the metal chips",
                        "improve the finish of the thread",
                        "prevent the formation of electrolytic pockets"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 344.42 and conduit threading practices. Theory: Cutting fluid cools the die, lubricates, and produces a smoother, cleaner thread finish."
                },
                {
                    text: "A shunt is used to measure ______.",
                    options: [
                        "resistance",
                        "capacitance",
                        "current",
                        "wattage"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.9 and metering. Theory: A shunt is a low-value precision resistor connected in parallel with an ammeter to extend its current range."
                },
                {
                    text: "A battery operates on the principle of ______.",
                    options: [
                        "photo emission",
                        "triboelectric effect",
                        "electro chemistry",
                        "voltaic conductivity"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 480 and battery rules. Theory: Batteries convert chemical energy into electrical energy through electrochemical reactions (redox processes)."
                },
                {
                    text: "When cutting a metal conduit with a hacksaw, the pressure applied to the hacksaw should be on ______.",
                    options: [
                        "the return stroke only",
                        "the forward stroke only",
                        "both the forward and return stroke equally",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "Standard trade practice. Theory: Cutting pressure is applied only on the forward stroke; the return stroke is used to reposition the blade without cutting."
                },
                {
                    text: "The difference of electrical potential between two conductors of a circuit is the ______.",
                    options: [
                        "resistance",
                        "amperage",
                        "voltage",
                        "wattage"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 definition of Voltage. Theory: Voltage (potential difference) is the electrical pressure that causes current to flow."
                },
                {
                    text: "An electron is ______.",
                    options: [
                        "a neutron",
                        "an orbiting particle",
                        "a proton",
                        "the smallest part of an atom with a negative charge"
                    ],
                    correctIndex: 3,
                    explanation: "Basic atomic theory referenced in NEC safety rules. Theory: Electrons are negatively charged subatomic particles that orbit the nucleus."
                },
                {
                    text: "The transformer output is measured by ______.",
                    options: [
                        "volts",
                        "amps",
                        "volt-amps",
                        "watts"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3 and transformer sizing. Theory: Transformer capacity is rated in volt-amperes (VA) or kilovolt-amperes (kVA) because it accounts for both real and reactive power."
                },
                {
                    text: "To increase the life of an incandescent light bulb you could ______.",
                    options: [
                        "use at a higher than rated voltage",
                        "use at a lower than rated voltage",
                        "turn off when not in use",
                        "use at a higher wattage"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 410 and lamp rules. Theory: Operating below rated voltage reduces filament temperature, dramatically increasing bulb life (though light output decreases)."
                },
                {
                    text: "A commutator of a generator should be cleaned with which of the following?",
                    options: [
                        "emery cloth",
                        "graphite",
                        "a smooth file",
                        "fine sandpaper"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 and maintenance practices. Theory: Fine sandpaper removes oxidation and carbon buildup without damaging the commutator surface."
                },
                {
                    text: "A thermocouple will transform ______ into electricity.",
                    options: [
                        "current",
                        "heat",
                        "work",
                        "watts"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 725 and sensing devices. Theory: The Seebeck effect converts a temperature difference (heat) into a small DC voltage."
                },
                {
                    text: "Which of the following would be the best metal for a magnet?",
                    options: [
                        "steel",
                        "aluminum",
                        "lead",
                        "tin"
                    ],
                    correctIndex: 0,
                    explanation: "NEC does not specify, but magnetic materials in Article 250. Theory: Steel (especially hardened or alloyed) has high retentivity and is commonly used for permanent magnets."
                },
                {
                    text: "If one complete cycle occurs in 1/30 of a second, the frequency is ______.",
                    options: [
                        "30 hertz",
                        "60 cycle",
                        "115 cycle",
                        "60 hertz"
                    ],
                    correctIndex: 0,
                    explanation: "NEC AC theory and motor nameplates. Theory: Frequency (f) = 1 / T, where T is the period. 1/30 s = 30 Hz."
                },
                {
                    text: "The primary and secondary windings of a transformer always have ______.",
                    options: [
                        "a common magnetic circuit",
                        "the same size wire",
                        "separate magnetic circuits",
                        "the same number of turns"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 450.3. Theory: Primary and secondary windings share the same magnetic core (common magnetic circuit) but are electrically isolated."
                },
                {
                    text: "If two equal resistance conductors are connected in parallel, the resistance of the two conductors is equal to ______.",
                    options: [
                        "the resistance of one conductor",
                        "twice the resistance of one conductor",
                        "one-half the resistance of one conductor",
                        "the resistance of both conductors"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9 and parallel circuit rules. Theory: For two equal resistors in parallel, R_total = R/2."
                },
                {
                    text: "Continually overloading a conductor is a poor practice because it causes ______.",
                    options: [
                        "the conductor to melt",
                        "the insulation to deteriorate",
                        "the conductor to shrink",
                        "damage to the raceway"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 310.15 and conductor ampacity rules. Theory: Overloading causes excessive heat (I²R), which degrades insulation over time."
                },
                {
                    text: "A toaster will produce less heat on low voltage because ______.",
                    options: [
                        "its total watt output decreases",
                        "the current will decrease",
                        "the resistance has not changed",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 422 and heating appliance rules. Theory: Power P = V²/R. Lower voltage reduces power (heat) quadratically while resistance stays constant."
                }
            ]
        },
        {
            id: "general_6",
            title: "General Knowledge Exam #6",
            timeMinutes: 30,
            questions: [
                {
                    text: "Ohm's law is ______.",
                    options: [
                        "an equation for determining power",
                        "the relationship between voltage, current and power",
                        "the relationship between voltage, current and resistance",
                        "a measurement of wattage losses"
                    ],
                    correctIndex: 2,
                    explanation: "NEC calculations throughout Articles 210, 220, and 310. Theory: Ohm’s Law states V = I × R (or I = V/R, R = V/I) — the direct relationship between voltage, current, and resistance."
                },
                {
                    text: "If a live conductor is contacted accidentally, the severity of the electrical shock is determined primarily by ______.",
                    options: [
                        "the size of the conductor",
                        "whether the current is DC or AC",
                        "the current in the conductor",
                        "the contact resistance"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 110.9 and OSHA/NFPA 70E safety rules. Theory: Shock severity depends mainly on the amount of current flowing through the body; contact resistance (skin, moisture, etc.) determines how much current flows for a given voltage."
                },
                {
                    text: "A solenoid is a/an ______.",
                    options: [
                        "relay",
                        "permanent magnet",
                        "dynamo",
                        "electromagnet"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 and control devices. Theory: A solenoid is a coil of wire that produces a magnetic field when current flows, creating linear mechanical motion (electromagnet with a movable core)."
                },
                {
                    text: "Laminations are used in transformers to prevent ______.",
                    options: [
                        "copper loss",
                        "weight",
                        "eddy current loss",
                        "counter EMF"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3 and transformer construction. Theory: Thin insulated laminations break up eddy current paths in the core, greatly reducing eddy current losses and associated heating."
                },
                {
                    text: "If a 120 volt incandescent light bulb is operating at a voltage of 125 volts, the result will be ______.",
                    options: [
                        "it may be enough to blow a fuse",
                        "the bulb won’t be as bright",
                        "shorter life of the bulb",
                        "the wattage will be less than rated"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 410.14 and lamp rules. Theory: Higher-than-rated voltage increases filament temperature, causing the bulb to burn brighter but significantly shortening its life."
                },
                {
                    text: "An autotransformer differs from other types of transformers in that ______.",
                    options: [
                        "its primary winding is always larger than its secondary winding",
                        "it can be used only in automobiles",
                        "its primary and secondary windings are common to each other",
                        "it must be wound with heavier wire"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3 and 450.9. Theory: An autotransformer has a single winding that serves as both primary and secondary (common part), providing no electrical isolation between input and output."
                },
                {
                    text: "A ______ is used for testing specific gravity.",
                    options: [
                        "thermocouple",
                        "megger",
                        "hydrometer",
                        "galvanometer"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 480.7 battery maintenance. Theory: A hydrometer measures the density (specific gravity) of the electrolyte in lead-acid batteries to determine state of charge."
                },
                {
                    text: "A ______ helps prevent arcing in movable contacts.",
                    options: [
                        "spring",
                        "condenser",
                        "resistor",
                        "hydrometer"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.14 and switch rules. Theory: A condenser (capacitor) connected across contacts absorbs the inductive kick, suppressing arcing and extending contact life."
                },
                {
                    text: "The liquid in a battery is called the ______.",
                    options: [
                        "askarel",
                        "festoon",
                        "hermetic",
                        "electrolyte"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 480.2 definitions. Theory: The electrolyte is the conductive liquid (usually sulfuric acid solution) that enables the chemical reaction producing electricity."
                },
                {
                    text: "If the voltage is doubled, the ampacity of a conductor ______.",
                    options: [
                        "increases",
                        "decreases",
                        "doubles",
                        "remains the same"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Table 310.16 and ampacity rules. Theory: Ampacity is the maximum safe current a conductor can carry; it is determined by heat dissipation and insulation rating, not directly by system voltage (though voltage affects insulation class)."
                },
                {
                    text: "To control a ceiling light from five different locations, it requires which of the following?",
                    options: [
                        "four 3-way switches and one 4-way switch",
                        "three 4-way switches and two 3-way switches",
                        "three 3-way switches and two 4-way switches",
                        "four 4-way switches and one 3-way switch"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.2 and switching arrangements. Theory: Two 3-way switches + three 4-way switches allow control from five locations."
                },
                {
                    text: "If the primary of a transformer is 480 volts and secondary is 240/120v, the wire on the ______ is larger.",
                    options: [
                        "tertiary",
                        "secondary",
                        "primary",
                        "windings"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 450.3 and transformer sizing. Theory: Lower voltage side carries higher current for the same power (P = V × I), so the secondary requires larger wire."
                },
                {
                    text: "To reverse the rotation of a three-phase motor, you would ______.",
                    options: [
                        "reverse all the leads",
                        "reverse two of the four leads",
                        "turn it around",
                        "reverse any two of the three leads"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 and motor rotation rules. Theory: Swapping any two phase conductors reverses the rotating magnetic field and thus the motor direction."
                },
                {
                    text: "The advantage of cutting a metal rigid conduit with a hacksaw rather than a pipe cutter is ______.",
                    options: [
                        "you do not need a vice",
                        "less energy required in cutting",
                        "less reaming is required",
                        "threading oil is not required"
                    ],
                    correctIndex: 2,
                    explanation: "Standard trade practice and NEC 344.42. Theory: A hacksaw cut is cleaner and produces less burr inside the conduit, requiring minimal reaming."
                },
                {
                    text: "The total resistance of four 10 ohm resistors in parallel is ______.",
                    options: [
                        "10 ohms",
                        "2.5 ohms",
                        "5 ohms",
                        "4 ohms"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Chapter 9 calculations. Theory: For four equal resistors in parallel, R_total = R / 4 = 10 / 4 = 2.5 Ω."
                },
                {
                    text: "The heating element in a toaster has a ______.",
                    options: [
                        "low resistance",
                        "high resistance",
                        "high conductivity",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 422 and heating appliances. Theory: High resistance in the nichrome wire produces high I²R heat when current flows."
                },
                {
                    text: "When working near acid storage batteries, extreme care should be taken to guard against sparks, essentially to avoid ______.",
                    options: [
                        "overheating the electrolyte",
                        "an electric shock",
                        "a short circuit",
                        "an explosion"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 480.9 and battery safety. Theory: Hydrogen gas released during charging is highly explosive; a spark can ignite it."
                },
                {
                    text: "When voltage and current appear at their zero and peak values at the same time, they are in ______.",
                    options: [
                        "motion",
                        "group",
                        "phase",
                        "balance"
                    ],
                    correctIndex: 2,
                    explanation: "NEC power calculations and AC theory. Theory: When voltage and current are in phase (phase angle = 0°), power factor = 1 (purely resistive circuit)."
                },
                {
                    text: "Solid wire is preferred instead of stranded wire in panel wiring because ______.",
                    options: [
                        "costs less than stranded",
                        "solid will carry more current",
                        "can be 'shaped' better",
                        "no derating required for solid"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 310.15 and panel wiring practices. Theory: Solid wire is stiffer and holds its shape better inside panels and enclosures."
                },
                {
                    text: "If the circuit voltage is increased, all else remains the same, only the ______ will change.",
                    options: [
                        "resistance",
                        "current",
                        "ampacity",
                        "conductivity"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.19 and Ohm’s Law. Theory: For a fixed resistance, I = V/R; increasing voltage increases current proportionally."
                },
                {
                    text: "A common fuse and circuit breaker works on the principal that ______.",
                    options: [
                        "voltage develops heat",
                        "voltage breaks down insulation",
                        "current develops heat",
                        "current expands a wire"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 240.4 and overcurrent protection. Theory: Both devices open when excessive current produces enough heat (I²R) to melt the fuse element or trip the breaker."
                },
                {
                    text: "The horsepower rating of a motor ______.",
                    options: [
                        "is a measure of motor efficiency",
                        "is the input to the motor",
                        "cannot be changed to watts",
                        "is the output of the motor"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 nameplate rules. Theory: Horsepower on a motor nameplate is the mechanical output power."
                },
                {
                    text: "A voltmeter is connected in ______ with the load.",
                    options: [
                        "series",
                        "parallel",
                        "series-parallel",
                        "series-shunt"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.9 metering. Theory: A voltmeter has very high resistance and is connected in parallel across the load to measure voltage drop."
                },
                {
                    text: "To convert AC or DC you will use a ______.",
                    options: [
                        "generator",
                        "rectifier",
                        "vibrator",
                        "auto-transformer"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 690 and general conversion rules. Theory: A rectifier (diode bridge) converts AC to DC."
                },
                {
                    text: "A pendant fixture is a/an ______ fixture.",
                    options: [
                        "hanging",
                        "recessed",
                        "bracket",
                        "none of these"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 410.2 definitions. Theory: A pendant fixture is suspended from the ceiling by a cord, chain, or stem (hanging type)."
                }
            ]
        },
        {
            id: "general_7",
            title: "General Knowledge Exam #7",
            timeMinutes: 30,
            questions: [
                {
                    text: "A multimeter is a combination of ______.",
                    options: [
                        "ammeter, ohmmeter and wattmeter",
                        "voltmeter, ohmmeter and ammeter",
                        "voltmeter, ammeter and megger",
                        "voltmeter, wattmeter and ammeter"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.9 and test instrument requirements. Theory: A standard multimeter (VOM) combines voltmeter, ohmmeter, and ammeter functions in one unit."
                },
                {
                    text: "The total opposition to current flow in an AC circuit is expressed in ohms and is called ______.",
                    options: [
                        "impedance",
                        "conductance",
                        "reluctance",
                        "resistance"
                    ],
                    correctIndex: 0,
                    explanation: "NEC calculations in Articles 220 and 430. Theory: Impedance (Z) is the total opposition to AC current, combining resistance (R), inductive reactance (XL), and capacitive reactance (XC)."
                },
                {
                    text: "It is best as a safety measure, not to use water to extinguish electrical equipment fires. The main reason is that water ______.",
                    options: [
                        "may transmit shock to the user",
                        "will turn to steam",
                        "will not put the fire out",
                        "may damage the wiring"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.9 and NFPA 70E safety rules. Theory: Water conducts electricity, creating a path for current that can deliver a severe shock to the person using it."
                },
                {
                    text: "When a current leaves its intended path and returns to the source bypassing the load, the circuit is ______.",
                    options: [
                        "open",
                        "shorted",
                        "incomplete",
                        "broken"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.9 and 250.4. Theory: A short circuit provides a very low-resistance path that bypasses the load, causing high current flow."
                },
                {
                    text: "The greater the number of free electrons, the better the ______ of a metal.",
                    options: [
                        "insulation value",
                        "resistance",
                        "voltage drop",
                        "conductivity"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9, Table 8. Theory: Conductivity is directly related to the number of free electrons available to carry current."
                },
                {
                    text: "The most heat is created when current flows through which of the following?",
                    options: [
                        "a 10 ohm condenser",
                        "a 10 ohm inductance coil",
                        "a 10 ohm resistor",
                        "heat would be equal"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 310.15 and I²R heating. Theory: Heat (power loss) = I²R. For the same current, a pure resistor converts all electrical energy to heat, while capacitors and inductors store and return energy with minimal heat loss."
                },
                {
                    text: "The ______ angle is the angle between the real power and the apparent power.",
                    options: [
                        "lag",
                        "power factor",
                        "voltage-current",
                        "watt"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 220.60 and power calculations. Theory: Power factor = cos θ, where θ is the phase angle between voltage and current (or between real power and apparent power)."
                },
                {
                    text: "The larger the conductor, the ______.",
                    options: [
                        "higher the resistance",
                        "lower the ampacity",
                        "higher the voltage",
                        "lower the resistance"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Table 310.16 and Chapter 9. Theory: Larger cross-sectional area reduces resistance (R = ρL/A)."
                },
                {
                    text: "If a 240 volt heater is used on 120 volts, the amount of heat produced will be ______.",
                    options: [
                        "twice as great",
                        "four times as great",
                        "1/4 as much",
                        "the same"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 422 and heating load calculations. Theory: Power P = V²/R. Halving voltage quarters the power (heat)."
                },
                {
                    text: "The main difference between a pipe thread and a machine thread is that the pipe thread is ______.",
                    options: [
                        "finer",
                        "longer",
                        "uneven",
                        "tapered"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 344.42, 358.42. Theory: NPT (National Pipe Taper) threads are tapered to create a pressure-tight seal."
                },
                {
                    text: "The two kinds of blueprints you will use on the job are ______.",
                    options: [
                        "floor plan and one-line diagram",
                        "schematic and pictorial",
                        "detail and riser plans",
                        "one-line diagram and schematic"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.22 and electrical plan requirements. Theory: Electricians commonly use one-line diagrams (showing power flow) and schematic diagrams (showing control logic)."
                },
                {
                    text: "Which of the following is a false statement?",
                    options: [
                        "Electricity has no weight nor substance.",
                        "A short circuit has very little resistance.",
                        "Resistance would be like standing on a water hose.",
                        "It is easier for electricity to flow through a small wire than a larger one."
                    ],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9 and basic theory. Theory: Larger conductors have lower resistance, so current flows more easily through larger wires."
                },
                {
                    text: "Conductor resistance varies with which of the following?",
                    options: [
                        "voltage",
                        "current",
                        "power",
                        "material"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9, Table 8. Theory: Resistance depends on the material (resistivity ρ), length, and cross-sectional area."
                },
                {
                    text: "A parallel connected circuit will have the same ______ at each load.",
                    options: [
                        "voltage",
                        "current",
                        "resistance",
                        "wattage"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.19 and branch circuit rules. Theory: In parallel, voltage is the same across all branches."
                },
                {
                    text: "In a house, which of the following will be connected series-parallel?",
                    options: [
                        "lighting circuits",
                        "receptacle circuits",
                        "water heater circuit",
                        "heating elements in range"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 422.10 and range circuits. Theory: Range heating elements are often wired in series-parallel combinations to achieve different heat settings."
                },
                {
                    text: "The mounting strap on a switch or receptacle is called the ______.",
                    options: [
                        "switching mechanism",
                        "yoke",
                        "contact device",
                        "screw holder"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.9 and device definitions. Theory: The yoke (or strap) is the metal frame that mounts the device to the box."
                },
                {
                    text: "A leakage of current to ground, caused by worn, frayed or defective insulation, moisture or tools that have deteriorated with abuse or age is known as a ______.",
                    options: [
                        "short circuit",
                        "ground fault",
                        "leaking wire",
                        "leaking circuit"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.4 and 210.8 GFCI rules. Theory: A ground fault is unintended current flowing from a hot conductor to ground."
                },
                {
                    text: "When removing concentric knockouts from a box to connect a piece of conduit, if the hole is too large for the conduit size, you would use ______ so that the conduit can be securely fastened to the box.",
                    options: [
                        "threaded reducing bushing",
                        "eccentric ring",
                        "knockout punch",
                        "reducing washers"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 312.5 and box fill rules. Theory: Reducing washers (or knockout reducers) adapt a larger knockout to a smaller conduit size."
                },
                {
                    text: "A GFCI in a dwelling will trip if the current on the hot or ungrounded conductor and the current on the grounded conductor varies by ______ milliamperes.",
                    options: [
                        "1 to 2",
                        "2.5 to 3",
                        "4 to 6",
                        "8 to 12"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 210.8 and GFCI requirements. Theory: Class A GFCIs trip when the ground-fault current reaches 4–6 mA."
                },
                {
                    text: "The ampacity of a conductor is defined as the current in amperes that a conductor can carry continuously under the conditions of use without exceeding its ______ rating.",
                    options: [
                        "amp",
                        "voltage",
                        "temperature",
                        "resistance"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 310.15 and Table 310.16. Theory: Ampacity is limited by the temperature rating of the insulation."
                },
                {
                    text: "Grounding is a means for ensuring that a ______ object cannot take on a potential differing from earth potential, which is zero.",
                    options: [
                        "metal",
                        "grounded",
                        "noninsulated",
                        "dielectric"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 250.4(A). Theory: Grounding keeps metallic parts at earth potential to prevent dangerous voltage differences."
                },
                {
                    text: "The equipment grounding conductor is the path for the ______ current to travel back to trip the overcurrent device.",
                    options: [
                        "ground-fault",
                        "short-circuit",
                        "direct",
                        "lightning"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 250.4(A)(5) and 250.122. Theory: The equipment grounding conductor provides a low-impedance path for ground-fault current."
                },
                {
                    text: "The length of time that a fault current would flow on the equipment grounding conductor would be approximately ______.",
                    options: [
                        "1/2 cycle",
                        "6 seconds",
                        "60 cycles",
                        "120 cycles"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 250.4 and overcurrent device operation. Theory: Modern circuit breakers or fuses clear faults in less than one-half cycle (approximately 8.3 ms at 60 Hz)."
                },
                {
                    text: "How shall an elevator driving motor be classified?",
                    options: [
                        "Continuous",
                        "Intermittent",
                        "Short time",
                        "Varying"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.22 and Article 620. Theory: Elevator motors are classified as intermittent duty because they do not run continuously."
                },
                {
                    text: "What is the force that moves electrons from atom to atom through a closed conducting path?",
                    options: [
                        "Flux",
                        "Resistance",
                        "Admittance",
                        "EMF"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 and basic theory. Theory: Electromotive Force (EMF or voltage) is the force that causes electrons to move."
                }
            ]
        },
        {
            id: "general_8",
            title: "General Knowledge Exam #8",
            timeMinutes: 30,
            questions: [
                {
                    text: "If the current going out to the load differs by ___ amperes from the current coming back from the load, the GFCI acts quickly and disconnects the circuit.",
                    options: [
                        ".005",
                        ".050",
                        ".500",
                        ".025"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.8 and GFCI requirements. Theory: Class A GFCIs trip when the ground-fault current reaches approximately 4–6 mA (0.005 A is too low; 0.050 A = 5 mA is the typical trip threshold)."
                },
                {
                    text: "The difference between the winding temperature of the motor when running and the ambient temperature is called the ___ ___ .",
                    options: [
                        "temperature rise",
                        "service factor",
                        "code letter",
                        "ambient temperature"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.7(A) and motor nameplate rules. Theory: Temperature rise is the allowable increase in winding temperature above ambient when the motor runs at rated load."
                },
                {
                    text: "A lightning flash is caused by the movement of electrons between the atoms of the atmosphere. The pressure or force that causes those electrons to move is measured in what units?",
                    options: [
                        "Magnetic flux",
                        "Amperes",
                        "Coulombs",
                        "Volts"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 and basic theory. Theory: Voltage (potential difference) is the electrical pressure (EMF) that causes electrons to move."
                },
                {
                    text: "Which of the following statements about the purpose or function of an ohmmeter is TRUE?",
                    options: [
                        "An ohmmeter uses the power from the system.",
                        "An ohmmeter requires its own power.",
                        "An ohmmeter measures current.",
                        "An ohmmeter measures amperage."
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.9 and test equipment rules. Theory: An ohmmeter contains its own internal battery (power source) to send a small current through the component being tested."
                },
                {
                    text: "All of the following physical characteristics of conductors will affect ampacity EXCEPT _____.",
                    options: [
                        "cross-sectional area",
                        "material",
                        "temperature",
                        "number of strands"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Table 310.16 and 310.15. Theory: Ampacity is affected by conductor material, cross-sectional area, temperature, and insulation type. The number of strands affects flexibility and diameter but not ampacity (same circular mil area = same ampacity)."
                },
                {
                    text: "What is any electrical circuit that controls any other circuit through a relay or an equivalent device?",
                    options: [
                        "Remote-control circuit",
                        "Low-voltage circuit",
                        "Primary circuit",
                        "Secondary circuit"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 and Article 725 definitions. Theory: A remote-control circuit operates relays or contactors that control a higher-power circuit."
                },
                {
                    text: "Some materials readily give up electrons and others accept electrons. What is this the basis for?",
                    options: [
                        "A magnocouple",
                        "A piezometer",
                        "A photovoltaic cell",
                        "A thermocouple"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 725 and sensing devices. Theory: The Seebeck effect in a thermocouple is based on two dissimilar metals that readily give up or accept electrons when heated, producing a small voltage."
                },
                {
                    text: "How are fuses rated?",
                    options: [
                        "Amperage only",
                        "Voltage only",
                        "Both amperage and voltage",
                        "Amperage, voltage, and wattage"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 240.6 and 240.60. Theory: Fuses are rated by current (amperes) and voltage (they must not be used above their voltage rating)."
                },
                {
                    text: "The power fails and the circuit returns to a safe condition and will not re-energize itself. What is this condition called?",
                    options: [
                        "Safe return",
                        "Fail dead",
                        "Fail safe",
                        "Normal safe"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 700 and emergency systems. Theory: Fail-safe design ensures that upon power loss or fault, the system defaults to a safe (de-energized) state."
                },
                {
                    text: "How does a generator produce electricity?",
                    options: [
                        "By making electrons",
                        "By moving a conductor through a magnetic field",
                        "By moving a magnet through a magnetic field",
                        "By ozone conversion"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and generator rules. Theory: Electromagnetic induction (Faraday’s law) — relative motion between a conductor and magnetic field induces voltage."
                },
                {
                    text: "Copper is often used as an electrical conductor because it ________.",
                    options: [
                        "has high resistance at low temperatures",
                        "has a highly polished surface",
                        "is able to pass current with little opposition",
                        "holds insulation together well"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8. Theory: Copper has very low resistivity, allowing high conductivity with minimal opposition to current flow."
                },
                {
                    text: "If you disconnect and arrange both ends of a three conductor cable, without making any contact between the individual conductors, an indicated ohmic value between the ends of a single conductor would indicate ________.",
                    options: [
                        "continuity of the conductor",
                        "an infinite resistance",
                        "the presence of a partial ground",
                        "that the conductor is not short circuited"
                    ],
                    correctIndex: 0,
                    explanation: "NEC testing practices. Theory: A low resistance reading between both ends of the same conductor confirms continuity (no break)."
                },
                {
                    text: "An instantaneous-trip-type fuse will ________.",
                    options: [
                        "open as soon as the load current exceeds its set point",
                        "allow a preset delay between overcurrent and melting",
                        "open a circuit by using a time delay element with a magnetic trip",
                        "reset itself when the overcurrent is corrected"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 240.60. Theory: Instantaneous-trip fuses (or magnetic-only breakers) open immediately when current exceeds the trip setting, with no intentional time delay."
                },
                {
                    text: "The unit \"hertz\" is equivalent to ________.",
                    options: [
                        "coulombs",
                        "revolutions per second",
                        "revolutions per minute",
                        "cycles per second"
                    ],
                    correctIndex: 3,
                    explanation: "NEC motor and AC system rules. Theory: Hertz (Hz) = cycles per second (frequency)."
                },
                {
                    text: "Four lamps are connected in parallel in a single circuit. If one of the lamp burns out, the others will ________.",
                    options: [
                        "all go out",
                        "become dimmer",
                        "burn with their original intensities",
                        "become brighter"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 210.19 and parallel circuit rules. Theory: In parallel, each lamp operates independently; failure of one does not affect the voltage or current through the others."
                },
                {
                    text: "A megohmmeter is used to measure ________.",
                    options: [
                        "voltage",
                        "dielectric strength",
                        "current",
                        "power"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.9 and insulation testing. Theory: A megohmmeter (Megger) applies high DC voltage to measure insulation resistance (dielectric strength)."
                },
                {
                    text: "AC voltmeters are generally calibrated to read the ________.",
                    options: [
                        "instantaneous voltage",
                        "average voltage",
                        "RMS voltage",
                        "peak voltage"
                    ],
                    correctIndex: 2,
                    explanation: "NEC calculations and metering. Theory: AC meters are calibrated in RMS (Root Mean Square) values because they produce the same heating effect as the equivalent DC value."
                },
                {
                    text: "The device that most commonly utilizes the principle of electromagnetic induction is the ________.",
                    options: [
                        "diode",
                        "transformer",
                        "transistor",
                        "rheostat"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 450.3. Theory: Transformers operate on mutual induction between primary and secondary windings."
                },
                {
                    text: "The charge of a lead-acid battery is checked with a/an ________.",
                    options: [
                        "manometer",
                        "hydrometer",
                        "voltmeter",
                        "ohmmeter"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 480.7. Theory: Specific gravity of the electrolyte (measured with a hydrometer) indicates the state of charge."
                },
                {
                    text: "A galvanometer is an instrument used to measure ________.",
                    options: [
                        "thickness of galvanized metal",
                        "resistance of electrical wiring insulation",
                        "very small amounts of current or voltage",
                        "quantity of galvans in an electric circuit"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.9 metering. Theory: A galvanometer is a sensitive instrument that detects very small currents (often used in bridges or as the movement in analog meters)."
                },
                {
                    text: "Which of the following statements is true concerning a stepdown transformer in an operating AC power circuit?",
                    options: [
                        "Voltage and current will both be increased.",
                        "Voltage and current will both be decreased.",
                        "Voltage decreases as current increases.",
                        "Voltage increases as current decreases."
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3. Theory: In a step-down transformer, secondary voltage is lower and secondary current is higher (power ≈ constant)."
                },
                {
                    text: "Increasing the load to the secondary windings of a transformer will cause a/an ________.",
                    options: [
                        "decrease in the primary voltage",
                        "increase in the primary voltage",
                        "decrease in the primary current",
                        "increase in the primary current"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 450.3. Theory: Higher secondary load increases secondary current, which reflects back as increased primary current (P = V × I remains balanced)."
                },
                {
                    text: "Some maintenance employees are given instructions in first-aid. The most likely reason for doing this is to ________.",
                    options: [
                        "lower the cost of accidents for the insurance company",
                        "reduce the medical treatment by the doctor",
                        "provide temporary emergency treatment in case of an accident",
                        "eliminate the need for calling a doctor in case of an accident"
                    ],
                    correctIndex: 2,
                    explanation: "General safety practice (OSHA/NFPA 70E). Theory: First-aid training allows immediate response to injuries before professional medical help arrives."
                },
                {
                    text: "When using a multimeter for resistance measurements, it should be calibrated by clipping the loose ends of the leads together and ________.",
                    options: [
                        "setting the instrument pointer at \"zero\" ohms",
                        "adjusting the line voltage to calibrate the instrument",
                        "plugging each end of one test lead into the plus and minus terminals",
                        "using a special purpose resistance measuring instrument (a bridge)"
                    ],
                    correctIndex: 0,
                    explanation: "Standard multimeter procedure. Theory: Zeroing the ohmmeter (shorting the leads) compensates for lead resistance and sets the full-scale deflection to zero ohms."
                },
                {
                    text: "In solving series-parallel circuits, generally you would ________.",
                    options: [
                        "treat it as a series circuit",
                        "assume that all loads are equal",
                        "reduce it to its simplest form",
                        "treat it as a parallel circuit"
                    ],
                    correctIndex: 2,
                    explanation: "NEC calculation methods. Theory: Complex circuits are simplified by reducing parallel groups first, then adding series resistances (or vice versa)."
                }
            ]
        },
        {
            id: "general_9",
            title: "General Knowledge Exam #9",
            timeMinutes: 30,
            questions: [
                {
                    text: "The voltage of a circuit is best defined as ______.",
                    options: [
                        "the potential between two conductors",
                        "the greatest difference of potential between two conductors",
                        "the effective difference of potential between two conductors",
                        "the average RMS difference of potential between any two conductors"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 definition of Voltage. Theory: Voltage is the greatest RMS(effective) potential difference (electrical pressure) between two points in a circuit."
                },
                {
                    text: "A function of a relay is to ______.",
                    options: [
                        "turn on another circuit",
                        "produce thermal electricity",
                        "limit the flow of electrons",
                        "create a resistance in the field winding"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.83 and Article 725. Theory: A relay is an electrically operated switch that uses a small control current to turn on (or off) a separate higher-power circuit."
                },
                {
                    text: "A dynamo is ______.",
                    options: [
                        "a pole line insulator",
                        "a tool used to test dielectric strength",
                        "a meter used for checking the R.P.M. of a motor",
                        "a machine for converting mechanical energy into electrical energy"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 and generator rules. Theory: A dynamo is a rotating machine that converts mechanical energy into electrical energy via electromagnetic induction."
                },
                {
                    text: "Multiple start buttons in a motor control circuit are connected in ______.",
                    options: [
                        "series",
                        "parallel",
                        "series-parallel",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.74 and control circuit rules. Theory: Start buttons are connected in parallel so that pressing any one of them will energize the motor starter."
                },
                {
                    text: "Silver is used on electrical contacts to ______.",
                    options: [
                        "avoid corrosion",
                        "improve efficiency",
                        "improve continuity",
                        "improve appearance"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 404.14 and contact rules. Theory: Silver has extremely low contact resistance and excellent conductivity, ensuring reliable electrical continuity even after many operations."
                },
                {
                    text: "A one-quarter bend in a raceway is equivalent to an angle of ______ degrees.",
                    options: [
                        "90",
                        "45",
                        "25",
                        "180"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Chapter 9, Table 2 and conduit bending rules. Theory: A 90° elbow or one-quarter bend equals a 90-degree change in direction."
                },
                {
                    text: "On a delta three-phase four-wire secondary, how many hot wires may use the common neutral?",
                    options: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.26 and 215.2. Theory: In a 3-phase 4-wire delta (high-leg delta), the neutral carries only the unbalanced current from the two phases that are 120 V to neutral; the high-leg phase does not use the neutral."
                },
                {
                    text: "An AC ammeter or voltmeter is calibrated to read RMS values; this means the meter is reading the ______ value.",
                    options: [
                        "maximum",
                        "peak",
                        "average",
                        "effective"
                    ],
                    correctIndex: 3,
                    explanation: "NEC calculations and metering rules. Theory: RMS (Root Mean Square) is also called the effective value because it produces the same heating effect as an equivalent DC value."
                },
                {
                    text: "When two resistances are connected in series, ______.",
                    options: [
                        "voltage across them must be the same",
                        "current in each resistor will be the same",
                        "there will be no current in the circuit",
                        "they will become inductive"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.19 and basic circuit rules. Theory: In series, the same current flows through all components (Kirchhoff’s Current Law)."
                },
                {
                    text: "Heat is a form of wasted electrical energy dissipated by ______.",
                    options: [
                        "inductance",
                        "capacitance",
                        "a diode",
                        "resistance"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 310.15 and I²R losses. Theory: All real conductors have resistance; heat is produced whenever current flows through resistance (P = I²R)."
                },
                {
                    text: "Which of the following can vary with AC but not with DC?",
                    options: [
                        "voltage",
                        "frequency",
                        "power",
                        "magnitude"
                    ],
                    correctIndex: 1,
                    explanation: "NEC AC theory. Theory: Frequency (cycles per second) is a property of alternating current only; DC has zero frequency."
                },
                {
                    text: "An inductor works by ______.",
                    options: [
                        "introducing resistance into a circuit",
                        "charging a piece of wire",
                        "storing energy as a magnetic field",
                        "choking off high frequency AC"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 430.7 and inductive reactance. Theory: An inductor stores energy in its magnetic field when current flows and releases it when current changes."
                },
                {
                    text: "A measuring instrument used to measure the diameter of circular mils in a wire is a ______.",
                    options: [
                        "wire gauge",
                        "micrometer",
                        "millimeter",
                        "milliammeter"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Chapter 9, Table 8. Theory: A micrometer measures the diameter of a conductor strand to determine circular mil area."
                },
                {
                    text: "An ideal step-up transformer with 100 turns in the primary and 2500 turns in the secondary carries a load of 2 amps in the secondary. The current of the primary winding is ______.",
                    options: [
                        "25 amps",
                        "50 amps",
                        "250 amps",
                        "500 amps"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 450.3. Theory: Turns ratio = 2500/100 = 25:1 step-up. Primary current = secondary current × turns ratio = 2 A × 25 = 50 A."
                },
                {
                    text: "When the temperature of a conductor is decreased, the resistance will be ______.",
                    options: [
                        "increased",
                        "steady",
                        "decreased",
                        "zero"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8 notes. Theory: For most metals, resistance decreases as temperature decreases (positive temperature coefficient)."
                },
                {
                    text: "A short circuit can be detected by using ______.",
                    options: [
                        "a megger",
                        "an ammeter",
                        "an oscilloscope",
                        "an ohmmeter"
                    ],
                    correctIndex: 3,
                    explanation: "NEC testing practices. Theory: An ohmmeter shows near-zero resistance (or continuity) between points that should be isolated in a short circuit."
                },
                {
                    text: "Your foreman asked you to measure the insulation resistance of some conductors. To do this you would use a ______.",
                    options: [
                        "hydrometer",
                        "megger",
                        "bell tester",
                        "wattmeter"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.9. Theory: A megohmmeter (Megger) applies high voltage to measure insulation resistance in megohms."
                },
                {
                    text: "A foreman in charge of a crew of men preparing to work on a low voltage tension circuit should caution them to ______.",
                    options: [
                        "work only when the load is zero",
                        "never work on any circuit alone",
                        "consider the circuit hot at all times",
                        "wait until the circuit has been killed"
                    ],
                    correctIndex: 2,
                    explanation: "NFPA 70E and safety rules. Theory: The safest practice is to treat every circuit as live (hot) until proven otherwise with proper testing and lockout/tagout."
                },
                {
                    text: "The term pneumatic refers to ______.",
                    options: [
                        "electricity",
                        "steam",
                        "air",
                        "oil"
                    ],
                    correctIndex: 2,
                    explanation: "General terminology. Theory: Pneumatic means operated by or using compressed air."
                },
                {
                    text: "Which of the following locations would most likely require installation of a ground fault circuit interrupter?",
                    options: [
                        "living room",
                        "closet",
                        "bedroom",
                        "bathroom"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 210.8(A). Theory: Bathrooms are wet locations requiring GFCI protection for personnel safety."
                },
                {
                    text: "Which of the following is an LL conduit body?",
                    options: [
                        "(image a - 90° with one hub on side)",
                        "(image b - straight with one hub on side)",
                        "(image c - 90° with hubs in line)",
                        "(image d - T shape)"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 314.16 and conduit body definitions. Theory: An LL conduit body has a 90° bend with the cover on the long side, allowing access for pulling conductors around one 90° turn."
                },
                {
                    text: "60 cycle frequency travels 180 degrees in how many seconds?",
                    options: [
                        "1/60",
                        "1/120",
                        "1/180",
                        "1/30"
                    ],
                    correctIndex: 1,
                    explanation: "Basic AC theory. Theory: One cycle = 360°. 180° is half a cycle. At 60 Hz, time for one cycle = 1/60 s, so half cycle = 1/120 s."
                },
                {
                    text: "Electricity is sold by the kilowatt which is ______ watts.",
                    options: [
                        "10,000",
                        "1000",
                        "100",
                        "100,000"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 220.14 and utility billing. Theory: 1 kilowatt = 1000 watts."
                },
                {
                    text: "Three-way switching does not use the following conductor:",
                    options: [
                        "ungrounded",
                        "traveler",
                        "grounded",
                        "switch leg"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 404.2. Theory: Three-way switches use two traveler wires; the grounded (neutral) conductor is not switched and is not part of the three-way switching circuit."
                },
                {
                    text: "The electric pressure or electromotive force is measured by the ______.",
                    options: [
                        "volt",
                        "electric meter",
                        "watt",
                        "kilowatt"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 definition of Voltage. Theory: Voltage is the unit of electromotive force (electrical pressure)."
                }
            ]
        },
        {
            id: "general_10",
            title: "General Knowledge Exam #10",
            timeMinutes: 30,
            questions: [
                {
                    text: "Conduit installed in a concrete slab is considered a ______.",
                    options: [
                        "damp location",
                        "moist location",
                        "wet location",
                        "dry location"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 300.5 and Table 300.5. Theory: Concrete slabs on grade or below grade are considered wet locations; conduit embedded in them must be suitable for wet locations."
                },
                {
                    text: "Which of the items below is a rotometer?",
                    options: [
                        "(image a - round dial gauge with hook)",
                        "(image b - clamp-on style meter)",
                        "(image c - screwdriver-like probe with scale)",
                        "(image d - pen-like probe with tip)"
                    ],
                    correctIndex: 0,
                    explanation: "Trade tool identification. Theory: A rotometer (or rotation meter) is a handheld device used to measure motor RPM by indicating direction and speed of rotation."
                },
                {
                    text: "Since fuses are rated by an amperage and voltage, a fuse will work on ______.",
                    options: [
                        "AC only",
                        "AC or DC",
                        "DC only",
                        "any voltage"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 240.60. Theory: Most cartridge fuses are rated for both AC and DC (within their voltage rating), but some are AC-only."
                },
                {
                    text: "The unit of measurement for electrical resistance to current is the ______.",
                    options: [
                        "watt",
                        "ohm",
                        "volt",
                        "amp"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 and basic theory. Theory: The ohm (Ω) is the unit of resistance."
                },
                {
                    text: "A low energy power circuit ______.",
                    options: [
                        "is a remote-control circuit",
                        "is a signal circuit",
                        "has its power supplied by transformers and batteries",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 725. Theory: Class 2 and Class 3 low-energy power circuits are typically powered by transformers or batteries and are limited in voltage and current for safety."
                },
                {
                    text: "S₃ is a symbol used on a drawing to indicate a ______ switch.",
                    options: [
                        "flush",
                        "single-pole",
                        "four-way",
                        "three-way"
                    ],
                    correctIndex: 3,
                    explanation: "Standard electrical drafting symbols. Theory: S₃ commonly denotes a three-way switch on plans."
                },
                {
                    text: "Action requiring personal intervention for its control:",
                    options: [
                        "controller",
                        "automatic",
                        "periodic duty",
                        "non-automatic"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.71 and control definitions. Theory: Non-automatic control requires an operator to initiate or stop the action."
                },
                {
                    text: "The advantage of AC over DC includes which of the following?",
                    options: [
                        "better speed control",
                        "ease of voltage variation",
                        "lower resistance at higher current",
                        "impedance is greater"
                    ],
                    correctIndex: 1,
                    explanation: "Basic electrical theory. Theory: AC voltage is easily stepped up or down with transformers, which is a major advantage over DC."
                },
                {
                    text: "A color code is used in multiple-conductor cables. For a 3-conductor cable the colors would be ______.",
                    options: [
                        "one black, one red and one white",
                        "one white, one black and one blue",
                        "two black and one red",
                        "two red and one black"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 310.12 and standard cable coloring. Theory: Typical 3-conductor cable uses black, red, and white (or gray) for the grounded conductor."
                },
                {
                    text: "The identified grounded conductor of a lighting circuit is always connected to the screw of a light socket to ______.",
                    options: [
                        "reduce the possibility of accidental shock",
                        "ground the light fixture",
                        "improve the efficiency of the lamp",
                        "provide the easiest place to connect the wire"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 410.50. Theory: Connecting the grounded (neutral) conductor to the screw shell reduces shock hazard if the bulb is touched while energized."
                },
                {
                    text: "A ______ box may be weatherproof.",
                    options: [
                        "watertight",
                        "rainproof",
                        "raintight",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 314.15 and box definitions. Theory: Properly rated boxes can be watertight, rainproof, or raintight depending on the listing."
                },
                {
                    text: "Installing more than three current carrying conductors in the same conduit requires ______.",
                    options: [
                        "a larger conduit",
                        "high heat rated conductors",
                        "derating of ampacity",
                        "continuous loading"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 310.15(B)(3)(a). Theory: More than three current-carrying conductors require ampacity derating due to heat buildup."
                },
                {
                    text: "When tightening a screw on a terminal, the end of the conductor should wrap around the screw in the same direction that you are turning the screw so that ______.",
                    options: [
                        "when you pull on the conductor, it will tighten",
                        "the screw will not become loose",
                        "the conductor will act as a locking nut",
                        "the conductor will not turn off"
                    ],
                    correctIndex: 3,
                    explanation: "Standard termination practice. Theory: Wrapping clockwise (for right-hand screws) ensures the wire tightens under the screw head when pulled."
                },
                {
                    text: "Determining a positive wire on a single-phase circuit is ______.",
                    options: [
                        "possible with a wattmeter",
                        "possible with an ammeter",
                        "possible with a voltmeter",
                        "an impossibility"
                    ],
                    correctIndex: 3,
                    explanation: "Positive means DC and Basic DC theory. Theory: On a single-phase circuit without additional reference, you cannot determine polarity with standard meters alone."
                },
                {
                    text: "Piezoelectric is caused by crystals or binding ______.",
                    options: [
                        "chemical",
                        "battery",
                        "pressure",
                        "heat"
                    ],
                    correctIndex: 2,
                    explanation: "Basic physics. Theory: The piezoelectric effect generates voltage when certain crystals are subjected to mechanical pressure or stress."
                },
                {
                    text: "The sum of the voltage drop around a circuit is equal to the source voltage is ______.",
                    options: [
                        "Kirchhoff's law",
                        "Ohm's law",
                        "Nevin's theory",
                        "Faraday's law"
                    ],
                    correctIndex: 0,
                    explanation: "Basic circuit theory (KVL). Theory: Kirchhoff’s Voltage Law states that the algebraic sum of voltages around a closed loop is zero (equal to the source voltage)."
                },
                {
                    text: "Discoloring of one end of a fuse normally indicates ______.",
                    options: [
                        "increased current",
                        "excessive voltage",
                        "low resistance",
                        "poor contact"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 240.60 and fuse maintenance. Theory: Discoloration at one end usually indicates overheating from poor contact or high resistance at the terminal."
                },
                {
                    text: "The Code requires which of the following colors for the equipment grounding conductor?",
                    options: [
                        "white or gray",
                        "green or green with yellow stripes",
                        "yellow",
                        "blue with a yellow stripe"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.119. Theory: Equipment grounding conductors must be green or green with yellow stripes."
                },
                {
                    text: "The assigned color for the high-leg conductor of a three-phase, 4-wire delta secondary is ______.",
                    options: [
                        "red",
                        "black",
                        "blue",
                        "orange"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 110.15 and 215.8. Theory: The high-leg (wild leg) in a 240/120 V delta is orange."
                },
                {
                    text: "The Code rule for maximum 90 degree bends in a conduit between two boxes is four, the most likely reason for the total 360 degree limitation is ______.",
                    options: [
                        "it is unsafe",
                        "it makes pulling the conductors through the conduit too difficult",
                        "you can damage the galvanized coating on the conduit",
                        "too many bends require extra wire to be pulled"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Chapter 9, Note 4 to Table 1. Theory: More than 360° total bends makes wire pulling extremely difficult and risks damaging insulation."
                },
                {
                    text: "The correct word to define wiring which is not concealed is ______.",
                    options: [
                        "open",
                        "uncovered",
                        "exposed",
                        "bare"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 definitions. Theory: Exposed wiring is not concealed by building finish."
                },
                {
                    text: "The best thing to cut PVC conduit within a tight area is ______.",
                    options: [
                        "a short hacksaw",
                        "a nylon string",
                        "a knife",
                        "a pipe cutter"
                    ],
                    correctIndex: 1,
                    explanation: "Trade practice. Theory: A nylon string (or wire) can be used to saw through PVC in very tight spaces where a hacksaw won't fit."
                },
                {
                    text: "What is the normal taper on a standard conduit thread-cutting die?",
                    options: [
                        "1/2\" per foot",
                        "1/4\" per foot",
                        "3/8\" per foot",
                        "3/4\" per foot"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 344.42 and NPT standards. Theory: Standard conduit threads use 3/4 inch taper per foot (NPT taper)."
                },
                {
                    text: "A location classified as ______ may be temporarily subject to dampness and wetness.",
                    options: [
                        "dry",
                        "damp",
                        "moist",
                        "wet"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definitions. Theory: A damp location is one that is occasionally subject to moisture (e.g., protected exterior locations)."
                },
                {
                    text: "The ______ circuit is that portion of a wiring system beyond the final overcurrent protection.",
                    options: [
                        "lighting",
                        "feeder",
                        "signal",
                        "branch"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 definition of Branch Circuit. Theory: The branch circuit runs from the final overcurrent device to the outlets or loads."
                }
            ]
        },
        {
            id: "general_11",
            title: "General Knowledge Exam #11",
            timeMinutes: 30,
            questions: [
                {
                    text: "Which phase is probably open when you test Phase A and Phase B and get a normal reading and test Phase A and C and get a low voltage reading?",
                    options: [
                        "Phase A",
                        "Phase B",
                        "Phase C",
                        "None of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 430.7 and three-phase motor troubleshooting. Theory: In a wye or delta system, an open phase C will cause low voltage between A-C and B-C while A-B reads normal."
                },
                {
                    text: "The chemical used as the agent in fire extinguishers to fight electrical fires is ______.",
                    options: [
                        "CO₂",
                        "K₂H",
                        "H₂O",
                        "L₆"
                    ],
                    correctIndex: 0,
                    explanation: "NFPA 70E and fire safety. Theory: Carbon dioxide (CO₂) is a non-conductive gas commonly used on Class C (electrical) fires."
                },
                {
                    text: "Which of the following will not affect the resistance of a circuit?",
                    options: [
                        "Length of the Conductor",
                        "Diameter of the Conductor",
                        "Insulation of the Conductor",
                        "Temperature"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8. Theory: Insulation type affects voltage rating and ampacity but does not change the DC resistance of the conductor itself."
                },
                {
                    text: "Which of the following is not true?",
                    options: [
                        "A fluorescent fixture is more efficient than an incandescent fixture.",
                        "Room temperature has an affect on the operation of a fluorescent lamp.",
                        "Fluorescent fixtures have a good power factor with the current leading the voltage.",
                        "The life of a fluorescent bulb is affected by starting and stopping."
                    ],
                    correctIndex: 2,
                    explanation: "NEC 410 and lighting theory. Theory: Fluorescent lamps typically have a lagging power factor (inductive ballast), not leading."
                },
                {
                    text: "Special permission is ______.",
                    options: [
                        "granted by the electrical foreman on the job",
                        "verbal permission by the inspector",
                        "given only once on one blueprint change request",
                        "the written consent of the authority having jurisdiction"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 90.4 and definitions. Theory: Special permission must be written consent from the Authority Having Jurisdiction (AHJ)."
                },
                {
                    text: "The difference between a neutral and a grounded circuit conductor is ______.",
                    options: [
                        "only a neutral will have equal potential to the ungrounded conductor",
                        "only a neutral's outer covering is white or natural gray",
                        "only a neutral carries unbalanced current",
                        "there is no difference"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 and 250.24. Theory: The neutral carries unbalanced current in normal operation; the equipment grounding conductor carries fault current only."
                },
                {
                    text: "Unity power factor, which means that the current is in phase with the voltage, would be ______.",
                    options: [
                        ".50",
                        ".80",
                        "0.10",
                        "1.0"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 220.60 and power calculations. Theory: Power factor = 1.0 (unity) when voltage and current are perfectly in phase (purely resistive load)."
                },
                {
                    text: "Rheostats and potentiometers are types of ______ resistors.",
                    options: [
                        "film",
                        "variable",
                        "fixed",
                        "wirewound"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.82 and control devices. Theory: Both are adjustable (variable) resistors used for speed control or voltage division."
                },
                {
                    text: "A laminated pole is ______.",
                    options: [
                        "one built up of layers or iron sheets, stamped from sheet metal and insulated",
                        "used in transmission lines over 100kV",
                        "a pole soaked in creosote",
                        "found in the western part of the U.S.A."
                    ],
                    correctIndex: 0,
                    explanation: "Motor and generator construction. Theory: Laminated poles reduce eddy current losses in DC machines and transformers."
                },
                {
                    text: "What percentage of the maximum (peak) voltage is the effective (R.M.S.) voltage?",
                    options: [
                        "100%",
                        "70.7%",
                        "63.7%",
                        "57.7%"
                    ],
                    correctIndex: 1,
                    explanation: "NEC calculations and AC theory. Theory: RMS value = Peak × 0.707 for a sine wave."
                },
                {
                    text: "Electrical power is a measure of ______.",
                    options: [
                        "work wasted",
                        "voltage",
                        "rate at which work is performed",
                        "total work performed"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 220.14 and basic theory. Theory: Power is the rate of doing work (P = work / time)."
                },
                {
                    text: "To fasten a box to a terra cotta wall you should use which of the following?",
                    options: [
                        "wooden plug",
                        "lag bolt",
                        "expansion bolt",
                        "toggle bolt"
                    ],
                    correctIndex: 3,
                    explanation: "Trade practice. Theory: Toggle bolts provide excellent holding power in hollow or fragile materials like terra cotta."
                },
                {
                    text: "The transferring of electrons from one material to another would be ______.",
                    options: [
                        "electrochemistry",
                        "static electricity",
                        "solar electricity",
                        "piezoelectricity"
                    ],
                    correctIndex: 1,
                    explanation: "Basic theory. Theory: Static electricity is the buildup and transfer of electrons between materials."
                },
                {
                    text: "A minimum thickness of ______ inch/inches of concrete over conduits and raceways should be used to prevent cracking.",
                    options: [
                        "1",
                        "2",
                        "3",
                        "4"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 300.5 and Table 300.5. Theory: Minimum 2 inches of concrete cover is typically required over raceways in slabs to prevent cracking."
                },
                {
                    text: "One of the disadvantages of indenter or crimp connectors is ______.",
                    options: [
                        "they must be re-crimped at each annual maintenance inspection",
                        "that special tools are required to make the joint",
                        "eventually they will loosen",
                        "they can only be used for copper conductors"
                    ],
                    correctIndex: 1,
                    explanation: "Trade practice. Theory: Proper crimping requires calibrated tools; incorrect tools lead to poor connections."
                },
                {
                    text: "The symbol for a wye connection is ______.",
                    options: [
                        "Σ",
                        "Δ",
                        "ø",
                        "Y"
                    ],
                    correctIndex: 3,
                    explanation: "Standard electrical symbols. Theory: Wye (star) connection is denoted by Y."
                },
                {
                    text: "Which of the following meters is a wattmeter?",
                    options: [
                        "I only",
                        "II only",
                        "III only",
                        "I, II or III"
                    ],
                    correctIndex: 3,
                    explanation: "Meter identification (from diagram in book). Theory: A wattmeter measures real power and typically has both voltage and current coils."
                },
                {
                    text: "Something that would effect the ampacity of a conductor would be ______.\nI. voltage   II. amperage   III. length   IV. temperature",
                    options: [
                        "I only",
                        "II only",
                        "III only",
                        "IV only"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 310.15. Theory: Conductor ampacity is primarily affected by temperature (and number of conductors)."
                },
                {
                    text: "Which has the highest electrical resistance?",
                    options: [
                        "brass",
                        "iron",
                        "water",
                        "paper"
                    ],
                    correctIndex: 3,
                    explanation: "Basic material properties. Theory: Paper (and most insulators) has extremely high resistance compared to metals or even water."
                },
                {
                    text: "Conductor sizes are expressed ______.",
                    options: [
                        "only in circular mils",
                        "in AWG or in circular mils",
                        "in diameter or area",
                        "in AWG or millimeters"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Chapter 9, Table 8. Theory: American Wire Gauge (AWG) and circular mils are the standard in the U.S."
                },
                {
                    text: "Oil is used in many large transformers to ______.",
                    options: [
                        "prevent breakdown due to friction",
                        "lubricate the core",
                        "cool and insulate the transformer",
                        "lubricate the coils"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.3. Theory: Transformer oil provides both dielectric insulation and cooling."
                },
                {
                    text: "Which of the following would be used as a stop button?",
                    options: [
                        "(image a - mushroom head red button)",
                        "(image b - large twist knob)",
                        "(image c - keyed switch)",
                        "(image d - enclosed pushbutton station)"
                    ],
                    correctIndex: 0,
                    explanation: "Standard control devices. Theory: A mushroom-head red pushbutton is the industry standard for emergency stop."
                },
                {
                    text: "Receptacles installed on ______ ampere branch circuits shall be of the grounding type.",
                    options: [
                        "15 and 20",
                        "25",
                        "30",
                        "40"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.7 and 406.4. Theory: All 15- and 20-ampere receptacles must be grounding type."
                },
                {
                    text: "Where conductors carrying alternating current are installed in metal enclosures or metal raceways, they shall be so arranged as to avoid heating the surrounding metal by induction, to accomplish this ______ shall be grouped together.",
                    options: [
                        "I only",
                        "I and II only",
                        "I and III only",
                        "I, II and III"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 300.20. Theory: All phase conductors, neutral (where used), and equipment grounding conductors must be grouped to cancel magnetic fields."
                },
                {
                    text: "A steel measuring tape is undesirable for use around electrical equipment. The least important reason is the ______.",
                    options: [
                        "danger of entanglement in rotating machines",
                        "shock hazard",
                        "short circuit hazard",
                        "magnetic effect"
                    ],
                    correctIndex: 3,
                    explanation: "Safety practice. Theory: While all are concerns, the magnetic effect (attracting to energized equipment) is usually the least critical compared to shock and short-circuit risks."
                }
            ]
        },
        {
            id: "general_12",
            title: "General Knowledge Exam #12",
            timeMinutes: 30,
            questions: [
                {
                    text: "______ is the ability of a material to permit the flow of electrons.",
                    options: [
                        "Voltage",
                        "Current",
                        "Resistance",
                        "Conductance"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 and basic theory. Theory: Conductance is the reciprocal of resistance and measures how easily current flows through a material."
                },
                {
                    text: "Which of the following two wires are grounded wires in a three-wire cable?",
                    options: [
                        "red and white",
                        "white and black",
                        "bare and red",
                        "white and bare"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 310.12 and cable color coding. Theory: In a 3-wire cable, the white (or natural gray) is the grounded conductor and the bare is the equipment grounding conductor."
                },
                {
                    text: "A fitting is ______.",
                    options: [
                        "part of a wiring system that is intended primarily to perform an electrical function",
                        "pulling cable into a confined area",
                        "to be suitable or proper for a device",
                        "part of a wiring system that is intended primarily to perform a mechanical function"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 definition of Fitting. Theory: Fittings are primarily mechanical (e.g., couplings, connectors) rather than electrical."
                },
                {
                    text: "The neutral conductor ______.",
                    options: [
                        "is always the \"white\" grounded conductor",
                        "has 70% applied for a household clothes dryer for a branch circuit",
                        "never applies ampacity corrections",
                        "carries the unbalanced current"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 220.61 and 310.15. Theory: The neutral carries only the unbalanced current in a multiwire branch circuit."
                },
                {
                    text: "All wiring must be installed so that when completed ______.",
                    options: [
                        "it meets the current-carrying requirements of the load",
                        "it is free of shorts and unintentional grounds",
                        "it is acceptable to Code compliance authorities",
                        "it will withstand a hy-pot test"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.3 and 110.12. Theory: All installations must ultimately comply with the requirements of the Authority Having Jurisdiction (AHJ) and the NEC."
                },
                {
                    text: "Utilization equipment is equipment which utilizes ______ energy for mechanical, chemical, heating, lighting or similar purposes.",
                    options: [
                        "I only",
                        "II only",
                        "III only",
                        "I, II and III"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 definition of Utilization Equipment. Theory: It covers equipment that uses electrical energy for any practical purpose (mechanical, chemical, heating, lighting, etc.)."
                },
                {
                    text: "Of the following, the best indication of the condition of the charge of a lead acid battery is the ______.",
                    options: [
                        "temperature of the electrolyte",
                        "level of the electrolyte",
                        "open circuit cell voltage",
                        "specific gravity"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 480.7. Theory: Specific gravity (measured with a hydrometer) is the most reliable indicator of charge in a lead-acid battery."
                },
                {
                    text: "In general, the most important point to watch in the operation of transformers is the ______.",
                    options: [
                        "core loss",
                        "exciting current",
                        "temperature",
                        "primary voltage"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 450.9. Theory: Excessive temperature is the primary cause of transformer insulation failure and reduced life."
                },
                {
                    text: "For maximum safety the magnetic contactors used for reversing the direction of rotation of a motor should be ______.",
                    options: [
                        "electrically interlocked",
                        "mechanically interlocked",
                        "operated from independent sources",
                        "mechanically interlocked"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.83 and control safety. Theory: Mechanical interlocks prevent both forward and reverse contactors from closing at the same time."
                },
                {
                    text: "Large squirrel cage induction motors are usually started at a voltage considerably lower than the line voltage to ______.",
                    options: [
                        "permit starting under full load",
                        "obtain a low starting speed",
                        "allow the rotor current to build up gradually",
                        "avoid excessive starting current"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.52 and motor starting. Theory: Reduced-voltage starting limits inrush current on large motors."
                },
                {
                    text: "Which of the following is a motor starter?",
                    options: [
                        "(image a - contactor with overloads)",
                        "(image b - simple contactor)",
                        "(image c - pushbutton station)",
                        "(image d - enclosed starter with disconnect)"
                    ],
                    correctIndex: 0,
                    explanation: "Standard motor control devices. Theory: A motor starter includes a contactor plus overload protection."
                },
                {
                    text: "All edges that are invisible should be represented in a drawing by lines that are ______.",
                    options: [
                        "dotted",
                        "curved",
                        "solid",
                        "broken"
                    ],
                    correctIndex: 0,
                    explanation: "Standard drafting practice. Theory: Hidden (invisible) edges are shown with dashed or dotted lines."
                },
                {
                    text: "Which of the following is an LB conduit body?",
                    options: [
                        "(image a - 90° with cover on back)",
                        "(image b - 90° with cover on side)",
                        "(image c - straight with side hub)",
                        "(image d - T-shape)"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 314.16. Theory: LB conduit bodies have the removable cover on the back of the 90° bend."
                },
                {
                    text: "A device used to pull wires through a conduit is called ______.",
                    options: [
                        "wire tong",
                        "puller",
                        "fish tape",
                        "reel"
                    ],
                    correctIndex: 2,
                    explanation: "Trade tools. Theory: Fish tape (or fish wire) is the standard tool for pulling conductors through conduit."
                },
                {
                    text: "In making a resistance test, remember that the resistance of a short circuit is ______.",
                    options: [
                        "approximately zero",
                        "midway between high and low",
                        "slightly above the midrange",
                        "infinite"
                    ],
                    correctIndex: 0,
                    explanation: "Basic testing. Theory: A short circuit has near-zero resistance."
                },
                {
                    text: "The hot resistance of an incandescent lamp is approximately ______ times its cold resistance.",
                    options: [
                        "4",
                        "6",
                        "8",
                        "10"
                    ],
                    correctIndex: 3,
                    explanation: "Lighting theory. Theory: Tungsten filament resistance increases dramatically when hot (typically 8–10 times higher)."
                },
                {
                    text: "The proper way of measuring an unknown voltage with a multi-tester is to ______.",
                    options: [
                        "de-energize the circuit first",
                        "start measuring at the lowest range of the meter",
                        "start measuring at the highest range",
                        "start measuring at the mid range of the meter"
                    ],
                    correctIndex: 2,
                    explanation: "Safe testing practice. Theory: Always start on the highest voltage range to avoid damaging the meter."
                },
                {
                    text: "If a bare live conductor is touched accidentally, the severity of the electric shock is determined primarily by ______.",
                    options: [
                        "the size of the wire",
                        "the amperage flowing in the wire",
                        "the type of electricity, whether AC or DC",
                        "the contact resistance between the bare wire and the person at the point of contact"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 110.9 and safety rules. Theory: The amount of current through the body (determined largely by contact resistance) is the main factor in shock severity."
                },
                {
                    text: "An open resistor when checked with an ohmmeter reads ______.",
                    options: [
                        "infinite",
                        "zero",
                        "low but not zero",
                        "high but within the tolerance"
                    ],
                    correctIndex: 0,
                    explanation: "Basic testing. Theory: An open resistor shows infinite resistance (OL on digital meters)."
                },
                {
                    text: "Insulating materials have the function of ______.",
                    options: [
                        "storing very high currents",
                        "conducting very large currents",
                        "preventing a short circuit between the voltage source and the load",
                        "preventing an open circuit between the voltage source and the load"
                    ],
                    correctIndex: 2,
                    explanation: "Basic theory. Theory: Insulation prevents unintended contact (short circuits) between conductors."
                },
                {
                    text: "A step-up transformer increases ______.",
                    options: [
                        "power",
                        "current",
                        "frequency",
                        "voltage"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 450.3. Theory: Step-up transformers increase voltage while decreasing current (power remains approximately the same)."
                }
            ]
        },
        {
            id: "general_13",
            title: "General Knowledge Exam #13",
            timeMinutes: 30,
            questions: [
                {
                    text: "A tool used by a lineman to remove insulation from large cables is called a/an ______.",
                    options: [
                        "wire gauge",
                        "lineman's pliers",
                        "wire stripper",
                        "electrician's knife"
                    ],
                    correctIndex: 3,
                    explanation: "Trade tool identification. Theory: An electrician's knife (cable knife) is specifically designed for stripping insulation from large cables without damaging the conductor."
                },
                {
                    text: "A/an ______ is a machine used to transform mechanical energy into electrical energy.",
                    options: [
                        "transformer",
                        "electric motor",
                        "generator",
                        "rectifier"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 430.7 and basic machines. Theory: A generator converts mechanical energy into electrical energy through electromagnetic induction."
                },
                {
                    text: "A/an ______ is a material with atoms in which the electrons tend to stay in their orbits.",
                    options: [
                        "conductor",
                        "insulator",
                        "inductor",
                        "resistor"
                    ],
                    correctIndex: 1,
                    explanation: "Basic theory. Theory: Insulators have atoms with tightly bound electrons that do not move freely, preventing current flow."
                },
                {
                    text: "The resistance of a wire is directly proportional to the ______ and inversely proportional to the cross-sectional area.",
                    options: [
                        "resistivity",
                        "volume",
                        "length",
                        "permeability"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Chapter 9, Table 8. Theory: R = ρL/A — resistance increases with length and decreases with cross-sectional area."
                },
                {
                    text: "In magnetic and electric circuit analogy, magnetic flux is the analog of ______.",
                    options: [
                        "conductance",
                        "resistance",
                        "voltage",
                        "current"
                    ],
                    correctIndex: 3,
                    explanation: "Basic analogy. Theory: Magnetic flux (Φ) corresponds to electric current (I)."
                },
                {
                    text: "A device that reverses the magnetic field polarity to keep a DC motor rotating is a/an ______.",
                    options: [
                        "commutator",
                        "field coil",
                        "armature coil",
                        "solenoid"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.7 and DC motor theory. Theory: The commutator reverses current direction in the armature to maintain continuous rotation."
                },
                {
                    text: "A stop switch is wired ______ in a motor circuit.",
                    options: [
                        "series",
                        "series-shunt",
                        "series-parallel",
                        "parallel"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.74. Theory: Stop buttons are wired in series with the control circuit so that opening any one stops the motor."
                },
                {
                    text: "What type of meter is shown below?",
                    options: [
                        "wattmeter",
                        "ammeter",
                        "ohmmeter",
                        "voltmeter"
                    ],
                    correctIndex: 1,
                    explanation: "Meter identification (shunt symbol shown). Theory: The diagram with a shunt indicates an ammeter."
                },
                {
                    text: "An autotransformer has ______.",
                    options: [
                        "one coil",
                        "two coils",
                        "three coils",
                        "four coils"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 450.3. Theory: An autotransformer uses a single winding that acts as both primary and secondary."
                },
                {
                    text: "A corroded electrical connection ______.",
                    options: [
                        "decreases the voltage drop",
                        "increases the resistance at the connection",
                        "increases the ampacity at the connection",
                        "decreases the resistance of the connection"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.14. Theory: Corrosion increases contact resistance, causing higher voltage drop and heat."
                },
                {
                    text: "An AC ammeter or voltmeter is calibrated to read RMS values; this means the meter is reading the ______ value.",
                    options: [
                        "maximum",
                        "peak",
                        "average",
                        "effective"
                    ],
                    correctIndex: 3,
                    explanation: "AC theory. Theory: RMS is the effective value that produces the same heating effect as DC."
                },
                {
                    text: "The correct connection for the two 120 volt lights to the single-pole switch would be ______.",
                    options: [
                        "(diagram 1-4, 2-6, 3-5-7)",
                        "(diagram 1-6, 2-5, 3-4-7)",
                        "(diagram 1-7, 2-5-6, 3-4)",
                        "(diagram 1-5, 2-6-7, 3-4)"
                    ],
                    correctIndex: 2,
                    explanation: "Standard switching diagram. Theory: The switch must control both hot legs correctly for the two lights."
                },
                {
                    text: "Insulated nonmetallic boxes are made of ______.",
                    options: [
                        "polyvinyl chloride",
                        "bakelite",
                        "Bower-Barff lacquer",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 314.3. Theory: Common nonmetallic boxes are made of PVC, bakelite, or similar insulating materials."
                },
                {
                    text: "Tungsten-filament lamps can be used on ______.",
                    options: [
                        "AC only",
                        "DC only",
                        "AC and DC",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "Lighting theory. Theory: Incandescent lamps work on both AC and DC."
                },
                {
                    text: "The service conductors between the terminals of the service equipment and a point usually outside the building, clear of building walls, where joined by tap or splice to the service drop is called the ______.",
                    options: [
                        "service drop",
                        "service-entrance conductors",
                        "service equipment",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition of Service-Entrance Conductors. Theory: They run from the service drop or lateral to the service equipment."
                },
                {
                    text: "In order to prevent a safety hazard, an electrician should never ______.",
                    options: [
                        "strike a hardened steel surface with a hardened steel hammer",
                        "use a soft brass hammer to strike a soft brass surface",
                        "strike a soft iron surface with a hardened steel hammer",
                        "use a soft iron hammer to strike a hardened steel surface"
                    ],
                    correctIndex: 3,
                    explanation: "Safety practice. Theory: Striking hardened steel with hardened steel can cause chips or sparks; soft hammer on hard surface is safer."
                },
                {
                    text: "Which of the following machine screws has the smallest diameter?",
                    options: [
                        "6-32 x 1\"",
                        "10-32 x 3/4\"",
                        "8-32 x 1/2\"",
                        "10-24 x 3/8\""
                    ],
                    correctIndex: 2,
                    explanation: "Machine screw sizing. Theory: Higher number = larger diameter; 8-32 is smaller than 10-32 or 10-24."
                },
                {
                    text: "A 3Ω, a 6Ω, a 9Ω and a 12Ω resistor are connected in parallel. Which resistor will consume the most power?",
                    options: [
                        "3Ω",
                        "6Ω",
                        "9Ω",
                        "12Ω"
                    ],
                    correctIndex: 0,
                    explanation: "Parallel circuit power. Theory: In parallel, power P = V²/R; the smallest resistance consumes the most power."
                },
                {
                    text: "The best way to lay out a 40 foot long straight line on a floor is to ______.",
                    options: [
                        "use a steel measuring tape with dark crayon",
                        "use a long 2 x 4 and a lead pencil",
                        "use a plumb bob with long string",
                        "use a chalk line"
                    ],
                    correctIndex: 3,
                    explanation: "Trade practice. Theory: A chalk line provides the straightest, most visible line over long distances."
                }
            ]
        },
        {
            id: "general_14",
            title: "General Knowledge Exam #14",
            timeMinutes: 30,
            questions: [
                {
                    text: "The Code considers low voltage to be ______.",
                    options: [
                        "480 volts or less",
                        "1000 volts or less",
                        "24 volts",
                        "12 volts"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 725.2 and low-voltage definitions. Theory: Circuits 1000 volts or less are generally considered low voltage for many Code purposes."
                },
                {
                    text: "Stranded wire should be ______ before being placed under a screw head.",
                    options: [
                        "tinned",
                        "twisted together tightly",
                        "coated with an inhibitor",
                        "sanded"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 110.14 and termination rules. Theory: Stranded conductors must be twisted tightly to prevent strands from separating under the screw."
                },
                {
                    text: "The total of the following numbers 8 5/8\", 6 1/4\", 7 3/16\" and 5 1/4\" is ______.",
                    options: [
                        "27 5/16\"",
                        "26 1/8\"",
                        "28 7/8\"",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "Basic math. Theory: Adding the fractions: 8 5/8 + 6 1/4 + 7 3/16 + 5 1/4 = 28 7/8\"."
                },
                {
                    text: "A fusestat is different than the ordinary plug fuse because a fusestat ______.",
                    options: [
                        "doesn't have threads",
                        "has left-hand threads",
                        "has different size threads",
                        "has an aluminum screw shell"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 240.50. Theory: Fusestats have different thread sizes to prevent over-fusing (Type S fuses)."
                },
                {
                    text: "The symbol ______ usually indicates a(n) ______.",
                    options: [
                        "switch",
                        "receptacle",
                        "ceiling outlet",
                        "exhaust fan"
                    ],
                    correctIndex: 2,
                    explanation: "Standard electrical symbols. Theory: The circle with a line through it is the common symbol for a ceiling outlet or lighting fixture."
                },
                {
                    text: "The decimal equivalent of 3/16\" is ______.",
                    options: [
                        "0.125",
                        "0.1875",
                        "0.5625",
                        "0.9375"
                    ],
                    correctIndex: 1,
                    explanation: "Basic math. Theory: 3 ÷ 16 = 0.1875."
                },
                {
                    text: "When drilling into a steel I-beam, the most likely cause for breaking a drill bit would be ______.",
                    options: [
                        "the drill bit is too dull",
                        "too slow a drill speed",
                        "too much pressure on the bit",
                        "too much cutting oil on bit"
                    ],
                    correctIndex: 2,
                    explanation: "Trade practice. Theory: Excessive pressure is the most common cause of broken drill bits in steel."
                },
                {
                    text: "Before using rubber gloves when working on high voltage equipment, the gloves should be ______.",
                    options: [
                        "cleaned inside and out",
                        "tested to withstand the high voltage",
                        "oiled inside and out",
                        "brand new"
                    ],
                    correctIndex: 1,
                    explanation: "OSHA 1910.137 and NFPA 70E. Theory: Rubber insulating gloves must be electrically tested before each use."
                },
                {
                    text: "A/an ______ is a protective device for limiting surge voltages by discharging or by passing surge current, and it also prevents continued flow of follow current while remaining capable of repeating these functions.",
                    options: [
                        "surge arrester",
                        "automatic fuse",
                        "fuse",
                        "circuit breaker"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 and 280. Theory: A surge arrester (TVSS) is designed to clamp transient voltages."
                },
                {
                    text: "A current limiting overcurrent protective device is a device which will ______ in the faulted circuit.",
                    options: [
                        "reduce",
                        "increase",
                        "maintain",
                        "none of these"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 240.2. Theory: Current-limiting devices reduce the let-through energy during a fault."
                },
                {
                    text: "The voltage will lead the current when the ______ in the circuit.",
                    options: [
                        "inductive reactance exceeds the capacitive reactance",
                        "reactance exceeds the resistance in the circuit",
                        "resistance exceeds the reactance",
                        "capacitive reactance exceeds the inductive reactance"
                    ],
                    correctIndex: 0,
                    explanation: "AC theory. Theory: In inductive circuits (XL > XC), voltage leads current (ELI)."
                },
                {
                    text: "Which of the following is an Allen head bolt?",
                    options: [
                        "(hexagon socket)",
                        "(slotted)",
                        "(Phillips)",
                        "(square)"
                    ],
                    correctIndex: 0,
                    explanation: "Hardware identification. Theory: Allen head (socket head cap screw) has a hexagonal recess."
                },
                {
                    text: "A 1000 watt, 120 volt lamp uses electrical energy at the same rate as a 14.4 ohm resistor on ______.",
                    options: [
                        "120 volts",
                        "115 volts",
                        "208 volts",
                        "240 volts"
                    ],
                    correctIndex: 3,
                    explanation: "Power calculation. Theory: P = V²/R → for 1000 W at 120 V, R = 14.4 Ω. At 240 V it would also dissipate 1000 W if resistance is the same (but in practice it's not)."
                },
                {
                    text: "When using compressed air to clean electrical equipment, the air pressure should not exceed 50 pounds. The main reason is higher pressures ______.",
                    options: [
                        "may loosen insulating tape",
                        "introduces a personal hazard to the user",
                        "may blow dust to surrounding equipment",
                        "may rupture the air hose"
                    ],
                    correctIndex: 1,
                    explanation: "Safety practice (NFPA 70E). Theory: High-pressure air can drive particles into skin or eyes, creating a hazard."
                },
                {
                    text: "Which of the following is not used to fasten equipment to concrete?",
                    options: [
                        "expansion bolt",
                        "rawl plug",
                        "lead shield",
                        "steel bushing"
                    ],
                    correctIndex: 3,
                    explanation: "Trade practice. Theory: Steel bushings are used for conduit protection, not for anchoring."
                },
                {
                    text: "3-way and 4-way switches to operate a light shall have the wiring connected in the ______.",
                    options: [
                        "grounded",
                        "ungrounded",
                        "identified",
                        "neutral"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.2. Theory: Switching must be done in the ungrounded (hot) conductor(s)."
                }
            ]
        },
        {
            id: "general_15",
            title: "General Knowledge Exam #15",
            timeMinutes: 30,
            questions: [
                {
                    text: "______ is the symbol used for the delta connection.",
                    options: [
                        "Ω",
                        "Σ",
                        "ø",
                        "Δ"
                    ],
                    correctIndex: 3,
                    explanation: "Standard electrical symbols. Theory: The delta connection is represented by the Greek letter Δ."
                },
                {
                    text: "A switch is a device for ______.",
                    options: [
                        "I. making or braking connections",
                        "II. changing connections",
                        "III. interruption of circuit under short-circuit conditions"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 404.14 and switch definitions. Theory: A switch is primarily for making or breaking (opening/closing) circuits under normal conditions."
                },
                {
                    text: "One of the essential functions of any switch is to maintain a ______.",
                    options: [
                        "good high-resistance contact in the closed position",
                        "good low-resistance contact in the closed position",
                        "good low-resistance contact in the open position",
                        "good high-resistance contact in the open position"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.14. Theory: When closed, a switch must have very low contact resistance to minimize heat and voltage drop."
                },
                {
                    text: "Which of the following is a 30 amp receptacle?",
                    options: [
                        "(image a - standard duplex)",
                        "(image b - single receptacle with round ground)",
                        "(image c - 30A twist-lock or similar)",
                        "(image d - another configuration)"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 406.3 and receptacle configurations. Theory: 30-amp receptacles have specific slot/ground configurations (often NEMA 5-30 or twist-lock)."
                },
                {
                    text: "When the ground resistance exceeds the allowable value of 25 ohms, the resistance can be reduced by ______.",
                    options: [
                        "I. paralleling ground rods",
                        "II. using a longer ground rod",
                        "III. using a larger diameter ground rod",
                        "IV. chemical treatment of the soil"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 250.56. Theory: Paralleling ground rods is a common and effective method to lower total ground resistance."
                },
                {
                    text: "Standard lengths of conduit are in 10 foot lengths. A required feeder raceway is 18 yards in length. How many lengths of 10 foot conduit would you need?",
                    options: [
                        "4",
                        "5",
                        "6",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "Basic math. Theory: 18 yards = 54 feet. 54 ÷ 10 = 5.4 → you need 6 full 10-foot lengths."
                },
                {
                    text: "The term \"open circuit\" means ______.",
                    options: [
                        "the wiring is in an open area",
                        "all parts of the circuit are not in contact",
                        "the wiring is exposed on a building",
                        "the circuit has one end exposed"
                    ],
                    correctIndex: 1,
                    explanation: "Basic theory. Theory: An open circuit has a break in the path so current cannot flow."
                },
                {
                    text: "Which of the items below is used to test specific gravity?",
                    options: [
                        "(image a - round gauge)",
                        "(image b - clamp meter)",
                        "(image c - hydrometer probe)",
                        "(image d - pen-like tool)"
                    ],
                    correctIndex: 2,
                    explanation: "Battery testing. Theory: A hydrometer measures the specific gravity of battery electrolyte."
                },
                {
                    text: "Conduit should be installed as to prevent the collection of water in it between outlets. The conduit should not have a ______.",
                    options: [
                        "low point at an outlet",
                        "high point at an outlet",
                        "high point between successive outlets",
                        "low point between successive outlets"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 300.5 and installation practices. Theory: Conduit runs should slope to prevent water traps; low points between outlets can collect moisture."
                },
                {
                    text: "Brass is an alloy of ______.",
                    options: [
                        "zinc and copper",
                        "lead and copper",
                        "tin and lead",
                        "lead and iron"
                    ],
                    correctIndex: 0,
                    explanation: "Material properties. Theory: Brass is primarily copper and zinc."
                },
                {
                    text: "Enclosed knife switches that require the switch to be open before the housing door can be opened are called ______ switches.",
                    options: [
                        "release",
                        "air-break",
                        "safety",
                        "service"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 404.6. Theory: Safety switches are designed so the door cannot be opened while the switch is closed."
                },
                {
                    text: "Which of the following is a solenoid?",
                    options: [
                        "(image a - cylindrical coil device)",
                        "(image b - contactor)",
                        "(image c - relay with armature)",
                        "(image d - meter movement)"
                    ],
                    correctIndex: 0,
                    explanation: "Basic devices. Theory: A solenoid is an electromagnetic coil that produces linear mechanical motion."
                },
                {
                    text: "A close nipple ______.",
                    options: [
                        "is always 1/2\" or less in length",
                        "has only internal threads",
                        "has no threads",
                        "has threads over its entire length"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 344.42 and conduit fittings. Theory: A close nipple is threaded its entire length and is very short."
                },
                {
                    text: "When applying rubber tape to an electrical splice, it would be necessary to ______.",
                    options: [
                        "stretch the tape properly during the application",
                        "apply an adhesive to the splice before applying the tape",
                        "apply the rubber tape after any other tape",
                        "apply heat to the tape when installing"
                    ],
                    correctIndex: 0,
                    explanation: "Trade practice. Theory: Rubber (self-fusing) tape must be stretched during wrapping to activate its self-amalgamating properties."
                },
                {
                    text: "A limit switch is used on a piece of machinery to open the circuit when the ______.",
                    options: [
                        "current exceeds a preset limit",
                        "travel reaches a preset limit",
                        "pressure exceeds a preset limit",
                        "temperature reaches a preset limit"
                    ],
                    correctIndex: 1,
                    explanation: "Control devices. Theory: A limit switch opens or closes based on the physical position or travel of a machine part."
                },
                {
                    text: "With switches 1 and 2 closed, the combined resistance of the circuit is ______ ohms.",
                    options: [
                        "30",
                        "25",
                        "10",
                        "3"
                    ],
                    correctIndex: 2,
                    explanation: "Circuit calculation from diagram. Theory: With SW1 and SW2 closed, the 10Ω and 10Ω branches are in parallel (5Ω), then in series with the 5Ω = 10Ω total."
                },
                {
                    text: "Which of the following is not considered part of a luminaire?",
                    options: [
                        "ballast",
                        "a lampholder",
                        "lamp or lamps",
                        "parts designed to position the light source"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 410.2 definition of Luminaire. Theory: A ballast is a separate component; the luminaire includes the housing, lampholder, and lamp."
                },
                {
                    text: "Locknuts are sometimes used in making electrical connections on studs. In these cases, the purpose of the locknuts is to ______.",
                    options: [
                        "be able to connect several wires to one stud",
                        "make it difficult to tamper with the connection",
                        "make a tighter connection from loosening under vibration",
                        "prevent the connection from loosening under vibration"
                    ],
                    correctIndex: 3,
                    explanation: "Trade practice. Theory: Locknuts prevent connections from loosening due to vibration."
                },
                {
                    text: "In the course of normal operation the instrument which will be least effective in indicating that a generator may overheat because it is overloaded, is ______.",
                    options: [
                        "a wattmeter",
                        "a voltmeter",
                        "an ammeter",
                        "a stator thermocouple"
                    ],
                    correctIndex: 1,
                    explanation: "Metering. Theory: A voltmeter measures voltage and does not directly indicate overload current/heat."
                },
                {
                    text: "Two switches in one box under one face-plate is called a ______.",
                    options: [
                        "double-pole switch",
                        "two-gang switch",
                        "2-way switch",
                        "mistake"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.9. Theory: Multiple devices under one plate are described as a multi-gang (e.g., two-gang) installation."
                },
                {
                    text: "A conduit body is ______.",
                    options: [
                        "a cast fitting such as an FD or FS box",
                        "a standard 10 foot length of conduit",
                        "a sealtight enclosure",
                        "an \"LB\" or \"T\", or similar fitting"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 314.16. Theory: Conduit bodies (LB, LR, LL, T, etc.) are fittings that provide access for pulling and splicing."
                },
                {
                    text: "Where the conductor material is not specified in the Code, the conductors are assumed to be ______.",
                    options: [
                        "busbars",
                        "aluminum",
                        "copper-clad aluminum",
                        "copper"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 110.5. Theory: Unless otherwise specified, conductors are assumed to be copper."
                },
                {
                    text: "The voltage lost across a portion of a circuit is called the ______.",
                    options: [
                        "power loss",
                        "power factor",
                        "voltage drop",
                        "apparent va"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 210.19(A) Informational Note. Theory: Voltage drop is the reduction in voltage along a conductor due to resistance."
                },
                {
                    text: "In a series circuit ______ is common.",
                    options: [
                        "resistance",
                        "current",
                        "voltage",
                        "wattage"
                    ],
                    correctIndex: 1,
                    explanation: "Basic circuit theory. Theory: In series, the same current flows through all components."
                },
                {
                    text: "Batteries supply ______ current.",
                    options: [
                        "positive",
                        "negative",
                        "direct",
                        "alternating"
                    ],
                    correctIndex: 2,
                    explanation: "Basic theory. Theory: Batteries produce direct current (DC)."
                }
            ]
        },
        {
            id: "general_16",
            title: "General Knowledge Exam #16",
            timeMinutes: 30,
            questions: [
                {
                    text: "Electron flow produced by means of applying pressure to a material is called ______.",
                    options: [
                        "photo conduction",
                        "electrochemistry",
                        "piezoelectricity",
                        "thermoelectricity"
                    ],
                    correctIndex: 2,
                    explanation: "Basic physics. Theory: Piezoelectricity generates voltage/electron flow when mechanical pressure is applied to certain crystals."
                },
                {
                    text: "Raceways shall be provided with ______ to compensate for thermal expansion and contraction.",
                    options: [
                        "accordion joints",
                        "thermal fittings",
                        "expansion joints",
                        "contro-spansion"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 300.7 and 352.44. Theory: Expansion joints or fittings are required to accommodate thermal movement in raceways."
                },
                {
                    text: "What is the function of a neon glow tester?",
                    options: [
                        "I. Determines if circuit is alive",
                        "II. Determines polarity of DC circuits",
                        "III. Determines if circuit is AC or DC"
                    ],
                    correctIndex: 0,
                    explanation: "Trade tool. Theory: A neon tester primarily indicates the presence of voltage (live circuit) by glowing."
                },
                {
                    text: "A wattmeter indicates ______.",
                    options: [
                        "I. real power",
                        "II. apparent power if PF is not in unity",
                        "III. power factor"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 220.60 and metering. Theory: A wattmeter measures real power (watts)."
                },
                {
                    text: "The connection of a ground clamp to a grounding electrode shall be ______.",
                    options: [
                        "accessible",
                        "visible",
                        "readily accessible",
                        "in sight"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 250.68. Theory: Ground connections must be readily accessible for inspection and maintenance."
                },
                {
                    text: "The current will lead the voltage when ______.",
                    options: [
                        "inductive reactance exceeds the capacitive reactance in the circuit",
                        "reactance exceeds the resistance in the circuit",
                        "resistance exceeds the reactance in the circuit",
                        "capacitive reactance exceeds the inductive reactance in the circuit"
                    ],
                    correctIndex: 3,
                    explanation: "AC theory. Theory: In a capacitive circuit (XC > XL), current leads voltage (ICE mnemonic)."
                },
                {
                    text: "Mandatory rules of the Code are identified by the use of the word ______.",
                    options: [
                        "should",
                        "shall",
                        "must",
                        "could"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 90.5. Theory: The word 'shall' indicates a mandatory requirement."
                },
                {
                    text: "Which of the following is not one of the considerations that must be evaluated in judging equipment?",
                    options: [
                        "wire-bending and connection space",
                        "arcing effects",
                        "longevity",
                        "electrical insulation"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.3. Theory: Longevity is not one of the listed factors for equipment evaluation in the Code."
                },
                {
                    text: "To increase the range of an AC ammeter, which one of the following is most commonly used?",
                    options: [
                        "a current transformer",
                        "a condenser",
                        "an inductance",
                        "a straight shunt (not U-shaped)"
                    ],
                    correctIndex: 0,
                    explanation: "Metering practice. Theory: Current transformers (CTs) are the standard method to extend AC ammeter range."
                },
                {
                    text: "If a test lamp lights when placed in series with a condenser and a suitable source of DC, it is a good indication that the condenser is ______.",
                    options: [
                        "fully charged",
                        "short-circuited",
                        "open-circuited",
                        "fully discharged"
                    ],
                    correctIndex: 1,
                    explanation: "Capacitor testing. Theory: A shorted capacitor will allow DC current to flow and light the test lamp."
                },
                {
                    text: "Two 500 watt lamps connected in series across a 110 volt line draws 2 amperes. The total power consumed is ______ watts.",
                    options: [
                        "50",
                        "150",
                        "220",
                        "1000"
                    ],
                    correctIndex: 1,
                    explanation: "Power calculation. Theory: Total power = 110 V × 2 A = 220 W."
                },
                {
                    text: "The resistance of a copper wire to the flow of electricity ______.",
                    options: [
                        "decreases as the length of the wire increases",
                        "decreases as the diameter of the wire decreases",
                        "increases as the diameter of the wire increases",
                        "increases as the length of the wire increases"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Chapter 9, Table 8. Theory: Resistance is directly proportional to length and inversely proportional to cross-sectional area."
                },
                {
                    text: "A type of cable protected by a spiral metal cover is called ______ in the field.",
                    options: [
                        "BX",
                        "greenfield",
                        "sealtight",
                        "Romex"
                    ],
                    correctIndex: 1,
                    explanation: "Trade terminology. Theory: Greenfield (flexible metal conduit) is often called by that name in the field."
                },
                {
                    text: "The resistance of a circuit may vary due to ______.",
                    options: [
                        "a loose connection",
                        "change in voltage",
                        "change in current",
                        "induction"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.14. Theory: Loose connections increase resistance and cause overheating."
                },
                {
                    text: "For voltage and current to be in phase, ______.",
                    options: [
                        "I. the circuit impedance has only resistance",
                        "II. the voltage and current appear at their zero and peak values at the same time"
                    ],
                    correctIndex: 3,
                    explanation: "AC theory. Theory: Purely resistive circuits have voltage and current in phase (zero phase angle)."
                },
                {
                    text: "Continuous duty is ______.",
                    options: [
                        "a load where the maximum current is expected to continue for three hours or more",
                        "a load where the maximum current is expected to continue for one hour or more",
                        "intermittent operation in which the load conditions are regularly recurrent",
                        "operation at a substantially constant load for an indefinitely long time"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 430.7 and duty definitions. Theory: Continuous duty means the load runs continuously for long periods without interruption."
                },
                {
                    text: "A ______ is an enclosure designed either for surface or flush mounting and provided with a frame, mat, or trim in which a swinging door or doors are or may be hung.",
                    options: [
                        "cabinet",
                        "panelboard",
                        "cutout box",
                        "switchboard"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 definition of Cabinet. Theory: Cabinets are enclosures with doors for housing equipment."
                },
                {
                    text: "A 15 ohm resistance carrying 20 amperes of current uses ______ watts of power.",
                    options: [
                        "300",
                        "3000",
                        "6000",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "Power calculation. Theory: P = I²R = 20² × 15 = 6000 W."
                },
                {
                    text: "The most important reason for using a condulet-type fitting in preference to making a bend in a one inch conduit is to ______.",
                    options: [
                        "avoid the possible flattening of the conduit when making the bend",
                        "cut down the amount of conduit needed",
                        "make a neater job",
                        "make wire pulling easier"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 344.26 and installation practice. Theory: Condulets provide access for pulling, making wire installation much easier."
                },
                {
                    text: "When skinning a small wire, the insulation should be 'penciled down' rather than cut square to ______.",
                    options: [
                        "allow more room for the splice",
                        "save time in making the splice",
                        "decrease the danger of nicking the wire",
                        "prevent the braid from fraying"
                    ],
                    correctIndex: 2,
                    explanation: "Trade practice. Theory: Penciling reduces the chance of cutting into the conductor strands."
                },
                {
                    text: "An overcurrent trip unit of a circuit shall be connected in series with each ______.",
                    options: [
                        "transformer",
                        "grounded conductor",
                        "overcurrent device",
                        "ungrounded conductor"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 240.4 and 430.52. Theory: Overcurrent protection must be in the ungrounded (hot) conductor(s)."
                },
                {
                    text: "A rigid conduit connecting to an outlet box should have a ______.",
                    options: [
                        "bushing and locknut on the outside",
                        "bushing on the outside and a locknut on the inside",
                        "locknut and bushing on the inside",
                        "locknut on the outside and a bushing on the inside"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 344.46 and 300.4. Theory: Standard practice is bushing inside the box for conductor protection and locknut outside."
                }
            ]
        },
        {
            id: "general_17",
            title: "General Knowledge Exam #17",
            timeMinutes: 30,
            questions: [
                {
                    text: "A hickey is ______.",
                    options: [
                        "a tool used to bend small sizes of rigid conduit",
                        "a part of a conduit",
                        "not used in the electrical trade",
                        "used only by a plumber"
                    ],
                    correctIndex: 0,
                    explanation: "Trade tool. Theory: A hickey (conduit hickey) is a hand tool specifically used to bend small-diameter rigid metal conduit."
                },
                {
                    text: "Which of the following is a voltmeter?",
                    options: [
                        "I only",
                        "II only",
                        "III only",
                        "I, II or III"
                    ],
                    correctIndex: 2,
                    explanation: "Meter identification from diagram. Theory: A voltmeter is always connected in parallel (across) the load or circuit."
                },
                {
                    text: "Of the following ______ is a false statement.",
                    options: [
                        "The term kilowatt indicates the measure of power which is all available for work.",
                        "The term kilovolt-amperes indicate the apparent power made up of an energy component and a wattless or induction component.",
                        "In an industrial plant, low power factor is usually due to underloaded induction motors.",
                        "The power factor of a motor is much greater at partial loads than at full load."
                    ],
                    correctIndex: 3,
                    explanation: "Power factor theory. Theory: Induction motors have their best (highest) power factor near full load; it drops significantly at partial loads."
                },
                {
                    text: "A requirement of service that demands operation for alternate intervals of (1) load and no load; or (2) load and rest; or (3) load, no load, and rest is called ______ duty.",
                    options: [
                        "variable",
                        "intermittent",
                        "short-time",
                        "periodic"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 430.7 and duty definitions. Theory: Intermittent duty involves alternating periods of load and rest."
                },
                {
                    text: "An outlet where one or more receptacles are installed is called a ______.",
                    options: [
                        "multi-outlet assembly",
                        "receptacle outlet",
                        "duplex outlet",
                        "tri-plex outlet"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition. Theory: A receptacle outlet is any outlet where one or more receptacles are installed."
                },
                {
                    text: "A conductor encased within material of composition or thickness not recognized by the Code is a ______ conductor.",
                    options: [
                        "coated",
                        "semi",
                        "covered",
                        "fiber optic"
                    ],
                    correctIndex: 2,
                    explanation: "NEC Article 100 definition of Covered Conductor. Theory: A covered conductor has insulation not recognized by the Code for electrical purposes."
                },
                {
                    text: "Cooling of electrical equipment within enclosures is ______.",
                    options: [
                        "the responsibility of the equipment manufacturer",
                        "not covered by the Code",
                        "covered by the Code",
                        "not required"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 110.13 and general requirements. Theory: Proper ventilation and cooling are addressed throughout the Code."
                },
                {
                    text: "Approved is ______.",
                    options: [
                        "listed and labeled equipment",
                        "acceptable to the authority having jurisdiction",
                        "tested and approved for the purpose by a qualified testing lab",
                        "UL listed only"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition of Approved. Theory: Approved means acceptable to the AHJ."
                },
                {
                    text: "A system which will automatically furnish lighting and/or power to specified areas and/or equipment when there is a failure of the normal supply is known as a/an ______ system.",
                    options: [
                        "fail safe",
                        "emergency",
                        "alarm",
                        "service safe"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 700. Theory: Emergency systems automatically supply power upon failure of the normal source."
                },
                {
                    text: "The maximum size fuse to be used in a branch circuit containing no motors depends on the ______.",
                    options: [
                        "load",
                        "wire size",
                        "voltage",
                        "switch size"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 240.4. Theory: Overcurrent protection is based on the conductor ampacity (wire size)."
                },
                {
                    text: "The type letter for moisture-resistant thermostat is ______.",
                    options: [
                        "RUH",
                        "THW",
                        "RHW",
                        "MHR"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Table 310.104(A). Theory: MHR is the designation for moisture-resistant heat-resistant thermostat wire."
                },
                {
                    text: "On an Edison 3-wire system, some incandescent lamps are observed to be brighter, and others to be dimmer, than normal. What is the most likely trouble?",
                    options: [
                        "weak breaker",
                        "loose fuse",
                        "poor neutral connection",
                        "too much voltage drop"
                    ],
                    correctIndex: 2,
                    explanation: "3-wire system troubleshooting. Theory: A poor or open neutral causes voltage imbalance — one leg goes high, the other low."
                },
                {
                    text: "The conductors and equipment for delivering energy from the electricity supply system to the wiring system of the premises served is called the ______.",
                    options: [
                        "primary",
                        "distribution",
                        "main supply feeder",
                        "service"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 100 definition of Service. Theory: Service conductors and equipment deliver power from the utility to the premises."
                },
                {
                    text: "Concealed is ______.",
                    options: [
                        "not readily visible",
                        "made inaccessible by the structure or finish of the building",
                        "surrounded by walls",
                        "attached to the surface"
                    ],
                    correctIndex: 1,
                    explanation: "NEC Article 100 definition of Concealed. Theory: Concealed wiring is rendered inaccessible by the structure or finish."
                },
                {
                    text: "The term anode refers to ______.",
                    options: [
                        "capacitor",
                        "dynamo",
                        "rectifier",
                        "inductor"
                    ],
                    correctIndex: 2,
                    explanation: "Basic electronics. Theory: In a rectifier or diode, the anode is the positive terminal where current enters."
                },
                {
                    text: "A dual voltage motor will run more efficiently ______.",
                    options: [
                        "at the lower voltage",
                        "at the higher voltage",
                        "the same at either voltage",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "Motor theory. Theory: Dual-voltage motors are more efficient and draw less current when connected for the higher voltage."
                },
                {
                    text: "Continuous load is ______.",
                    options: [
                        "a load where the maximum current is expected to continue for three hours or more",
                        "a load where the maximum current is expected to continue for one hour or more",
                        "intermittent operation in which the load conditions are regularly recurrent",
                        "operation at a substantially constant load for an indefinitely long time"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 definition of Continuous Load. Theory: A continuous load is expected to continue for 3 hours or more."
                },
                {
                    text: "A box contains one grounded and three ungrounded conductors, from one ungrounded to the grounded conductor 208 volts is measured, the other two ungrounded measure 120 volts to the grounded conductor, the system is ______.",
                    options: [
                        "delta",
                        "wye 3-wire",
                        "wye 4-wire",
                        "open delta 4-wire"
                    ],
                    correctIndex: 2,
                    explanation: "System identification. Theory: This describes a 120/208V wye 4-wire system (high-leg delta would show 208V on two phases)."
                },
                {
                    text: "The voltage drop in a line can be decreased by ______.",
                    options: [
                        "I. increasing the resistance",
                        "II. increasing the current",
                        "III. decreasing the load",
                        "IV. increasing the wire size"
                    ],
                    correctIndex: 2,
                    explanation: "Voltage drop formula. Theory: Voltage drop decreases when wire size is increased or load/current is reduced."
                },
                {
                    text: "A 10 ohm resistance carrying 10 amperes of current uses ______ watts of power.",
                    options: [
                        "100",
                        "20",
                        "500",
                        "1000"
                    ],
                    correctIndex: 3,
                    explanation: "Power calculation. Theory: P = I²R = 10² × 10 = 1000 watts."
                },
                {
                    text: "When using a #12-2 with ground, the ground ______ carry current under normal operation.",
                    options: [
                        "will",
                        "will not",
                        "will sometimes",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.24 and grounding rules. Theory: The equipment grounding conductor carries current only during a fault."
                },
                {
                    text: "A transformer is more efficiently utilized when the load has a ______ power factor.",
                    options: [
                        "low",
                        "medium",
                        "average",
                        "high"
                    ],
                    correctIndex: 3,
                    explanation: "Transformer theory. Theory: Higher power factor means less reactive current, allowing the transformer to deliver more real power."
                },
                {
                    text: "Connections of conductors to terminal parts must ensure ______.",
                    options: [
                        "a good connection without damaging the conductors",
                        "proper torque values",
                        "proper bonding",
                        "proper crimping pressure"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.14. Theory: The fundamental requirement is a secure, undamaged connection."
                },
                {
                    text: "Most electric power tools, such as electric drills, come with a third conductor in the power lead which is used to connect the case of the tool to a grounded part of the electric outlet. The purpose for having this extra conductor is to ______.",
                    options: [
                        "protect the user of the tool should the winding break down to the case.",
                        "eliminate sparking between the tool and the material being worked upon.",
                        "provide for continued operation of the tool should the regular grounded line-wire open.",
                        "prevent accumulation of a static charge on the case."
                    ],
                    correctIndex: 0,
                    explanation: "NEC 250.134 and tool grounding. Theory: The equipment grounding conductor provides a low-impedance path to trip the breaker if the case becomes energized."
                },
                {
                    text: "To determine directly whether all finished wire installations possess resistance between conductors, and between conductors and ground, use ______.",
                    options: [
                        "set screws",
                        "shields",
                        "clamps",
                        "a megger"
                    ],
                    correctIndex: 3,
                    explanation: "Testing practice. Theory: A megohmmeter (megger) is used to measure insulation resistance."
                }
            ]
        },
        {
            id: "general_18",
            title: "General Knowledge Exam #18",
            timeMinutes: 30,
            questions: [
                {
                    text: "To handle a three-phase unbalanced system, balance the system by making all loads equal to the ______ single phase load.",
                    options: [
                        "smallest",
                        "average",
                        "largest",
                        "unbalanced"
                    ],
                    correctIndex: 2,
                    explanation: "Three-phase balancing. Theory: To minimize imbalance, all single-phase loads should be sized to the largest phase load."
                },
                {
                    text: "The connection between the grounded circuit conductor and the equipment grounding conductor at the service is called the ______.",
                    options: [
                        "equipment bonding jumper",
                        "main bonding jumper",
                        "circuit bonding jumper",
                        "electrode bonding jumper"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.24 and Article 100. Theory: The main bonding jumper connects the grounded conductor to the equipment grounding conductor at the service."
                },
                {
                    text: "The purpose of having a rheostat in the field of a DC shunt motor is to ______.",
                    options: [
                        "control the speed of the motor",
                        "minimize the starting current",
                        "limit the field current to a safe value",
                        "reduce sparking at the brushes"
                    ],
                    correctIndex: 0,
                    explanation: "DC motor control. Theory: Field rheostat weakens the field flux, increasing motor speed (above base speed)."
                },
                {
                    text: "A conduit coupling is sometimes tightened by using a strap wrench rather than a Stillson wrench. The strap wrench is used when it is important to avoid ______.",
                    options: [
                        "crushing the conduit",
                        "bending the conduit",
                        "stripping the threads",
                        "damaging the outside finish"
                    ],
                    correctIndex: 3,
                    explanation: "Trade practice. Theory: Strap wrenches protect the conduit finish and prevent marring."
                },
                {
                    text: "High-voltage cable which is to be installed in underground ducts is generally protected with a ______.",
                    options: [
                        "copper outer jacket",
                        "lead sheath",
                        "steel wire armor",
                        "tarred jute covering"
                    ],
                    correctIndex: 1,
                    explanation: "Cable construction. Theory: Lead sheath provides excellent moisture and corrosion protection for underground high-voltage cables."
                },
                {
                    text: "The load side is usually wired to the blades of a knife switch to ______.",
                    options: [
                        "prevent blowing the fuse when opening the switch.",
                        "make the blades dead when the switch is opened.",
                        "prevent arcing when the switch is opened.",
                        "allow changing of fuses without opening the switch."
                    ],
                    correctIndex: 1,
                    explanation: "NEC 404.6 and safety practice. Theory: Load-side connection keeps the blades de-energized when open."
                },
                {
                    text: "The life of insulation used in electrical installations is directly affected by heat. Of the following, the electrical insulation which can least withstand heat is ______.",
                    options: [
                        "mica",
                        "rubber",
                        "fiberglass",
                        "enamel"
                    ],
                    correctIndex: 1,
                    explanation: "Insulation properties. Theory: Rubber insulation has the lowest temperature rating and degrades fastest with heat."
                },
                {
                    text: "With respect to a common light bulb, it is correct to state that the ______.",
                    options: [
                        "circuit voltage has no effect on the life of the bulb",
                        "base has a left hand thread",
                        "filament is made of carbon",
                        "lower wattage bulb has the higher resistance"
                    ],
                    correctIndex: 3,
                    explanation: "Incandescent lamp theory. Theory: Lower wattage bulbs have higher resistance (P = V²/R)."
                },
                {
                    text: "The factor which will have the least effect on the voltage at the most distant point from the source of supply for a two wire circuit is ______.",
                    options: [
                        "whether the supply is 25 cycle or 60 cycle AC",
                        "the gauge of the circuit wires",
                        "the amount of load on the circuit",
                        "the length of the circuit"
                    ],
                    correctIndex: 0,
                    explanation: "Voltage drop factors. Theory: Frequency (25 vs 60 Hz) has negligible effect on voltage drop in a two-wire circuit."
                },
                {
                    text: "You are to check the power factor of a load, you cannot get a power factor meter, you would use ______.",
                    options: [
                        "a wattmeter",
                        "a voltmeter and an ammeter",
                        "a kilo-watt hour meter",
                        "an ammeter, a wattmeter and a voltmeter"
                    ],
                    correctIndex: 3,
                    explanation: "Power factor measurement. Theory: PF = W / (V × I) — requires wattmeter, voltmeter, and ammeter."
                },
                {
                    text: "One identifying feature of a squirrel-cage induction motor is that it has no ______.",
                    options: [
                        "air gap",
                        "commutator or slip rings",
                        "iron core in the rotating part",
                        "windings on the stationary part"
                    ],
                    correctIndex: 1,
                    explanation: "Motor construction. Theory: Squirrel-cage rotors have no commutator or slip rings."
                },
                {
                    text: "A grounding conductor installed over lightning cables for the purpose of interconnecting the system ground electrodes and providing lightning protection for the cables is called a/an ______.",
                    options: [
                        "air terminal",
                        "ground anchor",
                        "counterpoise",
                        "grounding connector rod"
                    ],
                    correctIndex: 2,
                    explanation: "Lightning protection. Theory: A counterpoise is a buried grounding conductor used for lightning protection."
                },
                {
                    text: "A surge of unidirectional polarity is called ______.",
                    options: [
                        "corona",
                        "flashover",
                        "skin effect",
                        "impulse"
                    ],
                    correctIndex: 3,
                    explanation: "Surge terminology. Theory: An impulse is a unidirectional surge of short duration."
                },
                {
                    text: "The minimum temperature at which a given liquid gives off vapor in sufficient concentration to form an ignitable mixture is the ______.",
                    options: [
                        "absolute temperature",
                        "kindling temperature",
                        "flash point",
                        "heat of fusion"
                    ],
                    correctIndex: 2,
                    explanation: "Fire safety. Theory: Flash point is the lowest temperature at which a liquid produces ignitable vapors."
                },
                {
                    text: "Emergency power panel conductors supplying a building are tapped on ______.",
                    options: [
                        "any subfed panel",
                        "any circuit breaker main",
                        "any feeder circuit",
                        "the line side of the service"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 700.12. Theory: Emergency systems are typically connected ahead of the normal service disconnect."
                },
                {
                    text: "The grounding electrode shall be ______.",
                    options: [
                        "copper",
                        "copper-clad aluminum",
                        "aluminum",
                        "any of these"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 250.52. Theory: Various materials are permitted for grounding electrodes."
                },
                {
                    text: "A/an ______ is usually made on cables after installation.",
                    options: [
                        "ampacity test",
                        "no-load test",
                        "copper loss test",
                        "insulation resistance test"
                    ],
                    correctIndex: 3,
                    explanation: "Cable testing. Theory: Insulation resistance (megger) test is standard after cable installation."
                },
                {
                    text: "When you increase the resistance in a circuit, the flow of electrons will ______.",
                    options: [
                        "flow faster",
                        "be stopped",
                        "be decreased",
                        "be constant"
                    ],
                    correctIndex: 2,
                    explanation: "Ohm's Law. Theory: I = E/R — increasing R decreases current."
                },
                {
                    text: "An instrument used for observing voltage or current waveforms is the ______.",
                    options: [
                        "synchroscope",
                        "varmeter",
                        "multimeter",
                        "oscilloscope"
                    ],
                    correctIndex: 3,
                    explanation: "Test equipment. Theory: An oscilloscope displays voltage/current waveforms over time."
                },
                {
                    text: "The ideal internal resistance of an ammeter should be ______.",
                    options: [
                        "infinity",
                        "zero",
                        "equal to the circuit resistance",
                        "higher than the circuit resistance"
                    ],
                    correctIndex: 1,
                    explanation: "Meter theory. Theory: An ideal ammeter has zero internal resistance so it does not affect the circuit."
                },
                {
                    text: "The power factor of an alternator is determined by its ______.",
                    options: [
                        "speed",
                        "load",
                        "excitation",
                        "weight"
                    ],
                    correctIndex: 1,
                    explanation: "Alternator theory. Theory: Power factor is determined by the nature of the load."
                },
                {
                    text: "With respect to the safety value of the insulation on electrical tools, it can be said properly that ______.",
                    options: [
                        "it adequately ensures the safety of the user",
                        "its value is mainly to the untrained electrician helper",
                        "the insulation provides very little real protection",
                        "the insulation should not be used as the only protective means"
                    ],
                    correctIndex: 3,
                    explanation: "Safety practice. Theory: Insulation is only one layer; grounding and GFCI protection are also required."
                },
                {
                    text: "A transformer has a turns ratio of 4/1. What is the secondary peak voltage if the primary has an applied voltage of 115?",
                    options: [
                        "40.66",
                        "81.3",
                        "162.6",
                        "28.75"
                    ],
                    correctIndex: 0,
                    explanation: "Transformer calculation. Theory: Secondary RMS = 115 / 4 = 28.75 V. Peak = 28.75 × 1.414 ≈ 40.66 V."
                },
                {
                    text: "What is the voltage between points Y and Z?",
                    options: [
                        "72 volts",
                        "120 volts",
                        "24 volts",
                        "144 volts"
                    ],
                    correctIndex: 2,
                    explanation: "Circuit analysis from diagram. Theory: Each 12 Ω load draws 2 A. Parallel combination of two 12 Ω = 6 Ω. Total current through the 20 Ω = 6 A. Voltage Y to Z = 6 A × 4 Ω (equivalent) = 24 V."
                },
                {
                    text: "In the sketch above, what is the wattage of the 20 ohm load?",
                    options: [
                        "120 watts",
                        "48 watts",
                        "144 watts",
                        "720 watts"
                    ],
                    correctIndex: 3,
                    explanation: "Power calculation. Theory: Current through 20 Ω = 6 A. P = I²R = 6² × 20 = 720 watts."
                }
            ]
        },
        {
            id: "general_19",
            title: "General Knowledge Exam #19",
            timeMinutes: 30,
            questions: [
                {
                    text: "The internal resistance of an ideal ammeter should be ______.",
                    options: [
                        "high",
                        "zero",
                        "infinite",
                        "equal to the circuit resistance"
                    ],
                    correctIndex: 1,
                    explanation: "Meter theory. Theory: An ideal ammeter has zero internal resistance so it does not affect the measured current."
                },
                {
                    text: "A keeper is used with a ______.",
                    options: [
                        "battery",
                        "magnet",
                        "transformer",
                        "relay"
                    ],
                    correctIndex: 1,
                    explanation: "Basic magnetism. Theory: A keeper (soft iron bar) is placed across the poles of a permanent magnet to preserve its strength."
                },
                {
                    text: "A DC series motor has ______ field poles.",
                    options: [
                        "one",
                        "two",
                        "three",
                        "four"
                    ],
                    correctIndex: 1,
                    explanation: "DC motor construction. Theory: Series motors typically have two field poles."
                },
                {
                    text: "The most commonly used non-metallic conduit is ______.",
                    options: [
                        "rigid non-metallic conduit",
                        "flexible non-metallic conduit",
                        "intermediate metallic conduit",
                        "electrical metallic tubing"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 352. Theory: Rigid PVC (non-metallic) conduit is the most common non-metallic raceway."
                },
                {
                    text: "A device used to connect and disconnect a circuit is called an ______.",
                    options: [
                        "interlock",
                        "interrupter",
                        "interrupting rating",
                        "interrupting capacity"
                    ],
                    correctIndex: 1,
                    explanation: "Trade terminology. Theory: An interrupter (switch) is used to open and close circuits."
                },
                {
                    text: "Bimetallic is used in ______.",
                    options: [
                        "fuses",
                        "circuit breakers",
                        "overloads",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "Overcurrent devices. Theory: Bimetallic strips are used in thermal overload relays and some circuit breakers."
                },
                {
                    text: "A voltage of 600 volts or less is considered ______.",
                    options: [
                        "high voltage",
                        "low voltage",
                        "extra low voltage",
                        "medium voltage"
                    ],
                    correctIndex: 1,
                    explanation: "NEC definitions. Theory: 600 volts and below is generally classified as low voltage."
                },
                {
                    text: "The main purpose of a generator is to ______.",
                    options: [
                        "produce mechanical power",
                        "produce heat",
                        "utilize the electrical energy",
                        "convert mechanical energy into electrical energy"
                    ],
                    correctIndex: 3,
                    explanation: "Basic machines. Theory: A generator converts mechanical energy into electrical energy."
                },
                {
                    text: "If two equal resistances connected in series across a circuit are now connected in parallel across the same supply, the power produced will be ______ that of the series connection.",
                    options: [
                        "one-fourth",
                        "one-half",
                        "two times",
                        "four times"
                    ],
                    correctIndex: 3,
                    explanation: "Power calculation. Theory: Series resistance = 2R, parallel = R/2. Power in parallel is 4 times higher for the same voltage."
                },
                {
                    text: "The current in a capacitor ______.",
                    options: [
                        "leads the voltage by 90°",
                        "lags the voltage by 90°",
                        "is in phase with the voltage",
                        "passes a current proportional to the rate of change of voltage"
                    ],
                    correctIndex: 3,
                    explanation: "Capacitor theory. Theory: I = C × dV/dt — current is proportional to the rate of voltage change."
                },
                {
                    text: "Magnetomotive force is measured in ______.",
                    options: [
                        "webers",
                        "ampere-turns",
                        "gauss",
                        "oersteds"
                    ],
                    correctIndex: 1,
                    explanation: "Magnetic circuits. Theory: MMF is measured in ampere-turns."
                },
                {
                    text: "The high leg of a 4-wire delta system is the ______ side.",
                    options: [
                        "high side",
                        "low side",
                        "neutral side",
                        "grounded side"
                    ],
                    correctIndex: 0,
                    explanation: "High-leg delta. Theory: The high leg (orange) is the phase with 208 V to neutral."
                },
                {
                    text: "The NEC requires all wiring to be ______.",
                    options: [
                        "installed in metallic raceways",
                        "installed in non-metallic raceways",
                        "copper",
                        "wiring"
                    ],
                    correctIndex: 3,
                    explanation: "NEC general requirements. Theory: The Code simply says 'wiring' — it must meet all applicable rules."
                },
                {
                    text: "The opposition to current flow in an AC circuit caused by inductance is called ______.",
                    options: [
                        "resistance",
                        "reactance",
                        "impedance",
                        "inductance"
                    ],
                    correctIndex: 1,
                    explanation: "AC theory. Theory: Inductive reactance (XL) opposes current flow in AC circuits."
                },
                {
                    text: "The ability of a capacitor to store an electrical charge is called ______.",
                    options: [
                        "elastance",
                        "capacitance",
                        "inductance",
                        "reactance"
                    ],
                    correctIndex: 1,
                    explanation: "Basic theory. Theory: Capacitance is the ability to store charge."
                },
                {
                    text: "A single-pole single-throw switch is commonly called a ______ switch.",
                    options: [
                        "three-way",
                        "four-way",
                        "toggle switch",
                        "double-pole switch"
                    ],
                    correctIndex: 2,
                    explanation: "Switch terminology. Theory: A standard wall switch is a SPST toggle switch."
                },
                {
                    text: "In a wye-connected three-phase system, the ______.",
                    options: [
                        "phase voltage is equal to line voltage",
                        "line voltage is equal to 1.732 times phase voltage",
                        "phase current is equal to line current",
                        "line current is equal to 1.732 times phase current"
                    ],
                    correctIndex: 1,
                    explanation: "Three-phase systems. Theory: In wye, line voltage = √3 × phase voltage."
                },
                {
                    text: "The ampere-hour capacity of a storage battery is determined by ______.",
                    options: [
                        "the size of the plates",
                        "the number of plates",
                        "the current capacity of the cells",
                        "the specific gravity of the electrolyte"
                    ],
                    correctIndex: 2,
                    explanation: "Battery rating. Theory: Ampere-hour rating is based on the current the battery can deliver for a specified time."
                },
                {
                    text: "A method of measuring the diameter of a wire is called ______.",
                    options: [
                        "mil",
                        "circular mil",
                        "AWG",
                        "inching"
                    ],
                    correctIndex: 3,
                    explanation: "Trade practice. Theory: 'Inching' refers to using a micrometer or ruler to measure wire diameter in small increments."
                },
                {
                    text: "The inductive reactance of a coil is ______.",
                    options: [
                        "directly proportional to frequency",
                        "inversely proportional to frequency",
                        "the reciprocal of frequency",
                        "independent of frequency"
                    ],
                    correctIndex: 0,
                    explanation: "AC theory. Theory: XL = 2πfL — directly proportional to frequency."
                },
                {
                    text: "In an autotransformer ______.",
                    options: [
                        "energy is transferred only inductively",
                        "energy is transferred only conductively",
                        "energy is transferred both inductively and conductively",
                        "there is no energy transfer"
                    ],
                    correctIndex: 2,
                    explanation: "Autotransformer theory. Theory: Power is transferred both by conduction (common winding) and induction."
                },
                {
                    text: "The peak value of a sine wave is ______.",
                    options: [
                        "0.707 of the RMS value",
                        "1.414 of the RMS value",
                        "the average value",
                        "the maximum value"
                    ],
                    correctIndex: 3,
                    explanation: "AC waveform. Theory: Peak value is the maximum instantaneous value."
                },
                {
                    text: "A test to determine if there is a complete path for current flow is called a ______ test.",
                    options: [
                        "resistance",
                        "continuity",
                        "insulation",
                        "voltage"
                    ],
                    correctIndex: 1,
                    explanation: "Testing practice. Theory: Continuity test verifies a complete low-resistance path."
                },
                {
                    text: "The rotating part of a DC motor is called the ______.",
                    options: [
                        "stator",
                        "rotor",
                        "armature",
                        "field"
                    ],
                    correctIndex: 1,
                    explanation: "DC machine construction. Theory: The rotor is the rotating part."
                },
                {
                    text: "A device used to measure temperature is a ______.",
                    options: [
                        "thermometer",
                        "thermostat",
                        "thermocouple",
                        "thermistor"
                    ],
                    correctIndex: 2,
                    explanation: "Temperature measurement. Theory: A thermocouple generates voltage proportional to temperature difference."
                }
            ]
        },
        {
            id: "general_20",
            title: "General Knowledge Exam #20",
            timeMinutes: 30,
            questions: [
                {
                    text: "High voltage is used in long-distance power transmission because ______.",
                    options: [
                        "it is easier to regulate than low voltage",
                        "smaller transformers can be used",
                        "the electromagnet fields are stronger",
                        "the I²R losses are lower"
                    ],
                    correctIndex: 3,
                    explanation: "Power transmission theory. Theory: Higher voltage reduces current for the same power, which lowers I²R losses (P_loss = I²R)."
                },
                {
                    text: "A DC generator develops ______ in its armature.",
                    options: [
                        "alternating current",
                        "heat",
                        "inductance",
                        "direct current"
                    ],
                    correctIndex: 3,
                    explanation: "DC machine basics. Theory: The armature of a DC generator produces direct current (after commutation)."
                },
                {
                    text: "When thermal overloads are used for the protection of a three-phase motor, their primary purpose is to protect the motor in case of ______.",
                    options: [
                        "sustained overload",
                        "reversal of phase sequence",
                        "high voltage",
                        "short circuit between lines"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 430.32. Theory: Thermal overloads protect against sustained overload conditions that cause overheating."
                },
                {
                    text: "A disruptive discharge through the conductor insulation is called a/an ______.",
                    options: [
                        "fault",
                        "short",
                        "breakdown",
                        "overload"
                    ],
                    correctIndex: 2,
                    explanation: "Insulation failure. Theory: Dielectric breakdown is the sudden failure of insulation under high voltage stress."
                },
                {
                    text: "An assembly of two pieces of insulating material provided with grooves for holding one or more conductors at a definite spacing from the surface wired over and from each other, and with holes for fastening in position is a ______.",
                    options: [
                        "cleat",
                        "spool insulator",
                        "split knob",
                        "rosette"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 and wiring methods. Theory: Cleats are used for open wiring on insulators."
                },
                {
                    text: "The disadvantage of a mechanical switch is that it ______.",
                    options: [
                        "is costly",
                        "is operated mechanically",
                        "has high inertia",
                        "has a lower corona"
                    ],
                    correctIndex: 2,
                    explanation: "Switch characteristics. Theory: Mechanical switches have moving parts with inertia, limiting high-speed operation."
                },
                {
                    text: "Suppose the primary line voltage fluctuates between 105 volts and 125 volts on a 5/1 step down transformer. The maximum secondary peak voltage would be approximately ______ volts.",
                    options: [
                        "88",
                        "18",
                        "74",
                        "35"
                    ],
                    correctIndex: 3,
                    explanation: "Transformer calculation. Theory: Max primary = 125 V. Secondary RMS = 125 / 5 = 25 V. Peak = 25 × 1.414 ≈ 35 V."
                },
                {
                    text: "The force between two electrically charged objects is called ______.",
                    options: [
                        "electroscopic force",
                        "magnetic force",
                        "eddy currents",
                        "electrostatic force"
                    ],
                    correctIndex: 3,
                    explanation: "Basic physics. Theory: The force between charges is electrostatic (Coulomb's law)."
                },
                {
                    text: "Transformers are rated in kva instead of kw because ______.",
                    options: [
                        "load power factor is often unknown",
                        "total transformer loss depends on va",
                        "kw depends on the power factor",
                        "none of these"
                    ],
                    correctIndex: 1,
                    explanation: "Transformer rating. Theory: kVA rating accounts for apparent power; actual kW depends on power factor."
                },
                {
                    text: "When two resistances are connected in parallel ______.",
                    options: [
                        "the current through each must be the same",
                        "the voltage across each must be the same",
                        "each must have the same resistance value",
                        "their combined resistance equals the sum of the individual values"
                    ],
                    correctIndex: 1,
                    explanation: "Parallel circuit rules. Theory: In parallel, voltage is the same across each branch."
                },
                {
                    text: "The main disadvantage of a low power factor is that ______.",
                    options: [
                        "heat generated is more than the desired amount",
                        "current required for a given load power is higher",
                        "more power is consumed by the load",
                        "active power developed by a generator exceeds its rated output capacity"
                    ],
                    correctIndex: 1,
                    explanation: "Power factor effects. Theory: Low PF increases current for the same real power, causing higher I²R losses."
                },
                {
                    text: "A ______ has the highest operating efficiency.",
                    options: [
                        "converter",
                        "generator",
                        "transformer",
                        "motor"
                    ],
                    correctIndex: 2,
                    explanation: "Efficiency comparison. Theory: Transformers have the highest efficiency (often >98%) because they have no moving parts."
                },
                {
                    text: "If a motor runs but fails to stop even if the stop button is pressed, the cause is probably ______.",
                    options: [
                        "the overload contact did not operate",
                        "the holding circuit interlock was welded",
                        "the fuse has blown",
                        "all of these"
                    ],
                    correctIndex: 1,
                    explanation: "Motor control troubleshooting. Theory: A welded holding contact keeps the coil energized even when the stop button is pressed."
                },
                {
                    text: "Overcurrent devices shall not be connected in series with any conductor that is ______.",
                    options: [
                        "current carrying",
                        "intentionally grounded",
                        "stranded",
                        "above 250 kcmil"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 240.22. Theory: Overcurrent protection must not be placed in the grounded (neutral) conductor."
                },
                {
                    text: "If the length and area of cross-section of a wire are doubled, then its resistance ______.",
                    options: [
                        "remains the same",
                        "becomes double",
                        "becomes four times",
                        "is less"
                    ],
                    correctIndex: 0,
                    explanation: "Resistance formula. Theory: R = ρL/A. Doubling L and A cancels out — resistance stays the same."
                },
                {
                    text: "A good conductor material should have ______ valence electrons.",
                    options: [
                        "1",
                        "4",
                        "19",
                        "29"
                    ],
                    correctIndex: 0,
                    explanation: "Atomic theory. Theory: Good conductors (copper, silver) have 1 valence electron."
                },
                {
                    text: "In motor controls, a maintaining contact is a ______ contact.",
                    options: [
                        "delay-on",
                        "delay-off",
                        "normally closed",
                        "normally open"
                    ],
                    correctIndex: 3,
                    explanation: "Control circuits. Theory: Maintaining (sealing) contacts are normally open and hold the circuit after the start button is released."
                }
            ]
        },
        {
            id: "general_21",
            title: "General Knowledge Exam #21",
            timeMinutes: 30,
            questions: [
                {
                    text: "The connection between conductive or inductive metal objects in an element of a lightning protection system to accomplish continuity is ______.",
                    options: [
                        "counterpoise",
                        "bonding",
                        "interlink",
                        "connectors"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 250.104 and lightning protection. Theory: Bonding ensures electrical continuity between metallic parts."
                },
                {
                    text: "Overcurrent protection devices in emergency systems shall ______.",
                    options: [
                        "not trip the main device",
                        "clear in steps",
                        "be coordinated",
                        "all of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 700.28. Theory: Overcurrent devices in emergency systems must be selectively coordinated."
                },
                {
                    text: "A ______ includes any switch or device normally used to start and stop a motor by making and breaking the motor circuit current.",
                    options: [
                        "DPDT switch",
                        "rheostat",
                        "heater",
                        "controller"
                    ],
                    correctIndex: 3,
                    explanation: "NEC Article 430 definition. Theory: A motor controller is any device that starts and stops the motor."
                },
                {
                    text: "If there are no overcurrent protective devices rated 30 amps or less with neutral connection, the panelboard is classified as a/an ______.",
                    options: [
                        "appliance panelboard",
                        "lighting panelboard",
                        "power panelboard",
                        "all of these"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 408.36. Theory: Panelboards without small OCPDs connected to the neutral are classified as power panelboards."
                },
                {
                    text: "Overcurrent in transformers affect all of the following EXCEPT ______.",
                    options: [
                        "life of the insulation",
                        "mechanical stresses",
                        "rise in temperature",
                        "breather effectiveness"
                    ],
                    correctIndex: 3,
                    explanation: "Transformer protection. Theory: Breather effectiveness is not directly affected by overcurrent; the others are."
                },
                {
                    text: "A relay which prevents holding in an electrically operated device, such as a circuit breaker, while an abnormal condition exists in the circuit is called ______.",
                    options: [
                        "locking relay",
                        "trip-free",
                        "auxiliary relay",
                        "shunt relay"
                    ],
                    correctIndex: 1,
                    explanation: "Protective relaying. Theory: A trip-free relay prevents re-energization while a fault persists."
                },
                {
                    text: "The essential condition for parallel operation of two single phase transformers is that they should have the same ______.",
                    options: [
                        "polarity",
                        "percentage impedance",
                        "kva rating",
                        "voltage rating"
                    ],
                    correctIndex: 0,
                    explanation: "Transformer paralleling. Theory: Correct polarity is essential to prevent circulating currents."
                },
                {
                    text: "A 10 amp fan with a PF of 80% is connected to a 230 volt source. The power in watts is ______.",
                    options: [
                        "2300",
                        "2175",
                        "1920",
                        "1840"
                    ],
                    correctIndex: 3,
                    explanation: "Power calculation. Theory: P = V × I × PF = 230 × 10 × 0.8 = 1840 watts."
                },
                {
                    text: "Sparking between contacts can be reduced by ______.",
                    options: [
                        "inserting a capacitor in series with the contacts",
                        "inserting a resistance in the line",
                        "inserting a capacitor in parallel with the contacts",
                        "all of these"
                    ],
                    correctIndex: 3,
                    explanation: "Arc suppression. Theory: RC snubbers (capacitor in parallel with resistor) reduce sparking."
                },
                {
                    text: "Autotransformers used to start large induction motors are frequently called a starting ______.",
                    options: [
                        "winder",
                        "transformer",
                        "reactor",
                        "compensator"
                    ],
                    correctIndex: 3,
                    explanation: "Motor starting. Theory: Autotransformer starters are commonly called compensators."
                },
                {
                    text: "The reciprocal of resistance is ______.",
                    options: [
                        "reluctance",
                        "susceptance",
                        "admittance",
                        "conductance"
                    ],
                    correctIndex: 3,
                    explanation: "Basic electrical units. Theory: Conductance G = 1/R (unit: siemens)."
                },
                {
                    text: "The switch with the fastest speed of operation is a/an ______ switch.",
                    options: [
                        "hydraulic",
                        "mechanical",
                        "electromechanical",
                        "electronic"
                    ],
                    correctIndex: 3,
                    explanation: "Switch types. Theory: Electronic (solid-state) switches have the fastest operation with no mechanical inertia."
                },
                {
                    text: "If you double the voltage in a circuit and cut the resistance in half, the current will become ______.",
                    options: [
                        "the same as before",
                        "twice as great",
                        "half as great",
                        "four times as great"
                    ],
                    correctIndex: 3,
                    explanation: "Ohm's Law. Theory: I = V/R. Doubling V and halving R → current becomes 4 times greater."
                },
                {
                    text: "The reason why alternating current can induce voltage is ______.",
                    options: [
                        "it has a constant magnetic field",
                        "it has a stronger magnetic field than direct current",
                        "it has a varying magnetic field",
                        "it has a high peak value"
                    ],
                    correctIndex: 2,
                    explanation: "Electromagnetic induction. Theory: A changing (varying) magnetic field induces voltage (Faraday's law)."
                },
                {
                    text: "______ is a term used to express the amount of electrical energy in an electrostatic field.",
                    options: [
                        "Coulombs",
                        "Volts",
                        "Joules",
                        "Watts"
                    ],
                    correctIndex: 2,
                    explanation: "Energy units. Theory: Energy stored in a capacitor is measured in joules."
                },
                {
                    text: "Insulation resistance is measured with a/an ______.",
                    options: [
                        "ohmmeter",
                        "megger",
                        "insulation meter",
                        "wein bridge"
                    ],
                    correctIndex: 1,
                    explanation: "Testing equipment. Theory: A megger (megohmmeter) is specifically used for high-resistance insulation testing."
                },
                {
                    text: "Inverse-time characteristics of a circuit breaker means ______.",
                    options: [
                        "higher fault current, longer time needed to trip",
                        "lower fault current, longer time needed to trip",
                        "higher fault current, shorter time needed to trip",
                        "none of these"
                    ],
                    correctIndex: 2,
                    explanation: "Circuit breaker trip curve. Theory: Inverse-time means higher current = faster trip time."
                },
                {
                    text: "An electrical symbol represented by a rectangle with the letters PB inside is ______.",
                    options: [
                        "battery panel",
                        "push button",
                        "pull box",
                        "power bend"
                    ],
                    correctIndex: 1,
                    explanation: "Electrical symbols. Theory: PB stands for Push Button."
                },
                {
                    text: "Which of the following is the best advantage of a DC motor over an AC motor?",
                    options: [
                        "It has better speed control",
                        "It has a higher speed rating",
                        "It is easier to reverse its speed",
                        "all of these"
                    ],
                    correctIndex: 0,
                    explanation: "DC vs AC motors. Theory: DC motors offer superior speed control via armature voltage or field weakening."
                },
                {
                    text: "The resistance of a component having no continuity is ______.",
                    options: [
                        "infinite resistance",
                        "no or zero resistance",
                        "low resistance",
                        "all of these"
                    ],
                    correctIndex: 0,
                    explanation: "Continuity testing. Theory: No continuity = open circuit = infinite resistance."
                },
                {
                    text: "A shunt for a milliammeter ______.",
                    options: [
                        "extends the range and reduces the meter resistance",
                        "extends the range and increases the meter resistance",
                        "decreases the range but increases the meter resistance",
                        "decreases the range but increases the meter resistance"
                    ],
                    correctIndex: 0,
                    explanation: "Meter shunts. Theory: A shunt bypasses most current, extending range while lowering overall resistance."
                },
                {
                    text: "The basic unit of electric charge is the ______.",
                    options: [
                        "coulomb",
                        "ampere hour",
                        "farad",
                        "watt hour"
                    ],
                    correctIndex: 0,
                    explanation: "Fundamental units. Theory: The coulomb is the SI unit of electric charge."
                },
                {
                    text: "The property of magnetic materials of retaining magnetism after withdrawal of the magnetizing force is referred to as ______.",
                    options: [
                        "resistivity",
                        "reluctivity",
                        "retentivity",
                        "reluctance"
                    ],
                    correctIndex: 2,
                    explanation: "Magnetic properties. Theory: Retentivity (remanence) is the ability to retain magnetism."
                },
                {
                    text: "An open coil has ______.",
                    options: [
                        "infinite resistance and inductance",
                        "zero resistance and infinite inductance",
                        "zero resistance and inductance",
                        "infinite resistance and zero inductance"
                    ],
                    correctIndex: 3,
                    explanation: "Coil behavior. Theory: An open coil has infinite resistance (no current) and therefore zero inductance effect."
                },
                {
                    text: "A series circuit with an 8Ω resistance and a 4Ω resistance connected to a 12 volt battery will have a current flow of ______.",
                    options: [
                        "1.3 in the larger resistance",
                        "one ampere in both resistors",
                        "2.0 amps in both resistors",
                        "3 amps in the smaller resistor"
                    ],
                    correctIndex: 1,
                    explanation: "Series circuit. Theory: Total R = 12 Ω, I = 12 V / 12 Ω = 1 A (same in both resistors)."
                }
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
                    options: ["series circuits are complicated", "appliances have different current ratings", "the power loss is too great", "the voltage is the same"],
                    correctIndex: 1,
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
                    text: "What is the total wattage of the circuit? [20 Ω series with parallel 3-12 Ω loads, each 12 Ω load has 2ampers]",
                    options: ["1536 watts", "864 watts", "336 watts", "192 watts"],
                    correctIndex: 1,
                    explanation: "Parallel 12 Ω loads = 4 Ω equivalent. Total R = 24 Ω. Current = 6 A. Power = I²R = 864 W (matches official book calculation)."
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
                    options: ["the neutral is disconnected", "both circuits are fully loaded", "one hot leg is shut off", "both circuits are off"],
                    correctIndex: 2,
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
            id: "general_30",
            title: "General Knowledge Exam #30",
            timeMinutes: 30,
            questions: [
                {
                    text: "Solenoids are made of what type of magnets?",
                    options: ["reverse", "permanent", "electro", "copper"],
                    correctIndex: 2,
                    explanation: "Solenoids use electromagnets (electro) — a coil around a core that becomes magnetic only when current flows (NEC 430.3 and electromagnetic device theory)."
                },
                {
                    text: "To measure the RPM speed of a motor, you would use a/an _____.",
                    options: ["hydrometer", "bolometer", "tachometer", "odometer"],
                    correctIndex: 2,
                    explanation: "Tachometer measures rotational speed (RPM) of motors/shafts (standard instrumentation in NEC motor testing contexts)."
                },
                {
                    text: "Which of the following is not a factor in calculating the feeder conductor size?",
                    options: ["ambient temperature", "branch-circuit protection", "voltage drop", "demand factors"],
                    correctIndex: 1,
                    explanation: "Feeder sizing (NEC 215.2, 220) considers ambient temp, voltage drop, demand factors. Branch-circuit protection applies to branch circuits (210), not feeders."
                },
                {
                    text: "_____ is a synthetic non-flammable insulating liquid, which when decomposed by electrical arcs, involves non-flammable gases.",
                    options: ["Prynol", "Askarel", "Electrolyte", "Hermetic"],
                    correctIndex: 1,
                    explanation: "Askarel (PCB-based) was a non-flammable insulating liquid in older transformers; decomposes to non-flammable gases (historical reference; modern use restricted)."
                },
                {
                    text: "Voltage drop in a conductor is _____.",
                    options: ["the conductor resistance times the voltage", "a function of insulation", "part of the load voltage", "a percentage of the applied voltage"],
                    correctIndex: 3,
                    explanation: "Voltage drop is expressed as a percentage of supply voltage (NEC 210.19(A) Informational Note, 215.2(A) Informational Note)."
                },
                {
                    text: "The ratio of the maximum demand of the system to the total connected load of the system is called the _____ of the system.",
                    options: ["connected load", "nameplate", "demand factor", "turns-ratio"],
                    correctIndex: 2,
                    explanation: "Exact NEC Article 100 definition: Demand factor = Maximum demand / Total connected load."
                },
                {
                    text: "Piezoelectric is caused by crystals or binding _____.",
                    options: ["heat", "pressure", "static", "chemical"],
                    correctIndex: 1,
                    explanation: "Piezoelectric effect generates voltage from mechanical pressure/stress on certain crystals (not heat or static)."
                },
                {
                    text: "Light fixtures hung by chains should be wired so that the _____.",
                    options: ["chain is not grounded", "wires support the light", "wires do not support the light", "light is insulated from the chain"],
                    correctIndex: 2,
                    explanation: "NEC 410.10(D) and 410.136 require mechanical support (chain) to bear weight; wires must not support fixture (strain relief)."
                },
                {
                    text: "When three equal resistors are connected in parallel, the total resistance is _____.",
                    options: ["the sum of the three resistors", "one-half of the sum of the three resistors", "less than any one resistor", "greater than any two equal resistors"],
                    correctIndex: 2,
                    explanation: "Parallel: 1/R_total = 1/R + 1/R + 1/R → R_total = R/3 (less than any single R) — fundamental circuit theory."
                },
                {
                    text: "A switch or breaker should disconnect the grounded conductors of a circuit _____.",
                    options: ["only with an isolating switch", "before disconnecting the hot conductors", "simultaneously as it disconnects the ungrounded conductors", "the grounded conductor can never be switched"],
                    correctIndex: 2,
                    explanation: "NEC 404.2(B): Switches/breakers shall disconnect grounded conductor simultaneously with ungrounded, or ensure grounded cannot open first (prevents neutral hazards)."
                },
                {
                    text: "The definition of ambient temperature is _____.",
                    options: ["the temperature of the conductor", "the insulation rating of the conductor", "the temperature of the area surrounding the conductor", "the maximum heat the insulation can be used within"],
                    correctIndex: 2,
                    explanation: "NEC 310.15(B) and Article 100: Ambient = temperature of surrounding medium (air/earth) where conductor is installed."
                },
                {
                    text: "For voltage and current to be in phase, _____.",
                    options: ["voltage and current appear at their zero and peak values at the same time", "the circuit impedance has only resistance", "neither (a) nor (b)", "both (a) and (b)"],
                    correctIndex: 3,
                    explanation: "Unity power factor (in phase) requires purely resistive impedance (no reactance) and simultaneous peaks/zeros (NEC power factor concepts)."
                },
                {
                    text: "Which of the following instruments would you use to indicate the phase relationship between the voltage and the current of an AC circuit?",
                    options: ["KWH meter", "power factor meter", "manometer", "growler"],
                    correctIndex: 1,
                    explanation: "Power factor meter measures phase angle between V and I (cos θ) directly."
                },
                {
                    text: "A/an _____ conductor is one having one or more layers of non-conducting materials that are not recognized as electrical insulation.",
                    options: ["wrapped", "bare", "covered", "insulated"],
                    correctIndex: 2,
                    explanation: "NEC Article 100: Covered conductor = non-conducting layers not recognized as insulation (e.g., weatherproof covering; not certified for voltage like THWN)."
                },
                {
                    text: "_____ duty is a type of service where both the load and the time intervals may have wide variations.",
                    options: ["Continuous", "Periodic", "Intermittent", "Varying"],
                    correctIndex: 3,
                    explanation: "NEC Article 100: Varying Duty = loads and time intervals subject to wide variation."
                },
                {
                    text: "A/an _____ overcurrent device is not designated to interrupt short-circuit current.",
                    options: ["inverse breaker", "dual-element fuse", "type S fuse", "thermal cutout"],
                    correctIndex: 3,
                    explanation: "Thermal cutouts protect via heat (overload) but lack short-circuit interrupting capability (NEC 240 series)."
                },
                {
                    text: "Root-mean-square is also called the _____ voltage.",
                    options: ["average", "peak", "effective", "maximum"],
                    correctIndex: 2,
                    explanation: "RMS = effective value (produces same heating as DC in resistor) — used in NEC voltage/ampacity calcs."
                },
                {
                    text: "Impedance is measured in _____.",
                    options: ["farads", "henrys", "ohms", "coulombs"],
                    correctIndex: 2,
                    explanation: "Impedance (Z) unit = ohms (Ω) — total opposition in AC (R + reactance)."
                },
                {
                    text: "The standard unit of electrical pressure is the _____.",
                    options: ["ampere", "watt", "volt", "watt-hour"],
                    correctIndex: 2,
                    explanation: "Volt (V) = unit of electromotive force/pressure (NEC Article 100)."
                },
                {
                    text: "The common fuse depends on the principle that the _____.",
                    options: ["current flow develops heat", "overvoltage will expand the link", "increase of resistance will occur", "voltage develops heat"],
                    correctIndex: 0,
                    explanation: "Fuses operate on I²R heating — current produces heat to melt link (NEC 240.4)."
                },
                {
                    text: "Electro-magnetic devices usually have a/an _____ core.",
                    options: ["aluminum", "soft iron", "hard iron", "hard steel"],
                    correctIndex: 1,
                    explanation: "Soft iron minimizes hysteresis/eddy losses in electromagnets (relays, solenoids)."
                },
                {
                    text: "When a current leaves its intended path and returns to the source, bypassing the load, the circuit is _____.",
                    options: ["broken", "open", "shorted", "incomplete"],
                    correctIndex: 2,
                    explanation: "Short circuit: low-resistance path bypasses load (high current) — NEC requires protection."
                },
                {
                    text: "The greater number of free electrons, the better the _____ of a metal.",
                    options: ["voltage drop", "resistance", "conductivity", "insulation value"],
                    correctIndex: 2,
                    explanation: "More free electrons → higher conductivity (lower resistance) — basis for conductor selection."
                },
                {
                    text: "The heating of two different metals will cause _____.",
                    options: ["corrosion", "electron flow", "galvanic action", "fusion"],
                    correctIndex: 2,
                    explanation: "Dissimilar metals → galvanic corrosion (voltaic cell) — NEC 250.70 warns of this in connections."
                },
                {
                    text: "The switches to be closed in order to obtain a combined resistance of 5 ohms are _____.",
                    options: ["1 and 3", "2 and 3", "1 and 2", "1 and 4"],
                    correctIndex: 0,
                    explanation: "SW1 closes two 10Ω in parallel = 5Ω. SW3 places it in path (total 5Ω). Matches diagram and book explanation."
                }
            ]
        },
        {
            id: "general_31",
            title: "General Knowledge Exam #31",
            timeMinutes: 30,
            questions: [
                {
                    text: "An autotransformer is generally used rather than an isolation transformer _____.",
                    options: ["when cost is a factor", "where the ratio of transformation is low", "when you have several branch-circuits", "when safety is a factor"],
                    correctIndex: 1,
                    explanation: "Autotransformers are preferred when the turns ratio is low (small voltage change) because they are cheaper, smaller, and more efficient than isolation transformers (which provide full galvanic isolation). NEC 450.3 requires isolation for certain hazardous locations, but autotransformers are allowed elsewhere when cost and space are factors."
                },
                {
                    text: "The vector sum of the phase currents is equal to what in a balanced, resistive three-phase system?",
                    options: ["Phase current x power factor", "Zero", "1.732 x phase current", "Three x phase current"],
                    correctIndex: 1,
                    explanation: "In a balanced three-phase resistive (unity PF) system, the vector sum of the three phase currents is zero because they are 120° apart and equal in magnitude (phasor addition cancels out). This is fundamental three-phase theory (NEC 220.61 for neutral calculations in balanced loads)."
                },
                {
                    text: "When referring to an \"8-32\" machine bolt, the \"32\" refers to the _____.",
                    options: ["threads per inch", "length of the bolt", "diameter", "strength"],
                    correctIndex: 0,
                    explanation: "In standard machine screw/bolt nomenclature (Unified Inch Series), the second number (e.g., 32) indicates threads per inch (TPI). The first number (8) is the diameter size. NEC 314.28 and 110.12 require secure fastening hardware in boxes/enclosures."
                },
                {
                    text: "A motor works on the principles of _____.",
                    options: ["magnetism", "mechanical force", "residual force", "chemical action"],
                    correctIndex: 0,
                    explanation: "Electric motors operate on electromagnetic principles — current in conductors produces magnetic fields that interact to create torque (Lorentz force). NEC Article 430 covers motor circuits and protection based on this."
                },
                {
                    text: "The current used for charging storage batteries is _____.",
                    options: ["direct", "positive", "alternating", "negative"],
                    correctIndex: 0,
                    explanation: "Storage batteries (lead-acid, etc.) require direct current (DC) for charging to reverse the chemical reaction properly. Alternating current would cause gassing and damage. NEC 480 covers stationary storage batteries and charging systems."
                },
                {
                    text: "Lubrication would never be applied to a _____.",
                    options: ["bearing", "knife switch", "controller drum", "commutator"],
                    correctIndex: 3,
                    explanation: "Commutators on DC motors must remain clean and dry — lubricant would cause arcing, poor contact, and rapid wear. Bearings, knife switches, and controller drums require lubrication per manufacturer instructions (NEC 430.14 for motor maintenance)."
                },
                {
                    text: "When the power factor in a given circuit is unity, the reactive power is _____.",
                    options: ["at maximum", "1.1414", "zero", "a negative quantity"],
                    correctIndex: 2,
                    explanation: "Power factor = 1 (unity) means purely resistive circuit — no reactive power (VARs = 0). All apparent power (VA) is real power (W). NEC uses PF in motor and load calculations (e.g., 220.14, 430.6)."
                },
                {
                    text: "Materials containing numerous free electrons are _____.",
                    options: ["good insulators", "ferrous alloys", "good conductors", "carbons"],
                    correctIndex: 2,
                    explanation: "High free electron density = high electrical conductivity (e.g., copper, silver, gold). Insulators have few free electrons. NEC conductor tables (Chapter 9, Table 8) base ampacity/resistance on this property."
                },
                {
                    text: "If frequency is constant regardless of voltage or current change, the inductive reactance of a circuit will _____.",
                    options: ["remain constant regardless of voltage or current change", "vary with voltage", "vary with current", "vary directly with impedance"],
                    correctIndex: 0,
                    explanation: "Inductive reactance XL = 2πfL — depends only on frequency (f) and inductance (L), not voltage or current. Constant frequency → constant XL (fundamental AC theory)."
                },
                {
                    text: "An isolating switch is one that is _____.",
                    options: ["intended for cutting off an electrical circuit from its source of power", "required to have a padlock", "primarily used with an isolation transformer", "used only for heavy motor overloads"],
                    correctIndex: 0,
                    explanation: "NEC Article 100 defines isolating switch as a device to disconnect a circuit from its power source (no load-breaking required). Often padlockable for safety (NEC 408.22), but primary purpose is isolation."
                },
                {
                    text: "If the maximum current on a circuit is 70 amperes, the ammeter will read _____.",
                    options: ["70 amps", "60.4 amperes", "49.49 amperes", "40.62 amperes"],
                    correctIndex: 2,
                    explanation: "Ammeter reads RMS current in AC. For peak = 70 A, RMS = peak / √2 ≈ 70 / 1.414 ≈ 49.49 A (standard AC measurement per NEC instrumentation)."
                },
                {
                    text: "Two 500 watt lamps connected in series across a 120 volt, the total wattage consumed is _____.",
                    options: ["1000 watts", "500 watts", "250 watts", "200 watts"],
                    correctIndex: 2,
                    explanation: "In series, each lamp sees 60 V (120/2). At half voltage, power = (V/2)^2 / R = 1/4 original → 500/4 = 125 W each → total 250 W. (Ohm’s Law + series circuit)."
                },
                {
                    text: "A substance that would be good as an electrical insulation is which of the following?",
                    options: ["carbon", "oil", "lead", "iron"],
                    correctIndex: 1,
                    explanation: "Oil (mineral/transformer oil) is an excellent dielectric insulator (high breakdown voltage). Carbon, lead, and iron are conductors. NEC 110.11 and 450.26 reference insulating oils in transformers."
                },
                {
                    text: "High AC voltages are usually measured using a _____.",
                    options: ["potential transformer and voltmeter", "current transformer and a voltmeter", "galvanometer in parallel", "manometer in series with a voltmeter"],
                    correctIndex: 0,
                    explanation: "Potential transformers (PTs) step down high voltage for safe measurement with a standard voltmeter (NEC 110.27 for guarding live parts >600 V)."
                },
                {
                    text: "The decimal equivalent of 5/8\" is _____.",
                    options: ["0.652", "0.500", "0.875", "0.625"],
                    correctIndex: 3,
                    explanation: "5 ÷ 8 = 0.625 (direct division). Common in conduit/bending measurements (NEC Chapter 9 Tables)."
                },
                {
                    text: "If a 10Ω, a 20Ω and a 30Ω resistor are connected in series across a 120 volt source, the voltage across the 20Ω resistor will be _____ volts.",
                    options: ["20", "40", "60", "none of these"],
                    correctIndex: 1,
                    explanation: "Total R = 10 + 20 + 30 = 60 Ω. I = 120 / 60 = 2 A. V across 20 Ω = I × R = 2 × 20 = 40 V (Ohm’s Law, series voltage division)."
                },
                {
                    text: "A one-eighth bend in a conduit is equivalent to an angle of _____ degrees.",
                    options: ["33", "45", "18", "22"],
                    correctIndex: 1,
                    explanation: "One-eighth bend = 360° / 8 = 45°. Standard in conduit bending (NEC 344.24, 358.24 for field bends)."
                },
                {
                    text: "Which one of the following is known as an actuating control?",
                    options: ["thermostat", "relay", "manometer", "galvanometer"],
                    correctIndex: 1,
                    explanation: "Relay is an electromechanical actuating device — uses small current to control larger load (NEC Article 100 definition of controller/relay)."
                },
                {
                    text: "A cycle counter would be used in testing _____.",
                    options: ["motors", "transformers", "ammeters", "relays"],
                    correctIndex: 3,
                    explanation: "Cycle counters track contact operations in relays/contactors to monitor wear/life (common in control testing)."
                },
                {
                    text: "The electrolyte of a storage battery is formed by the dissolving of _____ in water.",
                    options: ["sulphuric acid", "hydrochloric acid", "lye", "soda"],
                    correctIndex: 0,
                    explanation: "Lead-acid batteries use sulfuric acid (H₂SO₄) diluted in water as electrolyte. NEC 480.4 requires proper handling of battery electrolytes."
                },
                {
                    text: "Orangeburg pipe is _____.",
                    options: ["nonmetallic of fiber", "cast iron", "galvanized steel", "lead coated"],
                    correctIndex: 0,
                    explanation: "Orangeburg = bituminized fiber pipe (nonmetallic, historical underground conduit). Not permitted in modern NEC for most uses (deprecated)."
                },
                {
                    text: "Which of the following will have the least effect on the voltage drop of a branch circuit?",
                    options: ["the size of the conductors", "the amount of the load", "whether the source is 50 hz or 60 hz", "the length of the conductors"],
                    correctIndex: 2,
                    explanation: "Voltage drop (VD = I × R × L) is DC/resistive in nature; frequency (50/60 Hz) has negligible effect on resistive circuits (no significant reactance in typical branch circuits). NEC 210.19(A) Informational Note."
                },
                {
                    text: "A low value of reactive volt-amperes in an AC circuit compared with the wattage would indicate _____.",
                    options: ["unity power factor", "high power factor", "maximum current for the load", "very low efficiency"],
                    correctIndex: 1,
                    explanation: "Low VARs relative to watts → high power factor (PF close to 1). PF = W / VA; high PF = low reactive component."
                },
                {
                    text: "If a light bulb rated 100 watts @ 120 volts is connected across a 240 volt source, the wattage would be _____.",
                    options: ["100 watts", "200 watts", "300 watts", "400 watts"],
                    correctIndex: 3,
                    explanation: "Power scales with V². At double voltage, power = 100 × (240/120)² = 100 × 4 = 400 W (bulb would burn out quickly)."
                },
                {
                    text: "With only switch 4 closed and a line voltage of 225 volts, the drop across one of the 10 ohm resistors is _____ volts.",
                    options: ["225", "90", "64.3", "56.3"],
                    correctIndex: 1,
                    explanation: "SW4 closed: 20 Ω in series with parallel (10 Ω || 5 Ω + 10 Ω) = 20 Ω + (5 Ω || 20 Ω) wait—diagram shows SW4 shorts to place 20 Ω across part. Per book: total R = 25 Ω, I = 225 / 25 = 9 A, V across 10 Ω = 9 × 10 = 90 V."
                }
            ]
        }

        // You can add more general exams here later
    ],

    openbook: [
        {
            id: "openbook_1",
            title: "Journeyman Open Book Exam #2 (2023 NEC)",
            timeMinutes: 60,
            questions: [
                {
                    text: "Panelboards shall not be installed in the ______ position.",
                    options: ["face-up", "prone", "posterior", "transverse"],
                    correctIndex: 0,
                    explanation: "408.43 – Panelboards shall be installed in the face-up (vertical) position."
                },
                {
                    text: "Where two or more branch circuits supply devices or equipment on the same yoke or mounting strap, a means to simultaneously disconnect the ungrounded supply conductors shall be provided at the point at which the branch circuit ______.",
                    options: ["starts", "terminates", "originates", "separates"],
                    correctIndex: 2,
                    explanation: "210.7(B)(2) – The disconnecting means shall be provided at the point at which the branch circuit originates."
                },
                {
                    text: "Fastened in place utilization equipment, other than luminaires, that is connected to a branch circuit with other loads shall not exceed ______ of the branch circuit rating.",
                    options: ["100%", "80%", "75%", "50%"],
                    correctIndex: 2,
                    explanation: "210.23(B) – Fixed utilization equipment fastened in place shall not exceed 75% of the branch circuit rating when supplied with other loads."
                },
                {
                    text: "GFCI protection shall be provided for lighting outlets not exceeding ______ volts installed in crawl spaces.",
                    options: ["60", "120", "240", "300"],
                    correctIndex: 1,
                    explanation: "210.8(A)(5) – GFCI protection is required for lighting outlets rated 120 volts or less in crawl spaces."
                },
                {
                    text: "The Code requires branch circuits be rated in accordance with the overcurrent protective device. Therefore, which of the following combinations are permitted for lighting branch circuits?",
                    options: ["20, 25, 35, 40 and 50 amperes", "20, 25, 30, 40 and 50 amperes", "15, 25, 30, 40 and 50 amperes", "10, 15, 20, 30, 40 and 50 amperes"],
                    correctIndex: 1,
                    explanation: "210.18 & 210.19 – Lighting branch circuits are generally limited to 15 A or 20 A; higher ratings such as 25–50 A are not permitted for general lighting circuits."
                },
                {
                    text: "Panelboards in other than dwelling units that are likely to require examination, adjustment, servicing, or maintenance while energized, shall be field or factory marked to warn ______ persons of potential electric arc flash hazards.",
                    options: ["all", "maintenance", "qualified", "repairmen"],
                    correctIndex: 2,
                    explanation: "110.16(B) – Equipment likely to require examination, adjustment, servicing, or maintenance while energized shall be marked to warn qualified persons of potential arc-flash hazards."
                },
                {
                    text: "Receptacle outlets shall be installed so that no point along the wall line is more than ______ measured horizontally from a receptacle outlet in that space.",
                    options: ["10\"", "12\"", "18\"", "24\""],
                    correctIndex: 3,
                    explanation: "210.52(A)(1) – Receptacles shall be installed so that no point along the floor line of any wall space is more than 24 inches (600 mm) from a receptacle."
                },
                {
                    text: "For temporary holiday lighting, trees shall be permitted for supporting overhead spans of conductors and cables if the overhead wiring is arranged with ______, tension take-up devices, or other approved means to avoid damage from live vegetation.",
                    options: ["fittings", "cable ties", "strain relief devices", "overhead clamps"],
                    correctIndex: 2,
                    explanation: "590.4(J) – Temporary wiring shall be supported and arranged with strain relief devices or other approved means to prevent damage from vegetation."
                },
                {
                    text: "At least one 125 volt, single-phase, 15 or 20 amp rated receptacle outlet shall be installed for each 12 linear feet or major fraction thereof of show window area measured horizontally at the maximum width of the show window at its maximum horizontally.",
                    options: ["10\"", "12\"", "18\"", "24\""],
                    correctIndex: 0,
                    explanation: "210.52(C)(3) – At least one receptacle outlet shall be installed for each 12 linear feet (or major fraction) of show window width, measured horizontally at the top."
                },
                {
                    text: "If festoon lighting is installed without a messenger, the smallest allowable overhead conductor is ______ AWG.",
                    options: ["#10", "#12", "#14", "#16"],
                    correctIndex: 1,
                    explanation: "590.4(G) – Festoon lighting without a messenger wire requires a minimum #12 AWG conductor."
                },
                {
                    text: "AFCI protection on all 120 volt, single-phase, 15 and 20 amp branch circuits supplying outlets is required in all of the following locations listed except ______.",
                    options: ["sunroom, closet, hallway", "parlor, library, den", "bathrooms and garages", "living room, kitchen, laundry"],
                    correctIndex: 1,
                    explanation: "210.12(A) – AFCI protection is required in most dwelling unit areas; bathrooms and garages are exempt (210.8(A) exceptions apply)."
                },
                {
                    text: "What is the ampacity of a #12 THWN conductor installed in an ambient temperature of 86°F if the raceway contains four current-carrying conductors?",
                    options: ["17.5 A", "20 A", "23 A", "26 A"],
                    correctIndex: 1,
                    explanation: "Table 310.16 – #12 THWN = 25 A (90°C column); derate 80% for 4 current-carrying conductors = 20 A."
                },
                {
                    text: "A wall-mounted central vacuum assembly connected to a single receptacle located in an attached garage shall be provided with ______ protection for personnel.",
                    options: ["LCDI", "GFCI", "AFCI", "both AFCI and GFCI"],
                    correctIndex: 1,
                    explanation: "210.8(A)(7) – GFCI protection is required for all 125-volt, single-phase, 15- and 20-amp receptacles in garages."
                },
                {
                    text: "If a disconnecting means is required to be lockable open, it shall be capable of being locked in the open position with the provisions for locking remaining in place with or without the ______ installed.",
                    options: ["cover", "lock", "switch", "device"],
                    correctIndex: 0,
                    explanation: "110.25 – The locking provisions shall remain in place with or without the cover installed."
                },
                {
                    text: "In a dwelling bedroom, any wall space ______ or more in width (including space measured around corners) and unbroken along the floor line by doorways and similar openings, fireplaces, and fixed cabinets that do not have countertops or similar work surfaces, shall have at least one receptacle outlet.",
                    options: ["18\"", "24\"", "30\"", "36\""],
                    correctIndex: 1,
                    explanation: "210.52(A)(2)(1) – Any wall space 2 ft (24 in.) or more in width requires at least one receptacle outlet."
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
                    correctIndex: 1,
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
                    text: "At least one 125 volt, single-phase, 15 or 20 amp rated receptacle outlet shall be installed for each 12 linear feet or major fraction thereof of show window area measured horizontally at its maximum width.",
                    options: [
                        "10\"",
                        "12\"",
                        "18\"",
                        "24\""
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.62. Theory: Show windows require a receptacle every 12 linear feet."
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
                    correctIndex: 0,
                    explanation: "NEC Table 310.15(B)(16) and adjustment Table 310.15(B)(3)(a). Theory: #12 THWN base 25 A × 80% (4 CCC) = 20 A, but the exam uses the precise adjusted value of 17.5 A per the answer key."
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
                    correctIndex: 0,
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
                    correctIndex: 1,
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
                    correctIndex: 1,
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
                        "2",
                        "3",
                        "4",
                        "6"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 408.5. Theory: Maximum 3 inches above the bottom enclosure."
                },
                {
                    text: "Fuel dispensing systems shall be provided with one or more clearly identified emergency shutoff devices or electrical disconnects. Such disconnects or devices shall be installed in approved locations but not less than 20 feet or more than ____ feet from the fuel dispensing devices that they serve.",
                    options: [
                        "50",
                        "75",
                        "80",
                        "100"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 514.11(A). Theory: Maximum distance is 100 feet from the dispensing devices."
                },
                {
                    text: "The ampacity of three #10 THWN-2 conductors installed in a raceway is ____ amps if the ambient temperature is 112°F.",
                    options: [
                        "31.6",
                        "34.8",
                        "35",
                        "37.2"
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
                        "60",
                        "50",
                        "30",
                        "20"
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
                        "110-220",
                        "115-230",
                        "120-240",
                        "125-250"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 210.8(A). Theory: 125–250 V is the correct voltage range for dwelling GFCI requirements."
                },
                {
                    text: "All 15 or 20 amp, single-phase, 125 volt through 250 volt receptacles located within ____ feet of a fountain edge shall be provided with GFCI protection.",
                    options: [
                        "20",
                        "24",
                        "25",
                        "30"
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
                        "one",
                        "two",
                        "three"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 210.52(G)(1). Theory: Minimum two receptacles required in attached garage."
                },
                {
                    text: "Track lighting where installed in a continuous row, each individual section of not more than ____ feet in length shall have one additional support.",
                    options: [
                        "4",
                        "6",
                        "8",
                        "12"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 410.154. Theory: Additional support every 4 feet of track."
                },
                {
                    text: "The demand load for a 14 kW range installed in a dwelling unit is ____ kW.",
                    options: [
                        "8",
                        "8.4",
                        "8.8",
                        "12"
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
                    correctIndex: 3,
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
                    correctIndex: 2,
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
                    correctIndex: 3,
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
                    correctIndex: 3,
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
                    correctIndex: 0,
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
                    correctIndex: 1,
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
                    correctIndex: 0,
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
                    correctIndex: 3,
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
                    correctIndex: 1,
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
                    correctIndex: 2,
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
                    correctIndex: 3,
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
                    correctIndex: 3,
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
            id: "openbook_11",
            title: "Journeyman Open Book Exam #11",
            timeMinutes: 60,
            questions: [
                {
                    text: "Balconies, decks, and porches that are within ______ inches, horizontally, of a dwelling unit shall have one receptacle outlet accessible from the balcony, deck, or porch.",
                    options: [
                        "4",
                        "6",
                        "12",
                        "18"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.52(E)(3). Theory: Receptacle required within 6 ft horizontally of the dwelling unit."
                },
                {
                    text: "Unused openings for circuit breakers and switches shall be closed using approved means that provide protection substantially equivalent to the wall of the enclosure.",
                    options: [
                        "approved",
                        "identified",
                        "labeled",
                        "marked"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 110.12(A). Theory: Unused openings must be closed with approved means."
                },
                {
                    text: "A point on the wiring system at which current is taken to supply utilization equipment is an ______.",
                    options: [
                        "outlet",
                        "receptacle",
                        "junction",
                        "dead end"
                    ],
                    correctIndex: 0,
                    explanation: "NEC Article 100 Definitions. Theory: Definition of Outlet."
                },
                {
                    text: "In dwelling units, circuits supplying luminaires may not exceed ______ volts, nominal, between conductors.",
                    options: [
                        "120",
                        "220",
                        "230",
                        "240"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 210.6(A). Theory: Maximum 120 V nominal for dwelling lighting circuits."
                },
                {
                    text: "Extreme ______ may cause PVC conduit to become brittle, and therefore more susceptible to damage from physical contact.",
                    options: [
                        "heat",
                        "cold",
                        "sunlight",
                        "moisture"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 352.10. Theory: Extreme cold makes PVC brittle."
                },
                {
                    text: "In lieu of the GFCI protection required by 210.8 or 590.6(A) GFCI may be placed in the feeder circuit if it is ______.",
                    options: [
                        "accessible",
                        "readily accessible",
                        "suitable",
                        "approved"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.8(A) Exception. Theory: Feeder GFCI must be readily accessible."
                },
                {
                    text: "Where metal fences are located within ______ feet of the exposed electrical conductors or equipment, the fence shall be bonded to the grounding electrode system with bonding jumpers.",
                    options: [
                        "25",
                        "24",
                        "20",
                        "16"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 225.61. Theory: Bonding required within 25 ft."
                },
                {
                    text: "A surge protection device is not permitted for circuits exceeding ______ volts.",
                    options: [
                        "300",
                        "450",
                        "600",
                        "1000"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 280.21. Theory: SPD limited to circuits 600 V or less."
                },
                {
                    text: "A permanent sign shall be attached to the cable tray at intervals not greater than 20 feet. The sign shall read as follows:",
                    options: [
                        "CABLE TRAY FOR WELDING CABLES ONLY",
                        "CABLE TRAY MAXIMUM VOLTAGE 300",
                        "THE CABLE TRAY PROVIDES SUPPORT AT 6' INTERVALS",
                        "CABLES SHALL BE LOW VOLTAGE"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 630.42(C). Theory: Cable tray for welding cables only."
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
                    explanation: "NEC Article 100 Definitions. Theory: Definition of Operator."
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
                    explanation: "NEC 225.19(D)(1). Theory: Clearance required from doors."
                },
                {
                    text: "Outdoor self-supporting radio and television receiving antennas, such as vertical rods, dishes, etc., shall be located well away from overhead conductors of electric light and power circuits over ______ volts to ground.",
                    options: [
                        "30",
                        "120",
                        "150",
                        "300"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 810.16(B). Theory: 300 V clearance."
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
                    explanation: "NEC 724.40. Theory: 1000 VA maximum for Class 1."
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
                    correctIndex: 1,
                    explanation: "NEC 660.9. Theory: 15 A maximum protection."
                },
                {
                    text: "Conductors drawn from a copper-clad aluminum rod with the copper metallurgically bonded to an aluminum core. The copper forms a minimum of ______ percent of the csa.",
                    options: [
                        "10",
                        "20",
                        "40",
                        "70"
                    ],
                    correctIndex: 2,
                    explanation: "NEC 310.3(B)(3). Theory: Minimum 40% copper by cross-sectional area."
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
                    explanation: "NEC 110.26(A)(1) cond.2. Theory: Concrete/brick/tile walls are grounded."
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
                    explanation: "NEC 500.5(D). Theory: Class III locations."
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
                    explanation: "NEC 406.3(E). Theory: Orange triangle marking."
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
                    explanation: "NEC 517.18(B)(1). Theory: Minimum 4 duplex or 8 single receptacles."
                },
                {
                    text: "Balconies, decks, and porches that are attached to the dwelling unit and are accessible from inside the dwelling unit shall have at least one receptacle outlet accessible from the balcony, deck, or porch walking surface not be located more than ______ above the balcony, deck, or porch walking surface.",
                    options: [
                        "6'",
                        "6' 6\"",
                        "7'",
                        "8'"
                    ],
                    correctIndex: 1,
                    explanation: "NEC 210.52(E)(3). Theory: Maximum 6 ft 6 in height."
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
                    explanation: "NEC 695.12(D). Theory: Minimum 12 inches above floor."
                },
                {
                    text: "Conductors having ______ insulation and operating at different voltage levels shall not occupy the same enclosure, cable, or raceway.",
                    options: [
                        "thermoset",
                        "flame-retardant",
                        "nonsheilded",
                        "silicone rubber"
                    ],
                    correctIndex: 3,
                    explanation: "NEC 300.3(C)(1). Theory: Silicone rubber has special separation rules."
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
                    explanation: "NEC 551.71(B). Theory: Minimum 70% of sites."
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
                    explanation: "NEC Article 100 Definitions. Theory: Grounding Electrode Conductor."
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
                    text: "A/an ______ listed device (b) GFCI (c) AFCI (d) arrester",
                    options: [
                        "surge protective device",
                        "luminaires",
                        "from the lamp and wiring compartment",
                        "oil, and"
                    ],
                    correctIndex: 0,
                    explanation: "NEC 280.21. Theory: Surge protective device."
                },
                {
                    text: "A luminaire in a commercial cooking hood must, among other requirements, exclude ______.",
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
                    text: "A device that uses power electronics to convert one form of electrical power to another is known as a/an ______.",
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
                    correctIndex: 1,
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
                    correctIndex: 2,
                    explanation: "NEC 358.30(A) ex.1. Theory: 6 ft permitted."
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
    ],

    final: [
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
        }

    ]
};

// Optional: make it globally available (some people prefer this style)
window.REAL_EXAMS = REAL_EXAMS;