import { ProgressBar } from "@/components/ui/stepsprogress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const productData = [
  {
    name: "Smart TV",
    image: "/tvImage.png",
    price: 499.99,
    quantity: 20,
  },
  {
    name: "Freezer",
    image: "/freezerImage.png",
    price: 299.99,
    quantity: 15,
  },
  {
    name: "Freezer",
    image: "/freezerImage.png",
    price: 299.99,
    quantity: 15,
  },
];
const SingleOrderDetails = () => {
  return (
    <div className="dashboard-card py-6">
      <div className="mb-5 flex items-center justify-between px-4">
        <div className="flex items-center justify-center">
          <h3 className="text-2xl font-medium">Order Details</h3>
          <Dot />
          <p className="">April 24, 2021</p>
          <Dot />
          <p>3 Products</p>
        </div>
        <div className="flex gap-x-4">
          <Link href="/user/order-history">
            <p className="font-medium text-primary-color underline">
              Back to List
            </p>
          </Link>
          <Link href="/review">
            <p className="font-medium text-primary-color underline">
              Share Review
            </p>
          </Link>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-7 px-7 py-6 lg:flex-row">
        {/* order Address */}
        <div className="flex w-fit flex-col rounded border md:flex-row">
          <div className="border-r">
            <h1 className="border-b px-7 py-5 text-primary-gray">
              Billing Address
            </h1>
            <div className="px-7 py-5">
              <h2>Dainne Russell</h2>
              <p className="text-primary-gray">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <p className="mt-10 text-primary-gray">Email</p>
              <p>dainne.ressell@gmail.com</p>
              <p className="mt-3 text-primary-gray">Phone</p>
              <p>(671) 555-0110</p>
            </div>
          </div>
          <div>
            <h1 className="border-b px-7 py-5 text-primary-gray">
              Shipping Address
            </h1>
            <div className="px-7 py-5">
              <h2>Dainne Russell</h2>
              <p className="text-primary-gray">
                4140 Parker Rd. Allentown, New Mexico 31134
              </p>
              <p className="mt-10 text-primary-gray">Email</p>
              <p>dainne.ressell@gmail.com</p>
              <p className="mt-3 text-primary-gray">Phone</p>
              <p>(671) 555-0110</p>
            </div>
          </div>
        </div>
        {/* order payment related details */}
        <div className="rounded border">
          <div className="flex">
            <div className="flex-1 border-b border-r px-6 py-5">
              <h3 className="text-primary-gray">Order ID:</h3>
              <p>#4152</p>
            </div>
            <div className="flex-1 border-b px-6 py-5">
              <h3 className="text-primary-gray">Payment Method:</h3>
              <p>Paypal</p>
            </div>
          </div>

          <div className="px-6 py-5">
            <div className="flex justify-between py-3">
              <h3>Subtotal:</h3>
              <p className="font-medium">$365.00</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <h3>Discount:</h3>
              <p className="font-medium">20%</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <h3>Shipping</h3>
              <p className="font-medium">Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-3">
              <h3 className="text-xl">Total</h3>
              <p className="text-xl font-semibold text-primary-red">$84.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* progressdbar */}
      <div className="mx-auto mt-10 px-2 pl-14 lg:w-3/4 lg:pl-10">
        <ProgressBar
          stages={["Order Received", "Processing", "On the way", "Delivered"]}
          percent={20}
          currentStage={2}
        />
      </div>

      {/* product table */}
      <Table className="mt-20 w-full overflow-x-auto">
        <TableHeader>
          <TableRow className="bg-light-gray">
            <TableHead>Product</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Subtotal</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {productData.map((data, idx) => (
            <TableRow key={idx}>
              <TableCell className="min-w-fit font-medium">
                <div className="flex min-w-fit flex-col items-center gap-3 lg:flex-row">
                  <Image
                    src={data?.image}
                    alt="product_image"
                    width={950}
                    height={700}
                    className="size-28"
                  />
                  <p>{data?.name}</p>
                </div>
              </TableCell>
              <TableCell>${data?.price}</TableCell>
              <TableCell>
                {/* quantity */}x{data?.quantity}
              </TableCell>
              <TableCell className="font-semibold">
                ${(Number(data?.quantity) * Number(data?.price)).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SingleOrderDetails;
