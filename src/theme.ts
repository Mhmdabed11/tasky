const colors: object = {
    text: "#000",
    background: "#fff",
    primary: "#fff",
    secondary: "#00a",
    highlight: "#ededff",
    accent: "#c0f",
    gray: "#eee",
    lightgray: "#fafafa",
    midgray: "#777",
    modes: {
        dark: {
            text: "#fff",
            background: "#000",
            primary: "#0cf",
            secondary: "#f0e",
            gray: "#222",
            lightgray: "#111",
            highlight: "#001119"
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
