let data, info, output;

async function load(){
  let link = "data.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=200";
  info = await fetch(link);
  data = await info.json();
  console.log(data);
}

function TreesByName(){
  let no2 = 0, o3 = 0, pm = 0;
  
  for(let i = 0; i < data.length; i++){
    let tree = data[i];
    if(tree.name == "Nitrogen dioxide (NO2)"){
      no2++;
    }else if(tree.name == "Ozone (O3)"){
      o3++;
    }else if(tree.name == "Fine particles (PM 2.5)"){
      pm++;
    }
  }

  let chartData = [
    ["Nitrogen dioxide (NO2)", no2],
    ["Ozone (O3)", o3],
    ["Fine particles (PM 2.5)", pm]
  ];
  
  let chartType = document.getElementById("chartType").value;
  displayChart(chartData, "output", chartType);
}


function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}