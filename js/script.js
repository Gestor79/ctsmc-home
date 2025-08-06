// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top": itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left": itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
    });
}
$(document).ready(function () {
    setTimeout(function () { test(); });
});
$(window).on('resize', function () {
    setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () { test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == '') {
        path = 'index.html';
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });


var links = document.getElementById("links");

links.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">

    <div class="bt">
                <a class="link-bt" href="https://app.servidor.maceio.al.gov.br/#/login" target="_blank">
                    <div>
                        <img class="logo-op" src="./img/PONTO3.png" alt="logo ponto">
                    </div>
                </a>
                <p class="m-title">PONTO <br>ELETRONICO</p>
            </div>
            
    
    <div class="bt">
        <a class="link-bt" href="https://supe.maceio.al.gov.br" target="_blank">
            <div>
                <img class="logo-op" src="./img/logo_prefeitura.png" alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">SUPE</p>
    </div>

    <div class="bt">
        <a class="link-bt"
            href="http://www.licitacao.maceio.al.gov.br/pesquisar?modalidade=1&ano=2019&numero=95&objeto=&orgao=&cota=&status="
            target="_blank">
            <div>
                <img class="logo-op" src="./img/LIC.png" alt="logo Alic">
            </div>
        </a>
        <p class="m-title">LICITAÇÕES</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://www.diariomunicipal.com.br/maceio" target="_blank">
            <div>
                <img class="logo-op" src="./img/logo_prefeitura.png" alt="logo prefeitura">
            </div>
        </a>
        <p class="m-title">DIÁRIO<br> OFICIAL</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="http://scaweb.saude.gov.br/scaweb/" target="_blank">
            <div>
                <img class="logo-op" src="./img/logoHorus.jpg" alt="logo Horus">
            </div>
        </a>
        <p class="m-title">HÓRUS</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://consultas.anvisa.gov.br/#/medicamentos/" target="_blank">
            <div>
                <img class="logo-op" src="./img/ANVISA.png" alt="logo Anvisa">
            </div>
        </a>
        <p class="m-title">ANVISA<br> MEDICAMENTOS</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://consultas.anvisa.gov.br/#/saude/" target="_blank">
            <div>
                <img class="logo-op" src="./img/ANVISA.png" alt="logo Anvisa">
            </div>
        </a>
        <p class="m-title">ANVISA <br>CORRELATOS</p>
    </div>
</div>`;
}

// =================================================================================================

var notas = document.getElementById("notas");

notas.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1k_uLfMnK54yVOdtXqXGyRjQci26EpbYrCPLHKCCcsek/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>PROCESSOS</p>
    </div>
   
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1vVeHCPjhsgQHqvi018Kl4SmBvOG3EG9LWtYmr8lk40I/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>LICITAÇÕES</p>
    </div>
    
    <div class="bt">
      <a class="link-bt" href="https://lookerstudio.google.com/reporting/404d1a58-904d-440b-85e1-db1e0d98d8ab/page/5N6uE" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/recebe.jpg"
                    alt="logo Recebimento">
            </div>
        </a>
        <p class="m-title">CONTROLE DE ORDENS <br>DE FORNECIMENTO</p>
    </div>
    
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1qnzvqzIOjq6YIdEVTE_EP46mrLHFuk-8jMXe1cs0dwg" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>ESTOQUE E AQUISIÇÃO</p>
    </div>
   
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/a618f8ec-c47e-4045-a14c-46457bec4205/page/y76jD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/DASHBOARD.png"
                    alt="logo DASHBOARD">

            </div>
        </a>
        <p class="m-title">DASHBOARD DE<br> FORNECIMENTO</p>
    </div>
    
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/9e61566a-2df4-4b53-bd75-90b615c1a589/page/awzqD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/ENTREGA.png"
                    alt="logo ENTREGA">

            </div>
        </a>
        <p class="m-title">RELATÓRIO DE<br> RECEBIMENTO</p>
    </div>



    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/8178da71-f0f8-4d74-be55-c86e78c068bb/page/EijkD" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/AGENDA.png"
                alt="logo ENTREGA">

        </div>
    </a>
    <p class="m-title">LISTA DE <br>ENTREGAS AGENDADAS</p>
</div>
    </div>`
}

// =================================================================================================

var logistc = document.getElementById("log");

