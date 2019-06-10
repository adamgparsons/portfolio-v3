// import React from 'react';
// import PropTypes from 'prop-types';
// import {graphql} from 'gatsby';
// import Hero from '../components/Hero';
// import Layout from '../components/Layout';
// import CaseStudyCollection from '../components/CaseStudyCollection';

// export const IndexPageTemplate = ({intro, title}) => (
//   <div>
//     <Hero intro={intro} />
//     <CaseStudyCollection />
//   </div>
// );

// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   intro: PropTypes.shape({
//     tagline: PropTypes.string,
//     description: PropTypes.string
//   })
// };

// const IndexPage = ({data}) => {
//   const {frontmatter} = data.markdownRemark;

//   return (
//     <Layout>
//       <IndexPageTemplate
//         image={frontmatter.image}
//         title={frontmatter.title}
//         intro={frontmatter.intro}
//       />
//     </Layout>
//   );
// };

// IndexPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object
//     })
//   })
// };

// export default IndexPage;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
//       frontmatter {
//         title
//         intro {
//           tagline
//           description
//         }
//       }
//     }
//   }
// `;
