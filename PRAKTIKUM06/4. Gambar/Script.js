var myImage = new Image(300, 300);

function hewan() {
    let kotak = document.getElementById('pict');
    let animal = document.getElementById('animal');

    if (animal.value == '') {

    }else if (animal.value == 'Panda'){
	    myImage.src = 'https://media3.picsearch.com/is?vcquS6ZwUjz-O8qQ6eDSISepaPvJfkWJqe6X5NZIxcM&height=149';
	    kotak.appendChild(myImage)
        alert("Ini Gambar Panda")
    }else if (animal.value == 'Kelinci'){
	    myImage.src = 'https://media3.picsearch.com/is?SWPVjKz-hiq7Y1uxptlzaZgaKHcdNBYtOyyYDbhm8gg&height=320';
	    kotak.appendChild(myImage)
        alert("ini Gambar Kelinci")
    }else if (animal.value == 'Kangguru'){
        myImage.src = 'https://media5.picsearch.com/is?fYtkyLhSrDvVzEob1ycEdaTKdAnTZ-1pRG0tzeLMUrs&height=227';
        kotak.appendChild(myImage)
        alert("Ini Gambar Kangguru")
    }else if (animal.value == 'Lumba-lumba'){
        myImage.src = 'https://media4.picsearch.com/is?1CAWZKhDqopAzh8145BXj1k7Q9kM88ixiSgblSEk6n0&height=191';
        kotak.appendChild(myImage)
        alert("Ini Gambar Lumba-Lumba")
    }else if (animal.value == 'Burung'){
        myImage.src = 'https://media5.picsearch.com/is?0Dqbx2oXyrjiLuVfNltOaLIk56n4xcCPdsw4HbIImaI&height=227';
        kotak.appendChild(myImage)
        alert("Ini Gambar Burung") 
    }else if (animal.value == 'Beruang'){
        myImage.src = 'https://media5.picsearch.com/is?0LBvBb8IgXxJdaINzvnaWrtjjQwss-Vm8qO0fPd7_Rs&height=341';
        kotak.appendChild(myImage)
        alert("Ini Gambar Beruang")  
    }else if (animal.value == 'Tupai'){
        myImage.src = 'https://media3.picsearch.com/is?m49zzxJ4O54z0OjGuIlNtrrN9Pd17IZtyvBKtAk4d3I&height=209';
        kotak.appendChild(myImage)
        alert("Ini Gambar Tupai")          
    }
    return true;  
}