import "./App.css";
import { Container, Card, CardContent, Grid } from "@mui/material";

import GenerateQR from "./Components/GenerateQR";
import ScanByFile from "./Components/ScanByFile";
import ScanByWebCam from "./Components/ScanByWebCam";

function App() {
  return (
    <Container className="container">
      <Card>
        <h2 className="title">
          Generate Download & Scan QR Code with React js
        </h2>
        <CardContent>
          <Grid container spacing={2}>
            <GenerateQR />
            <ScanByFile />
            <ScanByWebCam />
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
