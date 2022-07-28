//Crea una variable para el canvas

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	//define la función de new_image() para subir las imágenes al canvas

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		new_image('rr1.png'); 
		console.log("r");
	}
//Crea otros codigos con condicionales para añadir la función de las teclas con ASCII y que se agreguen las imagenes siguiendo la tabla que aparece en la plataforma
	
}

