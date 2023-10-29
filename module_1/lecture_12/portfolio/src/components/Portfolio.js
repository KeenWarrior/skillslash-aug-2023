import { Card, Grid, Typography, styled } from "@mui/material";
import projects from "../data/projects";

const ProjectCard = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  width: "100%",
}));

const ProjectDetail = styled("div")(({ theme }) => ({
  borderRadius: "4px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "80px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));

function Portfolio() {
  return (
    <RootContainer id="portfolio">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "#ffc107", textAlign: "center" }}
        marginBottom="4rem"
      >
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <ProjectCard>
              <img
                src={project.imgUrl}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "4px",
                }}
              />
            </ProjectCard>
            <ProjectDetail>
              <Typography>{project.title}</Typography>
            </ProjectDetail>
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
}

export default Portfolio;
