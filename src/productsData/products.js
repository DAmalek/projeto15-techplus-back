const products =[
    {
        id: 0,
        name: "Notebook Samsung Dual Core",
        image: "https://imgs.casasbahia.com.br/55020335/1xg.jpg?imwidth=500",
        price: 3500,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Samsung"
    },
    {
        id: 1,
        name: "Notebook Dell XPS 13 Plus",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320t-cnb-00005ff090-gy.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=402&qlt=100,1&resMode=sharp2&size=402,402&chrss=full",
        price: 9900,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Dell"
    },
    {
        id: 2,
        name: "Notebook Samsung S51 256GB",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyKVSiEeJ6Ktqczv9yjX-VtU-LEAcd0ny9ofloij7AY9RpmDYB1_9soK8x0bHaB4EGzY&usqp=CAU",
        price: 5700,
        stock: 60000,
        type: "notebook",
        selected: 0,
        brand: "Samsung"
    },
    {
        id: 3,
        name: "Notebook Lenovo ideapad",
        image: "https://imgs.via.com.br/55022457/1xg.jpg?imwidth=292",
        price: 4300,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Lenovo"
    },
    {
        id: 4,
        name: "Macbook Pro M1 2020",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi84V-1GeppFBDCtDgBNrQQ3-1NZpG4ePi1Q&usqp=CAU",
        price: 11100,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Apple"
    },
    {
        id: 5,
        name: "Notebook Acer Aspire",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6cwkl4ShrL0vD36aVIaXczB3iTEB_1DB0jBqKxPmq0-O0yROebA9BkGTc0OCNd82dkoDMlMDjKJynN-SYohVQIhOOkw_H-f7XTJK7NYUP-QsmsFcfNQ6p&usqp=CAE",
        price: 2300,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Acer"
    },
    {
        id: 6,
        name: "Notebook Gamer Acer Nitro 5",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRC1-RYpApkWhfOcP8Y5K4Xp-pXq9nXXJieg9I0iggN_jizZhHLaJFvd0HyUMWobysH12K2c2TS92-n_99Gdiz_ru_aiupnOgFUANv38Mfm20v7F6CI-Stm&usqp=CAE",
        price: 5600,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Acer"
    },
    {
        id: 7,
        name: "Notebook HP",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQpVUCvgFlxdtr_fg6d85fn8M88QymuKS6ZrywfGyIIPzxiy3wmldxzZ1y-Y8XlpGpDq4qnHBQ5SVIesgf1g30sVUP5R1-9i0brKOgoaUzyusR8IhNoNZU7OQ&usqp=CAE",
        price: 3400,
        stock: 60001,
        type: "notebook",
        selected: 0,
        brand: "HP"
    },
    {
        id: 8,
        name: "Notebook Asus Vivobook",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT05k1Yv-zrbrHB0xl_Q4GoBEud6MydICn9KveNRaog8vkQUICp6TUogK1MbqMUPq2jgF_VBCmMwuW1arv2tPUEF-oWCPAUX7ux9L-Z82G-Octdupysk_UVlg&usqp=CAE",
        price: 3005,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Asus"
    },
    {
        id: 9,
        name: "Notebook Gamer Asus Tuf",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0HfEK4DwvJGgSNYqMuQtc0OWRhD1OqLIGt7mgGmGOklXhOFCnQPx1qNiNDYkKlRSIxGnzx2TIfD89yoaXMoa-Xb6R4xDJXYRzgRU0vwyC1CxKCCS57ANi&usqp=CAE",
        price: 6300,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Asus"
    },
    {
        id: 10,
        name: "Notebook Asus Zenbook",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQYsRNL_LE0zTq0Yp01_cbXZbP8LusRmpOr_RiuZBfCq4uq2CSGkstaDNZQKsL9-q0dHbHtgOGH7ms_TlTh0OtQEiYjoQS9yxawtQUDlYGMYF9Xq8QfFNdpLw&usqp=CAE",
        price: 9300,
        stock: 6000,
        type: "notebook",
        selected: 0,
        brand: "Asus"
    },
    {
        id: 11,
        name: "Iphone 14",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQU8GI1SrwoKGWSNS1zDIrKxWkmNK1umG78rvK6RAxN1OeaCQji-SaJzORxuWl4RRg7ZXNkOwpn0OlWmP1_CTcu0QcHaKvM0s8weKCcYVYeBQFcVBAInemU&usqp=CAE",
        price: 6010,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Apple"
    },
    {
        id: 12,
        name: "Iphone 14 Pro",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdXs6RWoD8oXl0AokRPfC0chj12is3XwGsea6B165ky80nE_O2bX8OTfViCW7fLgYWdw9ikRn3xPIQMGLNjXSae1bjSW17ggk7EUiOy7QA&usqp=CAE",
        price: 9500,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Apple"
    },
    {
        id: 13,
        name: "Iphone 13 Pro Max",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRFyFFRgUgBdxiMEwrbLEveGS58oyMdppjBK9vNa2ztwR2SnEoRuyCP7vAQhNHsNtieJFt5YEok3GNQqvObR7cU4WAyU4xM-GzgWW5Zr_N_nEbBh8pgCzrJbA&usqp=CAE",
        price: 8550,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Apple"
    },
    {
        id: 14,
        name: "Samsung Galaxy M13",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvXQ0DeHTieUbxaXUhep4O3ZfuA2n-KaKPDfLte_GpG3bP5v71jO3Hf_SYDMs74MTpbnQfP48Lx6d7jGwHPCmyeP8zCjBizBlJFot50lu4uOxtyUTN_WDz&usqp=CAE",
        price: 700,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Samsung"
    },
    {
        id: 15,
        name: "Samsung Galaxy Z Flip4",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtRy5SnjADs_llLXd9UA4svTMXXasqPQ2tFIUb3Fvmbdr4I5YK4_JDop40L8ZgvkmHL02ILegiarrfEAQAMbnuVMeE9oeGSLDUPYuQPKDcXAXZpSECgA1dQg&usqp=CAE",
        price: 6300,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Samsung"
    },
    {
        id: 16,
        name: "Samsung Galaxy S21",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYy9shZLfjzDZn7QG8fqrLiL_brID8oaykClwtEYmgLPPj9EsOgLDpc-K4lIeUD-QP9QHB6YIbMItmvUEDJuvmC6FYBeL0n5E1xrVPUUrQ5pwWGl2DNNgdyA&usqp=CAE",
        price: 4300,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Samsung"
    },
    {
        id: 17,
        name: "Samsung Galaxy Note 10+",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQGd9uoJsuqzRhf-EQlN9QdJL6mlR_lyGv7G0Lcyk3Rkd_KWYRJurbeKVROZLDmonZ6ETP7TUhtp8WzXt6mhB0P9DtC91GijStbEYJGlSsLhF2uA6qvcuS9xw&usqp=CAE",
        price: 6000,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Samsung"
    },
    {
        id: 18,
        name: "Celular Redmi 10",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQWp96R9x23i_jcaDe6_3Lbd68srzsPhXT2jGXz8QC41m7j9AmzK64l-ieHEpAOvPYjHzOtSIFIvakP8fl9EqNBF6QEeaQ9k-DP2LosVYKYIM0bUsQu23hdow&usqp=CAE",
        price: 1080,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Xiaomi"
    },
    {
        id: 19,
        name: "Smartphone Xiaomi 12s Ultra",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSITqhnY2v8Y6IMh0lKSmNesN5EbGpyKrNmvaTOiV_KW3MmdxN0GSuhrGOw3RAfMwXX743DlhF0g6e57peVWq0PXHUMp32DGtdzUMAN-kgXbB2bovA2f3FN&usqp=CAE",
        price: 8800,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Xiaomi"
    },
    {
        id: 20,
        name: "Smartphone Motorola E32",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSU4SuStmHPyBLKTlA2zWR4A5EhST5E2hdlEOfWAplKvGqj38tS1yafvTm-VFl8zp-VBooYKCmwQk67ibRxDZNpfR6eQujfRu6Qcb47BEOK&usqp=CAE",
        price: 800,
        stock: 60000,
        type: "celular",
        selected: 0,
        brand: "Motorola"
    },
    {
        id: 21,
        name: "Smartphone Motorola Moto G60S",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS62kMOa0eSO578mwF985XhUIKmQU8qhUpTSGEBqXJiRqV5YRTzHYqfA4kYd-zuRErahh9iuFrPk-zL58I9aswO0Y3yXpAF7QO7XcIl4cSBZuk-AvCuO1R-gw&usqp=CAE",
        price: 1600,
        stock: 6000,
        type: "celular",
        selected: 0,
        brand: "Motorola"
    },
    {
        id: 22,
        name: "Headphone Philips Wireless BT",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3loXu4LhvP01FuC9ukq3BuTTc8xcDtZ6gZr2ipyssx106KbapUsx6JROXXfAtVfswjFiXTy46h4VNNp_F03Zi8I4mtDjCeh0_pE5QSIM&usqp=CAE",
        price: 89,
        stock: 60001,
        type: "Acessório",
        selected: 0,
        brand: "Philips"
    },
    {
        id: 23,
        name: "Headphone Behringer Bh 470",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRLLEsTrF_e1gNO9Gpu57jVIgM0W-97wv_aEvn3YCH-MxhwP5KXR40XXWF2mF9zWS1yK_gOoeY58jO4bGKcWK5W-TRw6MKln7ZzemNwf8nKkwknIpEgTMcQ&usqp=CAE",
        price: 440,
        stock: 6000,
        type: "Acessório",
        selected: 0,
        brand: "Behringer"
    },
    {
        id: 24,
        name: "Kit Teclado Mecânico + Mouse + Headset Pro",
        image: "https://img.kalunga.com.br/fotosdeprodutos/229296d.jpg",
        price: 1890,
        stock: 6000,
        type: "Acessório",
        selected: 0,
        brand: "Logitech"
    },
    {
        id: 25,
        name: "Headset Gamer JBL Quantum 610",
        image: "https://images.kabum.com.br/produtos/fotos/369991/headset-gamer-sem-fio-jbl-quantum-610-wireless-driver-40mm-preto-28913608_1659464783_gg.jpg",
        price: 700,
        stock: 6000,
        type: "Acessório",
        selected: 0,
        brand: "Behringer"
    },
    {
        id: 26,
        name: "Kit Teclado e Mouse Sem Fio Logitech MK540",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSb2C1omilVacOgo-NoFrhkWkZ739BNHgFwgpxoxuPVHgehv58x4mEumSuIFx6PdROCykL4MGPkyqt25XrGj54pHIIkzErWiiJugyuvlkofOSwu80yHSCMQ&usqp=CAE",
        price: 300,
        stock: 60005,
        type: "Acessório",
        selected: 0,
        brand: "Logitech"
    },
    {
        id: 27,
        name: "Kit Teclado e Mouse Dell Sem Fio KM636",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1PnF3HLy-lj2gnzrCoEgpAmkB3Z6sPydYBXtlfhaWDSg8z3gs3JY3kr7drkeglUVUEZ7TxGDfO55CL2MIW5dv61VUQ6K_Gwejm9XmAGpx5ld2wihYeCdasA&usqp=CAE",
        price: 140,
        stock: 60000,
        type: "Acessório",
        selected: 0,
        brand: "Dell"
    },
    {
        id: 28,
        name: "Headset Gamer Sem Fio Logitech G935",
        image: "https://images.kabum.com.br/produtos/fotos/100275/headset-gamer-logitech-g935-sem-fio-rgb-som-surround-7-1-drivers-pro-g-de-50mm_headset-gamer-logitech-g935-sem-fio-rgb-som-surround-7-1-drivers-pro-g-de-50mm_1550064003_gg.jpg",
        price: 1100,
        stock: 6000,
        type: "Acessório",
        selected: 0,
        brand: "Logitech"
    },
    {
        id: 29,
        name: "Webcam HD Logitech C270",
        image: "https://m.media-amazon.com/images/I/519vmGo5jYL._AC_SX679_.jpg",
        price: 139,
        stock: 60000,
        type: "Acessório",
        selected: 0,
        brand: "Logitech"
    },
    {
        id: 30,
        name: "Webcam HD Logitech C525",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSzFCFy96q4EcGCg7xmv6qeAsu16MnCOYipsbIk80UXWDQGyH37hlILM5fzGoefNC3zDBGLoQVSa3_Fvmu1kiFiuVNyN3YPVCAyOnTrqfsW&usqp=CAE",
        price: 74,
        stock: 60009,
        type: "Acessório",
        selected: 0,
        brand: "Logitech"
    },
    {
        id: 31,
        name: "Webcam LifcCam Cinema",
        image: "https://img.kalunga.com.br/fotosdeprodutos/144781d.jpg",
        price: 499,
        stock: 6000,
        type: "Acessório",
        selected: 0,
        brand: "Microsoft"
    },

]

export default products;