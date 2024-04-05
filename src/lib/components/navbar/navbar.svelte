<div class="navbar glass-bg">
    <div class="main-icon"></div>
    <div class="buttons-container">
        <button class="button primary">Home</button>
        <button class="button secondary">About</button>
        <button class="button secondary">Skills</button>
        <button class="button secondary">Experience</button>
        <button class="button secondary">Projects</button>
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
