import React, { useRef, useState } from 'react';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table, InputRef, Typography } from 'antd';
import type { ColumnType, ColumnsType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import ExcelJS from 'exceljs';

interface DataType {
  key: string;
  date: string;
  rcNumber: string;
  staffName: string;
  shift: string;
  riskLevel: string;
  status: string;
  appliedOn: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: '1',
    date: '2023-07-30',
    rcNumber: 'RC001',
    staffName: 'John Brown',
    shift: 'Shift A',
    riskLevel: 'High',
    status: 'Approved',
    appliedOn: '2023-07-28',
  },
  {
    key: '2',
    date: '2023-07-29',
    rcNumber: 'RC002',
    staffName: 'Joe Black',
    shift: 'Shift B',
    riskLevel: 'Medium',
    status: 'Pending',
    appliedOn: '2023-07-27',
  },
];

export const FTDReport: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [filteredData, setFilteredData] = useState<DataType[]>(data);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
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
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
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

  const columns: ColumnsType<DataType> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      width: '15%',
      showSorterTooltip: false,
      ...getColumnSearchProps('date'),
      sorter: (a, b) => a.date.localeCompare(b.date), 
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'RC Number',
      dataIndex: 'rcNumber',
      key: 'rcNumber',
      width: '15%',
      showSorterTooltip: false,
      ...getColumnSearchProps('rcNumber'),
      sorter: (a, b) => a.rcNumber.localeCompare(b.rcNumber), 
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Staff Name',
      dataIndex: 'staffName',
      key: 'staffName',
      width: '20%',
      showSorterTooltip: false,
      ...getColumnSearchProps('staffName'),
      sorter: (a, b) => a.staffName.localeCompare(b.staffName), 
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Shift',
      dataIndex: 'shift',
      key: 'shift',
      width: '10%',
      showSorterTooltip: false,
      ...getColumnSearchProps('shift'),
      sorter: (a, b) => a.shift.localeCompare(b.shift), 
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Risk Level',
      dataIndex: 'riskLevel',
      key: 'riskLevel',
      width: '10%',
      showSorterTooltip: false,
      ...getColumnSearchProps('riskLevel'),
      sorter: (a, b) => a.riskLevel.localeCompare(b.riskLevel), 
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      showSorterTooltip: false,
      ...getColumnSearchProps('status'),
      sorter: (a, b) => a.status.localeCompare(b.status),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Applied On',
      dataIndex: 'appliedOn',
      key: 'appliedOn',
      width: '20%',
      showSorterTooltip: false,
      ...getColumnSearchProps('appliedOn'),
      sorter: (a, b) => a.appliedOn.localeCompare(b.appliedOn), 
      sortDirections: ['ascend', 'descend'],
    },
  ];

  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('FTD Report');

    worksheet.columns = [
      { header: 'Date', key: 'date', width: 15 },
      { header: 'RC Number', key: 'rcNumber', width: 15 },
      { header: 'Staff Name', key: 'staffName', width: 20 },
      { header: 'Shift', key: 'shift', width: 10 },
      { header: 'Risk Level', key: 'riskLevel', width: 10 },
      { header: 'Status', key: 'status', width: 10 },
      { header: 'Applied On', key: 'appliedOn', width: 20 },
    ];

    filteredData.forEach((item) => {
      worksheet.addRow({
        date: item.date,
        rcNumber: item.rcNumber,
        staffName: item.staffName,
        shift: item.shift,
        riskLevel: item.riskLevel,
        status: item.status,
        appliedOn: item.appliedOn,
      });
    });

    workbook.xlsx.writeBuffer().then((buffer: BlobPart) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'ftd_report.xlsx';
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <Typography.Title level={3}>FTD Report</Typography.Title>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
        <div></div>
        <Button icon={<DownloadOutlined />} size="large" onClick={exportToExcel}>
          Export to Excel
        </Button>
      </div>

      <Table columns={columns} dataSource={filteredData} />
    </>
  );
};


