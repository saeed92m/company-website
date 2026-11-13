# Company Website — Think Tank Charter

**Document status:** Proposed / awaiting Product Owner approval  
**Version:** 1.0.0  
**Prepared:** 2026-11-13  
**Repository:** `saeed92m/company-website`  
**Baseline:** `main` at `ad395c19f958f0bdc2f0ac235c7264e584347c9a`

> This charter defines roles and a review process. It does not claim that 24 named people have been recruited, that simulated AI roles are human experts, or that proposed decisions have been approved.

## 1. Purpose

Create a multidisciplinary review group to guide the Company Website from its earliest product definition through a verified, production-ready corporate technology platform.

The group must inspect the existing product and repository before proposing changes. It must preserve valid prior decisions unless new evidence supports a change. It must distinguish verified company facts, planned capabilities, active projects, prototypes, and future ambitions.

The website is not only a marketing page. It is the public-facing digital platform for Pishgaman Novandish Fanavargostar Keyhan [Limited Liability Company]. It must communicate the company's scientific and engineering identity and provide a maintainable foundation for future CMS, API, CRM, customer portal, and other integrations.

## 2. Recommended composition

**Recommended total: 24 role seats**
- 18 core roles.
- 6 domain subject-matter expert roles, one for each company activity domain.

This is a role model, not a requirement to hire 24 full-time employees. Domain experts join reviews relevant to their expertise. Several roles may be combined in a small organization, but independent review duties must remain explicit.

### 2.1 Core roles

| ID | Role | Primary accountability | Required evidence / deliverables |
|---|---|---|---|
| TT-01 | Chief Product & Systems Architect / Think Tank Chair | Integrate product, UX, architecture, and delivery decisions; chair reviews | Product vision, architecture decision records, decision log, cross-discipline review |
| TT-02 | Senior Product Manager & PMO | Scope, requirements, roadmap, dependencies, priorities, delivery control | PRD, WBS, milestones, backlog, acceptance criteria, progress evidence |
| TT-03 | Corporate Strategy & Brand Positioning Expert | Corporate identity, positioning, value proposition, brand architecture | Positioning statement, messaging hierarchy, brand architecture |
| TT-04 | Market Intelligence & Business Development Expert | Audience, market, competitor, stakeholder, and conversion research | Market analysis, stakeholder map, validated business hypotheses |
| TT-05 | Senior UX Researcher & Service Designer | User research, needs, tasks, journeys, usability evidence | Research plan, interview synthesis, personas or audience models, journey maps |
| TT-06 | Information Architect & Content Strategist | Sitemap, taxonomy, navigation, page models, content governance | Sitemap, navigation model, content model, page contracts |
| TT-07 | Scientific Communication & Technical Editor | Accuracy, clarity, terminology, claims, evidence, editorial consistency | Editorial guide, content briefs, claim/evidence register, reviewed copy |
| TT-08 | Corporate Brand & Creative Director | Visual direction, brand expression, art direction, image use | Visual direction, brand guidelines, imagery rules |
| TT-09 | Senior UI/UX & Design System Designer | Interaction design, responsive layouts, components, design tokens | Wireframes, prototypes, component specs, design tokens |
| TT-10 | Principal Software Architect & Astro Engineer | Frontend architecture, Astro/TypeScript implementation, maintainability | Architecture diagrams, component contracts, technical design |
| TT-11 | Enterprise Integration Architect | Future CMS/WordPress, API, CRM, portal, SDK, integration boundaries | Integration architecture, API contracts, migration strategy |
| TT-12 | Internationalization & Localization Architect | Eight-language model, locale routing, RTL/LTR, translation workflow | i18n specification, locale QA matrix, translation standards |
| TT-13 | Accessibility & Inclusive Design Specialist | Inclusive interaction and WCAG conformance | Accessibility requirements, audit reports, manual test evidence |
| TT-14 | Technical SEO & Digital Analytics Expert | Crawlability, indexation, structured data, measurement | SEO specification, schema validation, analytics and consent plan |
| TT-15 | Web Performance & Core Web Vitals Engineer | Loading performance, rendering, assets, fonts, network behavior | Performance budget, repeatable test protocol, optimization evidence |
| TT-16 | Senior QA & Cross-Browser Automation Engineer | Functional, regression, browser, device, and integration testing | Test strategy, traceability matrix, automated and manual test results |
| TT-17 | Application Security & Privacy Engineer | Threat modeling, secure forms, privacy, data minimization | Threat model, security requirements, privacy review, remediation evidence |
| TT-18 | DevSecOps, SRE & Reliability Engineer | CI/CD, deployment, observability, backup, restore, rollback | Pipeline controls, operational runbooks, backup/restore and rollback evidence |

### 2.2 Six domain subject-matter experts

