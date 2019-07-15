import React from 'react';
import { Link } from '../routes'
import vars from '../variables'

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
        display: none;
        width: 100%;
        background-color: white;
        overflow: initial;
        z-index: 100;
        transition: all .35s ease-in;
      }

      @media screen and (min-width: 769px) {
        nav {
          display: block;
          position: relative;
          padding: 15px 0;
          margin: 0 auto;
          border-top: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
        }
      }

      .nav-list {
        display: flex;
        flex-wrap: wrap;
        padding: 15px 0;
        background-color: white;
      }

      @media screen and (min-width: 769px) {
        .nav-list {
          max-width: 1108px;
          padding: 0 20px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
      }

      .nav-list-item {
        flex: 0 0 50%;
      }

      @media screen and (min-width: 768px) {
        .nav-list {
          display: flex;
        }

        .nav-list-item {
          flex: initial;
        }

        .nav-list-item:not(:last-child) {
          margin-right: 14px;
        }
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


      @media screen and (min-width: 834px) {
        .nav-list-item > a {
          padding: 12px 14px;
        }
      }

      @media screen and (min-width: 1200px) {
        .nav-list-item > a {
          padding: 7px 5px;
          color: ${vars.colors.slate};
          background-color: transparent!important;
        }
      }

      .download-btn {
        display: block;
        width: 100%;
        padding: 15px 0;
        background-color: ${vars.colors.coralPink};
        font-size: 16px;
        font-weight: 500;
        text-align: center;
        color: white;
      }

      @media screen and (min-width: 1200px) {
        .download-btn {
          display: none;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
