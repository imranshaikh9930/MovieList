import Cards from "./Card";
import data from "./data";
import "./style.css";
function fun1(value) {

  return (
    <>
      <Cards imgsrc={value.src}
        title={value.title}
        year={value.year}
        distributor={value.distributor}
        amount={value.amount}
        ranking={value.ranking}
      />

    </>
  );
}

;
export default function App() {
  return <>{data.map(fun1)}</>;
}


