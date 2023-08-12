import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  message,
  InputNumber,
  Radio,
  Form,
  Button,
  Input,
  Checkbox,
} from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { Divider, Space, Tag, Toast } from "antd-mobile";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateFtdformInput,
  UpdateFtdformDocument,
  UpdateFtdformInput,
  UpdateFtdformMutation,
  UpdateFtdformMutationVariables,
} from "../../generated/graphql";
const { Paragraph } = Typography;

export const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function calculateFtdDecision(
  hour24Sleep: number,
  hour48Sleep: number,
  medicineTaken: boolean,
  goodHealth: boolean
): boolean {
  const physicalFitness = goodHealth && !medicineTaken;

  const sleep = (hour24Sleep < 6 && hour48Sleep >= 12) || hour24Sleep > 6;

  const ftdDecision = physicalFitness && sleep;

  return ftdDecision;
}

function calculateRiskLevel(
  hour24Sleep: number,
  hour48Sleep: number,
  medicineTaken: boolean,
  goodHealth: boolean
): "Low Risk" | "Medium Risk" | "High Risk" | "Very High Risk" {
  const enoughSleep =
    (hour24Sleep >= 6 && hour48Sleep >= 12) || hour24Sleep > 6;

  if (goodHealth && enoughSleep && !medicineTaken) {
    return "Low Risk";
  } else if (goodHealth && (!enoughSleep || medicineTaken)) {
    return "Medium Risk";
  } else if (!goodHealth && enoughSleep) {
    return "High Risk";
  } else {
    return "Very High Risk";
  }
}

function calculateRiskLevelScoreNumeric(
  hour24Sleep: number,
  hour48Sleep: number,
  medicineTaken: boolean,
  goodHealth: boolean
): number {
  const enoughSleep =
    (hour24Sleep >= 6 && hour48Sleep >= 12) || hour24Sleep > 6;

  if (goodHealth && enoughSleep && !medicineTaken) {
    return 1; // Low Risk
  } else if (goodHealth && (!enoughSleep || medicineTaken)) {
    return 2; // Medium Risk
  } else if (!goodHealth && enoughSleep) {
    return 3; // High Risk
  } else {
    return 4; // Very High Risk
  }
}

const riskLevel = calculateRiskLevel(5, 13, true, true);
console.log("Risk Level:", riskLevel); // Output: Risk Level: 2

const riskLevelNumeric = calculateRiskLevelScoreNumeric(5, 13, true, true);
console.log("Risk Level:", riskLevelNumeric);

export const AntdFTDForm = () => {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [form] = Form.useForm();
  const [medicineTaking, setMedicineTaking] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const [updateFtdForm, { error }] = useMutation<
    UpdateFtdformMutation,
    UpdateFtdformMutationVariables
  >(UpdateFtdformDocument);

  useEffect(() => {
    setDisableSubmit(true);
  }, [form.getFieldValue("submitButton")]);

  if (error) {
    Toast.show(error.message);
  }

  const handleupdateFTDForm = async (updateFormInputx: UpdateFtdformInput) => {
    console.debug("handleUPDateformcalled");
    await updateFtdForm({
      variables: { updateFtdformInput: updateFormInputx },
    });
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("handle submit called");

    const ApprovalStatus = calculateFtdDecision(
      form.getFieldValue("twentyfourinput"),
      form.getFieldValue("fortyeightinput"),
      form.getFieldValue("MedicineTaking") === "Yes" ? true : false,
      form.getFieldValue("goodHealth") === "Yes" ? true : false
    );

    const updateForm: UpdateFtdformInput = {
      id: operator_formid,
      forty_eight_hour_score: form.getFieldValue("fortyeightinput"),
      twenty_four_hour_score: form.getFieldValue("twentyfourinput"),
      taking_medicine_score:
        form.getFieldValue("MedicineTaking") === "Yes" ? 1 : 0,
      good_health_score: form.getFieldValue("goodHealth") === "Yes" ? 1 : 0,
      approval_status: ApprovalStatus ? 4 : 2,
    };

    Toast.show(`Approval Status: ${ApprovalStatus}`);

    handleupdateFTDForm(updateForm);
    console.log("update form data:", updateForm);
    console.log("handle submit called");

    setLoading(true);
    // await waitTime(1000);
    message.success("Successfully Form Submitted.");
    setLoading(false);
    navigate("/operator");
    // navigate('/operator');
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const isLastStep = step === 2;
  const { state } = useLocation();
  const { operator_formid, operator_shiftid, operator_rcn } = state;
  return (
    <Card>
      <Form
        onFinish={handleSubmit}
        form={form}
        onSubmitCapture={(e) => {
          console.log("submit captured", e);
        }}
      >
        <Space>
          <Tag>Form ID: {operator_formid} </Tag>
          <Tag> Shift ID {operator_shiftid} </Tag>
          <Tag> RCN: {operator_rcn}</Tag>
        </Space>

        <Divider> Health </Divider>
        <Form.Item
          name="goodHealth"
          label="Are you in good Health Right now?"
          rules={[{ required: true }]}
        >
          <Radio.Group options={["Yes", "No"]} />
        </Form.Item>

        <Form.Item
          name="MedicineTaking"
          label="Are you taking any medicine?"
          rules={[{ required: true }]}
        >
          <Radio.Group
            options={["Yes", "No"]}
            onChange={(e) =>
              e.target.value === "Yes"
                ? setMedicineTaking(true)
                : setMedicineTaking(false)
            }
          />
        </Form.Item>

        {medicineTaking && (
          <Form.Item
            name="MedicineWillEffect"
            label="Will it affect your driving?"
            rules={[{ required: true }]}
          >
            <Radio.Group options={["Yes", "No"]} />
          </Form.Item>
        )}

        <Divider> Sleep </Divider>

        <Form.Item
          name="twentyfourinput"
          label="Hours I have slept in the last 24 hours?"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} max={24} placeholder="24 hours" />
        </Form.Item>

        <Form.Item
          name="fortyeightinput"
          label="Hours I have slept in the last 48 hours?"
          rules={[{ required: true }]}
        >
          <InputNumber min={0} max={48} placeholder="48 hours" />
        </Form.Item>

        <Form.Item rules={[{ required: true }]}>
          <Checkbox
            onChange={(e) =>
              e.target.checked === true
                ? setDisableSubmit(false)
                : setDisableSubmit(true)
            }
            onClick={() => {}}
          >
            I have read and understood the above questions, and I certify that
            my answers are true and complete to the best of my knowledge.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            block
            onClick={handleSubmit}
            name="submitButton"
            disabled={disableSubmit}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AntdFTDForm;
