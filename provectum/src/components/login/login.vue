<template>
    <div class="container-fluid-login">
        <div class="auth auth-bg-1 theme-one">
            <div class="form-row">
                <div class="col-lg-4 mx-auto">
                        <div class="auto-form-wrapper">
                        <form action="#">
                            <div class="form-group">
                                <label class="label">Nome do Usuário</label>
                                <div class="input-group">
                                    <input type="text" class="form-control required" placeholder="Usuário">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="user"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="label">Senha</label>
                                <div class="input-group">
                                    <input type="password" class="form-control required" placeholder="*********">
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <font-awesome-icon icon="key"/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top: 30px;" class="form-group">
                                <button class="btn btn-primary submit-btn btn-block">Entrar</button>
                            </div>
                            <div style="margin-top: 30px;" class="form-group d-flex justify-content-between">
                                <div class="form-check form-check-flat mt-0">
                                    <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" checked>Mantenha-me Conectado
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script >  

</script>

<style>
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -12.5px;
}

.auth.theme-one .auto-form-wrapper {
    background: #ffffff;
    padding: 40px 40px 10px;
    border-radius: 4px;
    box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
}

@media (min-width: 200px) and (max-width: 301px) { 
   .auto-form-wrapper{
    background: #ffffff;
    padding: 40px 40px 10px;
    border-radius: 4px;
    box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
    margin-top: 100px;
  }
}
@media (min-width: 300px) and (max-width: 481px) { 
   .auto-form-wrapper{
    background: #ffffff;
    padding: 40px 40px 10px;
    border-radius: 4px;
    box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
    margin-top: 100px;
  }
}
@media (min-width: 480px) and (max-width: 767px) { 
   .auto-form-wrapper{
    background: #ffffff;
    padding: 40px 40px 10px;
    border-radius: 4px;
    box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
    margin-top: 100px;
}
}
@media (min-width: 767px) and (max-width: 978px) {
  .auto-form-wrapper{
    background: #ffffff;
    padding: 40px 40px 10px;
    border-radius: 4px;
    box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
    margin-top: 100px;
}
}
@media (min-width: 979px) and (max-width: 1198px) {
    .auto-form-wrapper{
    background: #ffffff;
    padding: 40px 40px 10px;
    border-radius: 4px;
    box-shadow: 0 -25px 37.7px 11.3px rgba(8, 143, 220, 0.07);
    margin-top: 100px;
}
}

/* Desktop grande */
@media (min-width: 1200px) {
    .auto-form-wrapper{
    margin-top: 100px;
}
}
.container-fluid-login {
    width: 100%;
    padding-right: 12.5px;
    padding-left: 12.5px;
    margin-right: auto;
    margin-left: auto;
}
</style>
