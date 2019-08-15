<template>
  <div class="container-scroller">
    <div class="container-fluid">
      <div class="form-row title">
        <span style="text-align: center; top:45px;" class="decoration-fountain-main"><b>Cadastro de Pessoa</b></span>
      </div>
        <section class="form-back-header">
          <div class="form-row">
            <div class="col-md-12" role="separator">
              <div class="o-steps-rounded">
                  <a class="o-steps-step pessoa decoration-step o-steps-step-estou is-steped" href="#/cadastro/pessoa/step1"><div>Dados Pessoais</div></a>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                    <div class="o-steps-step-inside is-steped circle-step"></div>
                  <a class="o-steps-step pessoa decoration-step o-steps-step-chegar" href="#/cadastro/pessoa/step2"><div>Endereço</div></a>
                    <div class="o-steps-step-inside circle-step"></div>
                    <div class="o-steps-step-inside circle-step"></div>
                    <div class="o-steps-step-inside circle-step"></div>
                  <a class="o-steps-step pessoa decoration-step o-steps-step-chegar" href="#/cadastro/pessoa/step3"><div>Dados Bancários</div></a>
                    <div class="o-steps-step-inside circle-step"></div>
                    <div class="o-steps-step-inside circle-step"></div>
                    <div class="o-steps-step-inside circle-step"></div>
                  <a class="o-steps-step pessoa decoration-step o-steps-step-chegar" href="#/cadastro/pessoa/step4"><div>Documentos</div></a>
              </div>
            </div>
          </div>
        </section>
        <formDadosPessoais/>
    </div>
     <div class="o-toolbar--lube is-fixedBottomFull">
        <!-- <a class="o-toolbar__item" href="#/cadastro/empresa/step1"><button type="button"><font-awesome-icon class="icons-menu" icon="angle-double-left"/></button></a> -->
        <a class="o-toolbar__item" href="#/cadastro/pessoa/step2"><button class="button" type="button"><font-awesome-icon class="icons-menu" icon="angle-double-right"/></button></a>
      </div>
  </div>
</template>

<script>
import formDadosPessoais from './../cadPessoa/formDadosPessoais'

    export default {
        name: 'step1',
        components: {
        formDadosPessoais,
   },
}

</script>

<style lang="scss">
</style>
