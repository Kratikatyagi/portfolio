export const profile = {
  name: 'Kratika Tyagi',
  title: 'User Experience Designer',
  bio: "2+ years making things look good, I've traded apparel ✂ for pixels ■. My design journey started in the vibrant world of fashion; now I design digital experiences people live in.",
  bioLong: "But that's not where it truly began. It began with paper crafts, handmade cards, and afternoons spent cutting and colouring simply because it made me happy. That small love for creating gradually transformed into many things over time, and with every step I learned a little more about form, detail, and the way people connect with what they use and love.",
  email: 'kratikatyagi.works@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kratika-tyagi/',
  behance: 'https://behance.net/kratikatyagi',
  avatar: '/avatar.png',
}

export const experience = [
  {
    company: 'Pilgrim (Heavenly Secrets)',
    role: 'UX UI Designer',
    period: 'Oct 2024 – Present',
  },
  {
    company: 'Impact App',
    role: 'UX UI Design Intern',
    period: 'Jul 2024 – Sep 2024',
  },
  {
    company: 'Arvind Fashions Ltd.',
    role: 'Tech Intern',
    period: 'Jan 2024 – May 2024',
  },
]

export const education = [
  {
    institution: 'IDC IIT Bombay',
    degree: 'PG Diploma, Interaction Design',
    period: '2026 – Present',
  },
  {
    institution: 'NIFT Hyderabad',
    degree: 'B.F. Tech, CGPA: 8.8',
    period: '2020 – 2024',
  },
  {
    institution: 'Dewan Public School, Hapur',
    degree: 'High Schooling (PCM), 90.2%',
    period: '2019 – 2020',
  },
]

export const stack = [
  { name: 'Figma', icon: '/tools/Figma.png' },
  { name: 'Rive', icon: '/tools/Rive.png' },
  { name: 'Notion', icon: '/tools/Notion.png' },
  { name: 'Illustrator', icon: '/tools/AI.png' },
  { name: 'Photoshop', icon: '/tools/PS.png' },
  { name: 'Claude', icon: '/tools/Claude.png' },
  { name: 'Cursor', icon: '/tools/cursor.png' },
]

export const interests = [
  'Modelling for the thrill!!',
  'Spending time with dogs',
  'Trying out pencil sketches',
  'Exploring textured painting',
  'Reading by sunsets',
  'Hiking',
]

