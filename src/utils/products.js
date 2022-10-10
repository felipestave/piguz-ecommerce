export const products = [
  {id: 1, title:'Correa LV', category: 'man', description:'Correa de cuero  Louis Vuitton', price: 200, pictureUrl: 'https://cf.shopee.com.co/file/4947ce790fd4839952f54d162b49af1e', stock:'number'},
  {id: 2, title:'Reloj', category: 'man', description:'Rolex Limited Edition', price: 1000, pictureUrl: 'https://glauser.vteximg.com.br/arquivos/mens-watches_gmt_master_2-landscape.jpg?v=637713113028730000', stock:'number'},
  {id: 3, title:'Bolso dama', category: 'woman', description:'Bolso de cuero Chanel', price: 10000, pictureUrl: 'https://www.chanel.com/images//t_one///e_brightness:-3/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1920/maxi-classic-handbag-black-grained-calfskin-gold-tone-metal-grained-calfskin-gold-tone-metal-packshot-default-a58601y01864c3906-8855281074206.jpg', stock:'number'},
  {id: 4, title:'Zapatos dama', category: 'woman', description:'Botas Versace de cuero auténtico', price: 100, pictureUrl: 'https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbc0ded8c/original/90_1001783-DVT2P_1B00V_20_AevitasPlatformBoots-BootsandBooties-versace-online-store_1_4.jpg?sw=850&sh=1200&sm=fit', stock:'number'}
]

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.category === categoryId);
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
};