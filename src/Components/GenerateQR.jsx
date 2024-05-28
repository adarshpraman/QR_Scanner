import React, { useState } from "react";
import QRCode from "qrcode";
import { Grid, TextField, Button } from "@mui/material";

const GenerateQR = () => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
      <fieldset>
        <legend>
          <h3>Generate Qr Code</h3>
        </legend>

        <div className="input-container">
          <TextField
            label="Enter Text Here"
            variant="standard"
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            className="btn"
            variant="contained"
            color="primary"
            onClick={generateQrCode}
          >
            Generate
          </Button>
        </div>
        <div className="qr-container">
          {imageUrl ? (
            <a href={imageUrl} download>
              <img src={imageUrl} alt="img" className="qr-code" />
            </a>
          ) : null}
        </div>
      </fieldset>
    </Grid>
  );
};

export default GenerateQR;
