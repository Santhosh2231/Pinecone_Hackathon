import React from 'react';
import Analyse from "../assests/Analysis.jpg";
import Protect from "../assests/protect.jpg";
import Upload from "../assests/upload.jpg";
import FAQAccordion from '../components/FAQ';
const Card = ({ imageSrc, title, desc }) => {
    return (
        <div className="bg-transparent shadow-md rounded-lg overflow-hidden h-auto my-20 flex flex-col justify-center items-center">
            <div className="md:flex md:items-center">
                <div className="md:w-1/2">
                    <img
                        className="w-48 h-48 rounded-full m-auto object-cover md:h-auto"
                        src={imageSrc}
                        alt="Card"
                    />
                </div>
                <div className="p-4 md:w-1/2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="mt-2 text-justify p-0.25 py-2 text-gray-600">{desc}</p>
                </div>
            </div>
        </div>
    );
};

const content ={
    upload : "Upload your crop images effortlessly and securely to our advanced platform. Our user-friendly interface allows you to easily submit your images, ensuring a smooth and efficient process. By uploading your crop images, you open the door to valuable insights and accurate crop disease detection. Join us in harnessing the power of technology to revolutionize your farming practices.",
    analyse: "Our cutting-edge platform utilizes innovative pinecone similarity search technology to analyze your uploaded crop images. Our advanced algorithms swiftly identify and classify crop diseases with precision and accuracy. Through detailed analysis, we provide comprehensive reports and actionable recommendations to optimize your crop management strategies. Experience the power of data-driven insights as we enable you to make informed decisions for maximizing your agricultural yield.",
    protect: "Our cutting-edge platform utilizes innovative pinecone similarity search technology to analyze your uploaded crop images. Our advanced algorithms swiftly identify and classify crop diseases with precision and accuracy. Through detailed analysis, we provide comprehensive reports and actionable recommendations to optimize your crop management strategies. Experience the power of data-driven insights as we enable you to make informed decisions for maximizing your agricultural yield."
}

const HomePage = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-transparent">
            <h1 className="text-4xl font-bold text-center mb-8">Crop Disease Detection and Precautions Recommendations</h1>
            <p className="text-lg text-center mb-8">
                Upload your crop leaf images to analyze the health of your crops and receive necessary precautions and fertilizer recommendations.
            </p>
            <div className="container mx-auto py-2">
                <div className="md:w-2/3 m-auto">
                    <Card imageSrc={Upload} title="Upload" desc={content.upload} />
                    <Card imageSrc={Analyse} title="Analyse" desc={content.analyse} />
                    <Card imageSrc={Protect} title={"Protect"} desc={content.protect} />
                </div>
            </div>
            <FAQAccordion />

        </div>
    );
};

export default HomePage;
