"use strict";(()=>{var e={};e.id=813,e.ids=[813],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2081:e=>{e.exports=require("child_process")},6113:e=>{e.exports=require("crypto")},9523:e=>{e.exports=require("dns")},2361:e=>{e.exports=require("events")},7147:e=>{e.exports=require("fs")},3685:e=>{e.exports=require("http")},5687:e=>{e.exports=require("https")},1808:e=>{e.exports=require("net")},2037:e=>{e.exports=require("os")},1017:e=>{e.exports=require("path")},2781:e=>{e.exports=require("stream")},4404:e=>{e.exports=require("tls")},7310:e=>{e.exports=require("url")},3837:e=>{e.exports=require("util")},9796:e=>{e.exports=require("zlib")},4421:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>h,patchFetch:()=>m,requestAsyncStorage:()=>q,routeModule:()=>l,serverHooks:()=>x,staticGenerationAsyncStorage:()=>d});var o={};t.r(o),t.d(o,{POST:()=>c});var s=t(9303),a=t(8716),i=t(670),u=t(5245),n=t(7070),p=t(2663);async function c(e){try{let{firstName:r,lastName:t,email:o,phone:s,services:a,NoOfServices:i,comments:c}=await e.json(),l=await p.Z.quote.create({data:{firstName:r,lastName:t,email:o,phone:s,services:a,NoOfServices:i,comments:c}}),q=u.createTransport({service:"gmail",auth:{user:process.env.EMAIL_ADDRESS,pass:process.env.EMAIL_PASSWORD}}),d={from:process.env.EMAIL_ADDRESS,to:o,subject:"Quote Request Confirmation",text:`Thank you, ${r} ${t}, for requesting a quote. We have received your request and will get back to you shortly.`,html:`<p>Thank you, <strong>${r} ${t}</strong>, for requesting a quote. We have received your request and will get back to you shortly.</p>`};return await q.sendMail(d),n.NextResponse.json({quote:l,success:!0},{status:201})}catch(e){return console.error("Error:",e),n.NextResponse.json({error:"Internal Server Error"},{status:500})}}let l=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/quotation/route",pathname:"/api/quotation",filename:"route",bundlePath:"app/api/quotation/route"},resolvedPagePath:"E:\\FullStackProjects\\real-agency\\agency-app\\app\\api\\quotation\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:q,staticGenerationAsyncStorage:d,serverHooks:x}=l,h="/api/quotation/route";function m(){return(0,i.patchFetch)({serverHooks:x,staticGenerationAsyncStorage:d})}},2663:(e,r,t)=>{t.d(r,{Z:()=>s});let o=require("@prisma/client"),s=globalThis.prisma||new o.PrismaClient}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[948,770],()=>t(4421));module.exports=o})();