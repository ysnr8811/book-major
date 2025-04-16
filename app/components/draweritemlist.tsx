"use client";

import React from "react";
import { useRouter } from "next/navigation"; // 追加
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/Checklist';
import RecommendIcon from '@mui/icons-material/Recommend';
import BookIcon from '@mui/icons-material/AutoStories';
import LibraryIcon from '@mui/icons-material/LocalLibrary';
import DrawerItem from "./draweritem";
import { List } from "@mui/material";

const items = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "list", icon: <ListIcon />, path: "/list" },
    { text: "Recommend", icon: <RecommendIcon />, path: "/recommend" },
    { text: "BookStore", icon: <BookIcon />, path: "/bookstore" },
    { text: "Library", icon: <LibraryIcon />, path: "/library" },
    { text: "profile", icon: <InboxIcon />, path: "/profile" },
];

export default function DrawerItemList() {
    const router = useRouter();

    return (
        <List>
            {items.map((item, index) => (
                <DrawerItem
                    key={item.text}
                    text={item.text}
                    icon={item.icon}
                    index={index}
                    onClick={() => router.push(item.path)} // クリック時に遷移
                />
            ))}
        </List>
    );
}
