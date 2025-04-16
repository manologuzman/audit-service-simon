'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">audit-service documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AlertModule.html" data-type="entity-link" >AlertModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' : 'data-bs-target="#xs-controllers-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' :
                                            'id="xs-controllers-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' }>
                                            <li class="link">
                                                <a href="controllers/AlertController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' : 'data-bs-target="#xs-injectables-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' :
                                        'id="xs-injectables-links-module-AlertModule-3899a250fd9057b3ad3cdc16a9f628b3f37b0846caa6626e00e61bc1f8c289a1ca051f2ae8d65c71b331dffd6c6a84dfff306fdb25b213c1c094b618961cb267"' }>
                                        <li class="link">
                                            <a href="injectables/AlertPrismaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertPrismaRepository</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CreateAlertUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateAlertUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' :
                                            'id="xs-controllers-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' :
                                        'id="xs-injectables-links-module-AppModule-2b39eaf0b9e4e327e1e7bba7b1f41a984168cf13d5d3368ec216247221aa5b4dac15f4ffc035ff585fa649eb9aac66e2cb8098413f8b8a91b44c168e43841ba9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GeolocationModule.html" data-type="entity-link" >GeolocationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' : 'data-bs-target="#xs-controllers-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' :
                                            'id="xs-controllers-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' }>
                                            <li class="link">
                                                <a href="controllers/GeolocationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeolocationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' : 'data-bs-target="#xs-injectables-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' :
                                        'id="xs-injectables-links-module-GeolocationModule-bb5382ab53f0f455f3b2ccf5eec16246b35164bc529bd4d9217a4b84f07d7d901c6de04eba2f6e1422be66dee264e16d166b7fa055eaae08a6c025fd9950863a"' }>
                                        <li class="link">
                                            <a href="injectables/CreateGeolocationUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateGeolocationUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoutingModule.html" data-type="entity-link" >RoutingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' : 'data-bs-target="#xs-controllers-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' :
                                            'id="xs-controllers-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' }>
                                            <li class="link">
                                                <a href="controllers/RoutingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoutingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' : 'data-bs-target="#xs-injectables-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' :
                                        'id="xs-injectables-links-module-RoutingModule-91ba8f81411507cca864d5439d40a513c8ebfc8d1dd509d47d4c5a03f2df001d44b8350959af6aaf68b06749d3fce3090f6e90b8ea136c090e0f15f33f515a6d"' }>
                                        <li class="link">
                                            <a href="injectables/CreateRoutingUseCase.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateRoutingUseCase</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RoutingPrismaRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoutingPrismaRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AlertController.html" data-type="entity-link" >AlertController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/GeolocationController.html" data-type="entity-link" >GeolocationController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RoutingController.html" data-type="entity-link" >RoutingController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link" >Alert</a>
                            </li>
                            <li class="link">
                                <a href="classes/Coordinates.html" data-type="entity-link" >Coordinates</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAlertDto.html" data-type="entity-link" >CreateAlertDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateGeolocationDto.html" data-type="entity-link" >CreateGeolocationDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Geolocation.html" data-type="entity-link" >Geolocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/Routing.html" data-type="entity-link" >Routing</a>
                            </li>
                            <li class="link">
                                <a href="classes/RoutingDto.html" data-type="entity-link" >RoutingDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertPrismaRepository.html" data-type="entity-link" >AlertPrismaRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateAlertUseCase.html" data-type="entity-link" >CreateAlertUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateGeolocationUseCase.html" data-type="entity-link" >CreateGeolocationUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateRoutingUseCase.html" data-type="entity-link" >CreateRoutingUseCase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoutingPrismaRepository.html" data-type="entity-link" >RoutingPrismaRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAlertRepository.html" data-type="entity-link" >IAlertRepository</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRoutingRepository.html" data-type="entity-link" >IRoutingRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});