import PropTypes from "prop-types";
import { getSpecIcon } from "./specs-utils";
import { buildSpecGroups } from "./specGroups";

function ProductSpecsPanel({ mergedSpecs }) {
  const groups = buildSpecGroups(mergedSpecs);

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 shadow-sm">
              <group.icon className="h-4 w-4 text-white" />
            </div>
            <div className="text-base font-bold text-gray-900">{group.title}</div>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {group.specs.map((spec) => {
              const IconComponent = getSpecIcon(spec.key);
              return (
                <div
                  key={`${spec.key}-${spec.value}`}
                  className="rounded-lg border border-slate-100 bg-slate-50/60 px-3 py-2.5 hover:bg-purple-50/40 hover:border-purple-100 transition-all duration-200 group/spec flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 group-hover/spec:border-purple-200 transition-colors shadow-sm">
                      <IconComponent className="h-3 w-3 text-purple-600" />
                    </div>
                    <div className="text-[13px] font-bold text-gray-800 truncate">
                      {spec.key}
                    </div>
                  </div>
                  <div className="text-[13px] font-medium text-slate-600 text-right break-words line-clamp-2">
                    {spec.value}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

ProductSpecsPanel.propTypes = {
  mergedSpecs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default ProductSpecsPanel;

