import {
  Cable,
  Cpu,
  HardDrive,
  Info,
  Monitor,
  Palette,
  Shield,
  Zap,
  Weight,
} from "lucide-react";

const specKey = (s) => (typeof s?.key === "string" ? s.key : "");

export const buildSpecGroups = (mergedSpecs) => {
  const list = Array.isArray(mergedSpecs) ? mergedSpecs : [];

  const groupDefs = [
    {
      title: "Ekran & Boyut",
      icon: Monitor,
      matcher: (k) => /ekran|display|screen|boyut/i.test(k),
    },
    {
      title: "Depolama",
      icon: HardDrive,
      matcher: (k) => /depolama|storage|hafıza/i.test(k),
    },
    {
      title: "Performans",
      icon: Cpu,
      matcher: (k) => /işlemci|cpu|processor/i.test(k),
    },
    {
      title: "Bağlantı",
      icon: Cable,
      matcher: (k) => /bağlantı|usb|port|kablo|connection/i.test(k),
    },
    {
      title: "Güç & Pil",
      icon: Zap,
      matcher: (k) =>
        /güç|watt|volt|power|pil|battery|charge/i.test(k),
    },
    {
      title: "Renk & Malzeme",
      icon: Palette,
      matcher: (k) =>
        /renk|color|material|malzeme|materyal/i.test(k),
    },
    {
      title: "Garanti",
      icon: Shield,
      matcher: (k) => /garanti|warranty|koruma/i.test(k),
    },
    {
      title: "Ağırlık",
      icon: Weight,
      matcher: (k) => /ağırlık|weight|kg|gram/i.test(k),
    },
    { title: "Diğer", icon: Info, matcher: () => true },
  ];

  const bucket = new Map();
  groupDefs.forEach((g) => bucket.set(g.title, []));

  list.forEach((spec) => {
    const k = specKey(spec);
    const lower = k.toLowerCase();

    const match = groupDefs.find((g) => g.matcher(lower));
    const targetTitle = match?.title || "Diğer";
    bucket.get(targetTitle).push(spec);
  });

  return groupDefs
    .map((g) => ({
      title: g.title,
      icon: g.icon,
      specs: bucket.get(g.title),
    }))
    .filter((g) => g.specs?.length > 0);
};

