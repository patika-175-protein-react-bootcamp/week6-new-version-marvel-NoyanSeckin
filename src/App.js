import './style.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './Header'
import Cards from './Cards'
import Pagination from './Pagination'

const hash = "6d19f89a95c74a040049e4a7241adfc2";

function App() {
  const getMarvelData = async()=>{
    const response = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ed57904801eafaf117c1ae9f01adf385&hash=${hash}`)
    console.log(response.data.data.results);
    const characters = response.data.data.results;
    setSavedPages(savedPages => [...savedPages, 
      {number: page, characters}]);
    setCurrentPage(characters);
     console.log("current page", currentPage);
  }
  // Page i mapleyip her birine changePage fonksiyonu verebilir miyim?
  const [page, setPage] = useState(5);
  const [savedPages, setSavedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  useEffect(()=>{
    // TODO: Check if page was loaded if not call getMarvelData
    const savedPage = savedPages.filter(savedPage =>(savedPage.number === page));
    console.log(savedPage);
    if(savedPage.length > 0){

    } else if(savedPage.length <= 0){
      getMarvelData();
    }
    } 
  ,)

  return (
    <div className="App">
      <Header></Header>
      <Cards currentPage={currentPage}></Cards>
      <Pagination page={page} setPage={setPage}></Pagination>
    </div>
  );
}

export default App;
