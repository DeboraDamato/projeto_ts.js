<template>
<div>
    <form class="form-back-modal">
      <div class="form-row">
        <div class="form-group col-md-2">
          <label>Tipo</label>
          <select id="tipo" class="form-control">
            <option selected>Selecione...</option>
            <option>Principal</option>
            <option>Cobrança</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label>CEP*</label>
          <div class="input-group col-mb-1">
            <input aria-label="CEP" aria-describedby="button-cep" class="form-control required" id="cep" onkeypress="return validaCampoTabula(this, event, mascaraCep);" placeholder="00000-000"  type="text">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-cep"><font-awesome-icon class="icons-menu" icon="globe-americas"/></button>
            </div>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label>Logradouro*</label>
          <input class="form-control required" id="logradouro" maxlength="60" placeholder="Logradouro" type="text">
        </div>
        <div class="form-group col-md-2">
            <label>Número*</label>
            <input class="form-control required" id="numero" maxlength="9" minlength="0" placeholder="Número" type="text">
          </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
            <label>Bairro*</label>
            <input class="form-control required" id="bairro" maxlength="60" placeholder="Bairro" type="text">
        </div>
        <div class="form-group col-md-6">
            <label>Complemento</label>
            <input class="form-control" id="complemento" maxlength="30" placeholder="Complemento" type="text">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label>UF*</label>
          <select id="uf" class="form-control required">
            <option selected>Selecione...</option>
            <option>São Paulo</option>
            <option>Minas Gerais</option>
          </select>
        </div>
        <div class="form-group col-md-8">
          <label >Município*</label>
          <select id="municipio" class="form-control required">
            <option selected>Selecione...</option>
            <option>Campinas - SP</option>
            <option>Mogi Guaçu - SP</option>
            <option>Pouso Alegre - MG</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label>País*</label>
          <select id="pais" class="form-control">
            <option selected>Selecione...</option>
            <option>Brasil</option>
            <option>...</option>
          </select>
        </div>
      </div>
      <div class="form-row" role="row">
        <div class="form-group col-md-2">
            <label>Telefone</label>
            <input class="form-control" maxlength="9" name="telefone" onkeypress="return validaCampoTabula(this, event, mascaraTelefone);" placeholder="(XX)XXXX-XXXX" type="tel">
        </div>
        <div class="form-group col-md-2">
            <label>Celular</label>
            <input class="form-control" maxlength="9" name="telmovel" onkeypress="return validaCampoTabula(this, event, mascaraTelefone);" placeholder="(XX)XXXXX-XXXX" type="tel">
        </div>
        <div class="form-group col-md-8">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" placeholder="Email">
        </div>
      </div>
      <button class="btn btn-outline-modal hitting-bnt">Salvar</button>
    </form>
              <div class="modal bg-modal bd-example-modal-xl" id="modalp" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Endereço</h5>
                          <button aria-label="Fechar" class="close" data-dismiss="modal" type="button">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <form class="form-back-modal">
                          <div class="form-row">
                              <div class="form-group col-md-2">
                                <label>Tipo</label>
                                <select id="tipo" class="form-control">
                                  <option selected>Selecione...</option>
                                  <option>Principal</option>
                                  <option>Cobrança</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label>CEP*</label>
                                <div class="input-group col-mb-1">
                                  <input aria-label="CEP" aria-describedby="button-cep" class="form-control required" id="cep" onkeypress="return validaCampoTabula(this, event, mascaraCep);" placeholder="00000-000"  type="text">
                                  <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button" id="button-cep"><font-awesome-icon class="icons-menu" icon="globe-americas"/></button>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group col-md-6">
                                <label>Logradouro*</label>
                                <input class="form-control required" id="logradouro" maxlength="60" placeholder="Logradouro" type="text">
                              </div>
                              <div class="form-group col-md-2">
                                  <label>Número*</label>
                                  <input class="form-control required" id="numero" maxlength="9" minlength="0" placeholder="Número" type="text">
                                </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                  <label>Bairro*</label>
                                  <input class="form-control required" id="bairro" maxlength="60" placeholder="Bairro" type="text">
                              </div>
                              <div class="form-group col-md-6">
                                  <label>Complemento</label>
                                  <input class="form-control" id="complemento" maxlength="30" placeholder="Complemento" type="text">
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-2">
                                <label>UF*</label>
                                <select id="uf" class="form-control required">
                                  <option selected>Selecione...</option>
                                  <option>São Paulo</option>
                                  <option>Minas Gerais</option>
                                </select>
                              </div>
                              <div class="form-group col-md-8">
                                <label >Município*</label>
                                <select id="municipio" class="form-control required">
                                  <option selected>Selecione...</option>
                                  <option>Campinas - SP</option>
                                  <option>Mogi Guaçu - SP</option>
                                  <option>Pouso Alegre - MG</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label>País*</label>
                                <select id="pais" class="form-control">
                                  <option selected>Selecione...</option>
                                  <option>Brasil</option>
                                  <option>...</option>
                                </select>
                              </div>
                            </div>
                            <div class="form-row" role="row">
                              <div class="form-group col-md-2">
                                  <label>Telefone</label>
                                  <input class="form-control" maxlength="9" name="telefone" onkeypress="return validaCampoTabula(this, event, mascaraTelefone);" placeholder="(XX)XXXX-XXXX" type="tel">
                              </div>
                              <div class="form-group col-md-2">
                                  <label>Celular</label>
                                  <input class="form-control" maxlength="9" name="telmovel" onkeypress="return validaCampoTabula(this, event, mascaraTelefone);" placeholder="(XX)XXXXX-XXXX" type="tel">
                              </div>
                              <div class="form-group col-md-8">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email" placeholder="Email">
                            </div>
                            </div>
                            <div class="modal-footer">
                              <!--<button type="button" class="btn btn-outline-dark" data-dismiss="modal">Fechar</button>-->
                              <button type="button" class="btn btn-outline-primary">Salvar</button>
                            </div>
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form class="form-back">
                <div class="card">
                    <h5 class="modal-title" id="exampleModalLabel">Endereço</h5>
                  <div class="card-body">
                    <div class="form-row">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>
                                CEP
                              </th>
                              <th>
                                Bairro
                              </th>
                              <th>
                                Município
                              </th>
                              <th>
                                DDD
                              </th>
                              <th>
                                Telefone
                              </th>
                              <th>
                                Celular
                              </th>
                              <th>
                                
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                1
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                Mogi Guaçu
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;"  class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;"  class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                2
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                São Paulo
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;"  class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;"  class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                3
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                Campinas
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;" class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;" class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                4
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                São José dos Campos
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;"  class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;"  class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                5
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                Diamantina
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;"  class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;"  class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                6
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                Santos
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;"  class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;"  class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                7
                              </td>
                              <td>
                                Jardim Novo
                              </td>
                              <td>
                                Poços de Caldas
                              </td>
                              <td>
                                19
                              </td>
                              <td>
                                3861-3360
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button style="margin-top: 5px;"  class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button style="margin-top: 5px;"  class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                </div>  
              </div>      
             </form>
            </div>
</template>

<script>

</script>

<style lang="scss">


</style>
