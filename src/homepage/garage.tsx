import React, { Component } from "react";
import { Grid, Card, CardContent, CardHeader } from "@material-ui/core/";
import APIURL from "../helpers/environment";

type AllProps = {
  token: string;
};

export default class Garage extends Component<AllProps, any> {
  constructor(props: AllProps) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    fetch(`${APIURL}/car/`, {
      method: "GET",
      headers: {
        Authorization: this.props.token,
      },
    })
      .then((response) => response.json())
      .then((carsList) => {
        this.setState({ cars: carsList.data });
        console.log("this.state.cars");
        console.log(this.state.cars);
      });
  }

  render() {
    return (
      <div>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {this.state.cars.map((car: any) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={this.state.cars.indexOf(car)}
            >
              <Card>
                <CardHeader
                  title={`${car.make}`}
                  subheader={` model: ${car.model}`}
                />
                <CardContent>
                  <p>
                    <b>year:</b> {car.year}
                  </p>
                  <p>
                    <b>make:</b> {car.make}
                  </p>
                  <p>
                    <b>model:</b> {car.model}
                  </p>
                  <p>
                    <b>VIN:</b> {car.VIN}
                  </p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
