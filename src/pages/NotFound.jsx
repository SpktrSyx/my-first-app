import React from 'react';
import { Layout, ArticleList } from '../components';

const NotFound = (props) =>
  <Layout>
    <h1>Erreur 404</h1>
    <p>Cette page n'existe pas encore....</p>
    <ArticleList />
  </Layout>
;

export default NotFound;