import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

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
];

const OrderHistrory = () => {
  return (
    <div>
      {/* Recent Order History */}
      <div className="dashboard-card py-6">
        <div className="mb-5 flex items-center justify-between px-4">
          <h3 className="text-2xl font-medium">Order History</h3>
        </div>

        <Table>
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
        <div className="mt-7 w-full">
          {/* pagination for data slice */}
          <Pagination>
            <PaginationContent>
              <PaginationItem className="rounded-full bg-light-gray p-2 shadow-md">
                <ChevronLeft />
              </PaginationItem>
              <PaginationItem className="rounded-full">
                <PaginationLink
                  href="#"
                  isActive
                  className="rounded-full bg-primary-color text-white"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem className="rounded-full bg-light-gray p-2 shadow-md">
                <ChevronRight />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default OrderHistrory;
