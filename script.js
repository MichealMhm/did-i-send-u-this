<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OMG WHY R U HERE 😦</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="container">
      <img
        class="img"
        src="https://media.tenor.com/TUVAE2M_wz4AAAAi/chubby-tonton.gif"
        alt="tonton"
      />
      <p class="title">Heyy, do you want a valentines gift? 😦</p>
      <div class="buttons">
        <button type="button" class="btn btn-yes">Yes</button>
        <button type="button" class="btn btn-no">No</button>
      </div>
      
      <!-- Spotify Embed with Play Button -->
      <iframe id="spotifyPlayer" 
        src="https://open.spotify.com/embed/track/0rFOs9paloAvEtzwDX1Kmc" 
        width="300" height="80" frameborder="0" allowtransparency="true" allow="autoplay; encrypted-media">
      </iframe>
      <button onclick="playSpotify()" class="btn btn-spotify">Click to Play Music</button>
    </main>
    
    <script>
      function playSpotify() {
        let iframe = document.getElementById("spotifyPlayer");
        let src = iframe.src;
        iframe.src = ""; // Reset src to allow reloading
        setTimeout(() => {
          iframe.src = src + "?autoplay=1"; // Reload with autoplay
        }, 100);
      }
    </script>
    
    <script src="script.js"></script>
  </body>
</html>
