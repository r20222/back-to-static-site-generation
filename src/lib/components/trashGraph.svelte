<script>
	import { onMount } from 'svelte';

	export let data;
	let trashdata = data;


	// controle of JS aanstaat in de browser
	let isEnabled = false;
	
	
	// de slice -4 pakt de laatste vier months
	const laatsteVierMaanden = trashdata.dataApi.totals.months.slice(-6);


	// gebruik de Intl browser API om nummers om te zetten in maandnaam
	const monthNames = laatsteVierMaanden.map(item => {
		const date = new Date();
		date.setMonth(item.month - 1); // Maanden zijn zero-based in JavaScript

		return new Intl.DateTimeFormat('nl-NL', { month: 'long' }).format(date);
	});

	
	
	onMount(() => {

		console.log(monthNames[0])


		isEnabled = true;

		// HighchartsMore(Highcharts);

	// Gebruik een setTimeout om ervoor te zorgen dat er wat tijd is om de DOM op te zetten voordat de grafiek wordt geïnitialiseerd
	setTimeout(() => {


		Highcharts.chart('container', {
      chart: {
        type: 'packedbubble',
		// backgroundColor: '#5CC8DE'
      },
	  title: {
    	text: ''
  		},
      plotOptions: {
        packedbubble: {
			maxSize: '100%',
            minSize: '40%'
        }
      },
      series: [{
		name: monthNames[0],
        data: [{
			name: monthNames[0],
			value: laatsteVierMaanden[0].debris_extracted,
			marker: {
            symbol: 'url(/cropped-plastic-bottle-skull-label.png)'
        }
		}]
      }, {
		name: monthNames[1],
        data: [{
			name: monthNames[1],
			value: laatsteVierMaanden[1].debris_extracted,
			marker: {
            symbol: 'url(/cropped-plastic-bottle-skull-label.png)'
        }
		}]
      },{
		name: monthNames[2],
        data: [{
			name: monthNames[2],
			value: laatsteVierMaanden[2].debris_extracted,
			fillColor: 'blue',
			marker: {
            symbol: 'url(/cropped-plastic-bottle-skull-label.png)' 
        }
		}]
      },{
		name: monthNames[3],
        data: [{
			name: monthNames[3],
			value: laatsteVierMaanden[3].debris_extracted,
			marker: {
            symbol: 'url(/cropped-plastic-bottle-skull-label.png)' 
        }
		}]
      },{
		name: monthNames[4],
        data: [{
			name: monthNames[4],
			value: laatsteVierMaanden[4].debris_extracted,
			marker: {
            symbol: 'url(/cropped-plastic-bottle-skull-label.png)'
        }
		}]
      },{
		name: monthNames[5],
        data: [{
			name: monthNames[5],
			value: laatsteVierMaanden[5].debris_extracted,
			marker: {
            symbol: 'url(/cropped-plastic-bottle-skull-label.png)'
        }
		}]
      }]
    });
	}, 100);
});
</script>

<h2>Trash collected over time</h2>
<p>In kilogram</p>



{#if isEnabled}
	<section id="container"></section>
{:else}
	<table >
		<tr>
			<th>{monthNames[0]}</th>
			<td>{laatsteVierMaanden[0].debris_extracted}</td>
		</tr>
		<tr>
			<th>{monthNames[1]}</th>
			<td>{laatsteVierMaanden[1].debris_extracted}</td>
		</tr>
		<tr>
			<th>{monthNames[2]}</th>
			<td>{laatsteVierMaanden[2].debris_extracted}</td>
		</tr>
		<tr>
			<th>{monthNames[3]}</th>
			<td>{laatsteVierMaanden[3].debris_extracted}</td>
		</tr>
	</table>
{/if}

<style>
	:root {
		--darkBlue: #143653;
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
	#container {
    width: 100%;
    height: 500px; 
	font-size: 140%;
    }
	table th{
		display: flex;
		justify-content: start;
	}

</style>
