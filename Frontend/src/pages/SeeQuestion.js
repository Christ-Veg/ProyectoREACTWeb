import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Stack, Text } from "@chakra-ui/layout";
import { Button, Box } from "@chakra-ui/react";

const SeeQuestion = () => {
    const [levelData, setLevelData] = useState(null);

    const id = new URLSearchParams(window.location.search).get("id");

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
            {!levelData ? (
                <>
                    <Text fontSize="xl" align="center" pt="6">
                        No fue posible obtener los datos de la pregunta.
                    </Text>
                    <Text fontSize="xl" pt="4">
                        Se trata de un error con el servidor.
                    </Text>
                </>
            ) : (
                <>
                    <Text fontWeight="bold" fontSize="3xl">
                        El programa calcula el valor a pagar por cierto producto
                    </Text>
                    <Stack spacing={3}>
                        <Box>
                            <Text fontWeight="bold" fontSize="lg">
                                Producto de la tienda
                            </Text>
                            <Text>{levelData.producto}</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" fontSize="lg">
                                Valor unitario
                            </Text>
                            <Text>{levelData.moneda}</Text>
                        </Box>
                        <Box>
                            <Text fontWeight="bold" fontSize="lg">
                                Valor de b
                            </Text>
                            <Text>{levelData.b}</Text>
                        </Box>
                        <Box
                            backgroundColor="blue.100"
                            padding={"1rem"}
                            borderRadius={"1rem"}
                        >
                            <Text fontWeight="bold" fontSize="xl">
                                Total a pagar
                            </Text>
                            <Text fontSize="xl">{`(${levelData.producto}*${levelData.moneda}) = ${levelData.b}`}</Text>
                        </Box>
                    </Stack>
                </>
            )}
            <Box pt="5">
                <Link to="/home">
                    <Button colorScheme="blue">Volver</Button>
                </Link>
            </Box>
        </>
    );
};

export default SeeQuestion;
