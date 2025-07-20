"use client";

import React from "react";
import { useRouter } from "next/navigation";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from '@mui/icons-material/Home';
import ChecklistIcon from '@mui/icons-material/Checklist';
import RecommendIcon from '@mui/icons-material/Recommend';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LibraryIcon from '@mui/icons-material/LocalLibrary';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

const items = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "list", icon: <ChecklistIcon />, path: "/list" },
    { text: "Recommend", icon: <RecommendIcon />, path: "/recommend" },
    { text: "BookStore", icon: <AutoStoriesIcon />, path: "/bookstore" },
    { text: "Library", icon: <LibraryIcon />, path: "/library" },
    { text: "profile", icon: <InboxIcon />, path: "/profile" },
];

type DrawerItemListProps = {
    onItemClick: () => void;
};

export default function DrawerItemList({ onItemClick }: DrawerItemListProps) {
    const router = useRouter();

    return (
        <List>
            {items.map((item) => (
                <ListItem key={item.text} disablePadding>
                    <ListItemButton
                        onClick={() => {
                            router.push(item.path);
                            onItemClick();
                        }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
}
