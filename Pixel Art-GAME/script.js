//Elements

//Main Menu
const menuDiv = document.querySelector("#menu")
const playButton = document.querySelector("#playButton")
const nameInput = document.querySelector("#username")

//In Game
const inGameDiv = document.querySelector("#ingame")
const colorInput = document.querySelector("#pixelColor")
const mainEditorTable = document.querySelector("#mainEditor")
const greetingsTitle = document.querySelector("#greetings")
const pixelArtContainer = document.querySelector("#pixelArtContainer")

const newButton = document.querySelector("#newButton")
const saveButton = document.querySelector("#saveButton")
const returnButton = document.querySelector("#returnButton")

//Game Variables 
let username = "";

//Hide the in Game Div
inGameDiv.style.display = "none";

//EventHandlers
const handlePlayButton = (e) => {
    e.preventDefault();
    username = nameInput.value;
    if (nameInput.value != "") {
        inGameDiv.style.display = "flex";
        menuDiv.style.display = "none";
        greetingsTitle.innerHTML = `Hi, ${username}`
        handleNewButton();
    }
};
const handleReturnButton = (e) => {
    e.preventDefault();
    inGameDiv.style.display = "none";
    menuDiv.style.display = "flex";
    nameInput.value = "";
    pixelArtContainer.innerHTML = "";
    handleNewButton();
};
const handleSaveButton = () => {
    let pixelArtClone = mainEditorTable.cloneNode(true);
    pixelArtClone.style.height = "20px";
    pixelArtClone.style.width = "20px";
    pixelArtContainer.appendChild(pixelArtClone);
};
const handleNewButton = (e) => {
    newEditorTable(10);
};
const handleCellClick = (e) => {
    if (e.target.matches("td")){
        e.target.style.backgroundColor = colorInput.value;
    }
}

const newEditorTable = (dimension) => {
    mainEditorTable.innerHTML = "";
    for (let i = 0; i < dimension; i++) {
        let tableRowElement = document.createElement("tr");
        for (let j = 0; j < dimension; j++) {
            let tableDataElement = document.createElement("td");
            tableRowElement.appendChild(tableDataElement);
        }
        mainEditorTable.appendChild(tableRowElement);
    }

}


//Event Listeners
mainEditorTable.addEventListener("click", handleCellClick)

playButton.addEventListener("click", handlePlayButton);
newButton.addEventListener("click", handleNewButton);
saveButton.addEventListener("click", handleSaveButton);
returnButton.addEventListener("click", handleReturnButton);
