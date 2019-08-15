<template>
      <form class="form-back">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="form-row">
              <div class="form-group col-md-4">
                <label for="cnpj">CNPJ*</label>
                <input type="text" class="form-control required" id="cnpj" maxlength="18" minlength="18" name="pessoa.cnpj"  placeholder="XX.XXX.XXX/XXX-XX" value="">
              </div>
              <div class="form-group col-md-8">
                <label for="razaosocial">Razão Social*</label>
                <input type="text" class="form-control required" id="razaosocial" name="pessoa.razaosocial" placeholder="Razão Social" value="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inscricaoestadual">Inscrição Estadual</label>
                <input type="text" class="form-control" id="inscricaoestadual" name="pessoa.inscricaoestadual" placeholder="" value="">
              </div>
              <div class="form-group col-md-6">
                <label for="inscricaomuicipal">Inscrição Municipal</label>
                <input type="text" class="form-control" id="inscricaomuicipal" name="pessoa.inscricaomuicipal" placeholder="" value="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputState">Ramo*</label>
                <select id="inputState" class="form-control required">
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
              <div class="form-group col-md-6">
                <label for="inputState">Regime Tributário*</label>
                <select id="inputState" class="form-control required">
                  <option selected>Selecione...</option>
                  <option>Normal</option>
                  <option>Simples Nacional</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-12">
                <label for="site">Site</label>
                <input type="text" class="form-control" id="site" name="empresa.site" placeholder="HTTP://" value="">
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-8" role="separator">
                <label>Certificado Upload</label>
                <input accept="*.pfx" name="certificado" type="file">
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-4">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="inativo">
                  <label class="custom-control-label" for="inativo">Inativo</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
</template>

<script>

</script>

<style lang="scss">


</style>
