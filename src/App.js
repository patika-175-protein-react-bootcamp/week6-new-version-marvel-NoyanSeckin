import './style.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './Header'
import Cards from './Cards'
import Pagination from './Pagination'

const hash = "6d19f89a95c74a040049e4a7241adfc2";

function App() {

  // Page i mapleyip her birine changePage fonksiyonu verebilir miyim?
  const [page, setPage] = useState(1);
  const [savedPages, setSavedPages] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const changePage = () => {
    savedPages.forEach(savedPage => {
      // if()
    })
  }
  useEffect(()=>{
    // TODO: Check if page was loaded if not call getMarvelData
    if(savedPages > 0){
      const savedPage = savedPages.filter(savedPage =>(savedPage.number === page));
      console.log("savedpage", savedPage);
      setCurrentPage(savedPage);
    } else{
      const getMarvelData = async()=>{
        const response = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=ed57904801eafaf117c1ae9f01adf385&hash=${hash}`)
        const characters = response.data.data.results;
        setSavedPages(savedPages => [...savedPages, 
          {number: page, characters}]);
        setCurrentPage(characters);
      }
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
