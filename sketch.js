var grid = [];
const r = 6;
const io = ["orange", "yellow", "black", "peachpuff", "red"];

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('black');

}

function draw(){

    background('black');


  for(let xx = 0; xx <= windowWidth; xx += 400){
    for(let yy = 0; yy <= windowHeight; yy += 300){
      stroke('white');
      noFill();

  for(let x = 0; x <= 400; x += 10){
    for(let y = 0; y <= 300; y += 10){
      grid.push([x,y]);
      stroke('white');
      strokeWeight(1);
      point(x+xx,y+yy);
    }
  }

  strokeWeight(1);
  for(let k=0; k<=3; k++){
  line(grid[30+k*30+k][0] +xx, grid[30][1]+yy, grid[210+k][0]+xx, grid[210+k][1]+yy);
  line(grid[210+k][0]+xx, grid[210+k][1]+yy, grid[892+k-31*k][0]+xx, grid[892+k-31*k][1]+yy);
    if(k>1){
      fill(color(random(io)));
      circle(grid[892+k-31*k][0]+xx, grid[892+k-31*k][1]+yy, r);
    }
  line(grid[892][0]+xx, grid[892][1]+yy, grid[1072][0]+xx, grid[1072][1]+yy);
  line(grid[1072][0]+xx, grid[1072][1]+yy, grid[1196][0]+xx, grid[1196][1]+yy);
    fill(color(random(io)));
  circle(grid[1196][0]+xx, grid[1196][1]+yy, r);
  }

  line(grid[211][0]+xx, grid[211][1]+yy, grid[893][0]+xx, grid[893][1]+yy);
  line(grid[893][0]+xx, grid[893][1]+yy, grid[1073][0]+xx, grid[1073][1]+yy);
  line(grid[1073][0]+xx, grid[1073][1]+yy, grid[1259][0]+xx, grid[1259][1]+yy);
  line(grid[1073][0]+xx, grid[1073][1]+yy, grid[1105][0]+xx, grid[1105][1]+yy);
  line(grid[1105][0]+xx, grid[1105][1]+yy, grid[1260][0]+xx, grid[1260][1]+yy);

  line(grid[20][0]+xx, grid[20][1]+yy, grid[268][0]+xx, grid[268][1]+yy);
  for(k=0;k<=2;k++){
    pattern(268+k*62,xx,yy);
  }

  line(grid[454][0]+xx, grid[454][1]+yy, grid[795][0]+xx, grid[795][1]+yy);

  for(k=0;k<=1;k++){
  line(grid[21+k][0]+xx, grid[21+k][1]+yy, grid[238+k-31*k][0]+xx, grid[238+k-31*k][1]+yy);
  line(grid[238+k-31*k][0]+xx, grid[238+k-31*k][1]+yy, grid[239+k-31*k][0]+xx, grid[239+k-31*k][1]+yy);
  line(grid[239+k-31*k][0]+xx, grid[239+k-31*k][1]+yy, grid[456+32*k][0]+xx, grid[456+32*k][1]+yy);
  line(grid[456+32*k][0]+xx, grid[456+32*k][1]+yy, grid[455+32*k][0]+xx, grid[455+32*k][1]+yy);
  line(grid[455+32*k][0]+xx, grid[455+32*k][1]+yy, grid[827+32*k][0]+xx, grid[827+32*k][1]+yy);
  }

  for (k=0; k<=5; k++){
    fill(color(random(io)));
    circle(grid[891+30*k][0]+xx, grid[891+30*k][1]+yy,r);
    fill(color(random(io)));
    circle(grid[891-32*k][0]+xx, grid[891-32*k][1]+yy,r);
    fill(color(random(io)));
    circle(grid[1041-32*k][0]+xx, grid[1041-32*k][1]+yy,r);
    fill(color(random(io)));
    circle(grid[731+30*k][0]+xx, grid[731+30*k][1]+yy,r);
  }

  for  (k=0; k<=3; k++){
  line(grid[1009-32*k][0]+xx, grid[1009-32*k][1]+yy, grid[1102-32*k][0]+xx, grid[1102-32*k][1]+yy);
  line(grid[1102-32*k][0]+xx, grid[1102-32*k][1]+yy,grid[1102-1-32*k][0]+xx, grid[1102-1-32*k][1]+yy);
  line(grid[1102-1-32*k][0]+xx, grid[1102-1-32*k][1]+yy, grid[1132-32*k][0]+xx, grid[1132-32*k][1]+yy);
    if(k==1){
  line(grid[1132-32*k][0]+xx, grid[1132-32*k][1]+yy, grid[1130-32*k-2][0]+xx, grid[1130-32*k-2][1]+yy);
    }
    if(k==2){
  line(grid[1132-32*k][0]+xx, grid[1132-32*k][1]+yy, grid[1130-32*k-1][0]+xx, grid[1130-32*k-1][1]+yy);
    }
    else{
      line(grid[1132-32*k][0]+xx, grid[1132-32*k][1]+yy, grid[1130-32*k][0]+xx, grid[1130-32*k][1]+yy);
    }
  }

  strokeWeight(3);
  line(grid[1034][0]+xx, grid[1034][1]+yy, grid[1096][0]+xx, grid[1096][1]+yy);

  strokeWeight(1);
  fill(color(random(io)));
  circle(grid[1129][0]+xx, grid[1129][1]+yy, r);

  line(grid[1130][0]+xx, grid[1130][1]+yy, grid[1220][0]+xx, grid[1220][1]+yy);
  line(grid[1129][0]+xx, grid[1129][1]+yy, grid[1189][0]+xx, grid[1189][1]+yy);
  line(grid[1220][0]+xx, grid[1220][1]+yy, grid[1211][0]+xx, grid[1211][1]+yy);
  line(grid[1211][0]+xx, grid[1211][1]+yy, grid[1179][0]+xx, grid[1179][1]+yy);
  line(grid[1189][0]+xx, grid[1189][1]+yy, grid[1181][0]+xx, grid[1181][1]+yy);

  for(k=0; k<=3; k++){
    line(grid[1189-30*k-2*k][0]+xx, grid[1189-30*k-2*k][1]+yy, grid[1180-30*k-k][0]+xx, grid[1180-30*k-k][1]+yy);
    if(k>0){
      fill(color(random(io)));
    circle(grid[1189-30*k-2*k][0]+xx, grid[1189-30*k-2*k][1]+yy,r);
    }
  }

  strokeWeight(3);
  line(grid[1180][0]+xx, grid[1180][1]+yy, grid[1087][0]+xx, grid[1087][1]+yy);

  strokeWeight(1);

  for(k=1; k<=4; k++){
    line(grid[1075+k*31][0]+xx, grid[1075+k*31][1]+yy, grid[1076+k*32][0]+xx, grid[1076+k*32][1]+yy)
    fill(color(random(io)));
    circle(grid[1075+k*31][0]+xx, grid[1075+k*31][1]+yy,r);
    if(k<4){
      fill(color(random(io)));
      circle(grid[1076+k*32][0]+xx, grid[1076+k*32][1]+yy,r);
    }
  }

  strokeWeight(2);
      noFill();
  rect(grid[1204][0]+xx, grid[1204][1]+yy, 10, 30)

  strokeWeight(1);
  line(grid[19][0]+xx, grid[19][1]+yy,grid[267][0]+xx, grid[267][1]+yy);
  line(grid[267][0]+xx, grid[267][1]+yy, grid[447][0]+xx, grid[447][1]+yy);
      fill(color(random(io)));
  circle(grid[447][0]+xx, grid[447][1]+yy, r);
  line(grid[297][0]+xx, grid[297][1]+yy, grid[296][0]+xx, grid[296][1]+yy);
  line(grid[296][0]+xx, grid[296][1]+yy, grid[446][0]+xx, grid[446][1]+yy);
      fill(color(random(io)));
  circle(grid[446][0]+xx, grid[446][1]+yy, r);
  line(grid[327][0]+xx, grid[327][1]+yy, grid[358][0]+xx, grid[358][1]+yy);
  line(grid[358][0]+xx, grid[358][1]+yy, grid[508][0]+xx, grid[508][1]+yy);
      fill(color(random(io)));
  circle(grid[508][0]+xx, grid[508][1]+yy, r);
  line(grid[448][0]+xx, grid[448][1]+yy, grid[479][0]+xx, grid[479][1]+yy);
  line(grid[479][0]+xx, grid[479][1]+yy, grid[569][0]+xx, grid[569][1]+yy);
      fill(color(random(io)));
  circle(grid[569][0]+xx, grid[569][1]+yy, r);
  line(grid[539][0]+xx, grid[539][1]+yy, grid[538][0]+xx, grid[538][1]+yy);
  line(grid[538][0]+xx, grid[538][1]+yy, grid[628][0]+xx, grid[628][1]+yy);
      fill(color(random(io)));
  circle(grid[628][0]+xx, grid[628][1]+yy, r);
  line(grid[297][0]+xx, grid[297][1]+yy, grid[390][0]+xx, grid[390][1]+yy);
  line(grid[390][0]+xx, grid[390][1]+yy, grid[720][0]+xx, grid[720][1]+yy);
  line(grid[570][0]+xx, grid[570][1]+yy, grid[601][0]+xx, grid[601][1]+yy);
  line(grid[601][0]+xx, grid[601][1]+yy, grid[781][0]+xx, grid[781][1]+yy);
      fill(color(random(io)));
  circle(grid[720][0]+xx, grid[720][1]+yy, r);
      fill(color(random(io)));
  circle(grid[781][0]+xx, grid[781][1]+yy, r);
  line(grid[420][0]+xx, grid[420][1]+yy, grid[482][0]+xx, grid[482][1]+yy);
  line(grid[482][0]+xx, grid[482][1]+yy, grid[602][0]+xx, grid[602][1]+yy);
      fill(color(random(io)));
  circle(grid[602][0]+xx, grid[602][1]+yy, r);

  line(grid[0][0]+xx, grid[0][1]+yy,grid[160][0]+xx, grid[160][1]+yy);
  line(grid[160][0]+xx, grid[160][1]+yy, grid[346][0]+xx, grid[346][1]+yy);
  for(k=0;k<=1;k++){
    pattern(346+62*k,xx,yy)
  }
  for(k=0;k<=2;k++){
  line(grid[64+k*32][0]+xx, grid[64+k*32][1]+yy, grid[219+k*32][0]+xx, grid[219+k*32][1]+yy);
    fill(color(random(io)));
  circle(grid[219+k*32][0]+xx, grid[219+k*32][1]+yy, r);
  }

  line(grid[470][0]+xx, grid[470][1]+yy, grid[466][0]+xx, grid[466][1]+yy);
  line(grid[1086][0]+xx, grid[1086][1]+yy, grid[1179][0]+xx, grid[1179][1]+yy)
      fill(color(random(io)));
  circle(grid[1086][0]+xx, grid[1086][1]+yy,r);

  for(k=0;k<=2;k++){
    line(grid[31+k*31][0]+xx, grid[31+k*31][1]+yy,grid[63+k*31][0]+xx, grid[63+k*31][1]+yy);
  }

  line(grid[466][0]+xx, grid[466][1]+yy, grid[869][0]+xx, grid[869][1]+yy)
  for(k=0;k<=3;k++){
    line(grid[683+62*k][0]+xx, grid[683+62*k][1]+yy,grid[685+62*k][0]+xx, grid[685+62*k][1]+yy);
      fill(color(random(io)));
    circle(grid[685+62*k][0]+xx, grid[685+62*k][1]+yy, r);
  }

  strokeWeight(3);
  line(grid[63][0]+xx, grid[63][1]+yy,grid[125][0]+xx, grid[125][1]+yy)

  strokeWeight(2);
  noFill();
  rect(grid[498][0]+xx, grid[498][1]+yy,40, 10);

  strokeWeight(3);
  line(grid[194][0]+xx, grid[194][1]+yy,grid[70][0]+xx, grid[70][1]+yy);
  strokeWeight(1);
  line(grid[101][0]+xx, grid[101][1]+yy,grid[103][0]+xx, grid[103][1]+yy);
  line(grid[103][0]+xx, grid[103][1]+yy,grid[73][0]+xx, grid[73][1]+yy);
  line(grid[73][0]+xx, grid[73][1]+yy,grid[76][0]+xx, grid[76][1]+yy);
  line(grid[76][0]+xx, grid[76][1]+yy,grid[46][0]+xx, grid[46][1]+yy);
  line(grid[46][0]+xx, grid[46][1]+yy,grid[47][0]+xx, grid[47][1]+yy);
  fill(color(random(io)));
  circle(grid[47][0]+xx, grid[47][1]+yy, r);
  line(grid[74][0]+xx, grid[74][1]+yy,grid[106][0]+xx, grid[106][1]+yy);
  line(grid[106][0]+xx, grid[106][1]+yy,grid[110][0]+xx, grid[110][1]+yy);
  fill(color(random(io)));
  circle(grid[110][0]+xx, grid[110][1]+yy, r);
  line(grid[132][0]+xx, grid[132][1]+yy,grid[136][0]+xx, grid[136][1]+yy);
  line(grid[136][0]+xx, grid[136][1]+yy,grid[106][0]+xx, grid[106][1]+yy);
   line(grid[133][0]+xx, grid[133][1]+yy,grid[165][0]+xx, grid[165][1]+yy);
    line(grid[165][0]+xx, grid[165][1]+yy,grid[169][0]+xx, grid[169][1]+yy);
    line(grid[169][0]+xx, grid[169][1]+yy,grid[139][0]+xx, grid[139][1]+yy);
    fill(color(random(io)));
    circle(grid[139][0]+xx, grid[139][1]+yy, r);
    line(grid[166][0]+xx, grid[166][1]+yy,grid[198][0]+xx, grid[198][1]+yy);
    line(grid[198][0]+xx, grid[198][1]+yy,grid[202][0]+xx, grid[202][1]+yy);
    fill(color(random(io)));
    circle(grid[202][0]+xx, grid[202][1]+yy, r);

  for(let k = 0; k<=2; k++){
    strokeWeight(1);
    fill(color(random(io)));
    circle(grid[318+2*k][0]+xx, grid[318+2*k][1]+yy, r)
  }

  rect(grid[411][0]+xx, grid[411][1]+yy, 10, 10);

  rect(grid[874][0]+xx, grid[874][1]+yy, 10, 30);


  }
  }


}

function pattern(firstPos, xx, yy){
  line(grid[firstPos][0]+xx, grid[firstPos][1]+yy, grid[firstPos+1][0]+xx, grid[firstPos+1][1]+yy);
  line(grid[firstPos+1][0]+xx, grid[firstPos+1][1]+yy, grid[firstPos+32][0]+xx, grid[firstPos+32][1]+yy);
  line(grid[firstPos+32][0]+xx, grid[firstPos+32][1]+yy, grid[firstPos+31][0]+xx, grid[firstPos+31][1]+yy);
  line(grid[firstPos+31][0]+xx, grid[firstPos+31][1]+yy, grid[firstPos+62][0]+xx, grid[firstPos+62][1]+yy);
}
