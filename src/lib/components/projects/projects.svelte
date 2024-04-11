<div class="projects-container">
  <div class="card glass-bg project">
    <div class="project-image skeleton"></div>
    <p class="project-title skeleton"></p>
    <p class="project-description skeleton"></p>
  </div>
  <div class="card glass-bg project">
    <div class="project-image skeleton"></div>
    <p class="project-title skeleton"></p>
    <p class="project-description skeleton"></p>
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
    flex: 1 1 300px;
    max-width: 300px;
    height: 250px;
    overflow: hidden;
  }

  .project-image {
    width: 100%;
    height: 100px;
    position: absolute;
    margin-top: calc(0px - var(--card-padding-y));
    margin-left: calc(0px - var(--card-padding-x));
    margin-right: calc(0px - var(--card-padding-x));
  }

  .project-title {
    margin-top: 100px;
    text-align: center;
    width: 100%;
    height: 2em;
  }

  .project-description {
    margin-top: 20px;
    text-align: center;
    width: 100%;
    height: 3.3em;
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
