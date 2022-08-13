import './main.css';
import React from 'react';
import Button from '@mui/material/Button';

export function Home(){
  const [films, setFilms] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)


  const loadContent= function(){
    setIsLoading(true)
    fetch("https://swapi.dev/api/films/")
    .then(x => x.json())
    .then(function(backend_output){
      setIsLoading(false)
      setFilms(backend_output.results)  
    })
  }

  React.useEffect(()=> {
    loadContent()
  }, []);

  return (
    <>
      <div className='main_div'> 
        <div className='button_div'>
          <Button variant="contained" onClick={loadContent}>Load Films</Button>
          {isLoading && (
            <img className='loader' alt="" src="https://i.gifer.com/ZZ5H.gif" />
          )}
        </div>
        {films.map((content)=>(
          <div className='layout' key={content.episode_id} >{content.title}, directed by {content.director}</div>
        ))}
      </div>

    </>
  )
}