function Taska(props) {
  // let name;

  function handleclick() {
    console.log("Button clicked")
  }
  return (
    <div>
      <h1>{props.person?.name}</h1>
      <p> {props.person?.message}</p>
      <p>{props.person?.phonenumbers}</p>
      {/* {name ? <p>hello</p> : null} 
      {name && <p>hello </p>} */}
      <button onClick={handleclick}click me/>
    </div>
  );
}
export default Taska;
