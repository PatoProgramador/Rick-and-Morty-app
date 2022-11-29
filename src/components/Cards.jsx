import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {
            characters.map((character) => <Card name = {character.name} species = {character.species} gender = {character.gender} image = {character.image} onClose = {character.onClose} />)
         }
      </div>
   );
}
