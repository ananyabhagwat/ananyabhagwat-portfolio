export type Block =
  | { type: "p"; text: string }
  | { type: "h4"; text: string }
  | { type: "list"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string };
export type Project = {
  slug: string; tag: string; title: string; subtitle: string; cover: string; bg: string;
  meta: { label: string; value: string }[];
  sections: { heading: string; blocks: Block[] }[];
};
export const projects: Project[] = [
 {
  "slug": "chippity",
  "tag": "Interaction Design / Group Project",
  "title": "Chippity: Reflective LLM Use in Higher Education",
  "subtitle": "A browser extension and companion mobile app that makes the hidden costs of ChatGPT use visible at the moment of interaction - without restricting how students use it.",
  "cover": "https://ananyabhagwat.github.io/images/chippity-card-image.png",
  "bg": "card-lime",
  "meta": [
   {
    "label": "Course",
    "value": "Interaction Design"
   },
   {
    "label": "Methods",
    "value": "Semi-structured interviews, Reflexive thematic analysis, Crazy 8s, Lo-fi and hi-fi prototyping, Two rounds of user evaluation"
   },
   {
    "label": "Team",
    "value": "5 people"
   },
   {
    "label": "Output",
    "value": "CHI-format paper, 5384 words"
   }
  ],
  "sections": [
   {
    "heading": "Overview",
    "blocks": [
     {
      "type": "p",
      "text": "88% of UK undergraduates use LLMs regularly. The problem is not that they use them - it is that nothing in the interface asks them to think about what that use costs. Every prompt draws on energy-intensive data-centre infrastructure. Sustained reliance reorganises how students think, weakening the conditions for independent reasoning. Students are aware of both. They still don't change their behaviour."
     },
     {
      "type": "p",
      "text": "Chippity addresses that gap. Rather than restricting use or lecturing students, it embeds lightweight reflective nudges and usage visualisation directly into ChatGPT, making cognitive and environmental consequences perceptible at the point of interaction, and letting students define their own goals for change."
     },
     {
      "type": "img",
      "alt": "Chippity design process flowchart",
      "src": "https://ananyabhagwat.github.io/images-chippity/Design%20process.png",
      "caption": "The design process: from exploratory interviews through two rounds of prototyping and evaluation to a final hi-fi system."
     }
    ]
   },
   {
    "heading": "Research",
    "blocks": [
     {
      "type": "p",
      "text": "We conducted 15 semi-structured interviews with regular LLM users (ages 21-23, 14 primarily using ChatGPT), lasting 25-35 minutes each. Participants described their prompting routines, motivations, frustrations, and any awareness of cognitive or environmental consequences. All interviews were transcribed verbatim and analysed using reflexive thematic analysis - codes were clustered iteratively into themes through a series of affinity mapping sessions."
     },
     {
      "type": "img",
      "alt": "Affinity mapping with sticky notes on a whiteboard",
      "src": "https://ananyabhagwat.github.io/images-chippity/affinity%20mapping.jpg",
      "caption": "Affinity mapping - codes clustered and refined into four themes that directly shaped the design requirements."
     }
    ]
   },
   {
    "heading": "Insights",
    "blocks": [
     {
      "type": "p",
      "text": "Four themes emerged, all pointing to the same core problem: students know what they should do differently, but nothing in their environment creates a moment to act on it."
     },
     {
      "type": "h4",
      "text": "Convenience normalises reliance"
     },
     {
      "type": "p",
      "text": "LLMs are the most convenient tool available. That convenience becomes habit, sometimes unwanted. \"The cost of convenience is the degradation of something else.\" (P4)"
     },
     {
      "type": "h4",
      "text": "Concerns about cognitive agency"
     },
     {
      "type": "p",
      "text": "Students worry reliance erodes critical thinking and authorship. \"I want to get back to the point where I don't need to use ChatGPT anymore.\" (P1)"
     },
     {
      "type": "h4",
      "text": "Environmental impact is invisible"
     },
     {
      "type": "p",
      "text": "Most students had vague, second-hand awareness. Even sustainability-minded participants said the topic \"goes over my head.\" It felt abstract and distant from daily choices."
     },
     {
      "type": "h4",
      "text": "Intention does not become action"
     },
     {
      "type": "p",
      "text": "Students recognise the problem but rarely change behaviour. \"Why do I know what I should do but keep doing what I shouldn't?\" (P4)"
     },
     {
      "type": "p",
      "text": "These themes produced five design requirements: bridge awareness and behaviour at the point of prompting; preserve autonomy; avoid discouraging legitimate use; make costs perceptible in context; and integrate into existing routines without friction."
     },
     {
      "type": "img",
      "alt": "Handwritten personas for Sophie and Brian",
      "src": "https://ananyabhagwat.github.io/images-chippity/persona.jpg",
      "caption": "Two personas synthesising distinct motivational profiles - one concerned primarily with cognitive overreliance, one with environmental impact. These anchored every subsequent design decision."
     }
    ]
   },
   {
    "heading": "Ideation",
    "blocks": [
     {
      "type": "p",
      "text": "We used Crazy 8s in a design workshop to generate solution directions quickly: wearables, screen pets, usage visualisations, goal-setting dashboards, and standalone reflective GPT interfaces all came up. Every concept was evaluated against one key criterion: does it require leaving ChatGPT?"
     },
     {
      "type": "p",
      "text": "Anything that did was discarded. The interviews had made clear that students adopted LLMs precisely because of low friction. An intervention that broke that flow would be ignored. A browser extension was the only option that kept reflection inside the interface students already use. The solution that emerged combined three mechanisms: self-defined usage goals, live tracking and visualisation, and in-context nudges delivered at the moment of prompting."
     }
    ]
   },
   {
    "heading": "Low-fi Prototype",
    "blocks": [
     {
      "type": "p",
      "text": "The prototype was hand-drawn then converted to a digital walkthrough for remote testing. It covered the full intended system: onboarding and profile selection, settings, 15 pop-up nudge variants in different screen positions, a personal statistics page, community creation and dashboard, and a companion mobile app with notification examples."
     },
     {
      "type": "img",
      "alt": "Lo-fi wireframes for browser extension and mobile app",
      "src": "https://ananyabhagwat.github.io/images-chippity/low%20fidelity%20prototypes.png",
      "caption": "Lo-fi prototype screens: browser extension wireframes (top row) and companion mobile app in three states - sign-in, time limit reached, and approaching limit (bottom row)."
     },
     {
      "type": "p",
      "text": "Four design decisions were embedded at this stage, each grounded in the research:"
     },
     {
      "type": "h4",
      "text": "Pre-set profiles"
     },
     {
      "type": "p",
      "text": "Students differed in what they wanted to address. Rather than asking everyone to configure from scratch, pre-set profiles (Eco Mode, Think Mode, Smart Balance, Custom) reduce onboarding friction while maintaining personal relevance."
     },
     {
      "type": "h4",
      "text": "User-defined goals"
     },
     {
      "type": "p",
      "text": "Participants consistently disliked being told what to do. Drawing on Self-Determination Theory, Chippity lets users set their own limits. When change feels self-endorsed rather than imposed, adherence is higher and dropout lower."
     },
     {
      "type": "h4",
      "text": "Reflective, non-prescriptive tone"
     },
     {
      "type": "p",
      "text": "Nudges invite consideration rather than enforce behaviour. Tone was treated as a first-order design decision - messages that felt moralising were discarded, messages that felt like a quiet reminder were kept."
     },
     {
      "type": "h4",
      "text": "Communities feature"
     },
     {
      "type": "p",
      "text": "Participants often compared their usage to peers. Knowing others were trying made individual effort feel worth it. The communities feature lets students observe collective progress without direct comparison."
     }
    ]
   },
   {
    "heading": "First Evaluation",
    "blocks": [
     {
      "type": "p",
      "text": "Remote think-aloud with 5 participants via Microsoft Teams. Each participant walked through the prototype and rated all 15 nudges on quality (1-5 scale), then placed the overall system on a helpful-to-intrusive scale with qualitative reasoning."
     },
     {
      "type": "img",
      "alt": "Table of participant ratings for 15 pop-up prompts across 5 participants",
      "src": "https://ananyabhagwat.github.io/images-chippity/prompts%20ratings%20data.png"
     },
     {
      "type": "h4",
      "text": "Key findings"
     },
     {
      "type": "list",
      "items": [
       "All 5 participants rated the system as helpful rather than intrusive",
       "The non-prescriptive tone was specifically cited as the reason",
       "Bottom-right nudge placement felt least disruptive",
       "Profile selection needed clearer implications",
       "Community feature identified as the strongest engagement driver"
      ]
     }
    ]
   },
   {
    "heading": "High-fi Prototype",
    "blocks": [
     {
      "type": "p",
      "text": "Evaluation feedback drove a systematic revision. Profile descriptions were expanded. A mascot was introduced to make the interaction feel personal. The nudge set was refined from 15 to 18, with wording adjusted based on rating data. All nudges were standardised to the bottom-right corner."
     },
     {
      "type": "img",
      "alt": "Four hi-fi screens showing Chrome Web Store listing, sign-up, profile selection, and settings",
      "src": "https://ananyabhagwat.github.io/images-chippity/hi-fi%201.png",
      "caption": "Set-up flow: Chrome Web Store listing, sign-up, profile selection, and detailed profile settings with advanced options."
     },
     {
      "type": "img",
      "alt": "Chippity nudge appearing in bottom-right of ChatGPT interface",
      "src": "https://ananyabhagwat.github.io/images-chippity/hifi%201.png",
      "caption": "A nudge appearing bottom-right while a student is mid-conversation on ChatGPT - positioned to be visible without interrupting the main task area."
     },
     {
      "type": "img",
      "alt": "Usage stats, community creation, community dashboard and profile settings screens",
      "src": "https://ananyabhagwat.github.io/images-chippity/hifi%203.png",
      "caption": "The full system: personal usage and environmental impact stats, community creation and joining flow, community dashboard, and refined profile settings."
     },
     {
      "type": "img",
      "alt": "Community dashboard for Team UCL",
      "src": "https://ananyabhagwat.github.io/images-chippity/dashboard.png",
      "caption": "Community dashboard showing cohort usage, goal attainment rates, and prompt optimisation. Members see collective progress - motivating without ranking individuals."
     },
     {
      "type": "p",
      "text": "Six examples from the final set of 18 nudges, covering eco-limits, screen time warnings, community comparisons, flagged topics, prompt limits, and focus tips:"
     },
     {
      "type": "img",
      "alt": "Six final nudge examples from the hi-fi prototype",
      "src": "https://ananyabhagwat.github.io/images-chippity/hifi%20prompts%204.png",
      "caption": "Each nudge is phrased as an invitation, not an instruction. Tone and wording were directly informed by the rating data from evaluation 1."
     },
     {
      "type": "p",
      "text": "The settings page was redesigned to include hover descriptions on every control, added in direct response to feedback that profile implications were unclear."
     },
     {
      "type": "img",
      "alt": "Profile settings hover description on personalised AI recommendations toggle",
      "src": "https://ananyabhagwat.github.io/images-chippity/personalized%20ai%20rec.png",
      "caption": "Hover description on the Personalised AI Recommendations toggle - one of several contextual explanations added after evaluation 1 flagged that settings lacked clarity."
     }
    ]
   },
   {
    "heading": "Second Evaluation",
    "blocks": [
     {
      "type": "p",
      "text": "A second round of in-person testing with 4 participants used task-based think-aloud rather than a slideshow walkthrough. Participants completed specific tasks through the prototype and flagged points of confusion in the user flow."
     },
     {
      "type": "p",
      "text": "Changes implemented: font size increased on profile settings, information inconsistencies across screens corrected, buttons relinked to match intuitive navigation, scroll bar moved to the right side of the community members panel, and hover descriptions added to all settings."
     },
     {
      "type": "p",
      "text": "Participants also suggested features outside the project timeline: an information page, daily or weekly goal achievements, and the ability to join multiple communities. These are noted as directions for future work."
     }
    ]
   },
   {
    "heading": "Outcomes",
    "blocks": [
     {
      "type": "p",
      "text": "Chippity demonstrates that reflective scaffolding can live inside existing tools without sacrificing the convenience that drives adoption. The community feature produced the strongest response across both evaluation rounds - knowing peers were trying made individual effort feel worthwhile."
     },
     {
      "type": "p",
      "text": "The project contributes three things: a qualitative account of how cognitive offloading and environmental invisibility operate in everyday student LLM use; a working system that introduces a reflective layer without restricting access; and a set of design principles - preserve control, make consequences perceptible at the moment they are produced, and support self-regulation rather than enforcing compliance."
     },
     {
      "type": "p",
      "text": "Limitations are real and worth naming. Single-session evaluations cannot replicate habitual use. Environmental feedback used estimates rather than real telemetry, since LLM providers do not expose per-query energy data. Mobile nudges were time-based rather than prompt-aligned due to OS restrictions. These constraints bound the claims the study can make and point clearly to the work that remains."
     }
    ]
   }
  ]
 },
 {
  "slug": "pollygraph",
  "tag": "Independent Project",
  "title": "Pollygraph: An Interactive Polling Plug-in",
  "subtitle": "A proposed system that lets participants cast votes by pointing at regions of a shared display, replacing hand-raising with spatial, anonymous, and continuous participation.",
  "cover": "https://ananyabhagwat.github.io/images/pollygraph-card-image.png",
  "bg": "card-lilac",
  "meta": [
   {
    "label": "Type",
    "value": "Independent"
   },
   {
    "label": "Methods",
    "value": "Autoethnography, Semi-structured interviews, Wizard of Oz prototyping, Hi-fi prototype"
   },
   {
    "label": "Output",
    "value": "PowerPoint plug-in concept"
   }
  ],
  "sections": [
   {
    "heading": "Overview",
    "blocks": [
     {
      "type": "p",
      "text": "This project explores alternative ways of conducting live classroom polls and collective feedback on shared displays. Commonly used methods such as hand-raising and online polling tools rely on social visibility, personal devices, and internet connectivity, and tend to reduce responses to discrete categories."
     },
     {
      "type": "p",
      "text": "Pollygraph investigates whether a spatial interaction model could enable more fluid and engaged participation. The proposed system allows participants to cast votes by pointing at regions of a shared display during a designated voting moment. Votes are visualised collectively as spatial distributions, supporting continuous rather than discrete expressions of opinion."
     }
    ]
   },
   {
    "heading": "User Research",
    "blocks": [
     {
      "type": "p",
      "text": "Research was conducted in two phases. The first involved four semi-structured interviews - two with students and two with instructors - focusing on experiences with live polls, hand-raising, and other participation mechanisms in classrooms."
     },
     {
      "type": "p",
      "text": "The second phase used autoethnography, drawing on my own experiences as a student in large lectures to observe moments of disengagement, participation anxiety, and delays caused by discrete voting methods."
     }
    ]
   },
   {
    "heading": "Pain Points",
    "blocks": [
     {
      "type": "p",
      "text": "Two dominant pain points emerged. With hand-raising, participants identified fear of judgement from peers, fear of being called upon, and a tendency to go along with the majority regardless of personal opinion."
     },
     {
      "type": "p",
      "text": "Online polling platforms introduced a different set of problems: dependence on patchy internet, the distraction of getting phones out mid-lecture, time consumed by scanning codes and entering responses, and a break in lecture flow that undermined the engagement they were supposed to create."
     }
    ]
   },
   {
    "heading": "Design Process",
    "blocks": [
     {
      "type": "p",
      "text": "The design process followed a Research - Define - Ideate - Refine structure. The ideate phase used rapid sketching to generate eight concepts, of which two were selected for prototyping: a laser-pointer device paired with a board that provides dynamic spatial feedback, and a local-network voting platform that sidesteps internet connectivity issues."
     }
    ]
   },
   {
    "heading": "Low-fi Prototyping",
    "blocks": [
     {
      "type": "p",
      "text": "For the laser-pointer concept, I used Wizard of Oz prototyping. A chart paper was divided into spatial areas and participants were asked to point a torch at regions representing their choices. I then replaced the blank chart with one covered in coloured sticky notes indicating vote density."
     },
     {
      "type": "p",
      "text": "Feedback highlighted intuitive engagement and visual immediacy, but raised concerns about accuracy, feasibility at scale, and the distraction of laser pointers in classrooms. For the local-network platform, I created low-fidelity screen mock-ups. In the end, 5 out of 6 participants preferred the pointer concept because it was novel, engaging, and disrupted the flow of the session less."
     }
    ]
   },
   {
    "heading": "High-fi Prototype",
    "blocks": [
     {
      "type": "p",
      "text": "Moving from the laser-based concept to a remote pointer interaction integrated directly into presentation software, the final prototype takes the form of a PowerPoint plug-in. Instructors can mark specific slides as Pollygraph-enabled. Voting is activated only when those slides are presented, ensuring participation is time-bounded and does not disrupt teaching flow."
     },
     {
      "type": "p",
      "text": "The plug-in provides configurable voting layouts and visualisation options - spatial regions such as binary splits, quadrants, and continuous axes, as well as dynamic outputs including density maps, counters, and bar charts."
     }
    ]
   },
   {
    "heading": "Reflection",
    "blocks": [
     {
      "type": "p",
      "text": "The proposed system assumes the availability of a shared display capable of receiving multiple simultaneous pointer inputs. While such capabilities exist in some interactive displays and smart boards, this limits immediate deployability. The project therefore prioritises interaction design and classroom experience over backend feasibility."
     },
     {
      "type": "p",
      "text": "A key design decision was to embed voting within presentation software rather than create a standalone system, ensuring that participation remains instructor-controlled and does not interrupt teaching flow. Pollygraph functions as a speculative but grounded exploration of how rethinking interaction modalities can open new possibilities for collective participation in educational settings."
     }
    ]
   }
  ]
 },
 {
  "slug": "baggage",
  "tag": "Independent Project",
  "title": "Revisiting the Baggage Reclaim System",
  "subtitle": "Redesigning the information environment at baggage reclaim to reduce uncertainty and frustration during the waiting stage, without changing how baggage handling actually works.",
  "cover": "https://ananyabhagwat.github.io/images/baggage-card-image.png",
  "bg": "card-sky",
  "meta": [
   {
    "label": "Type",
    "value": "Independent"
   },
   {
    "label": "Methods",
    "value": "Survey, Qualitative interviews, Heuristic evaluation, Journey mapping"
   },
   {
    "label": "Output",
    "value": "Information system design proposal"
   }
  ],
  "sections": [
   {
    "heading": "Overview",
    "blocks": [
     {
      "type": "p",
      "text": "This project explores ways to improve the passenger experience during baggage reclaim, focusing on reducing uncertainty and frustration while waiting for luggage. The design proposes a coordinated information system: staff can update the unloading phase via a simple interface, and passengers receive clear, real-time updates on displays, including historical averages and guidance for delayed baggage."
     },
     {
      "type": "p",
      "text": "By redesigning the flow of information and the waiting environment, the project aims to make baggage reclaim more predictable, transparent, and less stressful, without altering airport operations."
     }
    ]
   },
   {
    "heading": "User Research",
    "blocks": [
     {
      "type": "p",
      "text": "To understand the challenges passengers face, I conducted a mixed-methods study combining a survey and qualitative interviews. The goal was to capture both quantitative measures of frustration and personal experiences, identifying where uncertainty, waiting, and physical effort create stress."
     },
     {
      "type": "p",
      "text": "Common issues included uncertainty about bag arrival, lack of guidance on delays, physical difficulty lifting heavy luggage, and crowding at the carousel. These insights highlighted opportunities to improve information visibility, waiting area organisation, and guidance for delayed or missing bags."
     }
    ]
   },
   {
    "heading": "Journey Map",
    "blocks": [
     {
      "type": "p",
      "text": "Mapping the passenger journey from arrivals through to collecting bags revealed five distinct stages, each with its own failure modes: finding the correct belt, waiting at the carousel with no status updates, identifying bags among similar-looking luggage, physically retrieving bags from a crowded belt, and dealing with delayed or missing bags with no guidance on next steps."
     }
    ]
   },
   {
    "heading": "Heuristic Evaluation",
    "blocks": [
     {
      "type": "p",
      "text": "The heuristic evaluation highlighted multiple pain points, but visibility during the waiting stage stood out as the most critical - scoring a severity of 5/5. Passengers experience uncertainty, lack of status updates, crowding, and physical strain during this stage. By targeting this phase, the design can have the greatest impact without needing to change airport operations."
     },
     {
      "type": "p",
      "text": "Based on the evaluation, five design requirements were identified: real-time updates on unloading phase, instructions for delayed or missing bags, reorganised waiting areas to reduce crowding, a simple staff interface for updating bag status, and messaging that minimises stress and uncertainty."
     }
    ]
   },
   {
    "heading": "Final Design",
    "blocks": [
     {
      "type": "p",
      "text": "A central carousel display provides live, phase-based updates on unloading progress, alongside contextual information drawn from previous similar flights to help set realistic expectations. Clear messaging is introduced for prolonged waits, guiding passengers on next steps if a bag has not arrived."
     },
     {
      "type": "p",
      "text": "The physical waiting area is subtly restructured. A marked standing zone set back from the carousel encourages passengers to step away from the belt until their bag appears, improving visibility, reducing crowding, and making the space safer to share."
     }
    ]
   },
   {
    "heading": "Reflection",
    "blocks": [
     {
      "type": "p",
      "text": "The changes proposed improve waiting experience through clearer information and better use of space, rather than changes to baggage handling itself. The system gives airlines and unloaders the freedom to decide the method of unloading and does not add communication overhead to their workflow."
     },
     {
      "type": "p",
      "text": "The constraint of not altering airport operations was a productive one. It forced the design to work within existing infrastructure and staff workflows, which made the solution more realistic and immediately deployable than a full system redesign would have been."
     }
    ]
   }
  ]
 },
 {
  "slug": "clue",
  "tag": "HCI for Health and Wellbeing / Individual",
  "title": "A GQM Evaluation of Clue",
  "subtitle": "A systematic audit of whether Clue meets the goals its users actually bring to it, grounded in Lin et al.'s CHI 2024 research on functional design requirements for menstrual health data exploration.",
  "cover": "https://ananyabhagwat.github.io/images/GQM-card-image.png",
  "bg": "card-rose",
  "meta": [
   {
    "label": "Course",
    "value": "HCI for Health and Wellbeing"
   },
   {
    "label": "Methods",
    "value": "GQM framework, Heuristic audit, Literature analysis"
   },
   {
    "label": "Framework",
    "value": "Lin et al., CHI 2024"
   }
  ],
  "sections": [
   {
    "heading": "Overview",
    "blocks": [
     {
      "type": "p",
      "text": "Menstrual tracking apps are mostly glorified calendars. They predict when your next period is and let you log symptoms. What they don't do is help you understand your data. This audit asked whether Clue, one of the most popular apps in the space, actually meets the needs of the people using it."
     },
     {
      "type": "p",
      "text": "The audit was grounded in Lin et al. (CHI 2024), who studied 30 people to find out what they actually want from a tracking app. The short version: they want to anticipate upcoming symptoms, spot patterns across multiple signals, judge whether their cycle is normal for them, and learn from their data over time."
     }
    ]
   },
   {
    "heading": "The Paper",
    "blocks": [
     {
      "type": "p",
      "text": "Lin et al. turned their findings into five design requirements. The problem is that design requirements from academic papers are broad by design. They are categories, not criteria. Making them auditable was the first task."
     }
    ]
   },
   {
    "heading": "From Design Requirements to Testable Criteria",
    "blocks": [
     {
      "type": "p",
      "text": "I derived four design implications from the paper, each tied to a specific user goal, and from those produced nine binary requirements: concrete, verifiable statements about what the interface must do. Each requirement had a specific metric - a thing you could either find on screen or couldn't. This translation was the core of the work."
     }
    ]
   },
   {
    "heading": "Findings",
    "blocks": [
     {
      "type": "p",
      "text": "Clue passes three of nine requirements. It lets you track multiple symptoms, shows you which symptoms tend to co-occur, and links to medical content when something looks atypical. It fails on prediction uncertainty (it gives you one date, no range), multi-signal comparison (you can't overlay two symptoms on a graph), and cross-cycle reflection (there is no way to compare this cycle to the last one in any meaningful view)."
     }
    ]
   },
   {
    "heading": "Equity and Safety",
    "blocks": [
     {
      "type": "p",
      "text": "The audit also looked at equity and safety, because the failures aren't just usability problems. The features that would actually support sensemaking are behind a subscription. Predictions are shown without any clinical disclaimer and can easily be read as diagnostic. And the app never tells you when its analysis is insufficient, which means users can build incorrect beliefs about their own bodies without knowing it."
     }
    ]
   },
   {
    "heading": "Design Goals",
    "blocks": [
     {
      "type": "p",
      "text": "The audit concluded with three design goals: show predictions with visible uncertainty rather than false precision, support comparison across multiple signals with interpretive help, and enable cross-cycle reflection that doesn't rely on memory. These fed directly into the prototype project."
     }
    ]
   }
  ]
 },
 {
  "slug": "prototype",
  "tag": "HCI for Health and Wellbeing / Individual",
  "title": "Menstrual Tracker Prototype",
  "subtitle": "A functional prototype built to test whether uncertainty-aware predictions, multivariate exploration, and cross-cycle reflection actually help users make sense of their menstrual health data.",
  "cover": "https://ananyabhagwat.github.io/images/prototype-card-image.png",
  "bg": "card-sand",
  "meta": [
   {
    "label": "Course",
    "value": "HCI for Health and Wellbeing"
   },
   {
    "label": "Methods",
    "value": "Figma prototyping, Think-aloud, Usability study"
   },
   {
    "label": "Participants",
    "value": "5 (remote, think-aloud)"
   }
  ],
  "sections": [
   {
    "heading": "Overview",
    "blocks": [
     {
      "type": "p",
      "text": "This project picked up where the GQM audit left off. Three design goals, and a prototype built to test whether they actually work. The prototype has four views: Calendar, Symptoms, Analysis, and Information. Rather than redesigning Clue in full, it demonstrates how targeted interface decisions could better support menstrual health data exploration."
     }
    ]
   },
   {
    "heading": "Design Decisions",
    "blocks": [
     {
      "type": "p",
      "text": "Two decisions shaped the prototype throughout. The first was representing uncertainty honestly: a range of plausible dates rather than a fixed prediction, and gradients rather than point markers for symptom forecasts."
     },
     {
      "type": "img",
      "alt": "Calendar view - prediction windows",
      "src": "https://ananyabhagwat.github.io/images-proto/pt-calendar.jpg",
      "caption": "The second was embedding contextual events (travel, stress, sleep) across all views, so users can see whether a change in symptoms coincides with something that happened in their life without having to cross-reference manually."
     },
     {
      "type": "p",
      "text": "The symptoms view lets you compare up to four signals, flags significant changes, and has a toggle to compare against previous cycles. The analysis view summarises cycle characteristics, highlights deviations, and links to specific explanations when something looks different. The information view surfaces relevant articles contextually when a deviation is detected."
     }
    ]
   },
   {
    "heading": "Prototype Screens",
    "blocks": [
     {
      "type": "img",
      "alt": "Symptoms view - multivariate comparison",
      "src": "https://ananyabhagwat.github.io/images-proto/pt-symptoms.jpg"
     },
     {
      "type": "img",
      "alt": "Analysis view - deviation alert",
      "src": "https://ananyabhagwat.github.io/images-proto/pt-analysis.jpg"
     },
     {
      "type": "img",
      "alt": "Information view - contextual articles",
      "src": "https://ananyabhagwat.github.io/images-proto/pt-information.jpg"
     },
     {
      "type": "img",
      "alt": "Cross-cycle comparison toggle",
      "src": "https://ananyabhagwat.github.io/images-proto/pt-compare.jpg"
     }
    ]
   },
   {
    "heading": "Usability Study",
    "blocks": [
     {
      "type": "p",
      "text": "A usability study was conducted remotely with five participants, three with prior tracking experience and two without. Participants completed five predefined tasks using think-aloud protocol, rated helpfulness per task on a seven-point scale, and completed a short exit interview. No personal health data was collected."
     },
     {
      "type": "img",
      "alt": "Task completion and results table",
      "src": "https://ananyabhagwat.github.io/images-proto/pt-results.jpg",
      "caption": "Four of five tasks had majority completion. Helpfulness ratings ranged between 6 and 7 across tasks."
     }
    ]
   },
   {
    "heading": "Findings",
    "blocks": [
     {
      "type": "p",
      "text": "Uncertainty windows worked. Every participant said they preferred a range to a fixed date and described it as more realistic."
     },
     {
      "type": "p",
      "text": "The explanatory content didn't land. Not one participant opened the 'how predictions work' link without being directed to it. The information was there; it just wasn't visible enough to find."
     },
     {
      "type": "p",
      "text": "The biggest finding was that participants defaulted to the calendar for everything, including tasks better handled in the analysis or symptoms tabs. They had spent years using apps where the calendar was the whole product, and that mental model didn't shift just because other views existed."
     }
    ]
   },
   {
    "heading": "Next Steps",
    "blocks": [
     {
      "type": "p",
      "text": "Make the prediction explanation prominent rather than tucked away. Use higher-contrast colours for deviation alerts. Make 'learn more' links go to the specific explanation rather than a topic index. Replace cycle-day numbers with phase markers so cross-cycle comparison actually makes sense. Integrate contextual factors directly into deviation detection rather than leaving users to connect the dots themselves."
     }
    ]
   }
  ]
 }
];
