import React, { useEffect, useState } from 'react';
import './App.css';

import Articles from './Articles';

const title = "Sorting Articles";

function App({ articles }) {
  const [flag, setFlag] = useState(false)
  const [arr, setArr] = useState(articles)
  
  // const sortByUpvotes = () => {
  //   let arr = (articles.sort(function (a, b) {
  //     return a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
  //   }))
  //   // Array.prototype.reverse(arr)
  //   return arr
  // }

  // const sortByDates = () => {
  //   return (articles.sort(function (a, b) {
  //     return new Date(a.date) > new Date(b.date) ? -1 : new Date(b.date) > new Date(a.date) ? 1 : 0;
  //   }));
  // }

  const upVotes = () => {
    console.log("upvote");
    let arr = (articles.sort(function (a, b) {
      return a.upvotes > b.upvotes ? -1 : b.upvotes > a.upvotes ? 1 : 0
    }))
    setArr([...arr])
  }

  const upDates = () => {
    console.log("upvote");
    let arr = (articles.sort(function (a, b) {
      return new Date(a.date) > new Date(b.date) ? -1 : new Date(b.date) > new Date(a.date) ? 1 : 0
    }))
    setArr([...arr])
  }

  return (
    <div className="App">

      <div className="layout-row align-items-center justify-content-center my-20 navigation">
        <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
        <button data-testid="most-upvoted-link" onClick={upVotes} className="small">Most Upvoted</button>
        <button data-testid="most-recent-link" onClick={upDates} className="small">Most Recent</button>
      </div>
      {/* <Articles articles={flag ? sortByDates() : sortByUpvotes()} /> */}
      <Articles articles={arr} />
    </div>
  );

}

export default App;