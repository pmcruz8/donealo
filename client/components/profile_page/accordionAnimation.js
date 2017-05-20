
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

		        
		        
		{/*constructor(){
			super();
			this.state = {
				active:false
			};
			this.toggle = this.toggle.bind(this)
		}

		toggle(){
			this.setState({
				active: !this.state.active

			});

		}

		render(){
			const stateStyle =  this.state.active ? styles.active : styles.inactive;
			Can't find styles^ 

			return (
				<section>
					<a onClick = {this.toggle}>
					</a>
					<p style={stateStyle}>
						{this.props.answer}
					</p>
			    </section>
				);*/}	