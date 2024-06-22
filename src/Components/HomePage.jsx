import React, { useState, useEffect, useCallback } from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import MainPage from './MainPage';

const HomePage = () => {
    const [showUnity, setShowUnity] = useState(false);
    const [unityMessage, setUnityMessage] = useState('');
    
    const [matchId, setMatchId] = useState("Room1");
    const [username, setUsername] = useState("Player1");       
    const [playerCount, setPlayerCount] = useState(2);
    const messageToUnity = JSON.stringify({ matchId, username, playerCount });


    const { unityProvider, sendMessage, addEventListener, removeEventListener, isLoaded } = useUnityContext({
        loaderUrl: "Build/WebGL_Builds.loader.js",
        dataUrl: "Build/WebGL_Builds.data",
        frameworkUrl: "Build/WebGL_Builds.framework.js",
        codeUrl: "Build/WebGL_Builds.wasm",
    });


    /* const handleUnityMessage = useCallback((message) => {
        setUnityMessage(message);
        console.log("Message from Unity:", message);
    }, []); */


    const handleHideUnity = useCallback(() => {
        setShowUnity(false);
        setUnityMessage('');
        console.log("Unity component hidden");
    }, []);

    useEffect(() => {
        window.EndUnityGame = handleHideUnity; // Make the function globally accessible

        return () => {
            delete window.EndUnityGame;
        };
    }, [handleHideUnity]);


    const [gameObject, SetGamObject] = useState("ReactCommunicator");
    const [functionName, setFunctionName] = useState("ShowMessage");
    const [value, setValue] = useState(JSON.stringify({ matchId, username, playerCount }));

    const handleStartGame = (option) => {
        //setValue(option); // use later...
        setShowUnity(true);
        //console.log(JSON.stringify({ matchId, username, playerCount }));
    };

    useEffect(() => {
        if (isLoaded && value) {
            sendMessage(gameObject, functionName, value);
            console.log(value);
        }
    }, [isLoaded, value]);


    /* 
    function handleChoosePlayerMode(option) {
        switch (option) {
            case 'Option1':
                sendMessage("MatchMakingManager", "JoinMatch", JSON.stringify({ matchId2, username2 }));
                break;
            case 'Option2':
                sendMessage("MatchMakingManager", "CreateMatch", JSON.stringify({ matchId, username, playerCount }));
                break;
            case 'Option3':
                sendMessage("MatchMakingManager", "JoinMatch", JSON.stringify({ matchId2, username2 }));
                break;
            default:
                sendMessage("MatchMakingManager", "JoinMatch", JSON.stringify({ matchId2, username2 }));
        }
    }
    */

    return (
        <div style={{ width: "100%", height: "100%"}}> 
            {/* Show either the Mainpage component or the Game */}
            {showUnity ? (
                <Unity unityProvider={unityProvider} style={{ width: "100%", height: "100%" }} /> ) : (
                <MainPage onStartGame={handleStartGame} />
                )}
        </div>
    );
};


export default HomePage;