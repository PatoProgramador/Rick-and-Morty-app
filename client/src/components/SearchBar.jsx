export default function SearchBar(props) {
   return (
      <div>  
         <input type='search'/>
         <button onClick={()=>{props.onSearch(5)}}>Agregar</button>
      </div>
   );
}
