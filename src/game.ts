import { getUserData } from "@decentraland/Identity";
import { BaseScene } from "./gameObjects/baseScene";
import { VideoScreen } from "./gameObjects/video";
import { CreateRoom1 } from "./scenes/room1";
import { CreateRoom2 } from "./scenes/room2";

import addVerseEventListeners from "../node_modules/verser-dcl-sdk/index";
// Create an entity for the main scene model
//new BaseScene();
new VideoScreen();

// CreateRoom1();
// CreateRoom2();


executeTask(async () => {
    addVerseEventListeners('11111', 's000000002')
});




