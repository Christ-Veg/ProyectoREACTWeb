import React, { useState, useEffect } from "react";
import {
    Text,
    Box,
    Stack,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const GameStatus = ({
    producto,
    moneda,
    b,
    tries,
    setTries,
    value,
    setValues,
    isCorrect,
    setIsCorrect,
}) => {
    const toast = useToast();

    const check = () => {
        const { formNumM, formDenomM, formB } = value;

        setIsCorrect(
            formB == b
        );

        setTries(tries - 1);
    };

    if (isCorrect) {
        toast({
            title: "Has acertado",
            description: "Felicidades",
            status: "success",
            duration: 4000,
            isClosable: false,
        });
    }

    useEffect(() => {
        if (tries !== 3 && !isCorrect) {
            toast({
                title: "Incorrecto",
                description: "El valor ingresado no es el correcto",
                status: "warning",
                duration: 4000,
                isClosable: false,
            });
        }
    }, [tries]);

    return (
        <>
            <Stack spacing="5">
                <Text fontSize="4xl" fontWeight="bold" textAlign="center">
                    Calcula los totales
                </Text>
                <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={tries === 0 && !isCorrect ? "red" : "black"}
                >{`Intentos restantes: ${tries}`}</Text>
                <Stack backgroundColor="blue.100" borderRadius="1rem" padding="1rem">
                    <Text fontWeight="bold" fontSize="xl">
                        El valor que estas calculando es
                    </Text>
                    <Text fontSize="xl">{`(${moneda}*${producto}) = ${value.formB}`}</Text>
                    <Text>Valor unitario:</Text> 
                    <Text fontWeight="bold" fontSize="lg">{moneda}</Text>
                    <Text>Cantidad de productos: </Text>
                    <Text fontWeight="bold" fontSize="lg">{producto}</Text>
                    <Text>Total a pagar: </Text>
                    <NumberInput
                        defaultValue={value.formB}
                        onChange={(val) => {
                            setValues({
                                ...value,
                                formB: val,
                            });
                        }}
                        min={0}
                        max={2000}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </Stack>

                {tries === 0 && !isCorrect && (
                    <>
                        <Stack
                            backgroundColor="green.100"
                            borderRadius="1rem"
                            padding="1rem"
                        >
                            <Text fontWeight="bold" fontSize="xl">
                                Resultado correcto
                            </Text>
                            <Text>{`X ${producto} * ${moneda} = ${b}`}</Text>
                        </Stack>
                        <Stack
                            backgroundColor="orange.100"
                            borderRadius="1rem"
                            padding="1rem"
                        >
                            <Text fontWeight="bold" fontSize="xl">
                                Total
                            </Text>
                            <Text>{`(${value.formNumM}*${value.formDenomM}) = ${value.formB}`}</Text>
                        </Stack>
                    </>
                )}

                {isCorrect && (
                    <Box backgroundColor="green.100" borderRadius="1rem" padding="1rem">
                        <Text fontWeight="bold">¡Has acertado!</Text>
                    </Box>
                )}

                <Button
                    disabled={(tries === 0 && !isCorrect) || isCorrect}
                    backgroundColor="blue.200"
                    onClick={check}
                >
                    Checar
                </Button>
                <Link to="/home">
                    <Button>Volver</Button>
                </Link>
            </Stack>
        </>
    );
};

export default GameStatus;