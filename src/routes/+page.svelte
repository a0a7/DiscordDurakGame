<script lang="ts">
    import { onMount } from "svelte";
    import { DiscordHelper } from "$lib/utils/DiscordHelper";
    import { config } from "$lib/config";

    let discordHelper: DiscordHelper;

    onMount(() => {
        discordHelper = new DiscordHelper();
        discordHelper.setupParentIframe();
    });
</script>