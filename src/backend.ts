import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase



/*Question 5. Ecrire le code permettant de r´ecup´erer la liste de toutes les donn´ees `a partir de la collection
maison. N’oubliez pas de d´eclarer la variable pour stocker les donn´ees dedans avant l’affichage et de d´esactiver
les API rules.
*/
try {
    const fulllist = await pb.collection('Maisons').getFullList() ;
    console.log(JSON.stringify(fulllist, null, 2)) ;
} catch (e) {
    console.error(e) ;
};

/*Question 6. Ecrire le code permettant d’afficher une maison dont on connaît son id.*/
try {
  const oneRecord = await pb.collection('Maisons').getOne('l78re15judwipb5') ;
  console.table(oneRecord) ;
} catch (e) {
  console.error(e) ;
};

/*Question 7. Ecrire le code permettant d’afficher toutes les maisons par ordre croissant de leur date de création dans la base de données.*/
try {
    const sortedRecords = await pb.collection('Maisons').getFullList({sort: 'created',   
    }) ;
    console.table(sortedRecords) ;
} catch (e) {
    console.error(e) ;
};

/*Question 8. Ecrire le code permettant d’afficher toutes les maisons par ordre décroissant de leur date de création dans la base de données.*/
try {
  const sortedRecords = await pb.collection("Maisons").getFullList({ sort: "-created",
   }) ;
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 9. Ecrire le code permettant d’afficher toutes les maisons qui sont en favori.*/
export async function allMaisonsFavori() {
try {
  const allMaisonsFavori = await pb.collection('Maisons').getFullList({ filter: 'favori = True' })
//   console.table(allMaisonsFavori)
return allMaisonsFavori;
} catch (e) {
  console.error(e);
}};

/*Question 10. Ecrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100*/
try {
  const sortedRecords = await pb.collection("Maisons").getFullList({ filter: "surface > 100" });
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 11. Ecrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100 et qui ont au moins 2 salles de bains.*/
try {
  const sortedRecords = await pb.collection("Maisons").getFullList({ filter: "surface > 100 && nbSdb >= 2"});
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 12. Ecrire le code permettant d’afficher toutes les maisons qui ont une superficie supérieur à 100 ou au moins 3 chambres.*/
try {
  const sortedRecords = await pb
    .collection("Maisons")
    .getFullList({ filter: "surface > 100 || nbChambres >= 3", sort: "prix"});
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 13. Ecrire le code permettant d’afficher toutes les maisons ayant une superficie supérieur à 100, ordonnées par ordre croissant de leurs prix.*/
try {
  const sortedRecords = await pb
    .collection("Maisons")
    .getFullList({ filter: "surface > 100" });
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 14. Ecrire le code permettant d’afficher toutes les maisons ordonnées par ordre croissant de leur nom.*/
try {
  const sortedRecords = await pb
    .collection("Maisons")
    .getFullList({ sort: "nomMaison"});
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 15. Ecrire le code permettant d’afficher la maison ayant un nom donné.*/
try {
  const sortedRecords = await pb
    .collection("Maisons")
    .getFullList({ filter: "nomMaison = 'Maison de ville'" });
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};

/*Question 16. Ecrire le code permettant d’afficher toutes les maisons dont le nom est différent d’un nom donné et ordonnées par ordre croissant de leur nom.*/
try {
  const sortedRecords = await pb
    .collection("Maisons")
    .getFullList({ filter: "nomMaison = '-Maison de ville'", sort: "nomMaison" });
  console.table(sortedRecords);
} catch (e) {
  console.error(e);
};