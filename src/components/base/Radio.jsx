import React, { useState } from "react";

export default function Radio() {
  const listGender = [
    {
      id: 0,
      title: "Nam",
    },
    {
      id: 1,
      title: "Nữ",
    },
    {
      id: 2,
      title: "Khác",
    },
  ];

  const [value, setValue] = useState(0);
  console.log("value", value);

  const handleCheck = (id) => {
    // cap nhat lai state de lay value cua checkbox
    setValue(id);
  };
  return (
    <>
      <div style={{ margin: 200 }}>
        {listGender.map((gender) => (
          <div>
            <label htmlFor="male">{gender.title}</label>
            <input
              type="radio"
              checked={value === gender.id}
              onChange={(e) => handleCheck(gender.id)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
