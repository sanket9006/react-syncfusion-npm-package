import React, { useRef } from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, Selection, Sort, Search, Toolbar, CommandColumn, Resize, PdfExport, ExcelExport, } from "@syncfusion/ej2-react-grids";

function Table(props) {
    const {
        columns, rows,
        allowSorting = false, allowSearch = false,
        allowExcelExport = false, excelEportFileName = "Excel",
        allowPdfExport = false, pdfExportFileName = "Pdf",
        allowCsvExport = false, csvExportFileName = "CSV"
    } = props;

    var gridObj = useRef(null);

    // Constructing toolbar 
    let toolbar = [];
    allowExcelExport && toolbar.push("ExcelExport")
    allowPdfExport && toolbar.push("PdfExport")
    allowCsvExport && toolbar.push("CsvExport")
    allowSearch && toolbar.push("Search")
    toolbar = toolbar.length > 0 && toolbar;

    const toolbarClick = (args) => {
        if (args["item"].id === "gridcomp_excelexport") {
            let excelExportProperties = {
                fileName: `${excelEportFileName}.xlsx`,
            };
            gridObj.excelExport(excelExportProperties);
        }
        if (args["item"].id === "gridcomp_pdfexport") {
            let pdfExportProperties = {
                fileName: `${pdfExportFileName}.pdf`,
            };
            gridObj.pdfExport(pdfExportProperties);
        }
        if (args["item"].id === "gridcomp_csvexport") {
            let pdfExportProperties = {
                fileName: `${csvExportFileName}.csv`,
            };
            gridObj.csvExport(pdfExportProperties);
        }
    }

    return (
        <>
                <GridComponent
                    id="gridcomp"
                    ref={(g) => { gridObj = g; }}
                    dataSource={rows}
                    allowSorting={allowSorting}
                    allowPdfExport={true}
                    allowExcelExport={allowExcelExport}
                    toolbar={toolbar}
                    toolbarClick={toolbarClick}
                    allowPaging={true}
                >
                    <ColumnsDirective>
                        {columns.map((column) => {
                            return (
                                <ColumnDirective
                                    key={column.field}
                                    field={column.field}
                                    headerText={column.headerName}
                                    width={column.width}
                                    textAlign={column.textAlign}
                                ></ColumnDirective>
                            )
                        })}
                    </ColumnsDirective>
                    <Inject services={[
                        PdfExport,
                        ExcelExport,
                        Search,
                        Sort,
                        Toolbar,
                        Resize]} />
                </GridComponent>
        </>
    )
}

export default Table