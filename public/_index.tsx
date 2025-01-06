/* eslint-disable */
/* This is a auto generated file for building the project */


import {Fragment, useState} from "react";
import type {FontAsset, ImageAsset} from "@webstudio-is/sdk";
import {useResource, useVariableState} from "@webstudio-is/react-sdk/runtime";
import {
    Fragment as Fragment_1,
    HtmlEmbed as HtmlEmbed,
    Box as Box,
    Slot as Slot,
    Button as Button,
    Link as Link,
    Image as Image,
    Heading as Heading,
    Paragraph as Paragraph,
    Text as Text,
    Body as Body,
    Bold as Bold,
    RichTextLink as RichTextLink,
    Italic as Italic
} from "@webstudio-is/sdk-components-react";
import {Collapsible as Collapsible, CollapsibleTrigger as CollapsibleTrigger, CollapsibleContent as CollapsibleContent} from "@webstudio-is/sdk-components-react-radix";


export const siteName = "BRM Portfolio";

export const favIconAsset: ImageAsset | undefined =
    {
        "id": "1491c7990f8891b607a89960b0072ecd5c95eab524ff26a4b38742f48308af9a",
        "name": "DigitalHealth2-favicon-01_VgtZqeLKVU-0qvMZDRWBH.png",
        "description": null,
        "projectId": "2fe50627-4ad7-46a7-9d96-5c70242f7219",
        "size": 35087,
        "type": "image",
        "format": "png",
        "createdAt": "2025-01-04T09:29:05.458+00:00",
        "meta": {"width": 1000, "height": 1000}
    };

// Font assets on current page (can be preloaded)
export const pageFontAssets: FontAsset[] =
    []

export const pageBackgroundImageAssets: ImageAsset[] =
    []


export const CustomCode = () => {
    return (<></>);
}


