import Image from "next/image";
import rockImage from "/public/rock.png";
import paperImage from "/public/paper.png";
import scissorsImage from "/public/scissors.png";
import rKeyImage from "/public/r-key.png";
import pKeyImage from "/public/p-key.png";
import sKeyImage from "/public/s-key.png";
import { useTranslations } from "next-intl";

function KeyboardComponent() {
  const t = useTranslations("keyboardgamecomponent");
  return (
    <div>
      <p className="flex items-center justify-center">{t("description")}</p>
      <div className="flex items-center justify-center">
        <div className="p-6">
          <Image src={rockImage} alt={t("altRock")} width="450" height="450" />
          <div className="mb-3 flex items-center justify-center">
            <Image
              src={rKeyImage}
              alt={t("rockKeyAltImage")}
              width={50}
              height={50}
            />
          </div>
          <p className="flex items-center justify-center">{t("rock")}</p>
        </div>
        <div className="p-6">
          <Image
            src={paperImage}
            alt={t("altPaper")}
            width="450"
            height="450"
          />
          <div className="mb-3 flex items-center justify-center">
            <Image
              src={pKeyImage}
              alt={t("paperKeyAltImage")}
              width={50}
              height={50}
            />
          </div>
          <p className="flex items-center justify-center">{t("paper")}</p>
        </div>
        <div className="p-6">
          <Image
            src={scissorsImage}
            alt={t("altScissors")}
            width="450"
            height="450"
          />
          <div className="mb-3 flex items-center justify-center">
            <Image
              src={sKeyImage}
              alt={t("scissorsKeyAltImage")}
              width={50}
              height={50}
            />
          </div>
          <p className="flex items-center justify-center">{t("scissors")}</p>
        </div>
      </div>
    </div>
  );
}
export default KeyboardComponent;
