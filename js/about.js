var   w = 1000,
      h =  800,
      circleWidth = 5; 
 

var palette = {
      "lightgray": "#E5E8E8",
      "lightblue": "#00b8ff",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
  }

var colors = d3.scale.category20c();

var nodes = [
      { 
        name: "\"Daily use\"", 
        target: [0, 2], 
        value: 10,
        url: "http://www.w-o-m.us/" 
      },
      { 
        name: "\"Where to go\"", 
        target: [0], 
        value: 35, 
        url: "http://www.w-o-m.us/"
      },
      { 
        name: "\"Our Community\"", 
        target: [0, 1], 
        value: 40,
        url: "https://www.w-o-m.us/" 
      },  
      { 
        name: "\"Services I Need\"", 
        target: [0, 1, 2], 
        value: 40,
        url: "https://www.w-o-m.us/"
      }, 
      { 
        name: "\"Progress\"", 
        target: [0, 3], 
        value: 50,
        url: "https://www.w-o-m.us/" 
      },
      { 
        name: "\"Help Right Now\"", 
        target: [0,3,4],
        value: 50,
        url: "https://www.w-o-m.us/"
      }, 
      { 
        name: "Word Of Mouth", 
        target: [0,3,4,5], 
        value: 80,
        url: "https://www.w-o-m.us/"
      },
      { 
        name: "\"A Friend\"", 
        target: [0, 1, 2], 
        value: 52,
        url: "https://www.w-o-m.us/"
      },
      { 
        name: "\"Help Right Now!\"", target: [0, 1, 2, 8, 9,10,11], value: 55 },
      { 
        name: "\"Resources\"", target: [0,1,2], value: 30 },
      { 
        name: "\"Community Services\"", target: [0,1,2,3,4,5,6,7,8,10], value: 68 },
      { 
        name: "\"Some Help\"", target: [0,1,2,7,8 ], value: 36 },
      { 
        name: "\"Connection\"", target: [0,1,2,7,8], value: 35 },
      { 
        name: "\"A Second Chance\"", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 49 },
];

var links = [];

for (var i = 0; i < nodes.length; i++){
      if (nodes[i].target !== undefined) { 
            for ( var x = 0; x < nodes[i].target.length; x++ ) 
              links.push({
                  source: nodes[i],
                  target: nodes[nodes[i].target[x]]  
              });
      };
};


var myChart = d3.select('#chart')
      .append("div")
        .classed("svg-container", true)
      
      .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 1000 800")
        .classed("svg-content-responsive", true)


var force = d3.layout.force()
      .nodes(nodes)
      .links([])
      .gravity(0.1)
      .charge(-1200)
      .size([w,h]); 

      var link = myChart.selectAll('line') 
            .data(links).enter().append('line')
            .attr('stroke', palette.lightgray)
            .attr('strokewidth', '1');

      var node =  myChart.selectAll('circle')  
            .data(nodes).enter() 
            .append('g') 
            .call(force.drag); 

  node.append("svg:a")
    .attr("xlink:href", function(d){return d.url;})
    .on("click", function(d) {
              var url = "http://w-o-m.us/";
              url += d.name;
              $(location).attr('href', url);
              window.location = url;
            });


     
     node.append('circle')
            .attr('cx', function(d){return d.x; })
            .attr('cy', function(d){return d.y; })
            .attr('r', function(d,i){
                  console.log(d.value);
                  if ( i > 0 ) {
                        return circleWidth + d.value; 
                  } else {
                        return circleWidth + 35; 
                  }
            })
            .attr('fill', function(d,i){
                  if ( i > 0 ) {
                        return colors(i);
                  } else {
                        return '#fff';
                  }
            })
            .attr('strokewidth', function(d,i){
                  if ( i > 0 ) {
                        return '0';
                  } else {
                        return '2';
                  }
            })
            .attr('stroke', function(d,i){
                  if ( i > 0 ) {
                        return '';
                  } else {
                        return 'black';
                  }
            });


      force.on('tick', function(e){ 
            node.attr('transform', function(d, i){
              return 'translate(' + d.x + ','+ d.y + ')'
            })

          link 
              .attr('x1', function(d){ return d.source.x; }) 
              .attr('y1', function(d){ return d.source.y; })
              .attr('x2', function(d){ return d.target.x; })
              .attr('y2', function(d){ return d.target.y; })
      });


      node.append('text')
            .text(function(d){ return d.name; })
            .attr('font-family', 'Asap', 'sans-serif')
            .attr('fill', function(d, i){
              console.log(d.value);
                  if ( i > 0 && d.value < 10 ) {
                        return palette.mediumgray;
                  } else if ( i > 0 && d.value >10 ) {
                        return palette.lightgrey;
                  } else {
                        return palette.blue;
                  }
            })
            .attr('text-anchor', function(d, i) {
                  return 'middle';
            })
            .attr('font-size', function(d, i){
                  if (i > 0) {
                        return '.8em';
                  } else {
                        return '.9em';    
                  }

            
            }) 

force.start();





myChart.append("a")
    .attr("xlink:href", "http://w-o-m.us/"+name)