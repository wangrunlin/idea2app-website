import { getTableList } from "@/utils/api";
import Image from "next/image";

type Partner = {
  Id: number;
  name: string;
  link: string;
  type: string;
  partnership: string;
  image: Array<{
    url: string;
    title: string;
    mimetype: string;
    size: number;
    width: number;
    height: number;
    id: string;
    thumbnails: {
      tiny: { signedUrl: string };
      small: { signedUrl: string };
      card_cover: { signedUrl: string };
    };
    signedUrl: string;
  }>;
  summary: string;
  address: string;
  contact_person: string;
  phone: string | null;
  email: string | null;
  wechat: string | null;
  promoter: string;
  file_token: string;
  CreatedAt: string;
  UpdatedAt: string;
};

export default async function PartnerList() {
  if (!process.env.NEXT_PUBLIC_NOCODB_PARTNERS_TABLE) {
    return null;
  }

  const partners = await getTableList<Partner[]>(
    process.env.NEXT_PUBLIC_NOCODB_PARTNERS_TABLE
  );

  const partnersToShow = partners.filter(
    ({ partnership }) => partnership === "战略合作"
  );

  return (
    <ul className="flex flex-wrap gap-8 justify-center">
      {partnersToShow.map(({ Id, address, name, image: [{ url }] }) => (
        <li
          key={Id}
          className="flex flex-col items-center transition-transform duration-300 transform hover:scale-105"
        >
          <a
            href={address}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            {url && (
              <Image
                className="w-full h-16 object-cover grayscale transition duration-300 group-hover:grayscale-0"
                src={url.replace(
                  "nocodb.4c0a56669c4be111f209c9151999e2e7.r2.cloudflarestorage.com",
                  "r2nocodb.alin.run"
                )}
                alt={name}
                quality={100}
                height={64}
                width={64}
              />
            )}
            <p className="mt-2 text-center text-sm font-medium">{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
