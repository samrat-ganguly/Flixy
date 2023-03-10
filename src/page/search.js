import { useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const nameList = [
    "Aaberg",
    "Aalst",
    "Aara",
    "Aaren",
    "Aarika",
    "Aaron",
    "Aaronson",
    "Ab",
    "Aba",
    "Abad",
    "Abagael",
    "Abagail",
    "Abana",
    "Abate",
    "Abba",
    "Abbate",
    "Abbe",
    "Abbey",
    "Abbi",
    "Abbie",
    "Abbot",
    "Abbotsen",
    "Abbotson",
    "Abbotsun",
    "Abbott",
    "Abbottson",
    "Abby",
    "Abbye",
    "Abdel",
    "Abdella",
    "Abdu",
    "Abdul",
    "Abdulla",
    "Abe",
    "Abebi",
    "Abel",
    "Abelard",
    "Abell",
    "Abercromby",
    "Abernathy",
    "Abernon",
    "Abert",
    "Abeu",
    "Abey",
    "Abie",
    "Abigael",
    "Abigail",
    "Abigale",
    "Abijah",
    "Abisha",
    "Abisia",
    "Abixah",
    "Abner",
    "Aborn",
    "Abott",
    "Abra",
    "Abraham",
    "Abrahams",
    "Abrahamsen",
    "Abrahan",
    "Abram",
    "Abramo",
    "Abrams",
    "Abramson",
    "Abran",
    "Abroms",
    "Absa",
    "Absalom",
    "Abshier",
    "Acacia",
    "Acalia",
    "Accalia",
    "Ace",
    "Acey",
    "Acherman",
    "Achilles",
    "Achorn",
    "Acie",
    "Acima",
    "Acker",
    "Ackerley",
    "Ackerman",
    "Ackler",
    "Ackley",
    "Acquah",
    "Acus",
    "Ad",
    "Ada",
    "Adabel",
    "Adabelle",
    "Adachi",
    "Adah",
    "Adaha",
    "Adai",
    "Adaiha",
    "Adair",
    "Adal",
    "Adala",
    "Adalai",
    "Adalard",
    "Adalbert",
    "Adalheid",
    "Adali",
    "Adalia",
    "Adaliah",
    "Adalie",
    "Adaline",
    "Adall",
    "Adallard",
    "Adam",
    "Adama",
    "Adamec",
    "Adamek",
    "Adamik",
    "Adamina",
    "Adaminah",
    "Adamis",
    "Adamo",
    "Adamok",
    "Adams",
    "Adamsen",
    "Adamski",
    "Adamson",
    "Adamsun",
    "Adan",
    "Adao",
    "Adar",
    "Adara",
    "Adaurd",
    "Aday",
    "Adda",
    "Addam",
    "Addi",
    "Addia",
    "Addie",
    "Addiego",
    "Addiel",
    "Addis",
    "Addison",
    "Addy",
    "Ade",
    "Adebayo",
    "Adel",
    "Adela",
    "Adelaida",
    "Adelaide",
    "Adelaja",
    "Adelbert",
    "Adele",
    "Adelheid",
    "Adelia",
    "Adelice",
    "Adelina",
    "Adelind",
    "Adeline",
    "Adella",
    "Adelle",
    "Adelpho",
    "Adelric",
    "Adena",
    "Ader",
    "Adest",
    "Adey",
    "Adham",
    "Adhamh",
    "Adhern",
  ];

  useEffect(() => {
    if (search)
      setResult(
        nameList.filter((e) => e.toLowerCase().includes(search.toLowerCase()))
      );
  }, [search]);

  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {search ? (
        <div className="resultContainer">
          {result.map((e) => {
            return <h1>{e}</h1>;
          })}
          {!result.length ? <h1>No item found</h1> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Search;
