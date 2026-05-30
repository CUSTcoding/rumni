import Image from "next/image";
import Link from "next/link";

type SocialItem = {
  label: string;
  href: string;
  icon: string;
};

type Props = {
  items: SocialItem[];
};

export default function SocialIcons({ items }: Props) {
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 text-white/50 hover:text-white/80">
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          target="_blank"
          className="h-8 w-8 relative group grid place-items-center"
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={20}
            height={20}
            className="opacity-70 group-hover:opacity-100 transition"
          />
        </Link>
      ))}
    </div>
  );
}