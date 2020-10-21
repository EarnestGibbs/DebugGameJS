const mapSizeX = [0,1,2,3,4];
const mapSizeY = [0,1,2,3,4];
const setWeapon = [[Math.floor(Math.random()*5)],[Math.floor(Math.random())*5]];


let currentRoomX=2;
let currentRoomY=2;


const playerLocation = [[currentRoomX],[currentRoomY]];
let rooms;
function createMap(){

//     mapSizeX.forEach(() => {
//         const z = document.createElement("div");
//         z.setAttribute("class", "row");
//         document.getElementById("mapSpace").append(z);

//         mapSizeY.forEach(() => {
//             const b = document.createElement("div");
//             b.innerText = "Space";
//             z.append(b);
//         })
//     });
// }

    for (let x = 0; x < mapSizeX.length; x++){
        const z = document.createElement("div");
        z.setAttribute("class", "row");
        document.getElementById("mapSpace").append(z);
        for (let y = 0; y < mapSizeY.length; y++)
        {
            const b = document.createElement("div");
            b.innerText = "Hallway";
            b.setAttribute("id",mapSizeX[x]+""+mapSizeY[y])
            z.append(b);

        }
    }

    populateRoom();
}

function populateRoom(){

    for (let i = 0; i < mapSizeX.length; i++) {
        for (let j = 0; j < mapSizeY.length; j++) {
            if (((i == 0 || i == 4) && j == 2) || (i == 2 && (j == 0 || j == 4))) {
                document.getElementById(mapSizeX[i]+""+mapSizeY[j]).innerText = "Room";
            }
        }
    }
    document.getElementById(mapSizeX[2]+""+mapSizeY[2]).innerText = "Player";
}

function moveUp(){
    --currentRoomX;
    document.getElementById(mapSizeX[currentRoomX]+""+mapSizeY[currentRoomY]).innerText = "Cleared";

    if ([[currentRoomX],[currentRoomY]] == setWeapon){
        console.log("you found the weapon")
    }
    
}
function moveDown(){
    ++currentRoomX;
    document.getElementById(mapSizeX[currentRoomX]+""+mapSizeY[currentRoomY]).innerText = "Cleared";

    if ([[currentRoomX],[currentRoomY]] == setWeapon){
        console.log("you found the weapon")
    }
    
}
function moveLeft(){
    --currentRoomY;
    document.getElementById(mapSizeX[currentRoomX]+""+mapSizeY[currentRoomY]).innerText = "Cleared";

    if ([[currentRoomX],[currentRoomY]] == setWeapon){
        console.log("you found the weapon")
    }
    
}
function moveRight(){
    ++currentRoomY;
    document.getElementById(mapSizeX[currentRoomX]+""+mapSizeY[currentRoomY]).innerText = "Cleared";

    if ([[currentRoomX],[currentRoomY]] == setWeapon){
        console.log("you found the weapon")
    }
    
}


createMap();
