/*let formProducto = document.querySelector('#form-producto');

formProducto.addEventListener("submit", function(e){
    e.preventDefault();

    let producto = document.querySelector('#producto');
    let cantidad = document.querySelector('#cantidad');
    let precio = document.querySelector('#precio');

    tbody = document.querySelector('#Lista-producto');

    let row = document.createElement("tr");


row.innerHTML = `
    <td>${producto.value}</td>
    <td>${cantidad.value}</td>
    <td>${precio.value}</td>
    <td>
        <button class="delete">-</button>
        <button class="edit">Edit-+</button>
    </td>
`;

     tbody.appendChild(row);

     row.querySelector(".delete").addEventListener("click", function(e){
        console.log(row);
        console.log(e);
        row.remove();
     })

     row.querySelector(".edit").addEventListener("click", function(){
        let inputs = e.target.closest('td').closest('tr');
        let tr.querySelectorAll('imput');
        inputs.forEach(e=> {
            e.setAtributte('disabled',)
        });

     })
    })*/
     let formProducto = document.querySelector('#form-producto');

     formProducto.addEventListener("submit", function(e) {
         e.preventDefault();
     
         let producto = document.querySelector('#producto');
         let cantidad = document.querySelector('#cantidad');
         let precio = document.querySelector('#precio');
     
         let tbody = document.querySelector('#Lista-producto');
     
         let row = document.createElement("tr");
     
         row.innerHTML = `
             <td>${producto.value}</td>
             <td>${cantidad.value}</td>
             <td>${precio.value}</td>
             <td>
                 <button class="delete">-</button>
                 <button class="edit">Edit-+</button>
             </td>
         `; 
     
         tbody.appendChild(row);
     
         row.querySelector(".delete").addEventListener("click", function(e) {
             console.log(row);
             console.log(e);
             row.remove();
         });
     
         row.querySelector(".edit").addEventListener("click", function(e) {
             let tr = e.target.closest('tr');
             let inputs = tr.querySelectorAll('input');
             inputs.forEach(input => {
                 input.setAttribute('disabled', true);
             });
         });
     });
     