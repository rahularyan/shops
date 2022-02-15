const { GridsomeService } = require('pinelab-storefront-client');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = async function (api) {
  /*
  api.chainWebpack(config => {
    config
      .plugin('BundleAnalyzerPlugin')
      .use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }]);
  });
*/

  api.createPages(async ({ createPage, graphql }) => {
    const gridsome = new GridsomeService(graphql);
    const {
      products,
      availableCountries,
      collections: allCollections,
      productsPerCollection,
    } = await gridsome.getShopData();

    const featuredProduct = products.find((p) =>
      p.facetValues.find((value) => value.code === 'main-feature')
    );

    // Get toplevel collections
    const collections = gridsome.unflatten(allCollections);

    // Breadcrumb
    const Home = '/';
    const Winkelmand = '/cart/';
    const Checkout = '/cart/checkout';

    // ----------------- Index ---------------------
    createPage({
      path: '/',
      component: './src/templates/Index.vue',
      context: {
        products,
        featuredProduct,
        collections,
      },
    });

    // ----------------- ProductDetail ---------------------
    products.forEach((product) => {
      const collectionMap = productsPerCollection.find((collectionMap) =>
        collectionMap.products.find((p) => p.slug === product.slug)
      );
      const breadcrumb = {
        Home,
      };
      if (collectionMap && collectionMap.collection) {
        breadcrumb[
          collectionMap.collection.name
        ] = `/categorie/${collectionMap.collection.slug}/`;
      }
      breadcrumb[product.name] = product.slug;
      createPage({
        path: `/product/${product.slug}`,
        component: './src/templates/Product.vue',
        context: {
          collections,
          product,
          breadcrumb,
        },
      });
    });

    // ----------------- Collections ---------------------
    productsPerCollection.forEach(
      ({ products: productsPerCollection, collection }) => {
        const breadcrumb = { Home };
        if (collection.parent.name !== '__root_collection__') {
          // Set parent collection in breadcrumb if not root
          breadcrumb[collection.parent.name] = collection.parent.slug;
          console.log('ddssdsd', collection.parent.name);
          console.log('fffff', collection.parent.slug);
        }
        breadcrumb[collection.name] = collection.slug;
        console.log(breadcrumb);
        createPage({
          path: `/categorie/${collection.slug}`,
          component: './src/templates/Collection.vue',
          context: {
            products: productsPerCollection,
            collection,
            collections,
            breadcrumb,
          },
        });
      }
    );

    // ----------------- Cart ---------------------
    createPage({
      path: '/cart/',
      component: './src/templates/Cart.vue',
      context: {
        collections,
        back: '/',
        breadcrumb: { Home, Winkelmand },
      },
    });

    // ----------------- Checkout ---------------------
    createPage({
      path: '/checkout/',
      component: './src/templates/Checkout.vue',
      context: { availableCountries, collections, hideNavBar: true },
    });

    // ----------------- Order confirmation ------------
    createPage({
      path: '/order/:code',
      component: './src/templates/Order.vue',
      context: {
        collections,
        back: '/',
      },
    });
  });
};
