var primeiro =  document.getElementById('div-um')
var segundo =  document.getElementById('div-dois')

function slide(n){
	const loop = setInterval(()=>{
		if(n % 2 === 0 ){
			primeiro.setAttribute('class','um')
			segundo.setAttribute('class','dois')
		}else{
			primeiro.setAttribute('class','dois')
			segundo.setAttribute('class','um')
		}
		n --
	},3000)
}
slide(100)


