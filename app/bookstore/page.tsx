'use client';
import React from 'react';
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
    <div className="metric-item">
        <span>{label}</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="metric-bar-container">
                <div className="metric-bar" style={{ width: `${value * 10}%` }} />
            </div>
            <span>{value}/10</span>
        </div>
    </div>
);

export default function BookstorePage() {
	return (
        <div className="bookstore-container">
            <h1 className="bookstore-title">書店一覧</h1>
            <ul className="bookstore-list">
                {bookstores.map((store) => (
                    <li key={store.slug} className="bookstore-card">
                        <Link href={`/bookstore/${store.slug}`} className="bookstore-card-link">
                            <div>
                                <h2 className="bookstore-card-name">{store.name}</h2>
                                <p className="bookstore-card-location">{store.location}</p>
                                <div>
                                    <MetricItem label="書籍の量" value={store.metrics.volume} />
                                    <MetricItem label="立地" value={store.metrics.location} />
                                    <MetricItem label="勉強スペース" value={store.metrics.studySpace} />
                                </div>
                                <p className="bookstore-card-description">{store.description}</p>
                            </div>
                        </Link>
                        <div className="bookstore-card-actions">
                            <a href={store.url} target="_blank" rel="noopener noreferrer" className="bookstore-card-button">
                                ウェブサイト
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
	);
}