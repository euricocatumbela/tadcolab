// import React, { useEffect, useState } from "react";
// import Amplify, { API, graphqlOperation } from "aws-amplify";

// import { listCards } from "../../../graphql/queries";
// import awsExports from "../../../aws-exports";

// Amplify.configure(awsExports);

// function Card() {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     fetchCards();
//   }, []);

//   async function fetchCards() {
//     try {
//       const cardData = await API.graphql(graphqlOperation(listCards));
//       const cards = cardData.data.listCards.items;
//       setCards(cards);
//     } catch (err) {
//       console.log("error fetching cards");
//     }
//   }

//   return (
//     <div>
//       <div className="CardHero">
//         <h1>How does take any doubt works?</h1>
//         {cards.map((cards, index) => (
//           <div className="CardGroup" key={cards.id ? cards.id : index}>
//             <h2>{cards.title}</h2>
//             <p>{cards.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Card;
