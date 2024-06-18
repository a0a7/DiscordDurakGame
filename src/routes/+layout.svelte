<script>
	import '../app.css';
</script>

<slot></slot>

<style lang="postcss">
    :global(body) {
		background-color: #1F2B3F;
		background-image: url('background_tile.png');
        background-repeat: repeat;
		margin: 0px;
        padding: 0px;
        border: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
	}
</style>
