import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

 // definir la categoria y noticias
const [ categoria, guardarCategoria] = useState('')
const [ noticias, guardarNoticias ] = useState([]);


useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=6384a31d52334d9486eae0df9ac9e065`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
}, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />

        <div className="container white">
          <Formulario 
            guardarCategoria={guardarCategoria}
          />

          <ListadoNoticias 
            noticias={noticias}
          />
        </div>
    </Fragment>
  );
}

export default App;
