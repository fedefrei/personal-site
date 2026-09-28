export const highlights = [
	{
		id: 1,
		title: "Iglesia Alianza Azul",
		tag: "Live · Public",
		iconClass: "bi-globe2",
		url: "https://alianzaazul.org",
		linkLabel: "alianzaazul.org",
		description:
			"Website and admin panel for a local church community: announcements, ministry teams, downloadable cell-group material and passwordless (magic link) login for staff.",
		bullets: [
			"Built-in MCP server with its own OAuth 2.1 authorization server, so staff can draft announcements from Claude or ChatGPT. AI only creates drafts; a human reviews and publishes.",
			"Image uploads to Cloudflare R2, transactional email with Resend, deployed on Railway.",
		],
		skills: ["ASP.NET Core 10", "Razor Pages", "PostgreSQL", "Tailwind CSS", "OAuth 2.1", "MCP", "Cloudflare R2", "Railway"],
	},
	{
		id: 2,
		title: "Lic. Lucrecia Martin - Nutritionist",
		tag: "Live · Public",
		iconClass: "bi-heart-pulse",
		url: "https://nutrilucremartin.com",
		linkLabel: "nutrilucremartin.com",
		description:
			"Professional website for a licensed nutritionist: online and in-person consultations, healthy recipes, free downloadable guides and a dedicated resource section for oncology patients.",
		bullets: ["Statically exported Next.js site with a headless CMS (Storyblok) so recipes can be published without a deploy.", "Hosted on Azure Static Web Apps."],
		skills: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Storyblok", "Azure Static Web Apps"],
	},
	{
		id: 3,
		title: "Turnero - Clinic scheduling & billing",
		tag: "In production · Private",
		iconClass: "bi-calendar2-check",
		description:
			"Appointment, patient and billing platform used by a healthcare practice.",
		bullets: [
			"Scheduling with cascading rules when working hours shift, plus blocked dates and time slots.",
			"Charges, payments and allocations, health-insurance handling and a daily close, with soft-delete audit trails.",
		],
		skills: [".NET 10", "EF Core", "SQL Server", "Next.js 16", "React 19", "JWT auth", "xUnit"],
	},
	{
		id: 4,
		title: "Planificador de Alabanza - Volunteer scheduler",
		tag: "In production · Private",
		iconClass: "bi-people",
		description:
			"Scheduling tool for a volunteer worship team: a rotation grid with load per person, open slots and conflict detection.",
		bullets: [
			"Role-based access (admin / team), magic-link login and per-person notifications.",
			"All domain logic isolated in a tested service layer; single deployable unit served from one container.",
		],
		skills: [".NET", "Minimal API", "React", "Vite", "SQLite", "Docker", "xUnit"],
	},
];
