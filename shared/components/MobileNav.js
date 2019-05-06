import React from 'react';
import { Link } from '../routes'
import vars from '../variables';
import SearchField from './SearchField'

const categories = [
  {
    name: 'Política',
    slug: 'politica',
    id: 1,
  },
  {
    name: 'Internacionales',
    slug: 'internacionales',
    id: 2,
  },
  {
    name: 'Tecnología',
    slug: 'tecnologia',
    id: 3,
  },
  {
    name: 'Espectáculos',
    slug: 'espectaculos',
    id: 4,
  },
  {
    name: 'Deportes',
    slug: 'deportes',
    id: 5,
  },
]

const MobileNav = ({ handleSearchSubmit }) => (
  <nav>
    <SearchField handleSearchSubmit={handleSearchSubmit} />
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link route="/">
          <a>Home</a>
        </Link>
      </li>
      <li className="nav-list-item">
        <Link route="/popular">
          <a>Popular</a>
        </Link>
      </li>
      { categories.map(({ id, name, slug }) => (
        <li key={id} className="nav-list-item">
          <Link
            route="category-slug"
            params={{ category: id, slug }}
          >
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <Link href="/download">
      <a className="download-btn" href="/download">
        Descargar App
      </a>
    </Link>
    <style jsx global>{`
      @media screen and (max-width: 768px){
        body {
          overflow: hidden;
        }
      }
    `}</style>
    <style jsx>{`
      nav {
        display: block;
        width: 100%;
        position: absolute;
        right: 0;
        top: 76px;
        background-color: white;
        overflow: initial;
        z-index: 100;
        transition: all .35s ease-in;
      }

      nav:before {
        content: '';
        position: absolute;
        top: 76px;
        left: 0;
        width: 100%;
        height: calc(100vh - 76px);
        z-index: -1;
        background-color: rgba(154, 154, 154, 0.35);
      }

      @media screen and (min-width: 1200px) {
        nav {
          display: none;
        }
      }

      .nav-list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 15px 0;
        background-color: white;
      }

      .nav-list-item {
        flex: 0 0 50%;
      }

      .nav-list-item > a {
        display: flex;
        justify-content: flex-start;
        padding: 15px 20px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.19px;
        color: #222228;
        transition: color .25s ease-in;
      }

      .nav-list-item > a:hover,
      .nav-list-item > a:focus {
        color: ${vars.colors.coralPink};
        transition: color .25s ease-out;
      }

      @media screen and (min-width: 768px) {
        .nav-list-item > a {
          justify-content: center;
          padding: 12px 24px;
          font-size: 16px;
          border: none;
        }
      }

      .download-btn {
        display: block;
        width: 100%;
        padding: 15px 0;
        background-color: ${vars.colors.coralPink};
        font-size: 16px;
        font-weight: 500;
        color: white;
        text-align: center;
      }
    `}</style>
  </nav>
);

export default MobileNav;
