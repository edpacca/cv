<script>
    export let extraClass = ""
   const profileImgPath = "assets/profile2024_small.png"
</script>


<img src={profileImgPath} alt="Eddie Pace" class="profile-img {extraClass}"/>

<style>
    .profile-img {
        border-radius: 0.5em;
        height: var(--profile-img-height);
        width: var(--profile-img-height);
    }

    @media screen and (max-width: 768px) {
        .profile-img {
            height: 12em;
            width: 12em;
        }
    }
</style>