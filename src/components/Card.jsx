export default function Card({name,status,species,gender,image}) {
   function onClose(){
      window.alert('Emulamos que se cierra la card')
   }
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name.name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{name.origin}</h2>
         <img src={image} alt='' />
      </div>
   );
}
