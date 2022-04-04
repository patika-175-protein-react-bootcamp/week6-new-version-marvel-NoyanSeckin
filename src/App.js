import './style.css'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from './Header'
import Cards from './Cards'
import Pagination from './Pagination'

const hash = "438313238a66c5fa9402c3235820e596";

function App() {
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState({});
  // 
  const getMarvelApi = async() =>{
    const response = await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=986efdb7820b2ac70e3a61e19ed53fba&hash=${hash}`);
    const characters = response.data.data.results;
    
    setCurrentPage({page, characters});
    
    const savedPages = JSON.parse(sessionStorage.getItem("saved-pages"));
    if(savedPages === null){
      sessionStorage.setItem("saved-pages", JSON.stringify([{page, characters}]));
    }else if(savedPages !== null){
      sessionStorage.setItem("saved-pages", JSON.stringify([...savedPages, {page, characters}]));
    }
    
  }
  const loadPage = async()=> {
    const savedPages = JSON.parse(sessionStorage.getItem("saved-pages"));
    const activePage = savedPages?.filter(value => value.page === page);
   
    if(savedPages === null){
      getMarvelApi();
    } else if(activePage?.length <= 0){
      getMarvelApi();
    }else if(activePage?.length > 0){
      const localPage = savedPages.filter(savedPage => savedPage.page === page);
      console.log(localPage[0]);
      setCurrentPage(localPage[0])
    }
  }
  useEffect(()=>{
    loadPage();
  }, [])
  return (
    <div className="App">
      <Header></Header>
      <Cards currentPage={currentPage}></Cards>
      <Pagination loadPage={loadPage} page={page} setPage={setPage}></Pagination>
    </div>
  );
}

export default App;
