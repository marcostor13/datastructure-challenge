
<h1 align="center"> Data Structure Challenge </h1>
<h3 align="center"> Instrucciones para la tarea de estructura de datos </h3>
<h5 align="center"> Telemática - <a href="#">Challenge</a> (Setiembre 2022) </h5>

<p align="center"> 

</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2> :fire: Problematica</h2>
<p>Se requiere procesar una store de datos de mas de 10 millones de documentos que contienen informacion sobre el clima en determinadas ciudades. El area de desarrollo mobile necesita que para un dashboard se agrupar las ciudades por climas similares como se indica en el archivo "ouput.json". Tu tarea es crear un programa que se encargue de realizar los pipelines para la extraccion, transformacion y recreacion de los datos (utiliza .NET y el framework de tu preferencia para sacarle el máximo provecho) </p>


<h4>Input</h4>

```
{
  "cities": [
    {
      ...
      weater: {
        ...
      }
    }
  ]
}

```


<h4>Output</h4>

```
[
  {
    "weater": {
      ...
    },
    cities: [
      {
        ....
      }
    ]
  }
]

```

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
<h2> :floppy_disk: Descripcion del flujo de trabajo</h2>

<p>Este proyecto contendra 2 archivos comprendidos por:</p>
<h4>Input File:</h4>
<ul>
  <li><b>input.json</b> - Incluye un ejemplo con un grupo de documentos que permitira clasificar los datos y procesarlos hacia una nueva estructura</li>
</ul>

<h4>Output File:</h4>
<ul>
  <li><b>output.json</b> - Debera contener la nueva estructura de datos procesadas en base al input.json.</li>
</ul>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<h2> :book: Descripcion del flujo de entrega</h2>

<p>Los participantes deberan hacer fork privado de este repositorio y compartir el acceso al usuario @krowdycareers para la revision del challenge. <a href="https://docs.github.com/es/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository">Invitar colaboradores a un repositorio personal</a>
</p>

<p>La resolucion del challenge tendra como fecha maxima de entrega el 30/09/2022</p>

<p>Toda informacion o consulta debera ser realizada a traves de la creacion de un Issue en este repositorio</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



<h2> :book: Items a evaluar</h2>

<p>Estructura del desarrollo del proyecto</p>
<p>Estructura de codigo</p>
<p>Clean Code</p>
<p>Gestion de los recursos de ram, disco y cpu</p>
<p>Solucion para la transformacion de mas de 100 millones de documentos</p>
