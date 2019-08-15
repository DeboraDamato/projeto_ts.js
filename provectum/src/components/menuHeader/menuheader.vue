<template>
    <div>
        <div class="container-scroller">
            <nav class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                    <button id="offcanvas" class="navbar-toggler navbar-toggler-right align-self-center button" type="button" data-toggle="offcanvas">
                        <font-awesome-icon class="icons-menu" icon="bars" />
                    </button>                
                    <a class="navbar-brand brand-logo" href="#"><img src="./static/logo.svg" alt="logo"></a>
                </div>
                <div class="navbar-menu-wrapper d-flex align-items-center">
                    <ul class="navbar-nav navbar-nav-right">
                        <li class="nav-item dropdown">
                            <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                              <font-awesome-icon class="icons-menu" icon="search" />
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link count-indicator" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <font-awesome-icon class="icons-menu" icon="bell" />
                                <span class="count">4</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <a class="dropdown-item preview-item">
                                <p class="mb-0 font-weight-normal float-left decoration-fountain-small">Você tem 4 novas notificações</p>
                                <span class="badge badge-pill badge-warning float-right">Vizualizar tudo</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bt-success">
                                    <font-awesome-icon class="icons-menu" icon="exclamation-circle" />
                                    </div>
                                </div>
                                <div class="preview-item-content decoration-fountain-small">
                                    <h6 class="preview-subject font-weight-medium">Texto Notificação</h6>
                                    <p class="font-weight-light small-text">Verificar</p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bt-warning">
                                    <font-awesome-icon class="icons-menu" icon="comment-alt" />
                                    </div>
                                </div>
                                <div class="preview-item-content decoration-fountain-small">
                                    <h6 class="preview-subject font-weight-medium ">Texto Notificação</h6>
                                    <p class="font-weight-light small-text">Verificar</p>
                                </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                    <div class="preview-icon bt-info">
                                        <font-awesome-icon class="icons-menu" icon="envelope" />
                                    </div>
                                    </div>
                                    <div class="preview-item-content decoration-fountain-small">
                                    <h6 class="preview-subject font-weight-medium">Texto Notificação</h6>
                                        <p class="font-weight-light small-text">Verificar</p>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li class="nav-item dropdown d-none d-xl-inline-block">
                            <a class="nav-link" id="UserDropdown" data-toggle="dropdown" aria-expanded="false"><span class="profile-text decoration-source-median">Olá, Usuário Root !</span>
                                <!-- <img class="img-xs rounded-circle" :src="foto2.url" :alt="foto2.titulo"> -->
                                <img class="img-xs rounded-circle" src="./static/face1.jpg" alt="logo">
                                <font-awesome-icon class="icons-menu" icon="angle-down"/>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                <a>
                                    <div class="d-flex border-bottom">
                                        <div class="teste d-flex align-items-center justify-content-center">
                                            <font-awesome-icon class="icons-menu" icon="cogs"/>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item mt-2" href="#"><font-awesome-icon class="icons-menu" icon="user-cog"/>&nbsp;Trocar Empresa</a>
                                <a class="dropdown-item mt-2" href="/#/login/alterarsenha"><font-awesome-icon class="icons-menu" icon="key"/>&nbsp;Alterar Senha</a>
                                <a class="dropdown-item mt-2" href="/#/login/login"><font-awesome-icon class="icons-menu" icon="power-off"/>&nbsp;Sair</a>
                            </div>
                        </li>
                    </ul>
                </div> 
            </nav>
            <nav class="sidebar-offcanvas p-0 fixed-top-1" id="sidebar-offcanvas">
                <ul class="nav">
                    <div class="menu">
                        <ul class="navbar-nav nav-item.dropdown navbar-dropdown">
                        <!--NEGÓCIOS Dropdown-->
                        <li class="dropdown-item"><font-awesome-icon class="icons-menu desabled" icon="briefcase"/>
                            <ul class="nav" id="nav">
                                <li class="nav-item">
                                    <div class="dropdown-item-1 disabled">
                                        <div class="menu-bottom">
                                            <span class="menu-title decoration-fountain-main desabled"><b>Negócios</b></span>
                                        </div>
                                        <!-- <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="heading1">
                                                    <h2 class="mb-0">
                                                        <a class="nav-link" href="#">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small">Agenda</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                            <div class="card-header" id="heading2">
                                                <h2 class="mb-0">
                                                <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                    <span class="menu-title decoration-source-median">Proposta</span>
                                                </button>
                                                </h2>
                                            </div>
                                            <div id="collapse2" class="collapse" aria-labelledby="heading2" data-parent="#accordionExample">
                                                <div class="card-body">
                                                <a class="nav-link" href="#">
                                                    <span class="menu-title decoration-fountain-small">Empresa</span>
                                                </a>
                                                </div>
                                                <div class="card-body">
                                                <a class="nav-link" href="#">
                                                    <span class="menu-title decoration-fountain-small">Tipo de Pessoa</span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card">
                                            <div class="card-header" id="heading3">
                                                <h2 class="mb-0">
                                                <a class="nav-link" href="#">
                                                    <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small">Aprovação</span>
                                                </a>
                                                </h2>
                                            </div>
                                            </div>
                                        </div>   -->
                                    </div>                    
                                </li>
                            </ul>
                        </li>
                        <!--NEGOCIOS Fim-->
                        <!--CADASTROS Dropdown-->
                        <li class="dropdown-item"><font-awesome-icon class="icons-menu" icon="id-card"/>
                            <ul class="nav">
                                <li class="nav-item">
                                    <div class="dropdown-item-1">
                                        <div class="menu-bottom">
                                            <span class="menu-title decoration-fountain-main"><b>Cadastros</b></span>
                                        </div>
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="heading4">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="/#/cadastro/municipio">
                                                            <span class="menu-title decoration-source-median text-span">Município</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading4">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="/#/cadastro/empresa">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small">Empresa</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading5">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="/#/cadastro/grupopessoa">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small">Grupo de Pessoa</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading6">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="/#/cadastro/pessoa">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small">Pessoa</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading7">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="#">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small desabled">Tipo de Imóvel</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading8">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="#">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small desabled">Imóvel</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading9">
                                                    <h2 class="mb-1">
                                                        <a class="nav-link" href="#">
                                                            <span style="margin: 15px; font-size: 0.9rem" class="menu-title decoration-fountain-small desabled">Tabela Comissão</span>
                                                        </a>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>                    
                                </li>
                            </ul>
                        </li>
                        <!--CADASTROS Fim-->
                        <!--FINANCEIRO Dropdown-->
                        <li class="dropdown-item"><font-awesome-icon class="icons-menu desabled" icon="money-bill-alt"/>
                            <ul class="nav">
                                <li class="nav-item">
                                    <div class="dropdown-item-1">
                                        <div class="menu-bottom">
                                            <span class="menu-title decoration-fountain-main desabled"><b>Financeiro</b></span>
                                        </div>
                                        <!-- <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="heading11">
                                                    <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                        <span class="menu-title decoration-source-median">Cadastro</span>
                                                    </button>
                                                    </h2>
                                                </div>
                                                <div id="collapse11" class="collapse" aria-labelledby="heading11" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small"> Agência/ Conta</span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small">Banco </span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small"> Forma de Pagamento </span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small"> Histórico Bancário </span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small"> Natureza da Operação </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading12">
                                                    <h2 class="mb-0">
                                                        <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                            <span class="menu-title decoration-source-median"> Operacional</span>
                                                        </button>
                                                    </h2>
                                                </div>
                                                <div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small">Baixa</span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small">Cheque</span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small">Entrada</span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small">Extrato</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>  -->
                                    </div>                     
                                </li>
                            </ul>
                        </li>
                        <!--FINANCEIRO Fim-->
                        <!--RELATÓRIOS Dropdown-->
                        <li class="dropdown-item"><font-awesome-icon class="icons-menu desabled" icon="chart-bar"/>
                            <ul class="nav">
                                <li class="nav-item">
                                    <div class="dropdown-item-1">
                                        <div class="menu-bottom">
                                            <span class="menu-title decoration-fountain-main desabled"><b>Relatórios</b></span>
                                        </div>
                                        <!-- <div class="accordion" id="accordionExample">
                                            <div class="card">
                                            <div class="card-header" id="heading13">
                                                <h2 class="mb-0">
                                                <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse13" aria-expanded="true" aria-controls="collapse13">
                                                    <span class="menu-title decoration-source-median"> Operacional</span>
                                                </button>
                                                </h2>
                                            </div>
                                            <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordionExample">
                                                <div class="card-body">
                                                <a class="nav-link" href="#">
                                                    <span class="menu-title decoration-fountain-small">Relatório Geral</span>
                                                </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card">
                                            <div class="card-header" id="heading14">
                                                <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                        <span class="menu-title decoration-source-median"> Gerencial </span>
                                                    </button>
                                                </h2>
                                            </div>
                                            <div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordionExample">
                                                <div class="card-body">
                                                    <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small"> Relatório Geral </span>
                                                    </a>
                                                </div>
                                            </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading15">
                                                    <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                        <span class="menu-title decoration-source-median"> Personalizado </span>
                                                    </button>
                                                    </h2>
                                                </div>
                                                <div id="collapse15" class="collapse" aria-labelledby="heading15" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small"> Relatório Geral </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>     -->
                                    </div>                  
                                </li>
                            </ul>
                        </li>
                        <!--RELATÓRIOS Fim-->
                        <!--DCUMENTOS Dropdown-->
                        <li class="dropdown-item"><font-awesome-icon class="icons-menu desabled" icon="file-invoice"/>
                            <ul class="nav">
                                <li class="nav-item">
                                    <div class="dropdown-item-1">
                                        <div class="menu-bottom">
                                            <span class="menu-title decoration-fountain-main desabled"><b>Documentos</b></span>
                                        </div>
                                        <!-- <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-header" id="heading16">
                                                    <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse16" aria-expanded="true" aria-controls="collapse16">
                                                        <span class="menu-title decoration-source-median"> Notas Fiscal</span>
                                                    </button>
                                                    </h2>
                                                </div>
                                                <div id="collapse16" class="collapse" aria-labelledby="heading16" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                    <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small">Emissão</span>
                                                    </a>
                                                    </div>
                                                    <div class="card-body">
                                                    <a class="nav-link" href="#">
                                                        <span class="menu-title decoration-fountain-small">Gerenciador</span>
                                                    </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-header" id="heading17">
                                                    <h2 class="mb-0">
                                                    <button class="btn btn-link collapsed dropdown-toggle" type="button" data-toggle="collapse" data-target="#collapse17" aria-expanded="false" aria-controls="collapse17">
                                                        <span class="menu-title decoration-source-median"> Contrato </span>
                                                    </button>
                                                    </h2>
                                                </div>
                                                <div id="collapse17" class="collapse" aria-labelledby="heading17" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small">Novo</span>
                                                        </a>
                                                    </div>
                                                    <div class="card-body">
                                                        <a class="nav-link" href="#">
                                                            <span class="menu-title decoration-fountain-small">Consulta</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>   -->
                                    </div>                    
                                </li>
                            </ul>
                        </li>
                        <!--DOCUMENTOS Fim-->
                        </ul>
                    </div>  
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    document.addEventListener('DOMContentLoaded', function(event) {
        const $navBarButton = document.querySelector("#offcanvas");
        const $navBarMenu = document.querySelector("#sidebar-offcanvas");        
        $navBarButton.addEventListener("click", function (event) {            
            $navBarMenu.classList.toggle("active");
        });
        $navBarMenu.querySelectorAll('.nav-link').forEach( function ($alink, i, array) {
            $alink.addEventListener("click", function (event){
                 $navBarMenu.classList.toggle("active");
            });
        });
     }); 

 


