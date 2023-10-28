import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootContainer = styled("div")(({ theme }) => ({
  padding: "80px 80px",
  display: "flex",
  flexDirection: "row",
  gap: "80px",
  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));

const PersonImage = styled("img")(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("lg")]: {
    width: "250px",
  },
}));

function AboutMe() {
  const theme = useTheme();

  const isMdOrUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <RootContainer>
      {isMdOrUp && <PersonImage src="/images/person.png" />}
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          style={{
            color: "#ffc107",
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            color: "#fff",
          }}
        >
          About Me Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor si voluptatem quia voluptas sit aspernatur
          aut odit aut fugit, sed quia consequuntur
        </Typography>
      </div>
    </RootContainer>
  );
}

export default AboutMe;
