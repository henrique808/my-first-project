function hello_world (){
    return` <html>
        <script>
        function soma() {
            const a=parseInt(document.getElementById ("a").value);
            const b=parseInt(document.getElementById ("b").value);
            const result=document.getElementById ("result");
            result.innerHTML="o resultado foi "+ (a+b);
            result.hidden=false;
            console.log (a+b);
            
        }        
        </script>
        <head> 
            henrique's calculadora
        </head> 
        <body> 
            <form action="#" onsubmit="return soma()">
            <input type="number" id="a"/>
            <input type="number" id="b"/>
            <input type="submit" value="somar"/>
            <br/>
            <label id="result" hidden="true">
            </label> 
            </form>
        </body>
    </html>`
}

const http=require ("http");

http.createServer (function(req,res){
    res.writeHead(200,{
    "Content-Type" :"text/html"
    });
    res.end (hello_world());
}).listen(8080);