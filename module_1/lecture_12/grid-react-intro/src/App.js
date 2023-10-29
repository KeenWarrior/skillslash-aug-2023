import "./App.css";
import { Grid } from "@mui/material";

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div
      className="App"
      style={{
        margin: "20px",
        width: "100%",
      }}
    >
      <Grid container spacing={2}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
              <div
                key={index}
                style={{
                  height: "100px",
                  width: "100%",
                  backgroundColor: "red",
                  border: "1px solid black",
                }}
              >
                {item}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default App;
