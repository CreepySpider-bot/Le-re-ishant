import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import AddIcon from '@mui/icons-material/Add';
import Header from "../../components/Header";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Logistics" />

        <Box>
          <Button
            sx={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "10px"
            }}
          >
            <AddIcon sx={{ marginRight: "10px" }} />
            ADD VEHICLE
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
        >
          <StatBox
            title="38"
            subtitle="On route vehicles"
            icon={
              <FiberManualRecordIcon sx={{ color: "red", }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
        >
          <StatBox
            title="2"
            subtitle="Vehicle with error"
            icon={
              <WarningAmberIcon
                sx={{ color: "red", backgroundColor: "rgba(255,0,0,0.2)", fontSize: "26px", borderRadius: "5px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
        >
          <StatBox
            title="1"
            subtitle="Vehicle deviated from route"
            icon={
              <ErrorOutlineIcon
                sx={{ color: "yellow", backgroundColor: "rgba(255, 255, 0, 0.2)", fontSize: "26px", borderRadius: "5px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="15px"
        >
          <StatBox
            title="2"
            subtitle="Late Vehicle"
            icon={
              <AccessTimeIcon
                sx={{ color: "purple", backgroundColor: "rgba(13, 0, 202, 0.2)", fontSize: "26px", borderRadius: "5px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontSize="35px"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Vehicle Overview
              </Typography>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0" sx={{ paddingLeft: "40px", paddingTop: "30px" }}>
            {/* <LineChart isDashboard={true} /> */}
            <ProgressCircle
              size="200"

            />
          </Box>
        </Box>
        <Box gridColumn="span 8"
          gridRow="span 1"
          backgroundColor={colors.primary[400]}>
              
        </Box>
        </Box>
      </Box>
  );
};

export default Dashboard;
