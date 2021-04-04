const Inicio = {
    data: function() {
        return {
            title: 'Mini-Projeto: Single Page Application (SPA)'
        }
    },
    template: '<div class="content">Este é um mini-projeto, desenvolvendo um SPA através da framework Vue.js, relativo à disciplina de Programação Web Avançada 2020 do Mestrado de (EITW), para me apresentar num mini currículo...</div>', mounted(){
		
        this.$root.title = this.title;
    }
};
/*conteudo  e titulo da pag2*/
const page2 = {
    data: function () {
        return {
            title: 'Quem sou Eu?'
        }
    },
    template: '<div class="content">Meu nome é Gualter Sousa, 45 anos, sou de Ponta Delgada, Ilha de São Miguel, Açores.</div>',
    mounted() {
        this.$root.title = this.title;
    }
};
/*conteudo  e titulo da pag3*/
const page3 = {
    data: function () {
        return {
            title: 'O Que Faço?'
        }
    },
    template: '<div class="content">Sou Técnico Superior na carreira geral da Função Pública, exerço as minhas funções na Divisão de  Técnologias da Informação da Autarquia Local. </div>',
    mounted() {
        this.$root.title = this.title;
    }
};
/*conteudo  e titulo da pag4*/
const page4 = {
    data: function () {
        return {
            title: 'Os meus Hobies?'
        }
    },
    template: '<div class="content">Sou instrutor de Karate MMA. </div>',
    mounted() {
        this.$root.title = this.title;
    }
};
/*conteudo  e titulo de erro*/
const errorNotFound = {
    data: function () {
        return {
            title: 'Not Found'
        }
    },
    template: '<div class="content not-found">Erro 404</div>',
    mounted() {
        this.$root.title = this.title;
    }
};
/*redirecionamnetos*/
const routes = [
    { path: '/', component: Inicio },
    { path: '/page2', component: page2 },
    { path: '/page3', component: page3 },
	{ path: '/page4', component: page4 },
    { path: '/*', component: errorNotFound },
];

const router = new VueRouter({
    routes
});
/*botões*/
new Vue({
    el: '#app',
    template: `
    <div>
        <h2>{{ title }}</h2>
        <nav>
            <ul>
                <li><router-link to="/">Início</router-link></li>
                <li><router-link to="/page2">Quem sou Eu?</router-link></li>
                <li><router-link to="/page3">O que Faço?</router-link></li>
                <li><router-link to="/page4">Os meus Hobbies!</router-link></li>
            </ul>
        </nav>
       <main class="transition">
            <transition
                enter-active-class="animated flash"
                leave-active-class="animated bounce">
                <router-view></router-view>
            </transition>
        </main>
    </div>
    `,
    data: function() {
        return {
            title: '...'
        }
    },
    router
});
