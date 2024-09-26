import { Button, Form, FormProps,  Modal, Select, Upload } from "antd";
import { PiUploadLight } from "react-icons/pi";

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




const AddBannerModal = ({ open, setOpen }: TPropsType) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
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
        <div className="">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item label="Category name" name="category">
              {/* upload banner */}

              {/* image upload  */}
              <Form.Item
                name="image"
                valuePropName="fileList"
                getValueFromEvent={(e) =>
                  Array.isArray(e) ? e : e && e.fileList
                }
                style={{
                  textAlign: "center",
                  border: "2px dashed #232323",
                  minHeight: "150px",
                  overflow: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10px",
                }}
              >
                <Upload
                  name="image"
                  listType="picture"
                  beforeUpload={() => false}
                >
                  <div className="flex flex-col justify-center items-center">
                    <PiUploadLight size={40} className="text-primaryBlack" />
                    <p className="text-primaryBlack">
                      Drop your imager here, or browse <br />
                      Jpeg, png are allowed
                    </p>
                  </div>
                </Upload>
              </Form.Item>
              {/* select banner */}

              <Select
                defaultValue="eletronic"
                size="large"
                style={{ border: "none" }}
                className=""
                onChange={handleChange}
                options={[
                  { value: "eletronic", label: "Eletronic" },
                  { value: "fashion", label: "Fashion" },
                  { value: "Freezer", label: "Freezer" },
                ]}
              />
            </Form.Item>
            <Button
              htmlType="submit"
              block
              size="large"
              className="bg-primaryOrange text-primaryWhite"
            >
              Add Category
            </Button>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default AddBannerModal;
