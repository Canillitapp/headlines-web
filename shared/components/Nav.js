import React from 'react';
import { Link } from '../routes'
import vars from '../variables';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link route="/">
          <a>
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link route="/popular">
          <a
            href="/popular"
            onClick={(e) => { this.popularClick(e) }}
          >
            Popular
          </a>
        </Link>
      </li>
      <li>
        <a
          href={'/category/4'}
          onClick={(e) => { this.categoryClick(e, 4) }}
        >
          Espectáculos
        </a>
      </li>
      <li>
        <a
          href={'/category/3'}
          onClick={(e) => { this.categoryClick(e, 3) }}
        >
          Tecnología
        </a>
      </li>
      <li>
        <a
          href={'/category/2'}
          onClick={(e) => { this.categoryClick(e, 2) }}
        >
          Internacionales
        </a>
      </li>
      <li>
        <a
          href={'/category/1'}
          onClick={(e) => { this.categoryClick(e, 1) }}
        >
          Política
        </a>
      </li>
    </ul>
    <style jsx>{`
      nav {
        width: 100%;
        padding-top: 24px;
        margin-left: auto;
      }

      @media screen and (min-width: 1024px) {
        nav {
          width: auto;
          padding-top: 0;
        }
      }

      nav > ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 6px;
        grid-row-gap: 6px;
      }

      nav > ul li {
        flex: 1 1 45%;
      }

      @media screen and (min-width: 768px) {
        nav > ul {
          display: flex;
        }

        nav > ul li {
          flex: 1 1 auto;
        }

        nav > ul > li:not(:last-child) {
          margin-right: 14px;
        }
      }


      nav > ul > li > a {
        display: flex;
        justify-content: center;
        padding: 7px 5px;
        border: 2px solid ${vars.colors.coralPink};
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0.19px;
        color: ${vars.colors.coralPink};
        transition: color .25s ease-in;
      }

      nav > ul > li > a:hover,
      nav > ul > li > a:focus {
        color: ${vars.colors.coralPink};
        transition: color .25s ease-out;
      }

      @media screen and (min-width: 768px) {
        nav > ul > li > a {
          font-size: 16px;
          border: none;
          color: ${vars.colors.slate};
        }
      }
    `}</style>
  </nav>
);

export default Nav;
