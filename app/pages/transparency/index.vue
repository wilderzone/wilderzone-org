<script setup lang="ts">
import { donations, expenses, ledger, months } from '~/data/expenses';

const years = ref(expenses.map(entry => String(entry.year)));
const selectedYear = ref(years.value[0]);
const index = computed(() => expenses.findIndex(group => String(group.year) === selectedYear.value));
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
}));

const donationsSeries = computed(() => donations[index.value]?.series ?? []);
const expensesSeries = computed(() => expenses[index.value]?.series ?? []);
</script>

<template>
	<NavBar />
	<PanoramaBar />
	<main>
		<section>
			<h1>Transparency</h1>
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

			<section aria-labelledby="expenses">
				<div class="heading-row">
					<h2 id="expenses">Expenses (NZD)</h2>
					<select v-model="selectedYear">
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
		</section>
	</main>
	<Footer />
</template>

<style scoped>
section {
	width: 100%;
	max-width: var(--content-width);
	margin: var(--gap-l) auto var(--gap-xl);
	padding: var(--gap-l);
	font-family: "Play", sans-serif;

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

.chart-area {
	min-height: calc(v-bind(chartHeight) * 1px);
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
</style>
