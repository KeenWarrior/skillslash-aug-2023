import { Card, Grid, Typography, styled } from "@mui/material";
import services from "../data/services";

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#212222",
  padding: "2rem",
}));

const RootContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: "80px 80px",
  [theme.breakpoints.down("sm")]: {
    padding: "80px 20px",
  },
}));

function Services() {

  return (
    <RootContainer id="services">
      <Typography
        variant="h3"
        gutterBottom
        style={{ color: "#ffc107", textAlign: "center" }}
        marginBottom="4rem"
      >
        Services
      </Typography>
      <Grid container spacing={2}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <ServiceCard>
              <Typography
                variant="h5"
                style={{
                  color: "#ffc107",
                }}
              >
                {service.icon}
              </Typography>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </RootContainer>
  );
}

export default Services;
