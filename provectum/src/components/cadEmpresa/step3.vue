<template>
  <div class="container-scroller">
    <!-- <div aria-expanded="true" aria-hidden="false" class="o-steps__content o-steps__content--3 is-hide"> -->
    <div class="container-fluid">
      <div class="form-row title">
        <span style="text-align: center; top:45px;" class="decoration-fountain-main"><b>Cadastro de Empresa</b></span>
      </div>
        <section class="form-back-header">
          <div class="form-row">
            <div class="col-md-12" role="separator"> 
              <div class="o-steps-rounded">
                  <a class="o-steps-step empresa decoration-step o-steps-step-passou is-steped" href="#/cadastro/empresa/step1"><div >Dados Jurídicos</div></a>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                  <a class="o-steps-step empresa decoration-step o-steps-step-passou is-steped" href="#/cadastro/empresa/step2"><div>Endereço</div></a>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                  <a class="o-steps-step empresa decoration-step o-steps-step-estou is-steped" href="#/cadastro/empresa/step3"><div>Contato</div></a>
              </div>
            </div>
          </div>
        </section>
        <formContato/>
    </div>
      <div class="o-toolbar--lube is-fixedBottomFull">
        <a class="o-toolbar__item" href="#/cadastro/empresa/step2"><button class="button" type="button"><font-awesome-icon class="icons-menu" icon="angle-double-left"/></button></a>
        <button class="o-toolbar__item button" v-on:click="sendData()" type="button"><font-awesome-icon class="icons-menu" icon="save"/></button>    
      </div>
  </div>
</template>

<script>
 import formContato from './../cadEmpresa/formContato'

    export default {
        name: 'step3',
        components: {
        formContato,
   },
}
</script>

<style lang="scss">

</style>
