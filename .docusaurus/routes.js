import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mapping-website/blog',
    component: ComponentCreator('/mapping-website/blog', '3cf'),
    exact: true
  },
  {
    path: '/mapping-website/blog/archive',
    component: ComponentCreator('/mapping-website/blog/archive', '93b'),
    exact: true
  },
  {
    path: '/mapping-website/blog/first-blog-post',
    component: ComponentCreator('/mapping-website/blog/first-blog-post', '255'),
    exact: true
  },
  {
    path: '/mapping-website/blog/long-blog-post',
    component: ComponentCreator('/mapping-website/blog/long-blog-post', '0da'),
    exact: true
  },
  {
    path: '/mapping-website/blog/mdx-blog-post',
    component: ComponentCreator('/mapping-website/blog/mdx-blog-post', '9a1'),
    exact: true
  },
  {
    path: '/mapping-website/blog/tags',
    component: ComponentCreator('/mapping-website/blog/tags', '97c'),
    exact: true
  },
  {
    path: '/mapping-website/blog/tags/docusaurus',
    component: ComponentCreator('/mapping-website/blog/tags/docusaurus', '867'),
    exact: true
  },
  {
    path: '/mapping-website/blog/tags/facebook',
    component: ComponentCreator('/mapping-website/blog/tags/facebook', 'dd3'),
    exact: true
  },
  {
    path: '/mapping-website/blog/tags/hello',
    component: ComponentCreator('/mapping-website/blog/tags/hello', '87e'),
    exact: true
  },
  {
    path: '/mapping-website/blog/tags/hola',
    component: ComponentCreator('/mapping-website/blog/tags/hola', '9a4'),
    exact: true
  },
  {
    path: '/mapping-website/blog/welcome',
    component: ComponentCreator('/mapping-website/blog/welcome', '6f8'),
    exact: true
  },
  {
    path: '/mapping-website/markdown-page',
    component: ComponentCreator('/mapping-website/markdown-page', '51c'),
    exact: true
  },
  {
    path: '/mapping-website/docs',
    component: ComponentCreator('/mapping-website/docs', 'f04'),
    routes: [
      {
        path: '/mapping-website/docs/category/setting-up',
        component: ComponentCreator('/mapping-website/docs/category/setting-up', '08d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/mapping-website/docs/intro',
        component: ComponentCreator('/mapping-website/docs/intro', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/mapping-website/docs/tutorial-basics/adding-spooner',
        component: ComponentCreator('/mapping-website/docs/tutorial-basics/adding-spooner', 'e2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/mapping-website/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/mapping-website/docs/tutorial-basics/congratulations', '174'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/mapping-website/docs/tutorial-basics/directory',
        component: ComponentCreator('/mapping-website/docs/tutorial-basics/directory', '842'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/mapping-website/docs/tutorial-basics/running-deployer',
        component: ComponentCreator('/mapping-website/docs/tutorial-basics/running-deployer', '5dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/mapping-website/',
    component: ComponentCreator('/mapping-website/', '788'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
