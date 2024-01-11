function myFunction(){
    let form = document.getElementById("formularz");
    if(!form.pierwsza.value){
        alert("Podaj pierwsza liczbe");
    }else{
        let pierwsza = parseInt(form.pierwsza.value);
    }
    if(!form.druga.value){
        alert("Podaj pierwsza liczbe");
    }else{
        let druga = parseInt(form.druga.value);
    }

    function Fhj(pierwsza){
        let pierwsza_fah = (pierwsza * 1.8) + 32;
    }

    function Fhd(druga){
        let druga_fah = (druga * 1.8) + 32;
    }

    function Kp(pierwsza){
        let pierwsza_kel = pierwsza + 273.15;
    }

    function Fhd(druga){
        let druga_fah = druga + 273.15;
    }
    
    let table = '<tr><th>Celsjusz</th><th>Kelwin</th><th>Fahrenheit</th></tr>';
    if(pierwsza > druga){
        for(pierwsza; pierwsza <= druga; pierwsza += 5){
            table += "<tr><td>"+pierwsza+"</td><td>"+Fhj(pierwsza)+"</td><td>"+Kp(pierwsza)+"</td></tr>";
        }
        document.getElementById("w").innerHTML = table;
    }else{
        for(druga; druga <= pierwsza; druga += 5){
            table += "<tr><td>"+druga+"</td><td>"+Fhd(druga)+"</td><td>"+Kd(druga)+"</td></tr>";
        }
        document.getElementById("w").innerHTML = table;
    }

    

}