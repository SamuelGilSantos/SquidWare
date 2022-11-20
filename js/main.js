function telefone_mask () {

         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
     tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            //máscara
            var tel_total = document.getElementById("telefone").value
            if (tel_total[0]!="(")
            {
                if(tel_total[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_total[0];
                }
            }

            if (tel_total[3]!=")")
            {
                if(tel_total[3]!=undefined)
            {
                 document.getElementById("telefone").value=tel_total.slice(0,3)+")"+tel_total[3]
             }
         }

        if (tel_total[9]!="-")
        {
         if(tel_total[9]!=undefined)
        {
            document.getElementById("telefone").value=tel_total.slice(0,9)+"-"+tel_total[9]
        }
    }
}

function cep_mask() { 

    var cep_total = document.getElementById("cep").value
            if (cep_total[2]!=".")
            {
                if (cep_total[2]!=undefined)
                {
                    document.getElementById("cep").value=cep_total.slice(0,2)+"."+cep_total[2];
                }
            }
        
            if (cep_total[6]!="-")
            {
                if(cep_total[6]!=undefined)
                {
                    document.getElementById("cep").value=cep_total.slice(0,6)+"-"+cep_total[6]
                }
            }

        }    


function cnpj_mask () {

         var cn = document.getElementById("cnpj").value

         cn=cn.slice(0,20) 

          document.getElementById("cnpj").value=cn
          cn=document.getElementById("cnpj").value.slice(0,10)

           
            //máscara
            var cn_total = document.getElementById("cnpj").value
            if (cn_total[2]!=".")
            {
                if(cn_total[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cn_total.slice(0,2)+"."+cn_total[2]
                }
            }

            if (cn_total[3]!=" ")
            {
                if(cn_total[3]!=undefined)
            {
                 document.getElementById("cnpj").value=cn_total.slice(0,3)+" "+cn_total[3]
             }
         }

        if (cn_total[7]!=".")
        {
         if(cn_total[7]!=undefined)
        {
            document.getElementById("cnpj").value=cn_total.slice(0,7)+"."+cn_total[7]
        }
        
    }

    if (cn_total[8]!=" ")
    {
     if(cn_total[8]!=undefined)
    {
        document.getElementById("cnpj").value=cn_total.slice(0,8)+" "+cn_total[8]
    }
    
    }

    if (cn_total[12]!="/")
    {
     if(cn_total[12]!=undefined)
    {
        document.getElementById("cnpj").value=cn_total.slice(0,12)+"/"+cn_total[12]
    }
    
    }

    if (cn_total[16]!="-")
    {
     if(cn_total[16]!=undefined)
    {
        document.getElementById("cnpj").value=cn_total.slice(0,16)+"-"+cn_total[16]
    }
    
    }

    if (cn_total[19]!=".")
    {
     if(cn_total[19]!=undefined)
    {
        document.getElementById("cnpj").value=cn_total.slice(0,19)+"."+cn_total[19]
    }
    
    }
}