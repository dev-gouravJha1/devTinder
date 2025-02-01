const auth = (req,res,next)=>{
    try{
       const x = "abc"
       if(x=="abc"){
        console.log("user authenticate")
        next()
       }
    }
    catch(err){
        console.log(err)
    }
}
module.exports = auth;