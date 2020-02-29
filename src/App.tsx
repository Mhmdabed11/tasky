import React, { MouseEventHandler } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Box } from "./tasky-ui";
import Main from "./views/Main";

type AppProps = {
    toggleTheme: MouseEventHandler;
};

const App = ({ toggleTheme }: AppProps) => {
    return (
        <Box>
            <NavBar toggleTheme={toggleTheme} />
            <Main />
        </Box>
    );
};

export default App;
