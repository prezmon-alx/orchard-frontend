import ImageCard from "./ImageCard"
import SectionContent from "./SectionContent"

const Section1 = ({ handleAnchorClick }) =>{
    return (
        <section id="section1" className="px-6 py-16 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                <ImageCard src="/images/boiling.jpg" alt="Boiling" />

                <div className="flex flex-col justify-between h-full">
                    <ImageCard src="/images/cooking.jpg" alt="Cooking" />
                    <ImageCard src="/images/eggs.jpg" alt="Eggs" className="mt-auto" />
                </div>

                <SectionContent
                    title="WHAT DOES COOKING MEAN?"
                    description="Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg..."
                    linkText="THE PERFECT EGG"
                    linkDescription="Keep water between 67 and 68°C for a flavourful, tender yolk"
                    handleAnchorClick={handleAnchorClick}
                />
            </div>
        </section>
    )
}

export default Section1