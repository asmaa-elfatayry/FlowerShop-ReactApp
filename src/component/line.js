// line ,section and footer
let Line = () => {
  return (
    <div
      style={{
        backgroundColor: "#af6762ad",
        padding: "2em",
        margin: "6em 0em",
      }}
    >
      <h4 className="text-center text-light">
        “Flowers always make people better, happier and more helpful; they are
        sunshine, food and medicine for the soul.”
      </h4>
    </div>
  );
};
export let Section = () => {
  return (
    <div
      className="row container d-flex "
      style={{
        margin: "4em auto",
        padding: "2em",
        color: "#0d263c",
        justifyContent: "center",
      }}
    >
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <img
          className="w-100"
          height="500px"
          src={require("../images/flower.jpg").default}
        />
        <h5
          className="text-center text-muted"
          style={{ margin: ".5em", padding: "1.5em" }}
        >
          Open the bloom of your heart and become a gift of beauty to the world.
        </h5>
      </div>

      <div className="col-lg-3 col-md-6 col-sm-12">
        <img
          className="w-100"
          height="500px"
          src={require("../images/flw2.jpg").default}
        />
        <h5
          className="text-center text-muted"
          style={{ margin: ".5em", padding: "1.5em" }}
        >
          Make me happy,Gave me a flower.
        </h5>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <img
          className="w-100"
          height="500px"
          src={require("../images/flower2.jpg").default}
        />
        <h5
          className="text-center text-muted"
          style={{ margin: ".5em", padding: "1.5em" }}
        >
          Where flowers bloom so does hope..
        </h5>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <img
          className="w-100"
          height="500px"
          src={require("../images/flw1.jpg").default}
        />
        <h5
          className="text-center text-muted"
          style={{ margin: ".5em", padding: "1.5em" }}
        >
          Every flower blooms in its own time.
        </h5>
      </div>
    </div>
  );
};
export let Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#212529",
        padding: ".7em 0em .3em 0em",
      }}
    >
      <h4 className="text-center " style={{ color: "#efededa3" }}>
        Flowershop
      </h4>
      <h6 className="text-center " style={{ color: "#efededa3" }}>
        {" "}
        &copy;2021
      </h6>
    </div>
  );
};
export default Line;
