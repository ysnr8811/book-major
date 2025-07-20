import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

type DrawerItemProps = {
	text: string;
	icon: React.ReactNode;
	index: number;
	onClick?: () => void; // 追加
};

export default function DrawerItem({ text, icon, index, onClick }: DrawerItemProps) {
	return (
		<ListItem key={text} disablePadding>
			<ListItemButton onClick={onClick}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={text} />
			</ListItemButton>
		</ListItem>
	);
}
