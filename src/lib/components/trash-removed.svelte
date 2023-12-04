<script>
    export let data
    export let text
</script>

<section class="box-1">
    <h2>{new Intl.NumberFormat().format(data.debris_extracted_total)} KG</h2>
    <p>{text.dashboard.trashRemoved.total}</p>
</section>

<section class="box-2">
    <h2>{new Intl.NumberFormat().format(data.debris_extracted_last_30d)} KG</h2>
    <p>{text.dashboard.trashRemoved.month}</p>
</section>

<style>
    section {
        border-radius: .5rem;
        padding: 1.5rem;
        background-color: var(--trashRemovedBackground);
        box-shadow: var(--boxShadow) 0px 0px 8px;
        transition: .2s;
        /* border: 20px solid var(--lightBlue) */
    }
    .box-1 {
        grid-area: box-1;
    }

    .box-2 {
        grid-area: box-2;
    }
</style>