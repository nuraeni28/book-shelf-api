const {
    addBookHandler, getAllBooksHandler, getBookIdHandler, editBookIdHandler, deleteBookIdHeandler
} = require('./handler');

const routes = [
    {
      method: 'POST',
      path: '/books',
      handler:addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler:getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler:getBookIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler:editBookIdHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler:deleteBookIdHeandler,
    },
  ];
   
  module.exports = routes;