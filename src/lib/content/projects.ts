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

export interface AlternativeOption {
  option: string;
  verdict: "rejected" | "chosen";
  reasoning: string;
}

export interface EdgeCaseItem {
  case: string;
  handling: string;
}

export interface PhaseItem {
  range: string;
  title: string;
  detail: string;
}

export interface FAQItem {
  q: string;
  a: string;
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
  // real facts, real design tokens, real git history, or real research.
  research?: {
    title: string;
    intro: string;
    findings: ResearchFinding[];
  };
  constraints?: {
    title: string;
    intro: string;
    items: string[];
  };
  alternatives?: {
    title: string;
    intro: string;
    options: AlternativeOption[];
  };
  compareSlider?: {
    title: string;
    intro: string;
    beforeLabel: string;
    afterLabel: string;
    beforeMockupId: string;
    afterMockupId: string;
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
  edgeCases?: {
    title: string;
    intro: string;
    cases: EdgeCaseItem[];
  };
  phaseTimeline?: {
    title: string;
    intro: string;
    phases: PhaseItem[];
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
  faq?: {
    title: string;
    items: FAQItem[];
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
      "Tigg POS is the point-of-sale product inside the Tigg suite, used daily by shops and restaurants across Nepal. Cash moved in and out of drawers all day \u2014 sales, refunds, manual cash-outs for supplier payments, petty cash \u2014 with nothing tying any of it to a person, a time, or a reason. Finance and operations had a standing complaint: unexplained shortages, and no way to trace them back to a shift, a cashier, or a moment. The product had transaction history \u2014 every sale and refund was logged \u2014 but a transaction log isn't the same thing as a shift record. Nobody could answer \"who was responsible for this till between 9am and 2pm,\" because the product had never modeled a shift as a first-class concept. It modeled sales. It didn't model custody.",
    problem:
      "A retail till isn't one continuous stream of money, it's a series of shifts, and every shift needs an opening balance, an audit trail of what moved during it, and a closing reconciliation. None of that existed. Two shops with the exact same sales could have wildly different trust in their own numbers, and there was no way for an owner to look at a till and ask \"who had this open, and does it balance?\" The other constraint was just as real: whatever I designed had to survive a lunch-rush queue. A cashier mid-transaction cannot be asked to fill out a form. And the product had already shipped, was already live in real shops \u2014 this wasn't a greenfield feature going into an empty product, it was a retrofit onto something people were actively using every day, which meant every new required step risked breaking an existing workflow someone depended on.",
    constraints: {
      title: "What the design actually had to survive",
      intro:
        "Before any screen got drawn, five hard constraints shaped every decision that followed. None of them were negotiable, and several only became obvious once real cashiers and real shops were considered instead of an abstract till.",
      items: [
        "A cashier mid-transaction cannot be interrupted by a new required step. Any accountability mechanism had to live at the shift boundary \u2014 opening and closing \u2014 never inside an active sale.",
        "Two philosophies of enforcement had to coexist without forking the codebase: a strict multi-till restaurant that locks a session to whoever opened it, and a small kirana where one shared login runs the whole day.",
        "Every place that demanded a reason (a manual cash-out, an unexplained gap at close) had to fit inside a modal already open for another reason, not send someone to a separate form screen.",
        "This was a retrofit onto a live, already-shipped product. Existing tills with zero session history had to render sensibly \u2014 empty states, not broken assumptions about data that had never existed.",
        "Timestamps had to survive real-world clock and timezone conditions. Shops don't run on a controlled lab clock, and a session that reads as \"still open\" past midnight when it isn't destroys trust in the entire feature instantly.",
      ],
    },
    alternatives: {
      title: "What I considered and ruled out",
      intro:
        "Three other shapes for this feature were real options before I settled on the one that shipped. Writing them out is more honest than pretending the final design was the only one on the table.",
      options: [
        {
          option: "Strict enforcement everywhere, no easy mode",
          verdict: "rejected",
          reasoning:
            "Simpler to build and reason about, but it would have broken every small kirana that runs on one shared till login across a whole shift. Forcing ownership locking onto a business that doesn't have distinct cashiers isn't a stricter version of the same feature, it's a feature those shops literally cannot use.",
        },
        {
          option: "A side ledger of cash movements, no formal session boundary",
          verdict: "rejected",
          reasoning:
            "An append-only log of cash in/out is much less work than a full lifecycle, but without an explicit open and close boundary there's no way to produce a single reconciliation number for a shift. That number \u2014 does this shift balance, yes or no \u2014 was the actual thing ops had been asking for. A ledger without boundaries answers a different, less useful question.",
        },
        {
          option: "Ship open/close only first, add denomination counting and reports later",
          verdict: "rejected",
          reasoning:
            "Tempting, since it's a faster first release. But in practice, edge states that don't ship in v1 tend to never ship \u2014 once a feature is live and \"working,\" the incentive to go back and design the empty states, the permission-denied states, and the disputed states mostly disappears. I'd been burned by that before, so I designed the complete lifecycle upfront instead.",
        },
        {
          option: "Design the full lifecycle and both modes before writing any code",
          verdict: "chosen",
          reasoning:
            "More upfront design time, but it meant the 69-frame Figma page already contained the states that get skipped \u2014 empty session list, permission denied, disputed, non-regular flow opening balance \u2014 before a single line of implementation started. The build then became executing a spec rather than discovering the spec mid-build.",
        },
      ],
    },
    compareSlider: {
      title: "What actually changed, side by side",
      intro:
        "Drag the divider. The left side is genuinely what a Tigg POS till looked like before this shipped \u2014 a plain transaction feed with no shift concept attached to it at all.",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeMockupId: "before-no-session",
      afterMockupId: "cash-sessions-list",
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
          "Not every business wants the same level of enforcement. Strict mode locks a session to the cashier who opened it, every movement requires a note, and closing forces a reconciliation before the till can be used again. Easy mode keeps the same record-keeping \u2014 opening balance, movements, closing balance \u2014 without the ownership lock, for smaller shops that want the paper trail without the friction. Same underlying lifecycle, different guardrails on top of it. Both modes are one feature under the hood: a shared `useIsStrictSessionMode` check gates the ownership logic, rather than two separate code paths that would drift apart over time.",
        caption: "Strict-mode ownership enforcement versus easy-mode's lighter-touch version of the same flow",
      },
      {
        title: "Model the state machine, not just the screens",
        body:
          "Before any UI, I wrote down the actual state transitions a session can make: no-session \u2192 opening \u2192 active \u2192 (cash-in / cash-out, any number of times) \u2192 closing \u2192 reconciled, with a disputed branch off closing if the counted total doesn't match the expected total. Every screen in the 69-frame page maps to exactly one of these states or one transition between them. This is what made the two-mode split tractable \u2014 strict and easy mode don't need different state machines, they need different guard conditions on the same transitions.",
        caption: "The session state machine: the actual diagram every subsequent screen was drawn against",
      },
      {
        title: "Build at full burn: 53 commits in 23 days",
        body:
          "Once the design was locked, I built the whole thing myself against my own Figma spec: the session lifecycle and state machine, a cash-drawer audit model recording every movement with a timestamp, author, and note, session-list filters for Short / Excess / Balanced reconciliation status, denomination-level cash counting for physical tills, and printed session reports for end-of-day handover. June became my highest-output month of the year specifically because of this feature.",
        caption: "Session list with Short / Excess / Balanced status pills, filterable at a glance",
      },
      {
        title: "Enforce accountability without turning it into paperwork",
        body:
          "Every manual cash movement needed a reason attached to it \u2014 that was non-negotiable for the audit trail to mean anything. But early internal testing showed cashiers skipping the note field whenever it was optional, which made the eventual audit trail full of blank entries. I made notes required specifically on manual cash-in and cash-out (not on ordinary sales, which already have their own record), and moved the requirement into the same modal a cashier was already using rather than a separate step.",
        caption: "The note requirement lives inside the existing cash-movement modal, not a new screen",
      },
      {
        title: "22 of the 53 commits were hardening, not features",
        body:
          "The feature-complete build was maybe half the actual work. The rest was closing a QA and early-use punch list item by item: timezone bugs that made a session look open past midnight when it wasn't, null handling on a till that had never recorded a single movement, validation gaps that let a session close with an unexplained gap, and re-render performance on the session list once shops had weeks of history in it. This is the unglamorous 40% of the work that a demo never shows and a customer never thanks you for \u2014 until the one time it breaks and it doesn't.",
        caption: "The QA punch list, closed ticket by ticket across web, app, and backend",
      },
      {
        title: "Watch real usage, then go back in",
        body:
          "A handful of fixes landed weeks after the initial 23-day build, once real shops had been running sessions for a while \u2014 a reconciliation status difference that wasn't visible on already-closed sessions, and an opening-balance flow gap for a non-regular opening path (a till opened outside the normal daily rhythm, for example after a maintenance day). Neither was visible in the original 69 frames because neither showed up until real shift patterns exercised the feature over real weeks, not a design review.",
        caption: "Post-launch fixes driven by real shop usage patterns, not the original QA pass",
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
    edgeCases: {
      title: "Specific failures, and how each was actually fixed",
      intro:
        "These are real defects found in QA and early real-world use, not hypothetical edge cases \u2014 each maps to an actual commit in the feature's history.",
      cases: [
        {
          case: "A session showed as still open past midnight when it wasn't",
          handling:
            "The elapsed-time calculation didn't account for UTC offset correctly. Fixed by rebuilding the timestamp formatting to be explicitly UTC-aware before any display math ran.",
        },
        {
          case: "The close-session modal reopened immediately after a cashier had just closed it",
          handling:
            "A race condition between the closing mutation completing and a background status poll. Fixed by suppressing the reopen prompt for a short window immediately after any session action.",
        },
        {
          case: "Zero-amount cash movements were silently rejected",
          handling:
            "Some legitimate entries are zero \u2014 a symbolic drawer check, or a correction to an amount that really was zero. Validation had blocked all zero values by default; fixed to explicitly allow them.",
        },
        {
          case: "The denomination breakdown appeared for shops that had never enabled it",
          handling:
            "Fixed by gating the entire denomination UI behind the setting, rather than hiding only part of it, so the feature isn't half-visible to shops that opted out.",
        },
        {
          case: "Cash-in and cash-out entries were being logged with no reason attached",
          handling:
            "A required note field was added specifically to manual cash movement modals, once testing showed the optional version was routinely skipped, defeating the audit trail's purpose.",
        },
        {
          case: "A closed session gave no visual indication of whether it had actually balanced",
          handling:
            "The Short / Excess / Balanced status now renders on closed sessions too, not only on active ones, so a manager reviewing history later can still see the outcome at a glance.",
        },
      ],
    },
    phaseTimeline: {
      title: "How the 23 days actually broke down",
      intro:
        "Mapped directly against the real commit dates: a short kickoff, two dense build clusters, and a quieter finishing stretch \u2014 exactly what the commit graph below shows.",
      phases: [
        {
          range: "Jun 2",
          title: "Kickoff",
          detail: "First scaffolding commit against the finished Figma spec \u2014 routing, empty states, and the base session-list shell.",
        },
        {
          range: "Jun 8\u201313",
          title: "Core lifecycle build",
          detail: "The session state machine, cash-drawer audit model, and strict/easy mode gating. The single densest stretch of the whole project.",
        },
        {
          range: "Jun 15\u201318",
          title: "Denomination counting & reports",
          detail: "Physical-till cash counting and printed end-of-day session reports \u2014 the two pieces cashiers touch most directly at close.",
        },
        {
          range: "Jun 23\u201324",
          title: "Final QA sweep",
          detail: "Closing out the last items on the hardening punch list before the feature was considered fully shipped.",
        },
        {
          range: "Jul 6\u201315",
          title: "Real-usage follow-up",
          detail: "A small set of fixes driven by actual shop behavior over the following weeks \u2014 issues that only surface once real shift patterns, not a QA pass, exercise the feature.",
        },
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
      "If I redid this, I'd build the denomination-counting UI before the audit-history view, not after \u2014 it turned out to be the screen cashiers actually touch every single close, and it went through three redesigns late in the build because I hadn't prioritized real cashier feedback on it early enough. The lesson: design completeness (covering every state) and design priority (which screen gets the most iteration) are two different disciplines, and I conflated them here. I'd also instrument real usage earlier \u2014 both post-launch fixes came from watching actual shift patterns over weeks, and I could have shortened that feedback loop by building lightweight usage logging into the first release instead of waiting to hear about the gaps secondhand.",
    quote: {
      quote: "Design completeness and design priority are two different disciplines. I conflated them here, and I won't again.",
      author: "Bibhushan, in the project retro",
    },
    faq: {
      title: "Questions I get asked about this project",
      items: [
        {
          q: "Why build two enforcement modes instead of just one strict system?",
          a: "Because the actual customer base isn't one kind of shop. A multi-till restaurant with named cashier logins genuinely benefits from ownership locking. A small kirana running one shared login across a whole day cannot use a feature that requires it, full stop. Building only strict mode would have meant this feature wasn't usable by a meaningful share of the customer base.",
        },
        {
          q: "Since you designed and built this alone, who caught the bugs?",
          a: "A QA and early-use punch list, worked ticket by ticket \u2014 22 of the 53 commits are fixes against that list. Some issues also only surfaced after real shops used the feature for a few weeks, which is why a small second wave of fixes landed in July, separate from the original 23-day build.",
        },
        {
          q: "Did you write automated tests for this?",
          a: "No formal test suite for this specific feature \u2014 verification was manual QA against the punch list plus real early usage. That's a real gap, and it's part of why so many of the hardening commits were reactive fixes rather than caught pre-merge. A future version of this project would benefit from targeted tests around the reconciliation math specifically, since that's the one place a subtle bug produces a wrong number silently instead of a visible crash.",
        },
        {
          q: "What was the actual hardest part, design or engineering?",
          a: "Neither in isolation \u2014 it was keeping them consistent with each other while being the only person doing both. The risk of designing and building solo is that shortcuts taken under implementation pressure quietly diverge from the spec and nobody catches it. The discipline that prevented that here was finishing the full Figma spec, including every edge state, before writing any code, so there was a fixed reference to build against instead of improvising states mid-build.",
        },
      ],
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
      "Tigg Web handles invoicing, bookkeeping, VAT compliance, and banking for Nepali SMEs, most of whom transact only in NPR. But import/export businesses, and anyone paying a foreign supplier or invoicing a foreign client, need the product to handle a second currency correctly everywhere: bank accounts, payments, journal entries, reconciliation. Before this, currency handling had grown ad hoc, form by form, over years of the product's life. The real commit history shows this clearly: fixes with titles like \"make exchange rate empty for currency other than NPR in New Customer Payment\" and \"make exchange rate empty for currency other than NPR in Add New Invoice\" appear as separate, near-identical commits against separate forms \u2014 the same bug, independently patched in each place it happened to live, because there was no single implementation to fix once.",
    problem:
      "In accounting software, currency isn't a display preference, it's correctness. A stale exchange rate or a wrongly-signed cross-currency amount produces books that don't balance, and a business's books not balancing isn't a bug report, it's their actual finances being wrong. The dangerous version of this project would have been patching each of a dozen-plus forms individually \u2014 bank statements, journal vouchers, cash transfers, customer and supplier payments, quick receipts, invoices, credit notes, sales orders, quotations, reconciliation, opening balances \u2014 each ending up with subtly different currency behavior that someone would have to maintain forever, and that a user would experience as inconsistency. That was, in fact, exactly the situation the product was already in before this project started.",
    constraints: {
      title: "What made this genuinely risky",
      intro:
        "This wasn't a UI consistency project, it was a correctness project wearing a UI consistency project's clothes. Four constraints made that distinction matter.",
      items: [
        "A wrong sign or a stale rate doesn't produce a visible crash \u2014 it produces a number that looks plausible and is wrong, which is the worst kind of bug in accounting software because nothing alerts anyone to check it.",
        "NPR-only businesses, the majority of the customer base, had to see zero added complexity. Any shared abstraction that leaked currency UI onto single-currency accounts would have been a net regression for most users to fix a problem affecting a minority.",
        "Some forms had genuinely different rules, not just different UI: opening balances lock currency to the bank's currency specifically, and certain reconciliation contexts force NPR regardless of what the account would otherwise allow. A single shared component had to accommodate real per-form exceptions without becoming a special-case-ridden mess.",
        "This shipped into a live product with existing data. Bank accounts already had transaction history in whatever currency behavior had shipped before; the rollout couldn't assume a clean slate.",
      ],
    },
    alternatives: {
      title: "What I considered and ruled out",
      intro:
        "The tempting path here was the fast one. It's also the one the product was already suffering from.",
      options: [
        {
          option: "Patch each form's currency bug individually as reported",
          verdict: "rejected",
          reasoning:
            "This was the status quo, and the commit history shows exactly what it produces: near-duplicate fixes like \"make exchange rate empty for currency other than NPR\" repeated form by form, because each form owned its own copy of the logic. Every fix was correct in isolation and the product still ended up inconsistent.",
        },
        {
          option: "A currency utility library of shared functions, each form wires up manually",
          verdict: "rejected",
          reasoning:
            "Better than nothing, but still leaves each form responsible for correctly wiring up the utility functions in the right order \u2014 the exact kind of manual, repeatable step that had already produced drift across a dozen forms once.",
        },
        {
          option: "One shared hook and component that owns the entire behavior",
          verdict: "chosen",
          reasoning:
            "A form either renders the shared component and consumes the shared hook, or it doesn't handle currency at all. There's no partial, manually-wired middle state for a form to drift into. Per-form exceptions (opening balance's bank-currency lock, specific NPR-forced reconciliation contexts) are handled as explicit configuration passed into the shared implementation, not forked copies of it.",
        },
      ],
    },
    compareSlider: {
      title: "The same field, before and after",
      intro:
        "Drag the divider. Before, currency fields and exchange-rate inputs behaved slightly differently on every form, often showing a stale rate. After, the behavior is identical everywhere because it's the same shared implementation.",
      beforeLabel: "Before",
      afterLabel: "After",
      beforeMockupId: "before-inconsistent-currency",
      afterMockupId: "currency-locked",
    },
    approach: [
      {
        title: "Build the abstraction before touching a single form",
        body:
          "Before rolling out anything, I built one shared component (form-currency.jsx) and one reusable hook (useAccountCurrencyLock) that every form would consume. The currency locks to whichever account is selected; an exchange-rate field appears only for genuinely cross-currency postings and stays empty otherwise; NPR-only businesses see no change at all. Every form's currency behavior comes from this one implementation, not a copy of it.",
        caption: "form-currency.jsx and useAccountCurrencyLock \u2014 the shared implementation every form now consumes",
      },
      {
        title: "Handle the real per-form exceptions as configuration, not forks",
        body:
          "A few forms genuinely need different behavior: Opening Balance locks currency to the bank account's own currency rather than letting a user pick, and specific reconciliation contexts force NPR regardless of the account's actual currency, because of a regulatory reporting requirement. Both are expressed as flags passed into the shared hook, so the exception is visible and centralized rather than a silently forked copy of the currency logic living inside one form's file.",
        caption: "Per-form exceptions as explicit configuration into the shared hook, not duplicated logic",
      },
      {
        title: "Sweep the product, form by form",
        body:
          "With the abstraction working, the rollout became mechanical but extensive: bank statement components, detail forms across the product, cash transfer, quick receipt, customer and supplier payments, new invoices, credit notes, sales orders, reconciliation, and opening balances. 97 files changed. Each form went from its own bespoke currency logic to consuming the shared behavior, with small per-form adjustments only where a form's specific rules genuinely differed.",
        caption: "The sweep across bank, sales, purchase, and journal forms \u2014 97 files, one shared behavior",
      },
      {
        title: "Fix currency-lock direction bugs form by form during the sweep",
        body:
          "Locking currency to the correct side of a transaction wasn't uniform across forms \u2014 real fixes during the rollout include locking currency with respect to the paid-from account in one context and the received-into account in another, and getting each direction right per transaction type rather than assuming one direction applied everywhere.",
        caption: "Currency-lock direction fixes: paid-from vs received-account, form by form",
      },
      {
        title: "Get sign ordering and currency-code display right",
        body:
          "A negative cross-currency amount needs its currency symbol and its negative sign in the correct relative order, and this was wrong in more than one place during the rollout \u2014 the real fix is logged plainly in the commit history as \"currency sign before negative sign.\" Small on its own, but exactly the kind of detail that makes a statement or invoice look subtly untrustworthy to an accountant reading it closely.",
        caption: "Currency-code display and negative-amount sign ordering, corrected across the affected forms",
      },
      {
        title: "Harden with real review \u2014 32 of 57 commits are the tail, and the tail is the feature",
        body:
          "More than half the commits in this project are correctness fixes, many driven directly by named peer review, not self-discovered. Clearing a stale exchange rate the moment an account changes. Forcing NPR where regulation requires it regardless of what a form would otherwise allow. Auto-selecting the right currency in Cash Transfer and Quick Receipt so a user isn't asked to pick what's already implied. None of this shows up in a feature list, and all of it is the difference between \"multi-currency support\" as a checkbox and multi-currency support you can actually close a month's books with.",
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
    edgeCases: {
      title: "Specific bugs the hardening tail actually fixed",
      intro:
        "Pulled directly from the real commit history of the rollout \u2014 the unglamorous correctness work that doesn't show up in a feature announcement.",
      cases: [
        {
          case: "Currency lock was inconsistent between reconciliation and regular payment forms",
          handling:
            "Fixed the currency-lock logic specifically inside reconciliation, and separately fixed how a new payment behaves when multi-currency is disabled at the account level entirely.",
        },
        {
          case: "Exchange rate stayed populated after switching to an NPR-only account",
          handling:
            "Fixed per form \u2014 New Customer Payment, Credit Note, New Invoice, New Sales Order \u2014 to explicitly clear the exchange-rate field the moment the selected currency is NPR, rather than leaving a stale value visible.",
        },
        {
          case: "Currency lock direction was wrong for Supplier Payment and Customer Payment",
          handling:
            "Corrected to lock only when the transaction currency differs from NPR, and to lock with respect to the correct account side (paid-from vs received-into) per transaction type.",
        },
        {
          case: "Negative cross-currency amounts displayed with the sign in the wrong position",
          handling:
            "Fixed currency-symbol and negative-sign ordering so a negative foreign-currency amount reads correctly instead of looking like a formatting error.",
        },
        {
          case: "Quick Receipt and Cash Transfer required the user to manually pick a currency that was already implied",
          handling:
            "Added currency and exchange-rate fields with auto-selection based on the chosen account, removing an unnecessary manual step.",
        },
        {
          case: "Currency symbol and code were missing or inconsistent on bank account pages and reports",
          handling:
            "Added currency and formatting consistently across bank account pages, add-payment and find-match drawers, and the reconciliation report.",
        },
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
      "The abstraction-first approach was the right call, but I'd instrument it earlier next time: a lot of the 32 hardening commits were bugs a peer reviewer caught by reading carefully, not bugs a test caught automatically. A handful of targeted tests around sign-ordering and stale-rate clearing, written alongside the hook itself rather than after, would have caught several of these before review rather than during it. I'd also push back harder, earlier, on treating this as a UI rollout instead of what it actually was \u2014 a correctness project across a dozen surfaces \u2014 since framing it that way from day one would have justified writing those tests before the sweep started, not after bugs had already shipped into forms.",
    quote: {
      quote: "Ninety-seven files changed, one place where the logic actually lives. That ratio is the whole point.",
      author: "Bibhushan, on the rollout",
    },
    faq: {
      title: "Questions I get asked about this project",
      items: [
        {
          q: "Why did this take 3.5 weeks if the abstraction was straightforward?",
          a: "The hook and component themselves were maybe two or three days of work. The other three weeks were the sweep across 97 files and the hardening tail \u2014 32 of the 57 commits are correctness fixes found during real review, not the initial build. Multi-currency in accounting software is mostly the hardening, not the abstraction.",
        },
        {
          q: "How much of this was caught by you versus a reviewer?",
          a: "Honestly, a meaningful share of the tail came from a named peer reviewer reading carefully, not from something I caught myself first. I think that's worth saying plainly rather than implying I found every edge case solo \u2014 the review process is part of why this shipped correctly.",
        },
        {
          q: "What would have happened if a bug like the stale exchange rate had shipped uncaught?",
          a: "A business's posted transaction would use an old rate instead of the correct one for that account, which means the books for that transaction would be wrong in a way that's easy to miss and hard to trace back later. That's the actual stakes behind what looks like a small UI fix.",
        },
      ],
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
      "Nepal records 151 maternal deaths per 100,000 live births, more than double the SDG target. One in three new mothers screens positive for postpartum depression, and most are never screened at all. Only 39% of husbands attend a single antenatal visit. The period-tracking apps available in Nepal are translated Western products: they don't speak Nepali, don't know what Aama Surakshya is, and treat cycle, pregnancy, loss, and motherhood as separate products \u2014 for what is actually one woman living one continuous life. We didn't start with these numbers. We started wanting to build a better period tracker, and only found the real shape of the problem by going and asking.",
    problem:
      "We set out to build a better period tracker. Then we spent six months talking to women, mothers and daughters, OB-GYNs, and female community health volunteers across Kathmandu Valley and Chitwan. The realization that redirected the entire project: these were never separate problems needing separate apps. They were one woman, at different points in one life, unsupported at every single one of them. A period tracker that stops being useful the moment she becomes pregnant, and a pregnancy app that has nothing to say if that pregnancy ends in loss, and a postpartum resource that was never connected to either of the apps she'd used before it \u2014 that fragmentation was itself the problem, not a missing feature in any one of them.",
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
    constraints: {
      title: "What the product had to be true to",
      intro:
        "Four things were treated as non-negotiable from the first design decision onward, not added later as polish.",
      items: [
        "Privacy had to be architecture, not a policy page. On-device encryption and a genuine anonymous mode were decided before a single screen was designed, because the subject matter (cycle, pregnancy, loss, mental health) is exactly the category where a privacy policy nobody reads isn't enough.",
        "The product had to be loss-aware by default, not as a special mode someone opts into after already suffering a loss. One in five known pregnancies end in loss, and asking a grieving user to find a setting to turn off a due-date countdown is itself a design failure.",
        "This had to read as genuinely Nepali, not a Western product translated into Nepali afterward. That constraint touched everything: the color palette, the typography pairing, the motifs, and the copy itself, which was written in Nepali first rather than translated from an English draft.",
        "Clinical trust required real licensing, not a generic \"talk to a doctor\" feature. Every OB-GYN in the Clinician Inbox had to be an NMC-registered Nepali doctor, which constrains distribution and onboarding far more than a simple chat feature would.",
      ],
    },
    alternatives: {
      title: "What we considered and ruled out",
      intro:
        "The pivot away from a period tracker was the single biggest decision in the project's life, and it came directly out of weighing these options against six months of research.",
      options: [
        {
          option: "Ship the original period-tracker concept as planned",
          verdict: "rejected",
          reasoning:
            "It was already partially built when the research made clear it was solving the wrong-sized problem. Shipping it anyway would have meant ignoring six months of direct evidence to preserve sunk work \u2014 the harder, correct call was to kill it.",
        },
        {
          option: "A generic clinical white-and-teal visual language, translated into Nepali",
          verdict: "rejected",
          reasoning:
            "This is what every existing option in the market already does. It reads as imported rather than made for the culture it's serving, and women in the research sessions specifically described existing apps as feeling foreign.",
        },
        {
          option: "English-first product with Nepali as a secondary toggle",
          verdict: "rejected",
          reasoning:
            "Would have been faster to build and matched most existing local software patterns, but it inverts who the product is actually for. Copy was written in Nepali first specifically so the Nepali experience wasn't a translation of an English original.",
        },
        {
          option: "Distribute purely direct-to-consumer through app stores",
          verdict: "rejected",
          reasoning:
            "Reaching women earliest, at the first antenatal visit, needed a channel that doesn't depend on someone already knowing to search for the app. That's why distribution runs through OB-GYNs handing over a physical card at the point of care instead.",
        },
        {
          option: "A single unified life-stage model, distributed at the point of care",
          verdict: "chosen",
          reasoning:
            "One companion that reshapes around cycle, pregnancy, postpartum, and motherhood, handed to her by a doctor she already trusts at the moment she needs it most \u2014 addressing both the fragmentation problem and the discovery problem at once.",
        },
      ],
    },
    compareSlider: {
      title: "What a Nepali woman was actually being offered, before and after",
      intro:
        "Drag the divider. The left side is representative of the translated, clinical-teal period trackers that were the only real options available before this. The right side is Myra's actual visual language, sampled from the real brand.",
      beforeLabel: "Generic tracker",
      afterLabel: "Myra",
      beforeMockupId: "before-generic-tracker",
      afterMockupId: "after-myra",
    },
    approach: [
      {
        title: "Kill the period-tracker idea; design a companion instead",
        body:
          "We designed a companion that reshapes itself around her stage of life \u2014 cycle (\u0930\u091c\u0938\u094d\u0935\u0932\u093e), pregnancy (\u0917\u0930\u094d\u092d\u093e\u0935\u0938\u094d\u0925\u093e), postpartum (\u0938\u0941\u0924\u094d\u0915\u0947\u0930\u0940), early motherhood (\u092e\u093e\u0924\u0943\u0924\u094d\u0935) \u2014 rather than treating each as a separate app. It's loss-aware by design: one in five known pregnancies ends in loss, and Myra is built to hold that reality rather than silently pretend it away in its data model and its copy.",
        caption: "The four-stage model and loss-aware state flows, designed around real research rather than a generic wellness-app template",
      },
      {
        title: "Design the loss-aware data model specifically, not as an afterthought",
        body:
          "Concretely, this meant a pregnancy record can transition to a loss state without deleting history or forcing a user to start over as a new \"cycle\" user, and copy across the app was audited so nothing assumes a pregnancy will end in a live birth \u2014 due-date countdowns and milestone congratulations, the default assumption in most pregnancy apps, needed an explicit alternate path rather than just being suppressed after the fact.",
        caption: "Pregnancy-to-loss state transitions designed as a first-class path, not a deletion-and-restart",
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
          "A Companion mode lets her invite her partner in \u2014 she controls exactly what he sees. It's support, deliberately designed to never become a leash: the permission model is opt-in and revocable by her at any time, and there is no view into her data that bypasses her explicit sharing choice, including for the partner account itself. Validated postpartum-depression screening (EPDS) is built in, in Nepali.",
        caption: "Companion mode's permissioned partner access, designed so consent is revocable, not a one-time grant",
      },
      {
        title: "Make real clinical access actually affordable",
        body:
          "A Clinician Inbox connects her to NMC-registered Nepali OB-GYNs who respond within 48 hours for NPR 399, under half the cost of an in-person visit, and the app surfaces government Aama Surakshya cash entitlements by district so she knows what she's actually owed. Getting to \"NMC-registered\" as a hard requirement, rather than any willing doctor, was itself a deliberate constraint on how fast the clinician side of the network could grow \u2014 trust mattered more than speed here.",
        caption: "The Clinician Inbox: real licensed doctors, a fixed affordable price, and government entitlement information surfaced automatically",
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
    edgeCases: {
      title: "The states most apps don't design for",
      intro:
        "The genuinely hard design problems in Myra weren't the happy path \u2014 they were the states a translated Western tracker either ignores or handles badly.",
      cases: [
        {
          case: "A tracked pregnancy ends in loss",
          handling:
            "The record transitions to a loss state rather than being deleted or silently reset, and every downstream due-date and milestone notification is suppressed along that specific path instead of continuing to fire.",
        },
        {
          case: "A user wants the app's benefits with zero identifiable data stored",
          handling:
            "A genuine anonymous mode exists as a real product path, not a marketing claim, backed by on-device SQLCipher AES-256 encryption so sensitive health data isn't dependent on trusting a server.",
        },
        {
          case: "A partner is invited into Companion mode and the relationship changes",
          handling:
            "Sharing permissions are revocable by her at any time and default to the minimum visible surface, not full account access, so Companion mode can't quietly become a monitoring tool.",
        },
        {
          case: "A woman screens positive for postpartum depression but has no easy path to a doctor",
          handling:
            "The validated EPDS screening is connected directly to the Clinician Inbox at NPR 399, specifically so a positive screen has an immediate, affordable next step rather than ending in a static result screen.",
        },
      ],
    },
    phaseTimeline: {
      title: "How the project actually moved",
      intro:
        "From a period-tracker concept to a paused, substantially-built platform \u2014 the real shape of the timeline, including the pivot that cost months of already-built work.",
      phases: [
        {
          range: "Phase 1",
          title: "Original period-tracker concept",
          detail: "Initial build begins on a straightforward cycle-tracking app before the research phase started in earnest.",
        },
        {
          range: "Phase 2",
          title: "Six months of field research",
          detail: "Interviews with women, mothers, OB-GYNs, and female community health volunteers across Kathmandu Valley and Chitwan, surfacing the maternal health statistics above.",
        },
        {
          range: "Phase 3",
          title: "The pivot",
          detail: "The period-tracker concept is killed. The four-stage companion model, loss-aware by design, replaces it \u2014 the single most expensive and most correct decision in the project's life.",
        },
        {
          range: "Phase 4",
          title: "Design and platform build",
          detail: "The real Nepali-first brand system is designed, and I build the ~30-route launch platform end to end, including the shared component library.",
        },
        {
          range: "Phase 5",
          title: "YuwaXcel 2026",
          detail: "Myra wins first prize, validating the pivoted direction externally for the first time.",
        },
        {
          range: "Current",
          title: "Paused",
          detail: "The clinician-side research \u2014 what NMC-registered OB-GYNs actually need from an inbox workflow \u2014 remains the least resolved piece, and the project is paused while the team figures out the right direction on that specifically.",
        },
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
    faq: {
      title: "Questions I get asked about this project",
      items: [
        {
          q: "Why pause a project that won first prize?",
          a: "Winning validated the direction, but it didn't resolve the hardest unanswered question: what NMC-registered OB-GYNs actually need from an inbox workflow to make the clinical side sustainable at scale. That research is genuinely unfinished, and shipping further without it felt like the wrong order of operations.",
        },
        {
          q: "How real is the 'substantially built' claim?",
          a: "The launch platform is real and shipped \u2014 around 30 routes, a shared component library, working early-access and contact flows on Supabase. What's paused is the next layer: scaling the clinician network and the in-app product itself past what was needed to validate the concept and win YuwaXcel.",
        },
        {
          q: "Was killing the original period-tracker concept a hard call to make as a team?",
          a: "Yes. It meant discarding months of already-built work based on research that contradicted the original premise. It was also, without question, the right call \u2014 shipping the original concept would have meant building confidently on a foundation the research had already disproven.",
        },
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
    constraints: {
      title: "What 48 hours actually rules out",
      intro:
        "A hackathon timeline isn't just \"less time,\" it changes which decisions are even available. Three constraints shaped the whole build.",
      items: [
        "Object recognition had to work well enough to demo convincingly on a curated set of artifacts, not well enough to handle every lighting condition in every museum \u2014 a hard line had to be drawn between what got solved for real and what got faked for the demo.",
        "The team had 48 hours total, not 48 hours of build time \u2014 concept, content for each artifact, translation into multiple languages, and the actual app all had to fit inside that window together.",
        "A guide that only works while pointing a camera at an object is useless to someone planning a visit from home, so a conventional non-AR shell had to exist too, which meant scope for two interaction models, not one, inside the same 48 hours.",
      ],
    },
    alternatives: {
      title: "What we considered and ruled out",
      intro:
        "Under real hackathon time pressure, the team weighed a simpler QR-based path against the harder AR-first one.",
      options: [
        {
          option: "QR codes next to each artifact, scanned to open a content page",
          verdict: "rejected",
          reasoning:
            "Would have been far faster to build and far more reliable in 48 hours, but it's barely different from the placard it's replacing \u2014 a visitor still has to notice a code, scan it, and read a screen instead of the object. It solves the content-depth problem without solving the actual interaction problem.",
        },
        {
          option: "A generic museum app with a searchable artifact database, no AR",
          verdict: "rejected",
          reasoning:
            "Reliable and low-risk, but doesn't create the moment we actually wanted: information appearing exactly where someone's attention already is, on the object itself, without them having to look away from it to find it.",
        },
        {
          option: "Camera-first AR recognition, with a conventional app shell around it",
          verdict: "chosen",
          reasoning:
            "Higher technical risk in 48 hours, but it was the only option that let a visitor keep looking at the actual artifact while getting instant context, which was the entire point of the concept.",
        },
      ],
    },
    compareSlider: {
      title: "The placard, versus pointing a phone at it",
      intro:
        "Drag the divider. Left is representative of the actual museum placards this replaces \u2014 static, single-language, brief. Right is the real useAR camera view for the same artifact.",
      beforeLabel: "Placard",
      afterLabel: "useAR",
      beforeMockupId: "before-placard",
      afterMockupId: "after-ar-camera",
    },
    approach: [
      {
        title: "Point the camera, get the story instantly",
        body:
          "The core interaction: open the app, point the camera at an artifact, and a card resolves over it \u2014 title, a few lines of real context, and a \"read more\" for anyone who wants depth. For the Panauti Museum's Copper Mahadev Head, that meant surfacing that it's part of the Indreshwor Mahadev Temple complex, one of the most significant landmarks in Panauti, known for multi-roofed pagoda-style architecture and Newari craftsmanship, without making a visitor tap through a menu to get there.",
        caption: "Camera-first recognition surfacing the Copper Mahadev Head's context directly over the live view",
      },
      {
        title: "Draw a hard line between the demo set and the real problem",
        body:
          "We deliberately curated a fixed set of artifacts for the 48-hour demo rather than pretending the recognition model generalized further than it did. That was an honest scoping decision under time pressure: the interaction design and content depth were the parts we believed in enough to invest real time in, and the recognition accuracy was explicitly the part we knew was demo-good, not production-good, going in.",
        caption: "A curated demo artifact set, chosen deliberately rather than overclaiming general recognition",
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
    edgeCases: {
      title: "What breaks first in a real museum",
      intro:
        "These are the specific failure modes the team identified as the actual gap between the 48-hour demo and a production version, not solved problems.",
      cases: [
        {
          case: "Museum lighting is inconsistent, unlike the demo environment",
          handling:
            "Not solved in the hackathon build \u2014 explicitly identified as the real production blocker rather than papered over. Recognition accuracy was demo-good under controlled conditions, not production-good under variable museum lighting.",
        },
        {
          case: "A visitor points the camera at an artifact not in the curated demo set",
          handling:
            "The 48-hour build scoped recognition to a fixed artifact list per museum rather than attempting open-set recognition, which is an honest scope limit rather than a hidden one.",
        },
        {
          case: "A visitor wants depth beyond the card without leaving the AR view",
          handling:
            "The \"read more\" action opens deeper content without exiting the live camera view entirely, so continuity with the physical object isn't broken by a full navigation away from it.",
        },
      ],
    },
    quote: {
      quote: "It's impressive as a stage demo and useless as a daily tool the moment the interaction model gets sloppy. We designed for the second one.",
      author: "Bibhushan, on the AR design brief",
    },
    faq: {
      title: "Questions I get asked about this project",
      items: [
        {
          q: "Why hasn't this shipped since it won?",
          a: "The interaction design held up, but the actual hard problem, object recognition working reliably in real museum lighting on a real phone camera rather than a hackathon-curated test set, was never solved past demo quality. Shipping it for real means solving that first, not adding more app features.",
        },
        {
          q: "What would a production version need that the hackathon version didn't have?",
          a: "A recognition model trained and tested against real museum conditions rather than a curated demo set, and a content pipeline for adding new artifacts and translations that doesn't depend on the original hackathon team hand-writing each entry.",
        },
      ],
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
    constraints: {
      title: "The actual design constraint",
      intro:
        "This project had no client, no deadline, and no real backend \u2014 which meant the only constraint worth holding myself to was discipline about consistency, since nothing external was forcing it.",
      items: [
        "Every primary action across the entire app, from adding to cart to reserving a table to placing an order, had to use one identical visual pattern, with zero exceptions for \"just this one screen.\"",
        "A cart had to behave predictably across interruption \u2014 leaving to check a photo, backing out of checkout \u2014 rather than only being designed for the uninterrupted happy path.",
        "Reservation and ordering are two different jobs a user comes to the app to do, but they needed to feel like the same product, not two features stitched together.",
      ],
    },
    alternatives: {
      title: "What I considered and ruled out",
      intro:
        "The easy version of this project would have been a portfolio piece optimized for a few impressive individual screens. I deliberately chose the harder, less flashy version instead.",
      options: [
        {
          option: "Design a handful of hero screens optimized for a portfolio",
          verdict: "rejected",
          reasoning:
            "Would produce more impressive individual shots, but it's exactly the failure mode I was trying to avoid \u2014 beautiful screens with no real proof they hold together as a system.",
        },
        {
          option: "Design the full connected journey as one system, seams included",
          verdict: "chosen",
          reasoning:
            "Harder to make any single screen look flashy in isolation, but it's the only version that actually demonstrates the discipline this project was meant to be an exercise in.",
        },
      ],
    },
    compareSlider: {
      title: "One system, versus three",
      intro:
        "Drag the divider. Left is representative of how this category typically gets built, screen by screen with drifting visual rules. Right is ARestro's actual single system, applied without exception.",
      beforeLabel: "Screen by screen",
      afterLabel: "ARestro",
      beforeMockupId: "before-inconsistent-app",
      afterMockupId: "after-arestro",
    },
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
      {
        title: "Design the cart for interruption, not just the happy path",
        body:
          "A user leaving an in-progress cart to check a menu item's photo, or backing out of checkout to change an item, needed to return to an unchanged cart state rather than losing progress. This sounds minor until it's missing, at which point it's the single most common way a food-ordering app loses an order it had already half-completed.",
        caption: "Cart state designed to survive interruption \u2014 checking a photo, backing out, returning",
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
    faq: {
      title: "Questions I get asked about this project",
      items: [
        {
          q: "Why design a full app with no real backend or client?",
          a: "Because the actual thing I wanted to practice and demonstrate, consistency across seams rather than any individual screen, doesn't need a real backend to prove. It needs the full connected flow designed with the same discipline throughout.",
        },
        {
          q: "What's the biggest unresolved question in the design?",
          a: "The cart-editing interaction after an item's already been added. I designed it three different ways before settling on the current one, and without real usability testing I genuinely don't know which of the three was actually best for users.",
        },
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
    constraints: {
      title: "The actual design constraint",
      intro:
        "One constraint drove every technical decision in this project, and it wasn't a feature requirement, it was an architectural one.",
      items: [
        "Nothing could ever leave the browser tab. Not analytics, not error reporting to a server, not even an optional cloud-backup feature \u2014 the moment any data left the client, the entire privacy premise of the tool would be compromised.",
        "The tool had to accept real, messy bank exports as they actually are, not a canonical format the user is expected to conform to \u2014 which meant column mapping had to be flexible rather than assuming a fixed schema.",
        "Every chart had to answer a specific question a person actually asks about their own spending, not just visualize whatever data happened to be available.",
      ],
    },
    alternatives: {
      title: "What I considered and ruled out",
      intro:
        "The fastest way to build a personal finance dashboard is with a backend. I ruled that out specifically because of what it would have required me to compromise on.",
      options: [
        {
          option: "A small backend to store parsed transactions and support multiple devices",
          verdict: "rejected",
          reasoning:
            "The instant a backend exists, so does an account system, so does a reason to trust a server with bank statement data. That's the exact tradeoff most existing budgeting apps already make, and it's the one this project exists specifically to avoid.",
        },
        {
          option: "Require a fixed CSV format and ask users to convert their export first",
          verdict: "rejected",
          reasoning:
            "Technically simpler, but it just relocates the messy-format problem onto the user instead of solving it, and most people wouldn't bother converting a file just to try a tool.",
        },
        {
          option: "Fully client-side parsing with flexible column mapping",
          verdict: "chosen",
          reasoning:
            "Keeps the privacy guarantee architecturally true rather than just promised, and meets real bank exports as they actually come, inconsistent formatting and all.",
        },
      ],
    },
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
    compareSlider: {
      title: "A raw export, versus an answer",
      intro:
        "Drag the divider. Left is a real bank CSV export as it actually looks, opened raw. Right is the same data through Dime's monthly-spend view.",
      beforeLabel: "Raw CSV",
      afterLabel: "Dime",
      beforeMockupId: "before-ledger",
      afterMockupId: "dime-dashboard",
    },
    faq: {
      title: "Questions I get asked about this project",
      items: [
        {
          q: "Why not add cloud sync, even optional?",
          a: "Because the moment sync exists as an option, the app needs an account system and a server that can see bank statement data, even if most people don't use it. The all-local architecture is the actual product decision, not a missing feature.",
        },
        {
          q: "What's the biggest gap right now?",
          a: "Categorization is still mostly manual after import. A lightweight rules-based categorizer that learns merchant-to-category mappings over time is the next real problem worth solving \u2014 it's the main remaining friction in using this every month instead of only occasionally.",
        },
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
