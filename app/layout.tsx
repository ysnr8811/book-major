import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MaterialDrawer from "./components/drawer"; // クライアントコンポーネント
import ThemeRegistry from "./components/theme-registry";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Book-Major",
	description: "Book-Major",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeRegistry>
					<MaterialDrawer>{children}</MaterialDrawer>
				</ThemeRegistry>
			</body>
		</html>
	);
}
