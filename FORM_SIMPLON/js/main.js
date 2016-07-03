function surligne(champ, erreur) {
    if (erreur == true) {
        champ.style.backgroundColor = "red";
    } else
        champ.style.backgroundColor = "";
}

function verifMail(champ) {
    var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i; 

    if(!regex.test(champ.value))
    {
        surligne(champ, true);
        return false;
    } 
    else 
    {
        surligne(champ, false);
        return true;
    }
}


		function verifNum(champ) {
			
		    var valide = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/;    /*   if(champ.value.search(regex))*/

		    if(valide.test(champ.value))

		    {
		        surligne(champ, true);
		        return false;
		    } else {

		        surligne(champ, false);
		        return true;
		    }
		}

    function verifCommentaire(champ) {
        
        if(champ == null)
         {
            surligne(champ, true);
            return false;
        } 
        else 
        {    
            surligne(champ, false);
            return true;
        }

    }


 function verifFormulaire(verif) {
     var mail_Ok = verifMail(verif.email);
     var num_Ok = verifNum(verif.telephone);
     var champs_Ok = verifCommentaire(verif.commentaire);

     if(num_Ok && mail_Ok  && champs_Ok)
     {
         return true;
     }
     else 
     {
         alert("Veuillez remplir correctement tous les champs");
         return false;
     }
 }