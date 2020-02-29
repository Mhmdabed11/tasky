type Colors = {
    text: string;
    background: string;
    primary: string;
    columnBackground: string;
    rowBackground: string;
    modes: object;
    draggingBackground: string;
};

const colors: Colors = {
    text: "#484848",
    background: "#ffffff",
    primary: "#0076bb",
    columnBackground: "rgb(235, 236, 240)",
    rowBackground: "white",
    draggingBackground: "tomato",
    modes: {
        dark: {
            text: "#ffffff",
            background: "#000000",
            primary: "#0076bb",
            columnBackground: "#15202b",
            rowBackground: "black",
            draggingBackground: "white"
        }
    }
};

export default {
    initialColorModeName: "light",
    colors,
    fonts: {
        body: "system-ui, sans-serif",
        monospace: "Menlo, monospace"
    },
    fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeights: {
        body: 1.75,
        heading: 1.25
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    styles: {
        html: {
            margin: 0,
            padding: 0
        }
    }
};
