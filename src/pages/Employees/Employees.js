import React from "react";
import Grid from "@mui/material/Grid";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import { useNavigate } from "react-router";
import CRUDtableEmployee from "../../components/CRUDtableEmployee/CRUDtableEmployee";
function Employees() {
  const navigate = useNavigate();
  return (
    <Grid container item xs={10}>
      <Grid xs={12} sm={6} md={6} style={{ marginLeft: "10rem" }}>
        <div>
          <CommonButton
            sx={{ marginTop: "20px" }}
            variant="contained"
            size="small"
            onClick={() => navigate("addroute")}
          >
            Add Employee
          </CommonButton>
        </div>

        <CRUDtableEmployee style={{ margin: "10rem" }}></CRUDtableEmployee>
      </Grid>
    </Grid>
  );
}

export default Employees;
