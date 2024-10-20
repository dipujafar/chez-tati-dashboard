"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { TOrderData } from "@/types/types";
import Empty from "@/utils/Empty";
import { ChevronLeft, ChevronRight } from "lucide-react";
import moment from "moment";
import Link from "next/link";

const TABLE_HEADERS = [
  "Order ID",
  "Date",
  // "Quantity",
  "Total",
  "Status",
  "Action",
];

const OrderHistrory = () => {
  const { data: orderData, isLoading: isOrderDataLoading } =
    useGetOrdersQuery(undefined);

  return (
    <div>
      {/* Recent Order History */}
      {isOrderDataLoading ? (
        <Skeleton className="h-[400px] w-full rounded-xl" />
      ) : (
        <div className="dashboard-card py-6">
          <div className="mb-5 flex items-center justify-between px-4">
            <h3 className="text-2xl font-medium">Order History</h3>
          </div>

          {orderData?.data.length === 0 ? (
            <Empty message="No order found"></Empty>
          ) : (
            <>
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
                  {orderData?.data?.map((data: TOrderData) => (
                    <TableRow key={data._id}>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>
                        {moment(data?.createdAt).format("MMMM Do YYYY")}
                      </TableCell>
                      {/* <TableCell>{data.quantity}</TableCell> */}
                      <TableCell>{data.totalAmount}</TableCell>
                      <TableCell>{data.status}</TableCell>
                      <TableCell>
                        <Link
                          href={`/user/order-history/${data._id}`}
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
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderHistrory;
