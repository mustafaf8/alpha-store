import { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Filter, Building2, Tag, X, ChevronRight, ChevronDown } from "lucide-react";
import { translateCategoryName } from "@/lib/taxonomy-translations";

function ProductFilter({
  filters,
  handleFilter,
  dynamicFilterOptions = {},
  isLoading = false,
  onClearFilters,
}) {
  const { categories = [], brands = [] } = dynamicFilterOptions;
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const selectedCount = (filters.category?.length || 0) + (filters.brand?.length || 0);

  const renderFilterChip = (id, label, sectionId) => {
    const isChecked = (filters[sectionId] || []).includes(id);
    return (
      <Button
        key={id}
        type="button"
        variant="outline"
        size="sm"
        onClick={() => handleFilter(sectionId, id)}
        className={`h-8 whitespace-nowrap rounded-full border px-3 text-[11px] font-bold transition-all duration-200 ${
          isChecked
            ? "border-purple-500 bg-purple-500 text-white hover:bg-purple-600 shadow-md shadow-purple-200"
            : "bg-white border-slate-100 text-slate-600 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-600 shadow-sm"
        }`}
      >
        {label}
      </Button>
    );
  };

  return (
    <Card className="border-none bg-white/40 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl overflow-hidden">
      <CardContent className="p-0 space-y-0">
        {/* Header - Always Visible, Clickable on Mobile */}
        <div 
          className="p-4 md:p-6 flex items-center justify-between cursor-pointer md:cursor-default"
          onClick={() => {
            if (window.innerWidth < 768) setIsMobileOpen(!isMobileOpen);
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-purple-100 rounded-xl">
              <Filter className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-800 uppercase tracking-wider">Filters</p>
              {selectedCount > 0 && (
                <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mt-0.5">
                  {selectedCount} Selected
                </p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {selectedCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-3 text-[10px] font-bold text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full uppercase tracking-widest transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  onClearFilters();
                }}
              >
                <X className="mr-1.5 h-3.5 w-3.5" />
                <span className="hidden sm:inline">Clear All</span>
              </Button>
            )}
            <div className="md:hidden">
              {isMobileOpen ? (
                <ChevronDown className="h-5 w-5 text-slate-400" />
              ) : (
                <ChevronRight className="h-5 w-5 text-slate-400" />
              )}
            </div>
          </div>
        </div>

        {/* Filter Content - Collapsible on Mobile */}
        <div className={`px-4 md:px-6 pb-6 space-y-6 ${isMobileOpen ? 'block' : 'hidden md:block'}`}>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Skeleton className="h-24 w-full rounded-2xl" />
              <Skeleton className="h-24 w-full rounded-2xl" />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Brands Section */}
              {brands.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    <Building2 className="h-3 w-3" />
                    <span>Shop by Brand</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {brands.map((brand) => renderFilterChip(brand.slug, brand.name, "brand"))}
                  </div>
                </div>
              )}

              {/* Categories Section (Hierarchical) */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  <Tag className="h-3 w-3" />
                  <span>Shop by Category</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                  {categories.map((category) => (
                    <div key={category._id} className="space-y-3 group">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] font-black text-slate-800 uppercase tracking-wider group-hover:text-purple-600 transition-colors">
                          {translateCategoryName(category.name, category.slug)}
                        </span>
                        <div className="h-px flex-1 bg-slate-100" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.children && category.children.length > 0 ? (
                          category.children.map((sub) =>
                            renderFilterChip(
                              sub.slug,
                              translateCategoryName(sub.name, sub.slug),
                              "category",
                            ),
                          )
                        ) : (
                          renderFilterChip(
                            category.slug,
                            translateCategoryName(category.name, category.slug),
                            "category",
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

ProductFilter.propTypes = {
  filters: PropTypes.object,
  handleFilter: PropTypes.func.isRequired,
  dynamicFilterOptions: PropTypes.shape({
    categories: PropTypes.arrayOf(
      PropTypes.shape({ 
        _id: PropTypes.string, 
        name: PropTypes.string,
        slug: PropTypes.string,
        children: PropTypes.array 
      })
    ),
    brands: PropTypes.arrayOf(
      PropTypes.shape({ _id: PropTypes.string, name: PropTypes.string, slug: PropTypes.string })
    ),
  }),
  isLoading: PropTypes.bool,
  onClearFilters: PropTypes.func.isRequired,
};

export default ProductFilter;