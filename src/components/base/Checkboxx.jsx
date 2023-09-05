import React, { useState } from "react";

export default function Checkboxx() {
  const listJob = [
    {
      id: 0,
      job: "Java backend developer",
    },
    {
      id: 1,
      job: "Javascript backend developer",
    },
    {
      id: 2,
      job: "CH backend developer",
    },
    {
      id: 3,
      job: "Python backend developer",
    },
  ];

  // mảng chứa danh sách công việc được chọn
  const [selectedJob, setselectedJob] = useState([]);
  console.log("selectedJob", selectedJob);

  // ham xu li checkbox
  const handleCheck = (id) => {
    // kiểm tra xem id đã tồn tại trong mảng chưa
    if (selectedJob.includes(id)) {
      // nếu như id đã tồn tại trong mảng thì lọc ra những giá trị khác với id được check
      setselectedJob(selectedJob.filter((job) => job !== id));
    } else {
      // nếu ko tồn tại thì push vào trong mảng
      setselectedJob([...selectedJob, id]);
    }
  };

  return (
    <>
      {listJob.map((j) => (
        <>
          <div style={{ marginLeft: 200 }}>
            <input
              type="checkbox"
              onChange={() => handleCheck(j.id)}
              checked={selectedJob.includes(j.id)}
            />
            {j.job}
          </div>
        </>
      ))}
    </>
  );
}
