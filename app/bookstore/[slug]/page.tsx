'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { Box, Typography, Paper, Button, Chip } from '@mui/material';
import Link from 'next/link';

// このデータは本来、APIや共通のデータソースから取得します。
// ここではデモのため、page.tsxと同じデータを再度定義します。
const bookstores = [
	{
		slug: 'ogaki-kyoto',
		name: 'イオンモールKYOTO 大垣書店',
		location: '京都府京都市',
		description: 'イオンモールKYOTO Kaede館1階にある大型書店。幅広いジャンルの書籍を取り揃えています。',
		url: 'https://www.books-ogaki.co.jp/stores/ogaki-aeon-kyoto/',
		metrics: {
			volume: 8,
			location: 9,
			studySpace: 5,
		}
	},
	{
		slug: 'kinokuniya-umeda',
		name: '紀伊國屋書店 梅田本店',
		location: '大阪府大阪市',
		description: '阪急梅田駅直結の好立地。専門書から話題の新刊まで、豊富な品揃えが魅力です。',
		url: 'https://store.kinokuniya.co.jp/store/umeda-main-store/',
		metrics: {
			volume: 9,
			location: 10,
			studySpace: 3,
		}
	},
	{
		slug: 'junkudo-osaka',
		name: 'ジュンク堂書店 大阪本店',
		location: '大阪府大阪市',
		description: '堂島アバンザ内にあり、圧倒的な蔵書数を誇る大型書店。専門書や洋書も充実しています。',
		url: 'https://honto.jp/store/detail_1570074_14HB320.html',
		metrics: {
			volume: 10,
			location: 7,
			studySpace: 2,
		}
	}
];

const MetricDetail = ({ label, value }: { label: string, value: number }) => (
	<Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
		<Chip label={label} sx={{ mr: 2, minWidth: '120px' }} />
		<Box sx={{ width: '100%', height: '12px', backgroundColor: '#e0e0e0', borderRadius: '6px' }}>
			<Box sx={{ width: `${value * 10}%`, height: '100%', backgroundColor: 'primary.main', borderRadius: '6px' }} />
		</Box>
		<Typography variant="h6" sx={{ ml: 2, fontWeight: 'bold' }}>{value}/10</Typography>
	</Box>
);

export default function BookstoreDetailPage() {
	const params = useParams();
	const slug = params.slug as string;
	const store = bookstores.find(s => s.slug === slug);

	if (!store) {
		return (
			<Box sx={{ p: 3, textAlign: 'center' }}>
				<Typography variant="h5">書店が見つかりません。</Typography>
				<Button component={Link} href="/bookstore" variant="contained" sx={{ mt: 2 }}>
					書店一覧に戻る
				</Button>
			</Box>
		);
	}

	return (
		<Box sx={{ p: 3 }}>
			<Paper elevation={3} sx={{ p: 3 }}>
				<Typography variant="h3" component="h1" gutterBottom>
					{store.name}
				</Typography>
				<Typography variant="h6" color="text.secondary" gutterBottom>
					{store.location}
				</Typography>
				
				<Box sx={{ my: 4 }}>
					<Typography variant="h5" gutterBottom>評価指標</Typography>
					<MetricDetail label="書籍の量" value={store.metrics.volume} />
					<MetricDetail label="立地" value={store.metrics.location} />
					<MetricDetail label="勉強スペース" value={store.metrics.studySpace} />
				</Box>

				<Typography variant="body1" sx={{ my: 2 }}>
					{store.description}
				</Typography>

				<Box sx={{ mt: 3 }}>
					<Button variant="contained" href={store.url} target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
						公式サイトへ
					</Button>
					<Button component={Link} href="/bookstore" variant="outlined">
						書店一覧に戻る
					</Button>
				</Box>
			</Paper>
		</Box>
	);
}
