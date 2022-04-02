import './style.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './Header'
import Cards from './Cards'
import Pagination from './Pagination'

const hash = "438313238a66c5fa9402c3235820e596";

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
      // console.log(savedPages);
      let savedPage = savedPages.filter(savedPage =>(savedPage.number === page));
      if(Object.keys(savedPage) > 0 ){
        console.log("savedpageeeeeeeeee", savedPage);
        setCurrentPage(savedPage);
      }else
      {const getMarvelData = async()=>{
          const response = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=986efdb7820b2ac70e3a61e19ed53fba&hash=${hash}`)
          const characters = response.data.data.results;
          const number = page;
          if(savedPages.every(value => value.number !== page)){
           console.log("every section");
           setSavedPages(savedPages => [...savedPages, {number, characters}])
          }
          setCurrentPage(characters);
      }
      getMarvelData();
    }
    } 
  ,[page])

  return (
    <div className="App">
      <Header></Header>
      <Cards currentPage={currentPage}></Cards>
      <Pagination page={page} setPage={setPage}></Pagination>
    </div>
  );
}

export default App;
