"use client"; // Next.jsのApp Routerでクライアントコンポーネントとして動作させるための宣言

import React from "react";
// 各種アイコンをMaterial UIからインポート
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/Checklist';
import RecommendIcon from '@mui/icons-material/Recommend';
import BookIcon from '@mui/icons-material/AutoStories';
import LibraryIcon from '@mui/icons-material/LocalLibrary';

// DrawerItemコンポーネントをインポート（サイドバーの各項目を表現）
import DrawerItem from "./draweritem";

// Material UIのListコンポーネントをインポート（リスト全体のラッパー）
import { List } from "@mui/material";

// ドロワー（サイドバー）に表示するリスト項目をまとめたコンポーネント
export default function DrawerItemList() {
    return (
        // サイドバーのリスト全体をListでラップ
        <List>
            {/* 各DrawerItemは1つのメニュー項目を表す */}
            <DrawerItem text="Home" icon={<HomeIcon />} index={0} />
            <DrawerItem text="list" icon={<ListIcon />} index={1} />
            <DrawerItem text="Recommend" icon={<RecommendIcon />} index={2} />
            <DrawerItem text="BookStore" icon={<BookIcon />} index={3} />
            <DrawerItem text="Library" icon={<LibraryIcon />} index={4} />
            <DrawerItem text="profile" icon={<InboxIcon />} index={5} />
        </List>
    );
}
