import { Fragment } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Filter, Building2, Tag, X } from "lucide-react";

function ProductFilter({
  filters,
  handleFilter,
  dynamicFilterOptions = {},
  isLoading = false,
  onClearFilters,
}) {
  const filterSections = [
    {
      id: "category",
      title: "Categories",
      options: dynamicFilterOptions.category || [],
    },
    {
      id: "brand",
      title: "Brands",
      options: dynamicFilterOptions.brand || [],
    },
  ];

  const selectedCount = filterSections.reduce(
    (total, section) => total + (filters?.[section.id]?.length || 0),
    0,
  );

  return (
    <Card className="border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 shadow-sm">
      <CardContent className="space-y-3 p-3 md:p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-orange-600" />
            <p className="text-sm font-semibold text-gray-800">Filters</p>
            {selectedCount > 0 && (
              <Badge variant="secondary" className="text-xs">
                {selectedCount}
              </Badge>
            )}
          </div>
          {selectedCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs text-orange-700 hover:text-orange-800"
              onClick={onClearFilters}
            >
              <X className="mr-1 h-3.5 w-3.5" />
              Clear
            </Button>
          )}
        </div>

        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {filterSections.map(
              (section) =>
                section.options.length > 0 && (
                  <Fragment key={section.id}>
                    <div className="space-y-2 rounded-lg border border-orange-100 bg-white/70 p-2.5">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        {section.id === "category" ? (
                          <Tag className="h-3.5 w-3.5" />
                        ) : (
                          <Building2 className="h-3.5 w-3.5" />
                        )}
                        <span>{section.title}</span>
                      </div>
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {section.options.map((option) => {
                          const isChecked = (filters[section.id] || []).includes(option.id);
                          return (
                            <Button
                              key={option.id}
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => handleFilter(section.id, option.id)}
                              className={`h-8 whitespace-nowrap rounded-full border px-3 text-xs ${
                                isChecked
                                  ? "border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
                                  : "bg-white hover:bg-orange-100"
                              }`}
                            >
                              {option.displayLabel || option.label}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  </Fragment>
                ),
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

ProductFilter.propTypes = {
  filters: PropTypes.object,
  handleFilter: PropTypes.func.isRequired,
  dynamicFilterOptions: PropTypes.shape({
    category: PropTypes.arrayOf(
      PropTypes.shape({ 
        id: PropTypes.string, 
        label: PropTypes.string,
        displayLabel: PropTypes.string 
      })
    ),
    brand: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string, label: PropTypes.string })
    ),
  }),
  isLoading: PropTypes.bool,
  onClearFilters: PropTypes.func.isRequired,
};

export default ProductFilter;