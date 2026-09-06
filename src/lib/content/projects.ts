export interface Decision {
  title: string;
  detail: string;
}

export interface ProcessStep {
  title: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  role: string;
  timeframe: string;
  status?: "paused" | "live" | "archived";
  featured: boolean;
  mockup: string;
  summary: string;
  context: string;
  problem: string;
  approach: ProcessStep[];
  decisions: Decision[];
  outcome: string;
  stack: string[];
  confidentialityNote?: string;
}

export const projects: Project[] = [
  {
    slug: "batch-and-serial-tracking",
    title: "Batch & Serial Number Tracking",
    subtitle: "Bringing lot-level inventory control to a POS built for simple retail",
    category: "Product design \u00b7 Frontend engineering",
    role: "UI/UX Designer & Frontend Engineer, sole owner of the feature end-to-end",
    timeframe: "Aug \u2013 Sep 2026 \u00b7 Tigg POS",
    featured: true,
    mockup: "BatchSerialMockup",
    summary:
      "Designed and built lot- and serial-level inventory tracking through Tigg's entire point-of-sale flow, from product setup to sale to refund to reporting, without adding complexity for the many businesses that don't need it.",
    context:
      "Tigg's point-of-sale product was originally built around simple quantity-based inventory: a product has a stock count, and a sale decrements it. That model works for most small retail businesses, but it breaks down for two common cases in Nepal's market: pharmacies and grocers who need to track expiry-dated batches, and electronics or appliance retailers who need to track individual serial numbers for warranty and returns.",
    problem:
      "Batch and serial tracking isn't a feature you can bolt onto one screen. It touches product setup, the point-of-sale order flow, refunds, and reporting, and every one of those flows was already built and in daily use by thousands of businesses who would never touch this feature. The real design problem wasn't \u201chow do we track a batch number,\u201d it was \u201chow do we add a genuinely complex capability without a single extra click or a moment of confusion for the 90% of businesses who will never turn it on.\u201d",
    approach: [
      {
        title: "Start at the data model, make it opt-in",
        detail:
          "Batch and serial tracking became a per-product toggle in the product management form, not a global mode change. A business that never enables it sees exactly the interface it always has.",
      },
      {
        title: "Thread it through the sale flow, including barcode scanning",
        detail:
          "Extended the order-taking and retail sale screens so staff scanning a barcode get the correct batch or serial pre-filled automatically, rather than having to look it up and type it manually mid-sale.",
      },
      {
        title: "Solve the hard edge case: one sale, multiple batches",
        detail:
          "A single order line can legitimately draw from more than one batch of the same product (selling 10 units where 6 come from one batch and 4 from another). Designed the input so staff never have to do that math by hand, the interface reconciles it.",
      },
      {
        title: "Extend refunds, the highest-risk part of the flow",
        detail:
          "A returned item's batch or serial has to be validated against what was actually sold, accounting for quantities already returned in earlier partial refunds. Built explicit validation and clear error states here rather than letting a bad refund silently corrupt inventory counts.",
      },
      {
        title: "Ship dedicated reports, with their own permissions",
        detail:
          "Added Product Batch and Product Serial reports to the inventory section, then added specific permission flags so a business owner can control which staff roles can see or export that data, separate from general reporting access.",
      },
      {
        title: "Invest in the table component itself",
        detail:
          "The reporting views for this feature were the most complex tables in the product (grouped rows, comparator-aware filters for amount and date ranges). Rather than one-off hacks per report, put the work into the shared table component so every report using it got better at once.",
      },
      {
        title: "Ship a feature, then remove it when it didn't earn its place",
        detail:
          "Added a \u201creporting tags\u201d capability to help categorize batch/serial reports, then pulled it back out days later once real usage showed it wasn't solving an actual problem for anyone. Shipping fast and reversing fast beat guessing longer.",
      },
    ],
    decisions: [
      {
        title: "Opt-in complexity as a product principle",
        detail:
          "The single biggest design decision on this project wasn't about batches or serials at all, it was the discipline to make sure a feature only a subset of businesses need never costs the majority anything, not an extra field, not an extra click, not an extra moment of \u201cwait, what's this?\u201d",
      },
      {
        title: "Refunds first, not last",
        detail:
          "Refund handling is usually the part of a feature that gets the least attention because it's the least visible in a demo. Here it got equal design attention to the sale flow itself, because a wrong refund against the wrong batch is a real inventory and accounting problem, not a cosmetic one.",
      },
      {
        title: "Willingness to un-ship something",
        detail:
          "The reporting-tags rollback is a small thing, but it's evidence of treating shipped features as hypotheses, not commitments. Real usage data beat my own assumption about what businesses needed here.",
      },
    ],
    outcome:
      "Inventory-heavy businesses on Tigg, pharmacies, electronics retailers, distributors, can now track stock at the batch or serial level across the full lifecycle: receiving, sale, refund, and reporting, with permission controls around who can see that data. Businesses that don't need it never see a trace of the added complexity.",
    stack: ["Next.js", "TypeScript", "Chakra UI", "TanStack Query", "TanStack Table", "React Hook Form", "Zod", "CASL"],
    confidentialityNote:
      "Described at the level of product decisions and UX flow, not internal architecture, API contracts, or real customer data.",
  },
  {
    slug: "sign-in-redesign",
    title: "Sign-In Page Redesign",
    subtitle: "Turning a dead-end login form into a live communication channel, without weakening security",
    category: "Product design \u00b7 Security UX",
    role: "UI/UX Designer & Frontend Engineer",
    timeframe: "2025 \u2013 2026 \u00b7 Tigg web app & admin panel",
    featured: true,
    mockup: "LoginRedesignMockup",
    summary:
      "Redesigned Tigg's sign-in experience around a 70/30 split between a rotating announcements panel and a streamlined login form, while overhauling two-factor authentication, device trust, and session handling underneath it.",
    context:
      "The sign-in page is the single highest-traffic screen in the product, every user sees it, every day, whether they're already a customer or not yet. Before this redesign it was purely functional: a plain form with no content, on a product where the team regularly had real news, new bank integrations, year-in-review milestones, feature launches, with no consistent channel to put it in front of users before they even logged in.",
    problem:
      "Two separate problems needed solving together. The visual one: the login screen was wasted real estate on the most-viewed page in the app. The structural one, less visible but more important: the underlying authentication flow had real friction, repeated OTP prompts even for trusted devices, unclear error states on password reset, and inconsistent session handling between the main app and the internal admin panel.",
    approach: [
      {
        title: "Redesign around a 70/30 split",
        detail:
          "Dedicated roughly 70% of the screen to a rotating, animated announcements panel, new integrations, feature launches, year-in-review stats, and kept the remaining 30% as a tight, low-friction login form.",
      },
      {
        title: "Add two-factor authentication as an opt-in toggle",
        detail:
          "Built 2FA as something a business can turn on deliberately, with OTP input that supports mobile auto-fill so entering a code doesn't feel like a tax on logging in.",
      },
      {
        title: "Add device trust via fingerprinting",
        detail:
          "Introduced device fingerprinting so a returning device on a recognized browser can skip redundant verification, while a genuinely new or untrusted device gets the extra scrutiny it should.",
      },
      {
        title: "Fix the quiet failures in password reset and registration",
        detail:
          "Worked through a long tail of real rough edges: unclear reset-password error messages, email fields losing their value on validation errors, OTP codes not being resendable cleanly, and registration state not persisting correctly across steps.",
      },
      {
        title: "Match the security model on the admin side",
        detail:
          "Extended equivalent login-route handling and token validation logic to the internal admin panel, so trust and session rules were consistent for both customer-facing and internal users rather than diverging over time.",
      },
    ],
    decisions: [
      {
        title: "Treat the login screen as real estate, not a gate",
        detail:
          "The highest-traffic page in the product was doing zero communication work. Reframing it as a content surface, not just a form, turned a purely functional screen into part of the product's own marketing and retention loop.",
      },
      {
        title: "Reduce friction without reducing security",
        detail:
          "Device fingerprinting was the key unlock here: it let 2FA stay strong for genuinely new devices while removing the most common complaint about two-factor auth, having to repeat it constantly on a device you use every day.",
      },
      {
        title: "Fix boring bugs, not just add features",
        detail:
          "A meaningful share of this project was unglamorous: error messages, state persistence, resend flows. Auth UX lives or dies on exactly these details, not the visual redesign around them.",
      },
    ],
    outcome:
      "The login page became an active communication channel instead of a dead end, while the authentication flow underneath it got measurably calmer: fewer repeated verification prompts for trusted devices, working password reset, and consistent session behavior across the customer and admin apps.",
    stack: ["Next.js", "TypeScript", "Chakra UI", "React Hook Form", "Framer Motion", "Ant Design (legacy surfaces)"],
    confidentialityNote:
      "Security mechanisms are described at a conceptual level intentionally, exact implementation details are not reproduced here.",
  },
  {
    slug: "location-based-permissions",
    title: "Location-Based Permissions",
    subtitle: "An access-control audit and redesign for multi-location businesses",
    category: "UX audit \u00b7 Design systems",
    role: "UI/UX Designer & Frontend Engineer",
    timeframe: "Jun 2026 \u00b7 Tigg web app",
    featured: true,
    mockup: "PermissionsMockup",
    summary:
      "Audited and redesigned Tigg's permission system so multi-location businesses can scope staff access by location, catching over a dozen concrete gaps along the way rather than relying on a vague sense that permissions \u201cfelt messy.\u201d",
    context:
      "Tigg's permission system was originally built for single-location businesses: a role either could or couldn't do something, everywhere. As customers grew into multi-location chains and franchises, that model stopped matching reality. A business owner might want a location manager to see full reports and manage inventory at their own branch, but nothing elsewhere.",
    problem:
      "\u201cPermissions feel messy\u201d isn't a design brief, it's a symptom. The real task was turning a vague sense of confusion into a concrete, ownable list of what was actually broken, then fixing it as a coherent system rather than patching individual complaints as they came in.",
    approach: [
      {
        title: "Run a structured audit, zone by zone",
        detail:
          "Went through the permission-management surface in three functional zones rather than trying to review \u201cpermissions\u201d as one undifferentiated area, cataloging every place location-scoping was missing, inconsistent, or simply confusing. That produced a specific, countable list of issues rather than a feeling.",
      },
      {
        title: "Design a visual permission indicator",
        detail:
          "Built a small, reusable \u201cpermission chip\u201d component so a business owner could see at a glance which locations a staff member had access to, instead of parsing a dense settings table role by role.",
      },
      {
        title: "Thread a consistent location filter through reporting",
        detail:
          "Added a billing-location filter to every report page that needed location scoping, solved once as a shared pattern rather than as a one-off addition to each report individually.",
      },
      {
        title: "Test access-control changes live before merging",
        detail:
          "Pushed location-permission UI changes to a real development environment twice for hands-on testing before merging, treating a feature that controls who can see what with the caution a permissions bug actually deserves.",
      },
    ],
    decisions: [
      {
        title: "Audit before redesigning",
        detail:
          "The instinct with \u201cpermissions feel messy\u201d is to jump straight to a new design. Doing the audit first, zone by zone, turned an open-ended problem into a scoped, shippable list, and made it possible to fix the worst issues first instead of redesigning everything at once.",
      },
      {
        title: "One small component to make an abstract concept visible",
        detail:
          "Access control is inherently invisible, you can't see a permission, only its effects. The permission chip gave business owners a concrete, scannable visual for something that's normally buried in settings.",
      },
      {
        title: "Extra caution for access-control changes specifically",
        detail:
          "Live-testing this twice before merging wasn't standard process for every feature, it was a deliberate choice because getting permissions wrong doesn't just create a bug, it can expose or hide business data incorrectly.",
      },
    ],
    outcome:
      "Multi-location businesses got a permission model that matches how they actually operate, staff access scoped by location rather than all-or-nothing, and the audit turned an ambiguous complaint into a concrete, trackable set of fixes.",
    stack: ["React", "TypeScript", "Ant Design", "Redux"],
    confidentialityNote:
      "Zone names and the exact issue list are internal; described here at the level of process and outcome.",
  },
  {
    slug: "arestro",
    title: "ARestro",
    subtitle: "Exploring augmented reality as a restaurant discovery interface",
    category: "Design exploration \u00b7 AR/UX",
    role: "Designer",
    timeframe: "Kathmandu University",
    featured: true,
    mockup: "ARestroMockup",
    summary:
      "A design exploration into using augmented reality to make restaurant discovery and menu browsing feel spatial and immediate, instead of another list of photos in an app.",
    context:
      "Most restaurant-discovery apps solve the same problem the same way: a list, a photo, a rating, a map pin. ARestro started from a different question: what if you could point your phone at a street and see what's actually being served nearby, layered directly onto the real world in front of you.",
    problem:
      "Augmented reality interfaces have a specific UX trap: they're impressive as a demo and unusable as a daily tool if the information density and interaction model aren't designed carefully. The challenge wasn't \u201ccan we put a menu in AR,\u201d it was making an AR-first discovery flow feel faster and more useful than the list-based apps people already know how to use.",
    approach: [
      {
        title: "Design the non-AR fallback first",
        detail:
          "Started with a clear, conventional list/map view as the foundation, so the AR layer is an enhancement to a working product, not the entire product's only interface.",
      },
      {
        title: "Keep the AR layer sparse and glanceable",
        detail:
          "Limited on-screen AR markers to a small set of high-signal information (name, distance, one standout dish or offer) rather than trying to overlay a full menu in someone's field of view.",
      },
      {
        title: "Design the transition moments carefully",
        detail:
          "Paid particular attention to the handoff between AR view and detail view, since jarring transitions are one of the most common ways AR interfaces feel gimmicky rather than useful.",
      },
    ],
    decisions: [
      {
        title: "Restraint over spectacle",
        detail:
          "The instinct with AR is to show off what's possible. The stronger design decision was showing less in AR and saving detail for a conventional screen the moment someone taps in, respecting how people actually want to consume detailed information.",
      },
    ],
    outcome:
      "A complete design exploration and prototype demonstrating a restrained, usable approach to AR-based local discovery, built as an independent project.",
    stack: ["Figma", "AR prototyping tools"],
  },
  {
    slug: "myra",
    title: "Myra",
    subtitle: "A menstrual-health platform for Nepali women",
    category: "Product design \u00b7 Founder",
    role: "Co-founder",
    timeframe: "2025 \u2013 present, currently paused",
    status: "paused",
    featured: true,
    mockup: "MyraMockup",
    summary:
      "Co-founded Myra with a small team to build AI-driven menstrual-health support for Nepali women, working against a real cultural stigma. Currently paused while we figure out the right direction.",
    context:
      "Myra set out to combine cycle tracking with culturally specific design, built around Nepali visual language rather than a generic global health-app aesthetic, and paired with AI-assisted symptom guidance. The founding team split responsibility across product, research, and early technology.",
    problem:
      "Menstrual health in Nepal carries real stigma that most global period-tracking apps don't account for. Building something Nepali women would actually trust and use meant starting from research and cultural context, not from copying an existing app's feature list.",
    approach: [
      {
        title: "Start with research, not features",
        detail:
          "Ran user interviews to understand real needs and real hesitations before designing a single screen, since the core challenge was trust, not functionality.",
      },
      {
        title: "Design a genuinely local visual identity",
        detail:
          "Developed mascot concepts, Nepali dress variants, and a color system rooted in local visual language rather than an imported global wellness-app aesthetic.",
      },
      {
        title: "Explore partnerships for credibility",
        detail:
          "Reached out to local health organizations and potential mentors to ground the product in real medical and cultural context rather than building in isolation.",
      },
    ],
    decisions: [
      {
        title: "Cultural specificity as the actual product, not a skin",
        detail:
          "The visual and research work treated \u201cbuilt for Nepal\u201d as the core differentiator, not a localization pass applied after building a generic app.",
      },
    ],
    outcome:
      "The project produced meaningful early product thinking and a distinct visual direction, but is currently paused while the team figures out the right direction and focus. The research and product thinking here are things I'd like to return to with the right opportunity.",
    stack: ["Flutter", "Node.js", "Figma"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
