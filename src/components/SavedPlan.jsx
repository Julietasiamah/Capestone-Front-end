// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// const giorniSettimana = ["LUNEDI", "MARTEDI", "MERCOLEDI", "GIOVEDI", "VENERDI", "SABATO", "DOMENICA"];
// const categoriePasto = ["PRANZO", "CENA"];

// const SavedPlans = () => {
//   const [savedPlans, setSavedPlans] = useState([]);
//   const [giornoFiltro, setGiornoFiltro] = useState("");
//   const [categoriaFiltro, setCategoriaFiltro] = useState("");
//   const token = useSelector((state) => state.auth.token);

//   useEffect(() => {
//     fetchSavedPlans();
//   }, []);

//   const fetchSavedPlans = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/piano-settimanale/miei", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setSavedPlans(data);
//       } else {
//         console.error("Errore nel recupero dei piani");
//       }
//     } catch (error) {
//       console.error("Errore di rete:", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:8080/api/piano-settimanale/${id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.ok) {
//         setSavedPlans((prev) => prev.filter((piano) => piano.id !== id));
//       } else {
//         alert("Errore durante la cancellazione del piano");
//       }
//     } catch (error) {
//       console.error("Errore di rete durante la cancellazione:", error);
//     }
//   };

//   const pianiFiltrati = savedPlans.filter((piano) => {
//     return (
//       (!giornoFiltro || piano.giorno === giornoFiltro) && (!categoriaFiltro || piano.categoriaPasto === categoriaFiltro)
//     );
//   });

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4 text-center" style={{ color: "#c0c0c0" }}>
//         I tuoi Piani Salvati
//       </h2>

//       {/* FILTRI */}
//       <div className="mb-6 flex flex-wrap gap-4 items-center">
//         <div>
//           <label className="mr-2 text-white">Filtra per giorno:</label>
//           <select
//             value={giornoFiltro}
//             onChange={(e) => setGiornoFiltro(e.target.value)}
//             className="p-1 border rounded ms-2"
//           >
//             <option value="">Tutti</option>
//             {giorniSettimana.map((g) => (
//               <option key={g} value={g}>
//                 {g}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="mr-2 text-white mt-3">Categoria pasto:</label>
//           <select
//             value={categoriaFiltro}
//             onChange={(e) => setCategoriaFiltro(e.target.value)}
//             className="p-1 border rounded ms-2"
//           >
//             <option value="">Tutte</option>
//             {categoriePasto.map((c) => (
//               <option key={c} value={c}>
//                 {c}
//               </option>
//             ))}
//           </select>
//         </div>

//         {(giornoFiltro || categoriaFiltro) && (
//           <button
//             onClick={() => {
//               setGiornoFiltro("");
//               setCategoriaFiltro("");
//             }}
//             className="ml-4 px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded"
//           >
//             Reset Filtri
//           </button>
//         )}
//       </div>

//       {/* LISTA PIANI */}
//       {pianiFiltrati.length === 0 ? (
//         <p className="text-center">Nessun piano trovato per i filtri selezionati.</p>
//       ) : (
//         <div className="grid gap-4">
//           {pianiFiltrati.map((piano) => (
//             <div key={piano.id} className="bg-white shadow rounded p-4 flex items-center justify-between">
//               <div>
//                 <h3 className="font-semibold">
//                   {piano.giorno} - {piano.categoriaPasto}
//                 </h3>
//                 <p>{piano.pasto.nome}</p>
//               </div>
//               <img src={piano.pasto.imgUrl} alt={piano.pasto.nome} className="w-24 h-24 object-cover rounded" />
//               <button
//                 onClick={() => handleDelete(piano.id)}
//                 className="ml-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
//               >
//                 Elimina
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SavedPlans;
