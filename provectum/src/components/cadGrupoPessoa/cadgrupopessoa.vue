<template>
    <div class="container-scroller">
      <div class="container-fluid">
        <div class="form-row title">
          <span style="text-align: center; top:50px;" class="decoration-fountain-main"><b>Cadastro Grupo de Pessoa</b></span>
        </div>
        <formGrupoPessoa/>
      </div>
      <div class="o-toolbar--lube is-fixedBottomFull">
        <button class="o-toolbar__item button" v-on:click="sendData()" type="button"><font-awesome-icon class="icons-menu" icon="save"/></button>    
        <a class="o-toolbar__item" href="#"><button class="button" type="button"><font-awesome-icon class="icons-menu" icon="search"/></button></a>
      </div>  
    </div> 
</template>

<script>
import formGrupoPessoa from './../cadGrupoPessoa/formGrupoPessoa'
    export default {
        name: 'cadgrupopessoa',
        components: {
        formGrupoPessoa,
   },
}

</script>

<style lang="scss">

</style>

