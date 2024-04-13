import Image from "next/image";
import rockImage from "/public/rock.png";
import paperImage from "/public/paper.png";
import scissorsImage from "/public/scissors.png";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

function MousegamePage() {
  const t = useTranslations("mousegame");
  const locale = useLocale();
  const resultUrl = "/" + locale + "/result";
  return (
    <div>
      <p className="flex items-center justify-center p-3">
        Choose your weapon:
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          href={{
            pathname: `${resultUrl}`,
            query: {
              selectedValue: "Rock",
            },
          }}
        >
          <div className="rounded border p-6">
            <Image src={rockImage} alt="Rock" width="450" height="450" />
            <p className="flex items-center justify-center">Rock</p>
          </div>
        </Link>
        <Link
          href={{
            pathname: `${resultUrl}`,
            query: {
              selectedValue: "Paper",
            },
          }}
        >
          <div className="rounded border p-6">
            <Image src={paperImage} alt="Rock" width="450" height="450" />
            <p className="flex items-center justify-center">Paper</p>
          </div>
        </Link>
        <Link
          href={{
            pathname: `${resultUrl}`,
            query: {
              selectedValue: "Scissors",
            },
          }}
        >
          <div className="rounded border p-6">
            <Image src={scissorsImage} alt="Rock" width="450" height="450" />
            <p className="flex items-center justify-center">Scissors</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MousegamePage;
