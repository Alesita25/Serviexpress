import { browser,element,by, protractor, ElementFinder } from "protractor";

describe('Prueba1',()=>{
    beforeEach(()=>{
        browser.driver.manage().window().setSize(390, 844);
        browser.get("/")

    });
    it("Titulo de Registro cliente se muestra correctamente",()=>{
        expect(element(by.name("regCliente")).getText()).toContain("Registro Cliente");
    });

    it("Titulo de Registro cliente incorrecto",()=>{
        expect(element(by.name("regCliente")).getText()).toContain("Hola Pepito");
    });

    it("Completar Campo RUT",()=>{
        expect(element(by.name("rut")).click());
        expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[1]/ion-input/input')).sendKeys('178601903'));   
        browser.driver.sleep(500);
    });

    it("Completar Campo Nombre",()=>{
        expect(element(by.name("name")).click());
        expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[2]/ion-input/input')).sendKeys('Alejandra'));   
        browser.driver.sleep(500);
    });

    it("Completar Campo Apellido",()=>{
        expect(element(by.name("apellido")).click());
        expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[3]/ion-input/input')).sendKeys('Aranguiz'));   
        browser.driver.sleep(500);
    });

    it("Completar Campo Fecha Nacimiento",()=>{
        expect(element(by.name("fechaNacimiento")).click());
        expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[4]/ion-input/input')).sendKeys('05091991'));   
        browser.driver.sleep(500);
    });

    // it("Completar Campo Email",()=>{
    //     expect(element(by.name("email")).click());
    //     expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[5]/ion-input/input')).sendKeys('alej.aranguiz@duocuc.cl'));   
    //     browser.driver.sleep(500);
    // });

    // it("Completar Campo Dirección Particular",()=>{
    //     expect(element(by.name("direccionParticular")).click());
    //     expect(element(by.xpath('/html/body/app-root/ion-app/ion-router-outlet/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[6]/ion-input/input')).sendKeys('prueba 123'));   
    //     browser.driver.sleep(500);
    // });

    // it("Completar Campo Dirección Comercial",()=>{
    //     expect(element(by.name("direccionComercial")).click());
    //     expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[7]/ion-input/input')).sendKeys('prueba 456'));   
    //     browser.driver.sleep(500);
    // });

    // it("Completar Campo Celular",()=>{
    //     expect(element(by.name("celular")).click());
    //     expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[8]/ion-input/input')).sendKeys('969099285'));   
    //     browser.driver.sleep(500);
    // });

    // it("Completar Campo Telefono Comercial",()=>{
    //     expect(element(by.name("telefonoComercial")).click());
    //     expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[9]/ion-input/input')).sendKeys('228432755'));   
    //     browser.driver.sleep(500);
    // });

    // it("Completar Campo Contraseña",()=>{
    //     expect(element(by.name("password")).click());
    //     expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[10]/ion-input/input')).sendKeys('22334455'));   
    //     browser.driver.sleep(500);
    // });

    // it("Completar Campo Confirmar contraseña",()=>{
    //     expect(element(by.name("confirm")).click());
    //     expect(element(by.xpath('//*[@id="content1"]/app-registro-cliente/ion-content/form/ion-grid/ion-row/ion-col/div[2]/ion-item[11]/ion-input/input')).sendKeys('22334455'));   
    //     browser.driver.sleep(500);
    // });



    
});