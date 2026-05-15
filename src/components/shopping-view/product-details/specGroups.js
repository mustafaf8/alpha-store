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
      title: "Display & Size",
      icon: Monitor,
      matcher: (k) => /ekran|display|screen|boyut|size/i.test(k),
    },
    {
      title: "Storage",
      icon: HardDrive,
      matcher: (k) => /depolama|storage|hafiza|memory/i.test(k),
    },
    {
      title: "Performance",
      icon: Cpu,
      matcher: (k) => /islemci|cpu|processor|performance/i.test(k),
    },
    {
      title: "Connectivity",
      icon: Cable,
      matcher: (k) => /baglanti|usb|port|kablo|connection|connectivity/i.test(k),
    },
    {
      title: "Power & Battery",
      icon: Zap,
      matcher: (k) =>
        /guc|watt|volt|power|pil|battery|charge/i.test(k),
    },
    {
      title: "Color & Material",
      icon: Palette,
      matcher: (k) =>
        /renk|color|material|malzeme|materyal/i.test(k),
    },
    {
      title: "Warranty",
      icon: Shield,
      matcher: (k) => /garanti|warranty|koruma|protection/i.test(k),
    },
    {
      title: "Weight",
      icon: Weight,
      matcher: (k) => /agirlik|weight|kg|gram/i.test(k),
    },
    { title: "Other", icon: Info, matcher: () => true },
  ];

  const bucket = new Map();
  groupDefs.forEach((g) => bucket.set(g.title, []));

  list.forEach((spec) => {
    const k = specKey(spec);
    const lower = k.toLowerCase();

    // Skip description and highlights as they are redundant with the description panel
    if (lower === "description" || lower === "highlights") return;

    const match = groupDefs.find((g) => g.matcher(lower));
    const targetTitle = match?.title || "Other";
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

