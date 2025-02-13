<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OMG WHY R U HERE😦</title>
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
        <button type="button" class="btn btn-yes" onclick="handleYesClick()">Yes</button>
        <button type="button" class="btn btn-no" onclick="handleNoClick()">No</button>
      </div>
    </main>

    <script>
      function sendResponse(choice) {
          fetch("https://script.google.com/macros/s/AKfycbx9BfWesYiY0-IN6ANUMfvK95UqBauNIfDxR9zO-s7T0SC024KkmUx-nRZV9DIDGyEq/exec?choice=" + choice)
              .then(response => console.log("Response recorded"))
              .catch(error => console.error("Error:", error));
      }
      
      function handleYesClick() {
          sendResponse('Yes'); // Logs "Yes" to Google Sheets
          title.innerHTML = "YYAAAAYYY!!! Now go back to discord :p";
          btnContainer.classList.add("hidden");
          changeImage("yes");
      }
      
      function handleNoClick() {
          sendResponse('No'); // Logs "No" to Google Sheets
          processNoClick(); // Call the original No button logic
      }
    </script>
  </body>
</html>
