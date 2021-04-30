const FizzBuzz = (props) => {
  return (
    <div>
      {props.value % 3 === 0 ? "Fizz" : null}
      {props.value % 5 === 0 ? "Buzz" : null}
    </div>
  );
};

export default FizzBuzz;
