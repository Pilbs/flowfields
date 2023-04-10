const controls = document.getElementById("controls");
canvas3.addEventListener("click", displayControls);

function displayControls(){
    if (controls.style.display === "none") {
        controls.style.display = "block";
      } else {
        controls.style.display = "none";
      }
}