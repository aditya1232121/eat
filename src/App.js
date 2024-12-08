import { useState } from 'react';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];



function Button({ children , onClick }) {
  return <button className="button" onClick={onClick}> {children}</button>;
}


export default function App() {
  const [show , unshow] = useState(false) ; 
function onClick() {
  if (show) {
    unshow(false);
  } else {
    unshow(true);
  }
}
  return (
    <div className = "app">
    <div className="sidebar">
      <Friendlist />
      {show && <Form /> }
      <Button onClick={onClick}>{show ? 'Hide' : 'Show'} Add friend</Button>
      </div>
      <Splitbill/>
    </div>
    
  );
}

function Friendlist() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>
      )}
      {friend.balance > 0 && (
        <p className="green">{friend.name} owes you ${Math.abs(friend.balance)}</p>
      )}
      {friend.balance === 0 && <p>{friend.name} and you are even.</p>}
      <Button>Select</Button>
    </li>
  );
}

function Form() {
  const [name , setname] = useState("")
  const [image , setimage] = useState("https://i.pravatar.cc/48")

function handlesubmit(e) {
e.preventDefault() ;
if(!name || !image)
  return 
const newFriend = {
  name , 
  image ,
  balance : 0 ,
}
setname("");
setimage("https://i.pravatar.cc/48") ;

}
  return (
    <form className="form-add-friends" onSubmit={handlesubmit} >
      <label> 1 Friend name</label>
      <input type="text"
      value= {name}
      onchange={(e) => setname(e.target.value)} />
      <label>2 Image URL</label>
    
      <input type="text" 
       value= {image}
       onChange={(e) => setimage(e.target.value)}/>
    </form>
  );
}

function Splitbill () {
  return (
    <form className="form-split-bill">
<h2> split a bill </h2>

<label> 1 Bill value </label>
<input type = "text"></input>

<label> 2 Your expense </label>
<input type = "text"></input>

<label> 3  X's expense </label>
<input type = "text"></input>
<label> 4  How is paying the bill</label>
<select>
  <option value="user"> You </option>
  <option value="friend"> X </option>
</select>
<Button>Split bill </Button>
    </form>
  )
}