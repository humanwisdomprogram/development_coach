import { Injectable, OnInit } from '@angular/core';
import { CanActivate,Router,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,OnInit {
  loginResponse=JSON.parse(localStorage.getItem("loginResponse"))
  t:any
  x=[]
  scrId:any
  freeScreens=JSON.parse(localStorage.getItem("freeScreens"))
  constructor(public router:Router,private url:ActivatedRoute) { 
    this.t=this.router.getCurrentNavigation().extractedUrl.queryParams.t
   
     
  }
  ngOnInit(){
   
  }
 
 canActivate( next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot):boolean{
 this.x=[]
console.log(this.t,"urlToken")
console.log(this.freeScreens,"freeScreens")
 console.log(next.routeConfig.path);
//let v=this.router.navigate(["/adults/"])

 
if(localStorage.getItem("token")){
  if(this.loginResponse.Subscriber==1)
    return true
  else{
   // call free pages to check if url is a free screen 
   //console.log("nav",this.router.getCurrentNavigation())
   //var str=this.router.getCurrentNavigation().finalUrl.root.children.primary.segments[1].path
    let str = next.routeConfig.path.replace(/\D/g,'');
    this.scrId = str;
   console.log("str","id",this.scrId)
   if(this.freeScreens.includes((this.scrId).toString()))
    return true
  else{
    this.router.navigate(['/onboarding/login'])
    return false

  }
  
  // var lastSlash = str.lastIndexOf("/");
  // console.log(str.substring(lastSlash+2));

  /* this.service.freeScreens().subscribe(res=>
    {
      
        let result = res.map(a => a.FreeScrs);
        result=result.forEach(element => {
        this.x.push(element.map(a=>parseInt(a.ScrNo)))
        this.freeScreens= Array.prototype.concat.apply([], this.x);
        })
        console.log("scrId",this.scrId,"y",this.freeScreens)
      
      },
      error=>{
          console.log(error)
        },
      ()=>{
          console.log(this.freeScreens.includes(parseInt(this.scrId)),"checking in",this.freeScreens)
          if(this.freeScreens.includes(parseInt(this.scrId)))
          {
            console.log("go to s0")
            return true
            
          }
            
          else
          {
            this.router.navigate(['/onboarding/login'])
            return false

          }
           
          }
      
     
     
    )*/
  
  }
}
else  //not logged in
{
  console.log("not logged in",this.t)
  if(this.t)    // shared
    return true 
  else 
    {
      this.router.navigate(['/onboarding/login'])
       return false 
    }
}
 


}

  
}
