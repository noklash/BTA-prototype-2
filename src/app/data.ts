export type Status = "ACTIVE" | "LAUNCHING" | "PLANNED" | "VISION 2035";

export const photos = {
  hero: "https://images.unsplash.com/photo-1723129572165-9ceca925c459?auto=format&fit=crop&w=1800&q=88",
  river: "https://images.unsplash.com/photo-1725273950282-26b7c1b09876?auto=format&fit=crop&w=1600&q=85",
  boats: "https://images.unsplash.com/photo-1691743441331-d8b3bacf634f?auto=format&fit=crop&w=1400&q=85",
  people: "https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1400&q=85",
  elder: "https://images.unsplash.com/photo-1657356217673-4f7000f768b4?auto=format&fit=crop&w=1200&q=85",
  community: "https://images.unsplash.com/photo-1714575628092-aefd4e5d4291?auto=format&fit=crop&w=1400&q=85",
};

export const pillars = ["Heritage", "People", "Knowledge", "Enterprise", "Community", "Blue Economy", "Next Generation", "Legacy"];
export const initiatives: { title: string; status: Status; summary: string; path: string }[] = [
  { title: "BTA Knowledge & Ideas Forum", status: "ACTIVE", summary: "Practical knowledge across finance, technology, careers and community development.", path: "/knowledge/forum" },
  { title: "Community Development Initiative", status: "ACTIVE", summary: "Turning collective goodwill into measurable community impact.", path: "/community-impact" },
  { title: "Professional & Mentorship Network", status: "LAUNCHING", summary: "Connecting experience, expertise and opportunity across generations.", path: "/our-people" },
  { title: "BTA Oral History Project", status: "PLANNED", summary: "Preserving the knowledge of BTA elders for future generations.", path: "/heritage/oral-history" },
  { title: "BTA Blue Economy Centre", status: "VISION 2035", summary: "A long-term vision for research, production, training and stewardship.", path: "/blue-economy/centre" },
];
export const events = [
  ["18", "OCT", "BTA Knowledge & Ideas Forum", "Port Harcourt · Hybrid", "Knowledge"],
  ["21", "NOV", "Annual General Meeting", "BTA Meeting Hall", "Members"],
  ["12", "DEC", "BTA Heritage Evening", "Port Harcourt", "Heritage"],
  ["24", "JAN", "Youth & Professional Networking", "Lagos · Hybrid", "Our People"],
];
export const pages = {
  about: ["About BTA", "A community shaped by continuity.", "Bainbo Taria Awo Club is connected by heritage, strengthened by knowledge and committed to a better inheritance.", ["Our story", "Vision & mission", "Core values"], ["Shared heritage and mutual support.", "A trusted intergenerational institution developing people and serving community.", "Integrity · Community · Knowledge · Enterprise · Stewardship."]],
  people: ["Our People", "People are the foundation.", "A living network connecting members by generation, profession, expertise and location.", ["Professional network", "Mentorship", "Women, family & diaspora"], ["Discover trusted expertise and meaningful professional exchange.", "Pathways for younger members to learn from experienced professionals.", "Leadership, enterprise, wellbeing and continued connection."]],
  knowledge: ["Knowledge", "Bring an idea. Share knowledge.", "The BTA Knowledge & Ideas Forum turns member experience into practical learning.", ["Featured session", "Explore topics", "Knowledge library"], ["Understanding Personal Investment in Nigeria · 18 October 2026.", "Technology · Enterprise · Leadership · Health · Aquaculture · History.", "Videos, presentations, articles, research and reports."]],
  enterprise: ["Enterprise", "Creating opportunity through trust.", "Helping members build stronger businesses, share opportunity and plan for resilience.", ["Business hub", "Cooperative & investment", "Enterprise support"], ["A trusted member business directory.", "Concept programmes for literacy and responsible investment.", "Knowledge, visibility and mentoring for member ventures."]],
  community: ["Community Impact", "Goodwill, made measurable.", "BTA listens first, assesses carefully, acts responsibly and reports clearly.", ["Project portfolio", "Our impact model", "Community Needs Register"], ["Education · Health · Water · Youth development.", "Identify → Assess → Prioritise → Fund → Implement → Report → Measure.", "A structured route to make community needs visible."]],
  blue: ["Blue Economy", "Our river. Our opportunity.", "Riverine heritage creates possibilities for enterprise and environmental stewardship.", ["Areas of opportunity", "Blue Economy Centre", "Stewardship first"], ["Aquaculture · Fisheries · Research · Training · Conservation.", "A Vision 2035 concept, not an existing facility.", "Healthy waterways, local knowledge and responsible practice."]],
  heritage: ["Heritage", "Preserving what we know.", "Heritage lives in people, language, work, places and memory.", ["Oral History Project", "Living archive", "Responsible preservation"], ["Recording elder stories and riverine life.", "A future home for verified records and recordings.", "Consent, context and cultural care guide the work."]],
  partners: ["Partner With BTA", "Build something that lasts.", "Partnerships that create measurable value for members and future generations.", ["Ways to partner", "Who we work with", "Start a conversation"], ["Corporate · CSR · Sponsorship · Research · Diaspora.", "Universities, foundations and development organisations.", "Tell us what long-term value you hope to create."]],
} as const;
export const members = [
  ["Taria Douglas", "Marine Engineer", "Port Harcourt", "Maritime operations"],
  ["Ibiso Alali", "Legal Practitioner", "Lagos", "Commercial law"],
  ["Tamuno George", "Public Health Specialist", "Abuja", "Community health"],
  ["Boma Briggs", "Technology Consultant", "London", "Digital transformation"],
];
