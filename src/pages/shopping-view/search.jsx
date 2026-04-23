import ShoppingProductTile from "@/components/shopping-view/product-tile";
import {
  getSearchResults,
  resetSearchResults,
} from "@/store/shop/search-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import NoSearchResults from "./NoSearchResults";
import ProductTileSkeleton from "@/components/shopping-view/product-tile-skeleton.jsx";

function SearchProducts() {
  const [, setKeyword] = useState("");
  const [searchParams] = useSearchParams();

  const { searchResults, isLoading: searchLoading } = useSelector(
    (state) => state.shopSearch,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const keywordFromUrl = searchParams.get("keyword");
    if (keywordFromUrl && keywordFromUrl.trim() !== "") {
      setKeyword(keywordFromUrl);
      dispatch(getSearchResults(keywordFromUrl.trim()));
    } else {
      dispatch(resetSearchResults());
      setKeyword("");
    }
  }, [searchParams, dispatch]);

  const handleAddtoCart = () => {};

  return (
    <div className="container mx-auto md:px-6 px-4 py-8">
      {searchLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductTileSkeleton key={`search-skel-${index}`} />
          ))}
        </div>
      ) : searchResults.length === 0 && searchParams.get("keyword") ? (
        <NoSearchResults />
      ) : searchResults.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-[800px]:gap-2">
          {searchResults.map((item) => (
            <ShoppingProductTile
              key={item._id}
              handleAddtoCart={() => handleAddtoCart(item._id, item.totalStock)}
              product={item}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SearchProducts;
