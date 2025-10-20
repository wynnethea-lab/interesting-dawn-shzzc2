import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const SHEET_URL =
    "https://opensheet.elk.sh/18jWUm5HlhA4kdK5eGa2oCqcLwSUa_e_0ZrI2_uMFAjk/Sheet1";

  useEffect(() => {
    fetch(SHEET_URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // ----- The return statement starts here -----
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📊 My Live Google Sheet Dashboard</h1>

      {/* Step 5 prettier table with bold headers */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#fafafa",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <thead>
            <tr style={{ background: "#007BFF", color: "white" }}>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    style={{
                      padding: "10px",
                      textAlign: "left",
                      fontWeight: "bold" // <-- makes header bold
                    }}
                  >
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td
                    key={j}
                    style={{
                      padding: "8px",
                      borderBottom: "1px solid #ddd"
                    }}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* End prettier table */}
    </div>
  );
}
