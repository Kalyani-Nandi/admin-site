import React from "react";
import CardDataStats from "./CardDataStats"; // Adjust the import path as needed

const cardsData = [
  { title: "Users", total: "1,234", rate: "3.8%", levelUp: true },
  { title: "Sales", total: "567", rate: "1.2%", levelUp: true },
  { title: "Orders", total: "789", rate: "0.8%", levelDown: true },
  { title: "Revenue", total: "$12,345", rate: "4.5%", levelUp: true },
  { title: "Customers", total: "912", rate: "2.0%", levelDown: true },
  { title: "Visitors", total: "4,567", rate: "5.3%", levelUp: true },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cardsData.map((card, index) => (
        <CardDataStats
          key={index}
          title={card.title}
          total={card.total}
          rate={card.rate}
          levelUp={card.levelUp}
          levelDown={card.levelDown}
        />
      ))}
    </div>
  );
};

export default CardList;
