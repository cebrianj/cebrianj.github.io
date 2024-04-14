<script lang="ts">
  export let title = "";
  export let sectionId: string = "";
  export let iconUrl = "";
  export let reverse = false;
</script>

<div class="section">
  <div class="title-container" class:reverse id={sectionId}>
    <div class="title">{title}</div>
    <div class="icon" style="background-image: url({iconUrl})"></div>
  </div>

  <div class="content">
    <slot />
  </div>
</div>

<style>
  .section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--section-title-content-gap);
    min-height: calc(100lvh - var(--navbar-height));
  }

  @media (prefers-reduced-motion: no-preference) {
    .section {
      scale: 0.2;
      animation: fade-in linear forwards;
      animation-timeline: view();
      animation-range: entry 10% entry 80%;
    }
    @keyframes fade-in {
      100% {
        scale: 1;
      }
    }
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--border-color);
    border-collapse: collapse;
    position: relative;
    padding: 0.2rem var(--section-padding);
  }

  .content {
    padding: 0 var(--section-padding);
    display: flex;
    flex-direction: column;
    gap: var(--section-inner-gap);
  }

  .title-container.reverse {
    flex-direction: row-reverse;
  }

  .title-container::before {
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 8px solid var(--color-primary);
    bottom: calc(0rem - 0.2rem - 5px);
    left: 0px;
    content: "";
  }
  .title-container.reverse::before {
    right: 0px;
    left: auto;
  }

  .title-container.reverse::before {
    rotate: 180deg;
  }

  .title-container * {
    color: var(--color-primary);
    font-family: "League Spartan";
    font-weight: 600;
    font-size: 2rem;
    text-transform: uppercase;
  }

  .icon {
    background-size: contain;
    background-repeat: no-repeat;
    height: 3rem;
    width: 3rem;
  }
</style>
