const chosenColor = document.getElementById("color-input")
const generateBtn = document.getElementById("generate")
const schemeMode = document.getElementById("scheme-mode")

generateBtn.addEventListener("click", () => {
   const requestColor = chosenColor.value.replace("#", "")
   const selectedMode = schemeMode.value

   fetch(`https://www.thecolorapi.com/scheme?hex=${requestColor}&mode=${selectedMode}&count=5`)
      .then(response => response.json())
      .then(data => console.log(data.colors[0].hex.value))
})