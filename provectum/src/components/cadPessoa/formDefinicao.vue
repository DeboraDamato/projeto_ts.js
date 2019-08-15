<template>
<div>
  <form class="form-back">
    <div class="form-row">
      <div class="form-group col-md-3">
        <label for="inputState">Grupo*</label>
        <select id="inputState" class="form-control required">
          <option selected>Selecione...</option>
          <option>Cliente</option>
          <option>Fornecedor</option>
          <option>Funcionário</option>
          <option>Proprietário</option>
          <option>Motorista</option>
          <option>Visitante</option>
        </select>
      </div>
      <div class="form-group col-md-3">
        <label for="inputState">Ramo*</label>
        <select id="inputState" class="form-control">
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
      <div class="form-group col-md-3">
        <label for="inputState">Regime Tributário*</label>
        <select id="inputState" class="form-control">
          <option selected>Selecione...</option>
          <option>Normal</option>
          <option>Simples Nacional</option>
        </select>
      </div>
        <div class="form-group col-md-3">
          <label for="inputState">Situação*</label>
          <select class="form-control" id="inputState" name="pessoa.situacao">
            <option selected>Selecione...</option>
            <option>Ativo</option>
            <option>Inativo</option>
            <option>Afastado</option>
          </select>
        </div>
      </div>  
    </form>
</div>
</template>

<script>

</script>

<style lang="scss">


</style>
