// function PetInfo(props) {
//   return <h3>My {props.animal} is {props.age} years old</h3>;
// }

function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don't have animal";

  return <h3>{text}</h3>;
}

export default PetInfo;
