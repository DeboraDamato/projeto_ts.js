<template>
  <div class="container-scroller">
    <div class="container-fluid">
      <div class="form-row title">
        <span style="text-align: center; top:50px;" class="decoration-fountain-main"><b>Cadastro Município</b></span>
      </div>
      <form class="form-back-nostep">
        <div class="form-row">
          <div class="form-group col-md-10">
            <label>Nome*</label>
            <input class="form-control" type="text" v-model="input.name" placeholder="Nome">
          </div>
          <div class="form-group col-md-2">
            <label for="inputState">UF*</label>
            <select id="inputState" class="form-control">
              <option selected>{{ uf }}</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-9">
            <label>Codigo IBGE*</label>
            <div class="input-group col-mb-1">
              <input class="form-control" type="number" placeholder="Cód. IBGE" v-model="input.codibge" aria-describedby="button">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"><font-awesome-icon class="icons-menu" icon="globe" /></button>
              </div>
            </div>
          </div>
          <div class="form-group col-md-3">
            <label>Tipo</label>
              <div class="input-group col-mb-1">
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" v-model="input.radio1" class="custom-control-input">
                    <label class="custom-control-label" for="customRadioInline1">Município</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" v-model="input.radio2" class="custom-control-input">
                    <label class="custom-control-label" for="customRadioInline2">Região</label>
                </div>
              </div>
          </div>
        </div>
      </form> 
    </div>
  <div class="o-toolbar--lube is-fixedBottomFull">
    <button class="o-toolbar__item button" v-on:click="sendData()" type="button"><font-awesome-icon class="icons-menu" icon="save"/></button>    
    <a class="o-toolbar__item" href="#"><button class="button" type="button"><font-awesome-icon class="icons-menu" icon="search"/></button></a>
  </div> 
</div> 
</template>

<script>
    export default {
        name: 'cadmunicipio',
        components: {
   },
        data () {
            return {
                input: {
                    name: "",
                    codibge: "",
                    radio1: "",
                    radio2: ""
                },
                uf: ""
            }
        },
        mounted() {
            this.$http.get("https://httpbin.org/ip").then(result => {
                this.ip = result.body.origin;
            }, error => {
                console.error(error);
            });
        },
        methods: {
            sendData() {
                this.$http.post("https://httpbin.org/post", this.input, { headers: { "content-type": "application/json" } }).then(result => {
                    this.uf = result.data;
                }, error => {
                    console.error(error);
                });
            }
        }
    }

</script>

<style lang="scss">


</style>
