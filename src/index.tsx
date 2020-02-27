import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "emotion-theming";
import { Global } from "@emotion/core";
import css from "@styled-system/css";
import theme from "./theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* <Global
            styles={css({
                body: {
                    margin: 0,
                    bg: "primary"
                }
            })}
        /> */}
        <App />
    </ThemeProvider>,
    document.getElementById("tasky")
);
