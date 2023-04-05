document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;

const sec = 1000;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterCharacter = document.getElementById("counterCharacter");
let inventory = [];
const inventorylist = document.getElementById("inventorybox");
let tilemap2 = document.getElementById("tilemap2");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.
        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        switch (e.target.id) {
            case "door1":

                //something insert here

                if (checkItem("flint and steel")) {
                    showSpeech(mainCharacterSpeech, characterAudio, "OMG it lighten up ..");
                    removeItem("flint and steel","flintandsteel");
                } else {
                    showSpeech(mainCharacterSpeech, characterAudio, "What is this?..... It looks like a sort of Lantern..");
                }
                
                break;
                
                //something insert here
            case "door2":
        console.log("hi");
                    if (!checkItem("flint and steel")) {
                        getItem("flint and steel", "flintandsteel");
                        showSpeech(mainCharacterSpeech, characterAudio, "Wow I found a flint and steel!<br>Must been lying here for ages..");
                        setTimeout(hideSpeech, 4 * sec, mainCharacterSpeech, characterAudio);
                    }else
                    {
                        showSpeech(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                        setTimeout(hideSpeech, 4 * sec, mainCharacterSpeech, characterAudio);
                    }
                break;
                //something insert here
                case "tree":
                    
                    if (!checkItem("Appel")) {
                        getItem("Appel", "Appel");
                        showSpeech(mainCharacterSpeech, characterAudio, "Nice tree... wow a apple... <br> I em a littel hongry");
                        setTimeout(hideSpeech, 4 * sec, mainCharacterSpeech, characterAudio);
                    } else {
                        showSpeech(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                        setTimeout(hideSpeech, 4 * sec, mainCharacterSpeech, characterAudio);
                    }
                break;

            case "statue":
                //something insert here
                showSpeech(mainCharacterSpeech, characterAudio, "What a borring statue..");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showSpeech, 4 * sec, counterSpeech, counterAudio, "No you are borring..");
                setTimeout(showSpeech, 8 * sec, mainCharacterSpeech, characterAudio, "Ow sorry I didn't know you could speak..");
                setTimeout(showSpeech, 12 * sec, counterSpeech, counterAudio, "Its getting dark pour a licht on will you..");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 16 * sec);
                break;

                    case"portal":
                        if (checkItem("Appel")) {
                            showSpeech(mainCharacterSpeech, characterAudio, "nom nom nom..");
                            removeItem("Appel","Appel");
                            tilemap2.src = "img/Up89zK1.png"
                        } else {
                            showSpeech(mainCharacterSpeech, characterAudio, "I em hungry.....");

                        }
                        break; 
                    

            default:
                // do something when it doesn't have a case
                hideSpeech();
                break;
        }
    }
}

function showSpeech(targetBubble, targetAudio, dialogue) {
    //trigger speech bubble and audio
    targetBubble.style.opacity = 1;
    targetBubble.innerHTML = dialogue;
    targetAudio.currentTime = 0;
    targetAudio.play();
    //stop after 4 seconds the dialogue bubble and audio
    setTimeout(hideSpeech, 4 * sec, targetBubble, targetAudio);
}

function hideSpeech(targetBubble, targetAudio) {
    targetBubble.style.opacity = 0;
    targetBubble.innerHTML = "...";
    targetAudio.pause();
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }
}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    let listItem = document.createElement("li");
    listItem.id = itemId;
    listItem.appendChild(document.createTextNode(itemName));
    inventoryList.appendChild(listItem);
}

function removeItem(itemName , itemId) {
    inventory = inventory.filter(function (newinventory) {
        return newinventory !== itemName;
    });
    document.getElementById(itemId).remove();
}


