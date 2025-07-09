import {createTheme, responsiveFontSizes} from "@mui/material";
import {createBreakpoints} from "@mui/system";

const breakpoints = createBreakpoints({
    values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1180,
        xl: 1536
    }
})

const theme = createTheme({
    breakpoints,
    typography: {
        fontFamily: 'Montserrat, sans-serif',
    },
    components: {
        MuiInputBase: {
            variants: [
                {
                    props: {},
                    style: {
                        fontSize: 16,
                        '& .MuiOutlinedInput-root': {
                            height: 40,
                            backgroundColor: 'red',
                        }
                    }
                }
            ]
        },
        MuiButton: {
            defaultProps: {
                size: 'small'
            },
            styleOverrides: {
                root: {
                    zIndex: 1000,
                    height: 32,
                    fontSize: 14,
                    textTransform: 'none',
                    borderRadius: '8px'
                }
            }
        }
    }
});

const frontendCaseTheme = responsiveFontSizes(theme);

export default frontendCaseTheme;