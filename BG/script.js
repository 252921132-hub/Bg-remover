async function removeBG(){

const fileInput = document.getElementById("fileInput");
const file = fileInput.files[0];

if(!file){
alert("Upload image first");
return;
}

const formData = new FormData();
formData.append("image_file", file);
formData.append("size", "auto");

const response = await fetch("https://api.remove.bg/v1.0/removebg",{
method:"POST",
headers:{
"X-Api-Key":"X6QqPr9wvnNZaB4zwhmbSmiv"
},
body:formData
});

const blob = await response.blob();
const url = URL.createObjectURL(blob);

document.getElementById("output").src = url;
document.getElementById("download").href = url;

}