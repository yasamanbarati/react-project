import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";
import Grid_Box from "./componetnt/grid_box";
import Card_Text from "../component/card/card_text/card_text";

const Home = () => {
  const projectInfo = useSelector((state) => state.home.projectList);

  return (
    <Fragment>
      <Container maxWidth="xl" sx={{marginTop:"50px"}}>
        <Card_Text
          text="All Project"
          variant="h1"
          Size="2rem"
          weight="800"
          textAlign="center"
          color="gray"
          paddingLeft="0"
        />
        <Grid container spacing={2} sx={{ margin: "50px 0" }}>
          {projectInfo.map((item, index) => {
            return (
              <Grid_Box
                key={index}
                Navigationlink={item.path}
                ImageSrc={item.image}
                text={item.title}
                TextVariant="h2"
                TextSize="1.3rem"
                TextWeight="800!important"
              />
            );
          })}
        </Grid>
      </Container>
    </Fragment>
  );
};
export default Home;
