<script>
    export let extraClass = ""
   const profileImgPath = "assets/profile2024_small.png"
   const testImgPath = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png"
</script>


<!-- <img src={profileImgPath} alt="Eddie Pace" class="profile-img {extraClass}"/> -->
<img src={testImgPath} alt="square" class="profile-img {extraClass}"/>

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