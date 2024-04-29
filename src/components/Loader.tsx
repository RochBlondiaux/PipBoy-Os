import { React, FC, useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./../assets/css/loader.css";

interface LoaderProps {
  setLoading: (isLoading: boolean) => void
}

const Loader: FC<LoaderProps> = ({ setLoading }) => {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (step == 0) {
      return
    }
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [step])

  if (step == 0) {
    return (
      <>
        <div style={{ fontSize: "2em", whiteSpace: "pre-line", display: "inline-block" }}>
          <TypeAnimation
            sequence={[
              "",
              2000,
              "*****************************************************",
              1000,
              "***************************************************** PIP-OS(R) V7.1.0.8",
              1000,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************",
              1000,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)",
              400,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)\nLOADER V1.1",
              400,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)\nLOADER V1.1\nEXEC VERSION 41.10",
              400,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)\nLOADER V1.1\nEXEC VERSION 41.10\n64K RAM SYSTEM",
              400,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)\nLOADER V1.1\nEXEC VERSION 41.10\n64K RAM SYSTEM\n38911 BYTES FREE",
              400,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)\nLOADER V1.1\nEXEC VERSION 41.10\n64K RAM SYSTEM\n38911 BYTES FREE\nNO HOLOTAPE FOUND",
              400,
              "***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************\nCOPYRIGHT 2075 ROBCO(R)\nLOADER V1.1\nEXEC VERSION 41.10\n64K RAM SYSTEM\n38911 BYTES FREE\nNO HOLOTAPE FOUND\nLOAD ROM(1): DEITRIX 303",
              2000,
              () => setStep(1)
            ]}
            wrapper="span"
            cursor={false}
            speed={75}
            className="type"
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{ fontSize: "2em" }} className="scroll-container">
        <span className="scrolling-div scrolling-up">
          ***************************************************** PIP-OS(R) V7.1.0.8 ******************************************************<br />
          COPYRIGHT 2075 ROBCO(R)<br />
          LOADER V1.1<br />
          EXEC VERSION 41.10<br />
          64K RAM SYSTEM<br />
          38911 BYTES FREE<br />
          NO HOLOTAPE FOUND<br />
          LOAD ROM(1): DEITRIX 303<br />
        </span>
        <div className="scrolling-div scrolling-down flex h-full flex-col items-center justify-center gap-5">
          <img src="./media/gif/walking.gif" />
          <div className="animate-pulse opacity-75">
            Initializing...
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader
