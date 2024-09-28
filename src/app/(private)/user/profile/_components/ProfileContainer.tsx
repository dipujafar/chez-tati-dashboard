import "../../User.css";
// import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TABLE_HEADERS = [
  "Order ID",
  "Date",
  "Quantity",
  "Total",
  "Status",
  "Action",
];

const TABLE_DATA = [
  {
    orderId: "#738",
    date: "8 Sep, 2020",
    quantity: "5 Products",
    total: "$135.00",
    status: "Processing",
  },
  {
    orderId: "#703",
    date: "24 May, 2020",
    quantity: "1 Product",
    total: "$25.00",
    status: "On the way",
  },
  {
    orderId: "#692",
    date: "22 Oct, 2020",
    quantity: "4 Products",
    total: "$250.00",
    status: "Completed",
  },
  {
    orderId: "#561",
    date: "1 Feb, 2020",
    quantity: "1 Product",
    total: "$35.00",
    status: "Completed",
  },
  {
    orderId: "#536",
    date: "21 Sep, 2020",
    quantity: "3 Products",
    total: "$578.00",
    status: "Cancelled",
  },
  {
    orderId: "#492",
    date: "22 Oct, 2020",
    quantity: "7 Products",
    total: "$345.00",
    status: "Completed",
  },
  {
    orderId: "#445",
    date: "12 Jan, 2021",
    quantity: "2 Products",
    total: "$99.99",
    status: "Pending",
  },
];

export default function ProfileContainer() {
  return (
    <div className="space-y-8 text-primary-black">
      {/* Profile Details */}
      <div className="flex flex-col items-stretch gap-x-8 gap-y-8 lg:flex-row">
        <div className="dashboard-card flex flex-col items-center justify-center space-y-4 py-8 text-center lg:w-[60%]">
          <Avatar className="size-36">
            <AvatarImage src="https://randomuser.me/api/portraits/men/41.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div>
            <h5 className="text-2xl font-bold text-primary-black">
              Dianne Russell
            </h5>
            <p className="mb-3 mt-1 text-base text-muted-foreground">
              Customer
            </p>

            <Link href="/user/settings" className="dashboard-primary-link">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="dashboard-card px-8 py-6 lg:w-[40%]">
          <p className="font-medium uppercase text-muted-foreground">
            Billing Address
          </p>

          <h4 className="my-4 text-xl font-semibold">Dianne Russell</h4>

          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-x-3 font-medium text-primary-black/75">
              <Mail size={22} />
              dainne.ressell@gmail.com
            </p>
            <p className="flex items-center gap-x-3 font-medium text-primary-black/75">
              <Home size={22} /> 4140 Parker Rd. Allentown, New Mexico 31134
            </p>
            <p className="flex items-center gap-x-3 font-medium text-primary-black/75">
              <Phone size={22} /> +1 (555) 123-4567
            </p>
          </div>

          <button className="dashboard-primary-link mt-7">Edit Address</button>
        </div>
      </div>

      {/* Recent Order History */}
      <div className="dashboard-card py-6">
        <div className="mb-5 flex items-center justify-between px-4">
          <h3 className="text-2xl font-medium">Recent Order History</h3>
          <Link
            href="/user/order-history"
            type="button"
            className="dashboard-primary-link"
          >
            View All
          </Link>
        </div>

        <Table>
          <TableCaption>A list of your recent orders</TableCaption>
          <TableHeader>
            <TableRow className="bg-gray-scale-50">
              {TABLE_HEADERS.map((header) => (
                <TableHead key={header} className="text-center">
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="p-6 text-center font-medium">
            {TABLE_DATA.map((data) => (
              <TableRow key={data.orderId}>
                <TableCell>{data.orderId}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.quantity}</TableCell>
                <TableCell>{data.total}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>
                  <Link
                    href="/user/order-history/1"
                    className="dashboard-primary-link"
                    style={{ fontSize: "1rem" }}
                  >
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
