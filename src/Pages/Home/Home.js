import { useState } from "react";
import { Header, Log, NftBox, Intro } from "../../Exports";
import "./Home.css";

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
      <Intro />
      <div className="NftFlexBox">
        <NftBox type={false} />
        <NftBox type={true} />
      </div>
      <Log streak={streak} onClick={handleLog} lastLog={lastLog} />
      <button onClick={() => console.log(process.env)}></button>
    </div>
  );
};

export default Home;
