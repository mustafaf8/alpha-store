import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "@/store/shop/products-slice";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Minus,
  Plus,
  Ruler,
  Weight,
  Palette,
  Package,
  Zap,
  Cable,
  Monitor,
  HardDrive,
  Cpu,
  Settings,
  Thermometer,
  Timer,
  Shield,
  Info,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import StarRatingComponent from "@/components/common/star-rating";

// İkon seçici fonksiyon
const getSpecIcon = (key) => {
  const keyLower = key.toLowerCase();
  if (
    keyLower.includes("boyut") ||
    keyLower.includes("ölçü") ||
    keyLower.includes("uzunluk") ||
    keyLower.includes("genişlik") ||
    keyLower.includes("yükseklik") ||
    keyLower.includes("size")
  )
    return Ruler;
  if (
    keyLower.includes("ağırlık") ||
    keyLower.includes("kg") ||
    keyLower.includes("gram") ||
    keyLower.includes("weight")
  )
    return Weight;
  if (
    keyLower.includes("renk") ||
    keyLower.includes("color") ||
    keyLower.includes("colour")
  )
    return Palette;
  if (
    keyLower.includes("malzeme") ||
    keyLower.includes("material") ||
    keyLower.includes("materyal")
  )
    return Package;
  if (
    keyLower.includes("güç") ||
    keyLower.includes("watt") ||
    keyLower.includes("volt") ||
    keyLower.includes("power")
  )
    return Zap;
  if (
    keyLower.includes("bağlantı") ||
    keyLower.includes("usb") ||
    keyLower.includes("port") ||
    keyLower.includes("kablo")
  )
    return Cable;
  if (
    keyLower.includes("ekran") ||
    keyLower.includes("display") ||
    keyLower.includes("screen")
  )
    return Monitor;
  if (
    keyLower.includes("depolama") ||
    keyLower.includes("gb") ||
    keyLower.includes("tb") ||
    keyLower.includes("storage") ||
    keyLower.includes("hafıza")
  )
    return HardDrive;
  if (
    keyLower.includes("işlemci") ||
    keyLower.includes("cpu") ||
    keyLower.includes("processor")
  )
    return Cpu;
  if (
    keyLower.includes("sıcaklık") ||
    keyLower.includes("temperature") ||
    keyLower.includes("derece")
  )
    return Thermometer;
  if (
    keyLower.includes("süre") ||
    keyLower.includes("zaman") ||
    keyLower.includes("time") ||
    keyLower.includes("dakika") ||
    keyLower.includes("saat")
  )
    return Timer;
  if (
    keyLower.includes("garanti") ||
    keyLower.includes("warranty") ||
    keyLower.includes("koruma")
  )
    return Shield;
  return Info;
};

const normalizeKey = (value = "") =>
  value
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .trim();

const FALLBACK_IMAGE = "/tutu.png";

function ProductSpecsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productDetails, isLoading } = useSelector(
    (state) => state.shopProducts,
  );
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (productDetails) {
      setSelectedImage(productDetails.image);
    }
  }, [productDetails]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsAppClick = () => {
    if (!productDetails) return;
    const price = formatPrice(productDetails?.salePrice || productDetails?.price || 0);
    const message =
      `Merhaba, ${productDetails.title} urununden ${quantity} adet almak istiyorum. ` +
      `Fiyat: ${price} TL. Yardimci olur musunuz?`;
    window.open(
      `https://wa.me/905347168754?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 animate-pulse">
          <div className="flex-1 flex flex-col gap-4">
            <Skeleton className="h-96 w-full rounded-3xl" />
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-16 w-16 rounded-xl" />
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Skeleton className="h-10 w-3/4 rounded-xl" />
            <Skeleton className="h-8 w-1/2 rounded-xl" />
            <Skeleton className="h-12 w-full rounded-xl" />
            <Skeleton className="h-10 w-1/2 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  if (!productDetails) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-2xl font-bold mb-4">Ürün bulunamadı.</h1>
        <Button
          onClick={() => navigate("/shop/home")}
          className="mt-3 text-base"
          aria-label="Ana Sayfaya Dön"
        >
          Ana Sayfaya Dön
        </Button>
      </div>
    );
  }

  const mergedSpecs = (() => {
    const existingSpecs = Array.isArray(productDetails.technicalSpecs)
      ? [...productDetails.technicalSpecs]
      : [];
    const existingKeys = new Set(existingSpecs.map((item) => normalizeKey(item.key)));
    const extraSpecs = [
      { key: "Urun Adi", value: productDetails.title },
      { key: "Aciklama", value: productDetails.description },
      { key: "Liste Fiyati", value: `${formatPrice(productDetails.price)} TL` },
      {
        key: "Satis Fiyati",
        value: `${formatPrice(productDetails.salePrice || productDetails.price)} TL`,
      },
      { key: "Stok Durumu", value: `${productDetails.totalStock || 0} adet` },
      {
        key: "Puan",
        value: `${(productDetails.averageReview || 0).toFixed(1)} / 5 (${productDetails.numReviews || 0} yorum)`,
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
  })();

  return (
    <div className="container mx-auto px-2 py-6 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Sol: Galeri */}
        <div className="min-w-0 h-full">
          <div className="bg-white rounded-2xl shadow-lg h-full flex flex-col p-4 sm:p-6">
            <div className="w-full flex-1 flex items-center justify-center">
              <div className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl overflow-hidden bg-white">
                <img
                  src={selectedImage || productDetails.image}
                  alt={productDetails.title}
                  className="w-full h-full object-cover rounded-2xl"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = FALLBACK_IMAGE;
                  }}
                />
                {productDetails.images && productDetails.images.length > 0 && (
                  <div className="absolute bottom-3 left-1/2 z-10 flex w-[calc(100%-16px)] -translate-x-1/2 gap-2 overflow-x-auto rounded-xl border border-white/60 bg-white/85 p-2 backdrop-blur-sm sm:w-auto sm:max-w-[95%]">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 bg-white flex items-center justify-center ${selectedImage === productDetails.image ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-300"}`}
                      onClick={() => setSelectedImage(productDetails.image)}
                      aria-label="Ana resim"
                    >
                      <img
                        src={productDetails.image}
                        alt="Ana resim"
                        className="w-full h-full object-contain p-1"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = FALLBACK_IMAGE;
                        }}
                      />
                    </div>
                    {productDetails.images.map((image, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-200 bg-white flex items-center justify-center ${selectedImage === image ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200 hover:border-blue-300"}`}
                        onClick={() => setSelectedImage(image)}
                        aria-label={`Resim ${index + 2}`}
                      >
                        <img
                          src={image}
                          alt={`Resim ${index + 2}`}
                          className="w-full h-full object-contain p-1"
                          onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = FALLBACK_IMAGE;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Sağ: Ürün Bilgi ve Sepet Kutusu */}
        <div className="min-w-0 h-full">
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 border border-gray-100 h-full flex flex-col gap-4">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2 break-words">
              {productDetails.title}
            </h1>
            <div className="flex items-center gap-2 sm:gap-3 mb-2">
              <StarRatingComponent
                rating={productDetails.averageReview || 0}
                size={24}
              />
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                {productDetails.averageReview
                  ? productDetails.averageReview.toFixed(1)
                  : "0.0"}
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                ({productDetails.numReviews || 0} Yorum)
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 mb-4 flex-wrap">
              {productDetails.salePrice ? (
                <>
                  <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 sm:px-6 sm:py-2 rounded-2xl text-lg sm:text-2xl shadow-sm">
                    {formatPrice(productDetails.salePrice)} TL
                  </span>
                  <span className="line-through text-base sm:text-lg text-gray-400">
                    {formatPrice(productDetails.price)} TL
                  </span>
                </>
              ) : (
                <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 sm:px-6 sm:py-2 rounded-2xl text-lg sm:text-2xl shadow-sm">
                  {formatPrice(productDetails.price)} TL
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 w-full">
              <div className="flex items-center border border-gray-200 rounded-full px-1 sm:px-2 py-0.5 sm:py-1 bg-gray-50">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <span className="font-semibold w-6 sm:w-10 text-center text-sm sm:text-lg">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
                  disabled={quantity >= productDetails.totalStock}
                  onClick={() =>
                    setQuantity((q) =>
                      Math.min(productDetails.totalStock, q + 1),
                    )
                  }
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
              <Button
                className="flex-1 min-w-0 max-w-60 text-sm sm:text-lg font-semibold shadow-md sm:py-0 bg-green-600 hover:bg-green-700"
                onClick={handleWhatsAppClick}
                disabled={productDetails.totalStock === 0}
                aria-label="WhatsApp ile Iletisim"
              >
                {productDetails.totalStock === 0 ? "Stokta Yok" : "WhatsApp"}
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span
                className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${productDetails.totalStock > 0 ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"}`}
              >
                {productDetails.totalStock > 0
                  ? `Stokta: ${productDetails.totalStock} adet`
                  : "Stokta Yok"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Teknik Özellikler Kutusu */}
      <div className="mt-10">
        <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-lg sm:p-7">
          <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-blue-700">
            <Settings className="h-6 w-6 text-blue-500" /> Teknik Özellikler
          </h2>
          {mergedSpecs.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {mergedSpecs.map((spec, index) => {
                const IconComponent = getSpecIcon(spec.key);
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/90 via-sky-50/80 to-indigo-50/70 p-3 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-200 bg-white shadow-sm">
                        <IconComponent className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-sm font-semibold text-gray-900 sm:text-base">
                        {spec.key}
                      </p>
                    </div>
                    <p className="pl-11 text-sm text-gray-700 sm:text-base">
                      {spec.value}
                    </p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Settings className="h-14 w-14 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                Bu ürün için teknik özellik bulunmamaktadır.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductSpecsPage;
