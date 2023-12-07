<script>
	import Infotext from '../lib/components/infotext.svelte';
	import TrashRemoved from '../lib/components/trash-removed.svelte';
	import Map from '../lib/components/map.svelte';
	import Trashgraph from '../lib/components/trashGraph.svelte';
	import ChartContinents from '../lib/components/chartContinents.svelte';
	import ChartRiverOcean from '../lib/components/chartRiverOcean.svelte';
	import SystemStatus from '../lib/components/system-status.svelte';
	export let data;
</script>

<svelte:head>
	<title>Dashboard The Ocean Cleanup</title>
</svelte:head>

<section class="main">
	<div class="container2">
		<!-- Blue line -->
		<div class="menu">
			<div class="line" />
		</div>

		<!-- Title + Searchbar -->
		<section class="header-dashboard">
			<h1>{data.dataHygraph.dashboard.title}</h1>
			<!-- R20222 heeft de search uitgecomment -->
			<!-- <form class="search" action="/" method="GET">
				<input type="text" name="search" placeholder="Search.." />
				<input
					type="submit"
					name="search-button"
					aria-label="search button"
					class="search-button"
				/>

			</form> -->
		</section>

		<TrashRemoved data={data.dataApi.totals} text={data.dataHygraph} />

		<!-- Box 3: percentage since 2013 -->
		<section class="panel box-3">
			<ChartRiverOcean {data} />
		</section>

		<!-- Box 4: percentage in 2040 -->
		<section class="panel box-4">
			<h2>Plastic removed per continent</h2>
			<ChartContinents {data} />
		</section>

		<!-- Grafiek: share swith icons -->
		<section class="panel grafiek">
			<Trashgraph {data} />
		</section>

		<section class="map">
			<Map {data} />
		</section>

		<Infotext data={data.dataHygraph.dashboard.infotext} />

		<SystemStatus {data} />

		<!-- More: table more information links -->
		<section class="panel more">
			<h2>More about</h2>
			<table class="table-more">
				<tr class="more-row">
					<td class="more-icon">
						<a href="/" class="more-link">
							<!-- add icon -->
							Our river technology
						</a>
					</td>
					<td class="arrow">
						<!-- add icon -->
					</td>
				</tr>

				<tr class="more-row">
					<td class="more-icon">
						<a href="/" class="more-link">
							<!-- add icon -->
							The economic impact
						</a>
					</td>
					<td class="arrow">
						<!-- add icon -->
					</td>
				</tr>

				<tr class="more-row">
					<td class="more-icon">
						<a href="/" class="more-link">
							<!-- add icon -->
							Plastic sources
						</a>
					</td>
					<td class="arrow">
						<!-- add icon -->
					</td>
				</tr>

				<tr class="more-row">
					<td class="more-icon">
						<a href="/" class="more-link">
							<!-- add icon -->
							Donate
						</a>
					</td>
					<td class="arrow">
						<!-- add icon -->
					</td>
				</tr>

				<span>
					<tr class="more-row">
						<td class="more-icon">
							<a href="/" class="more-link">
								<!-- add icon -->
								Sign up to newsletter
							</a>
						</td>
						<td class="arrow">
							<!-- add icon -->
						</td>
					</tr>
				</span>
			</table>
		</section>
	</div>
</section>
<!-- End main section -->

<!-- Scroll to top button -->
<a href="#top" class="scroll-top" aria-label="scroll to top">
	<!-- add icon -->TOP
</a>

<!-- Footer -->
<footer />

