import { SearchX, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";

function NoSearchResults() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("keyword") || searchParams.get("query");

  return (
    <div className="flex flex-col items-center justify-center text-center p-10 md:p-16 border rounded-lg bg-gray-50 min-h-[350px] my-8 shadow-sm">
      <SearchX className="w-20 h-20 text-gray-400 mb-5" />
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">
        {searchTerm
          ? `No results found for '${searchTerm}'`
          : "No search results found"}
      </h2>
      <p className="text-gray-600 mb-8 max-w-lg">
        Sorry, we couldn't find any products matching your criteria. Please
        check your keywords, try broader terms, or use the actions below.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" asChild>
          <Link to="/shop/listing" aria-label="Browse All Products">Browse All Products</Link>
        </Button>
        <Button asChild aria-label="Home">
          <Link to="/shop/home" aria-label="Home">
            <Home className="mr-2 h-4 w-4" /> Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default NoSearchResults;
