import { NotificationItem } from "./NotificationItem";
import notification_items from "../assets/svgs/notification_item.svg";
import notification_item_2 from "../assets/svgs/notification_item_2.svg";

export const NotificationDropdown = ({ isOpen }) =>
  isOpen && (
    <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-lg py-1 z-10">
      <div className="p-4 flex justify-between items-center">
        <span className="font-semibold text-xs text-[#6E7682] uppercase">
          Notifications
        </span>
        <span className="text-[#207DF7] text-sm cursor-pointer">
          Mark all as read
        </span>
      </div>

      <div className="p-4 space-y-4">
        <NotificationItem
          imgSrc={notification_items}
          date="19 May, 2023"
          message="Your chemistry lesson session with Leslie Peters started"
        />
        <NotificationItem
          imgSrc={notification_item_2}
          date="2 hrs ago"
          message="You received a new contract offer"
          buttonLabel="View Offer"
        />
        <NotificationItem
          imgSrc={notification_item_2}
          date="2 hrs ago"
          message="William Kelly withdrew her offer"
        />
        <NotificationItem
          imgSrc={notification_item_2}
          date="2 hrs ago"
          message="You received a new contract offer"
          buttonLabel="View Offer"
        />
      </div>
    </div>
  );
