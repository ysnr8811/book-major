"use client"; // Next.jsのApp Routerでクライアントコンポーネントとして動作させる宣言

import * as React from "react";
// Material UIのスタイリングや各種コンポーネント、アイコンをインポート
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Draw } from "@mui/icons-material";
import DrawerItemList from "./draweritemlist"; // サイドバーのリスト項目をまとめたコンポーネント
import DarkModeSwitch from "./dark-mode-switch";

const drawerWidth = 240; // ドロワー（サイドバー）の幅

// メインコンテンツ部分のスタイルを定義
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create("margin", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	marginLeft: `-${drawerWidth}px`,
	...(open && {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	}),
}));

// AppBar（上部バー）のprops型を拡張
interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

// AppBarのスタイルを定義
const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

// ドロワーヘッダー部分のスタイル
const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// AppBarの下にコンテンツが来るようにする
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

// メインコンポーネント
export default function PersistentDrawerLeft({ children }: { children: React.ReactNode }) {
	const theme = useTheme(); // テーマ情報を取得
	const [open, setOpen] = React.useState(false); // ドロワーの開閉状態

	// ドロワーを開く処理
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	// ドロワーを閉じる処理
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		// 全体をBoxでラップ
		<Box sx={{ display: "flex" }}>
			{/* 上部のAppBar */}
			<AppBar position="fixed" open={open}>
				<Toolbar>
					{/* ドロワーを開くためのメニューボタン */}
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={[
							{ mr: 2 },
							open && { display: "none" }, // ドロワーが開いているときは非表示
						]}
					>
						<MenuIcon />
					</IconButton>
					{/* タイトル */}
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
						Book-Major
					</Typography>
					<DarkModeSwitch />
				</Toolbar>
			</AppBar>
			{/* サイドバー（ドロワー） */}
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
				variant="persistent" // 開閉状態を保持するドロワー
				anchor="left"
				open={open}
				onClose={handleDrawerClose}
			>
				{/* ドロワーヘッダー（閉じるボタン） */}
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{/* テーマの方向によってアイコンを切り替え */}
						{theme.direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />

				{/* サイドバーのリスト項目（DrawerItemList）を表示 */}
				<DrawerItemList onItemClick={handleDrawerClose} />

				<Divider />
			</Drawer>
			{/* メインコンテンツ部分 */}
			<Main open={open}>
				<DrawerHeader />
				{children}
			</Main>
		</Box>
	);
}
