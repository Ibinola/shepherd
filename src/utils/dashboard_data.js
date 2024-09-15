import cloud from '../assets/svgs/cloud-dashboard.svg'
import transaction_timeline from '../assets/svgs/transaction_timeline_icon.svg'
import stats_icon1 from '../assets/svgs/stats_icon1.svg'
import stats_icon2 from '../assets/svgs/stats_icon2.svg'
import stats_icon3 from '../assets/svgs/stats_icon3.svg'
import notification_item from "../assets/svgs/notification_item.svg";
import notification_item_2 from "../assets/svgs/notification_item_2.svg";

export const userName = "Leslie";

export const weather = {
    icon: cloud,
    day: "Tuesday",
    date: "July 21",
    time: "13:00",
};

export const notification_items = [
    {
        id: 1,
        date: "19 May, 2023",
        message: "Your chemistry lesson session with Leslie Peters started",
        icon: notification_item,
        showButton: false,
    },
    {
        id: 2,
        date: "2 hrs ago",
        message: "You received a new contract offer",
        icon: notification_item_2,
        showButton: true,
        buttonText: "View Offer",
    },
    {
        id: 3,
        date: "2 hrs ago",
        message: "William Kelly withdrew her offer",
        icon: notification_item_2,
        showButton: false,
        isWithdrawn: true,
    },
];


export const stats = [
    {
        label: "Total earned",
        value: "$5160.50",
        description: "24hrs of tutoring completed!",
        bgColor: "#207DF7", // Tailwind's bg-blue-500 equivalent
        textColor: "#FFFFFF", // Tailwind's text-white
        valueColor: "#FFFFFF", // Tailwind's text-opacity-80
        descColor: "#FFFFFF", // Tailwind's text-opacity-80
        icon: stats_icon1,
    },
    {
        label: "Total Clients",
        value: "314",
        description: "Increased 10% this month",
        bgColor: "#F6F7F9",
        textColor: "#6E7682",
        valueColor: "#212224",
        descColor: "#4CAF50",
        icon: stats_icon2,
    },
    {
        label: "Current clients",
        value: "20",
        description: "- Decreased 10% this month",
        bgColor: "#F6F7F9",
        textColor: "#6E7682",
        valueColor: "#212224",
        descColor: "#F53535",
        icon: stats_icon3,
    }
];


export const transactions = [
    {
        date: "17th May 2023 • 13:00",
        description: "You received a payment of $10.95 from Leslie Peters for Chemistry Lessons",
        image: transaction_timeline
    },
    {
        date: "17th May 2023 • 13:00",
        description: "You received a payment of $10.95 from Leslie Peters for Chemistry Lessons",
        image: transaction_timeline
    },
    {
        date: "17th May 2023 • 13:00",
        description: "You received a payment of $10.95 from Leslie Peters for Chemistry Lessons",
        image: transaction_timeline
    },
    {
        date: "17th May 2023 • 13:00",
        description: "You received a payment of $10.95 from Leslie Peters for Chemistry Lessons",
        image: transaction_timeline
    }
];
export const schedule = {
    date: new Date(),
    // onChange: setDate,
    events: [
        { title: "Upcoming chemistry session with Liam Kelly", time: "03:30pm - 04:30pm (1hr)", bgColor: "#FFF5F0" },
        { title: "Chemistry Lesson with Leslie Peters", time: "05:00pm - 06:00pm (1hr)", bgColor: "#F4FAF5" }
    ]
};