logistc.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/12nt-Tvl4Jpzye9f2D1ieC2MKq6O6jtWgUPUWH0IK5zE/edit?pli=1#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">ROTA DIÁRIA</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1DZemm495IREQBm6mOTpERTstRZlPV0aHND8O2s5HVRo/edit#gid=1426336719" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">PRODUTIVIDADE</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/10rcWazxcCs3pNh6mOXxaKS1Jb6WyAyh7xU6N8tQeVnU/edit#gid=1036754280" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">INVENTÁRIO</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1X2wMVIRl5KsRn_tC84ebAASmNhzRFwu_vrIGomIjzI8/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">CONTROLE <br>DE B.E.B.R.</p>
    </div>

    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/38de69fb-f531-4a4a-b509-eb8721dd13fe/page/orwsD" target="_blank">
        <div>
            <img class="logo-pln"
                src="./img/logistica.png"
                alt="logo prefeitura">

        </div>
    </a>
    <p class="m-title">INFORME <br>DE ROTA</p>
</div>

</div>`;
}

// =================================================================================================

var farm = document.getElementById("farm");

farm.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content"> 

<div class="bt">
    <a class="link-bt" href="https://script.google.com/macros/s/AKfycbxxMDJaerKT1hq-oCdQ0LOMFyyCDwN71tracdBfNd-uHVujU6794QBMPcej95LhUcl7bg/exec" target="_blank">
        <div>
            <img class="logo-pnm"
                src="./img/pedido1.png"
                alt="logo Pedido">

        </div>
    </a>
    <p class="m-title">CONTROLE DE <br>PEDIDOS (EM CONSTRUÇÃO)</p>
</div>

<div class="bt">
    <a class="link-bt" href="https://pnm.sms.maceio.al.gov.br/" target="_blank">
        <div>
            <img class="logo-pnm"
                src="./img/pnm.jpg"
                alt="logo PNM">

        </div>
    </a>
    <p class="m-title">SISTEMA DE <br>INFORMAÇÕES P.N.M</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/116msvyNNo6VqtZf26EyI0tiz6qMUqCfHfgddi7FScK8/edit#gid=1141012546" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">CTSMC - COMPONENTE<br> ESTRATÉGICO</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1E9WnXNCCtgfXAoG1-v1V3jVPMqFV1JZC1SdaXaGcm5Q/edit#gid=835047668" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">RESPONSABILIDADE <br>TÉCNICA</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1LD-7n8RqQolXptRfBQieIXgkJ_v22xLt_UTCkJWPLcA/edit#gid=280970307" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">MEDICAMENTOS <br>PARA PARKINSON</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1xyzrK51uEF6gRyRWi1XIKF6W8hSgMMx9ylEYc-3TnUE/edit?gid=0#gid=0" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">PREENCHIMENTO<br>DO CMM</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1PULQXGJ5pJXEiIRL8Y6SVyCUWE86VzPGpOh2GnSpSqs/edit?gid=0#gid=0" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">DISTRIBUIÇÃO<br>PROTETOR SOLAR</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1h1QMOm-GKhk1U0CEfxhodbfeMExA4-ZTM9qomjAegbE/edit?gid=985608617#gid=985608617" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">CONTROLE DE<br> DISTRIBUIÇÃO</p>
</div>


`;
}

var farm = document.getElementById("digit");

farm.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1MXVpd9fTkTyuZ5Gnrp2j9vKnCpP4YCyNTk23XNNdnGQ/edit#gid=412418021" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">RECEBIMENTO DE <br>PEDIDOS MENSAIS</p>
        
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1hhpgmirgy0TdOZNdTluateBRj21nHOvUKg0vwR0sRs8/edit#gid=1228655469" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>PEDIDOS MENSAIS</p>
        
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1OUgpBXV8BqdeGITg96sOZa0jc6kLHTYhDNYV2iaJEXo/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>PACIENTES - CURATIVOS</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1BsyGmwzFiha4hOE0LijC3mITu9YHRr5i2pYvw0gVScA/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CTSMC - DADOS <br>E ESTATÍSTICA</p>
    </div>
    <div class="bt">
    <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1ey5UvYK4HZawcz6A8ogoaruT6l2t4VPjrBEDern_W3U/edit#gid=611076321" target="_blank">
        <div>
            <img class="logo-pln"
            src="./img/logPln.png"
                alt="logo planlha">

        </div>
    </a>
    <p class="m-title">ACOMPANHAMENTO <br>DE PEDIDOS</p>
