import ImageCard from "./ImageCard"
import SectionContent from "./SectionContent"

const Section1 = ({ data, handleAnchorClick }) => {
    const acf = data[0]?.acf

    return (
        <section id="section1" className="px-6 py-16 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                <ImageCard src={acf?.section_1_image_1?.url} alt={acf?.section_1_image_1?.name} />

                <div className="flex flex-col justify-between h-full">
                    <ImageCard src={acf?.section_1_image_2?.url} alt={acf?.section_1_image_2?.name} />
                    <ImageCard src={acf?.section_1_image_3?.url} alt={acf?.section_1_image_3?.name} className="mt-auto" />
                </div>

                <SectionContent
                    title={acf?.section_1_title.toUpperCase()}
                    description={acf?.section_1_description}
                    linkText={acf?.section_1_note_title}
                    linkDescription={acf?.section_1_note_description}
                    handleAnchorClick={handleAnchorClick}
                />
            </div>
        </section>
    )
}

export default Section1