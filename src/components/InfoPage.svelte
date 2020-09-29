<script>
    export let title = "";
</script>

<div>
    <h2>{title}</h2>
    <slot name="content"></slot>
</div>

<style>
    div :global(a) {
        outline: none;
        text-decoration: none;
        padding: 2px 1px 0;
    }
    div :global(a:link) {
        color: #265301;
    }
    div :global(a:visited) {
        color: #437A16;
    }
    div :global(a:focus) {
        border-bottom: 1px solid;
        background: #BAE498;
    }
    div :global(a:hover) {
        border-bottom: 1px solid;
        background: #CDFEAA;
    }
    div :global(a:active) {
        background: #265301;
        color: #CDFEAA;
    }
</style>
