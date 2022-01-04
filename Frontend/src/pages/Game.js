
import React, { useState, useEffect } from "react";
import { Box, Grid } from "@chakra-ui/react";
import GameStatus from "@components/GameStatus";
import axios from "axios";

const Game = () => {
    const id = new URLSearchParams(window.location.search).get("id");

    const [tries, setTries] = useState(3);
    const [value, setValues] = useState({ formNumM: 1, formDenomM: 1, formB: 1 });
    const [isCorrect, setIsCorrect] = useState(false);
    const [levelData, setLevelData] = useState(null);

    useEffect(() => {
        getCurrentLevel();
    }, []);

    const getCurrentLevel = async () => {
        await axios
            .get(`http://localhost:8080/2CV13ID6IDPF/Ejercicios?id=${id}`)
            .then((res) => {
                setLevelData(res.data[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Box w="100%">
                    <GameStatus
                        {...levelData}
                        tries={tries}
                        setTries={setTries}
                        value={value}
                        setValues={setValues}
                        isCorrect={isCorrect}
                        setIsCorrect={setIsCorrect}
                    />
                </Box>
                <Box w="100%">
                    
                </Box>
            </Grid>
        </>
    );

}

export default Game;