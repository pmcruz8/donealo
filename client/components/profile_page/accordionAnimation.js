
const accord = document.getElementsByClassName("accordion");

for (var i =0; i<accord.length; i++){
	accord[i].onclick =function(){
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight){
			panel.style.maxHeight = null;
		}else{
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}
}
		        