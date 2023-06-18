import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "joel otic",
          "a fullstack software engineer",
          "a data analyst",
          "a cloud engineer",
          "a devops CI/CD engineer",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
