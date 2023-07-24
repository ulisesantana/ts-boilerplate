# ts-boilerplate

<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top" name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About the project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li><a href="#usage">Usage</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About the template
<div id="about-the-template" name="about-the-template"></div>

This is a template repository focused for practicing [katas](https://kata-log.rocks). Has the basics for start working with TDD.

You can also use this template for practicing some [design patterns](https://refactoring.guru/design-patterns) or just as a sandbox for testing an idea.



### Built With
<div id="built-with" name="built-with"></div>

* [![ESLint][ESLint]][ESLint-url]
* [![TypeScript][TypeScript]][TypeScript-url]
* [![Vitest][Vitest]][Vitest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
<div id="getting-started" name="getting-started"></div>

Create your new repository using this as template and once you have your repository cloned on your pc just run `npm install` for installing all the dependencies.


<!-- USAGE EXAMPLES -->
## Usage
<div id="usage" name="usage"></div>

This template come with a handful list of scripts:
- `"build"`: build the project using TypeScript. The output directory is `/build`.
- `"lint"`: Run eslint following [standard rules](https://standardjs.com/rules.html).
- `"lint:fix"`: Fix all simple fixes as spaces, quotes and stuff like that.
- `"prestart"`: Trigger build every time you run `npm start`. 
- ️`"start"`: Run `build/index.js`. A build is generated right before running triggered by `"prestart"` script.. 
- ️`"test"`: Run all test in `src` with [vitest](https://vitest.dev). 
- ️`"test:coverage"`: Run test coverage. 
- ️`"test:watch"`: Run all test in `src` and keep watching for file changes. 
- ️`"test:watch:ui"`: Same as `"test:watch"`, but run a web server for checking test results on a browser.

The idea is to use mostly the scripts starting with `test`. You can use the `lint` scripts or let your IDE use the `.eslintrc.json` config.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ulisesantana/ts-boilerplate.svg?style=for-the-badge
[contributors-url]: https://github.com/ulisesantana/ts-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ulisesantana/ts-boilerplate.svg?style=for-the-badge
[forks-url]: https://github.com/ulisesantana/ts-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/ulisesantana/ts-boilerplate.svg?style=for-the-badge
[stars-url]: https://github.com/ulisesantana/ts-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/ulisesantana/ts-boilerplate.svg?style=for-the-badge
[issues-url]: https://github.com/ulisesantana/ts-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/ulisesantana/ts-boilerplate.svg?style=for-the-badge
[license-url]: https://github.com/ulisesantana/ts-boilerplate/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ulisesantana
[TypeScript]: https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://typescriptlang.org
[Vitest]: https://img.shields.io/badge/vitest-729b1a?style=for-the-badge&logo=vitest&logoColor=white
[Vitest-url]: https://vitest.dev
[ESLint]: https://img.shields.io/badge/eslint-341BAB?style=for-the-badge&logo=eslint&logoColor=white
[ESLint-url]: https://eslint.org

