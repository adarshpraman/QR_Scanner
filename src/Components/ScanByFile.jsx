import React, { useState, useRef } from "react";
import QrScanner from "qr-scanner";
import { Grid, Button } from "@mui/material";

const ScanByFile = () => {
  const fileInputRef = useRef(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [scanResultFile, setScanResultFile] = useState("");

  const handleScanFile = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const result = await QrScanner.scanImage(file);
        setScanResultFile(result);
        const imageUrl = URL.createObjectURL(file);
        setUploadedImageUrl(imageUrl);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
      <fieldset>
        <legend>
          <h3>Scan Qr Code from File</h3>
        </legend>

        <Button
          className="btn"
          variant="contained"
          color="success"
          onClick={() => fileInputRef.current.click()}
        >
          Scan Qr Code
        </Button>
        <input
          ref={fileInputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleScanFile}
        />
        {uploadedImageUrl ? (
          <div className="img-container">
            <img
              src={uploadedImageUrl}
              alt="Uploaded QR Code"
              className="uploaded-img"
            />
          </div>
        ) : null}
        <h3 style={{ marginTop: "20px" }}>Scanned Code: {scanResultFile}</h3>
      </fieldset>
    </Grid>
  );
};

export default ScanByFile;
