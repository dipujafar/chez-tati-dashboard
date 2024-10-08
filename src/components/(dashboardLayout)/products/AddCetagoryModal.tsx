import { Button, ConfigProvider, Form, FormProps, Input, Modal } from "antd";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

type FieldType = {
  category: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const AddCetagoryModal = ({ open, setOpen }: TPropsType) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Form: {
            labelColor: "rgba(0,0,0,0.88)",
          },
        },
      }}
    >
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        style={{
          minWidth: "max-content",
          position: "relative",
        }}
      >
        <div className="pb-2">
          <h4 className="text-center text-2xl font-medium">
            Add new category{" "}
          </h4>
          <div className="mt-10">
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Category name" name="category">
                <Input size="large" placeholder="Enter category name"></Input>
              </Form.Item>
              <Button
                htmlType="submit"
                block
                size="large"
                className="bg-primaryBlack text-primaryWhite"
              >
                Add Category
              </Button>
            </Form>
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  );
};

export default AddCetagoryModal;
