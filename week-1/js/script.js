const nssfContribution = 1080;
const pRelief = 2400;
const nhifRelief = 210;
const tRelief = pRelief + nhifRelief;
const nhifContribution = 1400;

const salaryInput = document.getElementById("gSalary");
const tableRow = document.querySelector(".net-salary");
const btn = document.querySelector("#inputSalary");
btn.addEventListener("click", inputValues, { once: true });

function inputValues() {
  var gSalary = salaryInput.value;

  //remove formInput, append salary text
  const formInput = document.querySelector(".gross-salary");
  formInput.remove();
  const grxSalary = document.querySelector(".salary");
  var div2 = document.createElement("div");
  div2.className = "salary-text";
  var textReplacement = document.createElement("h5");
  var insertText = document.createTextNode(
    `Your gross salary is Ksh. ${gSalary}`
  );
  textReplacement.appendChild(insertText);
  div2.appendChild(textReplacement);
  grxSalary.appendChild(div2);

  var taxableIncome = gSalary - nssfContribution;
  if (taxableIncome <= 0) {
    taxableIncome = 0;
  } else {
    taxableIncome = taxableIncome;
  }

  var iTax;
  if (taxableIncome < 24000 || taxableIncome === 24000) {
    iTax = taxableIncome * 0.1;
  } else if (taxableIncome >= 24000 && taxableIncome <= 64666) {
    iTax = taxableIncome * 0.25;
  } else {
    iTax = taxableIncome * 0.3;
  }
  var payE = iTax - tRelief;
  if (payE < 0) {
    payE = 0;
  } else {
    payE = payE;
  }
  var payAftertax = taxableIncome - payE;
  var nSalary = payAftertax - nhifContribution;

  if (nSalary <= 0) {
    nSalary = gSalary;
  } else {
    nSalary = nSalary;
  }

  console.log(taxableIncome);
  console.log(iTax);
  console.log(payE);
  console.log(payAftertax);
  console.log(nSalary);

  function buildTable() {
    var dataInput = [
      { Name: "NSSF Contribution", Cost: "1080" },
      { Name: "Personal Relief", Cost: "2400" },
      { Name: "Insurance/NHIF relief", Cost: "210" },
      { Name: "NHIF contribution", Cost: "1400" },
      { Name: "Taxable Income", Cost: `${taxableIncome}` },
      { Name: "Tax Before Relief", Cost: `${iTax}` },
      { Name: "PAYE", Cost: `${payE}` },
      { Name: "Net Salary", Cost: `${nSalary}` },
    ];
    var table = document.querySelector(".data-output");
    for (var i = 0; i < dataInput.length; i++) {
      var row = `<tr class="table-row"><td>${dataInput[i].Name}</td><td>Ksh. ${dataInput[i].Cost}</td></tr>`;
      table.innerHTML += row;
    }
  }
  buildTable();


}
