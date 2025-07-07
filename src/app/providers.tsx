'use client';

import frontendCaseTheme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";

export default function Providers({ children }: { children: React.ReactNode }) {

    return <ThemeProvider theme={frontendCaseTheme}>
        {children}
    </ThemeProvider>


}