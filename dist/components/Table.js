"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ej2ReactGrids = require("@syncfusion/ej2-react-grids");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function Table(props) {
  const {
    columns,
    rows,
    allowSorting = false,
    allowSearch = false,
    allowExcelExport = false,
    excelEportFileName = "Excel",
    allowPdfExport = false,
    pdfExportFileName = "Pdf",
    allowCsvExport = false,
    csvExportFileName = "CSV"
  } = props;
  var gridObj = (0, _react.useRef)(null);

  // Constructing toolbar 
  let toolbar = [];
  allowExcelExport && toolbar.push("ExcelExport");
  allowPdfExport && toolbar.push("PdfExport");
  allowCsvExport && toolbar.push("CsvExport");
  allowSearch && toolbar.push("Search");
  toolbar = toolbar.length > 0 && toolbar;
  const toolbarClick = args => {
    if (args["item"].id === "gridcomp_excelexport") {
      let excelExportProperties = {
        fileName: "".concat(excelEportFileName, ".xlsx")
      };
      gridObj.excelExport(excelExportProperties);
    }
    if (args["item"].id === "gridcomp_pdfexport") {
      let pdfExportProperties = {
        fileName: "".concat(pdfExportFileName, ".pdf")
      };
      gridObj.pdfExport(pdfExportProperties);
    }
    if (args["item"].id === "gridcomp_csvexport") {
      let pdfExportProperties = {
        fileName: "".concat(csvExportFileName, ".csv")
      };
      gridObj.csvExport(pdfExportProperties);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_ej2ReactGrids.GridComponent, {
    id: "gridcomp",
    ref: g => {
      gridObj = g;
    },
    dataSource: rows,
    allowSorting: allowSorting,
    allowPdfExport: true,
    allowExcelExport: allowExcelExport,
    toolbar: toolbar,
    toolbarClick: toolbarClick,
    allowPaging: true
  }, /*#__PURE__*/_react.default.createElement(_ej2ReactGrids.ColumnsDirective, null, columns.map(column => {
    return /*#__PURE__*/_react.default.createElement(_ej2ReactGrids.ColumnDirective, {
      key: column.field,
      field: column.field,
      headerText: column.headerName,
      width: column.width,
      textAlign: column.textAlign
    });
  })), /*#__PURE__*/_react.default.createElement(_ej2ReactGrids.Inject, {
    services: [_ej2ReactGrids.PdfExport, _ej2ReactGrids.ExcelExport, _ej2ReactGrids.Search, _ej2ReactGrids.Sort, _ej2ReactGrids.Toolbar, _ej2ReactGrids.Resize]
  })));
}
var _default = Table;
exports.default = _default;