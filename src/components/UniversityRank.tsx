import { Select, Table, Pagination } from "flowbite-react";
import React from "react";
import { useState } from "react";

const columns = [
    {
        title: '排名',
        dataIndex: 'rank',
        key: 'rank',
    },
    {
        title: '学校',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'PageRank分数',
        dataIndex: 'score',
        key: 'score',
    },
];

const dataSource = [
    { id: 1, rank: 1, name: '清华大学', score: 0.0985 },
    { id: 2, rank: 2, name: '北京大学', score: 0.0978 },
    { "id": 3, "rank": 3, "name": "上海交通大学", "score": 0.0972 },
    { "id": 4, "rank": 4, "name": "复旦大学", "score": 0.0968 },
    { "id": 5, "rank": 5, "name": "浙江大学", "score": 0.0963 },
    { "id": 6, "rank": 6, "name": "中国科学技术大学", "score": 0.0959 },
    { "id": 7, "rank": 7, "name": "南京大学", "score": 0.0955 },
    { "id": 8, "rank": 8, "name": "同济大学", "score": 0.0950 },
    { "id": 9, "rank": 9, "name": "西安交通大学", "score": 0.0946 },
    { "id": 10, "rank": 10, "name": "哈尔滨工业大学", "score": 0.0941 }
];

const UniversityRank: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page: number) => setCurrentPage(page);

    return (
        <div>
            <div className="flex-1 flex">
                <div className="sm:w-3/10 md:w-1/4">
                    <Select id="disciplines" required className="w-full">
                        <option>数学</option>
                        <option>物理学</option>
                        <option>化学</option>
                        <option>公共管理</option>
                    </Select>
                </div>
            </div>
            <Table hoverable={true}>
                <Table.Head>
                    {columns.map((column) => (
                        <Table.HeadCell key={column.key}>{column.title}</Table.HeadCell>
                    ))}
                </Table.Head>
                <Table.Body className="divide-y">
                    {dataSource.map((data) => (
                        <Table.Row
                            key={data.id}
                            className="bg-white dark:border-gray-700 dark:bg-gray-800"
                        >
                            <Table.Cell>{data.rank}</Table.Cell>
                            <Table.Cell>{data.name}</Table.Cell>
                            <Table.Cell>{data.score}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
            <div className="flex-1 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} className="flex-1 flex justify-center"/>
            </div>
        </div>
    );
};

export default UniversityRank;
