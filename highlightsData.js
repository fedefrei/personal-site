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
	{
		id: 5,
		title: "Botonera DMX - Church lighting control",
		tag: "In production · Private",
		iconClass: "bi-lightbulb",
		privateLabel: "Private · on-site tool",
		description:
			"Stream Deck-style lighting console for a church: big scene buttons so any volunteer can run the lights through a USB OpenDMX interface, with smooth fades between scenes.",
		bullets: [
			"Own DMX output and effects engine (static, chase, pulse, rainbow) with master brightness and a toggleable blackout; fixtures and scenes are defined in a JSON config.",
			"Always-on-top floating mode to run it next to ProPresenter, a web UI for tablets and phones on the same Wi-Fi, and an HTTP API so other programs can trigger scenes.",
		],
		skills: ["Python", "DMX512", "OpenDMX / FTDI", "pyserial", "HTTP API", "HTML", "JavaScript"],
	},
	{
		id: 6,
		title: "Ayudante de ProPresenter - Live production remote",
		tag: "In production · Private",
		iconClass: "bi-display",
		privateLabel: "Private · on-site tool",
		description:
			"Remote control for ProPresenter 7, used at church services and live events: switch Looks, run stage timers and send stage messages from the PC, a tablet or a phone.",
		bullets: [
			"Bridges ProPresenter's remote protocol with no external dependencies and stays in sync live: the on-air Look lights up, timers turn amber in the last minute and red when over time, and it reconnects on its own.",
			"Installable web app (PWA) plus a desktop app with an always-on-top mini bar; a hold-to-confirm safe mode prevents accidental taps, and a wired Ethernet setup keeps it working when event Wi-Fi is saturated.",
		],
		skills: ["Python", "ProPresenter API", "pywebview", "PWA", "HTML", "JavaScript"],
	},
	{
		id: 7,
		title: "Self-extending spreadsheet ingestion with a local LLM",
		tag: "Case study · Private",
		iconClass: "bi-table",
		privateLabel: "Private · case study",
		caseStudyUrl: "/projects/spreadsheet-ingestion",
		description:
			"Reads spreadsheets from many external parties, each in its own layout, with a small language model that runs on local hardware and never produces a value. Each new layout is learned once, so the more the system is used, the less it needs the model.",
		bullets: [
			"For an unseen layout, the model only proposes which row holds the headings and what each column is. Code extracts every value; a person confirms the mapping once and later files in that layout are parsed with no model at all.",
			"On 10 held-out layouts written after the prompt was frozen, it matched the hand-supplied ceiling: every value, none in the wrong field, against 1 of 10 for rules alone.",
		],
		skills: ["llama.cpp", "Vulkan", "Qwen3 (GGUF)", "JSON Schema", "Python", "C#", ".NET"],
	},
];
