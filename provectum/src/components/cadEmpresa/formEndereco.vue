<template>
    <form class="form-back">
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="inputState">CEP*</label>
          <div class="input-group col-mb-1">
            <input type="text" class="form-control required" placeholder="CEP" aria-label="CEP" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2"><font-awesome-icon class="icons-menu" icon="globe-americas"/></button>
            </div>
          </div>
        </div>
        <div class="form-group col-md-8">
          <label for="inputEmail4">Logradouro*</label>
          <input type="text" class="form-control required" id="inputEmail4" placeholder="Logradouro">
        </div>
        <div class="form-group col-md-2">
            <label for="inputEmail4">Número*</label>
            <input type="text" class="form-control required" id="inputEmail4" placeholder="Número">
          </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">Bairro*</label>
            <input type="text" class="form-control required" id="inputEmail4" placeholder="Bairro">
        </div>
        <div class="form-group col-md-6">
            <label for="inputEmail4">Complemento</label>
            <input type="text" class="form-control" id="inputEmail4" placeholder="Complemento">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-2">
          <label for="inputState">UF*</label>
          <select id="inputState" class="form-control required">
            <option selected>Selecione...</option>
            <option>São Paulo</option>
            <option>Minas Gerais</option>
          </select>
        </div>
        <div class="form-group col-md-8">
          <label for="inputState">Município*</label>
          <select id="inputState" class="form-control required">
            <option selected>Selecione...</option>
            <option>Campinas - SP</option>
            <option>Mogi Guaçu - SP</option>
            <option>Pouso Alegre - MG</option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputState">País*</label>
          <select id="inputState" class="form-control">
            <option selected>Selecione...</option>
            <option>Brasil</option>
            <option>...</option>
          </select>
        </div>
      </div>
    </form>
</template>

<script>

</script>

<style lang="scss">


</style>
