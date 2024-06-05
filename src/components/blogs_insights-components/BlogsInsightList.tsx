import cbnImage from "../../assets/images/cbn-project.png"
import mdgsImage from "../../assets/images/mdgs-project.png"
import amconImage from "../../assets/images/amcon-project.png"
import farmerImage from "../../assets/images/farmer-project.png"
import internalDevImage from "../../assets/images/internalDev-project.png"
import blog_articles from "./blog_articles"

const currentDate = new Date()
const formattedDate = currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
const getMatchArticle = (matchId: string)=>{
    const matchArticle = blog_articles.find((article)=>{
        if(article.id === matchId){
            return article
        } else {
            return ''
        }
    })
    return matchArticle?.doc
}

const BlogsInsightList = [
    {
        id: 'the-impact-of-internet-banking',
        title:"The Impact of Internet Banking on Profitability of Commercial Banks in Nigeria (A Case Study of Fidelity Bank Plc 2012 - 2024)",
        clientName: "Central Bank of Nigeria",
        uploadDate: formattedDate,
        url: "/blogs&insights/the-impact-of-internet-banking",
        image: cbnImage,
        doc: getMatchArticle("the-impact-of-internet-banking") as string
    },
    {
        id: "partnering-for-a-healthier-equitable-world",
        title: "Partnering for a healthier, more equitable and sustainable world: The role of entertainment",
        clientName: "United Nation",
        uploadDate: formattedDate,
        url: "/blogs&insights/partnering-for-a-healthier-equitable-world",
        image: mdgsImage,
        doc: getMatchArticle("partnering-for-a-healthier-equitable-world") as string
    },
    {
        id: "impact-credit-policy-on-nigeria-commercial-banks",
        title: "The Impact of Credit Policy on the Performance of Nigerian Commercial Banks",
        clientName: "AMCON",
        uploadDate: formattedDate,
        url: "/blogs&insights/impact-credit-policy-on-nigeria-commercial-banks",
        image: amconImage,
        doc: getMatchArticle("impact-credit-policy-on-nigeria-commercial-banks") as string
    },
    {
        id: "nirsal-nexim-south-south-export",
        title: "NIRSAL-NEXIM South-South Export Enlightment Forum Optimizer",
        clientName: "NIRSAL",
        uploadDate: formattedDate,
        url: "/blogs&insights/nirsal-nexim-south-south-export",
        image: farmerImage,
        doc: getMatchArticle("nirsal-nexim-south-south-export") as string
    },
    {
        id: "solar-technology-alternative-source-of-development-in-nigeria",
        title: "Solar Technology: An Alternative Source of Energy for National Development in Nigeria",
        clientName: "Dept. of Int. Development",
        uploadDate: formattedDate,
        url: "/blogs&insights/solar-technology-alternative-source-of-development-in-nigeria",
        image: internalDevImage,
        doc: getMatchArticle("solar-technology-alternative-source-of-development-in-nigeria") as string
    },
]

export const upcomingList = []

export default BlogsInsightList