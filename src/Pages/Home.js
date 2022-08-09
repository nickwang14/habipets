import react from "react";
import { useState } from "react";
import { Header, Intro, NftBox, Log } from "../Exports";

function Home(props) {
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
}

export default Home;