</div>

    `;
}

var notas = document.getElementById("notas");

notas.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1k_uLfMnK54yVOdtXqXGyRjQci26EpbYrCPLHKCCcsek/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">
            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>PROCESSOS</p>
    </div>
   
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1vVeHCPjhsgQHqvi018Kl4SmBvOG3EG9LWtYmr8lk40I/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE <br>LICITAÇÕES</p>
    </div>
    
    <div class="bt">
      <a class="link-bt" href="https://lookerstudio.google.com/reporting/404d1a58-904d-440b-85e1-db1e0d98d8ab/page/5N6uE" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/recebe.jpg"
                    alt="logo Recebimento">
            </div>
        </a>
        <p class="m-title">CONTROLE DE ORDENS <br>DE FORNECIMENTO</p>
    </div>
    
    
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1qnzvqzIOjq6YIdEVTE_EP46mrLHFuk-8jMXe1cs0dwg/edit#gid=1040219886" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE ESTOQUE<br> E AQUISIÇÃO</p>
    </div>

    <div class="bt">
    <a class="link-bt" href="https://docs.google.com/spreadsheets/d/12wZFdK-OZtVdjdblo9anzPEUcmKUl7clcP8hV2KJ-8I/edit?gid=1105577122#gid=1105577122" target="_blank">
        <div>
            <img class="logo-pln"
                src="./img/logPln.png"
                alt="logo PLANILHA">

        </div>
    </a>
    <p class="m-title">CONTROLE DE NOTAS<br> PARA PAGAMENTO</p>
</div>

    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/a618f8ec-c47e-4045-a14c-46457bec4205/page/y76jD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/DASHBOARD.png"
                    alt="logo DASHBOARD">

            </div>
        </a>
        <p class="m-title">DASHBOARD DE <br>FORNECIMENTO</p>

    </div>

     <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/9e61566a-2df4-4b53-bd75-90b615c1a589/page/awzqD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/ENTREGA.png"
                    alt="logo ENTREGA">

            </div>
        </a>
        <p class="m-title">RELATÓRIO DE <br>RECEBIMENTO</p>
    </div>
    
    
    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/8178da71-f0f8-4d74-be55-c86e78c068bb/page/EijkD" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/AGENDA.png"
                alt="logo ENTREGA">

        </div>
    </a>
    <p class="m-title">LISTA DE <br>ENTREGAS AGENDADAS</p>
</div>
    </div>`
}

// =================================================================================================

var logistc = document.getElementById("coord");

logistc.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
    
   
     <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/33306c48-1daa-4b85-ac1a-e734956f8d69/page/66drE" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/PROCESS.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">PROCESSOS DE <br> SOLICITAÇÃO</p>
    </div>
    
    
    
    
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/54f46540-4108-4e97-827a-cdde14149667/page/YQxsD" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/call.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">STATUS DE <br> COBRANÇAS</p>
    </div>
    

    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/a618f8ec-c47e-4045-a14c-46457bec4205/page/y76jD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/DASHBOARD.png"
                    alt="logo DASHBOARD">

            </div>
        </a>
        <p class="m-title">DASHBOARD DE <br>FORNECIMENTO</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/9e61566a-2df4-4b53-bd75-90b615c1a589/page/awzqD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/ENTREGA.png"
                    alt="logo ENTREGA">

            </div>
        </a>
        <p class="m-title">RELATÓRIO DE <br>RECEBIMENTO</p>
    </div>
    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/8178da71-f0f8-4d74-be55-c86e78c068bb/page/EijkD" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/AGENDA.png"
                alt="logo ENTREGA">

        </div>
    </a>
    <p class="m-title">LISTA DE <br>ENTREGAS AGENDADAS</p>
</div>

<div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/u/1/reporting/2ec1156d-7ef0-4557-855a-b5430c1a3a01/page/BkF2D" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/pend.png"
                alt="logo Pencencia">

        </div>
    </a>
    <p class="m-title">RELATÓRIO DE <br>PENDÊNCIAS</p>
    </div>

    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/u/0/reporting/395f1a3a-23ef-4788-8b52-abf296a1a868/page/gQD5D" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/PAGNF.png"
                alt="logo NF PAGAMENTO">

        </div>
    </a>
    <p class="m-title">NOTAS ENVIADAS <br>PARA PAGAMENTO</p>
    </div>

<div class="bt">
<a class="link-bt" href="https://lookerstudio.google.com/reporting/38de69fb-f531-4a4a-b509-eb8721dd13fe/page/orwsD" target="_blank">
    <div>
        <img class="logo-pln"
            src="./img/logistica.png"
            alt="logo prefeitura">

    </div>
</a>
<p class="m-title">INFORME <br> DE ROTA</p>
</div>

<div class="bt">
<a class="link-bt" href="https://lookerstudio.google.com/reporting/8afa928a-e59f-4867-8941-6d4296d17bc2/page/9XVCE" target="_blank">
    <div>
        <img class="logo-pln"
            src="./img/Not.png"
            alt="Notificação">

    </div>
</a>
<p class="m-title">NOTIFICAÇÕES E SANÇÕES</p>
</div>


<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1E9WnXNCCtgfXAoG1-v1V3jVPMqFV1JZC1SdaXaGcm5Q/edit#gid=835047668" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">RESPONSABILIDADE <br>TÉCNICA</p>
</div>

    </div>`;
}

