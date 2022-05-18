
const OpeningStock = {
    "tableHead": [
        "Sr#", "Date", "Order#", "Product", "Quantity","Price"
    ],
    "tableData": []
}
const StockBatchExpiry = {
    "tableHead": [
        "Name"	,"Tot Orders	",	"Tot Exec	",	"Inv PCT	",	"Tot Cust	",	"Exe Cust	",	"Load Value	",	"Supply Value"
    ],
    "tableData": [[
        "ABID ULLAH",
        "1",	0,	0,	1,	0,	3700.00,	0
    ],[
        "Afzal Khan",
6,	0,	0,	6	,0,	140794.80,	0
    ],[
        "Anwar",
21	,21	,100	,2	,2	,3564700.64	,0
    ],[
        "Fahad Shah"
        ,7	,0	,0	,5	,0	,575744.25	,0
    ],[
        "Momin Khan"
        ,1	,0	,0	,1	,0	,143575.00	,0
    ],[
        "MUDASSAR IJAZ",
2	,0	,0	,2	,0	,262455.00	,0
    ],[
        "PESHAWAR RETAIL USER",
1	,0	,0	,1	,0	,785809.98	,0
    
    ],[
        "SAJJAD ANWER",
        2,	0,	0,	2,	0,	102726.00,	0
    ]]
}
const CostAndSalesPrice = {
    "tableHead": [
        "Sr#",	"Product Code",	"Product Name",	"Barcode",	"Cost Price (Calculated)",	"Khyber Price (Assigned)",	"Sale Price (Assigned)"	,"Sale Price (Calculated)"
    ],
    "tableData": [[
        "1","WAL01004", "ADIDAS BODY SPRAY 150ML ( POWER )",  "BATCH_23", "0", "0", "0", "0"
    ],[
        "2","WAL01004", "ADIDAS BODY SPRAY 150ML ( POWER )",  "BATCH_23", "0", "0", "0", "0"
    ],[
        "3","WAL01004", "ADIDAS BODY SPRAY 150ML ( POWER )",  "BATCH_23", "0", "0", "0", "0"
    ],[
        "4","WAL01004", "ADIDAS BODY SPRAY 150ML ( POWER )",  "BATCH_23", "0", "0", "0", "0"
    ],[
        "5","WAL01004", "ADIDAS BODY SPRAY 150ML ( POWER )",  "BATCH_23", "0", "0", "0", "0"
    ],[
        "6","WAL01004", "ADIDAS BODY SPRAY 150ML ( POWER )",  "BATCH_23", "0", "0", "0", "0"
    ],]
}
const AllBranchStock = {
    "tableHead": [
        "Sr#",	"Product Code",	"Product Name",	"Category",	"Karachi W/H",	"LHR Shahalam W/H"
        ,	"LHR KT MARKETING W/H"	,"LHR SAGYAN W/H","Khyber House W/H",	"LHR CORPORATION W/H",	"Islamabad W/H",	"Peshawar W/H",	"Total (pcs)",	"Total (dzn)"
    ],
    "tableData": [[
        "1",	"ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0"
    ],[
        "2","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0"
    ],[
        "3","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0"
    ],[
        "4","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0"
    ],[
        "5","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0"
    ],[
        "6","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0",	"0"
    ],]
}
const ProductTrack = {
    "tableHead": [
        "Sr#",	"Date",	"Reference", "Code",	"Nature",	"In",	"Out",	"Balance" ],
    "tableData": [[
        "1",	"ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	
    ],[
        "2","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	
    ],[
        "3","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	
    ],[
        "4","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	
    ],[
        "5","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	
    ],[
        "6","ARN01001",	"AFTON AIR FRESHENER 240ML ( CITRUS CHOICE )",	"AIR CARE / AIR FRESHNER", "0",	"0",	"0",	"0",	
    ],]
}


export default {
    OpeningStock,
    StockBatchExpiry,
    CostAndSalesPrice,
    AllBranchStock,
    ProductTrack
}