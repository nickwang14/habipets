import { useState } from "react";
import { Header, Log, NftBox } from "../Exports";

const Home = () => {
  //const [ user, setUser ] = useState()
  const [lastLog, setLastLog] = useState(" Never ");
  const [streak, setStreak] = useState(0);

  const handleLog = () => {
    setStreak(streak + 1);
    setLastLog(Date());
  };

  return (
    <div>
      <Header title={"HabiPets"} />
      <NftBox type={true} />
      <NftBox type={true} />
      <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
      <button onClick={() => console.log(process.env)}></button>
    </div>
  );
};

export default Home;
