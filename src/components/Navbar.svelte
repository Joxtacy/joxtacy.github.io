<script>
    export let title = "Title";

    const linkClickHandler = (event) => {
    }
</script>

<nav class="navbar">
    <ul class="navbar-nav">
        <li class="logo">
            <a href="/" on:click|preventDefault={linkClickHandler} class="nav-link">
                <span class="link-text logo-text">{title}</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="angle-double-right"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                    class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                    <g class="fa-group">
                        <path fill="currentColor"
                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                            class="fa-secondary"></path>
                        <path fill="currentColor"
                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            class="fa-primary"></path>
                    </g>
                </svg>
            </a>
        </li>

        <li class="nav-item">
            <a href="/about" class="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="alicorn" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-alicorn fa-w-20 fa-9x"><g class="fa-group"><path fill="currentColor" d="M64.36 215.74A39.94 39.94 0 0 0 48 248v56a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-56a88 88 0 0 1 88-88h.45a95.57 95.57 0 0 0-24.09 55.74zM632 32H531.93a52.6 52.6 0 0 1-10.28 8.3c5.11 5.38 9.91 10.47 13.69 14.5a31.76 31.76 0 0 1 8.58 21.8v6.74l92.49-36.69A8 8 0 0 0 632 32z" class="fa-secondary"></path><path fill="currentColor" d="M535.34 54.8c-3.78-4-8.58-9.12-13.69-14.5 11.06-6.84 19.5-17.49 22.18-30.66A8.09 8.09 0 0 0 535.9 0h-120C346.67 0 288 64 288 128h-.08c-63.92 0-104.2-36.78-127.66-90.27-3.22-7.35-13.61-7.76-17-.5A158.37 158.37 0 0 0 128 105.1c0 67 51 136.25 128 150.9-96.87 0-138.75-73.3-153.39-109a96 96 0 0 0-8.16 147.09l-25.63 68.39a63.94 63.94 0 0 0-2.16 38l24.85 99.41A16 16 0 0 0 107 512h66a16 16 0 0 0 15.52-19.88l-26.33-105.26L186 323.27l102 22.31V496a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V318.22A111.55 111.55 0 0 0 416 240c0-.22-.07-.42-.08-.64V136.89l16 7.11 18.9 37.7a32 32 0 0 0 40.49 15.37l32.55-13A32 32 0 0 0 544 154.31l-.06-77.71a31.76 31.76 0 0 0-8.6-21.8zM479.92 96a16 16 0 1 1 16-16 16 16 0 0 1-16 16z" class="fa-primary"></path></g></svg>
                <span class="link-text">About me</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/aliens" class="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="alien-monster" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                    class="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
                    <g class="fa-group">
                        <path fill="currentColor"
                            d="M560,128H528a15.99954,15.99954,0,0,0-16,16v80H480V176a15.99954,15.99954,0,0,0-16-16H416V96h48a16.00079,16.00079,0,0,0,16-16V48a15.99954,15.99954,0,0,0-16-16H432a15.99954,15.99954,0,0,0-16,16V64H368a15.99954,15.99954,0,0,0-16,16v48H224V80a15.99954,15.99954,0,0,0-16-16H160V48a15.99954,15.99954,0,0,0-16-16H112A15.99954,15.99954,0,0,0,96,48V80a16.00079,16.00079,0,0,0,16,16h48v64H112a15.99954,15.99954,0,0,0-16,16v48H64V144a15.99954,15.99954,0,0,0-16-16H16A15.99954,15.99954,0,0,0,0,144V272a16.00079,16.00079,0,0,0,16,16H64v80a16.00079,16.00079,0,0,0,16,16h48v80a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V432a15.99954,15.99954,0,0,0-16-16H192V384H384v32H336a15.99954,15.99954,0,0,0-16,16v32a16.00079,16.00079,0,0,0,16,16h96a16.00079,16.00079,0,0,0,16-16V384h48a16.00079,16.00079,0,0,0,16-16V288h48a16.00079,16.00079,0,0,0,16-16V144A15.99954,15.99954,0,0,0,560,128ZM224,320H160V224h64Zm192,0H352V224h64Z"
                            class="fa-secondary"></path>
                        <path fill="currentColor" d="M160,320h64V224H160Zm192-96v96h64V224Z" class="fa-primary">
                        </path>
                    </g>
                </svg>
                <span class="link-text">Aliens</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/space" class="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-station-moon-alt"
                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    class="svg-inline--fa fa-space-station-moon-alt fa-w-16 fa-5x">
                    <g class="fa-group">
                        <path fill="currentColor"
                            d="M501.70312,224H448V160H368V96h48V66.67383A246.86934,246.86934,0,0,0,256,8C119.03125,8,8,119.0332,8,256a250.017,250.017,0,0,0,1.72656,28.26562C81.19531,306.76953,165.47656,320,256,320s174.80469-13.23047,246.27344-35.73438A250.017,250.017,0,0,0,504,256,248.44936,248.44936,0,0,0,501.70312,224ZM192,240a80,80,0,1,1,80-80A80.00021,80.00021,0,0,1,192,240ZM384,343.13867A940.33806,940.33806,0,0,1,256,352c-87.34375,0-168.71094-11.46094-239.28906-31.73633C45.05859,426.01953,141.29688,504,256,504a247.45808,247.45808,0,0,0,192-91.0918V384H384Z"
                            class="fa-secondary"></path>
                        <path fill="currentColor"
                            d="M256,320c-90.52344,0-174.80469-13.23047-246.27344-35.73438a246.11376,246.11376,0,0,0,6.98438,35.998C87.28906,340.53906,168.65625,352,256,352s168.71094-11.46094,239.28906-31.73633a246.11376,246.11376,0,0,0,6.98438-35.998C430.80469,306.76953,346.52344,320,256,320Zm-64-80a80,80,0,1,0-80-80A80.00021,80.00021,0,0,0,192,240Zm0-104a24,24,0,1,1-24,24A23.99993,23.99993,0,0,1,192,136Z"
                            class="fa-primary"></path>
                    </g>
                </svg>
                <span class="link-text">Space</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/shuttle" class="nav-link">
                <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="space-shuttle" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                    class="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x">
                    <g class="fa-group">
                        <path fill="currentColor"
                            d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                            class="fa-secondary"></path>
                        <path fill="currentColor"
                            d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                            class="fa-primary"></path>
                    </g>
                </svg>
                <span class="link-text">Shuttle</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="/theme" class="nav-link">
                <svg id="solarIcon" aria-hidden="true" focusable="false" data-prefix="fad"
                    data-icon="sun" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                    class="svg-inline--fa fa-sun fa-w-16 fa-7x">
                    <g class="fa-group">
                        <path fill="currentColor"
                            d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
                            class="fa-secondary"></path>
                        <path fill="currentColor" d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
                            class="fa-primary"></path>
                    </g>
                </svg>
                <span class="link-text">Themify</span>
            </a>
        </li>
    </ul>