| ID | Domain expert | Review scope | Expected contribution |
|---|---|---|---|
| TT-19 | Astronomy & Astrophysics Expert | Astronomy, astrophysics, survey data, transient objects, scientific analysis | Verify scientific claims, ASTROINTEL and ZTF descriptions, maturity labels |
| TT-20 | Aerospace & Space Systems Expert | Aerospace engineering, flight/space systems, satellites, propulsion | Verify aerospace terminology, capabilities, and technical claims |
| TT-21 | Remote Sensing & Geospatial Expert | Optical/SAR remote sensing, GIS, Earth observation, geospatial analytics | Verify data sources, methods, applications, and claims |
| TT-22 | Renewable & Hybrid Energy Systems Expert | Solar, wind, storage, hybrid systems, microgrids, energy management | Verify engineering scope, terminology, and capability statements |
| TT-23 | AI & Data Science Expert | ML, DL, data engineering, computer vision, model lifecycle | Verify AI claims, platform descriptions, limitations, and evaluation language |
| TT-24 | Automotive & Motorsport Engineering Expert | Powertrain, vehicle dynamics, turbocharging, telemetry, motorsport engineering | Verify engineering claims and distinguish analysis capability from delivered service |

## 3. Role qualification and selection criteria

Do not select people only by title, academic rank, follower count, or self-description.

Use a 100-point scorecard:

| Criterion | Weight | Evidence |
|---|---:|---|
| Relevant professional or research experience | 20 | Verifiable projects, roles, publications, shipped products |
| Technical depth in the assigned discipline | 20 | Work samples, technical review, peer-reviewed work where relevant |
| Demonstrated delivery and problem solving | 15 | Completed work with measurable outcomes |
| Evidence-based reasoning and scientific integrity | 15 | Clear sources, uncertainty handling, correction history |
| Cross-functional collaboration | 10 | Multidisciplinary delivery and constructive review |
| Communication and documentation | 10 | Clear technical writing and review comments |
| Security, privacy, and conflict-of-interest awareness | 5 | Relevant practice and disclosure |
| Availability and commitment | 5 | Agreed review cadence and response time |
| **Total** | **100** | |

Recommended qualification threshold: 75/100, with no score below 3/5 for technical depth or evidence-based reasoning. The Product Owner may approve exceptions with a written rationale.

For domain expert seats, require demonstrated subject expertise in the specific domain. A general technology profile is not sufficient.

### AI-assisted role simulation

If the group is instantiated using AI agents, label each seat as **AI-simulated role**, not as a real professor, engineer, certified auditor, or recruited specialist. AI output is a hypothesis or review input. It does not replace independent human approval, legal advice, penetration testing, scientific peer review, or user research with real participants.

## 4. Governance and decision rights

| Decision class | Recommends | Reviews | Final authority |
|---|---|---|---|
| Corporate positioning and public claims | TT-03, TT-04, TT-07, relevant domain expert | TT-01 and relevant reviewers | CEO / Product Owner |
| Product scope and priorities | TT-02, TT-05, TT-06 | TT-01 and affected workstream leads | CEO / Product Owner |
| UX and visual direction | TT-05, TT-08, TT-09 | TT-06, TT-12, TT-13 | Product Owner |
| Architecture and technology | TT-10, TT-11, TT-12 | TT-01, TT-17, TT-18 | Product Owner after technical recommendation |
| Security and privacy controls | TT-17 | TT-10, TT-11, TT-18; independent review where needed | Product Owner accepts residual business risk; legal obligations remain mandatory |
| Scientific and domain claims | TT-07 and relevant domain expert | TT-01 and evidence owner | Product Owner approves publication after expert sign-off |
| Production release | TT-02 and TT-18 | TT-13 to TT-17 plus engineering and content owners | CEO / authorized release owner |

The Chair integrates and records recommendations. The Chair cannot unilaterally approve company claims, accept material security risk, or authorize production release unless the Product Owner explicitly delegates that authority.

## 5. Working principles

1. Inspect before proposing. Read the repository, project handbook, existing ADRs, audits, design artifacts, and open work.
2. Preserve accepted decisions unless new evidence justifies a change.
3. Separate facts, assumptions, hypotheses, recommendations, and approved decisions.
4. Cite evidence for factual claims. Record source, date, version, and confidence where relevant.
5. Do not invent company capabilities, customers, partners, facilities, certifications, projects, team members, or operational commitments.
6. Label every capability as current, in development, planned, or exploratory.
7. Do not publish private project links or sensitive information without explicit approval. Alpha Linux and ZTF Classifier repository links remain unpublished until the owner approves.
8. Do not place secrets, credentials, private keys, personal data, or confidential material in Git.
9. Do not trade security, privacy, accessibility, scientific integrity, or maintainability for visual polish.
10. Use concise, unambiguous technical language. Apply ASD-STE100 principles where suitable: one instruction per sentence, consistent terminology, active voice, short sentences, and defined technical terms.
11. Every recommendation must state rationale, alternatives, trade-offs, risks, dependencies, cost/effort, and acceptance criteria.
12. Record dissent. Do not manufacture consensus.

