<template>
  <div>
    <form class="form-back">
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="cnpj">CPF/CNPJ Favorecido</label>
          <div class="input-group col-mb-1">
            <input class="form-control required" data-dependency="cpfcnpj" id="cpfcnpj" maxlength="18" minlength="14" name="pessoa.cpfcnpj" required type="text" placeholder="xxx.xxx.xxx-xx ou xx.xxx.xxx/xxxx-xx" value="">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-cep"><font-awesome-icon class="icons-menu" icon="redo-alt"/></button>
            </div>
          </div>
        </div> 
        <div class="form-group col-md-9">
          <label for="nomefavorecido">Nome do Favorecido</label>
          <input type="text" class="form-control required" id="nomefavorecido" placeholder="Nome do Favorecido">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="inputState">Tipo de Conta</label>
            <select id="inputState" class="form-control">
              <option selected>Selecione...</option>
              <option>Conta Corrente</option>
              <option>Conta Poupança</option>
          </select>
        </div>
        <div class="form-group col-md-3">
          <label for="banco">Banco</label>
          <input type="text" class="form-control required" id="banco" placeholder="Banco">
        </div>
        <div class="form-group col-md-3">
          <label for="agencia">Agência</label>
          <input type="text" class="form-control required" id="agencia" placeholder="Agência">
        </div>
        <div class="form-group col-md-3">
          <label for="conta">Conta</label>
          <input type="text" class="form-control required" id="conta" placeholder="Conta">
        </diV>
      </div>
    </form>
  </div>
</template>

<script>

</script>

<style lang="scss">

</style>
