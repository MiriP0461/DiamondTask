import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { diamond } from 'src/app/classes/diamond';
import { DiamondService } from 'src/app/services/diamond.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private diamondSer:DiamondService,public dialog: MatDialog) { }
  headElements=['List price','Price','Clarity','Color','Size','Shape']
listAllDiamonds:Array<diamond>=new Array<diamond>();
averageP:number=0
numberOf:number=0
averageD:number=0
dialogRef:any
newTaskForm = new FormGroup({
  NameTask: new FormControl('',[Validators.required,
    Validators.pattern("^[0-9]*$")]),

});
diamond:diamond=new diamond("",0.0,"","",0,0)

 firstname:string="ghbjkml"

  ngOnInit(): void 
  {
    debugger
    this.diamondSer.getAllDiamonds().subscribe(data=>{this.listAllDiamonds=data ;debugger;
      this.averageP=this.averagePrice(this.listAllDiamonds)
      this.numberOf=this.listAllDiamonds.length
      this.averageD=(this.averageDiscount(this.listAllDiamonds).toFixed(3)) as unknown as number
    },er=>{});
    debugger
   
  }

  averagePrice(ad:Array<diamond>)
  {
    let sum:number=0
    for (let i = 0; i < ad.length; i++)
    {
      sum+=ad[i].price;
    }
    return sum/ad.length

  }
  averageDiscount(ad:Array<diamond>)
  {
    let sum:number=0
    let count:number=0
    for (let i = 0; i < ad.length; i++)
    {

      if(ad[i].price< ad[i].listPrice)
       {
      sum+=100-((ad[i].price/ad[i].listPrice)*100);
      
      count++
       }
    }
    
   return (sum)/count 
  }
  addDiamond(d:diamond)
  {
    debugger
   let flag:boolean=false
    this.dialogRef.close();
debugger
for(let i = 0; i < this.listAllDiamonds.length; i++)
{
  if(this.diamond.clarity==this.listAllDiamonds[i].clarity&&
    this.diamond.color==this.listAllDiamonds[i].color&&
    this.diamond.listPrice==this.listAllDiamonds[i].listPrice&&
    this.diamond.price==this.listAllDiamonds[i].price&&
    this.diamond.shape==this.listAllDiamonds[i].shape&&
    this.diamond.size==this.listAllDiamonds[i].size)
    {
      alert("There is already a diamond with this data!")
      flag=true  
      break
    }
  
}
if(flag!=true)
{
  debugger


  this.diamond.size=parseFloat(this.diamond.size.toString())
  this.diamond.price=parseFloat(this.diamond.price.toString())

  this.diamond.listPrice=parseFloat(this.diamond.listPrice.toString())

this.diamondSer.addDiamond(this.diamond).subscribe(data=>{this.listAllDiamonds.push(this.diamond)
  ;
  this.numberOf=this.listAllDiamonds.length
  this.averageP=this.averagePrice(this.listAllDiamonds)
  this.averageD=this.averageDiscount(this.listAllDiamonds)
}

  ,er=>{});

  }
}

  openDialog(templateRef:any) {

    debugger;
    this.diamond=new diamond("",0,"","",0,0)
     this.dialogRef = this.dialog.open(templateRef, {
     width: '25%',
     height:'90%'
   });
  
 
   this.dialogRef.afterClosed().subscribe((result: any) => {
    debugger
    console.log('The dialog was closed');
    if (typeof result == "object") {
      this.listAllDiamonds.push(result)
    this.diamondSer.getAllDiamonds().subscribe(data=>{this.listAllDiamonds=data ;debugger; },er=>{});
     
      
    }
  });
 
   
   
  }
}
