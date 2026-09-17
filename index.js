const chosenColor = document.getElementById("color-input")
const generateBtn = document.getElementById("generate")
const schemeMode = document.getElementById("scheme-mode")
const schemeContainer = document.getElementById("scheme-container")

generateBtn.addEventListener("click", () => {
   const requestColor = chosenColor.value.replace("#", "")
   const selectedMode = schemeMode.value

   fetch(`https://www.thecolorapi.com/scheme?hex=${requestColor}&mode=${selectedMode}&count=5`)
      .then(response => response.json())
      .then(data => {
         data.colors.forEach((color, index) => {
            const currentNumber = index + 1
            const currentColor = color.hex.value
            const hexElement = document.getElementById(`hex${currentNumber}`)
            document.documentElement.style.setProperty(`--color${currentNumber}`, `${currentColor}`)
            hexElement.innerText = currentColor
            hexElement.parentElement.dataset.color = currentColor
         });

      })
})

schemeContainer.addEventListener("click", (e) => {
   const copyText = e.target.parentElement.dataset.color
   navigator.clipboard.writeText(copyText);
})