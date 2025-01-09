import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import CircularProgress from "@mui/material/CircularProgress";

const Patientsnumberchat = ({ data }) => {
  const [loading, setLoading] = React.useState(true);

  // Ensure data is defined and an array
  const chartData = Array.isArray(data) ? data : [];

  React.useEffect(() => {
    if (chartData.length) {
      setLoading(false);
    }
  }, [chartData]);

  // Show loader while data is being loaded
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "350px",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  const months = chartData.map((item) => item.month);
  const BrandNameData = chartData.map((item) => item.BrandName);

  const chartSetting = {
    yAxis: [{ label: "No. of Patients" }],
  };

  return (
    <div style={{ width: "100%", marginLeft: "20px" }} className="bg-red">
      <BarChart
        height={350}
        // width={800}
        xAxis={[{ scaleType: "band", data: months ,label: "Date" }]}
        series={[
          { data: BrandNameData, label: "Number of Patients for the last 7 days", barWidth: 20 , color: "#1f1fff"},
        ]}
        barLabel="value"
        {...chartSetting}
      />
    </div>
  );
};

export default Patientsnumberchat;