<style>
	/* Proxima font */
	@font-face {
		font-family: 'Proxima';
		src: url('/ProximaNovaFont.otf') format('opentype') weight('normal');
		src: url('/Proxima-Nova-Bold.otf') format('opentype') weight('bold');
	}

	/* Base */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Proxima', sans-serif;
	}

	:root {
		--darkBlue: #143653;
		--trashRemovedBackground: white;
		--lightBlue: #5cc8de;
		--whiteColor: #ffffff;
		--lightGray: #f7f7f7;
		--accentGray: rgb(228, 228, 228);
		--textColor: #143653;
		--boxShadow: rgba(128, 128, 128, 0.132);
		--color: rgb(212, 212, 212);
		--textSize: 1.2rem;
		--iconSize: 2rem;
	}

	/* Als darkmode de standaard instelling is */
	@media (prefers-color-scheme: dark) {
		:root {
			--darkBlue: #ffffff;
			--trashRemovedBackground: #143653;
			--lightBlue: #5cc8de;
			--whiteColor: #143653;
			--lightGray: #0d2437;
			--accentGray: rgb(228, 228, 228);
			--textColor: #ffffff;
			--boxShadow: rgba(128, 128, 128, 0);
			--color: rgb(212, 212, 212);
			--textSize: 1.2rem;
			--iconSize: 2rem;
		}
	}

	:global(html) {
		/* font-size: 62.5%; */
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--lightGray);
		color: var(--textColor);
		position: relative;
	}

	h2 {
		line-height: 1.2;
		font-weight: 500;
		color: var(--darkBlue);
		margin-bottom: 1rem;
	}

	h3 {
		font-size: 1.3rem;
		font-weight: 500;
	}

	a {
		text-decoration: none;
	}

	/* Grid */
	.container2 {
		margin: 8rem 1.5rem 1.5rem 1.5rem;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		/* grid-template-rows: 0.01fr 0.1fr 1fr 1fr 0.5fr 0.8fr 0.5fr 0.5fr 1fr ; */
		gap: 1.2rem;
		grid-template-areas:
			'menu menu'
			'header-dashboard header-dashboard'
			'box-1 box-2'
			'dashboard-info dashboard-info'
			'map map'
			'share share'
			'box-3 box-3'
			'box-4 box-4'
			'grafiek grafiek'
			'more more';
	}

	.panel {
		border-radius: 0.5rem;
		padding: 1.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}

	/* Grid areas */
	.header-dashboard {
		display: flex;
		justify-content: space-between;
		grid-area: header-dashboard;
	}

	.menu {
		grid-area: menu;
	}

	.grafiek {
		grid-area: grafiek;
	}

	.map {
		grid-area: map;
		border-radius: 0.5rem;
		padding: 0.5rem;
		background-color: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		transition: 0.2s;
	}

	.box-3 {
		grid-area: box-3;
	}

	.box-4 {
		grid-area: box-4;
	}

	.share {
		grid-area: share;
	}

	.more {
		grid-area: more;
	}

	/* line */
	.line {
		height: 2px;
		width: 18%;
		background-color: var(--lightBlue);
	}

	/* dashboard H1 */
	h1 {
		line-height: 1.2;
		font-weight: 500;
		text-transform: uppercase;
		color: var(--darkBlue);
	}
	.header-dashboard h1 {
		font-size: 2rem;
	}

	/* boxes styling */
	.box-3,
	.box-4 {
		font-size: 1.6rem;
		color: var(--lightBlue);
	}

	.box-3,
	.box-4,
	h2 {
		font-size: 1.6rem;
		color: var(--darkBlue);
	}

	/* more styling */
	.more-link {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 2rem;
		color: var(--textColor);
		font-size: 1.5rem;
		text-transform: capitalize;
	}

	.more-link:hover {
		color: var(--lightBlue);
	}

	.more-icon {
		font-size: 1.8rem;
		color: var(--lightBlue);
	}

	.table-more {
		border-collapse: collapse;
	}

	.more-row {
		border-bottom: 0.5px solid var(--accentGray);
		height: 4rem;
	}

	.arrow {
		text-align: right;
	}

	/* search bar */
	.search {
		display: flex;
		gap: 0.5rem;
	}
	.search-button {
		max-width: 8rem;
	}
	.search input {
		width: 130px;
		height: 25px;
		border-radius: 5px;
		outline: none;
		padding-left: 0.5rem;
		background: var(--whiteColor);
		box-shadow: var(--boxShadow) 0px 0px 8px;
		border: none;
		color: var(--textColor);
	}

	.search input::placeholder {
		color: var(--darkBlue);
		font-size: 1.3rem;
	}

	/* Scroll to top */
	.scroll-top {
		position: absolute;
		bottom: 1%;
		right: 2%;
		width: 3rem;
		height: 3rem;
		padding: 0.5rem;
		background-color: var(--lightBlue);
		color: var(--whiteColor);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	@keyframes progress {
		0% {
			stroke-dasharray: 0 100;
		}
	}

	@media (min-width: 700px) {
		.container2 {
			margin: 8rem 1.5rem 1.5rem 1.5rem;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr .5fr 1fr 1fr 1fr 1fr; */
			gap: 1.2rem;
			grid-template-areas:
				'menu menu menu menu'
				'header-dashboard header-dashboard header-dashboard header-dashboard'
				'box-1 box-1 box-2 box-2'
				'dashboard-info dashboard-info map map'
				'dashboard-info dashboard-info map map'
				'share share share share'
				'box-3 box-3 box-4 box-4'
				'grafiek grafiek grafiek more';
		}
	}

	@media (min-width: 992px) {
		.container2 {
			margin: 3rem 2rem 2rem 18rem;
			grid-template-columns: repeat(6, 1fr);
			/* grid-template-rows: 0.01fr 0.1fr 0.3fr 0.4fr 0.4fr 0.6fr; */
			grid-template-areas:
				'menu menu menu menu menu menu'
				'header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard header-dashboard'
				'box-1 box-1 box-1 box-2 box-2 box-2'
				'dashboard-info dashboard-info map map map map'
				'share share share share share share'
				'box-3 box-3 box-3 box-4 box-4 box-4'
				'grafiek grafiek grafiek more more more';
		}
	}

	/* Breakpoints large screen */
	@media (min-width: 1200px) {
		.more {
			grid-area: more;
		}

		.panel {
			padding: 2rem;
		}

		.map {
			padding: 1.5rem;
		}

		.box-4 {
			font-size: 3rem;
		}

		.box-3 {
			font-size: 2.5rem;
		}

		.box-3,
		.box-4,
		h2 {
			font-size: 1.5rem;
		}

		.more h2 {
			font-size: 1.8rem;
		}

		.share h2 {
			font-size: 1.8rem;
		}

		.line {
			height: 2px;
			width: 6%;
			background-color: var(--lightBlue);
		}

		.search input {
			width: 190px;
		}

		.scroll-top {
			display: none;
		}

		.amount h4 {
			color: var(--lightBlue);
			font-weight: 500;
			font-size: 1.8rem;
		}

		h3 {
			font-size: 1.5rem;
		}

		tr {
			height: 3.3rem;
		}
	}
</style>
