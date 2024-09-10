<script>
    import ProfileImg from "./ProfileImg.svelte";
    export let summary
</script>

<div class="about">
    <div class="profile-img">
        <ProfileImg/>
    </div>
    <p>{summary}</p>
</div>

<style>
    .about {
        padding: 0.5em 2em 1em;
    }

    .profile-img {
      display: none;
    }

    @media screen and (max-width: 892px) {
        .about {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 1em;
        }

        .profile-img {
            display: block;
        }
    }

    @media screen and (max-width: 768px) {
        .profile-img {
            display: none;
        }
    }
</style>