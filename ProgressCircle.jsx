import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = 0.4 * 360;
  const angle2 = 0.5 * 360;
  const angle3 = 0.1 * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, grey ${angle}deg 360deg),
            green`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        paddingTop: "30px",
        paddingLeft: "30px",
      }}
    >
      <Box sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle2}deg, grey ${angle2}deg 360deg),
            blue`,
        borderRadius: "50%",
        paddingTop: "26px",
        paddingLeft: "26px",
        width: `${size - 60}px`,
        height: `${size - 60}px`,
      }}>
        <Box
          sx={{
            background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
              conic-gradient(transparent 0deg ${angle3}deg, grey ${angle3}deg 360deg),
              orange`,
            borderRadius: "50%",
            width: `${size - 110}px`,
            height: `${size - 110}px`,
          }}
        />
      </Box>
    </Box>
  );
};

export default ProgressCircle;
