export default function Alert({
  setInputValue,
  inputValue,
  isClicked,
  setIsClicked
}) {
  const handleClick = () => {
    console.log('Clicked');
    console.log(inputValue);
    setIsClicked(!isClicked);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  // jeg gåa opp på ekstraopgaven. burde hatt lagret en branch, men koden fungerer fortsatt :)

  return (
    <>
      <button onClick={handleClick}>Print</button>
      <input type="text" onChange={handleChange} placeholder="type here..." />
    </>
  );
}
