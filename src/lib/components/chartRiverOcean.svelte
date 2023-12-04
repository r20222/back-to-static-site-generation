<script>
	// import { onMount } from 'svelte';
	import SvgPlasticBottle from '../atoms/plastic-bottle-svg.svelte';

	export let data;

		console.log(data)
	// data.riverDataJson.systems.forEach( system => {
	// 	totalTrashKgRiver.push(system.debris_extracted_total)
	// });

	let totalTrashKgRiver = 0;
	for (let i = 0; i < data.riverDataJson.systems.length; i++) {
		if (data.riverDataJson.systems[i] !== null) {
			totalTrashKgRiver += data.riverDataJson.systems[i].debris_extracted_total;
		} else {
			i++;
		}
	}
</script>

<!-- * needs dynamic content -->
<!-- 1 = atom -->
<!-- 2 = molecule -->
<!-- 3 = organism -->

<h2>{data.dataHygraph.dashboard.chartRiverOcean.titel}</h2>
<!-- * -->

<!-- show more info -->
<!-- 2 -->
<section>
	<details aria-label="more-info-ocean-cleanup" class="more-info-systems">
		<summary>More info</summary>
		<p>
			We named our company "The Ocean Cleanup" but a lot of plastic finds its way into the ocean via
			rivers first. To prevent the plastic from reaching the ocean, we've put inceptors in the most
			polluting rivers.
		</p>
		<a href="interceptor?id=100">Learn more</a>
	</details>
</section>

<!-- 2x SVG bottle graph  -->
<div class="wrapper-graph-ocean-river">
	<section class="wrapper-ocean-trash-removed">
		<!-- style="--percentageBeforeAnimation:{percentage}" -->
		<a href="/oceanSystem"><SvgPlasticBottle /></a>

		<div>
			<h3>Ocean ..% <!-- {percentage} --></h3>

			<details class="more-info-ocean">
				<!-- 2 -->
				<summary>More info</summary>
				<p>
					The total amount of plastic removed by The Ocean Cleanup is {new Intl.NumberFormat().format(
						data.dataApi.totals.debris_extracted_total
					)} kg. The amount of plastic that is removed by the ocean system is {new Intl.NumberFormat().format(
						data.oceanDataJson.systems[0].debris_extracted_total
					)} kg. This means ..% of the total amount of collected trash comes from the ocean.
				</p>
				<a href="/oceanSystem">To the ocean system</a>
			</details>
		</div>
	</section>

	<section class="wrapper-river-trash-removed">
		<a href="/interceptor?id=100"><SvgPlasticBottle /></a>

		<div>
			<h3>River ..%</h3>
			<!-- {percentage} -->

			<details class="more-info-river">
				<!-- 2 -->
				<summary>More info</summary>
				<p>
					The total amount of plastic removed by The Ocean Cleanup is {new Intl.NumberFormat().format(
						data.dataApi.totals.debris_extracted_total
					)} kg. The amount of plastic removed by all river systems combined is {new Intl.NumberFormat().format(
						totalTrashKgRiver
					)} kg. This means ..% of the total amount of collected trash comes from rivers.
				</p>
				<a href="/interceptor?id=100"> To river systems</a>
			</details>
		</div>
	</section>
</div>

<style>

	/* SVG */
	.wrapper-graph-ocean-river {
		width: 100%;
		padding: 2em 0;
		display: flex; /* @media flex */
		gap: 2em;
		justify-content: space-around;
	}

	.wrapper-ocean-trash-removed {
		/* border: 1px solid lightblue; */
	}

	.wrapper-river-trash-removed {
		/* border: 1px solid hotpink; */
	}

	.wrapper-river-trash-removed,
	.wrapper-ocean-trash-removed {
		display: flex;
		flex-direction: column;
		gap: 2em;
		align-items: center;
		justify-content: center;
		padding: 0 0 2rem 0;
	}

	/* DETAILS */
	details {
		cursor: pointer;
	}

	details > summary:hover {
		transform: scale(1.1);
		background-color: var(--lightBlue);
	}

	details > summary:active {
		/* show <p> show less</p> */
		background-color: var(--darkBlue);
		color: var(--accentGray);
		translate: 0 2px;
		transition: .4s;
	}

	details > summary {
		padding: 1em 0.7em;
		width: 8em;
		background-color: #f0efef;
		box-shadow: 5px 5px 5px rgb(195, 192, 192);
		display: flex;
		flex-direction: column;
	}

	details > p {
		line-height: 1.6em;
	}

	details > a {
		/* border: solid 1px black; */
		box-shadow: 5px 5px 5px rgb(195, 192, 192);
		background-color: #f0efef;
		padding: 1em 0.5em;
		margin: 0;
		text-decoration: none;
		color: var(--textColor);
	}

	details > a:hover {
		/* transform: scale(1.1); */
		background-color: var(--lightBlue);
	}

	details > a:active {
		background-color: var(--darkBlue);
		color: var(--accentGray);
		translate: 0 2px;
		transition: .4s;
	}

	/* SVG animations */

	/* Container/media queries */

	/*  */
</style>
