import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { Input, Button, Form, message, Space } from "antd";
import {
  Incharge,
  useCreateInchargeMutation,
  useGetAllInchargesLazyQuery,
} from "../../generated/graphql";

const CreateInchargeComponent = () => {
  const { Column } = Table;

  const [rcn, setRcn] = useState("");
  const [createIncharge, { loading, error, data }] =
    useCreateInchargeMutation();

  const [incharges, setInchargeData] = useState<Incharge[]>();
  const [getAllInchargesLazy, getAllInchargesOBJ] =
    useGetAllInchargesLazyQuery();

  useEffect(() => {
    getAllInchargesLazy().then((res) => {
      console.log(res.data?.getAllIncharges);
      setInchargeData(res.data?.getAllIncharges ?? []);
    });
  }, []);

  const handleSubmit = () => {
    if (rcn.trim() === "") {
      message.error("RCN cannot be empty");
      return;
    }

    createIncharge({
      variables: {
        createInchargeInput: {
          rcn: Number(rcn),
        },
      },
    }).then((res) => {
      console.log(res.data?.createIncharge);
      // setInchargeData(res.data?.getInchargesByShiftId ?? []);
    });

    console.log("Incharge created with RCN:", rcn);

    // Clear the input
    setRcn("");

    // Show a success message
    message.success("Incharge created successfully");
  };

  return (
    <>
      <Form layout="inline" onFinish={handleSubmit}>
        <Form.Item>
          <Input
            type="text"
            placeholder="Enter RCN"
            value={rcn}
            onChange={(e) => setRcn(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

      <Table dataSource={incharges}>
        <Column title="RCN" dataIndex="rcn" key="rcn" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="ShiftId" dataIndex="shiftId" key="shiftId" />
        <Column title="Action" key="action" />
      </Table>
    </>
  );
};

export default CreateInchargeComponent;
