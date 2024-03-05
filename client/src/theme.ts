export const tokens = {
    grey: {
        100: "#f0f0f3",
        200: "#e1e2e7",
        300: "#d1d3da",
        400: "#c2c5ce",
        500: "#b3b6c2",
        600: "#8f929b",
        700: "#6b6d74",
        800: "#48494e",
        900: "#242427",
    },
    primary: {
        // light blue
        100: "#e5f2ff",
        200: "#b3d9ff",
        300: "#80bfff",
        400: "#4da6ff",
        500: "#1a8dff",
        600: "#0073e6",
        700: "#005ab3",
        800: "#004080",
        900: "#00264d",
    },
    secondary: {
        // green
        100: "#e5ffe5",
        200: "#e5ffe5",
        300: "#80ff80",
        400: "#4dff4d",
        500: "#1aff1a",
        600: "#00e600",
        700: "#00b300",
        800: "#008000",
        900: "#004d00",
    },
    tertiary: {
        // purple
        500: "#a64dff",
    },
    background: {
        light: "#000d1a",
        main: "#80bfff",
    },
};

// mui theme settings
export const themeSettings = {
    palette: {
        primary: {
            ...tokens.primary,
            main: tokens.primary[500],
            light: tokens.primary[400],
        },
        secondary: {
            ...tokens.secondary,
            main: tokens.secondary[500],
        },
        tertiary: {
            ...tokens.tertiary,
        },
        grey: {
            ...tokens.grey,
            main: tokens.grey[500],
        },
        background: {
            default: tokens.background.main,
            light: tokens.background.light,
        },
    },
    typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 32,
        },
        h2: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 24,
        },
        h3: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 20,
            fontWeight: 800,
            color: tokens.grey[200],
        },
        h4: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 14,
            fontWeight: 600,
            color: tokens.grey[300],
        },
        h5: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            fontWeight: 400,
            color: tokens.grey[500],
        },
        h6: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 10,
            color: tokens.grey[700],
        },
    },
};