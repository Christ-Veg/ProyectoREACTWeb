import React from 'react';
import '@styles/global.css';
import Layout from "@containers/Layout";
import Login from "@pages/login";
import Footer from "@components/footer";

const App = () => {
    return(
        <Layout>
            <Login />
        </Layout>
    );
}

export default App;