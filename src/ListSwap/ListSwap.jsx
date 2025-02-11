import React, { useState } from 'react'



const ListSwap = () => {

  const Arr1 = ["Shubham1", "Abhi1", "Subodh1"];
  const Arr2 = ["Rupesh2", "Rohan2", "Mayur2"];

  const [listOne, setListOne] = useState(Arr1);
  const [listTwo, setListTwo] = useState(Arr2);
  const [selectedOne, setSelectedOne] = useState(null);
  const [selectedTwo, setSelectedTwo] = useState(null);

  const handleClickOne = (e, index) => {
    setSelectedOne(index);
  }
  const handleClickTwo = (e, index) => {
    setSelectedTwo(index);
  }

  const handleSwap = () => {

    const List1 = [...listOne];
    const List2 = [...listTwo];


    let temp = List1[selectedOne];
    List1[selectedOne] = List2[selectedTwo];
    List2[selectedTwo] = temp;


    setListOne(List1);
    setListTwo(List2);

  }
  return (
    <>
      <h1>List 1</h1>
      <ul>
        {
          listOne.map((item, index) => (
            <li key={index}>
              <input type='radio'
                name='options'
                onClick={(e) => handleClickOne(e, index)} />
              {item}
            </li>
          ))
        }
      </ul>
      <h1>List 2</h1>
      <ul>
        {
          listTwo.map((item, index) => (
            <li key={index}>
              <input type='radio'
                name='optionsTwo'
                onClick={(e) => handleClickTwo(e, index)} />
              {item}
            </li>
          ))
        }
      </ul>

      <button onClick={handleSwap}>Swap</button>
    </>

  )
}


export default ListSwap