const Page = ({}: { system: any; }) => {
    return <Body
        className={"w-body w-body-1"}>
        <Box
            className={"w-box"}>
            <Slot>
                <Fragment_1>
                    <HtmlEmbed
                        code={"<style>\n  * {\n    /* Remove preset margins on everything so they can be applied where we want. */\n    margin: 0;\n    /* Make links scroll to their sections smoothly. */\n    scroll-behavior: smooth;\n  }\n</style>"}
                        className={"w-html-embed"}/>
                    <Box
                        className={"w-box w-wrapper"}>
                        <Box
                            tag={"nav"}
                            className={"w-box w-nav-desktop"}>
                            <Slot>
                                <Fragment_1>
                                    <Box
                                        className={"w-box w-primary"}>
                                        <Link
                                            target={"_top"}
                                            className={"w-link w-link-1"}>
                                            {"Home"}
                                        </Link>
                                        <Link
                                            href={"/"}
                                            className={"w-link w-link-2"}>
                                            {"Case Studies"}
                                        </Link>
                                        <Link
                                            className={"w-link w-link-3"}>
                                            {"Testimonials"}
                                        </Link>
                                        <Link
                                            className={"w-link w-link-4"}>
                                            {"Projects"}
                                        </Link>
                                        <Link
                                            className={"w-link w-link-12"}>
                                            {"Contact"}
                                        </Link>
                                    </Box>
                                    <Box
                                        className={"w-box w-socials"}>
                                        <Link
                                            aria-label={"LinkedIn"}
                                            href={"https://www.linkedin.com/in/briveramelo"}
                                            target={"_self"}
                                            className={"w-link w-linked-in"}>
                                            <HtmlEmbed
                                                code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                className={"w-html-embed w-icon"}/>
                                        </Link>
                                    </Box>
                                </Fragment_1>
                            </Slot>
                        </Box>
                        <Collapsible
                            className={"w-collapsible w-nav-mobile"}>
                            <CollapsibleTrigger>
                                <Button
                                    type={"button"}
                                    aria-label={"Open mobile menu"}
                                    className={"w-button w-button-1"}>
                                    <HtmlEmbed
                                        code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu\"><line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line></svg>"}
                                        className={"w-html-embed"}/>
                                </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent
                                data-ani={"expand"}
                                className={"w-collapsible-content w-webstudio-is-sdk-components-react-radix-collapsible-content"}>
                                <Box
                                    tag={"nav"}
                                    className={"w-box w-wrapper-1"}>
                                    <Slot>
                                        <Fragment_1>
                                            <Box
                                                className={"w-box w-primary"}>
                                                <Link
                                                    target={"_top"}
                                                    className={"w-link w-link-1"}>
                                                    {"Home"}
                                                </Link>
                                                <Link
                                                    href={"/"}
                                                    className={"w-link w-link-2"}>
                                                    {"Case Studies"}
                                                </Link>
                                                <Link
                                                    className={"w-link w-link-3"}>
                                                    {"Testimonials"}
                                                </Link>
                                                <Link
                                                    className={"w-link w-link-4"}>
                                                    {"Projects"}
                                                </Link>
                                                <Link
                                                    className={"w-link w-link-12"}>
                                                    {"Contact"}
                                                </Link>
                                            </Box>
                                            <Box
                                                className={"w-box w-socials"}>
                                                <Link
                                                    aria-label={"LinkedIn"}
                                                    href={"https://www.linkedin.com/in/briveramelo"}
                                                    target={"_self"}
                                                    className={"w-link w-linked-in"}>
                                                    <HtmlEmbed
                                                        code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 18 17\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M0 1.97499C0 1.40259 0.202708 0.930366 0.608108 0.558324C1.01351 0.186265 1.54055 0.000244141 2.18919 0.000244141C2.82626 0.000244141 3.34169 0.183397 3.73552 0.549738C4.14092 0.927515 4.34363 1.41976 4.34363 2.0265C4.34363 2.576 4.14672 3.0339 3.7529 3.40024C3.3475 3.77802 2.81467 3.9669 2.15444 3.9669H2.13707C1.49999 3.9669 0.984562 3.77802 0.590734 3.40024C0.196905 3.02246 0 2.54737 0 1.97499ZM0.225869 17.0002V5.52953H4.08301V17.0002H0.225869ZM6.22008 17.0002H10.0772V10.5952C10.0772 10.1945 10.1236 9.8854 10.2162 9.6679C10.3784 9.27867 10.6245 8.94954 10.9546 8.68053C11.2847 8.4115 11.6988 8.277 12.1969 8.277C13.4942 8.277 14.1429 9.1413 14.1429 10.8699V17.0002H18V10.4235C18 8.72918 17.5946 7.44417 16.7838 6.56842C15.973 5.69266 14.9016 5.25478 13.5695 5.25478C12.0753 5.25478 10.9112 5.89013 10.0772 7.16084V7.19518H10.0598L10.0772 7.16084V5.52953H6.22008C6.24324 5.89585 6.25483 7.0349 6.25483 8.94669C6.25483 10.8585 6.24324 13.543 6.22008 17.0002Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                        className={"w-html-embed w-icon"}/>
                                                </Link>
                                            </Box>
                                        </Fragment_1>
                                    </Slot>
                                </Box>
                            </CollapsibleContent>
                        </Collapsible>
                    </Box>
                </Fragment_1>
            </Slot>
            <Box
                tag={"main"}
                className={"w-box"}>
                <Box
                    tag={"section"}
                    className={"w-box w-section-hero"}>
                    <Box
                        className={"w-box w-container-2"}>
                        <Box
                            className={"w-box w-content"}>
                            <Heading
                                className={"w-heading w-heading-2"}>
                                {"Brandon"}
                                <br/>
                                {"Rivera-Melo"}
                            </Heading>
                            <Box
                                className={"w-box w-image-mobile"}>
                                <Slot>
                                    <Fragment_1>
                                        <Image
                                            src={"/assets/Brandon_Rivera-Melo_MBA_Headshot_BMvRdrQGNGuNm1ChS2-RI.jpg"}
                                            width={1280}
                                            height={1600}
                                            alt={"Picture of me"}
                                            loading={"eager"}
                                            className={"w-image w-image-1"}/>
                                    </Fragment_1>
                                </Slot>
                            </Box>
                            <Paragraph
                                className={"w-paragraph w-paragraph-2"}>
                                {"Healing through playful design"}
                                {""}
                                <br/>
                                {""}
                                <Italic
                                    className={"w-italic-text"}>
                                    {"and science"}
                                </Italic>
                            </Paragraph>
                            <Link
                                className={"w-link w-link-5"}>
                                <Text
                                    tag={"span"}
                                    className={"w-text"}>
                                    {"Let’s get started"}
                                </Text>
                                <HtmlEmbed
                                    code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                    className={"w-html-embed w-icon-1"}/>
                            </Link>
                        </Box>
                        <Box
                            className={"w-box w-image-desktop"}>
                            <Slot>
                                <Fragment_1>
                                    <Image
                                        src={"/assets/Brandon_Rivera-Melo_MBA_Headshot_BMvRdrQGNGuNm1ChS2-RI.jpg"}
                                        width={1280}
                                        height={1600}
                                        alt={"Picture of me"}
                                        loading={"eager"}
                                        className={"w-image w-image-1"}/>
                                </Fragment_1>
                            </Slot>
                        </Box>
                    </Box>
                </Box>
                <Box
                    tag={"section"}
                    id={"casestudies"}
                    className={"w-box w-section-logos"}>
                    <Box
                        className={"w-box w-container-3"}>
                        <Heading
                            tag={"h2"}
                            className={"w-heading w-heading-3"}>
                            {"Worked with"}
                        </Heading>
                        <Box
                            className={"w-box w-logos"}>
                            <Image
                                src={"/assets/uhealth-w_twraifeTCxEmI0YnP6ZDx.png"}
                                width={554}
                                height={148}
                                alt={"Clickup Logo"}
                                loading={"eager"}
                                className={"w-image w-logo"}/>
                            <Image
                                src={"/assets/gapplab_Ab3tXVWSgH2dKROEBCqZl.png"}
                                width={585}
                                height={212}
                                alt={"Clickup Logo"}
                                loading={"eager"}
                                className={"w-image w-logo-3"}/>
                            <Image
                                src={"/assets/Age-of-Learning_rznxkAJa6ZhsJLXLseRJe.png"}
                                width={2152}
                                height={533}
                                alt={"Dropbox Logo"}
                                loading={"eager"}
                                className={"w-image w-logo-1"}/>
                            <Image
                                src={"/assets/dfa-w_ySgVsGMS9OQQTD_J6EADg.png"}
                                width={1000}
                                height={1120}
                                alt={"Paychex Logo"}
                                loading={"eager"}
                                className={"w-image w-logo-2"}/>
                        </Box>
                    </Box>
                </Box>
                <Box
                    tag={"section"}
                    id={"casestudies"}
                    className={"w-box w-section-skills"}>
                    <Box
                        className={"w-box w-container-7"}>
                        <Heading
                            className={"w-heading w-heading-11"}>
                            {"Skills"}
                        </Heading>
                        <HtmlEmbed
                            clientOnly={true}
                            executeScriptOnCanvas={true}
                            code={"<style>\n  .stat-graph {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n\n  .categories {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: nowrap;\n  }\n\n  .category {\n    flex: 1;\n    margin: 0 10px;\n    text-align: center;\n  }\n\n  .category h2 {\n    font-size: 14px;\n    font-weight: bold;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n  }\n\n  .semi-circular-bar {\n    width: 120px;\n    height: 60px;\n    border-radius: 60px 60px 0 0;\n    overflow: hidden;\n    margin: 0 auto;\n    position: relative;\n    background: conic-gradient(lightgray 100%, lightgray 100%);\n    clip-path: inset(0px 0px 50% 0px);\n  }\n\n  .semi-circular-bar .semi-circular-value {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    top: 50%;\n    transform: translateY(-50%);\n    font-weight: bold;\n    font-size: 16px;\n  }\n\n  .stat {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n  }\n\n  .icon {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n\n  .stat-bar {\n    flex: 1;\n    height: 12px;\n    background-color: lightgray;\n    position: relative;\n    overflow: hidden;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n\n  .progress {\n    height: 100%;\n    transition: width 3s;\n  }\n\n  .stat-value {\n    margin-left: 10px;\n    width: 30px;\n  }\n</style>\n\n<div class=\"stat-graph\">\n  <button id=\"toggleButton\">Toggle: Stats</button>\n  <div id=\"categories\"></div>\n</div>\n\n<script>\n  const statsData = [\n    {\n      category: \"Game Development\",\n      stats: [\n        { name: \"Unity\", stat: 85, year: 2014, src: \"unity.png\" },\n        { name: \"C#\", stat: 90, year: 2014, src: \"csharp.png\" },\n      ],\n    },\n    {\n      category: \"Cloud Services\",\n      stats: [\n        { name: \"AWS\", stat: 75, year: 2023, src: \"aws.png\" },\n        { name: \"GCP\", stat: 80, year: 2024, src: \"gcp.png\" },\n        { name: \"Linux\", stat: 85, year: 2016, src: \"linux.png\" },\n        { name: \"Docker\", stat: 85, year: 2020, src: \"docker.png\" },\n      ],\n    },\n    {\n      category: \"Web Front-end\",\n      stats: [\n        { name: \"HTML/CSS\", stat: 75, year: 2016, src: \"htmlcss.png\" },\n        { name: \"JS\", stat: 85, year: 2016, src: \"javascript.png\" },\n        { name: \"React\", stat: 75, year: 2024, src: \"react.png\" },\n        { name: \"jQuery\", stat: 85, year: 2016, src: \"jquery.png\" },\n      ],\n    },\n    {\n      category: \"Backend\",\n      stats: [\n        { name: \"Java\", stat: 85, year: 2016, src: \"java.png\" },\n        { name: \"Python\", stat: 80, year: 2024, src: \"python.png\" },\n        { name: \"Go\", stat: 65, year: 2024, src: \"go.png\" },\n        { name: \"SQL\", stat: 80, year: 2016, src: \"sql.png\" },\n        { name: \"NoSQL\", stat: 90, year: 2024, src: \"nosql.png\" },\n      ],\n    },\n    {\n      category: \"Other\",\n      stats: [\n        { name: \"C++\", stat: 70, year: 2019, src: \"cplusplus.png\" },\n        { name: \"Bash\", stat: 85, year: 2019, src: \"bash.png\" },\n        { name: \"CI/CD\", stat: 80, year: 2019, src: \"cicd.png\" },\n        { name: \"HIPAA\", stat: 90, year: 2019, src: \"hipaa.png\" },\n      ],\n    },\n    {\n      category: \"Art\",\n      stats: [\n        { name: \"Photoshop\", stat: 50, year: 2011, src: \"photoshop.png\" },\n        { name: \"Illustrator\", stat: 60, year: 2011, src: \"illustrator.png\" },\n        { name: \"Premier\", stat: 40, year: 2017, src: \"premier.png\" },\n      ],\n    },\n    {\n      category: \"Human-Centered Design\",\n      stats: [\n        { name: \"Understanding\", stat: 90, year: null, src: \"understanding.png\" },\n        { name: \"Prototyping\", stat: 95, year: null, src: \"prototyping.png\" },\n        { name: \"Storytelling\", stat: 70, year: null, src: \"storytelling.png\" },\n        { name: \"Community-Building\", stat: 30, year: null, src: \"community.png\" },\n        { name: \"Teamwork\", stat: 95, year: null, src: \"teamwork.png\" },\n      ],\n    },\n  ];\n\n  const calculateExperience = (year) => {\n    if (!year) return 0;\n    const currentYear = new Date().getFullYear();\n    return Math.round(currentYear - year);\n  };\n\n  const getBarColor = (value, isExperience = false) => {\n    if (isExperience) {\n      if (value < 3) return \"#b4233d\";\n      if (value <= 5) return \"#edb31b\";\n      return \"#12ab14\";\n    } else {\n      if (value < 60) return \"#b4233d\";\n      if (value <= 75) return \"#edb31b\";\n      return \"#12ab14\";\n    }\n  };\n\n  const renderSemiCircularBar = (value, color) => {\n    return `<div class=\"semi-circular-bar\" style=\"background: conic-gradient(${color} ${value}%, lightgray ${value}%);\">\n      <div class=\"semi-circular-value\">${value}</div>\n    </div>`;\n  };\n\n  const renderStatBar = (stat, value, color) => {\n    return `<div class=\"stat\">\n      <div class=\"stat-bar\">\n        <div class=\"progress\" data-value=\"${value}\" style=\"background-color: ${color}; width: 0;\"></div>\n      </div>\n      <span style=\"font-size: 12px; margin-bottom: 4px;\">${stat.name}</span>\n      <div class=\"stat-value\">${value}</div>\n    </div>`;\n  };\n\n  const animateBars = (categoryElement) => {\n    const bars = categoryElement.querySelectorAll(\".progress\");\n    bars.forEach((bar) => {\n      const targetWidth = parseInt(bar.getAttribute(\"data-value\"), 10);\n      let start = null;\n      const duration = 3000;\n\n      const step = (timestamp) => {\n        if (!start) start = timestamp;\n        const progress = Math.min((timestamp - start) / duration, 1);\n        bar.style.width = `${progress * targetWidth}%`;\n        const currentValue = Math.floor(progress * targetWidth);\n        bar.parentNode.nextSibling.textContent = currentValue;\n\n        if (progress < 1) {\n          requestAnimationFrame(step);\n        }\n      };\n\n      requestAnimationFrame(step);\n    });\n  };\n\n  const renderCategory = (category, isStatsView) => {\n    const total = category.stats.reduce((sum, stat) => sum + stat.stat, 0);\n    const averageStat = Math.round((1.0 * total) / category.stats.length);\n    const color = getBarColor(averageStat);\n\n    let categoryHTML = `<h2>${category.category}</h2>`;\n    categoryHTML += renderSemiCircularBar(averageStat, color);\n    category.stats.forEach((stat) => {\n      const value = isStatsView ? stat.stat : calculateExperience(stat.year);\n      const barColor = getBarColor(value, !isStatsView);\n      categoryHTML += renderStatBar(stat, value, barColor);\n    });\n\n    return categoryHTML;\n  };\n\n  const renderCategories = (isStatsView) => {\n    const categoriesElement = document.getElementById(\"categories\");\n    categoriesElement.innerHTML = \"\";\n\n    statsData.forEach((category) => {\n      const categoryElement = document.createElement(\"div\");\n      categoryElement.className = \"category\";\n      categoryElement.innerHTML = renderCategory(category, isStatsView);\n      categoriesElement.appendChild(categoryElement);\n      animateBars(categoryElement);\n    });\n  };\n\n  let isStatsView = true;\n  document.getElementById(\"toggleButton\").addEventListener(\"click\", () => {\n    isStatsView = !isStatsView;\n    document.getElementById(\"toggleButton\").textContent = `Toggle: ${isStatsView ? \"Stats\" : \"Years of Experience\"}`;\n    renderCategories(isStatsView);\n  });\n\n  renderCategories(isStatsView);\n</script>\n"}
                            className={"w-html-embed"}/>
                    </Box>
                </Box>
                <Box
                    tag={"section"}
                    id={"casestudies"}
                    className={"w-box w-section-case-studies"}>
                    <Box
                        className={"w-box w-container-4"}>
                        <Box
                            className={"w-box w-header-1"}>
                            <Heading
                                tag={"h2"}
                                className={"w-heading w-heading-4"}>
                                {"Case Studies"}
                            </Heading>
                            <Paragraph
                                className={"w-paragraph w-paragraph-3"}>
                                {"These projects highlight my technical expertise, innovation, and empathy."}
                            </Paragraph>
                        </Box>
                        <Box
                            className={"w-box w-case-studies"}>
                            <Box
                                className={"w-box w-case-study"}>
                                <Box
                                    data-ani={"slide-right"}
                                    className={"w-box w-content-1"}>
                                    <Box
                                        className={"w-box w-top"}>
                                        <Text
                                            className={"w-text w-text-2"}>
                                            {"HealthTech"}
                                        </Text>
                                        <Heading
                                            tag={"h3"}
                                            className={"w-heading w-heading-5"}>
                                            {"Tilt Tracker"}
                                        </Heading>
                                        <Paragraph
                                            className={"w-paragraph"}>
                                            {"Tilt Tracker is like Fitbit for power wheelchairs; it's an IoT sensor for people with spinal cord injury and their care teams to prevent pressure ulcers."}
                                        </Paragraph>
                                    </Box>
                                    <Box
                                        className={"w-box"}>
                                        <Link
                                            className={"w-link w-link-6"}>
                                            <Text
                                                tag={"span"}
                                                className={"w-text"}>
                                                {"View case study"}
                                            </Text>
                                            <HtmlEmbed
                                                code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                className={"w-html-embed w-icon-2"}/>
                                        </Link>
                                    </Box>
                                </Box>
                                <Box
                                    data-ani={"slide-left"}
                                    className={"w-box w-secondary"}>
                                    <Image
                                        src={"/assets/josh-tilt-2_CyadjYOz_TgISB_IAUC-6.jpg"}
                                        width={3999}
                                        height={2666}
                                        alt={"power wheelchair user"}
                                        className={"w-image w-image-2"}/>
                                </Box>
                            </Box>
                            <Box
                                className={"w-box w-case-study-1"}>
                                <Box
                                    data-ani={"slide-right"}
                                    className={"w-box w-secondary-1"}>
                                    <Image
                                        src={"/assets/abcmouse_Un_l1N89US7TJ0JTWyXsD.jpg"}
                                        width={760}
                                        height={427}
                                        alt={"abc mouse"}
                                        className={"w-image w-image-3"}/>
                                </Box>
                                <Box
                                    data-ani={"slide-left"}
                                    className={"w-box w-content-2"}>
                                    <Box
                                        className={"w-box w-top-1"}>
                                        <Text
                                            className={"w-text w-text-3"}>
                                            {"EdTech"}
                                        </Text>
                                        <Heading
                                            tag={"h3"}
                                            className={"w-heading w-heading-6"}>
                                            {"ABCmouse"}
                                        </Heading>
                                        <Paragraph
                                            className={"w-paragraph"}>
                                            {"ABCmouse is the #1 learning app for children ages 2–8, loved by kids and parents across the world."}
                                        </Paragraph>
                                    </Box>
                                    <Box
                                        className={"w-box"}>
                                        <Link
                                            className={"w-link w-link-7"}>
                                            <Text
                                                tag={"span"}
                                                className={"w-text"}>
                                                {"View case study"}
                                            </Text>
                                            <HtmlEmbed
                                                code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                className={"w-html-embed w-icon-3"}/>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                className={"w-box w-case-study-2"}>
                                <Box
                                    data-ani={"slide-right"}
                                    className={"w-box w-content-3"}>
                                    <Box
                                        className={"w-box w-top-2"}>
                                        <Text
                                            className={"w-text w-text-4"}>
                                            {"Design"}
                                        </Text>
                                        <Heading
                                            tag={"h3"}
                                            className={"w-heading w-heading-7"}>
                                            {"Design for America"}
                                        </Heading>
                                        <Paragraph
                                            className={"w-paragraph"}>
                                            {"DFA is a national network of student-led teams using human-centered design to tackle big challenges, like childhood obesity."}
                                        </Paragraph>
                                    </Box>
                                    <Box
                                        className={"w-box"}>
                                        <Link
                                            className={"w-link w-link-8"}>
                                            <Text
                                                tag={"span"}
                                                className={"w-text"}>
                                                {"View case study"}
                                            </Text>
                                            <HtmlEmbed
                                                code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                className={"w-html-embed w-icon-4"}/>
                                        </Link>
                                    </Box>
                                </Box>
                                <Box
                                    data-ani={"slide-left"}
                                    className={"w-box w-secondary-2"}>
                                    <Image
                                        src={"/assets/FruitBuddiKid_QFffZvqphT887REdEelFV.jpg"}
                                        width={463}
                                        height={347}
                                        alt={"testing fruit buddi"}
                                        className={"w-image w-image-4"}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    tag={"section"}
                    id={"testimonials"}
                    className={"w-box w-section-testimonials"}>
                    <Box
                        className={"w-box w-container-5"}>
                        <Box
                            className={"w-box w-header-2"}>
                            <Link
                                href={"https://www.linkedin.com/in/briveramelo/details/recommendations/?detailScreenTabIndex=0"}
                                target={"_self"}
                                className={"w-link w-link-9"}>
                                {"Testimonials"}
                            </Link>
                            <Paragraph
                                className={"w-paragraph w-paragraph-4"}>
                                {"I care about the quality of my work and the teams I support, but you should hear it from them."}
                            </Paragraph>
                        </Box>
                        <Box
                            data-ani-children={"true"}
                            data-ani-progress={"slide-up"}
                            className={"w-box w-testimonials"}>
                            <Box
                                className={"w-box w-testimonial-3"}>
                                <Paragraph
                                    className={"w-paragraph w-quote-3"}>
                                    {"Brandon is "}
                                    <Bold
                                        className={"w-bold-text"}>
                                        {"hard-working, motivated, and passionate"}
                                    </Bold>
                                    {" about the projects he works on. I had the pleasure of working with Brandon on a project, because of his "}
                                    <Bold
                                        className={"w-bold-text"}>
                                        {"expertise, commitment, and work ethic"}
                                    </Bold>
                                    {" we were able to create a "}
                                    <Bold
                                        className={"w-bold-text"}>
                                        {"high quality and engaging game"}
                                    </Bold>
                                    {" in under three weeks. I am confident that Brandon will be an asset to any team he works on. "}
                                    <Bold
                                        className={"w-bold-text"}>
                                        {"I give him my highest recommendation without reservation."}
                                    </Bold>
                                </Paragraph>
                                <Box
                                    className={"w-box w-person-3"}>
                                    <Image
                                        src={"/assets/josh-levenson_PDN6BbxO6gDEQqXWuuPSL.jpeg"}
                                        width={200}
                                        height={200}
                                        alt={"Picture of client"}
                                        className={"w-image w-picture-3"}/>
                                    <Text
                                        className={"w-text w-name-3"}>
                                        {"Joshua Levenson"}
                                    </Text>
                                    <Text
                                        className={"w-text w-title"}>
                                        {"Web Developer"}
                                    </Text>
                                    <Text
                                        className={"w-text w-company"}>
                                        {"Charter School"}
                                    </Text>
                                </Box>
                                <Text
                                    className={"w-text w-mark-3"}>
                                    {"“"}
                                </Text>
                            </Box>
                            <Box
                                className={"w-box w-testimonial"}>
                                <Paragraph
                                    className={"w-paragraph w-quote"}>
                                    {"... He has a knack of approaching problems correctly and developing elegant solutions, all in a commendably short amount of time. "}
                                    <Bold
                                        className={"w-bold-text"}>
                                        {"He voices his opinions humbly and clearly and is extremely receptive of suggestions from other team members"}
                                    </Bold>
                                    {". Not just programming, Brandon puts a life into the team, which promotes a healthy work environment. It was a pleasure working with him."}
                                </Paragraph>
                                <Box
                                    className={"w-box w-person"}>
                                    <Image
                                        src={"/assets/andy_dJeUHV2Ht2KJjHQoDyuOR.jpeg"}
                                        width={200}
                                        height={200}
                                        alt={"Picture of client"}
                                        className={"w-image w-picture"}/>
                                    <Text
                                        className={"w-text w-name"}>
                                        {"Abhinandan Sain"}
                                    </Text>
                                    <Text
                                        className={"w-text w-title-1"}>
                                        {"Senior Software Engineering Manager"}
                                    </Text>
                                    <Text
                                        className={"w-text w-company-1"}>
                                        {"Collins Aerospace"}
                                    </Text>
                                </Box>
                                <Text
                                    className={"w-text w-mark"}>
                                    {"“"}
                                </Text>
                            </Box>
                            <Box
                                className={"w-box w-testimonial-1"}>
                                <Paragraph
                                    className={"w-paragraph w-quote-1"}>
                                    <Text
                                        className={"w-text w-mark-2"}>
                                        {"“"}
                                    </Text>
                                    <Text
                                        tag={"span"}
                                        className={"w-text"}>
                                        {"You won’t meet a more "}
                                        <Bold
                                            className={"w-bold-text"}>
                                            {"hard-working, passionate"}
                                        </Bold>
                                        {" individual than Brandon... "}
                                        <Bold
                                            className={"w-bold-text"}>
                                            {"the team as a whole was better for having him around"}
                                        </Bold>
                                        {". He was also always "}
                                        <Bold
                                            className={"w-bold-text"}>
                                            {"very open to critique"}
                                        </Bold>
                                        {" and constantly sought to better himself as well as the project. Anyone would be lucky to have Brandon as a part of their team and I hope to have the opportunity to work with him again..."}
                                    </Text>
                                </Paragraph>
                                <Box
                                    className={"w-box w-person-1"}>
                                    <Image
                                        src={"/assets/laurenmee_eEYkuJcOm0P8qemDJABwz.jpeg"}
                                        width={200}
                                        height={200}
                                        alt={"Picture of client"}
                                        className={"w-image w-picture-1"}/>
                                    <Text
                                        className={"w-text w-name-1"}>
                                        {"Lauren Mee"}
                                    </Text>
                                    <Text
                                        className={"w-text w-title-2"}>
                                        {"Senior Writer"}
                                    </Text>
                                    <Text
                                        className={"w-text w-company-2"}>
                                        {"Insomniac Games"}
                                    </Text>
                                </Box>
                            </Box>
                            <Box
                                className={"w-box w-testimonial-2"}>
                                <Paragraph
                                    className={"w-paragraph w-quote-2"}>
                                    <Bold
                                        className={"w-bold-text"}>
                                        {"Brandon is a fantastic engineer. He works great in a team setting and makes sure that everyone’s voice is heard."}
                                    </Bold>
                                    {" ... Brandon is willing to listen to criticism and gives his own honest feedback. ... He will put in all of his effort to make sure the project he's working on is great. I would be thrilled to have the opportunity to work with Brandon again. "}
                                </Paragraph>
                                <Box
                                    className={"w-box w-person-2"}>
                                    <Image
                                        src={"/assets/alanna_gyT7tErT5MfCM1xVzw5Yv.jpeg"}
                                        width={200}
                                        height={200}
                                        alt={"Picture of client"}
                                        className={"w-image w-picture-2"}/>
                                    <Text
                                        className={"w-text w-name-2"}>
                                        {"Alanna Carrol"}
                                    </Text>
                                    <Text
                                        className={"w-text w-title-3"}>
                                        {"Senior Writer"}
                                    </Text>
                                    <Text
                                        className={"w-text w-company-3"}>
                                        {"Ripple Effect"}
                                    </Text>
                                </Box>
                                <Text
                                    className={"w-text w-mark-1"}>
                                    {"“"}
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    tag={"section"}
                    id={"projects"}
                    className={"w-box w-section-projects"}>
                    <Box
                        className={"w-box w-container-6"}>
                        <Box
                            className={"w-box w-header-3"}>
                            <Heading
                                tag={"h2"}
                                className={"w-heading w-heading-8"}>
                                {"Recent Work"}
                            </Heading>
                            <Paragraph
                                className={"w-paragraph w-paragraph-5"}>
                                {"Innovative technology and a love of learning go hand-in-hand"}
                            </Paragraph>
                        </Box>
                        <Box
                            data-ani-children={"true"}
                            data-ani-progress={"slide-up"}
                            className={"w-box w-projects"}>
                            <Box
                                className={"w-box w-project"}>
                                <Box
                                    className={"w-box w-secondary-3"}>
                                    <Image
                                        src={"/assets/pessimistic-night_7xE-YHJLFyuFgT_pzuSoK.jpg"}
                                        width={935}
                                        height={737}
                                        alt={"Laptop on desk"}
                                        className={"w-image w-image-5"}/>
                                </Box>
                                <Box
                                    className={"w-box w-content-4"}>
                                    <Box
                                        className={"w-box w-top-3"}>
                                        <Heading
                                            tag={"h3"}
                                            className={"w-heading w-heading-9"}>
                                            {"The Pocket Optimist"}
                                        </Heading>
                                        <Paragraph
                                            className={"w-paragraph"}>
                                            {"Your internal monologue determines much of your success in life."}
                                            {""}
                                            <br/>
                                            {""}
                                            {"Bring a therapy transcript or a journal entry, and try an experimental AI demo to see what this means for you."}
                                        </Paragraph>
                                    </Box>
                                    <Box
                                        className={"w-box"}>
                                        <Link
                                            className={"w-link w-link-10"}>
                                            <Text
                                                tag={"span"}
                                                className={"w-text"}>
                                                {"Learn more"}
                                            </Text>
                                            <HtmlEmbed
                                                code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                className={"w-html-embed w-icon-5"}/>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                className={"w-box w-project-1"}>
                                <Box
                                    className={"w-box w-secondary-4"}>
                                    <Image
                                        src={"/assets/DigitalHealth4x3_zuW_r0SW4ZGVQQHYVeG8Z.jpg"}
                                        width={2778}
                                        height={2084}
                                        alt={"Laptop on desk"}
                                        className={"w-image w-image-6"}/>
                                </Box>
                                <Box
                                    className={"w-box w-content-5"}>
                                    <Box
                                        className={"w-box w-top-4"}>
                                        <Heading
                                            tag={"h3"}
                                            className={"w-heading w-heading-10"}>
                                            {"SmartChart"}
                                        </Heading>
                                        <Paragraph
                                            className={"w-paragraph"}>
                                            {"For small clinics, insurance reimbursement piles on admin work. See how SmartChart's AI can do the heavy lifting."}
                                        </Paragraph>
                                    </Box>
                                    <Box
                                        className={"w-box"}>
                                        <Link
                                            className={"w-link w-link-11"}>
                                            <Text
                                                tag={"span"}
                                                className={"w-text"}>
                                                {"Learn more"}
                                            </Text>
                                            <HtmlEmbed
                                                code={"<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 6 11\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M5.63335 4.87364L1.51379 0.759206C1.16776 0.413598 0.605566 0.413598 0.259528 0.759206C-0.0865095 1.10481 -0.0865095 1.66631 0.259528 2.01191L3.75196 5.5L0.259528 8.9881C-0.0865095 9.3337 -0.0865095 9.8952 0.259528 10.2408C0.432545 10.4136 0.65957 10.5 0.886652 10.5C1.11373 10.5 1.34078 10.4136 1.51378 10.2408L5.63333 6.12637C5.97937 5.78076 5.97937 5.21927 5.63333 4.87366L5.63335 4.87364Z\" fill=\"currentColor\"></path>\n</svg>\n"}
                                                className={"w-html-embed w-icon-6"}/>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Slot>
                <Fragment_1>
                    <Box
                        tag={"footer"}
                        id={"contact"}
                        className={"w-box w-footer"}>
                        <Box
                            className={"w-box w-container"}>
                            <Box
                                className={"w-box w-header"}>
                                <Heading
                                    tag={"h2"}
                                    className={"w-heading w-heading-1"}>
                                    {"Your Move"}
                                </Heading>
                                <Paragraph
                                    className={"w-paragraph w-paragraph-1"}>
                                    {"No smoke bombs here - just sharp solutions."}
                                    {""}
                                    <br/>
                                    {""}
                                    {""}
                                    <br/>
                                    {""}
                                    <RichTextLink
                                        href={"mailto:hi@brm.ninja?subject=Introduction"}
                                        className={"w-rich-text-link w-rich-text-link-1"}>
                                        {"hi@brm.ninja"}
                                    </RichTextLink>
                                </Paragraph>
                            </Box>
                        </Box>
                        <Box
                            className={"w-box w-bottom"}>
                            <Box
                                className={"w-box w-container-1"}>
                                <HtmlEmbed
                                    code={"<style>\n  .heart {\n    font-size: 45px;\n    animation: cardiacCycle 0.5s linear 1;\n  }\n  @keyframes cardiacCycle {\n    0% {\n      transform: scale(1); /* Resting size */\n    }\n    14.53% {\n      transform: scale(1.05); /* P wave peak */\n      transition-timing-function: ease-in-out;\n    }\n    24.44% {\n      transform: scale(1); /* P wave end */\n    }\n    38.29% {\n      transform: scale(1); /* Q wave start */\n    }\n    43.25% {\n      transform: scale(0.9); /* Q wave */\n    }\n    47.69% {\n      transform: scale(1.5); /* R wave */\n    }\n    53.16% {\n      transform: scale(0.85); /* S wave */\n    }\n    57.44% {\n      transform: scale(1); /* S wave end */\n    }\n    76.24% {\n      transform: scale(1); /* T wave start */\n    }\n    90.09% {\n      transform: scale(1.15); /* T wave peak */\n      transition-timing-function: ease-in-out;\n    }\n    100% {\n      transform: scale(1); /* T wave end */\n    }\n  }\n</style>\n<script type=\"module\">\n  const heart = document.getElementById(\"heart\");\n  const fixedAnimationSec = 0.5;\n  let mousePosition = { x: 0, y: 0 }; // Global mouse position\n\n  // Update global mouse position on mousemove\n  document.addEventListener(\"mousemove\", (event) => {\n    mousePosition.x = event.clientX;\n    mousePosition.y = event.clientY;\n  });\n\n  const calculatePauseDuration = function() {\n    const heartRect = heart.getBoundingClientRect();\n    const heartCenter = {\n      x: heartRect.left + heartRect.width / 2,\n      y: heartRect.top + heartRect.height / 2,\n    };\n\n    const distanceToHeart = Math.sqrt(\n      Math.pow(mousePosition.x - heartCenter.x, 2) +\n      Math.pow(mousePosition.y - heartCenter.y, 2)\n    );\n\n    const maxDistance = window.innerWidth;\n    const minHeartRateBPM = 35.0;\n    const maxHeartRateBPM = 50.0;\n\n    // Calculate heart rate based on distance\n    const heartRateBPM = Math.max(\n      minHeartRateBPM,\n      Math.min(\n        maxHeartRateBPM,\n        minHeartRateBPM + (maxHeartRateBPM - minHeartRateBPM) * (1 - distanceToHeart / maxDistance)\n      )\n    );\n\n    const totalCycleDurationSec = 1.0 / (heartRateBPM / 60.0);\n    const pauseDurationSec = totalCycleDurationSec - fixedAnimationSec;\n    return pauseDurationSec;\n  };\n\n  heart.addEventListener(\"animationend\", () => {\n    heart.style.animation = \"none\";\n    const pauseDurationSec = calculatePauseDuration();\n    setTimeout(() => {\n      heart.style.animation = `cardiacCycle ${fixedAnimationSec}s linear 1`;\n    }, pauseDurationSec * 1000);\n  });\n</script>\n\n"}
                                    executeScriptOnCanvas={true}
                                    clientOnly={true}
                                    className={"w-html-embed w-heartbeat"}/>
                                <Text
                                    className={"w-text w-text-1"}>
                                    {"Made with"}
                                </Text>
                                <Text
                                    id={"heart"}
                                    className={"w-text w-text-5" + " " + "heart"}>
                                    {"🫀"}
                                </Text>
                                <Text
                                    className={"w-text w-text-6"}>
                                    {"and"}
                                </Text>
                                <Box
                                    className={"w-box w-box-1"}>
                                    <HtmlEmbed
                                        code={"<div class=\"steam-container\">\n    <div class=\"steam\"></div>\n    <div class=\"steam flipped\"></div>\n    <div class=\"steam\"></div>\n</div>\n\n<style>\n  .steam-container {\n    position: absolute;\n    top: -35px;\n    left: 23px;\n    width: 0; /* Ensures steam elements overlap */\n    height: 0; /* Ensures steam elements overlap */\n    z-index: 1;\n  }\n\n  .steam {\n    position: absolute; /* Allows overlapping in the same space */\n    width: 4px;\n    height: 33px;\n    background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%);\n    border-radius: 50%;\n    opacity: 0; /* Added initial opacity */\n  }\n</style>\n\n<script>\n  const xAmpPx = 4; // Amplitude of X-axis movement in pixels\n  const maxYPx = -60; // Maximum Y-axis movement in pixels\n\n  function animatePuff(element, durationMs) {\n    // Reset state\n    element.style.transform = `translate(0px, 0px)`;\n    element.style.opacity = \"0\";\n\n    const startTimeMs = performance.now();\n    function frame(currentTimeMs) {\n      const elapsedTimeMs = currentTimeMs - startTimeMs;\n      const progressFraction = elapsedTimeMs / durationMs;\n\n      if (progressFraction < 1) {\n        // Animate X (sine wave)\n        const xPositionPx = Math.sin(progressFraction * Math.PI * 2) * xAmpPx;\n        const adjustedXPositionPx = element.classList.contains(\"flipped\") ? -xPositionPx : xPositionPx;\n\n        // Animate Y (smooth start and linear continuation)\n        const yPositionPx = maxYPx * (progressFraction < 0.5 ? Math.pow(progressFraction * 2, 2) / 2 : progressFraction);\n\n        // Animate Opacity (ease-in-out)\n        let opacityFraction = 0;\n        if (progressFraction < 0.5) {\n          opacityFraction = progressFraction * 2; // Ease in\n        } else {\n          opacityFraction = (1 - progressFraction) * 2; // Ease out\n        }\n\n        // Apply styles\n        element.style.transform = `translate(${adjustedXPositionPx}px, ${yPositionPx}px)`;\n        element.style.opacity = opacityFraction;\n\n        requestAnimationFrame(frame);\n      } else {\n        // Restart animation after it finishes\n        animatePuff(element, durationMs);\n      }\n    }\n    requestAnimationFrame(frame);\n  }\n\n  document.querySelectorAll(\".steam\").forEach((steam, index) => {\n    setTimeout(() => animatePuff(steam, 6000), index * 2000);\n  });\n</script>\n"}
                                        executeScriptOnCanvas={true}
                                        clientOnly={true}
                                        className={"w-html-embed w-steam"}/>
                                    <Image
                                        src={"/assets/coffee_mOZQZnYAZuip3tsjxsxBV.png"}
                                        width={50}
                                        height={50}
                                        loading={"lazy"}
                                        className={"w-image w-cofee"}/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Slot>
                        <Fragment_1>
                            <HtmlEmbed
                                code={"<script>(function(factory){if(typeof define===\"function\"&&define.amd){define(factory)}else if(typeof module!==\"undefined\"&&module.exports){module.exports=factory()}else{window.enterView=factory.call(this)}})((()=>{const lib=({selector:selector,enter:enter=(()=>{}),exit:exit=(()=>{}),progress:progress=(()=>{}),offset:offset=0,once:once=false})=>{let raf=null;let ticking=false;let elements=[];let height=0;function setupRaf(){raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return setTimeout(callback,1e3/60)}}function getOffsetHeight(){if(offset&&typeof offset===\"number\"){const fraction=Math.min(Math.max(0,offset),1);return height-fraction*height}return height}function updateHeight(){const cH=document.documentElement.clientHeight;const wH=window.innerHeight||0;height=Math.max(cH,wH)}function updateScroll(){ticking=false;const targetFromTop=getOffsetHeight();elements=elements.filter((el=>{const{top:top,bottom:bottom,height:height}=el.getBoundingClientRect();const entered=top<targetFromTop;const exited=bottom<targetFromTop;if(entered&&!el.__ev_entered){enter(el);el.__ev_progress=0;progress(el,el.__ev_progress);if(once)return false}else if(!entered&&el.__ev_entered){el.__ev_progress=0;progress(el,el.__ev_progress);exit(el)}if(entered&&!exited){const delta=(targetFromTop-top)/height;el.__ev_progress=Math.min(1,Math.max(0,delta));progress(el,el.__ev_progress)}if(entered&&exited&&el.__ev_progress!==1){el.__ev_progress=1;progress(el,el.__ev_progress)}el.__ev_entered=entered;return true}));if(!elements.length){window.removeEventListener(\"scroll\",onScroll,true);window.removeEventListener(\"resize\",onResize,true);window.removeEventListener(\"load\",onLoad,true)}}function onScroll(){if(!ticking){ticking=true;raf(updateScroll)}}function onResize(){updateHeight();updateScroll()}function onLoad(){updateHeight();updateScroll()}function selectionToArray(selection){const len=selection.length;const result=[];for(let i=0;i<len;i+=1){result.push(selection[i])}return result}function selectAll(selector,parent=document){if(typeof selector===\"string\"){return selectionToArray(parent.querySelectorAll(selector))}else if(selector instanceof NodeList){return selectionToArray(selector)}else if(selector instanceof Array){return selector}}function setupElements(){elements=selectAll(selector)}function setupEvents(){window.addEventListener(\"resize\",onResize,true);window.addEventListener(\"scroll\",onScroll,true);window.addEventListener(\"load\",onLoad,true);onResize()}function init(){if(!selector){console.error(\"must pass selector\");return false}setupElements();if(!elements||!elements.length){console.error(\"no els found\");return false}setupRaf();setupEvents();updateScroll()}init()};return lib}));</script>"}
                                executeScriptOnCanvas={true}
                                clientOnly={true}
                                className={"w-html-embed"}/>
                            <HtmlEmbed
                                code={"<style>\n:root {\n  --ani-duration: var(--duration-default, .2s);\n  --ani-delay: 0s;\n  --ani-slide-offset: 20%;\n  --ani-zoom-in-scale: 1;\n  --ani-zoom-out-scale: .85;\n  --ani-flip-rotate: 30deg;\n  --ani-easing: var(--easing-default, ease);\n  --ani-fill-mode: forwards;\n}\n[data-ani]:not([data-ani-children]),[data-ani-children]:not([data-ani-progress])>*{animation-duration:var(--ani-duration);animation-delay:var(--ani-delay);animation-timing-function:var(--ani-easing);animation-fill-mode:var(--ani-fill-mode);opacity:0}[data-ani-progress]:not([data-ani-children]),[data-ani-children]:not([data-ani])>*{transition-property:opacity,transform;transition-duration:var(--ani-duration);transition-timing-function:var(--ani-easing);opacity:0}\n@keyframes fadeIn{from{opacity:0}\nto{opacity:1}}\n@keyframes fadeOut{from{opacity:1}\nto{opacity:0}}[data-ani-children][data-ani='fade']>.in,[data-ani='fade']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:fadeIn}[data-ani-children][data-ani='fade']>.out,[data-ani='fade']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:fadeOut}\n@keyframes slideIn{from{opacity:0;translate:var(--ani-slide-transform)}\nto{opacity:1;translate:none}}\n@keyframes slideOut{from{opacity:1;translate:none}\nto{opacity:0;translate:var(--ani-slide-transform)}}[data-ani-children][data-ani|='slide']>.in,[data-ani|='slide']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:slideIn}[data-ani-children][data-ani|='slide']>.out,[data-ani|='slide']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:slideOut}[data-ani='slide-up']{--ani-slide-transform:0 var(--ani-slide-offset)}[data-ani='slide-down']{--ani-slide-transform:0 calc(-1*var(--ani-slide-offset))}[data-ani='slide-left']{--ani-slide-transform:var(--ani-slide-offset)}[data-ani='slide-right']{--ani-slide-transform:calc(-1*var(--ani-slide-offset))}\n@keyframes zoomIn{from{opacity:0;scale:var(--ani-zoom-out-scale)}\nto{opacity:1;scale:1}}\n@keyframes zoomOut{from{opacity:1;scale:1}\nto{opacity:0;scale:var(--ani-zoom-in-scale)}}[data-ani-children][data-ani='zoom']>.in,[data-ani|='zoom']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:zoomIn}[data-ani-children][data-ani='zoom']>.out,[data-ani|='zoom']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:zoomOut}[data-ani-children][data-ani-progress='zoom']>*,[data-ani-progress='zoom']:not([data-ani-children]){transform:scale(var(--ani-zoom-out-scale))}\n@keyframes flipInY{from{rotate:y var(--ani-flip-rotate);perspective:2000px;opacity:0}\nto{rotate:y 0;opacity:1}}\n@keyframes flipOutY{from{rotate:y 0;opacity:1}\nto{perspective:2000px;rotate:y var(--ani-flip-rotate);opacity:0}}\n@keyframes flipInX{from{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}\nto{rotate:x 0;opacity:1}}\n@keyframes flipOutX{from{rotate:x 0;opacity:1}\nto{perspective:2000px;rotate:x var(--ani-flip-rotate);opacity:0}}[data-ani-children][data-ani='flip-y']>.in,[data-ani='flip-y']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInY}[data-ani-children][data-ani='flip-x']>.in,[data-ani='flip-x']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation-name:flipInX}[data-ani-children][data-ani='flip-y']>.out,[data-ani='flip-y']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutY}[data-ani-children][data-ani='flip-x']>.out,[data-ani='flip-x']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation-name:flipOutX}\n@keyframes expandDown{from{height:0}\nto{height:var(--newHeight)}}\n@keyframes expandUp{from{height:var(--newHeight)}\nto{height:0}}[data-ani='expand'],[data-ani='expand'][data-state='open'],[data-ani='expand'].in{--newHeight:var(--custom-height,var(--radix-accordion-content-height,var(--radix-collapsible-content-height,100%)));overflow:hidden;opacity:1}[data-ani-children][data-ani='expand']>.in,[data-ani='expand']:where(.in:not([data-state]),[data-state$='open'],[data-state='active']){animation:expandDown var(--ani-duration)var(--ani-easing)}[data-ani-children][data-ani='expand']>.out,[data-ani='expand']:where(.out:not([data-state]),[data-state='closed'],[data-state='inactive']){animation:expandUp var(--ani-duration)var(--ani-easing)}\n@media(prefers-reduced-motion:reduce){[data-ani]:not([data-ani-children]),[data-ani-progress]:not([data-ani-children]),[data-ani-children]>*{opacity:1;transform:none;animation:none;rotate:none;scale:none;translate:none}}\n</style>"}
                                className={"w-html-embed"}/>
                            <HtmlEmbed
                                code={"<script type=\"module\">\nconst config = {\n\tintersectionOffset: 0.2,\n\tintersectionOnce: true,\n\tprogressOffset: 0,\n\tprogressOnce: false,\n};\nfunction e({trigger:e,selector:r,offset:n,once:s}){const a=\"progress\"===e;return enterView({selector:r,enter:e=>!a&&t(e,\"in\",\"out\"),exit:e=>!a&&t(e,\"out\",\"in\"),progress:(e,t)=>a&&function(e,t){e.style.opacity=t,e.style.transform=function(e,t){const r=e.parentElement,n=r&&r.hasAttribute(\"data-ani-progress\")?r.getAttribute(\"data-ani-progress\"):e.getAttribute(\"data-ani-progress\"),s=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-slide-offset\"))||0,a=parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-flip-rotate\"))||0,o=1-(1-t)*(1-parseFloat(getComputedStyle(e).getPropertyValue(\"--ani-zoom-out-scale\"))||1);switch(n){case\"slide-up\":return`translateY(${(1-t)*s}px)`;case\"slide-down\":return`translateY(-${(1-t)*s}px)`;case\"slide-left\":return`translateX(${(1-t)*s}px)`;case\"slide-right\":return`translateX(-${(1-t)*s}px)`;case\"flip-x\":return`rotateX(${(1-t)*a}deg)`;case\"flip-y\":return`rotateY(${(1-t)*a}deg)`;case\"zoom\":return`scale(${o})`;default:return\"none\"}}(e,t)}(e,t),offset:n,once:s})}function t(e,t,r){e.classList.add(t),e.classList.remove(r)}function r(e,t){const r=`[${e}]${t?'[data-ani-children=\"true\"] > *':':not([data-ani-children=\"true\"])'}`;return Array.from(document.querySelectorAll(r))}const n=[...r(\"data-ani\"),...r(\"data-ani\",!0)],s=[...r(\"data-ani-progress\"),...r(\"data-ani-progress\",!0)];n.length&&e({trigger:\"intersection\",selector:n,offset:config.intersectionOffset,once:config.intersectionOnce}),s.length&&e({trigger:\"progress\",selector:s,offset:config.progressOffset,once:config.progressOnce});\n</script>"}
                                executeScriptOnCanvas={true}
                                clientOnly={true}
                                className={"w-html-embed"}/>
                        </Fragment_1>
                    </Slot>
                </Fragment_1>
            </Slot>
        </Box>
    </Body>
}


export {Page}
    