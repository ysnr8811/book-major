"use client";

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";

interface DrawerItemProps {
    text: string;
    icon: ReactNode;
    index: number;
}

// ドロワー個別のコンポーネント
export default function DrawerItem({ text, icon, index }: DrawerItemProps) {
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
}
