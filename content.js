const blockedSites = ["www.facebook.com", "www.last.fm"];
let blockedSitesCount = 0; // keeps track of how many times in a given day the user tries to go on a blocked site

const generateStyles = () => {
    return `
     <style>
  body {
    background: #e5eaf0;
    color: #a3a3ca;
    font-family: sans-serif;
    max-height: 700px;
    overflow: hidden;
  }
  .c {
    text-align: center;
    display: block;
    position: relative;
    width: 80%;
    margin: 100px auto;
  }
  ._1 {
    text-align: center;
    display: block;
    position: relative;
    letter-spacing: 12px;
    font-size: 4em;
    line-height: 80%;
  }
  ._2 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 20px;
  }
  ._3 {
    text-align: center;
    display: block;
    position: relative;
    font-size: 30px;
  }
  .text {
    font-size: 70px;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 19px 0px 0px 0px;
    z-index: 3;
    width: 100%;
    line-height: 1.2em;
    display: inline-block;
  }
  
  hr {
    padding: 0;
    border: none;
    border-top: 5px solid #a3a3ca;
    color: #a3a3ca;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
   </style>
   
    `;
};

const generateHTML = (blockedSitesCount) => {
    return `

    <div class='c'>
      <img src="https://upload.wikimedia.org/wikipedia/en/9/9f/Katy_Perry_-_Witness_%28Official_Album_Cover%29.png" alt="Witness Album Cover" style="width:400px;height:400px;">
      <hr>
      <div class='_1'>IN YOUR WITNESS ERA</div>
      <br>
      <div class='_2'>EXAMPLE #${blockedSitesCount} (today)</div>
      <br>
      <div class='_3'>Get back to studying ❤️</div>

  </div>
    
    `;
};

// check if the current website is one of the blocked sites
if (blockedSites.indexOf(window.location.hostname) >= 0){
    blockedSitesCount++;
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML(blockedSitesCount);
}

// reset blockedSitesCount every 24 hours
