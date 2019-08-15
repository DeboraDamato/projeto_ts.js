import menuheader from './components/menuHeader/menuheader.vue'
import login from './components/login/login.vue'
import alterarsenha from './components/login/alterarsenha.vue'
import cadMunicipio from './components/cadMunicipio/cadmunicipio.vue'
import cadEmpresa from './components/cadEmpresa/cadempresa.vue'
import step1 from './components/cadEmpresa/step1.vue'
import step2 from './components/cadEmpresa/step2.vue'
import step3 from './components/cadEmpresa/step3.vue'
import cadGrupoPessoa from './components/cadGrupoPessoa/cadgrupopessoa.vue'
import cadPessoa from './components/cadPessoa/cadpessoa.vue'
import pesstep1 from './components/cadPessoa/step1.vue'
import pesstep2 from './components/cadPessoa/step2.vue'
import pesstep3 from './components/cadPessoa/step3.vue'
import pesstep4 from './components/cadPessoa/step4.vue'

export const routes = [
    { path: '', component: menuheader},
    { path: '/login/login', component: login},
    { path: '/login/alterarsenha', component: alterarsenha},
    { path: '/login/login', component: login},
    { path: '/cadastro/municipio', component: cadMunicipio},
    { path: '/cadastro/empresa', component: cadEmpresa},
    { path: '/cadastro/empresa/step1', component: step1},
    { path: '/cadastro/empresa/step2', component: step2},
    { path: '/cadastro/empresa/step3', component: step3},
    { path: '/cadastro/grupopessoa', component: cadGrupoPessoa},
    { path: '/cadastro/pessoa', component: cadPessoa},
    { path: '/cadastro/pessoa/step1', component: pesstep1},
    { path: '/cadastro/pessoa/step2', component: pesstep2},
    { path: '/cadastro/pessoa/step3', component: pesstep3},
    { path: '/cadastro/pessoa/step4', component: pesstep4},
];