## 6. Review methods

Use methods according to the question. Do not run every technique in every meeting.

| Method | When to use | Required output |
|---|---|---|
| Evidence-based review | Repository, architecture, claims, audits | Findings linked to verifiable evidence |
| Design Thinking | User needs and problem framing | Problem statement and validated user needs |
| Jobs To Be Done | User intent and task design | Job statements and task outcomes |
| Brainwriting / structured brainstorming | Divergent solution generation | Independently generated and clustered ideas |
| Delphi-style review | Independent expert judgment | Anonymous first-round views and convergence report |
| Weighted decision matrix | Competing options | Criteria, weights, scores, sensitivity notes |
| Pre-mortem | Before major commitments or release | Failure scenarios and mitigations |
| Red-team review | Security, privacy, UX, claims, operations | Adversarial findings and remediation |
| Usability testing | Navigation and critical user tasks | Observed issues, severity, retest evidence |
| Traceability review | Requirements to implementation | Requirement-to-test-to-evidence mapping |

Do not use a weighted score to conceal a mandatory blocker. Legal, safety, security, privacy, and scientific-integrity requirements may be hard gates.

## 7. Project lifecycle and gates

| Phase | Main work | Gate / acceptance evidence |
|---|---|---|
| 0. Baseline audit | Repository, architecture, ADRs, branches, PRs, CI, audits, current pages | Dated baseline, evidence register, risk register, unresolved questions |
| 1. Product discovery | Audiences, business goals, user needs, market hypotheses | Approved problem statement, audience model, measurable objectives |
| 2. Corporate and brand strategy | Corporate identity, brand architecture, messaging, claims | Approved positioning and evidence-backed message hierarchy |
| 3. UX and information architecture | Journeys, navigation, sitemap, content model | Approved sitemap, page contracts, task flows |
| 4. Visual direction and design system | Visual language, responsive design, tokens, components | Approved visual direction and tested design system |
| 5. Technical architecture | Frontend, content separation, localization, integration boundaries | ADRs, interface contracts, security and performance requirements |
| 6. Implementation | Incremental development, content, components, integrations | Reviewed PRs, passing required CI, updated documentation |
| 7. Independent verification | Functional, accessibility, security, SEO, performance, localization, browser/device QA | Reproducible test evidence and resolved critical/high findings |
| 8. Production acceptance | Deployment, domain, email independence, backups, restore, rollback, monitoring | Signed release checklist and tested recovery evidence |
| 9. Continuous improvement | Analytics, feedback, content governance, maintenance | Prioritized improvement backlog and periodic review |

A phase is not complete because a document exists. It is complete only when its acceptance criteria and evidence are verified.

## 8. Repository-specific baseline and constraints

This section records the inspection snapshot used to create this charter. Re-check live GitHub state before acting on it; branch and workflow counts change.

- Repository: `saeed92m/company-website`.
- Baseline main commit: `ad395c19f958f0bdc2f0ac235c7264e584347c9a`, dated 2026-11-09.
- The repository uses Astro and TypeScript and has an established CI and GitHub Pages deployment workflow.
- The project targets Persian, English, Arabic, Russian, German, Chinese, French, and Spanish, with RTL/LTR support.
- Existing design, UX, architecture, handbook, ADR, security, SEO, accessibility, performance, and operational documents are part of the baseline.
- Main is protected. Changes must use feature/documentation branches and pull requests; do not commit directly to main.
- Existing open branches and pull requests must be triaged before creating overlapping implementation work.
- The latest production acceptance documentation identifies follow-up work in security headers, independent encrypted backup storage, tested production rollback, human accessibility review, contact workflow, legal/privacy content, and localization quality. Verify each item against current evidence before treating it as open.
- Existing architecture decisions are not automatically reopened by this charter.

### Non-negotiable company and product constraints

1. Official company name: **پیشگامان نواندیش فناورگستر کیهان [مسئولیت محدود]**.
2. Founder and CEO: **سعید معمارزاده**. Do not publish additional personal details without approval.
3. Six activity domains: Astronomy, Aerospace, Remote Sensing, Energy, Artificial Intelligence, and Motorsport.
4. Do not imply that planned laboratories, equipment, facilities, certifications, partnerships, or services already exist unless evidence confirms them.
5. Alpha Linux and ZTF Classifier may be described as projects, but their GitHub repository links must not be published until explicitly approved.
6. Keep the website repository separate from the Alpha Linux and ZTF Classifier repositories.
7. WordPress is not in the initial implementation scope. Keep future CMS/WordPress/API/CRM/Portal integration possible without introducing unnecessary complexity now.
8. Business email must be architected independently from website hosting.
9. Do not expose private architecture, internal operational data, credentials, or sensitive project information in public content.

