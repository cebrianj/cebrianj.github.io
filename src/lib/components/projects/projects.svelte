<div class="projects-container">
  <div class="card glass-bg project">
    <div class="project-image">
      <img src="projects/portfolio.png" />
    </div>
    <p class="project-title">
      PORTFOLIO <a
        class="icon github"
        href="//github.com/cebrianj/cebrianj.github.io"
      >
      </a>
    </p>
    <p class="project-description">
      A dynamic website developed with Svelte, serving as my ever-evolving
      portfolio where I will share my projects and achievements
    </p>
  </div>

  <div class="card glass-bg project">
    <div class="project-image">
      <img class="no-crop" src="projects/minesweeper.png" />
    </div>
    <p class="project-title">
      MINESWEEPER <a
        class="icon github"
        href="//https://github.com/cebrianj/Minesweeper"
      >
      </a>
    </p>
    <p class="project-description">
      Python Minesweeper project showcases modular development, terminal UI
      creation, extensible design, and advanced algorithms, emphasizing
      separation of game logic and visual display
    </p>
  </div>

  <div class="card glass-bg project">
    <div class="project-image skeleton"></div>
    <p class="project-title skeleton"></p>
    <p class="project-description skeleton"></p>
  </div>
</div>

<style>
  .projects-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: var(--section-inner-gap);
    color: var(--color-primary);
  }

  .project {
    flex: 1 1 350px;
    max-width: 350px;
    height: 300px;
    overflow: hidden;
    transition: all 1s;
  }

  .project:hover {
    transform: scale(1.1);
  }

  .project-image {
    width: 100%;
    height: 100px;
    position: absolute;
    margin-top: calc(0px - var(--card-padding-y));
    margin-left: calc(0px - var(--card-padding-x));
    margin-right: calc(0px - var(--card-padding-x));
    overflow: hidden;
  }

  .project-image img {
    position: absolute;
    width: 100%;
    top: -50%;
  }

  .project-image img.no-crop {
    position: absolute;
    width: 100%;
    height: 100px;
    top: 0;
  }

  .project-title {
    margin-top: 110px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    height: 1em;
    font-family: "League Spartan";
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-primary);
  }

  .project-title .icon {
    width: 0.9em;
    height: 0.9em;
    display: inline-block;
    background-size: contain;
  }

  .icon.github {
    background-image: url("/icons/icon-github.svg");
  }

  .project-description {
    margin-top: 30px;
    text-align: center;
    width: 100%;
    height: 3.3em;
    font-size: 0.8rem;
    font-family: "Istok Web";
    text-align: justify;
    color: var(--color-primary-75-opacity);
  }

  .skeleton {
    -webkit-animation: skeleton-loading 1s linear infinite alternate;
    animation: skeleton-loading 1s linear infinite alternate;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: var(--color-primary-50-opacity);
    }
    100% {
      background-color: var(--color-primary-25-opacity);
    }
  }
</style>
