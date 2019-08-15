<template>  
<div class="container-scroller">
    <div class="container-fluid">
      <div class="form-row title">
        <span style="text-align: center; top:50px;" class="decoration-fountain-main"><b>Alterar Senha</b></span>
      </div>
      <form class="form-back-nostep">
        <div class="form-row">
          <div class="form-group col-md-4">
              <label>Senha Atual*</label>
              <input type="password" class="form-control required" placeholder="Senha Atual">
          </div>
          <div class="form-group col-md-4">
              <label>Nova Senha*</label>
              <input type="password" class="form-control required" placeholder="Nova Senha">
          </div>
          <div class="form-group col-md-4">
               <label>Confirmar Senha*</label>
              <input type="password" class="form-control required" placeholder="Confirmar Senha">
          </div>
        </div>
      </form>
      </div>
      <div class="o-toolbar--lube is-fixedBottomFull">
        <a class="o-toolbar__item" href="#"><button class="button" type="button"><font-awesome-icon class="icons-menu" icon="save"/></button></a>
      </div>
  </div>

</template>

<script>
    export default {
        name: 'alterar senha',
        components: {
   }
    }
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
