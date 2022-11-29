import { browser, element, by} from 'protractor';

describe('Prueba regitro Cliente',()=>{
    beforeEach(()=>{
        browser.get("./registro-cliente");
    });
    it("Titulo de Registro cliente se muestra correctamente",()=>{
        expect(element(by.css(".regCliente ion-title")).getText()).toContain("Registro Cliente");
    });
});