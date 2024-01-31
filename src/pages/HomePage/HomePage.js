import HeaderBar from "../../components/HeaderBar/HeaderBar";
import CardButton from "../../components/CardButton/CardButton";
import React from "react";
import CoverPic from "../../logo/coverpichomepage.png";
import Icon1 from "../../logo/busschimg.png";
import Icon2 from "../../logo/lostimg.png";
import Icon3 from "../../logo/packimg.png";
import Icon4 from "../../logo/announceimg.png";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";

function HomePage() {
  return (
    <div>
      <img src={CoverPic}></img>
      <HeaderBar></HeaderBar>
      <Grid container>
        <Grid xs={12} sm={6} md={6}>
          <CardButton
            typography="Bus Schedules"
            icon={Icon1}
            onClick={() => console.log("Button clicked!")}
          />
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <CardButton
            typography="Lost/Found"
            icon={Icon2}
            onClick={() => console.log("Button clicked!")}
          />
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <CardButton
            typography="Package Transfer"
            icon={Icon3}
            onClick={() => console.log("Button clicked!")}
          />
        </Grid>
        <Grid xs={12} sm={6} md={6}>
          <CardButton
            typography="Delay Reports Announcements"
            icon={Icon4}
            onClick={() => console.log("Button clicked!")}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
