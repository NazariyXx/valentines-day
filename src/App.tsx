import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні",
      "Ти впевнена?",
      "Точно впевнена?",
      "Подумай ще раз!",
      "Останній шанс!",
      "Точно точно?",
      "Ти можеш пожаліти про це!",
      "Подумай краще!",
      "Ти прям точно впевнена?",
      "Це може бути помилкою!",
      "Маю Бога в серці!",
      "Не будь такою холодною!",
      "Передумала?",
      "Не хотіла б передумати?",
      "Це твоя фінальна відповідь?",
      "Ти розбиваєш мені серце ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="title">Ти моє сонце ❤️</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="title">Привіт, сонце!</h1>
            <h2 className="question">Будеш моєю Валентинкою?</h2>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Так
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "Ні" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
