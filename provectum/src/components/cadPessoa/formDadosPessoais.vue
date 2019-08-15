<template>
    <form class="form-back">
      <div class="form-row">
        <ul class="nav nav-tabs c-tab--full c-tab--full li" id="myTab" role="tablist">
          <li class="nav-item">
            <a class="nav-link active c-tab--lube c-tab__item" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Pessoa Fisíca</a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-tab--lube c-tab__item" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Pessoa Juridica</a>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div class="form-row">
            <span class="band-modern-lube m-bottom-10"></span>
            <div class="col-lg-2" role="separator">
              <img class="imagem-cadastro" src="/mot.jpeg">
            <!-- <div class="input-group mb-3">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile02">
                <label style="top: 5px;" class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Escolher...</label>
              </div>
            </div> -->
            </div>
            <div class="col-lg-10 space-bottom" role="separator">
              <div class="form-row" role="row">
                <div class="form-group col-md-4">
                  <label for="cpf">CPF*</label>
                  <div class="input-group col-mb-1">
                    <input class="form-control required" data-dependency="cpf" id="cpf" maxlength="14" minlength="14" name="pessoa.cpf" required type="text" placeholder="xxx.xxx.xxx-xx" value="">
                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button" id="button-cep"><font-awesome-icon class="icons-menu" icon="redo-alt"/></button>
                    </div>
                  </div>
                </div>
                <div class="form-group col-md-8">
                  <label for="nome">Nome*</label>
                  <input type="text" class="form-control required" id="nome" name="pessoa.nome" placeholder="Nome" value=""> 
                </div>
              </div>
              <div class="form-row" role="row">
                <div class="form-group col-md-3">
                  <label for="rg">RG</label>
                  <input type="text" class="form-control" id="rg" name="pessoa.rg" placeholder="RG" value="">
                </div>
                <div class="form-group col-md-3">
                  <label for="orgaoemissor">Orgão Emissor</label>
                  <input type="text" class="form-control" id="orgaoemissor" name="pessoa.orgaoemissor" placeholder="Orgão Emissor" value="">
                </div>
                <div class="form-group col-md-3">
                  <label for="datarg">Data do RG</label>
                  <input type="text" class="form-control" id="datarg" name="pessoa.daterg" placeholder="DD/MM/AAAA" value="">
                </div>
                <div class="form-group col-md-3">
                  <label for="re">Nro Registro Estrangeiro</label>
                  <input class="form-control" data-dependency="re" id="re" maxlength="14" minlength="14" name="pessoa.cpf" required type="text" placeholder="R.E" value="">
                </div>
              </div>
              <div class="form-row" role="row">
                <div class="form-group col-md-3">
                  <label for="datanascimento">Data de Nascimento</label>
                  <input type="text" class="form-control" id="datanascimento" name="pessoa.datanascimento" placeholder="DD/MM/AAAA" value="">
                </div>
                <div class="form-group col-md-3">
                  <label for="inputState">Sexo</label>
                    <select id="inputState" class="form-control">
                      <option selected>Selecione...</option>
                      <option>Feminino</option>
                      <option>Masculino</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="profissao">Profissão</label>
                  <input type="text" class="form-control" id="profissao" name="pessoa.profissao" placeholder="Profissão" value="">
                </div>
              </div>
            </div>
            <div class="col-lg-12" role="separator">
              <div class="form-row" role="row">
                <div class="form-group col-md-4">
                  <label for="inputState">Estado Civil</label>
                    <select id="inputState" class="form-control">
                      <option selected>Selecione...</option>
                      <option>Comunhão Parcial de Bens</option>
                      <option>Comunhão Universal de Bens</option>
                      <option>Separação total/ Convencional de Bens</option>
                      <option>Separação Obrigatória de Bens</option>
                      <option>Participação final nos Aquestos</option>
                  </select>
                </div>
                <div class="form-group col-md-8">
                  <label for="conjuge">Conjuge</label>
                  <input type="text" class="form-control" id="conjunge" placeholder="conjuge">
                </div>
              </div>
            </div>  
          </div>    
        </div>      
        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="form-row">
                <span class="band-modern-lube m-bottom-10"></span>
              <div class="form-group col-md-2">
                <label for="cnpj">CNPJ*</label>
                <div class="input-group col-mb-1">
                  <input type="text" class="form-control required" id="cnpj" maxlength="18" minlength="18" name="pessoa.cnpj"  placeholder="xx.xxx.xxx/xxxx-xx" value="">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" id="button-cep"><font-awesome-icon class="icons-menu" icon="redo-alt"/></button>
                  </div>
                </div>
              </div> 
              <div class="form-group col-md-5">
                <label for="razaosocial">Razão Social*</label>
                <input type="text" class="form-control required" id="razaosocial" name="pessoa.razaosocial" placeholder="Razão Social" value="">
              </div>
              <div class="form-group col-md-5">
                  <label for="nomefantasia">Nome Fantasia*</label>
                  <input type="text" class="form-control required" id="nomefantasia" name="pessoa.nomefantasia" placeholder="Nome Fantasia" value="">
              </div>
            </div>
            <div class="form-row" role="row">
              <div class="form-group col-md-3">
                <label for="inscricaoestadual">Inscrição Estadual</label>
                <input type="text" class="form-control required" id="inscricaoestadual" name="pessoa.inscricaoestadual" placeholder="" value="">
              </div>
                <div class="form-group col-md-4">
                  <label for="inscricaomuicipal">Inscrição Municipal</label>
                  <input type="text" class="form-control" id="inscricaomuicipal" name="pessoa.inscricaomuicipal" placeholder="" value="">
                </div>
              <div class="form-group col-md-5">
                <label for="inputState">Regime Tributário*</label>
                <select id="inputState" class="form-control required">
                  <option selected>Selecione...</option>
                  <option>Normal</option>
                  <option>Simples Nacional</option>
                </select>
              </div>
            </div>
            <fieldset class="fieldset block-lube m-bottom-15">
              <span class="band-modern-lube-and"><label>Informações do Sócio</label></span>
            <div class="form-group">
              <label for="socio"></label>
                <div class="form-row" role="row">
                  <div class="form-group col-md-3">
                    <label for="cpf">CPF*</label>
                    <div class="input-group col-mb-1">
                      <input aria-label="cpfcnpj" class="form-control required" id="cpfcnpj" placeholder="xxx.xxx.xxx-xx"  type="text">
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-redo"><font-awesome-icon class="icons-menu" icon="redo-alt"/></button>
                        <button class="btn btn-outline-secondary" type="button" id="button-add"><font-awesome-icon class="icons-menu" icon="plus"/></button>
                        <button class="btn btn-outline-secondary" type="button" id="button-view"><font-awesome-icon class="icons-menu" icon="copy"/></button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-5">
                    <label for="inputState">Nome*</label>
                    <input aria-label="razaosocial" class="form-control required" id="razaosocial" placeholder="" readonly type="text">
                  </div>
                  <div class="form-group col-4">
                   <label for="inputState">Municípo/ UF*</label>
                   <input aria-label="municipio" class="form-control required" id="municipio" placeholder="" readonly type="text">
                  </div>
                </div>
              </div>
              <div class="modal bg-modal bd-example-modal-xl" id="modalp" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="modal-content">
                        <div class="modal-header">
                            <div class="form-group col-md-2">
                              <select id="inputState" class="form-control">
                                <option selected>TODOS</option>
                                <option>CPF/CNPJ</option>
                                <option>RAZÃO SOCIAL</option>
                              </select>
                            </div>
                            <div class="form-group col-md-10">
                              <div class="input-group col-mb-1">
                                <input type="text" class="form-control" placeholder="Digite aqui sua pesquisa" aria-label="descricao" aria-describedby="button-addon2">
                                <div class="input-group-append">
                                  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Pesquisar</button>
                                </div>
                              </div>
                            </div>
                        </div>
                        <form class="form-back-modal">
                          <div class="card">
                            <div class="card-body">
                              <div class="form-row">
                                <div class="table-responsive">
                                  <table class="table table-bordered">
                                    <thead>
                                      <tr>
                                        <th>
                                          Razão Social
                                        </th>
                                        <th>
                                          Nome Fantasia 
                                        </th>
                                        <th>
                                          CPF/CNPJ
                                        </th>
                                        <th>
                                          Id Grupo
                                        </th>
                                        <th>
                                          Município
                                        </th>
                                        <th>
                                          UF
                                        </th>
                                        <th>
                                          ID Definição
                                        </th>
                                        <th>
                                          ID
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>
                                          1
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
                                        <td>
                                          999210903
                                        </td>
                                        <td>
                                          999210903
                                        </td>
                                        <td>
                                          999210903
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
                    </div>
                  </div>
                </div>
              </div>
                <div class="card space-tab">
                  <div class="card-body">
                    <div class="form-row">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>
                                Razão Social
                              </th>
                              <th>
                                Nome Fantasia 
                              </th>
                              <th>
                                CPF/CNPJ
                              </th>
                              <th>
                                Id Grupo
                              </th>
                              <th>
                                Município
                              </th>
                              <th>
                                UF
                              </th>
                              <th>
                                ID Definição
                              </th>
                              <th>
                                ID
                              </th>
                              <th>
                                
                              </th>
                            </tr>
                          </thead>
                          <!-- <tbody>
                            <tr>
                              <td>
                                1
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
                              <td>
                                999210903
                              </td>
                              <td>
                                999210903
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                1
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
                              <td>
                                999210903
                              </td>
                              <td>
                                999210903
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                1
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
                              <td>
                                999210903
                              </td>
                              <td>
                                999210903
                              </td>
                              <td>
                                999210903
                              </td>
                              <td class="table-td-buttom">
                                <button class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                          </tbody> -->
                        </table>
                      </div>
                    </div>
                </div>  
              </div>
            </fieldset>
            <fieldset class="fieldset block-lube m-bottom-15">
              <span class="band-modern-lube-and"><label>Definição</label></span>
              <div class="form-group">
                <label></label>
                <div class="form-row" role="row">
                  <div class="form-group col-4">
                    <label for="inputState">Grupo*</label>
                      <select id="inputState" class="form-control required">
                        <option selected>Selecione...</option>
                        <option>Cliente</option>
                        <option>Fornecedor</option>
                        <option>Funcionário</option>
                        <option>Proprietário</option>
                        <option>Motorista</option>
                        <option>Visitante</option>
                      </select>
                  </div>
                  <div class="form-group col-4">
                    <label for="inputState">Ramo*</label>
                    <select id="inputState" class="form-control">
                      <option selected>Selecione...</option>
                      <option>Associação</option>
                      <option>Comercio</option>
                      <option>Consumidor Final</option>
                      <option>Indústria</option>
                      <option>Produtor Rural</option>
                      <option>Serviços</option>
                      <option>Importação/ Exportação</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label>Situação</label>
                    <div class="input-group col-mb-1">
                      <select class="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option selected>Selecione....</option>
                        <option value="1">Ativo</option>
                        <option value="2">Inativo</option>
                        <option value="2">Bloqueado</option>
                      </select>
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-cep"><font-awesome-icon class="icons-menu" icon="plus"/></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal bg-modal bd-example-modal-xl" id="modalp" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-body">
                    <div class="container-fluid">
                      <div class="modal-content">
                        <div class="modal-header">
  
                        </div>
                        <form class="form-back-modal">
                          <div class="card">
                            <div class="card-body">
                              <div class="form-row">
                              </div>
                            </div>  
                          </div>  
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div class="card space-tab">
                  <div class="card-body">
                    <div class="form-row">
                      <div class="table-responsive">
                        <table class="table table-bordered">
                          <thead>
                            <tr>
                              <th>
                                Grupo
                              </th>
                              <th>
                                Ramo
                              </th>
                              <th>
                                Regime Tributário
                              </th>
                              <th>
                                Situação
                              </th>
                              <th>
                                Id
                              </th>
                              <th>
                                
                              </th>
                            </tr>
                          </thead>
                          <!-- <tbody>
                            <tr>
                              <td>
                                1
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
                                3861-3360
                              </td>
                              <td class="table-td-buttom">
                                <button class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                1
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
                                3861-3360
                              </td>
                              <td class="table-td-buttom">
                                <button class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                1
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
                                3861-3360
                              </td>
                              <td class="table-td-buttom">
                                <button class="btn btn-outline-warning btn-modal" type="button" data-toggle="modal" data-target="#modalp">Editar</button>
                                <button class="btn btn-outline-danger" type="button">Deletar</button>
                              </td>
                            </tr>
                            input para abrir modal
                            <input class="form-control required" data-dependency="cpfcnpj" id="cpfcnpj" maxlength="18" minlength="14" name="pessoa.cpfcnpj" required type="text" placeholder="xxx.xxx.xxx-xx ou xx.xxx.xxx/xxxx-xx" value="">
                          </tbody> -->
                        </table>
                      </div>
                    </div>
                </div>  
              </div>
            </fieldset>     
        </div>
      </div>  
    </form>
</template>

<script>

</script>

<style lang="scss">
.space-tab{
  margin-top: 10px;
}

table thead th {
    background-color: #bdc3c7;
}

fieldset.block-lube{
    -webkit-border-radius: .3125rem;
    -moz-border-radius: .3125rem;
    -o-border-radius: .3125rem;
    -ms-border-radius: .3125rem;
    border-radius: .3125rem;
    border: 1px solid #DCDCDC;
    margin: 0 0.1rem;
    max-width: 100%;
    min-width: 100%;
    position: relative;
    width: 100%;
    background: #ffffff;
    padding: 1%;
    border-radius: 6px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-top: 2%;
    box-shadow: 0 -2px 5px rgba(0,0,0,0.3);
}
.m-bottom-15 {
    margin-bottom: 15px !important;
}
</style>
