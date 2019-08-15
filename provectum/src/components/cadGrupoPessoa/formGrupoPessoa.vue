<template>
  <div>
    <form class="form-back-nostep">
      <div class="form-row">
          <div class="form-group col-md-10">
            <label for="descricao">Descrição*</label>
            <input type="text" class="form-control" id="descricao" placeholder="Descrição">
          </div>
          <div class="form-group col-md-2">
            <label for="inputState">Tipo Conta*</label>
            <select id="inputState" class="form-control">
              <option selected>Selecione...</option>
              <option>A Pagar</option>
              <option>A Receber</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
              <label for="tipopessoa">Tipo de Pessoa*</label>
              <select id="tipopessoa" class="form-control">
                <option selected>Selecione...</option>
                <option>Pessoa Fisica / Juridica</option>
                <option>Pessoa Fisica</option>
                <option>Pessoa Juridica</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="gruporesumo">Grupo Resumo</label>
              <input type="text" class="form-control" id="gruporesumo" placeholder="Grupo Resumo">
            </div>
        </div>
    </form>
  </div>
</template>

<script>
</script>

<style lang="scss">

.centralizado{
  text-align: center;
  margin-top: 50px;
}
</style>