<script>
    import { base } from '$app/paths';
</script>

<img src="{base}/nerdhudnext_logo.png" alt="NerdHUD Next Logo" class="logo">

<h1 class="main-heading">What is Nerd HUD Next?</h1>

<style>
    .main-heading {
        font-family: Roboto; /* Hacker aesthetic */
        font-size: 2.5rem; /* Adjust as needed */
        font-weight: bold;
        color: #1e90ff; /* Matches the gradient for a unified look */
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); /* Adds some depth */
        margin-bottom: 20px;
    }

    .feature-list {
        margin-top: 20px;
        list-style-type: circle;
        padding: 0;
        font-size: 1.2rem;
        color: #e6f0ff;
    }

    .feature-list li {
        display: list-item;
        margin-bottom: 11px;
        margin-left: 11px;
        font-size: 80%;
    }

    .cta {
        margin-top: 30px;
        font-size: 1.5rem;
        color: #00ff99;
        font-weight: bold;
        text-align: center;
    }

    /* Style for the logo image */
    .logo {
        float: right;
        margin: 22px; /* Margin to the right to create space between the image and text */
        max-width: 300px; /* Ensure the image doesn't take too much space */
        height: auto; /* Maintain aspect ratio */
    }

    .yt-div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%; /* Ensure the div takes up the full width */
        margin: 0 auto; /* Center the div horizontally if it has a fixed width */
    }
</style>

<p>Nerd HUD Next is a browser extension that augments the web3 game Pixels by several key features that make the game much more fun to play while removing a lot of the tedium in keeping track of things.</p>

<ul class="feature-list">
    <li><strong>Real-Time Timers:</strong> Automatically track crafting and farming progress.</li>
    <li><strong>Inventory Insights:</strong> View your items and market prices at a glance.</li>
    <li><strong>Taskboard Optimization:</strong> See your orders at any time, cross-reference with your inventory, storage and calculate missing item costs.</li>
    <li><strong>Storage Management:</strong> Track all your storage chests effortlessly.</li>
    <li><strong>Detailed Item Info:</strong> Access item details, crafting recipes, and price for any item. Even the ones that were patched in today.</li>
    <li><strong>Currency and Income display:</strong> See all your currencies and what you gained or spent in a day.</li>
    <li><strong>Delivery Tracking:</strong> Get a detailed breakdown of all the orders you delivered today, including pixels and coins gained, cost per pixel and market value, per skill and in total.</li>
    <li><strong>Shopping List:</strong> Remember the items or crafting materials you need to buy.</li>
    <li><strong>Notifications:</strong> Go watch a video in the other tab while crafting, we'll notify you.</li>
    <li><strong>Mobile support:</strong> Whether you want to play on your desktop PC or your mobile phone, Nerd HUD Next adjusts to your screen.</li>
    <li><strong>Cloud Save:</strong> Sync your data for cross-device play.</li>
</ul>
<p class="cta">Streamline your adventure—play smarter with NerdHUD Next!</p>

<div class="yt-div">    
    <iframe width="560" height="315" src="https://www.youtube.com/embed/C0i8UQYsatQ?si=8xDKOlVtN8buDJ-w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<h1 class="main-heading">Download and Installation</h1>
<div class="install-instructions">
    <div class="button-container">
        <a href="#" class="download-btn" download>Download Nerd HUD Next</a>
    </div>

    <style>
    .button-container {
        text-align: center; /* Horizontally center content inside */
    }

    .download-btn {
        display: inline-block;
        padding: 12px 24px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        background: linear-gradient(45deg, #00b3ff, #0099cc);
        color: white;
        border-radius: 8px;
        border: 2px solid transparent;
        transition: background 0.3s, transform 0.3s;
    }

    .download-btn:hover {
        background: linear-gradient(45deg, #0099cc, #00b3ff);
        transform: scale(1.05);
    }

    .download-btn:active {
        transform: scale(1);
    }
    </style>
  
    <h3>Desktop (Chrome)</h3>
    <ol>
      <li><strong>Download</strong> the <code>NerdHUDNext.zip</code> file.</li>
      <li>Go to <code>chrome://extensions</code> in Chrome.</li>
      <li><strong>Enable Developer Mode</strong> (toggle in top-right).</li>
      <li><strong>Drag and drop</strong> the <code>NerdHUDNext.zip</code> file into the Extensions page.</li>
      <li>The extension will install automatically.</li>
    </ol>
  
    <h3>Mobile (Kiwi Browser)</h3>
    <ol>
      <li><strong>Download</strong> the <code>NerdHUDNext.zip</code> file.</li>
      <li>Open <strong>Kiwi Browser</strong> and go to <code>chrome://extensions</code>.</li>
      <li><strong>Enable Developer Mode</strong> (toggle in top-right).</li>
      <li>Tap <strong>Load unpacked</strong> and select the <code>NerdHUDNext.zip</code> file.</li>
      <li>The extension will install automatically.</li>
    </ol>
  </div>

<section class="about-section">
    <div class="about-content">
      <img src="{base}/logo.gif" alt="Nerd Guild Logo" class="about-logo">
      <div class="about-text">
        <h2>About Nerd HUD Next</h2>
        <p>Nerd HUD Next is a product of the <a href="https://nerdguild.xyz/" target="_blank" class="highlight">Nerd Guild in Pixels</a>, where we combine the best tools with a great, fun community. If you love the tool, check out our <a href="https://discord.gg/R2XqBySs" target="_blank" class="highlight">Discord</a> and join the fun!</p>
        <p class="source-code">The source code for Nerd HUD Next is available on <a href="https://github.com/mnemonicpunk/nerdhud_next" target="_blank">GitHub</a>.</p>
      </div>
    </div>

    <style>
        .about-section {
            background-color: #1a1a1a;
            color: #fff;
            padding: 20px;
            border-radius: 12px;
            margin-top: 30px;
        }

        .about-content {
            display: flex;
            align-items: center;
        }

        .about-logo {
            width: 120px;
            height: auto;
            margin-right: 20px; /* Add margin for spacing between the logo and the text */
        }

        .about-text {
            flex: 1; /* Allow the text to take the remaining space */
        }

        .about-section h2 {
            text-align: left;
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
            color: #00b3ff;
        }

        .about-section p {
            font-size: 16px;
            line-height: 1.6;
        }

        .highlight {
            color: #ff66cc;
            font-weight: bold;
            text-decoration: none;
        }

        .highlight:hover {
            text-decoration: underline;
        }

        .source-code {
            margin-top: 20px;
            font-size: 14px;
            color: #bbb;
        }

        .source-code a {
            color: #bbb;
            text-decoration: none;
        }

        .source-code a:hover {
            text-decoration: underline;
        }
        </style>
      

</section>

<a href="{base}/">Back to overview</a>
  
 
