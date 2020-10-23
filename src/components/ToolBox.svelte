<script>
import VirtualList from './VirtualList.svelte';
import items from './data.js';
import ListItem from './ListItem.svelte';

let searchTerm = "";

$: filteredList = items.filter(item => item.name.toUpperCase().indexOf(searchTerm.toUpperCase()) !== -1);

let start;
let end;
</script>

<style>
    .container {
        padding: 5px;
        margin: 5px;
        min-height: 200px;
        height: calc(100vh - 25em);
    }

    input, button, select, textarea {
        font-family: inherit;
        font-size: inherit;
        margin: 0 0 0.5em 0;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 2px;
    }

    input[type="search" i] {
        box-sizing: border-box;
        padding: 1px 2px;
    }

    .search {
        display: flex;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
        height: 75px;
    }

    .border {
        border: 3px dashed #333333;
        border-radius: 12px;
    }

    p {
        text-align: center;
    }
</style>

<div class="border">
    <input type="search" bind:value={searchTerm} placeholder="Search for a Tool..." class="search" />

    <div class='container'>
        <VirtualList items={filteredList} bind:start bind:end let:item>
            <ListItem {...item}/>
        </VirtualList>
        <p>{start}-{end}</p>
    </div>
</div>