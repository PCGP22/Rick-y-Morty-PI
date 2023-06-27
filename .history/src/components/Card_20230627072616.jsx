import "./Card.modules.css"
export default function Card({name,status,species,gender,image,origin}) {
   function onClose(){
      window.alert('Emulamos que se cierra la card')
   }
   return (
      <div className="card">
         <button onClick={onClose}>X</button>
         <img src={image} alt='' />
         <div className="description">
            <dl className="nombre">{name}</dl>
            <dd>Status: {status}</dd>
            <dd>Species: {species}</dd>
            <dd>Gender: {gender}</dd>
            <dd>Origin: {origin.name}</dd>
         </div>
      </div>
   );
}