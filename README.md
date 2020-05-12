## 1.	A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos. 

### Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento, correo electrónico y contraseña. Luego, usando funciones de JavaScript se pide validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones: 

![1](/ImagenesParaReadmi/1.jpg?raw=true "Title")

### a. Se debe validar qué, en el campo de la cedula, se ingrese sólo números y que la misma sea correcta, en base, al último dígito verificador. 

#### En este código lo que hacemos es verificar si el ingreso es un número, si es una letra esta se elimina esto se hace mediante la función validarNumero, mientras esto se valida se ve que la longitud de la cedula no pase de 10 si es que llega a pasarse los números extra se eliminan, una vez la cedula llegue a la longitud de 10 se llama a la función validarCedula para que valide la cedula ingresada

![2](/ImagenesParaReadmi/2.jpg?raw=true "Title")

#### En esta función lo primero que hacemos es validar si la longitud es menor a 10 saldrá un mensaje de error con la longitud de la cedula, si la longitud es 10 entonces se procederá con la validación mediante la multiplicación de los dígitos impares por 2 y se suman con los dígitos pares si alguna multiplicación es mayor o igual a 10 se le resta 9, con el resultado de la suma de todos los dígitos multiplicados por 2 o 1 se saca el decimal superior del resultado y se resta con el resultado de la suma si esto da igual al ultimo numero de la cedula es correcto y si no mostrara un mensaje de error que dirá que la cedula no es correcta.

![3](/ImagenesParaReadmi/3.jpg?raw=true "Title")

### b. Se debe validar qué, en el campo del nombres, ingrese exclusivamente dos nombre y que permita ingresar sólo letras, por ejemplo: “Gabriel Alejandro”, es válido; “Gabriel”, no es válido.

#### En esta función primero validamos que lo que ingresemos sean solo letras mediante la función validarLetras si son números estos se eliminan, luego de validar que todos los caracteres sean letra lo que hacemos es dividir el texto en dos variables luego se valida que ninguna de las dos este vacía, de ser el caso se mostrara un mensaje de error de que los nombres ingresados son incorrectos.

![4](/ImagenesParaReadmi/4.jpg?raw=true "Title")

### c. Se debe validar qué, en el campo del apellidos, ingrese exclusivamente dos apellidos y que permita ingresar sólo letras, por ejemplo: “León Paredes”, es válido; “León”, no es válido. 

#### En esta función primero validamos que lo que ingresemos sean solo letras mediante la función validarLetras si son números estos se eliminan, luego de validar que todos los caracteres sean letra lo que hacemos es dividir el texto en dos variables luego se valida que ninguna de las dos este vacío, de ser el caso se mostrara un mensaje de error de que los apellidos ingresados son incorrectos

![5](/ImagenesParaReadmi/5.jpg?raw=true "Title")

### d. Se debe validar qué, en el campo del teléfono, permita ingresar sólo números y un máximo de 10 caracteres numéricos. 

#### En esta función lo que se hace es validar que lo que ingresemos sean solo números mediante la función validarNumero, también se valida que la longitud no sea mayor a 10 dígitos si supera los 10 dígitos se eliminan los caracteres extra. Después de estas validaciones llamamos a la función validarLongTel, que nos valida si la longitud es menor a 10 saldrá un mensaje de error con relación a la longitud del número de teléfono

![6](/ImagenesParaReadmi/6.jpg?raw=true "Title")

#### e. Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. 

#### En esta función lo que hacemos es que la fecha tenga el formato de dd/mm/yyyy verificando desde variables las cuales almacenan cada uno de los si no se cumple cada uno de estos campo el campo incorreco se elimina, si el año es mayor a 2020 o menor  a 1920 se tomara como un año incorecto.

![7](/ImagenesParaReadmi/7.jpg?raw=true "Title")
![8](/ImagenesParaReadmi/8.jpg?raw=true "Title")

### f. Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”. 

#### En esta función lo que se hace es separar los textos que están a los lados del arroba dentro de variables, luego se valida que estas variables no estén vacías para proceder a comparar que la parte anterior al arroba no tenga una longitud menor a 3 y que la parte posterior sea igual a ups.edu.ec o est.ups.edu.ec.

![9](/ImagenesParaReadmi/9.jpg?raw=true "Title")

### g. Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres, además, debe incluir al menos: una letra mayúscula, una letra minúscula y un carácter especial (@, _, $) 

#### En esta función lo que hacemos es validar que la contraseña sea tenga 8 caracteres como mínimo, después de pasar esta validación  evaluamos si alguno de los assci se encuentra dentro del rango de las mayúsculas o minúsculas además de comparar si son iguales a los assci de los caracteres especiales antes descritos.

![10](/ImagenesParaReadmi/10.jpg?raw=true "Title")
![11](/ImagenesParaReadmi/11.jpg?raw=true "Title")

### * Todas las validaciones antes descritas se deben realizar en tiempo real, es decir, a medida que el usuario escribe en el campo. 

![12](/ImagenesParaReadmi/12.jpg?raw=true "Title")

### * Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintara el campo con un borde rojo que representará que el campo tiene un error 

![13](/ImagenesParaReadmi/13.jpg?raw=true "Title")

### * Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. Excepto el campo de tipo password. 

![14](/ImagenesParaReadmi/14.jpg?raw=true "Title")

### * Todos los campos deben ser ingresados de manera obligatoria y esto se verificará al momento de “enviar” (submit) la información del formulario hacia una página php. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, pasaste las validaciones!”. 

#### Si el formulario no tiene ningún error se mandara un true lo que hará que se habrá el php desde el html.

#### Las variables que se ven ahí son para validar si hay un error (0) o no (1) dentro de cada campo del formulario

![15](/ImagenesParaReadmi/15.jpg?raw=true "Title")

![16](/ImagenesParaReadmi/16.jpg?raw=true "Title")

## 2.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/) 

### Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”. 

#### Se creo un vector con la dirección de las 10 imagener cargadas.

![17](/ImagenesParaReadmi/17.jpg?raw=true "Title")

### La galería de imágenes debe visualizar exclusivamente 5 imágenes. 

#### En esta función lo que hacemos es cargar un array con de un tamaño definido para que se puedan cargar las 5 imágenes de manera aleatoria.

![18](/ImagenesParaReadmi/18.jpg?raw=true "Title")

### Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes. 

#### Con esta función lo que hacemos es reiniciar el vector rand el cual contiene números que representarían posiciones randomicas para poder ser utilizadas dentro del vetor que contiene las direcciones de las imágenes.Después lo único que se hace es llamar a la función pandémica la cual nos genera un vector con números aleatorios sin repetir que van del 0 al 9 después de esto nuestro vector estará lleno de nuevo con nuevas posiciones randomicas, Después de esto se posicionarían las dos primeras imágenes como referencia para las transiciones.

![19](/ImagenesParaReadmi/19.jpg?raw=true "Title")
![20](/ImagenesParaReadmi/20.jpg?raw=true "Title")

### Al hacer clic en el botón siguiente o anterior se debe cambiar la imagen presentada en la galería. 
#### Con este proceso lo que se hace es tomar la siguiente variable que contendría la posición del vector de direcciones de las imágenes que están cargadas en la carpeta de imágenes para poder cargarlas en las etiquetas de imagen correspondientes. Y lo mismo pasaría con la izquierda solo que en vez de que este fotoEntra=nimImage+1 seria fotoEntra=nimImage-1.

![21](/ImagenesParaReadmi/21.jpg?raw=true "Title")
![22](/ImagenesParaReadmi/22.jpg?raw=true "Title")

### El cambio de imágenes debe simular un efecto, para lo cuál, se debe usar las propiedades left o rigth. 
#### En esta función lo que hacemos es llamar a la función de derecha con un setInterval el cual nos permite llamar a una función cada determinado tiempo en milisegundos y gracias a esto se aprovecha para aumentar un contador en la función setInterval el cual nos ayuda a mover a la imagen que esta dentro del div de entrada con la propiedad left aumentándola para mover de izquierda a izquierda y se disminuye para mover de derecha a izquierda y según eso podemos realizar transiciones que vallan de acuerdo con los respectivos botones.

![23](/ImagenesParaReadmi/23.jpg?raw=true "Title")
![24](/ImagenesParaReadmi/24.jpg?raw=true "Title")

### Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado) 
#### En esta función lo que hacemos es verificar si la foto de entrada es mayor o igual a 5 quiere decir que ya pasamos las 5 fotos que nos pide el ejercicio ya ocurrieron por lo tanto el botón de siguiente se bloquea.

![25](/ImagenesParaReadmi/25.jpg?raw=true "Title")

### Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar deshabilitado) 
#### En esta función lo que hacemos es verificar si la foto de entrada es menor o igual a 0 quiere decir que ya estamos al inicio de las 5 fotos que nos pide el ejercicio por lo tanto el botón de anterior se bloquea.

![26](/ImagenesParaReadmi/26.jpg?raw=true "Title")

## 3.	Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las operaciones que podrá hacer la calculadora son:: suma, resta, multiplicación y división. Además, se podrá limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas 

#### Con esta función lo que hago es recibir los datos de cada botón ya sean números o caracteres especiales y se escribe esos caracteres concatenados en la caja de texto

![27](/ImagenesParaReadmi/27.jpg?raw=true "Title")

### Con esta función lo que hacemos es limpiar la caja de texto donde se realizan las operaciones.

![28](/ImagenesParaReadmi/28.jpg?raw=true "Title")

### En esta función lo que hago es recibir lo que este escrito en la caja de texto para luego comparar si tiene un carácter especial como lo es el ! o el ^, en el caso de que la operación contenga ! se ara el factorial mediante un for y un acumulador, si la operación tiene un ^ se realizara el exponencial si no tiene ninguno de los dos operadores especiales la operación se evaluara con la función eval, el resultado de cada operación se ira guardando en un historial.

![29](/ImagenesParaReadmi/29.jpg?raw=true "Title")

# Resultados 

## Calculadora 

![30](/ImagenesParaReadmi/30.jpg?raw=true "Title")

## Formulario

![31](/ImagenesParaReadmi/31.jpg?raw=true "Title")

## Galeria 

![32](/ImagenesParaReadmi/32.jpg?raw=true "Title")
