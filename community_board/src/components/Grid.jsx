import React from "react";
import Card from './Card';

// Import all images
import usaSwimmingLearn from '../assets/usa_swimming_learn.png';
import youTubeLearn from '../assets/youtube_learning.png';
import redCrossSwim from '../assets/red_cross_swim.png';
import danswim from '../assets/danswim.png';
import swimswam from '../assets/swimswam.jpg';
import swimmingWorld from '../assets/swimming_world.jpg';
import nyt from '../assets/nyt.jpg';
import worldAquatics from '../assets/world_aquatics.webp';
import cdc from '../assets/cdc.jpg';
import healthline from '../assets/healthline.jpg';
import swimOutlet from '../assets/swim_outlet.png';
import shaqPhelps from '../assets/shaq_phelps.webp';

const Grid = () => {
    // Group resources by category
    const learningResources = [
        {
            category: "Learning",
            title: "USA Swimming Learn to Swim",
            description: "This site provides resources for parents to help their children learn to swim",
            image: usaSwimmingLearn,
            link: "https://www.usaswimming.org/parents/learn-to-swim"
        },
        {
            category: "Learning",
            title: "Learn to Swim YouTube Playlist",
            description: "This YouTube series is a great resource for visual learners learning to swim",
            image: youTubeLearn,
            link: "https://www.youtube.com/watch?v=gh5mAtmeR3Y"
        },
        {
            category: "Learning",
            title: "Red Cross Swim Class Finder",
            description: "This site provides a directory to find Red Cross approved swim classes near you",
            image: redCrossSwim,
            link: "https://www.redcross.org/take-a-class/swimming?srsltid=AfmBOoreGO79uGYPfe_SBmjOP5batgEWc__xiKIERyoFSUJDdmm9XRFB"
        },
        {
            category: "Learning",
            title: "DanSwim Adult Beginner Guide",
            description: "This site provides a step by step guide for adult beginners to learn to swim",
            image: danswim,
            link: "https://danswim.com/complete-guide-for-adult-beginner-swimmer"
        }
    ];

    const newsResources = [
        {
            category: "News",
            title: "SwimSwam",
            description: "This popular swimming news site has a lot of great articles and information",
            image: swimswam,
            link: "https://swimswam.com/news/"
        },
        {
            category: "News",
            title: "Swimming World Magazine",
            description: "Another greate site for swimming news. Also has many great tools for swimmers",
            image: swimmingWorld,
            link: "https://www.swimmingworldmagazine.com/"
        },
        {
            category: "News",
            title: "New York Times Swimming",
            description: "A subset of the popular NYT News site focused on swimming coverage",
            image: nyt,
            link: "https://www.nytimes.com/topic/subject/swimming"
        },
        {
            category: "News",
            title: "World Aquatics",
            description: "A news outlet more focused on international aquatic events",
            image: worldAquatics,
            link: "https://www.worldaquatics.com/"
        }
    ];

    const otherResources = [
        {
            category: "Other",
            title: "CDC Swimming Guidelines",
            description: "Official guidelines for maintaining safety in the water",
            image: cdc,
            link: "https://www.cdc.gov/healthy-swimming/safety/index.html"
        },
        {
            category: "Other",
            title: "Benefits of Swimming Article",
            description: "Swimming is great for staying healthy and happy. This article gets into its numerous benefits",
            image: healthline,
            link: "https://www.healthline.com/health/benefits-of-swimming"
        },
        {
            category: "Other",
            title: "SwimOutlet",
            description: "A great place to buy all things swim, from suits to goggles to equipment and more",
            image: swimOutlet,
            link: "https://www.swimoutlet.com/collections/swim-gear-20599?srsltid=AfmBOoootZpRT1WnU-1bQHv8yUy1xuZJLB7ZwcQLixiGu-UwDnvzTaPN"
        },
        {
            category: "Other",
            title: "Phelps vs Shaq",
            description: "This is a funny video I like, where Michael Phelps races Shaq in a pool",
            image: shaqPhelps,
            link: "https://www.youtube.com/watch?v=aWJ7SmOVUO8"
        }
    ];

    const allResources = [...learningResources, ...newsResources, ...otherResources];

    return (
        <>
            <section>
                <h2>Learn to Swim</h2>
                <div className="grid-container">
                    {learningResources.map((resource, index) => (
                        <Card
                            key={`learning-${index}`}
                            category={resource.category}
                            title={resource.title}
                            description={resource.description}
                            image={resource.image}
                            link={resource.link}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <h2>Swimming News</h2>
                <div className="grid-container">
                    {newsResources.map((resource, index) => (
                        <Card
                            key={`news-${index}`}
                            category={resource.category}
                            title={resource.title}
                            description={resource.description}
                            image={resource.image}
                            link={resource.link}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <h2>Additional Resources</h2>
                <div className="grid-container">
                    {otherResources.map((resource, index) => (
                        <Card
                            key={`other-${index}`}
                            category={resource.category}
                            title={resource.title}
                            description={resource.description}
                            image={resource.image}
                            link={resource.link}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Grid;