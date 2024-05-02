import Taska from './Taska';

// function DisplayMessage() {
//  return "woow !"
// }

// function Hello() {

//   const phoneNumbers=[709343,6473648,7584758]
//  return (
//    <div>

//      <Taska name="reuben" message="you can make it" /> <Taska name=" kimanzi" message="youre a real man" phonenumbers={phoneNumbers } />
//    </div>
//  );
// }

// export default Hello;

function Hello() {
  const person = {
    name: 'kimanzi',
    message: 'welcome home',
    phonenumber: [1, 2, 3, 4]
  };
  return (
    <div>
      <Taska person={person} />
    </div>
  );
}

export default Hello;
