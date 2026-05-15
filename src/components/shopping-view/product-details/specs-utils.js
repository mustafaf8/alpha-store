import {
  Cpu,
  HardDrive,
  Info,
  Monitor,
  Palette,
  Package,
  Ruler,
  Shield,
  Thermometer,
  Timer,
  Zap,
  Weight,
  Cable,
} from "lucide-react";

export const normalizeKey = (value = "") =>
  value
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();

export const getSpecIcon = (key) => {
  const keyLower = normalizeKey(key);

  if (
    keyLower.includes("boyut") ||
    keyLower.includes("ölçü") ||
    keyLower.includes("uzunluk") ||
    keyLower.includes("genişlik") ||
    keyLower.includes("yükseklik") ||
    keyLower.includes("size")
  ) {
    return Ruler;
  }

  if (
    keyLower.includes("ağırlık") ||
    keyLower.includes("kg") ||
    keyLower.includes("gram") ||
    keyLower.includes("weight")
  ) {
    return Weight;
  }

  if (
    keyLower.includes("renk") ||
    keyLower.includes("color") ||
    keyLower.includes("colour")
  ) {
    return Palette;
  }

  if (
    keyLower.includes("malzeme") ||
    keyLower.includes("material") ||
    keyLower.includes("materyal")
  ) {
    return Package;
  }

  if (
    keyLower.includes("güç") ||
    keyLower.includes("watt") ||
    keyLower.includes("volt") ||
    keyLower.includes("power")
  ) {
    return Zap;
  }

  if (
    keyLower.includes("bağlantı") ||
    keyLower.includes("usb") ||
    keyLower.includes("port") ||
    keyLower.includes("kablo") ||
    keyLower.includes("connection")
  ) {
    return Cable;
  }

  if (
    keyLower.includes("ekran") ||
    keyLower.includes("display") ||
    keyLower.includes("screen")
  ) {
    return Monitor;
  }

  if (
    keyLower.includes("depolama") ||
    keyLower.includes("gb") ||
    keyLower.includes("tb") ||
    keyLower.includes("storage") ||
    keyLower.includes("hafıza") ||
    keyLower.includes("hafiza")
  ) {
    return HardDrive;
  }

  if (
    keyLower.includes("işlemci") ||
    keyLower.includes("cpu") ||
    keyLower.includes("processor")
  ) {
    return Cpu;
  }

  if (
    keyLower.includes("sıcaklık") ||
    keyLower.includes("temperature") ||
    keyLower.includes("derece")
  ) {
    return Thermometer;
  }

  if (
    keyLower.includes("süre") ||
    keyLower.includes("zaman") ||
    keyLower.includes("time") ||
    keyLower.includes("dakika") ||
    keyLower.includes("saat")
  ) {
    return Timer;
  }

  if (
    keyLower.includes("garanti") ||
    keyLower.includes("warranty") ||
    keyLower.includes("koruma")
  ) {
    return Shield;
  }

  return Info;
};

export const buildMergedSpecs = (productDetails) => {
  const existingSpecs = Array.isArray(productDetails?.technicalSpecs)
    ? [...productDetails.technicalSpecs]
    : [];

  const existingKeys = new Set(
    existingSpecs.map((item) => normalizeKey(item.key)),
  );

  const extraSpecs = [
    {
      key: "Liste Fiyati",
      value:
        typeof productDetails?.price === "number"
          ? `${productDetails.price} TL`
          : undefined,
    },
    {
      key: "Satis Fiyati",
      value:
        typeof (productDetails?.salePrice ?? productDetails?.price) === "number"
          ? `${productDetails?.salePrice ?? productDetails?.price} TL`
          : undefined,
    },
    {
      key: "Stok Durumu",
      value: `${productDetails?.totalStock || 0} adet`,
    },
    {
      key: "Puan",
      value: `${(productDetails?.averageReview || 0).toFixed(1)} / 5 (${
        productDetails?.numReviews || 0
      } yorum)`,
    },
  ];

  extraSpecs.forEach((item) => {
    if (!item.value) return;
    const key = normalizeKey(item.key);
    if (!existingKeys.has(key)) {
      existingSpecs.push(item);
    }
  });

  return existingSpecs;
};

