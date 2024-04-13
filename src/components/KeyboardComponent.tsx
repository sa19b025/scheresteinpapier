import Image from "next/image";
import rockImage from "/public/rock.png";
import paperImage from "/public/paper.png";
import scissorsImage from "/public/scissors.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

function KeyboardComponent() {
  const t = useTranslations("keyboardgamecomponent");
  return (
    <div>
      <p className="flex items-center justify-center">{t("description")}</p>
      <div className="flex items-center justify-center">
        <div className="p-6">
          <Image src={rockImage} alt={t("altRock")} width="450" height="450" />
          <p className="flex items-center justify-center">{t("rock")}</p>
        </div>
        <div className="p-6">
          <Image
            src={paperImage}
            alt={t("altPaper")}
            width="450"
            height="450"
          />
          <p className="flex items-center justify-center">{t("paper")}</p>
        </div>
        <div className="p-6">
          <Image
            src={scissorsImage}
            alt={t("altScissors")}
            width="450"
            height="450"
          />
          <p className="flex items-center justify-center">{t("scissors")}</p>
        </div>
      </div>
    </div>
  );
}
export default KeyboardComponent;
