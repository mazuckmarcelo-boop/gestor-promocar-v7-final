
function exportTableToCSV(tableId, filename){
 const rows=document.querySelectorAll("#"+tableId+" tr");
 let csv=[];
 rows.forEach(row=>{
   let cols=row.querySelectorAll("th,td");
   let r=[];
   cols.forEach(c=>r.push(c.innerText));
   csv.push(r.join(","));
 });
 const blob=new Blob([csv.join("\n")],{type:"text/csv"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url; a.download=filename; a.click();
 URL.revokeObjectURL(url);
}
document.addEventListener("DOMContentLoaded",()=>{
 const b1=document.getElementById("exportEquipe");
 if(b1) b1.onclick=()=>exportTableToCSV("equipe-table","equipe_promocar.csv");
 const b2=document.getElementById("exportPortais");
 if(b2) b2.onclick=()=>exportTableToCSV("portais-table","portais_promocar.csv");
});
