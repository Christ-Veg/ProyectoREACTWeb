import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
const QuestionForm = () => {
    const id = new URLSearchParams(window.location.search).get("id");

    const [formData, setFormData] = useState({
        producto: 1,
        moneda: 1,
        b: 1,
    });

    const { producto, moneda, b } = formData;

    const submitForm = (e) => {
        console.log(formData);
        e.preventDefault();
        let url = "";
        const formFields = `producto=${producto}&&moneda=${moneda}&&b=${b}`;

        // Si hay un id en el url, irá a la ruta Update
        // sino, se trata de una nueva pregunta e ira a la ruta Create.
        !id
            ? (url = `http://localhost:8080/2CV13ID6IDPF/Create?${formFields}`)
            : (url = `http://localhost:8080/2CV13ID6IDPF/Update?${formFields}&id=${id}`);

        axios
            .get(url)
            .then((res) => {
                console.log(res);
                alert(
                    !id
                        ? "El nivel ha sido creada exitosamente."
                        : "El nivel ha sido modificada exitosamente."
                );
                alert("Presione el botón Volver.");
            })
            .catch((err) => {
                console.log(err);
                alert(
                    !id ? "El nivel no se pudo crear." : "El nivel no se pudo modificar."
                );
            });
    };

    return (
        <Stack spacing="3">
            <Heading size="xl">Ingrese los datos del nivel</Heading>
            <Text fontSize="xl">Es necesario llenar todos los campos.</Text>
            <form onSubmit={submitForm} encType="multipart/form-data">
                <Text fontWeight="bold" fontSize="xl">
                    Ingrese los datos de la cantidad de productos y el valor unitario
                </Text>
                <Stack spacing={3}>
                    <FormLabel>Producto de la tienda</FormLabel>
                    <NumberInput
                        isRequired={true}
                        onChange={(val) => {
                            setFormData({
                                ...formData,
                                producto: val,
                            });
                        }}
                        defaultValue={producto}
                        min={0}
                        max={20}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />

                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel>Valor unitario</FormLabel>
                    <NumberInput
                        isRequired={true}
                        onChange={(val) => {
                            setFormData({
                                ...formData,
                                moneda: val,
                            });
                        }}
                        defaultValue={moneda}
                        min={0}
                        max={20}
                    >
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormLabel>Total</FormLabel>
                    <NumberInput
                        isRequired={true}
                        onChange={(val) => {
                            setFormData({
                                ...formData,
                                b: val,
                            });
                        }}
                        defaultValue={b}
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
                <Button m="4" colorScheme="teal" type="submit">
                    Subir cambios
                </Button>
            </form>
            <Link to="/home">
                <Button m="4" colorScheme="blue" type="submit">
                    Volver
                </Button>
            </Link>
        </Stack>
    );
};

export default QuestionForm;