<script lang="ts">
  import { SectionType } from "$lib/model/section-type";
  import { createEventDispatcher } from "svelte";

  const eventDispatcher = createEventDispatcher();
  const sectionTypes = Object.values(SectionType);
  $: currentTypeSection = SectionType.ABOUT;

  function onSectionClick(section: SectionType) {
    currentTypeSection = section;
    eventDispatcher("selectedSectionChange", section);
  }
</script>

<div class="navbar glass-bg">
  <div class="main-icon"></div>
  <div class="buttons-container">
    {#each sectionTypes as sectionType}
      <button
        class="button {sectionType === currentTypeSection
          ? 'primary'
          : 'secondary'}"
        on:click={() => onSectionClick(sectionType)}
      >
        {sectionType}
      </button>
    {/each}
  </div>
  <button class="button tertiary">English</button>
</div>

<style>
  .navbar {
    z-index: 99;
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--navbar-height);
    color: var(--color-primary);
    padding: var(--padding-small) var(--padding-big);
    flex-wrap: wrap;
    gap: 20px;

    -webkit-box-shadow: 0px 3px 10px 0px var(--color-tertiary-50-opacity);
    -moz-box-shadow: 0px 3px 10px 0px var(--color-tertiary-50-opacity);
    box-shadow: 0px 3px 10px 0px var(--color-tertiary-50-opacity);
  }

  .navbar * {
    font-size: 1rem;
    font-family: "League Spartan";
  }

  .main-icon {
    background-image: url("/main-icon.svg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 2.188rem;
    width: 2.5rem;
  }

  .buttons-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 70%;
  }
</style>