export const projects = [
  {
    slug: 'uv-index-v2',
    layout: 'uv-v2',
    title: 'Contextual Personalisation of Products',
    tagline: '',
    readTime: '6m',
    readTimeGradient: 'linear-gradient(180deg, #f2bf0d, #7a6105)',
    category: 'UI/UX · 0→1 · A/B Validated',
    company: 'Pilgrim',
    year: '2026',
    accent: '#f2bf0d',
    cardLabel: 'Contextual Personalisation',
    cardHeadline: 'Turning confusion into an obvious choice',
    cardDescription: "A UV-index-driven recommender that surfaces the right SPF for today's weather.",
    cardMetrics: [
      { value: '+16.31%', label: 'Add-to-cart rate' },
      { value: '+15.52%', label: 'Conversion rate' },
      { value: '+3.61%', label: 'Orders' },
    ],
    thumbnail: { dark: '/uv-header-dark.png', light: '/uv-header-light.png' },
    thumbnailStyle: { height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' },
    thumbnailOverlay: null,
    headerImage: {
      dark: '/uv-header-dark.png',
      light: '/uv-header-light.png',
      subtitle: null,
      keywords: ['Contextual Personalisation', 'UV → SPF mapping', 'A/B Validated'],
    },
    sections: [
      {
        id: 'overview',
        label: 'TL; DR',
        heading: [{ t: 'Project ' }, { t: 'Overview', gold: true }],
        headingCase: 'title',
        groups: [
          {
            blocks: [
              { type: 'lead', text: 'A UV-index-driven recommendation widget for product page and cart drawer that reads the local UV index, ==removes the SPF decision fatigue==, and surfaces the right product at the moment the user is already deciding.' },
              {
                type: 'cards',
                columns: 3,
                variant: 'text',
                items: [
                  { label: 'Category', value: 'Beauty & Personal Care, E-commerce, D2C' },
                  { label: 'Date', value: 'April 2026 → May 2026' },
                  { label: 'Platform', value: 'Mobile Web (Shopify)' },
                ],
              },
              {
                type: 'cards',
                columns: 2,
                variant: 'text',
                items: [
                  { label: 'My Role', value: '0→1 ownership · Research · UX/UI design · Frontend · A/B testing' },
                  { label: 'Team', value: 'Sole Designer (UXID & Frontend) & Backend Engineer' },
                ],
              },
            ],
          },
          {
            blocks: [
              { type: 'lead', text: 'What we achieved' },
              {
                type: 'cards',
                columns: 4,
                variant: 'metric',
                items: [
                  { label: 'Add-to-cart rate', value: '+16.31%' },
                  { label: 'Conversion rate', value: '+15.52%' },
                  { label: 'Category Orders uplift', value: '+3.61%' },
                  { label: 'Overall AOV uplift', value: '+0.38%' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'context',
        label: 'Context',
        heading: [{ t: 'THE SEASONAL ' }, { t: 'BET', gold: true }],
        intro: [
          { type: 'paragraphs', items: [
            'In Summer 2026, sunscreen became a key growth focus for Pilgrim — a high-demand, seasonal category backed by increased marketing spend across paid and organic channels.',
            'A majority of this traffic (~90%) was being directed straight to product pages, making ==PDPs the primary conversion surface== for the category.',
          ] },
        ],
      },
      {
        id: 'problem',
        label: 'Problem Statement',
        heading: [{ t: 'WHERE THE FUNNEL ' }, { t: 'LEAKED', gold: true }],
        intro: [
          { type: 'paragraphs', items: [
            "Sunscreen is the only beauty category where the right product depends on something outside the user — the weather. Yet the PDP gave them no contextual signal to decide. High-intent traffic was landing on a page that couldn't answer the one question that mattered: ==which SPF is actually right for me?==",
          ] },
        ],
        blocks: [
          { type: 'callout', style: 'bar', title: 'High intent. No context. No conversion.', body: 'That gap is the whole story.' },
        ],
      },
      {
        id: 'research',
        label: 'Research',
        heading: [{ t: 'FINDING THE ' }, { t: 'RIGHT SURFACE', gold: true }],
        headingGap: 32,
        inlineBlocks: true,
        blocks: [
          {
            type: 'group',
            gap: 32,
            blocks: [
              {
                type: 'group',
                gap: 16,
                blocks: [
                  { type: 'subheading', text: 'READING THE DROP-OFF' },
                  { type: 'list', ordered: true, items: [
                    'Analytics — Sunscreen PDPs pulled strong seasonal traffic and healthy dwell time, but converted below the category benchmark. High interest, low conversion. The leak was real, not a hunch.',
                    'Session recordings — One pattern repeated: users scrolled into the SPF and benefits, paused, scrolled back, and left without adding. Hesitation, not disinterest.',
                  ] },
                ],
              },
              {
                type: 'group',
                gap: 16,
                blocks: [
                  { type: 'subheading', text: 'WHO WAS LEAKING' },
                  { type: 'personas', items: [
                    {
                      image: '/uv2-meera.png',
                      name: 'MEERA',
                      tagline: 'Decided, but undecided',
                      quote: "I know I need sunscreen, I just can't tell which one.",
                      context: 'She has the intent, not the confidence. So the fix had to live on the ==product page==, where she gets stuck.',
                    },
                    {
                      image: '/uv2-kabir.png',
                      name: 'KABIR',
                      tagline: 'Not shopping for sunscreen',
                      quote: "Sunscreen? That wasn't even on my list today.",
                      context: "There's no intent to build on. So the reason has to come to him, placed ==inside his flow== rather than waiting on a page he'll never visit.",
                    },
                  ] },
                  { type: 'callout', style: 'icon', label: 'OPPORTUNITY', body: 'One gap, two moments. Meera needs the answer surfaced on the page; Kabir needs the reason raised in the cart. One signal, two surfaces.' },
                ],
              },
              {
                type: 'group',
                gap: 8,
                blocks: [
                  { type: 'subheading', text: 'WHERE THE FIX HAD TO LIVE' },
                  {
                    type: 'group',
                    gap: 16,
                    blocks: [
                      { type: 'paragraphs', items: ["The journey has five surfaces. The decision only breaks on two, so that's where the system lives."] },
                      {
                        type: 'journey',
                        steps: ['Homepage', 'Collection', 'PDP', 'Cart', 'Checkout'],
                        highlight: ['PDP', 'Cart'],
                        markers: [
                          { step: 'PDP', name: 'MEERA', label: 'Build conviction' },
                          { step: 'Cart', name: 'KABIR', label: 'Raise the question' },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'hypothesis',
        label: 'Hypothesis',
        heading: [{ t: 'FINDING THE ' }, { t: 'RIGHT SIGNAL', gold: true }],
        intro: [
          { type: 'paragraphs', items: [
            'Most beauty merchandising is built around who you are: skin type, concern, age, preference.',
            "Sunscreen is the exception. The right SPF doesn't depend on the person. It depends on what's happening outside, today, where they are. So I picked the signal closest to that decision: the UV index.",
            "Surface that at the right moment, and the product choice wouldn't need selling. It would simply look correct.",
          ] },
        ],
        blocks: [
          { type: 'callout', style: 'bar', title: 'UV number in, SPF answer out.', body: 'The signal maps straight to the decision.' },
        ],
      },
      {
        id: 'exploration',
        label: 'Design Exploration',
        heading: [{ t: 'FINDING THE ' }, { t: 'RIGHT FORM', gold: true }],
        headingGap: 24,
        inlineBlocks: true,
        blocks: [
          {
            type: 'group',
            gap: 40,
            blocks: [
              {
                type: 'group',
                gap: 16,
                blocks: [
                  {
                    type: 'group',
                    gap: 4,
                    blocks: [
                      { type: 'subheading', text: "ON THE PDP — Meera's confusion" },
                      { type: 'paragraphs', items: ["Three ways to surface the recommendation. Each one tested against the same question: would this clear user's confusion at the moment they're stuck?"] },
                    ],
                  },
                  { type: 'variants', columns: 3, items: [
                    { label: 'Direction A', name: 'Inline Copy', image: '/uv-image3.png', points: ['No scale or number, reads as fluff', "Meera still can't see why this SPF"] },
                    { label: 'Direction B', name: 'Full skin regime', image: '/uv-image4.png', points: ['Long regime, loads below the fold', 'Most users never see it'] },
                    { label: 'Direction C', name: 'UV module Just below CTA', image: '/uv-image6.png', shipped: true, points: ['One tap from the CTA, right where she decides', "Removes doubt, doesn't sell"] },
                  ] },
                ],
              },
              {
                type: 'group',
                gap: 16,
                blocks: [
                  {
                    type: 'group',
                    gap: 4,
                    blocks: [
                      { type: 'subheading', text: "IN THE CART — Kabir's missed intent" },
                      { type: 'paragraphs', items: ['Two ways to raise sunscreen for someone who never came for it. One helped, one intruded.'] },
                    ],
                  },
                  { type: 'variants', columns: 2, items: [
                    { label: 'Direction A', name: 'Heavy hero card with full imagery', image: '/uv-image7.png', points: ['Took over the drawer, read as an interruption', 'Pushy for someone with zero intent, easy to dismiss'] },
                    { label: 'Direction B', name: 'Compact contextual card with dynamic price', image: '/uv-image2.png', shipped: true, points: ['UV sets the why, product the what, live price the offer', 'Raises the reason without blocking his checkout'] },
                  ] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'solutions',
        label: 'Final Solutions',
        heading: [{ t: 'EVERY PIXEL ' }, { t: 'EARNS ITS PLACE', gold: true }],
        intro: [
          { type: 'paragraphs', items: ['What Meera sees on the page, and what catches Kabir in the cart. Each decision grounded in a UX principle, not a hunch.'] },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'finalDesigns', items: [
            {
              image: '/uv-image1.png',
              label: 'PDP: answer Meera’s confusion',
              annotations: [
                { side: 'left', law: "Hick's Law", body: 'One UV reading → one SPF answer. Decision removed entirely.' },
                { side: 'left', law: 'Law of Proximity', body: 'UV level, city, and copy grouped as one contextual unit.' },
                { side: 'right', law: 'Serial Position Effect', body: 'Below price, above CTA — peak-intent real estate.' },
                { side: 'right', law: 'Von Restorff Effect', body: 'Colour-coded bar makes the risk level scannable before a word is read.' },
              ],
            },
            {
              image: '/uv-image2.png',
              label: 'Cart: raise Kabir’s missing intent',
              annotations: [
                { side: 'left', law: 'Goal-Gradient Effect', body: 'Dynamic copy shows exactly what unlocks the next offer tier.' },
                { side: 'left', law: 'Selective Attention', body: 'Hides if sunscreen is already in cart — never noise.' },
                { side: 'right', law: 'Law of Proximity', body: 'UV, product, and price in one card — the why, what, and how-much at a glance.' },
                { side: 'right', law: 'Doherty Threshold', body: '"Very High UV → SPF 50+" answers the why in under 400ms.' },
              ],
            },
          ] },
        ],
      },
      {
        id: 'system',
        label: 'Behind the Scenes',
        heading: [{ t: 'THE LOGIC THAT ' }, { t: 'RUNS IT', gold: true }],
        intro: [
          { type: 'paragraphs', items: ['The widget looks simple, but behind it sits a set of rules deciding when to appear, when to stay quiet, and what price to show. None of it is visible, all of it shapes whether the widget feels helpful or annoying.'] },
        ],
        bodyGap: 24,
        blocks: [
          {
            type: 'group',
            gap: 24,
            blocks: [
              { type: 'gate', label: 'WIDGET HIDES WHEN', rules: ['Cart is empty', 'A sunscreen is already in cart', 'Recommended product is already in cart'] },
              {
                type: 'group',
                gap: 16,
                blocks: [
                  { type: 'subheading', text: 'WHAT PRICE IT SHOWS' },
                  { type: 'paragraphs', items: ['Pilgrim runs five offer types at once, so the widget reads the live offer and the cart, then shows the right price for that exact moment.'] },
                  { type: 'offerMap', rows: [
            { offer: 'Flat 25%', state: 'any cart state', shows: 'Strikethrough + −25% price' },
            { offer: 'Flat 40%', state: 'any cart state', shows: 'Strikethrough + −40% price' },
            { offer: 'B1G1', state: '0 qualifying in cart', shows: '"Add 1 → get 1 FREE"' },
            { offer: '', state: '1+ qualifying in cart', shows: '"FREE"' },
            { offer: 'B2G2', state: '< 2 qualifying in cart', shows: '"Buy 2, get 2 FREE"' },
            { offer: '', state: '2+ qualifying in cart', shows: '"FREE"' },
            { offer: 'B3G3', state: '< 3 qualifying in cart', shows: '"Buy 3 @ ₹999"' },
            { offer: '', state: '3+ qualifying in cart', shows: '"₹999 for 3"' },
                  ] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'measurement',
        label: 'Measurement',
        heading: [{ t: 'WIRED FOR ' }, { t: 'PROOF', gold: true }],
        headingGap: 16,
        inlineBlocks: true,
        blocks: [
          { type: 'paragraphs', items: ['Before launch, I wired the widget to prove itself, and rolled it out gradually.'] },
          { type: 'cards', columns: 1, variant: 'text', items: [
            { label: 'WHY GRADUAL ROLLOUT', value: 'Measure real impact, and contain the risk if anything broke in production.' },
          ] },
          { type: 'cards', columns: 2, variant: 'text', items: [
            { label: 'ROLLOUT', value: '5 days at 20% → 11 days at 50%' },
            { label: 'CITIES', value: 'Delhi · Mumbai · Pune' },
          ] },
          { type: 'paragraphs', items: ['Every widget-driven add was tracked from impression to delivered order, so attribution stayed honest.'] },
        ],
      },
      {
        id: 'outcome',
        label: 'Outcome',
        heading: [{ t: 'WHAT SIXTEEN DAYS ' }, { t: 'PROVED', gold: true }],
        noDivider: true,
        headingGap: 16,
        inlineBlocks: true,
        blocks: [
          { type: 'paragraphs', items: ["A 50/50 split: half saw the widget, half didn't. Across 16 days, here's what the widget half did."] },
          { type: 'cards', columns: 4, variant: 'metric', items: [
            { label: 'Add-to-cart rate', value: '+16.31%' },
            { label: 'Conversion rate', value: '+15.52%' },
            { label: 'Category Orders uplift', value: '+3.61%' },
            { label: 'Overall AOV uplift', value: '+0.38%' },
          ] },
          { type: 'callout', style: 'icon', label: 'What the data revealed', body: 'BOGO offers drove 68% of widget-attributed orders, even though the UV framing was identical across every offer type. The takeaway: context earns the attention, the offer closes the sale. Neither works alone.' },
        ],
      },
      {
        id: 'reflection',
        label: 'Reflection',
        heading: [{ t: 'WHERE THIS SIGNAL COULD ' }, { t: 'GO NEXT', gold: true }],
        headingGap: 16,
        inlineBlocks: true,
        blocks: [
          { type: 'list', items: [
            '**Beyond UV** — The engine is signal-agnostic: humidity for hair care, pollen for sensitive skin, temperature for hydration. A contextual relevance engine that happens to wear a UV skin today.',
            '**Pre-purchase regime** — Direction B, revisited. Now that the contextual frame is proven, the full regime suggestion has ground to stand on.',
            '**Skin-type layer** — Fold in the Pilgrim quiz profile already on file, taking it from "SPF 50+ for Mumbai" to "SPF 50+ that won\'t break out oily skin in Mumbai."',
          ] },
          { type: 'callout', style: 'bar', title: "What I'd do differently", body: "I'd build the offer-detection logic before the UV logic, not beside it. Offers turned out to do more work than I expected. A leaner v0 testing just the offer card would have isolated the variables and sharpened the v1." },
        ],
      },
    ],
  },
  {
    slug: 'digiyatra',
    layout: 'uv-v2',
    accentTheme: 'digi',
    title: 'Redesigning DigiYatra onboarding',
    tagline: '',
    readTime: '9m',
    readTimeGradient: 'linear-gradient(180deg, #7a52ff, #3a1f8a)',
    category: 'UX Research · Usability · 0→1 Redesign',
    company: 'IDC IIT Bombay',
    year: '2026',
    accent: '#6536e6',
    cardLabel: 'DigiYatra Onboarding',
    cardHeadline: 'Cutting a 10-step identity flow in half',
    cardDescription: "A usability-led redesign of DigiYatra airport onboarding — faster, clearer, and more trustworthy for first-time and elderly travellers.",
    cardMetrics: [
      { value: '−76%', label: 'Onboarding time' },
      { value: '64 → 86', label: 'SUS score' },
      { value: '10 → 5', label: 'Identity steps' },
    ],
    thumbnail: { dark: '/digi-banner-dark.png', light: '/digi-banner-light.png' },
    thumbnailStyle: { height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' },
    thumbnailOverlay: null,
    headerImage: {
      dark: '/digi-banner-dark.png',
      light: '/digi-banner-light.png',
      subtitle: null,
      keywords: ['UX Research', 'Onboarding Redesign', 'Usability Tested'],
    },
    sections: [
      {
        id: 'overview',
        label: 'TL; DR',
        heading: [{ t: 'Project ' }, { t: 'Overview', gold: true }],
        intro: [
          { type: 'lead', text: "DigiYatra promises a walk-through airport gate, but onboarding is long and anxious enough that many travellers give up partway. We took the flow apart with five research methods and traced every drop-off to two culprits: it is too complex, and people do not trust it. Then we rebuilt it to fix both." },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'cards', columns: 3, variant: 'text', items: [
            { label: 'My Role', value: 'Heuristic task analysis · UX/UI redesign · Usability & eye-tracking testing' },
            { label: 'Timeline', value: '5 days · ~60 hours' },
            { label: 'Platform', value: 'DigiYatra mobile app' },
          ] },
          { type: 'cards', columns: 2, variant: 'text', items: [
            { label: 'Mentor', value: 'Prof. Swati Pal, IDC IIT Bombay' },
            { label: 'Team', value: 'Sagar Pradhan · Kratika Tyagi · Humera Khan' },
          ] },
          { type: 'subheading', text: 'What the redesign moved' },
          { type: 'metrics', columns: 3, items: [
            { value: '4.5m → 1.07m', label: '~76% less time to onboard' },
            { value: '64 → 86', label: 'SUS score, below-average to excellent' },
            { value: '10 → 5 steps', label: 'To create your ID credential' },
          ] },
        ],
      },
      {
        id: 'framing',
        label: 'The framing',
        heading: [{ t: 'Easy to believe in, hard to get through' }],
        intro: [
          { type: 'lead', text: "The pitch is simple: show your face, skip the queue. The problem is everything that has to happen before that gate, and how it feels along the way." },
        ],
        bodyGap: 16,
        blocks: [
          { type: 'subheading', text: 'Two things make people give up' },
          { type: 'list', items: [
            "**Complexity** — the flow is long: dozens of steps, two OTPs and a PIN before a first-timer can reach the gate.",
            "**Trust** — it asks for your Aadhaar and your face, then never says where either one goes.",
            "**The two feed each other** — a longer flow gives doubt more time to grow.",
          ] },
        ],
      },
      {
        id: 'whymatters',
        label: 'Why it matters',
        heading: [{ t: "The barrier isn’t the technology" }],
        headingGap: 24,
        blocks: [
          { type: 'splitImage',
            paragraphs: ["DigiYatra is opt-in infrastructure meant for everyone, so it only works if people finish onboarding. Both our research and the literature say they stall for reasons that have nothing to do with the tech."],
            src: '/digi-why-matters.png',
            alt: 'DigiYatra e-gates at an Indian airport',
          },
          { type: 'microLabel', text: 'What the literature shows' },
          { type: 'noteCards', columns: 2, numStyle: 'bracket', items: [
            { num: '1', label: 'Adoption', body: 'Only ~22% opt in. Low awareness, a complex sign-up, and fear of misuse keep adoption thin.' },
            { num: '2', label: 'Motivation', body: 'People trade privacy only when biometrics clearly help. Emotion drives the call.' },
            { num: '3', label: 'Privacy', body: 'Many fear their face data is kept forever or used well beyond its stated purpose.' },
            { num: '4', label: 'Reliability', body: 'Failed scans and errors push frustrated travellers to give up or ask for help.' },
          ] },
          { type: 'callout', style: 'bar', title: 'THE OPENING', body: "The fix isn’t better tech. It’s a better first ten minutes." },
          { type: 'references', items: [
            "George, A. Shaji et al. (2023). From Paperwork to Biometrics: Assessing the Digitization of Air Travel in India through DigiYatra.",
            "Kassir, A. M. (2026). Passengers’ perceptions on the use of biometrics at airports: a statistical model of the extended theory of planned behavior. With Kasim, K. O. et al. (2021).",
            "Gyanchandani et al. (2026). Balancing convenience and data privacy in the DigiYatra app.",
            "Babaei & Vassileva (2025). Enhancing User Awareness of Manipulative Designs: persuasive strategies for mobile app platforms.",
          ] },
        ],
      },
      {
        id: 'objective',
        label: 'The objective',
        heading: [{ t: 'Make the first ten minutes worth finishing' }],
        intro: [
          { type: 'lead', text: "One goal, two fronts: cut the effort onboarding takes, and close the trust gap that makes people hesitate, without weakening the security the system runs on." },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'microLabel', text: 'What we set out to do' },
          { type: 'noteCards', columns: 3, items: [
            { label: 'Shorten the path', body: 'Fewer steps, fewer decisions, and less dead time before the gate.' },
            { label: 'Build trust in plain sight', body: 'Say what data is taken, why, and where it stays, before the app asks for any of it.' },
            { label: 'Stay safe and compliant', body: 'Every cut still respects the security rules and government checks the system depends on.' },
          ] },
          { type: 'callout', style: 'icon', label: 'How we would know it worked', body: 'Three yardsticks, set upfront: time to finish, usability (SUS), and how confident people felt about their data.' },
        ],
      },
      {
        id: 'approach',
        label: 'The approach',
        heading: [{ t: 'Five lenses, stacked' }],
        intro: [
          { type: 'lead', text: "No method tells the whole truth alone, so we layered five, each covering the others’ blind spots, all aimed at one flow: onboarding." },
        ],
        bodyGap: 32,
        blocks: [
          { type: 'microLabel', text: 'The five lenses' },

          { type: 'group', gap: 16, blocks: [
            { type: 'lensTitle', text: '1. Survey' },
            { type: 'paragraphs', items: ['A wide read on how travellers feel about DigiYatra — before we talked to anyone.'] },
            { type: 'microLabel', text: 'How we ran it' },
            { type: 'list', items: [
              '**20 respondents**, a mix of frequent and occasional flyers',
              '**Distributed online** across traveller groups',
              '**5 themes**: awareness, trust, privacy comfort, perceived ease, intent to use',
            ] },
            { type: 'microLabel', text: 'What it told us' },
            { type: 'donuts', columns: 2, items: [
              { caption: 'Q: Do you know what happens to your facial data after your journey?', segments: [
                { label: 'No', value: 83, color: '#7a52ff' },
                { label: 'Yes', value: 8, color: '#f5a623' },
                { label: 'Not sure', value: 8, color: '#ff5a6e' },
              ] },
              { caption: 'Q: Convenience vs. privacy, which matters more?', segments: [
                { label: 'Equally important', value: 50, color: '#7a52ff' },
                { label: 'Convenience > privacy', value: 25, color: '#f5a623' },
                { label: 'Privacy > convenience', value: 15, color: '#ff5a6e' },
                { label: 'Convenience worth it', value: 10, color: '#22c9a0' },
              ] },
            ] },
            { type: 'callout', style: 'icon', label: 'What the survey gave us', body: [
              "**The block is trust, not usability**: the flow is fast and easy, yet 83% can’t see where their face data goes — and 75% wrongly believe it’s stored forever.",
              "**Willingness is already there**: half weigh privacy and convenience equally, so winning confidence wins adoption.",
            ] },
          ] },

          { type: 'group', gap: 16, blocks: [
            { type: 'lensTitle', text: '2. Interviews' },
            { type: 'paragraphs', items: ['Five semi-structured interviews across the adoption spectrum, to hear the why behind the numbers.'] },
            { type: 'microLabel', text: 'How we ran it' },
            { type: 'list', items: [
              '**5 participants**, from an active user to non-users, aged 27 to 57',
              '**Semi-structured**: awareness, trust, privacy, adoption, usefulness',
              '**Affinity mapped** into five patterns and a mental-model gap',
            ] },
            { type: 'quote', text: 'Bohot lamba process tha, beech mein hi chhod diya.', cite: '“The process was too long — I gave up midway.” · Participant 2, 53, first-time user' },
            { type: 'microLabel', text: 'The mental-model gap' },
            { type: 'gapCards', items: [
              { title: 'What they understand', tone: 'good', bullets: ['Faster airport access', 'Skip the queue', 'Face-based verification', 'Government-backed service'] },
              { title: 'What they do not', tone: 'bad', bullets: ['Where their data is stored', 'How long it is kept', 'Who can access it', 'What consent allows', 'How to delete it'] },
            ] },
            { type: 'callout', style: 'icon', label: 'What the interviews told us', body: [
              '**The data mental model is empty**: 5 of 5 could not say where their biometric data goes, how long it is kept, or who can access it.',
              '**Friction is real and avoidable**: 4 of 5 stumbled on the DigiLocker versus Aadhaar choice, OTPs, and surprise screens.',
            ] },
          ] },

          { type: 'group', gap: 16, blocks: [
            { type: 'lensTitle', text: '3. Task analysis' },
            { type: 'paragraphs', items: ['We broke “use DigiYatra” into every atomic step, from install to the gate, to see exactly where it breaks.'] },
            { type: 'microLabel', text: 'How we ran it' },
            { type: 'list', items: [
              '**Hierarchical task analysis**: every atomic step from install to the gate',
              '**13 friction points** in all, 11 of them within UI/UX scope',
              '**2 technical defects** — an app crash and a broken Terms link — were flagged to engineering',
            ] },
            { type: 'microLabel', text: 'The task, decomposed' },
            { type: 'hta', items: [
              { n: '0', title: 'Complete DigiYatra airport entry', detail: 'Plan: do 1 → 2 → 3 → 4 in order' },
              { n: '1', title: 'Install and set up the account' },
              { n: '2', title: 'Create the ID credential', detail: 'ten steps · Aadhaar or DigiLocker path · two OTPs and a separate PIN' },
              { n: '3', title: 'Upload the boarding pass' },
              { n: '4', title: 'Scan face at the gate' },
            ] },
            { type: 'microLabel', text: 'The UI/UX issues it surfaced' },
            { type: 'table',
              head: ['#', 'Location in flow', 'Issue', 'Severity'],
              colWidths: ['44px', '24%', 'auto', '110px'],
              rows: [
                ['1', 'OTP screen', 'No way to go back and fix the mobile number if entered wrong.', { badge: 'High', tone: 'high' }],
                ['2', 'Device-log screen', 'No skip option; the only CTA enables device logging, so consent feels coerced.', { badge: 'High', tone: 'high' }],
                ['3', 'Home (both paths)', '“Create ID credential” is ambiguous; users do not know it is a prerequisite.', { badge: 'High', tone: 'high' }],
                ['4', 'Blocking popup', 'Blocked from adding a boarding pass with no hint a credential was needed first.', { badge: 'High', tone: 'high' }],
                ['5', 'Post credential', 'No success confirmation after credential creation; no feedback anything saved.', { badge: 'High', tone: 'high' }],
                ['6', 'Post pass upload', 'No success confirmation after boarding-pass upload; user does not know what is next.', { badge: 'High', tone: 'high' }],
                ['7', 'Gate', 'No instruction on what to do at the gate; users must ask airport staff.', { badge: 'Medium', tone: 'medium' }],
                ['8', 'Overall flow', 'Two OTPs and a separate PIN before the gate; very high friction for a timed task.', { badge: 'Critical', tone: 'critical' }],
                ['9', 'Overall flow', 'No progress indicator; no sense of how many steps remain.', { badge: 'High', tone: 'high' }],
                ['10', 'Aadhaar path', 'Aadhaar number and Virtual Aadhaar ID are never distinguished in the UI.', { badge: 'High', tone: 'high' }],
                ['11', 'Aadhaar path', 'Feedback survey appears mid-critical-task, adding friction.', { badge: 'Medium', tone: 'medium' }],
              ],
            },
            { type: 'callout', style: 'icon', label: 'What the task analysis told us', body: [
              '**The flow is long and unguided**: two OTPs, a separate PIN, and no progress indicator to show how much is left.',
              '**Consent feels coerced, not chosen**: the only way forward switches on device logging, with no way to decline.',
            ] },
          ] },

          { type: 'group', gap: 16, blocks: [
            { type: 'lensTitle', text: '4. Usability & SUS' },
            { type: 'paragraphs', items: ['We ran the existing flow as a moderated usability test — turning the friction into a number we could beat.'] },
            { type: 'microLabel', text: 'How we ran it' },
            { type: 'list', items: [
              '**5 participants**, first-time and returning flyers, thinking aloud',
              '**One task**: onboard and reach the gate',
              '**Measured**: time, task success, errors, and SUS',
            ] },
            { type: 'microLabel', text: 'The baseline numbers' },
            { type: 'metrics', columns: 4, items: [
              { value: '64 / 100', label: 'SUS score, below the 68 benchmark' },
              { value: '4.5 min', label: 'Average time to onboard' },
              { value: '100%', label: 'Task success rate' },
              { value: '4', label: 'Errors per person, on average' },
            ] },
            { type: 'callout', style: 'icon', label: 'What the usability test told us', body: [
              '**Everyone finished, no one enjoyed it**: 100% task success, but a SUS of 64, below the 68 benchmark.',
              '**Confidence was uneven**: scores ranged from 37.5 to 90, lowest for first-time and cautious users.',
            ] },
          ] },

          { type: 'group', gap: 16, blocks: [
            { type: 'lensTitle', text: '5. Eye-tracking' },
            { type: 'paragraphs', items: ['A Tobii close-up on two users, to see the hesitation the other methods could only infer.'] },
            { type: 'microLabel', text: 'How we ran it' },
            { type: 'list', items: [
              '**Tobii eye-tracker**, 2 participants, an illustrative close-up',
              '**Three screens**: consent, adding credentials, and home',
              '**Measured**: gaze fixation time and where attention landed',
            ] },
            { type: 'microLabel', text: 'What we watched' },
            { type: 'splitImage',
              note: {
                bare: true,
                label: 'CLOSE-UP · 2 USERS, ILLUSTRATIVE',
                body: 'On the existing flow, gaze fixation averaged about 339 ms and pooled on the consent and credential screens, exactly the sensitive, effortful moments where users slowed to work out what was happening.',
                foot: '≈ 339 ms average gaze fixation · 3 min 55 sec on task',
              },
              src: '/digi-scan-1.png',
              alt: 'Two participants during a Tobii eye-tracking session',
            },
            { type: 'callout', style: 'icon', label: 'What the close-up showed', body: [
              '**Attention pooled where it hurts**: gaze lingered longest on the consent and credential screens, the sensitive, effortful moments.',
              '**Read it as illustrative, not decisive**: with two participants this is a close-up, not a measured sample.',
            ] },
          ] },
        ],
      },
      {
        id: 'found',
        label: 'What we found',
        heading: [{ t: 'The same two problems, over and over' }],
        intro: [
          { type: 'lead', text: 'Across all five lenses, the friction collapsed into two patterns: too long to finish, and too opaque to trust.' },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'microLabel', text: 'Problem 1: Too long to finish' },
          { type: 'noteCards', columns: 3, bordered: true, items: [
            { label: 'Structure', body: 'Ten steps just to create an ID credential, plus two OTPs and a PIN. The task analysis found 13 friction points in all.' },
            { label: 'Effort', body: 'In testing: 4.5 minutes to finish, with 4 errors along the way.' },
            { label: 'Voice', body: 'Interviewees called it long, repetitive, and easy to lose your place in.' },
          ] },
          { type: 'callout', style: 'icon', label: 'Takeaway', body: 'People did not fail the flow. They just had to work too hard to get through it.' },
          { type: 'microLabel', text: 'Problem 2: Too opaque to trust' },
          { type: 'noteCards', columns: 3, bordered: true, items: [
            { label: 'Transparency', body: 'Only 1 in 4 felt the app explains how their data is used.' },
            { label: 'Mental model', body: 'Users grasped the promise but could not say where their face data goes, how long it is kept, or who can see it.' },
            { label: 'Timing', body: 'Worry peaked at the face scan, the most sensitive step, exactly where the app went silent.' },
          ] },
          { type: 'callout', style: 'icon', label: 'Takeaway', body: 'They trust the source, not the system. Government backing earns the install, but the flow never earns the data.' },
        ],
      },
      {
        id: 'personas',
        label: 'Who we designed for',
        heading: [{ t: 'Two personas that anchored it' }],
        intro: [
          { type: 'lead', text: 'The research clustered into two traveller segments, and two personas that anchored every design decision that followed.' },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'pills', items: [
            { num: '1', text: 'The Time-Pressed Shortcut Seeker' },
            { num: '2', text: 'The Deliberate Validator' },
          ] },
          { type: 'personaCards', items: [
            { name: 'Arjun Mehta', role: 'The Time-Pressed Shortcut Seeker · 34', quote: 'I just want to get through this quickly.', values: 'Values speed, low effort, and a smooth flow. Skims screens and takes the fastest path.', risk: '**The risk:** he complies without reading, so we made the safe choice the default.' },
            { name: 'Meera Iyer', role: 'The Deliberate Validator · 57', quote: 'I need to understand this before I proceed.', values: 'Values transparency, control, and reassurance. Reads carefully and questions each step.', risk: '**The risk:** she hesitates when things are unclear, so she exposes the trust gap most sharply.' },
          ] },
        ],
      },
      {
        id: 'plan',
        label: 'The plan',
        heading: [{ t: 'Two problems, two bets' }],
        intro: [
          { type: 'lead', text: 'Two problems meant two bets: cut the complexity, then earn the trust. We took them in that order, because a shorter flow leaves less room for doubt to creep in.' },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'noteCards', columns: 2, items: [
            { label: 'BET 1 · COMPLEXITY', title: 'Cut it down to what matters', body: 'Strip the steps that exist for the system, not the user, so the flow is short enough to finish in one sitting.' },
            { label: 'BET 2 · TRUST', title: 'Earn trust before asking', body: 'Explain what happens to their data and reassure at the exact moment the worry arises, not buried in a policy.' },
          ] },
        ],
      },
      {
        id: 'bet1',
        label: 'Bet 1 · Complexity',
        heading: [{ t: 'Cutting it down to what matters' }],
        intro: [
          { type: 'lead', text: "“How might we cut onboarding to only the steps truly necessary for everyone?” Redundant steps, manual entry, and unclear choices made the flow feel long and easy to abandon." },
        ],
        bodyGap: 40,
        blocks: [
          { type: 'group', gap: 16, blocks: [
            { type: 'microLabel', text: 'Cutting the identity flow: 10 steps to 5' },
            { type: 'paragraphs', items: ["Adding an identity credential meant ten steps and three auth factors. We kept SSO for compliance but replaced the jarring third-party bounce with a clear handoff, and deep-linked users who already have DigiLocker straight past three redundant steps."] },
            { type: 'variants', columns: 1, items: [
              { label: 'BEFORE · CURRENT FLOW', name: '10 steps · 3 auth factors', flow: true, screens: [
                { src: '/digi-identity-b1.png', caption: 'Adding Credential options' },
                { src: '/digi-identity-b2.png', caption: 'User Consent' },
                { src: '/digi-identity-b3.png', caption: 'Aadhaar & Captcha Entry' },
                { src: '/digi-identity-b4.png', caption: 'OTP Verification' },
                { src: '/digi-identity-b5.png', caption: 'Digilocker Security PIN' },
              ], points: ['Credential options, consent, Aadhaar, captcha, OTP, DigiLocker PIN', 'A sudden bounce to a third-party app breaks trust mid-flow'] },
              { label: 'AFTER · PROPOSED FLOW', name: '5 steps · 1 auth factor', accent: true, flow: true, screens: [
                { src: '/digi-identity-a1.png', caption: 'Adding Credential options' },
                { src: '/digi-identity-a2.png', caption: 'User Consent + Info about getting redirected' },
                { src: '/digi-identity-a3.png', caption: 'Security PIN' },
              ], points: ['Credential options, consent with redirect notice, security PIN', 'Deep link skips 3 redundant steps; edge cases fall back to the full flow'] },
            ] },
          ] },
          { type: 'group', gap: 16, blocks: [
            { type: 'microLabel', text: 'Your number, detected automatically' },
            { type: 'paragraphs', items: ['Typing a ten-digit number is slow and error-prone. We read it from the SIM instead, with manual entry still one tap away.'] },
            { type: 'variants', columns: 2, items: [
              { label: 'BEFORE · MANUAL ENTRY', name: 'Type +91 and 10 digits', image: '/digi-number-before.png', points: ['Typos and keyboard struggle cause failed logins', 'One more thing to get right before you even start'] },
              { label: 'AFTER · SIM AUTO-DETECT', name: 'Pick a detected number', image: '/digi-number-after.png', accent: true, points: ['Reads the SIMs on the device, so users just pick one', 'Manual entry stays available for edge cases'] },
            ] },
          ] },
          { type: 'group', gap: 16, blocks: [
            { type: 'microLabel', text: 'Making the identity choice obvious' },
            { type: 'paragraphs', items: ['Two unlabelled options forced users to guess, a common stall point. We added a recommendation and plain-language guidance.'] },
            { type: 'variants', columns: 2, items: [
              { label: 'BEFORE · NO GUIDANCE', name: 'Two bare options', image: '/digi-choice-before.png', points: ['No hint which path applies, so users hesitate', 'Picking the wrong one means backtracking later'] },
              { label: 'AFTER · GUIDED CHOICE', name: 'A recommended path', image: '/digi-choice-after.png', accent: true, points: ['A “Recommended” tag points to the easiest path', 'Plain hints: best if you already use DigiLocker, or have Aadhaar handy'] },
            ] },
          ] },
        ],
      },
      {
        id: 'bet2',
        label: 'Bet 2 · Trust',
        heading: [{ t: 'Earning trust before asking' }],
        intro: [
          { type: 'lead', text: "“How might we help hesitant, first-time travellers feel safe sharing their ID and data?” So we built reassurance into the moments the worry actually arises." },
        ],
        bodyGap: 40,
        blocks: [
          { type: 'group', gap: 16, blocks: [
            { type: 'microLabel', text: 'A warm welcome before we ask for anything' },
            { type: 'paragraphs', items: ['Users were dropped straight into a login asking for their number. We added three swipeable intro screens that explain what DigiYatra is, show real traveller reviews as social proof, and signal that it is safe and government-backed.'] },
            { type: 'variants', columns: 2, template: '1fr 2.6fr', items: [
              { label: 'BEFORE · COLD START', name: '“Enter your number.”', image: '/digi-intro-before.png', points: ['No explanation of what DigiYatra is or who runs it', 'Asks for personal details before earning any trust'] },
              { label: 'AFTER · 3 INTRO SCREENS', name: 'Purpose, proof, safety', accent: true, screens: [
                { src: '/digi-intro-a1.png' },
                { src: '/digi-intro-a2.png' },
                { src: '/digi-intro-a3.png' },
              ], points: ['What it is and how it speeds up airport entry', 'Reviews and government backing as social proof'] },
            ] },
            { type: 'callout', style: 'icon', label: 'Why it builds trust', body: 'People decide whether to trust an app in seconds — leading with purpose, proof, and government backing earns the right to ask for an ID.' },
          ] },
          { type: 'group', gap: 16, blocks: [
            { type: 'microLabel', text: 'Consent you can actually understand' },
            { type: 'paragraphs', items: ['The credential consent screen was a wall of legal jargon. We rewrote it so people know exactly what they are agreeing to, and that they stay in control.'] },
            { type: 'variants', columns: 2, items: [
              { label: 'BEFORE · LEGAL WALL', name: 'A block of jargon', image: '/digi-consent-before.png', points: ['What is stored and where is buried in long paragraphs', 'People tap Agree without knowing what they agreed to'] },
              { label: 'AFTER · CLEAR & DIGESTIBLE', name: 'Plain points', image: '/digi-consent-after.png', accent: true, points: ['What we use, why, and where it stays', '“Kept on your phone, never our servers. Delete anytime.”'] },
            ] },
            { type: 'callout', style: 'icon', label: 'Why it builds trust', body: 'Informed consent is real consent: when people understand what they share and see they stay in control, they agree with confidence, not anxiety.' },
          ] },
          { type: 'group', gap: 16, blocks: [
            { type: 'microLabel', text: 'Reassurance right before the face scan' },
            { type: 'paragraphs', items: ['The face scan is the most sensitive moment. We added clear how-to guidance and a nudge explaining exactly where the photo goes, at the moment the worry actually arises.'] },
            { type: 'variants', columns: 2, items: [
              { label: 'BEFORE · NO REASSURANCE', name: '“Scan your face.”', image: '/digi-facescan-before.png', points: ['Asks for a face scan with no explanation of why', 'The unspoken worry: where does my photo go?'] },
              { label: 'AFTER · GUIDED + REASSURED', name: 'How-to + privacy nudge', image: '/digi-facescan-after.png', accent: true, points: ['Simple steps for a good scan: lighting, hold steady', '“Your photo stays on your phone, never uploaded.”'] },
            ] },
            { type: 'callout', style: 'icon', label: 'Why it builds trust', body: 'Biometrics are the scariest thing to hand over. Reassuring where it goes in context — not in a policy — turns the most anxious step into a confident one.' },
          ] },
        ],
      },
      {
        id: 'results',
        label: 'Results',
        heading: [{ t: 'What the redesign moved' }],
        intro: [
          { type: 'lead', text: 'We ran the redesigned flow through the same usability test and eye-tracking setup, with the same task and the same kind of participants. Here is what moved.' },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'microLabel', text: 'Usability: before vs after' },
          { type: 'metrics', columns: 3, items: [
            { value: '4.5m → ==1.07m==', label: 'Average onboarding time' },
            { value: '64 → ==86==', label: 'SUS score, below-average to excellent' },
            { value: '100% → 100%', label: 'Task success rate, unchanged' },
          ] },
          { type: 'callout', style: 'stat', title: 'Same 100% success, far less effort.', body: 'Onboarding dropped from 4.5 to 1.07 minutes and SUS jumped from below-average to excellent. The redesign removed effort, not failure.' },
          { type: 'microLabel', text: 'Eye-tracking: decision time & cognitive load' },
          { type: 'table',
            head: ['', 'Gaze · before', 'Time · before', 'Gaze · after', 'Time · after'],
            rows: [
              ['Average', '339 ms', '3:55', '==219 ms==', '==1:04=='],
              ['P1', '434 ms', '4:35', '==367 ms==', '==1:23=='],
              ['P2', '244 ms', '3:16', '==71 ms==', '==0:45=='],
            ],
          },
          { type: 'list', items: [
            '**Lower cognitive load**: shorter gaze fixation and faster decisions on the redesigned task.',
            '**Less visual search**: users found the target information far more quickly.',
          ] },
        ],
      },
      {
        id: 'takeaways',
        label: 'Takeaways',
        heading: [{ t: 'Four lessons we are taking forward' }],
        intro: [
          { type: 'lead', text: 'Four principles that carry to any high-stakes onboarding where effort and trust are both on the line.' },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'noteCards', columns: 2, numStyle: 'big', items: [
            { num: '01', title: 'Reassure in context, not in a policy', body: 'Trust is won at the exact moment the worry appears, on the screen that triggers it, not in a document nobody opens.' },
            { num: '02', title: 'Cut steps that serve the system, not the user', body: 'Every screen that exists for compliance or logging is a place to hesitate or quit. Keep only what the traveller actually needs.' },
            { num: '03', title: 'Confirm every state', body: 'People need to know what just happened and what comes next. Silence after an action reads as failure, even when it worked.' },
            { num: '04', title: 'Design for the least confident user in the queue', body: 'Make the safe, clear path the default. When the most hesitant person can finish, everyone else moves faster too.' },
          ] },
        ],
      },
      {
        id: 'whatsnext',
        label: "What’s next",
        heading: [{ t: 'Limits, and what comes next' }],
        noDivider: true,
        intro: [
          { type: 'lead', text: 'An honest look at what this study could not do, and where the work goes from here.' },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'microLabel', text: 'Honest limits' },
          { type: 'list', items: [
            '**Not fully real-world**: tasks were simulated on a prototype, not in live, time-pressured airport conditions.',
            '**Time-boxed**: a tight one-week timeline limited the number of test rounds and iterations.',
            '**Few older users**: we could not recruit as many 60-plus, first-time travellers as we wanted, the group that struggles most.',
            '**Small sample**: n=5 makes the findings indicative and directional, not statistically generalisable.',
          ] },
          { type: 'microLabel', text: 'Where it goes next' },
          { type: 'list', items: [
            '**Simple Mode and deeper accessibility**: an easier experience that auto-suggests itself when someone struggles — larger type, one step per screen, and read-aloud — taken further with voice navigation and regional-language audio.',
            '**An in-app AI assistant**: answers questions and guides users step by step, in plain language, in real time.',
            '**Human assistance**: a “talk to a person” path, plus a “help a family member” flow for anyone who cannot self-serve.',
          ] },
          { type: 'callout', style: 'stat', title: 'Leaving should be as easy as arriving.', body: 'For identity infrastructure meant for everyone, onboarding has to work for the least confident user in the queue, not just the most.' },
        ],
      },
    ],
  },
  /* — v1 UV case study (replaced by uv-index-v2) —
  {
    slug: 'uv-index',
    title: 'A UV-Driven Sunscreen Recommender',
    tagline: '',
    readTime: '6m',
    readTimeGradient: 'linear-gradient(180deg, #a000cb, #500065)',
    category: 'UI/UX · Vibe-coded Implementation',
    company: 'Pilgrim',
    year: '2026',
    accent: '#a000cb',
    cardLabel: 'Contextual Personalisation',
    cardHeadline: 'Turning confusion into an obvious one',
    cardDescription: "A UV-index-driven recommender that surfaces the right SPF for today's weather.",
    cardMetrics: [
      { value: '+16.31%', label: 'Add-to-cart rate' },
      { value: '+15.52%', label: 'Conversion rate' },
      { value: '+3.61%', label: 'Orders' },
    ],
    thumbnail: { dark: '/uv-header-dark.png', light: '/uv-header-light.png' },
    // Adjust the card image freely — any CSS works here. Optional dark/light overrides.
    thumbnailStyle: { height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' },
    thumbnailOverlay: null,
    headerImage: {
      dark: '/uv-header-dark.png',
      light: '/uv-header-light.png',
      subtitle: "A contextual recommender that surfaces the right SPF for today's weather.",
      keywords: ['Contextual Personalisation', 'UV → SPF mapping', 'A/B Validated'],
    },
    meta: [
      {
        label: 'Project Overview',
        value: "A UV-index-driven recommendation widget for product page and cart drawer that ==reads the local UV index== and ==recommends the right SPF== for the day.",
      },
      { label: 'Category', value: 'Beauty & Personal Care, E-commerce, Contextual Personalisation' },
      { label: 'Date', value: 'April 2026 → May 2026' },
      { label: 'My Role', value: 'Conceptualisation, Research, Design, UI/UX, Vibe-coded Implementation, A/B Testing' },
      { label: 'Platform', value: 'Mobile Web (Shopify)' },
      { label: 'Read Time', value: '6–7 mins' },
    ],
    headlineMetrics: [
      { value: '16.31%', label: 'Add-to-cart rate' },
      { value: '15.52%', label: 'Conversion rate' },
      { value: '3.61%', label: 'Orders uplift in sunscreen category' },
      { value: '0.38%', label: 'Overall AOV uplift' },
    ],
    heroVisual: null,
    sections: [
      {
        id: 'bet',
        label: 'Problem Statement',
        heading: 'Where the funnel leaked',
        body: [
          'Summer 2026, Pilgrim was pouring marketing spend into sunscreen — our biggest seasonal category. But the funnel was leaking.',
          "90% of paid and organic traffic landed directly on product pages, not on collection or home. And on those pages, users hit the same wall: which SPF do I actually need? Sunscreen is one of the only beauty categories where the right product depends on something outside the user — the weather. Yet our PDPs treated it like a perfume: static merchandising, static benefits, static copy.",
          "We were paying premium CAC to send users to a decision they couldn't make.",
        ],
        callout: "If we could remove that decision — surface the right answer instead of asking the user to figure it out — we'd convert more of the traffic we were already paying for.",
      },
      {
        id: 'insight',
        label: 'Hypothesis',
        heading: 'Picking the right signal',
        body: [
          'Most beauty merchandising is built around who you are — skin type, concern, age, preference.',
          "Sunscreen is different. The right SPF depends on what's happening outside, today, where you are.",
          'So I picked the signal closest to the actual product decision: UV index. Not humidity (too noisy), not season (too coarse), not "summer mode" (too gimmicky). UV index maps directly to SPF recommendation — the number tells you the answer.',
          "If we showed it at the right moment, the product choice wouldn't need persuasion. It would just be obviously correct.",
        ],
      },
      {
        id: 'surfaces',
        label: 'Strategy',
        heading: 'Two pages, two reasons',
        body: ['I placed the system on PDP and Cart deliberately. Different problems, different roles.'],
        principles: [
          { label: 'PDP — BUILD CONVICTION', quote: "Where 90% of marketing traffic lands. The job isn't to sell — it's to make the buyer feel like they're making the right call. Show the UV, show the SPF, let the product choice settle into place.", image: '/uv-pdp.png' },
          { label: 'CART — CATCH THE MISSED INTENT', quote: 'Many users come in for hair care, serums, or makeup — and leave without sunscreen, even on a Very High UV day. The cart drawer is the last contextual moment to surface that nudge. If a sunscreen is already in the cart, the widget hides.', image: '/uv-cart.png' },
        ],
      },
      {
        id: 'pdp-exploration',
        label: 'Design Exploration',
        heading: 'Three drafts of the product page',
        body: ['Three directions explored, one shipped.'],
        variants: [
          {
            label: 'Direction A',
            name: 'Inline copy below product title',
            body: '"Perfect for today\'s weather in Mumbai." A lightweight microcopy treatment — warm, but no room for the UV scale. Without the visual scale, the recommendation reads as marketing copy, not contextual proof.',
            image: '/uv-image3.png',
          },
          {
            label: 'Direction B',
            name: 'Full skin regime based on UV + conditions',
            body: 'A bigger system: UV + humidity + air quality → personalized regime suggestions. Worth building eventually, but too many variables and too much new infrastructure for a v1.',
            image: '/uv-image4.png',
          },
          {
            label: 'Direction C',
            name: 'UV index module below price, above CTA',
            shipped: true,
            body: 'Prime real estate. The user is one tap from a decision. The UV scale, the city, the advisory copy, and the SPF recommendation all sit in the highest-conversion zone — directly answering the question the user was already half-asking.',
            image: '/uv-image6.png',
          },
        ],
      },
      {
        id: 'cart-exploration',
        label: 'Design Exploration',
        heading: 'Two directions for the cart nudge',
        body: ['Two directions explored, one shipped.'],
        variants: [
          {
            label: 'Direction A',
            name: 'Heavy hero card with full product imagery and benefits',
            body: 'Visually dominant. Took over the cart drawer. Read as an interruption rather than a help.',
            image: '/uv-image7.png',
          },
          {
            label: 'Direction B',
            name: 'Contextual card with UV scale + product + dynamic price',
            shipped: true,
            body: 'UV scale establishes the why, the product gives the what, and the dynamic price makes the offer feel earned.',
            image: '/uv-image2.png',
          },
        ],
      },
      {
        id: 'final-designs',
        label: 'Solution',
        heading: 'Final Designs',
        body: ['The shipped widget and cart nudge — each decision grounded in a UX principle.'],
        finalDesigns: [
          {
            image: '/uv-image1.png',
            label: 'PDP Widget',
            annotations: [
              {
                side: 'left',
                law: "Hick's Law",
                body: 'One UV reading → one SPF answer. Decision removed entirely.',
              },
              {
                side: 'left',
                law: 'Law of Proximity',
                body: 'UV level, city, and copy grouped as one contextual unit.',
              },
              {
                side: 'right',
                law: 'Serial Position Effect',
                body: 'Below price, above CTA — peak-intent real estate.',
              },
              {
                side: 'right',
                law: 'Von Restorff Effect',
                body: 'Colour-coded bar makes the risk level scannable before a word is read.',
              },
            ],
          },
          {
            image: '/uv-image2.png',
            label: 'Cart Nudge',
            annotations: [
              {
                side: 'left',
                law: 'Goal-Gradient Effect',
                body: 'Dynamic copy shows exactly what unlocks the next offer tier.',
              },
              {
                side: 'left',
                law: 'Selective Attention',
                body: 'Hides if sunscreen is already in cart — never noise.',
              },
              {
                side: 'right',
                law: 'Law of Proximity',
                body: 'UV, product, and price in one card — the why, what, and how-much at a glance.',
              },
              {
                side: 'right',
                law: 'Doherty Threshold',
                body: '"Very High UV → SPF 50+" answers the why in under 400ms.',
              },
            ],
          },
        ],
      },
      {
        id: 'system',
        label: 'System Design',
        heading: 'The logic the user never sees',
        body: ["A few decisions that don't show up in the screenshots but shaped how the widget behaves in the wild."],
        subsections: [
          {
            diagram: 'gate',
          },
          {
            subheading: 'Dynamic pricing — the offer adapts to the cart',
            paragraph: 'Pilgrim runs multiple offer types simultaneously: Flat 25, Flat 40, B1G1, B2G2, B3G3. The widget had to detect which offer was active for the recommended product, recompute the displayed price in real time, and switch labels between "Buy 3 @ ₹999," a strikethrough discounted price, or "FREE" depending on cart composition — and flip back if the user removed qualifying items.',
            diagram: 'offer-state',
          },
        ],
      },
      {
        id: 'instrumentation',
        label: 'Instrumentation',
        heading: 'Wired for proof before launch',
        body: ["The analytics layer was designed alongside the UI — I wanted to ship knowing exactly what I'd measure."],
        subsections: [
          {
            subheading: 'A/B framework',
            paragraph: '20% rollout, then 50% rollout. Three eligible cities (Delhi, Mumbai, Pune — our top sales geographies). Test vs. control assigned client-side, persisted across sessions.',
          },
          {
            subheading: 'Event taxonomy',
            eventTable: [
              { event: 'UV Nudge Assigned',          use: 'Records test/control split and rollout % — fires once per session on assignment' },
              { event: 'UV Index Widget Viewed',      use: 'Widget impression on PDP — confirms the user saw the UV recommendation' },
              { event: 'UV Cart Widget Viewed',       use: 'Nudge impression in cart drawer — logged each time the cart is opened with widget visible' },
              { event: 'UV Cart Widget Add to Cart',  use: 'Product added via the widget — primary attribution event for order tracking' },
            ],
            note: 'Each event tagged with variant, product_id, uv_level, city.',
          },
        ],
        afterBody: 'Every cart line item added through the widget also carried a hidden property — _uv_widget = true — so attribution from impression to delivered order stayed clean post-hoc, without funnel math.',
      },
      {
        id: 'results',
        label: 'Outcomes',
        heading: 'What sixteen days proved',
        subheading: 'Funnel (16-day test)',
        funnel: {
          headers: ['Stage', 'Rate'],
          rows: [
            ['Test visitors', '128,598', 'blur'],
            ['Widget impressions', '53.44%'],
            ['Add to cart', '16.31%'],
            ['Orders', '15.52%'],
            ['Orders uplift (sunscreen category)', '+3.61%'],
            ['Overall AOV uplift', '+0.38%'],
          ],
        },
        learningHeading: 'What the data revealed',
        learning: 'BOGO offers drove 68% of widget-attributed orders in the 7-day offer sample, despite the contextual UV framing being identical across all offer types. Context creates attention; the offer closes the sale. Both have to work — the widget without an offer is interesting, the offer without context is invisible.',
        chartVisual: true,
      },
      {
        id: 'next',
        label: 'Reflection',
        heading: 'Where this signal could go next',
        bullets: [
          'Beyond UV — the system is signal-agnostic. Humidity for hair care. Pollen index for skin sensitivity. Temperature for hydration. The widget is a contextual relevance engine that happens to be wearing a UV skin today.',
          'Pre-purchase regime — Direction B from the PDP exploration. Now that the contextual frame is validated, the full regime suggestion has the foundation to land.',
          'Skin-type personalization — Layer the user\'s skin profile (already collected during the Pilgrim quiz) on top of the UV signal. From "SPF 50+ for Mumbai" to "SPF 50+ that won\'t break out oily skin in Mumbai."',
        ],
        reflection: {
          heading: "What I'd do differently",
          body: "I'd build the offer-detection logic before the UV logic, not alongside it. The data showed offers were doing more work than I expected — a smaller v0 that tested just the offer card would have isolated those variables and made the v1 design sharper.",
        },
      },
    ],
  },
  */
  {
    slug: 'pre-purchase-experience',
    layout: 'uv-v2',
    accentTheme: 'steel',
    title: 'Enhanced Pre-Purchase Experience',
    tagline: '',
    readTime: '7m',
    readTimeGradient: 'linear-gradient(180deg, #02b8cc, #015c66)',
    category: 'UI/UX · A/B Test',
    company: 'Pilgrim',
    year: '2025',
    accent: '#02b8cc',
    cardLabel: 'Pre-Purchase Experience',
    cardHeadline: 'Turning hesitation into confident decisions',
    cardDescription: 'A PDP redesign that helps shoppers compare shades and make better decisions.',
    cardMetrics: [
      { value: '+4.2%', label: 'Conversion rate' },
      { value: '+2.4%', label: 'Add-to-cart rate' },
      { value: '+4.8%', label: 'Click-through rate' },
    ],
    thumbnail: { dark: '/makeup-header-dark.png', light: '/makeup-header-light.png' },
    // Adjust the card image freely — any CSS works here. Optional dark/light overrides.
    thumbnailStyle: { height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' },
    thumbnailOverlay: null,
    headerImage: {
      dark: '/makeup-header-dark.png',
      light: '/makeup-header-light.png',
      subtitle: null,
      keywords: ['PDP Redesign', 'Shade Decision Clarity', 'A/B Validated'],
    },
    sections: [
      {
        id: 'overview',
        label: 'TL; DR',
        heading: [{ t: 'Project ' }, { t: 'Overview', gold: true }],
        headingCase: 'title',
        groups: [
          {
            blocks: [
              { type: 'lead', text: "A PDP redesign for Pilgrim's shade-dependent beauty range that ==reorganises the page around the decision==, brings shade, price, and proof to the moment of choice, and turns high product-page intent into confident purchases — where a no-return policy makes pre-purchase clarity everything." },
              {
                type: 'cards',
                columns: 3,
                variant: 'text',
                items: [
                  { label: 'Category', value: 'Beauty & Personal Care, Consumer Products, E-commerce' },
                  { label: 'Date', value: 'October 2025 → November 2025' },
                  { label: 'Platform', value: 'Mobile Web' },
                ],
              },
              {
                type: 'cards',
                columns: 2,
                variant: 'text',
                items: [
                  { label: 'My Role', value: 'Conceptualisation · Research · UX/UI · Concept Testing · UAT' },
                  { label: 'Team', value: 'Designer (me) & Developer' },
                ],
              },
            ],
          },
          {
            blocks: [
              { type: 'lead', text: 'What we achieved' },
              {
                type: 'cards',
                columns: 4,
                variant: 'metric',
                items: [
                  { label: 'Conversion rate', value: '+4.2%' },
                  { label: 'Add-to-cart rate', value: '+2.4%' },
                  { label: 'Average order value', value: '+1.4%' },
                  { label: 'Click-through rate', value: '+4.8%' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'context',
        label: 'Problem Statement',
        heading: [{ t: 'WHERE COMMITMENT ' }, { t: 'BROKE DOWN', gold: true }],
        intro: [
          { type: 'paragraphs', items: [
            "Pilgrim was seeing strong, growing traffic in beauty — but engagement at the product page level wasn't converting into purchases at the same rate, especially for ==shade-dependent items==.",
            "And with no return policy, the stakes for getting it right before checkout were high. Clarity before purchase wasn't a nice-to-have — it was the whole game. Users weren't failing to find products. They were failing to commit to them.",
          ] },
        ],
        blocks: [
          { type: 'callout', style: 'bar', body: 'The challenge was not discovery. It was commitment.' },
        ],
      },
      {
        id: 'funnel',
        label: 'Audit',
        heading: [{ t: 'WHAT THE FUNNEL WAS ' }, { t: 'TELLING US', gold: true }],
        intro: [
          { type: 'paragraphs', items: ['We first audited the conversion funnel — Homepage → Collection → PDP → Cart → Checkout — to find where hesitation was happening. Users were engaging deeply, not disengaging. The friction was structural.'] },
        ],
        bodyGap: 24,
        blocks: [
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'subheading', text: 'KEY OBSERVATIONS' },
              { type: 'list', items: [
                'High PDP traffic — genuine product interest was there.',
                'Significant drop-offs at the PDP stage, concentrated on shade-based products.',
                '~20% of users abandoned near the shade-selection section, which sat well below the fold.',
                'Multiple dead clicks on shade swatches — unclear affordance and poor interaction feedback.',
                'High interaction time on the "Try On Shade" section despite its deep placement in the hierarchy.',
                'High review scroll depth — a strong, unmet need for validation.',
                "Offer interactions didn't always convert — a sign of pricing-clarity gaps.",
              ] },
            ],
          },
          { type: 'callout', style: 'bar', body: "Users weren't disengaged — they were actively evaluating. The friction came from missing information and how decision-critical data was structured and surfaced." },
        ],
      },
      {
        id: 'current-state',
        label: 'Benchmarking',
        heading: [{ t: 'UNDERSTANDING THE ' }, { t: 'CURRENT STATE', gold: true }],
        intro: [
          { type: 'paragraphs', items: [
            'A heuristic evaluation applied established usability principles to surface where the existing PDP fell short.',
            'A competitive benchmark against category leaders made the gap concrete.',
          ] },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'cards', columns: 2, variant: 'text', items: [
            { label: 'INDUSTRY LEADERS', value: 'Shade swatches sit right beside the product imagery, pricing breaks down clearly (MRP vs. discount), and user-generated content lives next to the decision point.' },
            { label: 'PILGRIM TODAY', value: 'Shade selection is separated from the imagery, the visual hierarchy is fragmented, and social proof barely shows up — the right pieces, in the wrong order.' },
          ] },
          { type: 'paragraphs', items: ['The opportunity was structural reorganisation, not a cosmetic refresh.'] },
        ],
      },
      {
        id: 'research',
        label: 'Research',
        heading: [{ t: 'WHAT TWENTY CONVERSATIONS ' }, { t: 'REVEALED', gold: true }],
        intro: [
          { type: 'paragraphs', items: ["In collaboration with Pilgrim's research team, we ran a behavioural study with ~20 users — mapping the real pre-purchase journey and the decision levers behind conversion."] },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'cards', columns: 2, variant: 'text', items: [
            { label: 'NON-LINEAR JOURNEY', value: 'Buying happens in loops — inspiration, evaluation, validation, comparison — not a straight line to checkout. The loops get longer as comfort with online beauty grows.' },
            { label: 'HIGH SUPPORT NEEDS', value: 'Users seek external validation — YouTube and Instagram tutorials, reviews, demos — to build the confidence to buy.' },
            { label: 'BRAND LOYALTY', value: "People lean on brands they've used before. Without a physical trial, experimenting online feels personally risky." },
            { label: 'PRICE & PROOF', value: 'Offers and discounts pull purchases online over retail. Ratings and reviews act as the confirmation layer for authenticity and performance.' },
          ] },
          { type: 'image', src: '/makeup-journey.png', alt: 'The pre-purchase journey loop', caption: 'The pre-purchase journey is a loop, not a line — users move between inspiration, evaluation, validation, and comparison before committing.' },
        ],
      },
      {
        id: 'synthesis',
        label: 'Synthesis',
        heading: [{ t: 'THE PDP WAS THE ' }, { t: 'HIGHEST-FRICTION POINT', gold: true }],
        intro: [
          { type: 'paragraphs', items: ['Putting it together — funnel metrics, the usability audit, competitive research, and the qualitative findings — all four lenses pointed to the same place. The product page was where the journey broke.'] },
        ],
        blocks: [
          { type: 'callout', style: 'bar', body: 'Users evaluating shade-based beauty products hit cognitive friction from poor information hierarchy, unclear shade interaction, and fragmented pricing and validation cues — and dropped off before Add-to-Cart.' },
        ],
      },
      {
        id: 'hypothesis',
        label: 'Hypothesis',
        heading: [{ t: 'FOUR BETS ' }, { t: 'TO TEST', gold: true }],
        intro: [
          { type: 'paragraphs', items: ['Before redesigning, we defined measurable hypotheses:'] },
        ],
        bodyGap: 24,
        blocks: [
          { type: 'infoBox', icon: '📈', items: [
            'H1: Clearer shade visualisation will increase conversion.',
            'H2: Pricing transparency will improve Add-to-Cart rate.',
            'H3: Early surfacing of social proof will reduce hesitation.',
            'H4: Contextual grouping of information will reduce cognitive load.',
          ] },
          { type: 'callout', style: 'bar', body: 'Constraints: a 15-day A/B-testing window, and no AR try-on infrastructure available.' },
        ],
      },
      {
        id: 'process',
        label: 'Process',
        heading: [{ t: 'FIVE STEPS TO THE ' }, { t: 'REDESIGN', gold: true }],
        intro: [
          { type: 'paragraphs', items: ['From understanding the existing structure to a tested final design.'] },
        ],
        bodyGap: 40,
        blocks: [
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'group', gap: 4, blocks: [
                { type: 'subheading', text: '1 — Map the existing structure' },
                { type: 'paragraphs', items: ['The original PDP presented information in the following order:'] },
              ] },
              { type: 'pills', items: ['Product imagery', 'Product name & price', 'Shade selection section', 'Offer section', 'Key product benefits', 'Try shade filter section', 'Product details', 'Brand code', 'FAQs', 'Ratings & Reviews', 'Continue Browsing section'] },
              { type: 'phones', items: ['/makeup-original-1.png', '/makeup-original-2.png', '/makeup-original-3.png'] },
            ],
          },
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'group', gap: 4, blocks: [
                { type: 'subheading', text: '2 — Identifying the information gap' },
                { type: 'paragraphs', items: ['A gap analysis was conducted between:'] },
              ] },
              { type: 'list', items: ['What users needed to decide', 'What the page emphasized'] },
              { type: 'infoBox', icon: '🧩', items: [
                'Shade selection was visually disconnected from imagery, increasing cognitive effort.',
                'Social proof appeared too late in the hierarchy.',
                'Pricing clarity required mental calculation due to fragmented presentation.',
                'Secondary information appeared before decision-critical information.',
              ] },
            ],
          },
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'group', gap: 4, blocks: [
                { type: 'subheading', text: '3 — Prioritise the information' },
                { type: 'paragraphs', items: ['Card-sorting with multiple users, plus offline experience analysis, set the section hierarchy and defined what each component had to carry. It sorted into three tiers:'] },
              ] },
              { type: 'tiers', items: [
                { icon: '🔥', label: 'Priority', items: ['Product Imagery', 'Product name & price', 'Shade selection', 'Color based grouping', 'Offers & best price', 'Offers & reviews', 'Shade-level context', 'Key product benefits', 'Add to Cart', 'Delivery details'] },
                { icon: '📌', label: 'Must have', items: ['Virtual try-on', 'UGC videos', 'Social proof', 'Product details', 'Ingredients', 'How to use', 'Brand information'] },
                { icon: '⭐', label: 'Good to have', items: ['Brand code', 'Complementary products', 'Shop the look', 'Build-your-own combo', 'Shop by product type & category'] },
              ] },
            ],
          },
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'subheading', text: '4 — Prototypes & user feedback' },
              { type: 'infoBox', icon: '🧠', items: ['To ensure a truly impactful and intuitive experience, we focused on validating design assumptions and extracting actionable insights through rigorous testing.'] },
              { type: 'list', items: [
                'The **focus was on user inputs** during the initial shaping of ideas.',
                '**Validate** the design assumptions and get **actionable insights** for a better user experience.',
                '**Think-aloud feedback sessions** in which users verbalised their thoughts while using the product — to understand their thoughts and feelings throughout.',
              ] },
              { type: 'button', icon: '📝', label: 'View detailed user feedbacks', href: 'https://opaque-zucchini-598.notion.site/User-Feedback-31396fcc75468080aea3e4ca36f37bed?pvs=143' },
            ],
          },
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'group', gap: 4, blocks: [
                { type: 'subheading', text: '5 — Superfinal_final final design' },
                { type: 'paragraphs', items: ['The redesigned PDP, reorganised around the decision — each choice annotated against the user need it answers.'] },
              ] },
              { type: 'annotatedDesign',
                image: '/makeup-pdp.png',
                alt: 'Redesigned Pilgrim makeup product detail page',
                annotations: [
                  { side: 'right', top: '2%',    law: 'VISUAL PROXIMITY',              body: '“Everything I need to decide is right here.”' },
                  { side: 'left',  top: '8.5%',  law: 'RISK REDUCTION',                body: '“I want to see how it looks before committing.”' },
                  { side: 'right', top: '9.5%',  law: 'SOCIAL PROOF',                  body: '“If so many people bought this, it must be worth it.”' },
                  { side: 'left',  top: '12.5%', law: 'CONTEXTUAL DECISION MAKING',    body: 'Shade selection placed next to the product image. Faster comparison, less scrolling.' },
                  { side: 'left',  top: '17.5%', law: 'PRICING TRANSPARENCY',          body: '“Just tell me what I’ll actually pay.”' },
                  { side: 'right', top: '22%',   law: 'PERCEIVED VALUE & USER CONTROL',body: 'For Pilgrim’s frequent BUY2 offers, while giving users control.' },
                  { side: 'right', top: '25.7%', law: 'EXPECTATION SETTING',           body: 'PIN code check and timelines. No surprises post add-to-cart.' },
                  { side: 'left',  top: '27.5%', law: 'CREDIBILITY & TRUST SIGNALS',   body: '“I want to know what goes on my skin is safe.”' },
                  { side: 'right', top: '30%',   law: 'VISUAL VALIDATION',             body: '“I need to understand texture, finish, and payoff.”' },
                  { side: 'left',  top: '37%',   law: 'SCANNABILITY',                  body: 'Makes key product benefits easy to scan and remember.' },
                  { side: 'right', top: '46%',   law: 'PROGRESSIVE DISCLOSURE',        body: 'Structured information, for when users want to go deeper.' },
                  { side: 'left',  top: '59%',   law: 'CROSS-SELL',                    body: 'Enables users to visualise outcomes and discover complementary products.' },
                  { side: 'right', top: '63.5%', law: 'COGNITIVE LOAD REDUCTION',      body: '“Tell me what people are mostly saying.”' },
                  { side: 'left',  top: '83%',   law: 'SEAMLESS CONTINUITY',           body: 'Continue browsing without drop-offs.' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'results',
        label: 'Outcomes',
        heading: [{ t: 'WHAT FIFTEEN DAYS ' }, { t: 'PROVED', gold: true }],
        bodyGap: 24,
        blocks: [
          {
            type: 'group',
            gap: 8,
            blocks: [
              { type: 'subheading', text: 'A/B TEST (15 DAYS)' },
              { type: 'paragraphs', items: ['Days 1–5: gradual rollout at 90% control / 10% variant. Days 6–15: a balanced 50/50 split.'] },
            ],
          },
          {
            type: 'group',
            gap: 16,
            blocks: [
              { type: 'subheading', text: 'MEASURED OUTCOMES' },
              { type: 'cards', columns: 4, variant: 'metric', items: [
                { label: 'Conversion rate', value: '+4.2%' },
                { label: 'Add-to-cart rate', value: '+2.4%' },
                { label: 'Average order value', value: '+1.4%' },
                { label: 'Click-through rate', value: '+4.8%' },
              ] },
            ],
          },
        ],
      },
      {
        id: 'next',
        label: 'Reflection',
        heading: [{ t: 'WHERE THIS ' }, { t: 'GOES NEXT', gold: true }],
        bodyGap: 24,
        blocks: [
          { type: 'list', items: [
            'Roll the validated PDP patterns across the entire beauty category as one coherent, category-specific experience.',
            'Layer in richer outcome visualisation as try-on infrastructure becomes available — the research showed users want to see the result before committing.',
          ] },
        ],
      },
    ],
  },
]
