import styled from 'styled-components'

export const Card=styled.div`
    width:25%;
    min-width: 250px;
    margin:20px 10px;
    background-image:url(${prop=>(prop.url)});
    background-size:100% 100%;
    border-radius:19px;
    transition: 1s ease;
    border: solid 5px white;
    cursor: pointer;
   
`

export const CardContainer=styled.div`
    display:flex;
    width:99.3vw;
    height:90vh;
    padding-top: 60px;
`

export const Nav=styled.div`
   height: 60px; 
   width: 100%;
   background: #003B46;
   position: fixed;
`
