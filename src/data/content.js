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
