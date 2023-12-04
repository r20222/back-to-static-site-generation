<script>
	import { onMount } from 'svelte';
	export let data;
	let map;
	// console.log(data);
	onMount(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoibWNwaGVuZHJpa3MiLCJhIjoiY2xuYWpkajM3MDRvNzJxbzdjbGg1YXc0MiJ9.mRRivdosZVdSXQ9FDd0ZwA';
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/light-v11',
			zoom: 2,
			center: [-103.5917, 40.6699]
		});

		const riverGeoData = data.riverDataJson.systems.map((rivers) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [rivers.longitude, rivers.latitude]
			},
			properties: rivers
		}));

		const oceanGeoData = data.oceanDataJson.systems.map((ocean) => ({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [ocean.longitude, ocean.latitude]
			},
			properties: ocean
		}));

		map.on('load', () => {
			map.addSource('points', {
				type: 'geojson',
				data: {
					type: 'FeatureCollection',
					features: oceanGeoData.concat(riverGeoData)
				}
			});

			map.addLayer({
				id: 'systems-points',
				type: 'circle',
				source: 'points',
				paint: {
					'circle-radius': 10,
					'circle-color': [
						'match',
						['get', 'status'],
						'in_operation',
						'#84CE5F',
						'in_maintenance',
						'#143653',
						'installed_for_testing',
						'#6CCDE1',
						'contract_signed',
						'#B0B0B0',
						'planned',
						'#B0B0B0',
						'#B0B0B0' // Default color
					]
				}
			});
		});
		map.on('click', 'systems-points', (e) => {
			const properties = e.features[0].properties;
			console.log('Clicked properties:', properties);
			alert('Clicked properties: ' + JSON.stringify(properties));
		});
	});

	const getStatusColor = (status) => {
		switch (status) {
			case 'in_operation':
				return '#84ce5f';
			case 'in_maintenance':
				return '#5cc8de';
			case 'installed_for_testing"':
				return '#b0b0b0';
			case 'planned"':
				return '#b0b0b0';
			case 'contract_signed"':
				return '#b0b0b0';
			default:
				return 'black';
		}
	};
</script>

<section id="map">
	<section class="container-dropdown">
		<details class="dropdown">
			<summary class="for-dropdown">Filter on Systems:</summary>
			<div>
				<details class="dropdown-sub">
					<summary class="for-dropdown-sub">System River</summary>
					{#each data.dataHygraph.dashboard.river as item, index}
						<ul>
							<li>
								<a href="/interceptor?id={item.slug}">
									{data.riverDataJson.systems[index].name}
								</a>
								<span
									style="background: {getStatusColor(data.riverDataJson.systems[index].status)}"
								/>
							</li>
						</ul>
					{/each}
				</details>
				<details class="dropdown-sub">
					<summary class="for-dropdown-sub">System Ocean</summary>
					<ul>
						<li>
							<a href="/oceanSystem">
								{data.oceanDataJson.systems[0].name}
							</a>
							<span style="background: {getStatusColor(data.oceanDataJson.systems.status)}" />
						</li>
					</ul>
				</details>
			</div>
		</details>
	</section>
</section>

<style>
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.5);
		}
		100% {
			transform: scale(1);
		}
	}

	.pulsating-circle {
		animation: pulse 2s ease-in-out infinite; /* Adjust duration or easing as needed */
	}

	#map {
		position: relative;
		width: 100%;
		height: 500px;
	}
	.container-dropdown {
		max-width: 300px;
		margin: 1rem;
		z-index: 1;
		position: relative;
		text-transform: uppercase;
		font-weight: 600;
		color: #143653;
		list-style: none;
		font-size: 1.5rem;
	}

	section div {
		margin-top: 1rem;
		background-color: #fff;
		border: 1.5px solid #5cc8de;
		border-radius: 0.5rem;
		max-height: 435px;
		overflow: auto;
	}
	.dropdown {
		cursor: pointer;
	}

	.for-dropdown {
		width: 200px;
		list-style: none;
		border-radius: 0.5rem;
		background-color: #5cc8de;
		padding: 1rem;
	}
	.dropdown-sub {
		margin-top: 1rem;
		padding: 1rem;
	}

	.for-dropdown-sub {
		list-style: none;
	}

	section ul {
		padding-inline-start: 0;
	}
	section ul:hover {
		border-bottom: 1.5px solid #5cc8de;
	}

	section li {
		padding: 0 1rem;
		list-style: none;
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid white;
	}

	section a {
		color: #143653;
		text-decoration: none;
	}

	a:focus {
		color: #5cc8de;
		outline: none;
	}

	section span {
		background: black;
		border-radius: 50%;
		width: 1.5rem;
		height: 1.5rem;
		display: inline-block;
	}
</style>
