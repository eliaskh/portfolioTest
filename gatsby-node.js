/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
    const result = await graphql(`
        {
            topFeatures: allStrapiTopFeatures {
                nodes {
                    slug
                }
            }

            ourFeatures: allStrapiOurFeatures {
                nodes {
                    slug
                }
            }

            projects: allStrapiProjects {
                nodes {
                    slug
                }
            }

            blogs: allStrapiBlogs {
                nodes {
                    slug
                }
            }

            services: allStrapiServices {
                nodes {
                    slug
                }
            }
        }
    `)

    // redirect to specific path 
    // createRedirect({
    //     fromPath: `/`,
    //     toPath: `/hosting`,
    //     redirectInBrowser: true,
    //     isPermanent: true,
    // })
    // console.log(result.data)
    //

    result.data.topFeatures.nodes.forEach(feature => {
        createPage({
            path: `/topfeatures/${feature.slug}`,
            component: path.resolve(`src/templates/topfeature-details-template.js`),
            context: {
                slug: feature.slug,
            },
        })
    })

    result.data.ourFeatures.nodes.forEach(featureinfo => {
        createPage({
            path: `/features/${featureinfo.slug}`,
            component: path.resolve(`src/templates/feature-details-template.js`),
            context: {
                slug: featureinfo.slug,
            },
        })
    })

    result.data.projects.nodes.forEach(project => {
        createPage({
            path: `/projects/${project.slug}`,
            component: path.resolve(`src/templates/project-details-template.js`),
            context: {
                slug: project.slug,
            },
        })
    })

    result.data.blogs.nodes.forEach(blog => {
        createPage({
            path: `/blogs/${blog.slug}`,
            component: path.resolve(`src/templates/blog-details-template.js`),
            context: {
                slug: blog.slug,
            },
        })
    })

    result.data.services.nodes.forEach(service => {
        createPage({
            path: `/services/${service.slug}`,
            component: path.resolve(`src/templates/service-details-template.js`),
            context: {
                slug: service.slug,
            },
        })
    })
}