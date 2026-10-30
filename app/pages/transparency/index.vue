<script setup lang="ts">
import { donations, expenses, ledger, months } from '~/data/expenses';

const years = ref(expenses.map(entry => String(entry.year)));
const selectedYear = ref(years.value[0]);
const index = computed(() => expenses.findIndex(group => String(group.year) === selectedYear.value));
const donationsSeries = computed(() => donations[index.value]?.series ?? []);
const expensesSeries = computed(() => expenses[index.value]?.series ?? []);
const chartHeight = ref(350);
const chartOptions = computed(() => ({
	chart: {
		id: 'vuechart-example',
		stacked: true,
		selection: {
			enabled: false,
		},
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			dataLabels: {
				total: {
					enabled: true,
					formatter: (value: number) => value.toFixed(2),
				},
			},
		},
	},
	xaxis: {
		categories: expenses[index.value]?.categories,
		title: {
			text: selectedYear.value,
		}
	},
	yaxis: {
		labels: {
			formatter: (value: number) => `$${value.toFixed(2)}`,
		},
	},
	legend: {
		position: 'right',
		showForSingleSeries: true,
		width: 180,
	},
	tooltip: {
		x: {
			formatter: (label: string) => `${months.toLong(label)}, ${selectedYear.value}`,
		}
	},
	responsive: [
		{
			breakpoint: 700,
			options: {
				legend: {
					position: 'bottom',
					width: undefined,
				}
			}
		}
	]
}));
</script>

<template>
	<NavBar />
	<PanoramaBar />
	<main>
		<PageHeading>Transparency</PageHeading>
		<section>
			<p>Wilderzone.org is run by the Tribes: Ascend community, for the Tribes: Ascend community. As such, all of our operations are transparent. Feel free to reach out to any of the folks listed below if you have any questions.</p>

			<section aria-labelledby="admins">
				<div class="heading-row">
					<h2 id="admins">Admins</h2>
				</div>
				<ul class="contact-chips">
					<li>
						<a href="https://discordapp.com/users/210305632266485760" target="_blank" rel="noreferrer">
							<img src="./assets/giga.png" alt="">
							<div class="name">Giga</div>
							<div class="handle">@_giga</div>
						</a>
					</li>
				</ul>
			</section>

			<section aria-labelledby="status">
				<div class="heading-row">
					<h2 id="status">Service Status</h2>
					<IconLink href="https://status.wilderzone.org/" icon="pajamas:status-health" external>Details</IconLink>
				</div>
				<iframe
					class="status-summary"
					src="https://status.wilderzone.org/summary"
					frameborder="0"
					title="Status summary for all Wilderzone services."
				></iframe>
			</section>

			<section aria-labelledby="expenses">
				<div class="heading-row">
					<h2 id="expenses">Expenses (NZD)</h2>
					<select name="year" v-model="selectedYear">
						<option v-for="year of years" :value="year">{{ year }}</option>
					</select>
				</div>
				<div class="chart-area">
					<ClientOnly fallback-placeholder="Loading chart...">
						<apexchart
							type="bar"
							:height="chartHeight"
							:options="chartOptions"
							:series="expensesSeries"
						/>
					</ClientOnly>
				</div>
			</section>

			<section aria-labelledby="donations">
				<div class="heading-row">
					<h2 id="donations">Donations (NZD)</h2>
					<IconLink href="https://ko-fi.com/wilderzone" icon="bxs:donate-heart" external>Donate</IconLink>
				</div>
				<div class="chart-area">
					<ClientOnly fallback-placeholder="Loading chart...">
						<apexchart
							type="bar"
							:height="chartHeight"
							:options="chartOptions"
							:series="donationsSeries"
						/>
					</ClientOnly>
				</div>
			</section>

			<section aria-labelledby="ledger">
				<div class="heading-row">
					<h2 id="ledger">Ledger</h2>
				</div>
				<ol class="ledger">
					<li v-for="entry of ledger">
						<time>{{ entry.date }}</time>
						<p>{{ entry.content }}</p>
					</li>
				</ol>
			</section>

			<section aria-labelledby="development">
				<div class="heading-row">
					<h2 id="development">Development</h2>
					<IconLink href="https://github.com/wilderzone" icon="majesticons:lightbulb-shine" external>Contribute</IconLink>
				</div>
				<p>At Wilderzone.org, we create open-source software. All software projects have their source code published<sup class="dagger">†</sup> to <a href="https://github.com/wilderzone" target="_blank" rel="noreferrer">our GitHub organization</a> under the MIT license. This makes it easy to find our projects, and means our software will always be free to use.</p>
				<p>We take this approach because we believe:</p>
				<ul>
					<li>Anyone in the Tribes: Ascend community should be free to check out what we're working on. We're making this stuff for you guys, after all. :)</li>
					<li>Anyone should be able to take part in the development of our projects.</li>
					<li>Everyone using our software should be confident that it is safe and free from malware.</li>
					<li>Our projects should continue to exist beyond the lifespan of the organization or the tenure of any one contributor.</li>
				</ul>
				<hr>
				<p>For other types of creative media, Wilderzone.org & the Tribes: Ascend community retain all copyrights<sup class="dagger">‡</sup>, and Wilderzone.org shall distribute the media through the channels and with timing appropriate to the industry the media exists within. This provides protection for media types that are susceptible to DMCA abuse (and similar abuses), and for which this abuse would harm the media, its creator, the project, or the community at large.</p>
				<p>For example, music shall be published to streaming services under the Wilderzone.org brand (or the creator's brand) in advance of the release of its parent project, to protect both the music and project from false DMCA & royalty claims by third parties.</p>
				<p>To keep our projects open and free, this kind of media shall still be made available for download, just with industry-appropriate protections in place.</p>
				<hr>
				<p><span class="dagger">†</span> <i>We may delay the publication of source code when a project is in the early research/planning phases of development, so that we don't spam follower feeds with draft projects.</i></p>
				<p><span class="dagger">‡</span> <i>All third party media used in Wilderzone.org projects belongs to the original copyright holder(s).</i></p>
			</section>

			<section aria-labelledby="ai-policy">
				<div class="heading-row">
					<h2 id="ai-policy">AI Policy</h2>
				</div>
				<p>Since Wilderzone.org exists within the creative media (game development and modding) space, we think it's important to have guidelines on when the use of AI tools is/isn't appropriate. All Wilderzone.org creations adhere to the following rules:</p>
				<ul>
					<li>AI tools must not be used to draft or create any creative works. This includes, but is not limited to: artwork, graphics, textures, models, maps, music, sound effects, video content, story content, wiki content, website copy, dialog, & voice lines.</li>
					<li>Specialized typically-non-generative AI tools (such as those used to perform image upscaling, background removal, stem splitting, etc) may be used so long as the tool does not impact the validity of the source content. For example, an AI background removal tool must only perform rotoscoping, not regenerate or "reimagine" the image's subject on a transparent background.</li>
					<li>AI tools may be used to assist with writing and debugging code. However, the output must be reviewed, tested, and signed off by a human before it is accepted.</li>
					<li>AI code contributions must be clearly visible, through commit messages, co-authorship, or other auditable means.</li>
					<li>Research materials generated by AI (eg, internet search results and summaries) must be validated by a human before informing any decisions.</li>
					<li>Use of any other AI tools not described hereinbefore must be documented in a suitably auditable format.</li>
				</ul>
				<p>We welcome any feedback or corrections related to this policy or our operations in general. :)</p>
			</section>

			<PageEndMarker>
				<p class="page-end-content">Last updated: <a href="https://github.com/wilderzone/wilderzone-org/commits/main/app/pages/transparency" target="_blank" rel="noreferrer"><time>30th of October 2026</time></a></p>
				<p class="page-end-content">That's all. Now go grab some flags!</p>
			</PageEndMarker>
		</section>
	</main>
	<Footer />
