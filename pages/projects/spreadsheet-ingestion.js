import Head from "next/head";
import Layout from "../../components/Layout";

const title = "Self-extending spreadsheet ingestion with a local LLM";

const designDecisions = [
	"Model proposes, code extracts. If the model gets something wrong, the result is a mapping that is visibly wrong, never an invented value.",
	"Constrained output. The model can only return a heading row and column-to-field pairs from a fixed list. A JSON schema enforces this at decoding time.",
	"\"Say what you see first.\" The prompt makes the model state each column's heading and what its cells contain before it names the column. This fixed the main class of errors.",
	"Deterministic checks after the model. Mappings that the cells contradict are dropped or corrected, and the heading row is re-aligned to the headings the model itself quoted.",
	"Rules decide whether a layout is known or unknown, so a known layout never depends on a model.",
	"Layouts are learned as heading text, not positions, so inserted rows and columns don't break recognition.",
	"Fail closed. If something is ambiguous, there is no result, not a guess.",
];

const wentWrong = [
	"The first prompt mixed up a performer column and a writer column on a sheet with unusual headings. I fixed it by making the model describe each column before naming it.",
	"On a larger form, the model picked the title line above the headings as the heading row, so the whole table was misread. I fixed it with a deterministic re-alignment step.",
	"My first baseline comparison was misleading, because the rule-based reader had already been built from the same layouts. I corrected it by withholding each layout from the rules before comparing.",
	"The GPU driver dropped the model server once in the middle of a run. I changed the harness to stop loudly when the server fails instead of recording that as a result.",
];

const stack = [
	"llama.cpp server",
	"Vulkan backend · consumer AMD GPU",
	"Qwen3 8B / 14B",
	"GGUF quantization",
	"JSON Schema",
	"Python",
	"C#",
	".NET",
	"Web UI",
];

const Block = ({ heading, children }) => (
	<div className="mb-5">
		<h2 className="subsection-title mt-0 mb-3">{heading}</h2>
		{children}
	</div>
);

const Points = ({ items }) => (
	<ul className="project-points">
		{items.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
);

const SpreadsheetIngestionPage = () => (
	<Layout>
		<Head>
			<title>{`${title} | Federico Freiberger`}</title>
			<meta
				name="description"
				content="Case study: a small local language model proposes how to read new spreadsheet layouts, deterministic code extracts the values, and each layout is learned once."
			/>
			<meta property="og:title" content={title} />
			<meta property="og:type" content="article" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
		</Head>
		<section className="section">
			<div className="container">
				<a className="project-link" href="/#production">
					← Back to projects
				</a>
				<div className="section-title mt-4">
					<span className="eyebrow">// case study</span>
					<h2>{title}</h2>
					<p>A small language model on local hardware that learns each new layout once, so the system needs it less the more it's used.</p>
				</div>
				<div className="row">
					<div className="col-lg-8 about-text">
						<Block heading="The problem">
							<p>
								Structured data arrives from many external parties as spreadsheets, and each one has its own layout: different headings,
								different languages, different column orders, and tables that start on different rows.
							</p>
							<p>
								Hand-written parsers are exact, but they only cover the layouts someone has already coded. Sending the files to a hosted AI
								service wasn't an option because of data sensitivity.
							</p>
						</Block>

						<Block heading="The idea">
							<p>
								Use a <strong>small language model that runs on local hardware</strong>, but never let it produce a value. When the system sees
								a layout it doesn't know, the model answers one narrow question: which row holds the headings, and what is each column?
							</p>
							<p>
								A <strong>deterministic reader</strong> then extracts every value from the cells. A person confirms the proposed mapping once,
								the mapping is saved, and every later file in that layout is parsed with no model at all. The more the system is used, the
								less it needs the model.
							</p>
						</Block>

						<Block heading="Design decisions">
							<Points items={designDecisions} />
						</Block>

						<Block heading="How I evaluated it">
							<p>
								A harness scores every run against known answers. It has a <strong>ceiling</strong> (the correct mapping supplied by hand) and
								a <strong>floor</strong> (rule-based guessing with no model). A live dashboard tracked every run.
							</p>
							<p>
								I tuned the prompts on one set of 17 synthetic layouts and judged them on a second set of 10, written after the prompt was
								frozen. On that held-out set the model matched the ceiling: <strong>all 10 layouts, every value, none in the wrong field</strong>
								, against 1 of 10 for the rules alone.
							</p>
							<p>
								I also compared a smaller and a larger model. The smaller one was just as accurate and about three times faster.
							</p>
						</Block>

						<Block heading="What went wrong">
							<Points items={wentWrong} />
						</Block>

						<Block heading="My role">
							<p>
								I set the direction and made the key design call: learn each layout once, so the model fades out of the loop. Much of the code
								was written with AI coding assistants under my direction.
							</p>
						</Block>

						<Block heading="Stack">
							<p>
								llama.cpp server on the Vulkan backend with a consumer AMD GPU, running Qwen3 8B and 14B in GGUF quantization. Python for the
								evaluation harness and services, C# / .NET for the production reader, and a small web UI for the propose, confirm and learn
								flow.
							</p>
							<ul className="chip-list">
								{stack.map((item) => (
									<li className="chip" key={item}>
										{item}
									</li>
								))}
							</ul>
						</Block>
					</div>
				</div>
			</div>
		</section>
	</Layout>
);

export default SpreadsheetIngestionPage;
