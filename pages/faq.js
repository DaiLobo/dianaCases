import FAQScreen from "../src/screens/FAQScreen/FAQScreen";

export default FAQScreen;

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

// getServerSideProps()

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((responseServer) => {
      return responseServer.json();
    })
    .then((response) => {
      return response;
    });

  return {
    props: {
      faq,
    },
  };
}

// export default function FAQPage({ faq }) {
// const [faq, setFaq] = useState([]);

// useEffect(() => {
//   const FAQ_API_URL =
//     "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
//   fetch(FAQ_API_URL)
//     .then((responseServer) => {
//       return responseServer.json();
//     })
//     .then((response) => {
//       setFaq(response);
//     });
// }, []);

//   return (
//     <div>
//       <Head>
//         <title>FAQ - Diana Cases Campanha</title>
//       </Head>
//       <h1>Diana Cases - Páginas de Perguntas FAQ</h1>
//       <Link href="/">Ir para a home</Link>
//       <ul>
//         {faq.map(({ answer, question }, index) => (
//           <li key={index}>
//             <article>
//               <h2>{question}</h2>
//               <p> {answer} </p>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
