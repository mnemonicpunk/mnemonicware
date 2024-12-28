<script>
    export let data;
</script>

<div class="background">
    <div class="content">
        <slot />
    </div>
</div>

<style>
    :global(body) { /* this will apply to <body> */ margin: 0; padding: 0; }

    /* Gradient background with darker neon/synthwave colors */
    .background {
        background: linear-gradient(to bottom, #204e79, #302b63, #24243e); /* Synthwave-style */
        min-height: 100vh;
        display: flex;
        flex-direction: column; /* Arrange content vertically */
        align-items: center;
        margin: 0;
        font-family: 'Roboto', sans-serif; /* General font */
    }

    /* Main content container */
    .content {
        color: #fff;
        background: rgba(30, 30, 30, 0.9); /* Darker semi-transparent foreground */
        border-radius: 22px;
        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5); /* Stronger shadow for depth */
        max-width: 1280px;
        padding: 44px;
        margin: 22px;
        width: calc(100% - 88px); /* Adjust for small margins */
        box-sizing: border-box;
    }
</style>