</template>

<style scoped>
section {
	width: 100%;
	max-width: var(--content-width);
	margin: 0 auto;
	padding: var(--gap-l) var(--gap-l) 0;
	font-family: "Play", sans-serif;

	& > p:first-of-type {
		margin-block-start: 0;
	}

	& > section {
		margin: var(--gap-l) 0;
		padding: 0 var(--gap-l) var(--gap-l);
		background: var(--color-card-metal);
		border-radius: var(--border-radius-m);

		& > .heading-row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: var(--gap-m);
		}
	}
}

.contact-chips {
	display: flex;
	flex-flow: row wrap;
	gap: var(--gap-m);
	margin: 0;
	padding: 0;
	list-style: none;

	& a {
		display: grid;
		grid-template:
			'image name  ' auto
			'image handle' auto
			/ auto auto;
		align-items: center;
		gap: 0 var(--gap-m);
		padding: var(--gap-s) var(--gap-m) var(--gap-s) var(--gap-s);
		color: var(--color-text);
		text-decoration: none;
		border-radius: var(--border-radius-s);
		transition: var(--transition-s) ease background-color;

		&:is(:focus-visible, :hover) {
			background: var(--color-orange-faint);
		}
	}

	& img {
		grid-area: image;
		height: calc(var(--font-size-l) + var(--font-size-m));
		aspect-ratio: 1;
		border-radius: 50%;
	}

	& .name {
		grid-area: name;
		font-size: var(--font-size-m);
	}

	& .handle {
		grid-area: handle;
		font-size: var(--font-size-s);
	}
}

.status-summary {
	width: 100%;
	height: 110px;
	border-radius: var(--border-radius-s);
}

.chart-area {
	min-height: calc(v-bind(chartHeight) * 1px);
}

select[name="year"] {
	padding: var(--gap-xs) var(--gap-s);
	border-color: var(--color-border);
	border-radius: var(--border-radius-s);
}

.ledger {
	display: flex;
	flex-flow: column nowrap;
	gap: var(--gap-s);
	margin: 0;
	padding: 0;
	list-style: none;

	& li {
		padding: var(--gap-s);
		border-radius: var(--border-radius-s);
		background: #d9d7d4;
	}
}

.dagger {
	&:is(sup) {
		font-size: var(--font-size-xs);
	}

	&:is(span) {
		font-size: var(--font-size-s);
	}
}

hr {
	width: 10em;
}

.page-end-content {
	color: var(--color-text-dim);
	font-size: var(--font-size-s);
	text-align: center;

	&:first-child {
		margin-block-start: 0;
	}

	&:last-child {
		margin-block-end: 0;
	}
}
</style>
