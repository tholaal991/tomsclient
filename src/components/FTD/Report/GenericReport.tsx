import React, { useRef, useState } from 'react';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, InputRef, Typography } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import ExcelJS, { Column, Worksheet, Workbook, Row } from 'exceljs';

type DataIndex = string;

interface GenericReportProps<T> {
  data: T[];
  rowKey: DataIndex;
  ReportName?: string;
}

const GenericReport = <T extends Record<DataIndex, any>>({ data, rowKey, ReportName }: GenericReportProps<T>) => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState<DataIndex>('');
  const searchInput = useRef<InputRef>(null);
  const [filteredData, setFilteredData] = useState<T[]>(data);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<T> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button type="link" size="small" onClick={() => close()}>
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.focus(), 100);
      }
    },
    sorter: (a, b) => a[dataIndex].localeCompare(b[dataIndex]),
    sortDirections: ['ascend', 'descend'],
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const exportToExcel = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Report');

    const columns: any = Object.keys(data[0]).map((key) => ({
      header: key,
      key: key as DataIndex,
      width: 15,
      style: { numFmt: '@' }, 
    }));

    worksheet.columns = columns;

    for (const item of filteredData) {
      const row: Row = worksheet.addRow({});

      columns.forEach((column: { key: string; }) => {
        const cell = row.getCell(column.key as DataIndex);
        cell.value = item[column.key as DataIndex];
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${ReportName}.xlsx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const columns: ColumnsType<T> = Object.keys(data[0])
    .filter((key) => key !== 'key')
    .map((key) => ({
      dataIndex: key as DataIndex,
      title: key,
      ...getColumnSearchProps(key as DataIndex),
    }));

  return (
    <>
      <Typography.Title level={3}>{ReportName}</Typography.Title>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <div></div>
        <Button icon={<DownloadOutlined />} size="large" onClick={exportToExcel}>
          Export to Excel
        </Button>
      </div>

      <Table<T> dataSource={data} rowKey={rowKey} columns={columns} >
      </Table>
    </>
  );
};

export default GenericReport;
