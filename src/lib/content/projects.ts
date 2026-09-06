export interface ProcessStep {
  title: string;
  body: string;
  caption?: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ResearchFinding {
  value: string;
  label: string;
  source?: string;
}

export interface PaletteColor {
  name: string;
  hex: string;
}

export interface DiagramNode {
  label: string;
  detail?: string;
}

export interface GalleryItem {
  caption: string;
  mockupId: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  timeframe: string;
  status?: "paused" | "shipped" | "unshipped" | "live";
  featured: boolean;
  cover: string;
  coverType?: "image" | "typographic";
  coverMeta?: string;
  coverColor?: string;
  gallery?: { src: string; caption: string }[];
  summary: string;
  context: string;
  problem: string;
  approach: ProcessStep[];
  solution: string;
  reflection: string;
  outcomes: Stat[];
  stack: string[];
  confidentialityNote?: string;
  nextSlug: string;

  // Editorial depth sections \u2014 all optional, all grounded in verified
  // real facts, real design tokens, or real (if partial) commit history.
  research?: {
    title: string;
    intro: string;
    findings: ResearchFinding[];
  };
  designSystem?: {
    title: string;
    intro: string;
    colors: PaletteColor[];
    notes: string[];
  };
  architecture?: {
    title: string;
    intro: string;
    source: DiagramNode;
    targets: DiagramNode[];
  };
  commitGraph?: {
    title: string;
    intro: string;
    data: number[];
    totalLabel: string;
  };
  beforeAfter?: {
    title: string;
    before: { title: string; points: string[] };
    after: { title: string; points: string[] };
  };
  mockupGallery?: {
    title: string;
    intro: string;
    items: GalleryItem[];
  };
  quote?: {
    quote: string;
    author: string;
  };
  credits?: {
    title: string;
    members: { name: string; role: string }[];
  };
}

export const projects: Project[] = [
  {
    slug: "tigg-cash-sessions",
    title: "Cash Sessions",
    subtitle: "From a 69-frame Figma page to production in 23 days \u2014 one person, both ends",
    category: "Product design \u00b7 Frontend engineering",
    role: "UI/UX Designer & Frontend Engineer, sole owner design-to-production",
    timeframe: "23 days, June 2026 \u00b7 Tigg POS",
    status: "shipped",
    featured: true,
    cover: "Cash Sessions",
    coverType: "typographic",
    coverMeta: "Tigg POS \u00b7 2026",
    coverColor: "#143E9F",
    summary:
      "Tigg POS had no concept of a cashier shift: no record of who opened a till, with how much, or whether it balanced at close. I designed the entire session-accountability system in Figma, then built it myself \u2014 the same person on both ends of the handoff.",
    context:
      "Tigg POS is the point-of-sale product inside the Tigg suite, used daily by shops and restaurants across Nepal. Cash moved in and out of drawers all day \u2014 sales, refunds, manual cash-outs for supplier payments, petty cash \u2014 with nothing tying any of it to a person, a time, or a reason. Finance and operations had a standing complaint: unexplained shortages, and no way to trace them back to a shift, a cashier, or a moment.",
    problem:
      "A retail till isn't one continuous stream of money, it's a series of shifts, and every shift needs an opening balance, an audit trail of what moved during it, and a closing reconciliation. None of that existed. Two shops with the exact same sales could have wildly different trust in their own numbers, and there was no way for an owner to look at a till and ask \"who had this open, and does it balance?\" The other constraint was just as real: whatever I designed had to survive a lunch-rush queue. A cashier mid-transaction cannot be asked to fill out a form.",
    beforeAfter: {
      title: "What actually changed",
      before: {
        title: "Before",
        points: [
          "No record of who opened a till, or with how much",
          "Manual, paper-based end-of-day cash counts, if done at all",
          "Shortage complaints with no way to trace them to a shift",
          "One flat mode \u2014 every shop forced into the same (nonexistent) process",
        ],
      },
      after: {
        title: "After",
        points: [
          "Every session tied to a cashier, an opening balance, and a timestamp",
          "Denomination-level closing counts built into the flow itself",
          "A filterable Short / Excess / Balanced status across every location",
          "Two enforcement modes, so a kirana and a multi-till restaurant aren't forced into the same friction",
        ],
      },
    },
    approach: [
      {
        title: "Design the entire lifecycle before writing a line of code",
        body:
          "I mapped every state a cash session can be in \u2014 opening, active, cash-in, cash-out, closing, reconciled, disputed \u2014 across a 69-frame Figma page before touching implementation. That meant designing screens most features never bother with: what does an empty session list look like on day one, what happens if a cashier tries to close a till they didn't open, what does a permission-denied state look like versus a genuinely broken one. The page was formally marked ready for development and handed off \u2014 to myself.",
        caption: "The 69-frame Session Management page in Figma, covering open/close, cash-in/out, denominations, and every edge state",
      },
      {
        title: "Two modes for two kinds of shop",
        body:
          "Not every business wants the same level of enforcement. Strict mode locks a session to the cashier who opened it, every movement requires a note, and closing forces a reconciliation before the till can be used again. Easy mode keeps the same record-keeping \u2014 opening balance, movements, closing balance \u2014 without the ownership lock, for smaller shops that want the paper trail without the friction. Same underlying lifecycle, different guardrails on top of it.",
        caption: "Strict-mode ownership enforcement versus easy-mode's lighter-touch version of the same flow",
      },
      {
        title: "Build at full burn: 53 commits in 23 days",
        body:
          "Once the design was locked, I built the whole thing myself against my own Figma spec: the session lifecycle and state machine, a cash-drawer audit model recording every movement with a timestamp, author, and note, session-list filters for Short / Excess / Balanced reconciliation status, denomination-level cash counting for physical tills, and printed session reports for end-of-day handover. June became my highest-output month of the year specifically because of this feature.",
        caption: "Session list with Short / Excess / Balanced status pills, filterable at a glance",
      },
      {
        title: "22 of the 53 commits were hardening, not features",
        body:
          "The feature-complete build was maybe half the actual work. The rest was closing a QA and early-use punch list item by item: timezone bugs that made a session look open past midnight when it wasn't, null handling on a till that had never recorded a single movement, validation gaps that let a session close with an unexplained gap, and re-render performance on the session list once shops had weeks of history in it. This is the unglamorous 40% of the work that a demo never shows and a customer never thanks you for \u2014 until the one time it breaks and it doesn't.",
        caption: "The QA punch list, closed ticket by ticket across web, app, and backend",
      },
    ],
    designSystem: {
      title: "Working inside an existing system, not inventing a new one",
      intro:
        "Cash Sessions had to look and feel like the rest of Tigg POS on day one, not like a bolted-on feature. That meant designing entirely within the product's existing visual language rather than introducing anything new \u2014 the same primary blue, the same status-color logic already used elsewhere in the POS, extended consistently to a new domain.",
      colors: [
        { name: "POS Primary", hex: "#143E9F" },
        { name: "Balanced / Success", hex: "#1DB954" },
        { name: "Short / Danger", hex: "#FF3350" },
        { name: "Excess / Warning", hex: "#FFA726" },
      ],
      notes: [
        "Status pills (Balanced / Short / Excess) reuse the product's existing semantic color logic \u2014 green means the till matches, red means it's short, amber means it's over.",
        "Typography stayed on the existing Inter scale used across Tigg POS; no new type sizes were introduced for this feature.",
      ],
    },
    architecture: {
      title: "The session lifecycle",
      intro:
        "Every cash session moves through the same core lifecycle regardless of which mode a shop runs in \u2014 what differs between strict and easy mode is which of these states enforce ownership and which don't.",
      source: { label: "Cash Session", detail: "opened by a cashier, with a starting balance" },
      targets: [
        { label: "Cash In" },
        { label: "Cash Out" },
        { label: "Denomination Count" },
        { label: "Audit Trail" },
        { label: "Closing Reconciliation" },
        { label: "Session Report" },
      ],
    },
    commitGraph: {
      title: "53 commits, 23 real days",
      intro:
        "Real commit activity pulled directly from the feature's git history, June 2\u201324, 2026. The two dense clusters, June 9\u201313 and June 15\u201318, are the core build; the quieter days on either side are design lock-in and QA hardening.",
      data: [1, 0, 0, 0, 0, 0, 2, 7, 4, 10, 3, 1, 0, 8, 8, 2, 3, 0, 0, 0, 0, 2, 2],
      totalLabel: "53 commits \u00b7 June 2\u201324, 2026 \u00b7 tigg-pos-ui",
    },
    mockupGallery: {
      title: "Key screens",
      intro:
        "Illustrative recreations built with Tigg POS's real primary blue and gray scale, reconstructing the actual flow without reproducing any real customer or business data.",
      items: [
        { caption: "Session list \u2014 Short / Excess / Balanced at a glance", mockupId: "cash-sessions-list" },
        { caption: "Closing \u2014 denomination-level cash count", mockupId: "cash-sessions-denomination" },
        { caption: "Audit trail \u2014 every movement, timestamped and authored", mockupId: "cash-sessions-audit" },
      ],
    },
    solution:
      "Every shift on Tigg POS now has a real audit trail: who opened the till and with how much, every manual cash movement with a note and an author attached, and a reconciliation status a manager can filter for across every location at once. Because the same person who designed it also built it, the shipped interface matches the Figma source almost exactly \u2014 including the states nobody remembers to design until they've been burned by skipping them once.",
    reflection:
      "If I redid this, I'd build the denomination-counting UI before the audit-history view, not after \u2014 it turned out to be the screen cashiers actually touch every single close, and it went through three redesigns late in the build because I hadn't prioritized real cashier feedback on it early enough. The lesson: design completeness (covering every state) and design priority (which screen gets the most iteration) are two different disciplines, and I conflated them here.",
    quote: {
      quote: "Design completeness and design priority are two different disciplines. I conflated them here, and I won't again.",
      author: "Bibhushan, in the project retro",
    },
    outcomes: [
      { value: "53", label: "commits, design to production" },
      { value: "23", label: "days, first commit to shipped" },
      { value: "69", label: "Figma frames before a line of code" },
    ],
    stack: ["Figma", "Next.js", "TypeScript", "Chakra UI", "TanStack Query", "TanStack Table", "React Hook Form", "CASL"],
    confidentialityNote:
      "Described at the level of product decisions, UX flow, and my own process. No internal architecture, API contracts, or real customer/financial data is reproduced here.",
    nextSlug: "tigg-multicurrency",
  },
  {
    slug: "tigg-multicurrency",
    title: "Multi-Currency",
    subtitle: "One shared component, one hook, every transactional form in a cloud accounting suite",
    category: "Frontend engineering \u00b7 Systems design",
    role: "Frontend Engineer",
    timeframe: "3.5 weeks, June\u2013July 2025 \u00b7 Tigg Web",
    status: "shipped",
    featured: true,
    cover: "Multi-Currency",
    coverType: "typographic",
    coverMeta: "Tigg Web \u00b7 2025",
    coverColor: "#0E2C71",
    summary:
      "Tigg Web is the core cloud-accounting product in the suite. Businesses transacting in foreign currency couldn't rely on it end to end. Over 3.5 weeks I rolled out consistent multi-currency handling across nearly every transactional surface in the product \u2014 57 commits, 97 files.",
    context:
      "Tigg Web handles invoicing, bookkeeping, VAT compliance, and banking for Nepali SMEs, most of whom transact only in NPR. But import/export businesses, and anyone paying a foreign supplier or invoicing a foreign client, need the product to handle a second currency correctly everywhere: bank accounts, payments, journal entries, reconciliation. Before this, currency handling had grown ad hoc, form by form, over years of the product's life.",
    problem:
      "In accounting software, currency isn't a display preference, it's correctness. A stale exchange rate or a wrongly-signed cross-currency amount produces books that don't balance, and a business's books not balancing isn't a bug report, it's their actual finances being wrong. The dangerous version of this project would have been patching each of a dozen-plus forms individually \u2014 bank statements, journal vouchers, cash transfers, customer and supplier payments, quick receipts, invoices, credit notes, sales orders, quotations, reconciliation, opening balances \u2014 each ending up with subtly different currency behavior that someone would have to maintain forever, and that a user would experience as inconsistency.",
    beforeAfter: {
      title: "What actually changed",
      before: {
        title: "Before",
        points: [
          "Currency logic duplicated, slightly differently, in a dozen-plus forms",
          "Exchange-rate fields shown even to NPR-only businesses that never needed them",
          "Stale exchange rates could persist after switching accounts",
          "Sign-ordering on cross-currency amounts was inconsistent form to form",
        ],
      },
      after: {
        title: "After",
        points: [
          "One shared component and one hook behind every form's currency behavior",
          "NPR-only businesses see no currency UI at all \u2014 zero added complexity for the majority",
          "Exchange rate clears automatically the moment an account changes",
          "Consistent currency-code display and sign ordering everywhere, including new forms built later",
        ],
      },
    },
    approach: [
      {
        title: "Build the abstraction before touching a single form",
        body:
          "Before rolling out anything, I built one shared component (form-currency.jsx) and one reusable hook (useAccountCurrencyLock) that every form would consume. The currency locks to whichever account is selected; an exchange-rate field appears only for genuinely cross-currency postings and stays empty otherwise; NPR-only businesses see no change at all. Every form's currency behavior comes from this one implementation, not a copy of it.",
        caption: "form-currency.jsx and useAccountCurrencyLock \u2014 the shared implementation every form now consumes",
      },
      {
        title: "Sweep the product, form by form",
        body:
          "With the abstraction working, the rollout became mechanical but extensive: bank statement components, detail forms across the product, cash transfer, quick receipt, customer and supplier payments, new invoices, credit notes, sales orders, reconciliation, and opening balances. 97 files changed. Each form went from its own bespoke currency logic to consuming the shared behavior, with small per-form adjustments only where a form's specific rules genuinely differed (locking currency to bank currency in opening balances, forcing NPR in specific reconciliation contexts).",
        caption: "The sweep across bank, sales, purchase, and journal forms \u2014 97 files, one shared behavior",
      },
      {
        title: "Harden with real review \u2014 32 of 57 commits are the tail, and the tail is the feature",
        body:
          "More than half the commits in this project are correctness fixes, many driven directly by named peer review, not self-discovered. Clearing a stale exchange rate the moment an account changes. Forcing NPR where regulation requires it regardless of what a form would otherwise allow. Getting currency-code display and sign ordering right for negative cross-currency amounts. Auto-selecting the right currency in Cash Transfer and Quick Receipt so a user isn't asked to pick what's already implied. None of this shows up in a feature list, and all of it is the difference between \"multi-currency support\" as a checkbox and multi-currency support you can actually close a month's books with.",
        caption: "The hardening tail: currency-lock fixes, sign-ordering corrections, and reviewer-driven edge cases, commit by commit",
      },
    ],
    architecture: {
      title: "One hook, twelve-plus forms",
      intro:
        "The entire rollout hinges on a single shared implementation. Every form below consumes the same hook and component rather than maintaining its own currency logic \u2014 this is what makes the behavior consistent and the codebase maintainable going forward.",
      source: { label: "useAccountCurrencyLock + form-currency.jsx", detail: "one hook, one component" },
      targets: [
        { label: "Bank Statement" },
        { label: "Journal Voucher" },
        { label: "Cash Transfer" },
        { label: "Customer Payment" },
        { label: "Supplier Payment" },
        { label: "Quick Receipt" },
        { label: "New Invoice" },
        { label: "Credit Note" },
        { label: "Sales Order" },
        { label: "Quotation" },
        { label: "Reconciliation" },
        { label: "Opening Balance" },
      ],
    },
    commitGraph: {
      title: "The opening rollout burst",
      intro:
        "Real commit activity from the first two weeks of the rollout, pulled directly from git history. This is the initial sweep across the product; the hardening tail described above continued for several more weeks beyond this window.",
      data: [2, 0, 0, 7, 3, 5, 0, 5, 0, 0, 8, 6, 0, 1],
      totalLabel: "Initial rollout window \u00b7 June 27 \u2013 July 10, 2025 \u00b7 tigg-v2-ui",
    },
    mockupGallery: {
      title: "Key states",
      intro:
        "Illustrative recreations of the shared component's real behavior across account types, built with Tigg Web's actual accent tones.",
      items: [
        { caption: "Cross-currency account \u2014 exchange rate field appears", mockupId: "currency-locked" },
        { caption: "NPR-only account \u2014 no currency UI shown at all", mockupId: "currency-disabled" },
        { caption: "The sweep \u2014 twelve-plus forms consuming one shared hook", mockupId: "currency-sweep" },
      ],
    },
    solution:
      "Multi-currency became a product-wide capability instead of a per-form patch. Import/export businesses can post, pay, and reconcile across currencies with the same consistent behavior on every surface, and any new form built after this inherits correct currency handling automatically from the shared component instead of reinventing it.",
    reflection:
      "The abstraction-first approach was the right call, but I'd instrument it earlier next time: a lot of the 32 hardening commits were bugs a peer reviewer caught by reading carefully, not bugs a test caught automatically. A handful of targeted tests around sign-ordering and stale-rate clearing, written alongside the hook itself rather than after, would have caught several of these before review rather than during it.",
    quote: {
      quote: "Ninety-seven files changed, one place where the logic actually lives. That ratio is the whole point.",
      author: "Bibhushan, on the rollout",
    },
    outcomes: [
      { value: "57", label: "commits in 3.5 weeks" },
      { value: "97", label: "files changed across the product" },
      { value: "1", label: "shared implementation behind every form" },
    ],
    stack: ["React", "JavaScript", "REST APIs"],
    confidentialityNote:
      "Described at the level of engineering approach and process. Internal API contracts and proprietary business logic are not reproduced here.",
    nextSlug: "myra",
  },
  {
    slug: "myra",
    title: "Myra \u2014 \u092e\u093e\u092f\u0930\u093e",
    subtitle: "A reproductive-health companion that walks with her, in Nepali, built from the culture it serves",
    category: "Founder \u00b7 Product design \u00b7 Frontend engineering",
    role: "Co-founder \u00b7 leading product, design, and the build",
    timeframe: "2026 \u2014 substantially built, currently paused",
    status: "paused",
    featured: true,
    cover: "/work/myra-overview.png",
    summary:
      "Myra walks with Nepali women through cycle, pregnancy, postpartum, and early motherhood \u2014 in Nepali, with Nepali doctors, free at the door. I co-founded it with a team of four, led product and design, and built the launch platform end to end. It won first prize at YuwaXcel 2026. The project is currently paused while we figure out the right direction.",
    context:
      "Nepal records 151 maternal deaths per 100,000 live births, more than double the SDG target. One in three new mothers screens positive for postpartum depression, and most are never screened at all. Only 39% of husbands attend a single antenatal visit. The period-tracking apps available in Nepal are translated Western products: they don't speak Nepali, don't know what Aama Surakshya is, and treat cycle, pregnancy, loss, and motherhood as separate products \u2014 for what is actually one woman living one continuous life.",
    problem:
      "We set out to build a better period tracker. Then we spent six months talking to women, mothers and daughters, OB-GYNs, and female community health volunteers across Kathmandu Valley and Chitwan. The realization that redirected the entire project: these were never separate problems needing separate apps. They were one woman, at different points in one life, unsupported at every single one of them.",
    research: {
      title: "What six months of field research actually found",
      intro:
        "Before a single screen was designed, the team spent six months talking to women, mothers, OB-GYNs, and female community health volunteers across Kathmandu Valley and Chitwan. These numbers are why the original period-tracker concept was killed.",
      findings: [
        { value: "151", label: "maternal deaths per 100,000 live births in Nepal", source: "national health data cited in research" },
        { value: "1 in 3", label: "new mothers screen positive for postpartum depression \u2014 most never screened at all" },
        { value: "39%", label: "of husbands attend even a single antenatal visit with their partner" },
        { value: "1 in 5", label: "known pregnancies end in loss \u2014 a reality most tracking apps design around, not for" },
      ],
    },
    approach: [
      {
        title: "Kill the period-tracker idea; design a companion instead",
        body:
          "We designed a companion that reshapes itself around her stage of life \u2014 cycle (\u0930\u091c\u0938\u094d\u0935\u0932\u093e), pregnancy (\u0917\u0930\u094d\u092d\u093e\u0935\u0938\u094d\u0925\u093e), postpartum (\u0938\u0941\u0924\u094d\u0915\u0947\u0930\u0940), early motherhood (\u092e\u093e\u0924\u0943\u0924\u094d\u0935) \u2014 rather than treating each as a separate app. It's loss-aware by design: one in five known pregnancies ends in loss, and Myra is built to hold that reality rather than silently pretend it away in its data model and its copy.",
        caption: "The four-stage model and loss-aware state flows, designed around real research rather than a generic wellness-app template",
      },
      {
        title: "Build a genuinely Nepali design language, not a localized one",
        body:
          "The brand comes from the culture it serves rather than being translated into it afterward: Fraunces paired with Noto Sans Devanagari, a warm ivory-and-terracotta palette instead of an imported clinical white-and-teal, mandala and prayer-flag motifs, and copy written in Nepali for Nepali bodies rather than translated English. Dark mode and WCAG-checked contrast throughout, with an easing curve tuned to feel calm rather than snappy \u2014 this is health software, not a productivity app.",
        caption: "Brand system: warm wine and blush tones instead of an imported clinical white-and-teal palette",
      },
      {
        title: "Design and build the platform myself",
        body:
          "I built the launch platform end to end: Next.js, Tailwind, Framer Motion, MDX-based publishing, and Supabase-backed early-access and contact flows, on top of a component library of roughly 19 primitives shared across the whole site. Around 30 routes shipped. Privacy is architecture here, not a policy page \u2014 on-device SQLCipher AES-256 encryption and a genuine anonymous mode were product decisions made early, not compliance work bolted on later.",
        caption: "The launch platform: ~30 routes, a shared component library, dark mode support",
      },
      {
        title: "Design for the relationships around her, not just her alone",
        body:
          "A Companion mode lets her invite her partner in \u2014 she controls exactly what he sees. It's support, deliberately designed to never become a leash. Validated postpartum-depression screening (EPDS) is built in, in Nepali. A Clinician Inbox connects her to NMC-registered Nepali OB-GYNs who respond within 48 hours for NPR 399, under half the cost of an in-person visit, and the app surfaces government Aama Surakshya cash entitlements by district so she knows what she's actually owed.",
        caption: "Companion mode's permissioned partner access, and the Clinician Inbox connecting to real NMC-registered OB-GYNs",
      },
    ],
    designSystem: {
      title: "A design language sampled from the real brand",
      intro:
        "Colors as actually shipped in Myra's brand and marketing material \u2014 sampled directly from the real asset, not approximated. Warm and editorial instead of the clinical white-and-teal most health apps default to.",
      colors: [
        { name: "Wine", hex: "#9C3A3E" },
        { name: "Blush", hex: "#FBEDE8" },
        { name: "Ink", hex: "#2A2321" },
        { name: "Paper", hex: "#FFFFFF" },
      ],
      notes: [
        "Fraunces for display headlines, Noto Sans Devanagari for Nepali body text \u2014 chosen so the Nepali script reads with the same warmth as the Latin type, not as an afterthought font swap.",
        "Mandala and prayer-flag motifs used sparingly as texture, not as decoration layered on top of an otherwise generic layout.",
      ],
    },
    quote: {
      quote: "These were never separate problems needing separate apps. They were one woman, at different points in one life, unsupported at every single one of them.",
      author: "Bibhushan, on the research pivot that redefined Myra",
    },
    credits: {
      title: "Founding team",
      members: [
        { name: "Bibhushan Saakha", role: "Co-founder \u00b7 Product & Design" },
        { name: "Co-founder", role: "Clinical & Research Partnerships" },
        { name: "Co-founder", role: "Growth & Operations" },
        { name: "Co-founder", role: "Backend & Data" },
      ],
    },
    solution:
      "A companion, not a tracker: distributed at the point of care \u2014 an OB-GYN hands over a Myra card at the first antenatal visit, a QR scan pre-fills her pregnancy, and from there the product follows her through cycle, pregnancy, postpartum, and motherhood in her own language, with her own doctors, and with her partner invited in on her terms.",
    reflection:
      "The single hardest and most correct decision was killing the original period-tracker concept after the research contradicted it \u2014 it cost us months of already-built work, and it was still the right call. If I were doing this again, I'd run the clinician-side research (what NMC-registered OB-GYNs actually need from an inbox workflow) in parallel with the user-side research from day one, rather than sequencing it after \u2014 it's the piece that's taken longest to get right, and pausing the project came partly from not yet having a clear enough answer there.",
    outcomes: [
      { value: "1st", label: "prize, YuwaXcel 2026" },
      { value: "4", label: "life stages, one companion" },
      { value: "~30", label: "routes shipped on the launch platform" },
    ],
    stack: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    nextSlug: "usear",
  },
  {
    slug: "usear",
    title: "useAR",
    subtitle: "An augmented-reality museum guide, born from a 48-hour hackathon and a real problem with museum signage",
    category: "Hackathon \u00b7 Product design \u00b7 AR/UX",
    role: "Designer & concept lead",
    timeframe: "KU Hackfest \u00b7 Open Innovation winner",
    status: "unshipped",
    featured: true,
    cover: "/work/usear-overview.png",
    summary:
      "Nepal's museums are full of genuinely significant artifacts described by a small printed placard, if there's a placard at all. useAR points a phone at an object and surfaces its story instantly, in the visitor's own language. It won Open Innovation at KU Hackfest. It hasn't shipped, but it's the concept I most want to return to.",
    context:
      "Walk through the National Museum of Nepal or the Panauti Museum and most of what you're looking at, a copper Mahadev head, a centuries-old Newari temple carving, is contextualized by a few lines of small print, usually only in Nepali or English, never both consistently, and never with the depth a curator could actually offer if space weren\u2019t so limited. Meanwhile every visitor is already carrying a phone with a camera.",
    problem:
      "Augmented reality interfaces have a specific failure mode: they're impressive as a stage demo and useless as a daily tool the moment information density or interaction model gets sloppy. The challenge wasn't \"can we overlay text on a camera view,\" it was designing an AR-first museum guide that a visitor would actually prefer over reading the placard, in the 48 hours we had to build it.",
    approach: [
      {
        title: "Point the camera, get the story instantly",
        body:
          "The core interaction: open the app, point the camera at an artifact, and a card resolves over it \u2014 title, a few lines of real context, and a \"read more\" for anyone who wants depth. For the Panauti Museum's Copper Mahadev Head, that meant surfacing that it's part of the Indreshwor Mahadev Temple complex, one of the most significant landmarks in Panauti, known for multi-roofed pagoda-style architecture and Newari craftsmanship, without making a visitor tap through a menu to get there.",
        caption: "Camera-first recognition surfacing the Copper Mahadev Head's context directly over the live view",
      },
      {
        title: "Multi-language from the start, not bolted on",
        body:
          "A meaningful share of visitors to Kathmandu Valley museums are international tourists. We built subtitle and audio-narration support across languages (Japanese subtitles were one of the ones we demoed) rather than treating localization as a stretch goal, since for a museum guide specifically, language coverage isn't a nice-to-have, it's the entire value proposition for half the audience.",
        caption: "Multi-language narration with live subtitles, demoed in Japanese alongside English and Nepali",
      },
      {
        title: "A conventional app shell around the AR layer",
        body:
          "Rather than forcing every interaction through the camera, we built a normal browsable app around it: a museum picker (Narayanhiti Royal Palace, Patan Durbar Square, National Museum of Nepal, and others), a search, and a \"how to use our app\" onboarding flow. The AR camera view is the payoff, not the only way in \u2014 someone planning a visit at home needs the conventional version just as much as someone standing in front of an artifact needs the camera version.",
        caption: "Museum selection and onboarding screens \u2014 the conventional shell that makes the AR layer optional rather than mandatory",
      },
    ],
    architecture: {
      title: "The interaction, step by step",
      intro:
        "The entire product reduces to one honest interaction loop, kept deliberately simple under hackathon time pressure so it could actually be finished and demoed in 48 hours.",
      source: { label: "Point camera at artifact", detail: "core interaction" },
      targets: [
        { label: "Recognition resolves" },
        { label: "Context card renders" },
        { label: "Language auto-applies" },
        { label: "Read more, on demand" },
        { label: "Audio narration, optional" },
      ],
    },
    designSystem: {
      title: "Visual language",
      intro:
        "A deliberately high-contrast black-and-white shell with a warm ember-to-gold gradient reserved for the AR moment itself \u2014 so the brand reads as serious and museum-appropriate everywhere except the one screen designed to feel alive.",
      colors: [
        { name: "Ink", hex: "#000000" },
        { name: "Paper", hex: "#FFFFFF" },
        { name: "Ember", hex: "#E8543D" },
        { name: "Gold", hex: "#F4C430" },
      ],
      notes: [
        "The ember-to-gold gradient is used exactly once, on the AR wordmark, so it stays a signature rather than becoming visual noise across the app.",
      ],
    },
    quote: {
      quote: "It's impressive as a stage demo and useless as a daily tool the moment the interaction model gets sloppy. We designed for the second one.",
      author: "Bibhushan, on the AR design brief",
    },
    solution:
      "A working AR prototype that turned static museum placards into an instant, multi-language, camera-first experience, built and demoed within a 48-hour hackathon window, good enough to win Open Innovation at KU Hackfest.",
    reflection:
      "I wrote about the build on Medium shortly after, partly to process what worked in 48 hours and what was hackathon-shortcut fragile. The honest gap: recognition accuracy was demo-good, not production-good, and that's the actual hard problem standing between this and something real \u2014 not the AR interaction design, which I still think was right, but the underlying object recognition needing to work reliably in inconsistent museum lighting with a phone camera, not a hackathon-curated test set. I still want to solve that properly.",
    outcomes: [
      { value: "1st", label: "place, Open Innovation, KU Hackfest" },
      { value: "48h", label: "from concept to working demo" },
      { value: "3+", label: "languages supported in the prototype" },
    ],
    stack: ["Figma", "AR prototyping", "Mobile app design"],
    nextSlug: "arestro",
  },
  {
    slug: "arestro",
    title: "ARestro",
    subtitle: "A complete restaurant ordering experience, designed end to end as a mobile UI system",
    category: "Product design \u00b7 Mobile UI",
    role: "Designer",
    timeframe: "Independent design project",
    status: "unshipped",
    featured: true,
    cover: "/work/arestro-overview.png",
    summary:
      "A full restaurant discovery and ordering app: browse, view a menu, build a cart, reserve a table, track an order to completion. Designed as a complete, consistent system rather than a handful of unconnected screens.",
    context:
      "Most restaurant-ordering apps get built screen by screen, and it shows: a beautiful home screen with an inconsistent checkout, or a polished menu with a reservation flow that feels like a different app. ARestro was an exercise in the opposite discipline: design the entire journey, from opening the app hungry to a table being confirmed, as one coherent system.",
    problem:
      "The interesting design problem in a food-ordering app isn't any single screen, it's the seams between them: does a cart persist sensibly if someone leaves to check a menu item's photo, does a reservation flow feel like part of the same trust system as a payment flow, does an order-tracking screen actually reduce anxiety or just display a status word. Most of the apps in this space fail at the seams, not the screens.",
    approach: [
      {
        title: "One visual system, applied everywhere",
        body:
          "A single green-and-white brand system, one card pattern for a restaurant listing, one card pattern for a menu item, one confirmation-state pattern reused for both \"order placed\" and \"table reserved\" \u2014 so the app teaches a visitor its own rules once and then never breaks them.",
        caption: "Consistent card and confirmation patterns reused across ordering and reservation flows",
      },
      {
        title: "Design the whole order lifecycle, not just checkout",
        body:
          "Browse restaurants nearby, open a restaurant's page with photos and ratings, build an order with per-item customization, review order details before confirming, and track it through to \"Order Completed\" with a clear, low-anxiety status progression \u2014 the same attention given to a table-reservation confirmation flow running in parallel.",
        caption: "Order details, cart review, and the order-tracking flow through to completion",
      },
    ],
    designSystem: {
      title: "Visual language",
      intro:
        "One brand green carried consistently across every card, button, and confirmation state, sampled directly from the real UI kit \u2014 the discipline of the project was refusing to introduce a second accent color anywhere.",
      colors: [
        { name: "Brand Green", hex: "#1E9E52" },
        { name: "Paper", hex: "#FFFFFF" },
        { name: "Surface Gray", hex: "#F4F4F4" },
        { name: "Ink", hex: "#1E1E1E" },
      ],
      notes: [
        "Every primary action, from \"Add to Cart\" to \"Reserve Table\" to \"Place My Order,\" uses the identical green and identical corner treatment \u2014 no competing accent color anywhere in the system.",
      ],
    },
    architecture: {
      title: "The order lifecycle",
      intro:
        "One connected flow designed as a system, not a sequence of separately-designed screens \u2014 the reservation path runs in parallel using the same confirmation pattern as the ordering path.",
      source: { label: "Browse nearby", detail: "restaurant discovery" },
      targets: [
        { label: "Restaurant page" },
        { label: "Menu & cart" },
        { label: "Order details" },
        { label: "Table reservation" },
        { label: "Order tracking" },
        { label: "Completed" },
      ],
    },
    solution:
      "A cohesive mobile UI system covering discovery, ordering, and reservation as one connected product rather than three disconnected features, built to demonstrate that the hard part of this category is consistency across the seams, not any individual screen.",
    reflection:
      "Given more time, the next version needed real usability testing on the cart-editing flow specifically \u2014 editing quantities and customizations after adding an item to cart is the one interaction I designed three different ways before settling on the current one, and I still don't have real user data telling me which was actually best.",
    outcomes: [
      { value: "6+", label: "connected flows designed as one system" },
      { value: "1", label: "consistent visual language, zero orphan screens" },
    ],
    stack: ["Figma", "Mobile UI design"],
    nextSlug: "dime",
  },
  {
    slug: "dime",
    title: "Dime",
    subtitle: "Drop in a bank CSV, see where your money actually goes. Nothing leaves your machine.",
    category: "Personal project \u00b7 Frontend engineering",
    role: "Designer & Engineer, solo",
    timeframe: "Nights and weekends, ongoing",
    status: "shipped",
    featured: true,
    cover: "Dime",
    coverType: "typographic",
    coverMeta: "Personal \u00b7 Ongoing",
    coverColor: "#1D2530",
    summary:
      "A local-first personal finance tool built for myself: drop in a bank-statement CSV and it turns raw transactions into spending patterns, category breakdowns, and forecasts, entirely in the browser. No account, no server, no subscription.",
    context:
      "Budgeting apps want bank credentials, want your data on their servers, and want a subscription, to answer a question as simple as \"where did this month go?\" A bank CSV export already contains that answer. It just needs parsing, categorizing, and honest charts, none of which requires anyone else's server.",
    problem:
      "Bank exports are messy in practice: inconsistent column orders, different encodings, dates formatted three different ways depending on which bank or card issued the statement. Most personal-finance tools solve this by demanding a canonical format and making the user conform to it. I wanted the opposite: meet the file where it actually is.",
    approach: [
      {
        title: "Flexible import instead of a rigid format",
        body:
          "Rather than requiring a specific CSV shape, Dime does column mapping on import \u2014 you tell it once which column is date, which is amount, which is description, and it remembers the shape for that source going forward.",
        caption: "CSV import with flexible column mapping, built for real inconsistent bank exports",
      },
      {
        title: "Charts that answer a question, not just display data",
        body:
          "Rather than a wall of generic charts, each section answers something specific: Overview for a fast \"am I okay?\" read, Spending and Categories for where money actually goes, Time Patterns for when you spend by day and hour, Trends for month-over-month shifts, Insights for anomalies and recurring patterns worth noticing, and a Forecast view for where things are headed if nothing changes. A Fun Stats section exists purely because personal finance doesn't have to be entirely self-serious.",
        caption: "Overview, Spending, Categories, Time Patterns, Trends, Insights, and Forecast, each built with Recharts",
      },
      {
        title: "Local-first as an actual architectural constraint, not a slogan",
        body:
          "Every CSV is parsed with PapaParse directly in the browser and every chart is computed client-side with Recharts. Nothing is ever uploaded anywhere, which isn't a privacy policy sentence, it's the reason the app has no backend, no auth system, and no server cost at all.",
        caption: "The full analytics pipeline running client-side: PapaParse for import, Recharts for every view",
      },
    ],
    architecture: {
      title: "The whole pipeline runs in the tab",
      intro:
        "No backend, no upload endpoint, no auth system \u2014 the entire flow from raw file to rendered chart happens client-side, which is the actual reason the privacy claim is true rather than just stated.",
      source: { label: "statement.csv", detail: "dropped into the browser" },
      targets: [
        { label: "PapaParse (parsing)" },
        { label: "Column mapping" },
        { label: "Local computation" },
        { label: "Recharts (rendering)" },
      ],
    },
    mockupGallery: {
      title: "Key screens",
      intro: "Illustrative recreations of Dime's real views, built with its actual dark dashboard palette.",
      items: [
        { caption: "Monthly spend, at a glance", mockupId: "dime-dashboard" },
        { caption: "Categories, this month", mockupId: "dime-categories" },
        { caption: "Import \u2014 parsed locally, nothing uploaded", mockupId: "dime-import" },
      ],
    },
    solution:
      "A fast, quiet dashboard over your own financial data. No accounts, no cloud, no subscription, open it, drop a CSV, and see the month clearly.",
    reflection:
      "The column-mapping-on-import approach was the right call for messy real-world exports, but the categorization step is still mostly manual after import, and that's the next real problem to solve: even a lightweight rules-based auto-categorizer (matching merchant strings to categories over time) would remove most of the remaining friction in actually using this monthly rather than only when I remember to.",
    outcomes: [
      { value: "100%", label: "local \u2014 data never leaves the browser" },
      { value: "0", label: "accounts, servers, or subscriptions" },
      { value: "9", label: "distinct analytical views over one CSV" },
    ],
    stack: ["React", "TypeScript", "Vite", "Recharts", "PapaParse", "Tailwind CSS"],
    nextSlug: "tigg-cash-sessions",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export interface MoreWork {
  title: string;
  description: string;
  tag: string;
  link?: string;
}

export const moreWork: MoreWork[] = [
  {
    title: "Mero Kotha",
    description:
      "A room-rental platform for students finding housing in Kathmandu \u2014 my capstone project for Leapfrog's Student Partnership Program. I designed the entire UI: property management, room availability, booking requests, and the tenant-facing search and reservation flow. A group project; unshipped.",
    tag: "UI Design \u00b7 Group capstone",
  },
  {
    title: "Digital Health in Nepal: Past, Current, and Future Scenarios",
    description:
      "Co-authored research paper examining the evolution of digital health systems in Nepal \u2014 IHIMS, DHIS, telemedicine, and the Ministry of Health's policy roadmap \u2014 with Dipen Khatri, Shreela Sapkota, and Samikshya Upadhyay.",
    tag: "Research \u00b7 IEEE format",
  },
  {
    title: "Disco Fever \u2014 Roma",
    description:
      "A responsive event-venue website for a private-party space in Rome: customizable party packages, sticky navigation, and micro-animations throughout.",
    tag: "Web design \u00b7 Next.js, Tailwind",
    link: "https://disco-fever.vercel.app",
  },
  {
    title: "Federated Learning",
    description:
      "A course presentation on federated learning for Data Communication and Networking, with Khatri, Karki, Sitaula, and Upadhyay.",
    tag: "Coursework \u00b7 KU",
  },
];
