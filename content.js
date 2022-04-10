const blockedSites = ["www.facebook.com", "www.youtube.com", "www.last.fm", "www.reddit.com"];

const generateStyles = () => {
    return `
     <style>
  body {
    background: #ff1a1a;
    color: #fff;
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
    border-top: 5px solid #fff;
    color: #fff;
    text-align: center;
    margin: 0px auto;
    width: 420px;
    height: 10px;
    z-index: -10;
  }
  
  hr:after {
    display: inline-block;
    position: relative;
    top: -0.75em;
    font-size: 2em;
    padding: 0 0.2em;
    background: #33cc99;
  }
  
  
  
   </style>
   
    `;
};

const generateHTML = () => {
    return `

    <div class='c'>
      <img src="assets/Witness.png" alt="Witness Album Cover" style="width:400px;height:400px;">
      <hr>
        <div class='_1'>IN YOUR WITNESS ERA</div>
      <div class='_2'>EXAMPLE #25879</div>
  </div>
    
    `;
};

// check if the current website is one of the blocked sites
if (blockedSites.indexOf(window.location.hostname) >= 0){
    document.head.innerHTML = generateStyles();
    document.body.innerHTML = generateHTML();
}