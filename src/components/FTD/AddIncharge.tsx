import { useEffect, useState } from "react";
import {
  FindtShiftsForShiftPlanIdDocument,
  FindtShiftsForShiftPlanIdQuery,
  FindtShiftsForShiftPlanIdQueryVariables,
  GetAllFormsDocument,
  GetAllFormsQuery,
  GetAllFormsQueryVariables,
  Shift,
  ShiftplansDocument,
  ShiftplansQuery,
  ShiftplansQueryVariables,
  User,
} from "../../generated/graphql";
import { useLazyQuery, useQuery } from "@apollo/client";
import { PageContainer } from "@ant-design/pro-components";
import GenericReport from "./Report/GenericReport";
import { Card, Empty, Tabs, Toast } from "antd-mobile";
import { Select } from "antd";
import FTDModalForm from "../FTDModalForm";
import { Modal } from "antd";

import React from "react";
import {
  Space,
  Button,
  Table,
  Tag,
  Drawer,
  DrawerProps,
  RadioChangeEvent,
} from "antd";
import EditableTable from "./FTDManageShiftUsers";

const { Column, ColumnGroup } = Table;

interface ShiftType {
  key: React.Key;
  id: string;
  shift_description: string;
  shift_name: string;
  shift_end: string;
  start_time: string;
}

interface ShiftPlanType {
  key: React.Key;
  "Shift Plan ID": string;
  Description: string;
}

const shiftdata: ShiftType[] = [
  {
    key: "1",
    id: "1",
    shift_description: "Busdriver shift",
    shift_name: "Busdriver shift Evening",
    shift_end: "2021-09-01",
    start_time: "2021-09-01",
  },
  {
    key: "2",
    id: "2",
    shift_description: "Busdriver shift",
    shift_name: "Busdriver shift Evening",
    shift_end: "2021-09-01",
    start_time: "2021-09-01",
  },
  {
    key: "3",
    id: "3",
    shift_description: "Busdriver shift",
    shift_name: "Busdriver shift Evening",
    shift_end: "2021-09-01",
    start_time: "2021-09-01",
  },
];

const AddIcharge: React.FC = () => {
  const [visibleModalForm, setVisibleModalForm] = useState(false);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedShiftPlan, setSelectedShiftPlan] = useState(null);
  const [shiftsData, setshiftsData] = useState<Shift[]>();
  const [shiftUsers, setShiftUsers] = useState<User[]>();
  const [shiftUsersToAdd, setShiftUsersToAdd] = useState<User[]>();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  const {
    data: shiftPlanData,
    loading: shiftPlanLoading,
    error: shiftPlanError,
    refetch: refetchShiftPlan,
  } = useQuery<ShiftplansQuery, ShiftplansQueryVariables>(ShiftplansDocument, {
    variables: {},
  });

  useEffect(() => {
    refetchShiftPlan();
  }, [refetchShiftPlan]);

  if (shiftPlanLoading) {
    Toast.show("loading");
  }
  if (shiftPlanError) {
    Toast.show("Error fetching data");
  }

  const shiftPlans = shiftPlanData?.shiftplans;

  const mappedShiftPlans = shiftPlans?.map((shiftPlan, key) => ({
    key: key.toString(),
    "Shift Plan ID": String(shiftPlan?.id),
    Description: String(shiftPlan?.description),
  }));

  if (mappedShiftPlans !== undefined) {
    const data: ShiftPlanType[] | undefined = mappedShiftPlans?.map(
      (shiftPlan, key) => ({
        key: key.toString(),
        "Shift Plan ID": String(shiftPlan?.["Shift Plan ID"]),
        Description: String(shiftPlan?.Description),
      })
    );
  }

  const selectData = mappedShiftPlans?.map((shiftPlan, key) => ({
    value: shiftPlan?.["Shift Plan ID"],
    label: shiftPlan?.Description,
  }));

  const showDrawer = () => {
    setOpen(true);
  };

  const onChangeDrawer = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onCloseDrawer = () => {
    setOpen(false);
  };

  const [getShifts, { loading, error, data }] = useLazyQuery<
    FindtShiftsForShiftPlanIdQuery,
    FindtShiftsForShiftPlanIdQueryVariables
  >(FindtShiftsForShiftPlanIdDocument, {});

  const handleDropDownBoxChange = async (value: any) => {
    setSelectedShiftPlan(value);
    console.log(`selected ${value}`);

    const temp = await getShifts({
      variables: {
        shiftPlanId: parseInt(value),
      },
    }).then((res) => {
      console.log(res.data?.findtShiftsForShiftPlanID);
      setshiftsData(res.data?.findtShiftsForShiftPlanID ?? []);
    });

    // setshiftsData(temp)
    // temp.data?.findtShiftsForShiftPlanID?.map((shift) => {

    //   console.log(shift?.id);
    //   console.log(shift?.shift_description);
    //   console.log(shift?.shift_name);
    //   console.log(shift?.shift_end);
    //   console.log(shift?.start_time);
    // });
  };

  return (
    <PageContainer title="Manage Shift">
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        onSelect={(e) => handleDropDownBoxChange(e.toString())}
        options={selectData}
      />

      <Table dataSource={shiftsData}>
        <Column title="Shift ID" dataIndex="id" key="id" />
        <Column title="Shift Name" dataIndex="shift_name" key="shift_name" />
        <Column
          title="Shift Description"
          dataIndex="shift_description"
          key="shift_description"
        />
        <Column title="Shift End" dataIndex="shift_end" key="shift_end" />
        <Column title="Start Time" dataIndex="start_time" key="start_time" />

        <Column
          title="Action"
          key="action"
          render={(_: any, record: ShiftType) => (
            <Button size="small" onClick={showDrawer}>
              {" "}
              Manage{" "}
            </Button>
          )}
        />
      </Table>

      <Drawer
        title="Drawer with extra actions"
        placement={"right"}
        width={500}
        onClose={onCloseDrawer}
        open={open}
        extra={
          <Space>
            <Button onClick={onCloseDrawer}>Cancel</Button>
            <Button type="primary" onClick={onCloseDrawer}>
              OK
            </Button>
          </Space>
        }
      >
        <EditableTable />
      </Drawer>
    </PageContainer>
  );
};

export default AddIcharge;
