<script>
    export let name;
    export let content;
    export let link;
</script>

<div class='card'>
    <a href="/tools/{link}">
    <h2>{name}</h2>
<!--        <h6>{link}</h6>-->
    </a>
    <p>{content}</p>
</div>

<style>
    * {
        text-align: center;
    }
    .card {
        position: relative;
        margin: 0.5em;
        padding: 0.5em;
        border: 1px solid #eee;
        border-radius: 4px;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        min-height: 5em;
    }

    .card::after {
        clear: both;
        display: block;
    }

    h2 {
        margin: 0;
        text-align: center;
        font-size: 1.25em;
    }

    h6 {
        margin: 0;
        padding: 0;
    }

    p {
        margin: 1em;
        font-size: 14px;
    }

    a {
        text-decoration: none;
        color: dodgerblue;
    }

    a:hover {
        text-decoration: underline;
    }
</style>