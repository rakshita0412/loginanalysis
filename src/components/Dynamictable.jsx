import React, { useEffect, useState } from "react";
import axios from "axios";
import "./dynamic.css"
function Dynamictable({data, email}) {
    const [formattedUserData, setFormattedUserData] = useState(data);
  const [loading, setLoading] = useState(false);
 

  console.warn("data", data)
  return (
    <div className="table-container">
      {/* Input field to enter email */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="custom-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Login Date</th>
              <th>Login Time</th>
              <th>Login Count Per Day</th>
              <th>Location</th>
              <th>Login Count</th>
            </tr>
          </thead>
          <tbody>
          {data &&
                data.loginDates &&
                data.loginDates.map((date, index) => (
                  <tr key={index}>
                    <td>{data.email}</td>
                    <td>{date}</td>
                    <td>
                      {data.loginTime[0] &&
                       data.loginTime[0][date] &&
                       data.loginTime[0][date].map((time, timeIndex) => (
                      <div key={timeIndex}>{time}</div>
                    ))}
                </td>
                <td>
                    {data.loginCountPerDay &&
                      data.loginCountPerDay.map((countPerDay, countIndex) => (
                        <div key={countIndex}>
                          {countPerDay[date]}
                        </div>
                      ))}
                  </td>
                  <td>
                    {data.Location &&
                      data.Location.map((locationData, locationIndex) => (
                        <div key={locationIndex}>
                          {locationData[date] &&
                            locationData[date].join(", ")}
                        </div>
                      ))}
                  </td>
                  {index === 0 && (
                    <td rowSpan={data.loginDates.length}>
                      {data.loginCount}
                    </td>
                  )}
                </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Dynamictable;
