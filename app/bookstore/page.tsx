'use client';
import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Grid, Box, CardActionArea } from '@mui/material';
import Link from 'next/link';

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

const MetricItem = ({ label, value }: { label: string, value: number }) => (
	<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 0.5 }}>
		<Typography variant="body2">{label}</Typography>
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ width: '100px', height: '8px', backgroundColor: '#e0e0e0', borderRadius: '4px', mr: 1 }}>
				<Box sx={{ width: `${value * 10}%`, height: '100%', backgroundColor: 'primary.main', borderRadius: '4px' }} />
			</Box>
			<Typography variant="body2" sx={{ fontWeight: 'bold' }}>{value}/10</Typography>
		</Box>
	</Box>
);

export default function BookstorePage() {
	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				書店一覧
			</Typography>
			<Grid container spacing={3}>
				{bookstores.map((store) => (
					<Grid item xs={12} sm={6} md={4} key={store.slug} component="div">
						<Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
							<CardActionArea component={Link} href={`/bookstore/${store.slug}`} sx={{ flexGrow: 1 }}>
								<CardContent sx={{ width: '100%' }}>
									<Typography gutterBottom variant="h5" component="div">
										{store.name}
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{store.location}
									</Typography>
									<Box sx={{ my: 2 }}>
										<MetricItem label="書籍の量" value={store.metrics.volume} />
										<MetricItem label="立地" value={store.metrics.location} />
										<MetricItem label="勉強スペース" value={store.metrics.studySpace} />
									</Box>
									<Typography variant="body2">
										{store.description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size="small" onClick={(e) => e.stopPropagation()} href={store.url} target="_blank" rel="noopener noreferrer">
									ウェブサイト
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