</script>

<style>
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.4rem 1.1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  white-space: nowrap;
  background-color: #ffffff !important;
  top: auto;
  border-left: 5px solid transparent;
  border-right: auto;
  border-top: auto;
  border-bottom: auto;
}
.dropdown-item:hover, .dropdown-item:focus {
  text-decoration: none;
  background-color: #bdc3c7;
  border-left: 5px solid #172d7d;
  border-right: auto;
  border-top: auto;
  border-bottom: auto;
}
.dropdown-item-1 {
  display: block;
  clear: both;
  font-weight: 400;
  color: #212529;
  white-space: nowrap;
  position: absolute;
  left: 0;
  z-index: 1000;
  float: left;
  min-width: 10rem;
  padding: 9px 0px;
  margin: 0.125rem 0 0;
  color: #172d7d;
  text-align: left;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #f2f2f2;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.dropdown-item.dropdown-item-1.disabled, .dropdown-item.dropdown-item-1:disabled {
  color: #6c757d !important;
  background-color: transparent !important;
}

.desabled{
  color: #e8e8e8 !important;
  background-color: transparent !important;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff !important;
  background-clip: border-box;
  border: 0 !important;
  border-radius: 0 !important;
}

.card-header {
    text-align: justify;
    text-indent: -20px;
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: #ffffff;
    border-bottom: 0 !important;
}

.card-body {
    flex: 1 1 auto !important;
    padding: 0.1rem !important;
    text-align: justify !important;
    text-indent: 0.9em;
}

.mb-0, .my-0 {
    margin-bottom: -10px !important;
    margin-top: -10px !important;
}

.mb-1{
    margin-bottom: -20px !important;
    margin-top: -20px !important;
}

button:focus {
  outline-color: transparent;
}

</style>



