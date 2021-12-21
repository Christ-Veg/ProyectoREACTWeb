import React from 'react';
import { Box, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import Home from "../pages/Home";
import SeeQuestion from "@pages/SeeQuestion";
import QuestionForm from "@pages/QuestionForm";


const App = () => {
    return (
        <ChakraProvider>
            <Box width="70vw" margin="0 auto" paddingTop="10">
                <BrowserRouter basename='2CV13ID6IDP4'>
                    <Switch>
                        <Layout>
                            <Route exact path="/">
                                <Login />
                            </Route>

                            <Route exact path="/home">
                                <Home />
                            </Route>

                            <Route exact path="/see">
                                <SeeQuestion />
                            </Route>

                            <Route exact path="/new">
                                <QuestionForm />
                            </Route>

                            <Route exact path="/modify">
                                <QuestionForm />
                            </Route>

                            <Route path="*" render={()=> 
                                <h1>Recurso no Encontrado</h1>
                            } />
                        </Layout>
                    </Switch>
                </BrowserRouter>
            </Box>
    </ChakraProvider>
    );
}

export default App;