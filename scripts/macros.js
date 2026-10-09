/** @OnlyCurrentDoc */

function TablaOrigen() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('R17').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('clean_data'), true);
};

function Heatmap() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('R18').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('graficas'), true);
  spreadsheet.getRange('A1').activate();
};

function IrDashboard1() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('Q19').activate();
  spreadsheet.getRange('A2').activate();
  spreadsheet.setActiveSheet(spreadsheet.getSheetByName('Dashboard Ejecutivo'), true);
  spreadsheet.getRange('A1').activate();
};

function guardarPDF() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var hoja = ss.getSheetByName("Dashboard Ejecutivo") || ss.getActiveSheet();
  
  var ssId = ss.getId();
  var sheetId = hoja.getSheetId();
  
  // Parámetros de exportación ajustados al rango A1:P37 y centrado completo
  var url = "https://docs.google.com/spreadsheets/d/" + ssId + "/export?" +
    "exportFormat=pdf&format=pdf" +
    "&size=A4" +                      // Tamaño de papel A4
    "&portrait=false" +               // Posición horizontal (Landscape)
    "&scale=4" +                      // Forzar ajuste a 1 sola página completa
    "&fitw=true" +                    // Ajustar al ancho
    "&gridlines=false" +              // Ocultar líneas de cuadrícula
    "&printtitle=false" +             // Sin títulos repetidos
    "&sheetnames=false" +             // Sin nombre de la hoja
    "&fzr=false" +                    // Sin repetir filas congeladas
    "&horizontal_alignment=CENTER" +  // Centrado horizontal
    "&vertical_alignment=MIDDLE" +    // Centrado vertical
    "&r1=0&r2=37" +                   // Rango de filas: 1 a 37
    "&c1=0&c2=16" +                   // Rango de columnas: A a P (0 a 16)
    "&gid=" + sheetId;                // ID de la pestaña 'Dashboard Ejecutivo'
    
  var interfaz = HtmlService.createHtmlOutput(
    '<div style="font-family: Arial, sans-serif; text-align: center; padding: 15px;">' +
      '<p style="font-size: 14px; color: #333; margin-bottom: 20px;">' +
        'El informe ejecutivo (A1:P37) está listo para descargar:' +
      '</p>' +
      '<a href="' + url + '" target="_blank" ' +
         'style="display: inline-block; background-color: #F1A33C; color: white; ' +
         'padding: 10px 22px; text-decoration: none; font-weight: bold; ' +
         'border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">' +
         'Descargar PDF' +
      '</a>' +
    '</div>'
  ).setWidth(350).setHeight(135);
  
  SpreadsheetApp.getUi().showModalDialog(interfaz, "Exportación a PDF");
};
