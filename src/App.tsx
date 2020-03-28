import React, { MouseEventHandler } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Box } from "./tasky-ui";
import Main from "./views/Main";
import { LoadingProvider } from "./lib/loadingContext";

type AppProps = {
    toggleTheme: MouseEventHandler;
    mode: string;
};

const App = ({ toggleTheme, mode }: AppProps) => {
    return (
        <LoadingProvider>
            <Box>
                <NavBar toggleTheme={toggleTheme} mode={mode} />
                <Main />
            </Box>
        </LoadingProvider>
    );
};

export default App;
