import { NextResponse } from "next/server";
import { PERSONAL_INFO, EXPERIENCE_ITEMS, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") || "markdown";

  if (format === "json") {
    return NextResponse.json({
      personalInfo: PERSONAL_INFO,
      skills: SKILL_CATEGORIES,
      experience: EXPERIENCE_ITEMS,
      projects: PROJECTS,
    });
  }

  // Format as professional clean Markdown
  const markdownContent = `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.title}** (${PERSONAL_INFO.brand})
- Location: ${PERSONAL_INFO.location}
- Email: ${PERSONAL_INFO.email}
- LinkedIn: ${PERSONAL_INFO.linkedinUrl}
- GitHub: ${PERSONAL_INFO.githubUrl}
- Calendly: ${PERSONAL_INFO.calendlyUrl}

---

## Executive Profile
${PERSONAL_INFO.bioShort}

**Core Positioning:**
> "${PERSONAL_INFO.positioning}"

---

## Verified Track Record & Metrics
${PERSONAL_INFO.metrics.map((m) => `- **${m.value}** ${m.label}`).join("\n")}

---

## Technical Competence Matrix

${SKILL_CATEGORIES.map(
  (cat) => `### ${cat.title}
*${cat.description}*
${cat.skills.map((s) => `- **${s.name}** [${s.level}]: ${s.focus}`).join("\n")}
`
).join("\n")}

---

## Professional Experience

${EXPERIENCE_ITEMS.map(
  (exp) => `### ${exp.role} — ${exp.organization}
*${exp.period} | ${exp.location}*

${exp.summary}

**Key Deliverables & Accomplishments:**
${exp.achievements.map((a) => `- ${a}`).join("\n")}

**Core Disciplinary Stack:** ${exp.skillsUsed.join(", ")}
`
).join("\n")}

---

## Key Systems Architecture & Deployed Projects

${PROJECTS.map(
  (p) => `### ${p.title}
*${p.category} — ${p.tagline}*
- **Problem:** ${p.problem}
- **Engineered Solution:** ${p.solution}
- **Technologies:** ${p.technologies.join(", ")}
${p.githubUrl ? `- **Repository:** ${p.githubUrl}` : ""}
`
).join("\n")}

---

## Education & Foundational Credentials
- **B.Sc. in Computer Science** (Cybersecurity & Systems Engineering Focus)
`;

  return new NextResponse(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": 'attachment; filename="sulisumen-peter-cv.md"',
    },
  });
}
