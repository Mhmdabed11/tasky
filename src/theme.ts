type ColorObject = {
    text: string;
    background: string;
    primary: string;
    columnBackground: string;
    rowBackground: string;
    draggingBackground: string;
    rowDraggingBackground: string;
    rowDraggingColor: string;
};

type Modes = {
    dark?: ColorObject;
};

type Colors = {
    text: string;
    background: string;
    primary: string;
    columnBackground: string;
    rowBackground: string;
    modes: Modes;
    draggingBackground: string;
    rowDraggingBackground: string;
    rowDraggingColor: string;
};

export type Theme = {
    initialColorModeName: string;
    colors: Colors;
    fonts: object;
    fontSizes: Array<number>;
    fontWeights: Array<number>;
    lineHeights: object;
    space: Array<number>;
    styles: object;
};

const colors: Colors = {
    text: '#484848',
    background: '#ffffff',
    primary: '#0076bb',
    columnBackground: 'rgb(235, 236, 240)',
    rowBackground: 'white',
    draggingBackground: 'tomato',
    rowDraggingBackground: 'lightgreen',
    rowDraggingColor: '#484848',
    modes: {
        dark: {
            text: '#869fac',
            background: '#253137',
            primary: '#36464f',
            columnBackground: '#36464f',
            rowBackground: '#253137',
            draggingBackground: '#253137',
            rowDraggingBackground: 'white',
            rowDraggingColor: '#253137',
        },
    },
};

const theme: Theme = {
    initialColorModeName: 'light',
    colors,
    fonts: {
        body: 'system-ui, sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 18, 24, 32, 48, 64, 72],
    fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    lineHeights: {
        body: 1.75,
        heading: 1.25,
    },
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    styles: {
        html: {
            margin: 0,
            padding: 0,
        },
    },
};

export default theme;
