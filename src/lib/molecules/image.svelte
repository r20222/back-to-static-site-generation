<script>
    import { onMount } from 'svelte';
    export let data
    onMount(() =>{
        var buttonLeft = document.querySelector(".control--left")
        var buttonRight = document.querySelector(".control--right")
        var scroller = document.querySelector(".scroller")
        const itemWidth = document.querySelector('img').clientWidth;
        buttonLeft.addEventListener("click", () => {
            scroller.scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'})
        })
        buttonRight.addEventListener("click", () => {
            scroller.scrollBy({left: itemWidth, top: 0, behavior: 'smooth'})
        })
        
    })
</script>
<section>
        <button class="control control--left" title="carrousel scroll left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
        </button>
        <ul class="scroller">
            {#each data as img}
                <li>
                    <picture>
                        <source srcset="{img.image[1].url}" type="image/webp">
                        <img alt="" src="{img.image[0].url}" id="{img.length}" loading="lazy">     
                    </picture>
                </li>
            {/each}
        </ul>
        <button class="control control--right" title="carrousel scroll right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </button>
</section>

<style>
    section {
        grid-area: image;
        width: 100%;
        height: 500px;
        overflow: hidden;
        display: flex;
        position: relative;
    }
    ul {
        width: 100vw;
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        padding: 0;

    }
    li {
        scroll-snap-align: start;
        flex-shrink: 0;
        transform-origin: center center;
        overflow-y: hidden;
        width: 100%;
    }
    picture{
        display: block;
        position: relative;
        height: 100%;
        width: 100%;
    }
    img {
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    button {
        background-color: white;
        border: 1px solid black;
        /* box-shadow: 5px 5px; */
        width: 5em;
        height: 5em;
        border-radius: 5em;
        position: absolute;
        display: block;
        border: 1px white solid;
        z-index: 2;
        top: 50%;
    }
    .control--left{
        left: 0; 
    }
    .control--right{
        right: 0;
    }
</style>