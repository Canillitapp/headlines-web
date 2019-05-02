import React from 'react';
import { Link } from '../routes'
import vars from '../variables';

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

const navColors = [
  '#FC4B63',
  '#9F539B',
  '#9562D3',
  '#3A537A',
  '#007CC1',
  '#007787',
  '#2F4858',
]

const Nav = () => (
  <nav>
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link route="/">
          <a>
            Home
          </a>
        </Link>
      </li>
      <li className="nav-list-item">
        <Link route="/popular">
          <a>
            Popular
          </a>
        </Link>
      </li>
      { categories.map(({ id, name, slug }) => (
        <li key={id} className="nav-list-item">
          <Link
            route="category-slug"
            params={{ category: id, slug }}
          >
            <a>
              {name}
            </a>
          </Link>
        </li>
      ))}
      </ul>
    <style jsx>{`
      nav {
        width: 100%;
        padding: 15px 0;
        overflow: scroll;
      }

      @media screen and (min-width: 1200px) {
        nav {
          width: auto;
          padding-top: 0;
          padding-bottom: 0;
        }
      }

      .nav-list {
        display: flex;
      }

      .nav-list-item {
        flex: 1 1 45%;
      }

      .nav-list-item:first-child {
        padding-left: 15px;
      }

      .nav-list-item:last-child {
        padding-right: 15px;
      }

      @media screen and (min-width: 1200px) {
        .nav-list-item:first-child,
        .nav-list-item:last-child {
          padding: 0;
        }
      }

      .nav-list-item:not(:last-child){
        margin-right: 16px;
      }

      .nav-list-item:nth-child(1) a {
        background-color: ${navColors[0]}
      }

      .nav-list-item:nth-child(2) a {
        background-color: ${navColors[1]}
      }

      .nav-list-item:nth-child(3) a {
        background-color: ${navColors[2]}
      }

      .nav-list-item:nth-child(4) a {
        background-color: ${navColors[3]}
      }

      .nav-list-item:nth-child(5) a {
        background-color: ${navColors[4]}
      }

      .nav-list-item:nth-child(6) a {
        background-color: ${navColors[5]}
      }

      .nav-list-item:nth-child(7) a {
        background-color: ${navColors[6]}
      }

      @media screen and (min-width: 768px) {
        .nav-list {
          display: flex;
        }

        .nav-list-item li {
          flex: 1 1 auto;
        }

        .nav-list-item:not(:last-child) {
          margin-right: 14px;
        }
      }


      .nav-list-item > a {
        display: flex;
        justify-content: center;
        padding: 8px 14px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.19px;
        background-color: #cecece;
        color: white;
        transition: color .25s ease-in;
      }

      .nav-list-item > a:hover,
      .nav-list-item > a:focus {
        color: ${vars.colors.coralPink};
        transition: color .25s ease-out;
      }

      @media screen and (min-width: 768px) {
        .nav-list-item > a {
          padding: 12px 24px;
          font-size: 16px;
          border: none;
        }
      }

      @media screen and (min-width: 1200px) {
        .nav-list-item > a {
          padding: 7px 5px;
          color: ${vars.colors.slate};
          background-color: transparent!important;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
