// MAIN VARIBELS //
let inputField = document.querySelector(".inputField");
let getReboBtn = document.querySelector(".getReboBtn");
let outputDiv = document.querySelector(".outputDiv");

getReboBtn.onclick = function () {
  if (inputField.value === "") {
    outputDiv.innerHTML = "<span>The input field is empty!</span>";
  } else {
    fetch(`https://api.github.com/users/${inputField.value}/repos`)
      .then((response) => response.json())
      .then((data) => {
        outputDiv.innerHTML = "";
        data.forEach((repo) => {
          let repoDiv = document.createElement("div");
          let repoNamDiv = document.createTextNode(repo.name);
          repoDiv.className = "repoDiv";
          repoDiv.appendChild(repoNamDiv);
          outputDiv.appendChild(repoDiv);

          let urlA = document.createElement("a");
          let vist = document.createTextNode("Vist!");
          urlA.appendChild(vist);
          urlA.href = `https://github.com/${inputField.value}/${repo.name}`;
          // urlA.setAttribute("target", "_blank");
          urlA.target = "_blank";
          urlA.className = "urlA";
          repoDiv.appendChild(urlA);

          let starsSpan = document.createElement("span");
          let starsSpanTxt = document.createTextNode(
            `Stars ${repo.stargazers_count}`
          );
          starsSpan.appendChild(starsSpanTxt);
          starsSpan.className = "starsSpan";
          repoDiv.appendChild(starsSpan);
        });
      });
  }
};
