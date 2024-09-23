"use client"
import { Divider, Pagination } from "antd";
import { useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";

const notificationData = [
  {
    message: "You have received $500",
    name: "John Doe",
    date: "12:30pm, 20/11/2023",
    time: "Fri, 12:30pm",
  },
  {
    message: "You have received $500",
    name: "Opu",
    date: "12:30pm, 20/11/2023",
    time: "Fri, 12:30pm",
  },
  {
    message: "You have received $500",
    name: "Uzzal",
    date: "12:30pm, 20/11/2023",
    time: "Fri, 12:30pm",
  },
  {
    message: "You have received $500",
    name: "Sampod",
    date: "12:30pm, 20/11/2023",
    time: "Fri, 12:30pm",
  },
];

const NotificationsContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);  
    const pageSize = 10; 

      // Calculate start and end index for slicing the doctors data based on the current page and page size
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
  
      // Slice the data for the current page
      const currentnotifications = notificationData.slice(startIndex, endIndex);
  return (
    <div>
    <div className="min-h-[80vh] bg-primaryRed text-[#F8FAFC] rounded-md p-7">
      <h1 className="text-2xl text-mainColor font-medium">Notifications</h1>
      <Divider></Divider>
      <div className="mt-9 grid grid-cols-1 gap-8">
        {currentnotifications.map((notification, inx) => (
          <div key={inx} className="flex gap-4 items-center">
            <div className="bg-[#FFFFFF] p-3 rounded">
              <MdOutlineNotificationsNone size={24} color="#000" />
            </div>
            <div>
              <h4 className="text-lg font-medium">
                {notification.message} from {notification?.name}
              </h4>
              <p className=" font-medium">{notification.date}</p>
              <p className="text-primaryBlack">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
     {/* pagination */}
     <div  className="w-max mt-3 ml-auto">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={notificationData.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false} // Disable page size changer if unnecessary
        />
      </div>
    </div>
  );
};

export default NotificationsContainer;