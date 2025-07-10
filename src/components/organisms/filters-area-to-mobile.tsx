'use client';
import { useState } from "react";
import { Drawer, Stack } from "@mui/material";
import FiltersArea from "./filters-area";
import FilterListIcon from '@mui/icons-material/FilterList';
export default function FiltersAreaToMobile() {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return <>
        <FilterListIcon fontSize={'large'} color={'inherit'} onClick={toggleDrawer(true)}/>
        <Drawer anchor={'bottom'} open={open} onClose={toggleDrawer(false)}>
            <Stack m={2}>
                <FiltersArea />
            </Stack>
        </Drawer>
    </>
} 