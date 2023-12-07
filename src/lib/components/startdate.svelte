<script>
    export let text
    export let data
    console.log(data)
</script>

<section>
    <h2>{data.name} {text.title}</h2>
    <!-- <p>{new Intl.DateTimeFormat().format(data.date)}</p> -->
</section>

<style>
    section {
        grid-area: dashboard-info-startdate;
        border-radius: .5rem;
        padding: 1.5rem;
        background-color: var(--whiteColor);
        box-shadow: var(--boxShadow) 0px 0px 8px;
        transition: .2s;
    }
    p {
        font-size: 1.3rem;
        line-height: 1.4;
        color: var(--textColor);
        margin-top: 0.5rem;
        font-family: 'Proxima', sans-serif;
    }
</style>