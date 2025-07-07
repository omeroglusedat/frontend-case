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
        MuiModal: {
            variants: [
                {
                    props: {},
                    style: {
                        '&[aria-labelledby=loading-modal]': {
                            '& .MuiBox-root': {
                                backgroundColor: 'transparent',
                                boxShadow: 'none'
                            }
                        }
                    }
                }
            ],
            styleOverrides: {
                backdrop: {
                    backdropFilter: 'blur(5px)',
                    // '& .MuiBox-root': {
                    //
                    //     border: 0,
                    //     borderRadius: '8px'
                    // }
                },
                root: {
                    zIndex: 1300,
                    '&:focus': {},
                    '& .MuiBox-root': {

                        border: 'none',
                        borderRadius: '8px'
                    }
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: '100%'
                }
            },
        },
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
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: 16
                }
            }
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
                    borderRadius: '16px'
                }
            },
            variants: [
                {
                    props: {
                        variant: 'contained'
                    },
                    style: {
                    }
                }
            ]
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                   background: 'rgba(255, 255, 255, 0.5)'
                }
            }
        }
    }
});

const frontendCaseTheme = responsiveFontSizes(theme);

export default frontendCaseTheme;