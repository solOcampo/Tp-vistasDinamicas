let menu =[
    {   
        id:1,    
        titulo : 'Carpaccio fresco',
        descripcion :'Entrada Carpaccio de salmón con cítricos',
        Imagen:'Carpaccio-de-salmon.jpg',
        precio : 65.50,
        descripcionDetallada:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {   
        id:2,
        titulo : 'Risotto de berenjena',
        descripcion :'Risotto de berenjena y queso de cabra',
        precio :  47.00
    },
    {   
        id:3,
        titulo : 'Mousse de arroz',
        descripcion :'Mousse de arroz con leche y aroma de azahar ',
        precio :27.50
    },
    {    
        id:4,
        titulo : 'Espárragos blancos',
        descripcion :'Espárragos blancos con vinagreta de verduras y jamón ibérico ',
        precio :37.50
    },
]
module.exports ={
    home:(req,res)=>{
      return res.render('index',{
        menu
      })
   
    },
    menu:(req,res)=>{
        return res.render('detalleMenu')

    },
    detalle:(req,res)=>{
        return res.render('detalleMenu')

    },

}