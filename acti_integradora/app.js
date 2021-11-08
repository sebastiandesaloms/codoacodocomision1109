let container = document.getElementById("seccion");
const comprarTicket = () => {
    container.innerHTML = `
        
    <div id="jsform" class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body border border-primary mr-1">
                                <h5 class="card-title text-center">Estudiantes</h5>
                                <p class="card-text text-center">Tienen un descuento</p>
                                <p id="estudiante"class="card-title text-center font-weight-bold" value="80" >80%</p>
                                <p class="card-text text-center">
                                    <small class="text-muted">
                                        * presentar documentación
                                    </small>
                                </p>
                            </div>
                        </div>
                        <div class="card">
                        <div class="card-body border border-info mr-1">
                            <h5 class="card-title text-center">Trainee</h5>
                            <p class="card-text text-center">Tienen un descuento</p>
                            <p id="trainee" class="card-title text-center font-weight-bold value="50">50%</p>
                            <p class="card-text text-center">
                                <small class="text-muted">
                                    * presentar documentación
                                </small>
                            </p>
                        </div>
                    </div>
                    <div class="card">
                    <div class="card-body border border-warning mr-1">
                        <h5 class="card-title text-center">Junior</h5>
                        <p class="card-text text-center">Tienen un descuento</p>
                        <p id="junior" class="card-title text-center font-weight-bold" value="15" >15%</p>
                        <p class="card-text text-center">
                            <small class="text-muted">
                                * presentar documentación
                            </small>
                        </p>
                    </div>
                </div>
                    </div>
                </div>            
            </div>
            <div class="row">
                <div class="col text-uppercase text-center">
                    <small>venta</small>
               <h2 id="valorEntrada" value="200" > Valor de ticket $200</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form id="formulario">
                        <div class="form-row">
                            <div class="d-flex">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <input type="text" class="form-control" placeholder="Nombre"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                    <input type="text" class="form-control" placeholder="Apellido"/>
                                </div>
                            </div>
                            <div id="mail" class="form-group col-12 col-md-12 m-1">
                                <input type="email" class="form-control" placeholder="Correo"/> 
                            </div>
                            <div class="d-flex">
                                <div class="form-group col-6 col-md-6 m-1">
                                    <label for="">Cantidad</label>
                                    <input id="cantidadEntradas" type="number" class="form-control" placeholder="Cantidad"/>
                                </div>
                                <div class="form-group col-6 col-md-6 m-1">
                                <label for="">Categoria</label>
                                <select class="form-select" id="inputSelect">
                                    <option value='estudiante'>Estudiante</option>
                                    <option value='trainee'>Trainee</option>
                                    <option value='junior'>Junior</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div id="totalPagar" class="form-row">
                            <div class="alert alert-primary" role="alert" id="totalPrecio">
                                Cantidad a pagar: $
                            </div>
                        </div>
                        <div class="form-row d-flex">
                       
                            <button type="reset" class="btn btn-lg btn-success col-6 m-1" onclick="borrar()">Borrar</button>
                        
                       
                            <button type="button" class="btn btn-lg btn-success col-6 m-1" onclick="cantidadTotal()">Resumen</button>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};


const cantidadTotal = () => {
    let formulario = document.getElementById("formulario");
    let tipoValue = formulario.elements['inputSelect'].value;
    let cantidadValue = formulario.elements['cantidadEntradas'].value;
    let descuento = parseInt(document.getElementById(tipoValue).innerHTML);
    let resultado = (cantidadValue * 200) - ((cantidadValue * 200) * descuento) / 100;
    document.getElementById('totalPrecio').innerHTML = "Cantidad a pagar: $" + resultado;
}

const borrar = () => {
    document.getElementById('totalPrecio').innerHTML = "Cantidad a pagar: $";
}