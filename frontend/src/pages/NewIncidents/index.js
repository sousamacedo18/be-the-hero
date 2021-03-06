import React,{useState} from 'react';
import logoImg from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';
import api from '../../services/ap';

import './styles.css';

export default function NewIncidents(){
    const [title,setTitle] =useState('');
    const [description,setDescription] =useState('');
    const [value,setValue] =useState('');
    const ongId= localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,

        };
        try{
            await api.post('incidents',data,{
                headers:{
                    Authorization:ongId,
                }
            })
            history.push('/profile');
        }catch(error){
            alert('Error ao cadastrar caso, tente novamente.')
        }
    }
    return(
        <div className="New-incidents-container">
   
   
        <div className="content">
            <section>
               <img src={logoImg} alt="Be the Hero" />
               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
   
               <Link className="back-link" to="/profile">
                           <FiArrowDownLeft size={16} color="#E02041"/>
                           Voltar para Home
                       </Link>
            </section>
            <form onSubmit={handleNewIncident}>
               <input 
                    placeholder="Titulo do Caso"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
               />
                    
               <textarea 
                     placeholder="Descrição"
                     value={description}
                     onChange={e=>setDescription(e.target.value)}
              />

               <input type="number" 
                    placeholder="Valor em Reais"
                    value={value}
                    onChange={e=>setValue(e.target.value)} 
               />


               <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
        </div>
        );
}