</nav>

<style>
.navbar {
    position: fixed;
    background-color: var(--bg-primary);
    transition: width 0.2s ease;
}

.navbar-nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}

.nav-item {
    width: 100%;
}

.nav-item:last-child {
    margin-top: auto;
}

.nav-link {
    display: flex;
    align-items: center;
    height: 5rem;
    color: var(--text-primary);
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: var(--transition-speed);
    cursor: pointer;
}

.nav-link:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
}

.link-text {
    display: none;
    margin-left: 1rem;
}

.nav-link svg {
    min-width: 2rem;
    margin: 0 1.5rem;
}

.fa-primary {
    color: var(--theme-primary);
}

.fa-secondary {
    color: var(--theme-secondary);
}

.fa-primary,
.fa-secondary {
    transition: var(--transition-speed);
}

.logo {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-secondary);
    background-color: var(--bg-secondary);
    font-size: 1.2rem;
    letter-spacing: 0.3ch;
    width: 100%;
}

.logo svg {
    transform: rotate(0deg);
    transition: transform var(--transition-speed);
}

.navbar:hover .logo svg {
    transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {

    .navbar {
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }

    .logo {
        display: none;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        justify-content: center;
    }
}

/* Smaller screens */
@media only screen and (max-width: 400px) {

    .nav-link svg {
        min-width: 1.5rem;
    }
}

/* Even smaller screens */
@media only screen and (max-width: 360px) {

    .nav-link svg {
        min-width: 1rem;
    }
}

/* Large screens */
@media only screen and  (min-width: 601px) {

    .navbar {
        top: 0;
        width: 5rem;
        height: 100vh;
    }

    .navbar:hover {
        width: 16rem;
    }

    .navbar:hover .link-text {
        display: inline;
        transition: opacity var(--transition-speed);
    }
}

</style>
