import { SearchOutlined } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import type { InputRef } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import type { FilterConfirmProps } from "antd/es/table/interface";
import { useLazyQuery, useQuery } from "@apollo/client";
import {
  FindtShiftsForShiftPlanIdDocument,
  FindtShiftsForShiftPlanIdQuery,
  FindtShiftsForShiftPlanIdQueryVariables,
  ShiftplansDocument,
  ShiftplansQuery,
  ShiftplansQueryVariables,
} from "../../generated/graphql";
import { Toast } from "antd-mobile";

interface DataType {
  key: string;
  "Shift Plan ID": String;
  Description: String;
}

type DataIndex = keyof DataType;

// const data: DataType[] = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park sss",
//   },
//   {
//     key: "2",
//     name: "Joe Black",
//     age: 42,
//     address: "London No. 1 Lake Park",
//   },
//   {
//     key: "3",
//     name: "Jim Green",
//     age: 32,
//     address: "Sydney No. 1 Lake Park",
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park",
//   },
// ];

const ManageShiftPlan: React.FC = () => {
  //   const [searchText, setSearchText] = useState("");
  //   const [searchedColumn, setSearchedColumn] = useState("");
  //   const searchInput = useRef<InputRef>(null);

  //   // const {
  //   //   data: formsData,
  //   //   loading: formsLoading,
  //   //   error: formsError,
  //   //   refetch: refetchForms,
  //   // } = useQuery<GetAllFormsQuery, GetAllFormsQueryVariables>(GetAllFormsDocument, {
  //   //   variables: {},
  //   // });

  //   // useEffect(() => {
  //   //   refetchForms();
  //   // }, [refetchForms]);

  //   // if (formsLoading) {

  //   //   console.log('loading')

  //   // }
  //   // if (formsError) {
  //   //   console.log('error')
  //   //   Toast.show( 'Error fetching data')
  //   // }

  //   const {
  //     data: shiftPlanData,
  //     loading: shiftPlanLoading,
  //     error: shiftPlanError,
  //     refetch: refetchShiftPlan,
  //   } = useQuery<ShiftplansQuery, ShiftplansQueryVariables>(ShiftplansDocument, {
  //     variables: {},
  //   });

  //   useEffect(() => {
  //     refetchShiftPlan();
  //   }, [refetchShiftPlan]);

  //   if (shiftPlanLoading) {
  //     Toast.show("loading");
  //   }
  //   if (shiftPlanError) {
  //     Toast.show("Error fetching data");
  //   }

  //   const shiftPlans = shiftPlanData?.shiftplans;

  //   const mappedShiftPlans = shiftPlans?.map((shiftPlan, key) => ({
  //     key: key.toString(),
  //     "Shift Plan ID": String(shiftPlan?.id),
  //     Description: String(shiftPlan?.description),
  //   }));

  //   const shiftplanData: DataType[] | undefined = mappedShiftPlans?.map(
  //     (shiftPlan, key) => ({
  //       key: key.toString(),
  //       "Shift Plan ID": String(shiftPlan?.["Shift Plan ID"]),
  //       Description: String(shiftPlan?.Description),
  //     })
  //   );

  // const [getShifts, { loading, error, data}]  = useLazyQuery<FindtShiftsForShiftPlanIdQuery, FindtShiftsForShiftPlanIdQueryVariables>(FindtShiftsForShiftPlanIdDocument, {
  //     variables: {
  //       shiftPlanId: 1
  //     },
  //   }
  //   );

  //   // const forms = formsData?.getAllForms;

  //   // const mappedForms = forms?.map((form,key) => ({
  //   //   key: key.toString(),
  //   //   'Form Date': String(form?.createdAt),
  //   //    Rcn: String(form?.operatorId),
  //   //   'Staff Name': String(form?.operator.name),
  //   //   Shift: String(form?.shiftId),
  //   //   'Risk Level': String(form?.riskLevel),
  //   //   // Status: String(form?.),
  //   //   'Applied on':  form?.appliedOn,

  //   // }));

  //   // const data: DataType[] | undefined = mappedForms?.map((form,key) => ({
  //   //   key: key.toString(),
  //   //   'Form Date': String(form?.['Form Date']),
  //   //    Rcn: String(form?.Rcn),
  //   //   'Staff Name': String(form?.['Staff Name']),
  //   //   Shift: String(form?.Shift),
  //   //   'Risk Level': String(form?.['Risk Level']),
  //   //   Status: String('TODO'),
  //   //   'Applied on': form?.['Applied on'],
  //   // }));

  //   const handleSearch = (
  //     selectedKeys: string[],
  //     confirm: (param?: FilterConfirmProps) => void,
  //     dataIndex: DataIndex
  //   ) => {
  //     confirm();
  //     setSearchText(selectedKeys[0]);
  //     setSearchedColumn(dataIndex);
  //   };

  //   const handleReset = (clearFilters: () => void) => {
  //     clearFilters();
  //     setSearchText("");
  //   };

  //   const getColumnSearchProps = (
  //     dataIndex: DataIndex
  //   ): ColumnType<DataType> => ({
  //     filterDropdown: ({
  //       setSelectedKeys,
  //       selectedKeys,
  //       confirm,
  //       clearFilters,
  //       close,
  //     }) => (
  //       <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
  //         <Input
  //           ref={searchInput}
  //           placeholder={`Search ${dataIndex}`}
  //           value={selectedKeys[0]}
  //           onChange={(e) =>
  //             setSelectedKeys(e.target.value ? [e.target.value] : [])
  //           }
  //           onPressEnter={() =>
  //             handleSearch(selectedKeys as string[], confirm, dataIndex)
  //           }
  //           style={{ marginBottom: 8, display: "block" }}
  //         />
  //         <Space>
  //           <Button
  //             type="primary"
  //             onClick={() =>
  //               handleSearch(selectedKeys as string[], confirm, dataIndex)
  //             }
  //             icon={<SearchOutlined />}
  //             size="small"
  //             style={{ width: 90 }}
  //           >
  //             Search
  //           </Button>
  //           <Button
  //             onClick={() => clearFilters && handleReset(clearFilters)}
  //             size="small"
  //             style={{ width: 90 }}
  //           >
  //             Reset
  //           </Button>
  //           <Button
  //             type="link"
  //             size="small"
  //             onClick={() => {
  //               confirm({ closeDropdown: false });
  //               setSearchText((selectedKeys as string[])[0]);
  //               setSearchedColumn(dataIndex);
  //             }}
  //           >
  //             Filter
  //           </Button>
  //           <Button
  //             type="link"
  //             size="small"
  //             onClick={() => {
  //               close();
  //             }}
  //           >
  //             close
  //           </Button>
  //         </Space>
  //       </div>
  //     ),
  //     filterIcon: (filtered: boolean) => (
  //       <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
  //     ),
  //     onFilter: (value, record) =>
  //       record[dataIndex]
  //         .toString()
  //         .toLowerCase()
  //         .includes((value as string).toLowerCase()),
  //     onFilterDropdownOpenChange: (visible) => {
  //       if (visible) {
  //         setTimeout(() => searchInput.current?.select(), 100);
  //       }
  //     },
  //     render: (text) =>
  //       searchedColumn === dataIndex ? (
  //         <Highlighter
  //           highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
  //           searchWords={[searchText]}
  //           autoEscape
  //           textToHighlight={text ? text.toString() : ""}
  //         />
  //       ) : (
  //         text
  //       ),
  //   });

  //   const columns: ColumnsType<DataType> = [
  //     {
  //       title: "Shift Plan ID",
  //       dataIndex: "Shift Plan ID",
  //       key: "Shift Plan ID",
  //       width: "30%",
  //       ...getColumnSearchProps("Shift Plan ID"),
  //     },
  //     {
  //       title: "Description",
  //       dataIndex: "Description",
  //       key: "Description",
  //       width: "20%",
  //       ...getColumnSearchProps("Description"),
  //     },
  //   ];

  //   return <Table columns={columns} dataSource={data} />;

  return null;
};

export default ManageShiftPlan;
