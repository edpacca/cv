<script>
import IconText from "./IconText.svelte";
</script>

<div class="top">
    <div>
      <div class="title1">Header Header</div>
      <div class="title2">Sub header</div>
    </div>
    <div class="portfolio-info">
      <IconText
        alt={"github"}
        text={"Edpacca"}
        icon={"/assets/github.svg"}
        link={"https://github.com/edpacca"}/>
      <IconText
        alt={"linkedin"}
        text={"Edward Pace"}
        icon={"/assets/linkedin.svg"}
        link={"https://www.linkedin.com/in/edward-pace-ab88a971/"}/>
    </div>
</div>
<div class="contact-info">
  <IconText
    alt={"email"}
    text={"edwardjpace@gmail.com"}
    icon={"/assets/mail.svg"}/>
  <IconText
    alt={"phone"}
    text={"+44 7305 159 528"}
    icon={"/assets/phone.svg"}/>
  <IconText
    alt={"address"}
    text={"30/3 Lutton Pl. Edinburgh EH8 9PG"}
    icon={"/assets/home.svg"}/>
</div>

<style>
  .top {
    display: grid;
    grid-template-columns: 9fr 2fr;
    margin-bottom: 0.5em;
  }

  .portfolio-info {
    align-items: center;
    font-weight: 600;
  }

  .contact-info {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    column-gap: 1.5em;
    align-items: center;
    font-weight: 600;
  }

  .title1 {
    font-size: 2em;
    font-weight: 130;
  }

  .title2 {
    font-size: 1.5em;
    font-weight: lighter;
    margin-top: -0.3em;
  }
</style>
