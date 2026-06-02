export const profile = {
  name: 'Kratika Tyagi',
  title: 'Product Designer | NIFT Hyderabad',
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
    slug: 'uv-index',
    title: 'A UV-Driven Sunscreen Recommender',
    tagline: '',
    category: 'UI/UX · Vibe-coded Implementation',
    company: 'Pilgrim',
    year: '2026',
    thumbnail: { dark: '/uv-header-dark.png', light: '/uv-header-light.png' },
    // Adjust the card image freely — any CSS works here. Optional dark/light overrides.
    thumbnailStyle: { height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' },
    thumbnailOverlay: null,
    headerImage: { dark: '/uv-header-dark.png', light: '/uv-header-light.png' },
    meta: [
      {
        label: 'Project Overview',
        value: "A UV-index-driven recommendation system for Pilgrim's product page and cart drawer. The widget detects the user's city, surfaces the live UV reading, recommends the right SPF for the day, and adapts price and copy to whatever offer is active in cart. Designed end-to-end, shipped to production, and validated through a 16-day A/B test across Delhi, Mumbai, and Pune.",
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
  {
    slug: 'pre-purchase-experience',
    title: 'Enhanced Pre-Purchase Experience',
    tagline: '',
    category: 'UI/UX · A/B Test',
    company: 'Pilgrim',
    year: '2025',
    thumbnail: { dark: '/makeup-header-dark.png', light: '/makeup-header-light.png' },
    // Adjust the card image freely — any CSS works here. Optional dark/light overrides.
    thumbnailStyle: { height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' },
    thumbnailOverlay: null,
    headerImage: { dark: '/makeup-header-dark.png', light: '/makeup-header-light.png' },
    meta: [
      {
        label: 'Project Overview',
        value: "A PDP redesign for Pilgrim's beauty category, focused on how customers explore and compare shades and visualise the outcome before they buy. The goal: turn strong product-page interest into confident purchases for shade-dependent items, where a no-return policy makes pre-purchase clarity everything. Researched, designed end-to-end, and validated through a 15-day A/B test.",
      },
      { label: 'Category', value: 'Beauty & Personal Care, Consumer Products, E-commerce' },
      { label: 'Date', value: 'October 2025 → November 2025' },
      { label: 'My Role', value: 'Conceptualisation, Research, UX/UI, Concept Testing, UAT' },
      { label: 'Platform', value: 'Mobile Web' },
      { label: 'Read Time', value: '6–7 mins' },
    ],
    headlineMetrics: [
      { value: '4.2%', label: 'Conversion rate' },
      { value: '2.4%', label: 'Add-to-cart rate' },
      { value: '1.4%', label: 'Average order value' },
      { value: '4.8%', label: 'Click-through rate' },
    ],
    heroVisual: null,
    sections: [
      {
        id: 'context',
        label: 'Problem Statement',
        heading: 'Where commitment broke down',
        body: [
          'Pilgrim was seeing strong, growing traffic in beauty — but engagement at the product page level wasn\'t converting into purchases at the same rate, especially for shade-dependent items.',
          "And with no return policy, the stakes for getting it right before checkout were high. Clarity before purchase wasn't a nice-to-have — it was the whole game. Users weren't failing to find products. They were failing to commit to them.",
        ],
        callout: 'The challenge was not discovery. It was commitment.',
      },
      {
        id: 'funnel',
        label: 'Audit',
        heading: 'What the funnel was telling us',
        body: ['We first audited the conversion funnel — Homepage → Collection → PDP → Cart → Checkout — to find where hesitation was happening. Users were engaging deeply, not disengaging. The friction was structural.'],
        bulletsHeading: 'Key Observations:',
        bullets: [
          'High PDP traffic — genuine product interest was there.',
          'Significant drop-offs at the PDP stage, concentrated on shade-based products.',
          '~20% of users abandoned near the shade-selection section, which sat well below the fold.',
          'Multiple dead clicks on shade swatches — unclear affordance and poor interaction feedback.',
          'High interaction time on the "Try On Shade" section despite its deep placement in the hierarchy.',
          'High review scroll depth — a strong, unmet need for validation.',
          'Offer interactions didn\'t always convert — a sign of pricing-clarity gaps.',
        ],
        callout: 'Users weren\'t disengaged — they were actively evaluating. The friction came from missing information and how decision-critical data was structured and surfaced.',
      },
      {
        id: 'current-state',
        label: 'Benchmarking',
        heading: 'Understanding the current state',
        body: [
          'A heuristic evaluation applied established usability principles to surface where the existing PDP fell short.',
          'A competitive benchmark against category leaders made the gap concrete.',
        ],
        principles: [
          { label: 'INDUSTRY LEADERS', quote: 'Shade swatches sit right beside the product imagery, pricing breaks down clearly (MRP vs. discount), and user-generated content lives next to the decision point.' },
          { label: 'PILGRIM TODAY', quote: 'Shade selection is separated from the imagery, the visual hierarchy is fragmented, and social proof barely shows up — the right pieces, in the wrong order.' },
        ],
        afterBody: 'The opportunity was structural reorganisation, not a cosmetic refresh.',
      },
      {
        id: 'research',
        label: 'Research',
        heading: 'What twenty conversations revealed',
        body: ['In collaboration with Pilgrim\'s research team, we ran a behavioural study with ~20 users — mapping the real pre-purchase journey and the decision levers behind conversion.'],
        principles: [
          { label: 'NON-LINEAR JOURNEY', quote: 'Buying happens in loops — inspiration, evaluation, validation, comparison — not a straight line to checkout. The loops get longer as comfort with online beauty grows.' },
          { label: 'HIGH SUPPORT NEEDS', quote: 'Users seek external validation — YouTube and Instagram tutorials, reviews, demos — to build the confidence to buy.' },
          { label: 'BRAND LOYALTY', quote: 'People lean on brands they\'ve used before. Without a physical trial, experimenting online feels personally risky.' },
          { label: 'PRICE & PROOF', quote: 'Offers and discounts pull purchases online over retail. Ratings and reviews act as the confirmation layer for authenticity and performance.' },
        ],
        images: ['/makeup-journey.png'],
        imageCaption: 'The pre-purchase journey is a loop, not a line — users move between inspiration, evaluation, validation, and comparison before committing.',
      },
      {
        id: 'synthesis',
        label: 'Synthesis',
        heading: 'The PDP was the highest-friction point',
        body: [
          'Putting it together — funnel metrics, the usability audit, competitive research, and the qualitative findings — all four lenses pointed to the same place. The product page was where the journey broke.',
        ],
        callout: 'Users evaluating shade-based beauty products hit cognitive friction from poor information hierarchy, unclear shade interaction, and fragmented pricing and validation cues — and dropped off before Add-to-Cart.',
      },
      {
        id: 'hypothesis',
        label: 'Hypothesis',
        heading: 'Four bets to test',
        body: ['Before redesigning, we defined measurable hypotheses:'],
        hypotheses: {
          icon: '📈',
          items: [
            'H1: Clearer shade visualisation will increase conversion.',
            'H2: Pricing transparency will improve Add-to-Cart rate.',
            'H3: Early surfacing of social proof will reduce hesitation.',
            'H4: Contextual grouping of information will reduce cognitive load.',
          ],
        },
        callout: 'Constraints: a 15-day A/B-testing window, and no AR try-on infrastructure available.',
      },
      {
        id: 'process',
        label: 'Process',
        heading: 'Five steps to the redesign',
        body: ['From understanding the existing structure to a tested final design.'],
        subsections: [
          {
            subheading: '1 — Map the existing structure',
            paragraph: 'The original PDP presented information in the following order:',
            pills: ['Product imagery', 'Product name & price', 'Shade selection section', 'Offer section', 'Key product benefits', 'Try shade filter section', 'Product details', 'Brand code', 'FAQs', 'Ratings & Reviews', 'Continue Browsing section'],
            phones: ['/makeup-original-1.png', '/makeup-original-2.png', '/makeup-original-3.png'],
          },
          {
            subheading: '2 — Identifying the information gap',
            paragraph: 'A gap analysis was conducted between:',
            bullets: ['What users needed to decide', 'What the page emphasized'],
            box: {
              icon: '🧩',
              items: [
                'Shade selection was visually disconnected from imagery, increasing cognitive effort.',
                'Social proof appeared too late in the hierarchy.',
                'Pricing clarity required mental calculation due to fragmented presentation.',
                'Secondary information appeared before decision-critical information.',
              ],
            },
          },
          {
            subheading: '3 — Prioritise the information',
            paragraph: 'Card-sorting with multiple users, plus offline experience analysis, set the section hierarchy and defined what each component had to carry. It sorted into three tiers:',
            tiers: [
              {
                icon: '🔥',
                label: 'Priority',
                items: ['Product Imagery', 'Product name & price', 'Shade selection', 'Color based grouping', 'Offers & best price', 'Offers & reviews', 'Shade-level context', 'Key product benefits', 'Add to Cart', 'Delivery details'],
              },
              {
                icon: '📌',
                label: 'Must have',
                items: ['Virtual try-on', 'UGC videos', 'Social proof', 'Product details', 'Ingredients', 'How to use', 'Brand information'],
              },
              {
                icon: '⭐',
                label: 'Good to have',
                items: ['Brand code', 'Complementary products', 'Shop the look', 'Build-your-own combo', 'Shop by product type & category'],
              },
            ],
          },
          {
            subheading: '4 — Prototypes & user feedback',
            introBox: {
              icon: '🧠',
              items: ['To ensure a truly impactful and intuitive experience, we focused on validating design assumptions and extracting actionable insights through rigorous testing.'],
            },
            bullets: [
              'The **focus was on user inputs** during the initial shaping of ideas.',
              '**Validate** the design assumptions and get **actionable insights** for a better user experience.',
              '**Think-aloud feedback sessions** in which users verbalised their thoughts while using the product — to understand their thoughts and feelings throughout.',
            ],
            button: { icon: '📝', label: 'View detailed user feedbacks', href: 'https://opaque-zucchini-598.notion.site/User-Feedback-31396fcc75468080aea3e4ca36f37bed?pvs=143' },
          },
          {
            subheading: '5 — Superfinal_final final design',
            paragraph: 'The redesigned PDP, reorganised around the decision — each choice annotated against the user need it answers.',
            annotatedDesign: {
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
          },
        ],
      },
      {
        id: 'results',
        label: 'Outcomes',
        heading: 'What fifteen days proved',
        subheading: 'A/B test (15 days)',
        body: ['Days 1–5: gradual rollout at 90% control / 10% variant. Days 6–15: a balanced 50/50 split.'],
        impactHeading: 'Measured outcomes',
        impact: [
          { value: '4.2%', label: 'Conversion rate' },
          { value: '2.4%', label: 'Add-to-cart rate' },
          { value: '1.4%', label: 'Average order value' },
          { value: '4.8%', label: 'Click-through rate' },
        ],
      },
      {
        id: 'next',
        label: 'Reflection',
        heading: 'Where this goes next',
        bullets: [
          'Roll the validated PDP patterns across the entire beauty category as one coherent, category-specific experience.',
          'Layer in richer outcome visualisation as try-on infrastructure becomes available — the research showed users want to see the result before committing.',
        ],
      },
    ],
  },
]
