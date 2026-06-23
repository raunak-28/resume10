export interface ResumeTemplate{

 id:string;

 name:string;

 thumbnail:string;

 render:(resume:Resume)=>ReactNode;

}