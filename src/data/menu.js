let menu = [
    {   id: 1,
        titulo: 'Carpaccio Fresco',
        descripcion: 'Entrada Carpaccio de salmón con cítricos',
        imagen: "Carpaccio-de-salmon.jpg",
        precio: 65.50,
        descripcionDetallada: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    },
    {   id: 2,
        titulo: 'Risotto de berenjena',
        descripcion: ' Risotto de berenjena y queso de cabra',
        imagen: "Risotto-berenjena-queso-cabra.jpg",
        precio: 47.00,
        descripcionDetallada: 'Plato tipico'
    },
    {   id: 3,
        titulo: 'Mousse de arroz',
        descripcion: 'Mousse de arroz con leche y aroma de azahar',
        imagen: "Mousse-de-arroz-con-leche.jpg",
        precio: 27.50,
        descripcionDetallada: 'Plato tipico'
    },
    {   id: 4,
        titulo: 'Espárragos blancos',
        descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        imagen: "Esparragos.png",
        precio: 37.00,
        descripcionDetallada: 'Plato tipico'
    },

]

let fs =require('fs')

// Pasamos el objeto literal a un string
let string=JSON.stringify(menu,null,4)

// Subimos los cambios y acualiamos al json
fs.writeFileSync('./menu.json',string,'utf-8')

// terminal=> cd src ,cd data,node menu.js