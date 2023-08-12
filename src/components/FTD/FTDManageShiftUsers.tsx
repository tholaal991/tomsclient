import React, { useEffect, useState } from "react";
import { Table, Button, Popconfirm, Select, Tabs, message } from "antd";
import {
  Incharge,
  User,
  useGetInchargesByShiftIdLazyQuery,
  useGetShiftUsersLazyQuery,
} from "../../generated/graphql";

const { Option } = Select;
const { TabPane } = Tabs;

const MyComponent = () => {
  const [incharges, setInchargeData] = useState<Incharge[] | undefined>(
    undefined
  );
  const [operatorData, setOperatorData] = useState<User[] | undefined>(
    undefined
  );
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [shiftUsers] = useGetShiftUsersLazyQuery({
    onCompleted: (data) => setOperatorData(data.getShiftUsers ?? []),
  });
  const [ShiftIncharges] = useGetInchargesByShiftIdLazyQuery({
    onCompleted: (data) => setInchargeData(data.getInchargesByShiftId ?? []),
  });

  useEffect(() => {
    ShiftIncharges({ variables: { shiftId: 1 } });
    shiftUsers({ variables: { shiftId: 1 } });
  }, [ShiftIncharges, shiftUsers]);

  const inchargeColumns = [
    { title: "RCN", dataIndex: "rcn" },
    { title: "Incharge Name", dataIndex: "inchargeName" },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, record: Incharge) => (
        <Popconfirm
          title="Are you sure you want to delete this row?"
          onConfirm={() =>
            setInchargeData(
              incharges?.filter((item) => item.rcn !== record.rcn)
            )
          }
          okText="Yes"
          cancelText="No"
        >
          <Button>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const operatorColumns = [
    { title: "RCN", dataIndex: "rcn" },
    { title: "Inc Name", dataIndex: "operatorName" },
  ];

  const handleAddIncharge = () => {
    if (selectedValue) {
      const recordToAdd = incharges?.find(
        (item) => item.rcn?.toString() === selectedValue
      );
      if (recordToAdd) {
        setInchargeData([...(incharges ?? []), recordToAdd]);
        setSelectedValue(undefined);
      }
    }
  };

  const handleSave = () => {
    console.log("Data to be saved:", incharges);
    // Show a success message
    message.success("Incharge data has been saved successfully.");
  };

  return (
    <Tabs defaultActiveKey="incharges">
      <TabPane tab="Incharges" key="incharges">
        <Select
          showSearch
          value={selectedValue}
          onChange={(value) => setSelectedValue(value)}
          style={{ width: 200, marginRight: 16 }}
          filterOption={(input, option) =>
            option?.children
              ? option.children
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              : false
          }
        >
          {operatorData?.map((item) => (
            <Option key={item.rcn?.toString()} value={item.rcn?.toString()}>
              {item.rcn} - {item.name}
            </Option>
          ))}
        </Select>
        <Button
          onClick={handleAddIncharge}
          type="primary"
          style={{ marginBottom: 16, marginRight: 16 }}
        >
          Add a row
        </Button>
        <Button
          onClick={handleSave}
          type="primary"
          style={{ marginBottom: 16 }}
        >
          Save
        </Button>
        <Table
          bordered
          dataSource={incharges}
          columns={inchargeColumns}
          rowClassName="editable-row"
        />
      </TabPane>
      <TabPane tab="Operators" key="operators">
        <Table
          bordered
          dataSource={operatorData}
          columns={operatorColumns}
          rowClassName="editable-row"
        />
      </TabPane>
    </Tabs>
  );
};

export default MyComponent;

// import React, { useEffect, useState } from "react";
// import { Table, Button, Popconfirm, Select, Tabs, message } from "antd";
// import {
//   Incharge,
//   User,
//   useGetInchargesByShiftIdLazyQuery,
//   useGetShiftUsersLazyQuery,
// } from "../../generated/graphql";

// const { Option } = Select;
// const { TabPane } = Tabs;

// const MyComponent = () => {
//   const [incharges, setInchargeData] =
//     useState<Incharge[]>();
//   const [operatorData, setOperatorData] = useState<User[]>();
//   const [selectedValue, setSelectedValue] = useState<string>(

//   );
//   const [shiftUsers, { loading, error, data }] = useGetShiftUsersLazyQuery();
//   const [ShiftIncharges, shiftInchargesOBJ] = useGetInchargesByShiftIdLazyQuery();

//   const updateInchargeData = () => {
//     ShiftIncharges({
//         variables: {
//             shiftId: 1,
//         },
//         }).then((res) => {
//         console.log(res.data?.getInchargesByShiftId);
//         setInchargeData(res.data?.getInchargesByShiftId ?? []);
//         });
//     };

//   const updateOperatorData = () => {
//     shiftUsers({
//       variables: {
//         shiftId: 1,
//       },
//     }).then((res) => {
//       console.log(res.data?.getShiftUsers);
//       setOperatorData(res.data?.getShiftUsers ?? []);
//     });
//   };

//   //   setSelectedShiftPlan(value);
//   //   console.log(`selected ${value}`);

//   //   const temp = await getShifts({
//   //     variables: {
//   //       shiftPlanId: parseInt(value),
//   //     },
//   //   }).then((res) => {
//   //     console.log(res.data?.findtShiftsForShiftPlanID);
//   //     setshiftsData(res.data?.findtShiftsForShiftPlanID ?? []);
//   //   });

//   useEffect(() => {
//     updateOperatorData();
//   }, []);

//   const inchargeColumns = [
//     { title: "RCN", dataIndex: "rcn" },
//     { title: "Operator Name", dataIndex: "operatorName" },
//     {
//       title: "Actions",
//       dataIndex: "actions",
//       render: (_: any, record: Incharge) => (
//         <Popconfirm
//           title="Are you sure you want to delete this row?"
//           onConfirm={() =>
//             setInchargeData(
//               incharges?.filter((item) => item.rcn !== record.rcn)
//             )
//           }
//           okText="Yes"
//           cancelText="No"
//         >
//           <Button>Delete</Button>
//         </Popconfirm>
//       ),
//     },
//   ];

//   const operatorColumns = [
//     { title: "RCN", dataIndex: "rcn" },
//     { title: "Operator Name", dataIndex: "operatorName" },
//   ];

//   const handleAddIncharge = () => {
//     if (selectedValue) {
//       const recordToAdd = incharges?.find(
//         (item) => item.rcn === Number(selectedValue)
//       );
//       if (recordToAdd) {
//         setInchargeData([...incharges, recordToAdd]);
//       }
//       setSelectedValue(undefined); // Clear selection
//     }
//   };

//   const handleSave = () => {
//     // Replace this part with the actual logic to save the data to the database
//     // You may use libraries like axios or fetch to make an API call to your backend
//     console.log("Data to be saved:", incharges);

//     // Show a success message
//     message.success("Incharge data has been saved successfully.");
//   };

//   return (
//     <Tabs defaultActiveKey="incharges">
//       <TabPane tab="Incharges" key="incharges">
//         <Select
//           showSearch
//           value={selectedValue}
//           onChange={(value) => setSelectedValue(value)}
//           style={{ width: 200, marginRight: 16 }}
//           filterOption={(input, option) =>
//             option?.children
//               ? option.children
//                   .toString()
//                   .toLowerCase()
//                   .indexOf(input.toLowerCase()) >= 0
//               : false
//           }
//         >
//           {incharges?.map((item) => (
//             <Option key={item.rcn} value={item.rcn}>
//               {item.rcn} - {item.name}
//             </Option>
//           ))}
//         </Select>
//         <Button
//           onClick={handleAddIncharge}
//           type="primary"
//           style={{ marginBottom: 16, marginRight: 16 }}
//         >
//           Add a row
//         </Button>
//         <Button
//           onClick={handleSave}
//           type="primary"
//           style={{ marginBottom: 16 }}
//         >
//           Save
//         </Button>
//         <Table
//           bordered
//           dataSource={incharges}
//           columns={inchargeColumns}
//           rowClassName="editable-row"
//         />
//       </TabPane>
//       <TabPane tab="Operators" key="operators">
//         <Table
//           bordered
//           dataSource={operatorData}
//           columns={operatorColumns}
//           rowClassName="editable-row"
//         />
//       </TabPane>
//     </Tabs>
//   );
// };

// export default MyComponent;