## 9. Decision record template

For each material decision, record:

- **ID and title:**
- **Date and status:** Proposed / Accepted / Rejected / Superseded
- **Decision owner:**
- **Problem and context:**
- **Evidence and source links:**
- **Options considered:**
- **Evaluation criteria and trade-offs:**
- **Decision and rationale:**
- **Risks and mitigations:**
- **Affected requirements, components, and documents:**
- **Implementation owner:**
- **Acceptance criteria:**
- **Verification evidence:**
- **Review date / trigger for reconsideration:**
- **Dissenting views:**

Use an ADR for architectural decisions. Use the project decision log for product, UX, content, and operational decisions.

## 10. Meeting protocol

### Preparation

- Circulate the question, scope, evidence pack, and decision needed before the meeting.
- Participants review the source material independently.
- Identify conflicts, missing evidence, and decisions that are out of scope.

### Session

1. State the decision question and constraints.
2. Confirm facts and unknowns.
3. Give each discipline an independent first response.
4. Generate alternatives before evaluating them.
5. Run challenge and red-team review.
6. Compare alternatives and record trade-offs.
7. Record decision, dissent, owner, and acceptance evidence.
8. Assign actions with one accountable owner each.

### After the session

Publish a concise decision record, action list, changed risks, and repository/documentation updates. No verbal decision is considered implemented until its required artifacts and evidence are updated.

## 11. Required outputs from the think tank

The group must maintain, as applicable:

- Product vision and measurable objectives.
- Audience and user research evidence.
- User journeys and information architecture.
- Sitemap, page contracts, and content model.
- Brand positioning and visual direction.
- Design system and responsive interaction specifications.
- Technical architecture and ADRs.
- Internationalization and localization standards.
- Scientific and corporate content evidence register.
- SEO, accessibility, performance, security, and privacy plans.
- QA strategy and requirements traceability.
- Risk, dependency, decision, and change registers.
- Release, backup, restore, rollback, and operational runbooks.
- Production acceptance checklist and final evidence report.

## 12. Progress reporting

Do not invent completion percentages. Report progress by workstream using evidence-backed states:

- **Not started**
- **In progress**
- **Blocked**
- **Awaiting owner decision**
- **Verified complete**
- **Deferred with rationale**

If a numeric percentage is requested, define the weighted work breakdown and denominator first. Count only verified acceptance criteria as complete. Report blockers separately; do not allow a high average to hide a critical release blocker.

## 13. Initial agenda

The first working session must not start with unconstrained brainstorming.

1. Confirm the repository baseline and the current production acceptance status.
2. Read the Master Handbook, company profile, approved logo/brand assets, redesign brief, ADRs, UX/design documents, and current audits.
3. Reconcile open PRs and branches to avoid duplicate work.
4. Build a source-of-truth register and classify each claim as verified, unverified, planned, or prohibited from publication.
5. Review target audiences and the primary jobs the website must support.
6. Identify the five highest-impact product risks and five highest-value opportunities.
7. Agree on the first decision backlog and evidence required for each decision.

## 14. Approval

This charter is a proposal for review. It does not authorize production changes, publication of sensitive information, hiring, expenditure, or changes to accepted architecture.

**Approval required from:** CEO / Product Owner  
**Approval status:** Awaiting user decision

---

## Appendix A — First-session evidence checklist

- [ ] Current `main` tree, commit, branch protection, rulesets, and CI status
- [ ] All open PRs and branches, with overlap and staleness analysis
- [ ] Master Handbook and project README
- [ ] Company profile and approved legal identity
- [ ] Logo files and brand guidance
- [ ] Website redesign brief
- [ ] Existing ADRs and architecture documents
- [ ] UX research, IA, wireframes, visual direction, and design system
- [ ] Current production acceptance, security, SEO, accessibility, performance, and operational audits
- [ ] Current public deployment and domain behavior
- [ ] Eight-locale route and RTL/LTR verification
- [ ] Contact, privacy, legal, and independent business-email requirements

## Appendix B — Public-claim review checklist

Before publishing any company, product, project, capability, customer, partner, facility, certification, or performance claim, record:

- Claim text and intended page.
- Claim classification: current / in development / planned / exploratory.
- Evidence owner and source.
- Date and validity period.
- Domain expert review, if applicable.
- Legal/privacy review, if applicable.
- Product Owner approval.
- Localization review for all published locales.
