var arr = [];
var id1 = [];
var id2 = [];
var id3 = [];
var id4 = [];
function addA(){
    const n = document.getElementById('numA');
    const a = document.getElementById('countryA');
    const b = document.getElementById('ptA');
    num = n.value;
    text = a.value;
    pt = b.value;

    if(num != '' && text != '' && pt != ''){
      var table = document.getElementById("worldcupA");
      id1.push({
        nA: num,
        cA: text,
        pA: pt
      });
      console.log(id1, 'pushed');
      var row = table.insertRow(0);
      id1.nA = row.insertCell(0);
      id1.cA = row.insertCell(1); 
      id1.pA = row.insertCell(2);
      id1.nA.innerHTML = num;
      id1.cA.innerHTML = text;
      id1.pA.innerHTML = pt;
      n.value = '';
      a.value = '';
      b.value = '';
   }
}
function addB(){
  const n = document.getElementById('numB');
  const a = document.getElementById('countryB');
  const b = document.getElementById('ptB');
  num = n.value;
  text = a.value;
  pt = b.value;

  if(num != '' && text != '' && pt != ''){
    var table = document.getElementById("worldcupB");
    id2.push({
      nA: num,
      cA: text,
      pA: pt
    });
    console.log(id2, 'pushed');
    var row = table.insertRow(0);
    id2.nB = row.insertCell(0);
    id2.cB = row.insertCell(1); 
    id2.pB = row.insertCell(2);
    id2.nB.innerHTML = num;
    id2.cB.innerHTML = text;
    id2.pB.innerHTML = pt;
    n.value = '';
    a.value = '';
    b.value = '';
 }
}
function addC(){
  const n = document.getElementById('numC');
  const a = document.getElementById('countryC');
  const b = document.getElementById('ptC');
  num = n.value;
  text = a.value;
  pt = b.value;

  if(num != '' && text != '' && pt != ''){
    var table = document.getElementById("worldcupC");
    id3.push({
      nC: num,
      cC: text,
      pC: pt
    });
    console.log(id3, 'pushed');
    var row = table.insertRow(0);
    id3.nC = row.insertCell(0);
    id3.cC = row.insertCell(1); 
    id3.pC = row.insertCell(2);
    id3.nC.innerHTML = num;
    id3.cC.innerHTML = text;
    id3.pC.innerHTML = pt;
    n.value = '';
    a.value = '';
    b.value = '';
 }
}
function addD(){
    const n = document.getElementById('numD');
    const a = document.getElementById('countryD');
    const b = document.getElementById('ptD');
    num = n.value;
    text = a.value;
    pt = b.value;

    if(num != '' && text != '' && pt != ''){
        var table = document.getElementById("worldcupD");
        id4.push({
          nD: num,
          cD: text,
          pD: pt
        });
        console.log(id4, 'pushed');
        var row = table.insertRow(0);
        id4.nD = row.insertCell(0);
        id4.cD = row.insertCell(1); 
        id4.pD = row.insertCell(2);
        id4.nD.innerHTML = num;
        id4.cD.innerHTML = text;
        id4.pD.innerHTML = pt;
        n.value = '';
        a.value = '';
        b.value = '';
     }
}

$(document).ready(function(){
  $("#chartbtnA").click(function (ev) {
    ev.preventDefault()
    chartA();
  });
  $("#chartbtnB").click(function (ev) {
    ev.preventDefault()
    chartB();
  });
  $("#chartbtnC").click(function (ev) {
    ev.preventDefault()
    chartC();
  });
  $("#chartbtnD").click(function (ev) {
    ev.preventDefault()
    chartD();
  });
});

function chartA(){
  var xValue = [id1[0].cA, id1[1].cA, id1[2].cA, id1[3].cA];
  var yValue = [id1[0].pA, id1[1].pA, id1[2].pA, id1[3].pA];
  var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)'
  ];       
  new Chart( "myChart",
    {
      type: "bar",
      data: {
        labels: xValue,
        datasets: [{
          backgroundColor: barColors,
          data: yValue
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World Cup 2022"
        },
        y: {
          beginAtZero: true
        },
      },
    });
}
function chartB(){
  var xValue = [id2[0].cB, id2[1].cB, id2[2].cB, id2[3].cB];
  var yValue = [id2[0].pB, id2[1].pB, id2[2].pB, id2[3].pB];
  var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)'
  ];       
  new Chart( "myChart",
    {
      type: "bar",
      data: {
        labels: xValue,
        datasets: [{
          backgroundColor: barColors,
          data: yValue
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World Cup 2022"
        },
        scales:{
          y: {
            beginAtZero: true
          },
        }
      },
    });
}
function chartC(){
  var xValue = [id3[0].cC, id3[1].cC, id3[2].cC, id3[3].cC];
  var yValue = [id3[0].pC, id3[1].pC, id3[2].pC, id3[3].pC];
  var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)'
  ];       
    new Chart( "myChart",
    {
      type: "bar",
      data: {
        labels: xValue,
        datasets: [{
          backgroundColor: barColors,
          data: yValue
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World Cup 2022"
        },
        scales:{
          y: {
            beginAtZero: true
          },
        }
      },
    });
}
function chartD(){
  var xValue = [id4[0].cD, id4[1].cD, id4[2].cD, id4[3].cD];
  var yValue = [id4[0].pD, id4[1].pD, id4[2].pD, id4[3].pD];
  var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)'
  ];       
  new Chart( "myChart",
    {
      type: "bar",
      data: {
        labels: xValue,
        datasets: [{
          backgroundColor: barColors,
          data: yValue
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World Cup 2022"
        },
        scales:{
          y: {
            beginAtZero: true
          },
        }
      },
    });
}

