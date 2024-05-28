import React, { useState, useRef, useEffect } from "react";
import QrScanner from "qr-scanner";
import { Grid, Button } from "@mui/material";

const ScanByWebCam = () => {
  const [scanResultWebCam, setScanResultWebCam] = useState("");
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      qrScannerRef.current = new QrScanner(videoRef.current, (result) =>
        handleScanWebCam(result)
      );
    }
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.stop();
      }
    };
  }, []);

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  };
  const startWebCamScan = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.start();
    }
  };

  const stopWebCamScan = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
    }
  };

  return (
    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
      <fieldset>
        <legend>
          <h3>Scan Qr Code by Web Cam</h3>
        </legend>
        <div className="button-container">
          <Button
            className="btn"
            variant="contained"
            color="secondary"
            onClick={startWebCamScan}
          >
            Start WebCam
          </Button>
          <Button
            className="btn"
            variant="contained"
            color="secondary"
            onClick={stopWebCamScan}
          >
            Stop WebCam
          </Button>
        </div>
        <div className="video-container">
          <video ref={videoRef} />
        </div>
        <h3 style={{ marginTop: "20px" }}>
          Scanned By WebCam Code: {scanResultWebCam}
        </h3>
      </fieldset>
    </Grid>
  );
};

export default ScanByWebCam;
